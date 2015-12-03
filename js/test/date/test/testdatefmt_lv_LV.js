/*
 * testdatefmt_lv_LV.js - test the date formatter object in Latvia
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
function testDateFmtConstructorEmpty_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtSimpleMedium_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. sept.", fmt.format(date));
}

function testDateFmtSimpleLong_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. septembris", fmt.format(date));
}

function testDateFmtSimpleFull_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. septembris", fmt.format(date));
}

function testDateFmtSimpleTimeShort_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtSimpleTimeMedium_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtSimpleTimeLong_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtSimpleTimeFull_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtDateTimeSimpleShort_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. sept. 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. septembris 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. septembris 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "lv-LV",
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


function testDateFmtTemplateClock12SwitchHH_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateClock12Switchkk_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateClock24Switchhh_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateClock24SwitchKK_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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


function testDateFmtTypeDate_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtTypeTime_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtTypeDateTime_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsN_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsD_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsDM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortDateComponentsDMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("C, 29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("C, 29.09.11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullDateComponentsM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembris", fmt.format(date));
}

function testDateFmtFullDateComponentsD_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullDateComponentsDM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. septembris", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada Septembris", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011. gada 29. septembris", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ceturtdiena, 29. septembris", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ceturtdiena, 2011. gada 29. septembris", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsH_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsMS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsHM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsHMS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsHMA_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsHMZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtShortTimeComponentsHMSZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 EEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 EEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsH_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsMS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsHM_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsHMS_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsHMA_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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

function testDateFmtFullTimeComponentsHMZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_lv_LV() {
    var fmt = new DateFmt({
        locale: "lv-LV", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 EEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "lv-LV",
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


/*function testDateFmtFormatRelativeWithinMinuteAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("+30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("-30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 h", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 h", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 d", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 d", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+9 w", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-9 w", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+16 m", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-16 m", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+14 y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_lv_LV() {
    var fmt = new DateFmt({locale: "lv-LV", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "lv-LV",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "lv-LV",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-21 y", fmt.formatRelative(reference, date));
}
*/

