/*
 * testdatefmtrange_ur_in.js - test the date range formatter object in Urdu/India
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
function testDateRngFmtRangeinDayShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰/۱۲/۱۱ – ‏۲:۳۰ بعد دوپہر ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰/دسمبر/۲۰۱۱ – ‏۲:۳۰ بعد دوپہر ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰ – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰ – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۲۰/۱۲/۱۱ – ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏۲۰/دسمبر/۲۰۱۱ – ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("‏۲۰ – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۲۰ – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۲۰/۱۱/۱۱ – ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏۲۰/نومبر/۲۰۱۱ – ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("‏۲۰ نومبر – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۲۰ نومبر – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۲۰/۱۱/۱۱ – ۳۱/۱/۱۲", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏۲۰/نومبر/۲۰۱۱ – ۳۱/جنوری/۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("‏۲۰ نومبر ۲۰۱۱ – ۳۱ جنوری ۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۲۰ نومبر ۲۰۱۱ – ۳۱ جنوری ۲۰۱۲", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
    assertEquals("‏۱۱/۱۱ – ۱/۱۴", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
    assertEquals("‏نومبر/۲۰۱۱ – جنوری/۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
    assertEquals("نومبر ۲۰۱۱ – جنوری ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("نومبر ۲۰۱۱ – جنوری ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_ur_IN() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
    assertEquals("‏۲۰۱۱ – ۲۰۶۴", fmt.format(start, end));
}
