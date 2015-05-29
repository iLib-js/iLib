/*
 * testdatefmt_hi_IN.js - test the date formatter object in Hindi for India
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtINConstructorEmpty_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINSimpleMedium_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11", fmt.format(date));
}

function testDateFmtINSimpleLong_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 सितम्बर, 11", fmt.format(date));
}

function testDateFmtINSimpleFull_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 सितम्बर 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_hi_IN1() {
    var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29/9/11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29-09-11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29 सितम्बर, 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29 सितम्बर 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", calendar: "julian", template: "yyyy-MM-dd", timezone: "local"});
    assertNotUndefined(fmt);
    
    var date = new JulianDate({
    	year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}



function testDateFmtINTemplateClock12SwitchHH_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateClock12Switchkk_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateClock24Switchhh_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateClock24SwitchKK_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtINTypeDate_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINTypeTime_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINTypeDateTime_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29/9/11", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S", fmt.format(date));
}

function testDateFmtINShortDateComponentsD_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtINShortDateComponentsDM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9-11", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गु, 29/9", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गु, 29/9/11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सितम्बर", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtINFullDateComponentsDM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 सितम्बर", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सितम्बर 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 सितम्बर 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("बृहस्पतिवार, 29 सितम्बर", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("बृहस्पतिवार, 29 सितम्बर 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtINShortTimeComponentsM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtINShortTimeComponentsH_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}


function testDateFmtINShortTimeComponentsHM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtINFullTimeComponentsM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtINFullTimeComponentsH_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHM_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_hi_IN() {
    var fmt = new DateFmt({
		locale: "hi-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 सेकंड में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 सेकंड पहले", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 मिनट में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 मिनट पहले", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 घंटे में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 घंटे पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 दिन में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 दिन पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 सप्ताह में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 सप्ताह पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 महीने में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 महीने पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 साल में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_hi_IN() {
    var fmt = new DateFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hi-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hi-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 साल पहले", fmt.formatRelative(reference, date));
}


