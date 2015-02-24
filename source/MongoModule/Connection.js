/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonWriter = MongoModule.BsonWriter.BsonWriter
var BsonWriterOverflowException = MongoModule.BsonWriter.BsonWriterOverflowException
var BsonReader = MongoModule.BsonReader.BsonReader

var QueryMessage = MongoModule.Messages.QueryMessage
var InsertMessage = MongoModule.Messages.InsertMessage
var UpdateMessage = MongoModule.Messages.UpdateMessage
var DeleteMessage = MongoModule.Messages.DeleteMessage

var DocumentBsonValue = MongoModule.BsonValues.DocumentBsonValue
var ObjectIdBsonValue = MongoModule.BsonValues.ObjectIdBsonValue

var readMessage = MongoModule.Messages.Message.readMessage


ClassModule.Object.extend
(
	module,
	
	function Connection(url, credential, couldNotAuthenticateCallback, authenticatedCallback, writeConcern, sendBufferInitialSize, webSocketProtocolName)
	{
		this.super(Connection)
		
		this.writeConcern = ClassModule.default(writeConcern, module.WriteConcerns.ACKNOWLEDGED)
		
		// 128Kb
		this.sendBufferInitialSize = ClassModule.default(sendBufferInitialSize, 2 << 16)
		
		this.__webSocket = newWebSocket
		(
			this,
			url,
			ClassModule.default(webSocketProtocolName, 'binary')
		)
		
		this.__resultHandlerTuples = newResultHandlerTuples()
		this.__partialMessageBuffer = new ArrayBuffer(0)
		this.__partialMessageBufferOffset = 0
		this.__beforeOpenSendQueue = []
		
		this.maximumBatchSize = module.maximumBatchSize
		this.maximumDocumentSize = module.maximumDocumentSize
		this.maximumMessageSize = module.maximumMessageSize
		
		var self = this
		function initialiseAfterOpen()
		{
			var adminDb = new module.AdminDatabase(self)
			adminDb.isMaster(function isMasterCallback(serverType, maximumBatchSize, maximumDocumentSize, maximumMessageSize)
			{
				self.serverType = serverType
				self.maximumBatchSize = maximumBatchSize
				self.maximumDocumentSize = maximumDocumentSize
				self.maximumMessageSize = maximumMessageSize
				
				adminDb.buildInfo(function buildInfoCallback(majorVersion, minorVersion, revisionVersion)
				{
					self.majorVersion = majorVersion
					self.minorVersion = minorVersion
					self.revisionVersion = revisionVersion
					
					if (self.serverType.isReplicaSetMemberArbiter)
					{
						couldNotAuthenticateCallback(-1, 'Server Type isReplicaSetMemberArbiter')
						return
					}
					
					self.authenticate(credential, couldNotAuthenticateCallback, function interceptAuthenticationCallback(database)
					{
						database.getLastError(null, null, false, false, function getLastErrorCallback(connectionId, n, syncMillis, writtenTo, err)
						{
							self.connectionId = connectionId
							
							authenticatedCallback(database)
						})
					})
				})
			})
		}
		initialiseAfterOpen()
	},
	
	function authenticate(credential, couldNotAuthenticateCallback, authenticatedCallback)
	{
		credential.authenticate(this, couldNotAuthenticateCallback, authenticatedCallback)
	},
	
	function getLastError(database, callback)
	{
		this.writeConcern.getLastError(database, callback)
	},
	
	function __opened()
	{
		var self = this
		this.__beforeOpenSendQueue.forEach(function(tuple)
		{
			self.__write(tuple.fullCollectionName, tuple.resultHandler, tuple.message)
		})
		
		delete this.__beforeOpenSendQueue
		this.send = this.__write
	},
	
	function __write(fullCollectionName, resultHandler, message)
	{
		var bufferSize = this.sendBufferInitialSize
		var buffer
		var writer
		var messageLength
		
		do
		{
			buffer = new ArrayBuffer(bufferSize)
			writer = new BsonWriter(buffer)
			try
			{
				messageLength = message.writeBson(writer)
			}
			catch (e)
			{
				if (e instanceof BsonWriterOverflowException)
				{
					bufferSize *= 2
					continue
				}
				console.warn(e.stack)
				throw e
			}
			break
		}
		while(true)
		
		if (resultHandler !== null)
		{
			this.__resultHandlerTuples[message.requestIdInt32] =
			{
				fullCollectionName: fullCollectionName,
				resultHandler: resultHandler
			}
		}
		var actualDataToSend = buffer.slice(0, messageLength)
		
		this.__webSocket.send(actualDataToSend)
		return this
	},
	
	function __receive(arrayBufferData)
	{
		this.__partialMessageBuffer = concatenateArrayBuffers(this.__partialMessageBuffer, arrayBufferData, this.__partialMessageBufferOffset)
		this.__partialMessageBufferOffset = 0
		
		var reader = new BsonReader(this.__partialMessageBuffer)
		var message
		var resultHandler
		while(reader.hasCompleteMessageAvailable())
		{
			message = readMessage(reader)
			message.process(this, this.__resultHandlerTuples)
		}
		this.__partialMessageBufferOffset = reader.offset
	},
	
	function database(databaseName)
	{
		return new module.Database(this, databaseName)
	},
	
	function adminDatabase()
	{
		return new module.AdminDatabase(this)
	},
	
	function sendCommand(resultHandler, databaseName, unwrappedCommandDocument)
	{
		// -1 => Return no more than one document, then close the cursor
		// 0 => Database default batchSize
		// +ve => batch size
		return this.sendQuery(resultHandler, databaseName, '$cmd', false, 0, -1, null, unwrappedCommandDocument)
	},
	
	function sendQuery(resultHandler, databaseName, collectionName, isSlaveOk, numberToSkipInt32, numberToReturnInt32, returnFieldsSelectorDocument, unwrappedQueryDocument)
	{
		// same for every kind of message (eg OP_INSERT)
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0

		// happens on primary (ie READ_PREFERENCE == primary => isSlaveOk == false)
		var flagsInt32 = (isSlaveOk ? 1 << 2 : 0)
		
		return this.send
		(
			fullCollectionName,
			resultHandler,
			new QueryMessage
			(
				requestIdInt32,
				responseToInt32,
				flagsInt32,
				fullCollectionName,
				
				numberToSkipInt32,
				numberToReturnInt32,
				unwrappedQueryDocument instanceof DocumentBsonValue ? unwrappedQueryDocument : new DocumentBsonValue(unwrappedQueryDocument),
				(returnFieldsSelectorDocument === null) ? null : (returnFieldsSelectorDocument instanceof DocumentBsonValue ? returnFieldsSelectorDocument : new DocumentBsonValue(returnFieldsSelectorDocument))
			)
		)
	},
	
	// WriteConcern to apply
	
	function sendInsert(databaseName, collectionName, continueOnError, unwrappedDocuments)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = continueOnError ? 1 : 0
		
		return this.send
		(
			fullCollectionName,
			null,
			new InsertMessage
			(
				requestIdInt32,
				responseToInt32,
				flagsInt32,
				fullCollectionName,
				
				unwrappedDocuments.map(function(unwrappedDocument)
				{
					var objectId = ObjectIdBsonValue.generateNewObjectId()
					var result
					if (unwrappedDocument instanceof DocumentBsonValue)
					{
						result = unwrappedDocument
						result.value._id = objectId
					}
					else
					{
						unwrappedDocument._id = objectId
						result = new DocumentBsonValue(unwrappedDocument)
					}
					return result
				})
			)
		)
	},
	
	function sendUpdate(databaseName, collectionName, isUpsert, isMulti, unwrappedFilterDocument, unwrappedUpdateDocument)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = 0
		if (isUpsert)
		{
			flagsInt32 |= 1
		}
		if (isMulti)
		{
			flagsInt32 |= 2
		}
		
		return this.send
		(
			fullCollectionName,
			null,
			new UpdateMessage
			(
				requestIdInt32,
				responseToInt32,
				0,
				fullCollectionName,
				flagsInt32,
				
				unwrappedFilterDocument instanceof DocumentBsonValue ? unwrappedFilterDocument : new DocumentBsonValue(unwrappedFilterDocument),
				unwrappedUpdateDocument instanceof DocumentBsonValue ? unwrappedUpdateDocument : new DocumentBsonValue(unwrappedUpdateDocument)
			)
		)
	},
	
	function sendDelete(databaseName, collectionName, isSingleRemove, unwrappedFilterDocument)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = isSingleRemove ? 1 : 0
		
		return this.send
		(
			fullCollectionName,
			null,
			new DeleteMessage
			(
				requestIdInt32,
				responseToInt32,
				0,
				fullCollectionName,
				flagsInt32,
				
				unwrappedFilterDocument instanceof DocumentBsonValue ? unwrappedFilterDocument : new DocumentBsonValue(unwrappedFilterDocument)
			)
		)
	},
	
	// Replaced int __opened() with a send that just calls write
	function send(fullCollectionName, resultHandler, message)
	{
		this.__beforeOpenSendQueue.push
		({
			fullCollectionName: fullCollectionName,
			resultHandler: resultHandler,
			message: message
		})
		return this
	}
)

