/*
@license Format: http://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Comment: Distribution Compilation Copyright and License
Copyright: Copyright © 2015, KisanHub <sachin@kisanhub.com>
           Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
License: MIT
 The MIT License (MIT)
 .
 Copyright © 2015, KisanHub <sachin@kisanhub.com>
 Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
 .
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 .
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 .
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

Files: *
Copyright: Copyright © 2015, KisanHub <sachin@kisanhub.com>
           Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
License: MIT
 The MIT License (MIT)
 .
 Copyright © 2015, KisanHub <sachin@kisanhub.com>
 Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
 .
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 .
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 .
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

Files: test/configuration/mime-types.conf
Copyright: Copyright © 2002-2015, Igor Sysoev
           Copyright © 2011-2015, Nginx, Inc.
License: BSD-2-Clause
 Copyright (C) 2002-2015 Igor Sysoev
 Copyright (C) 2011-2015 Nginx, Inc.
 All rights reserved.
 .
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 .
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 SUCH DAMAGE.

Files: source/MongoModule/BsonValues/base64*code.js source/MongoModule/BsonValues/isLittleEndian.js
Copyright: Copyright © 2015, KisanHub <sachin@kisanhub.com>
           Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
	       Copyright © 2013-2015 Mozilla Developer Network and individual contributors: any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
License: MIT and public-domain
 The MIT License (MIT)
 .
 Copyright © 2015, KisanHub <sachin@kisanhub.com>
 Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
 .
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 .
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 .
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

*/


var MongoModule = (function(module)
{
return module;
}(MongoModule || {}));

// /MongoModule/defaults.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.maximumBatchSize = 512
module.maximumDocumentSize = 0x1000000 // 16Mb
module.maximumMessageSize = 0x2000000 //32 Mb

return module;
}(MongoModule || {}));
// /MongoModule/ServerType.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function ServerType(isReplicaSetMemberPrimary, isReplicaSetMemberSecondary, isReplicaSetMemberArbiter, isReplicaSetMemberOther, isReplicaSetMemberGhost, isShardRouter, isStandalone)
	{
		this.super(ServerType)
		this.isReplicaSetMember = isReplicaSetMemberPrimary || isReplicaSetMemberSecondary || isReplicaSetMemberArbiter || isReplicaSetMemberOther || isReplicaSetMemberGhost
		this.isReplicaSetMemberPrimary = isReplicaSetMemberPrimary
		this.isReplicaSetMemberSecondary = isReplicaSetMemberSecondary
		this.isReplicaSetMemberArbiter = isReplicaSetMemberArbiter
		this.isReplicaSetMemberOther = isReplicaSetMemberOther
		this.isReplicaSetMemberGhost = isReplicaSetMemberGhost
		this.isShardRouter = isShardRouter
		this.isStandalone = isStandalone
		Object.freeze(this)
	},
	
	function isClusterTypeStandalone()
	{
		return this.isStandalone
	},
	
	function isClusterTypeReplica()
	{
		return this.isReplicaSetMember
	},
	
	function isClusterTypeSharded()
	{
		return this.isShardRouter
	}
)

module.ServerTypes = Object.freeze
({
	REPLICA_SET_PRIMARY:   new module.ServerType(true,  false, false, false, false, false, false),
	REPLICA_SET_SECONDARY: new module.ServerType(false, true,  false, false, false, false, false),
	REPLICA_SET_ARBITER:   new module.ServerType(false, false, true,  false, false, false, false),
	REPLICA_SET_OTHER:     new module.ServerType(false, false, false, true,  false, false, false),
	REPLICA_SET_GHOST:     new module.ServerType(false, false, false, false, true,  false, false),
	SHARD_ROUTER:          new module.ServerType(false, false, false, false, false, true,  false),
	STANDALONE:            new module.ServerType(false, false, false, false, false, false, true )
})

return module;
}(MongoModule || {}));
MongoModule.BsonValues = (function(module)
{
return module;
}(MongoModule.BsonValues || {}));

// /MongoModule/BsonValues/isLittleEndian.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
Copyright © 2013-2015 Mozilla Developer Network and individual contributors: any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
*/


