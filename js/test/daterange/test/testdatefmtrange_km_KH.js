/*
 * testdatefmtrange_km_KH.js - test the date range formatter object in Cambodian
 *
 * Copyright © 2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtKHRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("31/12/11, 1:45 ល្ងាច – 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("31 ធ្នូ 2011, 1:45 ល្ងាច – 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("31 ធ្នូ 2011 នៅ 1:45 ល្ងាច – 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("31 ធ្នូ 2011 នៅ 1:45 ល្ងាច – 2:30 ល្ងាច", fmt.format(start, end));
}

function testDateRngFmtKHRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("30/12/11, 1:45 ល្ងាច – 31/12/11, 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("30 ធ្នូ 2011, 1:45 ល្ងាច – 31 ធ្នូ 2011, 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("30 ធ្នូ 2011 នៅ 1:45 ល្ងាច – 31 ធ្នូ 2011 នៅ 2:30 ល្ងាច", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("30 ធ្នូ 2011 នៅ 1:45 ល្ងាច – 31 ធ្នូ 2011 នៅ 2:30 ល្ងាច", fmt.format(start, end));
}

function testDateRngFmtKHRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("20 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("20 – 31 ធ្នូ 2011", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("20 – 31 ធ្នូ 2011", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("20 – 31 ធ្នូ 2011", fmt.format(start, end));
}

function testDateRngFmtKHRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("20/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("20 វិច្ឆិកា – 31 ធ្នូ 2011", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("20 វិច្ឆិកា – 31 ធ្នូ 2011", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("20 វិច្ឆិកា – 31 ធ្នូ 2011", fmt.format(start, end));
}

function testDateRngFmtKHRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("20/11/11 – 31/1/12", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("20 វិច្ឆិកា 2011 – 31 មករា 2012", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("20 វិច្ឆិកា 2011 – 31 មករា 2012", fmt.format(start, end));
}
function testDateRngFmtKHRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("20 វិច្ឆិកា 2011 – 31 មករា 2012", fmt.format(start, end));
}

function testDateRngFmtKHRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    assertEquals("11/11 – 1/14", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
    assertEquals("វិច្ឆិកា 2011 – មករា 2014", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
    assertEquals("វិច្ឆិកា 2011 – មករា 2014", fmt.format(start, end));
}
function testDateRngFmtKHRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
    assertEquals("វិច្ឆិកា 2011 – មករា 2014", fmt.format(start, end));
}
function testDateRngFmtKHManyYearsFull() {
    var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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