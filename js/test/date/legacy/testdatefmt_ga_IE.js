/*
 * testdatefmt_ga_IE.js - test the date formatter object in Irish Gaelic
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

function testDateFmtConstructorEmpty_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtSimpleMedium_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 MFómh 11", fmt.format(date));
}

function testDateFmtSimpleLong_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 MFómh 29", fmt.format(date));
}

function testDateFmtSimpleFull_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Meán Fómhair 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtSimpleTimeMedium_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtSimpleTimeLong_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtSimpleTimeFull_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtDateTimeSimpleShort_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11-9-29", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 MFómh 11", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011 MFómh 29", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 Meán Fómhair 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "ga-IE",
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


function testDateFmtTemplateClock12SwitchHH_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateClock12Switchkk_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateClock24Switchhh_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateClock24SwitchKK_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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





function testDateFmtShortDateComponentsY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortDateComponentsM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortDateComponentsN_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortDateComponentsD_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortDateComponentsDM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("5, 9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("5, 11-9-29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullDateComponentsM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("MFómh", fmt.format(date));
}

function testDateFmtFullDateComponentsD_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullDateComponentsDM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Meán Fómhair", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Meán Fómhair 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Meán Fómhair 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Déardaoin MFómh 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Déardaoin, 2011 MFómh 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsH_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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


function testDateFmtShortTimeComponentsHM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsHMS_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsHMA_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsHMZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/IST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtShortTimeComponentsHMSZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsH_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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


function testDateFmtFullTimeComponentsHM_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsHMS_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsHMA_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsHMZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/IST", fmt.format(date));
}


function testDateFmtFullTimeComponentsHMSA_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
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

function testDateFmtFullTimeComponentsHMSZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ga_IE() {
    var fmt = new ilib.DateFmt({
        locale: "ga-IE", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("+30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("-30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 h", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 h", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 d", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 d", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+9 w", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-9 w", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+16 m", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-14 m", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+14 y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ga_IE() {
    var fmt = new ilib.DateFmt({locale: "ga-IE", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ga-IE",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-21 y", fmt.formatRelative(reference, date));
}


