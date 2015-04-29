/*
 * testdatefmtrange_ms_MY.js - test the date range formatter object in Malaysian/Malaysia
 * 
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tmss file except in compliance with the License.
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

function testDateRngFmtMYRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG – 2:00 PTG 31/12/11", fmt.format(start, end));
}
function testDateRngFmtMYRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG – 2:00 PTG 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG – 2:00 PTG 31 Dis 2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG – 2:00 PTG 31 Disember 2011", fmt.format(start, end));
}

function testDateRngFmtMYRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG 30/12/11 – 2:00 PTG 31/12/11", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG 30/12/2011 – 2:00 PTG 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG 30 – 2:00 PTG 31 Dis 2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 PTG 30 – 2:00 PTG 31 Disember 2011", fmt.format(start, end));
}

function testDateRngFmtMYRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/2011 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 Dis 2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 Disember 2011", fmt.format(start, end));
}

function testDateRngFmtMYRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/2011 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov – 31 Dis, 2011", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November – 31 Disember, 2011", fmt.format(start, end));
}

function testDateRngFmtMYRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/2011 – 31/01/2012", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov 2011 – 31 Jan 2012", fmt.format(start, end));
}
function testDateRngFmtMYRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November 2011 – 31 Januari 2012", fmt.format(start, end));
}

function testDateRngFmtMYRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/2011 – 01/2014", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("Nov 2011 – Jan 2014", fmt.format(start, end));
}
function testDateRngFmtMYRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("November 2011 – Januari 2014", fmt.format(start, end));
}
function testDateRngFmtMYManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "ms-MY", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mMYute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		mMYute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 – 2064", fmt.format(start, end));
}
