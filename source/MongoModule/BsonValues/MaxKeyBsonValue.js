/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function MaxKeyBsonValue()
	{
		this.super(MaxKeyBsonValue, 0x7F, '')
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$maxKey'] = 1
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return module.MaxKeyBsonValue.Singleton
}
module.MaxKeyBsonValue.Singleton = new module.MaxKeyBsonValue()
