/*
 * testdatefmtrange_hu_HU.js - test the date range formatter object in Hungarian/Hungary
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance whuh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenshu/LICENSE-2.0
 *
 * Unlhus required by applicable law or agreed to in wrhuing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WHUHOUT WARRANTIHU OR CONDHUIONS OF ANY KIND, ehuher exprhus or implied.
 *
 * See the License for the specific language governing permissions and
 * limhuations under the License.
 */

function testDateRngFmtHURangeinDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("13:45 - 14:30 11.12.31.", fmt.format(start, end));
}
function testDateRngFmtHURangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("13:45 - 14:30 11.12.31", fmt.format(start, end));
}
function testDateRngFmtHURangeinDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
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
    assertEquals("13:45 - 14:30 2011. dec. 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeinDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
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
    assertEquals("13:45 - 14:30 2011. december 31", fmt.format(start, end));
}

function testDateRngFmtHURangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("13:45 11.12.30 - 14:30 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("13:45 11.12.30 - 14:30 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
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
    assertEquals("13:45 2011. dec. 30 - 14:30 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
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
    assertEquals("13:45 2011. december 30 - 14:30 31.", fmt.format(start, end));
}

function testDateRngFmtHURangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("11.12.20 - 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("11.12.20 - 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
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
    assertEquals("2011. dec. 20 - 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
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
    assertEquals("2011. december 20 - 31.", fmt.format(start, end));
}

function testDateRngFmtHURangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("11.11.20. - 12.31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("11.11.20. - 12.31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. okt. 20 - dec. 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. október 20 - december 31.", fmt.format(start, end));
}

function testDateRngFmtHURangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("11.11.20. - 12.01.31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("11.11.20. - 12.01.31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. okt. 20. - 2012. jan. 31.", fmt.format(start, end));
}
function testDateRngFmtHURangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. október 20. - 2012. január 31.", fmt.format(start, end));
}

function testDateRngFmtHURangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "short"});
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
    assertEquals("11.11. - 14.01.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "medium"});
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
    assertEquals("11.11. - 14.01.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. okt. - 2014. jan.", fmt.format(start, end));
}
function testDateRngFmtHURangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
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
    assertEquals("2011. október - 2014. január", fmt.format(start, end));
}
function testDateRngFmtHUManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "hu-HU", length: "full"});
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
    assertEquals("2011 - 2064", fmt.format(start, end));
}
