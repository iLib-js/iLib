/*
 * testtoupper.js - Test the upper-casing mapper
 * 
 * Copyright © 2014-2015,2017,2020 JEDLSoft
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

if (typeof(CaseMapper) === "undefined") {
    var CaseMapper = require("../../lib/CaseMapper.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testtoupper = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testToUpperFromLower_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("this is a string"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromUpper_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("THIS IS A STRING"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromMixed_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("This is a String"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromLowerExplicitDirection_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.equal(mapper.map("this is a string"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromUpperExplicitDirection_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.equal(mapper.map("THIS IS A STRING"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromMixedExplicitDirection_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.equal(mapper.map("This is a String"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromPunctuationUnchanged_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("!@#$%^&*()"), "!@#$%^&*()");
        test.done();
    },
    
    testToUpperFromNonLatinUnchanged_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("演蟻人 道格拉斯最老英雄"), "演蟻人 道格拉斯最老英雄");
        test.done();
    },
    
    testToUpperFromExtendedLatin_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("ãéìôü"), "ÃÉÌÔÜ");
        test.done();
    },
    
    testToUpperCyrillic_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("празл"), "ПРАЗЛ");
        test.done();
    },
    
    testToUpperGreek_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("αβγδεζηθ"), "ΑΒΓΔΕΖΗΘ");
        test.done();
    },
    
    testToUpperGreekSigma_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("ιασας ιασας"), "ΙΑΣΑΣ ΙΑΣΑΣ");
        test.done();
    },
    
    testToUpperCoptic_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ"), "ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ");
        test.done();
    },
    
    testToUpperArmenian_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("աբգդեզէըթ"), "ԱԲԳԴԵԶԷԸԹ");
        test.done();
    },
    
    testToUpperGeorgian_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper();
        test.equal(mapper.map("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ"), "ႠႡႢႣႤႥႦႧႨႩ");
        test.done();
    },
    
    /* Azeri tests */
    testToUpper_az_AZ: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "az-AZ"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Turkish tests */
    testToUpper_tr_TR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "tr-TR"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Crimean Tatar tests */
    testToUpper_crh_Latn_UK: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "crh-Latn-UK"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Kazakh tests */
    testToUpper_kk_Latn_KK: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "kk-Latn-KK"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Tatar tests */
    testToUpper_tt_Latn_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "tt-Latn-RU"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Karachay-Balkar tests */
    testToUpper_krc_Latn_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "krc-Latn-RU"
        });
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* German tests */
    testToUpper_de_DE: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "de-DE"
        });
        test.equal(mapper.map("groß"), "GROSS");
        test.done();
    },
    
    /* Russian tests */
    testToUpperLowerPalochka_ru_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "ru-RU"
        });
        test.equal(mapper.map("ӏ"), "Ӏ");
        test.done();
    },
    
    testToUpperUpperPalochka_ru_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "ru-RU"
        });
        test.equal(mapper.map("Ӏ"), "Ӏ");
        test.done();
    },
    
    /* Greek tests */
    testToUpper_el_GR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "el-GR"
        });
        test.equal(mapper.map("ιασας ιασας"), "ΙΑΣΑΣ ΙΑΣΑΣ");
        test.done();
    },
    
    testToUpperAccents_el_GR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "el-GR"
        });
        test.equal(mapper.map("άέήίΰϊϋόύώΐ"), "ΑΕΗΙΥΙΥΟΥΩΙ");
        test.done();
    },
    
    /* French tests */
    testToUpper_fr_FR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "fr-FR"
        });
        test.equal(mapper.map("Tête-à-tête"), "TÊTE-À-TÊTE");
        test.done();
    },
    
    /* French Canadian tests */
    testToUpper_fr_CA: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "fr-CA"
        });
        test.equal(mapper.map("Tête-à-tête"), "TÊTE-À-TÊTE");
        test.done();
    },
    
    // make sure it is not broken in Lithuanian
    testToUpper_lt: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            locale: "lt-LT"
        });
        test.equal(mapper.map("aąbcčdeęėfghiįyjklmnoprsštuųūvzž"), "AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ");
        test.done();
    },
    
    /*Afrikaans Test cases*/
    testToUpper_af_ZA1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.equal(mapper.map("aáäbcdeêëéèfg"), "AÁÄBCDEÊËÉÈFG");
        test.done();
    },
    
    testToUpper_af_ZA2: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.equal(mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"), "HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ");
        test.done();
    },
    
    testToUpperMixed_af_ZA3: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.equal(mapper.map("hiî - ïíjkl"), "HIÎ - ÏÍJKL");
        test.done();
    },
    
    
    testToUpper_af_NA1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.equal(mapper.map("aáäbcdeêëéèfg"), "AÁÄBCDEÊËÉÈFG");
        test.done();
    },
    
    testToUpper_af_NA2: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.equal(mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"), "HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ");
        test.done();
    },
    
    testToUpperMixed_af_NA3: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.equal(mapper.map("hiî - ïíjkl"), "HIÎ - ÏÍJKL");
        test.done();
    },
    /*Hausa */
    testToUpper_ha_GH1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-GH"
        });
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    },
    
    testToUpper_ha_NE1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-NE"
        });
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    },
    
    testToUpper_ha_NG1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-NG"
        });
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    },

    testToUpper_sl_SI: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "sl-SI"
        });
        // take special care of the digraphs
        test.equal(mapper.map("ǌǋǊǉǈǇǆǅǄ"), "ǊǊǊǇǇǇǄǄǄ");
        test.done();
    },

    testCaseMapperTypeSentenceEn: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "en-US"
        });
        test.equal(mapper.map("this is a test."), "This is a test.");
        test.done();
    },

    testCaseMapperTypeSentenceFirstLetterIgnorePunct: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "es-ES"
        });
        // capitalize the first letter, skipping over any initial punctuation
        test.equal(mapper.map("¡esto es una prueba!"), "¡Esto es una prueba!");
        test.done();
    },

    testCaseMapperTypeSentenceIgnoreInitialWhitespace: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "en-US"
        });
        // capitalize the first letter after all the whitespace is skipped
        test.equal(mapper.map("   \n\t\r          this is a test."), "   \n\t\r          This is a test.");
        test.done();
    },

    testCaseMapperTypeSentenceFirstLetterDigraphNl: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "es-ES"
        });
        test.equal(mapper.map("ijsland is koud!"), "¡IJsland is koud!");
        test.done();
    },

    testCaseMapperTypeSentenceFirstLetterDigraphHr: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "hr-HR"
        });
        // use the right digraph
        test.equal(mapper.map("ǌemačka je sjeverno odavde."), "ǋemačka je sjeverno odavde.");
        test.done();
    },

    testCaseMapperTypeSentenceFirstLetterDigraphHr2: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "hr-HR"
        });
        // use the right digraph
        test.equal(mapper.map("njemačka je sjeverno odavde."), "Njemačka je sjeverno odavde.");
        test.done();
    },

    testCaseMapperTypeSentenceFirstLetterDigraphSl: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "sl-SI"
        });
        // use the right digraph
        test.equal(mapper.map("ǉubǉana je čudovita."), "ǈubǉana je čudovita.");
        test.done();
    },

    testCaseMapperTypeSentenceIgnoreIdeographs: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "ja-JP"
        });
        test.equal(mapper.map("これはテストです。"), "これはテストです。");
        test.done();
    },

    testCaseMapperTypeSentenceEnMultipleSentences: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "sentence",
            locale: "en-US"
        });
        test.equal(mapper.map("this is a test. this is only a test."), "This is a test. This is only a test.");
        test.done();
    },

    testCaseMapperTypeTitleEn: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "en-US"
        });
        // only the open class words are capitalized
        test.equal(mapper.map("this is a test of the emergency capitalization system"), "This is a Test of the Emergency Capitalization system");
        test.done();
    },

    testCaseMapperTypeTitleDe: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "de-DE"
        });
        // In German, only initial caps, like sentence case
        test.equal(mapper.map("dies ist einen Test"), "Dies ist einen Test");
        test.done();
    },

    testCaseMapperTypeTitleDeDontTouchOtherCaps: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "de-DE"
        });
        // don't touch the rest of the sentence
        test.equal(mapper.map("dies ist einen test"), "Dies ist einen test");
        test.done();
    },

    testCaseMapperTypeTitleDe: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "de-DE"
        });
        // In Italian, all words are capitalized
        test.equal(mapper.map("questa è una prova."), "Questa È Una Prova.");
        test.done();
    },

    testCaseMapperTypeTitleFirstLetterIgnorePunct: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "es-ES"
        });
        // capitalize the first letter, skipping over any initial punctuation
        test.equal(mapper.map("¡esto es una prueba!"), "¡Esto es una prueba!");
        test.done();
    },

    testCaseMapperTypeTitleIgnoreLeadingWhitespace: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "en-US"
        });
        // only the open class words are capitalized
        test.equal(mapper.map("   \t\n\r  this is a test of the emergency capitalization system"), "   \t\n\r  This is a Test of the Emergency Capitalization System");
        test.done();
    },

    testCaseMapperTypeStartFirstLetterDigraphHr: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "hr-HR"
        });
        // use the right digraph
        test.equal(mapper.map("ǌemačka je sjeverno odavde."), "ǋemačka je sjeverno odavde.");
        test.done();
    },

    testCaseMapperTypeTitleFirstLetterDigraphNl: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "title",
            locale: "nl-NL"
        });
        // use the right digraph
        test.equal(mapper.map("ijsland is koud."), "IJsland is koud.");
        test.done();
    },

    testCaseMapperTypeStartEn: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "en-US"
        });
        // only the open class words are capitalized
        test.equal(mapper.map("this is a test of the emergency capitalization system"), "This Is A Test Of The Emergency Capitalization System");
        test.done();
    },

    testCaseMapperTypeStartDe: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "de-DE"
        });
        // In German, only initial caps, like sentence case
        test.equal(mapper.map("dies ist einen Test"), "Dies Ist Einen Test");
        test.done();
    },

    testCaseMapperTypeStartDeDontTouchOtherCaps: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "de-DE"
        });
        // don't touch the rest of the sentence
        test.equal(mapper.map("dies ist einen test"), "Dies Ist Einen Test");
        test.done();
    },

    testCaseMapperTypeStartDe: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "de-DE"
        });
        // In Italian, all words are capitalized
        test.equal(mapper.map("questa è una prova."), "Questa È Una Prova.");
        test.done();
    },

    testCaseMapperTypeStartFirstLetterIgnorePunct: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "es-ES"
        });
        // capitalize the first letter, skipping over any initial punctuation
        test.equal(mapper.map("¡esto es una prueba!"), "¡Esto Es Una Prueba!");
        test.done();
    },

    testCaseMapperTypeStartIgnoreLeadingWhitespace: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "en-US"
        });
        // only the open class words are capitalized
        test.equal(mapper.map("   \t\n\r  this is a test of the emergency capitalization system"), "   \t\n\r  This Is A Test Of The Emergency Capitalization System");
        test.done();
    },

    testCaseMapperTypeStartFirstLetterDigraphHr: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "hr-HR"
        });
        // use the right digraph
        test.equal(mapper.map("ǌemačka je sjeverno odavde."), "ǋemačka Je Sjeverno Odavde.");
        test.done();
    },

    testCaseMapperTypeStartFirstLetterDigraphNl: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            type: "start",
            locale: "nl-NL"
        });
        // use the right digraph
        test.equal(mapper.map("ijsland is koud."), "IJsland Is Koud.");
        test.done();
    }
};
