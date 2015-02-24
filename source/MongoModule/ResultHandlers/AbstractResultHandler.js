/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults

module.ResultHandler.extend
(
	module,
	
	function AbstractResultHandler(callback)
	{
		this.super(AbstractResultHandler)
		this.callback = callback
	},
	
	function doCallback()
	{
		var callback = this.callback
		if (callback instanceof Function)
		{
			callback.apply(this, Array.prototype.slice.call(arguments))
		}
	}
)
