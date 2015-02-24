/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractCredential.extend
(
	module,
	
	function HashedMongoChallengeResponseCredential(databaseName, userName, authenticationHash)
	{
		this.super(HashedMongoChallengeResponseCredential, databaseName)
		this.userName = userName
		this.authenticationHash = authenticationHash
	},
	
	function authenticate(connection, couldNotAuthenticateCallback, authenticatedCallback)
	{
		var loginDatabase = this.loginDatabase(connection)
		
		var userName = this.userName
		var authenticationHash = this.authenticationHash
		loginDatabase.nonce(function nonceCallback(nonceString)
		{
			loginDatabase.authFromHash(userName, authenticationHash, nonceString, couldNotAuthenticateCallback, authenticatedCallback)
		})
	}
)
