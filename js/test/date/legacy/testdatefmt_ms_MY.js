/*
 * testdatefmt_ms_MY.js - test the date formatter object in Malaysia
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


function testDateFmtSimpleShort_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtSimpleMedium_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleFull_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtSimpleTimeLong_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtSimpleTimeFull_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29/09/11 1:45 PTG", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 Sep 2011 1:45 PTG", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 September 2011 1:45 PTG", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29 September 2011 1:45 PTG", fmt.format(date));
}


function testDateFmtTemplateCalendar_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "ms-MY",
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


function testDateFmtTemplateClock12SwitchHH_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateClock12Switchkk_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateClock24Switchhh_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateClock24SwitchKK_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", locale: "ms-MY", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", locale: "ms-MY", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", locale: "ms-MY", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", locale: "ms-MY", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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


function testDateFmtTypeDate_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtTypeTime_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtTypeDateTime_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("29/09/11 1:45 PTG", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsN_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsD_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsDM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsDMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortDateComponentsWDM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("K, 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	    assertEquals("K, 29/09/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullDateComponentsM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullDateComponentsD_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullDateComponentsDM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullDateComponentsDMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Isnin, 29 Ogos", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Isnin, 29 Ogos 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortTimeComponentsM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortTimeComponentsH_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtShortTimeComponentsHM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 MYT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PTG MYT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PTG", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 MYT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PTG MYT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullTimeComponentsM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullTimeComponentsH_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
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

function testDateFmtFullTimeComponentsHM_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PTG", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 MYT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PTG MYT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ms_MY() {
    var fmt = new ilib.DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PTG", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 MYT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PTG MYT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ms_MY() {
    var fmt = new ilib.DateFmt({
		locale: "ms-MY", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Kuala_Lumpur"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ms-MY",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 MYT", fmt.format(date));
}

