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
	
	// pass -1 for findOne()
	// pass null for returnFieldsSelectorDocument if not wanted
	function find(filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
	{
		this.database.find(this.collectionName, filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
		return this
	},
	
	function insert(continueOnError, callback, insertDocuments)
	{
		var actualInsertDocuments
		if (arguments.length == 3)
		{
			if (insertDocuments instanceof Array)
			{
				actualInsertDocuments = insertDocuments
			}
			else
			{
				actualInsertDocuments = [insertDocuments]
			}
		}
		else
		{
			actualInsertDocuments = Array.prototype.slice.call(arguments, 2)
		}
		this.database.insert(this.collectionName, continueOnError, callback, actualInsertDocuments)
		return this
	},
	
	function update(isUpsert, isMulti, filterDocument, callback, updateDocuments)
	{
		var actualUpdateDocuments
		if (arguments.length == 5)
		{
			if (updateDocuments instanceof Array)
			{
				actualUpdateDocuments = updateDocuments
			}
			else
			{
				actualUpdateDocuments = [updateDocuments]
			}
		}
		else
		{
			actualUpdateDocuments = Array.prototype.slice.call(arguments, 4)
		}

		this.database.update(this.collectionName, isUpsert, isMulti, filterDocument, callback, actualUpdateDocuments)
		return this
	},
	
	function deleteMatching(isSingleRemove, callback, filterDocument)
	{
		this.database.deleteMatching(this.collectionName, isSingleRemove, callback, filterDocument)
		return this
	}
)
