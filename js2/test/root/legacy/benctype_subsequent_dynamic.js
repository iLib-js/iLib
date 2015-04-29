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

function testCTypeLoaderL(results) {
	ilib.CType._load("ctype_l", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-l-subsequent",
		iterations: 1000,
		fn: function () {
			ilib.CType._load("ctype_l", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderZ(results) {
	ilib.CType._load("ctype_z", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-z-subsequent",
		iterations: 1000,
		fn: function () {
			ilib.CType._load("ctype_z", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderC(results) {
	ilib.CType._load("ctype_c", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-c-subsequent",
		iterations: 1000,
		fn: function () {
			ilib.CType._load("ctype_c", true);
		}
	});
	
	tt.run(results);
}

function testCTypeLoaderP(results) {
	ilib.CType._load("ctype_p", true);
	
	var tt = new TimedTest({
		name: "CType-dynamic-loader-p-subsequent",
		iterations: 1000,
		fn: function () {
			ilib.CType._load("ctype_p", true);
		}
	});
	
	tt.run(results);
}

function testCTypeisAlpha(results) {
	ilib.CType.isAlpha("a");
	ilib.CType.isAlpha(";");

	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(ilib.CType.isAlpha("a"));
			assertFalse(ilib.CType.isAlpha(";"));
		}
	});
	
	tt.run(results);
}

function testCTypeisDigit(results) {
	ilib.CType.isDigit("5");
	ilib.CType.isDigit("g");

	var tt = new TimedTest({
		name: "CType-dynamic-isAlpha-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(ilib.CType.isDigit("5"));
			assertFalse(ilib.CType.isDigit("g"));
		}
	});
	
	tt.run(results);
}

function testCTypeisSpace(results) {
	ilib.CType.isSpace(" ");
	ilib.CType.isSpace("g");

	var tt = new TimedTest({
		name: "CType-dynamic-isSpace-subsequent",
		iterations: 1000,
		fn: function () {
			assertTrue(ilib.CType.isSpace(" "));
			assertFalse(ilib.CType.isSpace("g"));
		}
	});
	
	tt.run(results);
}
