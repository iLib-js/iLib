/*
 * testclock.js - test the 12/24 hour support amongst various locales
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

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

module.exports.testclock = {
    testLocaleInfoConstructor: function(test) {
        test.expect(1);
        var info = new LocaleInfo();

        test.ok(info !== null);
        test.done();
    },
    testClock_ar_EG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-EG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_IQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-IQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-MA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_bs_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_bs_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_da_DK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_de_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_de_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-LU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_el_CY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-CY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_AU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AU");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_HK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-HK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_IS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_IS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-JP");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-KE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-KR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-LK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_MM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_MW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_NZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-NZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_PH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_PR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-UG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ZA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_ZM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ZM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_AR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-AR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_BO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-BO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_CL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CL");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_DO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-DO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_EC: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-EC");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_es_GT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-GT");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_HN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-HN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_MX: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-MX");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_NI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-NI");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_PA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_PE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_PR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_PY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_SV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-SV");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-US");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_UY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-UY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_VE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-VE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_et_EE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("et-EE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fa_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_gu_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gu-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_he_IL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_hr_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_hr_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_id_ID: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-ID");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_is_IS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("is-IS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_kk_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_kn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kn-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ko_KR_Custom: function(test) {
        if (ilib._getPlatform() !== "nodejs" || !ilib._dyndata || !ilib._dyncode) {
            test.done();
            return;
        }
        var path = require("path");
        var multiPath = path.relative(process.cwd(), path.resolve(__dirname, "./custom"));
        var ilibLoader = ilib.getLoader();
        ilibLoader.addPath(multiPath);

        test.expect(3);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getScript(), "Kore"); //Check if data that is not overridden comes out well
        ilibLoader.removePath(multiPath);
        test.done();
    },
    testClock_ku_IQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_lt_LT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_lv_LV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lv-LV");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_mk_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ml_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ml-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_mr_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mr-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ms_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_nb_NO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nb-NO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_pa_Guru_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Guru-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sr_Cyrl_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-RS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-BY");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_KG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-GE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-RU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ru_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-UA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sl_SI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sq_AL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-AL");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_sq_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ta_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_te_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("te-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_th_TH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_tr_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-AM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_tr_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_tr_CY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-CY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_tr_TR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-TR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_vi_VN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_zh_Hans_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-CN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_zh_Hant_HK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-HK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_zh_Hant_TW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-TW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_MX: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MX");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_TW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-TW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_mn_MN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-MN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_es_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_af_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-ZA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ha_Latn_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-Latn-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_or_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("or-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_BH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-BH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_JO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-JO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_KW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-KW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_LB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-LB");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_LY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-LY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_MR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-MR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_OM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-OM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_QA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-QA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_SA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_SD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SD");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_SY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ar_YE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-YE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ET");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_GM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-LR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_RW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-RW");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_en_SD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SD");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_SL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SL");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_en_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-TZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_es_CR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_es_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_es_PH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_fr_BF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_BJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CD");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_fr_GA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_GN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_LB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LB");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_fr_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-ML");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_RW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-RW");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_fr_TG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-TG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ms_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_pa_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_pt_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_zh_Hans_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.done();
    },
    testClock_ka_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-GE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_lo_LA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lo-LA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ky_KG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ky-KG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ca_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-AD");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ca_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-ES");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_hy_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);
        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_eu_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("eu-ES");
        test.ok(info !== null);
        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ne_NP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-NP");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_my_MM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("my-MM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_wo_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("wo-SN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_tk_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tk-TM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_tg_TJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tg-TJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_mt_MT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mt-MT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_zu_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zu-ZA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_lb_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lb-LU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_ig_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ig-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_yo_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("yo-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_yo_BJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("yo-BJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    },
    testClock_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.done();
    }
}