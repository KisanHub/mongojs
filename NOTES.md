## MongoDB Wire Protocol
* <http://docs.mongodb.org/meta-driver/latest/legacy/mongodb-wire-protocol/>
* <http://craiggwilson.com/2013/12/10/mongodb-drivers-wire-protocol-1/>
* <http://docs.mongodb.org/meta-driver/latest/legacy/feature-checklist-for-mongodb-drivers/>

### WebSocket Proxies

* Nginx (native)
* ngx_tcp_proxy_module
* ngx_websockify_module (which, despite its name, seems only to proxy)
* HAproxy
* Varnish (not explored)

### WebSocket Bridges

* websockify (Python)
  * minimal dependencies bar numpy, but hardcodes protocol to `binary` or `base64`
  * would need to be patched to be useful
  * fallback flash socket unfortunately is not useful today (`base64` & uses flash)
* websockify (C)
  * known bugs with large frame sizes
* websockify (Ruby, Clojure, Node-JS)
* [wspipe](https://github.com/openmason/wspipe), but for Node-JS
* [ws-to-tcp-bridge](https://www.npmjs.com/package/ws-tcp-bridge), but for Node-JS
* [websocket-tcp-forwarder](http://41j.com/blog/2015/01/golang-websocket-tcp-forwarder/), golang, but from first time go user

### WebSocket Libraries (C)
* libwebsockets
  * has a sample server
  * should be easy to adapt as a bridge if using poll
  * tutorial [here](http://ahoj.io/libwebsockets-simple-http-server)
  * ideally, should be made a low-overhead process using libev or epoll
    * seems to contain some libev code...

### Other

* [WebTCP](http://artemyankov.com/tcp-client-for-browsers/): A wrapper around websockets and various fallbacks
* Nginx Push module includes WebSockets

## JavaScript Notes
* compat table: https://kangax.github.io/compat-table/es5/

### Modular
* [AMD and CommonJS modules](http://www.javaworld.com/article/2109734/html-css-js/code-in-javascript-the-smart-modular-way.html)
  * [curl.js](https://github.com/cujojs/curl) now dead, replaced with RavJS
  * ReactJS
  * ECMAScript 6 import statements
  * bower for package management for browsers
  * <http://addyosmani.com/writing-modular-js/>
  * Wikipedia on AMD has several reasonable links
* [mout](http://moutjs.com/)
* Advanced JS modules and sub-modules: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

