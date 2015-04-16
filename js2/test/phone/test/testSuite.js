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

var cli = require('./runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("phone/test/" + path);
	return suite;
}

function suite() {
	var s = new cli.TestSuite();
	
	var suites = [
		"numplan.js",
		"phoneloc.js",
		"phonenum.js",
		"phonegeo.js",
		"phonegeo_KR.js",
		"phonegeo_JP.js",
		"normalize.js",
		"normalize_KR.js",
		"imsi.js",
		"phonenum_AU.js",
		"phonenum_BE.js",
		"phonenum_BR.js",
		"phonenum_CN.js",
		"phonenum_DE.js",
		"phonenum_ES.js",
		"phonenum_FR.js",
		"phonenum_GB.js",
		"phonenum_HK.js",
		"phonenum_IE.js",
		"phonenum_IN.js"
	];
	
	suites.forEach(function (path) {
		s.addSuite(newSuite(path));
	});
	
	return s;
}
