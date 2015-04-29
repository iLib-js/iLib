/*
 * testdatefmt_sk_SK.js - test the date formatter object in Slovakia
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.11", fmt.format(date));
}

function testDateFmtSimpleMedium_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtSimpleLong_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.2011", fmt.format(date));
}

function testDateFmtSimpleFull_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtSimpleTimeMedium_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtSimpleTimeLong_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtSimpleTimeFull_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtDateTimeSimpleShort_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29.9.11", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29.9.2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29.9.2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29. september 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "sk-SK",
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

function testDateFmtTemplateClock12SwitchHH_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateClock12Switchkk_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateClock24Switchhh_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateClock24SwitchKK_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12hh_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault12KK_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24HH_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTemplateNoClockŠNotFollowLocaleDefault24kk_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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


function testDateFmtTypeDate_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.11", fmt.format(date));
}

function testDateFmtTypeTime_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtTypeDateTime_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29.9.11", fmt.format(date));
}


function testDateFmtShortDateComponentsY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortDateComponentsM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortDateComponentsN_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortDateComponentsD_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortDateComponentsDM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.9.11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Š, 29.9.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Š 29. 9. 11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullDateComponentsM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september", fmt.format(date));
}

function testDateFmtFullDateComponentsD_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullDateComponentsDM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("štvrtok, 29. sep.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("štvrtok, 29. sep 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsH_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsMS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsHM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsHMS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsHMA_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsHMZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtShortTimeComponentsHMSZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsH_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsMS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsHM_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsHMS_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsHMA_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsHMZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
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

function testDateFmtFullTimeComponentsHMSZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_sk_SK() {
    var fmt = new DateFmt({
        locale: "sk-SK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CET", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 sekúnd", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinMinuteBefore_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeWithinHourAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minút", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinHourBeforer_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/



function testDateFmtFormatRelativeWithinDayAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 hodiny", fmt.formatRelative(reference, date));
}


/*function testDateFmtFormatRelativeWithinDayAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeWithinFortnightAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 dni", fmt.formatRelative(reference, date));
}



/*function testDateFmtFormatRelativeWithinFortnightBefore_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
		
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/



function testDateFmtFormatRelativeWithinQuarterAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 týždňov", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinQuarterBefore_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}*/



function testDateFmtFormatRelativeWithinTwoYearsAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 mesiacov", fmt.formatRelative(reference, date));
}

/*   function testDateFmtFormatRelativeWithinTwoYearsBefore_sk_SK() { 

	var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 mesiacov", fmt.formatRelative(reference, date));
}*/

function testDateFmtFormatRelativeYearsAfter_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 rokov", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeYearsBefore_sk_SK() {
    var fmt = new DateFmt({locale: "sk-SK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sk-SK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sk-SK",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 rokov", fmt.formatRelative(reference, date));
}*/