module.isLittleEndian = (function()
{
  var buffer = new ArrayBuffer(2)
  new DataView(buffer).setInt16(0, 256, true)
  return new Int16Array(buffer)[0] === 256
})();

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/restrictBinaryToDataView.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.restrictBinaryToDataView = function restrictBinaryToDataView(value)
{
	// This insanity exists because javascript has no static type system and no overloading
	if (value instanceof DataView)
	{
		return value
	}
	
	if (value instanceof ArrayBuffer)
	{
		return new DataView(value, 0, value.byteLength)
	}

	var buffer = subbtype.buffer
	
	if (buffer instanceof ArrayBuffer)
	{
		return new DataView(buffer, value.byteOffset, value.byteLength)
	}
	
	if (value instanceof Blob || value instanceof File)
	{
		// Can only be converted to an ArrayBuffer using a FileReader with an event callback!
		throw new ClassModule.IllegalArgumentException("value can not be a Blob or File")
	}
	
	if (value instanceof String || typeof value === 'string')
	{
		throw new ClassModule.IllegalArgumentException("Binary strings are not currently supported")
	}
	
	if (value instanceof Array || value instanceof Arguments)
	{
		throw new ClassModule.IllegalArgumentException("Array and Arguments are not currently supported")
	}
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/toHexString.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.toHexString = function toHexString(dataView, littleEndian)
{
	var hexString = ''
	
	var index
	var terminal
	if (littleEndian)
	{
		index = dataView.byteLength - 1
		terminal = -1
	}
	else
	{
		index = 0
		terminal = dataView.byteLength
	}
	
	// littleEndian loop counts down; big Endian counts up
	while(index != terminal)
	{
		var byte = dataView.getUint8(index)
		var byteAsUnpaddedHexString = Number(byte).toString(16)
		var byteAsPaddedHexString = (byteAsUnpaddedHexString.length == 1) ? '0' + byteAsUnpaddedHexString : byteAsUnpaddedHexString
		hexString += byteAsPaddedHexString
		index = index + (littleEndian ? -1 : 1)
	}
	
	return hexString
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/base64Encode.js 

"use strict";
MongoModule.BsonValues = (function(module){
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

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/base64Decode.js 

"use strict";
MongoModule.BsonValues = (function(module){
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

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/lowerCaseHexStringMd5.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


// Derived from PouchUtils, originally a part of PouchDb. Found via post at https://stackoverflow.com/questions/1655769/fastest-md5-implementation-in-javascript

module.lowerCaseHexStringMd5FromDataView = function lowerCaseHexStringMd5FromDataView(dataView)
{
	return module.lowerCaseHexStringMd5FromUint8Array(new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength))
}

module.lowerCaseHexStringMd5FromUint8Array = function lowerCaseHexStringMd5FromUint8Array(uint8Array)
{
	return hex(md51(uint8Array))
}

function hex(x)
{
	for (var i = 0; i < x.length; i++)
	{
		x[i] = rhex(x[i])
	}
	return x.join('')
}

function md51(s)
{
	var n = s.length
	var state = [1732584193, -271733879, -1732584194, 271733878]
	var i
	
	for (i = 64; i <= s.length; i += 64)
	{
		md5cycle(state, md5blk(s.subarray(i - 64, i)));
	}
	s = s.subarray(i - 64)
	var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	for (i = 0; i < s.length; i++)
	{
		tail[i >> 2] |= s[i] << ((i % 4) << 3)
	}
	tail[i >> 2] |= 0x80 << ((i % 4) << 3)
	if (i > 55)
	{
		md5cycle(state, tail);
		for (i = 0; i < 16; i++)
		{
			tail[i] = 0
		}
	}
	tail[14] = n * 8
	md5cycle(state, tail)
	return state
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */

function md5blk(s)
{
	var md5blks = []
	var i
	for (i = 0; i < 64; i += 4)
	{
		md5blks[i >> 2] = s[i] + (s[i + 1] << 8) + (s[i + 2] << 16) + (s[i + 3] << 24);
	}
	return md5blks
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
	var s = ''
	var j = 0
	for (; j < 4; j++)
	{
		s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F]
	}
	return s
}

function add32(a, b)
{
	return (a + b) & 0xFFFFFFFF
}

function md5cycle(x, k)
{
	var a = x[0]
	var b = x[1]
	var c = x[2]
	var d = x[3]

	a = ff(a, b, c, d, k[0], 7, -680876936)
	d = ff(d, a, b, c, k[1], 12, -389564586)
	c = ff(c, d, a, b, k[2], 17, 606105819)
	b = ff(b, c, d, a, k[3], 22, -1044525330)
	a = ff(a, b, c, d, k[4], 7, -176418897)
	d = ff(d, a, b, c, k[5], 12, 1200080426)
	c = ff(c, d, a, b, k[6], 17, -1473231341)
	b = ff(b, c, d, a, k[7], 22, -45705983)
	a = ff(a, b, c, d, k[8], 7, 1770035416)
	d = ff(d, a, b, c, k[9], 12, -1958414417)
	c = ff(c, d, a, b, k[10], 17, -42063)
	b = ff(b, c, d, a, k[11], 22, -1990404162)
	a = ff(a, b, c, d, k[12], 7, 1804603682)
	d = ff(d, a, b, c, k[13], 12, -40341101)
	c = ff(c, d, a, b, k[14], 17, -1502002290)
	b = ff(b, c, d, a, k[15], 22, 1236535329)

	a = gg(a, b, c, d, k[1], 5, -165796510)
	d = gg(d, a, b, c, k[6], 9, -1069501632)
	c = gg(c, d, a, b, k[11], 14, 643717713)
	b = gg(b, c, d, a, k[0], 20, -373897302)
	a = gg(a, b, c, d, k[5], 5, -701558691)
	d = gg(d, a, b, c, k[10], 9, 38016083)
	c = gg(c, d, a, b, k[15], 14, -660478335)
	b = gg(b, c, d, a, k[4], 20, -405537848)
	a = gg(a, b, c, d, k[9], 5, 568446438)
	d = gg(d, a, b, c, k[14], 9, -1019803690)
	c = gg(c, d, a, b, k[3], 14, -187363961)
	b = gg(b, c, d, a, k[8], 20, 1163531501)
	a = gg(a, b, c, d, k[13], 5, -1444681467)
	d = gg(d, a, b, c, k[2], 9, -51403784)
	c = gg(c, d, a, b, k[7], 14, 1735328473)
	b = gg(b, c, d, a, k[12], 20, -1926607734)

	a = hh(a, b, c, d, k[5], 4, -378558)
	d = hh(d, a, b, c, k[8], 11, -2022574463)
	c = hh(c, d, a, b, k[11], 16, 1839030562)
	b = hh(b, c, d, a, k[14], 23, -35309556)
	a = hh(a, b, c, d, k[1], 4, -1530992060)
	d = hh(d, a, b, c, k[4], 11, 1272893353)
	c = hh(c, d, a, b, k[7], 16, -155497632)
	b = hh(b, c, d, a, k[10], 23, -1094730640)
	a = hh(a, b, c, d, k[13], 4, 681279174)
	d = hh(d, a, b, c, k[0], 11, -358537222)
	c = hh(c, d, a, b, k[3], 16, -722521979)
	b = hh(b, c, d, a, k[6], 23, 76029189)
	a = hh(a, b, c, d, k[9], 4, -640364487)
	d = hh(d, a, b, c, k[12], 11, -421815835)
	c = hh(c, d, a, b, k[15], 16, 530742520)
	b = hh(b, c, d, a, k[2], 23, -995338651)

	a = ii(a, b, c, d, k[0], 6, -198630844)
	d = ii(d, a, b, c, k[7], 10, 1126891415)
	c = ii(c, d, a, b, k[14], 15, -1416354905)
	b = ii(b, c, d, a, k[5], 21, -57434055)
	a = ii(a, b, c, d, k[12], 6, 1700485571)
	d = ii(d, a, b, c, k[3], 10, -1894986606)
	c = ii(c, d, a, b, k[10], 15, -1051523)
	b = ii(b, c, d, a, k[1], 21, -2054922799)
	a = ii(a, b, c, d, k[8], 6, 1873313359)
	d = ii(d, a, b, c, k[15], 10, -30611744)
	c = ii(c, d, a, b, k[6], 15, -1560198380)
	b = ii(b, c, d, a, k[13], 21, 1309151649)
	a = ii(a, b, c, d, k[4], 6, -145523070)
	d = ii(d, a, b, c, k[11], 10, -1120210379)
	c = ii(c, d, a, b, k[2], 15, 718787259)
	b = ii(b, c, d, a, k[9], 21, -343485551)

	x[0] = add32(a, x[0])
	x[1] = add32(b, x[1])
	x[2] = add32(c, x[2])
	x[3] = add32(d, x[3])
}

function cmn(q, a, b, x, s, t)
{
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b)
}

function ff(a, b, c, d, x, s, t)
{
	return cmn((b & c) | ((~b) & d), a, b, x, s, t)
}

function gg(a, b, c, d, x, s, t)
{
	return cmn((b & d) | (c & (~d)), a, b, x, s, t)
}

function hh(a, b, c, d, x, s, t)
{
	return cmn(b ^ c ^ d, a, b, x, s, t)
}

function ii(a, b, c, d, x, s, t)
{
	return cmn(c ^ (b | (~d)), a, b, x, s, t)
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/BsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var VirtualMethodException = ClassModule.VirtualMethodException

ClassModule.Object.extend
(
	module,
	
	function BsonValue()
	{
		this.super(BsonValue)
	},
	
	function writeBson(writer)
	{
		throw new VirtualMethodException()
	},

	function writeBsonAt(writer, offset)
	{
		throw new VirtualMethodException()
	},
	
	function toString()
	{
		throw new VirtualMethodException()
	},
	
	// equivalent to JsonMode.STRICT
	function toStrictJavaScriptValue()
	{
		throw new VirtualMethodException()
	},
	
	// equivalent to JsonMode.SHELL
	function toShellJavaScriptValue()
	{
		throw new VirtualMethodException()
	},
	
	function elementType()
	{
		throw new VirtualMethodException()
	}
)
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/AbstractBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.BsonValue.extend
(
	module,
	
	function AbstractBsonValue(code)
	{
		this.super(AbstractBsonValue)
		this.code = code
	},
	
	function writeBson(writer)
	{
		return (writer.offset = this.writeBsonAt(writer, writer.offset))
	},
	
	function elementType()
	{
		return this.code
	}
)
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/AbstractSingleBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function AbstractSingleBsonValue(code, writeFunction, value)
	{
		this.super(AbstractSingleBsonValue, code)
		this.writeFunction = writeFunction
		this.value = value
	},

	function writeBsonAt(writer, offset)
	{
		return writer[this.writeFunction](this.value, offset)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.value + ')'
	}
)

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/AbstractObjectBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
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
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/AbstractEmptyBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function AbstractEmptyBsonValue(code, emptyExpression)
	{
		this.super(AbstractEmptyBsonValue, code)
		this.emptyExpression = emptyExpression
	},

	function writeBsonAt(writer, offset)
	{
		return offset
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.emptyExpression + ')'
	}
)
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/AbstractSigned64BitBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
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

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/DoubleBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function DoubleBsonValue(value)
	{
		this.super(DoubleBsonValue, 0x01, 'writeDoubleAt', value)
	},
	
	function toStrictJavaScriptValue()
	{
		return this.value
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	},
	
	function isOne()
	{
		return this.value == 1
	}
).readBson = function readBson(reader)
{
	return new module.DoubleBsonValue(reader.readDouble())
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/StringBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function StringBsonValue(value)
	{
		this.super(StringBsonValue, 0x02, 'writeStringAt', value)
	},
	
	function toStrictJavaScriptValue()
	{
		return this.value
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return new module.StringBsonValue(reader.readString())
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/DocumentBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractObjectBsonValue.extend
(
	module,
	
	// {key: value} style
	function DocumentBsonValue(value)
	{
		this.super(DocumentBsonValue, 0x03, 'writeDocumentAt', value)
	},
	
	function emptyDocument()
	{
		return {}
	}
).readBson = function readBson(reader)
{
	return module.AbstractObjectBsonValue.readBsonDocument(reader, {}, module.DocumentBsonValue)
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/ArrayBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractObjectBsonValue.extend
(
	module,
	
	// [value1, value2] style; all keys must be numbers and must be contiguous starting from zero
	function ArrayBsonValue(value)
	{
		if (!(value instanceof Array))
		{
			throw new ClassModule.IllegalArgumentException("value '${value}' must be an Array", {value: value})
		}
		var expectedName = 0
		for(name in value)
		{
			if (ClassModule.safeHasOwnProperty(value, name))
			{
				if (name !== '' + expectedName)
				{
					throw new ClassModule.IllegalArgumentException("value '${value}' must be an Array with contiguous numeric keys starting at zero (0)", {value: value})
				}
				expectedName += 1
			}
		}
		
		this.super(ArrayBsonValue, 0x04, 'writeDocumentAt', value)
		this.length = value.length
	},
	
	function emptyDocument()
	{
		return []
	},
	
	function push()
	{
		var newLength = Array.prototype.push.apply(this, Array.prototype.slice.apply(arguments))

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
					return this.value[newLength - 1]
				},
				set: function set(newValue)
				{
					this.value[newLength - 1] = newValue
				}
			}
		)
		return newLength
	}
).readBson = function readBson(reader)
{
	return module.AbstractObjectBsonValue.readBsonDocument(reader, [], module.ArrayBsonValue)
}

module.ArrayBsonValue.push = Array.prototype.push
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/BinaryBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
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

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/UndefinedBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function UndefinedBsonValue()
	{
		this.super(UndefinedBsonValue, 0x06, 'undefined')
		this.value = undefined
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$undefined'] = true
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return undefined
	}
).readBson = function readBson(reader)
{
	return module.UndefinedBsonValue.Singleton
}

module.UndefinedBsonValue.Singleton = new module.UndefinedBsonValue()

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/ObjectIdBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
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
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/BooleanBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function BooleanBsonValue(value)
	{	
		if (!(value instanceof Boolean))
		{
			if (typeof value !== 'boolean')
			{
				throw new ClassModule.IllegalArgumentException("value '${value}' must be Boolean or boolean", {value: value})
			}
		}
		this.super(BooleanBsonValue, 0x08)
		this.value = value
	},

	function writeBsonAt(writer, offset)
	{
		return writer.writeByteAt(this.value ? 0x01 : 0x00, offset)
	},
	
	function toStrictJavaScriptValue()
	{
		return (this.value) ? true : false
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	},
	
	function isTrue()
	{
		return (this.value) ? true : false
	},
	
	function isFalse()
	{
		return !(this.isTrue())
	}
).readBson = function readBson(reader)
{
	var raw = reader.readUint8()
	
	switch(raw)
	{
		case 0x00:
			return module.BooleanBsonValue.BsonFalse
		
		case 0x01:
			return module.BooleanBsonValue.BsonTrue
			
		default:
			throw new MongoModule.BsonReader.InvalidBsonException("Unexpected boolean value '${raw}'", {raw: raw})
	}
}

module.BooleanBsonValue.BsonFalse = new module.BooleanBsonValue(true)
module.BooleanBsonValue.BsonTrue = new module.BooleanBsonValue(false)

