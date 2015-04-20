/*
 * testdatefmtrange_Latn_NG.js - test the date range formatter object Ha for Latin script
 * 
 * Copyright © 2012-2013, JEDLSoft
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



function testDateRngFmt_ha_Latn_NG_RangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("13:45 – 14:30 11-12-31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("13:45 – 14:30 31 12, 2011", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("13:45 – 14:30 2011 Dis 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("13:45 – 14:30 31 Disamba, 2011", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("13:45 11–12–30 – 14:30 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("13:45 2011–12–30 – 14:30 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("13:45 2011–Dis–30 – 14:30 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("13:45 2011–Disamba–30 – 14:30 31", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("11–12–20 – 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("2011–12–20 – 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("2011–Dis–20 – 31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("2011–Disamba–20 – 31", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("11–11–20 – 12–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("2011–11–20 – 12–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("2011–Nuw–20 – Dis–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("2011–Nuwamba–20 – Disamba–31", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("11–11–20 – 12–1–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("2011–11–20 – 2012–01–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("2011–Nuw–20 – 2012–Jan–31", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("2011–Nuwamba–20 – 2012–Janairu–31", fmt.format(start, end));
}

function testDateRngFmt_ha_Latn_NG_RangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "short"});
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
    assertEquals("11–11 – 14–1", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "medium"});
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
    assertEquals("2011–11 – 2014–01", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "long"});
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
    assertEquals("2011–Nuw – 2014–Jan", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_RangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
    assertEquals("2011–Nuwamba – 2014–Janairu", fmt.format(start, end));
}
function testDateRngFmt_ha_Latn_NG_ManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "ha-Latn-NG", length: "full"});
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
