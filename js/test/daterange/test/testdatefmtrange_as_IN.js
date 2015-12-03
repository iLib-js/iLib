/*
 * testdatefmtrange_as_in.js - test the date range formatter object in Assamese/india
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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY Kind, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtasINRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ – ২.৩০. অপৰাহ্ণ ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ ৩০ – ২.৩০. অপৰাহ্ণ ৩১-১২-২০১১ ", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ ৩০ – ২.৩০. অপৰাহ্ণ ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ ৩০ – ২.৩০. অপৰাহ্ণ ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("১.৪৫. অপৰাহ্ণ ৩০ – ২.৩০. অপৰাহ্ণ ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}

function testDateRngFmtasINRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০ – ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০ – ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০ – ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০ – ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০-১১ – ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০-১১ – ৩১-১২-২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০ নৱেম্বৰ – ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০ নৱেম্বৰ – ৩১ ডিচেম্বৰ ২০১১", fmt.format(start, end));
}

function testDateRngFmtasINRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("২০-১১-২০১১ – ৩১-১-২০১২", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("২০-১১-২০১১ – ৩১-০১-২০১২", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("২০ নৱেম্বৰ ২০১১ – ৩১ জানুৱাৰী ২০১২", fmt.format(start, end));
}
function testDateRngFmtasINRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০ নৱেম্বৰ ২০১১ – ৩১ জানুৱাৰী ২০১২", fmt.format(start, end));
}

function testDateRngFmtasINRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "short"});
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
    assertEquals("১১-২০১১ – ১-২০১৪", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "medium"});
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
    assertEquals("১১-২০১১ – ০১-২০১৪", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "long"});
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
    assertEquals("নৱেম্বৰ ২০১১ – জানুৱাৰী ২০১৪", fmt.format(start, end));
}
function testDateRngFmtasINRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("নৱেম্বৰ ২০১১ – জানুৱাৰী ২০১৪", fmt.format(start, end));
}
function testDateRngFmtasINManyYearsFull() {
    var fmt = new DateRngFmt({locale: "as-IN", length: "full"});
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
    assertEquals("২০১১ – ২০৬৪", fmt.format(start, end));
}
