/*
 * testlocalematch.js - test the locale matcher object
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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
        test.equal(locale.getSpec(), "ia-Latn-FR");
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

    testLocaleMatcherGetLikelyLocaleByScript: function(test) {
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

    testLocaleMatcherGetLikelyLocaleByScriptOriya: function(test) {
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

    testLocaleMatcherGetLikelyLocaleByLanguageOriya: function(test) {
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
        test.equal(locale.getSpec(), "en-Latn-US");
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
    }
};
