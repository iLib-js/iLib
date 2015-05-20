/*
 * testdatefmt_af_ZA.js - test the date formatter object in Afrikaans
 * 
 * Copyright © 2015, JEDLSoft
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

function testDateFmtConstructorEmpty_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA"});
    
    assertNotNull(fmt);
}

function testDateFmtSimpleShort_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-09-29", fmt.format(date));
}

function testDateFmtSimpleMedium_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep 11", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Jan() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 1,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Januarie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Feb() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 2,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Februarie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Mar() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 3,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Maart 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_ZA_Apr() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 4,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 April 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_May() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 5,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Mei 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Jun() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 6,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Junie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Jul() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 7,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Julie 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_ZA_Aug() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Augustus 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Sep() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Oct() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 10,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Oktober 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_ZA_Nov() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 November 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_ZA_Dec() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Desember 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 11", fmt.format(date));
}

function testDateFmtSimpleFull_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 vm.", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtSimpleTimeLong_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtSimpleTimeFull_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm. 11-09-29", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm. 29 Sep 11", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm. 29 September 11", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm. 29 September 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "af-ZA",
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



function testDateFmtTemplateClock12SwitchHH_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateClock12Switchkk_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateClock24Switchhh_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateClock24SwitchKK_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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


function testDateFmtTypeDate_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-09-29", fmt.format(date));
}

function testDateFmtTypeTime_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtTypeDateTime_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 nm. 11-09-29", fmt.format(date));
}


function testDateFmtShortDateComponentsY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortDateComponentsM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortDateComponentsN_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortDateComponentsN_af_ZA_Mar() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 3,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("M", fmt.format(date));
}
function testDateFmtShortDateComponentsD_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortDateComponentsDM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortDateComponentsDMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S, 9/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S, 29/9/54", fmt.format(date));
}


function testDateFmtFullDateComponentsY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullDateComponentsM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September", fmt.format(date));
}

function testDateFmtFullDateComponentsD_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullDateComponentsDM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2015,
		month: 2,
		day: 19,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Donderdag, Feb 19", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2015,
		month: 2,
		day: 19,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Donderdag, 19 Feb 2015", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortTimeComponentsM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortTimeComponentsH_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortTimeComponentsMS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortTimeComponentsHMS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtShortTimeComponentsHMA_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 SAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 nm. SAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 nm.", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 SAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 nm. SAST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullTimeComponentsM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullTimeComponentsH_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullTimeComponentsMS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullTimeComponentsHMS_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
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

function testDateFmtFullTimeComponentsHMA_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 nm.", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 SAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 nm. SAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 nm.", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 SAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 nm. SAST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_af_ZA() {
    var fmt = new ilib.DateFmt({
        locale: "af-ZA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 SAST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("in 30 sekondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 sekondes gelede", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 10 minute", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minute gelede", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 uur", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 uur gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 dae", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 dae gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 9 weke", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 weke gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 16 maande", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 maande gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 14 jaar", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_af_ZA() {
    var fmt = new ilib.DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "af-ZA",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 jaar gelede", fmt.formatRelative(reference, date));
}

