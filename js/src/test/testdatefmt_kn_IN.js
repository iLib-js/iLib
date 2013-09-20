/*
 * testdatefmt_kn_IN.js - test the date formatter object in Kannada for India
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tkns file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific lanknage governing permissions and
 * limitations under the License.
 */

function testDateFmtINConstructorEmpty_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtINSimpleMedium_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ಸೆಪ್ಟೆಂಬರ್‌ 11", fmt.format(date));
}

function testDateFmtINSimpleLong_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, ಸೆಪ್ಟೆಂಬರ್‌, 2011", fmt.format(date));
}

function testDateFmtINSimpleFull_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ಸಪ್ಟೆಂಬರ್ 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_kn_IN1() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 29/9/11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 29 ಸೆಪ್ಟೆಂಬರ್‌ 11", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 29, ಸೆಪ್ಟೆಂಬರ್‌, 2011", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 29 ಸಪ್ಟೆಂಬರ್ 2011", fmt.format(date));
}


function testDateFmtINTemplateCalendar_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", calendar: "julian", template: "yyyy-MM-dd"});
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



function testDateFmtINTemplateClock12SwitchHH_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateClock12Switchkk_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateClock24Switchhh_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateClock24SwitchKK_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
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


function testDateFmtINTypeDate_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtINTypeTime_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINTypeDateTime_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 29/9/11", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "y"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortDateComponentsM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtINShortDateComponentsN_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "n"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortDateComponentsD_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "d"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortDateComponentsDM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtINShortDateComponentsMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "my"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortDateComponentsDMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtINShortDateComponentsWDM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಗು, 29/9", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಗು, 9/29/11", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINFullDateComponentsM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಸಪ್ಟೆಂಬರ್", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINFullDateComponentsDM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ಸಪ್ಟೆಂಬರ್", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಸಪ್ಟೆಂಬರ್ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ಸಪ್ಟೆಂಬರ್ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಗುರುವಾರ, 29 ಸೆಪ್ಟೆಂಬರ್‌", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ಗುರುವಾರ, ಸೆಪ್ಟೆಂಬರ್‌ 29, 2011", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortTimeComponentsM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINShortTimeComponentsH_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
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


function testDateFmtINShortTimeComponentsHM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINFullTimeComponentsM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
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

function testDateFmtINFullTimeComponentsH_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
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



function testDateFmtINFullTimeComponentsHM_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 ಮಧ್ಯಾಹ್ನ", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_kn_IN() {
    var fmt = new ilib.DateFmt({
		locale: "kn-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("01:45:37 ಮಧ್ಯಾಹ್ನ IST", fmt.format(date));
}

function testDateFmtFormatRelativeWitknnMinuteAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 ಸೆಕೆಂಡುಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnMinuteBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 ಸೆಕೆಂಡುಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnHourAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 ನಿಮಿಷಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnHourBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 ನಿಮಿಷಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnDayAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ಗಂಟೆಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnDayBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ಗಂಟೆಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitknnFortnightAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ದಿನಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnFortnightBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 ದಿನಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitknnQuarterAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ವಾರಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnQuarterBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 ವಾರಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWitknnTwoYearsAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 ತಿಂಗಳುಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWitknnTwoYearsBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 ತಿಂಗಳುಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 ವರ್ಷಗಳು ನಂತರ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_kn_IN() {
    var fmt = new ilib.DateFmt({locale: "kn-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 ವರ್ಷಗಳು ಹಿಂದೆ", fmt.formatRelative(reference, date));
}


