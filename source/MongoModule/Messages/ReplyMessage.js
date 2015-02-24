/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_REPLY = 1

var TemplatedException = ClassModule.TemplatedException
var GetMoreMessage = MongoModule.Messages.GetMoreMessage
var KillCursorsMessage = MongoModule.Messages.KillCursorsMessage
var DocumentBsonValue = MongoModule.BsonValues.DocumentBsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue

module.AbstractMessage.extend
(
	module,

	function ReplyMessage(requestIdInt32, responseToInt32, responseFlagsInt32, cursorIdInt64, startingFromInt32, documents)
	{
		module.guardFlagsDoesNotExceed(responseFlagsInt32, 15, 'responseFlagsInt32')
		
		this.super(ReplyMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_REPLY)
		
		this.responseFlagsInt32 = responseFlagsInt32
		this.cursorIdInt64 = cursorIdInt64
		this.startingFromInt32 = startingFromInt32
		this.documents = documents
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.responseFlagsInt32)
		writer.write(this.cursorIdInt64)
		writer.writeInt32(this.startingFromInt32)
		// numberReturnedInt32
		writer.writeInt32(this.documents.length)
		
		this.documents.forEach(function(document)
		{
			writer.write(document)
		})
	},
	
	function process(connection, resultHandlerTuples)
	{
		var resultHandlerTuple = resultHandlerTuples[this.responseToInt32]
		if (!resultHandlerTuple)
		{
			throw "No known resultHandlerTuple for responseToInt32 " + this.responseToInt32
		}
		delete resultHandlerTuples[this.responseToInt32]
		var resultHandler = resultHandlerTuple.resultHandler
		
		var moreAvailable = this.cursorIdInt64.isNotZero()
		
		var wasCursorNotFound = this.wasCursorNotFound()
		var didGetMoreOrQueryButNotCommandFail = this.didGetMoreOrQueryButNotCommandFail()
		var getMoreTuple = resultHandler.results(this.documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
		
		if (wasCursorNotFound || didGetMoreOrQueryButNotCommandFail)
		{
			if (getMoreTuple.getMore)
			{
				throw new TemplatedException("getMoreTuple.getMore was true but moreAvailable was false", {})
			}
			return
		}
		
		if (moreAvailable)
		{
			var fullCollectionName = resultHandlerTuple.fullCollectionName
			var nextRequestId = resultHandlerTuples.nextRequestId()
			if (getMoreTuple.getMore)
			{
				connection.send
				(
					fullCollectionName,
					resultHandler,
					new GetMoreMessage(nextRequestId, this.requestIdInt32, 0, resultHandlerTuple.fullCollectionName, getMoreTuple.batchSize, this.cursorIdInt64)
				)
			}
			else
			{
				connection.send
				(
					fullCollectionName,
					null, // there shouldn't be a result, I feel
					new KillCursorsMessage(nextRequestId, this.requestIdInt32, 0, [this.cursorIdInt64])
				)
			}
		}
		else
		{
			if (getMoreTuple.getMore)
			{
				throw new TemplatedException("getMoreTuple.getMore was true but moreAvailable was false", {})
			}
		}
	},
	
	function wasCursorNotFound()
	{
		return this.isResponseFlagBitSet(0)
	},
	
	function didGetMoreOrQueryButNotCommandFail()
	{
		return this.isResponseFlagBitSet(1)
	},
	
	function isShardConfigStale()
	{
		return this.isResponseFlagBitSet(2)
	},
	
	function isMongoDbAwaitCapable()
	{
		return this.isResponseFlagBitSet(3)
	},
	
	function isResponseFlagBitSet(bit)
	{
		return module.isBitSet(this.responseFlagsInt32, bit)
	}
	
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	var responseFlagsInt32 = reader.readInt32()
	var cursorIdInt64 = new Int64BsonValue(reader.readInt64())
	var startingFromInt32 = reader.readInt32()
	var numberReturnedInt32 = reader.readInt32()
	
	// read up the documents
	var documents = []
	for(var index = 0; index < numberReturnedInt32; index++)
	{
		documents.push(DocumentBsonValue.readBson(reader))
	}
	if (reader.offset != terminalOffset)
	{
		throw new module.InvalidMessageException("Expected an offset of '${terminalOffset}' but got an offset of '${offset}'", {terminalOffset: terminalOffset, offset: reader.offset})
	}
	return new module.ReplyMessage(requestId, responseToId, responseFlagsInt32, cursorIdInt64, startingFromInt32, documents)
}
