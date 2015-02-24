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
