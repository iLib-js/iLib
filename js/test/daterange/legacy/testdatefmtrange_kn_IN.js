/*
 * testdatefmtrange_kn_in.js - test the date range formatter object in Kannada/india
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

function testDateRngFmtRangeinDayShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ – 2:30 ಮಧ್ಯಾಹ್ನ 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ – 2:30 ಮಧ್ಯಾಹ್ನ 31 12 2011", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ – 2:30 ಮಧ್ಯಾಹ್ನ 31, ಡಿಸೆಂಬರ್, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ – 2:30 ಮಧ್ಯಾಹ್ನ 31 ಡಿಸೆಂಬರ್ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 30/12/11 – 2:30 ಮಧ್ಯಾಹ್ನ 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 30/12/2011 – 2:30 ಮಧ್ಯಾಹ್ನ 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 30 ಡಿಸೆಂಬರ್ – 2:30 ಮಧ್ಯಾಹ್ನ 31 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("1:45 ಮಧ್ಯಾಹ್ನ 30 ಡಿಸೆಂಬರ್ – 2:30 ಮಧ್ಯಾಹ್ನ 31 2011", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20/12/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("20/12/2011 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("20 ಡಿಸೆಂಬರ್ – 31 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("20 ಡಿಸೆಂಬರ್ – 31 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20/11/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("20/11/2011 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("20 ನವೆಂಬರ್ – 31 ಡಿಸೆಂಬರ್ 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("20 ನವೆಂಬರ್ – 31 ಡಿಸೆಂಬರ್ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("20/11/11 – 31/01/12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("20/11/2011 – 31/01/2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("20 ನವೆಂಬರ್ 2011 – 31 ಜನವರಿ 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("20 ನವೆಂಬರ್ 2011 – 31 ಜನವರಿ 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "short"});
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
    assertEquals("11/11 – 01/14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "medium"});
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
    assertEquals("11/2011 – 01/2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "long"});
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
    assertEquals("ನವೆಂಬರ್ 2011 – ಜನವರಿ 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
    assertEquals("ನವೆಂಬರ್ 2011 – ಜನವರಿ 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_kn_IN() {
    var fmt = new ilib.DateRngFmt({locale: "kn-IN", length: "full"});
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
