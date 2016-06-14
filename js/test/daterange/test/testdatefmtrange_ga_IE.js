/*
 * testdatefmtrange_ga_IE.js - test the date range formatter object in Estonia/Estonian
 * 
 * Copyright © 2012-2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wgah the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licensga/LICENSE-2.0
 *
 * Unlgas required by applicable law or agreed to in wrgaing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WIEHOUT WARRANTIIE OR CONDIEIONS OF ANY KIND, egaher exprgas or implied.
 *
 * See the License for the specific language governing permissions and
 * limgaations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtIERangeinDayShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("31/12/2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("31 Noll 2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeinDayLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("31 Nollaig 2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeinDayFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("31 Nollaig 2011 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtIERangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("30/12/2011 13:45 – 31/12/2011 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("30 Noll 2011 13:45 – 31 Noll 2011 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("30 Nollaig 2011 13:45 – 31 Nollaig 2011 14:30", fmt.format(start, end));
}
function testDateRngFmtIERangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("30 Nollaig 2011 13:45 – 31 Nollaig 2011 14:30", fmt.format(start, end));
}

function testDateRngFmtIERangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("20 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("20 – 31 Noll 2011", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("20 – 31 Nollaig 2011", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("20 – 31 Nollaig 2011", fmt.format(start, end));
}

function testDateRngFmtIERangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("20/11 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtIERangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("20 Samh – 31 Noll 2011", fmt.format(start, end));
}
function testDateRngFmtIERangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("20 Samhain – 31 Nollaig 2011", fmt.format(start, end));
}
function testDateRngFmtIERangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("20 Samhain – 31 Nollaig 2011", fmt.format(start, end));
}

function testDateRngFmtIERangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("20/11/2011 – 31/01/2012", fmt.format(start, end));
}
function testDateRngFmtIERangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("20 Samh 2011 – 31 Ean 2012", fmt.format(start, end));
}
function testDateRngFmtIERangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("20 Samhain 2011 – 31 Eanáir 2012", fmt.format(start, end));
}
function testDateRngFmtIERangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("20 Samhain 2011 – 31 Eanáir 2012", fmt.format(start, end));
}

function testDateRngFmtIERangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "short"});
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
    assertEquals("11/2011 – 01/2014", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "medium"});
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
    assertEquals("Samh 2011 – Ean 2014", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "long"});
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
    assertEquals("Samhain 2011 – Eanáir 2014", fmt.format(start, end));
}
function testDateRngFmtIERangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
    assertEquals("Samhain 2011 – Eanáir 2014", fmt.format(start, end));
}
function testDateRngFmtIEManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ga-IE", length: "full"});
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
