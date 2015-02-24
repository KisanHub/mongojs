/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function BuildInfoCommandResultHandler(callback)
	{
		this.super(BuildInfoCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		/*
			Run db.runCommand('buildinfo') in shell for full list of fields, but others include
			- gitVersion
			- sysInfo
		*/
		var versionArrayBsonValue = unwrappedCommandResultDocument.versionArray.value
		
		// Int32BsonValue
		var majorVersion = versionArrayBsonValue[0].value
		var minorVersion = versionArrayBsonValue[1].value
		var revisionVersion = versionArrayBsonValue[2].value
		// var buildVersion = versionArrayBsonValue[3].value  // Not used by Java driver
		
		this.doCallback(majorVersion, minorVersion, revisionVersion)
	}
)
