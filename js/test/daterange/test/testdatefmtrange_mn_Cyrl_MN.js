/*
 * testdatefmtrange_mn-Cyrl_MN.js - test the date range formatter object in Mongolian/Mongolia for Cyrillic script.
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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtMNRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("2011-12-31, 13:45-14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 12-р сар 31 13:45 - 14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 12 сарын 31 13:45 - 14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 12 сарын 31, 13:45 - 14:30", fmt.format(start, end));
}

function testDateRngFmtMNRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("2011-12-30, 13:45 - 2011-12-31, 14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 12-р сар 30 13:45 - 31 14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 12 сарын 30 13:45 - 31 14:30", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 12 сарын 30, 13:45 - 31, 14:30", fmt.format(start, end));
}

function testDateRngFmtMNRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("12-20 - 2011-12-31", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 12-р сар 20 - 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 12 сарын 20 - 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 12 сарын 20 - 31", fmt.format(start, end));
}

function testDateRngFmtMNRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("2011-11-20 - 12-31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 11-р сар 20 - 12-р сар 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 11 сарын 20 - 12 сарын 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 11 сарын 20 - 12 сарын 31", fmt.format(start, end));
}

function testDateRngFmtMNRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("2011-11-20 - 2012-01-31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 11-р сар 20 - 2012 1-р сар 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 11 сарын 20 - 2012 оны 01 сарын 31", fmt.format(start, end));
}
function testDateRngFmtMNRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 11 сарын 20 - 2012 оны 01 сарын 31", fmt.format(start, end));
}

function testDateRngFmtMNRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    assertEquals("2011-11 - 2014-01", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
    assertEquals("2011 11-р сар - 2014 1-р сар", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
    assertEquals("2011 оны 11 сарын - 2014 оны 01 сарын", fmt.format(start, end));
}
function testDateRngFmtMNRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 оны 11 сарын - 2014 оны 01 сарын", fmt.format(start, end));
}
function testDateRngFmtMNManyYearsFull() {
    var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
    assertEquals("2011 - 2064", fmt.format(start, end));
}
