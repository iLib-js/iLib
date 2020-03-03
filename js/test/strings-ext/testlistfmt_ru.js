/*
 * testlistfmt_ru.js - test the list formatter object
 *
 * Copyright © 2017, JEDLSoft
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
    var ListFmt = require("../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_ru = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
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
        test.equal(fmt.format(["один", "два"]), "один два");
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
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
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
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
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
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    },

    // ru-KG
    testListFmtruKGNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtruKGNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtruKGNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один, два и три");
        test.done();
    },
    
    testListFmtruKGNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один, два, три и четыре");
        test.done();
    },

    // ru-KZ
    testListFmtUnitStyleruKZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один два");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один два");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
        test.done();
    },
    
    testListFmtUnitStyleruKZNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "ru-KZ",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    },
    // ru-GE
    testListFmtruGENumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtruGENumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtruGENumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один, два и три");
        test.done();
    },
    
    testListFmtruGENumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один, два, три и четыре");
        test.done();
    },
    testListFmtruGENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtruGENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtruGENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один, два и три");
        test.done();
    },
    
    testListFmtruGENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-GE",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один, два, три и четыре");
        test.done();
    },
    // ru-UA
    testListFmtruUANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtruUANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один и два");
        test.done();
    },
    
    testListFmtruUANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один, два и три");
        test.done();
    },
    
    testListFmtruUANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один, два, три и четыре");
        test.done();
    },
    testListFmtUnitStyleruUANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один два");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один"]), "один");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два"]), "один два");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три"]), "один два три");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре"]), "один два три четыре");
        test.done();
    },
    
    testListFmtUnitStyleruUANumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ru-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["один", "два", "три", "четыре", "пять"]), "один два три четыре пять");
        test.done();
    }
};