module.BooleanBsonValue.bsonBoolean = function bsonBoolean(value)
{
	return value ? module.BooleanBsonValue.BsonTrue : module.BooleanBsonValue.BsonFalse
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/UtcDateTimeBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


// Also called Date
// Millisecond Accuracy from Unix Epoch 1970
module.AbstractSigned64BitBsonValue.extend
(
	module,
	
	function UtcDateTimeBsonValue(value)
	{
		this.super(UtcDateTimeBsonValue, 0x09, value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$date'] = this.asString()
		return result
	},
	
	function toShellJavaScriptValue()
	{
		var value = this.toNumber()
		var date = Date(value)
        if (value >= -59014396800000 && value <= 253399536000000)
		{
			return ISODate(date.toISOString())
		}
		return date
	}
).readBson = function readBson(reader)
{
	return new module.UtcDateTimeBsonValue(reader.readInt64())
}

module.UtcDateTimeBsonValue.fromBits = function fromBits(highBits, lowBits)
{
	return module.AbstractSigned64BitBsonValue.fromBits(module.UtcDateTimeBsonValue, highBits, lowBits)
}

module.UtcDateTimeBsonValue.fromUnsigned32BitInteger = function fromUnsigned32BitInteger(value)
{
	return module.AbstractSigned64BitBsonValue.fromUnsigned32BitInteger(module.UtcDateTimeBsonValue, value)
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/NullBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function NullBsonValue()
	{
		this.super(NullBsonValue, 0x0A, 'null')
		this.value = null
	},
	
	function toStrictJavaScriptValue()
	{
		return null
	},
	
	function toShellJavaScriptValue()
	{
		return null
	}
).readBson = function readBson(reader)
{
	return module.NullBsonValue.Singleton
}
module.NullBsonValue.Singleton = new module.NullBsonValue()
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/RegexBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function RegexBsonValue(pattern, options)
	{
		this.super(RegexBsonValue, 0x0B)
		this.pattern = pattern
		this.options = options
		this.value = [pattern, options]
	},

	function writeBsonAt(writer, offset)
	{
		var currentOffset = writer.writeCStringAt(this.pattern, currentOffset)
		return writer.writeCStringAt(this.options, currentOffset)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.regex + ', ' + this.options + ')'
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$regex'] = this.pattern
		result['$options'] = this.options
		return result
	},
	
	function toShellJavaScriptValue()
	{
       return this.toRegExp()
	},
	
	function toRegExp()
	{
		return new RegExp(this.pattern, this.options)
	}
).readBson = function readBson(reader)
{
	return new module.RegexBsonValue(reader.readCString(), reader.readCString())
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/DbPointerBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function DbPointerBsonValue(namespace, objectId)
	{
		if (!(objectId instanceof ObjectIdBsonValue))
		{
			throw new ClassModule.IllegalArgumentException("objectId '${objectId}' must be instanceof ObjectIdBsonValue", {objectId: objectId})
		}
		
		this.super(DbPointerBsonValue, 0x0C)
		this.namespace = namespace
		this.objectId = objectId
		this.value = [namespace, objectId]
	},

	function writeBsonAt(writer, offset)
	{
		var currentOffset = writer.writeStringAt(this.namespace, currentOffset)
		return writer.writeBytesAt(this.objectId.dataView, currentOffset)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.string + ', ' + this.bytes + ')'
	},
	
	function toStrictJavaScriptValue()
	{
		return this.__toJavaScript('toStrictJavaScriptValue')
	},
	
	function toShellJavaScriptValue()
	{
		return this.__toJavaScript('toShellJavaScriptValue')
	},
	
	function __toJavaScript(toJavaScriptVariantFunctionName)
	{
		var result = {}
		result['$ref'] = this.namespace
		result['$id'] = this.objectId[toJavaScriptVariantFunctionName]()
		return result
	}
).readBson = function readBson(reader)
{
	return new module.DbPointerBsonValue(reader.readString(), module.ObjectIdBsonValue.readBytes(12))
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/JavaScriptCodeBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function JavaScriptCodeBsonValue(value)
	{
		this.super(JavaScriptCodeBsonValue, 0x0D, 'writeStringAt', value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$code'] = this.value
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return new module.JavaScriptCodeBsonValue(reader.readString())
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/SymbolBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	// Deprecated
	function SymbolBsonValue(value)
	{
		this.super(SymbolBsonValue, 0x0E, 'writeStringAt', value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$symbol'] = this.value
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return new module.SymbolBsonValue(reader.readString())
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/JavaScriptCodeWithScopeBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function JavaScriptCodeWithScopeBsonValue(javaScriptCode, scopeDocument)
	{
		var document
		if (scopeDocument instanceof DocumentBsonValue)
		{
			document = scopeDocument
		}
		else
		{
			document = new module.DocumentBsonValue(scopeDocument)
		}
		
		this.super(JavaScriptCodeWithScopeBsonValue, 0x0F)
		this.javaScriptCode = javaScriptCode
		this.scopeDocument = document
		this.value = [javaScriptCode, scopeDocument]
	},

	function writeBsonAt(writer, offset)
	{
		// skip length
		var currentOffset = offset + 4
		currentOffset = writer.writeStringAt(this.javaScriptCode, currentOffset)
		currentOffset = writer.writeDocumentAt(this.scopeDocument, currentOffset)
		
		writer.writeInt32At(currentOffset - offset, offset)
		
		return currentOffset
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.javaScriptCode + ', ' + this.scopeDocument + ')'
	},
	
	function toStrictJavaScriptValue()
	{
		return this.__toJavaScript('toStrictJavaScriptValue')
	},
	
	function toShellJavaScriptValue()
	{
		return this.__toJavaScript('toShellJavaScriptValue')
	},
	
	function __toJavaScript(toJavaScriptVariantFunctionName)
	{
		var result = {}
		result['$code'] = this.javaScriptCode
		result['$scope'] = this.scopeDocument[toJavaScriptVariantFunctionName]()
		return result
	}
).readBson = function readBson(reader)
{
	var lengthIncludingLength = reader.readInt32()
	var javaScriptCode = reader.readString()
	var scopeDocument = module.DocumentBsonValue.readBson(reader)
	return new module.JavaScriptCodeWithScopeBsonValue(javaScriptCode, scopeDocument)
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/Int32BsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSingleBsonValue.extend
(
	module,
	
	function Int32BsonValue(value)
	{
		this.super(Int32BsonValue, 0x10, 'writeInt32At', value)
	},
	
	function toStrictJavaScriptValue()
	{
		return this.value
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	},
	
	function isZero()
	{
		return this.value == 0
	},
	
	function isOne()
	{
		return this.value == 1
	},
	
	function isNotZero()
	{
		return this.value != 0
	},
	
	function isGreaterThan(value)
	{
		return this.value > value
	},
	
	function toInt()
	{
		return this.value
	}
).readBson = function readBson(reader)
{
	return new module.Int32BsonValue(reader.readInt32())
}

module.Int32BsonValue.Zero = new module.Int32BsonValue(0)
module.Int32BsonValue.One = new module.Int32BsonValue(1)
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/TimestampBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractBsonValue.extend
(
	module,
	
	function TimestampBsonValue(unix32BitTime, ordinal)
	{
		this.super(TimestampBsonValue, 0x11)
		this.unix32BitTime = unix32BitTime
		this.ordinal = ordinal
		this.value = [unix32BitTime, ordinal]
	},

	function writeBsonAt(writer, offset)
	{
		// technically, an int64, but ... written as 2x 32-bit integers, order reversed, as Little Endian
		
        var currentOffset = writer.writeInt32At(value.ordinal, offset)
        return writer.writeInt32At(value.unix32BitTime, currentOffset)
	},
	
	function toString()
	{
		return this.constructor.className + '(' + this.unix32BitTime + ', ' + this.ordinal + ')'
	},
	
	function toStrictJavaScriptValue()
	{
		var timestamp = {}
		timestamp['$t'] = this.unix32BitTime
		timestamp['$i'] = this.ordinal
		
		var result = {}
		result['$timestamp'] = timestamp
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return Timestamp(this.unix32BitTime, this.ordinal)
	}
).readBson = function readBson(reader)
{
	var ordinal = reader.readInt32()
	var unix32BitTime = reader.readInt32()
	return new module.TimestampBsonValue(unix32BitTime, ordinal)
}
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/Int64BsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractSigned64BitBsonValue.extend
(
	module,
	
	function Int64BsonValue(value)
	{
		this.super(Int64BsonValue, 0x12, value)
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$numberLong'] = this.asString()
		return result
	},
	
	function toShellJavaScriptValue()
	{
		var value = this.toNumber()
		if (value >= -2147483648 && value <= 2147483647)
		{
			return NumberLong(value)
		}
		return NumberLong(this.asString())
	}
).readBson = function readBson(reader)
{
	return new module.Int64BsonValue(reader.readInt64())
}

module.Int64BsonValue.fromBits = function fromBits(highBits, lowBits)
{
	return module.AbstractSigned64BitBsonValue.fromBits(module.Int64BsonValue, highBits, lowBits)
}

module.Int64BsonValue.fromUnsigned32BitInteger = function fromUnsigned32BitInteger(value)
{
	return module.AbstractSigned64BitBsonValue.fromUnsigned32BitInteger(module.Int64BsonValue, value)
}

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/MinKeyBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function MinKeyBsonValue()
	{
		this.super(MinKeyBsonValue, 0xFF, '')
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$minKey'] = 1
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return module.MinKeyBsonValue.Singleton
}
module.MinKeyBsonValue.Singleton = new module.MinKeyBsonValue()
return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/MaxKeyBsonValue.js 

"use strict";
MongoModule.BsonValues = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractEmptyBsonValue.extend
(
	module,
	
	function MaxKeyBsonValue()
	{
		this.super(MaxKeyBsonValue, 0x7F, '')
	},
	
	function toStrictJavaScriptValue()
	{
		var result = {}
		result['$maxKey'] = 1
		return result
	},
	
	function toShellJavaScriptValue()
	{
		return this.toStrictJavaScriptValue()
	}
).readBson = function readBson(reader)
{
	return module.MaxKeyBsonValue.Singleton
}
module.MaxKeyBsonValue.Singleton = new module.MaxKeyBsonValue()

return module;
}(MongoModule.BsonValues || {}));
// /MongoModule/BsonValues/fromStrictJavascript.js 

"use strict";
MongoModule.BsonValues = (function(module){
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

return module;
}(MongoModule.BsonValues || {}));
MongoModule.Messages = (function(module)
{
return module;
}(MongoModule.Messages || {}));

// /MongoModule/Messages/isBitSet.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.isBitSet = function isBitSet(value, bit)
{
	return ((1 << bit) & value) != 0
}
return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/guard.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.guardZeroInt32 = function guardZeroInt32(zeroInt32)
{
	if (zeroInt32 != 0)
	{
		throw new ClassModule.IllegalArgumentException("zeroInt32 '${zeroInt32}' is not zero (0)", {zeroInt32: zeroInt32})
	}
}

module.guardFlagsDoesNotExceed = function guardFlagsDoesNotExceed(flagsInt32, canNotBeGreaterThan, name)
{
	var ourName = ClassModule.default(name, 'flagsInt32')
	if (flagsInt32 > canNotBeGreaterThan)
	{
		throw new ClassModule.IllegalArgumentException("${ourName} '${flagsInt32}' can can not be greater than ${canNotBeGreaterThan}", {ourName: ourName, flagsInt32: flagsInt32, canNotBeGreaterThan: canNotBeGreaterThan})
	}
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/InvalidMessageException.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function InvalidMessageException(templatedMessage, formatArguments)
	{
		this.super(InvalidMessageException, templatedMessage, formatArguments)
	}
)

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/Message.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,

	function Message()
	{
		this.super(Message)
	},

	function writeBson(writer)
	{
		throw new ClassModule.VirtualMethodException()
	}
).readMessage = function readMessage(reader)
{
	return module.AbstractMessage.readMessage(reader)
}
return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/AbstractMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var InvalidMessageException = module.InvalidMessageException

module.Message.extend
(
	module,

	function AbstractMessage(requestIdInt32, responseToInt32, opCodeInt32)
	{
		this.super(AbstractMessage)
		this.requestIdInt32 = requestIdInt32
		this.responseToInt32 = responseToInt32
		this.opCodeInt32 = opCodeInt32
	},

	function writeBson(writer)
	{
		var messageLengthOffset = writer.offset
		writer.skipInt32()
		writer.writeInt32(this.requestIdInt32)
		writer.writeInt32(this.responseToInt32)
		writer.writeInt32(this.opCodeInt32)
		
		this.writeBsonContents(writer)
		
		var messageLength = writer.offset - messageLengthOffset
		writer.writeInt32At(messageLength, messageLengthOffset)
		
		return messageLength
	},

	function writeBsonContents(writer)
	{
		throw new ClassModule.VirtualMethodException()
	}
).readMessage = function readMessage(reader)
{
	var messageLength = reader.readInt32()
	var terminalOffset = reader._guardUnderflow(reader.offset, messageLength - 4)
	
	var requestId = reader.readInt32()
	var responseToId = reader.readInt32()
	var opCode = reader.readInt32()
	
	return findMessageType(opCode).readMessageContents(reader, terminalOffset, requestId, responseToId)
}

function findMessageType(opCode)
{
	switch(opCode)
	{
		case module.OpCodes.OP_REPLY:
			return module.ReplyMessage
		
		case module.OpCodes.OP_MSG:
			return module.MsgMessage
		
		case module.OpCodes.OP_UPDATE:
			return module.UpdateMessage
		
		case module.OpCodes.OP_INSERT:
			return module.InsertMessage
			
		case 2003:
			throw new InvalidMessageException("opCode '${opCode}' is 'RESERVED', formerly OP_GET_BY_OID", {opCode: opCode})
		
		case module.OpCodes.OP_QUERY:
			return module.QueryMessage
		
		case module.OpCodes.OP_GET_MORE:
			return module.GetMoreMessage
		
		case module.OpCodes.OP_DELETE:
			return module.DeleteMessage
		
		case module.OpCodes.OP_KILL_CURSORS:
			return module.KillCursorsMessage
		
		default:
			throw new InvalidMessageException("Unknown opCode '${opCode}'", {opCode: opCode})
	}
}
return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/MsgMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_MSG = 1000

module.AbstractMessage.extend
(
	module,

	function MsgMessage(requestIdInt32, responseToInt32, message)
	{
		this.super(MsgMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_MSG)
	
		this.message = message
	},
	
	function writeBsonContents(writer)
	{
		writer.writeCstring(this.message)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a MsgMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/UpdateMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_UPDATE = 2001

module.AbstractMessage.extend
(
	module,

	function UpdateMessage(requestIdInt32, responseToInt32, zeroInt32, fullCollectionName, flagsInt32, selectorDocument, updateDocument)
	{
		module.guardZeroInt32(zeroInt32)
		module.guardFlagsDoesNotExceed(flagsInt32, 3)
		
		this.super(UpdateMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_UPDATE)
	
		this.zeroInt32 = zeroInt32
		this.fullCollectionName = fullCollectionName
		this.flagsInt32 = flagsInt32
		this.selectorDocument = selectorDocument
		this.updateDocument = updateDocument
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.flagsInt32)
		writer.write(this.selectorDocument)
		writer.write(this.updateDocument)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect an UpdateMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/InsertMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_INSERT = 2002

module.AbstractMessage.extend
(
	module,

	function InsertMessage(requestIdInt32, responseToInt32, flagsInt32, fullCollectionName, documents)
	{
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(InsertMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_INSERT)
		
		this.flagsInt32 = flagsInt32
		this.fullCollectionName = fullCollectionName
		this.documents = documents
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.flagsInt32)
		writer.writeCstring(this.fullCollectionName)
		
		this.documents.forEach(function(document)
		{
			document.writeBson(writer)
		})
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect an InsertMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/QueryMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_QUERY = 2004

module.AbstractMessage.extend
(
	module,

	function QueryMessage(requestIdInt32, responseToInt32, flagsInt32, fullCollectionName, numberToSkipInt32, numberToReturnInt32, queryDocument, returnFieldsSelectorDocument)
	{
		module.guardFlagsDoesNotExceed(flagsInt32, 255)
		
		if (module.isBitSet(flagsInt32, 0))
		{
			throw new ClassModule.IllegalArgumentException("flagsInt32 '${flagsInt32}' must not have bit 0 set", {flagsInt32: flagsInt32})
		}
		
		this.super(QueryMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_QUERY)
		
		this.flagsInt32 = flagsInt32
		this.fullCollectionName = fullCollectionName
		this.numberToSkipInt32 = numberToSkipInt32
		this.numberToReturnInt32 = numberToReturnInt32
		this.queryDocument = queryDocument
		
		// returnFieldsSelectorDocument is optional
		this.returnFieldsSelectorDocument = ClassModule.default(returnFieldsSelectorDocument, null)
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.flagsInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.numberToSkipInt32)
		writer.writeInt32(this.numberToReturnInt32)
		writer.write(this.queryDocument)
		
		if (this.returnFieldsSelectorDocument !== null)
		{
			writer.write(this.returnFieldsSelectorDocument)
		}
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a QueryMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/GetMoreMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_GET_MORE = 2005

module.AbstractMessage.extend
(
	module,

	function GetMoreMessage(requestIdInt32, responseToInt32, zeroInt32, fullCollectionName, numberToReturnInt32, cursorIdInt64)
	{
		module.guardZeroInt32(zeroInt32)
		this.super(GetMoreMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_GET_MORE)
	
		this.zeroInt32 = zeroInt32
		this.fullCollectionName = fullCollectionName
		this.numberToReturnInt32 = numberToReturnInt32
		this.cursorIdInt64 = cursorIdInt64
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.numberToReturnInt32)
		writer.write(this.cursorIdInt64)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a GetMoreMessage in reply", {})
}


return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/DeleteMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_DELETE = 2006

module.AbstractMessage.extend
(
	module,

	function DeleteMessage(requestIdInt32, responseToInt32, zeroInt32, fullCollectionName, flagsInt32, selectorDocument)
	{
		module.guardZeroInt32(zeroInt32)
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(DeleteMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_DELETE)
		
		this.zeroInt32 = zeroInt32
		this.fullCollectionName = fullCollectionName
		this.flagsInt32 = flagsInt32
		this.selectorDocument = selectorDocument
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.flagsInt32)
		this.selectorDocument.writeBson(writer)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a DeleteMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/KillCursorsMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_KILL_CURSORS = 2007

module.AbstractMessage.extend
(
	module,

	function KillCursorsMessage(requestIdInt32, responseToInt32, zeroInt32, cursorIdInt64s)
	{
		module.guardZeroInt32(zeroInt32)
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(KillCursorsMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_KILL_CURSORS)
	
		this.zeroInt32 = zeroInt32
		this.cursorIdInt64s = cursorIdInt64s
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		// numberOfCursorIdsInt32
		writer.writeInt32(this.cursorIdInt64s.length)

		this.cursorIdInt64s.forEach(function(cursorIdInt64)
		{
			writer.write(cursorIdInt64)
		})
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a KillCursorsMessage in reply", {})
}

return module;
}(MongoModule.Messages || {}));
// /MongoModule/Messages/ReplyMessage.js 

"use strict";
MongoModule.Messages = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_REPLY = 1

var TemplatedException = ClassModule.TemplatedException
var GetMoreMessage = MongoModule.Messages.GetMoreMessage
var KillCursorsMessage = MongoModule.Messages.KillCursorsMessage
var DocumentBsonValue = MongoModule.BsonValues.DocumentBsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue

module.AbstractMessage.extend
(
	module,

	function ReplyMessage(requestIdInt32, responseToInt32, responseFlagsInt32, cursorIdInt64, startingFromInt32, documents)
	{
		module.guardFlagsDoesNotExceed(responseFlagsInt32, 15, 'responseFlagsInt32')
		
		this.super(ReplyMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_REPLY)
		
		this.responseFlagsInt32 = responseFlagsInt32
		this.cursorIdInt64 = cursorIdInt64
		this.startingFromInt32 = startingFromInt32
		this.documents = documents
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.responseFlagsInt32)
		writer.write(this.cursorIdInt64)
		writer.writeInt32(this.startingFromInt32)
		// numberReturnedInt32
		writer.writeInt32(this.documents.length)
		
		this.documents.forEach(function(document)
		{
			writer.write(document)
		})
	},
	
	function process(connection, resultHandlerTuples)
	{
		var resultHandlerTuple = resultHandlerTuples[this.responseToInt32]
		if (!resultHandlerTuple)
		{
			throw "No known resultHandlerTuple for responseToInt32 " + this.responseToInt32
		}
		delete resultHandlerTuples[this.responseToInt32]
		var resultHandler = resultHandlerTuple.resultHandler
		
		var moreAvailable = this.cursorIdInt64.isNotZero()
		
		var wasCursorNotFound = this.wasCursorNotFound()
		var didGetMoreOrQueryButNotCommandFail = this.didGetMoreOrQueryButNotCommandFail()
		var getMoreTuple = resultHandler.results(this.documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
		
		if (wasCursorNotFound || didGetMoreOrQueryButNotCommandFail)
		{
			if (getMoreTuple.getMore)
			{
				throw new TemplatedException("getMoreTuple.getMore was true but moreAvailable was false", {})
			}
			return
		}
		
		if (moreAvailable)
		{
			var fullCollectionName = resultHandlerTuple.fullCollectionName
			var nextRequestId = resultHandlerTuples.nextRequestId()
			if (getMoreTuple.getMore)
			{
				connection.send
				(
					fullCollectionName,
					resultHandler,
					new GetMoreMessage(nextRequestId, this.requestIdInt32, 0, resultHandlerTuple.fullCollectionName, getMoreTuple.batchSize, this.cursorIdInt64)
				)
			}
			else
			{
				connection.send
				(
					fullCollectionName,
					null, // there shouldn't be a result, I feel
					new KillCursorsMessage(nextRequestId, this.requestIdInt32, 0, [this.cursorIdInt64])
				)
			}
		}
		else
		{
			if (getMoreTuple.getMore)
			{
				throw new TemplatedException("getMoreTuple.getMore was true but moreAvailable was false", {})
			}
		}
	},
	
	function wasCursorNotFound()
	{
		return this.isResponseFlagBitSet(0)
	},
	
	function didGetMoreOrQueryButNotCommandFail()
	{
		return this.isResponseFlagBitSet(1)
	},
	
	function isShardConfigStale()
	{
		return this.isResponseFlagBitSet(2)
	},
	
	function isMongoDbAwaitCapable()
	{
		return this.isResponseFlagBitSet(3)
	},
	
	function isResponseFlagBitSet(bit)
	{
		return module.isBitSet(this.responseFlagsInt32, bit)
	}
	
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	var responseFlagsInt32 = reader.readInt32()
	var cursorIdInt64 = new Int64BsonValue(reader.readInt64())
	var startingFromInt32 = reader.readInt32()
	var numberReturnedInt32 = reader.readInt32()
	
	// read up the documents
	var documents = []
	for(var index = 0; index < numberReturnedInt32; index++)
	{
		documents.push(DocumentBsonValue.readBson(reader))
	}
	if (reader.offset != terminalOffset)
	{
		throw new module.InvalidMessageException("Expected an offset of '${terminalOffset}' but got an offset of '${offset}'", {terminalOffset: terminalOffset, offset: reader.offset})
	}
	return new module.ReplyMessage(requestId, responseToId, responseFlagsInt32, cursorIdInt64, startingFromInt32, documents)
}

return module;
}(MongoModule.Messages || {}));
MongoModule.BsonWriter = (function(module)
{
return module;
}(MongoModule.BsonWriter || {}));

// /MongoModule/BsonWriter/BsonWriterOverflowException.js 

"use strict";
MongoModule.BsonWriter = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function BsonWriterOverflowException(offset, requiredSpace, maximumLength)
	{
		this.super(BsonWriterOverflowException, "The offset ${offset} + required space ${requiredSpace} exceeds the maximum length ${maximumLength}, causing overflow", {offset: offset, requiredSpace: requiredSpace, maximumLength: maximumLength})
	}
)

return module;
}(MongoModule.BsonWriter || {}));
// /MongoModule/BsonWriter/InvalidUtf16StringException.js 

"use strict";
MongoModule.BsonWriter = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.IllegalArgumentException.extend
(
	module,
	
	function InvalidUtf16StringException(string, index, description)
	{
		this.super(InvalidUtf16StringException, "The string '${string}' at index '${index}' ${description}", {string: string, index: index, description: description})
	}
)

return module;
}(MongoModule.BsonWriter || {}));
// /MongoModule/BsonWriter/InvalidUnicodeCodePointException.js 

"use strict";
MongoModule.BsonWriter = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.IllegalArgumentException.extend
(
	module,
	
	function InvalidUnicodeCodePointException(invalidUnicodeCodePoint, description)
	{
		this.super(InvalidUnicodeCodePointException, "The unicode code point '${invalidUnicodeCodePoint}' ${description}", {invalidUnicodeCodePoint: invalidUnicodeCodePoint, description: description})
	}
)

return module;
}(MongoModule.BsonWriter || {}));
// /MongoModule/BsonWriter/BsonWriter.js 

