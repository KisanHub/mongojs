/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function Collection(database, collectionName)
	{
		this.super(Collection)
		this.database = database
		this.collectionName = collectionName
	},
	
	// Review InsertMessage.class for code that handles payloads > max message size
	function insert(continueOnError, callback, unwrappedDocuments)
	{
		// handle array or varargs
		var actualUnwrappedDocuments
		if (arguments.length == 3)
		{
			if (unwrappedDocuments instanceof Array)
			{
				actualUnwrappedDocuments = unwrappedDocuments
			}
			else
			{
				actualUnwrappedDocuments = [unwrappedDocuments]
			}
		}
		else
		{
			actualUnwrappedDocuments = Array.prototype.slice.call(arguments, 2)
		}
		this.database.insertDocuments(this.collectionName, continueOnError, callback, actualUnwrappedDocuments)
		return this
	},
	
	function update(isUpsert, isMulti, unwrappedFilterDocument, callback, unwrappedDocuments)
	{
		// handle array or varargs
		var actualUnwrappedDocuments
		if (arguments.length == 5)
		{
			if (unwrappedDocuments instanceof Array)
			{
				actualUnwrappedDocuments = unwrappedDocuments
			}
			else
			{
				actualUnwrappedDocuments = [unwrappedDocuments]
			}
		}
		else
		{
			actualUnwrappedDocuments = Array.prototype.slice.call(arguments, 4)
		}

		this.database.updateMatchingDocumentsWith(this.collectionName, isUpsert, isMulti, unwrappedFilterDocument, callback, actualUnwrappedDocuments)
		return this
	},
	
	function deleteMatching(isSingleRemove, callback, unwrappedFilterDocument)
	{
		this.database.deleteMatchingDocuments(this.collectionName, isSingleRemove, callback, unwrappedFilterDocument)
		return this
	},
	
	// find() and findOne()
	function find(unwrappedFilterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
	{
		this.database.findDocuments(this.collectionName, unwrappedFilterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
		return this
	}
)
