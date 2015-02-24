/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function ServerType(isReplicaSetMemberPrimary, isReplicaSetMemberSecondary, isReplicaSetMemberArbiter, isReplicaSetMemberOther, isReplicaSetMemberGhost, isShardRouter, isStandalone)
	{
		this.super(ServerType)
		this.isReplicaSetMember = isReplicaSetMemberPrimary || isReplicaSetMemberSecondary || isReplicaSetMemberArbiter || isReplicaSetMemberOther || isReplicaSetMemberGhost
		this.isReplicaSetMemberPrimary = isReplicaSetMemberPrimary
		this.isReplicaSetMemberSecondary = isReplicaSetMemberSecondary
		this.isReplicaSetMemberArbiter = isReplicaSetMemberArbiter
		this.isReplicaSetMemberOther = isReplicaSetMemberOther
		this.isReplicaSetMemberGhost = isReplicaSetMemberGhost
		this.isShardRouter = isShardRouter
		this.isStandalone = isStandalone
		Object.freeze(this)
	},
	
	function isClusterTypeStandalone()
	{
		return this.isStandalone
	},
	
	function isClusterTypeReplica()
	{
		return this.isReplicaSetMember
	},
	
	function isClusterTypeSharded()
	{
		return this.isShardRouter
	}
)

module.ServerTypes = Object.freeze
({
	REPLICA_SET_PRIMARY:   new module.ServerType(true,  false, false, false, false, false, false),
	REPLICA_SET_SECONDARY: new module.ServerType(false, true,  false, false, false, false, false),
	REPLICA_SET_ARBITER:   new module.ServerType(false, false, true,  false, false, false, false),
	REPLICA_SET_OTHER:     new module.ServerType(false, false, false, true,  false, false, false),
	REPLICA_SET_GHOST:     new module.ServerType(false, false, false, false, true,  false, false),
	SHARD_ROUTER:          new module.ServerType(false, false, false, false, false, true,  false),
	STANDALONE:            new module.ServerType(false, false, false, false, false, false, true )
})