"use strict";
MongoModule.BsonWriter = (function(module){
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

return module;
}(MongoModule.BsonWriter || {}));
MongoModule.BsonReader = (function(module)
{
return module;
}(MongoModule.BsonReader || {}));

// /MongoModule/BsonReader/BsonReaderUnderflowException.js 

"use strict";
MongoModule.BsonReader = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function BsonReaderUnderflowException(offset, requiredSpace, maximumLength)
	{
		this.super(BsonReaderUnderflowException, "The offset ${offset} + required space ${requiredSpace} exceeds the maximum length ${maximumLength}, causing underflow", {offset: offset, requiredSpace: requiredSpace, length: maximumLength})
	}
)

return module;
}(MongoModule.BsonReader || {}));
// /MongoModule/BsonReader/InvalidBsonException.js 

"use strict";
MongoModule.BsonReader = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function InvalidBsonException(templatedMessage, formatArguments)
	{
		this.super(InvalidBsonException, templatedMessage, formatArguments)
	}
)

return module;
}(MongoModule.BsonReader || {}));
// /MongoModule/BsonReader/InvalidUtf8CodePointException.js 

"use strict";
MongoModule.BsonReader = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function InvalidUtf8CodePointException(templatedMessage, formatArguments)
	{
		this.super(InvalidUtf8CodePointException, templatedMessage, formatArguments)
	}
)

