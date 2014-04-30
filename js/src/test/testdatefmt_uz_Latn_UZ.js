/*
 * testdatefmtrange_uz_Latn_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testDateFmtConstructorEmpty_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtSimpleMedium_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11 Sen 29", fmt.format(date));
}

function testDateFmtSimpleLong_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Sen 29", fmt.format(date));
}

function testDateFmtSimpleFull_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Sentyabr 29", fmt.format(date));
}

function testDateFmtSimpleTimeShort_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtSimpleTimeMedium_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtSimpleTimeLong_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtSimpleTimeFull_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtDateTimeSimpleShort_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11-9-29", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11 Sen 29", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011 Sen 29", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011 Sentyabr 29", fmt.format(date));
}


function testDateFmtTemplateCalendar_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "uz-Latn-UZ",
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


function testDateFmtTemplateClock12SwitchHH_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateClock12Switchkk_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateClock24Switchhh_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateClock24SwitchKK_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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


function testDateFmtTypeDate_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTypeTime_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtTypeDateTime_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11-9-29", fmt.format(date));
}


function testDateFmtShortDateComponentsY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsN_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsD_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsDM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsDMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortDateComponentsWDM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("P, 9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("P, 11-9-29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullDateComponentsM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sen", fmt.format(date));
}

function testDateFmtFullDateComponentsD_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullDateComponentsDM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sentyabr 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Sentyabr", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Sentyabr 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("payshanba Sen 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("payshanba, 2011 Sen 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsH_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsMS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsHM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsHMS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsHMA_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsHMZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 UZT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 UZT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtShortTimeComponentsHMSZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 UZT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 UZT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsH_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsMS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsHM_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsHMS_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsHMA_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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

function testDateFmtFullTimeComponentsHMZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 UZT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Latn-UZ", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 UZT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_uz_Latn_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "uz-Latn-UZ",
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



