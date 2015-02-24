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