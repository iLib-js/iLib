/*
 * WebLoader.js - loader implementation for web apps.
 *
 * Copyright © 2015-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Path = require("./Path.js");
var ilib = require("./ilib.js");
var Loader = require("./Loader.js");

var Locale = require("./Locale.js");

/**
 * @class
 * An implementation of the Loader class to load locale web pages.
 *
 * @constructor
 * @private
 */
var WebLoader = function(ilib, sync, onLoad) {
    //console.log("new WebLoader instance");

    this.parent.call(this, ilib);

    this._loadFile = (navigator.userAgent.indexOf(" .NET") > -1) ? this._ieLoadFile : this._regularLoadFile;

    // for use from within a check-out of ilib
    var base, root, pos, colon;

    var scripts = document.getElementsByTagName("script");

    pos = window.location.href.lastIndexOf("html");
    this.root = window.location.href.substring(0, pos);
    pos = this.root.lastIndexOf("/");
    this.root = this.root.substring(0, pos);

    colon = this.root.indexOf('://');
    this.root = Path.normalize(Path.join(this.root.substring(colon+3)));

    for (var i = 0; i < scripts.length; i++) {
        var source = scripts[i].src;
        if (source && (pos = source.search(/\/ilib-[a-z\-]*\.js$/)) !== -1) {
            colon = source.indexOf('://');
            this.protocol = source.substring(0,colon+3);
            base = Path.join(source.substring(colon+3, pos-1), "..");
            break;
        }
    }

    this.base = Path.normalize(Path.join(base || this.root, "data"));

    //console.log("WebLoader.constructor: this.base is " + this.base);
    //console.log("WebLoader.constructor: this.root is " + this.root);

    this.includePath.push(Path.join(this.root, "resources"));     // always check the application's resources dir first

    // then a standard locale dir of a built version of ilib
    this._exists(Path.join(base, "locale"), "localeinfo.json");

    // then try the standard install directories
    this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");

    // if all else fails, try a check-out dir of ilib
    // this._exists(Path.join(this.base, "locale"), "localeinfo.json");
};

WebLoader.prototype = new Loader();
WebLoader.prototype.parent = Loader;
WebLoader.prototype.constructor = WebLoader;

WebLoader.prototype.name = "WebLoader";
WebLoader.prototype._ieLoadFile = function(pathname, sync, cb) {
    // special case for IE because it has a @#$%ed up XMLHttpRequest implementation
    var req = new ActiveXObject("MSXML2.XMLHTTP");
    var text = undefined;

    req.open("GET", this.protocol + pathname, !sync);

    if (!sync) {
        req.onreadystatechange = function() {
            if (req.readyState === 4) {
                text = req.responseText;
                if (typeof(cb) === 'function') {
                    cb(text);
                }
            }
        };
    }

    try {
        req.send();

        text = req.responseText;
    } catch (e) {
        text = undefined;
    }
    if (sync) {
        if (typeof(cb) === 'function') {
            cb(text);
        }
    }

    return text;
};
WebLoader.prototype._regularLoadFile = function (pathname, sync, cb) {
    // use normal web techniques
    var req = new XMLHttpRequest();
    var text = undefined;

    //req.open("GET", "file:" + Path.resolve(file), false);
    if (pathname.substring(0, this.protocol.length) !== this.protocol) {
        pathname = this.protocol + pathname;
    }
    req.open("GET", pathname, !sync);
    //req.responseType = "text";
    req.onload = function(e) {
        text = req.response;
        if (typeof(cb) === 'function') {
            cb((req.status === 0 || req.status === 200) ? text : undefined);
        }
    };
    req.onerror = function(err) {
        // file is not there or could not be loaded
        text = undefined;
        if (typeof(cb) === 'function') {
            cb(undefined);
        }
    };

    //console.log("url is " + JSON.stringify(req._url, undefined, 4));
    try {
        req.send();
    } catch (e) {
        // could not load the file
        text = undefined;
        if (typeof(cb) === 'function') {
            cb(undefined);
        }
    }

    return text;
};

WebLoader.prototype.getProperPath = function(params) {
    var loc, language, script, region;
    var isExist, returnPath, dir;
    var baseResDir = "resources";

    if (!params.name) {
        return undefined;
    }

    if (params) {
        if (params.locale){
            this.locale = (typeof(params.locale) === 'string') ? new Locale(params.locale) : params.locale;
        }

        if (params.name) {
            this.name = params.name;
        }

        if (params.baseResDir) {
            baseResDir = params.baseResDir;
        }

        loc = this.locale || new Locale();

        language = loc.getLanguage();
        script = loc.getScript();
        region = loc.getRegion();

        this.listAvailableFiles();

        if (language) {
            dir = language +"/" + this.name;
            isExist = this.checkAvailability(dir);
            if (isExist) {
                returnPath = dir;
            }
        }

        if (script) {
            dir = language +"/" + script + "/" + this.name;
            isExist = this.checkAvailability(dir);
            if (isExist) {
                returnPath = dir;
            }
        }

        if (region) {
            if (script) {
                dir = language +"/" + script + "/"  + region + "/" + this.name;
            } else {
                dir = language +"/" + region + "/" + this.name;
            }

            isExist = this.checkAvailability(dir);
            if (isExist) {
                returnPath = dir;
            }
        }

        if (!returnPath) {
            return this.name;
        }

    } else {
        return undefined;
    }
    return baseResDir + "/" + returnPath;
}

module.exports = WebLoader;
