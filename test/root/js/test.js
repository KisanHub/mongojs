/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


function test()
{
	// Imports
	var Connection = MongoModule.Connection
	var UserNamePasswordMongoChallengeResponseCredential = MongoModule.Credentials.UserNamePasswordMongoChallengeResponseCredential
	var StringBsonValue = MongoModule.BsonValues.StringBsonValue
	
	function couldNotAuthenticateCallback(errorCode, errorMessage)
	{
		// 18 is auth failed
		console.log(errorCode)
		console.log(errorMessage)
	}
	
	function authenticatedCallback(database)
	{
		console.log('Authenticated')
		
		// or var collection = connection.database('euro2012').collection('teams')
		var collection = database.collection('teams')
		
		// we could write collating callbacks, per batch, per certain number of documents, once for all
		// and transforming callbacks, eg add methods
		//  country: new StringBsonValue('England') 
		collection.find({}, null, function callback(isErrorAndDocumentIsErrorMessage, document, isLastDocument, batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
		{
			if (isErrorAndDocumentIsErrorMessage)
			{
				var errorMessage = document
				console.warn(errorMessage)
				return false
			}
			
			var team = document
			console.log(team.toStrictJavaScriptValue())
						
			team.sum = function sum()
			{
				//
			}
			
			team.average = function average(size)
			{
				//
			}
			
			team.value.abbreviation = new StringBsonValue('Eng')
			
			collection.update(false, false, {}, function updated()
			{
				console.log('Updated')
				
				collection.insert(false, function inserted()
				{
					console.log('Inserted')
			
					collection.deleteMatching(false, function deleted()
					{
						console.log('Deleted')
					},
					{
						country: new StringBsonValue('India')
					})
				},
				{
					country: new StringBsonValue('India'),
					GroupName: new StringBsonValue('A')
				})
			}, team)
			
			return moreAvailable
		}, 10, 100, 0, 1000)
		
	}
	
	var connection = new Connection('ws://localhost:8081/mongodb/', new UserNamePasswordMongoChallengeResponseCredential('euro2012', 'raph', 'password'), couldNotAuthenticateCallback, authenticatedCallback)
	
	// TODO: tailable cursors
	// TODO: CHeck GetMore / Kill
	// TODO: websocket closing / hang up / errors
	// TODO: cursor design, eg per batch, collating of batch or all
	
	/*
		Commands to add:-
			- distinct
			- count
			- eval
	*/
}

PackageLoaderModule.loadPackage
(
	'js/',
	'mongojs',
	function()
	{
		console.log('loaded')
	}
)
