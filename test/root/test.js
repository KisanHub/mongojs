/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/

function test()
{
	// Settings
	var sharedComputerSoOnlyKeepForSession = true
	var webSocketsUrl = 'ws://localhost:8081/mongodb/'
	var databaseName = 'euro2012'
	var userName = 'raph'
	var password = 'password'
	
	// Imports
	var CredentialsStore = MongoModule.Credentials.CredentialsStore
	var Connection = MongoModule.Connection
	var StringBsonValue = MongoModule.BsonValues.StringBsonValue
	
	// Credentials can be stored per-session or without limit locally
	var credentialsStore = new CredentialsStore(sharedComputerSoOnlyKeepForSession)
	var credential = credentialsStore.getHashedMongoChallengeResponseCredential(databaseName, userName)
	if (credential === null)
	{
		// Pop-Up a login window, or use this knowledge to change the UI
		password = window.prompt('Please enter the MongoDb password for ' + userName, password)
		credential = credentialsStore.setAndGetHashedMongoChallengeResponseCredential(databaseName, userName, password)
	}
	
	function couldNotAuthenticateCallback(errorCode, errorMessage)
	{
		// errorCode == 18, errorMessage == 'auth failed'
		console.warn('Unauthenticated')
		
		// Remove any invalid credentials
		credential.removeFromCredentialStore(credentialsStore)
	}
	
	var connection = new Connection(webSocketsUrl, credential, couldNotAuthenticateCallback, function authenticatedCallback(database)
	{
		console.log('Authenticated')
		
		// or var collection = connection.database(databaseName).collection('teams')
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
	})
	
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
