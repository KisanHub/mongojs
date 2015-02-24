/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
Copyright © 2013-2015 Mozilla Developer Network and individual contributors: any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
*/


// Based on https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_.232_.E2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_TypedArrays_and_UTF-8

function base64CharacterCodeToUint6(nChr)
{
	return
	nChr > 64 && nChr < 91 ?
	  nChr - 65
	: nChr > 96 && nChr < 123 ?
	  nChr - 71
	: nChr > 47 && nChr < 58 ?
	  nChr + 4
	: nChr === 43 ?
	  62
	: nChr === 47 ?
	  63
	:
	0;
}

module.base64Decode = function base64Decode(base64EncodedString)
{
	var nBlocksSize = 1
	
	var base64EncodedStringNewLinesStripped = base64EncodedString.replace(/[^A-Za-z0-9\+\/]/g, "")
	var nInLen = base64EncodedStringNewLinesStripped.length
	var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2
	var taBytes = new Uint8Array(nOutLen)

	for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++)
	{
		nMod4 = nInIdx & 3
		nUint24 |= base64CharacterCodeToUint6(base64EncodedStringNewLinesStripped.charCodeAt(nInIdx)) << 18 - 6 * nMod4
		if (nMod4 === 3 || nInLen - nInIdx === 1)
		{
			for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++)
			{
				taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255
			}
			nUint24 = 0
		}
	}
	return taBytes.buffer
}
