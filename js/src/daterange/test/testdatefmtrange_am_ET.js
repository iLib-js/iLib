/*
 * testdatefmtrange_am_ET.js - test the date range formatter object Amharic/Ethiopia
 * 
 * Copyright © 2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDateRngFmtAMRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት – 3:30 ከሰዓት 30/12/2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}

function testDateRngFmtAMRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29/12/2011 – 3:30 ከሰዓት 30/12/2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29 ነሐሴ – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29 ነሐሴ – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29 ነሐሴ – 3:30 ከሰዓት 30 ነሐሴ 2011", fmt.format(start, end));
}

function testDateRngFmtAMRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/2011 – 30/12/2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20–30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20–30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20–30 ነሐሴ 2011", fmt.format(start, end));
}

function testDateRngFmtAMRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/2011 – 30/12/2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/2011 – 30/12/2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ሐምሌ – 30 ነሐሴ 2011", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ሐምሌ – 30 ነሐሴ 2011", fmt.format(start, end));
}

function testDateRngFmtAMRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2012,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/2011 – 30/01/2012", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2012,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ሐምሌ 2011 – 30 መስከ 2012", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2012,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ሐምሌ 2011 – 30 መስከ 2012", fmt.format(start, end));
}
function testDateRngFmtAMRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2012,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 ሐምሌ 2011 – 30 መስከረም 2012", fmt.format(start, end));
}

function testDateRngFmtAMRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2014,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/2011 – 01/2014", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2014,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ሐምሌ 2011 – መስከ 2014", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2014,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ሐምሌ 2011 – መስከ 2014", fmt.format(start, end));
}
function testDateRngFmtAMRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2014,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ሐምሌ 2011 – ሐምሌ 2014", fmt.format(start, end));
}
function testDateRngFmtAMManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.EthiopicDate({
		year: 2064,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011–2064", fmt.format(start, end));
}
