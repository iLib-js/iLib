/*
 * testcurrency.js - test the currency routines
 *
 * Copyright © 2012-2017, 2020-2024 JEDLSoft
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

if (typeof(Currency) === "undefined") {
    var Currency = require("../../lib/Currency.js");
}

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

module.exports.testcurrency = {
    testCurrencyConstructorEmpty: function(test) {
        test.expect(1);
        var cur = new Currency();

        test.ok(cur !== null);
        test.done();
    },
    testCurrencyDefaults: function(test) {
        test.expect(7);
        var cur = new Currency();
        test.ok(cur !== null);
        test.equal(cur.getCode(), "USD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "US Dollar");
        var locale = cur.getLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    testCurrencyGetByCode1: function(test) {
        test.expect(6);
        var cur = new Currency({
            code: "EUR"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "EUR");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "€");
        test.equal(cur.getName(), "Euro");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    testCurrencyGetByCode2: function(test) {
        test.expect(6);
        var cur = new Currency({
            code: "JPY"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "JPY");
        test.equal(cur.getFractionDigits(), 0);
        test.equal(cur.getSign(), "¥");
        test.equal(cur.getName(), "Japanese Yen");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    testCurrencyGetByCode3: function(test) {
        test.expect(6);
        var cur = new Currency({
            locale: "en-PH"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "PHP");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), '₱');
        test.equal(cur.getName(), "Philippine Peso");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-PH");
        test.done();
    },
    testCurrencyGetByCode4: function(test) {
        test.expect(6);
        var cur = new Currency({
            locale: "ar-QA"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "QAR");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), 'ر.ق');
        test.equal(cur.getName(), "Qatari Riyal");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "ar-QA");
        test.done();
    },
    testCurrencyGetByCodeUnknown: function(test) {
        try {
            var cur = new Currency({
                code: "xxx"
            });
            test.fail();
        } catch (e) {
            test.equal(e, "currency xxx is unknown");
        }
        test.done();
    },
    testCurrencyGetBySignUnambiguous: function(test) {
        test.expect(6);
        var cur = new Currency({
            sign: "€"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "EUR");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "€");
        test.equal(cur.getName(), "Euro");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    testCurrencyGetBySignAmbiguousCurrentLocale: function(test) {
        test.expect(6);
        var cur = new Currency({
            locale: "en-CA",
            sign: "$"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "CAD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "Canadian Dollar");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-CA");
        test.done();
    },
    testCurrencyGetBySignAmbiguousNotCurrentLocale: function(test) {
        test.expect(6);
        var cur = new Currency({
            locale: "en-GB",
            sign: "$"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "USD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "US Dollar");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-GB");
        test.done();
    },
    testCurrencyInfowithCurrentLocale: function(test) {
        test.expect(6);
        var cur = new Currency({
            locale: "ar-IQ"
        });
        test.ok(cur !== null);
        test.equal(cur.getCode(), "IQD");
        test.equal(cur.getFractionDigits(), 0);
        test.equal(cur.getSign(), "ﺩ.ﻉ.");
        test.equal(cur.getName(), "Iraqi Dinar");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "ar-IQ");
        test.done();
    },
    testCurrency_ar_EG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-EG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EGP");
        test.done();
    },
    testCurrency_ar_IQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-IQ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "IQD");
        test.done();
    },
    testCurrency_ar_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-MA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MAD");
        test.done();
    },
    testCurrency_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BGN");
        test.done();
    },
    testCurrency_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_bs_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-Latn-BA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BAM");
        test.done();
    },
    testCurrency_bs_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-Latn-ME");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CZK");
        test.done();
    },
    testCurrency_da_DK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DKK");
        test.done();
    },
    testCurrency_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_de_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-CH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CHF");
        test.done();
    },
    testCurrency_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_de_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-LU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_el_CY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-CY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_en_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AMD");
        test.done();
    },
    testCurrency_en_AU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AUD");
        test.done();
    },
    testCurrency_en_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-AZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AZN");
        test.done();
    },
    testCurrency_en_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CAD");
        test.done();
    },
    testCurrency_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GBP");
        test.done();
    },
    testCurrency_en_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GHS");
        test.done();
    },
    testCurrency_en_HK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-HK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "HKD");
        test.done();
    },
    testCurrency_en_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_en_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_en_IS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-IS");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ISK");
        test.done();
    },
    testCurrency_en_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-JP");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "JPY");
        test.done();
    },
    testCurrency_en_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-KE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KES");
        test.done();
    },
    testCurrency_en_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-KR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KRW");
        test.done();
    },
    testCurrency_en_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-LK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LKR");
        test.done();
    },
    testCurrency_en_MM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MMK");
        test.done();
    },
    testCurrency_en_MW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MWK");
        test.done();
    },
    testCurrency_en_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MYR");
        test.done();
    },
    testCurrency_en_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-NG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NGN");
        test.done();
    },
    testCurrency_en_NZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-NZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NZD");
        test.done();
    },
    testCurrency_en_PH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PHP");
        test.done();
    },
    testCurrency_en_PR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_en_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SGD");
        test.done();
    },
    testCurrency_en_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_en_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-UG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "UGX");
        test.done();
    },
    testCurrency_en_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ZA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ZAR");
        test.done();
    },
    testCurrency_en_ZM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ZM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ZMW");
        test.done();
    },
    testCurrency_es_AR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-AR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ARS");
        test.done();
    },
    testCurrency_es_BO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-BO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BOB");
        test.done();
    },
    testCurrency_es_CL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CLP");
        test.done();
    },
    testCurrency_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "COP");
        test.done();
    },
    testCurrency_es_DO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-DO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DOP");
        test.done();
    },
    testCurrency_es_EC: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-EC");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_es_GT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-GT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GTQ");
        test.done();
    },
    testCurrency_es_HN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-HN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "HNL");
        test.done();
    },
    testCurrency_es_MX: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-MX");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MXN");
        test.done();
    },
    testCurrency_es_NI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-NI");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NIO");
        test.done();
    },
    testCurrency_es_PA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_es_PE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PEN");
        test.done();
    },
    testCurrency_es_PR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_es_PY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PYG");
        test.done();
    },
    testCurrency_es_SV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-SV");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_es_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-US");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testCurrency_es_UY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-UY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "UYU");
        test.done();
    },
    testCurrency_es_VE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-VE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "VES");
        test.done();
    },
    testCurrency_et_EE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("et-EE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AFN");
        test.done();
    },
    testCurrency_fa_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "IRR");
        test.done();
    },
    testCurrency_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CAD");
        test.done();
    },
    testCurrency_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CHF");
        test.done();
    },
    testCurrency_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_gu_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gu-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_he_IL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ILS");
        test.done();
    },
    testCurrency_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_hr_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-ME");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_hr_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "HUF");
        test.done();
    },
    testCurrency_id_ID: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-ID");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "IDR");
        test.done();
    },
    testCurrency_is_IS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("is-IS");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ISK");
        test.done();
    },
    testCurrency_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CHF");
        test.done();
    },
    testCurrency_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "JPY");
        test.done();
    },
    testCurrency_kk_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KZT");
        test.done();
    },
    testCurrency_kn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kn-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KRW");
        test.done();
    },
    testCurrency_ku_IQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "IQD");
        test.done();
    },
    testCurrency_lt_LT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_lv_LV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lv-LV");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_mk_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MKD");
        test.done();
    },
    testCurrency_ml_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ml-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_mr_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mr-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_ms_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MYR");
        test.done();
    },
    testCurrency_nb_NO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nb-NO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NOK");
        test.done();
    },
    testCurrency_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_pa_Guru_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Guru-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PLN");
        test.done();
    },
    testCurrency_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BRL");
        test.done();
    },
    testCurrency_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RON");
        test.done();
    },
    testCurrency_sr_Cyrl_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-RS");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RSD");
        test.done();
    },
    testCurrency_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RSD");
        test.done();
    },
    testCurrency_ru_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-BY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BYN");
        test.done();
    },
    testCurrency_ru_KG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KGS");
        test.done();
    },
    testCurrency_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KZT");
        test.done();
    },
    testCurrency_ru_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-GE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GEL");
        test.done();
    },
    testCurrency_ru_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-RU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RUB");
        test.done();
    },
    testCurrency_ru_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-UA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "UAH");
        test.done();
    },
    testCurrency_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_sl_SI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_sq_AL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-AL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ALL");
        test.done();
    },
    testCurrency_sq_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-ME");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SEK");
        test.done();
    },
    testCurrency_ta_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_te_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("te-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_th_TH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "THB");
        test.done();
    },
    testCurrency_tr_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-AM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AMD");
        test.done();
    },
    testCurrency_tr_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-AZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AZN");
        test.done();
    },
    testCurrency_tr_CY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-CY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_tr_TR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tr-TR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TRY");
        test.done();
    },
    testCurrency_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "UAH");
        test.done();
    },
    testCurrency_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "UZS");
        test.done();
    },
    testCurrency_vi_VN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "VND");
        test.done();
    },
    testCurrency_zh_Hans_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-CN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CNY");
        test.done();
    },
    testCurrency_zh_Hant_HK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-HK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "HKD");
        test.done();
    },
    testCurrency_zh_Hant_TW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-TW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TWD");
        test.done();
    },
    testCurrency_en_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GEL");
        test.done();
    },
    testCurrency_en_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CNY");
        test.done();
    },
    testCurrency_en_MX: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-MX");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MXN");
        test.done();
    },
    testCurrency_en_TW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-TW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TWD");
        test.done();
    },
    testCurrency_mn_MN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-MN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MNT");
        test.done();
    },
    testCurrency_es_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CAD");
        test.done();
    },
    testCurrency_af_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-ZA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ZAR");
        test.done();
    },
    testCurrency_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ETB");
        test.done();
    },
    testCurrency_ha_Latn_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-Latn-NG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NGN");
        test.done();
    },
    testCurrency_or_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("or-IN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "INR");
        test.done();
    },
    testCurrency_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AZN");
        test.done();
    },
    testCurrency_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KHR");
        test.done();
    },
    testCurrency_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LKR");
        test.done();
    },
    testCurrency_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AED");
        test.done();
    },
    testCurrency_ar_BH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-BH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BHD");
        test.done();
    },
    testCurrency_ar_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DJ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DJF");
        test.done();
    },
    testCurrency_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DZD");
        test.done();
    },
    testCurrency_ar_JO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-JO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "JOD");
        test.done();
    },
    testCurrency_ar_KW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-KW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KWD");
        test.done();
    },
    testCurrency_ar_LB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-LB");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LBP");
        test.done();
    },
    testCurrency_ar_LY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-LY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LYD");
        test.done();
    },
    testCurrency_ar_MR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-MR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MRU");
        test.done();
    },
    testCurrency_ar_OM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-OM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "OMR");
        test.done();
    },
    testCurrency_ar_QA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-QA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "QAR");
        test.done();
    },
    testCurrency_ar_SA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SAR");
        test.done();
    },
    testCurrency_ar_SD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SD");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SDG");
        test.done();
    },
    testCurrency_ar_SY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-SY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SYP");
        test.done();
    },
    testCurrency_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TND");
        test.done();
    },
    testCurrency_ar_YE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-YE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "YER");
        test.done();
    },
    testCurrency_en_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ET");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ETB");
        test.done();
    },
    testCurrency_en_GM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GMD");
        test.done();
    },
    testCurrency_en_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-LR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LRD");
        test.done();
    },
    testCurrency_en_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-PK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PKR");
        test.done();
    },
    testCurrency_en_RW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-RW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RWF");
        test.done();
    },
    testCurrency_en_SD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SD");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SDG");
        test.done();
    },
    testCurrency_en_SL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-SL");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SLE");
        test.done();
    },
    testCurrency_en_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-TZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TZS");
        test.done();
    },
    testCurrency_es_CR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CR");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CRC");
        test.done();
    },
    testCurrency_es_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-GQ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_es_PH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PH");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PHP");
        test.done();
    },
    testCurrency_es_CU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CUP");
        test.done();
    },
    testCurrency_fr_BF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BF");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_fr_BJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BJ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_fr_CD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CD");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CDF");
        test.done();
    },
    testCurrency_fr_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CF");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_fr_CG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_fr_CI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CI");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_fr_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_fr_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GQ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_fr_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DJ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DJF");
        test.done();
    },
    testCurrency_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "DZD");
        test.done();
    },
    testCurrency_fr_GA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_fr_GN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-GN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GNF");
        test.done();
    },
    testCurrency_fr_LB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LB");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LBP");
        test.done();
    },
    testCurrency_fr_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-ML");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_fr_RW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-RW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "RWF");
        test.done();
    },
    testCurrency_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_fr_TG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-TG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_ms_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-SG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SGD");
        test.done();
    },
    testCurrency_pa_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-PK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PKR");
        test.done();
    },
    testCurrency_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AOA");
        test.done();
    },
    testCurrency_pt_GQ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GQ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XAF");
        test.done();
    },
    testCurrency_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "CVE");
        test.done();
    },
    testCurrency_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PKR");
        test.done();
    },
    testCurrency_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "SGD");
        test.done();
    },
    testCurrency_zh_Hans_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-MY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MYR");
        test.done();
    },
    testCurrency_ka_GE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-GE");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "GEL");
        test.done();
    },
    testCurrency_my_MM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("my-MM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "MMK");
        test.done();
    },
    testCurrency_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "BYN");
        test.done();
    },
    testCurrency_ne_NP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-NP");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NPR");
        test.done();
    },
    testCurrency_lo_LA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lo-LA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "LAK");
        test.done();
    },
    testCurrency_ky_KG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ky-KG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "KGS");
        test.done();
    },
    testCurrency_ca_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-AD");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_ca_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-ES");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_hy_AM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AMD");
        test.done();
    },
    testCurrency_wo_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("wo-SN");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_tk_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tk-TM");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TMT");
        test.done();
    },
    testCurrency_tg_TJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("tg-TJ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "TJS");
        test.done();
    },
    testCurrency_mt_MT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mt-MT");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testCurrency_zu_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zu-ZA");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ZAR");
        test.done();
    },
    testCurrency_lb_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lb-LU");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "EUR");
      test.done();
    },
    testCurrency_ig_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ig-NG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NGN");
        test.done();
    },
    testCurrency_ps_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ps-PK");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "PKR");
      test.done();
    },
    testCurrency_ps_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ps-AF");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "AFN");
      test.done();
    },
    testCurrency_yo_NG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("yo-NG");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "NGN");
        test.done();
    },
    testCurrency_yo_BJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("yo-BJ");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "XOF");
        test.done();
    },
    testCurrency_sn_ZW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sn-ZW");
        test.ok(info !== null);
        test.equal(info.getCurrency(), "ZWG");
        test.done();
    }
};