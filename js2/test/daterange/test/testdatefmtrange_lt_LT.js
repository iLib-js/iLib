/*
 * testdatefmtrange_lt_LT.js - test the date range formatter object in Lithuanian/Lithuania
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wlth the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenslt/LICENSE-2.0
 *
 * Unllts required by applicable law or agreed to in wrlting, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WLTHOUT WARRANTILT OR CONDLTIONS OF ANY KIND, elther exprlts or implied.
 *
 * See the License for the specific language governing permissions and
 * limltations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtLTRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("13:45 – 14:30 11-12-31", fmt.format(start, end));
}
function testDateRngFmtLTRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("13:45 – 14:30 11-12-31", fmt.format(start, end));
}
function testDateRngFmtLTRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("13:45 – 14:30 2011 gruod. 31", fmt.format(start, end));
}
function testDateRngFmtLTRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("13:45 – 14:30 2011 m. gruod. 31 d.", fmt.format(start, end));
}

function testDateRngFmtLTRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("13:45 11–12–30 – 14:30 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("13:45 11–12–30 – 14:30 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("13:45 2011 m. gruod. 30 – 14:30 d.–31 d.", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("13:45 2011 m. gruod. 30 – 14:30 d.–31 d.", fmt.format(start, end));
}

function testDateRngFmtLTRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("11–12–20 – 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("11–12–20 – 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("2011 m. gruod. 20 – d.–31 d.", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("2011 m. gruod. 20 – d.–31 d.", fmt.format(start, end));
}

function testDateRngFmtLTRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("11–11–20 – 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("11–11–20 – 11–12–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("2011–lapkr.–20 – gruod.–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("2011–lapkr.–20 – gruod.–31", fmt.format(start, end));
}

function testDateRngFmtLTRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("11–11–20 – 12–01–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("11–11–20 – 12–01–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("2011–lapkr.–20 – 2012–saus.–31", fmt.format(start, end));
}
function testDateRngFmtLTRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("2011–lapkr.–20 – 2012–saus.–31", fmt.format(start, end));
}

function testDateRngFmtLTRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "short"});
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
    assertEquals("11–11 – 14–01", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "medium"});
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
    assertEquals("11–11 – 14–01", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "long"});
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
    assertEquals("2011–lapkr. – 2014–saus.", fmt.format(start, end));
}
function testDateRngFmtLTRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("lapkr. 2011 – saus. 2014", fmt.format(start, end));
}
function testDateRngFmtLTManyYearsFull() {
    var fmt = new DateRngFmt({locale: "lt-LT", length: "full"});
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
    assertEquals("2011 – 2064", fmt.format(start, end));
}
