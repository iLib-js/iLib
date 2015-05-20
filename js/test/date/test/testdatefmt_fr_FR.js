/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
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
function testDateFmtConstructorEmpty_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtSimpleMedium_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sept 2011", fmt.format(date));
}

function testDateFmtSimpleLong_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sept 2011", fmt.format(date));
}

function testDateFmtSimpleFull_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeMedium_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeLong_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeFull_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtDateTimeSimpleShort_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sept 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sept 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "fr-FR",
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

function testDateFmtTemplateCalendarIncompatibleDateType_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock12SwitchHH_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock12Switchkk_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock24Switchhh_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock24SwitchKK_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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


function testDateFmtTypeDate_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtTypeTime_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtTypeDateTime_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsN_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsD_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsDM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("je 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("je 29/09/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullDateComponentsM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsD_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullDateComponentsDM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("jeudi 29 septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("jeudi 29 septembre 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsH_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsMS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMA_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMAZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMSA_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMSZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHMSAZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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


function testDateFmtFullTimeComponentsS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsH_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsMS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHM_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMS_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMA_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMAZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMSA_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMSZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHMSAZ_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtWithTimeZoneAndNoDST_fr_FR() {
    var fmt = new DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fr-FR",
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

function testDateFmtFormatRelativeWithinMinuteAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("dans 30 secondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("il y a 30 secondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 10 minutes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 10 minutes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 4 heures", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 4 heures", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 4 jours", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 4 jours", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 9 semaines", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 9 semaines", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 16 mois", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 14 mois", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 14 ans", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_fr_FR() {
    var fmt = new DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fr-FR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 21 ans", fmt.formatRelative(reference, date));
}

