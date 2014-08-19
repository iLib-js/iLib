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
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ ۱۱/۱۲/۳۰ تا ‏۱۴:۳۰ ۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ ۲۰۱۱/۱۲/۳۰ تا ‏۱۴:۳۰ ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ ۳۰ تا ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۳:۴۵ ۳۰ تا ‏۱۴:۳۰ ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۱/۱۲/۲۰ تا ۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰۱۱/۱۲/۲۰ تا ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰ تا ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۲۰ تا ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۱/۱۱/۲۰ تا ۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰۱۱/۱۱/۲۰ تا ۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰ نوامبر تا ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۲۰ نوامبر تا ۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
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
    assertEquals("‏۱۱/۱۱/۲۰ تا ۱۲/۱/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰۱۱/۱۱/۲۰ تا ۲۰۱۲/۰۱/۳۱", fmt.format(start, end));
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
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ تا ۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
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
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ تا ۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
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
    assertEquals("‏۱۱/۱۱ تا ۱۴/۱", fmt.format(start, end));
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
    assertEquals("‏۲۰۱۱/۱۱ تا ۲۰۱۴/۰۱", fmt.format(start, end));
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
    assertEquals("نوامبر ۲۰۱۱ تا ژانویهٔ ۲۰۱۴", fmt.format(start, end));
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
    assertEquals("نوامبر ۲۰۱۱ تا ژانویهٔ ۲۰۱۴", fmt.format(start, end));
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
    assertEquals("‏۲۰۱۱ تا ۲۰۶۴", fmt.format(start, end));
}

/* Now the persian calendar tests. */

function testDateRngFmtPersRangeinDdfayShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۱۳۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ تا ‏۱۴:۳۰ ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextDayShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۹۳/۱۲/۳۰ تا ‏۱۴:۳۰ ۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۱۳۹۳/۱۲/۳۰ تا ‏۱۴:۳۰ ۱۳۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۳۰ تا ‏۱۴:۳۰ ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳:۴۵ ۳۰ تا ‏۱۴:۳۰ ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}

function testDateRngFmtPersRangeMultiDayShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹۳/۱۲/۲۰ تا ۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳/۱۲/۲۰ تا ۱۳۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ تا ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ تا ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextMonthShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹۳/۱۱/۲۰ تا ۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳/۱۱/۲۰ تا ۱۳۹۳/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن تا ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن تا ۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextYearShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹۳/۱۱/۲۰ تا ۹۴/۱/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳/۱۱/۲۰ تا ۱۳۹۴/۰۱/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن ۱۳۹۳ تا ۳۱ فروردین ۱۳۹۴", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن ۱۳۹۳ تا ۳۱ فروردین ۱۳۹۴", fmt.format(start, end));
}

function testDateRngFmtPersRangeMultiYearShort_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۹۳/۱۱ تا ۹۶/۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearMedium_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳/۱۱ تا ۱۳۹۶/۰۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearLong_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("بهمن ۱۳۹۳ تا فروردین ۱۳۹۶", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("بهمن ۱۳۹۳ تا فروردین ۱۳۹۶", fmt.format(start, end));
}
function testDateRngFmtPersManyYearsFull_fa_IR() {
    var fmt = new ilib.DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new ilib.Date.PersDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.PersDate({
		year: 1450,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ تا ۱۴۵۰", fmt.format(start, end));
}
