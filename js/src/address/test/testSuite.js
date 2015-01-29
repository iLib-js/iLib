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

var cli = require('../testcli/runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("address/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
        "testaddress_AE.js",
		"testaddress_AF.js",
		"testaddress_AL.js",
		"testaddress_AM.js",
		"testaddress_AO.js",
		"testaddress_AR.js",
		"testaddress_AT.js",
		"testaddress_AU.js",
		"testaddress_AZ.js",
		"testaddress_BA.js",
		"testaddress_BE.js",
		"testaddress_BF.js",
		"testaddress_BG.js",
		"testaddress_BH.js",
		"testaddress_BJ.js",
		"testaddress_BO.js",
		"testaddress_BR.js",
		"testaddress_BY.js",
		"testaddress_CA.js",
		"testaddress_CD.js",
		"testaddress_CF.js",
		"testaddress_CG.js",
		"testaddress_CH.js",
		"testaddress_CI.js",
		"testaddress_CL.js",
		"testaddress_CM.js",
		"testaddress_CN.js",
		"testaddress_CO.js",
		"testaddress_CR.js",
		"testaddress_CV.js",
		"testaddress_CZ.js",
		"testaddress_DE.js",
		"testaddress_DJ.js",
		"testaddress_DK.js",
		"testaddress_DO.js",
		"testaddress_DZ.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

