/*
 * testdatefmt_sr_Latn_RS.js - test the date formatter object in č,aiLand
 * 
 * Copyright © 2012-2015, JEDLSoft
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

function testDateFmtConstructorEmpty_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.11.", fmt.format(date));
}

function testDateFmtSimpleMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.09.2011.", fmt.format(date));
}

function testDateFmtSimpleLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. septembar 2011.", fmt.format(date));
}

function testDateFmtSimpleFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. septembar 2011.", fmt.format(date));
}

function testDateFmtSimpleTimeShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.11. 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.09.2011. 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. septembar 2011. 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. septembar 2011. 13.45", fmt.format(date));
}


function testDateFmtTemplateCalendar_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "sr-Latn-RS",
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



function testDateFmtTemplateClock12SwitchHH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateClock12Switchkk_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateClock24Switchhh_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateClock24SwitchKK_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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


function testDateFmtTypeDate_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.11.", fmt.format(date));
}

function testDateFmtTypeTime_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtTypeDateTime_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.11. 13.45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortDateComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortDateComponentsN_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("s", fmt.format(date));
}

function testDateFmtShortDateComponentsD_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortDateComponentsDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("9.11.", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.11.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("č, 29.9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("č, 29.9.11.", fmt.format(date));
}


function testDateFmtFullDateComponentsY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtFullDateComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembar", fmt.format(date));
}

function testDateFmtFullDateComponentsD_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtFullDateComponentsDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. septembar", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembar 2011.", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. septembar 2011.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("četvrtak, 29. septembar", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("četvrtak, 29. septembar 2011.", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortTimeComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortTimeComponentsH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtShortTimeComponentsMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}



function testDateFmtShortTimeComponentsHMSA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtFullTimeComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtFullTimeComponentsH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
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

function testDateFmtFullTimeComponentsMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "ahmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}



function testDateFmtFullTimeComponentsHMSAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CET", fmt.format(date));
}

/*function testDateFmtFormatRelativeWithinMinuteAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("за 30 sekundi", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("пре 30 sekundi", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 10 minuta", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 10 minuta", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 4 sati", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 4 sati", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 4 dana", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 4 dana", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 9 nedelja", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 9 nedelja", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 16 meseci", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 14 meseci", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 14 godina", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sr-Latn-RS",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 21 godina", fmt.formatRelative(reference, date));
}
*/
