/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_QUERY = 2004

module.AbstractMessage.extend
(
	module,

	function QueryMessage(requestIdInt32, responseToInt32, flagsInt32, fullCollectionName, numberToSkipInt32, numberToReturnInt32, queryDocument, returnFieldsSelectorDocument)
	{
		module.guardFlagsDoesNotExceed(flagsInt32, 255)
		
		if (module.isBitSet(flagsInt32, 0))
		{
			throw new ClassModule.IllegalArgumentException("flagsInt32 '${flagsInt32}' must not have bit 0 set", {flagsInt32: flagsInt32})
		}
		
		this.super(QueryMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_QUERY)
		
		this.flagsInt32 = flagsInt32
		this.fullCollectionName = fullCollectionName
		this.numberToSkipInt32 = numberToSkipInt32
		this.numberToReturnInt32 = numberToReturnInt32
		this.queryDocument = queryDocument
		
		// returnFieldsSelectorDocument is optional
		this.returnFieldsSelectorDocument = ClassModule.default(returnFieldsSelectorDocument, null)
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.flagsInt32)
		writer.writeCstring(this.fullCollectionName)
		writer.writeInt32(this.numberToSkipInt32)
		writer.writeInt32(this.numberToReturnInt32)
		writer.write(this.queryDocument)
		
		if (this.returnFieldsSelectorDocument !== null)
		{
			writer.write(this.returnFieldsSelectorDocument)
		}
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect a QueryMessage in reply", {})
}
