/* jshint node: true */
/*
 * ilib-node-assembled.js - glue code for node to load it the old way
 * as one big assembled file
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

var NodeLoader = require("../lib/NodeLoader.js");
var ilib = require("../lib/ilib-full-dyn-compiled.js").ilib;
ilib.setLoaderCallback(NodeLoader(ilib));

module.exports = ilib;

