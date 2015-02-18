/*
 * testSuiteDates.js - test suite for the date tests
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

var cli = require('../testcli/runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("daterange/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
        "testdatefmtrange_am_ET.js",                  
		"testdatefmtrange_ar_SA.js",
		"testdatefmtrange_as_IN.js",
		"testdatefmtrange_bg_BG.js",
		"testdatefmtrange_bn_IN.js",
		"testdatefmtrange_bs_Latn_BA.js",
		"testdatefmtrange_cs_CZ.js",
		"testdatefmtrange_da_DK.js",
		"testdatefmtrange_de_DE.js",
		"testdatefmtrange_el_GR.js",
		"testdatefmtrange_en_GB.js",
		"testdatefmtrange_en_SG.js",
		"testdatefmtrange_en_US.js",
		"testdatefmtrange_es_CO.js",
		"testdatefmtrange_es_ES.js",
		"testdatefmtrange_es_UY.js",
		"testdatefmtrange_es_VE.js",
		"testdatefmtrange_et_EE.js",
		"testdatefmtrange_fa_IR.js",
		"testdatefmtrange_fi_FI.js",
		"testdatefmtrange_fr_CA.js",
		"testdatefmtrange_fr_FR.js",
		"testdatefmtrange_ga_IE.js",
		"testdatefmtrange_gu_IN.js",
		"testdatefmtrange_he_IL.js",
		"testdatefmtrange_hi_IN.js",
		"testdatefmtrange_hr_HR.js",
		"testdatefmtrange_hu_HU.js",
		"testdatefmtrange_id_ID.js",
		"testdatefmtrange_it_IT.js",
		"testdatefmtrange_ja_JP.js",
		"testdatefmtrange.js",
		"testdatefmtrange_kk_Cyrl_KZ.js",
		"testdatefmtrange_kn_IN.js",
		"testdatefmtrange_ko_KR.js",
		//"testdatefmtrange_ku_Arab_IQ.js",
		"testdatefmtrange_lt_LT.js",
		"testdatefmtrange_lv_LV.js",
		"testdatefmtrange_mk_MK.js",
		"testdatefmtrange_ml_IN.js",
		"testdatefmtrange_mn_Cyrl_MN.js",
		"testdatefmtrange_mr_IN.js",
		"testdatefmtrange_ms_MY.js",
		"testdatefmtrange_nb_NO.js",
		"testdatefmtrange_nl_NL.js",
		"testdatefmtrange_pa_IN.js",
		"testdatefmtrange_pl_PL.js",
		"testdatefmtrange_pt_BR.js",
		"testdatefmtrange_pt_PT.js",
		"testdatefmtrange_ro_RO.js",
		"testdatefmtrange_ru_RU.js",
		"testdatefmtrange_sk_SK.js",
		"testdatefmtrange_sl_SI.js",
		"testdatefmtrange_sq_AL.js",
		"testdatefmtrange_sr_Latn_RS.js",
		"testdatefmtrange_sv_SE.js",
		"testdatefmtrange_ta_IN.js",
		"testdatefmtrange_te_IN.js",
		"testdatefmtrange_th_TH.js",
		"testdatefmtrange_tr_TR.js",
		"testdatefmtrange_uk_UA.js",
		"testdatefmtrange_ur_IN.js",
		"testdatefmtrange_uz_Cyrl_UZ.js",
		"testdatefmtrange_uz_Latn_UZ.js",
		"testdatefmtrange_vi_VN.js",
		"testdatefmtrange_zh_Hans_CN.js",
		"testdatefmtrange_zh_Hant_HK.js",
		"testdatefmtrange_zh_Hant_TW.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

