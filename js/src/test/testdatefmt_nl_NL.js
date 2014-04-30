/*
 * testdatefmt_nl_NL.js - test the date formatter object in the Netherlands
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

function testDateFmtConstructorEmpty_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtSimpleMedium_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-2011", fmt.format(date));
}

function testDateFmtSimpleLong_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sep. 11", fmt.format(date));
}

function testDateFmtSimpleFull_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 september 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtSimpleTimeMedium_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtSimpleTimeLong_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtSimpleTimeFull_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtDateTimeSimpleShort_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sep. 11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 september 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "nl-NL",
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

function testDateFmtTemplateCalendarIncompatibleDateType_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtTemplateClock12SwitchHH_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", clock: "12", template: "HH.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01.45", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", clock: "12", template: "kk.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01.45", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", clock: "24", template: "hh.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtTemplateClock24SwitchKK_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", clock: "24", template: "KK.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", template: "hh.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01.45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", template: "KK.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01.45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", template: "HH.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", template: "kk.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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


function testDateFmtTypeDate_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtTypeTime_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtTypeDateTime_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortDateComponentsM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortDateComponentsN_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortDateComponentsD_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortDateComponentsDM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9-11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("D 29-9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("D 29-9-11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullDateComponentsM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september", fmt.format(date));
}

function testDateFmtFullDateComponentsD_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullDateComponentsDM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 september", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 september 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("donderdag 29 september", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("donderdag 29 september 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsH_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsMS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMA_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMAZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMSA_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMSZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtShortTimeComponentsHMSAZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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


function testDateFmtFullTimeComponentsS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsH_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsMS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHM_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMS_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMA_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMAZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMSA_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMSZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFullTimeComponentsHMSAZ_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtWithTimeZoneAndNoDST_nl_NL() {
    var fmt = new ilib.DateFmt({
        locale: "nl-NL", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Amsterdam"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
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

function testDateFmtFormatRelativeWithinMinuteAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("over 30 seconden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 seconden geleden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 10 minuten", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minuten geleden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 4 uur", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 uur geleden", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 4 dagen", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 dagen geleden", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 9 weken", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 weken geleden", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 16 maanden", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 maanden geleden", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("over 14 jaar", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_nl_NL() {
    var fmt = new ilib.DateFmt({locale: "nl-NL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "nl-NL",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 jaar geleden", fmt.formatRelative(reference, date));
}


