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
