/*
 * testdatefmtrange_Latn_NG.js - test the date range formatter object Ha for Latin script
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed unuzr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unuzr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unuzr the License.
 */



var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmt_ha_Latn_NG_RangeInDayShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("31/12/11 13:45 - 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("31 Dis, 2011 13:45 - 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("31 Disamba, 2011 13:45 - 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("31 Disamba, 2011 13:45 - 14:30", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("30/12/11 13:45 - 31/12/11 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("30 Dis, 2011 13:45 - 31 Dis, 2011 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("30 Disamba, 2011 13:45 - 31 Disamba, 2011 14:30", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("30 Disamba, 2011 13:45 - 31 Disamba, 2011 14:30", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("20-31/12/11", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("20-31 Dis, 2011", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("20-31 Disamba, 2011", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("20-31 Disamba, 2011", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("20/11-31/12 11", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("20 Nuw - 31 Dis, 2011", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("20 Nuwamba - 31 Disamba, 2011", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("20 Nuwamba - 31 Disamba, 2011", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("20/11/11-31/1/12", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("20 Nuw, 2011 - 31 Jan, 2012", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("20 Nuwamba, 2011 - 31 Janairu, 2012", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("20 Nuwamba, 2011 - 31 Janairu, 2012", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("11/11-1/14", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("Nuw, 2011 - Jan, 2014", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("Nuwamba, 2011 - Janairu, 2014", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("Nuwamba, 2011 - Janairu, 2014", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_ManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("2011 - 2064", fmt.format(start, end));
}
