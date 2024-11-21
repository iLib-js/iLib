 /*
 * testMeridiems.js - test the meridiems data
 *
 * Copyright © 2019-2024, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

if (ilib._getPlatform() === "nodejs" && ilib._dyndata && ilib._dyncode) {
    var path = require("path");
}

if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
module.exports.testmeridiems = {
    testMeridiem_ar_EG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-EG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_IQ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-IQ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_MA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-MA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_as_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"as-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_bg_BG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"bg-BG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "пр.об.");
        test.equal(fmt[1].name, "сл.об.");

        test.done();
    },
    testMeridiem_bn_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"bn-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_bs_Latn_BA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"bs-Latn-BA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "prijepodne");
        test.equal(fmt[1].name, "popodne");

        test.done();
    },
    testMeridiem_bs_Latn_ME: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"bs-Latn-ME"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "prijepodne");
        test.equal(fmt[1].name, "popodne");

        test.done();
    },
    testMeridiem_cs_CZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"cs-CZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "dop.");
        test.equal(fmt[1].name, "odp.");

        test.done();
    },
    testMeridiem_da_DK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"da-DK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_de_AT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"de-AT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM"); //// CLDR 34 change
        test.equal(fmt[1].name, "PM"); //// CLDR 34 change

        test.done();
    },
    testMeridiem_de_CH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"de-CH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_de_DE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"de-DE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_de_LU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"de-LU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_el_CY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"el-CY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "π.μ.");
        test.equal(fmt[1].name, "μ.μ.");

        test.done();
    },
    testMeridiem_el_GR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"el-GR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "π.μ.");
        test.equal(fmt[1].name, "μ.μ.");

        test.done();
    },
    testMeridiem_en_AM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-AM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_AU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-AU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_AZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-AZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_CA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-CA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_GB: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-GB"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_GH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-GH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_HK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-HK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_IE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-IE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_IS: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-IS"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_JP: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-JP"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_KE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-KE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_KR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-KR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_LK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-LK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-MM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-MW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_MY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-MY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_NG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-NG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_NZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-NZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_PH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-PH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_PR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-PR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_SG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-SG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_US: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-US"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_UG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-UG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_ZA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-ZA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_ZM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-ZM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_es_AR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-AR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_BO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-BO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_CL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-CL"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_CO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-CO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_DO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-DO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_EC: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-EC"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_ES: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-ES"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_GT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-GT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_HN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-HN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_MX: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-MX"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a.m.');
        test.equal(fmt[1].name, 'p.m.');

        test.done();
    },
    testMeridiem_es_NI: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-NI"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_PA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-PA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_PE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-PE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_PR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-PR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_PY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-PY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_SV: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-SV"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_US: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-US"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a.m.');
        test.equal(fmt[1].name, 'p.m.');

        test.done();
    },
    testMeridiem_es_UY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-UY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_VE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-VE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_et_EE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"et-EE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fa_AF: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fa-AF"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "قبل‌ازظهر");
        test.equal(fmt[1].name, "بعدازظهر");

        test.done();
    },
    testMeridiem_fa_IR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fa-IR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "قبل‌ازظهر");
        test.equal(fmt[1].name, "بعدازظهر");

        test.done();
    },
    testMeridiem_fi_FI: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fi-FI"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ap.");
        test.equal(fmt[1].name, "ip.");

        test.done();
    },
    testMeridiem_fr_BE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-BE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_fr_CH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_FR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-FR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_LU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-LU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ga_IE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ga-IE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "r.n.");
        test.equal(fmt[1].name, "i.n.");

        test.done();
    },
    testMeridiem_gu_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"gu-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_he_IL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"he-IL"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_hi_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"hi-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'am');
        test.equal(fmt[1].name, 'pm');
        test.done();
    },
    testMeridiem_hr_HR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"hr-HR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_hr_ME: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"hr-ME"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_hr_HU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"hr-HU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_id_ID: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"id-ID"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_is_IS: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"is-IS"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "f.h.");
        test.equal(fmt[1].name, "e.h.");

        test.done();
    },
    testMeridiem_it_CH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"it-CH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_it_IT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"it-IT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ja_JP: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ja-JP"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "午前");
        test.equal(fmt[1].name, "午後");

        test.done();
    },
    testMeridiem_kk_KZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"kk-KZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_kn_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"kn-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testMeridiem_ko_KR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ko-KR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "오전");
        test.equal(fmt[1].name, "오후");

        test.done();
    },
    testMeridiem_ku_IQ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ku-IQ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'ب.ن');
        test.equal(fmt[1].name, 'د.ن');

        test.done();
    },
    testMeridiem_lt_LT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"lt-LT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "priešpiet");
        test.equal(fmt[1].name, "popiet");

        test.done();
    },
    testMeridiem_lv_LV: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"lv-LV"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "priekšpusdienā");
        test.equal(fmt[1].name, "pēcpusdienā");

        test.done();
    },
    testMeridiem_mk_MK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"mk-MK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "претпл.");
        test.equal(fmt[1].name, "попл.");

        test.done();
    },
    testMeridiem_ml_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ml-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_mr_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"mr-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ms_MY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ms-MY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "PG");
        test.equal(fmt[1].name, "PTG");

        test.done();
    },
    testMeridiem_nb_NO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"nb-NO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_nl_BE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"nl-BE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_nl_NL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"nl-NL"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_pa_Guru_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pa-Guru-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ਪੂ.ਦੁ.");
        test.equal(fmt[1].name, "ਬਾ.ਦੁ.");

        test.done();
    },
    testMeridiem_pl_PL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pl-PL"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_pt_BR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pt-BR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_pt_PT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pt-PT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "da manhã");
        test.equal(fmt[1].name, "da tarde");

        test.done();
    },
    testMeridiem_ro_RO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ro-RO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_sr_Cyrl_RS: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sr-Cyrl-RS"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_sr_Latn_RS: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sr-Latn-RS"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_BY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-BY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_KG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-KG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_KZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-KZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_GE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-GE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_RU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-RU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ru_UA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ru-UA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_sk_SK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sk-SK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_sl_SI: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sl-SI"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "dop.");
        test.equal(fmt[1].name, "pop.");

        test.done();
    },
    testMeridiem_sq_AL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sq-AL"});
        test.ok(fmt !== null);
        test.equal(fmt[0].name, "e paradites");
        test.equal(fmt[1].name, "e pasdites");

        test.done();
    },
    testMeridiem_sq_ME: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sq-ME"});
        test.ok(fmt !== null);
        test.equal(fmt[0].name, "e paradites");
        test.equal(fmt[1].name, "e pasdites");

        test.done();
    },
    testMeridiem_sv_FI: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sv-FI"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "fm");
        test.equal(fmt[1].name, "em");

        test.done();
    },
    testMeridiem_sv_SE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"sv-SE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "fm");
        test.equal(fmt[1].name, "em");

        test.done();
    },
    testMeridiem_ta_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ta-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_te_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"te-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_th_TH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"th-TH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ก่อนเที่ยง");
        test.equal(fmt[1].name, "หลังเที่ยง");

        test.done();
    },
    testMeridiem_tr_AM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tr-AM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ÖÖ");
        test.equal(fmt[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_AZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tr-AZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ÖÖ");
        test.equal(fmt[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_CY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tr-CY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ÖÖ");
        test.equal(fmt[1].name, "ÖS");

        test.done();
    },
    testMeridiem_tr_TR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tr-TR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ÖÖ");
        test.equal(fmt[1].name, "ÖS");

        test.done();
    },
    testMeridiem_uk_UA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"uk-UA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "дп");
        test.equal(fmt[1].name, "пп");

        test.done();
    },
    testMeridiem_ur_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ur-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_uz_Latn_UZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"uz-Latn-UZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "TO");
        test.equal(fmt[1].name, "TK");

        test.done();
    },
    testMeridiem_vi_VN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"vi-VN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "SA");
        test.equal(fmt[1].name, "CH");

        test.done();
    },
    testMeridiem_zh_Hans_CN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zh-Hans-CN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "上午");
        test.equal(fmt[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hant_HK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zh-Hant-HK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "上午");
        test.equal(fmt[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hant_TW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zh-Hant-TW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "上午");
        test.equal(fmt[1].name, "下午");

        test.done();
    },
    testMeridiem_en_GE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-GE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_CN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-CN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_MX: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-MX"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_TW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-TW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_mn_MN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"mn-MN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ү.ө.");
        test.equal(fmt[1].name, "ү.х.");

        test.done();
    },
    testMeridiem_es_CA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-CA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_af_ZA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"af-ZA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "vm.");
        test.equal(fmt[1].name, "nm.");

        test.done();
    },
    testMeridiem_am_ET: function(test) {
        test.expect(16);
        var fmt = DateFmt.getMeridiemsRange({locale:"am-ET", meridiems: "ethiopic"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ጥዋት");
        test.equal(fmt[0].start, "00:00");
        test.equal(fmt[0].end, "05:59");

        test.equal(fmt[1].name, "ቀትር");
        test.equal(fmt[1].start, "06:00");
        test.equal(fmt[1].end, "06:00");

        test.equal(fmt[2].name, "ከሰዓት");
        test.equal(fmt[2].start, "06:01");
        test.equal(fmt[2].end, "11:59");

        test.equal(fmt[3].name, "ከምሽቱ");
        test.equal(fmt[3].start, "12:00");
        test.equal(fmt[3].end, "17:59");

        test.equal(fmt[4].name, "ከሌሊቱ");
        test.equal(fmt[4].start, "18:00");
        test.equal(fmt[4].end, "23:59");

        test.done();
    },
    testMeridiem_ha_Latn_NG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ha-Latn-NG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'Safiya');
        test.equal(fmt[1].name, 'Yamma');

        test.done();
    },
    testMeridiem_or_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"or-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_az_Latn_AZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"az-Latn-AZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_km_KH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"km-KH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_si_LK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"si-LK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "පෙ.ව.");
        test.equal(fmt[1].name, "ප.ව.");

        test.done();
    },
    testMeridiem_ar_AE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-AE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_BH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-BH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_DJ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-DJ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_DZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-DZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_JO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-JO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_KW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-KW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_LB: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-LB"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_LY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-LY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_MR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-MR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_OM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-OM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_QA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-QA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-SA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SD: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-SD"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_SY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-SY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_TN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-TN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_ar_YE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ar-YE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ص");
        test.equal(fmt[1].name, "م");

        test.done();
    },
    testMeridiem_en_ET: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-ET"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_en_GM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-GM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_LR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-LR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_PK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-PK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_RW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-RW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_SD: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-SD"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_SL: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-SL"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_en_TZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"en-TZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");

        test.done();
    },
    testMeridiem_es_CR: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-CR"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_GQ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-GQ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_es_PH: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"es-PH"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'a. m.');
        test.equal(fmt[1].name, 'p. m.');

        test.done();
    },
    testMeridiem_fr_BF: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-BF"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_BJ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-BJ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CD: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CD"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CF: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CF"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CI: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CI"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_CM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-CM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "matin");
        test.equal(fmt[1].name, "soir");

        test.done();
    },
    testMeridiem_fr_GQ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-GQ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_DJ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-DJ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_DZ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-DZ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_GA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-GA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_GN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-GN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_LB: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-LB"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_ML: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-ML"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_RW: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-RW"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_SN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-SN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_fr_TG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"fr-TG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_ms_SG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ms-SG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "PG");
        test.equal(fmt[1].name, "PTG");

        test.done();
    },
    testMeridiem_pa_Arab_PK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pa-Arab-PK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'AM');
        test.equal(fmt[1].name, 'PM');

        test.done();
    },
    testMeridiem_pt_AO: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pt-AO"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "da manhã");
        test.equal(fmt[1].name, "da tarde");

        test.done();
    },
    testMeridiem_pt_GQ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pt-GQ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "da manhã");
        test.equal(fmt[1].name, "da tarde");

        test.done();
    },
    testMeridiem_pt_CV: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pt-CV"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "da manhã");
        test.equal(fmt[1].name, "da tarde");

        test.done();
    },
    testMeridiem_ur_PK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ur-PK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_zh_Hans_SG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zh-Hans-SG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "上午");
        test.equal(fmt[1].name, "下午");

        test.done();
    },
    testMeridiem_zh_Hans_MY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zh-Hans-MY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "上午");
        test.equal(fmt[1].name, "下午");

        test.done();
    },
    testMeridiem_ka_GE: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ka-GE"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");

        test.done();
    },
    testMeridiem_be_BY: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"be-BY"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testMeridiem_lo_LA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"lo-LA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "ກ່ອນທ່ຽງ");
        test.equal(fmt[1].name, "ຫຼັງທ່ຽງ");

        test.done();
    },
    testMeridiem_ky_KG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ky-KG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "таңкы");
        test.equal(fmt[1].name, "түштөн кийинки");

        test.done();
    },
    testMeridiem_ca_AD: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ca-AD"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a. m.");
        test.equal(fmt[1].name, "p. m.");

        test.done();
    },
    testMeridiem_ca_ES: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ca-ES"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a. m.");
        test.equal(fmt[1].name, "p. m.");
        test.done();
    },
    testMeridiem_hy_AM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"hy-AM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testMeridiem_gl_ES: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"gl-ES"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "a.m.");
        test.equal(fmt[1].name, "p.m.");

        test.done();
    },
    testMeridiem_en_ES: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"eu-ES"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testMeridiem_ne_NP: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ne-NP"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, "पूर्वाह्न");
        test.equal(fmt[1].name, "अपराह्न");

        test.done();
    },
    testMeridiem_my_MM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"my-MM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'နံနက်');
        test.equal(fmt[1].name, 'ညနေ');

        test.done();
    },
    testMeridiem_wo_SN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"wo-SN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'Sub');
        test.equal(fmt[1].name, 'Ngo');

        test.done();
    },
    testMeridiem_tk_TM: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tk-TM"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'günortadan öň');
        test.equal(fmt[1].name, 'günortadan soň');

        test.done();
    },
    testMeridiem_tg_TJ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"tg-TJ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'AM');
        test.equal(fmt[1].name, 'PM');

        test.done();
    },
    testMeridiem_mt_MT: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"mt-MT"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'AM');
        test.equal(fmt[1].name, 'PM');
        test.done();
    },
    testMeridiem_zu_ZA: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"zu-ZA"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'AM');
        test.equal(fmt[1].name, 'PM');
        test.done();
    },
    testMeridiem_lb_LU: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"lb-LU"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'moies');
        test.equal(fmt[1].name, 'nomëttes');
        test.done();
    },
    testMeridiem_pa_IN: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pa-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'ਪੂ.ਦੁ.');
        test.equal(fmt[1].name, 'ਬਾ.ਦੁ.');
        test.done();
    },
    testMeridiem_pa_IN_Custom: function(test) {
        if (ilib._getPlatform() !== "nodejs" || !ilib._dyndata || !ilib._dyncode) {
            test.done();
            return;
        }
        var multiPath = path.relative(process.cwd(), path.resolve(__dirname, "./custom"));
        var ilibLoader = ilib.getLoader();

        ilibLoader.addPath(multiPath);

        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"pa-IN"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'AM');
        test.equal(fmt[1].name, 'PM');

        ilibLoader.removePath(multiPath);
        test.done();
    },
    testMeridiem_ig_NG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ig-NG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'N’ụtụtụ');
        test.equal(fmt[1].name, 'N’abali');
        test.done();
    },
    testMeridiem_ps_AF: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ps-AF"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'غ.م.');
        test.equal(fmt[1].name, 'غ.و.');
        test.done();
    },
    testMeridiem_ps_PK: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"ps-PK"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'غ.م.');
        test.equal(fmt[1].name, 'غ.و.');
      test.done();
    },
    testMeridiem_yo_NG: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"yo-NG"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'Àárọ̀');
        test.equal(fmt[1].name, 'Ọ̀sán');
        test.done();
    },
    testMeridiem_yo_BJ: function(test) {
        test.expect(3);
        var fmt = DateFmt.getMeridiemsRange({locale:"yo-BJ"});
        test.ok(fmt !== null);

        test.equal(fmt[0].name, 'Àárɔ̀');
        test.equal(fmt[1].name, 'Ɔ̀sán');
        test.done();
    },
}