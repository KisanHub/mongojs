/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	// Deprecated
	function SymbolBsonValue(value)
	{
		this.super(SymbolBsonValue, 0x0E, 'writeStringAt', value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$symbol'] = this.value
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return new module.SymbolBsonValue(reader.readString())
}