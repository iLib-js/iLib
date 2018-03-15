/*
 * testdatefmt_defaults - test the date formatter object in locales that
 * have no data in CLDR
 *
 * Copyright © 2018, JEDLSoft
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
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmt_defaults = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+4 h");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-4 h");
        test.done();
    },

    testDateFmtFormatRelativeWithinFortnightAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+4 d");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-4 d");
        test.done();
    },

    testDateFmtFormatRelativeWithinQuarterAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+9 w");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-9 w");
        test.done();
    },

    testDateFmtFormatRelativeWithinTwoYearsAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+16 m");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-14 m");
        test.done();
    },

    testDateFmtFormatRelativeYearsAfter_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+14 y");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_aa: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "aa", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "aa",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "aa",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-21 y");
        test.done();
    }
};
