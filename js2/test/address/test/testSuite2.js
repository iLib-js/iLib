/*
 * testSuite.js - 1st half of the test suites for this directory
 * 
 * Copyright © 2013-2015, JEDLSoft
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
	var suite = new TestSuite("address/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
		"testaddress_EC.js",
		"testaddress_EE.js",
		"testaddress_EG.js",
		"testaddress_ES.js",
		"testaddress_ET.js",
		"testaddress_FI.js",
		"testaddress_FR.js",
		"testaddress_GA.js",
		"testaddress_GB.js",
		"testaddress_GE.js",
		"testaddress_GH.js",
		"testaddress_GM.js",
		"testaddress_GN.js",
		"testaddress_GQ.js",
		"testaddress_GR.js",
		"testaddress_GT.js",
		"testaddress_HK.js",
		"testaddress_HN.js",
		"testaddress_HR.js",
		"testaddress_HU.js",
		"testaddress_ID.js",
		"testaddress_IE.js",
		"testaddress_IL.js",
		"testaddress_IN.js",
		"testaddress_IQ.js",
		"testaddress_IR.js",
		"testaddress_IS.js",
		"testaddress_IT.js",
		"testaddress_JO.js",
		"testaddress_JP.js",
		"testaddress.js",
		"testaddressasync.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

