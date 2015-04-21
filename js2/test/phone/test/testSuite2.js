/*
 * testSuite.js - test suite for this directory
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

var TestSuite = require("./TestSuiteModule.js");

function newSuite(path, include) {
	var suite = new TestSuite("phone/test/" + path);
	return suite;
}

function suite() {
	var s = new TestSuite();
	
	var suites = [
		"phonenum_IN.js",
		"phonenum_IT.js",
		"phonenum_JP.js",
		"phonenum_KR.js",
		"phonenum_LU.js",
		"phonenum_MX.js",
		"phonenum_NL.js",
		"phonenum_NZ.js",
		"phonenum_RU.js",
		"phonenum_SG.js",
		"phonenum_TW.js",
		"phonenum_US.js",
		"phonefmt_AU.js",
		"phonefmt_BE.js",
		"phonefmt_BR.js",
		"phonefmt_CN.js",
		"phonefmt_DE.js",
		"phonefmt_ES.js",
		"phonefmt_FR.js",
		"phonefmt_GB.js",
	];
	
	suites.forEach(function (path) {
		s.addSuite(newSuite(path));
	});
	
	return s;
}
