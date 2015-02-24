/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function Int32BsonValue(value)
	{
		this.super(Int32BsonValue, 0x10, 'writeInt32At', value)
	},
	
	function toStrictJavaScriptValue()
	{
		return this.value
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	},
	
	function isZero()
	{
		return this.value == 0
	},
	
	function isOne()
	{
		return this.value == 1
	},
	
	function isNotZero()
	{
		return this.value != 0
	},
	
	function isGreaterThan(value)
	{
		return this.value > value
	},
	
	function toInt()
	{
		return this.value
	}
).readBson = function readBson(reader)
{
	return new module.Int32BsonValue(reader.readInt32())
}

module.Int32BsonValue.Zero = new module.Int32BsonValue(0)
module.Int32BsonValue.One = new module.Int32BsonValue(1)