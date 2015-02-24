/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


(module.OpCodes = module.OpCodes || {}).OP_INSERT = 2002

module.AbstractMessage.extend
(
	module,

	function InsertMessage(requestIdInt32, responseToInt32, flagsInt32, fullCollectionName, documents)
	{
		module.guardFlagsDoesNotExceed(flagsInt32, 1)
		
		this.super(InsertMessage, requestIdInt32, responseToInt32, module.OpCodes.OP_INSERT)
		
		this.flagsInt32 = flagsInt32
		this.fullCollectionName = fullCollectionName
		this.documents = documents
	},
	
	function writeBsonContents(writer)
	{
		writer.writeInt32(this.flagsInt32)
		writer.writeCstring(this.fullCollectionName)
		
		this.documents.forEach(function(document)
		{
			document.writeBson(writer)
		})
	}
).readMessageContents = function readMessageContents(reader, terminalOffset, requestId, responseToId)
{
	throw new module.InvalidMessageException("Did not expect an InsertMessage in reply", {})
}
