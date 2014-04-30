/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
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

function testDateFmtfrCAConstructorEmpty() {
    var fmt = new ilib.DateFmt({locale: "fr-CA"});
    
    assertNotNull(fmt);
}


function testDateFmtfrCASimpleShort() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtfrCASimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleLong() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleFull() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCASimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCADateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/11", fmt.format(date));
}

function testDateFmtfrCADateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/2011", fmt.format(date));
}

function testDateFmtfrCADateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 sept 2011", fmt.format(date));
}

function testDateFmtfrCADateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 septembre 2011", fmt.format(date));
}


function testDateFmtfrCATemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
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

function testDateFmtfrCATemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    try {
        fmt.format(date);
        fail();
    } catch (str) {
        // success
        assertEquals("Wrong date type passed to ilib.DateFmt.format()", str);
    }
}

function testDateFmtfrCATemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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


function testDateFmtfrCATypeDate() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtfrCATypeTime() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCATypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/11", fmt.format(date));
}


function testDateFmtfrCAShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/11", fmt.format(date));
}

function testDateFmtfrCAShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtfrCAShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("je 29/09/11", fmt.format(date));
}


function testDateFmtfrCAFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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


function testDateFmtfrCAShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        time: "hmz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45 EDT", fmt.format(date));
}

function testDateFmtfrCAShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        time: "hmaz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45 EDT", fmt.format(date));
}

function testDateFmtfrCAShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        time: "hmsz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45:37 EDT", fmt.format(date));
}

function testDateFmtfrCAShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        time: "hmsaz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45:37 EDT", fmt.format(date));
}


function testDateFmtfrCAFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45 EDT", fmt.format(date));
}

function testDateFmtfrCAFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45 EDT", fmt.format(date));
}

function testDateFmtfrCAFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtfrCAFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45:37 EDT", fmt.format(date));
}

function testDateFmtfrCAFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45:37 EDT", fmt.format(date));
}

function testDateFmtfrCAWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
        locale: "fr-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Montreal"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "America/Montreal"
	});
    assertEquals("13:45:37 EST", fmt.format(date));
}


function testDateFmtFormatRelativeWithinMinuteAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinMinuteBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinHourAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinHourBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinDayAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinDayBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtFormatRelativeWithinFortnightAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinFortnightBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtFormatRelativeWithinQuarterAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinQuarterBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtFormatRelativeWithinTwoYearsAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeWithinTwoYearsBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

function testDateFmtFormatRelativeYearsAfter_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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
function testDateFmtFormatRelativeYearsBefore_fr_CA() {
    var fmt = new ilib.DateFmt({locale: "fr-CA", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-CA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-CA",
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

