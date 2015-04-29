/*
 * testdatefmt_pa_IN.js - test the date formatter object in Punjabi for India
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

function testDateFmtINConstructorEmpty_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtINSimpleMedium_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ਸਤੰਬਰ 11", fmt.format(date));
}

function testDateFmtINSimpleLong_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 ਸਤੰਬਰ 29", fmt.format(date));
}

function testDateFmtINSimpleFull_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ਸਤੰਬਰ 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_pa_IN1() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ 11-9-29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ 29 ਸਤੰਬਰ 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ 2011 ਸਤੰਬਰ 29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ 29 ਸਤੰਬਰ 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", calendar: "julian", template: "yyyy-MM-dd"});
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



function testDateFmtINTemplateClock12SwitchHH_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateClock12Switchkk_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateClock24Switchhh_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateClock24SwitchKK_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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


function testDateFmtINTypeDate_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtINTypeTime_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINTypeDateTime_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ 11-9-29", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortDateComponentsM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortDateComponentsD_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortDateComponentsDM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortDateComponentsMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਵੀ, 9-29", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਵੀ, 11-9-29", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINFullDateComponentsM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਸਤੰਬਰ", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINFullDateComponentsDM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ਸਤੰਬਰ", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਸਤੰਬਰ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ਸਤੰਬਰ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਵੀਰਵਾਰ ਸਤੰਬਰ 29", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ਵੀਰਵਾਰ, 2011 ਸਤੰਬਰ 29", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortTimeComponentsM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortTimeComponentsH_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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


function testDateFmtINShortTimeComponentsHM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortTimeComponentsHMS_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINShortTimeComponentsHMA_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINFullTimeComponentsM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtINFullTimeComponentsH_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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



function testDateFmtINFullTimeComponentsHM_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_pa_IN() {
    var fmt = new ilib.DateFmt({
		locale: "pa-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ਬਾਅਦ ਦੁਪਹਿਰ IST", fmt.format(date));
}
//should be uncommented after getting the transalations for punjabi
/*function testDateFmtFormatRelativeWithinMinuteAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinMinuteBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinHourAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinHourBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinDayAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinDayBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtFormatRelativeWithinFortnightAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinFortnightBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtFormatRelativeWithinQuarterAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinQuarterBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtFormatRelativeWithinTwoYearsAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeWithinTwoYearsBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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

function testDateFmtFormatRelativeYearsAfter_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
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
function testDateFmtFormatRelativeYearsBefore_pa_IN() {
    var fmt = new ilib.DateFmt({locale: "pa-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "pa-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 साल पहले", fmt.formatRelative(reference, date));
}*/


