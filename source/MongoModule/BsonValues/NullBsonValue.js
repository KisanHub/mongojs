/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function NullBsonValue()
	{
		this.super(NullBsonValue, 0x0A, 'null')
		this.value = null
	},
	
	function toStrictJavaScriptValue()
	{
		return null
	},
	
	function toShellJavaScriptValue()
	{
		return null
	}
).readBson = function readBson(reader)
{
	return module.NullBsonValue.Singleton
}
module.NullBsonValue.Singleton = new module.NullBsonValue()