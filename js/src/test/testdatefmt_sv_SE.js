/*
 * testdatefmt_sv_SE.js - test the date formatter object in Swedish
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

function testDateFmtConstructorEmpty_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "short"});
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

function testDateFmtSimpleMedium_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "medium"});
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

function testDateFmtSimpleLong_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "long"});
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

function testDateFmtSimpleFull_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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

function testDateFmtSimpleTimeShort_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "short", type: "time"});
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

function testDateFmtSimpleTimeMedium_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "medium", type: "time"});
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

function testDateFmtSimpleTimeLong_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", timelength: "long", type: "time"});
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

function testDateFmtSimpleTimeFull_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", type: "time"});
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

function testDateFmtDateTimeSimpleShort_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "short", type: "datetime"});
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

function testDateFmtDateTimeSimpleMedium_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "medium", type: "datetime"});
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

function testDateFmtDateTimeSimpleLong_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "long", type: "datetime"});
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

function testDateFmtDateTimeSimpleFull_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", type: "datetime"});
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


function testDateFmtTemplateCalendar_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtTemplateClock12SwitchHH_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", clock: "12", template: "HH:mm"});
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

function testDateFmtTemplateClock12Switchkk_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", clock: "12", template: "kk:mm"});
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

function testDateFmtTemplateClock24Switchhh_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", clock: "24", template: "hh:mm"});
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

function testDateFmtTemplateClock24SwitchKK_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", clock: "24", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", template: "hh:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", template: "HH:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", template: "kk:mm"});
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


function testDateFmtTypeDate_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "date"});
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

function testDateFmtTypeTime_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time"});
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

function testDateFmtTypeDateTime_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "datetime"});
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


function testDateFmtShortDateComponentsY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "y"});
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

function testDateFmtShortDateComponentsM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "m"});
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

function testDateFmtShortDateComponentsN_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "n"});
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

function testDateFmtShortDateComponentsD_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "d"});
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

function testDateFmtShortDateComponentsDM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "dm"});
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

function testDateFmtShortDateComponentsMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "my"});
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

function testDateFmtShortDateComponentsDMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "dmy"});
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

function testDateFmtShortDateComponentsWDM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "wdm"});
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

function testDateFmtShortDateComponentsWDMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", date: "wdmy"});
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


function testDateFmtFullDateComponentsY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "y"});
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

function testDateFmtFullDateComponentsM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "m"});
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

function testDateFmtFullDateComponentsD_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "d"});
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

function testDateFmtFullDateComponentsDM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "dm"});
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

function testDateFmtFullDateComponentsMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "my"});
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

function testDateFmtFullDateComponentsDMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "dmy"});
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

function testDateFmtFullDateComponentsWDM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "wdm"});
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

function testDateFmtFullDateComponentsWDMY_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full", date: "wdmy"});
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


function testDateFmtShortTimeComponentsS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "s"});
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

function testDateFmtShortTimeComponentsM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "m"});
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

function testDateFmtShortTimeComponentsH_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "h"});
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

function testDateFmtShortTimeComponentsMS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "ms"});
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

function testDateFmtShortTimeComponentsHM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "hm"});
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

function testDateFmtShortTimeComponentsHMS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "hms"});
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

function testDateFmtShortTimeComponentsHMA_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "hma"});
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

function testDateFmtShortTimeComponentsHMZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtShortTimeComponentsHMAZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtShortTimeComponentsHMSA_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", time: "hmsa"});
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

function testDateFmtShortTimeComponentsHMSZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtShortTimeComponentsHMSAZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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


function testDateFmtFullTimeComponentsS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "s"});
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

function testDateFmtFullTimeComponentsM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "m"});
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

function testDateFmtFullTimeComponentsH_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "h"});
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

function testDateFmtFullTimeComponentsMS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "ms"});
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

function testDateFmtFullTimeComponentsHM_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "hm"});
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

function testDateFmtFullTimeComponentsHMS_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "hms"});
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

function testDateFmtFullTimeComponentsHMA_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "hma"});
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

function testDateFmtFullTimeComponentsHMZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtFullTimeComponentsHMAZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtFullTimeComponentsHMSA_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", type: "time", length: "full", time: "hmsa"});
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

function testDateFmtFullTimeComponentsHMSZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtFullTimeComponentsHMSAZ_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtWithTimeZoneAndNoDST_sv_SE() {
    var fmt = new ilib.DateFmt({
        locale: "sv-SE", 
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

function testDateFmtFormatRelativeWithinMinuteAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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

function testDateFmtFormatRelativeWithinHourAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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

function testDateFmtFormatRelativeWithinDayAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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

function testDateFmtFormatRelativeWithinFortnightAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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


function testDateFmtFormatRelativeWithinQuarterAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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


function testDateFmtFormatRelativeWithinTwoYearsAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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

function testDateFmtFormatRelativeYearsAfter_sv_SE() {
    var fmt = new ilib.DateFmt({locale: "sv-SE", length: "full"});
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


