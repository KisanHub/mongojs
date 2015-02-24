/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
Copyright © 2013-2015 Mozilla Developer Network and individual contributors: any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
*/


// Based on https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_.232_.E2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_TypedArrays_and_UTF-8

// returns a string
module.base64Encode = function base64Encode(arrayBufferOrArray, offset, length)
{
	var nMod3 = 2
	var base64EncodedString = ""
	
	for (var nLen = length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++)
	{
		nMod3 = nIdx % 3
		nUint24 |=  arrayBufferOrArray[nIdx + offset] << (16 >>> nMod3 & 24)
		if (nMod3 === 2 || length - nIdx === 1)
		{
			base64EncodedString += String.fromCharCode
			(
				uint6ToBase64CharacterCode(nUint24 >>> 18 & 63),
				uint6ToBase64CharacterCode(nUint24 >>> 12 & 63),
				uint6ToBase64CharacterCode(nUint24 >>> 6 & 63),
				uint6ToBase64CharacterCode(nUint24 & 63)
			)
			nUint24 = 0;
		}
	}
	
	return base64EncodedString.substr(0, base64EncodedString.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==')
}

function uint6ToBase64CharacterCode(nUint6)
{
	return nUint6 < 26 ?
	nUint6 + 65
	: nUint6 < 52 ?
	nUint6 + 71
	: nUint6 < 62 ?
	nUint6 - 4
	: nUint6 === 62 ?
	43
	: nUint6 === 63 ?
	47
	:
	65;
}
