/*
 * testdatefmtrange_hi_IN.js - test the date range formatter object in Hindi/India
 * 
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDateRngFmtINRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtINRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न–2:30 अपराह्न 31 दिसम्बर 2011", fmt.format(start, end));
}

function testDateRngFmtINRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30/12/11–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30/12/11–2:30 अपराह्न 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30 दिसम्बर–2:30 अपराह्न 31/दिसम्बर/2011", fmt.format(start, end));
}
function testDateRngFmtINRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 अपराह्न 30 दिसम्बर–2:30 अपराह्न 31/दिसम्बर/2011", fmt.format(start, end));
}

function testDateRngFmtINRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 दिसम्बर  2011", fmt.format(start, end));
}

function testDateRngFmtINRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtINRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर – 31 दिसम्बर 2011", fmt.format(start, end));
}
function testDateRngFmtINRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर – 31 दिसम्बर 2011", fmt.format(start, end));
}

function testDateRngFmtINRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtINRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtINRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर 2011 – 31 जनवरी 2012", fmt.format(start, end));
}
function testDateRngFmtINRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 नवम्बर 2011 – 31 जनवरी 2012", fmt.format(start, end));
}

function testDateRngFmtINRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("नवम्बर 2011 – जनवरी 2014", fmt.format(start, end));
}
function testDateRngFmtINRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("नवम्बर 2011 – जनवरी 2014", fmt.format(start, end));
}
function testDateRngFmtINManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "hi-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mINute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		mINute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–2064", fmt.format(start, end));
}
