/*
 * testdatefmt_ur_IN.js - test the date formatter object in Urdu for India
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
function testDateFmtINConstructorEmpty_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹/۱۱", fmt.format(date));
}

function testDateFmtINSimpleMedium_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱", fmt.format(date));
}

function testDateFmtINSimpleLong_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱", fmt.format(date));
}

function testDateFmtINSimpleFull_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_ur_IN1() {
    var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹/۱۱ ‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱ ‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱ ‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱ ‏۱:۴۵ بعد دوپہر", fmt.format(date));
}


function testDateFmtINTemplateCalendar_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
    assertEquals("۲۰۱۱-۰۹-۲۹", fmt.format(date));
}



function testDateFmtINTemplateClock12SwitchHH_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtINTemplateClock12Switchkk_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtINTemplateClock24Switchhh_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtINTemplateClock24SwitchKK_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}


function testDateFmtINTypeDate_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹/۱۱", fmt.format(date));
}

function testDateFmtINTypeTime_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINTypeDateTime_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹/۱۱ ‏۱:۴۵ بعد دوپہر", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۱", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۹", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
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

function testDateFmtINShortDateComponentsD_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۹", fmt.format(date));
}

function testDateFmtINShortDateComponentsDM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹/۱۱", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹/۹/۱۱", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T، ‏۲۹/۹", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T، ۲۹/۹/۱۱", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۰۱۱", fmt.format(date));
}

function testDateFmtINFullDateComponentsM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ستمبر", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۹", fmt.format(date));
}

function testDateFmtINFullDateComponentsDM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ستمبر، ۲۰۱۱", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ ستمبر، ۲۰۱۱", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("جمعرات، ‏۲۹ ستمبر", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("جمعرات، ۲۹ ستمبر، ۲۰۱۱", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۳۷", fmt.format(date));
}

function testDateFmtINShortTimeComponentsM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۴۵", fmt.format(date));
}

function testDateFmtINShortTimeComponentsH_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۱", fmt.format(date));
}


function testDateFmtINShortTimeComponentsHM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۳۷", fmt.format(date));
}

function testDateFmtINFullTimeComponentsM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۴۵", fmt.format(date));
}

function testDateFmtINFullTimeComponentsH_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("۱", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHM_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_ur_IN() {
    var fmt = new DateFmt({
		locale: "ur-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵:۳۷ بعد دوپہر IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("‏30 سیکنڈ میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("‏30 سیکنڈ پہلے", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏10 منٹ میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏10 منٹ پہلے", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 گھنٹے میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 گھنٹے پہلے", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 دن میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 دن پہلے", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏9 ہفتے میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏9 ہفتے پہلے", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏16 مہینے میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏14 مہینے پہلے", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏14 سال میں", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ur_IN() {
    var fmt = new DateFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ur-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ur-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏21 سال پہلے", fmt.formatRelative(reference, date));
}


