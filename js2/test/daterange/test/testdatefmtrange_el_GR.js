/*
 * testdatefmtGR_GR_GR.js - test the date GR formatter object GR GRench/GRance
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tels file except GR compliance with the License.
 * You may obtaGR a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to GR writGRg, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KGRD, either express or implied.
 *
 * See the License for the specific language governGRg permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtGRInDayShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. - 2:00 μ.μ. 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRInDayMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. - 2:00 μ.μ. 31 12 11", fmt.format(start, end));
}
function testDateRngFmtGRInDayLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. - 2:00 μ.μ. 31 Δεκ 2011", fmt.format(start, end));
}
function testDateRngFmtGRInDayFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. - 2:00 μ.μ. 31 Δεκεμβρίου 2011", fmt.format(start, end));
}

function testDateRngFmtGRNextDayShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. 30/12/11 - 2:00 μ.μ. 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRNextDayMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. 30/12/11 - 2:00 μ.μ. 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRNextDayLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. 30 - 2:00 μ.μ. 31 Δεκ 2011", fmt.format(start, end));
}
function testDateRngFmtGRNextDayFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:00 μ.μ. 30 - 2:00 μ.μ. 31 Δεκεμβρίου 2011", fmt.format(start, end));
}

function testDateRngFmtGRMultiDayShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/12/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRMultiDayLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 Δεκ 2011", fmt.format(start, end));
}
function testDateRngFmtGRMultiDayFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 - 31 Δεκεμβρίου 2011", fmt.format(start, end));
}

function testDateRngFmtGRNextMonthShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/12/11", fmt.format(start, end));
}
function testDateRngFmtGRNextMonthLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Νοε - 31 Δεκ 2011", fmt.format(start, end));
}
function testDateRngFmtGRNextMonthFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Νοεμβρίου - 31 Δεκεμβρίου 2011", fmt.format(start, end));
}

function testDateRngFmtGRNextYearShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/01/12", fmt.format(start, end));
}
function testDateRngFmtGRNextYearMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 - 31/01/12", fmt.format(start, end));
}
function testDateRngFmtGRNextYearLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Νοε 2011 - 31 Ιαν 2012", fmt.format(start, end));
}
function testDateRngFmtGRNextYearFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Νοεμβρίου 2011 - 31 Ιανουαρίου 2012", fmt.format(start, end));
}

function testDateRngFmtGRMultiYearShort() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 - 01/14", fmt.format(start, end));
}
function testDateRngFmtGRMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 - 01/14", fmt.format(start, end));
}
function testDateRngFmtGRMultiYearLong() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("Νοε 2011 - Ιαν 2014", fmt.format(start, end));
}
function testDateRngFmtGRMultiYearFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("Νοεμβρίου 2011 - Ιανουαρίου 2014", fmt.format(start, end));
}
function testDateRngFmtGRManyYearsFull() {
    var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		mGRute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		mGRute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 - 2064", fmt.format(start, end));
}
