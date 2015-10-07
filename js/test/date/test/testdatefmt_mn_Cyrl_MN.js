/*
 * testdatefmt_mn_Cyrl_MN.js - test the date formatter object in Mongolian
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtSimpleMedium_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 9-р сар 29", fmt.format(date));
}

function testDateFmtSimpleLong_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09 сарын 29", fmt.format(date));
}

function testDateFmtSimpleFull_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09 сарын 29", fmt.format(date));
}

function testDateFmtSimpleTimeShort_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtSimpleTimeMedium_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtSimpleTimeLong_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtSimpleTimeFull_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtDateTimeSimpleShort_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29, 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 9-р сар 29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09 сарын 29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09 сарын 29 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateCalendarIncompatibleDateType_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2011-09-16 13:45", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateClock12Switchkk_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateClock24Switchhh_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateClock24SwitchKK_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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


function testDateFmtTypeDate_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTypeTime_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtTypeDateTime_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29, 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsN_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsD_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsDM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsDMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortDateComponentsWDM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("5, 09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("5, 2011-09-29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullDateComponentsM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullDateComponentsD_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullDateComponentsDM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09 сарын 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 оны 09 сарын 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("пүрэв, 09 сарын 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("пүрэв, 2011 оны 09 сарын 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsH_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsMS() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsHM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsHMZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ULAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ULAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtShortTimeComponentsHMSZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ULAST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ULAST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsH_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsMS() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsHM_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsHMZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ULAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ULAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
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

function testDateFmtFullTimeComponentsHMSZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ULAST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ULAST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_mn_Cyrl_MN() {
    var fmt = new DateFmt({
        locale: "mn-Cyrl-MN", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Ulaanbaatar"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ULAT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 секундд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 секундийн өмнө", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 минутд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 минутийн өмнө", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 цагд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 цагийн өмнө", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 хоногд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 хоногийн өмнө", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 долоо хоногд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 долоо хоногийн өмнө", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 сард", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 сарийн өмнө", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 жилд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_mn_Cyrl_MN() {
    var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mn-Cyrl-MN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 жилийн өмнө", fmt.formatRelative(reference, date));
}

