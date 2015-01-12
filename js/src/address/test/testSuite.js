/*
 * testSuite.js - test suite for this directory
 * 
 * Copyright © 2013-2014, JEDLSoft
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
		//"testaddress_AM.js",
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
		//"testaddress_BO.js",
		"testaddress_BR.js",
		"testaddress_BY.js",
		"testaddress_CA.js",
		"testaddress_CD.js",
		"testaddress_CF.js",
		"testaddress_CG.js",
		"testaddress_CH.js",
		"testaddress_CI.js",
		//"testaddress_CL.js",
		"testaddress_CM.js",
		"testaddress_CN.js",
		"testaddress_CO.js",
		"testaddress_CR.js",
		"testaddress_CV.js",
		"testaddress_CZ.js",
		"testaddress_DE.js",
		"testaddress_DJ.js",
		"testaddress_DK.js",
		//"testaddress_DO.js",
		"testaddress_DZ.js",
		"testaddress_EC.js",
		"testaddress_EE.js",
		"testaddress_EG.js",
		"testaddress_ES.js",
		//"testaddress_ET.js",
		"testaddress_FI.js",
		"testaddress_FR.js",
		"testaddress_GA.js",
		"testaddress_GB.js",
		//"testaddress_GE.js",
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
		//"testaddress_IN.js",
		"testaddress_IQ.js",
		"testaddress_IR.js",
		//"testaddress_IS.js",
		"testaddress_IT.js",
		"testaddress_JO.js",
		"testaddress_JP.js",
		"testaddress.js",
		"testaddress_KE.js",
		"testaddress_KG.js",
		"testaddress_KR.js",
		//"testaddress_KW.js",
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
		//"testaddress_MO.js",
		"testaddress_MR.js",
		"testaddress_MW.js",
		"testaddress_MX.js",
		"testaddress_MY.js",
		"testaddress_NG.js",
		//"testaddress_NI.js",
		"testaddress_NL.js",
		"testaddress_NO.js",
		"testaddress_NZ.js",
		"testaddress_OM.js",
		//"testaddress_PA.js",
		//"testaddress_PE.js",
		"testaddress_PH.js",
		"testaddress_PK.js",
		"testaddress_PL.js",
		"testaddress_PR.js",
		"testaddress_PT.js",
		//"testaddress_PY.js",
		"testaddress_QA.js",
		"testaddress_RO.js",
		//"testaddress_RS.js",
		"testaddress_RU.js",
		"testaddress_RW.js",
		//"testaddress_SA.js",
		"testaddress_SD.js",
		"testaddress_SE.js",
		"testaddress_SG.js",
		"testaddress_SI.js",
		"testaddress_SK.js",
		//"testaddress_SL.js",
		//"testaddress_SN.js",
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

