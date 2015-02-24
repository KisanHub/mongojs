/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonStringValue = MongoModule.BsonValues.BsonStringValue
var One = MongoModule.BsonValues.Int32BsonValue.One

var IsMasterCommandResultHandler = MongoModule.ResultHandlers.IsMasterCommandResultHandler
var BuildInfoCommandResultHandler = MongoModule.ResultHandlers.BuildInfoCommandResultHandler

module.Database.extend
(
	module,
	
	function AdminDatabase(connection)
	{
		this.super(AdminDatabase, connection, 'admin')
	},
	
	function isMaster(callback)
	{
		return this.sendCommand(new IsMasterCommandResultHandler(callback),
		{
			// or isMaster
			ismaster: One
		})
	},
	
	function buildInfo(callback)
	{
		return this.sendCommand(new BuildInfoCommandResultHandler(callback),
		{
			// or buildInfo
			buildinfo: One
		})
	}
)
