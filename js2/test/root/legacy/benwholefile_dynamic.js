/*
 * benwholefile_dynamic.js - benchmark loading the entire library with dynamic data
 *
 * Copyright © 2014-2015, JEDLSoft
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

function testLoadWholeFileDynamicCore(results) {
	var tt = new TimedTest({
		name: "WholeFile-dynamic-core",
		fn: function () {
		    var ilib = require("../ilib-dyn-core.js");
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileDynamicStandard(results) {
	var tt = new TimedTest({
		name: "WholeFile-dynamic-standard",
		fn: function () {
		    var ilib = require("../ilib-dyn-standard.js");
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileDynamicFull(results) {
	var tt = new TimedTest({
		name: "WholeFile-dynamic-full",
		fn: function () {
		    var ilib = require("../ilib-dyn-full.js");
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}
