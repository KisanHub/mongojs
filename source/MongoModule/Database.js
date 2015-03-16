/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonValues = MongoModule.BsonValues
var StringBsonValue = BsonValues.StringBsonValue
var DocumentBsonValue = BsonValues.DocumentBsonValue
var Int32BsonValue = BsonValues.Int32BsonValue
var ArrayBsonValue = BsonValues.ArrayBsonValue
var DoubleBsonValue = BsonValues.DoubleBsonValue
var ObjectIdBsonValue = BsonValues.ObjectIdBsonValue
var Int64BsonValue = BsonValues.Int64BsonValue

var One = Int32BsonValue.One

var BooleanBsonValue = BsonValues.BooleanBsonValue
var bsonBoolean = BooleanBsonValue.bsonBoolean
var BsonFalse = BooleanBsonValue.BsonFalse
var BsonTrue = BooleanBsonValue.BsonTrue

var fromStrictJavascript = MongoModule.BsonValues.fromStrictJavascript

var ResultHandlers = MongoModule.ResultHandlers
var NonceCommandResultHandler = ResultHandlers.NonceCommandResultHandler
var AuthCommandResultHandler = ResultHandlers.AuthCommandResultHandler
var GetLastErrorCommandResultHandler = ResultHandlers.GetLastErrorCommandResultHandler
var VoidCommandResultHandler = ResultHandlers.VoidCommandResultHandler
var UserExistsCommandResultHandler = ResultHandlers.UserExistsCommandResultHandler
var QueryResultsHandler = ResultHandlers.QueryResultsHandler

var ToDoException = ClassModule.ToDoException

