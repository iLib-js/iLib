/*
 * testdatefmt_id_ID.js - test the date formatter object in Indonesian
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
function testDateFmtConstructorEmpty_id_ID() {
    var fmt = new DateFmt({locale: "id-ID"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtSimpleMedium_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep 2011", fmt.format(date));
}

function testDateFmtSimpleLong_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleFull_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep 2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011 13.45", fmt.format(date));
}


function testDateFmtTemplateCalendar_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "id-ID",
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

function testDateFmtTemplateCalendarIncompatibleDateType_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateClock12SwitchHH_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateClock12Switchkk_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateClock24Switchhh_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateClock24SwitchKK_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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


function testDateFmtTypeDate_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtTypeTime_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtTypeDateTime_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortDateComponentsM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortDateComponentsN_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortDateComponentsD() {
    var fmt = new DateFmt({locale: "id-ID", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortDateComponentsDM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("K, 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("K, 29/09/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtFullDateComponentsM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September", fmt.format(date));
}

function testDateFmtFullDateComponentsD() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtFullDateComponentsDM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Kamis, 29 September", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Kamis, 29 September 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortTimeComponentsM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortTimeComponentsH_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtShortTimeComponentsMS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        time: "hmz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 WIB", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 WIB", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        time: "hmsz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 WIB", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 WIB", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtFullTimeComponentsM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtFullTimeComponentsH_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
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

function testDateFmtFullTimeComponentsMS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 WIB", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 WIB", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 WIB", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 WIB", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_id_ID() {
    var fmt = new DateFmt({
        locale: "id-ID", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Asia/Jakarta"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    // does not observe DST, so no difference in the TZ spec
    assertEquals("13.45.37 WIB", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("dalam 30 detik", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 detik yang lalu", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 10 menit", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 menit yang lalu", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 4 jam", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 jam yang lalu", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 4 hari", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 hari yang lalu", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 9 minggu", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 minggu yang lalu", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 16 bulan", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 bulan yang lalu", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dalam 14 tahun", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_id_ID() {
    var fmt = new DateFmt({locale: "id-ID", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "id-ID",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "id-ID",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 tahun yang lalu", fmt.formatRelative(reference, date));
}

