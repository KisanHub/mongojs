/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var NoMoreResults = module.ResultHandler.NoMoreResults
var ArrayBsonValue = MongoModule.BsonValues.ArrayBsonValue

module.AbstractResultHandler.extend
(
	module,
	
	function QueryResultsHandler(callback, actualBatchSize, requestedBatchSize, limit)
	{
		this.super(QueryResultsHandler)
		this.callback = callback
		this.actualBatchSize = actualBatchSize
		this.requestedBatchSize = requestedBatchSize
		this.limit = limit
		this.documentIndex = 0
		this.batchIndicator = 0
		this.getMoreBatchSizeTuple =
		{
			getMore: true,
			actualBatchSize: actualBatchSize
		}
	},
	
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		var callback = this.callback
		
		if (wasCursorNotFound)
		{
			callback(true, "Cursor not found")
			return NoMoreResults
		}
		
		if (didGetMoreOrQueryButNotCommandFail)
		{
			if (documents.length != 1)
			{
				throw new TemplatedException("Did not expect more than one document for Command (got '${length}')", {length: documents.length})
			}
			
			var unwrappedErrorDocument = documents[0].value
			
			var errorMessage = module.getValueOrDefault(unwrappedErrorDocument, '$err', 'No supplied error message')
			
			callback(true, errorMessage)
			return NoMoreResults
		}
		
		var actualBatchSize = this.actualBatchSize
		var limit = this.limit
		var documentIndex = this.documentIndex
		var batchIndicator = this.batchIndicator
		
		var indicatedBatchSize = documents.length
		var shouldContinue
		documents.forEach(function(document, index)
		{
			if (documentIndex == limit)
			{
				return NoMoreResults
			}
			
			shouldContinue = callback(false, document, (!moreAvailable || documentIndex == limit - 1), batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
			if (shouldContinue === false)
			{
				return NoMoreResults
			}
			documentIndex += 1
		})
		
		if (documentIndex == limit)
		{
			return NoMoreResults
		}
		
		if (moreAvailable)
		{
			this.documentIndex = documentIndex
			this.batchIndicator = batchIndicator + 1
			
			// actualBatchSize of 0 is special but should still work
			var remaining = limit - documentIndex
			if (remaining > actualBatchSize)
			{
				return this.getMoreBatchSizeTuple
			}
			
			var killCursorAfterThisBatchSize = -remaining
			var result = {}
			result['getMore'] = true
			result['actualBatchSize'] = killCursorAfterThisBatchSize
			return result
		}
		
		return NoMoreResults
	}
)
