# [mongojs]

[mongojs] is a browser client for [mongoDB] 2.6+ which uses [WebSockets] and is written in JavaScript. It is MIT licensed. It is designed to from you from the tyranny of excessive MVC frameworks, and let you design highly-scalable, client-orientated applications.

To install using [bower], do `bower install KisanHub/mongojs` and then look at the contents of `bower_components/mongojs/release`. If checking out from git, remember to do `git submodule update --init --recursive`.

## Why?

To make life simple and to make applications that scale easily.

If one uses [mongojs] in combination with [MQTT] in the browser (via [WebSockets]) then the vast bulk of most of a typical Model-View-Controller (MVC) middle tier can be eliminated\*. Most of the typical MVC logic that abounds in IT doesn't actually do anything particularly useful, but acts as an appendix; why not replace it with simpler browser-based logic? This distributes load, and so allows far greater scale-up with fewer resources. Much templating can now be pushed client-side, using technologies such as [jQuery] or [Mustache], and so reducing bandwidth requirements. Our design of [mongojs] obviates the need for login cookies and their associated session-state issues. Many multi-page websites can now become single page applications, and the principles of old-fashioned two-tier programming applied.

By pushing data retrieval client-side, and by exploiting BSON (or its near equivalent, JavaScript objects), one can dynamically 'augment' embedded documents with real behaviours.

\* Much of which isn't really MVC at all, but that's a separate argument.

## Frequent Objections

### "It's not secure!"

With the new versions of [mongoDB], there's a fine-grained permissions model and the ability to back-off authentication to robust technologies such as LDAP. The [WebSockets] transmission itself can be secured using TLS. If you feel such an approach is not secure in the browser, why is it then secure inside your server (middle) tier? Because it is behind a firewall?

