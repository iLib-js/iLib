/* jshint node: true */
/*
 * nodeglue.js - Initial file for the nodejs version of ilib
 *
 * Copyright © 2013-2015, JEDLSoft
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

// pass the ilib definition to our callers
var ilib = require("./ilib-dyn-full-compiled.js").ilib;
exports.ilib = ilib;

var path = require("path"),
	fs = require("fs"),
	util = require("util"),
	loaderFactory = require("./nodeloader.js");

ilib.setLoaderCallback(loaderFactory(ilib));

//initialize some things statically because the constructors do not load 
// the locale-independent data
ilib.CType._init(true);
ilib.NormString.init();
