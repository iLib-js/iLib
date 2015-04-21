/*
 * testdatefmt_kk_cyrl_KZ.js - test the date formatter object in Cyrillic Kazakhstan
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
function testDateFmtConstructorEmpty_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtSimpleMedium_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtSimpleLong_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 қыр. 29", fmt.format(date));
}

function testDateFmtSimpleFull_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 қыркүйек 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtSimpleTimeMedium_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtSimpleTimeLong_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtSimpleTimeFull_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtDateTimeSimpleShort_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtDateTimeSimpleMedium_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29.09.2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011 қыр. 29", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 қыркүйек 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "kk-Cyrl-KZ",
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


function testDateFmtTemplateClock12SwitchHH_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateClock12Switchkk_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateClock24Switchhh_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateClock24SwitchKK_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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





function testDateFmtShortDateComponentsY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsN_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsD_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsDM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsDMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsWDM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortDateComponentsWDMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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


function testDateFmtFullDateComponentsY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullDateComponentsM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("қыр.", fmt.format(date));
}

function testDateFmtFullDateComponentsD_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullDateComponentsDM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 қыркүйек", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("қыркүйек 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 қыркүйек 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("бейсенбі қыр. 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("бейсенбі, 2011 қыр. 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsH_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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


function testDateFmtShortTimeComponentsHM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsHMS_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsHMA_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsHMZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ALMT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtShortTimeComponentsHMSZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsH_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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


function testDateFmtFullTimeComponentsHM_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsHMS_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsHMA_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsHMZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 ALMT", fmt.format(date));
}


function testDateFmtFullTimeComponentsHMSA_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
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

function testDateFmtFullTimeComponentsHMSZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_kk_Cyrl_KZ() {
    var fmt = new DateFmt({
        locale: "kk-Cyrl-KZ", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 ALMT", fmt.format(date));
}

/*function testDateFmtFormatRelativeWithinMinuteAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_kk_Cyrl_KZ() {
    var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "kk-Cyrl-KZ",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("y", fmt.formatRelative(reference, date));
}
*/

