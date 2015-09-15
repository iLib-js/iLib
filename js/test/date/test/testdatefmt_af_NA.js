/*
 * testdatefmt_af_NA.js - test the date formatter object in Afrikaans
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_af_NA() {
    var fmt = new DateFmt({locale: "af-NA"});
    
    assertNotNull(fmt);
}

function testDateFmtSimpleShort_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtSimpleMedium_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Sep 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Jan() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Januarie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Feb() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Februarie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Mar() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Maart 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_NA_Apr() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 April 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_May() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Mei 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Jun() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Junie 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Jul() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Julie 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_NA_Aug() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Augustus 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Sep() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Oct() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Oktober 2011", fmt.format(date));
}

function testDateFmtSimpleLong_af_NA_Nov() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 November 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_NA_Dec() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Desember 2011", fmt.format(date));
}
function testDateFmtSimpleLong_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "long"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleFull_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short", type: "time"});
    assertNotNull(fmt);
    
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium", type: "time"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", type: "time"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
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
    assertEquals("29 Sep 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29", fmt.format(date));
}



function testDateFmtTemplateClock12SwitchHH_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "hh:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "KK:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "HH:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", template: "kk:mm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtTypeDate_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "date"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtTypeTime_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTypeDateTime_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "datetime"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "y"});
    assertNotNull(fmt);
    
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
    assertEquals("2011", fmt.format(date));
}

function testDateFmtShortDateComponentsM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "m"});
    assertNotNull(fmt);
    
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
    assertEquals("09", fmt.format(date));
}

function testDateFmtShortDateComponentsN_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
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
    assertEquals("S", fmt.format(date));
}

function testDateFmtShortDateComponentsN_af_NA_Mar() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
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
    assertEquals("M", fmt.format(date));
}
function testDateFmtShortDateComponentsD_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "d"});
    assertNotNull(fmt);
    
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
    assertEquals("29", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "dm"});
    assertNotNull(fmt);
    
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
    assertEquals("09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "my"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "dmy"});
    assertNotNull(fmt);
    
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
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "wdm"});
    assertNotNull(fmt);
    
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
    assertEquals("S 09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", date: "wdmy"});
    assertNotNull(fmt);
    
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
    assertEquals("S 2554-09-29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "y"});
    assertNotNull(fmt);
    
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
    assertEquals("2011", fmt.format(date));
}

function testDateFmtFullDateComponentsM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "m"});
    assertNotNull(fmt);
    
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
    assertEquals("September", fmt.format(date));
}

function testDateFmtFullDateComponentsD_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "d"});
    assertNotNull(fmt);
    
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
    assertEquals("29", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "dm"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "my"});
    assertNotNull(fmt);
    
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
    assertEquals("September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
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
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
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
    assertEquals("Donderdag 19 Februarie", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
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
    assertEquals("Donderdag 19 Februarie 2015", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "s"});
    assertNotNull(fmt);
    
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
    assertEquals("37", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "m"});
    assertNotNull(fmt);
    
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
    assertEquals("45", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "h"});
    assertNotNull(fmt);
    
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
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "ms"});
    assertNotNull(fmt);
    
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
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hms"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hma"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", 
        calendar: "gregorian", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45 WAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", 
        calendar: "gregorian", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45 WAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", 
        calendar: "gregorian", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37 WAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", 
        calendar: "gregorian", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37 WAST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
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
    assertEquals("37", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
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
    assertEquals("45", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
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
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
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
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45 WAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45 WAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", 
        calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37 WAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37 WAST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_af_NA() {
    var fmt = new DateFmt({
        locale: "af-NA", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
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
    assertEquals("13:45:37 WAST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 30 sekondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("30 sekondes gelede", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 10 minute", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("10 minute gelede", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 4 uur", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("4 uur gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 4 dae", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("4 dae gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 9 weke", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("9 weke gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 16 maande", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("14 maande gelede", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("in 14 jaar", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_af_NA() {
    var fmt = new DateFmt({locale: "af-NA", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
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
    assertEquals("21 jaar gelede", fmt.formatRelative(reference, date));
}

