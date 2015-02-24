/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	// {key: value} style
	function AbstractObjectBsonValue(code, writeFunction, value)
	{
		this.super(AbstractObjectBsonValue, code, writeFunction, value)
		
		/*
		for(name in value)
		{
			if (ClassModule.safeHasOwnProperty(value, name))
			{
				// provide an accessor
				Object.defineProperty
				(
					this,
					name,
					{
						configurable: true,
						enumerable: true,
						get: function get()
						{
							return value[name]
						},
						set: function set(newValue)
						{
							value[name] = newValue
						}
					}
				)
			}
		}
		*/
	},
	
	function toStrictJavaScriptValue()
	{
		return toJavaScript(this.value, 'toStrictJavaScriptValue', this.emptyDocument())
	},
	
	function toShellJavaScriptValue()
	{
		return toJavaScript(this.value, 'toShellJavaScriptValue', this.emptyDocument())
	},
	
	function emptyDocument()
	{
		throw new ClassModule.VirtualMethodException()
	}
)

function toJavaScript(value, toJavaScriptVariantFunctionName, initial)
{
	var result = initial
	for(name in value)
	{
		if (ClassModule.safeHasOwnProperty(value, name))
		{
			var elementValue = value[name]
			var convertedValue
			if (elementValue instanceof module.BsonValue)
			{
				convertedValue = elementValue[toJavaScriptVariantFunctionName]()
			}
			else
			{
				convertedValue = elementValue
			}
			result[name] = convertedValue
		}
	}
	return result
}

module.AbstractObjectBsonValue.readBsonDocument = function readBson(reader, emptyDocument, constructor)
{
	var lengthIncludingLengthAndTrailingNull = reader.readInt32()
	var lengthIncludingTrailingNull = lengthIncludingLengthAndTrailingNull - 4
	var terminalOffset = reader._guardUnderflow(reader.offset, lengthIncludingTrailingNull) - 1
	
	var document = emptyDocument
	
	var elementName
	var elementType
	var elementValueType
	var elementValue
	
	while(reader.offset < terminalOffset)
	{
		elementType = reader.readUint8()
		elementValueType = findElementValueType(elementType)
		elementName = reader.readCString()
		elementValue = elementValueType.readBson(reader)
			
		document[elementName] = elementValue
	}
	
	if (reader.offset != terminalOffset)
	{
		throw new MongoModule.BsonReader.InvalidBsonException("Invalid Document, terminalOffset was '${terminalOffset}' but reader.offset was '${offset}'", {terminalOffset: terminalOffset, offset: reader.offset})
	}
	
	reader.readTrailingNullByte()
	
	return new constructor(document)
}

function findElementValueType(elementType)
{
	switch(elementType)
	{
		case 0x01:
			return module.DoubleBsonValue
		
		case 0x02:
			return module.StringBsonValue
		
		case 0x03:
			return module.DocumentBsonValue
		
		case 0x04:
			return module.ArrayBsonValue
		
		case 0x05:
			return module.BinaryBsonValue
		
		case 0x06:
			return module.UndefinedBsonValue
		
		case 0x07:
			return module.ObjectIdBsonValue
		
		case 0x08:
			return module.BooleanBsonValue
		
		case 0x09:
			return module.UtcDateTimeBsonValue
		
		case 0x0A:
			return module.NullBsonValue
		
		case 0x0B:
			return module.RegexBsonValue
		
		case 0x0C:
			return module.DbPointerBsonValue
		
		case 0x0D:
			return module.JavaScriptCodeBsonValue
		
		case 0x0E:
			return module.SymbolBsonValue
		
		case 0x0F:
			return module.JavaScriptCodeWithScopeBsonValue
		
		case 0x10:
			return module.Int32BsonValue
		
		case 0x11:
			return module.TimestampBsonValue
		
		case 0x12:
			return module.Int64BsonValue
		
		case 0xFF:
			return module.MinKeyBsonValue
		
		case 0x7F:
			return module.MaxKeyBsonValue
		
		default:
			throw new MongoModule.BsonReader.InvalidBsonException("Unknown element type code '${elementType}'", {elementType: elementType})
	}
}