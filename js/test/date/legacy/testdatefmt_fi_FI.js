/*
 * testdatefmt_fi_FI.js - test the date formatter object in Finnish
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

function testDateFmtConstructorEmpty_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtSimpleMedium_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtSimpleLong_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. syyskuuta 2011", fmt.format(date));
}

function testDateFmtSimpleFull_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. syyskuuta 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtSimpleTimeMedium_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtSimpleTimeLong_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtSimpleTimeFull_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtDateTimeSimpleShort_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29. syyskuuta 2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. syyskuuta 2011 13.45", fmt.format(date));
}


function testDateFmtTemplateCalendar_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "fi-FI",
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


function testDateFmtTemplateClock12SwitchHH_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateClock12Switchkk_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateClock24Switchhh_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateClock24SwitchKK_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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


function testDateFmtTypeDate_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtTypeTime_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtTypeDateTime_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.2011 13.45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortDateComponentsM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortDateComponentsN_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortDateComponentsD_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortDateComponentsDM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortDateComponentsMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("9.2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("T 29.9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("T 29.9.2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullDateComponentsM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("syyskuuta", fmt.format(date));
}

function testDateFmtFullDateComponentsD_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullDateComponentsDM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. syyskuuta", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("syyskuu 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. syyskuuta 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("torstai 29. syyskuuta", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("torstai 29. syyskuuta 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsH_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsMS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsHM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsHMS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsHMA_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsHMZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtShortTimeComponentsHMSZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsH_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsMS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsHM_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsHMS_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsHMA_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsHMZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
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

function testDateFmtFullTimeComponentsHMSZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 EEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_fi_FI() {
    var fmt = new ilib.DateFmt({
        locale: "fi-FI", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 EET", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 sekuntia päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 sekuntia sitten", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minuuttia päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minuuttia sitten", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 tuntia päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 tuntia sitten", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 päivää päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 päivää sitten", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 viikkoa päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 viikkoa sitten", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 kuukautta päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 kuukautta sitten", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 vuotta päästä", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_fi_FI() {
    var fmt = new ilib.DateFmt({locale: "fi-FI", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fi-FI",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 vuotta sitten", fmt.formatRelative(reference, date));
}

