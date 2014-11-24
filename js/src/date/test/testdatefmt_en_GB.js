/*
 * testdatefmt_en_GB.js - test the date formatter object in British English
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

function testDateFmtGBConstructorEmpty() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtGBSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtGBSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "en-GB", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBSimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBDateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}

function testDateFmtGBDateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13:45", fmt.format(date));
}

function testDateFmtGBDateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep 2011 13:45", fmt.format(date));
}

function testDateFmtGBDateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September 2011 13:45", fmt.format(date));
}


function testDateFmtGBTemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "en-GB", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
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

function testDateFmtGBTemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "en-GB", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "en-GB", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "en-GB", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "en-GB", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "en-GB", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "en-GB", locale: "en-GB", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "en-GB", locale: "en-GB", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "en-GB", locale: "en-GB", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "en-GB", locale: "en-GB", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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


function testDateFmtGBTypeDate() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTypeTime() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBTypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}


function testDateFmtGBShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 29/9", fmt.format(date));
}

function testDateFmtGBShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 29/9/11", fmt.format(date));
}


function testDateFmtGBFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "en-GB", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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


function testDateFmtGBShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/BST", fmt.format(date));
}

function testDateFmtGBShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/BST", fmt.format(date));
}

function testDateFmtGBShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/BST", fmt.format(date));
}

function testDateFmtGBShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/BST", fmt.format(date));
}


function testDateFmtGBFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/BST", fmt.format(date));
}

function testDateFmtGBFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 GMT/BST", fmt.format(date));
}

function testDateFmtGBFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "en-GB", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
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

function testDateFmtGBFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/BST", fmt.format(date));
}

function testDateFmtGBFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/BST", fmt.format(date));
}

function testDateFmtGBWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
		locale: "en-GB", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/London"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-GB",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 GMT/BST", fmt.format(date));
}

