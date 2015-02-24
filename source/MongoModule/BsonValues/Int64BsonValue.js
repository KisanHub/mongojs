/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSigned64BitBsonValue.extend
(
	module,
	
	function Int64BsonValue(value)
	{
		this.super(Int64BsonValue, 0x12, value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$numberLong'] = this.asString()
		return result
	},
	
	function toShellJavaScriptValue()
	{
		var value = this.toNumber()
		if (value >= -2147483648 && value <= 2147483647)
		{
			return NumberLong(value)
		}
		return NumberLong(this.asString())
	}
).readBson = function readBson(reader)
{
	return new module.Int64BsonValue(reader.readInt64())
}

module.Int64BsonValue.fromBits = function fromBits(highBits, lowBits)
{
	return module.AbstractSigned64BitBsonValue.fromBits(module.Int64BsonValue, highBits, lowBits)
}

module.Int64BsonValue.fromUnsigned32BitInteger = function fromUnsigned32BitInteger(value)
{
	return module.AbstractSigned64BitBsonValue.fromUnsigned32BitInteger(module.Int64BsonValue, value)
}
