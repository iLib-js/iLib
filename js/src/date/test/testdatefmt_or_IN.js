/*
 * testdatefmt_or_IN.js - test the date formatter object in Punjabi for India
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

function testDateFmtINConstructorEmpty_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("11-9-29", fmt.format(date));
}

function testDateFmtINSimpleMedium_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ସେପ୍ଟେମ୍ବର 11", fmt.format(date));
}

function testDateFmtINSimpleLong_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 ସେପ୍ଟେମ୍ବର 29", fmt.format(date));
}

function testDateFmtINSimpleFull_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ସେପ୍ଟେମ୍ବର 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINSimpleTimeShort_or_IN1() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINSimpleTimeMedium_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINSimpleTimeLong_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINSimpleTimeFull_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINDateTimeSimpleShort_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm 11-9-29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm 29 ସେପ୍ଟେମ୍ବର 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm 2011 ସେପ୍ଟେମ୍ବର 29", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm 29 ସେପ୍ଟେମ୍ବର 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotUndefined(fmt);
    
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



function testDateFmtINTemplateClock12SwitchHH_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateClock12Switchkk_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateClock24Switchhh_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateClock24SwitchKK_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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


function testDateFmtINTypeDate_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTypeTime_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINTypeDateTime_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 pm 11-9-29", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsN_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsD_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsDM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11-9", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortDateComponentsWDM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ଗୁ, 9-29", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ଗୁ, 11-9-29", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullDateComponentsM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ସେପ୍ଟେମ୍ବର", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullDateComponentsDM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ସେପ୍ଟେମ୍ବର 29", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ସେପ୍ଟେମ୍ବର 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ସେପ୍ଟେମ୍ବର 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ଗୁରୁବାର ସେପ୍ଟେମ୍ବର 29", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ଗୁରୁବାର, 2011 ସେପ୍ଟେମ୍ବର 29", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsH_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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


function testDateFmtINShortTimeComponentsHM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMS_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMA_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMAZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMSA_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMSZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINShortTimeComponentsHMSAZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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


function testDateFmtINFullTimeComponentsS_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsH_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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



function testDateFmtINFullTimeComponentsHM_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsHMS_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsHMA_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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



function testDateFmtINFullTimeComponentsHMAZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsHMSA_or_IN() {
    var fmt = new ilib.DateFmt({locale: "or-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsHMSZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINFullTimeComponentsHMSAZ_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

function testDateFmtINWithTimeZoneAndNoDST_or_IN() {
    var fmt = new ilib.DateFmt({
		locale: "or-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "or-IN",
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

