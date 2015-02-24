/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonValue = module.BsonValue
var DocumentBsonValue = module.DocumentBsonValue
var ArrayBsonValue = module.ArrayBsonValue
var TimestampBsonValue = module.TimestampBsonValue
var SymbolBsonValue = module.SymbolBsonValue
var ObjectIdBsonValue = module.ObjectIdBsonValue
var base64Decode = module.base64Decode

module.fromStrictJavascript = function fromStrictJavascript(object)
{
	if (object instanceof BsonValue)
	{
		if (object instanceof DocumentBsonValue)
		{
			var value = object.value
			var result = {}
			for(name in value)
			{
				if (ClassModule.safeHasOwnProperty(value, name))
				{
					var elementValue = value[name]
					result[name] = module.fromStrictJavascript(value[name])
				}
			}
				
			return new DocumentBsonValue(result)
		}

		if (object instanceof ArrayBsonValue)
		{
			return object.value.map(function map(value)
			{
				return module.fromStrictJavascript(value)
			})
		}
		
		return object
	}
	
	if (object === undefined)
	{
		return module.UndefinedBsonValue.Singleton
	}
	
	if (object === null)
	{
		return module.NullBsonValue.Singleton
	}
	
	var typeOfObject = typeof object
	
	if (typeOfObject === 'string')
	{
		return fromString(object)
	}
	
	if (typeOfObject === 'boolean')
	{
		return fromBoolean(object)
	}
	
	if (typeOfObject === 'number')
	{
		return fromNumber(object)
	}
	
	if (typeOfObject === 'object')
	{
		if (object instanceof String)
		{
			return fromString(object.valueOf())
		}
		
		if (object instanceof Boolean)
		{
			return fromBoolean(object.valueOf())
		}
		
		if (object instanceof Number)
		{
			return fromNumber(object.valueOf())
		}
		
		if (object instanceof RegExp)
		{
			return fromRegExp(object)
		}
		
		if (object instanceof Date)
		{
			return fromDate(object)
		}
		
		if (object instanceof Array)
		{
			return new ArrayBsonValue
			(
				object.map(function map(value)
				{
					return module.fromStrictJavascript(value)
				})
			)
		}
		
		// DataView, Typed Arrays, too. Treat as binary data
		if (object instanceof ArrayBuffer)
		{
			return fromBinary(object)
		}
		if (object instanceof DataView)
		{
			return fromBinary(object)
		}
		if (object instanceof Uint8Array || object instanceof Uint16Array || object instanceof Uint32Array)
		{
			return fromBinary(object)
		}
		if (object instanceof Int8Array || object instanceof Int16Array || object instanceof Int32Array)
		{
			return fromBinary(object)
		}
		if (object instanceof Float32Array || object instanceof Float64Array)
		{
			return fromBinary(object)
		}
		
		if (object instanceof Function)
		{
			return object
		}
		
		if (object['$date'])
		{
			return new UtcDateTimeBsonValue(parseInt(object['$date']))
		}
		
		if (object['$timestamp'])
		{
			var timestamp = object['$timestamp']
			return new TimestampBsonValue(timestamp['$t'], timestamp['$i'])
		}
		
		if (object['$symbol'])
		{
			return new SymbolBsonValue(object['$symbol'])
		}
		
		if (object['$oid'])
		{
			return fromObjectId(object)
		}
		
		if (object['$minKey'])
		{
			return module.MinKeyBsonValue.Singleton
		}
		
		if (object['$maxKey'])
		{
			return module.MaxKeyBsonValue.Singleton
		}
		
		if(object['$code'])
		{
			if (object['$scope'])
			{
				return new module.JavaScriptCodeWithScopeBsonValue(object['$code'], object['$scope'])
			}
			return new module.JavaScriptCode(object['$code'])
		}
		
		if(object['$numberLong'])
		{
			var asString = object['$numberLong']
			if (goog.math.Long.fromString)
			{
				var long = goog.math.Long.fromString(asString, 10)
				return module.Int64BsonValue.fromBits(long.high_, long.low_)
			}
			if (dcodeIO.Long)
			{
				var long = dcodeIO.Long.fromString(asString, false, 10)
				return module.Int64BsonValue.fromBits(long.high, long.low)
			}
			if (Long)
			{
				var long = Long.fromString(asString, 10)
				return module.Int64BsonValue.fromBits(long.getHighBits(), long.getLowBits())
			}
			console.warn("Potential loss of precision in converting from string to Int64BsonValue")
			return module.Int64BsonValue.fromUnsigned32BitInteger(parseInt(asString, 10))
		}
		
		if(object['$ref'])
		{
			return new module.DbPointerBsonValue(object['$ref'], fromObjectId(object['$id']))
		}
		
		if(object['$binary'])
		{
			return new BinaryBsonValue(parseInt('0x' + object['$type']), base64Decode(object['$binary']))
		}
		
		var result = {}
		for(name in object)
		{
			if (ClassModule.safeHasOwnProperty(object, name))
			{
				var elementValue = object[name]
				result[name] = module.fromStrictJavascript(object[name])
			}
		}
			
		return new DocumentBsonValue(result)
	}
	
	throw "Don't know what to do!"
}

var StringBsonValue = module.StringBsonValue
function fromString(object)
{
	return new StringBsonValue(object)
}

var bsonBoolean = module.BooleanBsonValue.bsonBoolean
function fromBoolean(object)
{
	return bsonBoolean(object)
}

var Int32BsonValue = module.Int32BsonValue
var DoubleBsonValue = module.DoubleBsonValue
function fromNumber(object)
{
	var truncated = object | 0
	if (truncated === object)
	{
		return new Int32BsonValue(object)
	}
	
	// potential bug: 2^53 integers which may have been derived from Int64BsonValue are not round-tripped
	return new DoubleBsonValue(object)
}

// padded hex string to 12 bytes
function fromObjectId(object)
{
	var bin = object['$oid']
	var dataView = new DataView(new ArrayBuffer(12))
	for(var byteIndex = 0; byteIndex < 12; byteIndex++)
	{
		var byteHexStringSnippet = '0x' + bin[byteIndex * 2] + bin[byteIndex * 2 + 1]
		var byte = parseInt(byteHexStringSnippet)
		dataView.setUint8(byteIndex, byte)
	}
	
	return new ObjectIdBsonValue(dataView)
}

var RegexBsonValue = module.RegexBsonValue
function fromRegExp(object)
{
	var global = object.global
	var ignoreCase = object.ignoreCase
	var lastIndex = object.lastIndex
	var multiline = object.multiline
	
	// alphabetical
	// i => ignoreCase
	// l => lastIndex
	// m => multiline
	// s, u, x don't seem to exist
	
	var options = ''
	if (object.ignoreCase)
	{
		options += 'i'
	}
	if (object.lastIndex)
	{
		options += 'l'
	}
	if (object.multiline)
	{
		options += 'm'
	}
	
	return new RegexBsonValue(object.source, options)
}

var UtcDateTimeBsonValue = module.UtcDateTimeBsonValue
function fromDate(object)
{
	return new UtcDateTimeBsonValue(object.valueOf() * 1000)
}

var BinaryBsonValue = module.BinaryBsonValue
var Generic = module.BinaryBsonValue.BinarySubtypes.Generic
function fromBinary(object)
{
	return new BinaryBsonValue(Generic, object)
}
