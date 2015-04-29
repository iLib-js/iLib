/*
 * testSuite.js - test suite for the extended strings tests
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

var TestSuite = require("./TestSuiteModule.js");

function newSuite(path, include) {
	var suite = new TestSuite("strings-ext/test/" + path);
	//suite.include("strings-ext/test/normdata.js");
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
		"testnorm.js",
		"testglyphstr.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

