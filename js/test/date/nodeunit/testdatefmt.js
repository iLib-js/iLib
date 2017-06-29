/*
 * testdatefmt.js - test the date formatter object
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib-node.js");
}
if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../.././../lib/ThaiSolarDate.js");
}
if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../.././../lib/PersianDate.js");
}
if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../.././../lib/IslamicDate.js");
}
if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../.././../lib/HebrewDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../.././../lib/JulianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../.././../lib/DateFactory.js");
}

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    if (paths[0].indexOf("localeinfo") !== -1) {
        data.push(ilib.data.localeinfo); // for the generic, shared stuff
        data.push(ilib.data.localeinfo_de);
    } else {
        data.push(ilib.data.dateformats); // for the generic, shared stuff
        data.push(ilib.data.dateformats_de);
    }

    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);  
    }
    return data;
}

var oldLoader = ilib._load;


if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty: function(test) {
        var fmt = new DateFmt();
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    testDateFmtConstructorDefaultLocale: function(test) {
        var fmt = new DateFmt();
        
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    
    testDateFmtGetCalendarDefault: function(test) {
        var fmt = new DateFmt();
        
        test.expect(3);
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "gregorian");
        test.done();
    },
    
    testDateFmtGetCalendarExplicit: function(test) {
        var fmt = new DateFmt({calendar: "julian"});
        
        test.expect(3);
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "julian");
        test.done();
    },
    
    testDateFmtGetCalendarExplicitDefault: function(test) {
        var fmt = new DateFmt({calendar: "gregorian"});
        
        test.expect(3);
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "gregorian");
        test.done();
    },
    
    testDateFmtGetCalendarNotInThisLocale: function(test) {
        try {
            new DateFmt({calendar: "arabic", locale: 'en-US'});
        test.fail()
        } catch (str) {
            test.equal(typeof(str), "string");
            test.equal(str, "No formats available for calendar arabic in locale en-US");
        }
        test.done();
    },
    
    testDateFmtGetLength: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "full");
        test.done();
    },
    
    testDateFmtGetLengthDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "short");
        test.done();
    },
    
    testDateFmtGetLengthBogus: function(test) {
        var fmt = new DateFmt({length: "asdf"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "short");
        test.done();
    },
    
    
    testDateFmtGetType: function(test) {
        var fmt = new DateFmt({type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "time");
        test.done();
    },
    
    testDateFmtGetTypeDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "date");
        test.done();
    },
    
    testDateFmtGetTypeBogus: function(test) {
        var fmt = new DateFmt({type: "asdf"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "date");
        test.done();
    },
    
    
    testDateFmtGetLocale: function(test) {
        var fmt = new DateFmt({locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "de-DE");
        test.done();
    },
    
    testDateFmtGetLocaleDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    
    testDateFmtGetLocaleBogus: function(test) {
        var fmt = new DateFmt({locale: "zyy-XX"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "zyy-XX");
        test.done();
    },
    
    testDateFmtGetTimeComponentsDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "ahm");
        test.done();
    },
    
    testDateFmtGetTimeComponents: function(test) {
        var fmt = new DateFmt({time: "hmsaz"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "ahmsz");
        test.done();
    },
    
    testDateFmtGetTimeComponentsReorder: function(test) {
        var fmt = new DateFmt({time: "zahms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "ahmsz");
        test.done();
    },
    
    testDateFmtGetTimeComponentsBogus: function(test) {
        var fmt = new DateFmt({time: "asdf"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getTimeComponents(), "ahm");
        test.done();
    },
    
    testDateFmtGetTimeComponentsICUSkeleton1: function(test) {
        var fmt = new DateFmt({time: "EHm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "hm");
        test.done();
    },
    
    testDateFmtGetTimeComponentsICUSkeleton2: function(test) {
        var fmt = new DateFmt({time: "Hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "hms");
        test.done();
    },
    
    testDateFmtGetTimeComponentsICUSkeleton3: function(test) {
        var fmt = new DateFmt({time: "Ehms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // ignore the non-time components
        test.equal(fmt.getTimeComponents(), "hms");
        test.done();
    },
    
    testDateFmtGetTimeComponentsICUSkeleton3: function(test) {
        var fmt = new DateFmt({time: "yMdhms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // ignore the non-time components
        test.equal(fmt.getTimeComponents(), "hms");
        test.done();
    },
    
    testDateFmtGetDateComponentsDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmy");
        test.done();
    },
    
    testDateFmtGetDateComponents: function(test) {
        var fmt = new DateFmt({date: "dmwy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmwy");
        test.done();
    },
    
    testDateFmtGetDateComponentsReorder: function(test) {
        var fmt = new DateFmt({date: "wmdy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmwy");
        test.done();
    },
    
    testDateFmtGetDateComponentsBogus: function(test) {
        var fmt = new DateFmt({date: "asdf"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getDateComponents(), "dmy");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton1: function(test) {
        var fmt = new DateFmt({date: "yMMMMd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmy");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton2: function(test) {
        var fmt = new DateFmt({date: "yMMd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmy");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton3: function(test) {
        var fmt = new DateFmt({date: "yMMMM"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "my");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton4: function(test) {
        var fmt = new DateFmt({date: "MMMEd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "dmw");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton5: function(test) {
        var fmt = new DateFmt({date: "GyMMMEd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // ignore the era
        test.equal(fmt.getDateComponents(), "dmwy");
        test.done();
    },
    
    testDateFmtGetDateComponentsICUSkeleton6: function(test) {
        var fmt = new DateFmt({date: "MMddhms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // ignore the time components
        test.equal(fmt.getDateComponents(), "dm");
        test.done();
    },
    
    testDateFmtGetClockDefaultUS: function(test) {
        var fmt = new DateFmt({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "12");
        test.done();
    },
    
    testDateFmtGetClockDefaultDE: function(test) {
        var fmt = new DateFmt({locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateFmtGetClockDefaultJP: function(test) {
        var fmt = new DateFmt({locale: "ja-JP"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateFmtGetClock: function(test) {
        var fmt = new DateFmt({locale: "en-US", clock: "24"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateFmtGetClockBogus: function(test) {
        var fmt = new DateFmt({locale: "en-US", clock: "asdf"});
        test.expect(2);
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "12");
        test.done();
    },
    
    testDateFmtGetTimeZoneDefault: function(test) {
        ilib.tz = undefined;    // just in case
        var fmt = new DateFmt();
        
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeZone().getId(), "local");
        test.done();
    },
    
    testDateFmtGetTimeZone: function(test) {
        var fmt = new DateFmt({timezone: "Europe/Paris"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeZone().getId(), "Europe/Paris");
        test.done();
    },
    
    testDateFmtGetTemplateDefault: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "M/d/yy");
        test.done();
    },
    
    testDateFmtGetTemplate: function(test) {
        var fmt = new DateFmt({template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "EEE 'the' DD 'of' MM, yyyy G");
        test.done();
    },
    
    testDateFmtGetTemplateIgnoreProperties: function(test) {
        var fmt = new DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "EEE 'the' DD 'of' MM, yyyy G");
        test.done();
    },
    
    testDateFmtUseTemplateEmptyDateComponents: function(test) {
        var fmt = new DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getDateComponents(), "");
        test.done();
    },
    
    testDateFmtUseTemplateEmptyTimeComponents: function(test) {
        var fmt = new DateFmt({time: 'h', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTimeComponents(), "");
        test.done();
    },
    
    testDateFmtUseTemplateEmptyLength: function(test) {
        var fmt = new DateFmt({length: 'short', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "");
        test.done();
    },
    
    testDateFmtUseTemplateNonEmptyCalendar: function(test) {
        var fmt = new DateFmt({calendar: 'julian', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getCalendar(), "julian");
        test.done();
    },
    
    testDateFmtUseTemplateNonEmptyLocale: function(test) {
        var fmt = new DateFmt({locale: 'de-DE', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "de-DE");
        test.done();
    },
    
    testDateFmtUseTemplateNonEmptyClock: function(test) {
        var fmt = new DateFmt({clock: "24", template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockHH: function(test) {
        var fmt = new DateFmt({clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "HH:mm");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockKK: function(test) {
        var fmt = new DateFmt({clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "kk:mm");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockhh: function(test) {
        var fmt = new DateFmt({clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "hh:mm");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockkk: function(test) {
        var fmt = new DateFmt({clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "KK:mm");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockHHSkipEscapedStrings24: function(test) {
        var fmt = new DateFmt({clock: "24", template: "'hh' hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "'hh' HH:mm");
        test.done();
    },
    
    testDateFmtUseTemplateWithClockHHSkipEscapedStrings12: function(test) {
        var fmt = new DateFmt({clock: "12", template: "'HH' HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "'HH' hh:mm");
        test.done();
    },
    
    testDateFmtUseTemplateNonEmptyTimeZone: function(test) {
        var fmt = new DateFmt({timezone: 'Europe/Paris', template: "EEE 'the' DD 'of' MM, yyyy G"});
        test.expect(3);
        test.ok(fmt !== null);
        
        var tz = fmt.getTimeZone();
        test.ok(typeof(tz) !== "undefined");
        test.equal(tz.getId(), "Europe/Paris");
        test.done();
    },
    
    testDateFmtGetTemplateCalendar: function(test) {
        var fmt = new DateFmt({calendar: "julian"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "M/d/yy");
        test.done();
    },
    
    testDateFmtGetTemplateLocale: function(test) {
        var fmt = new DateFmt({locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "dd.MM.yy");
        test.done();
    },
    
    testDateFmtGetTemplateLength: function(test) {
        var fmt = new DateFmt({length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "MMMM d, yyyy");
        test.done();
    },
    
    testDateFmtGetTemplateTypeDateTime: function(test) {
        var fmt = new DateFmt({type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "M/d/yy, h:mm a");
        test.done();
    },
    
    testDateFmtGetTemplateTypeTime: function(test) {
        var fmt = new DateFmt({type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "h:mm a");
        test.done();
    },
    
    testDateFmtGetTemplateDateComponents: function(test) {
        var fmt = new DateFmt({date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "E, M/d");
        test.done();
    },
    
    testDateFmtGetTemplateDateComponentsWithICUSkeleton: function(test) {
        var fmt = new DateFmt({date: "MMMEd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "E, M/d");
        test.done();
    },
    
    testDateFmtGetTemplateTimeComponents: function(test) {
        var fmt = new DateFmt({type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "h:mm");
        test.done();
    },
    
    testDateFmtGetTemplateTimeComponentsWithICUSkeleton: function(test) {
        var fmt = new DateFmt({type: "time", time: "Hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "h:mm");
        test.done();
    },
    
    testDateFmtGetTemplateTypeTime24: function(test) {
        var fmt = new DateFmt({type: "time", clock: "24"});
        test.expect(2);
        test.ok(fmt !== null);
        
        test.equal(fmt.getTemplate(), "HH:mm");
        test.done();
    },
    
    testDateFmtTokenizeSimple: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        var expected = [
            "MMM",
            " ",
            "d"
        ];
        
        test.deepEqual(fmt._tokenize("MMM d"), expected);
        test.done();
    },
    
    testDateFmtTokenizeAdjacentParts: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        var expected = [
            "hh",
            ":",
            "mm",
            "a"
        ];
        
        test.deepEqual(fmt._tokenize("hh:mma"), expected);
        test.done();
    },
    
    testDateFmtTokenizeComplex: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        var expected = [
            "dd",
            "/",
            "MM",
            "/",
            "yyyy",
            ", ",
            "h",
            ":",
            "mm",
            ":",
            "ss",
            "a",
            " ",
            "z"
        ];
        
        test.deepEqual(fmt._tokenize("dd/MM/yyyy, h:mm:ssa z"), expected);
        test.done();
    },
    
    testDateFmtTokenizeWithEscapes: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
        var expected = [
            "'El'",
            " ",
            "d",
            " ",
            "'de'",
            " ",
            "MMMM",
            ", ",
            "yyyy"
        ];
        
        test.deepEqual(fmt._tokenize("'El' d 'de' MMMM, yyyy"), expected);
        test.done();
    },
    
    testDateFmtAlternateInputs1: function(test) {
        // toUTCString doesn't work properly on qt, so we can't do this test
        if (ilib._getPlatform() !== "qt") {
            var fmt = new DateFmt({
                timezone: "Etc/UTC", 
                template: "EEE, d MMM yyyy kk:mm:ss z"
            });
        test.expect(2);
            test.ok(fmt !== null);
            
            var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
            var ildMyBday = DateFactory({
                timezone: "Etc/UTC",
                year: 1982,
                month: 8,
                day: 13,
                hour: 20,
                minute: 37,
                second: 35
            });
            var strFormattedDate1 = datMyBday.toUTCString();
            var strFormattedDate2 = fmt.format(ildMyBday);
            strFormattedDate1 = strFormattedDate1.replace(/ \w{3}$/, '');
            strFormattedDate2 = strFormattedDate2.replace(/ \w{3}$/, '');
        
            test.equal(strFormattedDate2, strFormattedDate1);
            test.done();
        }
    },
    
    testDateFmtFormatJSDate1: function(test) {
        var fmt = new DateFmt({
            type: "time",
            length: "short",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
        test.equal(fmt.format(datMyBday), "1:37 PM");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone1: function(test) {
        var fmt = new DateFmt({
            type: "date",
            length: "full",
            date: "w",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
        test.equal(fmt.format(datMyBday), "Wednesday");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone2: function(test) {
        var fmt = new DateFmt({
            type: "date",
            length: "full",
            date: "w",
            timezone: "America/New_York"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
        test.equal(fmt.format(datMyBday), "Thursday");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone3: function(test) {
        var fmt = new DateFmt({
            type: "date",
            length: "full",
            date: "w",
            timezone: "Australia/Perth"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        var datMyBday = new Date("Wed May 14 2014 20:37:35 GMT");
        test.equal(fmt.format(datMyBday), "Thursday");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone4: function(test) {
        var d = new Date();
        // test only works in north america
        if (d.getTimezoneOffset() > 180) {
            var fmt = new DateFmt({
                type: "date",
                length: "full",
                date: "w",
                timezone: "local"
            });
        test.expect(2);
            test.ok(fmt !== null);
            
            // test formatting a javascript date. It should be converted to 
            // an ilib date object automatically and then formatted
            var datMyBday = new Date('2014-05-13T03:17:48.674Z');
            test.equal(fmt.format(datMyBday), "Monday");
            test.done();
        }
    },
    
    testDateFmtFormatJSDate2: function(test) {
        var fmt = new DateFmt({
            type: "time",
            length: "short",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        test.equal(fmt.format(398119055000), "1:37 PM");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone5: function(test) {
        var d = new Date();
        // test only works in north america
        if (d.getTimezoneOffset() > 180) {
            var fmt = new DateFmt({
                type: "date",
                length: "full",
                date: "w",
                timezone: "local"
            });
        test.expect(2);
            test.ok(fmt !== null);
            
            // test formatting a javascript date. It should be converted to 
            // an ilib date object automatically and then formatted
            test.equal(fmt.format(1399951068674), "Monday");
            test.done();
        }
    },
    
    testDateFmtFormatJSDate3: function(test) {
        var fmt = new DateFmt({
            type: "time",
            length: "short",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        // test formatting a javascript date. It should be converted to 
        // an ilib date object automatically and then formatted
        test.equal(fmt.format("Fri Aug 13 1982 13:37:35 GMT-0700"), "1:37 PM");
        test.done();
    },
    
    testDateFmtFormatJSDateRightTimeZone6: function(test) {
        var d = new Date();
        // test only works in north america
        if (d.getTimezoneOffset() > 180) {
            var fmt = new DateFmt({
                type: "date",
                length: "full",
                date: "w",
                timezone: "local"
            });
        test.expect(2);
            test.ok(fmt !== null);
            
            // test formatting a javascript date. It should be converted to 
            // an ilib date object automatically and then formatted
            test.equal(fmt.format("Wed May 14 2014 23:37:35 GMT-0700"), "Wednesday");
            test.done();
        }
    },
    
    testDateFmtGetMonthsOfYear1: function(test) {
        var fmt = new DateFmt({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrMonths = fmt.getMonthsOfYear();
        var expected = [undefined, "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },
    
    testDateFmtGetMonthsOfYear2: function(test) {
        var fmt = new DateFmt({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrMonths = fmt.getMonthsOfYear({length: "long"});
        var expected = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },
    
    testDateFmtGetMonthsOfYearThai: function(test) {
        // uses ThaiSolar calendar
        var fmt = new DateFmt({locale: "th-TH"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrMonths = fmt.getMonthsOfYear({length: "long"});
        
        var expected = [undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        test.deepEqual(arrMonths, expected);
        test.done();
    },
    
    testDateFmtGetMonthsOfYearLeapYear: function(test) {
        var d = DateFactory({type: "hebrew", locale: "en-US", year: 5774, month: 1, day: 1});
        var fmt = new DateFmt({date: "en-US", calendar: "hebrew"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});
    
        var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada", "Ad2"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },
    
    testDateFmtGetMonthsOfYearNonLeapYear: function(test) {
        var d = DateFactory({type: "hebrew", locale: "en-US", year: 5775, month: 1, day: 1});
        var fmt = new DateFmt({date: "en-US", calendar: "hebrew"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});
    
        var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },
    
    testDateFmtGetDaysOfWeek1: function(test) {
        var fmt = new DateFmt({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrDays = fmt.getDaysOfWeek();
        
        var expected = ["S", "M", "T", "W", "T", "F", "S"];
        test.deepEqual(arrDays, expected);
        test.done();
    },
    
    testDateFmtGetDaysOfWeek2: function(test) {
        var fmt = new DateFmt({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrDays = fmt.getDaysOfWeek({length: 'long'});
        var expected = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        test.deepEqual(arrDays, expected);
        test.done();
    },
    
    testDateFmtGetDaysOfWeekOtherCalendar: function(test) {
        var fmt = new DateFmt({locale: "en-US", calendar: "hebrew"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrDays = fmt.getDaysOfWeek({length: 'long'});
    
        var expected = ["ris", "she", "shl", "rvi", "ḥam", "shi", "sha"];
        test.deepEqual(arrDays, expected);
        test.done();
    },
    
    testDateFmtGetDaysOfWeekThai: function(test) {
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrDays = fmt.getDaysOfWeek({length: 'long'});
    
        var expected = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
        test.deepEqual(arrDays, expected);
        test.done();
    },
    
    testDateFmtGetDaysOfWeekThaiInEnglish: function(test) {
        var fmt = new DateFmt({locale: "en-US", calendar: "thaisolar"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var arrDays = fmt.getDaysOfWeek({length: 'long'});
        
        var expected = ["ath", "cha", "ang", "phu", "phr", "suk", "sao"];
        test.deepEqual(arrDays, expected);
        test.done();
    },
    
    
    testDateFmtWeekYear1: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "52");
        test.done();
    },
    
    testDateFmtWeekYear2: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 7,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtWeekYear3: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2010,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "52");
        test.done();
    },
    
    testDateFmtWeekYear4: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2009,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "53");
        test.done();
    },
    
    testDateFmtWeekYear5: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2008,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtWeekYear6: function(test) {
        var fmt = new DateFmt({template: "w"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2007,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtWeekYearPad: function(test) {
        var fmt = new DateFmt({template: "ww"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 7,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    
    testDateFmtFormatWithEscapes: function(test) {
        var fmt = new DateFmt({locale: 'es-MX', template: "'El' dd 'de' MMMM"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "es-MX",
            year: 2011,
            month: 5,
            day: 5,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "El 05 de mayo");
        test.done();
    },
    
    testDateFmtDayOfYearFirstD: function(test) {
        var fmt = new DateFmt({template: "D"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtDayOfYearFirstDD: function(test) {
        var fmt = new DateFmt({template: "DD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    
    testDateFmtDayOfYearFirstDDD: function(test) {
        var fmt = new DateFmt({template: "DDD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "001");
        test.done();
    },
    
    testDateFmtDayOfYearLastD: function(test) {
        var fmt = new DateFmt({template: "D"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "365");
        test.done();
    },
    
    testDateFmtDayOfYearLastDD: function(test) {
        var fmt = new DateFmt({template: "DD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "365");
        test.done();
    },
    
    testDateFmtDayOfYearLastDLeap: function(test) {
        var fmt = new DateFmt({template: "D"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2008,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "366");
        test.done();
    },
    
    testDateFmtDayOfYearLastDDD: function(test) {
        var fmt = new DateFmt({template: "DDD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "365");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayD: function(test) {
        var fmt = new DateFmt({template: "D"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "76");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayDD: function(test) {
        var fmt = new DateFmt({template: "DD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "76");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayDDD: function(test) {
        var fmt = new DateFmt({template: "DDD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "076");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayDLeap: function(test) {
        var fmt = new DateFmt({template: "D"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2008,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "77");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayDDLeap: function(test) {
        var fmt = new DateFmt({template: "DD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2008,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "77");
        test.done();
    },
    
    testDateFmtDayOfYearPaddysDayDDDLeap: function(test) {
        var fmt = new DateFmt({template: "DDD"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2008,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "077");
        test.done();
    },
    
    testDateFmtWeekOfMonthUS: function(test) {
        var fmt = new DateFmt({template: "W", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtWeekOfMonthDE: function(test) {
        var fmt = new DateFmt({template: "W", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "0");
        test.done();
    },
    
    testDateFmtWeekOfMonthUSSept: function(test) {
        var fmt = new DateFmt({template: "W", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 9,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "0");
        test.done();
    },
    
    testDateFmtWeekOfMonthUSOct: function(test) {
        var fmt = new DateFmt({template: "W", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "0");
        test.done();
    },
    
    testDateFmtWeekOfMonthUSNov: function(test) {
        var fmt = new DateFmt({template: "W", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 11,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtWeekOfMonthUSRegular: function(test) {
        var fmt = new DateFmt({template: "W", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 23,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "4");
        test.done();
    },
    
    testDateFmtWeekOfMonthDERegular: function(test) {
        var fmt = new DateFmt({template: "W", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 23,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "3");
        test.done();
    },
    
    testDateFmtYear0YY: function(test) {
        var fmt = new DateFmt({template: "yy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "00");
        test.done();
    },
    
    testDateFmtYear0YYYY: function(test) {
        var fmt = new DateFmt({template: "yyyy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "0000");
        test.done();
    },
    
    testDateFmtYear1YY: function(test) {
        var fmt = new DateFmt({template: "yy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 1,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    
    testDateFmtYear1YYYY: function(test) {
        var fmt = new DateFmt({template: "yyyy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 1,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "0001");
        test.done();
    },
    
    testDateFmtYearMinus1YY: function(test) {
        var fmt = new DateFmt({template: "yy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: -1,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "-01");
        test.done();
    },
    
    testDateFmtYearMinus1YYYY: function(test) {
        var fmt = new DateFmt({template: "yyyy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: -1,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "-0001");
        test.done();
    },
    
    testDateFmtOrdinalUS1: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1st");
        test.done();
    },
    
    testDateFmtOrdinalUS2: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 2,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2nd");
        test.done();
    },
    
    testDateFmtOrdinalUS3: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 3,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "3rd");
        test.done();
    },
    
    testDateFmtOrdinalUS4: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 4,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "4th");
        test.done();
    },
    
    testDateFmtOrdinalUS21: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 21,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "21st");
        test.done();
    },
    
    testDateFmtOrdinalUSDefaultCase: function(test) {
        var fmt = new DateFmt({template: "O", locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
            year: 2011,
            month: 10,
            day: 27,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "27th");
        test.done();
    },
    
    testDateFmtOrdinalDE1: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1.");
        test.done();
    },
    
    testDateFmtOrdinalDE2: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 2,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2.");
        test.done();
    },
    
    testDateFmtOrdinalDE3: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 3,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "3.");
        test.done();
    },
    
    testDateFmtOrdinalDE4: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 4,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "4.");
        test.done();
    },
    
    testDateFmtOrdinalDE21: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 21,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "21.");
        test.done();
    },
    
    testDateFmtOrdinalDEDefaultCase: function(test) {
        var fmt = new DateFmt({template: "O", locale: "de-DE"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 10,
            day: 27,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "27.");
        test.done();
    },
    
    testDateFmtEraCE: function(test) {
        var fmt = new DateFmt({template: "G", locale: "en"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en",
            year: 2011,
            month: 10,
            day: 27,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "CE");
        test.done();
    },
    
    testDateFmtEraBCE: function(test) {
        var fmt = new DateFmt({template: "G", locale: "en"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en",
            year: -46,
            month: 10,
            day: 27,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "BCE");
        test.done();
    },
    
    testDateFmtEraCEBoundary: function(test) {
        var fmt = new DateFmt({template: "G", locale: "en"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en",
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "CE");
        test.done();
    },
    
    testDateFmtEraBCEBoundary: function(test) {
        var fmt = new DateFmt({template: "G", locale: "en"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "BCE");
        test.done();
    },
    
    testDateFmtStandAloneMonthFull: function(test) {
        var fmt = new DateFmt({template: "LLLL", locale: "fi-FI"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "joulukuu");
        test.done();
    },
    
    testDateFmtStandAloneMonthLong: function(test) {
        var fmt = new DateFmt({template: "LLL", locale: "fi-FI"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "joulu");
        test.done();
    },
    
    testDateFmtStandAloneMonthMedium: function(test) {
        var fmt = new DateFmt({template: "LL", locale: "fi-FI"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jo");
        test.done();
    },
    
    testDateFmtInFormatMonthFull: function(test) {
        var fmt = new DateFmt({template: "MMMM", locale: "fi-FI"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "joulukuuta");
        test.done();
    },
    
    testDateFmtInFormatMonthMedium: function(test) {
        var fmt = new DateFmt({template: "MM", locale: "fi-FI"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 0,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "12");
        test.done();
    },
    
    /*
    exception does not happen any more because we always convert
    the argument to the format method to an DateFactory first now.
    By default if a bogus argument is passed, this is treated as
    an empty/undefined parameter, which means the current date/time
    
    testDateFmtNonDateObject: function(test) {
        var fmt = new DateFmt({
            locale: "en-US", 
            type: "time", 
            length: "short",
            time: "hm"
        });
        test.ok(fmt !== null);
       
        try {
            fmt.format({
                locale: "en-US",
                year: 0,
                month: 12,
                day: 31,
                hour: 9
            });
        test.fail()
        } catch (e) {
            test.equal(e, "Wrong date type passed to DateFmt.format()");
        }
        test.done();
    },
    */
    
    testDateFmtFormatRelativeWithinMinuteAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 30 seconds");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 seconds ago");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minutes ago");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 4 hours");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 hours ago");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 4 days");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 days ago");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 9 weeks");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 weeks ago");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 16 months");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 months ago");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 14 years");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 years ago");
        test.done();
    },
    
    testDateFmtConvertToGMT: function(test) {
        var fmt = new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Europe/London",
            locale: "en-GB",
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "America/Los_Angeles",
            locale: "en-US"
        });
        
        test.equal(fmt.format(date), "20/09/2011, 21:45 GMT/BST");
        test.done();
    },
    
    testDateFmtConvertToOtherTimeZone: function(test) {
        var fmt = new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Australia/Sydney",
            locale: "en-AU",
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "America/Los_Angeles",
            locale: "en-US"
        });
        
        test.equal(fmt.format(date), "21/9/11, 6:45 am AEST");
        test.done();
    },
    
    testDateFmtForTZWithNonWholeOffset1: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            locale: "en-CA",
            timezone: "America/St_Johns"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            unixtime: 1394834293627,
            timezone: "Etc/UTC"
        });
        
        test.equal(fmt.format(date), "7:28 PM");
        test.done();
    },
    
    testDateFmtForTZWithNonWholeOffset2: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            locale: "en-CA",
            timezone: "America/St_Johns"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "Etc/UTC",
            year: 2014,
            month: 3,
            day: 14,
            hour: 21,
            minute: 58,
            second: 13,
            millisecond: 627
        });
        
        // St. John's is -3:30 from UTC, plus 1 hour DST
        test.equal(fmt.format(date), "7:28 PM");
        test.done();
    },
    
    testDateFmtForTZWithNonWholeOffsetQuarterHour: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            locale: "en-CA",
            timezone: "Asia/Kathmandu"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            unixtime: 1394834293627,
            timezone: "Etc/UTC"
        });
    
        // Kathmandu is 5:45 ahead of UTC, no DST
        test.equal(fmt.format(date), "3:43 AM");
        test.done();
    },
    
    testDateFmtForTZWithNonWholeOffsetQuarterHour2: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            locale: "en-CA",
            timezone: "Asia/Kathmandu"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "Etc/UTC",
            year: 2014,
            month: 3,
            day: 14,
            hour: 21,
            minute: 58,
            second: 13,
            millisecond: 627
        });
        
        // Kathmandu is 5:45 ahead of UTC, no DST
        test.equal(fmt.format(date), "3:43 AM");
        test.done();
    },
    
    // test locales that are tier 2 and below by doing a single test to see that it basically works
    testDateFmtenNG: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "en-NG",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Tuesday, 20 September 2011 at 1:45 PM");
        test.done();
    },
    
    testDateFmtenPH: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "en-PH",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-PH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Tuesday, 20 September 2011 at 1:45 PM");
        test.done();
    },
    
    testDateFmtenPK: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "en-PK",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Tuesday, 20 September 2011 at 1:45 PM");
        test.done();
    },
    
    testDateFmtenAU: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "en-AU",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-AU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Tuesday, 20 September 2011 at 1:45 pm");
        test.done();
    },
    
    testDateFmtenZA: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "en-ZA",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Tuesday, 20 September 2011 at 13:45");
        test.done();
    },
    
    testDateFmtesES: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "es-ES",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "martes, 20 de septiembre de 2011, 13:45");
        test.done();
    },
    
    testDateFmtesMX: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "es-MX",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "es-MX",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "martes, 20 de septiembre de 2011, 13:45");
        test.done();
    },
    
    testDateFmtesAR: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "es-AR",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "es-AR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "martes, 20 de septiembre de 2011, 13:45");
        test.done();
                      
    },
    
    testDateFmttrTR: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "tr-TR",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "20 Eylül 2011 Salı 13:45");
        test.done();
    },
    
    testDateFmttrSV: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "sv-SE",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 10,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "torsdag 20 oktober 2011 13:45");
        test.done();
    },
    
    testDateFmttrNO: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "no-NO",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "no-NO",
            year: 2011,
            month: 10,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "Torsdag 20. oktober 2011 13.45");
        test.done();
    },
    
    testDateFmttrDA: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "datetime",
            locale: "da-DK",
            date: "dmwy",
            time: "hma"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 10,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        
        test.equal(fmt.format(date), "torsdag den 20. oktober 2011 kl. 13.45");
        test.done();
    },
    
    testDateFmtGetDefault: function(test) {
        var fmt = new DateFmt({locale: "zz-ZZ"});
        test.expect(4);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "zz-ZZ");
        test.equal(fmt.getCalendar(), "gregorian");
        test.equal(fmt.getTemplate(), "d/M/yy");
        test.done();
    },
    
    testDateFmtLoadLocaleDataSynch: function(test) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        if (!ilib.isDynData()) {
        test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoader);
    
        var fmt = new DateFmt({locale: "zz-ZZ"});
        test.expect(4);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "zz-ZZ");
        test.equal(fmt.getCalendar(), "gregorian");
        test.equal(fmt.getTemplate(), "dd.MM.yy");
        test.done();
    },
    
    testDateFmtLoadLocaleDataSynchCached: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
        test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoader);
    
        var fmt = new DateFmt({locale: "zz-ZZ"});
        test.expect(4);
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "zz-ZZ");
        test.equal(fmt.getCalendar(), "gregorian");
        test.equal(fmt.getTemplate(), "dd.MM.yy");
        test.done();
    },
    
    testDateFmtLoadLocaleDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
        test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoader);
        
        new DateFmt({
            locale: "zz-ZZ",
            sync: false,
            onLoad: function (fmt) {
        test.expect(4);
                test.ok(fmt !== null);
                
                test.equal(fmt.getLocale().toString(), "zz-ZZ");
                test.equal(fmt.getCalendar(), "gregorian");
                test.equal(fmt.getTemplate(), "dd.MM.yy");
                test.done();
            }
        });
    },
    
    testDateFmtLoadLocaleDataAsynchCached: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
        test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoader);
        
        new DateFmt({
            locale: "zz-ZZ",
            sync: false,
            onLoad: function (fmt) {
        test.expect(4);
                test.ok(fmt !== null);
                
                test.equal(fmt.getLocale().toString(), "zz-ZZ");
                test.equal(fmt.getCalendar(), "gregorian");
                test.equal(fmt.getTemplate(), "dd.MM.yy");
                test.done();
            }
        });
    },
    
    
    testDateFmtTransitionToDSTRightBefore: function(test) {
        ilib.setLoaderCallback(oldLoader);
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
        });
        
        test.equal(fmt.format(date), "1:59 AM PST");
        test.done();
    },
    
    testDateFmtTransitionToDSTRightAfter: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359260000
        });
        
        // 2 minutes later
        test.equal(fmt.format(date), "3:01 AM PDT");
        test.done();
    },
    
    testDateFmtTransitionFromDSTDayBefore: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414828740000 // this is 11/1/2014 at 0:59am
        });
        
        test.equal(fmt.format(date), "12:59 AM PDT");
        test.done();
    },
    
    testDateFmtTransitionFromDSTWellBefore: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414915140000 // this is 11/2/2014 at 0:59am
        });
        
        test.equal(fmt.format(date), "12:59 AM PDT");
        test.done();
    },
    
    testDateFmtTransitionFromDSTRightBefore: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
        });
        
        test.equal(fmt.format(date), "1:59 AM PDT");
        test.done();
    },
    
    testDateFmtTransitionFromDSTRightAfter: function(test) {
        var fmt = new DateFmt({
            length: "full",
            type: "time",
            time: "hmaz",
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918860000
        });
        
        // 2 minutes later
        test.equal(fmt.format(date), "1:01 AM PST");
        test.done();
    },
    
    
    testDateFmtAltCalThaiInEnglish: function(test) {
        var fmt = new DateFmt({
            locale: "en-US",
            length: "full",
            type: "datetime",
            timezone: "America/Los_Angeles",
            calendar: "thaisolar"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new ThaiSolarDate({
            timezone: "America/Los_Angeles",
            unixtime: 1404445524043
        });
        
        test.equal(fmt.format(date), "Karakadakhom 3, 2557 at 8:45 PM");
        test.done();
    },
    
    testDateFmtAltCalHebrewInEnglish: function(test) {
        var fmt = new DateFmt({
            locale: "en-US",
            length: "full",
            type: "datetime",
            timezone: "America/Los_Angeles",
            calendar: "hebrew"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new HebrewDate({
            timezone: "America/Los_Angeles",
            unixtime: 1404445524043
        });
        
        test.equal(fmt.format(date), "Tammuz 6, 5774 at 8:45 PM");
        test.done();
    },
    
    testDateFmtAltCalIslamicInEnglish: function(test) {
        var fmt = new DateFmt({
            locale: "en-US",
            length: "full",
            type: "datetime",
            timezone: "America/Los_Angeles",
            calendar: "islamic"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new IslamicDate({
            timezone: "America/Los_Angeles",
            unixtime: 1404445524043
        });
        
        test.equal(fmt.format(date), "Ramaḍān 5, 1435 at 8:45 PM");
        test.done();
    },
    
    testDateFmtAltCalPersianInEnglish: function(test) {
        var fmt = new DateFmt({
            locale: "en-US",
            length: "full",
            type: "datetime",
            timezone: "America/Los_Angeles",
            calendar: "persian"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new PersianDate({
            timezone: "America/Los_Angeles",
            unixtime: 1404445524043
        });
        
        test.equal(fmt.format(date), "Tir 12, 1393 at 8:45 PM");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_am_ET_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 5);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_am_ET_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "ጥዋት");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_am_ET_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "05:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_am_ET_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 2);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_am_ET_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "ጥዋት");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_am_ET_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "11:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_am_ET_locale_ethiopic_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 5);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_am_ET_locale_ethiopic_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "ጥዋት");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_am_ET_locale_ethiopic_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale_ethiopic_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "05:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 2);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_zh_CN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "上午");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "11:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 2);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_zh_CN_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "上午");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale_gregorian_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "11:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale_chinese_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 7);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_zh_CN_locale_chinese_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "凌晨");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale_chinese_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale_chinese_meridiems: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "05:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeLength_with_en_US_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt.length, 2);
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_en_US_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeStart_with_en_US_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].start, "00:00");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeEnd_with_en_US_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "en-US"});
        test.expect(2);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].end, "11:59");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_bn_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "bn-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_gu_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "gu-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_kn_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "kn-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "ಪೂರ್ವಾಹ್ನ");
        test.equal(fmt[1].name, "ಅಪರಾಹ್ನ");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_ml_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "ml-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_mr_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "mr-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "म.पू.");
        test.equal(fmt[1].name, "म.उ.");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_or_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "or-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "am");
        test.equal(fmt[1].name, "pm");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_pa_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "pa-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "ਪੂ.ਦੁ.");
        test.equal(fmt[1].name, "ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_ta_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "ta-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "முற்பகல்");
        test.equal(fmt[1].name, "பிற்பகல்");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_te_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "te-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_ur_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "ur-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_as_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "as-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "পূৰ্বাহ্ণ");
        test.equal(fmt[1].name, "অপৰাহ্ণ");
        test.done();
    },
    testDateFmtGetMeridiemsRangeName_with_hi_IN_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "hi-IN"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "पूर्वाह्न");
        test.equal(fmt[1].name, "अपराह्न");
        test.done();
    },
    
    testDateFmtGetMeridiemsRangeName_with_ur_PK_locale: function(test) {
        var fmt = DateFmt.getMeridiemsRange({locale: "ur-PK"});
        test.expect(3);
        test.ok(fmt !== null);
    
        test.equal(fmt[0].name, "AM");
        test.equal(fmt[1].name, "PM");
        test.done();
    },
    
    testDateFmtGetMeridiemsRange_with_noArgument: function(test) {
        var fmt = new DateFmt();
        test.expect(2);
        test.ok(fmt !== null);
    
        var mdRange = fmt.getMeridiemsRange();
        // if locale is not specified, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    },
    
    testDateFmtGetMeridiemsRange_with_undefined_locale: function(test) {
        var fmt = new DateFmt({ locale: undefined });
        test.expect(2);
        test.ok(fmt !== null);
    
        var mdRange = fmt.getMeridiemsRange();
        // if locale is not specified, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    },
    
    testDateFmtGetMeridiemsRange_with_wrong_locale: function(test) {
        var fmt = new DateFmt({ locale: "wrong" });
        test.expect(2);
        test.ok(fmt !== null);
    
        var mdRange = fmt.getMeridiemsRange();
        // if locale is specified wrong value, DateFmt takes default locale.
        test.ok("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
        test.done();
    }
    
};