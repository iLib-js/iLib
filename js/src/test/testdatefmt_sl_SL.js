/*
 * testdatefmt_sl_SL.js - test the date formatter object in Slovenian
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

function testDateFmtConstructorEmpty_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "short"});
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

function testDateFmtSimpleMedium_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "medium"});
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

function testDateFmtSimpleLong_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "long"});
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

function testDateFmtSimpleFull_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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

function testDateFmtSimpleTimeShort_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "short", type: "time"});
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

function testDateFmtSimpleTimeMedium_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "medium", type: "time"});
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

function testDateFmtSimpleTimeLong_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", timelength: "long", type: "time"});
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

function testDateFmtSimpleTimeFull_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", type: "time"});
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

function testDateFmtDateTimeSimpleShort_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "short", type: "datetime"});
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

function testDateFmtDateTimeSimpleMedium_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "medium", type: "datetime"});
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

function testDateFmtDateTimeSimpleLong_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "long", type: "datetime"});
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

function testDateFmtDateTimeSimpleFull_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", type: "datetime"});
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


function testDateFmtTemplateCalendar_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtTemplateClock12SwitchHH_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", clock: "12", template: "HH:mm"});
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

function testDateFmtTemplateClock12Switchkk_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", clock: "12", template: "kk:mm"});
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

function testDateFmtTemplateClock24Switchhh_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", clock: "24", template: "hh:mm"});
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

function testDateFmtTemplateClock24SwitchKK_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", clock: "24", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", template: "hh:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", template: "KK:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", template: "HH:mm"});
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", template: "kk:mm"});
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


function testDateFmtTypeDate_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "date"});
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

function testDateFmtTypeTime_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time"});
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

function testDateFmtTypeDateTime_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "datetime"});
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


function testDateFmtShortDateComponentsY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "y"});
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

function testDateFmtShortDateComponentsM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "m"});
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

function testDateFmtShortDateComponentsN_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "n"});
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

function testDateFmtShortDateComponentsD_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "d"});
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

function testDateFmtShortDateComponentsDM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "dm"});
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

function testDateFmtShortDateComponentsMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "my"});
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

function testDateFmtShortDateComponentsDMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "dmy"});
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

function testDateFmtShortDateComponentsWDM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "wdm"});
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

function testDateFmtShortDateComponentsWDMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", date: "wdmy"});
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


function testDateFmtFullDateComponentsY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "y"});
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

function testDateFmtFullDateComponentsM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "m"});
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

function testDateFmtFullDateComponentsD_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "d"});
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

function testDateFmtFullDateComponentsDM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "dm"});
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

function testDateFmtFullDateComponentsMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "my"});
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

function testDateFmtFullDateComponentsDMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "dmy"});
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

function testDateFmtFullDateComponentsWDM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "wdm"});
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

function testDateFmtFullDateComponentsWDMY_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full", date: "wdmy"});
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


function testDateFmtShortTimeComponentsS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "s"});
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

function testDateFmtShortTimeComponentsM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "m"});
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

function testDateFmtShortTimeComponentsH_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "h"});
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

function testDateFmtShortTimeComponentsMS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "ms"});
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

function testDateFmtShortTimeComponentsHM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "hm"});
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

function testDateFmtShortTimeComponentsHMS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "hms"});
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

function testDateFmtShortTimeComponentsHMA_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "hma"});
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

function testDateFmtShortTimeComponentsHMZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtShortTimeComponentsHMAZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtShortTimeComponentsHMSA_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", time: "hmsa"});
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

function testDateFmtShortTimeComponentsHMSZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtShortTimeComponentsHMSAZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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


function testDateFmtFullTimeComponentsS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "s"});
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

function testDateFmtFullTimeComponentsM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "m"});
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

function testDateFmtFullTimeComponentsH_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "h"});
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

function testDateFmtFullTimeComponentsMS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "ms"});
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

function testDateFmtFullTimeComponentsHM_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "hm"});
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

function testDateFmtFullTimeComponentsHMS_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "hms"});
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

function testDateFmtFullTimeComponentsHMA_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "hma"});
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

function testDateFmtFullTimeComponentsHMZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtFullTimeComponentsHMAZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtFullTimeComponentsHMSA_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", type: "time", length: "full", time: "hmsa"});
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

function testDateFmtFullTimeComponentsHMSZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtFullTimeComponentsHMSAZ_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtWithTimeZoneAndNoDST_sl_SL() {
    var fmt = new ilib.DateFmt({
        locale: "sl-SL", 
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

function testDateFmtFormatRelativeWithinMinuteAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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

function testDateFmtFormatRelativeWithinHourAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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

function testDateFmtFormatRelativeWithinDayAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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

function testDateFmtFormatRelativeWithinFortnightAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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


function testDateFmtFormatRelativeWithinQuarterAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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


function testDateFmtFormatRelativeWithinTwoYearsAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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

function testDateFmtFormatRelativeYearsAfter_sl_SL() {
    var fmt = new ilib.DateFmt({locale: "sl-SL", length: "full"});
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


