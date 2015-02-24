/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function AbstractSigned64BitBsonValue(code, value)
	{
		var dataView = module.restrictBinaryToDataView(value)
		if (dataView.byteLength != 8)
		{
			throw new ClassModule.IllegalArgumentException("value '${value}' must be 8 bytes long", {value: value})
		}
		this.super(AbstractSigned64BitBsonValue, code, 'writeInt64At', value)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.asString() + ')'
	},
	
	function asString()
	{
		var inaccurateNumber = this.toNumber()
		
		// Constants from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
		if (inaccurateNumber <= 9007199254740991 && inaccurateNumber >= -9007199254740991 && Math.round(inaccurateNumber) == inaccurateNumber)
		{
			return inaccurateNumber.toString()
		}
		
		if (goog.math.Long)
		{
			return this.toGoogMathLong().toString()
		}
		
		if (dcodeIO.Long)
		{
			return this.toDcodeIOLong(dcodeIO).toString()
		}
		
		if (Long)
		{
			return toMongoDbLong().toString()
		}
		
		console.warn("Inaccurate BSON Int64 Long conversion toString")
		return inaccurateNumber.toString()
	},
	
	// http://docs.closure-library.googlecode.com/git/local_closure_goog_math_long.js.source.html
	function toGoogMathLong()
	{
		return new goog.math.Long(this.__highBitsSigned(), this.__lowBitsSigned)
	},
	
	// https://github.com/dcodeIO/Long.js/blob/master/src/Long.js
	function toDcodeIOLong(namespace)
	{
		if (namespace === undefined)
		{
			return new Long(this.__highBitsSigned(), this.__lowBitsSigned, false)
		}
		else
		{
			return new namespace.Long(this.__highBitsSigned(), this.__lowBitsSigned, false)
		}
	},
	
	// https://github.com/mongodb/js-bson/blob/master/lib/bson/long.js
	function toMongoDbLong(namespace)
	{
		if (namespace === undefined)
		{
			return new Long(this.__highBitsSigned(), this.__lowBitsSigned)
		}
		else
		{
			return new namespace.Long(this.__highBitsSigned(), this.__lowBitsSigned)
		}
	},
	
	function toHexString()
	{
		return module.toHexString(this.value, true)
	},
	
	// Good Enough for UtcDateTime (Date) for 10,000 years from Unix Epoch 1970
	function toNumber()
	{
		return this.__highBitsSigned() * HighScalar + this.__lowBitsUnsigned()
	},
	
	function toInt()
	{
		return this.__lowBitsSigned()
	},
	
	function isZero()
	{
		return this.__highBitsSigned() == 0 && this.__lowBitsSigned() == 0
	},
	
	function isOne()
	{
		return this.__highBitsSigned() == 0 && this.__lowBitsSigned() == 1
	},
	
	function isNotZero()
	{
		return this.__highBitsSigned() != 0 || this.__lowBitsSigned() != 0
	},
	
	function isNegative()
	{
		return this.__highBitsSigned() < 0
	},
	
	function isMinimumValue()
	{
		return this.__highBitsSigned() == -2147483648 && this.__lowBitsUnsigned() == 0
	},
	
	function __highBitsSigned()
	{
		return this.value.getInt32(4, true)
	},
	
	function __lowBitsSigned()
	{
		return this.value.getInt32(0, true)
	},
	
	function __lowBitsUnsigned()
	{
		return this.value.getUint32(0, true)
	}
)

module.AbstractSigned64BitBsonValue.fromBits = function fromBits(constructor, highBitsSigned, lowBitsSigned)
{
	var value = new DataView(new ArrayBuffer(8))
	value.setInt32(4, highBitsSigned, true)
	value.setInt32(0, lowBitsSigned, true)
	return new constructor(value)
}

// In JavaScript, 1 << 32 != (1 << 16) * (1 << 16) (instead of 4294967296, it's 1)
var HighScalar = (1 << 16) * (1 << 16)

module.AbstractSigned64BitBsonValue.fromUnsigned32BitInteger = function fromUnsigned32BitInteger(constructor, value)
{
	return module.AbstractSigned64BitBsonValue.fromBits(constructor, 0, value)
}
