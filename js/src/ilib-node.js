/*
 * ilib-node.js - glue code for node to load local ilib code and 
 * data dynamically 
 * 
 * Copyright © 2015, JEDLSoft
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

//console.log('Current directory: ' + process.cwd());
//var util = require("util");
//console.log("parent is " + util.inspect(module.parent));

var nodeLoader = require("./nodeloader.js");

var ilib = require("./ilibglobal.js");
ilib.setLoaderCallback(new nodeLoader(ilib));

require("./ilib-stubs.js");

module.exports = ilib;

