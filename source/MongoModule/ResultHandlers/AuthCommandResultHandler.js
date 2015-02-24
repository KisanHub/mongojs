/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractCommandResultHandler.extend
(
	module,
	
	function AuthCommandResultHandler(authenticatedCallback, couldNotAuthenticateCallback, database)
	{
		this.super(AuthCommandResultHandler, authenticatedCallback)
		this.couldNotAuthenticateCallback = couldNotAuthenticateCallback
		this.database = database
	},
	
	function commandError(errorCode, errorMessage)
	{
		this.couldNotAuthenticateCallback(errorCode, errorMessage)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		// unwrappedCommandResultDocument is { dbName, user, ok }
		this.doCallback(this.database)
	}
)
