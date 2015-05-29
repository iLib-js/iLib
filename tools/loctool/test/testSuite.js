/*
 * testSuite.js - test suite for this directory
 * 
 * Copyright © 2012, JEDLSoft
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

var TestSuite = require('../../js/test/TestSuiteModule.js');
function newSuite(path) {
	var suite = new TestSuite("test/" + path);
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
   	    "testtranslationunit.js",
	    "testtranslationset.js",
	    "testtreelocale.js",
	    "testJSFile.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}
