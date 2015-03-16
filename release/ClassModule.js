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


var ClassModule = (function(module)
{
return module;
}(ClassModule || {}));

ClassModule.polyfills = (function(module)
{
return module;
}(ClassModule.polyfills || {}));

// /ClassModule/polyfills/String.fromCodePoint.js 

"use strict";
ClassModule.polyfills = (function(module){
// Original File from https://github.com/mathiasbynens/String.fromCodePoint
// Found via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
	(function() {
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var stringFromCharCode = String.fromCharCode;
		var floor = Math.floor;
		var fromCodePoint = function(_) {
			var MAX_SIZE = 0x4000;
			var codeUnits = [];
			var highSurrogate;
			var lowSurrogate;
			var index = -1;
			var length = arguments.length;
			if (!length) {
				return '';
			}
			var result = '';
			while (++index < length) {
				var codePoint = Number(arguments[index]);
				if (
					!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
					codePoint < 0 || // not a valid Unicode code point
					codePoint > 0x10FFFF || // not a valid Unicode code point
					floor(codePoint) != codePoint // not an integer
				) {
					throw RangeError('Invalid code point: ' + codePoint);
				}
				if (codePoint <= 0xFFFF) { // BMP code point
					codeUnits.push(codePoint);
				} else { // Astral code point; split in surrogate halves
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					codePoint -= 0x10000;
					highSurrogate = (codePoint >> 10) + 0xD800;
					lowSurrogate = (codePoint % 0x400) + 0xDC00;
					codeUnits.push(highSurrogate, lowSurrogate);
				}
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {
					result += stringFromCharCode.apply(null, codeUnits);
					codeUnits.length = 0;
				}
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String, 'fromCodePoint', {
				'value': fromCodePoint,
				'configurable': true,
				'writable': true
			});
		} else {
			String.fromCodePoint = fromCodePoint;
		}
	}());
}

return module;
}(ClassModule.polyfills || {}));
// /ClassModule/functionName.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.functionName = function functionName(func)
{
	if (func.name)
	{
		return func.name
	}
	
	return /^function\s+([\w\$]+)\s*\(/.exec( func.toString() )[ 1 ]
}
return module;
}(ClassModule || {}));
// /ClassModule/default.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.default = function _default(value, defaultValue)
{
	return value = typeof value !== 'undefined' ? value : defaultValue
}

return module;
}(ClassModule || {}));
// /ClassModule/isUndefined.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.isUndefined = function isUndefined()
{
	return typeof value === 'undefined'
}

return module;
}(ClassModule || {}));
// /ClassModule/template.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
Copyright © 2014-2015 Andrea Giammarchi, WTFPL License
*/


// Modified from https://gist.github.com/WebReflection/8f227532143e63649804
// new: accepts a transformer as first argument
// str.template(html, {object:value});
module.template = function template(string, fn, object)
{
	var hasTransformer = typeof fn === 'function'
	var prefix = hasTransformer ? '__tpl' + (+new Date) : ''
	var stringify = JSON.stringify
	var re = /\$\{([\S\s]*?)\}/g
	var evaluate = []
	var i = 0
	var m

	while (m = re.exec(string))
	{
		evaluate.push
		(
			stringify(string.slice(i, re.lastIndex - m[0].length)),
			prefix + '(' + m[1] + ')'
		)
		i = re.lastIndex
	}
	evaluate.push(stringify(string.slice(i)))

	// Function is needed to opt out from possible "use strict" directive
	return Function(prefix, 'with(this)return' + evaluate.join('+')).call(
		hasTransformer ? object : fn, // the object to use inside the with
		hasTransformer && fn          // the optional transformer function to use
	)
}
return module;
}(ClassModule || {}));
// /ClassModule/safeHasOwnProperty.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


