/*
 * benwholefile_assembled.js - benchmark loading the entire library with preassembled data
 *
 * Copyright © 2014, JEDLSoft
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

var ilib = require("./../lib/ilib.js");
function testLoadWholeFileAssembledCore(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-core",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileAssembledStandard(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-standard",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileAssembledFull(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-full",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileAssembledCoreCompiled(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-core-compiled",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileAssembledStandardCompiled(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-standard-compiled",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}

function testLoadWholeFileAssembledFullCompiled(results) {
	var tt = new TimedTest({
		name: "WholeFile-assembled-full-compiled",
		fn: function () {
		    assertNotUndefined(ilib);
		}
	});

	tt.run(results);
}
