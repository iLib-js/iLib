/*
 * testdatefmt_bs_Cyrl_BA.js - test the date formatter object in Cyrillic Bosnian
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

function testDateFmtConstructorEmpty_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "short"});
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
    assertEquals("29.09.11.", fmt.format(date));
}

function testDateFmtSimpleMedium_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "medium"});
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
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtSimpleLong_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "long"});
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
    assertEquals("29. сеп 2011.", fmt.format(date));
}

function testDateFmtSimpleFull_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("29. септембар 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "short", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "medium", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", timelength: "long", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "short", type: "datetime"});
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
    assertEquals("13:45 29.09.11.", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "medium", type: "datetime"});
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
    assertEquals("13:45 29.09.11", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "long", type: "datetime"});
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
    assertEquals("13:45 29. сеп 2011.", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", type: "datetime"});
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
    assertEquals("13:45 29. септембар 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", calendar: "julian", template: "yyyy-MM-dd"});
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



function testDateFmtTemplateClock12SwitchHH_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", clock: "12", template: "HH:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", clock: "12", template: "kk:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", clock: "24", template: "hh:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", clock: "24", template: "KK:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", template: "hh:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", template: "KK:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", template: "HH:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", template: "kk:mm"});
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
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtTypeDate_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "date"});
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
    assertEquals("29.09.11.", fmt.format(date));
}

function testDateFmtTypeTime_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTypeDateTime_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "datetime"});
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
    assertEquals("13:45 29.09.11.", fmt.format(date));
}


function testDateFmtShortDateComponentsY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "y"});
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
    assertEquals("11", fmt.format(date));
}

function testDateFmtShortDateComponentsM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "m"});
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
    assertEquals("09", fmt.format(date));
}

function testDateFmtShortDateComponentsN_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "n"});
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
    assertEquals("S", fmt.format(date));
}

function testDateFmtShortDateComponentsD_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "d"});
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
    assertEquals("29", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "dm"});
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
    assertEquals("29.09.", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "my"});
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
    assertEquals("09.11.", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "dmy"});
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
    assertEquals("29.09.11.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "wdm"});
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
    assertEquals("ч, 29.09.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", date: "wdmy"});
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
    assertEquals("ч, 29.09.11.", fmt.format(date));
}


function testDateFmtFullDateComponentsY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "y"});
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
    assertEquals("2011", fmt.format(date));
}

function testDateFmtFullDateComponentsM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "m"});
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
    assertEquals("сеп", fmt.format(date));
}

function testDateFmtFullDateComponentsD_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "d"});
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
    assertEquals("29", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "dm"});
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
    assertEquals("29. септембар", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "my"});
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
    assertEquals("септембар 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "dmy"});
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
    assertEquals("29. септембар 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "wdm"});
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
    assertEquals("четвртак, 29. сеп", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "wdmy"});
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
    assertEquals("четвртак, 29. сеп 2011.", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "s"});
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
    assertEquals("37", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "m"});
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
    assertEquals("45", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "h"});
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
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "ms"});
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
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hm"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hms"});
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hma"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45 UTC", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45 UTC", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hmsa"});
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45:37 UTC", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45:37 UTC", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "s"});
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
    assertEquals("37", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "m"});
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
    assertEquals("45", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "h"});
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
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "ms"});
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
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hm"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hms"});
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hma"});
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
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45 UTC", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45 UTC", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hmsa"});
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
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45:37 UTC", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45:37 UTC", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({
        locale: "bs-Cyrl-BA", 
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
    assertEquals("13:45:37 UTC", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 30 секунди", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("пре 30 секунди", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 10 минута", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 10 минута", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 4 сата", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 4 сата", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 4 дана", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 4 дана", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 9 недеља", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 9 недеља", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 16 месеци", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 14 месеци", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
    assertEquals("за 14 година", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_bs_Cyrl_BA() {
    var fmt = new ilib.DateFmt({locale: "bs-Cyrl-BA", length: "full"});
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
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пре 21 година", fmt.formatRelative(reference, date));
}

