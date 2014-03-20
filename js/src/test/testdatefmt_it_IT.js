/*
 * testdatefmt_it_IT.js - test the date formatter object in Italian
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

function testDateFmtConstructorEmpty_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtSimpleMedium_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtSimpleLong_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 set 2011", fmt.format(date));
}

function testDateFmtSimpleFull_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 settembre 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtSimpleTimeMedium_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtSimpleTimeLong_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtSimpleTimeFull_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtDateTimeSimpleShort_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 set 2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 settembre 2011 13.45", fmt.format(date));
}


function testDateFmtTemplateCalendar_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtTemplateCalendarIncompatibleDateType_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateClock12SwitchHH_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", clock: "12", template: "HH.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateClock12Switchkk_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", clock: "12", template: "kk.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateClock24Switchhh_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", clock: "24", template: "hh.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateClock24SwitchKK_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", clock: "24", template: "KK.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", template: "hh.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", template: "KK.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", template: "HH.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", template: "kk.mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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


function testDateFmtTypeDate_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTypeTime_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtTypeDateTime_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsN_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsD_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsDM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsDMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortDateComponentsWDM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("gi 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("gi 29/09/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 dC", fmt.format(date));
}

function testDateFmtFullDateComponentsM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("settembre", fmt.format(date));
}

function testDateFmtFullDateComponentsD_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullDateComponentsDM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 settembre", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("settembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 settembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("giovedì 29 settembre", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("giovedì 29 settembre 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsH_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsMS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsHM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsHMS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsHMA_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsHMZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtShortTimeComponentsHMSZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsH_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsMS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsHM_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsHMS_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsHMA_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsHMZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_it_IT() {
    var fmt = new ilib.DateFmt({locale: "it-IT", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
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

function testDateFmtFullTimeComponentsHMSZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_it_IT() {
    var fmt = new ilib.DateFmt({
        locale: "it-IT", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Rome"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "it-IT",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 CET", fmt.format(date));
}

