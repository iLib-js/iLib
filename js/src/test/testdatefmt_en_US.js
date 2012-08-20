/*
 * testdatefmt_en_US.js - test the date formatter object in American English
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testDateFmtUSConstructorEmpty() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtUSSimpleShort() {
    var fmt = new ilib.DateFmt({length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtUSSimpleMedium() {
    var fmt = new ilib.DateFmt({length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/2011", fmt.format(date));
}

function testDateFmtUSSimpleLong() {
    var fmt = new ilib.DateFmt({length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtUSSimpleFull() {
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011", fmt.format(date));
}

function testDateFmtUSSimpleTimeShort() {
    var fmt = new ilib.DateFmt({length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSSimpleTimeMedium() {
    var fmt = new ilib.DateFmt({length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSSimpleTimeLong() {
    var fmt = new ilib.DateFmt({timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSSimpleTimeFull() {
    var fmt = new ilib.DateFmt({length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSDateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/11 1:45pm", fmt.format(date));
}

function testDateFmtUSDateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/2011 1:45pm", fmt.format(date));
}

function testDateFmtUSDateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Sep 29, 2011 1:45pm", fmt.format(date));
}

function testDateFmtUSDateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011 1:45pm", fmt.format(date));
}


function testDateFmtUSTemplateCalendar() {
    var fmt = new ilib.DateFmt({calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtUSTemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    try {
    	fmt.format(date);
    	fail();
    } catch (str) {
    	// success
    	assertEquals("Wrong date type passed to ilib.DateFmt.format()", str);
    }
}

function testDateFmtUSTemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "en-US", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "en-US", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "en-US", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "en-US", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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


function testDateFmtUSTypeDate() {
    var fmt = new ilib.DateFmt({type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtUSTypeTime() {
    var fmt = new ilib.DateFmt({type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSTypeDateTime() {
    var fmt = new ilib.DateFmt({type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/11 1:45pm", fmt.format(date));
}


function testDateFmtUSShortDateComponentsY() {
    var fmt = new ilib.DateFmt({date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortDateComponentsM() {
    var fmt = new ilib.DateFmt({date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortDateComponentsN() {
    var fmt = new ilib.DateFmt({date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortDateComponentsD() {
    var fmt = new ilib.DateFmt({date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29", fmt.format(date));
}

function testDateFmtUSShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtUSShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 9/29", fmt.format(date));
}

function testDateFmtUSShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 9/29/11", fmt.format(date));
}


function testDateFmtUSFullDateComponentsY() {
    var fmt = new ilib.DateFmt({length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullDateComponentsM() {
    var fmt = new ilib.DateFmt({length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullDateComponentsD() {
    var fmt = new ilib.DateFmt({length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29", fmt.format(date));
}

function testDateFmtUSFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 29, 2011", fmt.format(date));
}

function testDateFmtUSFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday September 29", fmt.format(date));
}

function testDateFmtUSFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday September 29, 2011", fmt.format(date));
}


function testDateFmtUSShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        time: "hmz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PDT", fmt.format(date));
}

function testDateFmtUSShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        time: "hmaz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45pm PDT", fmt.format(date));
}

function testDateFmtUSShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37pm", fmt.format(date));
}

function testDateFmtUSShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        time: "hmsz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PDT", fmt.format(date));
}

function testDateFmtUSShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        time: "hmsaz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37pm PDT", fmt.format(date));
}


function testDateFmtUSFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtUSFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45pm", fmt.format(date));
}

function testDateFmtUSFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PDT", fmt.format(date));
}

function testDateFmtUSFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45pm PDT", fmt.format(date));
}

function testDateFmtUSFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37pm", fmt.format(date));
}

function testDateFmtUSFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PDT", fmt.format(date));
}

function testDateFmtUSFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37pm PDT", fmt.format(date));
}

function testDateFmtUSWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PST", fmt.format(date));
}

function testDateFmtUSIslamic() {
    var fmt = new ilib.DateFmt({
        type: "date", 
        length: "full",
        date: "wdmy",
        calendar: "islamic"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.IslamicDate({
		year: 1433,
		month: 8,
		day: 24
	});
    
    // should format with English transliterations of the month names
    assertEquals("yawn as-sabt Šha'bān 24, 1433", fmt.format(date));
}

function testDateFmtUSHebrew() {
    var fmt = new ilib.DateFmt({
        type: "date", 
        length: "full",
        date: "wdmy",
        calendar: "hebrew"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 24
	});
    
    // should format with English transliterations of the month names
    assertEquals("yom sheni Ḥeshvan 24, 5772", fmt.format(date));
}

/*
function testDateFmtUSHebrew() {
    var fmt = new ilib.DateFmt({
        type: "date", 
        length: "full",
        date: "wdmy",
        calendar: "hebrew"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.HebrewDate({
		year: 5772,
		month: 4,
		day: 24
	});
    // should format with English transliterations of the month names
    assertEquals("Saturday Tammuz 24, 5772", fmt.format(date));
}
*/

function testDateFmtUSShortTimeWithNoMinOrSec() {
    var fmt = new ilib.DateFmt({
        type: "time",
        length: "short", 
        time: "hms"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13
	});
    assertEquals("1:00:00", fmt.format(date));
}
