 /*
 * testClockCalendarCurrency.js
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../js/lib/ilib.js");
}

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../js/lib/LocaleInfo.js");
}

module.exports.testclockcalendarcurrency = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testLocaleInfoConstructor: function(test) {
        test.expect(1);
        var info = new LocaleInfo();
    
        test.ok(info !== null);
        test.done();
    },
    testDefaultCalendar_GregorianCaseAll: function(test) {
        test.expect(192);
        var localeList = ["ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR",
        "ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-TN","ar-YE","as-IN","az-Latn-AZ","bg-BG","bn-IN","bs-Latn-BA,bs-Latn-ME",
        "cs-CZ","da-DK","de-AT","de-CH","de-DE","de-LU","et-EE","el-CY","el-GR","en-AM","en-AU","en-AZ","en-CA","en-GB","en-GH",
        "en-GM","en-HK","en-IE","en-IN","en-IS","en-JP","en-KE","en-KR","en-LK","en-LR","en-MM","en-MW","en-MY","en-NG","en-NZ",
        "en-PH","en-PK","en-PR","en-RW","en-SD","en-SG","en-SL","en-TW","en-TZ","en-UG","en-US","en-ZA","en-ZM","es-AR","es-BO",
        "es-CL","es-CO","es-CR","es-DO","es-EC","es-ES","es-GQ","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR",
        "es-PY","es-SV","es-US","es-UY","es-VE","fi-FI","fr-BE","fr-BF","fr-BJ","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI",
        "fr-CM","fr-GQ","fr-DJ","fr-DZ","fr-FR","fr-GA","fr-GN","fr-LB","fr-LU","fr-ML","fr-RW","fr-SN","fr-TG","ga-IE","gu-IN",
        "he-IL","hi-IN","hi-SG","hr-HR","hr-ME","hu-HU","id-ID","is-IS","it-CH","it-IT","ja-JP","kk-Cyrl-KZ","km-KH","kn-IN",
        "ko-KR","ku-Arab-IQ","lt-LT","lv-LV","mk-MK","ml-IN","mn-Cyrl-MN","mr-IN","ms-MY","ms-SG","nb-NO","nl-BE","nl-NL","pa-IN",
        "pa-PK","pl-PL","pt-AO","pt-BR","pt-GQ","pt-CV","pt-PT","ro-RO","ru-BY","ru-GE","ru-KG","ru-KZ","ru-RU","ru-UA","si-LK",
        "sk-SK","sl-SI","sq-AL","sq-ME","sr-Latn-ME","sr-Latn-RS","sv-FI","sv-SE","sw-KE","ta-IN","ta-SG","te-IN","tr-AM","tr-AZ",
        "tr-CY","tr-TR","uk-UA","ur-IN","ur-PK","uz-Cyrl-UZ","uz-Latn-UZ","vi-VN","zh-Hans-CN","zh-Hans-SG","zh-Hant-HK",
        "zh-Hans-MY","zh-Hant-TW","af-ZA","ha-Latn-NG","or-IN","en-GE","en-CN","en-MX","en-TW","es-CA"];

        console.log("localeList.length: ", localeList.length);
        for (var i=0; i < localeList.length;i++) {
            var info = new LocaleInfo(localeList[i]);
            test.equal(info.getCalendar(), "gregorian");
        }
        test.done();
    },
    testDefaultCalendar_fa_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);
        test.equal(info.getCalendar(), "persian");

        test.done();
    },
    testDefaultCalendar_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);
        test.equal(info.getCalendar(), "persian");

        test.done();
    },
    testDefaultCalendar_en_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-ET");
        test.ok(info !== null);
        test.equal(info.getCalendar(), "ethiopic");

        test.done();
    },
    testDefaultCalendar_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);
        test.equal(info.getCalendar(), "ethiopic");

        test.done();
    },
    testDefaultCalendar_th_TH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);
        test.equal(info.getCalendar(), "thaisolar");

        test.done();
    },
    testClockCurrency_ar_EG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-EG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "EGP");
        
        test.done();
    },
    testClockCurrency_ar_IQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-IQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "IQD");
        
        test.done();
    },
    testClockCurrency_ar_MA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-MA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "MAD");
        
        test.done();
    },
    testClockCurrency_as_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_bg_BG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "BGN");
        
        test.done();
    },
    testClockCurrency_bn_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_bs_Latn_BA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("bs-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "BAM");
        
        test.done();
    },
    testClockCurrency_bs_Latn_ME: function(test) {
        test.expect(3);
        var info = new LocaleInfo("bs-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_cs_CZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CZK");
        
        test.done();
    },
    testClockCurrency_da_DK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "DKK");
        
        test.done();
    },
    testClockCurrency_de_AT: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_de_CH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CHF");
        
        test.done();
    },
    testClockCurrency_de_DE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_de_LU: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-LU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_el_CY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("el-CY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_el_GR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_en_AM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-AM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "AMD");
        
        test.done();
    },
    testClockCurrency_en_AU: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-AU");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "AUD");
        
        test.done();
    },
    testClockCurrency_en_AZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "AZN");
        
        test.done();
    },
    testClockCurrency_en_CA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "CAD");
        
        test.done();
    },
    testClockCurrency_en_GB: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "GBP");
        
        test.done();
    },
    testClockCurrency_en_GH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-GH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "GHS");
        
        test.done();
    },
    testClockCurrency_en_HK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-HK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "HKD");
        
        test.done();
    },
    testClockCurrency_en_IE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-IE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_en_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_en_IS: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-IS");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "ISK");
        
        test.done();
    },
    testClockCurrency_en_JP: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-JP");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "JPY");
        
        test.done();
    },
    testClockCurrency_en_KE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-KE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "KES");
        
        test.done();
    },
    testClockCurrency_en_KR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-KR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "KRW");
        
        test.done();
    },
    testClockCurrency_en_LK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-LK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "LKR");
        
        test.done();
    },
    testClockCurrency_en_MM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-MM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MMK");
        
        test.done();
    },
    testClockCurrency_en_MW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-MW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MWK");
        
        test.done();
    },
    testClockCurrency_en_MY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MYR");
        
        test.done();
    },
    testClockCurrency_en_NG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "NGN");
        
        test.done();
    },
    testClockCurrency_en_NZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-NZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "NZD");
        
        test.done();
    },
    testClockCurrency_en_PH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-PH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "PHP");
        
        test.done();
    },
    testClockCurrency_en_PR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-PR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_en_SG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SGD");
        
        test.done();
    },
    testClockCurrency_en_US: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_en_UG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-UG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "UGX");
        
        test.done();
    },
    testClockCurrency_en_ZA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-ZA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "ZAR");
        
        test.done();
    },
    testClockCurrency_en_ZM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-ZM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "ZMW");
        
        test.done();
    },
    testClockCurrency_es_AR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-AR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "ARS");
        
        test.done();
    },
    testClockCurrency_es_BO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-BO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "BOB");
        
        test.done();
    },
    testClockCurrency_es_CL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-CL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CLP");
        
        test.done();
    },
    testClockCurrency_es_CO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "COP");
        
        test.done();
    },
    testClockCurrency_es_DO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-DO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "DOP");
        
        test.done();
    },
    testClockCurrency_es_EC: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-EC");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_es_ES: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_es_GT: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-GT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "GTQ");
        
        test.done();
    },
    testClockCurrency_es_HN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-HN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "HNL");
        
        test.done();
    },
    testClockCurrency_es_MX: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-MX");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "MXN");
        
        test.done();
    },
    testClockCurrency_es_NI: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-NI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "NIO");
        
        test.done();
    },
    testClockCurrency_es_PA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-PA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_es_PE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-PE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "PEN");
        
        test.done();
    },
    testClockCurrency_es_PR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-PR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_es_PY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-PY");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "PYG");
        
        test.done();
    },
    testClockCurrency_es_SV: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-SV");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_es_US: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-US");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "USD");
        
        test.done();
    },
    testClockCurrency_es_UY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-UY");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "UYU");
        
        test.done();
    },
    testClockCurrency_es_VE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-VE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "VES");
        
        test.done();
    },
    testClockCurrency_et_EE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("et-EE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_fa_AF: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "AFN");
        
        test.done();
    },
    testClockCurrency_fa_IR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "IRR");
        
        test.done();
    },
    testClockCurrency_fi_FI: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_fr_BE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_fr_CA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CAD");
        
        test.done();
    },
    testClockCurrency_fr_CH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CHF");
        
        test.done();
    },
    testClockCurrency_fr_FR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_fr_LU: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_ga_IE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_gu_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("gu-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_he_IL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "ILS");
        
        test.done();
    },
    testClockCurrency_hi_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_hr_HR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "HRK");
        
        test.done();
    },
    testClockCurrency_hr_ME: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hr-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_hr_HU: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hr-HU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "HUF");
        
        test.done();
    },
    testClockCurrency_id_ID: function(test) {
        test.expect(3);
        var info = new LocaleInfo("id-ID");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "IDR");
        
        test.done();
    },
    testClockCurrency_is_IS: function(test) {
        test.expect(3);
        var info = new LocaleInfo("is-IS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "ISK");
        
        test.done();
    },
    testClockCurrency_it_CH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CHF");
        
        test.done();
    },
    testClockCurrency_it_IT: function(test) {
        test.expect(3);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_ja_JP: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "JPY");
        
        test.done();
    },
    testClockCurrency_kk_KZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("kk-KZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "KZT");
        
        test.done();
    },
    testClockCurrency_kn_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("kn-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_ko_KR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "KRW");
        
        test.done();
    },
    testClockCurrency_ku_IQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "IQD");
        
        test.done();
    },
    testClockCurrency_lt_LT: function(test) {
        test.expect(3);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_lv_LV: function(test) {
        test.expect(3);
        var info = new LocaleInfo("lv-LV");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_mk_MK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "MKD");
        
        test.done();
    },
    testClockCurrency_ml_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ml-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_mr_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("mr-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_ms_MY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MYR");
        
        test.done();
    },
    testClockCurrency_nb_NO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("nb-NO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "NOK");
        
        test.done();
    },
    testClockCurrency_nl_BE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_nl_NL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_pa_Guru_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pa-Guru-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_pl_PL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "PLN");
        
        test.done();
    },
    testClockCurrency_pt_BR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "BRL");
        
        test.done();
    },
    testClockCurrency_pt_PT: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_ro_RO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RON");
        
        test.done();
    },
    testClockCurrency_sr_Cyrl_RS: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sr-Cyrl-RS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RSD");
        
        test.done();
    },
    testClockCurrency_sr_Latn_RS: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RSD");
        
        test.done();
    },
    testClockCurrency_ru_BY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-BY");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "BYN");
        
        test.done();
    },
    testClockCurrency_ru_KG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-KG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "KGS");
        
        test.done();
    },
    testClockCurrency_ku_KZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "KZT");
        
        test.done();
    },
    testClockCurrency_ru_GE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-GE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "GEL");
        
        test.done();
    },
    testClockCurrency_ru_RU: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-RU");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RUB");
        
        test.done();
    },
    testClockCurrency_ru_UA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ru-UA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "UAH");
        
        test.done();
    },
    testClockCurrency_sk_SK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_sl_SI: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_sq_AL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sq-AL");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "ALL");
        
        test.done();
    },
    testClockCurrency_sq_ME: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sq-ME");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_sv_FI: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_sv_SE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "SEK");
        
        test.done();
    },
    testClockCurrency_ta_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ta-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_te_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("te-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_th_TH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "THB");
        
        test.done();
    },
    testClockCurrency_tr_AM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("tr-AM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "AMD");
        
        test.done();
    },
    testClockCurrency_tr_AZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("tr-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "AZN");
        
        test.done();
    },
    testClockCurrency_tr_CY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("tr-CY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "EUR");
        
        test.done();
    },
    testClockCurrency_tr_TR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("tr-TR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "TRY");
        
        test.done();
    },
    testClockCurrency_uk_UA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "UAH");
        
        test.done();
    },
    testClockCurrency_ur_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_uz_Latn_UZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "UZS");
        
        test.done();
    },
    testClockCurrency_vi_VN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "VND");
        
        test.done();
    },
    testClockCurrency_zh_Hans_CN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hans-CN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "CNY");
        
        test.done();
    },
    testClockCurrency_zh_Hant_HK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hant-HK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "HKD");
        
        test.done();
    },
    testClockCurrency_zh_Hant_TW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hant-TW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "TWD");
        
        test.done();
    },
    testClockCurrency_en_GE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-GE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "GEL");
        
        test.done();
    },
    testClockCurrency_en_CN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-CN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "CNY");
        
        test.done();
    },
    testClockCurrency_en_MX: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-MX");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MXN");
        
        test.done();
    },
    testClockCurrency_en_TW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-TW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "TWD");
        
        test.done();
    },
    testClockCurrency_mn_MN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("mn-MN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "MNT");
        
        test.done();
    },
    testClockCurrency_es_CA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CAD");
        
        test.done();
    },
    testClockCurrency_af_ZA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("af-ZA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "ZAR");
        
        test.done();
    },
    testClockCurrency_am_ET: function(test) {
        test.expect(3);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "ETB");
        
        test.done();
    },
    testClockCurrency_ha_Latn_NG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ha-Latn-NG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "NGN");
        
        test.done();
    },
    testClockCurrency_or_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("or-IN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "INR");
        
        test.done();
    },
    testClockCurrency_az_Latn_AZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "AZN");
        
        test.done();
    },
    testClockCurrency_km_KH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "KHR");
        
        test.done();
    },
    testClockCurrency_si_LK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "LKR");
        
        test.done();
    },
    testClockCurrency_ar_AE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "AED");
        
        test.done();
    },
    testClockCurrency_ar_BH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-BH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "BHD");
        
        test.done();
    },
    testClockCurrency_ar_DJ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-DJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "DJF");
        
        test.done();
    },
    testClockCurrency_ar_DZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "DZD");
        
        test.done();
    },
    testClockCurrency_ar_JO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-JO");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "JOD");
        
        test.done();
    },
    testClockCurrency_ar_KW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-KW");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "KWD");
        
        test.done();
    },
    testClockCurrency_ar_LB: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-LB");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "LBP");
        
        test.done();
    },
    testClockCurrency_ar_LY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-LY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "LYD");
        
        test.done();
    },
    testClockCurrency_ar_MR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-MR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MRU");
        
        test.done();
    },
    testClockCurrency_ar_OM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-OM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "OMR");
        
        test.done();
    },
    testClockCurrency_ar_QA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-QA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "QAR");
        
        test.done();
    },
    testClockCurrency_ar_SA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SA");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SAR");
        
        test.done();
    },
    testClockCurrency_ar_SD: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SD");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SDG");
        
        test.done();
    },
    testClockCurrency_ar_SY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SYP");
        
        test.done();
    },
    testClockCurrency_ar_TN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "TND");
        
        test.done();
    },
    testClockCurrency_ar_YE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-YE");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "YER");
        
        test.done();
    },
    testClockCurrency_en_ET: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-ET");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "ETB");
        
        test.done();
    },
    testClockCurrency_en_GM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-GM");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "GMD");
        
        test.done();
    },
    testClockCurrency_en_LR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-LR");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "LRD");
        
        test.done();
    },
    testClockCurrency_en_PK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "PKR");
        
        test.done();
    },
    testClockCurrency_en_RW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-RW");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RWF");
        
        test.done();
    },
    testClockCurrency_en_SD: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-SD");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SDG");
        
        test.done();
    },
    testClockCurrency_en_SL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-SL");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SLL");
        
        test.done();
    },
    testClockCurrency_en_TZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-TZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "TZS");
        
        test.done();
    },
    testClockCurrency_es_CR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-CR");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CRC");
        
        test.done();
    },
    testClockCurrency_es_GQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_es_PH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-PH");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "PHP");
        
        test.done();
    },
    testClockCurrency_fr_BF: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-BF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_fr_BJ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-BJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_fr_CD: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CD");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CDF");
        
        test.done();
    },
    testClockCurrency_fr_CF: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CF");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_fr_CG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_fr_CI: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CI");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_fr_CM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CM");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_fr_GQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_fr_DJ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-DJ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "DJF");
        
        test.done();
    },
    testClockCurrency_fr_DZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "DZD");
        
        test.done();
    },
    testClockCurrency_fr_GA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-GA");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_fr_GN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-GN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "GNF");
        
        test.done();
    },
    testClockCurrency_fr_LB: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-LB");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "LBP");
        
        test.done();
    },
    testClockCurrency_fr_ML: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-ML");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_fr_RW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-RW");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "RWF");
        
        test.done();
    },
    testClockCurrency_fr_SN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_fr_TG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-TG");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XOF");
        
        test.done();
    },
    testClockCurrency_ms_SG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ms-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SGD");
        
        test.done();
    },
    testClockCurrency_pa_PK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pa-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "PKR");
        
        test.done();
    },
    testClockCurrency_pt_AO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "AOA");
        
        test.done();
    },
    testClockCurrency_pt_GQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-GQ");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "XAF");
        
        test.done();
    },
    testClockCurrency_pt_CV: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getClock(), 24);
        test.equal(info.getCurrency(), "CVE");
        
        test.done();
    },
    testClockCurrency_ur_PK: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "PKR");
        
        test.done();
    },
    testClockCurrency_zh_Hans_SG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "SGD");
        
        test.done();
    },
    testClockCurrency_zh_Hans_MY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hans-MY");
        test.ok(info !== null);

        test.equal(info.getClock(), 12);
        test.equal(info.getCurrency(), "MYR");
        
        test.done();
    }
}
