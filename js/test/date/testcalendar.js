 /*
 * testcalendar.js - test the calendar support per locale
 *
 * Copyright © 2019-2020, JEDLSoft
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

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

module.exports.testcalendar = {
    testDefaultCalendar_GregorianCaseAll: function(test) {
        test.expect(203);

        var localeList = ["ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR",
        "ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-TN","ar-YE","as-IN","az-Latn-AZ","be-BY","bg-BG","bn-IN","bs-Latn-BA,bs-Latn-ME",
        "ca-AD", "ca-ES", "cs-CZ","da-DK","de-AT","de-CH","de-DE","de-LU","et-EE","el-CY","el-GR","en-AM","en-AU","en-AZ","en-CA","en-GB","en-GH",
        "en-GM","en-HK","en-IE","en-IN","en-IS","en-JP","en-KE","en-KR","en-LK","en-LR","en-MM","en-MW","en-MY","en-NG","en-NZ",
        "en-PH","en-PK","en-PR","en-RW","en-SD","en-SG","en-SL","en-TW","en-TZ","en-UG","en-US","en-ZA","en-ZM","es-AR","es-BO",
        "es-CL","es-CO","es-CR","es-DO","es-EC","es-ES","es-GQ","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR",
        "es-PY","es-SV","es-US","es-UY","es-VE","eu-ES","fi-FI","fr-BE","fr-BF","fr-BJ","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI",
        "fr-CM","fr-GQ","fr-DJ","fr-DZ","fr-FR","fr-GA","fr-GN","fr-LB","fr-LU","fr-ML","fr-RW","fr-SN","fr-TG","ga-IE","gl-ES","gu-IN",
        "he-IL","hi-IN","hi-SG","hr-HR","hr-ME","hu-HU","hy-AM","id-ID","is-IS","it-CH","it-IT","ja-JP","ka-GE","kk-Cyrl-KZ","km-KH","kn-IN",
        "ko-KR","ku-Arab-IQ","ky-KG","lo-LA","lt-LT","lv-LV","mk-MK","ml-IN","mn-Cyrl-MN","mr-IN","ms-MY","ms-SG","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","pa-IN",
        "pa-PK","pl-PL","pt-AO","pt-BR","pt-GQ","pt-CV","pt-PT","ro-RO","ru-BY","ru-GE","ru-KG","ru-KZ","ru-RU","ru-UA","si-LK",
        "sk-SK","sl-SI","sq-AL","sq-ME","sr-Latn-ME","sr-Latn-RS","sv-FI","sv-SE","sw-KE","ta-IN","ta-SG","te-IN","tr-AM","tr-AZ",
        "tr-CY","tr-TR","uk-UA","ur-IN","ur-PK","uz-Cyrl-UZ","uz-Latn-UZ","vi-VN","zh-Hans-CN","zh-Hans-SG","zh-Hant-HK",
        "zh-Hans-MY","zh-Hant-TW","af-ZA","ha-Latn-NG","or-IN","en-GE","en-CN","en-MX","en-TW","es-CA"];

        //console.log("localeList.length: ", localeList.length);
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
    testDefaultCalendar_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
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
    }
}