// hasOwnProperty can be redefined, or even become a field with a value, not a function (eg in some JSON parsed in)
module.safeHasOwnProperty = function safeHasOwnProperty(value, name)
{
	return Object.prototype.hasOwnProperty.call(value, name)
}
return module;
}(ClassModule || {}));
// /ClassModule/Object.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.Object = function Object()
{
}

module.Object.prototype.constructor = function Object()
{
}

module.Object.extend = function extend(ourModule, constructor)
{
	var subclass = function Subclass()
	{
		this.super = function super_(ourFunction)
		{
			// replacing ourFunction with this.constructor doesn't work - causes a flip-flop infinite recursion
			// replacing ourFunction with constructor, likewise, doesn't work
			
			// could be replaced with this.supercall but it's very inefficient
			ourFunction.$.constructor.apply(this, Array.prototype.slice.call(arguments, 1))
		}
		
		this.supercall = function supercall(ourFunction)
		{
			var methodName = module.functionName(ourFunction)
			ourFunction.$[methodName].apply(this, Array.prototype.slice.call(arguments, 1))
		}
		
		if (arguments[0] !== module.Object)
		{
			this.constructor.apply(this, arguments)
		}
	}

	var prototype = new this(module.Object)
	var superclass = this.prototype
	var className = module.functionName(constructor)
	
	function addMethod(method, name)
	{
		method.module = ourModule
		method.className = className
		method.$ = superclass
		prototype[name] = method
	}
	
	function validateDefinition(name)
	{
		switch(name)
		{
			case 'constructor':
				throw "A definition can not be called 'constructor'"
				break;

			case 'super':
				throw "A definition can not be called 'super'"
				break;

			case 'supercall':
				throw "A definition can not be called 'super'"
				break;
				
			default:
				break;
		}
	}
	
	addMethod(constructor, 'constructor')
	
	var definitions = Array.prototype.slice.call(arguments)
	definitions.forEach(function(definition)
	{
		if (definition instanceof Function)
		{
			var functionName = module.functionName(definition)
			
			validateDefinition(functionName)
			addMethod(definition, functionName)
		}
		else
		{
			for(var name in definition)
			{
				validateDefinition(name)
				
				var property = definition[name]
				if (property instanceof Function)
				{
					addMethod(property, name)
				}
				else
				{
					prototype[name] = property
				}
			}
		}
	})
	
	subclass.prototype = prototype
	subclass.extend = this.extend
	
	ourModule[className] = subclass
	return subclass
}

return module;
}(ClassModule || {}));
// /ClassModule/Exception.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.Object.extend
(
	module,
	
	function Exception(message)
	{
		this.super(Exception)
		this.name = this.constructor.className
		this.message = message
	},
	
	function toString()
	{	
		return this.message
	}
)

return module;
}(ClassModule || {}));
// /ClassModule/TemplatedException.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.Exception.extend
(
	module,
	
	function TemplatedException(templatedMessage, formatArguments)
	{
		this.super(TemplatedException, module.template(templatedMessage, module.default(formatArguments, {})))
	}
)

return module;
}(ClassModule || {}));
// /ClassModule/IllegalArgumentException.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.TemplatedException.extend
(
	module,
	
	function IllegalArgumentException(templatedMessage, formatArguments)
	{
		this.super(IllegalArgumentException, templatedMessage, module.default(formatArguments, {}))
	}
)

return module;
}(ClassModule || {}));
// /ClassModule/ToDoException.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.Exception.extend
(
	module,
	
	function ToDoException(message)
	{
		this.super(ToDoException, message)
	}
)

return module;
}(ClassModule || {}));
// /ClassModule/VirtualMethodException.js 

"use strict";
ClassModule = (function(module){
/*
This file is part of classjs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT. No part of classjs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs/master/COPYRIGHT.
*/


module.Exception.extend
(
	module,
	
	function VirtualMethodException()
	{
		this.super(VirtualMethodException, 'This is a virtual method that should have been overridden')
	}
)

return module;
}(ClassModule || {}));
