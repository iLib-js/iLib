/*
 * benctype_initial_dynamic.js - benchmark the CType object with initial dynamic formats
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

var isSpace = require("./../lib/isSpace.js");
var isDigit = require("./../lib/isDigit.js");
var isAlpha = require("./../lib/isAlpha.js");
var CType = require("./../lib/CType.js");
function testCTypeLoaderL(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-loader-l-initial",
		fn: function () {
			CType._load("ctype_l", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderZ(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-loader-z-initial",
		fn: function () {
			CType._load("ctype_z", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderC(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-loader-c-initial",
		fn: function () {
			CType._load("ctype_c", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderP(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-loader-p-initial",
		fn: function () {
			CType._load("ctype_p", true);
		}
	});
	
	tt.run(results);
}

function testCTypeisAlpha(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-initial",
		fn: function () {
			assertTrue(isAlpha("a"));
			assertFalse(isAlpha(";"));
		}
	});
	
	tt.run(results);
}

function testCTypeisDigit(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-initial",
		fn: function () {
			assertTrue(isDigit("5"));
			assertFalse(isDigit("g"));
		}
	});
	
	tt.run(results);
}

function testCTypeisSpace(results) {
	var tt = new TimedTest({
		name: "CType-dynamic-isSpace-initial",
		fn: function () {
			assertTrue(isSpace(" "));
			assertFalse(isSpace("g"));
		}
	});
	
	tt.run(results);
}