function concatenateArrayBuffers(buffer0, buffer1, fromOffsetBuffer0)
{
	var buffer0Length = buffer0.byteLength - fromOffsetBuffer0
	var buffer1Length = buffer1.byteLength
	var totalLength = buffer0Length + buffer1Length
	
	var concatenatedUint8Array = new Uint8Array(totalLength)
	concatenatedUint8Array.set(new Uint8Array(buffer0, fromOffsetBuffer0), 0)
	concatenatedUint8Array.set(new Uint8Array(buffer1), buffer0Length)
	return concatenatedUint8Array.buffer
}

function newWebSocket(connection, url, protocol)
{
	var webSocket = new WebSocket(url, [protocol])
	webSocket.binaryType = 'arraybuffer'
	
	webSocket.onopen = (function(connection)
	{
		// inside an event, 'this' is... the webSocket
		return function(event)
		{
			connection.__opened()
		}
	})(connection);
	
	webSocket.onmessage = (function(connection)
	{
		return function(messageEvent)
		{
			connection.__receive(messageEvent.data)
		}
	})(connection);
	
	// TODO: disconnect and reconnect, fail all existing requests with outstanding replies
	webSocket.onerror = (function(connection)
	{
		return function(event)
		{
			console.warn('Error with WebSocket')
		}
	})(connection);
	
	return webSocket
}

function newResultHandlerTuples()
{
	var handlers = []
	handlers.nextRequestIdCounter = 1
	handlers.nextRequestId = function nextRequestId()
	{
		var nextRequestId = this.nextRequestIdCounter
		this.nextRequestIdCounter += 1
		return nextRequestId
	}
	return handlers
}


