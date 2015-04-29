/*
 * testdatefmt_sq_AL.js - test the date formatter object in Hindi for India
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
 * dCESTributed under the License is dCESTributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtINConstructorEmpty_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtINSimpleMedium_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINSimpleLong_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 Sht 29", fmt.format(date));
}

function testDateFmtINSimpleFull_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 shtator 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_sq_AL1() {
    var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD 11-9-29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD 2011-09-29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD 2011 Sht 29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD 29 shtator 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotUndefined(fmt);
    
    var date = new JulianDate({
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



function testDateFmtINTemplateClock12SwitchHH_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateClock12Switchkk_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateClock24Switchhh_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateClock24SwitchKK_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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


function testDateFmtINTypeDate_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINTypeTime_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINTypeDateTime_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.45.MD 11-9-29", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsN_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsD_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsDM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsDMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortDateComponentsWDM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("E, 29.9", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("E, 29.9.11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINFullDateComponentsM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("shtator", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINFullDateComponentsDM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 shtator", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("shtator 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 shtator 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("e enjte 29 Sht", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("e enjte, 29 Sht 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortTimeComponentsM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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

function testDateFmtINShortTimeComponentsH_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
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


function testDateFmtINShortTimeComponentsHM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_sq_AL() {
    var fmt = new DateFmt({
		locale: "sq-AL", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD CEST", fmt.format(date));
}




function testDateFmtINFullTimeComponentsHM_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.MD", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_sq_AL() {
    var fmt = new DateFmt({
		locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD CEST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_sq_AL() {
    var fmt = new DateFmt({
		locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD CEST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_sq_AL() {
    var fmt = new DateFmt({
		locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD CEST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_sq_AL() {
    var fmt = new DateFmt({
		locale: "sq-AL", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1.45.37.MD CET", fmt.format(date));

}

/*function testDateFmtFormatRelativeWithinMinuteAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("Pēc 30 sekundēm", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("Pirms 30 sekundēm", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 10 minūtes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 10 minūtes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 4 stundas", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 4 stundas", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 4 dienas", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 4 dienas", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 9 nedēļas", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 9 nedēļas", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 16 mēnešiem", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 14 mēneša", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pēc 14 gada", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_sq_AL() {
    var fmt = new DateFmt({locale: "sq-AL", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "sq-AL",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "sq-AL",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("Pirms 21 gada", fmt.formatRelative(reference, date));
}
*/

