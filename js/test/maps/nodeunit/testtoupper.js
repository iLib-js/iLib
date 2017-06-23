/*
 * testtoupper.js - Test the upper-casing mapper
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
    var CaseMapper = require("../.././../lib/CaseMapper.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testtoupper = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testToUpperFromLower_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("this is a string"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromUpper_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("THIS IS A STRING"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromMixed_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("This is a String"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromLowerExplicitDirection_default: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.expect(1);
        test.equal(mapper.map("this is a string"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromUpperExplicitDirection_default: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.expect(1);
        test.equal(mapper.map("THIS IS A STRING"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromMixedExplicitDirection_default: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper"
        });
        test.expect(1);
        test.equal(mapper.map("This is a String"), "THIS IS A STRING");
        test.done();
    },
    
    testToUpperFromPunctuationUnchanged_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("!@#$%^&*()"), "!@#$%^&*()");
        test.done();
    },
    
    testToUpperFromNonLatinUnchanged_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("演蟻人 道格拉斯最老英雄"), "演蟻人 道格拉斯最老英雄");
        test.done();
    },
    
    testToUpperFromExtendedLatin_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("ãéìôü"), "ÃÉÌÔÜ");
        test.done();
    },
    
    testToUpperCyrillic_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("празл"), "ПРАЗЛ");
        test.done();
    },
    
    testToUpperGreek_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("αβγδεζηθ"), "ΑΒΓΔΕΖΗΘ");
        test.done();
    },
    
    testToUpperGreekSigma_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("ιασας ιασας"), "ΙΑΣΑΣ ΙΑΣΑΣ");
        test.done();
    },
    
    testToUpperCoptic_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ"), "ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ");
        test.done();
    },
    
    testToUpperArmenian_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("աբգդեզէըթ"), "ԱԲԳԴԵԶԷԸԹ");
        test.done();
    },
    
    testToUpperGeorgian_default: function(test) {
        var mapper = new CaseMapper();
        test.expect(1);
        test.equal(mapper.map("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ"), "ႠႡႢႣႤႥႦႧႨႩ");
        test.done();
    },
    
    /* Azeri tests */
    testToUpper_az_AZ: function(test) {
        var mapper = new CaseMapper({
            locale: "az-AZ"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Turkish tests */
    testToUpper_tr_TR: function(test) {
        var mapper = new CaseMapper({
            locale: "tr-TR"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Crimean Tatar tests */
    testToUpper_crh_Latn_UK: function(test) {
        var mapper = new CaseMapper({
            locale: "crh-Latn-UK"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Kazakh tests */
    testToUpper_kk_Latn_KK: function(test) {
        var mapper = new CaseMapper({
            locale: "kk-Latn-KK"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Tatar tests */
    testToUpper_tt_Latn_RU: function(test) {
        var mapper = new CaseMapper({
            locale: "tt-Latn-RU"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* Karachay-Balkar tests */
    testToUpper_krc_Latn_RU: function(test) {
        var mapper = new CaseMapper({
            locale: "krc-Latn-RU"
        });
        test.expect(1);
        test.equal(mapper.map("ıi"), "Iİ");
        test.done();
    },
    
    /* German tests */
    testToUpper_de_DE: function(test) {
        var mapper = new CaseMapper({
            locale: "de-DE"
        });
        test.expect(1);
        test.equal(mapper.map("groß"), "GROSS");
        test.done();
    },
    
    /* Russian tests */
    testToUpperLowerPalochka_ru_RU: function(test) {
        var mapper = new CaseMapper({
            locale: "ru-RU"
        });
        test.expect(1);
        test.equal(mapper.map("ӏ"), "Ӏ");
        test.done();
    },
    
    testToUpperUpperPalochka_ru_RU: function(test) {
        var mapper = new CaseMapper({
            locale: "ru-RU"
        });
        test.expect(1);
        test.equal(mapper.map("Ӏ"), "Ӏ");
        test.done();
    },
    
    /* Greek tests */
    testToUpper_el_GR: function(test) {
        var mapper = new CaseMapper({
            locale: "el-GR"
        });
        test.expect(1);
        test.equal(mapper.map("ιασας ιασας"), "ΙΑΣΑΣ ΙΑΣΑΣ");
        test.done();
    },
    
    testToUpperAccents_el_GR: function(test) {
        var mapper = new CaseMapper({
            locale: "el-GR"
        });
        test.expect(1);
        test.equal(mapper.map("άέήίΰϊϋόύώΐ"), "ΑΕΗΙΥΙΥΟΥΩΙ");
        test.done();
    },
    
    /* French tests */
    testToUpper_fr_FR: function(test) {
        var mapper = new CaseMapper({
            locale: "fr-FR"
        });
        test.expect(1);
        test.equal(mapper.map("Tête-à-tête"), "TÊTE-À-TÊTE");
        test.done();
    },
    
    /* French Canadian tests */
    testToUpper_fr_CA: function(test) {
        var mapper = new CaseMapper({
            locale: "fr-CA"
        });
        test.expect(1);
        test.equal(mapper.map("Tête-à-tête"), "TÊTE-À-TÊTE");
        test.done();
    },
    
    // make sure it is not broken in Lithuanian
    testToUpper_lt: function(test) {
        var mapper = new CaseMapper({
            locale: "lt-LT"
        });
        test.expect(1);
        test.equal(mapper.map("aąbcčdeęėfghiįyjklmnoprsštuųūvzž"), "AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ");
        test.done();
    },
    
    /*Afrikaans Test cases*/
    testToUpper_af_ZA1: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.expect(1);
        test.equal(mapper.map("aáäbcdeêëéèfg"), "AÁÄBCDEÊËÉÈFG");
        test.done();
    },
    
    testToUpper_af_ZA2: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.expect(1);
        test.equal(mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"), "HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ");
        test.done();
    },
    
    testToUpperMixed_af_ZA3: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-ZA"
        });
        test.expect(1);
        test.equal(mapper.map("hiî - ïíjkl"), "HIÎ - ÏÍJKL");
        test.done();
    },
    
    
    testToUpper_af_NA1: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.expect(1);
        test.equal(mapper.map("aáäbcdeêëéèfg"), "AÁÄBCDEÊËÉÈFG");
        test.done();
    },
    
    testToUpper_af_NA2: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.expect(1);
        test.equal(mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"), "HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ");
        test.done();
    },
    
    testToUpperMixed_af_NA3: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "af-NA"
        });
        test.expect(1);
        test.equal(mapper.map("hiî - ïíjkl"), "HIÎ - ÏÍJKL");
        test.done();
    },
    /*Hausa */
    testToUpper_ha_GH1: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-GH"
        });
        test.expect(1);
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    },
    
    testToUpper_ha_NE1: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-NE"
        });
        test.expect(1);
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    },
    
    testToUpper_ha_NG1: function(test) {
        var mapper = new CaseMapper({
            direction: "toupper",
            locale: "ha-NG"
        });
        test.expect(1);
        test.equal(mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"), "ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ");
        test.done();
    }
    
    
    
};