ClassModule.Object.extend
(
	module,
	
	function Database(connection, databaseName)
	{
		this.super(Database)
		this.connection = connection
		this.databaseName = databaseName
	},
	
	function collection(collectionName)
	{
		return new module.Collection(this, collectionName)
	},
	
	// For native authentication ie Mongo Challenge-Response. Mongo 3.0 has moved to ScramSha1
	// Not valid for ServerTypes.REPLICA_SET_ARBITER
	function nonce(callback)
	{
		return this.sendCommand(new NonceCommandResultHandler(callback),
		{
			getnonce: One
		})
	},
	
	// For native authentication ie Mongo Challenge-Response. Mongo 3.0 has moved to ScramSha1
	// Not valid for ServerTypes.REPLICA_SET_ARBITER
	function authFromHash(userName, authenticationHash, nonce, couldNotAuthenticateCallback, authenticatedCallback)
	{
		var key = nonce + userName + authenticationHash
		
		var hexMd5Key = MongoModule.Credentials.createKeyHash(key)
		
		return this.sendCommand(new AuthCommandResultHandler(authenticatedCallback, couldNotAuthenticateCallback, this),
		{
			authenticate: One,
			user: new StringBsonValue(userName),
			nonce: new StringBsonValue(nonce),
			key: new StringBsonValue(hexMd5Key)
		})
	},
	
	// waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning can be 0, 1, n, or 'majority'. 0 => no replication, even to self
	function getLastError(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, timeoutWaitForReplicationMilliseconds, waitForFsyncBeforeReturning, waitForJournalBeforeReturning, callback)
	{
		var command =
		{
			getLastError: One
		}
		
		if (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning && waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning !== null)
		{
			if (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning === 'majority')
			{
				command['w'] = new StringBsonValue('majority')
			}
			else
			{
				command['w'] = new Int32BsonValue(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning)
			}
			
			if (timeoutWaitForReplicationMilliseconds && timeoutWaitForReplicationMilliseconds > 0)
			{
				command['wtimeout'] = timeoutWaitForReplicationMilliseconds
			}
		}
		
		if (waitForFsyncBeforeReturning)
		{
			command['fsync'] = BsonTrue
		}
		
		if (waitForJournalBeforeReturning)
		{
			command['j'] = BsonTrue
		}
		
		return this.sendCommand(new GetLastErrorCommandResultHandler(callback), command)
	},
	
	function find(collectionName, filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
	{
		var isSlaveOk = true
		var queryDocument = {}
		queryDocument['$query'] = fromStrictJavascript(filterDocument)
		
		if (maximumExectionTimeInMilliseconds && maximumExectionTimeInMilliseconds > 0)
		{
			queryDocument['$maxTimeMS'] = Int64BsonValue.fromUnsigned32BitInteger(maximumExectionTimeInMilliseconds)
		}
		
		this.connection.sendQuery(new QueryResultsHandler(callback, batchSize, limit), this.databaseName, collectionName, isSlaveOk, skip, batchSize, returnFieldsSelectorDocument, queryDocument)
		return this
	},
	
	function insert(collectionName, continueOnError, callback, insertDocuments)
	{
		var connection = this.connection
		connection.sendInsert(this.databaseName, collectionName, continueOnError, insertDocuments)
		connection.getLastError(this, callback)
		return this
	},
	
	function update(collectionName, isUpsert, isMulti, filterDocument, callback, updateDocuments)
	{
		var connection = this.connection
		var databaseName = this.databaseName
		var self = this
		updateDocuments.forEach(function eachUpdate(updateDocument)
		{
			connection.sendUpdate(databaseName, collectionName, isUpsert, isMulti, filterDocument, updateDocument)
			connection.getLastError(self, callback)
		})
		return this
	},
	
	function deleteMatching(collectionName, isSingleRemove, callback, filterDocument)
	{
		var connection = this.connection
		connection.sendDelete(this.databaseName, collectionName, isSingleRemove, filterDocument)
		connection.getLastError(this, callback)
		return this
	},
	
	function sendCommand(resultHandler, commandDocument)
	{
		this.connection.sendCommand(resultHandler, this.databaseName, commandDocument)
		return this
	},
	
	function listCollections(callback, batchSize, limit, maximumExectionTimeInMilliseconds)
	{
		var collections = []
		var callbackTransformation = function documentToNameTransformingCallback(isErrorAndDocumentIsErrorMessage, document, isLastDocument, batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
		{
			var name = document.value.name.value
			collections.push(name)
			if (isLastDocument)
			{
				callback(collections)
				return false
			}
		}
		return this.findDocuments('system.namespaces', {}, null, callback, batchSize, limit, maximumExectionTimeInMilliseconds)
	},
	
	// 3.0
	function listCollections30(maximumExectionTimeInMilliseconds, filter, callback, batchSize, limit)
	{
		return this.sendCommand(new QueryResultsHandler(callback, batchSize, limit), this.databaseName,
		{
			listCollections: One,
			cursor: new DocumentBsonValue
			({
				// Omit this field for database default batchSize
				// cursor / batchSize seems to be a Mongo 3.0 variant
				batchSize: batchSize
			}),
			// Omit if no filter
			filter: new DocumentBsonValue(filter),
			// Omit if no maxTimeMS / < 1
			maxTimeMS: Int64BsonValue.fromUnsigned32BitInteger(maximumExectionTimeInMilliseconds),
		})
	},
	
	function userExists(userName, callback)
	{
		return this.sendCommand(new UserExistsCommandResultHandler(callback),
		{
			usersInfo: new BsonStringValue(userName)
		})
	},
	
	function createCollection(collectionName, capped, sizeInBytes, autoIndexId, maxDocuments, usePowerOfTwoSizes, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			create: new StringBsonValue(collectionName),
			capped: bsonBoolean(capped),
			size: Int64BsonValue.fromUnsigned32BitInteger(sizeInBytes),
			autoIndexId: bsonBoolean(autoIndexId),
			max: Int64BsonValue.fromUnsigned32BitInteger(maxDocuments),
			
			// default in 2.6
			usePowerOfTwoSizes: bsonBoolean(usePowerOfTwoSizes),
			/* 
				Unspecified - collection creation is deferred
				storageEngine: storageEngine
			*/
		})
	},
	
	// IndexCreationDocuments are created using indexCreationDocument()
	function createIndex(collectionName, callback) /* varargs: IndexCreationDocuments */
	{
		var indexes = []
		Array.prototype.slice.call(arguments, 3).forEach(function(indexCreationDocument)
		{
			indexes.push(new DocumentBsonValue(indexCreationDocument))
		})
		
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			createIndexes: new StringBsonValue(collectionName),
			indexes: new ArrayBsonValue(indexes)
		})
	},
	
	function createUser(userName, password, callback) /* varags: roles */
	{
		// roles include read, dbOwner (regular users) and readAnyDatabase, root (admin users)
		
		var roles = []
		Array.prototype.slice.call(arguments, 4).forEach(function(role)
		{
			roles.push(new StringBsonValue(role))
		})
		
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			createUser: new StringBsonValue(userName),
			pwd: new StringBsonValue(MongoModule.Credentials.UserNamePasswordMongoChallengeResponseCredential.createAuthenticationHash(userName, password)),
			digestPassword: BsonFalse,
			roles: new ArrayBsonValue(roles)
		})
	},
	
	function dropCollection(collectionName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			drop: new StringBsonValue(collectionName)
		})
	},
	
	function dropDatabase(callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropDatabase: One
		})
	},
	
	function dropIndex(collectionName, indexName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropIndexes: new StringBsonValue(collectionName),
			index: new StringBsonValue(indexName)
		})
	},
	
	// 2.6 variant
	function dropUser(userName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropUser: new StringBsonValue(userName)
		})
	}
)

