/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults
var VirtualMethodException = ClassModule.VirtualMethodException

var BooleanBsonValue = MongoModule.BsonValues.BooleanBsonValue
var Int32BsonValue = MongoModule.BsonValues.Int32BsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue
var DoubleBsonValue = MongoModule.BsonValues.DoubleBsonValue

module.AbstractResultHandler.extend
(
	module,
	
	function AbstractCommandResultHandler(callback)
	{
		this.super(AbstractCommandResultHandler, callback)
	},
	
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		if (moreAvailable)
		{
			throw new TemplatedException("Did not expect moreAvailable for Command", {})
		}

		// GetMore: Possibly legitimate if using TailableCursor option
		// GetMore: May also occur if the underlying collection, say, was deleted
		if (wasCursorNotFound)
		{
			throw new TemplatedException("Did not expect wasCursorNotFound for Command", {})
		}
		
		if (didGetMoreOrQueryButNotCommandFail)
		{
			throw new TemplatedException("Did not expect didGetMoreOrQueryButNotCommandFail for Command", {})
		}
		
		if (documents.length != 1)
		{
			throw new TemplatedException("Did not expect more than one document for Command (got '${length}')", {length: documents.length})
		}
		
		var unwrappedCommandResultDocument = documents[0].value
		
		if (!isCommandOk(unwrappedCommandResultDocument))
		{
			var errorCode = getErrorCode(unwrappedCommandResultDocument)
			var errorMessage = getErrorMessage(unwrappedCommandResultDocument)
			
			this.commandError(errorCode, errorMessage)
		}
		else
		{
			this.useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
		}
		
		return NoMoreResults
	},
	
	function commandError(errorCode, errorMessage)
	{
		throw new VirtualMethodException()
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		throw new VirtualMethodException()
	}
)

// It's not very clear how this interacts with ReplyMessage's error field
function isCommandOk(unwrappedCommandResultDocument)
{
	// potential 'ok'
	// Boolean or int32 / int64 / double
	var ok = unwrappedCommandResultDocument.ok
	if (!ok)
	{
		return false
	}
	if (ok instanceof BooleanBsonValue)
	{
		return ok.isTrue()
	}
	if (ok instanceof Int32BsonValue)
	{
		return ok.isOne()
	}
	if (ok instanceof Int64BsonValue)
	{
		return ok.isOne()
	}
	if (ok instanceof DoubleBsonValue)
	{
		return ok.isOne()
	}
	return false
}

function getErrorCode(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'code', -1)
}

function getErrorMessage(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'errmsg', '')
}
