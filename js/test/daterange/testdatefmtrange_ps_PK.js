/*
 * testdatefmtrange_ps_PK.js - test the date range formatter object Pashto-Pakistan
 *
 * Copyright © 2022, 2024 JEDLSoft
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmtrange_ps_PK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/31 ‏1:45 غ.و. – ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeInDayMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 31 ‏1:45 غ.و. – ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeInDayLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 31 ‏1:45 غ.و. – ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeInDayFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د دسمبر 31 ‏1:45 غ.و. – ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/30 ‏1:45 غ.و. – ‏2011/12/31 ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 30 ‏1:45 غ.و. – ‏2011 دسمبر 31 ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 30 ‏1:45 غ.و. – ‏2011 دسمبر 31 ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د دسمبر 30 ‏1:45 غ.و. – ‏2011 د دسمبر 31 ‏2:30 غ.و.');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 دسمبر 20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د دسمبر 20 – 31' );
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11/20 – ‏2011/12/31');
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر 20 – ‏2011 دسمبر 31');
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر 20 – ‏دسمبر 31');
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د نومبر 20 – ‏دسمبر 31');
        test.done();
    },
    testDateRngFmtRangeNextYearShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11/20 – ‏2012/1/31');
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر 20 – ‏2012 جنوري 31');
        test.done();
    },
    testDateRngFmtRangeNextYearLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر 20 – ‏2012 جنوري 31');
        test.done();
    },
    testDateRngFmtRangeNextYearFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د نومبر 20 – ‏2012 د جنوري 31');
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11 – ‏2014/1');
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر – ‏2014 جنوري');
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 نومبر – ‏2014 جنوري');
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 د نومبر – ‏2014 د جنوري');
        test.done();
    },
    testDateRngFmtManyYearsFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2064,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 – 2064');
        test.done();
    }
};