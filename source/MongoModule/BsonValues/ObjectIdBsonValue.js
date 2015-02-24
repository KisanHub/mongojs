/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	// 4 bytes time  3 bytes machine  2 bytes pid  3 bytes inc
	function ObjectIdBsonValue(value)
	{
		var dataView = module.restrictBinaryToDataView(value)
		if (dataView.byteLength != 12)
		{
			throw new ClassModule.IllegalArgumentException("value '${value}' must be 12 bytes long", {value: value})
		}
		
		this.super(ObjectIdBsonValue, 0x07, 'writeBytesAt', dataView)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$oid'] = this.toHexString()
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return ObjectId(this.toHexString())
	},
	
	function toHexString()
	{
		return module.toHexString(this.value, false)
	}
).readBson = function readBson(reader)
{
	return new module.ObjectIdBsonValue(reader.readBytes(12))
}

var getRandomValuesUint8
if (window.crypto && window.crypto.getRandomValues)
{
	getRandomValuesUint8 = function getRandomValuesUint8(length)
	{
		var results = new Uint8Array(length)
		window.crypto.getRandomValues(results)
		return results
	}
}
else
{
	console.warn("You should upgrade your browser to one that supports window.crypto.getRandomValues")
	getRandomValuesUint8 = function getRandomValuesUint8(length)
	{
		var results = new Uint8Array(length)
		var min = 0
		var max = 255
		var randomInt
		for(var index = 0; index < length; index++)
		{
			randomInt = Math.random() * (max - min) + min
			results[index] = randomInt
		}
		return results
	}
}

var MachineIdentifier = getRandomValuesUint8(3)
var ProcessIdentifier = getRandomValuesUint8(2)
var NextCounter = (function()
{
	var asBytes = new DataView(getRandomValuesUint8(4).buffer)
	return asBytes.getUint32(0)
})();

// http://docs.mongodb.org/manual/reference/object-id/
module.ObjectIdBsonValue.generateNewObjectId = function generateNewObjectId()
{
	var counter = NextCounter
	if (NextCounter == 4294967295)
	{
		NextCounter = 0
	}
	else
	{
		NextCounter += 1
	}
	
	var timestamp = Math.round(Date.now() / 1000)
	
	var dataView = new DataView(new ArrayBuffer(12))
	
	// BigEndian, unlike the rest of MongoDb!
	// Potentially, we could create an ArrayBuffer that we copy each time and overwrite
	dataView.setInt32(0,  timestamp, false)
	dataView.setUint8(4,  MachineIdentifier[0])
	dataView.setUint8(5,  MachineIdentifier[1])
	dataView.setUint8(6,  MachineIdentifier[2])
	dataView.setUint8(7,  ProcessIdentifier[0])
	dataView.setUint8(8,  ProcessIdentifier[1])
	dataView.setUint8(9,  (counter >> 16) & 0xFF)
	dataView.setUint8(10, (counter >> 8) & 0xFF)
	dataView.setUint8(11, (counter) & 0xFF)
	
	return new module.ObjectIdBsonValue(dataView)
}