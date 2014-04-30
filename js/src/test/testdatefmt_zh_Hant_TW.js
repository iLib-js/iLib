/*
 * testdatefmt_zh_Hant_TW.js - test the date formatter object in Chinese (traditional) for Taiwan
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

function testDateFmtConstructorEmpty_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW"});
    
    assertNotNull(fmt);
}

function testDateFmtSimpleShort_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtSimpleMedium_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtSimpleLong_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtSimpleFull_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtSimpleTimeShort_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29 下午01:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29 下午01:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日下午01:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日下午01:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "zh-Hant-TW",
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

function testDateFmtTemplateCalendarIncompatibleDateType_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateClock12SwitchHH_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateClock12Switchkk_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateClock24Switchhh_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateClock24SwitchKK_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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


function testDateFmtTypeDate_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtTypeTime_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtTypeDateTime_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29 下午01:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortDateComponentsM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortDateComponentsN_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortDateComponentsD_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortDateComponentsDM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortDateComponentsWDM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09-29(週四)", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29(週四)", fmt.format(date));
}


function testDateFmtFullDateComponentsY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年", fmt.format(date));
}

function testDateFmtFullDateComponentsM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月", fmt.format(date));
}

function testDateFmtFullDateComponentsD_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29日", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月29日", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月29日(星期四)", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日(星期四)", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortTimeComponentsM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortTimeComponentsH_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtShortTimeComponentsHM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45CST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45CST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37CST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45:37CST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtFullTimeComponentsM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtFullTimeComponentsH_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
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

function testDateFmtFullTimeComponentsHM_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45CST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45CST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37CST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午01:45:37CST", fmt.format(date));
}

function testDateFmtTimeFrameWeeHours_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("凌晨01:45", fmt.format(date));
}

function testDateFmtTimeFrameEarlyMorning_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 8,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("早上08:30", fmt.format(date));
}

function testDateFmtTimeFrameLateMorning_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 11,
		minute: 30,
		second: 37,
		millisecond: 0
	});
    assertEquals("上午11:30", fmt.format(date));
}

function testDateFmtTimeFrameNoonHour_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 12,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("正午12:37", fmt.format(date));
}

function testDateFmtTimeFrameAfterNoon_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 15,
		minute: 37,
		second: 37,
		millisecond: 0
	});
    assertEquals("下午03:37", fmt.format(date));
}

function testDateFmtTimeFrameEvening_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 29,
		hour: 19,
		minute: 47,
		second: 37,
		millisecond: 0
	});
    assertEquals("傍晚07:47", fmt.format(date));
}

function testDateFmtTimeFrameNight_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	locale: "zh-Hant-TW", 
        year: 2011,
		month: 9,
		day: 29,
		hour: 22,
		minute: 53,
		second: 37,
		millisecond: 0
	});
    assertEquals("晚上10:53", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({
        locale: "zh-Hant-TW", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Taipei"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0, 
        timezone: "Asia/Taipei"
	});
    assertEquals("01:45:37CST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30秒后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30秒前", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10分鐘后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10分鐘前", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4小時后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4小時前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4天后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4天前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9週后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9週前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16個月后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14個月前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14年后", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_zh_Hant_TW() {
    var fmt = new ilib.DateFmt({locale: "zh-Hant-TW", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "zh-Hant-TW",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21年前", fmt.formatRelative(reference, date));
}

