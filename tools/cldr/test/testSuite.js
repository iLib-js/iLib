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

var cli = require('../../../js/src/testcli/runner.js');
function newSuite(path) {
	var suite = new cli.TestSuite("test/" + path);
	//suite.include("./common.js");
	//suite.include("./unifile.js");
	//suite.include("./uniData.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
   	    "testcommon.js",
	    "testunifile.js",
	    "testunidata.js",
	    "testtranslationunit.js",
	    "testtranslationset.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}
