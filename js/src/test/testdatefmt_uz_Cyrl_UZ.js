/*
 * testdatefmtrange_uz_Cyrl_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
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

function testDateFmtConstructorEmpty_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("29.09.2011", fmt.format(date));
}

function testDateFmtSimpleMedium_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("29.09.2011", fmt.format(date));
}

function testDateFmtSimpleLong_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("29 eyl 2011", fmt.format(date));
}

function testDateFmtSimpleFull_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("29 eylül 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "time"});
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

function testDateFmtSimpleTimeMedium_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "time"});
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

function testDateFmtSimpleTimeLong_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", timelength: "long", type: "time"});
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

function testDateFmtSimpleTimeFull_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "time"});
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

function testDateFmtDateTimeSimpleShort_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "datetime"});
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
    assertEquals("29.09.2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "datetime"});
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
    assertEquals("29.09.2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "long", type: "datetime"});
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
    assertEquals("29 eyl 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "datetime"});
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
    assertEquals("29 eylül 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", calendar: "julian", template: "yyyy-MM-dd"});
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


function testDateFmtTemplateClock12SwitchHH_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "HH:mm"});
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

function testDateFmtTemplateClock12Switchkk_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "kk:mm"});
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

function testDateFmtTemplateClock24Switchhh_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "hh:mm"});
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

function testDateFmtTemplateClock24SwitchKK_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "KK:mm"});
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", template: "hh:mm"});
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", template: "KK:mm"});
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", template: "HH:mm"});
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", template: "kk:mm"});
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


function testDateFmtTypeDate_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "date"});
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
    assertEquals("29.09.2011", fmt.format(date));
}

function testDateFmtTypeTime_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time"});
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

function testDateFmtTypeDateTime_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "datetime"});
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
    assertEquals("29.09.2011 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "y"});
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

function testDateFmtShortDateComponentsM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "m"});
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
    assertEquals("9", fmt.format(date));
}

function testDateFmtShortDateComponentsN_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "n"});
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
    assertEquals("E", fmt.format(date));
}

function testDateFmtShortDateComponentsD_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "d"});
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

function testDateFmtShortDateComponentsDM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "dm"});
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
    assertEquals("29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "my"});
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
    assertEquals("09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "dmy"});
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
    assertEquals("29.09.2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "wdm"});
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
    assertEquals("29.09, P", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", date: "wdmy"});
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
    assertEquals("29.09.2011, P", fmt.format(date));
}


function testDateFmtFullDateComponentsY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "y"});
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

function testDateFmtFullDateComponentsM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "m"});
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
    assertEquals("eylül", fmt.format(date));
}

function testDateFmtFullDateComponentsD_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "d"});
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

function testDateFmtFullDateComponentsDM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dm"});
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
    assertEquals("29 eylül", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "my"});
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
    assertEquals("eylül 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dmy"});
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
    assertEquals("29 eylül 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdm"});
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
    assertEquals("29 eylül, Perşembe", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdmy"});
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
    assertEquals("29 eylül 2011 Perşembe", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "s"});
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

function testDateFmtShortTimeComponentsM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "m"});
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

function testDateFmtShortTimeComponentsH_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "h"});
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

function testDateFmtShortTimeComponentsMS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "ms"});
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

function testDateFmtShortTimeComponentsHM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hm"});
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

function testDateFmtShortTimeComponentsHMS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hms"});
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

function testDateFmtShortTimeComponentsHMA_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hma"});
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

function testDateFmtShortTimeComponentsHMZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45 UTC+0300", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45 UTC+0300", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hmsa"});
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

function testDateFmtShortTimeComponentsHMSZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45:37 UTC+0300", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45:37 UTC+0300", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "s"});
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

function testDateFmtFullTimeComponentsM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "m"});
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

function testDateFmtFullTimeComponentsH_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "h"});
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

function testDateFmtFullTimeComponentsMS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "ms"});
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

function testDateFmtFullTimeComponentsHM_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hm"});
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

function testDateFmtFullTimeComponentsHMS_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hms"});
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

function testDateFmtFullTimeComponentsHMA_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hma"});
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

function testDateFmtFullTimeComponentsHMZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45 UTC+0300", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({
        locale: "uz-Cyrl-UZ", 
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
    assertEquals("13:45 UTC+0300", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_uz_Cyrl_UZ() {
    var fmt = new ilib.DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hmsa"});
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


function testDateRngFmtCyrl_UZRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31.12.11 13:45-14:30", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 2011 12 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 2011 Дек 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45–14:30 2011 Дек 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 11–14:30 12–31 – 30", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011–14:30 12–31 – 30", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011–14:30 Дек–31 – 30", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011–14:30 Дек–31 – 30", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31 – 20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–12–31 – 20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Дек–31 – 20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Дек–31 – 20", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–12–31 – 11–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–12–31 – 11–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Дек–31 – Ноя–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Дек–31 – Ноя–20", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–1–31 – 12–11–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–01–31 – 2012–11–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Янв–31 – 2012–Ноя–20", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Янв–31 – 2012–Ноя–20", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11–1 – 14–11", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–01 – 2014–11", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Янв – 2014–Ноя", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–Янв – 2014–Ноя", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–2064", fmt.format(start, end));
}
