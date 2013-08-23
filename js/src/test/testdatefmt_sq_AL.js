/*
 * testdatefmt_sq_AL.js - test the date formatter object in Albanian
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

function testDateFmtConstructorEmpty_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleMedium_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleLong_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleFull_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleTimeShort_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleTimeLong_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtSimpleTimeFull_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtTemplateCalendar_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", calendar: "julian", template: "yyyy-MM-dd"});
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
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtTypeDate_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTypeTime_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtTypeDateTime_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtShortDateComponentsY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsN_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsD_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtFullDateComponentsY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsD_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_sq_AL() {
    var fmt = new ilib.DateFmt({
        locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinHourAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinDayAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinQuarterAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinTwoYearsAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_sq_AL() {
    var fmt = new ilib.DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("", fmt.formatRelative(reference, date));
}


