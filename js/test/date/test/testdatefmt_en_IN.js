/*
 * testdatefmt_en_IN.js - test the date formatter object in Indian English
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
function testDateFmtINConstructorEmpty() {
    var fmt = new DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtINSimpleShort() {
    var fmt = new DateFmt({locale: "en-IN", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtINSimpleMedium() {
    var fmt = new DateFmt({locale: "en-IN", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-Sep-2011", fmt.format(date));
}

function testDateFmtINSimpleLong() {
    var fmt = new DateFmt({locale: "en-IN", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINSimpleFull() {
    var fmt = new DateFmt({locale: "en-IN", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINSimpleTimeShort() {
    var fmt = new DateFmt({locale: "en-IN", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium() {
    var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINSimpleTimeLong() {
    var fmt = new DateFmt({locale: "en-IN", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINSimpleTimeFull() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort() {
    var fmt = new DateFmt({locale: "en-IN", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 1:45 pm", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium() {
    var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-Sep-2011 1:45 pm", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong() {
    var fmt = new DateFmt({locale: "en-IN", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011 1:45 pm", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011 1:45 pm", fmt.format(date));
}


function testDateFmtINTemplateCalendar() {
    var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
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

function testDateFmtINTemplateCalendarIncompatibleDateType() {
    var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateClock12SwitchHH() {
    var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateClock12Switchkk() {
    var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateClock24Switchhh() {
    var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateClock24SwitchKK() {
    var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new DateFmt({locale: "en-IN", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new DateFmt({locale: "en-IN", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new DateFmt({locale: "en-IN", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new DateFmt({locale: "en-IN", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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


function testDateFmtINTypeDate() {
    var fmt = new DateFmt({locale: "en-IN", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINTypeTime() {
    var fmt = new DateFmt({locale: "en-IN", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINTypeDateTime() {
    var fmt = new DateFmt({locale: "en-IN", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 1:45 pm", fmt.format(date));
}


function testDateFmtINShortDateComponentsY() {
    var fmt = new DateFmt({locale: "en-IN", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsM() {
    var fmt = new DateFmt({locale: "en-IN", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsN() {
    var fmt = new DateFmt({locale: "en-IN", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsD() {
    var fmt = new DateFmt({locale: "en-IN", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsDM() {
    var fmt = new DateFmt({locale: "en-IN", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsMY() {
    var fmt = new DateFmt({locale: "en-IN", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsDMY() {
    var fmt = new DateFmt({locale: "en-IN", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortDateComponentsWDM() {
    var fmt = new DateFmt({locale: "en-IN", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T 29/09", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "en-IN", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T 29/09/11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsM() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsD() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsDM() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsMY() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsDMY() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullDateComponentsWDM() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday 29 September", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY() {
    var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday 29 September 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsM() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsH() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsMS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsHM() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINShortTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        time: "hmaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullTimeComponentsM() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullTimeComponentsH() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullTimeComponentsMS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
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

function testDateFmtINFullTimeComponentsHM() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMAZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 pm IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA() {
    var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST() {
    var fmt = new DateFmt({
		locale: "en-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 pm IST", fmt.format(date));
}

