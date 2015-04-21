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
		"phonefmt_HK.js",
		"phonefmt_IE.js",
		"phonefmt_IN.js",
		"phonefmt_IT.js",
		"phonefmt_JP.js",
		"phonefmt_KR.js",
		"phonefmt_LU.js",
		"phonefmt_MX.js",
		"phonefmt_NL.js",
		"phonefmt_NZ.js",
		"phonefmt_RU.js",
		"phonefmt_SG.js",
		"phonefmt_TW.js",
		"phonefmt_US.js",
		"phonegeo_RU.js",
		"phonegeo_BR.js",
		"phonegeo_TW.js",
		"normalize_BR.js",
		"normalize_JP.js",
		"normalize_RU.js",
		"normalize_TW.js"
	];
	
	suites.forEach(function (path) {
		s.addSuite(newSuite(path));
	});
	
	return s;
}
