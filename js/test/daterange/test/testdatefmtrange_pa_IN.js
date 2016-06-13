/*
 * testdatefmtrange_pa_in.js - test the date range formatter object in Punjabi/India
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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtRangeinDayShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("31/12/11, 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("31 ਦਸੰ 2011, 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("31 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("31 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("30/12/11, 1:45 ਬਾ.ਦੁ. – 31/12/11, 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("30 ਦਸੰ 2011, 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰ 2011, 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("30 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰਬਰ 2011 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("30 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰਬਰ 2011 2:30 ਬਾ.ਦੁ.", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("20 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("20 – 31 ਦਸੰ 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("20 – 31 ਦਸੰਬਰ 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("20 – 31 ਦਸੰਬਰ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("20/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("20 ਨਵੰ – 31 ਦਸੰ 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("20 ਨਵੰਬਰ – 31 ਦਸੰਬਰ 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("20 ਨਵੰਬਰ – 31 ਦਸੰਬਰ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("20/11/11 – 31/1/12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("20 ਨਵੰ 2011 – 31 ਜਨ 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("20 ਨਵੰਬਰ 2011 – 31 ਜਨਵਰੀ 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("20 ਨਵੰਬਰ 2011 – 31 ਜਨਵਰੀ 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
    assertEquals("11/11 – 1/14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
    assertEquals("ਨਵੰ 2011 – ਜਨ 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
    assertEquals("ਨਵੰਬਰ 2011 – ਜਨਵਰੀ 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("ਨਵੰਬਰ 2011 – ਜਨਵਰੀ 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_pa_IN() {
    var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
    assertEquals("2011 – 2064", fmt.format(start, end));
}
