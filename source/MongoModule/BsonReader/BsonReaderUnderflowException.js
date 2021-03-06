/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.TemplatedException.extend
(
	module,
	
	function BsonReaderUnderflowException(offset, requiredSpace, maximumLength)
	{
		this.super(BsonReaderUnderflowException, "The offset ${offset} + required space ${requiredSpace} exceeds the maximum length ${maximumLength}, causing underflow", {offset: offset, requiredSpace: requiredSpace, length: maximumLength})
	}
)
