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
	    "testcalendar.js",
	    "testcurrency.js",
	    "testdatefmt_de_DE.js",
	    "testdatefmt_bs_Cyrl_BA.js",
	    "testdatefmt_kk_Cyrl_KZ.js",
	    "testdatefmt_nb_NO.js",
	    "testdatefmt_ro_RO.js",
            "testdatefmt_ar_SA.js",
            "testdatefmt_he_IL.js",
	    "testdatefmt_ku_Arab_IQ.js",
	    "testdatefmt_bs_Latn_BA.js",
	    "testdatefmt_fi_FI.js",	
	    "testdatefmt_sk_SK.js",
	    "testdatefmt_hi_IN.js",	
	    "testdatefmt_en_US.js",
	    "testdatefmt_pl_PL.js",
	    "testdatefmt_en_CA.js",
            "testdatefmt_mk_MK.js",
	    "testdatefmt_ms_MY.js",
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
	    "testdatefmt_vi_VN.js",
	    "testdatefmt_zh_CN.js",
	    "testdatefmt_es_CO.js",
	    "testdatefmt_nl_NL.js",
	    "testdatefmt_hi_IN.js",
	    "testdatefmt_pl_PL.js",
	    "testdate.js",
	   "testdatefmt_el_GR.js", 
	   "testdatefmt_uk_UK.js",
            "testdatefmt_lt_LT.js",  	
	   "testdatefmt_lv_LV.js", 
	    "testdatefmt_hr_HR.js",
            //"testdatefmt_th_TH.js",
           "testdatefmt_et_EE.js",
           "testdatefmt_ga_IE.js",
	   "testdatefmt_da_DK.js",
	   "testdatefmt_cs_CZ.js",
	    "testjulianday.js",
	    "testlocale.js",
	    "testlocaleinfo.js",
	    "testnumfmt.js",
	    "testresources.js",
	    "teststrings.js",
	    "testtimezone.js",
	    "testdatefmtrange.js",
	    "testdatefmtrange_en_US.js",
            "testdatefmtrange_en_SG.js",
	    "testdatefmtrange_de_DE.js",
	    "testdatefmtrange_es_ES.js",
	    "testdatefmtrange_es_VE.js",
            "testdatefmtrange_es_CO.js",
	    "testdatefmtrange_es_UY.js",
	    "testdatefmtrange_ja_JP.js",
	    "testdatefmtrange_fr_FR.js",
	    "testdatefmtrange_ru_RU.js",
            "testdatefmtrange_pt_PT.js",
            "testdatefmtrange_fi_FI.js",
            "testdatefmtrange_fr_CA.js",
            "testdatefmtrange_id_ID.js",
            "testdatefmtrange_it_IT.js",
            "testdatefmtrange_ko_KR.js",
            "testdatefmtrange_sv_SE.js",
            "testdatefmtrange_bs_Latn_BA.js",
            "testdatefmtrange_en_GB.js",
	    "testdatefmtrange_hi_IN.js",
	    "testdatefmtrange_nl_NL.js",
	    "testdatefmtrange_el_GR.js",
	    "testdatefmtrange_da_DK.js",
            "testdatefmtrange_bg_BG.js",
	    "testdatefmtrange_vi_VN.js",
	    "testdatefmtrange_cs_CZ.js",
            "testdatefmtrange_et_EE.js",
            "testdatefmtrange_ga_IE.js",
            "testdatefmtrange_hr_HR.js",
            "testdatefmtrange_hu_HU.js",
	    "testdatefmtrange_kk-Cyrl-KZ.js",
            "testdatefmtrange_lt_LT.js",
            "testdatefmtrange_lv_LV.js",
            //"testdatefmtrange_mn_Cyrl_MN.js",
            "testdatefmtrange_ms_MY.js",
            "testdatefmtrange_nb_NO.js",
            "testdatefmtrange_pl_PL.js",
            "testdatefmtrange_pt_BR.js",
            "testdatefmtrange_ro_RO.js",
            "testdatefmtrange_sk_SK.js",
            "testdatefmtrange_sl_SL.js",
            "testdatefmtrange_sq_AL.js",
            "testdatefmtrange_sr_Latn_RS.js",
            "testdatefmtrange_th_TH.js",
            "testdatefmtrange_tr_TR.js",
            "testdatefmtrange_uk_UA.js",
            "testdatefmtrange_uz_Cyrl_UZ.js",
            "testdatefmtrange_uz_Latn_UZ.js",
            "testdatefmtrange_zh_Hans_CN.js",
            "testdatefmtrange_zh_Hant_HK.js",
            "testdatefmtrange_zh_Hant_TW.js",
            "testdatefmtrange_he_IL.js",
            //"testdatefmtrange_fa_IR.js",
	    //"testdatefmtrange_ar_SA.js",
	    "testname.js",
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
	    "testname_zh_CN.js",
	    "testaddress.js",
	    //"testaddress_AT.js",
	    "testaddress_AU.js",
	    // "testaddress_BE.js",
	    "testaddress_CA.js",
	    //"testaddress_CH.js",
	    "testaddress_CN.js",
	    "testaddress_DE.js",
	    "testaddress_ES.js",
	    "testaddress_FR.js",
	    "testaddress_GB.js",
	    "testaddress_HK.js",
	    "testaddress_IE.js",
	    "testaddress_IT.js",
	    //"testaddress_LU.js",
	    "testaddress_MO.js",
	    "testaddress_MX.js",
	    "testaddress_NL.js",
	    "testaddress_NZ.js",
	    "testaddress_SG.js",
	    "testaddress_TW.js"
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
