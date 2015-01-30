/*
 * testSuiteKZ.js - 2nd half of the test suites for this directory
 * 
 * Copyright © 2015, JEDLSoft
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
		"testaddress_KE.js",
		"testaddress_KG.js",
		"testaddress_KR.js",
		"testaddress_KW.js",
		"testaddress_LB.js",
		"testaddress_LK.js",
		"testaddress_LR.js",
		"testaddress_LT.js",
		"testaddress_LU.js",
		"testaddress_LV.js",
		"testaddress_LY.js",
		"testaddress_MA.js",
		"testaddress_ME.js",
		"testaddress_MK.js",
		"testaddress_ML.js",
		"testaddress_MM.js",
		"testaddress_MO.js",
		"testaddress_MR.js",
		"testaddress_MW.js",
		"testaddress_MX.js",
		"testaddress_MY.js",
		"testaddress_NG.js",
		"testaddress_NI.js",
		"testaddress_NL.js",
		"testaddress_NO.js",
		"testaddress_NZ.js",
		"testaddress_OM.js",
		"testaddress_PA.js",
		"testaddress_PE.js",
		"testaddress_PH.js",
		"testaddress_PK.js",
		"testaddress_PL.js",
		"testaddress_PR.js",
		"testaddress_PT.js",
		"testaddress_PY.js",
		"testaddress_QA.js",
		"testaddress_RO.js",
		"testaddress_RS.js",
		"testaddress_RU.js",
		"testaddress_RW.js",
		"testaddress_SA.js",
		"testaddress_SD.js",
		"testaddress_SE.js",
		"testaddress_SG.js",
		"testaddress_SI.js",
		"testaddress_SK.js",
		"testaddress_SL.js",
		"testaddress_SN.js",
		"testaddress_SV.js",
		"testaddress_SY.js",
		"testaddress_TG.js",
		"testaddress_TH.js",
		"testaddress_TN.js",
		"testaddress_TR.js",
		"testaddress_TW.js",
		"testaddress_TZ.js",
		"testaddress_UA.js",
		"testaddress_UG.js",
		"testaddress_UY.js",
		"testaddress_VE.js",
		"testaddress_VN.js",
		"testaddress_YE.js",
		"testaddress_ZA.js",
		"testaddress_ZM.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

