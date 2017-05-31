/*
 * testdatefmtrange_fa_IR.js - test date range formatter object in Farsi/Iran
 * 
 * Copyright © 2012-2016, JEDLSoft
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

var PersianDate = require("./../lib/PersianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
/* These are the gregorian tests. For Persian calendar tests, see about
 * half way down the file. */

function testDateRngFmtIRRangeinDayShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۲/۳۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۱ دسامبر ۲۰۱۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtIRRangeinDayFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextDayShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۲/۳۰،‏ ‏۱۳:۴۵ – ‏۲۰۱۱/۱۲/۳۱،‏ ‏۱۴:۳۰", fmt.format(start, end));

}
function testDateRngFmtIRRangeNextDayMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۰ دسامبر ۲۰۱۱،‏ ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱،‏ ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۰ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextDayFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۰ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۴:۳۰", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiDayShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۲/۲۰ – ۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiDayFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextMonthShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱/۲۰ – ‏۲۰۱۱/۱۲/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextMonthFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtIRRangeNextYearShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱/۲۰ – ‏۲۰۱۲/۱/۳۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtIRRangeNextYearFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲", fmt.format(start, end));
}

function testDateRngFmtIRRangeMultiYearShort() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱/۱۱ – ‏۲۰۱۴/۱", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearMedium() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearLong() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtIRRangeMultiYearFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴", fmt.format(start, end));

}
function testDateRngFmtIRManyYearsFull() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "gregorian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱ – ۲۰۶۴", fmt.format(start, end));
}

/* Now the persian calendar tests. */

function testDateRngFmtPersRangeinDdfayShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۲‏/۳۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۱ اسفند ۱۳۹۳،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۱ اسفند ۱۳۹۳، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeinDayFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ اسفند ۳۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextDayShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۲‏/۳۰،‏ ‏۱۳:۴۵ – ‏۱۳۹۳‏/۱۲‏/۳۱،‏ ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۰ اسفند ۱۳۹۳،‏ ‏۱۳:۴۵ – ‏۳۱ اسفند ۱۳۹۳،‏ ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۳۰ اسفند ۱۳۹۳، ساعت ‏۱۳:۴۵ – ‏۳۱ اسفند ۱۳۹۳، ساعت ‏۱۴:۳۰", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextDayFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ اسفند ۳۰، ساعت ‏۱۳:۴۵ – ۱۳۹۳ اسفند ۳۱، ساعت ‏۱۴:۳۰", fmt.format(start, end));
}

function testDateRngFmtPersRangeMultiDayShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۲‏/۲۰ – ۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ‏۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ‏۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiDayFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ اسفند ۲۰ – ۳۱", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextMonthShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۱‏/۲۰ – ‏۱۳۹۳‏/۱۲‏/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن – ‏۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن – ‏۳۱ اسفند ۱۳۹۳", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextMonthFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1393,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ بهمن ۲۰ – اسفند ۳۱", fmt.format(start, end));
}

function testDateRngFmtPersRangeNextYearShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۱‏/۲۰ – ‏۱۳۹۴‏/۱‏/۳۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن ۱۳۹۳ – ‏۳۱ فروردین ۱۳۹۴", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ بهمن ۱۳۹۳ – ‏۳۱ فروردین ۱۳۹۴", fmt.format(start, end));
}
function testDateRngFmtPersRangeNextYearFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1394,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ بهمن ۲۰ – ۱۳۹۴ فروردین ۳۱", fmt.format(start, end));
}

function testDateRngFmtPersRangeMultiYearShort_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "short"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳‏/۱۱ – ‏۱۳۹۶‏/۱", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearMedium_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "medium"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏بهمن ۱۳۹۳ – فروردین ۱۳۹۶", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearLong_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "long"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏بهمن ۱۳۹۳ – فروردین ۱۳۹۶", fmt.format(start, end));
}
function testDateRngFmtPersRangeMultiYearFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1396,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ بهمن – ۱۳۹۶ فروردین", fmt.format(start, end));
}
function testDateRngFmtPersManyYearsFull_fa_IR() {
    var fmt = new DateRngFmt({
		locale: "fa-IR", 
		calendar: "persian",
		length: "full"
	});
    assertNotNull(fmt);
    
    var start = new PersianDate({
		year: 1393,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new PersianDate({
		year: 1450,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۳۹۳ – ۱۴۵۰", fmt.format(start, end));
}
