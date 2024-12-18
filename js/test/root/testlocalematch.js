/*
 * testlocalematch.js - test the locale matcher object
 *
 * Copyright © 2012-2015, 2017, 2019-2024 JEDLSoft
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

if (typeof(LocaleMatcher) === "undefined") {
    var LocaleMatcher = require("../../lib/LocaleMatcher.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlocalematch = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testLocaleMatcherConstructor: function(test) {
        test.expect(1);
        var loc = new LocaleMatcher();

        test.ok(loc !== null);
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uz"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "alt"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "alt-Cyrl-RU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "gv"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "gv-Latn-IM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ia"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ia-Latn-001");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage5: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sd"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sd-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage7: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "an"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "an-Latn-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage_tk: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tk"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tk-Latn-TM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguage8: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "mt"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "mt-Latn-MT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByRegion: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "UZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByRegion_TM: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "TM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tk-Latn-TM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByRegion2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "MT"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");

        test.equal(locale.getSpec(), "mt-Latn-MT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Arab"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ar-Arab-EG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByScript2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Aran"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fa-Aran-IR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByScript3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Elym"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "arc-Elym-IR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "pa-Arab"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pa-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndScript2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Cyrl-BY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-Cyrl-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndScript3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ar-Hebr"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ar-Hebr-IL");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndScriptUnknownCombo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Cyrl-PL"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pl-Latn-PL"); // default to country's locale
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndScriptOriya: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "or-Orya"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageOriya: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "or"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByScriptOriya: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Orya"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndRegion: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uz-AF"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Arab-AF");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByRegionAndScript: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "MA-Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-MA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleAlreadySpecified: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-CA-Latn"  // non-standard order of components
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-CA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageMissing: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zxx"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zxx-Latn-XX");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLanguageAndRegionMissing: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-GB"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-GB");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "af-ZA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-Latn-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodeAF: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "af"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-Latn-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "af-NA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-Latn-NA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeET: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "am-ET"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "am-Ethi-ET");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodeET: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "am"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "am-Ethi-ET");
        test.done();
    },
    /*Hausa */
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeHANG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ha"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodeHANG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ha-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodeHANE: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ha-NE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodeGH: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ha-GH"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-CA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-CA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ar-DJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ar-Arab-DJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "bs-BA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "bs-Latn-BA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "de-AT"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "de-Latn-AT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode5: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "de-LU"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "de-Latn-LU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode6: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "el-GR"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "el-Grek-GR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode7: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-AM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode8: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-AZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-AZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode9: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-CN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-CN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode10: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-ET"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-ET");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode11: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-GE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode12: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-IS"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-IS");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode13: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-JP"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-JP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode14: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-LK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-LK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode15: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-MM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode16: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-MX"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-MX");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode17: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-MY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-MY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode18: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-PH"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-PH");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode19: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-PK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode20: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-PR"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-PR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode21: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-RW"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-RW");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode22: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-SD"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-SD");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode23: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-TW"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-TW");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode24: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uz-UZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode25: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-TZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-TZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode26: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sv-SE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sv-Latn-SE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode27: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "es-CA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "es-Latn-CA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode28: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "es-PH"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "es-Latn-PH");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode29: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "es-US"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "es-Latn-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode30: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sv-FI"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sv-Latn-FI");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode31: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "et-EE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "et-Latn-EE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode32: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-BE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-BE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode33: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-RW"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-RW");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode34: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-CH"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-CH");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode35: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-GQ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-GQ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode36: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-DZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-DZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode37: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-LB"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-LB");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode38: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr-DJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-DJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode39: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "kk-KZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "kk-Cyrl-KZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode40: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ha-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode41: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "it-CH"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "it-Latn-CH");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode42: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ms-MY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ms-Latn-MY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode43: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ms-SG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ms-Latn-SG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode44: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "nl-BE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "nl-Latn-BE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode45: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "pa-IN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pa-Guru-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode46: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "pt-GQ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pt-Latn-GQ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode47: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ru-BY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-Cyrl-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode48: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ru-GE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-Cyrl-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode49: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ru-KG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-Cyrl-KG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode50: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ru-UA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-Cyrl-UA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode51: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sq-ME"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sq-Latn-ME");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode52: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tr-AM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tr-Latn-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode53: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tr-AZ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tr-Latn-AZ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode54: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tr-CY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tr-Latn-CY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode55: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uk-UA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uk-Cyrl-UA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode56: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ur-IN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ur-Arab-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode57: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ur-PK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ur-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode58: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "hr-ME"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hr-Latn-ME");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode59: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Latn-ME"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hr-Latn-ME");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode60: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ka-GE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-Geor-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode61: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "GE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-Geor-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode62: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ka"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-Geor-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode63: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "be-BY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-Cyrl-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode64: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "be"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-Cyrl-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode65: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "BY"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-Cyrl-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode66: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zgn-CN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zgn-Hani-CN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode67: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "rif-MA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "rif-Latn-MA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_lo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "lo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lo-Laoo-LA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ky: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ky"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ky-Cyrl-KG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_zu: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zu"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zu-Latn-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_lb: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "lb"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lb-Latn-LU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_LU: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "LU"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-LU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ZA: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ZA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_KG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "KG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ky-Cyrl-KG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_AQ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "AQ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-AQ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_CP: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "CP"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-CP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ca: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ca"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ca-Latn-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ps: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ps"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ps-Arab-AF");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_PK: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "PK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ur-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_AF: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "AF"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fa-Arab-AF");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_bn_IN: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "bn-IN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "bn-Beng-IN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_en_KR: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-KR"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-KR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_hr_HU: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "hr-HU"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hr-Latn-HU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ka_IR: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ka-IR"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-Geor-IR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ku_IQ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ku-IQ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ku-Arab-IQ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ps_PK: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ps-PK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ps-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_pt_MO: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "pt-MO"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pt-Latn-MO");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_as_XX: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "as-XX"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "as-Beng-XX");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ml_XX: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ml-XX"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ml-Mlym-XX");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_te_XX: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "te-XX"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "te-Telu-XX");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodehy: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "hy"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hy-Armn-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodehy2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "AM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hy-Armn-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCodehy3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Armn-AM"
            });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hy-Armn-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode68: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "gl-ES"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "gl-Latn-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode69: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "gl"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "gl-Latn-ES");
        test.done();
    },
   testLocaleMatcherGetLikelyLocaleByLocaleCode66: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "eu-ES"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "eu-Latn-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode67: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "eu"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "eu-Latn-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_my_MM: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "my-MM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "my-Mymr-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_my: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "my"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "my-Mymr-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ne: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ne"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ne-Deva-NP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ne_NP: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ne-NP"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ne-Deva-NP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_wo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "wo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "wo-Latn-SN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_tnh: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tnh"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tnh-Latn-PG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_wan: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "wan"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "wan-Latn-CI");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_wo_SN: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "wo-SN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "wo-Latn-SN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_tg: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tg"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tg-Cyrl-TJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_tg_TJ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tg-TJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tg-Cyrl-TJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_pa_PK: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "pa-PK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pa-Arab-PK");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ig: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ig"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ig-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ig_NG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ig-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ig-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_yo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_yo_NG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-Latn-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_yo_BJ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo-BJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-Latn-BJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_ko_US: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ko-US"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ko-Kore-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_Hant_CN: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Hant-CN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yue-Hant-CN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_Latn_HT: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Latn-HT"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-HT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleByLocaleCode_Latn_IL: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Latn-IL"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-IL");
        test.done();
    },
    testLocaleMatcherMatchExactFullLocale: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("zh-Hans-CN"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactLangRegion: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("en-US"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactLang: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("en"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactLangScript: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("zh-Hans"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactRegion: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "US"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("US"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactDefaultScript: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("zh-CN"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactDefaultScript: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-Latn-US"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("en-US"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactDefaultRegion: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "ja-JP"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("ja"), 100);

        test.done();
    },
    testLocaleMatcherMatchExactDefaultRegionReverse: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "ja"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("ja-JP"), 100);

        test.done();
    },
    testLocaleMatcherMatchFullLocaleDifferentRegion: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("zh-Hans-SG"), 78);

        test.done();
    },
    testLocaleMatcherMatchFullLocaleDifferentScript: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-HK"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("zh-Hant-HK"), 80);

        test.done();
    },
    testLocaleMatcherMatchFullLocaleDifferentLanguage: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-Latn-US"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("de-Latn-US"), 50);

        test.done();
    },
    testLocaleMatcherMatchFullLocaleDifferentVariant: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US-VARIANT"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("en-US"), 95);

        test.done();
    },
    testLocaleMatcherMatchMutuallyIntelligibleLanguages: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "da-DK"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("no-NO"), 53);

        test.done();
    },
    testLocaleMatcherMatchMutuallyIntelligibleLanguagesAsymetric: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "no-NO"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("da-DK"), 63);

        test.done();
    },
    testLocaleMatcherGetMacroLanguageZH: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.getMacroLanguage(), "zh");

        test.done();
    },
    testLocaleMatcherGetMacroLanguageCMN: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "cmn-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.getMacroLanguage(), "zh");

        test.done();
    },
    testLocaleMatcherGetMacroLanguageNO: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nn-NO"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.getMacroLanguage(), "no");

        test.done();
    },
    testLocaleMatcherGetMacroLanguageNoChange: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.getMacroLanguage(), "en");

        test.done();
    },
    testLocaleMatcherMatchMacroLanguagesNO: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nn-NO"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("no-NO"), 95);

        test.done();
    },
    testLocaleMatcherMatchMacroLanguagesZH: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "zh-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("cmn-Hans-CN"), 95);

        test.done();
    },
    testLocaleMatcherMatchMacroLanguagesZH2: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "yue-Hans-CN"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.match("cmn-Hans-CN"), 95);

        test.done();
    },
    testLocaleMatcherGetMacroLanguageNO: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nn-NO"
        });
        test.ok(typeof(lm) !== "undefined");

        test.equal(lm.getMacroLanguage(), "no");

        test.done();
    },
    testLocaleMatcherGetRegionContainmentNO: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nn-NO"
        });
        test.ok(typeof(lm) !== "undefined");

        // northern europe, europe, world
        test.equalIgnoringOrder(lm.getRegionContainment(), ["154", "150", "001"]);

        test.done();
    },
    testLocaleMatcherGetRegionContainmentDA: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "da-DK"
        });
        test.ok(typeof(lm) !== "undefined");

        // northern europe, european union, europe, world
        test.equalIgnoringOrder(lm.getRegionContainment(), ["154", "EU", "150", "001"]);

        test.done();
    },
    testLocaleMatcherGetRegionContainmentUS: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        // northern north america, north america, world
        test.equalIgnoringOrder(lm.getRegionContainment(), ["021", "019", "003", "001"]);

        test.done();
    },
    testLocaleMatcherGetRegionContainmentUsingMostLikelyRegion: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "ja"  // most likely region is "JP" for Japan
        });
        test.ok(typeof(lm) !== "undefined");

        // western asia, asia, world
        test.equalIgnoringOrder(lm.getRegionContainment(), ["001","030","142"]);

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionUSCA: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        // northern north america
        test.equal(lm.smallestCommonRegion("CA"), "021");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionUSJM: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        // north america
        test.equal(lm.smallestCommonRegion("JM"), "003");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionUSGB: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "en-US"
        });
        test.ok(typeof(lm) !== "undefined");

        // world
        test.equal(lm.smallestCommonRegion("GB"), "UN");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionNLDK: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nl-NL"
        });
        test.ok(typeof(lm) !== "undefined");

        // world
        test.equal(lm.smallestCommonRegion("DK"), "150");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionUndefined: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "nl-NL"
        });
        test.ok(typeof(lm) !== "undefined");

        // world
        test.equal(lm.smallestCommonRegion(undefined), "001");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionWithMostLikelyRegions: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "ja"
        });
        test.ok(typeof(lm) !== "undefined");

        // eastern asia
        test.equal(lm.smallestCommonRegion("zh"), "030");

        test.done();
    },
    testLocaleMatcherSmallestCommonRegionWithMostLikelyRegions2: function(test) {
        test.expect(2);
        var lm = new LocaleMatcher({
            locale: "hi"
        });
        test.ok(typeof(lm) !== "undefined");

        // asia
        test.equal(lm.smallestCommonRegion("ja"), "142");

        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "fr"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-FR");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ja"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ja-JP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ka"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "be"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-BY");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage_ky: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ky"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ky-Cyrl-KG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage6: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "gl"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "gl-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalByLanguage5: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "eu"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "eu-ES");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalUzbek: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uz"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ"); // Uzbek always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalChinese: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zh"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zh-Hans-CN"); // Chinese always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalKazakh: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "kk"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "kk-Cyrl-KZ"); // Kazakh always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sv"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sv-SE"); // default is Latin
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage_ne: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ne"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ne-NP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage_tk: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tk"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tk-TM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage_tg: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "tg"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tg-Cyrl-TJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage_mt: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "mt"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "mt-MT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForLanguage_zu: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zu"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zu-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "FI"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fi-FI"); // default is Latin
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_NP: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "NP"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ne-NP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_MT: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "MT"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "mt-MT");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_LA: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "LA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lo-LA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultScriptForLanguage1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sr-ME"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sr-Latn-ME"); // default is Cyrillic, so we have to put "Latn" explicitly
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultScriptForLanguage2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "sr-Latn-RS"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sr-Latn-RS"); // default is Cyrillic, so we have to put "Latn" explicitly
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultScriptForLanguage3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "zh-TW"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zh-Hant-TW"); // Chinese always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "US"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "HK"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zh-Hant-HK"); // Chinese always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "RU"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-RU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "GE"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_MM: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "MM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "my-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_TJ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "TJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tg-Cyrl-TJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_KG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "KG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ky-Cyrl-KG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_SN: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "SN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-SN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_AD: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "AD"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ca-AD");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_TM: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "TM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "tk-TM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultScriptForCountry_ZA: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ZA"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-ZA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForScript2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Jpan"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ja-JP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForScript3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Hans"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zh-Hans-CN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForScript4: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Geor"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ka-GE");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Hira"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ja-Hira-JP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForScript_Laoo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Laoo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lo-LA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForLangScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "uz-Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ"); // Uzbek always uses the script
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForLangScript2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ru-Cyrl"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ru-RU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalDefaultLocaleForLangScript3: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "no-Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "no-NO");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript1: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "en-Dsrt"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Dsrt-US");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ar-Hebr"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ar-Hebr-IL");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript_my_Mymr: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "my-Mymr"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "my-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript_Mymr: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "Mymr"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "my-MM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript_ne_Deva: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ne-Deva"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ne-NP");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocaleForLangScript_laoo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "lo-Laoo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lo-LA");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocalehyAM: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "hy-AM"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hy-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocalehyAM2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "hy-Armn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "hy-AM");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_wo_SN: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "wo-SN"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "wo-SN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_wo_SN2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "wo-Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "wo-SN");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_lb_LU: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "lb-LU"
          });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lb-LU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_lb_LU2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "lb-Latn"
          });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "lb-LU");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_ig_NG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ig-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ig-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_ig_NG2: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "ig-Latn"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ig-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_yo: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-NG");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_yo_BJ: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo-BJ"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-BJ");
        test.done();
    },
    testLocaleMatcherGetLikelyLocaleMinimalNonDefaultLocale_yo_NG: function(test) {
        test.expect(3);
        var lm = new LocaleMatcher({
            locale: "yo-NG"
        });
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocaleMinimal();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "yo-NG");
        test.done();
    }
};
