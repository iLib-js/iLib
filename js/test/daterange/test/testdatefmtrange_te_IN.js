/*
 * testdatefmtrange_te_IN.js - test the date range formatter object in Telugu/India
 * 
 * 
 * Copyright © 2012-2016, JEDLSoft
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
function testDateRngFmtRangeinDayShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("31-12-11 1:45 [PM] – 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("31 డిసెం, 2011 1:45 [PM] – 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("31 డిసెంబర్, 2011 1:45 [PM] – 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("31, డిసెంబర్ 2011 1:45 [PM] – 2:30 [PM]", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("30-12-11 1:45 [PM] – 31-12-11 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("30 డిసెం, 2011 1:45 [PM] – 31 డిసెం, 2011 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("30 డిసెంబర్, 2011 1:45 [PM] – 31 డిసెంబర్, 2011 2:30 [PM]", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("30, డిసెంబర్ 2011 1:45 [PM] – 31, డిసెంబర్ 2011 2:30 [PM]", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("20 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("20 – 31 డిసెం, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("20 – 31 డిసెంబర్, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("20 – 31, డిసెంబర్ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("20-11 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("20 నవం – 31 డిసెం, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("20 నవంబర్ – 31 డిసెంబర్, 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("20, నవంబర్ – 31, డిసెంబర్ 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("20-11-11 – 31-01-12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("20 నవం, 2011 – 31 జన, 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("20 నవంబర్, 2011 – 31 జనవరి, 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("20, నవంబర్ 2011 – 31, జనవరి 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
    assertEquals("11-11 – 01-14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
    assertEquals("నవం, 2011 – జన, 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
    assertEquals("నవంబర్, 2011 – జనవరి, 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
    assertEquals("నవంబర్ 2011 – జనవరి 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_te_IN() {
    var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
