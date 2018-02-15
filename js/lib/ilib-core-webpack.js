/**
 * ilib-core-webpack.js - metafile that includes a minimal set of other js files
 * 
 * @license
 * Copyright © 2018, JEDLSoft
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

var ilib = require("./ilib.js");

ilib.JSUtils = require("./JSUtils.js");
ilib.IString = require("./IString.js");
ilib.ResBundle = require("./ResBundle.js");
ilib.ScriptInfo = require("./ScriptInfo.js");

//This unpacks the above classes to the global scope
require("./ilib-unpack.js");

// Must be at the end of meta file
require("./ilib-getdata.js");

module.exports = ilib;