/*
 * testdatefmt_el_GR.js - test the date formatter object in Greece
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
function testDateFmtConstructorEmpty_el_GR() {
    var fmt = new DateFmt({locale: "el-GR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtSimpleMedium_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Σεπ 11", fmt.format(date));
}

function testDateFmtSimpleLong_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Σεπ 2011", fmt.format(date));
}

function testDateFmtSimpleFull_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Σεπτεμβρίου 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtSimpleTimeLong_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtSimpleTimeFull_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ. 29/9/11", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ. 29 Σεπ 11", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ. 29 Σεπ 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ. 29 Σεπτεμβρίου 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "el-GR",
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


function testDateFmtTemplateClock12SwitchHH_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateClock12Switchkk_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateClock24Switchhh_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateClock24SwitchKK_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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





function testDateFmtShortDateComponentsY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortDateComponentsM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortDateComponentsN_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortDateComponentsD_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortDateComponentsDM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Π, 29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Π, 29/9/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullDateComponentsM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Σεπτεμβρίου", fmt.format(date));
}

function testDateFmtFullDateComponentsD_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullDateComponentsDM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Σεπτεμβρίου", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Σεπτεμβρίου 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Σεπτεμβρίου 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Πέμπτη, 29 Σεπ", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Πέμπτη, 29 Σεπ 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortTimeComponentsM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortTimeComponentsH_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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


function testDateFmtShortTimeComponentsHM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortTimeComponentsHMS_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtShortTimeComponentsHMA_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 μ.μ. EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 μ.μ.", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 μ.μ. EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullTimeComponentsM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullTimeComponentsH_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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


function testDateFmtFullTimeComponentsHM_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullTimeComponentsHMS_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
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

function testDateFmtFullTimeComponentsHMA_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 μ.μ.", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsHMSA_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 μ.μ.", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 μ.μ. EEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_el_GR() {
    var fmt = new DateFmt({
        locale: "el-GR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 EET", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("σε 30 δευτερόλεπτα", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("πριν από 30 δευτερόλεπτα", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 10 λεπτά", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 10 λεπτά", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 4 ώρες", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 4 ώρες", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 4 ημέρες", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 4 ημέρες", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 9 εβδομάδες", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 9 εβδομάδες", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 16 μήνες", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 14 μήνες", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("σε 14 έτη", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_el_GR() {
    var fmt = new DateFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "el-GR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "el-GR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("πριν από 21 έτη", fmt.formatRelative(reference, date));
}




