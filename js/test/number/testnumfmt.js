/*
 * testnumfmt.js - test the number formatter object
 *
 * Copyright © 2012-2018, 2020-2024 JEDLSoft
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

if (typeof(NumFmt) === "undefined") {
    var NumFmt = require("../../lib/NumFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testnumfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testNumFmtConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new NumFmt();

        test.ok(fmt);
        test.done();
    },
    testNumFmtDefaults: function(test) {
        test.expect(7);
        var fmt = new NumFmt();

        test.ok(fmt);
        test.equal(fmt.getType(), "number");
        test.equal(fmt.getMaxFractionDigits(), -1);
        test.equal(fmt.getMinFractionDigits(), -1);
        test.ok(fmt.isGroupingUsed());
        test.equal(fmt.getRoundingMode(), "halfdown");
        test.ok(typeof(fmt.getCurrency()) === "undefined");
        test.done();
    },
    testNumFmtNumberFormatSimple: function(test) {
        test.expect(2);
        var fmt = new NumFmt();

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1.745");
        test.done();
    },
    testNumFmtNumberFormatUndefined: function(test) {
        test.expect(2);
        var fmt = new NumFmt();

        test.ok(fmt);
        test.equal(fmt.format(), "");
        test.done();
    },
    testNumFmtNumberFormatSimpleNeg: function(test) {
        test.expect(2);
        var fmt = new NumFmt();

        test.ok(fmt);
        test.equal(fmt.format(-1.745), "-1.745");
        test.done();
    },
    testNumFmtNumberFormatNoFractionalLimit: function(test) {
        test.expect(2);
        var fmt = new NumFmt();

        test.ok(fmt);
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(1.012345678901234), "1.012345678901234");
        test.done();
    },
    testNumFmtNumberFormatNoIntegralLimit: function(test) {
        test.expect(2);
        var fmt = new NumFmt();

        test.ok(fmt);
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(12345678901234.0), "12,345,678,901,234");
        test.done();
    },
    testNumFmtNumberFormatWithMaxFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(1.7453), "1.75");
        test.done();
    },
    testNumFmtNumberFormatWithMinFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 4
        });

        test.ok(fmt);
        test.equal(fmt.format(1.75), "1.7500");
        test.done();
    },
    testNumFmtNumberFormatWithMinFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: -5
        });

        test.ok(fmt);
        // lower bound is 0
        test.equal(fmt.format(1.75), "1.75");
        test.done();
    },
    testNumFmtNumberFormatWithMinFracDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: -5
        });

        test.ok(fmt);
        // lower bound is 0
        test.equal(fmt.format(17500), "17,500");
        test.done();
    },
    testNumFmtNumberFormatWithMinFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 25
        });

        test.ok(fmt);
        // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
        test.equal(fmt.format(1.012345678901234567890123456789), "1.01234567890123460000");
        test.done();
    },
    testNumFmtNumberFormatWithMinAndMaxFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });

        test.ok(fmt);
        test.equal(fmt.format(1.7), "1.700");
        test.done();
    },
    testNumFmtNumberFormatWithMinAndMaxFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });

        test.ok(fmt);
        test.equal(fmt.format(1.76543298765), "1.765433");
        test.done();
    },
    testNumFmtNumberFormatWithMinAndMaxFracDigitsJustRight: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });

        test.ok(fmt);
        test.equal(fmt.format(1.76543), "1.76543");
        test.done();
    },
    testNumFmtNumberGetMaxFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.getMaxFractionDigits(), 2);
        test.done();
    },
    testNumFmtGetMinFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 4
        });

        test.ok(fmt);
        test.equal(fmt.getMinFractionDigits(), 4);
        test.done();
    },
    testNumFmtNumberStyleStandard: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        test.equal(fmt.format(2345678901234567.0), "2,345,678,901,234,567");
        test.done();
    },
    testNumFmtNumberFormatStandardWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.4), "123,456,789.4");
        test.done();
    },
    testNumFmtNumberFormatWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456789.4), "-123,456,789.4");
        test.done();
    },
    testNumFmtNumberStyleScientific: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345678901234567890123456789.0), "1.2345678901234568E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific"
        });

        test.ok(fmt);
        test.equal(fmt.format(0.000001234567890123456), "1.234567890123456E-6");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMaxFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5
        });

        test.ok(fmt);
        test.equal(fmt.format(12345678901234567890123456789.0), "1.23457E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificSmallWithMaxFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5
        });

        test.ok(fmt);
        test.equal(fmt.format(0.0000012345678901234567890123456789), "1.23457E-6");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            minFractionDigits: 5
        });

        test.ok(fmt);
        test.equal(fmt.format(12340000000000000000000000000.0), "1.23400E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            minFractionDigits: 1
        });

        test.ok(fmt);
        // min of 1 means we can have more digits than one!
        test.equal(fmt.format(12345678900000000000000000000.0), "1.23456789E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMinFractionDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            minFractionDigits: -2
        });

        test.ok(fmt);
        test.equal(fmt.format(123400000000000000000.0), "1.234E+20");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMinFractionDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            minFractionDigits: -2
        });

        test.ok(fmt);
        test.equal(fmt.format(10000000000000000000000000000.0), "1E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMinFractionDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            minFractionDigits: 25
        });

        test.ok(fmt);
        // max is 20
        test.equal(fmt.format(12340000000000000000000000000.0), "1.23400000000000000000E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMaxAndRoundUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5,
            roundingMode: "up"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345678901234567890123456789.0), "1.23457E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMaxAndRoundDown: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5,
            roundingMode: "down"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345678901234567890123456789.0), "1.23456E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMaxAndRoundHalfDown: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 3,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345000000000000000000000000.0), "1.234E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificSmallWithMaxAndRoundHalfDown: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 3,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(0.0000012345), "1.234E-6");
        test.done();
    },
    testNumFmtNumberStyleScientificWithMaxAndRoundHalfUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 3,
            roundingMode: "halfup"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345000000000000000000000000.0), "1.235E+28");
        test.done();
    },
    testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5,
            minFractionDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(0.0000012), "1.200E-6");
        test.done();
    },
    testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5,
            minFractionDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(0.00000123456789), "1.23457E-6");
        test.done();
    },
    testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsJustRight: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
            maxFractionDigits: 5,
            minFractionDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(0.0000012345), "1.2345E-6");
        test.done();
    },
    testNumFmtNumberStyleNogroupingInteger: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "nogrouping"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789), "123456789");
        test.done();
    },
    testNumFmtNumberStyleNogroupingFloat: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "nogrouping"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.345345), "123456789.345345");
        test.done();
    },
    testNumFmtNumberStyleNogroupingWithLocale: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fa-IR",
            style: "nogrouping",
            useNative: false
        });

        test.ok(fmt);
        test.equal(fmt.format(2014), "2014");
        test.done();
    },
    testNumFmtNumberStyleNogroupingWithNative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fa-IR",
            style: "nogrouping",
            useNative: true
        });

        test.ok(fmt);
        test.equal(fmt.format(1393), "۱۳۹۳");
        test.done();
    },
    testNumFmtNumberStyleNogroupingWithMaxFrac: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "nogrouping",
            maxFractionDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.345945345), "123456789.346");
        test.done();
    },
    testNumFmtNumberFormatRoundingCeiling: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "ceiling"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.74475), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingCeilingNeg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "ceiling"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.74475), "-1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingDown: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "down"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.74475), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingDownNeg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "down"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.74475), "-1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingFloor: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "floor"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.74475), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingFloorNeg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "floor"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.74475), "-1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "up"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.74475), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingUpNeg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "up"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.74475), "-1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfdownReg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.746), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfdownAtHalf: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfdownNegReg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.746), "-1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfdownNegAtHalf: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.745), "-1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdownLessThan5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.743), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdown5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdownMoreThan5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        // still round to the even neighbour
        test.equal(fmt.format(1.747), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdownExactly5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        // no rounding
        test.equal(fmt.format(1.75), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdownLessThan5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.753), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdown5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.755), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundinghalfdownMoreThan5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfdown"
        });

        test.ok(fmt);
        // still round to the even neighbour
        test.equal(fmt.format(1.757), "1.76");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfoddLessThan5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.743), "1.74");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfodd5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfoddMoreThan5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        // still round to the odd neighbour
        test.equal(fmt.format(1.747), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfoddExactly5: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        // no rounding
        test.equal(fmt.format(1.75), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfoddLessThan5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.753), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfodd5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.755), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfoddMoreThan5Up: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfodd"
        });

        test.ok(fmt);
        // still round to the odd neighbour
        test.equal(fmt.format(1.757), "1.76");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfupReg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfup"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.746), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfupAtHalf: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfup"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfupNegReg: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfup"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.746), "-1.75");
        test.done();
    },
    testNumFmtNumberFormatRoundingHalfupNegAtHalf: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            maxFractionDigits: 2,
            roundingMode: "halfup"
        });

        test.ok(fmt);
        test.equal(fmt.format(-1.745), "-1.75");
        test.done();
    },
    testNumFmtNumberStyleStringArgument: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        // should work with string arguments
        test.equal(fmt.format("2345678901234567.0"), "2,345,678,901,234,567");
        test.done();
    },
    testNumFmtNumberStyleNumberObjectArgument: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        // should work with a number object
        test.equal(fmt.format(new Number(2345678901234567.0)), "2,345,678,901,234,567");
        test.done();
    },
    testNumFmtNumberStyleIlibNumberObjectArgument: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "standard"
        });

        test.ok(fmt);
        // should work with a number object
        test.equal(fmt.format(new Number(2345678901234567.0)), "2,345,678,901,234,567");
        test.done();
    },
    testNumFmtGetUseNativeDefaultFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US"
        });

        test.ok(fmt);
        test.ok(!fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeDefaultTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN"
        });

        test.ok(fmt);
        test.ok(fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeHasNativeButFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN"
        });

        test.ok(fmt);
        // Tamil does have native digits, but they are not frequently used
        test.ok(!fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeHasNativeButFalse_OR_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN"
        });

        test.ok(fmt);
        // Oriya does have native digits, but they are not frequently used
        test.ok(!fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeOverrideTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US",
            useNative: true
        });

        test.ok(fmt);
        test.ok(fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeExplicitTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN",
            useNative: true
        });

        test.ok(fmt);
        test.ok(fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeExplicitFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US",
            useNative: false
        });

        test.ok(fmt);
        test.ok(!fmt.getUseNative());
        test.done();
    },
    testNumFmtGetUseNativeOverrideFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN",
            useNative: false
        });

        test.ok(fmt);
        test.ok(!fmt.getUseNative());
        test.done();
    },
    testNumFmtFormatWesternDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US"
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatWesternOverrideNative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US",
            useNative: true
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatNativeDefaultTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN"
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "১২৩.৪৫৬");
        test.done();
    },
    testNumFmtFormatNativeDefaultFalse_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN"
        });

        test.ok(fmt);
        // oriya has native digits, but they are not used by default
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatNativeDefaultFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN"
        });

        test.ok(fmt);
        // Tamil has native digits, but they are not used by default
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatNativeExplicitTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN",
            useNative: true
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "১২৩.৪৫৬");
        test.done();
    },
    testNumFmtFormatNativeExplicitFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN",
            useNative: false
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatNativeExplicitTrue2: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN",
            useNative: true
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "௧௨௩.௪௫௬");
        test.done();
    },
    testNumFmtFormatNativeExplicitTrue2_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN",
            useNative: true
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "୧୨୩.୪୫୬");
        test.done();
    },
    testNumFmtFormatNativeExplicitFalse2: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN",
            useNative: false
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtFormatNativeExplicitFalse2_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN",
            useNative: false
        });

        test.ok(fmt);
        test.equal(fmt.format(123.456), "123.456");
        test.done();
    },
    testNumFmtNumberFormatDESimple: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1,745");
        test.done();
    },
    testNumFmtDEIsGroupingUsed: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.ok(fmt.isGroupingUsed());
        test.done();
    },
    testNumFmtNumberFormatDEWithThousands: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.equal(fmt.format(1234567.745), "1.234.567,745");
        test.done();
    },
    testNumFmtNumberFormatDEWithThousandsWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.4), "123.456.789,4");
        test.done();
    },
    testNumFmtNumberFormatDEWithThousandsWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456789.4), "-123.456.789,4");
        test.done();
    },
    testNumFmtNumberFormatFRSimple: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1,745");
        test.done();
    },
    testNumFmtNumberFormatFRWithThousands: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR"
        });

        test.ok(fmt);
        test.equal(fmt.format(1234567.745), "1 234 567,745");
        test.done();
    },
    testNumFmtNumberFormatDESimple: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE"
        });

        test.ok(fmt);
        test.equal(fmt.format(1.745), "1,745");
        test.done();
    },
    testNumFmtPercentageFormatRegular: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtPercentageGetType: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.getType(), "percentage");
        test.done();
    },
    testNumFmtPercentageFormatWithDecimal: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtPercentageFormatWithDecimalAndRounding: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "percentage",
            maxFractionDigits: 1
        });

        test.ok(fmt);
        test.equal(fmt.format(57.789), "57.8%");
        test.done();
    },
    testNumFmtPercentageFormatDERegular: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    testNumFmtPercentageFormatDEWithDecimal: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtPercentageFormatDEWithDecimalAndRounding: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE",
            type: "percentage",
            maxFractionDigits: 1
        });

        test.ok(fmt);
        test.equal(fmt.format(57.789), "57,8 %");
        test.done();
    },
    testNumFmtCurrencyFormatDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.05), "$57.05");
        test.done();
    },
    testNumFmtCurrencyFormatZeroCents: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57), "$57.00");
        test.done();
    },
    testNumFmtCurrencyGetType: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.getType(), "currency");
        test.done();
    },
    testNumFmtCurrencyGetStyleDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.getStyle(), "common");
        test.done();
    },
    testNumFmtCurrencyFormatDefaultRounding: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.3467), "$57.35");
        test.done();
    },
    testNumFmtCurrencyFormatOverrideMinFraction: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            minFractionDigits: 5,
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.346), "$57.34600");
        test.done();
    },
    testNumFmtCurrencyFormatOverrideMaxFraction: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            maxFractionDigits: 0,
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.3467), "$57");
        test.done();
    },
    testNumFmtCurrencyFormatOverrideMinAndMaxFraction: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            minFractionDigits: 3,
            maxFractionDigits: 3,
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.3467), "$57.347");
        test.done();
    },
    testNumFmtCurrencyFormatOverrideMinAndMaxFractionWonky: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            minFractionDigits: 4,
            maxFractionDigits: 3,
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.3467), "$57.347");
        test.done();
    },
    testNumFmtCurrencyFormatAlternateStyle: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            style: "iso",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.35), "USD57.35");
        test.done();
    },
    testNumFmtCurrencyFormatOtherCurrency: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.35), "€57.35");
        test.done();
    },
    testNumFmtCurrencyFormatOtherCurrencyIsoStyle: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "EUR",
            style: "iso"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.35), "EUR57.35");
        test.done();
    },
    testNumFmtCurrencyGetDefaultFractionDigits: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.getMaxFractionDigits(), 2);
        test.equal(fmt.getMinFractionDigits(), 2);
        test.done();
    },
    testNumFmtCurrencyGetFractionDigitsOtherCurrency: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            currency: "JPY"  // Japanese yen
        });

        test.ok(fmt);
        test.equal(fmt.getMaxFractionDigits(), 0);
        test.equal(fmt.getMinFractionDigits(), 0);
        test.done();
    },
    testNumFmtCurrencyFormatOtherCurrencyUseDefaultDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "JPY"  // japanese yen use 0 fraction digits
        });

        test.ok(fmt);
        test.equal(fmt.format(345.3), "¥345");
        test.done();
    },
    testNumFmtCurrencyNoCurrencyDefaultForLocale: function(test) {
        var fmt;

        try {
            fmt = new NumFmt({
                type: "currency",
                locale: "ja-JP"
            });

            test.fail();
        } catch (e) {
            test.ok(typeof(fmt) === "undefined");
            test.equal(e, "A currency property is required in the options to the number formatter constructor when the type property is set to currency.");
        }
        test.done();
    },
    testNumFmtCurrencyUseCorrectFractionDigitsForLocale: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ja-JP",
            currency: "JPY"
        });

        test.ok(fmt);
        test.equal(fmt.getMaxFractionDigits(), 0);
        test.equal(fmt.getMinFractionDigits(), 0);
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ja-JP",
            currency: "JPY"
        });

        test.ok(fmt);
        test.equal(fmt.format(345.3), "¥345");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fr-CA",
            currency: "CAD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100000.00), "100 000,00 $");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fr-CA",
            currency: "CAD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 $");
        test.done();
    },
    testNumFmtCurrencyUseCorrectRoundingModeForLocale: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "zxx-XX",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.getRoundingMode(), "halfdown");
        test.done();
    },
    testNumFmtJAIsGroupingUsed: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP"
        });

        test.ok(fmt);
        test.ok(fmt.isGroupingUsed());
        test.done();
    },
    testNumFmtNumberFormatJAWithThousandsWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.4), "123,456,789.4");
        test.done();
    },
    testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP"
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456789.4), "-123,456,789.4");
        test.done();
    },
    testNumFmtNumberFormatJAWithThousandsWithMultiGroupsja: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja"
        });

        test.ok(fmt);
        test.equal(fmt.format(123456789.4), "123,456,789.4");
        test.done();
    },
    testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegativeja: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja"
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456789.4), "-123,456,789.4");
        test.done();
    },
    testNumFmtNumberFormatJALessThanOne: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP"
        });

        test.ok(fmt);
        test.equal(fmt.format(0.7), "0.7");
        test.done();
    },
    testNumFmtNumberFormatJALessThanOneNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP"
        });

        test.ok(fmt);
        test.equal(fmt.format(-0.7), "-0.7");
        test.done();
    },
    // test all of tier 1 locales and a number of the tier 2 and lower locales
    testNumFmtzhCN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-CN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtenIN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-1,23,456.78");
        test.done();
    },
    testNumFmtasIN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "as-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-১,২৩,৪৫৬.৭৮");
        test.done();
    },
    /***************** test cases written by Birendra 3/6/2013 *******************************************/
    //test acses for hi-IN
    testNumFmthi_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "hi-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-112345613232.785), "-1,12,34,56,13,232.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_hi_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "hi-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_hi_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "hi-IN",
            useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹१,००,११०.५७");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_hi_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "hi-IN",
            useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹१,००,११०.५७");
        test.done();
    },
    //test cases for bn-IN

    testNumFmtbn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bn-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-112345613232.785), "-১,১২,৩৪,৫৬,১৩,২৩২.৭৮");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_bn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "bn-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), '₹১,০০,১১০.৫৭');
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_bn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "bn-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), '₹১,০০,১১০.৫৭');
        test.done();
    },
    testNumFmtPercentageFormatRegular_bn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "bn-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "৫৭.৮%");
        test.done();
    },
    //test cases for mr-IN

    testNumFmt_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "mr-IN",
            useNative: false,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "mr-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-१२,३४,५६८.७८");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_mr_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "mr-IN",
            useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹१,००,११०.५७");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "mr-IN",
            useNative: false,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCorrectCurrencyForLocale_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "mr-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹१,००,११०.५७");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "mr-IN",
            useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹१,००,११०.५७");
        test.done();
    },
    testNumFmtPercentageFormatRegular_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "mr-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "५७.८%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_mr_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "mr-IN",
        useNative: false,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for kn-IN

    testNumFmt_kn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "kn-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-1,234,568.78");
        test.done();
    },
    testNumFmtNative_kn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "kn-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-೧,೨೩೪,೫೬೮.೭೮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_kn_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "kn-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹೧೦೦,೧೧೦.೫೭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_kn_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "kn-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹೧೦೦,೧೧೦.೫೭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_kn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "kn-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_kn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "kn-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "೫೭.೮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_kn_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "kn-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for gu-IN

    testNumFmt_gu_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "gu-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_gu_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "gu-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-૧૨,૩૪,૫૬૮.૭૮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_gu_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "gu-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹૧,૦૦,૧૧૦.૫૭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_gu_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "gu-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹૧,૦૦,૧૧૦.૫૭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_gu_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "gu-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_gu_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "gu-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "૫૭.૮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_gu_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "gu-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for ta-IN

    testNumFmt_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ta-IN",
            useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-௧௨,௩௪,௫௬௮.௭௮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_ta_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ta-IN",
            useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹௧,௦௦,௧௧௦.௫௭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ta_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ta-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹௧,௦௦,௧௧௦.௫௭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ta-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ta-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ta-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "௫௭.௮%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ta-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-௫௭.௮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ta-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtPercentageNativeFormatNegative_ta_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ta-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57.8%");
        test.done();
    },
    //test cases for or-IN

    testNumFmt_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "or-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-୧୨,୩୪,୫୬୮.୭୮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_or_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "or-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹୧,୦୦,୧୧୦.୫୭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_or_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "or-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹୧,୦୦,୧୧୦.୫୭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "or-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "or-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "୫୭.୮%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "or-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-୫୭.୮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "or-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtPercentageNativeFormatNegative_or_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "or-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57.8%");
        test.done();
    },
    //test cases for ha-Latn-NG

    testNumFmt_ha_Latn_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ha-Latn-NG",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-1,234,568.78");
        test.done();
    },
    testNumFmtCurrencyFormatCurrencyForLocale_ha_Latn_NG1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ha-Latn-NG",
            currency: "NGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₦ 100,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeCurrencyForLocale_ha_Latn_NG1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ha-Latn-NG",
            currency: "NGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₦ 100,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ha_Latn_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ha-Latn-NG",
            currency: "NGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₦ 100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ha_Latn_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ha-Latn-NG",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test acses for ml-IN

    testNumFmt_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ml-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ml-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-൧൨,൩൪,൫൬൮.൭൮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_ml_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ml-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹൧,൦൦,൧൧൦.൫൭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ml_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ml-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹൧,൦൦,൧൧൦.൫൭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ml-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ml-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "൫൭.൮%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ml-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-൫൭.൮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_ml_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ml-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for te-IN

    testNumFmt_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "te-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "te-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-౧౨,౩౪,౫౬౮.౭౮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_te_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "te-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹౧,౦౦,౧౧౦.౫౭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_te_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "te-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹౧,౦౦,౧౧౦.౫౭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "te-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "te-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "te-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "౫౭.౮%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "te-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-౫౭.౮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "te-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtPercentageNativeFormatNegative_te_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "te-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57.8%");
        test.done();
    },
    //test cases for pa-IN

    testNumFmt_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pa-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-12,34,568.78");
        test.done();
    },
    testNumFmtNative_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pa-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-੧੨,੩੪,੫੬੮.੭੮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_pa_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pa-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹੧,੦੦,੧੧੦.੫੭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_pa_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pa-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹੧,੦੦,੧੧੦.੫੭");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pa-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pa-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹1,00,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pa-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "੫੭.੮%");
        test.done();
    },
    testNumFmtPercentageFormatRegular_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pa-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-੫੭.੮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pa-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_pa_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pa-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57.8%");
        test.done();
    },
    //test cases for ur-IN

    testNumFmt_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ur-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "‎-‎۱٬۲۳۴٬۵۶۸٫۷۸");
        test.done();
    },
    testNumFmtNative_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ur-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "‎-‎۱٬۲۳۴٬۵۶۸٫۷۸");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_ur_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ur-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹ ۱۰۰٬۱۱۰٫۵۷");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ur_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ur-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "‎-‎₹ ۱۰۰٬۱۱۰٫۵۷");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ur-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹ ۱۰۰٬۱۱۰٫۵۷");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ur-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "۵۷٫۸%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ur-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "‎-‎۵۷٫۸%");
        test.done();
    },
    testNumFmtPercentageNativeFormatNegative_ur_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ur-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "۵۷٫۸%");
        test.done();
    },
    //test cases for as-IN


    testNumFmt_as_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "as-IN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-১২,৩৪,৫৬৮.৭৮");
        test.done();
    },
    testNumFmtNative_as_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "as-IN",
        useNative: true,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-১২,৩৪,৫৬৮.৭৮");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_as_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "as-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹ ১,০০,১১০.৫৭");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_as_IN1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "as-IN",
        useNative: true,
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₹ ১,০০,১১০.৫৭");
        test.done();
    },
    testNumFmtPercentageFormatRegular_as_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "as-IN",
        useNative: true,
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "৫৭.৮%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_as_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "as-IN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "৫৭.৮%");
        test.done();
    },
    //test cases for en-US
    testNumFmt_en_US: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-US",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_US: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-US",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_US: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-US",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for en-GB

    testNumFmtenGB: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-GB",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_GB: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-GB",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_GB: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-GB",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for ko-KR

    testNumFmtko_KR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ko-KR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocaleko_KR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ko-KR",
            currency: "KRW",
        maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₩100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ko_KR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ko-KR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for zh-Hans-CN
    testNumFmt_zh_Hans_CN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-Hans-CN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hans_CN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "zh-Hans-CN",
            currency: "CNY"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "¥100,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_zh_Hans_CN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "zh-Hans-CN",
            currency: "CNY"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-¥100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_zh_Hans_CN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "zh-Hans-CN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtPercentageFormatNegativeRegular_zh_Hans_CN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "zh-Hans-CN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.0), "-57%");
        test.done();
    },
    //test cases for honk-kong

    testNumFmt_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-Hant-HK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "zh-Hant-HK",
            style: "iso",
            currency: "HKD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "HKD100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-Hant-HK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //zh-Hank-TW

    testNumFmt_zh_Hant_TW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-Hant-TW",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hant_TW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "zh-Hant-TW",
            style: "iso",
            currency: "TWD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "TWD100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_zh_Hant_TW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "zh-Hant-TW",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for fr-FR
    testNumFmt_fr_FR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), '-123 456,78');
        test.done();
    },
    testNumFmt_fr_FR1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_fr_FR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fr-FR",
            currency: "CAD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 $");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_fr_FR1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fr-FR",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_fr_FR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    //test cases for pt-BR
    testNumFmt_pt_BR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pt-BR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtPercentageFormatRegular_pt_BR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pt-BR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.21), "57,21%");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_pt_BR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pt-BR",
            currency: "BRL"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "R$ 100.110,57");
        test.done();
    },
    //test cases for pt-PT
    testNumFmt_pt_PT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pt-PT",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_pt_PT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pt-PT",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_pt_PT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pt-PT",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for es-ES
    testNumFmt_es_ES: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-ES",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_ES: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-ES",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_ES: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-ES",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    //test cases for es-CO
    testNumFmt_es_CO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-CO",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_CO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-CO",
            currency: "COP"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$ 100.110,57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_CO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-CO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for ja-JP
    testNumFmt_ja_JP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ja_JP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ja-JP",
            currency: "JPY"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "¥100,111");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ja_JP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ja-JP",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for itIT
    testNumFmt_it_IT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "it-IT",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_it_IT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "it-IT",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_it_IT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "it-IT",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for sv-SE
    testNumFmt_sv_SE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "sv-SE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "−123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_sv_SE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "sv-SE",
            currency: "SEK"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 kr");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_sv_SE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "sv-SE",
            currency: "SEK"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "−100 110,57 kr");
        test.done();
    },
    testNumFmtPercentageFormatRegular_sv_SE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "sv-SE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_sv_SE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "sv-SE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.0), "−57 %");
        test.done();
    },
    //test cases for fi-FI
    testNumFmt_fi_FI: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fi-FI",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "−123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_fi_FI: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fi-FI",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_fi_FI: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fi-FI",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "−100 110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_fi_FI: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fi-FI",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_fi_FI: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fi-FI",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.0), "−57 %");
        test.done();
    },
    //test cases for cs-CZ
    testNumFmt_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "cs-CZ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "cs-CZ",
            currency: "CZK"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 Kč");
        test.done();
    },
    testNumFmtPercentageFormatRegular_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "cs-CZ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    //test cases for el-GR
    testNumFmt_el_GR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "el-GR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_el_GR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "el-GR",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_el_GR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "el-GR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for hu-HU
    testNumFmt_hu_Hu: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "hu-HU",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_hu_Hu: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "hu-HU",
            currency: "HUF"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 Ft");
        test.done();
    },
    testNumFmtPercentageFormatRegular_hu_HU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "hu-HU",
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for nl_NL
    testNumFmt_nl_NL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "nl-NL",
            maxFractionDigits: 2
        });
        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_nl_NL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "nl-NL",
            currency: "XCG"
        });
        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Cg. 100.110,57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_nl_NL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "nl-NL",
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for pl_PL
    testNumFmt_pl_PL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pl-PL",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_pl_PL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pl-PL",
            currency: "PLN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 zł");
        test.done();
    },
    testNumFmtPercentageFormatRegular_pl_PL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "pl-PL",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    //test cases for da-DK
    testNumFmt_da_DK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "da-DK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_da_DK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "da-DK",
            currency: "DKK"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 kr");
        test.done();
    },
    testNumFmtPercentageFormatRegular_da_DK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "da-DK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    //test cases for ro_RO
    testNumFmt_ro_RO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ro-RO",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ro_RO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ro-RO",
            currency: "RON"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 lei");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_ro_RO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ro-RO",
            currency: "RON"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100.110,57 lei");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ro_RO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ro-RO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_ro_RO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ro-RO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.0), "-57 %");
        test.done();
    },
    //test cases for en-IN
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹1,00,110.57");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_as_IN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "as-IN",
            currency: "INR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₹ ১,০০,১১০.৫৭");
        test.done();
    },
    //test cases for ar-SA
    testNumFmt_ar_SA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ar-SA",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), '؜-١٢٣٬٤٥٦٫٧٨');
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ar_SA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ar-SA",
            currency: "SAR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), '‏١٠٠٬١١٠٫٥٧ ر.س');
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_ar_SA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ar-SA",
            currency: "SAR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), '؜-‏١٠٠٬١١٠٫٥٧ ر.س');
        test.done();
    },
    testNumFmtPercentageFormatRegular_ar_SA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ar-SA",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "٥٧٫٨٪؜");
        test.done();
    },
    testNumFmtPercentageFormatNegative_ar_SA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ar-SA",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "؜-٥٧٫٨٪؜" );
        test.done();
    },
    //test cases for bg-BG
    testNumFmt_bg_BG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bg-BG",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_bg_BG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "bg-BG",
            currency: "BGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 лв");
        test.done();
    },
    testNumFmtPercentageFormatRegular_bg_BG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bg-BG",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    //test cases for bs-Latn-BA
    testNumFmt_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "bs-Latn-BA",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "bs-Latn-BA",
            currency: "BAM"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 KM");
        test.done();
    },
    testNumFmtPercentageFormatRegular_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "bs-Latn-BA",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "bs-Latn-BA",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57,8%");
        test.done();
    },
    //test cases for de-DE
    testNumFmt_de_DE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_de_DE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "de-DE",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_de_DE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "de-DE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_de_DE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "de-DE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57,8 %");
        test.done();
    },
    //test cases for et-EE
    testNumFmt_et_EE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "et-EE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "−111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_et_EE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "et-EE",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "cs-CZ",
            currency: "CZK"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100 110,57 Kč");
        test.done();
    },
    testNumFmtPercentageFormatRegular_et_EE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "et-EE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    testNumFmtPercentageFormatNegative_et_EE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "et-EE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "−57,8%");
        test.done();
    },
    //test cases for fa-IR
    testNumFmt_fa_IR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fa-IR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "‎−۱۱۱٬۱۲۳٬۴۵۶٫۷۸");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_fa_IR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fa-IR",
            currency: "IRR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "‎﷼۱۰۰٬۱۱۱");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_fa_IR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "fa-IR",
            currency: "IRR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "‎−‎﷼۱۰۰٬۱۱۱");
        test.done();
    },
    testNumFmtPercentageFormatRegular_fa_IR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fa-IR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "۵۷٫۸٪");
        test.done();
    },
    testNumFmtPercentageFormatNegative_fa_IR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fa-IR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "‎−۵۷٫۸٪");
        test.done();
    },
    //test cases for ga-IE
    testNumFmt_ga_IE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ga-IE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ga_IE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ga-IE",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "€100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ga_IE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ga-IE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for he-IL
    testNumFmt_he_IL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "he-IL",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "‎-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_he_IL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "he-IL",
            currency: "ILS"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), '‏100,110.57 ‏₪');
        test.done();
    },
    testNumFmtPercentageFormatRegular_he_IL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "he-IL",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for hr-HR
    testNumFmt_hr_HR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "hr-HR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "−111.123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_hr_HR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "hr-HR",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_hr_HR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "hr-HR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    //test cases for id-ID
    testNumFmt_id_ID: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "id-ID",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111.123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_id_ID: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "id-ID",
            currency: "IDR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rp100.110,57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_id_ID: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "id-ID",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    //test cases for kk-Cyrl-KZ
    testNumFmt_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "kk-Cyrl-KZ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "kk-Cyrl-KZ",
            currency: "KZT"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 ₸");
        test.done();
    },
    testNumFmtPercentageFormatRegular_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "kk-Cyrl-KZ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    //test cases for lt-LT
    testNumFmt_lt_LT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "lt-LT",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "−111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_lt_LT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "lt-LT",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_lt_LT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "lt-LT",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "−100 110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_lt_LT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "lt-LT",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_lt_LT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "lt-LT",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "−57,8 %");
        test.done();
    },
    //test cases for lv-LV
    testNumFmt_lv_LV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "lv-LV",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_lv_LV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "lv-LV",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 €");
        test.done();
    },
    testNumFmtPercentageFormatRegular_lv_LV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "lv-LV",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    //test cases for mk-MK
    testNumFmt_mk_MK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "mk-MK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111.123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_mk_MK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "mk-MK",
            currency: "MKD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100.110,57 ден");
        test.done();
    },
    testNumFmtPercentageFormatRegular_mk_MK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "mk-MK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    //test cases for ms-MY
    testNumFmt_ms_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ms-MY",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ms_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ms-MY",
            currency: "MNT"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₮100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ms_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "ms-MY",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    //test cases for nb-NO
    testNumFmt_nb_NO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "nb-NO",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "−111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_nb_NO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "nb-NO",
            currency: "NOK"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 kr");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_nb_NO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "nb-NO",
            currency: "NOK"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100 110,57 kr");
        test.done();
    },
    testNumFmtPercentageFormatRegular_nb_NO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "nb-NO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_nb_NO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "nb-NO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "−57,8 %");
        test.done();
    },
    //test cases for ru-RU
    testNumFmtruRU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ru-RU",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ru_RU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ru-RU",
            currency: "RUB"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100 110,57 ₽");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_ru_RU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ru-RU",
            currency: "RUB"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100 110,57 ₽");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ru_RU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ru-RU",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtPercentageFormatNegative_ru_RU: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ru-RU",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-57,8 %");
        test.done();
    },
    //test cases for negative currency
    testNumFmtNegativeCurrencyFormatForLocale_nl_NL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "nl-NL",
            currency: "XCG"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "Cg. -100.110,57");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_pl_PL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pl-PL",
            currency: "PLN"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100 110,57 zł");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_US: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-US",
            currency: "USD"
        });

        test.ok(fmt);
         test.equal(fmt.format(-100110.57), "-$100,110.57");
         test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_et_EE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "et-EE",
            currency: "EUR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "−100 110,57 €");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_ko_KR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ko-KR",
            currency: "KRW",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₩100,110.57");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_ms_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ms-MY",
            currency: "MNT"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₮100,110.57");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_pt_BR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "pt-BR",
            currency: "BRL"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-R$ 100.110,57");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_EC: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-EC",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "$-100.110,57");
        test.done();
    },
    //test cases for en-SL

    testNumFmt_en_SL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-SL",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SL",
            currency: "SLE"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "SLE100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_SL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-SL",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_SL: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SL",
            currency: "SLE"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-SLE100,110.57");
        test.done();
    },
    //test cases for en-SG


    testNumFmt_en_SG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-SG",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SG",
            currency: "SGD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_SG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-SG",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_SG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SG",
            currency: "SGD"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    //test caes for en-ZA
    testNumFmt_en_ZA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-ZA",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_ZA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-ZA",
            currency: "ZAR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "R100 110,57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_ZA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-ZA",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_ZA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-ZA",
            currency: "ZAR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-R100 110,57");
        test.done();
    },
    //test cases for en-MY

    testNumFmt_en_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-MY",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-MY",
            currency: "MYR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "RM100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-MY",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_MY: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-MY",
            currency: "MYR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-RM100,110.57");
        test.done();
    },
    //test cases for en-MM

    testNumFmt_en_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-MM",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-MM",
            currency: "MMK"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "K100,111");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-MM",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-MM",
            currency: "MMK"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-K100,111");
        test.done();
    },
    //test cases for en-NZ

    testNumFmt_en_NZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-NZ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_NZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-NZ",
            currency: "NZD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_NZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-NZ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_NZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-NZ",
            currency: "NZD"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    //test cases for en-NG
    testNumFmt_en_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-NG",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-NG",
            currency: "NGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₦100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-NG",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_NG: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-NG",
            currency: "NGN"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₦100,110.57");
        test.done();
    },
    //test cases for en-PK

    testNumFmt_en_PK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-PK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PK",
            currency: "PKR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rs100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_PK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-PK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_PK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PK",
            currency: "PKR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Rs100,110.57");
        test.done();
    },
    //test cases for en-PH

    testNumFmt_en_PH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-PH",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PH",
            currency: "PHP"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₱100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_PH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-PH",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_PH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PH",
            currency: "PHP"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₱100,110.57");
        test.done();
    },
    //test cases for en-PR

    testNumFmt_en_PR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-PR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PR",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_PR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-PR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_PR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-PR",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    //test cases for en-RW
    testNumFmt_en_RW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-RW",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_RW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-RW",
            currency: "RWF"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "RF100,111");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_RW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-RW",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_RW: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-RW",
            currency: "RWF"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-RF100,111");
        test.done();
    },
    //test cases for en-LK

    testNumFmt_en_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-LK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-LK",
            currency: "LKR"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rs100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-LK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-LK",
            currency: "LKR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Rs100,110.57");
        test.done();
    },
    //test cases for en-SD

    testNumFmt_en_SD: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-SD",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SD: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SD",
            currency: "SDG"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "£100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_SD: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-SD",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_SD: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-SD",
            currency: "SDG"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-£100,110.57");
        test.done();
    },
    //test cases for en-TZ

    testNumFmt_en_TZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-TZ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_TZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-TZ",
            currency: "TZS"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Sh100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_en_TZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "en-TZ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_en_TZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "en-TZ",
            currency: "TZS"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Sh100,110.57");
        test.done();
    },
    //test cases for es-CR

    testNumFmt_es_CR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-CR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111 123 456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_CR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-CR",
            currency: "CRC"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "₡100 110,57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_CR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-CR",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_CR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-CR",
            currency: "CRC"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-₡100 110,57");
        test.done();
    },
    //test cases for es-DO

    testNumFmt_es_DO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-DO",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_DO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-DO",
            currency: "DOP"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_DO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-DO",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_DO: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-DO",
            currency: "DOP"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    //test cases for es-SV

    testNumFmt_es_SV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-SV",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_SV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-SV",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_SV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-SV",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_SV: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-SV",
            currency: "USD"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    //test cases for es-GQ

    testNumFmt_es_GQ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-GQ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111.123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_GQ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-GQ",
            currency: "XAF"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Fr100.111");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_GQ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-GQ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57,8 %");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_GQ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-GQ",
            currency: "XAF"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Fr100.111");
        test.done();
    },
    //test cases for es-GT

    testNumFmt_es_GT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-GT",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_GT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-GT",
            currency: "GTQ"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Q100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_GT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-GT",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_GT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-GT",
            currency: "GTQ"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Q100,110.57");
        test.done();
    },
    //test cases for es-HN

    testNumFmt_es_HN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-HN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_HN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-HN",
            currency: "HNL"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "L100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_HN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-HN",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_HN: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-HN",
            currency: "HNL"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-L100,110.57");
        test.done();
    },
    //test cases for es-MX

    testNumFmt_es_MX: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "es-MX",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-111123456.785), "-111,123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_MX: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-MX",
            currency: "MXN"
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "$100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_es_MX: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "es-MX",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_es_MX: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "es-MX",
            currency: "MXN"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-$100,110.57");
        test.done();
    },
    // test case for az-Latn-AZ
    testNumFmt_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "az-Latn-AZ",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "az-Latn-AZ",
            currency: "AZN",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), '100.110,57 ₼');
        test.done();
    },
    testNumFmtPercentageFormatRegular_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "az-Latn-AZ",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "az-Latn-AZ",
            currency: "AZN"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), '-100.110,57 ₼');
        test.done();
    },
    // test case for km-KH
    testNumFmt_km_KH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "km-KH",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_km_KH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "km-KH",
            currency: "KHR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "100,110.57៛");
        test.done();
    },
    testNumFmtPercentageFormatRegular_km_KH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "km-KH",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_km_KH: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "km-KH",
            currency: "KHR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-100,110.57៛");
        test.done();
    },
    // test case for si-LK
    testNumFmt_si_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "si-LK",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_si_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "si-LK",
            currency: "LKR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rs100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_si_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "si-LK",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_si_LK: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "si-LK",
            currency: "LKR"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Rs100,110.57");
        test.done();
    },
    // test case for sw-Latn-KE
    testNumFmt_sw_KE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "sw-Latn-KE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_sw_KE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "sw-Latn-KE",
            currency: "KES",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Sh 100,110.57");
        test.done();
    },
    testNumFmtPercentageFormatRegular_sw_KE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "sw-Latn-KE",
            type: "percentage"
        });

        test.ok(fmt);
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    testNumFmtNegativeCurrencyFormatForLocale_sw_KE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "sw-Latn-KE",
            currency: "KES"
        });

        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Sh 100,110.57");
        test.done();
    },
    /******************************** End of test cases****************************************************/
    testNumFmt_en_GB: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-GB",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmt_en_CA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "en-CA",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmt_ja_JP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ja-JP",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,456.78");
        test.done();
    },
    testNumFmt_pt_BR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "pt-BR",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmt_de_DE: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "de-DE",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmt_id_ID: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "id-ID",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmt_fr_CA: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-CA",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,78");
        test.done();
    },
    testNumFmt_it_IT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "it-IT",
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.456,78");
        test.done();
    },
    testNumFmtGetSignificantDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.getSignificantDigits(), 3);
        test.done();
    },
    testNumFmtGetSignificantDigitsAsString: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: "3"
        });

        test.ok(fmt);
        test.equal(fmt.getSignificantDigits(), 3);
        test.done();
    },
    testNumFmtSignificantDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(123456.785), "123,000");
        test.done();
    },
    testNumFmtSignificantDigitsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123,000");
        test.done();
    },
    testNumFmtSignificantDigitsLessThanOne: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(0.012345), "0.0123");
        test.done();
    },
    testNumFmtSignificantDigitsStradleDecimalPoint: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 4
        });

        test.ok(fmt);
        test.equal(fmt.format(12.341262), "12.34");
        test.done();
    },
    testNumFmtSignificantDigitsRoundUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 4
        });

        test.ok(fmt);
        test.equal(fmt.format(123456.785), "123,500");
        test.done();
    },
    testNumFmtSignificantDigitsConflictsWithMaxFractionDigits1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 6,
            maxFractionDigits: 4
        });

        test.ok(fmt);
        test.equal(fmt.format(156.785384), "156.785");
        test.done();
    },
    testNumFmtSignificantDigitsConflictsWithMaxFractionDigits2: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 6,
            maxFractionDigits: 2
        });

        test.ok(fmt);
        test.equal(fmt.format(156.785384), "156.79");
        test.done();
    },
    testNumFmtSignificantDigitsIT: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "it-IT",
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123.000");
        test.done();
    },
    testNumFmtSignificantDigitsFR: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "fr-FR",
            significantDigits: 7
        });

        test.ok(fmt);
        test.equal(fmt.format(-123456.785), "-123 456,8");
        test.done();
    },
    testNumFmtSignificantDigitsNone: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(0), "0");
        test.done();
    },
    testNumFmtSignificantDigitsNotEnoughDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3
        });

        test.ok(fmt);
        test.equal(fmt.format(1200), "1,200");
        test.done();
    },
    testNumFmtSignificantDigitsScientificNotation: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            significantDigits: 3,
            style: "scientific"
        });

        test.ok(fmt);
        test.equal(fmt.format(12345678900), "1.23E+10");
        test.done();
    },
    //test cases for my-MM

    testNumFmt_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "my-MM",
            maxFractionDigits: 2
        });
        test.ok(fmt);
        test.equal(fmt.format(12340568.78), "၁၂,၃၄၀,၅၆၈.၇၈");
        test.done();
    },
    testNumFmtNative_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "my-MM",
            useNative: true,
            maxFractionDigits: 2
        });
        test.ok(fmt);
        test.equal(fmt.format(57.8), "၅၇.၈");
        test.done();
    },
    testNumFmtPercentageFormatRegular_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "my-MM",
            useNative: true,
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(-57.8), '-၅၇.၈%');
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "my-MM",
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(-57.8), '-၅၇.၈%');
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_my_MM1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "my-MM",
            useNative: true,
            currency: "MMK"
        });
        test.ok(fmt);
        test.equal(fmt.format(123.57), "၁၂၄ K");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_my_MM1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "my-MM",
            useNative: true,
            currency: "MMK"
        });
        test.ok(fmt);
        test.equal(fmt.format(-123.57), "-၁၂၄ K");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "my-MM",
            currency: "MMK"
        });
        test.ok(fmt);
        test.equal(fmt.format(123.57), "၁၂၄ K");
        test.done();
    },
    testNumFmtPercentageFormatRegular_my_MM: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "my-MM",
            useNative: true,
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(-1234568.78), "-၁,၂၃၄,၅၆၈.၇၈%");
        test.done();
    },
    //test cases for ne-NP
    testNumFmt_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ne-NP",
            maxFractionDigits: 2
        });
        test.ok(fmt);
        test.equal(fmt.format(1234567.89), "१२,३४,५६७.८९");
        test.done();
    },
    testNumFmtNative_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ne-NP",
            useNative: true,
            maxFractionDigits: 2
        });
        test.ok(fmt);
        test.equal(fmt.format(-123.57), "-१२३.५७");
        test.done();
    },
    testNumFmtCurrencyFormatNativeCurrencyForLocale_ne_NP1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ne-NP",
            useNative: true,
            currency: "NPR"
        });
        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rs १,००,११०.५७");
        test.done();
    },
    testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ne_NP1: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ne-NP",
            useNative: true,
            currency: "NPR"
        });
        test.ok(fmt);
        test.equal(fmt.format(-100110.57), "-Rs १,००,११०.५७");
        test.done();
    },
    testNumFmtCurrencyFormatCorrectCurrencyForLocale_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "ne-NP",
            currency: "NPR"
        });
        test.ok(fmt);
        test.equal(fmt.format(100110.57), "Rs १,००,११०.५७");
        test.done();
    },
    testNumFmtPercentageFormatRegular_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ne-NP",
            useNative: true,
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(57.8), "५७.८%");
        test.done();
    },
    testNumFmtPercentageNativeFormatRegular_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ne-NP",
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(-57.8), "-५७.८%");
        test.done();
    },
    testNumFmtPercentageNativeFormatNegative_ne_NP: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "ne-NP",
            type: "percentage"
        });
        test.ok(fmt);
        test.equal(fmt.format(57.8), "५७.८%");
        test.done();
    }
};