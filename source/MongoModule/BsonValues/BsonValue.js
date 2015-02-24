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