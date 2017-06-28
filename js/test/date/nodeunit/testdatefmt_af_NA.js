/*
 * testdatefmt_af_NA.js - test the date formatter object in Afrikaans
 * 
 * Copyright © 2015,2017, JEDLSoft
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
    var JulianDate = require("../.././../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmt_af_NA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    testDateFmtSimpleShort_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtSimpleMedium_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep. 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Jan: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 1,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Januarie 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Feb: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 2,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Februarie 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Mar: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 3,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Maart 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_NA_Apr: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 4,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 April 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_May: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 5,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Mei 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Jun: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 6,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Junie 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Jul: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 7,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Julie 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_NA_Aug: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Augustus 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Sep: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Oct: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 10,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Oktober 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_af_NA_Nov: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 November 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_NA_Dec: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Desember 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtSimpleFull_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtSimpleTimeMedium_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeLong_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeFull_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleShort_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep. 2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    
    
    testDateFmtTemplateClock12SwitchHH_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateClock12Switchkk_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateClock24Switchhh_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateClock24SwitchKK_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    
    testDateFmtTypeDate_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtTypeTime_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTypeDateTime_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    
    testDateFmtShortDateComponentsN_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S");
        test.done();
    },
    
    testDateFmtShortDateComponentsN_af_NA_Mar: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 3,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "M");
        test.done();
    },
    testDateFmtShortDateComponentsD_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtShortDateComponentsDM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S, 09-29");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S, 2554-09-29");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtFullDateComponentsDM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donderdag, 19 Februarie");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donderdag, 19 Februarie 2015");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsH_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtShortTimeComponentsMS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMA_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", 
            calendar: "gregorian", 
            type: "time", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", 
            calendar: "gregorian", 
            type: "time", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", 
            calendar: "gregorian", 
            type: "time", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", 
            calendar: "gregorian", 
            type: "time", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAST");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsH_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtFullTimeComponentsMS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHM_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMS_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMA_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", 
            calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSAZ_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAST");
        test.done();
    },
    
    testDateFmtWithTimeZoneAndNoDST_af_NA: function(test) {
        var fmt = new DateFmt({
            locale: "af-NA", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAST");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinMinuteAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 30 sekondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekondes gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 10 minute");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minute gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 4 uur");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 uur gelede");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 4 dae");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 dae gelede");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 9 weke");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 weke gelede");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 16 maande");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 maande gelede");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 14 jaar");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_af_NA: function(test) {
        var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "af-NA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-NA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 jaar gelede");
        test.done();
    }
    
    
};