/*
 * testdatefmt_ta_IN.js - test the date formatter object in tamil for India
 * 
 * Copyright © 2013-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use ttas file except in compliance with the License.
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
function testDateFmtINConstructorEmpty_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtINSimpleMedium_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 செப்., 2011", fmt.format(date));
}

function testDateFmtINSimpleLong_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 செப்டம்பர், 2011", fmt.format(date));
}

function testDateFmtINSimpleFull_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 செப்டம்பர், 2011", fmt.format(date));
}
//needs to have translations for a.m.-p.m.
/*function testDateFmtINSimpleTimeShort_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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


function testDateFmtINSimpleTimeShort_ta_IN1() {
    var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINSimpleTimeMedium_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINSimpleTimeLong_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINSimpleTimeFull_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINDateTimeSimpleShort_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINDateTimeSimpleMedium_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29 செப்., 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29 செப்., 2011", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 29 செப்டம்பர் 2011", fmt.format(date));
}*/


function testDateFmtINTemplateCalendar_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", calendar: "julian", template: "yyyy-MM-dd"});
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


function testDateFmtINTemplateClock12SwitchHH_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateClock12Switchkk_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateClock24Switchhh_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateClock24SwitchKK_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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


function testDateFmtINTypeDate_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

/*function testDateFmtINTypeTime_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINTypeDateTime_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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
*/

function testDateFmtINShortDateComponentsY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortDateComponentsM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortDateComponentsN_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("செ", fmt.format(date));
}

function testDateFmtINShortDateComponentsD_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortDateComponentsDM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-9", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortDateComponentsDMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortDateComponentsWDM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("வி, 29-9", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("வி, 29-9-11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullDateComponentsM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("செப்டம்பர்", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullDateComponentsDM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 செப்டம்பர்", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("செப்டம்பர், 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 செப்டம்பர், 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("வியாழன், 29 செப்டம்பர்", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("வியாழன், 29 செப்டம்பர், 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsH_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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


/*function testDateFmtINShortTimeComponentsHM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMS_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMA_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMAZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMSA_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMSZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINShortTimeComponentsHMSAZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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
*/

function testDateFmtINFullTimeComponentsS_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsH_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

//needs to have translations for ago and after

/*function testDateFmtINFullTimeComponentsHM_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsHMS_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsHMA_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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



function testDateFmtINFullTimeComponentsHMAZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsHMSA_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsHMSZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINFullTimeComponentsHMSAZ_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

function testDateFmtINWithTimeZoneAndNoDST_ta_IN() {
    var fmt = new DateFmt({
		locale: "ta-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ta-IN",
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

/*function testDateFmtFormatRelativeWittanMinuteAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 வினாடிகள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanMinuteBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 வினாடிகள் पहले", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanHourAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 நிமிடங்கள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanHourBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 நிமிடங்கள் पहले", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanDayAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 மணிநேரம் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanDayBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 மணிநேரம் पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWittanFortnightAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 நாட்கள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanFortnightBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 நாட்கள் पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWittanQuarterAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 வாரங்கள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanQuarterBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 வாரங்கள் पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWittanTwoYearsAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 மாதங்கள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWittanTwoYearsBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 மாதங்கள் पहले", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 வருடங்கள் में", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ta_IN() {
    var fmt = new DateFmt({locale: "ta-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ta-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ta-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 வருடங்கள் पहले", fmt.formatRelative(reference, date));
}
*/

