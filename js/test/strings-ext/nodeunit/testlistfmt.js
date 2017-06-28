/*
 * testlistfmt.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(ListFmt) === "undefined") {
    var ListFmt = require("../.././../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlistfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtConstructorEmpty: function(test) {
        var fmt = new ListFmt();
    
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    testListFmtDefaults: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getLocale(), "en-US");
        test.done();
    },
    
    testListFmtDefaultStyle: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "standard");
        test.done();
    },
    
    testListFmtTestProperty1: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    
    testListFmtTestProperty2: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(), "");
        test.done();
    },
    
    testListFmtTestProperty3: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(undefined), "");
        test.done();
    },
    
    testListFmtTestProperty4: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format("one"), "");
        test.done();
    },
    
    testListFmtTestProperty5: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format("one", "two"), "");
        test.done();
    },
    
    testListFmtTestProperty6: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(100), "");
        test.done();
    },
    
    testListFmtTestProperty7: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(false), "");
        test.done();
    },
    
    testListFmtTestProperty8: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["true", "false"]), "true and false");
        test.done();
    },
    
    testListFmtNumberFormatOne: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtNumberFormatTwo: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtNumberFormatThree: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtNumberFormatFour: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    
    // de-DE
    testListFmtdeDENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },
    
    testListFmtdeDENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins und zwei");
        test.done();
    },
    
    testListFmtdeDENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },
    
    testListFmtdeDENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },
    
    // ko-KR
    
    testListFmtkoKRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나"]), "하나");
        test.done();
    },
    
    testListFmtkoKRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘"]), "하나 및 둘");
        test.done();
    },
    
    testListFmtkoKRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘", "셋"]), "하나, 둘 및 셋");
        test.done();
    },
    
    testListFmtkoKRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘", "셋", "넷"]), "하나, 둘, 셋 및 넷");
        test.done();
    },
    
    testListFmtUnitStyleNamekoKR: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월"]), "1월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월"]), "1월 2월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월"]), "1월 2월 3월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월","4월"]), "1월 2월 3월 4월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월","4월","5월"]), "1월 2월 3월 4월 5월");
        test.done();
    },
    
    // id-ID
    
    testListFmtidIDStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "standard");
        test.done();
    },
    
    testListFmtidIDNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtitIDNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dan dua");
        test.done();
    },
    
    testListFmtidIDNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga"]), "satu, dua, dan tiga");
        test.done();
    },
    
    testListFmtidIDNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat"]), "satu, dua, tiga, dan empat");
        test.done();
    },
    
    testListFmtidIDUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu, dua");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga"]), "satu, dua, tiga");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat"]), "satu, dua, tiga, empat");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat", "lima"]), "satu, dua, tiga, empat, lima");
        test.done();
    },
    
    // it-IT
    
    testListFmtitITNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtitITNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtitITNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtitITNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtitITUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno due");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno due tre");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno due tre quattro");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno due tre quattro cinque");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno, due, tre, quattro e cinque");
        test.done();
    },
    
    // pt-BR
    
    testListFmtptBRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptBRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptBRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptBRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },
    
    testListFmtptBRUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro", "cinco"]), "um, dois, três, quatro e cinco");
        test.done();
    },
    
    // ru-RU
    
    testListFmtruRUNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtruRUNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtruRUNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один, два и три");
        test.done();
    },
    
    testListFmtruRUNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один, два, три и четыре");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один два");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два и три");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три и четыре");
        test.done();
    },
    
    testListFmtUnitStyleruRUNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-RU",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре и пять");
        test.done();
    },
    
    // tr-TR
    
    testListFmttrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmttrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir ve два");
        test.done();
    },
    
    testListFmttrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два ve три");
        test.done();
    },
    
    testListFmttrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три ve четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },
    
    // vi-VI
    
    testListFmttrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một"]), "một");
        test.done();
    },
    
    testListFmttrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai"]), "một và hai");
        test.done();
    },
    
    testListFmttrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai", "ba"]), "một, hai và ba");
        test.done();
    },
    
    testListFmttrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai", "ba", "bốn"]), "một, hai, ba và bốn");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir, два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два, три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три, четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir, два, три, четыре, пять");
        test.done();
    }
};