/*
 * testdatefmt_es_CO.js - tCOST the date formatter object in spainish Columbia
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

if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_es_CO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 10 minutos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 10 minutos");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 4 horas");
        test.done();
    },


    testDateFmtFormatRelativeWithinDayBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 4 horas");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 4 días");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 4 días");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 9 semanas");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 9 semanas");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 16 meses");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 14 meses");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 14 años");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 21 años");
        test.done();
    }
};