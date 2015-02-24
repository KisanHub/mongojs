/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var InvalidBsonException = module.InvalidBsonException

ClassModule.Object.extend
(
	module,

	function BsonReader(arrayBuffer)
	{
		this.dataView = new DataView(arrayBuffer)
		this.maximumLength = this.dataView.byteLength
		this.offset = 0
	},
	
	function hasCompleteMessageAvailable()
	{
		if (this.offset + 4 > this.maximumLength)
		{
			return false
		}
		var messageLength = this.dataView.getInt32(this.offset, true)
		if (this.offset + messageLength > this.maximumLength)
		{
			return false
		}
		return true
	},
	
	function _guardUnderflow(offset, requiredSpace)
	{
		var resultantOffset = offset + requiredSpace
		var maximumLength = this.maximumLength
		if (resultantOffset > maximumLength)
		{
			throw new module.BsonReaderUnderflowException(offset, requiredSpace, maximumLength)
		}
		return resultantOffset
	},
	
	function rewindInt32()
	{
		this.offset -= 4
	},
	
	function readInt32()
	{
		var resultantOffset = this._guardUnderflow(this.offset, 4)
		try
		{
			return this.dataView.getInt32(this.offset, true)
		}
		finally
		{
			this.offset = resultantOffset	
		}
	},
	
	function readInt64()
	{
		return this.readBytes(8)
	},
	
	function readDouble()
	{
		var resultantOffset = this._guardUnderflow(this.offset, 8)
		try
		{
			return this.dataView.getFloat64(this.offset, true)
		}
		finally
		{
			this.offset = resultantOffset	
		}
	},
	
	function readUint8()
	{
		var resultantOffset = this._guardUnderflow(this.offset, 1)
		try
		{
			return this.dataView.getUint8(this.offset)
		}
		finally
		{
			this.offset = resultantOffset	
		}
	},
	
	function readBytes(length)
	{
		var resultantOffset = this._guardUnderflow(this.offset, length)
		try
		{
			var start = this.dataView.byteOffset + this.offset
			return new DataView(this.dataView.buffer.slice(start, start + length))
		}
		finally
		{
			this.offset = resultantOffset
		}
	},
	
	function readCString()
	{
		var string = ''
		var unicodeCodePoint
		do
		{
			var unicodeCodePoint = this.readUtf8EncodedUnicodeCodePoint()
			if (unicodeCodePoint == 0x00)
			{
				return string
			}
			string += String.fromCodePoint(unicodeCodePoint)
		} while(true)
	},
	
	function readString()
	{
		var lengthExcludingLengthButIncludingTrailingNull = this.readInt32()
		if (lengthExcludingLengthButIncludingTrailingNull == 0)
		{
			throw new InvalidBsonException("String length can not be zero (as there's a trailing NULL)", {})
		}
		
		var endOffset = this._guardUnderflow(this.offset, lengthExcludingLengthButIncludingTrailingNull - 1)
		var unicodeCodePoint
		var string = ''
		while(this.offset < endOffset)
		{
			unicodeCodePoint = this.readUtf8EncodedUnicodeCodePoint()
			string += String.fromCodePoint(unicodeCodePoint)
		}
		if (this.offset != endOffset)
		{
			throw new InvalidBsonException("Over-read '${size}' bytes of UTF-8 string of length '${length}'", {size: this.offset - endOffset, length: length - 1})
		}
		
		this.readTrailingNullByte()
		
		return string
	},
	
	function readTrailingNullByte()
	{
		// byte 0
		var trailingNullByte = this.readUint8()
		if (trailingNullByte != 0x00)
		{
			throw new InvalidBsonException("String trailing NUll was '${trailingNullByte}' not zero", {trailingNullByte: trailingNullByte})
		}
	},
	
	function readUtf8EncodedUnicodeCodePoint()
	{
		var firstByte = this.readUint8()
		var secondByte
		var thirdByte
		var fourthByte
		
		if (firstByte < 0x80)
		{
			return firstByte
		}
		
		if (firstByte < 0xC2)
		{
			throw new module.InvalidUtf8CodePointException("Contination or overlong two byte sequence in first byte '${firstByte}' at offset ${offset}", {firstByte: firstByte, offset: offset})
		}
		
		if (firstByte < 0xE0)
		{
			secondByte = this.readUint8()
			if ((secondByte & 0xC0) != 0x80)
			{
				throw new module.InvalidUtf8CodePointException("Invalid two byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			return (firstByte << 6) + secondByte - 0x3080
		}
		
		if (firstByte < 0xF0)
		{
			/* 3-byte sequence */
			secondByte = this.readUint8()
			if ((secondByte & 0xC0) != 0x80)
			{
				throw new module.InvalidUtf8CodePointException("Invalid three byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			if (firstByte == 0xE0 && secondByte < 0xA0)
			{
				throw new module.InvalidUtf8CodePointException("Overlong two byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			thirdByte = this.readUint8()
			if ((thirdByte & 0xC0) != 0x80) 
			{
				throw new module.InvalidUtf8CodePointException("Invalid two byte sequence in first byte '${firstByte}', second byte '${secondByte}', thirdByte '${thirdByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, thirdByte: thirdByte, offset: offset})
			}
			return (firstByte << 12) + (secondByte << 6) + thirdByte - 0xE2080
		}
		
		if (firstByte < 0xF5)
		{
			secondByte = this.readUint8()
			if ((secondByte & 0xC0) != 0x80)
			{
				throw new module.InvalidUtf8CodePointException("Invalid four byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			if (firstByte == 0xF0 && secondByte < 0x90)
			{
				throw new module.InvalidUtf8CodePointException("Overlong four byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			if (firstByte == 0xF4 && secondByte >= 0x90)
			{
				throw new module.InvalidUtf8CodePointException("UCS-2 (> U+10FFFF) four byte sequence in first byte '${firstByte}', second byte '${secondByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, offset: offset})
			}
			thirdByte = this.readUint8()
			if ((thirdByte & 0xC0) != 0x80)
			{
				throw new module.InvalidUtf8CodePointException("Invalid four byte sequence in first byte '${firstByte}', second byte '${secondByte}', third byte '${thirdByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, thirdByte: thirdByte, offset: offset})
			}
			fourthByte = this.readUint8()
			if ((fourthByte & 0xC0) != 0x80)
			{
				throw new module.InvalidUtf8CodePointException("Invalid four byte sequence in first byte '${firstByte}', second byte '${secondByte}', third byte '${thirdByte}', fourthByte '${fourthByte}' at offset ${offset}", {firstByte: firstByte, secondByte: secondByte, thirdByte: thirdByte, fourthByte: fourthByte, offset: offset})
			}
			return (firstByte << 18) + (secondByte << 12) + (thirdByte << 6) + fourthByte - 0x3C82080
		}
		
		throw new module.InvalidUtf8CodePointException("UCS-2 (> U+10FFFF) byte sequences are not supported (first byte '${firstByte}') at offset ${offset}", {firstByte: firstByte, offset: offset})
	}
)