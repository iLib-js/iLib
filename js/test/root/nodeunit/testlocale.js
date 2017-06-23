/*
 * testlocale.js - test the locale object
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../.././../lib/Locale.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlocale = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testLocaleConstructor: function(test) {
        var loc = new Locale();
        
        test.expect(1);
        test.ok(loc !== null);
        test.done();
    },
    
    testLocaleConstructorCurrent: function(test) {
        if (ilib._getPlatform() === "browser") {
            // make sure it picks it up from the right place
            navigator.language = "en-US";
        }
        
        var loc = new Locale(); // gives locale of the host JS engine
        
        test.expect(4);
        test.ok(loc !== null);
    
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorDefault: function(test) {
        ilib.setLocale("it-IT");
        
        var loc = new Locale();
        
        test.expect(4);
        test.ok(loc !== null);
    
        test.equal(loc.getLanguage(), "it");
        test.equal(loc.getRegion(), "IT");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
        
        delete ilib.locale;
    },
    
    testLocaleCopyConstructor: function(test) {
        var loc2 = new Locale("de", "DE");
        var loc = new Locale(loc2);
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "de");
        test.equal(loc.getRegion(), "DE");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorFull: function(test) {
        var loc = new Locale("en", "US", "Midwest");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.equal(loc.getVariant(), "Midwest");
        test.done();
    },
    
    testLocaleConstructorSpecWithVariant: function(test) {
        var loc = new Locale("en-US-Midwest");
        
        test.expect(5);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.equal(loc.getVariant(), "Midwest");
        test.ok(typeof(loc.getScript()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorSpecWithScript: function(test) {
        var loc = new Locale("en-US-Latn");
        
        test.expect(5);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.equal(loc.getScript(), "Latn");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorPartial: function(test) {
        var loc = new Locale("en", "US");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorSpecPartial: function(test) {
        var loc = new Locale("en-US");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorShort: function(test) {
        var loc = new Locale("en");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.ok(typeof(loc.getRegion()) === "undefined");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorUpperCaseLanguage: function(test) {
        var loc = new Locale("EN", "US");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorLowerCaseRegion: function(test) {
        var loc = new Locale("en", "us");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorSpecMissingRegion: function(test) {
        var loc = new Locale("en--Midwest");
        
        test.expect(5);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.ok(typeof(loc.getRegion()) === "undefined");
        test.equal(loc.getVariant(), "Midwest");
        test.ok(typeof(loc.getScript()) === "undefined");
        test.done();
    },
    
    testLocaleConstructorSpecMissingLanguage: function(test) {
        var loc = new Locale("-US-Midwest");
        
        test.expect(5);
        test.ok(loc !== null);
        
        test.ok(typeof(loc.getLanguage()) === "undefined");
        test.equal(loc.getRegion(), "US");
        test.equal(loc.getVariant(), "Midwest");
        test.ok(typeof(loc.getScript()) === "undefined");    
        test.done();
    },
    
    testLocaleConstructorSpecMissingLanguageAndVariant: function(test) {
        var loc = new Locale("-US");
        
        test.expect(5);
        test.ok(loc !== null);
        
        test.ok(typeof(loc.getLanguage()) === "undefined");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.ok(typeof(loc.getScript()) === "undefined");
        test.done();
    },
    
    testLocaleEqualsTrue: function(test) {
        var loc1 = new Locale("en-US"),
            loc2 = new Locale("en", "US");
        
        test.expect(3);
        test.ok(loc1 !== null);
        test.ok(loc2 !== null);
        
        test.ok(loc1.equals(loc2));
        test.done();
    },
    
    testLocaleEqualsFalse: function(test) {
        var loc1 = new Locale("en-US"),
            loc2 = new Locale("en", "CA");
        
        test.expect(3);
        test.ok(loc1 !== null);
        test.ok(loc2 !== null);
        
        test.ok(!loc1.equals(loc2));
        test.done();
    },
    
    testLocaleEqualsMissing: function(test) {
        var loc1 = new Locale("en-US"),
            loc2 = new Locale("en", "US", "govt");
        
        test.expect(3);
        test.ok(loc1 !== null);
        test.ok(loc2 !== null);
        
        test.ok(!loc1.equals(loc2));
        test.done();
    },
    
    testLocaleEqualsTrueFull: function(test) {
        var loc1 = new Locale("en-US-govt"),
            loc2 = new Locale("en", "US", "govt");
        
        test.expect(3);
        test.ok(loc1 !== null);
        test.ok(loc2 !== null);
        
        test.ok(loc1.equals(loc2));
        test.done();
    },
    
    testLocaleEqualsTrueShort: function(test) {
        var loc1 = new Locale("en"),
            loc2 = new Locale("en");
        
        test.expect(3);
        test.ok(loc1 !== null);
        test.ok(loc2 !== null);
        
        test.ok(loc1.equals(loc2));
        test.done();
    },
    
    testLocaleIsPseudoTrue: function(test) {
        var loc = new Locale("zxx-XX");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(loc.isPseudo(loc));
        test.done();
    },
    
    testLocaleIsPseudoFalse: function(test) {
        var loc = new Locale("en-US");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(!loc.isPseudo(loc));
        test.done();
    },
    
    testLocaleIsPseudoFalseButClosLang: function(test) {
        var loc = new Locale("zxx-US");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(!loc.isPseudo(loc));
        test.done();
    },
    
    testLocaleIsPseudoFalse: function(test) {
        var loc = new Locale("en-XX");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(!loc.isPseudo(loc));
        test.done();
    },
    
    
    testLocaleGetSpecLangOnly: function(test) {
        var loc = new Locale("en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en");
        test.done();
    },
    
    testLocaleGetSpecRegionOnly: function(test) {
        var loc = new Locale("CA");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "CA");
        test.done();
    },
    
    testLocaleGetSpecScriptOnly: function(test) {
        var loc = new Locale("Latn");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "Latn");
        test.done();
    },
    
    testLocaleGetSpecVariantOnly: function(test) {
        var loc = new Locale("asdfasdf");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "asdfasdf");
        test.done();
    },
    
    testLocaleGetSpecLangAndScript: function(test) {
        var loc = new Locale("Latn-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-Latn");
        test.done();
    },
    
    testLocaleGetSpecLangAndRegion: function(test) {
        var loc = new Locale("CA-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-CA");
        test.done();
    },
    
    testLocaleGetSpecLangAndVariant: function(test) {
        var loc = new Locale("asdf-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-asdf");
        test.done();
    },
    
    testLocaleGetSpecScriptAndRegion: function(test) {
        var loc = new Locale("CA-Latn");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "Latn-CA");
        test.done();
    },
    
    testLocaleGetSpecScriptAndVariant: function(test) {
        var loc = new Locale("asdf-Latn");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "Latn-asdf");
        test.done();
    },
    
    testLocaleGetSpecRegionAndVariant: function(test) {
        var loc = new Locale("asdf-CA");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "CA-asdf");
        test.done();
    },
    
    testLocaleGetSpecLangScriptRegion: function(test) {
        var loc = new Locale("CA-en-Latn");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-Latn-CA");
        test.done();
    },
    
    testLocaleGetSpecScriptRegionVariant: function(test) {
        var loc = new Locale("CA-asdf-Latn");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "Latn-CA-asdf");
        test.done();
    },
    
    testLocaleGetSpecLangScriptVariant: function(test) {
        var loc = new Locale("asdf-Latn-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-Latn-asdf");
        test.done();
    },
    
    testLocaleGetSpecLangRegionVariant: function(test) {
        var loc = new Locale("asdf-CA-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-CA-asdf");
        test.done();
    },
    
    testLocaleGetSpecAll: function(test) {
        var loc = new Locale("asdf-CA-Latn-en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-Latn-CA-asdf");
        test.done();
    },
    
    testLocaleM49RegionCodeGetParts: function(test) {
        var loc = new Locale("en-001");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "001");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleM49RegionCodeGetParts2: function(test) {
        var loc = new Locale("en-150");
        
        test.expect(4);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "150");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    testLocaleM49RegionCodeGetSpec: function(test) {
        var loc = new Locale("en-001");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "en-001");
        test.done();
    },
    
    testLocaleNoLocale: function(test) {
        var loc = new Locale("-");
        
        test.expect(6);
        test.ok(loc !== null);
        
        test.equal(loc.getSpec(), "");
        test.ok(typeof(loc.getLanguage()) === "undefined");
        test.ok(typeof(loc.getRegion()) === "undefined");
        test.ok(typeof(loc.getScript()) === "undefined");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    
    
    testLocaleRegionMap1: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3("SG"), "SGP");
        test.done();
    },
    
    testLocaleRegionMap2: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3("VN"), "VNM");
        test.done();
    },
    
    testLocaleRegionMap3: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3("KR"), "KOR");
        test.done();
    },
    
    testLocaleRegionMapEmpty: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3(""), "");
        test.done();
    },
    
    testLocaleRegionMapUnknown: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3("QQ"), "QQ");
        test.done();
    },
    
    testLocaleRegionMapWrongCase: function(test) {
        test.expect(1);
        test.equal(Locale.regionAlpha2ToAlpha3("sg"), "sg");
        test.done();
    },
    
    testLocaleRegionMapUndefined: function(test) {
        test.expect(1);
        test.ok(typeof(Locale.regionAlpha2ToAlpha3(undefined)) === "undefined");
        test.done();
    },
    
    testLocaleLanguageMap1: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3("ko"), "kor");
        test.done();
    },
    
    testLocaleLanguageMap2: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3("th"), "tha");
        test.done();
    },
    
    testLocaleLanguageMap3: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3("hr"), "hrv");
        test.done();
    },
    
    testLocaleLanguageMapEmpty: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3(""), "");
        test.done();
    },
    
    testLocaleLanguageMapUnknown: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3("qq"), "qq");
        test.done();
    },
    
    testLocaleLanguageMapWrongCase: function(test) {
        test.expect(1);
        test.equal(Locale.languageAlpha1ToAlpha3("EN"), "EN");
        test.done();
    },
    
    testLocaleLanguageMapUndefined: function(test) {
        test.expect(1);
        test.ok(typeof(Locale.languageAlpha1ToAlpha3(undefined)) === "undefined");
        test.done();
    },
    
    testLocaleGetLanguageAlpha3_1: function(test) {
        var loc = new Locale("en-US");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguageAlpha3(), "eng");
        test.done();
    },
    
    testLocaleGetLanguageAlpha3_2: function(test) {
        var loc = new Locale("ru-RU");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguageAlpha3(), "rus");
        test.done();
    },
    
    testLocaleGetLanguageAlpha3_3: function(test) {
        var loc = new Locale("gv-GB");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getLanguageAlpha3(), "glv");
        test.done();
    },
    
    testLocaleGetLanguageAlpha3NoLanguage: function(test) {
        var loc = new Locale("GB");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(typeof(loc.getLanguageAlpha3()) === "undefined");
        test.done();
    },
    
    testLocaleGetRegionAlpha3_1: function(test) {
        var loc = new Locale("en-US");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getRegionAlpha3(), "USA");
        test.done();
    },
    
    testLocaleGetRegionAlpha3_2: function(test) {
        var loc = new Locale("ru-RU");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getRegionAlpha3(), "RUS");
        test.done();
    },
    
    testLocaleGetRegionAlpha3_3: function(test) {
        var loc = new Locale("gv-GB");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.equal(loc.getRegionAlpha3(), "GBR");
        test.done();
    },
    
    testLocaleGetRegionAlpha3NoRegion: function(test) {
        var loc = new Locale("en");
        
        test.expect(2);
        test.ok(loc !== null);
        
        test.ok(typeof(loc.getRegionAlpha3()) === "undefined");
        test.done();
    },
    
    testLocaleGetAvailableLocalesDefault: function(test) {
        var locales = Locale.getAvailableLocales();
        test.expect(2);
        test.ok(typeof(locales) !== "undefined");
        test.ok(locales.length > 0);
        test.done();
    },
    
    testLocaleGetAvailableLocalesCallback: function(test) {
        Locale.getAvailableLocales(true, function(locales) {
        test.expect(2);
            test.ok(typeof(locales) !== "undefined");
            test.ok(locales.length > 0);
            test.done();
        });
    }
    
};