/*
 * testdatefmt_hr_HR.js - test the date formatter object in Croation
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
function testDateFmtConstructorEmpty_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011.", fmt.format(date));
}

function testDateFmtSimpleMedium_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. ruj 2011.", fmt.format(date));
}

function testDateFmtSimpleLong_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna 2011.", fmt.format(date));
}

function testDateFmtSimpleFull_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna 2011.", fmt.format(date));
}

function testDateFmtSimpgodinaimeShort_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtSimpgodinaimeMedium_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtSimpgodinaimeLong_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtSimpgodinaimeFull_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtDateTimeSimpleShort_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. ruj 2011. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna 2011. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna 2011. 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "hr-HR",
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


function testDateFmtTemplateClock12SwitchHH_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateClock12Switchkk_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateClock24Switchhh_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateClock24SwitchKK_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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





function testDateFmtShortDateComponentsY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortDateComponentsM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortDateComponentsN_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9.", fmt.format(date));
}

function testDateFmtShortDateComponentsD_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortDateComponentsDM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortDateComponentsMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09.2011.", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.2011.", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Č, 29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Č, 29.09.2011.", fmt.format(date));
}


function testDateFmtFullDateComponentsY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullDateComponentsM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("rujna", fmt.format(date));
}

function testDateFmtFullDateComponentsD_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullDateComponentsDM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("rujan 2011.", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. rujna 2011.", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("četvrtak, 29. rujna", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("četvrtak, 29. rujna 2011.", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsH_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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


function testDateFmtShortTimeComponentsHM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMS_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMA_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMAZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMSA_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMSZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtShortTimeComponentsHMSAZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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


function testDateFmtFullTimeComponentsS_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsH_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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


function testDateFmtFullTimeComponentsHM_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsHMS_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsHMA_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsHMZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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


function testDateFmtFullTimeComponentsHMSA_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsHMSZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFullTimeComponentsHMSAZ_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtWithTimeZoneAndNoDST_hr_HR() {
    var fmt = new DateFmt({
        locale: "hr-HR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "hr-HR",
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

function testDateFmtFormatRelativeWithinMinuteAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("za 30 sekundi", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("prije 30 sekundi", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 10 minuta", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 10 minuta", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 4 sata", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 4 sata", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 4 dana", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 4 dana", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 9 tjedana", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 9 tjedana", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 16 mjeseci", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 14 mjeseci", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("za 14 godina", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_hr_HR() {
    var fmt = new DateFmt({locale: "hr-HR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "hr-HR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "hr-HR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("prije 21 godina", fmt.formatRelative(reference, date));
}


