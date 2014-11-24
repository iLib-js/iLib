/*
 * testdatefmt_sl_SI.js - test the date formatter object in Slovenian/Slovenia
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

function testDateFmtConstructorEmpty_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. 9. 11", fmt.format(date));
}

function testDateFmtSimpleMedium_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. sep. 2011", fmt.format(date));
}

function testDateFmtSimpleLong_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. sep. 2011", fmt.format(date));
}

function testDateFmtSimpleFull_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtSimpleTimeMedium_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtSimpleTimeLong_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtSimpleTimeFull_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtDateTimeSimpleShort_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. 9. 11", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. sep. 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. sep. 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. september 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "sl-SI",
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



function testDateFmtTemplateClock12SwitchHH_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateClock12Switchkk_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateClock24Switchhh_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateClock24SwitchKK_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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


function testDateFmtTypeDate_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. 9. 11", fmt.format(date));
}

function testDateFmtTypeTime_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtTypeDateTime_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. 9. 11", fmt.format(date));
}


function testDateFmtShortDateComponentsY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortDateComponentsM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortDateComponentsN_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortDateComponentsD_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortDateComponentsDM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. 9.", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. 9. 11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("č, 29. 09.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("č, 29. 9. 11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullDateComponentsM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullDateComponentsD_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullDateComponentsDM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullDateComponentsDMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("četrtek, 29. sep.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("četrtek, 29. sep. 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsH_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsMS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMA_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMAZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMSA_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMSZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtShortTimeComponentsHMSAZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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


function testDateFmtFullTimeComponentsS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsH_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsMS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHM_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMS_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMA_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMAZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMSA_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMSZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFullTimeComponentsHMSAZ_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtWithTimeZoneAndNoDST_sl_SI() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SI", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
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

function testDateFmtFormatRelativeWithinMinuteAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("čez 30 sekund", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinMinuteBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinHourAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 10 minut", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinHourBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinDayAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 4 ure", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinDayBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("pred 4 ur", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeWithinFortnightAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 4 dnevi", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinFortnightBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("pred 4 dni", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeWithinQuarterAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 9 tednov", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinQuarterBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("pred 9 tednov", fmt.formatRelative(reference, date));
}
*/
function testDateFmtFormatRelativeWithinTwoYearsAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 16 mesecev", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinTwoYearsBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("pred 14 mesecev", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeYearsAfter_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("čez 14 let", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeYearsBefore_sl_SI() {
    var fmt = new ilib.DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "sl-SI",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("pred 21 let", fmt.formatRelative(reference, date));
}*/