// storageEngine ommitted
// Use null for unwanted fields
module.indexCreationDocument = function indexCreationDocument(key, name, namespaceFullCollectionName, background, unique, sparse, expireAfterSeconds, version, weights, defaultLanguage, languageOverride, textIndexVersion, sphereIndexVersion, bits, min, max, bucketSize, dropDups)
{
	var indexCreationDocument =
	{
		key: new DocumentBsonValue(key),
		name: new StringBsonValue(name),
		ns: new StringBsonValue(namespaceFullCollectionName),
		background: bsonBoolean(background),
		unique: bsonBoolean(background),
		sparse: bsonBoolean(sparse),
		dropDups: bsonBoolean(dropDups)
	}
	if (expireAfterSeconds != null)
	{
		indexCreationDocument['expireAfterSeconds'] = new Int32BsonValue(expireAfterSeconds)
	}
	if (version != null)
	{
		indexCreationDocument['v'] = new Int32BsonValue(version)
	}
	if (weights != null)
	{
		indexCreationDocument['weights'] = new DocumentBsonValue(weights)
	}
	if (default_language != null)
	{
		indexCreationDocument['default_language'] = new StringBsonValue(defaultLanguage)
	}
	if (language_override != null)
	{
		indexCreationDocument['language_override'] = new StringBsonValue(languageOverride)
	}
	if (textIndexVersion != null)
	{
		indexCreationDocument['textIndexVersion'] = new Int32BsonValue(textIndexVersion)
	}
	if (sphereIndexVersion != null)
	{
		indexCreationDocument['2dsphereIndexVersion'] = new Int32BsonValue(sphereIndexVersion)
	}
	if (bits != null)
	{
		indexCreationDocument['bits'] = new Int32BsonValue(bits)
	}
	if (min != null)
	{
		indexCreationDocument['min'] = new DoubleBsonValue(bits)
	}
	if (max != null)
	{
		indexCreationDocument['max'] = new DoubleBsonValue(max)
	}
	if (bucketSize != null)
	{
		indexCreationDocument['bucketSize'] = new DoubleBsonValue(bucketSize)
	}
	return indexCreationDocument
}