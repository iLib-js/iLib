/*
 * testdatefmt_ru_RU.js - test the date formatter object in Russian
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
function testDateFmtConstructorEmpty_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtSimpleMedium_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011", fmt.format(date));
}

function testDateFmtSimpleLong_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сент. 2011", fmt.format(date));
}

function testDateFmtSimpleFull_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сентября 2011 г.", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtSimpleTimeMedium_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtSimpleTimeLong_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtSimpleTimeFull_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtDateTimeSimpleShort_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сент. 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сентября 2011 г. 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "ru-RU",
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

function testDateFmtTemplateCalendarIncompatibleDateType_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateClock12SwitchHH_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateClock12Switchkk_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateClock24Switchhh_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateClock24SwitchKK_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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


function testDateFmtTypeDate_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtTypeTime_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtTypeDateTime_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortDateComponentsM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortDateComponentsN_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortDateComponentsD_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortDateComponentsDM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Ч, 29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Ч, 29.09.11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullDateComponentsM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("сентября", fmt.format(date));
}

function testDateFmtFullDateComponentsD_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullDateComponentsDM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сентября", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("сентября 2011 г.", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 сентября 2011 г.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четверг, 29 сентября", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четверг, 29 сентября 2011 г.", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsH_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsMS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsHM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsHMS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsHMA_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsHMZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 MSK", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 MSK", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtShortTimeComponentsHMSZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 MSK", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 MSK", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsH_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsMS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsHM_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsHMS_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsHMA_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsHMZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 MSK", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 MSK", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
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

function testDateFmtFullTimeComponentsHMSZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 MSK", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 MSK", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ru_RU() {
    var fmt = new DateFmt({
        locale: "ru-RU", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Moscow"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 MSK", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("через 30 секунд", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 секунд назад", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 10 минут", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 минут назад", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 4 часа", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 часа назад", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 4 дня", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 дня назад", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 9 недель", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 недель назад", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 16 месяцев", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 месяцев назад", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("через 14 лет", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ru_RU() {
    var fmt = new DateFmt({locale: "ru-RU", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ru-RU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ru-RU",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 год назад", fmt.formatRelative(reference, date));
}


