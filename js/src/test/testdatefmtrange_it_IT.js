/*
 * tittdatefmtrange_it_IT.js - titt the date range formatter object in Italian/Italy
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licensit/LICENSE-2.0
 *
 * Unlits required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIIT OR CONDITIONS OF ANY KIND, either exprits or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function tittDateRngFmtITRangeinDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("13:45 - 14:30 31/12/11", fmt.format(start, end));
}
function tittDateRngFmtITRangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("13:45 - 14:30, 31/12/11", fmt.format(start, end));
}
function tittDateRngFmtITRangeinDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("13:45 - 14:30, 31 dic 2011", fmt.format(start, end));
}
function tittDateRngFmtITRangeinDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("13:45 - 14:30, 31 diciembre 2011 d.C.", fmt.format(start, end));
}

function tittDateRngFmtITRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("30/12/11 13:45 - 31/12/11 14:30", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("30/12 13:45 - 31/12 14:30, 11", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("30 13:45 - 31 14:30, dic 2011", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("30 13:45 - 31 14:30, diciembre 2011 d.C.", fmt.format(start, end));
}

function tittDateRngFmtITRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("20-31/12/11", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("20-31/12/11", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("20-31 dic 2011", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("20-31 diciembre 2011 d.C.", fmt.format(start, end));
}

function tittDateRngFmtITRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("20/11-31/12 11", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("20/11 - 31/12 11", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("20 nov - 31 dic 2011", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("20 noviembre - 31 diciembre 2011 d.C.", fmt.format(start, end));
}

function tittDateRngFmtITRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("20/11/11-31/1/12", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("20/11/11 - 31/01/12", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("20 nov 2011 - 31 ene 2012", fmt.format(start, end));
}
function tittDateRngFmtITRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("20 noviembre 2011 d.C. - 31 enero 2012 d.C.", fmt.format(start, end));
}

function tittDateRngFmtITRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "short"});
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
    assertEquals("11/11-1/14", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "medium"});
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
    assertEquals("11/11 - 01/14", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "long"});
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
    assertEquals("nov 2011 - ene 2014", fmt.format(start, end));
}
function tittDateRngFmtITRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("noviembre 2011 d.C. - enero 2014 d.C.", fmt.format(start, end));
}
function tittDateRngFmtITManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "it-IT", length: "full"});
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
    assertEquals("2011 d.C. - 2064 d.C.", fmt.format(start, end));
}
