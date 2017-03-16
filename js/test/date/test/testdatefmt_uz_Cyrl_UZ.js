/*
 * testdatefmtrange_uz_Cyrl_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
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
function testDateFmtConstructorEmpty_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtSimpleMedium_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сен 29", fmt.format(date));
}

function testDateFmtSimpleLong_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр 29", fmt.format(date));
}

function testDateFmtSimpleFull_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр 29", fmt.format(date));
}

function testDateFmtSimpleTimeShort_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtSimpleTimeMedium_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtSimpleTimeLong_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtSimpleTimeFull_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtDateTimeSimpleShort_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сен 29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр 29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр 29 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "uz-Cyrl-UZ",
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


function testDateFmtTemplateClock12SwitchHH_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateClock12Switchkk_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateClock24Switchhh_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateClock24SwitchKK_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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


function testDateFmtTypeDate_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtTypeTime_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtTypeDateTime_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortDateComponentsM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortDateComponentsN_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("С", fmt.format(date));
}

function testDateFmtShortDateComponentsD_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortDateComponentsDM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("П, 09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("П, 11/09/29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullDateComponentsM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Сентябр", fmt.format(date));
}

function testDateFmtFullDateComponentsD_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullDateComponentsDM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Сентябр 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Сентябр 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("пайшанба, Сентябр 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("пайшанба, 2011 Сентябр 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsH_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsMS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMA_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMAZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMSA_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMSZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtShortTimeComponentsHMSAZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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


function testDateFmtFullTimeComponentsS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsH_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsMS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHM_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHMS_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHMA_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHMZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHMAZ_uz_Cyrl_UZ() {
    var fmt = new DateFmt({
        locale: "uz-Cyrl-UZ", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFullTimeComponentsHMSA_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
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

function testDateFmtFormatRelativeWithinMinuteAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 сониядан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 сония олдин", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 дақиқадан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 дақиқа олдин", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 соатдан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 соат олдин", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 кундан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 кун олдин", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ҳафтадан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ҳафта олдин", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 ойдан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 ой олдин", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 йилдан сўнг", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_uz_Cyrl_UZ() {
    var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "uz-Cyrl-UZ",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 йил олдин", fmt.formatRelative(reference, date));
}

