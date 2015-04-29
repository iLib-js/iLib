/*
 * testdatefmt_gu_IN.js - test the date formatter object in gujrati for India
 * 
 * Copyright © 2013-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tgus file except in compliance with the License.
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

function testDateFmtINConstructorEmpty_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINSimpleMedium_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 સપ્ટે, 11", fmt.format(date));
}

function testDateFmtINSimpleLong_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, સપ્ટે 2011", fmt.format(date));
}

function testDateFmtINSimpleFull_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 સપ્ટેમ્બર, 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_gu_IN1() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી 29/9/11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી 29 સપ્ટે, 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી 29, સપ્ટે 2011", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી 29 સપ્ટેમ્બર, 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.JulDate({
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



function testDateFmtINTemplateClock12SwitchHH_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateClock12Switchkk_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateClock24Switchhh_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateClock24SwitchKK_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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


function testDateFmtINTypeDate_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINTypeTime_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINTypeDateTime_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી 29/9/11", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsN_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsD_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsDM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortDateComponentsWDM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ગુ, 29/9", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ગુ, 9/29/11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINFullDateComponentsM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("સપ્ટેમ્બર", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINFullDateComponentsDM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 સપ્ટેમ્બર", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("સપ્ટેમ્બર 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 સપ્ટેમ્બર, 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ગુરુવાર, 29 સપ્ટે", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ગુરુવાર, સપ્ટે 29, 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortTimeComponentsM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINShortTimeComponentsH_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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


function testDateFmtINShortTimeComponentsHM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINFullTimeComponentsM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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

function testDateFmtINFullTimeComponentsH_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
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



function testDateFmtINFullTimeComponentsHM_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45 બપોર પછી", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_gu_IN() {
    var fmt = new ilib.DateFmt({
		locale: "gu-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 બપોર પછી IST", fmt.format(date));
}

function testDateFmtFormatRelativeWitgunMinuteAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 સેકંડ માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunMinuteBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 સેકંડ પહેલા", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunHourAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 મિનિટ માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunHourBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 મિનિટ પહેલા", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunDayAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 કલાક માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunDayBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 કલાક પહેલા", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitgunFortnightAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 દિવસ માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunFortnightBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 દિવસ પહેલા", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitgunQuarterAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 અઠવાડિયા માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunQuarterBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 અઠવાડિયા પહેલા", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitgunTwoYearsAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 મહિનો માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitgunTwoYearsBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 મહિનો પહેલા", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 વર્ષ માં", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_gu_IN() {
    var fmt = new ilib.DateFmt({locale: "gu-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "gu-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 વર્ષ પહેલા", fmt.formatRelative(reference, date));
}


