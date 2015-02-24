/*
This file is part of mongojs. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT. No part of mongojs, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of mongojs. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/mongojs/master/COPYRIGHT.
*/


// Note lack of quoting
use euro2012

db.dropDatabase()
db.dropUser('raph')

// euro2012 db comes into existence
db.createUser({user: "raph", pwd: "password", customData: {	fullName: 'Raphael', favouriteColour: 'Pink' },	roles: [{role: "readWrite",	db: "euro2012"}] })

// teams collection comes into existence
db.teams.save({country:"England",GroupName:"D"})

// WriteResult({ "nInserted" : 1 })