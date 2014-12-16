/*
 * testdatefmt_ko_KR.js - test the date formatter object in Korean
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

function testDateFmtConstructorEmpty_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09. 29", fmt.format(date));
}

function testDateFmtSimpleMedium_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. 09. 29", fmt.format(date));
}

function testDateFmtSimpleLong_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일", fmt.format(date));
}

function testDateFmtSimpleFull_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("오전 1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09. 29 오후 1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. 09. 29 오후 1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일 오후 1:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일 오후 1:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "ko-KR",
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

function testDateFmtTemplateCalendarIncompatibleDateType_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2011-09-16 13:45", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateClock12Switchkk_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateClock24Switchhh_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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


function testDateFmtTypeDate_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09. 29", fmt.format(date));
}

function testDateFmtTypeTime_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtTypeDateTime_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09. 29 오후 1:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortDateComponentsM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortDateComponentsN_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortDateComponentsD_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortDateComponentsDM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09. 29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09.", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11. 09. 29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("목, 09. 29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("목, 11. 09. 29", fmt.format(date));
}

function testDateFmtLongDateComponentsWDM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", date: "wdm", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("목요일, 9월 29일", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullDateComponentsM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("구", fmt.format(date));
}

function testDateFmtFullDateComponentsD_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullDateComponentsDM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9월 29일", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9월 29일 (목요일)", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011년 9월 29일 (목요일)", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsH_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsMS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsHM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsHMS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtShortTimeComponentsHMA_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 KST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45 KST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 KST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45:37 KST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsH_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsMS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsHM_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsHMS_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
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

function testDateFmtFullTimeComponentsHMA_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 KST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45 KST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 KST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("오후 1:45:37 KST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ko_KR() {
    var fmt = new ilib.DateFmt({
        locale: "ko-KR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Seoul"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 KST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30초에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30초전", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10분에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10분전", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4시간에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4시간전", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4일에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4일전", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9주에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9주전", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16개월에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14개월전", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14년에", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ko_KR() {
    var fmt = new ilib.DateFmt({locale: "ko-KR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "ko-KR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21년전", fmt.formatRelative(reference, date));
}

