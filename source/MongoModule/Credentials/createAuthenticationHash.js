/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var writeUtf16BigEndianStringAsUtf8At = MongoModule.BsonWriter.writeUtf16BigEndianStringAsUtf8At
var lowerCaseHexStringMd5FromDataView = MongoModule.BsonValues.lowerCaseHexStringMd5FromDataView

module.createAuthenticationHash = function createAuthenticationHash(userName, password)
{ 
	//var data = new ArrayBuffer(userName.length + 20 + password.length)
	var data = new ArrayBuffer(userName.length * 4 + 7 + password.length)
	var dataView = new DataView(data)
	var nextOffset = writeUtf16BigEndianStringAsUtf8At(dataView, userName, false, 0, dataView.byteLength)
	nextOffset = writeUtf16BigEndianStringAsUtf8At(dataView, ':mongo:', false, nextOffset, dataView.byteLength)
	
	var passwordLength = password.length
	var potentiallyAsciiCharCode
	for(var index = 0; index < passwordLength; index++)
	{
		potentiallyAsciiCharCode = password.charCodeAt(index)
		if (potentiallyAsciiCharCode > 127)
		{
			throw new ClassModule.IllegalArgumentException("Passwords must only contain ASCII characters", {})
		}
		dataView.setUint8(nextOffset, potentiallyAsciiCharCode)
		nextOffset++
	}
	
	return lowerCaseHexStringMd5FromDataView(new DataView(data, 0, nextOffset))
}

module.createKeyHash = function createKeyHash(key)
{
	// wrong; maximum expansion is probably x3 due to surrogate pair effects being x2
	var data = new ArrayBuffer(key.length * 4)
	var dataView = new DataView(data)
	var nextOffset = writeUtf16BigEndianStringAsUtf8At(dataView, key, false, 0, dataView.byteLength)
	
	return lowerCaseHexStringMd5FromDataView(new DataView(data, 0, nextOffset))
}
