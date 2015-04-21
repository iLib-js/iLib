/*
 * testdatefmt_ml_IN.js - test the date formatter object in Malyalam for India
 * 
 * Copyright © 2013, JEDLSoft
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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtINConstructorEmpty_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINSimpleMedium_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11, സെപ്റ്റം 29", fmt.format(date));
}

function testDateFmtINSimpleLong_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 സെപ്റ്റം 29", fmt.format(date));
}

function testDateFmtINSimpleFull_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011, സെപ്റ്റംബർ 29", fmt.format(date));
}
//needs to have translations for a.m.-p.m.
/*function testDateFmtINSimpleTimeShort_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_ml_IN1() {
    var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29/9/11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 11, സെപ്റ്റം 29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 2011 സെപ്റ്റം 29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 2011, സെപ്റ്റംബർ 29", fmt.format(date));
}


function testDateFmtINTemplateCalendar_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
*/


function testDateFmtINTemplateClock12SwitchHH_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateClock12Switchkk_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateClock24Switchhh_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateClock24SwitchKK_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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


function testDateFmtINTypeDate_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

/*function testDateFmtINTypeTime_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINTypeDateTime_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29/9/11", fmt.format(date));
}*/


function testDateFmtINShortDateComponentsY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsN_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsD_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsDM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9-11", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortDateComponentsWDM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29, വ്യാ", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9-11, വ്യാ", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINFullDateComponentsM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("സെപ്റ്റംബർ", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINFullDateComponentsDM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("സെപ്റ്റംബർ 29", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("സെപ്റ്റംബർ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011, സെപ്റ്റംബർ 29", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("സെപ്റ്റം 29, വ്യാഴാഴ്ച", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 സെപ്റ്റം 29, വ്യാഴാഴ്ച", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortTimeComponentsM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINShortTimeComponentsH_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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


/*function testDateFmtINShortTimeComponentsHM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}*/


function testDateFmtINFullTimeComponentsS_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINFullTimeComponentsM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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

function testDateFmtINFullTimeComponentsH_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
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



/*function testDateFmtINFullTimeComponentsHM_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_ml_IN() {
    var fmt = new DateFmt({
		locale: "ml-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 अपराह्न IST", fmt.format(date));
}*/
//needs to have translations for after
/*function testDateFmtFormatRelativeWithinMinuteAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 സെക്കന്റ് में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinMinuteBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 സെക്കന്റ് മുമ്പ്", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinHourAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 മിനിട്ട് में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinHourBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 മിനിട്ട് മുമ്പ്", fmt.formatRelative(reference, date));
}
/*function testDateFmtFormatRelativeWithinDayAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 മണിക്കൂ में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinDayBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 മണിക്കൂർ മുമ്പ്", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinFortnightAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ദിവസം में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinFortnightBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ദിവസം മുമ്പ്", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinQuarterAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ആഴ്ച में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinQuarterBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ആഴ്ച മുമ്പ്", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeWithinTwoYearsAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 മാസം में", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeWithinTwoYearsBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 മാസം മുമ്പ്", fmt.formatRelative(reference, date));
}

/*function testDateFmtFormatRelativeYearsAfter_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 വർഷംमें", fmt.formatRelative(reference, date));
}*/
function testDateFmtFormatRelativeYearsBefore_ml_IN() {
    var fmt = new DateFmt({locale: "ml-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ml-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ml-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 വർഷം മുമ്പ്", fmt.formatRelative(reference, date));
}


