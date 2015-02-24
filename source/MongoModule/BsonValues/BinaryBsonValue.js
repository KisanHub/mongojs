/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var IllegalArgumentException = ClassModule.IllegalArgumentException

module.AbstractSingleBsonValue.extend
(
	module,
	
	function BinaryBsonValue(binarySubtype, value)
	{
		if (binarySubtype > module.BinaryBsonValue.LastDefinedBinarySubtype && binarySubtype < module.BinaryBsonValue.FirstUserDefinedBinarySubtype)
		{
			throw new IllegalArgumentException("The binary subtype '${binarySubtype}' is reserved", {binarySubtype: binarySubtype})
		}
		var dataView = module.restrictBinaryToDataView(value)
		
		this.super(BinaryBsonValue, 0x05)
		this.binarySubtype = binarySubtype
		this.value = dataView
	},

	function writeBsonAt(writer, offset)
	{
		return writer.writeBinaryAt(this.binarySubType, this.value, offset)
	},
	
	function toStrictJavaScriptValue()
	{
		var binarySubtypeAsUnpaddedHexString = Number(this.binarySubtype).toString(16)
		//var binarySubtypeAsPaddedHexString = (binarySubtypeAsUnpaddedHexString.length == 1) ? '0' + binarySubtypeAsUnpaddedHexString : binarySubtypeAsUnpaddedHexString
		
		var result = {}
		result['$binary'] = this.__base64Encode()
		result['$type'] = binarySubtypeAsUnpaddedHexString
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return new BinData(this.binarySubtype, this.__base64Encode())
	},
	
	function __base64Encode()
	{
		var value = this.value
		return module.base64Encode(value, value.byteOffset, value.byteLength)
	}
).readBson = function readBson(reader)
{
	var lengthExcludingLengthAndSubtypeByte = reader.readInt32()
	
	var binarySubtype = reader.readUint8()
	if (binarySubtype > module.BinaryBsonValue.LastDefinedBinarySubtype && binarySubtype < module.BinaryBsonValue.FirstUserDefinedBinarySubtype)
	{
		throw new MongoModule.BsonReader.InvalidBsonException("Unexpected binarySubtype value '${binarySubtype}'", {binarySubtype: binarySubtype})
	}
	
	var dataView = reader.readBytes(lengthExcludingLengthAndSubtypeByte)
	
	return new module.BinaryBsonValue(binarySubtype, dataView)
}

// Or see this for an example of how to make it a robust enum: https://github.com/rauschma/enums/blob/master/enums.js
module.BinaryBsonValue.BinarySubtypes = Object.freeze
({
	Generic: 0x00,
	Function: 0x01,
	BinaryOld: 0x02,
	UuidOld: 0x03,
	Uuid: 0x04,
	Md5: 0x05
})

module.BinaryBsonValue.LastDefinedBinarySubtype = module.BinaryBsonValue.BinarySubtypes.Md5
module.BinaryBsonValue.FirstUserDefinedBinarySubtype = 0x80
