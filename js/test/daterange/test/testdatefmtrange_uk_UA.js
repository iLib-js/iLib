/*
 * testdatefmtrange_uk_UA.js - test the date range formatter object Russian/Russia
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed unukr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unukr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unukr the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");

function testDateRngFmtUARangeInDayShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("31.12.11 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("31 груд. 2011 р. 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeInDayLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("31 грудня 2011 р. 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeInDayFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("31 грудня 2011 р. 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtUARangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("30.12.11 11 – 31.12.11 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("30 груд. 2011 р. 13:45 – 31 груд. 2011 р. 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("30 грудня 2011 р. 13:45 – 31 грудня 2011 р. 14:30", fmt.format(start, end));
}
function testDateRngFmtUARangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("30 грудня 2011 р. 13:45 – 31 грудня 2011 р. 14:30", fmt.format(start, end));
}

function testDateRngFmtUARangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("20 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("20 – 31 груд. 2011 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("20 – 31 грудня 2011 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("20 – 31 грудня 2011 р.", fmt.format(start, end));
}

function testDateRngFmtUARangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("20.11.11 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtUARangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("20 лист. – 31 груд. 2011 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("20 листопада – 31 грудня 2011 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("20 листопада – 31 грудня 2011 р.", fmt.format(start, end));
}

function testDateRngFmtUARangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("20.11.11 – 31.01.12", fmt.format(start, end));
}
function testDateRngFmtUARangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("20 лист. 2011 р. – 31 січ. 2012 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("20 листопада 2011 р. – 31 січня 2012 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("20 листопада 2011 р. – 31 січня 2012 р.", fmt.format(start, end));
}

function testDateRngFmtUARangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    assertEquals("11.11 – 01.14", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
    assertEquals("лист. 2011 р. – січ. 2014 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
    assertEquals("листопада 2011 р. – січня 2014 р.", fmt.format(start, end));
}
function testDateRngFmtUARangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("листопада 2011 р. – січня 2014 р.", fmt.format(start, end));
}
function testDateRngFmtUAManyYearsFull() {
    var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
    assertEquals("2011 р. – 2064 р.", fmt.format(start, end));
}
