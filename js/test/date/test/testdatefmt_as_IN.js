/*
 * testdatefmt_as_IN.js - test the date formatter object in Assamese for India
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
function testDateFmtINConstructorEmpty_as_IN() {
    var fmt = new DateFmt({locale: "as-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("২৯-৯-২০১১", fmt.format(date));
}

function testDateFmtINSimpleMedium_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-০৯-২০১১", fmt.format(date));
}

function testDateFmtINSimpleLong_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ, ২০১১", fmt.format(date));
}

function testDateFmtINSimpleFull_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ, ২০১১", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_as_IN1() {
    var fmt = new DateFmt({locale: "as-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-৯-২০১১ ১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-০৯-২০১১ ১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ, ২০১১ ১.৪৫. অপৰাহ্ণ", fmt.format(date));
}


function testDateFmtINTemplateCalendar_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
    assertEquals("২০১১-০৯-২৯", fmt.format(date));
}



function testDateFmtINTemplateClock12SwitchHH_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("০১:৪৫", fmt.format(date));
}

function testDateFmtINTemplateClock12Switchkk_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("০১:৪৫", fmt.format(date));
}

function testDateFmtINTemplateClock24Switchhh_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১৩:৪৫", fmt.format(date));
}

function testDateFmtINTemplateClock24SwitchKK_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১৩:৪৫", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("০১:৪৫", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("০১:৪৫", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১৩:৪৫", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১৩:৪৫", fmt.format(date));
}


function testDateFmtINTypeDate_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-৯-২০১১", fmt.format(date));
}

function testDateFmtINTypeTime_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINTypeDateTime_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-৯-২০১১ ১.৪৫. অপৰাহ্ণ", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২০১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsD_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsDM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৯-২০১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯-৯-২০১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৫, ৯-২৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৫, ১১-৯-২৯", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২০১১", fmt.format(date));
}

function testDateFmtINFullDateComponentsM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ছেপ্তেম্বৰ", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯", fmt.format(date));
}

function testDateFmtINFullDateComponentsDM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ছেপ্তেম্বৰ, ২০১১", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ ছেপ্তেম্বৰ, ২০১১", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃহষ্পতিবাৰ, ২৯ ছেপ্তেম্বৰ", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃহষ্পতিবাৰ, ২৯ ছেপ্তেম্বৰ, ২০১১", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("৩৭", fmt.format(date));
}

function testDateFmtINShortTimeComponentsM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("৪৫", fmt.format(date));
}

function testDateFmtINShortTimeComponentsH_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১", fmt.format(date));
}


function testDateFmtINShortTimeComponentsHM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("৩৭", fmt.format(date));
}

function testDateFmtINFullTimeComponentsM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("৪৫", fmt.format(date));
}

function testDateFmtINFullTimeComponentsH_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHM_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫. অপৰাহ্ণ", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_as_IN() {
    var fmt = new DateFmt({
		locale: "as-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১.৪৫.৩৭ অপৰাহ্ণ IST", fmt.format(date));
}
/*
function testDateFmtFormatRelativeWithinMinuteAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinMinuteBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinHourAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinHourBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinDayAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinDayBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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

function testDateFmtFormatRelativeWithinFortnightAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinFortnightBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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

function testDateFmtFormatRelativeWithinQuarterAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinQuarterBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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

function testDateFmtFormatRelativeWithinTwoYearsAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeWithinTwoYearsBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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

function testDateFmtFormatRelativeYearsAfter_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
function testDateFmtFormatRelativeYearsBefore_as_IN() {
    var fmt = new DateFmt({locale: "as-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "as-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "as-IN",
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
*/

