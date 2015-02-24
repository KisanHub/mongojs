/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function WriteConcern(waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, timeoutWaitForReplicationMilliseconds, waitForFsyncBeforeReturning, waitForJournalBeforeReturning)
	{
		this.waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning = waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning
		this.timeoutWaitForReplicationMilliseconds = timeoutWaitForReplicationMilliseconds
		this.waitForFsyncBeforeReturning = waitForFsyncBeforeReturning
		this.waitForJournalBeforeReturning = waitForJournalBeforeReturning
		
		this.isAcknowledged = (waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning > 0)
	},
	
	function getLastError(database, callback)
	{
		if (this.isAcknowledged)
		{
			return database.getLastError(this.waitForReplicationToNServersWhereOneIsSelfOrWaitForMajorityBeforeReturning, this.timeoutWaitForReplicationMilliseconds, this.waitForFsyncBeforeReturning, this.waitForJournalBeforeReturning)
		}
		else
		{
			callback(database.connection.connectionId, null, null, null, null)
		}
	}
)

var WriteConcern = module.WriteConcern
module.WriteConcerns =
{
	ACKNOWLEDGED: new WriteConcern(1, 0, false, false), // server default
	UNACKNOWLEDGED: new WriteConcern(0, 0, false, false),
	FSYNCED: new WriteConcern(1, 0, true, false),
	JOURNALED: new WriteConcern(1, 0, false, true),
	REPLICA_ACKNOWLEDGED: new WriteConcern(2, 0, false, false),
	MAJORITY: new WriteConcern('majority', 0, false, false)
}