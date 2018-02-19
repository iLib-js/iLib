/*
 * testlistfmt_ja_JP.js - test the list formatter object
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_ja_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtjaJPNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち"]), "いち");
        test.done();
    },
    
    testListFmtjaJPNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に"]), "いち、に");
        test.done();
    },
    
    testListFmtjaJPNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん"]), "いち、に、さん");
        test.done();
    },
    
    testListFmtjaJPNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し"]), "いち、に、さん、し");
        test.done();
    },
    
    testListFmtjaJPNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し",　"ご"]), "いち、に、さん、し、ご");
        test.done();
    },
    
    //ja-JP : unit style
    
    testListFmtUnitStylejaJPNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち"]), "いち");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に"]), "いちに");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん"]), "いちにさん");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し"]), "いちにさんし");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し",　"ご"]), "いちにさんしご");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち"]), "いち");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に"]), "いち に");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん"]), "いち に さん");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し"]), "いち に さん し");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し",　"ご"]), "いち に さん し ご");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち"]), "いち");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に"]), "いち に");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん"]), "いち に さん");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し"]), "いち に さん し");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し",　"ご"]), "いち に さん し ご");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち"]), "いち");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に"]), "いち に");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん"]), "いち に さん");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し"]), "いち に さん し");
        test.done();
    },
    
    testListFmtUnitStylejaJPNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ja-JP",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["いち",　"に",　"さん",　"し",　"ご"]), "いち に さん し ご");
        test.done();
    }
    
};
