/*
 * testdatefmt_sr_Latn_RS.js - test the date formatter object in Serbian
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

function testDateFmtConstructorEmpty_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "short"});
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

function testDateFmtSimpleMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "medium"});
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

function testDateFmtSimpleLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "long"});
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

function testDateFmtSimpleFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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

function testDateFmtSimpleTimeShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "short", type: "time"});
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

function testDateFmtSimpleTimeMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "medium", type: "time"});
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

function testDateFmtSimpleTimeLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", timelength: "long", type: "time"});
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

function testDateFmtSimpleTimeFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", type: "time"});
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

function testDateFmtDateTimeSimpleShort_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "short", type: "datetime"});
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

function testDateFmtDateTimeSimpleMedium_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "medium", type: "datetime"});
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

function testDateFmtDateTimeSimpleLong_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "long", type: "datetime"});
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

function testDateFmtDateTimeSimpleFull_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", type: "datetime"});
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


function testDateFmtTemplateCalendar_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtTemplateClock12SwitchHH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", clock: "12", template: "HH:mm"});
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

function testDateFmtTemplateClock12Switchkk_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", clock: "12", template: "kk:mm"});
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

function testDateFmtTemplateClock24Switchhh_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", clock: "24", template: "hh:mm"});
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

function testDateFmtTemplateClock24SwitchKK_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", clock: "24", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", template: "hh:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", template: "HH:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", template: "kk:mm"});
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


function testDateFmtTypeDate_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "date"});
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

function testDateFmtTypeTime_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time"});
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

function testDateFmtTypeDateTime_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "datetime"});
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


function testDateFmtShortDateComponentsY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "y"});
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

function testDateFmtShortDateComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "m"});
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

function testDateFmtShortDateComponentsN_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "n"});
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

function testDateFmtShortDateComponentsD_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "d"});
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

function testDateFmtShortDateComponentsDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "dm"});
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

function testDateFmtShortDateComponentsMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "my"});
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

function testDateFmtShortDateComponentsDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "dmy"});
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

function testDateFmtShortDateComponentsWDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "wdm"});
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

function testDateFmtShortDateComponentsWDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", date: "wdmy"});
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


function testDateFmtFullDateComponentsY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "y"});
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

function testDateFmtFullDateComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "m"});
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

function testDateFmtFullDateComponentsD_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "d"});
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

function testDateFmtFullDateComponentsDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "dm"});
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

function testDateFmtFullDateComponentsMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "my"});
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

function testDateFmtFullDateComponentsDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "dmy"});
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

function testDateFmtFullDateComponentsWDM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "wdm"});
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

function testDateFmtFullDateComponentsWDMY_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full", date: "wdmy"});
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


function testDateFmtShortTimeComponentsS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "s"});
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

function testDateFmtShortTimeComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "m"});
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

function testDateFmtShortTimeComponentsH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "h"});
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

function testDateFmtShortTimeComponentsMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "ms"});
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

function testDateFmtShortTimeComponentsHM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "hm"});
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

function testDateFmtShortTimeComponentsHMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "hms"});
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

function testDateFmtShortTimeComponentsHMA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "hma"});
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

function testDateFmtShortTimeComponentsHMZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtShortTimeComponentsHMAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtShortTimeComponentsHMSA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", time: "hmsa"});
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

function testDateFmtShortTimeComponentsHMSZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtShortTimeComponentsHMSAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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


function testDateFmtFullTimeComponentsS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "s"});
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

function testDateFmtFullTimeComponentsM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "m"});
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

function testDateFmtFullTimeComponentsH_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "h"});
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

function testDateFmtFullTimeComponentsMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "ms"});
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

function testDateFmtFullTimeComponentsHM_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "hm"});
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

function testDateFmtFullTimeComponentsHMS_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "hms"});
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

function testDateFmtFullTimeComponentsHMA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "hma"});
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

function testDateFmtFullTimeComponentsHMZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtFullTimeComponentsHMAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtFullTimeComponentsHMSA_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", type: "time", length: "full", time: "hmsa"});
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

function testDateFmtFullTimeComponentsHMSZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtFullTimeComponentsHMSAZ_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtWithTimeZoneAndNoDST_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({
        locale: "sr-Latn-RS", 
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

function testDateFmtFormatRelativeWithinMinuteAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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

function testDateFmtFormatRelativeWithinHourAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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

function testDateFmtFormatRelativeWithinDayAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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

function testDateFmtFormatRelativeWithinFortnightAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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


function testDateFmtFormatRelativeWithinQuarterAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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


function testDateFmtFormatRelativeWithinTwoYearsAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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

function testDateFmtFormatRelativeYearsAfter_sr_Latn_RS() {
    var fmt = new ilib.DateFmt({locale: "sr-Latn-RS", length: "full"});
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


