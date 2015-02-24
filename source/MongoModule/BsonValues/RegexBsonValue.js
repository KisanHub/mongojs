/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function RegexBsonValue(pattern, options)
	{
		this.super(RegexBsonValue, 0x0B)
		this.pattern = pattern
		this.options = options
		this.value = [pattern, options]
	},

	function writeBsonAt(writer, offset)
	{
		var currentOffset = writer.writeCStringAt(this.pattern, currentOffset)
		return writer.writeCStringAt(this.options, currentOffset)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.regex + ', ' + this.options + ')'
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$regex'] = this.pattern
		result['$options'] = this.options
		return result
	},
	
	function toShellJavaScriptValue()
	{
       return this.toRegExp()
	},
	
	function toRegExp()
	{
		return new RegExp(this.pattern, this.options)
	}
).readBson = function readBson(reader)
{
	return new module.RegexBsonValue(reader.readCString(), reader.readCString())
}