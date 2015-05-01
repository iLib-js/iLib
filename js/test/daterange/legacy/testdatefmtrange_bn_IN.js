/*
 * testdatefmtrange_bn_in.js - test the date range formatter object in Bengali/india
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

function testDateRngFmtinRangeinDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("১:৪৫ অপরাহ্ণ – ২:৩০ অপরাহ্ণ ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("১:৪৫ অপরাহ্ণ – ২:৩০ অপরাহ্ণ ৩১ ১২, ১১", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("১:৪৫ অপরাহ্ণ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("১:৪৫ অপরাহ্ণ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}

function testDateRngFmtinRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("১:৪৫ অপরাহ্ণ ৩০/১২/১১ – ২:৩০ অপরাহ্ণ ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("১:৪৫ অপরাহ্ণ ৩০/১২/১১ – ২:৩০ অপরাহ্ণ ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("১:৪৫ অপরাহ্ণ ৩০ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("১:৪৫ অপরাহ্ণ ৩০ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}

function testDateRngFmtinRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("২০/১২/১১ – ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("২০/১২/১১ – ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("২০ – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("২০ – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}

function testDateRngFmtinRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("২০/১১/১১ – ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("২০/১১/১১ – ৩১/১২/১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}

function testDateRngFmtinRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("২০/১১/১১ – ৩১/০১/১২", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("২০/১১/১১ – ৩১/০১/১২", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("২০ নভেম্বর, ২০১১ – ৩১ জানুয়ারী, ২০১২", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("২০ নভেম্বর, ২০১১ – ৩১ জানুয়ারী, ২০১২", fmt.format(start, end));
}

function testDateRngFmtinRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "short"});
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
    assertEquals("১১/১১ – ০১/১৪", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "medium"});
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
    assertEquals("১১/১১ – ০১/১৪", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "long"});
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
    assertEquals("নভেম্বর ২০১১ – জানুয়ারী ২০১৪", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("নভেম্বর–২০১১ – জানুয়ারী–২০১৪", fmt.format(start, end));
}
function testDateRngFmtinManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "bn-IN", length: "full"});
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
    assertEquals("২০১১ – ২০৬৪", fmt.format(start, end));
}
