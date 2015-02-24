/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_MSG = 1000

module.AbstractMessage.extend
(
	module,

	function MsgMessage(requestIdInt32, responseToInt32, message)
	{
		this.super(MsgMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_MSG)
	
		this.message = message
	},
	
	function writeBsonContents(writer)
	{
		writer.writeCstring(this.message)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a MsgMessage in reply", {})
}
