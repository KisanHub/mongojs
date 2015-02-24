/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function CredentialsStore(sharedComputerSoOnlyKeepForSession)
	{
		this.super(CredentialsStore)
		this.sharedComputerSoOnlyKeepForSession = sharedComputerSoOnlyKeepForSession
		this.storage = sharedComputerSoOnlyKeepForSession ? window.sessionStorage : window.localStorage
	},
	
	// returns null if missing
	function getHashedMongoChallengeResponseCredential(databaseName, userName)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		
		var authenticationHash = this.storage.getItem(key)
		if (authenticationHash)
		{
			return new module.HashedMongoChallengeResponseCredential(databaseName, userName, authenticationHash)
		}
		return null
	},
	
	function setAndGetHashedMongoChallengeResponseCredential(databaseName, userName, password)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		this.storage.setItem(key, module.createAuthenticationHash(userName, password))
		return this.getHashedMongoChallengeResponseCredential(databaseName, password)
	},
	
	function removeCredential(databaseName, userName)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		this.storage.removeItem(key)
	},
	
	function __removeCredentialFromLocalStorageIfUsingSessionStorage(key)
	{
		if (this.sharedComputerSoOnlyKeepForSession)
		{
			window.localStorage.removeItem(key)
		}
	},
	
	function __key(databaseName, userName)
	{
		return 'mongo-user-hash.' + databaseName + '.' + userName
	}
)
