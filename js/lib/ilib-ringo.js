/*
 * ilib-ringo.js - glue code for rhino apps to load inside of an app server
 * using ringojs
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

// ringo already has a CommonJS require system, so we don't have to implement 
// our own like we do in plain jane rhino

var RhinoLoader = require("../lib/RhinoLoader.js");
var ilib = require("../lib/ilib.js");

ilib._dyncode = true; // indicate that we are using dynamically loaded code
ilib._dyndata = true;

ilib.setLoaderCallback(new RhinoLoader());