return module;
}(MongoModule.BsonReader || {}));
// /MongoModule/BsonReader/BsonReader.js 

"use strict";
MongoModule.BsonReader = (function(module){
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
return module;
}(MongoModule.BsonReader || {}));
MongoModule.ResultHandlers = (function(module)
{
return module;
}(MongoModule.ResultHandlers || {}));

// /MongoModule/ResultHandlers/getValueOrDefault.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var safeHasOwnProperty = ClassModule.safeHasOwnProperty
module.getValueOrDefault = function getValueOrDefault(unwrappedDocument, field, defaultValue)
{
	if (safeHasOwnProperty(unwrappedDocument, field))
	{
		return unwrappedDocument[field].value
	}
	return defaultValue
}

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/ResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var VirtualMethodException = ClassModule.VirtualMethodException

ClassModule.Object.extend
(
	module,
	
	function ResultHandler()
	{
		this.super(ResultHandler)
	},
	
	// tuple, [true / false get more, batchSize]
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		throw new VirtualMethodException()
	}
)

// in the original OP_QUERY, -(number) means return that number and close
// (number) means batchSize
// (0) means server-default batch sizes
module.ResultHandler.NoMoreResults =
{
	getMore: false,
	batchSize: 0
}
module.ResultHandler.AnyNumberMoreResults =
{
	getMore: true,
	batchSize: 0
}

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/AbstractResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults

module.ResultHandler.extend
(
	module,
	
	function AbstractResultHandler(callback)
	{
		this.super(AbstractResultHandler)
		this.callback = callback
	},
	
	function doCallback()
	{
		var callback = this.callback
		if (callback instanceof Function)
		{
			callback.apply(this, Array.prototype.slice.call(arguments))
		}
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/QueryResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var NoMoreResults = module.ResultHandler.NoMoreResults
var ArrayBsonValue = MongoModule.BsonValues.ArrayBsonValue

module.AbstractResultHandler.extend
(
	module,
	
	function QueryResultsHandler(callback, actualBatchSize, requestedBatchSize, limit)
	{
		this.super(QueryResultsHandler)
		this.callback = callback
		this.actualBatchSize = actualBatchSize
		this.requestedBatchSize = requestedBatchSize
		this.limit = limit
		this.documentIndex = 0
		this.batchIndicator = 0
		this.getMoreBatchSizeTuple =
		{
			getMore: true,
			actualBatchSize: actualBatchSize
		}
	},
	
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		var callback = this.callback
		
		if (wasCursorNotFound)
		{
			callback(true, "Cursor not found")
			return NoMoreResults
		}
		
		if (didGetMoreOrQueryButNotCommandFail)
		{
			if (documents.length != 1)
			{
				throw new TemplatedException("Did not expect more than one document for Command (got '${length}')", {length: documents.length})
			}
			
			var unwrappedErrorDocument = documents[0].value
			
			var errorMessage = module.getValueOrDefault(unwrappedErrorDocument, '$err', 'No supplied error message')
			
			callback(true, errorMessage)
			return NoMoreResults
		}
		
		var actualBatchSize = this.actualBatchSize
		var limit = this.limit
		var documentIndex = this.documentIndex
		var batchIndicator = this.batchIndicator
		
		var indicatedBatchSize = documents.length
		var shouldContinue
		documents.forEach(function(document, index)
		{
			if (documentIndex == limit)
			{
				return NoMoreResults
			}
			
			shouldContinue = callback(false, document, (!moreAvailable || documentIndex == limit - 1), batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
			if (shouldContinue === false)
			{
				return NoMoreResults
			}
			documentIndex += 1
		})
		
		if (documentIndex == limit)
		{
			return NoMoreResults
		}
		
		if (moreAvailable)
		{
			this.documentIndex = documentIndex
			this.batchIndicator = batchIndicator + 1
			
			// actualBatchSize of 0 is special but should still work
			var remaining = limit - documentIndex
			if (remaining > actualBatchSize)
			{
				return this.getMoreBatchSizeTuple
			}
			
			var killCursorAfterThisBatchSize = -remaining
			var result = {}
			result['getMore'] = true
			result['actualBatchSize'] = killCursorAfterThisBatchSize
			return result
		}
		
		return NoMoreResults
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/AbstractCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults
var VirtualMethodException = ClassModule.VirtualMethodException

var BooleanBsonValue = MongoModule.BsonValues.BooleanBsonValue
var Int32BsonValue = MongoModule.BsonValues.Int32BsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue
var DoubleBsonValue = MongoModule.BsonValues.DoubleBsonValue

module.AbstractResultHandler.extend
(
	module,
	
	function AbstractCommandResultHandler(callback)
	{
		this.super(AbstractCommandResultHandler, callback)
	},
	
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		if (moreAvailable)
		{
			throw new TemplatedException("Did not expect moreAvailable for Command", {})
		}

		// GetMore: Possibly legitimate if using TailableCursor option
		// GetMore: May also occur if the underlying collection, say, was deleted
		if (wasCursorNotFound)
		{
			throw new TemplatedException("Did not expect wasCursorNotFound for Command", {})
		}
		
		if (didGetMoreOrQueryButNotCommandFail)
		{
			throw new TemplatedException("Did not expect didGetMoreOrQueryButNotCommandFail for Command", {})
		}
		
		if (documents.length != 1)
		{
			throw new TemplatedException("Did not expect more than one document for Command (got '${length}')", {length: documents.length})
		}
		
		var unwrappedCommandResultDocument = documents[0].value
		
		if (!isCommandOk(unwrappedCommandResultDocument))
		{
			var errorCode = getErrorCode(unwrappedCommandResultDocument)
			var errorMessage = getErrorMessage(unwrappedCommandResultDocument)
			
			this.commandError(errorCode, errorMessage)
		}
		else
		{
			this.useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
		}
		
		return NoMoreResults
	},
	
	function commandError(errorCode, errorMessage)
	{
		throw new VirtualMethodException()
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		throw new VirtualMethodException()
	}
)

// It's not very clear how this interacts with ReplyMessage's error field
function isCommandOk(unwrappedCommandResultDocument)
{
	// potential 'ok'
	// Boolean or int32 / int64 / double
	var ok = unwrappedCommandResultDocument.ok
	if (!ok)
	{
		return false
	}
	if (ok instanceof BooleanBsonValue)
	{
		return ok.isTrue()
	}
	if (ok instanceof Int32BsonValue)
	{
		return ok.isOne()
	}
	if (ok instanceof Int64BsonValue)
	{
		return ok.isOne()
	}
	if (ok instanceof DoubleBsonValue)
	{
		return ok.isOne()
	}
	return false
}

function getErrorCode(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'code', -1)
}

function getErrorMessage(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'errmsg', '')
}

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/AbstractUnfailingCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var TemplatedException = ClassModule.TemplatedException
var NoMoreResults = module.ResultHandler.NoMoreResults
var VirtualMethodException = ClassModule.VirtualMethodException

var BooleanBsonValue = MongoModule.BsonValues.BooleanBsonValue
var Int32BsonValue = MongoModule.BsonValues.Int32BsonValue
var Int64BsonValue = MongoModule.BsonValues.Int64BsonValue
var DoubleBsonValue = MongoModule.BsonValues.DoubleBsonValue

module.AbstractCommandResultHandler.extend
(
	module,
	
	function AbstractUnfailingCommandResultHandler(callback)
	{
		this.super(AbstractUnfailingCommandResultHandler, callback)
	},
	
	function commandError(errorCode, errorMessage)
	{
		throw new TemplatedException("IsMaster command failed with code '${errorCode}' and message '${errorMessage}", {errorCode: errorCode, errorMessage: errorMessage})
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/VoidCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var NoMoreResults = module.ResultHandler.NoMoreResults

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function VoidCommandResultHandler(callback)
	{
		this.super(VoidCommandResultHandler)
		this.callback = callback
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		this.doCallback(unwrappedCommandResultDocument)
	}
)
return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/UserExistsCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var ArrayBsonValue = MongoModule.BsonValues.ArrayBsonValue

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function UserExistsCommandResultHandler(callback)
	{
		this.super(UserExistsCommandResultHandler)
		this.callback = callback
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		this.doCallback(userExists(unwrappedCommandResultDocument.users))
	}
)

function userExists(users)
{
	if (!users)
	{
		return false
	}
	
	if (!(users instanceof ArrayBsonValue))
	{
		return false
	}
	
	return users.length != 0
}
return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/IsMasterCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var REPLICA_SET_PRIMARY = MongoModule.ServerTypes.REPLICA_SET_PRIMARY
var REPLICA_SET_SECONDARY = MongoModule.ServerTypes.REPLICA_SET_SECONDARY
var REPLICA_SET_ARBITER = MongoModule.ServerTypes.REPLICA_SET_ARBITER
var REPLICA_SET_OTHER = MongoModule.ServerTypes.REPLICA_SET_OTHER
var REPLICA_SET_GHOST = MongoModule.ServerTypes.REPLICA_SET_GHOST
var SHARD_ROUTER = MongoModule.ServerTypes.SHARD_ROUTER
var STANDALONE = MongoModule.ServerTypes.STANDALONE

var safeHasOwnProperty = ClassModule.safeHasOwnProperty

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function IsMasterCommandResultHandler(callback)
	{
		this.super(IsMasterCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		/*
			Run db.runCommand('ismaster') in shell for full list of fields, but others include
			- ismaster
			- localTime
			- maxWireVersion
			- minWireVersion
		*/
		
		var isReplicaSetMemeber = getIsReplicaSetMember(unwrappedCommandResultDocument)
		
		var serverType = getServerType(unwrappedCommandResultDocument, isReplicaSetMemeber)
		
		var maximumBatchSize = getMaxWriteBatchSize(unwrappedCommandResultDocument)
		var maximumDocumentSize = getMaxBsonObjectSize(unwrappedCommandResultDocument)
		var maximumMessageSize = getMaxMessageSizeBytes(unwrappedCommandResultDocument)
		
		this.doCallback(serverType, maximumBatchSize, maximumDocumentSize, maximumMessageSize)
	}
)

function getIsReplicaSetMember(unwrappedCommandResultDocument)
{
	if (safeHasOwnProperty(unwrappedCommandResultDocument, 'setName'))
	{
		return true
	}
	return module.getValueOrDefault('isreplicaset', false)
}

function getServerType(unwrappedCommandResultDocument, isReplicaSetMember)
{
	if (isReplicaSetMember)
	{
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'ismaster', false))
		{
			return REPLICA_SET_PRIMARY
		}
		
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'secondary', false))
		{
			return REPLICA_SET_SECONDARY
		}
		
		if (module.getValueOrDefault(unwrappedCommandResultDocument, 'arbiterOnly', false))
		{
			return REPLICA_SET_ARBITER
		}
		
		if (safeHasOwnProperty(unwrappedCommandResultDocument, 'setName') && safeHasOwnProperty(unwrappedCommandResultDocument, 'hosts'))
		{
			return REPLICA_SET_OTHER
		}
		
		return REPLICA_SET_GHOST
	}
	
	if (module.getValueOrDefault(unwrappedCommandResultDocument, 'msg', '') === 'isdbgrid')
	{
		return SHARD_ROUTER
	}
	
	return STANDALONE
}

