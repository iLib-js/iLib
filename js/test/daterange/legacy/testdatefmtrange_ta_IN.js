/*
 * testdatefmtrange_ta_in.js - test the date range formatter object in Tamil/India
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

function testDateRngFmtRangeinDayShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("31-12-11, 1:45 பிற்பகல் – 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeinDayMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("31 டிச., 2011, 1:45 பிற்பகல் – 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeinDayLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("31 டிசம்பர், 2011 ’அன்று’ 1:45 பிற்பகல் – 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeinDayFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("31 டிசம்பர், 2011 ’அன்று’ 1:45 பிற்பகல் – 2:30 பிற்பகல்", fmt.format(start, end));
}

function testDateRngFmtRangeNextDayShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("30-12, 1:45 பிற்பகல் – 31-12-11, 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("30 டிச., 1:45 பிற்பகல் – 31 டிச., 2011, 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("30 டிசம்பர் ’அன்று’ 1:45 பிற்பகல் – 31 டிசம்பர், 2011 ’அன்று’ 2:30 பிற்பகல்", fmt.format(start, end));
}
function testDateRngFmtRangeNextDayFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("30 டிசம்பர் ’அன்று’ 1:45 பிற்பகல் – 31 டிசம்பர், 2011 ’அன்று’ 2:30 பிற்பகல்", fmt.format(start, end));
}

function testDateRngFmtRangeMultiDayShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("20-12-11 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("20 – 31 டிச., 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("20 – 31 டிசம்பர், 2011", fmt.format(start, end));
}
function testDateRngFmtRangeMultiDayFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("20 – 31 டிசம்பர், 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextMonthShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("20-11-11 – 31-12-11", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("20 நவ. – 31 டிச., 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("20 நவம்பர் – 31 டிசம்பர், 2011", fmt.format(start, end));
}
function testDateRngFmtRangeNextMonthFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("20 நவம்பர் – 31 டிசம்பர், 2011", fmt.format(start, end));
}

function testDateRngFmtRangeNextYearShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("20-11-11 – 31-1-12", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("20 நவ., 2011 – 31 ஜன., 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("20 நவம்பர், 2011 – 31 ஜனவரி, 2012", fmt.format(start, end));
}
function testDateRngFmtRangeNextYearFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("20 நவம்பர், 2011 – 31 ஜனவரி, 2012", fmt.format(start, end));
}

function testDateRngFmtRangeMultiYearShort_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "short"});
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
    assertEquals("11-11 – 1-14", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearMedium_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "medium"});
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
    assertEquals("நவ., 2011 – ஜன., 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearLong_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "long"});
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
    assertEquals("நவம்பர், 2011 – ஜனவரி, 2014", fmt.format(start, end));
}
function testDateRngFmtRangeMultiYearFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
    assertEquals("நவம்பர், 2011 – ஜனவரி, 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull_ta_IN() {
    var fmt = new ilib.DateRngFmt({locale: "ta-IN", length: "full"});
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
