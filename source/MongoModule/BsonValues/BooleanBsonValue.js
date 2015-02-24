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