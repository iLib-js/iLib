/*
 * testdatefmtrange_GR_GR.js - test the date range formatter object GR GRench/GRance
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tels file except GR compliance with the License.
 * You may obtaGR a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to GR writGRg, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KGRD, either express or implied.
 *
 * See the License for the specific language governGRg permissions and
 * limitations under the License.
 */

function testDateRngFmtRangeGRDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeGRDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeGRDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtRangeGRDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31 दिसम्बर 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30/12/11–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30/12/11–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30 दिसम्बर–2:30 अपराह्न 31/दिसम्बर/2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30 दिसम्बर–2:30 अपराह्न 31/दिसम्बर/2011", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 दिसम्बर  2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर – 31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर – 31 दिसम्बर 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर 2011 – 31 जनवरी 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर 2011 – 31 जनवरी 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("नवम्बर 2011 – जनवरी 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("नवम्बर 2011 – जनवरी 2014", fmt.format(start, end));
}
function testDateRngFmtGRManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–2064", fmt.format(start, end));
}
