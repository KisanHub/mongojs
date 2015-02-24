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
