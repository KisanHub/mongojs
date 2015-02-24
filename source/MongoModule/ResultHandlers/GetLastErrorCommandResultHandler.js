/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


var getValueOrDefault = module.getValueOrDefault

module.AbstractUnfailingCommandResultHandler.extend
(
	module,
	
	function GetLastErrorCommandResultHandler(callback)
	{
		this.super(GetLastErrorCommandResultHandler, callback)
	},
	
	function useUnwrappedCommandResultDocument(unwrappedCommandResultDocument)
	{
		var connectionId = unwrappedCommandResultDocument.connectionId.value
		var n = getValueOrDefault(unwrappedCommandResultDocument, 'n', 0)
		var syncMillis = getValueOrDefault(unwrappedCommandResultDocument, 'syncMillis', 0)
		var writtenTo = getValueOrDefault(unwrappedCommandResultDocument, 'writtenTo', null)
		var err = getValueOrDefault(unwrappedCommandResultDocument, 'err', null)
		
		this.doCallback(connectionId, n, syncMillis, writtenTo, err)
	}
)
