/*
 * benctype_subsequent_dynamic.js - benchmark the CType object with subsequent dynamic formats
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
	CType._load("ctype_l", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-l-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_l", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderZ(results) {
	CType._load("ctype_z", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-z-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_z", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderC(results) {
	CType._load("ctype_c", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-c-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_c", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderP(results) {
	CType._load("ctype_p", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-p-subsequent",
		iterations: 1000,
		fn: function () {
			CType._load("ctype_p", true);
		}
	});
	
	tt.run(results);
}

function testCTypeisAlpha(results) {
	isAlpha("a");
	isAlpha(";");

	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isAlpha("a"));
			assertFalse(isAlpha(";"));
		}
	});
	
	tt.run(results);
}

function testCTypeisDigit(results) {
	isDigit("5");
	isDigit("g");

	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isDigit("5"));
			assertFalse(isDigit("g"));
		}
	});
	
	tt.run(results);
}

function testCTypeisSpace(results) {
	isSpace(" ");
	isSpace("g");

	var tt = new TimedTest({
		name: "CType-dynamic-isSpace-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(isSpace(" "));
			assertFalse(isSpace("g"));
		}
	});
	
	tt.run(results);
}
