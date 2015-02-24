/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_DELETE = 2006

module.AbstractMessage.extend
(
	module,

	function DeleteMessage(requestIdInt32, responseToInt32, zeroInt32, fullCollectionName, flagsInt32, selectorDocument)
	{
		module.guardZeroInt32(zeroInt32)
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(DeleteMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_DELETE)
		
		this.zeroInt32 = zeroInt32
		this.fullCollectionName = fullCollectionName
		this.flagsInt32 = flagsInt32
		this.selectorDocument = selectorDocument
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.zeroInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.flagsInt32)
		this.selectorDocument.writeBson(writer)
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a DeleteMessage in reply", {})
}
