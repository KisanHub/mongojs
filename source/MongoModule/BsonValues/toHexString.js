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
