/*
 * testSuite.js - test suite for this directory
 * 
 * Copyright © 2013, JEDLSoft
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
	var suite = new cli.TestSuite("test/" + path);
	suite.include(include);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
	    /*"testcalendar.js",
	    "testcurrency.js",
	    "testdatefmt_de_DE.js",
	     "testdatefmt_bs_Cyrl_BA.js",
	     "testdatefmt_fi_FI.js",	
	    "testdatefmt_sk_SK.js",
	      "testdatefmt_hi_IN.js",	
	    "testdatefmt_en_US.js",
	    "testdatefmt_pl_PL.js",
	    "testdatefmt_en_CA.js",
	    "testdatefmt_en_GB.js",
	    "testdatefmt_en_IN.js",
		"testdatefmt_es_ES.js",
	    "testdatefmt_fr_FR.js",
		"testdatefmt_fr_CA.js",
	    "testdatefmt.js",
	     "testdatefmt_es_CO.js",
	    "testdatefmt_it_IT.js",
	    "testdatefmt_id_ID.js",
	    "testdatefmt_ja_JP.js",
	    "testdatefmt_ko_KR.js",
	    "testdatefmt_pt_BR.js",
	    "testdatefmt_ru_RU.js",
	    "testdatefmt_zh_CN.js",
	    "testdatefmt_es_CO.js",
	    "testdatefmt_nl_NL.js",
	    "testdatefmt_hi_IN.js",
	    "testdatefmt_pl_PL.js",
	    "testdate.js",
	    "testjulianday.js",
	    "testlocale.js",
	    "testlocaleinfo.js",
	    "testnumfmt.js",
	    "testresources.js",
	    "teststrings.js",
	    "testtimezone.js",
	    "testdatefmtrange.js",
	    "testdatefmtrange_en_US.js",
	    "testdatefmtrange_de_DE.js",
	    "testdatefmtrange_ja_JP.js",
	    "testdatefmtrange_fr_FR.js",*/
	    /*"testname.js",
	    "testnamefmt.js",
	    "testctype.js",
	    "testdurfmt.js",
	    "testglobal.js",
	    "testscriptinfo.js",
	    "testcollation.js",
	    "testname.js",
	    "testnamefmt.js",
	    "testname_de.js",
	    "testname_en.js",
	    "testname_es.js",
	    "testname_nl.js",
	    "testname_zh_CN.js",*/
	    "testaddress.js",
	    "testaddress_AR.js",
	    "testaddress_AT.js",
	    "testaddress_AU.js",
	    "testaddress_BE.js",
            "testaddress_BR.js",
	    "testaddress_CA.js",
	    "testaddress_CH.js",
	    "testaddress_CN.js",
	    "testaddress_DE.js",
	    "testaddress_DK.js",
	    "testaddress_ES.js",
	    "testaddress_FI.js",
	    "testaddress_FR.js",
	    "testaddress_GB.js",
	    "testaddress_GR.js",
	    "testaddress_HK.js",
	    "testaddress_HU.js",
	    "testaddress_ID.js",
	    "testaddress_IE.js",
	    "testaddress_IS.js",
	    "testaddress_IT.js",
	    "testaddress_LU.js",
	    "testaddress_MO.js",
	    "testaddress_MX.js",
	    "testaddress_MY.js",
	    "testaddress_NL.js",
	    "testaddress_NO.js",
	    "testaddress_NZ.js",
	    "testaddress_SG.js",
	    "testaddress_KR.js",
	    "testaddress_SA.js",
	    "testaddress_SK.js",
            "testaddress_TR.js",	
	    "testaddress_SE.js",
	    "testaddress_SI.js",
	    "testaddress_TH.js",
	    "testaddress_ZA.js",
	    "testaddress_IL.js",
	    "testaddress_TW.js",
	    "testaddress_ZM.js",
	    "testaddress_VE.js",
	    "testaddress_UY.js",
	    "testaddress_UG.js",
	    "testaddress_TZ.js",
	    "testaddress_LK.js",
            "testaddress_SL.js",
	    "testaddress_CG.js",
	    "testaddress_RW.js",
	    "testaddress_SN.js",
	    "testaddress_TG.js",
            "testaddress_PL.js",
	    "testaddress_PT.js",
            "testaddress_PH.js",
            "testaddress_PY.js",
	    "testaddress_PK.js",
	    "testaddress_RO.js",
            "testaddress_RS.js",
	    "testaddress_UA.js",
	    "testaddress_MM.js",
	    "testaddress_NG.js",
	    "testaddress_AL.js",
	     "testaddress_AO.js",
	     "testaddress_AM.js",
	     "testaddress_AZ.js",
	     "testaddress_BJ.js",
	     "testaddress_BO.js",
	     "testaddress_BA.js",
	     "testaddress_BG.js",
	     "testaddress_BF.js",
	     "testaddress_CM.js",
	     "testaddress_CV.js",
	     "testaddress_CF.js",
	     "testaddress_CL.js",
	     "testaddress_CO.js",
	     "testaddress_CR.js",
	     "testaddress_HR.js",
	     "testaddress_CD.js",
	     "testaddress_DO.js",
	     "testaddress_EC.js",
	     "testaddress_SV.js",
	     "testaddress_EE.js",
	     "testaddress_ET.js",		
	     "testaddress_AF.js",
	     "testaddress_DZ.js",
	     "testaddress_BH.js",
	     "testaddress_DJ.js",
	     "testaddress_IR.js",
	     "testaddress_JO.js",
	     "testaddress_LB.js",
	      "testaddress_PA.js",
	    "testaddress_PE.js",
	    "testaddress_NI.js",
	    "testaddress_LV.js",
	    "testaddress_LR.js",
	    "testaddress_MW.js",
	    "testaddress_LT.js",
	    "testaddress_MK.js",
	    "testaddress_ML.js",
	    "testaddress_KE.js",
	    "testaddress_HN.js",
	    "testaddress_GA.js",
	    "testaddress_GM.js",
	    "testaddress_GE.js",
	    "testaddress_GH.js",
	    "testaddress_GT.js",
	    "testaddress_GQ.js",
	    "testaddress_GN.js",
	    "testaddress_CI.js",
	    "testaddress_BY.js",
	     //"testaddress_CI.js",
	    //"testaddress_BY.js",
	    "testaddress_KG.js",
            "testaddress_VN.js",
	    "testaddress_SD.js",
	    "testaddress_OM.js",
	    "testaddress_YE.js",
	    "testaddress_QA.js",
	    "testaddress_TN.js",
	    "testaddress_SY.js"
	];

    // uncompiled
    suites.forEach(function (path) {
    	s.addSuite(newSuite(path, "ilib-ut.js"));
    });
    
    // compiled
    suites.forEach(function (path) {
    	s.addSuite(newSuite(path, "ilib-ut-compiled.js"));
    });
    
    return s;
}
