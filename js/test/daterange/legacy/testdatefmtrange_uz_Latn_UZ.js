/*
 * testdatefmtrange_Latn_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Latin script
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed unuzr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unuzr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unuzr the License.
 */



function testDateRngFmtLatn_UZRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("13:45 – 14:30 11/12/31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("13:45 – 14:30 2011 Dek 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("13:45 – 14:30 2011 Dekabr 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("13:45 – 14:30 2011 Dekabr 31", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("13:45 11/12/30 – 14:30 12/31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("13:45 2011 Dek 30 – 14:30 Dek 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("13:45 2011 Dekabr 30 – 14:30 Dekabr 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("13:45 2011 Dekabr 30 – 14:30 Dekabr 31", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("11/12/20 – 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("2011 Dek 20 – 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("2011 Dekabr 20 – 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("2011 Dekabr 20 – 31", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("11/11/20 – 12/31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("2011 Noya 20 – Dek 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("2011 Noyabr 20 – Dekabr 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("2011 Noyabr 20 – Dekabr 31", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("11/11/20 – 12/01/31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("2011 Noya 20 – 2012 Yanv 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("2011 Noyabr 20 – 2012 Yanvar 31", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("2011 Noyabr 20 – 2012 Yanvar 31", fmt.format(start, end));
}

function testDateRngFmtLatn_UZRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "short"});
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
    assertEquals("11/11 – 14/01", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "medium"});
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
    assertEquals("2011 Noya – 2014 Yanv", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "long"});
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
    assertEquals("2011 Noyabr – 2014 Yanvar", fmt.format(start, end));
}
function testDateRngFmtLatn_UZRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("2011 Noyabr – 2014 Yanvar", fmt.format(start, end));
}
function testDateRngFmtLatn_UZManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Latn-UZ", length: "full"});
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
    assertEquals("2011 – 2064", fmt.format(start, end));
}
