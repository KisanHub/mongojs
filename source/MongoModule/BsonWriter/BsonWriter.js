/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


// Math.floor() fails for negative numbers
// http://jsperf.com/whole-integer-division
function intDivison(dividend, divisor)
{
	return dividend / divisor | 0
}

ClassModule.Object.extend
(
	module,

	function BsonWriter(arrayBuffer)
	{
		this.dataView = new DataView(arrayBuffer)
		this.maximumLength = this.dataView.byteLength
		this.offset = 0
	},
	
	function write(value)
	{
		return (this.offset = this.writeAt(value, this.offset))
	},
	
	function writeAt(value, offset)
	{
		return value.writeBsonAt(this, offset)
	},
	
	function writeDocumentAt(value, offset)
	{
		var resultantOffset = this.writeElementListAt(value, offset + 4)
		var finalOffset = this.writeByteAt(0x00, resultantOffset)
		
		// length includes 0x00 and the length field
		var length = finalOffset - offset
		this.writeInt32At(length, offset)
		return finalOffset
	},
	
	function writeDocument(value)
	{
		return (this.offset = this.writeDocumentAt(value, this.offset))
	},
	
	function writeElementListAt(value, offset)
	{
		var resultantOffset = offset
		for(name in value)
		{
			if (ClassModule.safeHasOwnProperty(value, name))
			{
				var elementValue = value[name]
				if (elementValue instanceof MongoModule.BsonValues.BsonValue)
				{
					resultantOffset = this.writeElementAt(name, elementValue, resultantOffset)
				}
				else if (elementValue instanceof Function)
				{
					// quite acceptable, not persisted
				}
				else
				{
					console.warn("Non-BSON value '" + elementValue + "' for name '" + name + "' not serialized")
				}
			}
		}
		return resultantOffset
	},
	
	function writeElementList(value)
	{
		return (this.offset = this.writeElementListAt(value, this.offset))
	},
	
	function writeElementAt(name, value, offset)
	{
		var resultantOffset = this.writeByteAt(value.elementType(), offset)
		resultantOffset = this.writeCstringAt(name, resultantOffset)
		resultantOffset = value.writeBsonAt(this, resultantOffset)
		return resultantOffset
	},
	
	function _guardOverflow(offset, requiredSpace)
	{
		return guardOverflow(offset, requiredSpace, this.maximumLength)
	},

	function skip(count)
	{
		this.offset += count
		return this.offset;
	},
	
	function skipByte()
	{
		return this.skip(1)
	},
	
	function writeByte(value)
	{
		return (this.offset = this.writeByteAt(value, this.offset))
	},
	
	function writeByteAt(value, offset)
	{
		var resultantOffset = this._guardOverflow(offset, 1)
		this.dataView.setUint8(offset, value)
		return resultantOffset
	},
	
	function skipInt32()
	{
		return this.skip(4)
	},
	
	function writeInt32(value)
	{
		return (this.offset = this.writeInt32At(value, this.offset))
	},
	
	function writeInt32At(value, offset)
	{
		var resultantOffset = this._guardOverflow(offset, 4)
		this.dataView.setInt32(offset, value, true)
		return resultantOffset
	},
	
	function skipInt64()
	{
		return this.skip(8)
	},
	
	function writeInt64(value)
	{
		return (this.offset = this.writeInt64At(value, this.offset))
	},
	
	function writeInt64At(value, offset)
	{
		var resultantOffset = this._guardOverflow(offset, 8)
		this.dataView.setFloat64(offset, value.getFloat64(0, true), true)
		return resultantOffset
	},
	
	function skipDouble()
	{
		return this.skip(8)
	},
	
	function writeDouble(value)
	{
		return (this.offset = this.writeDoubleAt(value, this.offset))
	},
	
	function writeDoubleAt(value, offset)
	{
		var resultantOffset = this._guardOverflow(offset, 8)
		this.dataView.setFloat64(offset, value, true)
		return resultantOffset
	},

	// 32-bit length (including trailing NUL), UTF-8 bytes, trailing NULL, ASCII NUL allowed
	function writeStringAt(value, offset)
	{
		var lengthStartsFromOffset = offset + 4
		
		var finalOffset = this._writeStringWithTrailingNullAt(value, false, lengthStartsFromOffset)
		
		this.writeInt32At(finalOffset - lengthStartsFromOffset, offset)
		
		return finalOffset
	},
	
	function writeString(value)
	{
		return (this.offset = this.writeStringAt(value, this.offset))
	},
	
	// UTF-8 bytes, trailing NULL, ASCII NUL not allowed
	function writeCstringAt(value, offset)
	{
		return this._writeStringWithTrailingNullAt(value, true, offset)
	},
	
	function writeCstring(value)
	{
		return (this.offset = this.writeCstringAt(value, this.offset))
	},
	
	function writeBinaryAt(value, subtype, offset)
	{
		var length = value.byteLength
		var resultantOffset = this._guardOverflow(offset, 4 + 1 + length)
		
		// skip length
		
		this.dataView.writeByte(offset + 4, subtype)

		var currentOffset = this.writeBytesAt(value, offset + 4 + 1)
		
		// length EXCLUDES subtype byte
		this.writeInt32At(currentOffset - offset - 4 - 1, offset)
		
		return currentOffset
	},
	
	function writeBinary(subtype, value)
	{
		return (this.offset = this.writeBinaryAt(subtype, value, this.offset))
	},
	
	function writeBytesAt(value, offset)
	{
		var dataView = this.dataView
		var to = new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength)
		var from = new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
		to.set(from, offset)
		return offset + value.byteLength
	},
	
	function writeBytes(value)
	{
		return (this.offset = this.writeBytesAt(value, offset))
	},
	
	function _writeStringWithTrailingNullAt(value, codePointZeroIsInvalid, offset)
	{
		var nextOffset = module.writeUtf16BigEndianStringAsUtf8At(this.dataView, value, codePointZeroIsInvalid, offset, this.maximumLength)
		return this.writeByteAt(0, nextOffset)
	}
)



