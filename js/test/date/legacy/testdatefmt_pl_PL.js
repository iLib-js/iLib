/*
 * testdatefmt_pl_PL.js - test the date formatter object in Polish
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http:..www.apache.org.licenses.LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function testDateFmtPLConstructorEmpty_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL"});
    
    assertNotNull(fmt);
}


function testDateFmtPLSimpleShort_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLSimpleMedium_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 wrz 2011", fmt.format(date));
}

function testDateFmtPLSimpleLong_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 września 2011", fmt.format(date));
}

function testDateFmtPLSimpleFull_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 września 2011", fmt.format(date));
}

function testDateFmtPLSimpleTimeShort_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLSimpleTimeMedium_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLSimpleTimeLong_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLSimpleTimeFull_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLDateTimeSimpleShort_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLDateTimeSimpleMedium_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 wrz 2011, 13:45", fmt.format(date));
}

function testDateFmtPLDateTimeSimpleLong_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 września 2011 13:45", fmt.format(date));
}

function testDateFmtPLDateTimeSimpleFull_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 września 2011 13:45", fmt.format(date));
}


function testDateFmtPLTemplateCalendar_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtPLTemplateClock12SwitchHH_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateClock12Switchkk_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateClock24Switchhh_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateClock24SwitchKK_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault12hh_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault12KK_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault24HH_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault24kk_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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


function testDateFmtPLTypeDate_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTypeTime_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLTypeDateTime_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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


function testDateFmtPLShortDateComponentsY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortDateComponentsM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortDateComponentsN_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("w", fmt.format(date));
}

function testDateFmtPLShortDateComponentsD_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortDateComponentsDM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortDateComponentsMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("09.2011", fmt.format(date));
}

function testDateFmtPLShortDateComponentsDMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortDateComponentsWDM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("C, 29.09", fmt.format(date));
}

function testDateFmtPLShortDateComponentsWDMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("C, 29.09.2011", fmt.format(date));
}


function testDateFmtPLFullDateComponentsY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullDateComponentsM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("września", fmt.format(date));
}

function testDateFmtPLFullDateComponentsD_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullDateComponentsDM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 września", fmt.format(date));
}

function testDateFmtPLFullDateComponentsMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("wrzesień 2011", fmt.format(date));
}

function testDateFmtPLFullDateComponentsDMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 września 2011", fmt.format(date));
}

function testDateFmtPLFullDateComponentsWDM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("czwartek, 29 września", fmt.format(date));
}

function testDateFmtPLFullDateComponentsWDMY_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("czwartek, 29 września 2011", fmt.format(date));
}


function testDateFmtPLShortTimeComponentsS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsH_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsMS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMA_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMAZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMSA_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMSZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLShortTimeComponentsHMSAZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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


function testDateFmtPLFullTimeComponentsS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsH_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsMS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHM_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMS_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMA_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMAZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMSA_pl_PL() {
    var fmt = new ilib.DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMSZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLFullTimeComponentsHMSAZ_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

function testDateFmtPLWithTimeZoneAndNoDST_pl_PL() {
    var fmt = new ilib.DateFmt({
        locale: "pl-PL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pl-PL",
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