function getMaxWriteBatchSize(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxWriteBatchSize', MongoModule.maximumBatchSize)
}

// aka Maximum Document Size
function getMaxBsonObjectSize(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxBsonObjectSize', MongoModule.maximumDocumentSize)
}

function getMaxMessageSizeBytes(unwrappedCommandResultDocument)
{
	return module.getValueOrDefault(unwrappedCommandResultDocument, 'maxMessageSizeBytes', MongoModule.maximumMessageSize)
}

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/BuildInfoCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function BuildInfoCommandResultHandler(callback)
	{
		this.super(BuildInfoCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		/*
			Run db.runCommand('buildinfo') in shell for full list of fields, but others include
			- gitVersion
			- sysInfo
		*/
		var versionArrayBsonValue = unwrappedCommandResultDocument.versionArray.value
		
		// Int32BsonValue
		var majorVersion = versionArrayBsonValue[0].value
		var minorVersion = versionArrayBsonValue[1].value
		var revisionVersion = versionArrayBsonValue[2].value
		// var buildVersion = versionArrayBsonValue[3].value  // Not used by Java driver
		
		this.doCallback(majorVersion, minorVersion, revisionVersion)
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/GetLastErrorCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var getValueOrDefault = module.getValueOrDefault

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function GetLastErrorCommandResultHandler(callback)
	{
		this.super(GetLastErrorCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		var connectionId = unwrappedCommandResultDocument.connectionId.value
		var n = getValueOrDefault(unwrappedCommandResultDocument, 'n', 0)
		var syncMillis = getValueOrDefault(unwrappedCommandResultDocument, 'syncMillis', 0)
		var writtenTo = getValueOrDefault(unwrappedCommandResultDocument, 'writtenTo', null)
		var err = getValueOrDefault(unwrappedCommandResultDocument, 'err', null)
		
		this.doCallback(connectionId, n, syncMillis, writtenTo, err)
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/NonceCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function NonceCommandResultHandler(callback)
	{
		this.super(NonceCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		var nonceString = unwrappedCommandResultDocument.nonce.value
		this.doCallback(nonceString)
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
// /MongoModule/ResultHandlers/AuthCommandResultHandler.js 

"use strict";
MongoModule.ResultHandlers = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractCommandResultHandler.extend
(
	module,
	
	function AuthCommandResultHandler(authenticatedCallback, couldNotAuthenticateCallback, database)
	{
		this.super(AuthCommandResultHandler, authenticatedCallback)
		this.couldNotAuthenticateCallback = couldNotAuthenticateCallback
		this.database = database
	},
	
	function commandError(errorCode, errorMessage)
	{
		this.couldNotAuthenticateCallback(errorCode, errorMessage)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		// unwrappedCommandResultDocument is { dbName, user, ok }
		this.doCallback(this.database)
	}
)

return module;
}(MongoModule.ResultHandlers || {}));
MongoModule.Credentials = (function(module)
{
return module;
}(MongoModule.Credentials || {}));

// /MongoModule/Credentials/createAuthenticationHash.js 

"use strict";
MongoModule.Credentials = (function(module){
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

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Credentials/Credential.js 

"use strict";
MongoModule.Credentials = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var VirtualMethodException = ClassModule.VirtualMethodException
ClassModule.Object.extend
(
	module,
	
	function Credential()
	{
		this.super(Credential)
	},
	
	function authenticate(connection, couldNotAuthenticateCallback, authenticatedCallback)
	{
		throw new VirtualMethodException()
	},
	
	function removeFromCredentialStore(credentialsStore)
	{
		throw new VirtualMethodException()
	}
)

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Credentials/AbstractCredential.js 

"use strict";
MongoModule.Credentials = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.Credential.extend
(
	module,
	
	function AbstractCredential(databaseName)
	{
		this.super(AbstractCredential)
		this.databaseName = databaseName
	},
	
	function loginDatabase(connection)
	{
		return new MongoModule.Database(connection, this.databaseName)
	}
)

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Credentials/HashedMongoChallengeResponseCredential.js 

"use strict";
MongoModule.Credentials = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.AbstractCredential.extend
(
	module,
	
	function HashedMongoChallengeResponseCredential(databaseName, userName, authenticationHash)
	{
		this.super(HashedMongoChallengeResponseCredential, databaseName)
		this.userName = userName
		this.authenticationHash = authenticationHash
	},
	
	function authenticate(connection, couldNotAuthenticateCallback, authenticatedCallback)
	{
		var loginDatabase = this.loginDatabase(connection)
		
		var userName = this.userName
		var authenticationHash = this.authenticationHash
		loginDatabase.nonce(function nonceCallback(nonceString)
		{
			loginDatabase.authFromHash(userName, authenticationHash, nonceString, couldNotAuthenticateCallback, authenticatedCallback)
		})
	},
	
	function removeFromCredentialStore(credentialsStore)
	{
		credentialsStore.removeCredential(this.databaseName, this.userName)
	}
)

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Credentials/UserNamePasswordMongoChallengeResponseCredential.js 

"use strict";
MongoModule.Credentials = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.HashedMongoChallengeResponseCredential.extend
(
	module,
	
	function UserNamePasswordMongoChallengeResponseCredential(databaseName, userName, password)
	{
		this.super(UserNamePasswordMongoChallengeResponseCredential, databaseName, userName, module.createAuthenticationHash(userName, password))
	}
)

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Credentials/CredentialsStore.js 

"use strict";
MongoModule.Credentials = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function CredentialsStore(sharedComputerSoOnlyKeepForSession)
	{
		this.super(CredentialsStore)
		this.sharedComputerSoOnlyKeepForSession = sharedComputerSoOnlyKeepForSession
		this.storage = sharedComputerSoOnlyKeepForSession ? window.sessionStorage : window.localStorage
	},
	
	// returns null if missing
	function getHashedMongoChallengeResponseCredential(databaseName, userName)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		
		var authenticationHash = this.storage.getItem(key)
		if (authenticationHash)
		{
			return new module.HashedMongoChallengeResponseCredential(databaseName, userName, authenticationHash)
		}
		return null
	},
	
	function setAndGetHashedMongoChallengeResponseCredential(databaseName, userName, password)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		this.storage.setItem(key, module.createAuthenticationHash(userName, password))
		return this.getHashedMongoChallengeResponseCredential(databaseName, password)
	},
	
	function removeCredential(databaseName, userName)
	{
		var key = this.__key(databaseName, userName)
		this.__removeCredentialFromLocalStorageIfUsingSessionStorage(key)
		this.storage.removeItem(key)
	},
	
	function __removeCredentialFromLocalStorageIfUsingSessionStorage(key)
	{
		if (this.sharedComputerSoOnlyKeepForSession)
		{
			window.localStorage.removeItem(key)
		}
	},
	
	function __key(databaseName, userName)
	{
		return 'mongo-user-hash.' + databaseName + '.' + userName
	}
)

return module;
}(MongoModule.Credentials || {}));
// /MongoModule/Connection.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonWriter = MongoModule.BsonWriter.BsonWriter
var BsonWriterOverflowException = MongoModule.BsonWriter.BsonWriterOverflowException
var BsonReader = MongoModule.BsonReader.BsonReader

var QueryMessage = MongoModule.Messages.QueryMessage
var InsertMessage = MongoModule.Messages.InsertMessage
var UpdateMessage = MongoModule.Messages.UpdateMessage
var DeleteMessage = MongoModule.Messages.DeleteMessage

var DocumentBsonValue = MongoModule.BsonValues.DocumentBsonValue
var ObjectIdBsonValue = MongoModule.BsonValues.ObjectIdBsonValue

var fromStrictJavascript = MongoModule.BsonValues.fromStrictJavascript

var readMessage = MongoModule.Messages.Message.readMessage


ClassModule.Object.extend
(
	module,
	
	function Connection(url, credential, couldNotAuthenticateCallback, authenticatedCallback, writeConcern, sendBufferInitialSize, webSocketProtocolName)
	{
		this.super(Connection)
		
		this.writeConcern = ClassModule.default(writeConcern, module.WriteConcerns.ACKNOWLEDGED)
		
		// 128Kb
		this.sendBufferInitialSize = ClassModule.default(sendBufferInitialSize, 2 << 16)
		
		this.__webSocket = newWebSocket
		(
			this,
			url,
			ClassModule.default(webSocketProtocolName, 'binary')
		)
		
		this.__resultHandlerTuples = newResultHandlerTuples()
		this.__partialMessageBuffer = new ArrayBuffer(0)
		this.__partialMessageBufferOffset = 0
		this.__beforeOpenSendQueue = []
		
		this.maximumBatchSize = module.maximumBatchSize
		this.maximumDocumentSize = module.maximumDocumentSize
		this.maximumMessageSize = module.maximumMessageSize
		
		var self = this
		function initialiseAfterOpen()
		{
			var adminDb = new module.AdminDatabase(self)
			adminDb.isMaster(function isMasterCallback(serverType, maximumBatchSize, maximumDocumentSize, maximumMessageSize)
			{
				self.serverType = serverType
				self.maximumBatchSize = maximumBatchSize
				self.maximumDocumentSize = maximumDocumentSize
				self.maximumMessageSize = maximumMessageSize
				
				adminDb.buildInfo(function buildInfoCallback(majorVersion, minorVersion, revisionVersion)
				{
					self.majorVersion = majorVersion
					self.minorVersion = minorVersion
					self.revisionVersion = revisionVersion
					
					if (self.serverType.isReplicaSetMemberArbiter)
					{
						couldNotAuthenticateCallback(-1, 'Server Type isReplicaSetMemberArbiter')
						return
					}
					
					self.authenticate(credential, couldNotAuthenticateCallback, function interceptAuthenticationCallback(database)
					{
						database.getLastError(null, null, false, false, function getLastErrorCallback(connectionId, n, syncMillis, writtenTo, err)
						{
							self.connectionId = connectionId
							
							authenticatedCallback(database)
						})
					})
				})
			})
		}
		initialiseAfterOpen()
	},
	
	function authenticate(credential, couldNotAuthenticateCallback, authenticatedCallback)
	{
		credential.authenticate(this, couldNotAuthenticateCallback, authenticatedCallback)
	},
	
	function getLastError(database, callback)
	{
		this.writeConcern.getLastError(database, callback)
	},
	
	function __opened()
	{
		var self = this
		this.__beforeOpenSendQueue.forEach(function(tuple)
		{
			self.__write(tuple.fullCollectionName, tuple.resultHandler, tuple.message)
		})
		
		delete this.__beforeOpenSendQueue
		this.send = this.__write
	},
	
	function __write(fullCollectionName, resultHandler, message)
	{
		var bufferSize = this.sendBufferInitialSize
		var buffer
		var writer
		var messageLength
		
		do
		{
			buffer = new ArrayBuffer(bufferSize)
			writer = new BsonWriter(buffer)
			try
			{
				messageLength = message.writeBson(writer)
			}
			catch (e)
			{
				if (e instanceof BsonWriterOverflowException)
				{
					bufferSize *= 2
					continue
				}
				console.warn(e.stack)
				throw e
			}
			break
		}
		while(true)
		
		if (resultHandler !== null)
		{
			this.__resultHandlerTuples[message.requestIdInt32] =
			{
				fullCollectionName: fullCollectionName,
				resultHandler: resultHandler
			}
		}
		var actualDataToSend = buffer.slice(0, messageLength)
		
		this.__webSocket.send(actualDataToSend)
		return this
	},
	
	function __receive(arrayBufferData)
	{
		this.__partialMessageBuffer = concatenateArrayBuffers(this.__partialMessageBuffer, arrayBufferData, this.__partialMessageBufferOffset)
		this.__partialMessageBufferOffset = 0
		
		var reader = new BsonReader(this.__partialMessageBuffer)
		var message
		var resultHandler
		while(reader.hasCompleteMessageAvailable())
		{
			message = readMessage(reader)
			message.process(this, this.__resultHandlerTuples)
		}
		this.__partialMessageBufferOffset = reader.offset
	},
	
	function database(databaseName)
	{
		return new module.Database(this, databaseName)
	},
	
	function adminDatabase()
	{
		return new module.AdminDatabase(this)
	},
	
	function sendCommand(resultHandler, databaseName, unwrappedCommandDocument)
	{
		// -1 => Return no more than one document, then close the cursor
		// 0 => Database default batchSize
		// +ve => batch size
		return this.sendQuery(resultHandler, databaseName, '$cmd', false, 0, -1, null, unwrappedCommandDocument)
	},
	
	function sendQuery(resultHandler, databaseName, collectionName, isSlaveOk, numberToSkipInt32, numberToReturnInt32, returnFieldsSelectorDocument, queryDocument)
	{
		// same for every kind of message (eg OP_INSERT)
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0

		// happens on primary (ie READ_PREFERENCE == primary => isSlaveOk == false)
		var flagsInt32 = (isSlaveOk ? 1 << 2 : 0)
		
		return this.send
		(
			fullCollectionName,
			resultHandler,
			new QueryMessage
			(
				requestIdInt32,
				responseToInt32,
				flagsInt32,
				fullCollectionName,
				
				numberToSkipInt32,
				numberToReturnInt32,
				fromStrictJavascript(queryDocument),
				(returnFieldsSelectorDocument === null) ? null : fromStrictJavascript(returnFieldsSelectorDocument)
			)
		)
	},
	
	function sendInsert(databaseName, collectionName, continueOnError, insertDocuments)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = continueOnError ? 1 : 0
		
		return this.send
		(
			fullCollectionName,
			null,
			new InsertMessage
			(
				requestIdInt32,
				responseToInt32,
				flagsInt32,
				fullCollectionName,
				
				insertDocuments.map(function addObjectIdToInsertDocument(insertDocument)
				{
					var objectId = ObjectIdBsonValue.generateNewObjectId()
					if (insertDocument instanceof DocumentBsonValue)
					{
						insertDocument.value._id = objectId
					}
					else
					{
						insertDocument._id = objectId.toStrictJavaScriptValue()
					}
					return fromStrictJavascript(insertDocument)
				})
			)
		)
	},
	
	function sendUpdate(databaseName, collectionName, isUpsert, isMulti, filterDocument, updateDocument)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = 0
		if (isUpsert)
		{
			flagsInt32 |= 1
		}
		if (isMulti)
		{
			flagsInt32 |= 2
		}
		
		return this.send
		(
			fullCollectionName,
			null,
			new UpdateMessage
			(
				requestIdInt32,
				responseToInt32,
				0,
				fullCollectionName,
				flagsInt32,
				
				fromStrictJavascript(filterDocument),
				fromStrictJavascript(updateDocument)
			)
		)
	},
	
	function sendDelete(databaseName, collectionName, isSingleRemove, filterDocument)
	{
		var fullCollectionName = databaseName + '.' + collectionName
		var requestIdInt32 = this.__resultHandlerTuples.nextRequestId()
		var responseToInt32 = 0
		
		var flagsInt32 = isSingleRemove ? 1 : 0
		
		return this.send
		(
			fullCollectionName,
			null,
			new DeleteMessage
			(
				requestIdInt32,
				responseToInt32,
				0,
				fullCollectionName,
				flagsInt32,
				
				fromStrictJavascript(filterDocument)
			)
		)
	},
	
	// Replaced int __opened() with a send that just calls write
	function send(fullCollectionName, resultHandler, message)
	{
		this.__beforeOpenSendQueue.push
		({
			fullCollectionName: fullCollectionName,
			resultHandler: resultHandler,
			message: message
		})
		return this
	}
)

