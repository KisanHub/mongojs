/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var VirtualMethodException = ClassModule.VirtualMethodException

ClassModule.Object.extend
(
	module,
	
	function ResultHandler()
	{
		this.super(ResultHandler)
	},
	
	// tuple, [true / false get more, batchSize]
	function results(documents, moreAvailable, wasCursorNotFound, didGetMoreOrQueryButNotCommandFail)
	{
		throw new VirtualMethodException()
	}
)

// in the original OP_QUERY, -(number) means return that number and close
// (number) means batchSize
// (0) means server-default batch sizes
module.ResultHandler.NoMoreResults =
{
	getMore: false,
	batchSize: 0
}
module.ResultHandler.AnyNumberMoreResults =
{
	getMore: true,
	batchSize: 0
}
