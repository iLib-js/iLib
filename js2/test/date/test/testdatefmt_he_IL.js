/*
 * testdatefmt_he_IL.js - test the date formatter object in Hebrew
 * 
 * Copyright © 2012, JEDLSoft
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
function testDateFmtSimpleShort_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.11", fmt.format(date));
}

function testDateFmtSimpleMedium_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.2011", fmt.format(date));
}

function testDateFmtSimpleLong_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 ספט 2011", fmt.format(date));
}

function testDateFmtSimpleFull_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 בספטמבר 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtSimpleTimeMedium_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtSimpleTimeLong_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtSimpleTimeFull_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtDateTimeSimpleShort_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 ספט 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 בספטמבר 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "he-IL",
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



function testDateFmtTemplateClock12SwitchHH_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateClock12Switchkk_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateClock24Switchhh_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateClock24SwitchKK_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", locale: "he-IL", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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


function testDateFmtTypeDate_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.11", fmt.format(date));
}

function testDateFmtTypeTime_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtTypeDateTime_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortDateComponentsM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortDateComponentsN_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortDateComponentsD_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortDateComponentsDM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29.09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ה', 29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ה', 29.09.11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullDateComponentsM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ספטמבר", fmt.format(date));
}

function testDateFmtFullDateComponentsD_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullDateComponentsDM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 בספטמבר", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ספטמבר 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 בספטמבר 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("יום חמישי, 29 בספטמבר", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("יום חמישי, 29 בספטמבר 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsH_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsMS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsHM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsHMS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsHMA_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsHMZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 IDT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 IDT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtShortTimeComponentsHMSZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 IDT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 IDT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsH_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsMS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsHM_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsHMS_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsHMA_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsHMZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 IDT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 IDT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
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

function testDateFmtFullTimeComponentsHMSZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 IDT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 IDT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_he_IL() {
    var fmt = new DateFmt({
		locale: "he-IL", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("ב30 שניות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("לפני 30 שניות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב10 דקות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 10 דקות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב4 שעות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 4 שעות", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב4 ימים", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 4 ימים", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב9 שבועות", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 9 שבועות", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב16 חודשים", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 14 חודשים", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("ב14 שנים", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_he_IL() {
    var fmt = new DateFmt({locale: "he-IL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "he-IL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "he-IL",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("לפני 21 שנים", fmt.formatRelative(reference, date));
}