Of course, there are some activities that would stay outside of the usages of [mongojs]. For example, creating or deleting users. But even then, many 'administrative' actions can also be done from the client, if so needed, making web dashboards much easier to create. For the small remaining functionality that happens in a middletier, other, more effective technologies become pragmatic, such as [Lua embedded in NGINX](http://wiki.nginx.org/HttpLuaModule), and so allow the development of very loosely-coupled, very rapidly changed application stacks with `rsync`-like deployment.

### There's already REST clients for [mongoDB]

Yes, there are, but REST is a very inefficient approach, with many TCP connections being created and destroyed (with higher bandwidth and resource cost, particularly when using TLS), and certainly isn't suitable for many scenarios. With an efficient replacement for [websockify], or integration of [libwebsockets] into [mongoDB], then an approach using [mongojs] becomes very efficient indeed.

### You check in the build output
Yep, this is to make it simpler to work with the popular, but flawed, 'package' manager that is [bower]. Of course, we could use GitHub releases, but then we have to post-release check in a new `bower.json` file… which is the almost the same as post-build checking in the build output, but with a need to then edit `bower.json` too!

## Example

### Quick Start

Make sure you have the following installed:-

* [mongoDB]
* [websockify]
* [NGINX]

If running on a Mac and you're using [Homebrew], you can do:-

```bash
brew install nginx
brew install mongo
brew install websockify
```

Then check out this repository from GitHub, then open a POSIX shell and:-

```bash
cd test
./local-nginx
./websockify-mongodb
```

(The last command will run forever; when you're finished, press `CTRL-C`. To stop [NGINX], type `./local-nginx stop`).

Then start a web browser and go to `http://localhost:8080/`. You'll see a blank page. Open up the developer console and type `test()`.

### What's going on

The Quick Start is running a version of this code:-

```javascript
// Settings
var sharedComputerSoOnlyKeepForSession = true
var webSocketsUrl = 'ws://localhost:8081/mongodb/'
var databaseName = 'euro2012'
var userName = 'raph'
var password = 'password'

// Imports
var CredentialsStore = MongoModule.Credentials.CredentialsStore
var Connection = MongoModule.Connection
var StringBsonValue = MongoModule.BsonValues.StringBsonValue

// Credentials can be stored per-session or without limit locally
var credentialsStore = new CredentialsStore(sharedComputerSoOnlyKeepForSession)
var credential = credentialsStore.getHashedMongoChallengeResponseCredential(databaseName, userName)
if (credential === null)
{
	// Pop-Up a login window, or use this knowledge to change the UI
	password = window.prompt('Please enter the MongoDb password for ' + userName, password)
	credential = credentialsStore.setAndGetHashedMongoChallengeResponseCredential(databaseName, userName, password)
}

function couldNotAuthenticateCallback(errorCode, errorMessage)
{
	// errorCode == 18, errorMessage == 'auth failed'
	console.warn('Unauthenticated')
	
	// Remove any invalid credentials
	credential.removeFromCredentialStore(credentialsStore)
}

var connection = new Connection(webSocketsUrl, credential, couldNotAuthenticateCallback, function authenticatedCallback(database)
{
	console.log('Authenticated')
	
	// or var collection = connection.database(databaseName).collection('teams')
	var collection = database.collection('teams')
	
	collection.find({}, null, function callback(isErrorAndDocumentIsErrorMessage, document, isLastDocument, batchIndicator, indicatedBatchSize, documentIndex, index, moreAvailable, actualBatchSize, limit)
	{
		if (isErrorAndDocumentIsErrorMessage)
		{
			var errorMessage = document
			console.warn(errorMessage)
			return false
		}
		
		var team = document
		console.log(team.toStrictJavaScriptValue())
		
		return moreAvailable
	}, 10, 100, 0, 1000)
})
```

## Understanding the API

Everything in [mongojs] is inside a namespace. The root namespace is `MongoModule`. Namespaces are just JavaScript objects. In each namespace, there might be either:-

* A sub-namespace
* A function or constant
* A constructor for an object ('class')

Most of the namespaces are not particularly relevant as a consumer of [mongojs] apart from `MongoModule`, `Credentials` and `BsonValues`.

The API lets you work with either regular JavaScript objects as documents, or with implementations of `BsonValue`. The latter is preferable if you are using BSON types, although they are more cumbersome with JavaScript. If a document contains a `function`, then this is ignored when updating or inserting documents.

### Namespace `MongoModule`

This contains the core classes `Connection`, `Database` and `Collection`. The `Connection` class is used to connect to a [mongoDB] instance by creating a new instance. It is passed callbacks to use when authentication or authentication failure occurs. Additionally, after being constructed, one can then invoke further database actions on it. These are queued and executed in sequence after authentication. Once authenticated, one communicates with [mongoDB] using the `Database` class; an instance is provided in the authenticated callback. Likewise, a `Collection` instance can be constructed using a `Database` instance. At no time does instantiating a `Database` or `Collection` object causes any network activity or any databases or collections to be created on [mongoDB]; they are simply a convenience (under the covers, `Collection` delegates to `Database` which delegates to `Connection`).


#### `Connection`

***The only stable public methods are currently `new Connection()` and `database()`***.

##### Constructor, `new Connection()`

Use this to connect to [mongoDB] via [WebSockets].

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`url`|*Mandatory*|[WebSockets] URL endpoint. Use `wss` for a TLS-secured connection (recommended)|
|`credential`|*Mandatory*|An object implementing the `Credential` interface. See below.|
|`couldNotAuthenticateCallback`|*Mandatory*|A function to callback if the `credential` does not authenticate the user|
|`authenticatedCallback`|*Mandatory*|A function to callback when authenticated|
|`writeConcern`|*Optional*, defaults to `MongoModule.WriteConcerns.ACKNOWLEDGED`|Effectively, how reliable writes need to be|
|`sendBufferInitialSize`|*Optional*, defaults to 128Kb|If storing large objects frequently, use a larger buffer for significant performance gains|
|`webSocketProtocolName`|*Optional*, defaults to `binary`|`Sec-WebSocket-Protocol` value|

The callback `couldNotAuthenticateCallback` receives the following arguments:-

|Parameter|Purpose|
|---------|-------|
|`errorCode`|Error code number, or `-1` if unretrievable.|
|`errorMessage`|Error message, may be `undefined` in extreme circumstances.|

Authentication failure currently sets `errorCode` to `18` and `errorMessage` to `auth failed`.

The callback `authenticatedCallback` receives the following arguments:-

|Parameter|Purpose|
|---------|-------|
|`database`|A `Database` object which the credential authenticated against|

##### `database()`

This method returns a `Database` object.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`databaseName`|*Mandatory*|Name of database|


##### `sendCommand()`, `sendQuery()`, `sendUpdate()` and `sendDelete()`

There should be no need to use these directly.

##### `send()`

There should be need to use this directly at all. Do not take the address of (a reference to) this function, it can be dynamically changed during program execution once a connection is fully established.

#### `Database`

***The only stable public method is currently `collection()`***.

##### `collection()`

This method returns a `Collection` object which you can use to interact with [mongoDB].

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`collectionName`|*Mandatory*|Name of collection|


##### `listCollections()` and `listCollections30()`

These methods can be used to list collections but are currently unstable.

##### `userExists()`, `createCollection()`, `createIndex()`, `createUser()`, `dropCollection()`, `dropDatabase()`, `dropIndex()` and `dropUser()`

These are administrative commands which have only been lightly tested and need to change to support [mongoDB] 3.0. As such they should be considered experimental.

##### `find()`, `sendCommand()`, `insert()`, `update()` and `deleteMatching()`

There should be no need to use these directly.

#### `Collection`

##### `find()`

This finds documents. It is the most complex operation in the API.
|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`filterDocument`|*Mandatory*; use `{}` for all.|Which documents to find. The type can be either a JavaScript object, with functions, or an instance of `DocumentBsonValue`.|
|`returnFieldsSelectorDocument`|*Mandatory*; use `null` for all.|Which subset of fields in documents to return. `null` is a common value.|
|`callback`|No callback is called; can also be set to `null`|Called when the find operation has completed once *for every document found*. See below.|
|`batchSize`|Server default|Number of documents per batch. Server can choose to ignore this value.|
|`limit`|Unlimited|Maximum number of documents to return. Make the number negative to return a single batch once (eg `-1` to return only one document or none)|
|`skip`|`0`|Offset into results (ie skip this many documents).|
|`maximumExectionTimeInMilliseconds`|Unlimited|Do not run the query for longer.|

The callback `callback` receives the following arguments for *each document found*:-

|Parameter|Purpose|
|---------|-------|
|`isErrorAndDocumentIsErrorMessage`|A boolean which is `true` if the next argument (`document`) is an error document.|
|`document`|A `BsonDocumentValue` with a field `value`|
|`isLastDocument`|A boolean which is `true` if this is the very last document|
|`batchIndicator`|A zero-based indicator of which batch is being returned. Useful if paging results.|
|`indicatedBatchSize`|Our required batch size (or server default)|
|`documentIndex`|Zero-based document index|
|`index`|Zero-based index of this document within the `batchIndicator`, eg document `4` in batch `2` might have `documentIndex` `9`|
|`moreAvailable`|Are more documents available after this batch?|
|`actualBatchSize`|Server-specified batch size|
|`limit`|Our chosen limit|

The callback should return a boolean indicating whether to continue receiving documents. The simplest thing to do is simply to return `moreAvailable`, unless a short-circuit is desired.

Whilst this callback is quite low-level, it can be used to build significant higher-level functionality, including logic to 'decorate' the returned documents with methods, so providing a non-anaemic object model, or higher-level callbacks that aggregate across batches, to provided paged results, etc.

##### `insert()`

This inserts zero or more documents, and calls `callback` when finished.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`continueOnError`|*Mandatory*|`boolean` value. If `true`, then continue inserting remaining documents in the event of an insert failing|
|`callback`|No callback is called; can also be set to `null`|Called when the insert operation has completed; if an `UNACKNOWLEDGED` `WriteConcern` is used, then this is immediate|
|`insertDocuments`|*Mandatory*|Zero or more documents to insert|

`insertDocuments` can be either an `Array`, or zero more more variable arguments, eg either `insert(false, callback, document0, document1, document2)` or `insert(false, callback, documents)` where `documents` is `var documents = [document0, document1, document2]`. The type of the elements can be either a JavaScript object, with functions, or an instance of `DocumentBsonValue`.

##### `update()`

This updates zero or more documents, and calls `callback` when finished.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`isUpsert`|*Mandatory*|`boolean` value. If `true`, then insert or update. If false, then just update.|
|`isMulti`|*Mandatory*|`boolean` value. If `true`, then match all potential documents not just one.|
|`filterDocument`|*Mandatory*; use `null` if not wanted|Which documents to match. Use `{}` for all. Type is the same as members of `updateDocuments` (see below).|
|`callback`|No callback is called; can also be set to `null`|Called when the update operation has completed; if an `UNACKNOWLEDGED` `WriteConcern` is used, then this is immediate|
|`updateDocuments`|*Mandatory*|Zero or more documents to update|

`updateDocuments` can be either an `Array`, or zero more more variable arguments (see `insert()` above). The type of the elements can be either a JavaScript object, with functions, or an instance of `DocumentBsonValue`.

##### `deleteMatching()`

This deletes all documents matching the `filterDocument`.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`isSingleRemove`|*Mandatory*|`boolean` value. If `true`, then only the first matching document is deleted.|
|`callback`|No callback is called; can also be set to `null`|Called when the delete operation has completed; if an `UNACKNOWLEDGED` `WriteConcern` is used, then this is immediate|
|`filterDocument`|*Mandatory*; use `null` if not wanted|Which documents to match. Use `{}` for all. Type is the same as members of `updateDocuments` (see above).|


### Namespace `MongoModule.Credentials`

This namespace contains implementations of `Credential` to handle the different ways of authenticating to [mongoDB]. At this time, only the `UserNamePasswordMongoChallengeResponseCredential` is useful on its own; an instance of this can be passed to the `new Connection()` constructor. More valuable is the `CredentialsStore`.

#### `CredentialsStore`

A `CredentialsStore` is used to manage credentials in local (client) storage. In particular, it abstracts away the difference between session-only credentials and long-term credentials. This is important if you have a web application with multiple pages, and you need to establish the [WebSockets] connection to [mongoDB] on each page load but do not want to prompt the user for his password each time. Once a credential is stored, the user's password is not recoverable. However, the credential itself does not have any expiry.

##### `new CredentialsStore()`

Use this constructor to create a new `CredentialsStore`

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`sharedComputerSoOnlyKeepForSession`|*Mandatory*|`boolean` value. If `true`, then credentials are only stored for the life of the current user session (ie similar to session cookies).|

##### `getHashedMongoChallengeResponseCredential()`

Use this to retrieve an existing user name - password credential. Returns `null` if no credential is known.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`databaseName`|*Mandatory*|Database to authenticate to|
|`userName`|*Mandatory*|User to authenticate as for `databaseName`|

##### `setAndGetHashedMongoChallengeResponseCredential()`

Use this to store the data necessary to create a credential. Returns the stored credential (ie that which would be returned by `getHashedMongoChallengeResponseCredential()`)

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`databaseName`|*Mandatory*|Database to authenticate to|
|`userName`|*Mandatory*|User to authenticate as for `databaseName`|
|`password`|*Mandatory*|Password to use for `userName`|


##### `removeCredential()`

Use this to remove any matching credentials.

|Parameter|Default if `undefined` (eg omitted)|Purpose|
|---------|-----------------------------------|-------|
|`databaseName`|*Mandatory*|Database to authenticate to|
|`userName`|*Mandatory*|User to authenticate as for `databaseName`|


### Namespace `MongoModule.BsonValues`

This namespace contains implementations of `BsonValue`. All implementations support the following public methods:-

|Method|Purpose|
|------|-------|
|`toString()`|Used to return a string representation of the value. Do not rely on the format being unchanging.|
|`toStrictJavaScriptValue()`|Used to convert the object to a JavaScript equivalent.|

You can add methods to instances of these value objects should you wish. In addition, most implementations represent a single value accessible through the property `value`.

#### Function `fromStrictJavacript()`

To convert from a JavaScript object to `BsonValue`. Also copes with mixed (JavaScript and Bson) objects and with added methods.

## Requests  for Help

* libwebsockets
* Adding more auths
* [mongoDB] 3.0 support
* More admin functions
* Trying to break the library to expose security flaws

## Hacking on the Source

To reduce the amount of boilerplate required, and to make it possible to actually write [mongojs], the code is broken down into files. Each file is organised into its respective namespace. A file may be either a major public function, or a class. Classes are implemented using [classjs]. The definitions in each file are private unless exported. As a result, `function xxx()` definitions and `var x = ` definitions are file-private.

The files are then concatenated together as part of the build process. This uses [developjs]. To build the code, call `./build` in the root of the GitHub repository. This will also invoke basic [Google Closure] minification (and so requires internet access).

To test the code without concatenation, [developjs] provides an AJAX driven class-loader, `DevelopModule`. You can see how this works in `test/root/index.html`. In essence, this lets one load either a production-quality, concatenated javascript file called `XXXXX.package.js`, or, in the event this is not found, load a set of `Module`s defined in `XXXXX.package.json` (where `XXXXX` is a package name). Each 'package' consists of one or more `Module`s. Each major group of classes is called a `Module`; one example is `MongoModule`, another is a dependency, `ClassModule`. `Module`s typically are conventionally named the same as a top-level namespace. Each `Module`, in its top-level namespace folder, contains a file called `module.json`. This defines, in precise order, which files are to be concatenated.

## Dependencies

All the dependencies listed are included as git submodules:-

* [classjs]
* [developjs]
* [shellfire]

## Compatibility

### [mongoDB] Compatibility
[mongojs] was designed for [mongoDB] 2.6, but should work with 3.0. We'd welcome help in adapting the new features of 3.0. We'd also be very interested in supporting implementations of [libwebsockets] into [mongoDB]'s `epoll` loop.

### WebSockets Compatibility
[mongojs] should work with any generic WebSockets-to-TCP bridge that supports vanilla [RFC 6455], but was specifically developed using [Websockify] on Mac OS X. [mongojs] uses a `Sec-WebSocket-Protocol` header of `binary` by default, but this can be overridden. In the fullness of time, it would be good to register a native [mongoDB] handler.

### Browser Compatibility

[mongojs] tries hard to be compatible with the vast majority of browsers current as of January 2015, and uses polyfills where necessary. If you find that support for a browser could be better improved, please submit a pull request.

|Browser|Version|Comments|
|-------|-------|--------|
|[Mozilla Firefox]|36|Tested, but should be compatible with any commonly used version|
|[Google Chrome]|41|Developed with, but any commonly used version should be compatible|
|Desktop [Safari]|7|No currently known issues|
|Desktop [Safari]|8|No currently known issues|
|Internet Explorer|—|Some testing; versions 10 & 11 should be fine. Version 9 is untested and may not work|

Please help us add to this list.



[mongoDB]: https://www.mongodb.org/ "mongoDB homepage"
[developjs]: https://github.com/KisanHub/mongojs "developjs homepage"
[classjs]: https://github.com/KisanHub/mongojs "classjs homepage"
[mongojs]: https://github.com/KisanHub/mongojs "mongojs homepage"
[shellfire]: https://github.com/shellfire-dev "shellfire homepage"
[bower]: http://bower.io/ "bower homepage"
[Google Closure]: https://developers.google.com/closure/ "Google Closure homepage"
[libwebsockets]: https://libwebsockets.org/trac/libwebsockets "libwebosckets homepage"
[Mozilla Firefox]: https://www.mozilla.org/en-US/firefox "Mozilla Firefox homepage"
[Google Chrome]: https://www.google.com/chrome/ "Google Chrome homepage"
[RFC 6455]: https://www.rfc-editor.org/rfc/rfc6455.txt "WebSockets RFC 6455 Standard Reference"
[WebSockets]: https://www.rfc-editor.org/rfc/rfc6455.txt "WebSockets RFC 6455 Standard Reference"
[jQuery]: https://jquery.com/ "jQuery homepage"
[Safari]: https://en.wikipedia.org/wiki/Safari_%28web_browser%29 "Wikipedia entry for Safari"
[MQTT]: https://mqtt.org/ "MQTT homepage"
[Mustache]: https://mustache.github.io/ "Mustache homepage"
[websockify]: https://github.com/kanaka/websockify "websockify homepage"
[Homebrew]: http://brew.sh/ "Homebrew homepage"
[NGINX]: http://nginx.org/ "NGINX homepage"
