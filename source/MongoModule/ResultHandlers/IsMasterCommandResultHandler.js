/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var REPLICA_SET_PRIMARY = MongoModule.ServerTypes.REPLICA_SET_PRIMARY
var REPLICA_SET_SECONDARY = MongoModule.ServerTypes.REPLICA_SET_SECONDARY
var REPLICA_SET_ARBITER = MongoModule.ServerTypes.REPLICA_SET_ARBITER
var REPLICA_SET_OTHER = MongoModule.ServerTypes.REPLICA_SET_OTHER
var REPLICA_SET_GHOST = MongoModule.ServerTypes.REPLICA_SET_GHOST
var SHARD_ROUTER = MongoModule.ServerTypes.SHARD_ROUTER
var STANDALONE = MongoModule.ServerTypes.STANDALONE

var safeHasOwnProperty = ClassModule.safeHasOwnProperty

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function IsMasterCommandResultHandler(callback)
	{
		this.super(IsMasterCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		/*
			Run db.runCommand('ismaster') in shell for full list of fields, but others include
			- ismaster
			- localTime
			- maxWireVersion
			- minWireVersion
		*/
		
		var isReplicaSetMemeber = getIsReplicaSetMember(unwrappedCommandResultDocument)
		
		var serverType = getServerType(unwrappedCommandResultDocument, isReplicaSetMemeber)
		
		var maximumBatchSize = getMaxWriteBatchSize(unwrappedCommandResultDocument)
		var maximumDocumentSize = getMaxBsonObjectSize(unwrappedCommandResultDocument)
		var maximumMessageSize = getMaxMessageSizeBytes(unwrappedCommandResultDocument)
		
		this.doCallback(serverType, maximumBatchSize, maximumDocumentSize, maximumMessageSize)
	}
)

function getIsReplicaSetMember(unwrappedCommandResultDocument)
{
	if (safeHasOwnProperty(unwrappedCommandResultDocument, 'setName'))
	{
		return true
	}
	return module.getValueOrDefault('isreplicaset', false)
}

function getServerType(unwrappedCommandResultDocument, isReplicaSetMember)
{
	if (isReplicaSetMember)
	{
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'ismaster', false))
		{
			return REPLICA_SET_PRIMARY
		}
		
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'secondary', false))
		{
			return REPLICA_SET_SECONDARY
		}
		
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'arbiterOnly', false))
		{
			return REPLICA_SET_ARBITER
		}
		
		if (safeHasOwnProperty(unwrappedCommandResultDocument, 'setName') && safeHasOwnProperty(unwrappedCommandResultDocument, 'hosts'))
		{
			return REPLICA_SET_OTHER
		}
		
		return REPLICA_SET_GHOST
	}
	
	if (module.getValueOrDefault(unwrappedCommandResultDocument, 'msg', '') === 'isdbgrid')
	{
		return SHARD_ROUTER
	}
	
	return STANDALONE
}

function getMaxWriteBatchSize(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxWriteBatchSize', MongoModule.maximumBatchSize)
}

// aka Maximum Document Size
function getMaxBsonObjectSize(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxBsonObjectSize', MongoModule.maximumDocumentSize)
}

function getMaxMessageSizeBytes(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxMessageSizeBytes', MongoModule.maximumMessageSize)
}
