/*
 * testdatefmtrange_fa_IR.js - test date range formatter object in Farsi/Iran
 * 
 * Copyright © 2012-2014, JEDLSoft
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* These are the gregorian tests. For Persian calendar tests, see about
 * half way down the file. */

function testDateRngFmtIRRangeinDayShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ت ‏۱۴:۳۰ ۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ت ‏۱۴:۳۰ ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ت ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ت ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۱۱/۱۲/۳۰ ت ‏۱۴:۳۰ ۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۲۰۱۱/۱۲/۳۰ ت ‏۱۴:۳۰ ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۳۰ ت ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۳۰ ت ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۱/۱۲/۲۰ ت ۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۲/۲۰ ت ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ ت ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ ت ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۱/۱۱/۲۰ ت ۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱/۲۰ ت ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ت ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ت ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۱/۱۱/۲۰ ت ۱۲/۱/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱/۲۰ ت ۲۰۱۲/۰۱/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ ت ۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ ت ۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۱/۱۱ ت ۱۴/۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱ ت ۲۰۱۴/۰۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نوامبر ۲۰۱۱ ت ژانویهٔ ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نوامبر ۲۰۱۱ ت ژانویهٔ ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtIRManyYearsFull() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱ ت ۲۰۶۴", fmt.format(start, end));
}
