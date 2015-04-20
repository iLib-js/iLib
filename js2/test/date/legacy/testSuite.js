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

var cli = require('./runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("date/legacy/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
		"testdatefmt_af_NA.js",
		"testdatefmt_af_ZA.js",
        "testdatefmt_am_ET.js",
   		"testdatefmt_ar_SA.js",
		"testdatefmt_as_IN.js",
		"testdatefmt_bg.js",
		"testdatefmt_bn_IN.js",
		"testdatefmt_bs_Cyrl_BA.js",
		"testdatefmt_bs_Latn_BA.js",
		"testdatefmt_cop_EG.js",
		"testdatefmt_cs_CZ.js",
		"testdatefmt_da_DK.js",
		"testdatefmt_de_DE.js",
		"testdatefmt_el_GR.js", 
		"testdatefmt_en_CA.js",
		"testdatefmt_en_GB.js",
		"testdatefmt_en_IN.js",
		"testdatefmt_en_US.js",
		"testdatefmt_es_CO.js",
		"testdatefmt_es_ES.js",
		"testdatefmt_et_EE.js",
		"testdatefmt_fa_IR.js",
		"testdatefmt_fi_FI.js",
		"testdatefmt_fr_CA.js",
		"testdatefmt_fr_FR.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