function concatenateArrayBuffers(buffer0, buffer1, fromOffsetBuffer0)
{
	var buffer0Length = buffer0.byteLength - fromOffsetBuffer0
	var buffer1Length = buffer1.byteLength
	var totalLength = buffer0Length + buffer1Length
	
	var concatenatedUint8Array = new Uint8Array(totalLength)
	concatenatedUint8Array.set(new Uint8Array(buffer0, fromOffsetBuffer0), 0)
	concatenatedUint8Array.set(new Uint8Array(buffer1), buffer0Length)
	return concatenatedUint8Array.buffer
}

function newWebSocket(connection, url, protocol)
{
	var webSocket = new WebSocket(url, [protocol])
	webSocket.binaryType = 'arraybuffer'
	
	webSocket.onopen = (function(connection)
	{
		// inside an event, 'this' is... the webSocket
		return function(event)
		{
			connection.__opened()
		}
	})(connection);
	
	webSocket.onmessage = (function(connection)
	{
		return function(messageEvent)
		{
			connection.__receive(messageEvent.data)
		}
	})(connection);
	
	// TODO: disconnect and reconnect, fail all existing requests with outstanding replies
	webSocket.onerror = (function(connection)
	{
		return function(event)
		{
			console.warn('Error with WebSocket')
		}
	})(connection);
	
	return webSocket
}

function newResultHandlerTuples()
{
	var handlers = []
	handlers.nextRequestIdCounter = 1
	handlers.nextRequestId = function nextRequestId()
	{
		var nextRequestId = this.nextRequestIdCounter
		this.nextRequestIdCounter += 1
		return nextRequestId
	}
	return handlers
}



return module;
}(MongoModule || {}));
// /MongoModule/Database.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonValues = MongoModule.BsonValues
var StringBsonValue = BsonValues.StringBsonValue
var DocumentBsonValue = BsonValues.DocumentBsonValue
var Int32BsonValue = BsonValues.Int32BsonValue
var ArrayBsonValue = BsonValues.ArrayBsonValue
var DoubleBsonValue = BsonValues.DoubleBsonValue
var ObjectIdBsonValue = BsonValues.ObjectIdBsonValue
var Int64BsonValue = BsonValues.Int64BsonValue

var One = Int32BsonValue.One

var BooleanBsonValue = BsonValues.BooleanBsonValue
var bsonBoolean = BooleanBsonValue.bsonBoolean
var BsonFalse = BooleanBsonValue.BsonFalse
var BsonTrue = BooleanBsonValue.BsonTrue

var fromStrictJavascript = MongoModule.BsonValues.fromStrictJavascript

var ResultHandlers = MongoModule.ResultHandlers
var NonceCommandResultHandler = ResultHandlers.NonceCommandResultHandler
var AuthCommandResultHandler = ResultHandlers.AuthCommandResultHandler
var GetLastErrorCommandResultHandler = ResultHandlers.GetLastErrorCommandResultHandler
var VoidCommandResultHandler = ResultHandlers.VoidCommandResultHandler
var UserExistsCommandResultHandler = ResultHandlers.UserExistsCommandResultHandler
var QueryResultsHandler = ResultHandlers.QueryResultsHandler

var ToDoException = ClassModule.ToDoException

