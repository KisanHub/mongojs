/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults
var VirtualMethodException = ClassModule.VirtualMethodException

var BooleanBsonValue = MongoModule.BsonValues.BooleanBsonValue
var Int32BsonValue = MongoModule.BsonValues.Int32BsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue
var DoubleBsonValue = MongoModule.BsonValues.DoubleBsonValue

module.AbstractCommandResultHandler.extend
(
	module,
	
	function AbstractUnfailingCommandResultHandler(callback)
	{
		this.super(AbstractUnfailingCommandResultHandler, callback)
	},
	
	function commandError(errorCode, errorMessage)
	{
		throw new TemplatedException("IsMaster command failed with code '${errorCode}' and message '${errorMessage}", {errorCode: errorCode, errorMessage: errorMessage})
	}
)
