/*
 * testdatefmtrange_th_TH.js - test the the range formatter object in Thai
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENTH-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ThaiSolarDate = require("./../lib/ThaiSolarDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtTHRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 - 14:30 31/12/11", fmt.format(start, end));
}
function testDateRngFmtTHRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 - 14:30 31 ธ.ค. 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 - 14:30 31 ธันวาคม 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 - 14:30 31 ธันวาคม 2011", fmt.format(start, end));
}

function testDateRngFmtTHRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30 - 14:30 31/12/11", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30 - 14:30 31 ธ.ค. 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30 - 14:30 31 ธันวาคม 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 30 - 14:30 31 ธันวาคม 2011", fmt.format(start, end));
}

function testDateRngFmtTHRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 ธ.ค. 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 ธันวาคม 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 ธันวาคม 2011", fmt.format(start, end));
}

function testDateRngFmtTHRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พ.ย. 2011 - 31 ธ.ค. 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พฤศจิกายน - 31 ธันวาคม 2011", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พฤศจิกายน - 31 ธันวาคม 2011", fmt.format(start, end));
}

function testDateRngFmtTHRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/1/12", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พ.ย. 2011 - 31 ม.ค. 2012", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พฤศจิกายน 2011 - 31 มกราคม 2012", fmt.format(start, end));
}
function testDateRngFmtTHRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 พฤศจิกายน 2011 - 31 มกราคม 2012", fmt.format(start, end));
}

function testDateRngFmtTHRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 - 1/14", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("พ.ย. 2011 - ม.ค. 2014", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤศจิกายน 2011 - มกราคม 2014", fmt.format(start, end));
}
function testDateRngFmtTHRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("พฤศจิกายน 2011 - มกราคม 2014", fmt.format(start, end));
}
function testDateRngFmtTHManyYearsFull() {
    var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
    assertNotNull(fmt);
    
    var start = new ThaiSolarDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ThaiSolarDate({
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
