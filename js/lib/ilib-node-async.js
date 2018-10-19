/* jshint node: true */
/*
 * ilib-node-async.js - glue code for node to load local ilib code and
 * data dynamically and asynchronously. Intended to be used with the
 * unit tests.
 *
 * Copyright © 2016, JEDLSoft
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

var AsyncNodeLoader = require("../lib/AsyncNodeLoader.js");

var ilib = require("../lib/ilib.js");
ilib.setLoaderCallback(AsyncNodeLoader(ilib));

ilib._dyncode = true; // indicate that we are using dynamically loaded code
ilib._dyndata = true;

module.exports = ilib;

