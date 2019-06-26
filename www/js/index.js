/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var httpd = null;
var started=null;//是否已经启动服务
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.initServer();
        var _this=this;
        // if(started){
        //     this.stopServer(function(){
        //         _this.startServer("");
        //     });
        // }
        // else{
            _this.startServer("");
       // }
        
        
    },
    initServer:function(){
           httpd = ( cordova && cordova.plugins && cordova.plugins.CorHttpd ) ? cordova.plugins.CorHttpd : null;

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    startServer:function(wwwroot){
        if ( httpd ) {
    	    // before start, check whether its up or not
    	    httpd.getURL(function(url){
                console.log("url")
    	    	if(url.length > 0) {

    	    		document.getElementById('url').innerHTML = "server is up: <a href='" + url + "' target='_blank'>" + url + "</a>";
	    	    } else {
	    	        /* wwwroot is the root dir of web server, it can be absolute or relative path
	    	        * if a relative path is given, it will be relative to cordova assets/www/ in APK.
	    	        * "", by default, it will point to cordova assets/www/, it's good to use 'htdocs' for 'www/htdocs'
	    	        * if a absolute path is given, it will access file system.
	    	        * "/", set the root dir as the www root, it maybe a security issue, but very powerful to browse all dir
	    	        */
    	    	    httpd.startServer({
    	    	    	'www_root' : wwwroot,
    	    	    	'port' : 8099,
    	    	    	'localhost_only' : true
    	    	    }, function( url ){
                        console.log("success")
    	    	      // if server is up, it will return the url of http://<server ip>:port/
    	    	      // the ip is the active network connection
    	    	      // if no wifi or no cell, "127.0.0.1" will be returned.
                        document.getElementById('url').innerHTML = "server is started: <a href='" + url + "' target='_blank'>" + url + "</a>";
                        location.replace(url)
    	    	    }, function( error ){
                        console.log(error)
    	    	    	document.getElementById('url').innerHTML = 'failed to start server: ' + error;
    	    	    });
    	    	}
    	    	
    	    });
    	} else {
    		alert('CorHttpd plugin not available/ready.');
    	}
    },
    stopServer:function(){
        if ( httpd ) {
    	    httpd.stopServer(function(){
                started=false;
    	    },function( error ){
    	    	document.getElementById('url').innerHTML = 'failed to stop server' + error;
    	    });
    	} else {
    		alert('CorHttpd plugin not available/ready.');
    	}
    }
};

app.initialize();