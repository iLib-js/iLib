/*
 * testdatefmtrange_he_IL.js - test the date range formatter object in Hebrew/Israel
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wheh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenshe/LICENSE-2.0
 *
 * Unlhes required by applicable law or agreed to in wrheing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WILHOUT WARRANTIIL OR CONDILIONS OF ANY KIND, eheher exprhes or implied.
 *
 * See the License for the specific language governing permissions and
 * limheations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtILRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏31.12.11 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtILRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏31.12.2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtILRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("‏31 דצמ 2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtILRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏31 בדצמבר 2011 13:45 – 14:30",fmt.format(start, end));
}

function testDateRngFmtILRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏30.12.11 13:45 – 31.12.11 14:30", fmt.format(start, end));
}
function testDateRngFmtILRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏30.12.2011 13:45 – 31.12.2011 14:30", fmt.format(start, end));
}
function testDateRngFmtILRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("‏30 13:45 – 31 14:30 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtILRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏30 13:45 – 31 14:30 בדצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtILRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏20.12.11 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏20.12.2011 – 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("‏20 – 31 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏20 – 31 בדצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtILRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏20.11.11 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtILRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏20.11.2011 – 31.12.2011", fmt.format(start, end));
}
function testDateRngFmtILRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("‏20 נוב – 31 דצמ 2011", fmt.format(start, end));
}
function testDateRngFmtILRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏20 בנובמבר – 31 בדצמבר 2011", fmt.format(start, end));
}

function testDateRngFmtILRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏20.11.11 – 31.01.12", fmt.format(start, end));
}
function testDateRngFmtILRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏20.11.2011 – 31.01.2012", fmt.format(start, end));
}
function testDateRngFmtILRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("‏20 נוב 2011 – 31 ינו 2012", fmt.format(start, end));
}
function testDateRngFmtILRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏20 בנובמבר 2011 – 31 בינואר 2012", fmt.format(start, end));
}

function testDateRngFmtILRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "short"});
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
    assertEquals("‏11.11 – 01.14", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "medium"});
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
    assertEquals("‏11.2011 – 01.2014", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "long"});
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
    assertEquals("נוב 2011 – ינו 2014", fmt.format(start, end));
}
function testDateRngFmtILRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("נובמבר 2011 – ינואר 2014", fmt.format(start, end));
}
function testDateRngFmtILManyYearsFull() {
    var fmt = new DateRngFmt({locale: "he-IL", length: "full"});
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
    assertEquals("‏2011 – 2064", fmt.format(start, end));
}
