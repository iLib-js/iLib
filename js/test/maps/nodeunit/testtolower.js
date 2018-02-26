/*
 * testtolower.js - Test the lower-casing mapper
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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
    var CaseMapper = require("../../../lib/CaseMapper.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testtolower = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testToLowerFromLower_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("this is a string"), "this is a string");
        test.done();
    },
    
    testToLowerFromUpper_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("THIS IS A STRING"), "this is a string");
        test.done();
    },
    
    testToLowerFromMixed_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("This is a String"), "this is a string");
        test.done();
    },
    
    testToLowerFromPunctuationUnchanged_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("!@#$%^&*()"), "!@#$%^&*()");
        test.done();
    },
    
    testToLowerFromNonLatinUnchanged_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("演蟻人 道格拉斯最老英雄"), "演蟻人 道格拉斯最老英雄");
        test.done();
    },
    
    testToLowerFromExtendedLatin_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ÃÉÌÔÜ"), "ãéìôü");
        test.done();
    },
    
    testToLowerCyrillic_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ПРАЗЛ"), "празл");
        test.done();
    },
    
    testToLowerGreek_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ΑΒΓΔΕΖΗΘ"), "αβγδεζηθ");
        test.done();
    },
    
    testToLowerGreekSigma_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"), "ιασας ιασας");
        test.done();
    },
    
    testToLowerCoptic_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ"), "ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ");
        test.done();
    },
    
    testToLowerArmenian_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ԱԲԳԴԵԶԷԸԹ"), "աբգդեզէըթ");
        test.done();
    },
    
    testToLowerGeorgian_default: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower"
        });
        test.equal(mapper.map("ႠႡႢႣႤႥႦႧႨႩ"), "ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ");
        test.done();
    },
    
    /* Azeri tests */
    testToLower_az_AZ: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "az-AZ"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* Turkish tests */
    testToLower_tr_TR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "tr-TR"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* Crimean Tatar tests */
    testToLower_crh_Latn_UK: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "crh-Latn-UK"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* Kazakh tests */
    testToLower_kk_Latn_KK: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "kk-Latn-KK"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* Tatar tests */
    testToLower_tt_Latn_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "tt-Latn-RU"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* Karachay-Balkar tests */
    testToLower_krc_Latn_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "krc-Latn-RU"
        });
        test.equal(mapper.map("Iİ"), "ıi");
        test.done();
    },
    
    /* German tests */
    testToLowerDoubleS_de_DE: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "de-DE"
        });
        test.equal(mapper.map("GROSS"), "gross");
        test.done();
    },
    
    testToLowerWithSZ_de_DE: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "de-DE"
        });
        test.equal(mapper.map("GROß"), "groß");
        test.done();
    },
    
    
    /* Russian tests */
    testToLowerLowerPalochka_ru_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "ru-RU"
        });
        test.equal(mapper.map("ӏ"), "ӏ");
        test.done();
    },
    
    testToLowerUpperPalochka_ru_RU: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "ru-RU"
        });
        test.equal(mapper.map("Ӏ"), "Ӏ");
        test.done();
    },
    
    /* Greek tests */
    testToLower_el_GR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "el-GR"
        });
        test.equal(mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"), "ιασας ιασας");
        test.done();
    },
    
    /* French tests */
    testToLowerNoAccents_fr_FR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "fr-FR"
        });
        test.equal(mapper.map("TETE-A-TETE"), "tete-a-tete");
        test.done();
    },
    testToLowerWithAccents_fr_FR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "fr-FR"
        });
        test.equal(mapper.map("TÊTE-À-TÊTE"), "tête-à-tête");
        test.done();
    },
    testToLowerMixedWithAccents_fr_FR: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "fr-FR"
        });
        test.equal(mapper.map("Tête-à-Tête"), "tête-à-tête");
        test.done();
    },
    
    /* French Canadian tests */
    testToLower_fr_CA: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "fr-CA"
        });
        test.equal(mapper.map("TÊTE-À-TÊTE"), "tête-à-tête");
        test.done();
    },
    
    //make sure it is not broken in Lithuanian
    testToLower_lt: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "lt-LT"
        });
        test.equal(mapper.map("AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ"), "aąbcčdeęėfghiįyjklmnoprsštuųūvzž");
        test.done();
    },
    
    /*Afrikaan Test cases*/
    testToLower_af_ZA1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-ZA"
        });
        test.equal(mapper.map("AÁÄBCDEÊËÉÈFG"), "aáäbcdeêëéèfg");
        test.done();
    },
    
    testToLower_af_ZA2: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-ZA"
        });
        test.equal(mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"), "hiîïíjklmnoôöópqrstuûüúvwxyz");
        test.done();
    },
    
    testToLowerMixed_af_ZA3: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-ZA"
        });
        test.equal(mapper.map("Hiî - ÏÍjkL"), "hiî - ïíjkl");
        test.done();
    },
    
    
    testToLower_af_NA1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-NA"
        });
        test.equal(mapper.map("AÁÄBCDEÊËÉÈFG"), "aáäbcdeêëéèfg");
        test.done();
    },
    
    testToLower_af_NA2: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-NA"
        });
        test.equal(mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"), "hiîïíjklmnoôöópqrstuûüúvwxyz");
        test.done();
    },
    
    testToLowerMixed_af_NA3: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "af-NA"
        });
        test.equal(mapper.map("Hiî - ÏÍjkL"), "hiî - ïíjkl");
        test.done();
    },
    
    /*Hausa */
    testToLower_ha_GH1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "ha-GH"
        });
        test.equal(mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"), "abɓcdɗefghijkƙlmnorstuwyƴz");
        test.done();
    },
    
    testToLower_ha_NE1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "ha-NE"
        });
         test.equal(mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"), "abɓcdɗefghijkƙlmnorstuwyƴz");
         test.done();
    },
    
    testToLower_ha_NG1: function(test) {
        test.expect(1);
        var mapper = new CaseMapper({
            direction: "tolower",
            locale: "ha-NG"
        });
         test.equal(mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"), "abɓcdɗefghijkƙlmnorstuwyƴz");
         test.done();
    }
    
};