ClassModule.Object.extend
(
	module,
	
	function Database(connection, databaseName)
	{
		this.super(Database)
		this.connection = connection
		this.databaseName = databaseName
	},
	
	function collection(collectionName)
	{
		return new module.Collection(this, collectionName)
	},
	
	// For native authentication ie Mongo Challenge-Response. Mongo 3.0 has moved to ScramSha1
	// Not valid for ServerTypes.REPLICA_SET_ARBITER
	function nonce(callback)
	{
		return this.sendCommand(new NonceCommandResultHandler(callback),
		{
			getnonce: One
		})
	},
	
	// For native authentication ie Mongo Challenge-Response. Mongo 3.0 has moved to ScramSha1
	// Not valid for ServerTypes.REPLICA_SET_ARBITER
	function authFromHash(userName, authenticationHash, nonce, couldNotAuthenticateCallback, authenticatedCallback)
	{
		var key = nonce + userName + authenticationHash
		
		var hexMd5Key = MongoModule.Credentials.createKeyHash(key)
		
		return this.sendCommand(new AuthCommandResultHandler(authenticatedCallback, couldNotAuthenticateCallback, this),
		{
			authenticate: One,
			user: new StringBsonValue(userName),
			nonce: new StringBsonValue(nonce),
			key: new StringBsonValue(hexMd5Key)
		})
	},
	
	// waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning can be 0, 1, n, or 'majority'. 0 => no replication, even to self
	function getLastError(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, timeoutWaitForReplicationMilliseconds, waitForFsyncBeforeReturning, waitForJournalBeforeReturning, callback)
	{
		var command =
		{
			getLastError: One
		}
		
		if (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning && waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning !== null)
		{
			if (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning === 'majority')
			{
				command['w'] = new StringBsonValue('majority')
			}
			else
			{
				command['w'] = new Int32BsonValue(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning)
			}
			
			if (timeoutWaitForReplicationMilliseconds && timeoutWaitForReplicationMilliseconds > 0)
			{
				command['wtimeout'] = timeoutWaitForReplicationMilliseconds
			}
		}
		
		if (waitForFsyncBeforeReturning)
		{
			command['fsync'] = BsonTrue
		}
		
		if (waitForJournalBeforeReturning)
		{
			command['j'] = BsonTrue
		}
		
		return this.sendCommand(new GetLastErrorCommandResultHandler(callback), command)
	},
	
	function find(collectionName, filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
	{
		var isSlaveOk = true
		var queryDocument = {}
		queryDocument['$query'] = fromStrictJavascript(filterDocument)
		
		if (maximumExectionTimeInMilliseconds && maximumExectionTimeInMilliseconds > 0)
		{
			queryDocument['$maxTimeMS'] = Int64BsonValue.fromUnsigned32BitInteger(maximumExectionTimeInMilliseconds)
		}
		
		this.connection.sendQuery(new QueryResultsHandler(callback, batchSize, limit), this.databaseName, collectionName, isSlaveOk, skip, batchSize, returnFieldsSelectorDocument, queryDocument)
		return this
	},
	
	function insert(collectionName, continueOnError, callback, insertDocuments)
	{
		var connection = this.connection
		connection.sendInsert(this.databaseName, collectionName, continueOnError, insertDocuments)
		connection.getLastError(this, callback)
		return this
	},
	
	function update(collectionName, isUpsert, isMulti, filterDocument, callback, updateDocuments)
	{
		var connection = this.connection
		var databaseName = this.databaseName
		var self = this
		updateDocuments.forEach(function eachUpdate(updateDocument)
		{
			connection.sendUpdate(databaseName, collectionName, isUpsert, isMulti, filterDocument, updateDocument)
			connection.getLastError(self, callback)
		})
		return this
	},
	
	function deleteMatching(collectionName, isSingleRemove, callback, filterDocument)
	{
		var connection = this.connection
		connection.sendDelete(this.databaseName, collectionName, isSingleRemove, filterDocument)
		connection.getLastError(this, callback)
		return this
	},
	
	function sendCommand(resultHandler, commandDocument)
	{
		this.connection.sendCommand(resultHandler, this.databaseName, commandDocument)
		return this
	},
	
	function listCollections(callback, batchSize, limit, maximumExectionTimeInMilliseconds)
	{
		var collections = []
		var callbackTransformation = function documentToNameTransformingCallback(isErrorAndDocumentIsErrorMessage, document, isLastDocument, batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
		{
			var name = document.value.name.value
			collections.push(name)
			if (isLastDocument)
			{
				callback(collections)
				return false
			}
		}
		return this.findDocuments('system.namespaces', {}, null, callback, batchSize, limit, maximumExectionTimeInMilliseconds)
	},
	
	// 3.0
	function listCollections30(maximumExectionTimeInMilliseconds, filter, callback, batchSize, limit)
	{
		return this.sendCommand(new QueryResultsHandler(callback, batchSize, limit), this.databaseName,
		{
			listCollections: One,
			cursor: new DocumentBsonValue
			({
				// Omit this field for database default batchSize
				// cursor / batchSize seems to be a Mongo 3.0 variant
				batchSize: batchSize
			}),
			// Omit if no filter
			filter: new DocumentBsonValue(filter),
			// Omit if no maxTimeMS / < 1
			maxTimeMS: Int64BsonValue.fromUnsigned32BitInteger(maximumExectionTimeInMilliseconds),
		})
	},
	
	function userExists(userName, callback)
	{
		return this.sendCommand(new UserExistsCommandResultHandler(callback),
		{
			usersInfo: new BsonStringValue(userName)
		})
	},
	
	function createCollection(collectionName, capped, sizeInBytes, autoIndexId, maxDocuments, usePowerOfTwoSizes, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			create: new StringBsonValue(collectionName),
			capped: bsonBoolean(capped),
			size: Int64BsonValue.fromUnsigned32BitInteger(sizeInBytes),
			autoIndexId: bsonBoolean(autoIndexId),
			max: Int64BsonValue.fromUnsigned32BitInteger(maxDocuments),
			
			// default in 2.6
			usePowerOfTwoSizes: bsonBoolean(usePowerOfTwoSizes),
			/* 
				Unspecified - collection creation is deferred
				storageEngine: storageEngine
			*/
		})
	},
	
	// IndexCreationDocuments are created using indexCreationDocument()
	function createIndex(collectionName, callback) /* varargs: IndexCreationDocuments */
	{
		var indexes = []
		Array.prototype.slice.call(arguments, 3).forEach(function(indexCreationDocument)
		{
			indexes.push(new DocumentBsonValue(indexCreationDocument))
		})
		
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			createIndexes: new StringBsonValue(collectionName),
			indexes: new ArrayBsonValue(indexes)
		})
	},
	
	function createUser(userName, password, callback) /* varags: roles */
	{
		// roles include read, dbOwner (regular users) and readAnyDatabase, root (admin users)
		
		var roles = []
		Array.prototype.slice.call(arguments, 4).forEach(function(role)
		{
			roles.push(new StringBsonValue(role))
		})
		
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			createUser: new StringBsonValue(userName),
			pwd: new StringBsonValue(MongoModule.Credentials.UserNamePasswordMongoChallengeResponseCredential.createAuthenticationHash(userName, password)),
			digestPassword: BsonFalse,
			roles: new ArrayBsonValue(roles)
		})
	},
	
	function dropCollection(collectionName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			drop: new StringBsonValue(collectionName)
		})
	},
	
	function dropDatabase(callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropDatabase: One
		})
	},
	
	function dropIndex(collectionName, indexName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropIndexes: new StringBsonValue(collectionName),
			index: new StringBsonValue(indexName)
		})
	},
	
	// 2.6 variant
	function dropUser(userName, callback)
	{
		return this.sendCommand(new VoidCommandResultHandler(callback),
		{
			dropUser: new StringBsonValue(userName)
		})
	}
)

// storageEngine ommitted
// Use null for unwanted fields
module.indexCreationDocument = function indexCreationDocument(key, name, namespaceFullCollectionName, background, unique, sparse, expireAfterSeconds, version, weights, defaultLanguage, languageOverride, textIndexVersion, sphereIndexVersion, bits, min, max, bucketSize, dropDups)
{
	var indexCreationDocument =
	{
		key: new DocumentBsonValue(key),
		name: new StringBsonValue(name),
		ns: new StringBsonValue(namespaceFullCollectionName),
		background: bsonBoolean(background),
		unique: bsonBoolean(background),
		sparse: bsonBoolean(sparse),
		dropDups: bsonBoolean(dropDups)
	}
	if (expireAfterSeconds != null)
	{
		indexCreationDocument['expireAfterSeconds'] = new Int32BsonValue(expireAfterSeconds)
	}
	if (version != null)
	{
		indexCreationDocument['v'] = new Int32BsonValue(version)
	}
	if (weights != null)
	{
		indexCreationDocument['weights'] = new DocumentBsonValue(weights)
	}
	if (default_language != null)
	{
		indexCreationDocument['default_language'] = new StringBsonValue(defaultLanguage)
	}
	if (language_override != null)
	{
		indexCreationDocument['language_override'] = new StringBsonValue(languageOverride)
	}
	if (textIndexVersion != null)
	{
		indexCreationDocument['textIndexVersion'] = new Int32BsonValue(textIndexVersion)
	}
	if (sphereIndexVersion != null)
	{
		indexCreationDocument['2dsphereIndexVersion'] = new Int32BsonValue(sphereIndexVersion)
	}
	if (bits != null)
	{
		indexCreationDocument['bits'] = new Int32BsonValue(bits)
	}
	if (min != null)
	{
		indexCreationDocument['min'] = new DoubleBsonValue(bits)
	}
	if (max != null)
	{
		indexCreationDocument['max'] = new DoubleBsonValue(max)
	}
	if (bucketSize != null)
	{
		indexCreationDocument['bucketSize'] = new DoubleBsonValue(bucketSize)
	}
	return indexCreationDocument
}
return module;
}(MongoModule || {}));
// /MongoModule/AdminDatabase.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var BsonStringValue = MongoModule.BsonValues.BsonStringValue
var One = MongoModule.BsonValues.Int32BsonValue.One

var IsMasterCommandResultHandler = MongoModule.ResultHandlers.IsMasterCommandResultHandler
var BuildInfoCommandResultHandler = MongoModule.ResultHandlers.BuildInfoCommandResultHandler

module.Database.extend
(
	module,
	
	function AdminDatabase(connection)
	{
		this.super(AdminDatabase, connection, 'admin')
	},
	
	function isMaster(callback)
	{
		return this.sendCommand(new IsMasterCommandResultHandler(callback),
		{
			// or isMaster
			ismaster: One
		})
	},
	
	function buildInfo(callback)
	{
		return this.sendCommand(new BuildInfoCommandResultHandler(callback),
		{
			// or buildInfo
			buildinfo: One
		})
	}
)

return module;
}(MongoModule || {}));
// /MongoModule/Collection.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function Collection(database, collectionName)
	{
		this.super(Collection)
		this.database = database
		this.collectionName = collectionName
	},
	
	// pass -1 for findOne()
	// pass null for returnFieldsSelectorDocument if not wanted
	function find(filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
	{
		this.database.find(this.collectionName, filterDocument, returnFieldsSelectorDocument, callback, batchSize, limit, skip, maximumExectionTimeInMilliseconds)
		return this
	},
	
	function insert(continueOnError, callback, insertDocuments)
	{
		var actualInsertDocuments
		if (arguments.length == 3)
		{
			if (insertDocuments instanceof Array)
			{
				actualInsertDocuments = insertDocuments
			}
			else
			{
				actualInsertDocuments = [insertDocuments]
			}
		}
		else
		{
			actualInsertDocuments = Array.prototype.slice.call(arguments, 2)
		}
		this.database.insert(this.collectionName, continueOnError, callback, actualInsertDocuments)
		return this
	},
	
	function update(isUpsert, isMulti, filterDocument, callback, updateDocuments)
	{
		var actualUpdateDocuments
		if (arguments.length == 5)
		{
			if (updateDocuments instanceof Array)
			{
				actualUpdateDocuments = updateDocuments
			}
			else
			{
				actualUpdateDocuments = [updateDocuments]
			}
		}
		else
		{
			actualUpdateDocuments = Array.prototype.slice.call(arguments, 4)
		}

		this.database.update(this.collectionName, isUpsert, isMulti, filterDocument, callback, actualUpdateDocuments)
		return this
	},
	
	function deleteMatching(isSingleRemove, callback, filterDocument)
	{
		this.database.deleteMatching(this.collectionName, isSingleRemove, callback, filterDocument)
		return this
	}
)

return module;
}(MongoModule || {}));
// /MongoModule/WriteConcern.js 

"use strict";
MongoModule = (function(module){
/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function WriteConcern(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, timeoutWaitForReplicationMilliseconds, waitForFsyncBeforeReturning, waitForJournalBeforeReturning)
	{
		this.waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning = waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning
		this.timeoutWaitForReplicationMilliseconds = timeoutWaitForReplicationMilliseconds
		this.waitForFsyncBeforeReturning = waitForFsyncBeforeReturning
		this.waitForJournalBeforeReturning = waitForJournalBeforeReturning
		
		this.isAcknowledged = (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning > 0)
	},
	
	function getLastError(database, callback)
	{
		if (this.isAcknowledged)
		{
			return database.getLastError(this.waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, this.timeoutWaitForReplicationMilliseconds, this.waitForFsyncBeforeReturning, this.waitForJournalBeforeReturning)
		}
		else
		{
			callback(database.connection.connectionId, null, null, null, null)
		}
	}
)

var WriteConcern = module.WriteConcern
module.WriteConcerns =
{
	ACKNOWLEDGED: new WriteConcern(1, 0, false, false), // server default
	UNACKNOWLEDGED: new WriteConcern(0, 0, false, false),
	FSYNCED: new WriteConcern(1, 0, true, false),
	JOURNALED: new WriteConcern(1, 0, false, true),
	REPLICA_ACKNOWLEDGED: new WriteConcern(2, 0, false, false),
	MAJORITY: new WriteConcern('majority', 0, false, false)
}
return module;
}(MongoModule || {}));
