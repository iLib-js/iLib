/*
 * testSuite.js - test suite for this directory
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
	var suite = new TestSuite("root/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
   		"testloader.js",
		"testrequire.js",
		"testglobal.js",
		"testlocaleinfo.js",
		"testlocale.js",
		"testresources.js",
		"testscriptinfo.js",
		"teststrings.js",
		"testlocalematch.js",
		"testcharset.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

