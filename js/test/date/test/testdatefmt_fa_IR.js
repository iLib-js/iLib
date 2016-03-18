/*
 * testdatefmt_fa_IR.js - test the date formatter in saudi Arabia
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

var PersianDate = require("./../lib/PersianDate.js");
var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
/* First, Gregorian. See the bottom for the Persian calendar tests */

function testDateFmtSimpleShort_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹/۲۹", fmt.format(date));
};

function testDateFmtSimpleMedium_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱", fmt.format(date));
};

function testDateFmtSimpleLong_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱", fmt.format(date));
}

function testDateFmtSimpleFull_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱", fmt.format(date));
}

function testDateFmtSimpleTimeShort_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "short",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "medium",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtSimpleTimeLong_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		timelength: "long",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtSimpleTimeFull_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "short",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹/۲۹،‏ ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "medium",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱،‏ ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "long",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱، ساعت ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱، ساعت ‏۱۳:۴۵", fmt.format(date));
}


function testDateFmtTemplateCalendar_fa_IR() {
    var fmt = new DateFmt({
    	locale: "fa-IR", 
    	calendar: "julian", 
    	template: "yyyy-MM-dd"
	});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۰۱۱-۰۹-۲۹", fmt.format(date));
}


function testDateFmtTemplateClock12SwitchHH_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		clock: "12",
		template: "HH:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		clock: "12",
		template: "kk:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		clock: "24", 
		template: "hh:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		clock: "24", 
		template: "KK:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		template: "hh:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		template: "KK:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۰۱:۴۵", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		template: "HH:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		template: "kk:mm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۱۳:۴۵", fmt.format(date));
}


function testDateFmtTypeDate_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "date"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹/۲۹", fmt.format(date));
}

function testDateFmtTypeTime_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtTypeDateTime_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹/۲۹،‏ ‏۱۳:۴۵", fmt.format(date));
}


function testDateFmtShortDateComponentsY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "y"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۰۱۱", fmt.format(date));
}

function testDateFmtShortDateComponentsM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "m"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("س", fmt.format(date));
}


function testDateFmtShortDateComponentsD_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "d"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۹", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "dm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹/۲۹", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "my"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "dmy"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۹/۲۹", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "wdm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پ ‏۹/۲۹", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		date: "wdmy"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پ ۲۰۱۱/۹/۲۹", fmt.format(date));
}


function testDateFmtFullDateComponentsY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "y"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۰۱۱", fmt.format(date));
}

function testDateFmtFullDateComponentsM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "m"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("سپتامبر", fmt.format(date));
}

function testDateFmtFullDateComponentsD_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "d"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("۲۹", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "dm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "my"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("سپتامبر ۲۰۱۱", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "dmy"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۹ سپتامبر ۲۰۱۱", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "wdm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پنجشنبه ‏۲۹ سپتامبر", fmt.format(date));
}


function testDateFmtFullDateComponentsWDMY_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full",
		date: "wdmy"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پنجشنبه ۲۹ سپتامبر ۲۰۱۱", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "s"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۳۷", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "m"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۴۵", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "h"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۱۳", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "ms"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۴۵:۳۷", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "hm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "hms"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "hma"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ (IRST)", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ (IRST)", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		time: "hmsa"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷ (IRST)", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷ (IRST)", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "s"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۳۷", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "m"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۴۵", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "h"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۱۳", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "ms"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("۴۵:۳۷", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "hm"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "hms"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "hma"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ (IRST)", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ (IRST)", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		type: "time",
		length: "full",
		time: "hmsa"
	});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷ (IRST)", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷ (IRST)", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵:۳۷ (IRST)", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("‏30 ثانیه بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("‏30 ثانیه پیش", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏10 دقیقه بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏10 دقیقه پیش", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 ساعت بعد", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinDayBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 ساعت پیش", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 روز بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏4 روز پیش", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏9 هفته بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏9 هفته پیش", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏16 ماه بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏14 ماه پیش", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏14 سال بعد", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_fa_IR() {
    var fmt = new DateFmt({
		locale: "fa-IR",
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "fa-IR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "fa-IR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏21 سال پیش", fmt.formatRelative(reference, date));
}


/* Now Persian calendar tests */

function testDateFmtPersSimpleShort_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "short"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۲/۹/۲۱", fmt.format(date));
};

function testDateFmtPersSimpleMedium_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲", fmt.format(date));
};

function testDateFmtPersSimpleLong_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "long"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲", fmt.format(date));
}

function testDateFmtPersSimpleFull_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "full"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲", fmt.format(date));
}

function testDateFmtPersSimpleTimeShort_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "short",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersSimpleTimeMedium_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "medium",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersSimpleTimeLong_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR", 
		timelength: "long",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersSimpleTimeFull_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "full",
		type: "time"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersDateTimeSimpleShort_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "short",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۲/۹/۲۱،‏ ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersDateTimeSimpleMedium_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "medium",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲،‏ ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersDateTimeSimpleLong_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "long",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲، ساعت ‏۱۳:۴۵", fmt.format(date));
}

function testDateFmtPersDateTimeSimpleFull_fa_IR() {
    var fmt = new DateFmt({
		calendar: "persian",
		locale: "fa-IR",
		length: "full",
		type: "datetime"
	});
    assertNotNull(fmt);
    
    var date = new PersianDate({
		locale: "fa-IR",
		year: 1392,
		month: 9,
		day: 21,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۱ آذر ۱۳۹۲، ساعت ‏۱۳:۴۵", fmt.format(date));
}
