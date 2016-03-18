/*
 * testdatefmtrange_mr_in.js - test the date range formatter object in Marathi/India
 * 
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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDateRngFmtRangeinDayShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("३१/१२/११, १:४५ म.उ. – २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("३१ डिसें, २०११, १:४५ म.उ. – २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("३१ डिसेंबर, २०११ 'रोजी' १:४५ म.उ. – २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("३१ डिसेंबर, २०११ 'रोजी' १:४५ म.उ. – २:३० म.उ.", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("३०/१२/११, १:४५ म.उ. – ३१/१२/११, २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("३० डिसें, १:४५ म.उ. – ३१ डिसें, २०११, २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("३० डिसेंबर, १:४५ म.उ. – ३१ डिसेंबर, २०११ 'रोजी' २:३० म.उ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("३० डिसेंबर, १:४५ म.उ. – ३१ डिसेंबर, २०११ 'रोजी' २:३० म.उ.", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("२० – ३१/१२/११", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("२० – ३१ डिसें, २०११", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("२० – ३१ डिसेंबर, २०११", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("२० – ३१ डिसेंबर, २०११", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("२०/११/११ – ३१/१२/११", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("२० नोव्हें – ३१ डिसें, २०११", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("२० नोव्हेंबर – ३१ डिसेंबर, २०११", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("२० नोव्हेंबर – ३१ डिसेंबर, २०११", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("२०/११/११ – ३१/१/१२", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("२० नोव्हें, २०११ – ३१ जाने, २०१२", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("२० नोव्हेंबर, २०११ – ३१ जानेवारी, २०१२", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("२० नोव्हेंबर, २०११ – ३१ जानेवारी, २०१२", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "short"});
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
    assertEquals("११/११ – १/१४", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "medium"});
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
    assertEquals("नोव्हें, २०११ – जाने, २०१४", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "long"});
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
    assertEquals("नोव्हेंबर, २०११ – जानेवारी, २०१४", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("नोव्हेंबर, २०११ – जानेवारी, २०१४", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_mr_IN() {
    var fmt = new ilib.DateRngFmt({locale: "mr-IN", length: "full"});
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
    assertEquals("२०११ – २०६४", fmt.format(start, end));
}
