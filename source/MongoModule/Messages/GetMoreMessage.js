/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_GET_MORE = 2005

module.AbstractMessage.extend
(
	module,

	function GetMoreMessage(requestIdInt32, responseToInt32, zeroInt32, fullCollectionName, numberToReturnInt32, cursorIdInt64)
	{
		module.guardZeroInt32(zeroInt32)
		this.super(GetMoreMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_GET_MORE)
	
		this.zeroInt32 = zeroInt32
		this.fullCollectionName = fullCollectionName
		this.numberToReturnInt32 = numberToReturnInt32
		this.cursorIdInt64 = cursorIdInt64
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.numberToReturnInt32)
		writer.write(this.cursorIdInt64)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a GetMoreMessage in reply", {})
}

