/*
 * testdatefmt_bn_IN.js - test the date formatter object in bengali for India
 * 
 * Copyright © 2013, JEDLSoft
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
function testDateFmtINConstructorEmpty_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("২৯/৯/১১", fmt.format(date));
}

function testDateFmtINSimpleMedium_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ সেপ্টেম্বর, ১১", fmt.format(date));
}

function testDateFmtINSimpleLong_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}

function testDateFmtINSimpleFull_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_bn_IN1() {
    var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ ২৯/৯/১১", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ ২৯ সেপ্টেম্বর, ১১", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ ২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ ২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}


function testDateFmtINTemplateCalendar_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", calendar: "julian", template: "yyyy-MM-dd"});
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



function testDateFmtINTemplateClock12SwitchHH_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateClock12Switchkk_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateClock24Switchhh_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateClock24SwitchKK_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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


function testDateFmtINTypeDate_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯/৯/১১", fmt.format(date));
}

function testDateFmtINTypeTime_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINTypeDateTime_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ ২৯/৯/১১", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("০৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINShortDateComponentsD_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINShortDateComponentsDM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯/৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("৯/১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯/৯/১১", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃ, ২৯-৯", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃ, ২৯/৯/১১", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINFullDateComponentsM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("সেপ্টেম্বর", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINFullDateComponentsDM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ সেপ্টেম্বর", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("সেপ্টেম্বর ২০১১", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃহষ্পতিবার ২৯ সেপ্টেম্বর", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("বৃহষ্পতিবার, ২৯ সেপ্টেম্বর, ২০১১", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINShortTimeComponentsM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINShortTimeComponentsH_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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


function testDateFmtINShortTimeComponentsHM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINFullTimeComponentsM_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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

function testDateFmtINFullTimeComponentsH_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
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



function testDateFmtINFullTimeComponentsHMA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAWestern_bn_IN() {
    var fmt = new DateFmt({
    	locale: "bn-IN", 
    	type: "time", 
    	length: "full", 
    	time: "hmsa",
    	useNative: false
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫ অপরাহ্ণ", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_bn_IN() {
    var fmt = new DateFmt({
		locale: "bn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("১:৪৫:৩৭ অপরাহ্ণ IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 সেকেন্ডের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 সেকেন্ড পূর্বে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 মিনিটের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 মিনিট পূর্বে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ঘন্টাের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ঘন্টা পূর্বে", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 দিনের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 দিন পূর্বে", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 সপ্তাহের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 সপ্তাহ পূর্বে", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 মাসের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 মাস পূর্বে", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 বছরের মধ্যে", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_bn_IN() {
    var fmt = new DateFmt({locale: "bn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "bn-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "bn-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 বছর পূর্বে", fmt.formatRelative(reference, date));
}


