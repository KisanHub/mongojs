/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_KILL_CURSORS = 2007

module.AbstractMessage.extend
(
	module,

	function KillCursorsMessage(requestIdInt32, responseToInt32, zeroInt32, cursorIdInt64s)
	{
		module.guardZeroInt32(zeroInt32)
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(KillCursorsMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_KILL_CURSORS)
	
		this.zeroInt32 = zeroInt32
		this.cursorIdInt64s = cursorIdInt64s
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		// numberOfCursorIdsInt32
		writer.writeInt32(this.cursorIdInt64s.length)

		this.cursorIdInt64s.forEach(function(cursorIdInt64)
		{
			writer.write(cursorIdInt64)
		})
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a KillCursorsMessage in reply", {})
}
