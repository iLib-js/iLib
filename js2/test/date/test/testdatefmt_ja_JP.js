/*
 * testdatefmt_de_DE.js - test the date formatter object in German
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtSimpleMedium_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011/09/29", fmt.format(date));
}

function testDateFmtSimpleLong_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtSimpleFull_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtSimpleTimeShort_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtSimpleTimeMedium_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtSimpleTimeLong_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtSimpleTimeFull_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtDateTimeSimpleShort_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011/09/29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "ja-JP",
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

function testDateFmtTemplateCalendarIncompatibleDateType_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateClock12SwitchHH_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateClock12Switchkk_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateClock24Switchhh_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateClock24SwitchKK_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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


function testDateFmtTypeDate_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtTypeTime_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtTypeDateTime_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortDateComponentsM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortDateComponentsN_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("九", fmt.format(date));
}

function testDateFmtShortDateComponentsD_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortDateComponentsDM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("木09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("木11/09/29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsD_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsDM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsDMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullDateComponentsWDM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9月29日（木曜日）", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011年9月29日（木曜日）", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsH_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsMS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsHM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsHMS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsHMA_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsHMZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 JST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 JST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtShortTimeComponentsHMSZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 JST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 JST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsH_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsMS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsHM_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsHMS_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsHMA_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsHMZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 JST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 JST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
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

function testDateFmtFullTimeComponentsHMSZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 JST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 JST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ja_JP() {
    var fmt = new DateFmt({
        locale: "ja-JP", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Tokyo"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 JST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30秒で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
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
function testDateFmtFormatRelativeWithinHourAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10分で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10分前", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4時間で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4時間前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4日で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4日前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9週間で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9週間前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16ヶ月で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14ヶ月前", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14年で", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ja_JP() {
    var fmt = new DateFmt({locale: "ja-JP", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ja-JP",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ja-JP",
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

