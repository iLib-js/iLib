 /*
 * testMeridiems.js
 *
 * Copyright © 2019, JEDLSoft
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

if (typeof(DateFmtInfo) === "undefined") {
    var DateFmtInfo = require("../../lib/DateFmtInfo.js");
}

module.exports.testmeridiems = {
    testMeridiem_ar_EG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-EG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_IQ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-IQ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_MA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-MA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_as_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "as-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "পূৰ্বাহ্ন");
        test.equal(range[1].name, "অপৰাহ্ন");

        test.done();
    },
    testMeridiem_bg_BG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "bg-BG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "пр.об.");
        test.equal(range[1].name, "сл.об.");

        test.done();
    },
    testMeridiem_bn_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "bn-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_bs_Latn_BA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "bs-Latn-BA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "prijepodne");
        test.equal(range[1].name, "popodne");

        test.done();
    },
    testMeridiem_bs_Latn_ME: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "bs-Latn-ME"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "prijepodne");
        test.equal(range[1].name, "popodne");

        test.done();
    },
    testMeridiem_cs_CZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "cs-CZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "dop.");
        test.equal(range[1].name, "odp.");

        test.done();
    },
    testMeridiem_da_DK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "da-DK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_de_AT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "de-AT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM"); //// CLDR 34 change
        test.equal(range[1].name, "PM"); //// CLDR 34 change

        test.done();
    },
    testMeridiem_de_CH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "de-CH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_de_DE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "de-DE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_de_LU: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "de-LU"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_el_CY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "el-CY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "π.μ.");
        test.equal(range[1].name, "μ.μ.");

        test.done();
    },
    testMeridiem_el_GR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "el-GR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "π.μ.");
        test.equal(range[1].name, "μ.μ.");

        test.done();
    },
    testMeridiem_en_AM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-AM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_AU: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-AU"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_AZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-AZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_CA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-CA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_GB: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-GB"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_GH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-GH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_HK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-HK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_IE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-IE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_IS: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-IS"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_JP: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-JP"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_KE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-KE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_KR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-KR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_LK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-LK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-MM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-MW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_MY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-MY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_NG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-NG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_NZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-NZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_PH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-PH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_PR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-PR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_SG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-SG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_US: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_UG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-UG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_ZA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-ZA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_ZM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-ZM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_es_AR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-AR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_BO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-BO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_CL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-CL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_CO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-CO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_DO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-DO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_EC: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-EC"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_ES: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-ES"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_GT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-GT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_HN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-HN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_MX: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-MX"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_NI: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-NI"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_PA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-PA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_PE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-PE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_PR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-PR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_PY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-PY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_SV: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-SV"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_US: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_UY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-UY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_VE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-VE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_et_EE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "et-EE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fa_AF: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fa-AF"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "قبل‌ازظهر");
        test.equal(range[1].name, "بعدازظهر");

        test.done();
    },
    testMeridiem_fa_IR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fa-IR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "قبل‌ازظهر");
        test.equal(range[1].name, "بعدازظهر");

        test.done();
    },
    testMeridiem_fi_FI: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fi-FI"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ap.");
        test.equal(range[1].name, "ip.");

        test.done();
    },
    testMeridiem_fr_BE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-BE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_fr_CH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_FR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-FR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_LU: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-LU"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ga_IE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ga-IE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "r.n.");
        test.equal(range[1].name, "i.n.");

        test.done();
    },
    testMeridiem_gu_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "gu-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_he_IL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "he-IL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "לפנה״צ");
        test.equal(range[1].name, "אחה״צ");

        test.done();
    },
    testMeridiem_hi_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hi-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, 'am');
        test.equal(range[1].name, 'pm');
        test.done();
    },
    testMeridiem_hr_HR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hr-HR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_hr_ME: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hr-ME"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_hr_HU: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hr-HU"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_id_ID: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "id-ID"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_is_IS: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "is-IS"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "f.h.");
        test.equal(range[1].name, "e.h.");

        test.done();
    },
    testMeridiem_it_CH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "it-CH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_it_IT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "it-IT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ja_JP: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ja-JP"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "午前");
        test.equal(range[1].name, "午後");

        test.done();
    },
    testMeridiem_kk_KZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "kk-KZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_kn_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "kn-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ಪೂರ್ವಾಹ್ನ");
        test.equal(range[1].name, "ಅಪರಾಹ್ನ");
        test.done();
    },
    testMeridiem_ko_KR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ko-KR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "오전");
        test.equal(range[1].name, "오후");

        test.done();
    },
    testMeridiem_ku_IQ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ku-IQ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ب.ن");
        test.equal(range[1].name, "د.ن");

        test.done();
    },
    testMeridiem_lt_LT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "lt-LT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "priešpiet");
        test.equal(range[1].name, "popiet");

        test.done();
    },
    testMeridiem_lv_LV: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "lv-LV"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "priekšpusdienā");
        test.equal(range[1].name, "pēcpusdienā");

        test.done();
    },
    testMeridiem_mk_MK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "mk-MK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "претпладне");
        test.equal(range[1].name, "попладне");

        test.done();
    },
    testMeridiem_ml_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ml-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_mr_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "mr-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "म.पू.");
        test.equal(range[1].name, "म.उ.");

        test.done();
    },
    testMeridiem_ms_MY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ms-MY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "PG");
        test.equal(range[1].name, "PTG");

        test.done();
    },
    testMeridiem_nb_NO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "nb-NO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_nl_BE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "nl-BE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_nl_NL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "nl-NL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_pa_Guru_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pa-Guru-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ਪੂ.ਦੁ.");
        test.equal(range[1].name, "ਬਾ.ਦੁ.");

        test.done();
    },
    testMeridiem_pl_PL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pl-PL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_pt_BR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pt-BR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_pt_PT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pt-PT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "da manhã");
        test.equal(range[1].name, "da tarde");

        test.done();
    },
    testMeridiem_ro_RO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ro-RO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_sr_Cyrl_RS: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sr-Cyrl-RS"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "пре подне");
        test.equal(range[1].name, "по подне");

        test.done();
    },
    testMeridiem_sr_Latn_RS: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sr-Latn-RS"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "pre podne");
        test.equal(range[1].name, "po podne");

        test.done();
    },
    testMeridiem_ru_BY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-BY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_KG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-KG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_KZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-KZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_GE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-GE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_RU: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-RU"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_UA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ru-UA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_sk_SK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sk-SK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_sl_SI: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sl-SI"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "dop.");
        test.equal(range[1].name, "pop.");

        test.done();
    },
    testMeridiem_sq_AL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sq-AL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);
        test.equal(range[0].name, "e paradites");
        test.equal(range[1].name, "e pasdites");

        test.done();
    },
    testMeridiem_sq_ME: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sq-ME"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);
        test.equal(range[0].name, "e paradites");
        test.equal(range[1].name, "e pasdites");

        test.done();
    },
    testMeridiem_sv_FI: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sv-FI"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "fm");
        test.equal(range[1].name, "em");

        test.done();
    },
    testMeridiem_sv_SE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "sv-SE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "fm");
        test.equal(range[1].name, "em");

        test.done();
    },
    testMeridiem_ta_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ta-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "முற்பகல்");
        test.equal(range[1].name, "பிற்பகல்");

        test.done();
    },
    testMeridiem_te_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "te-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_th_TH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "th-TH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ก่อนเที่ยง");
        test.equal(range[1].name, "หลังเที่ยง");

        test.done();
    },
    testMeridiem_tr_AM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tr-AM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ÖÖ");
        test.equal(range[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_AZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tr-AZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ÖÖ");
        test.equal(range[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_CY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tr-CY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ÖÖ");
        test.equal(range[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_TR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tr-TR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ÖÖ");
        test.equal(range[1].name, "ÖS");

        test.done();
    },
    testMeridiem_uk_UA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "uk-UA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "дп");
        test.equal(range[1].name, "пп");

        test.done();
    },
    testMeridiem_ur_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ur-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_uz_Latn_UZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "uz-Latn-UZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "TO");
        test.equal(range[1].name, "TK");

        test.done();
    },
    testMeridiem_vi_VN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "vi-VN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "SA");
        test.equal(range[1].name, "CH");

        test.done();
    },
    testMeridiem_zh_Hans_CN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zh-Hans-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.equal(range[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hant_HK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zh-Hant-HK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.equal(range[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hant_TW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zh-Hant-TW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.equal(range[1].name, "下午");

        test.done();
    },
    testMeridiem_en_GE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-GE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_CN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MX: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-MX"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_TW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-TW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_mn_MN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "mn-MN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ү.ө.");
        test.equal(range[1].name, "ү.х.");

        test.done();
    },
    testMeridiem_es_CA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-CA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_af_ZA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "af-ZA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "vm.");
        test.equal(range[1].name, "nm.");

        test.done();
    },
    testMeridiem_am_ET: function(test) {
        test.expect(16);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "ethiopic"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ጥዋት");
        test.equal(range[0].start, "00:00");
        test.equal(range[0].end, "05:59");

        test.equal(range[1].name, "ቀትር");
        test.equal(range[1].start, "06:00");
        test.equal(range[1].end, "06:00");

        test.equal(range[2].name, "ከሰዓት");
        test.equal(range[2].start, "06:01");
        test.equal(range[2].end, "11:59");

        test.equal(range[3].name, "ከምሽቱ");
        test.equal(range[3].start, "12:00");
        test.equal(range[3].end, "17:59");

        test.equal(range[4].name, "ከሌሊቱ");
        test.equal(range[4].start, "18:00");
        test.equal(range[4].end, "23:59");

        test.done();
    },
    testMeridiem_ha_Latn_NG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ha-Latn-NG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, 'Safiya');
        test.equal(range[1].name, 'Yamma');

        test.done();
    },
    testMeridiem_or_IN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "or-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_az_Latn_AZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "az-Latn-AZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_km_KH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "km-KH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_si_LK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "si-LK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "පෙ.ව.");
        test.equal(range[1].name, "ප.ව.");

        test.done();
    },
    testMeridiem_ar_AE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-AE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_BH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-BH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_DJ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-DJ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_DZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-DZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_JO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-JO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_KW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-KW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_LB: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-LB"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_LY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-LY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_MR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-MR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_OM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-OM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_QA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-QA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-SA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SD: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-SD"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-SY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_TN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-TN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_ar_YE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ar-YE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ص");
        test.equal(range[1].name, "م");

        test.done();
    },
    testMeridiem_en_ET: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-ET"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_en_GM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-GM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_LR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-LR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_PK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-PK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_RW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-RW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_SD: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-SD"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_SL: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-SL"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_en_TZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "en-TZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");

        test.done();
    },
    testMeridiem_es_CR: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-CR"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_GQ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-GQ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_es_PH: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "es-PH"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_fr_BF: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-BF"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_BJ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-BJ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CD: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CD"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CF: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CF"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CI: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CI"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-CM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "matin");
        test.equal(range[1].name, "soir");

        test.done();
    },
    testMeridiem_fr_GQ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-GQ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_DJ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-DJ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_DZ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-DZ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_GA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-GA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_GN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-GN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_LB: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-LB"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_ML: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-ML"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_RW: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-RW"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_SN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-SN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_TG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "fr-TG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_ms_SG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ms-SG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "PG");
        test.equal(range[1].name, "PTG");

        test.done();
    },
    testMeridiem_pa_Arab_PK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pa-Arab-PK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, 'AM');
        test.equal(range[1].name, 'PM');

        test.done();
    },
    testMeridiem_pt_AO: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pt-AO"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "da manhã");
        test.equal(range[1].name, "da tarde");

        test.done();
    },
    testMeridiem_pt_GQ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pt-GQ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "da manhã");
        test.equal(range[1].name, "da tarde");

        test.done();
    },
    testMeridiem_pt_CV: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pt-CV"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "da manhã");
        test.equal(range[1].name, "da tarde");

        test.done();
    },
    testMeridiem_ur_PK: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ur-PK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_zh_Hans_SG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zh-Hans-SG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.equal(range[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hans_MY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zh-Hans-MY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.equal(range[1].name, "下午");

        test.done();
    },

    testMeridiem_ka_GE: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ka-GE"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");

        test.done();
    },
    testMeridiem_be_BY: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "be-BY"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testMeridiem_lo_LA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "lo-LA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "ກ່ອນທ່ຽງ");
        test.equal(range[1].name, "ຫຼັງທ່ຽງ");

        test.done();
    },
    testMeridiem_ky_KG: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ky-KG"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "таңкы");
        test.equal(range[1].name, "түштөн кийинки");

        test.done();
    },
    testMeridiem_ca_AD: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ca-AD"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");

        test.done();
    },
    testMeridiem_ca_ES: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ca-ES"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "a. m.");
        test.equal(range[1].name, "p. m.");
        test.done();
    },
    testMeridiem_hy_AM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hy-AM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testMeridiem_gl_ES: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "gl-ES"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "a.m.");
        test.equal(range[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_ES: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "eu-ES"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testMeridiem_ne_NP: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ne-NP"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, "पूर्वाह्न");
        test.equal(range[1].name, "अपराह्न");

        test.done();
    },
    testMeridiem_my_MM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "my-MM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'နံနက်');
        test.equal(range[1].name, 'ညနေ');

        test.done();
    },
    testMeridiem_wo_SN: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "wo-SN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'Sub');
        test.equal(range[1].name, 'Ngo');

        test.done();
    },
    testMeridiem_tk_TM: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tk-TM"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'günortadan öň');
        test.equal(range[1].name, 'günortadan soň');

        test.done();
    },
    testMeridiem_tg_TJ: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "tg-TJ"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'AM');
        test.equal(range[1].name, 'PM');

        test.done();
    },
    testMeridiem_mt_MT: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "mt-MT"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'AM');
        test.equal(range[1].name, 'PM');
        test.done();
    },
    testMeridiem_zu_ZA: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "zu-ZA"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range);

        test.equal(range[0].name, 'AM');
        test.equal(range[1].name, 'PM');
        test.done();
    },

    testGetMeridiemsRangeLength_with_am_ET_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 5);
        test.done();
    },

    testGetMeridiemsRangeName_with_am_ET_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ጥዋት");
        test.done();
    },

    testGetMeridiemsRangeStart_with_am_ET_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_am_ET_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "05:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_am_ET_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 2);
        test.done();
    },

    testGetMeridiemsRangeName_with_am_ET_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ጥዋት");
        test.done();
    },

    testGetMeridiemsRangeStart_with_am_ET_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_am_ET_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "11:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_am_ET_locale_ethiopic_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "ethiopic"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 5);
        test.done();
    },

    testGetMeridiemsRangeName_with_am_ET_locale_ethiopic_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "ethiopic"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ጥዋት");
        test.done();
    },

    testGetMeridiemsRangeStart_with_am_ET_locale_ethiopic_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "ethiopic"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_am_ET_locale_ethiopic_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "am-ET", meridiems: "ethiopic"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "05:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_zh_CN_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 2);
        test.done();
    },

    testGetMeridiemsRangeName_with_zh_CN_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.done();
    },

    testGetMeridiemsRangeStart_with_zh_CN_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_zh_CN_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "11:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_zh_CN_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 2);
        test.done();
    },

    testGetMeridiemsRangeName_with_zh_CN_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "上午");
        test.done();
    },

    testGetMeridiemsRangeStart_with_zh_CN_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_zh_CN_locale_gregorian_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "gregorian"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "11:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_zh_CN_locale_chinese_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "chinese"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 7);
        test.done();
    },

    testGetMeridiemsRangeName_with_zh_CN_locale_chinese_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "chinese"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "凌晨");
        test.done();
    },

    testGetMeridiemsRangeStart_with_zh_CN_locale_chinese_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "chinese"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_zh_CN_locale_chinese_meridiems: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "zh-CN", meridiems: "chinese"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "05:59");
        test.done();
    },

    testGetMeridiemsRangeLength_with_en_US_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "en-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range.length, 2);
        test.done();
    },

    testGetMeridiemsRangeName_with_en_US_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "en-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.done();
    },

    testGetMeridiemsRangeStart_with_en_US_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "en-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].start, "00:00");
        test.done();
    },

    testGetMeridiemsRangeEnd_with_en_US_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({locale: "en-US"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].end, "11:59");
        test.done();
    },

    testGetMeridiemsRangeName_with_bn_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "bn-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },

    testGetMeridiemsRangeName_with_gu_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "gu-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testGetMeridiemsRangeName_with_kn_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "kn-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ಪೂರ್ವಾಹ್ನ");
        test.equal(range[1].name, "ಅಪರಾಹ್ನ");
        test.done();
    },
    testGetMeridiemsRangeName_with_ml_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ml-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testGetMeridiemsRangeName_with_mr_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "mr-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "म.पू.");
        test.equal(range[1].name, "म.उ.");
        test.done();
    },
    testGetMeridiemsRangeName_with_or_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "or-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testGetMeridiemsRangeName_with_pa_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "pa-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "ਪੂ.ਦੁ.");
        test.equal(range[1].name, "ਬਾ.ਦੁ.");
        test.done();
    },
    testGetMeridiemsRangeName_with_ta_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ta-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "முற்பகல்");
        test.equal(range[1].name, "பிற்பகல்");
        test.done();
    },
    testGetMeridiemsRangeName_with_te_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "te-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testGetMeridiemsRangeName_with_ur_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ur-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },
    testGetMeridiemsRangeName_with_as_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "as-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, 'পূৰ্বাহ্ন');
        test.equal(range[1].name,  'অপৰাহ্ন');
        test.done();
    },
    testGetMeridiemsRangeName_with_hi_IN_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "hi-IN"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "am");
        test.equal(range[1].name, "pm");
        test.done();
    },

    testGetMeridiemsRangeName_with_ur_PK_locale: function(test) {
        test.expect(3);
        var fmtinfo = new DateFmtInfo({locale: "ur-PK"});
        var range = fmtinfo.getMeridiemsRange();
        test.ok(range !== null);

        test.equal(range[0].name, "AM");
        test.equal(range[1].name, "PM");
        test.done();
    },

    testGetMeridiemsRange_with_noArgument: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo();
        test.ok(fmtinfo !== null);
        var mdRange = fmtinfo.getMeridiemsRange();
        // if locale is not specified, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    },

    testGetMeridiemsRange_with_undefined_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({ locale: undefined });
        test.ok(fmtinfo !== null);

        var mdRange = fmtinfo.getMeridiemsRange();
        // if locale is not specified, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    },

    testGetMeridiemsRange_with_wrong_locale: function(test) {
        test.expect(2);
        var fmtinfo = new DateFmtInfo({ locale: "wrong" });
        test.ok(fmtinfo !== null);

        var mdRange = fmtinfo.getMeridiemsRange();
        // if locale is specified wrong value, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    },
}