function guardOverflow(offset, requiredSpace, maximumLength)
{
	var resultantOffset = offset + requiredSpace
	if (resultantOffset > maximumLength)
	{
		throw new module.BsonWriterOverflowException(offset, requiredSpace, maximumLength)
	}
	return resultantOffset
}

module.writeUnicodeCodePointAsUtf8At = function writeUnicodeCodePointAsUtf8At(dataView, value, offset, maximumLength)
{
	var resultantOffset
	
	if (value < 0x80)
	{
		resultantOffset = guardOverflow(offset, 1, maximumLength)
	    dataView.setUint8(offset, value, offset)
	}
	else if (value <= 0x7FF)
	{
		resultantOffset = tguardOverflow(offset, 2, maximumLength)
	    dataView.setUint8(offset, (code_point >> 6) + 0xC0)
	    dataView.setUint8(offset + 1, (code_point & 0x3F) + 0x80)
	}
	else if (value <= 0xFFFF)
	{
		resultantOffset = guardOverflow(offset, 3, maximumLength)
	    dataView.setUint8(offset, (code_point >> 12) + 0xE0)
	    dataView.setUint8(offset + 1, ((code_point >> 6) & 0x3F) + 0x80)
	    dataView.setUint8(offset + 2, (code_point & 0x3F) + 0x80)
	}
	else if (value <= 0x10FFFF)
	{
		resultantOffset = guardOverflow(offset, 4, maximumLength)
	    dataView.setUint8(offset, (code_point >> 18) + 0xF0)
	    dataView.setUint8(offset + 1, ((code_point >> 12) & 0x3F) + 0x80)
	    dataView.setUint8(offset + 2, ((code_point >> 6) & 0x3F) + 0x80)
	    dataView.setUint8(offset + 3, (code_point & 0x3F) + 0x80)
	}
	else
	{
		throw new module.InvalidUnicodeCodePointException(value, 'is greater than 0x10FFFFF')
	}
	
	return resultantOffset
},
	
module.writeUtf16BigEndianStringAsUtf8At = function writeUtf16BigEndianStringAsUtf8At(dataView, value, codePointZeroIsInvalid, offset, maximumLength)
{
	var stringLength = value.length
	var index = 0
	var nextOffset = offset
	while(index < stringLength)
	{
		var utf16CodePoint = value.charCodeAt(index)
		
		// not a surrogate pair
	    if (utf16CodePoint < 0xD800 || utf16CodePoint > 0xDFFF)
		{
			if (utf16CodePoint == 0 && codePointZeroIsInvalid)
			{
				throw new module.InvalidUtf16StringException(value, index, 'has code point zero (NUL); this is not allowed in the current context')
			}
			nextOffset = module.writeUnicodeCodePointAsUtf8At(dataView, utf16CodePoint, nextOffset, maximumLength)
			index++
			continue
	    }
		
		// High Surrogate
		if (0xD800 <= utf16CodePoint && utf16CodePoint <= 0xDBFF)
		{
			if (index = stringLength - 1)
			{
				throw new module.InvalidUtf16StringException(value, index, 'has a leading high surrogate but no subsequent low surrogate (there are not more UTF-16 characters)')
			}
			
			var lowSurrogateUtf16CodePoint = value.charCodeAt(index + 1)
			if (0xDC00 > lowSurrogateUtf16CodePoint || lowSurrogateUtf16CodePoint < 0xDBFF)
			{
				throw new module.InvalidUtf16StringException(value, index, 'has a leading high surrogate but no subsequent low surrogate')
			}
			
			nextOffset = module.writeUnicodeCodePointAsUtf8At(dataView, (utf16CodePoint << 10) + lowSurrogateUtf16CodePoint - 0x35FDC00, nextOffset, maximumLength)
			
			index +=2
		}
	}
	
	return nextOffset
}
