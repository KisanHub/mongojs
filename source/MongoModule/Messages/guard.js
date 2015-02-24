/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


module.guardZeroInt32 = function guardZeroInt32(zeroInt32)
{
	if (zeroInt32 != 0)
	{
		throw new ClassModule.IllegalArgumentException("zeroInt32 '${zeroInt32}' is not zero (0)", {zeroInt32: zeroInt32})
	}
}

module.guardFlagsDoesNotExceed = function guardFlagsDoesNotExceed(flagsInt32, canNotBeGreaterThan, name)
{
	var ourName = ClassModule.default(name, 'flagsInt32')
	if (flagsInt32 > canNotBeGreaterThan)
	{
		throw new ClassModule.IllegalArgumentException("${ourName} '${flagsInt32}' can can not be greater than ${canNotBeGreaterThan}", {ourName: ourName, flagsInt32: flagsInt32, canNotBeGreaterThan: canNotBeGreaterThan})
	}
}
