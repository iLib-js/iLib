/*
 * testdatefmt_tr_TR.js - test the date formatter object in Turkey
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


var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleMedium_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleLong_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleFull_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleTimeShort_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleTimeMedium_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleTimeLong_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtSimpleTimeFull_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtDateTimeSimpleShort_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtDateTimeSimpleMedium_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtDateTimeSimpleLong_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtDateTimeSimpleFull_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtTemplateCalendar_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "tr-TR",
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


function testDateFmtTemplateClock12SwitchHH_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateClock12Switchkk_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateClock24Switchhh_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateClock24SwitchKK_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtTypeDate_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTypeTime_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtTypeDateTime_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtShortDateComponentsY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsN_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsD_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsDM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsDMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsWDM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortDateComponentsWDMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtFullDateComponentsY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsD_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsDM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsDMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsWDM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullDateComponentsWDMY_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtShortTimeComponentsS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsH_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsMS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMA_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMAZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMSA_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMSZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtShortTimeComponentsHMSAZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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


function testDateFmtFullTimeComponentsS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsH_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsMS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHM_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHMS_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHMA_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHMZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHMAZ_tr_TR() {
    var fmt = new DateFmt({
        locale: "tr-TR", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

function testDateFmtFullTimeComponentsHMSA_tr_TR() {
    var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
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

