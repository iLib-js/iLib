/*
 * testdatefmt_he_IL.js - test the date formatter object in Hebrew
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

module.exports.testdatefmt_he_IL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtSimpleShort_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9‏.2011");
        test.done();
    },
    
    testDateFmtSimpleMedium_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספט׳ 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר 2011");
        test.done();
    },
    
    testDateFmtSimpleFull_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר 2011");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeMedium_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeLong_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeFull_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleShort_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9‏.2011, ‏13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספט׳ 2011, ‏13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר 2011 בשעה ‏13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר 2011 בשעה ‏13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "he-IL",
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
    
    
    
    testDateFmtTemplateClock12SwitchHH_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateClock12Switchkk_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateClock24Switchhh_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateClock24SwitchKK_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    
    testDateFmtTypeDate_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9‏.2011");
        test.done();
    },
    
    testDateFmtTypeTime_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtTypeDateTime_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9‏.2011, ‏13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortDateComponentsM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9");
        test.done();
    },
    
    testDateFmtShortDateComponentsN_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ס");
        test.done();
    },
    
    testDateFmtShortDateComponentsD_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortDateComponentsDM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏9‏.2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏.9‏.2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ה׳, ‏29‏.9");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ה׳, 29‏.9‏.2011");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullDateComponentsM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ספטמבר");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullDateComponentsDM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ספטמבר 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 בספטמבר 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "יום חמישי, ‏29 בספטמבר");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "יום חמישי, 29 בספטמבר 2011");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortTimeComponentsM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortTimeComponentsH_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortTimeComponentsMS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtShortTimeComponentsHM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMA_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45 IDT");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45 IDT");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37 IDT");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37 IDT");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullTimeComponentsM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullTimeComponentsH_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullTimeComponentsMS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
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
    
    testDateFmtFullTimeComponentsHM_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMS_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMA_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            length: "full", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45 IDT");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45 IDT");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37 IDT");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSAZ_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            length: "full", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37 IDT");
        test.done();
    },
    
    testDateFmtWithTimeZoneAndNoDST_he_IL: function(test) {
        var fmt = new DateFmt({
            locale: "he-IL", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏13:45:37 IST");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinMinuteAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });       
        test.equal(fmt.formatRelative(reference, date), "‏בעוד ‏30 שניות");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני ‏30 שניות");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 10 דקות");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 10 דקות");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 4 שעות");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 4 שעות");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 4 ימים");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 4 ימים");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 9 שבועות");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 9 שבועות");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 16 חודשים");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 14 חודשים");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏בעוד 14 שנים");
        test.done();
    
    },
    testDateFmtFormatRelativeYearsBefore_he_IL: function(test) {
        var fmt = new DateFmt({locale: "he-IL", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "he-IL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "he-IL",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏לפני 21 שנים");
        test.done();
    }
    
    
    
};