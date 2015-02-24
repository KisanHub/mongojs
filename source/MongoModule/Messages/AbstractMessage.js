/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var InvalidMessageException = module.InvalidMessageException

module.Message.extend
(
	module,

	function AbstractMessage(requestIdInt32, responseToInt32, opCodeInt32)
	{
		this.super(AbstractMessage)
		this.requestIdInt32 = requestIdInt32
		this.responseToInt32 = responseToInt32
		this.opCodeInt32 = opCodeInt32
	},

	function writeBson(writer)
	{
		var messageLengthOffset = writer.offset
		writer.skipInt32()
		writer.writeInt32(this.requestIdInt32)
		writer.writeInt32(this.responseToInt32)
		writer.writeInt32(this.opCodeInt32)
		
		this.writeBsonContents(writer)
		
		var messageLength = writer.offset - messageLengthOffset
		writer.writeInt32At(messageLength, messageLengthOffset)
		
		return messageLength
	},

	function writeBsonContents(writer)
	{
		throw new ClassModule.VirtualMethodException()
	}
).readMessage = function readMessage(reader)
{
	var messageLength = reader.readInt32()
	var terminalOffset = reader._guardUnderflow(reader.offset, messageLength - 4)
	
	var requestId = reader.readInt32()
	var responseToId = reader.readInt32()
	var opCode = reader.readInt32()
	
	return findMessageType(opCode).readMessageContents(reader, terminalOffset, requestId, responseToId)
}

function findMessageType(opCode)
{
	switch(opCode)
	{
		case module.OpCodes.OP_REPLY:
			return module.ReplyMessage
		
		case module.OpCodes.OP_MSG:
			return module.MsgMessage
		
		case module.OpCodes.OP_UPDATE:
			return module.UpdateMessage
		
		case module.OpCodes.OP_INSERT:
			return module.InsertMessage
			
		case 2003:
			throw new InvalidMessageException("opCode '${opCode}' is 'RESERVED', formerly OP_GET_BY_OID", {opCode: opCode})
		
		case module.OpCodes.OP_QUERY:
			return module.QueryMessage
		
		case module.OpCodes.OP_GET_MORE:
			return module.GetMoreMessage
		
		case module.OpCodes.OP_DELETE:
			return module.DeleteMessage
		
		case module.OpCodes.OP_KILL_CURSORS:
			return module.KillCursorsMessage
		
		default:
			throw new InvalidMessageException("Unknown opCode '${opCode}'", {opCode: opCode})
	}
}