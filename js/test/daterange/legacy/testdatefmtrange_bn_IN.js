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

function testDateRngFmtRangeinDayShort_bn_IN() {
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
function testDateRngFmtRangeinDayMedium_bn_IN() {
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
    assertEquals("১:৪৫ অপরাহ্ণ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_bn_IN() {
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
function testDateRngFmtRangeinDayFull_bn_IN() {
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

function testDateRngFmtRangeNextDayShort_bn_IN() {
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
function testDateRngFmtRangeNextDayMedium_bn_IN() {
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
    assertEquals("১:৪৫ অপরাহ্ণ ৩০ – ২:৩০ অপরাহ্ণ ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_bn_IN() {
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
function testDateRngFmtRangeNextDayFull_bn_IN() {
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

function testDateRngFmtRangeMultiDayShort_bn_IN() {
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
function testDateRngFmtRangeMultiDayMedium_bn_IN() {
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
    assertEquals("২০ – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_bn_IN() {
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
function testDateRngFmtRangeMultiDayFull_bn_IN() {
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

function testDateRngFmtRangeNextMonthShort_bn_IN() {
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
function testDateRngFmtRangeNextMonthMedium_bn_IN() {
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
    assertEquals("২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_bn_IN() {
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
function testDateRngFmtRangeNextMonthFull_bn_IN() {
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

function testDateRngFmtRangeNextYearShort_bn_IN() {
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
    assertEquals("২০/১১/১১ – ৩১/১/১২", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_bn_IN() {
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
    assertEquals("২০ নভেম্বর, ২০১১ – ৩১ জানুয়ারী, ২০১২", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_bn_IN() {
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
function testDateRngFmtRangeNextYearFull_bn_IN() {
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

function testDateRngFmtRangeMultiYearShort_bn_IN() {
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
    assertEquals("১১/১১ – ১/১৪", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_bn_IN() {
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
    assertEquals("নভেম্বর ২০১১ – জানুয়ারী ২০১৪", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_bn_IN() {
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
function testDateRngFmtRangeMultiYearFull_bn_IN() {
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
    assertEquals("নভেম্বর ২০১১ – জানুয়ারী ২০১৪", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_bn_IN() {
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
