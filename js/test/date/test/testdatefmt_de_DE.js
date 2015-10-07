/*
 * testdatefmt_de_DE.js - test the date formatter object in German
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
function testDateFmtConstructorEmpty_de_DE() {
    var fmt = new DateFmt({locale: "de-DE"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtSimpleMedium_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtSimpleLong_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September 2011", fmt.format(date));
}

function testDateFmtSimpleFull_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtSimpleTimeMedium_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtSimpleTimeLong_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtSimpleTimeFull_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtDateTimeSimpleShort_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11, 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011, 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September 2011 um 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September 2011 um 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "de-DE",
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

function testDateFmtTemplateCalendarIncompatibleDateType_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateClock12SwitchHH_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateClock12Switchkk_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateClock24Switchhh_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateClock24SwitchKK_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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


function testDateFmtTypeDate_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTypeTime_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtTypeDateTime_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11, 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsN_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsD_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsDM() {
    var fmt = new DateFmt({locale: "de-DE", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsDMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortDateComponentsWDM() {
    var fmt = new DateFmt({locale: "de-DE", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("D, 29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("D, 29.09.11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullDateComponentsM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullDateComponentsD_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullDateComponentsDM() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullDateComponentsDMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Donnerstag, 29. September", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Donnerstag, 29. September 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsH_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsMS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsHM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsHMS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsHMA_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsHMZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtShortTimeComponentsHMSZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsH_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsMS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsHM_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsHMS_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsHMA_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsHMZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
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

function testDateFmtFullTimeComponentsHMSZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_de_DE() {
    var fmt = new DateFmt({
        locale: "de-DE", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Berlin"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CET", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("in 30 Sekunden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("vor 30 Sekunden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 10 Minuten", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 10 Minuten", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 Stunden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 4 Stunden", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 Tage", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 4 Tage", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 9 Wochen", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 9 Wochen", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 16 Monate", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 14 Monate", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 14 Jahre", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_de_DE() {
    var fmt = new DateFmt({locale: "de-DE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "de-DE",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("vor 21 Jahre", fmt.formatRelative(reference, date));
}

