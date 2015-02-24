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