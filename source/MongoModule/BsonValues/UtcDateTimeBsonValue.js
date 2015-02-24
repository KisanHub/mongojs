/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


// Also called Date
// Millisecond Accuracy from Unix Epoch 1970
module.AbstractSigned64BitBsonValue.extend
(
	module,
	
	function UtcDateTimeBsonValue(value)
	{
		this.super(UtcDateTimeBsonValue, 0x09, value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$date'] = this.asString()
		return result
	},
	
	function toShellJavaScriptValue()
	{
		var value = this.toNumber()
		var date = Date(value)
        if (value >= -59014396800000 && value <= 253399536000000)
		{
			return ISODate(date.toISOString())
		}
		return date
	}
).readBson = function readBson(reader)
{
	return new module.UtcDateTimeBsonValue(reader.readInt64())
}

module.UtcDateTimeBsonValue.fromBits = function fromBits(highBits, lowBits)
{
	return module.AbstractSigned64BitBsonValue.fromBits(module.UtcDateTimeBsonValue, highBits, lowBits)
}

module.UtcDateTimeBsonValue.fromUnsigned32BitInteger = function fromUnsigned32BitInteger(value)
{
	return module.AbstractSigned64BitBsonValue.fromUnsigned32BitInteger(module.UtcDateTimeBsonValue, value)
}
