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