/*
 * testdatefmt_mk_Mk.js - test the date formatter object in Former Yugoslav Republic of Macedonia
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
function testDateFmtConstructorEmpty_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtSimpleMedium_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtSimpleLong_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 септ. 29", fmt.format(date));
}

function testDateFmtSimpleFull_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 септември 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtSimpleTimeMedium_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtSimpleTimeLong_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtSimpleTimeFull_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtDateTimeSimpleShort_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29-9-11", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtDateTimeSimpleLong_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 2011 септ. 29", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 септември 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "mk-MK",
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


function testDateFmtTemplateClock12SwitchHH_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateClock12Switchkk_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateClock24Switchhh_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateClock24SwitchKK_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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





function testDateFmtShortDateComponentsY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsN_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsD_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsDM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortDateComponentsDMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ч, 9-29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ч, 11-9-29", fmt.format(date));
}


function testDateFmtFullDateComponentsY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullDateComponentsM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("септември", fmt.format(date));
}

function testDateFmtFullDateComponentsD_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullDateComponentsDM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("септември 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("септември 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 септември 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четврток септ. 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("четврток, 2011 септ. 29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsH_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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


function testDateFmtShortTimeComponentsHM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMS_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMA_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMAZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMSA_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMSZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtShortTimeComponentsHMSAZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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


function testDateFmtFullTimeComponentsS_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsH_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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


function testDateFmtFullTimeComponentsHM_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsHMS_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsHMA_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsHMZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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


function testDateFmtFullTimeComponentsHMSA_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsHMSZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFullTimeComponentsHMSAZ_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtWithTimeZoneAndNoDST_mk_MK() {
    var fmt = new DateFmt({
        locale: "mk-MK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "mk-MK",
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

function testDateFmtFormatRelativeWithinMinuteAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
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
function testDateFmtFormatRelativeWithinMinuteBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("пред 30 секунди", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 10 минути", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 10 минути", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 4 часови", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 4 часови", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 4 денови", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 4 денови", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 9 недели", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 9 недели", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
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
function testDateFmtFormatRelativeWithinTwoYearsBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 14 месеци", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("за 14 години", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_mk_MK() {
    var fmt = new DateFmt({locale: "mk-MK", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mk-MK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mk-MK",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("пред 21 година", fmt.formatRelative(reference, date));
}


