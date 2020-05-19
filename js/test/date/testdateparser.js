/*
 * testdateparser.js - test the date parser object
 *
 * Copyright © 2020 JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(DateParser) === "undefined") {
    var DateParser = require("../../lib/DateParser.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}

function mockLoaderDF(paths, sync, params, callback) {
    var data = [];

    paths.forEach(function(path) {
        if (path === "localeinfo.json") {
            data.push(ilib.data.localeinfo); // for the generic, shared stuff
        } else if (path.indexOf("localeinfo") !== -1) {
            data.push(ilib.data.localeinfo_de);
        } else if (path === "dateformats.json") {
            data.push(ilib.data.dateformats); // for the generic, shared stuff
        } else if (path.indexOf("dateformats") !== -1) {
            data.push(ilib.data.dateformats_de);
        }
    });

    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);
    }
    return data;
}

var oldLoader = ilib._load;

module.exports.testdateparser = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testDateParserConstructorEmpty: function(test) {
        test.expect(1);
        var parser = new DateParser();

        test.ok(parser !== null);
        test.done();
    },
    
    testDateParserWithLocale: function(test) {
        test.expect(2);
        var parser = new DateParser({
            locale: "de-DE"
        });

        test.ok(parser !== null);
        test.equal(parser.getLocale(), "de-DE");
        test.done();
    },
    
    testDateParserWithTimeZone: function(test) {
        test.expect(2);
        var parser = new DateParser({
            timezone: "Etc/UTC"
        });

        test.ok(parser !== null);
        test.equal(parser.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testDateParserWithCalendar: function(test) {
        test.expect(2);
        var parser = new DateParser({
            locale: "he-IL",
            calendar: "Hebrew"
        });

        test.ok(parser !== null);
        test.equal(parser.getCalendar(), "hebrew");
        test.done();
    },

    testDateParserParseYMDLongSimple: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDLongSimpleAtMidnight: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getHours(), 0);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDMediumSimple: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("Jul 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDShortSimple: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("7/23/94");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDLongDifferentOrder: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("23 July 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDLongDifferentOrder2: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("1994-07-23");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDShortDifferentOrder: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // the size of the elements means that they are each unambiguous
        var d = parser.parse("23/07/94");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDShortDifferentSeparators1: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // the size of the elements means that they are each unambiguous
        var d = parser.parse("07.23.94");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDShortDifferentSeparators2: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // the size of the elements means that they are each unambiguous
        var d = parser.parse("07-23-94");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDShortAmbiguousDayMonth: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // should use the regular format of locale to disambiguate 
        var d = parser.parse("07/09/2002");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 2002); // should add the 2000 automatically
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 9);
        test.done();
    },
    
    testDateParserParseYMDShortAmbiguousYear1: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // should use the regular format of locale to disambiguate 
        var d = parser.parse("07/09/02");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        // should add the 2000 automatically for years 00 to this year,
        // and 1900 for next year to 100
        test.equal(d.getYears(), 2002); 
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 9);
        test.done();
    },

    testDateParserParseYMDShortAmbiguousYear2: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // should use the regular format of locale to disambiguate 
        var d = parser.parse("07/09/29");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        // should add the 2000 automatically for years 00 to this year,
        // and 1900 for next year to 100
        test.equal(d.getYears(), 1929); 
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 9);
        test.done();
    },

    testDateParserParseWYMDLongSimple: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // the weekday is pretty much ignored
        var d = parser.parse("Saturday, July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseWYMDShortSimple: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        // the weekday is pretty much ignored
        var d = parser.parse("Sat 07/23/94");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDLongAllCaps: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("JULY 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDLongAllLower: function(test) {
        test.expect(6);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("july 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.done();
    },

    testDateParserParseYMDHMLongSimple: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994 at 2:00");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHMLongOtherChars: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994, 2:30");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 30);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHMSLongSimple: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994 at 2:00:32");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 32);
        test.done();
    },

    testDateParserParseYMDHMLongReverse: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("2:00pm July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHLongSimple: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994 2pm");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHLongReverse: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("2pm July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHLong24hClock: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("July 23, 1994 14:00");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 14);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHLong24hClockReverse: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("14:00 July 23, 1994");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHLong24hClockMixedUp: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("1994 23 July 14:00");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 2);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHShort24hClock: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("07 23 1994 14:00");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 14);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },

    testDateParserParseYMDHShort24hClockAmbiguous: function(test) {
        test.expect(9);
        var parser = new DateParser();

        test.ok(parser !== null);
        
        var d = parser.parse("07-23-1994 14h");

        test.ok(d);
        test.ok(d instanceof GregorianDate);
        test.equal(d.getYears(), 1994);
        test.equal(d.getMonths(), 7);
        test.equal(d.getDays(), 23);
        test.equal(d.getHours(), 14);
        test.equal(d.getMinutes(), 0);
        test.equal(d.getSeconds(), 0);
        test.done();
    },
};