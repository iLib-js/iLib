/*
 * testdatefmt_uk_UK.js - test the date formatter object in Ukranian
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
function testDateFmtConstructorEmpty_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtSimpleMedium_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вер. 2011 р.", fmt.format(date));
}

function testDateFmtSimpleLong_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня 2011 р.", fmt.format(date));
}

function testDateFmtSimpleFull_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня 2011 р.", fmt.format(date));
}

function testDateFmtSimpleTimeShort_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtSimpleTimeMedium_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtSimpleTimeLong_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtSimpleTimeFull_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtDateTimeSimpleShort_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtDateTimeSimpleMedium_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вер. 2011 р. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня 2011 р. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня 2011 р. 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "uk-UA",
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


function testDateFmtTemplateClock12SwitchHH_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateClock12Switchkk_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateClock24Switchhh_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateClock24SwitchKK_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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


function testDateFmtTypeDate_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTypeTime_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtTypeDateTime_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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


function testDateFmtShortDateComponentsY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsN_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("В", fmt.format(date));
}

function testDateFmtShortDateComponentsD_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsDM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsDMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsWDM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortDateComponentsWDMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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


function testDateFmtFullDateComponentsY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullDateComponentsM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("вересня", fmt.format(date));
}

function testDateFmtFullDateComponentsD_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullDateComponentsDM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Вересень 2011 р.", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 вересня 2011 р.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четвер, 29 вересня", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четвер, 29 вересня 2011 р.", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsH_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsMS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsHM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsHMS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsHMA_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsHMZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtShortTimeComponentsHMSZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsH_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsMS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsHM_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsHMS_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsHMA_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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

function testDateFmtFullTimeComponentsHMZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_uk_UA() {
    var fmt = new DateFmt({
        locale: "uk-UA", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_uk_UA() {
    var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "uk-UA",
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



