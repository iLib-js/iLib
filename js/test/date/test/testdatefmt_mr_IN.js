/*
 * testdatefmt_mr_IN.js - test the date formatter object in Marathi for India
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
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtINConstructorEmpty_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "short", useNative: false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29-9-11", fmt.format(date));
}

function testDateFmtINSimpleMedium_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९ सेप्टें ११", fmt.format(date));
}

function testDateFmtINSimpleLong_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "long", useNative:false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 सेप्टें 2011", fmt.format(date));
}

function testDateFmtINSimpleFull_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९ सप्टेंबर २०११", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_mr_IN1() {
    var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "time", useNative: false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं 1:45", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "medium", type: "time", useNative:false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं 1:45", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", type: "time", useNative:false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं 1:45", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५ २९-९-११", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५ २९ सेप्टें ११", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "long", type: "datetime", useNative:false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं 1:45 29 सेप्टें 2011", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५ २९ सप्टेंबर २०११", fmt.format(date));
}

function testDateFmtINTemplateCalendar_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", calendar: "julian", template: "yyyy-MM-dd", useNative:false});
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



function testDateFmtINTemplateClock12SwitchHH_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("०१:४५", fmt.format(date));
}

function testDateFmtINTemplateClock12Switchkk_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("०१:४५", fmt.format(date));
}

function testDateFmtINTemplateClock24Switchhh_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", clock: "24", template: "hh:mm", useNative: false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
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

function testDateFmtINTemplateClock24SwitchKK_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", clock: "24", template: "KK:mm", useNative: false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
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

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("०१:४५", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("०१:४५", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("१३:४५", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", template: "kk:mm", useNative:false});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
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


function testDateFmtINTypeDate_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९-९-११", fmt.format(date));
}

function testDateFmtINTypeTime_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}

function testDateFmtINTypeDateTime_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सायं १:४५ २९-९-११", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("११", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("९", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
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

function testDateFmtINShortDateComponentsD_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९", fmt.format(date));
}

function testDateFmtINShortDateComponentsDM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९-९", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("९-११", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९-९-११", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गु २९-९", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गु २९-९-११", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२०११", fmt.format(date));
}

function testDateFmtINFullDateComponentsM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सप्टेंबर", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९", fmt.format(date));
}

function testDateFmtINFullDateComponentsDM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९ सप्टेंबर", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("सप्टेंबर २०११", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("२९ सप्टेंबर २०११", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गुरुवार २९ सप्टेंबर", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("गुरुवार २९ सप्टेंबर २०११", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("३७", fmt.format(date));
}

function testDateFmtINShortTimeComponentsM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("४५", fmt.format(date));
}

function testDateFmtINShortTimeComponentsH_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("१", fmt.format(date));
}


function testDateFmtINShortTimeComponentsHM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("१:४५", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("१:४५:३७", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("३७", fmt.format(date));
}

function testDateFmtINFullTimeComponentsM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("४५", fmt.format(date));
}

function testDateFmtINFullTimeComponentsH_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("१", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHM_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_mr_IN() {
    var fmt = new DateFmt({
		locale: "mr-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("सायं १:४५:३७ IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 सेकंदात", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinMinuteBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 सेकंदापूर्वी", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 मिनिटेात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 मिनिटेापूर्वी", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 तासात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 तासापूर्वी", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 दिवसात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 दिवसापूर्वी", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 आठवडेात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 आठवडेापूर्वी", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 महिनेात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 महिनेापूर्वी", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 वर्षेात", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_mr_IN() {
    var fmt = new DateFmt({locale: "mr-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "mr-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "mr-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 वर्षेापूर्वी", fmt.formatRelative(reference, date));
}


