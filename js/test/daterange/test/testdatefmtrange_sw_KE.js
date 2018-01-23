/*
 * testdatefmtrange_sw_KE.js - test the date range formatter object in Kenya
 *
 * Copyright © 2017, JEDLSoft
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

var GregorianDate = require("../lib/GregorianDate.js");
var DateRngFmt = require("../lib/DateRngFmt.js");
function testDateRngFmtKERangeInDayShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("31/12/2011, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("31 Des 2011, 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeInDayLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("31 Desemba 2011 saa 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeInDayFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("31 Desemba 2011 saa 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtKERangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("30/12/2011, 13:45 – 31/12/2011, 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("30 Des 2011, 13:45 – 31 Des 2011, 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("30 Desemba 2011 saa 13:45 – 31 Desemba 2011 saa 14:30", fmt.format(start, end));
}
function testDateRngFmtKERangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("30 Desemba 2011 saa 13:45 – 31 Desemba 2011 saa 14:30", fmt.format(start, end));
}

function testDateRngFmtKERangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("20 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("20 – 31 Des 2011", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("20 – 31 Desemba 2011", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("20 – 31 Desemba 2011", fmt.format(start, end));
}

function testDateRngFmtKERangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("20/11 – 31/12/2011", fmt.format(start, end));
}
function testDateRngFmtKERangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("20 Nov – 31 Des 2011", fmt.format(start, end));
}
function testDateRngFmtKERangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("20 Novemba – 31 Desemba 2011", fmt.format(start, end));
}
function testDateRngFmtKERangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("20 Novemba – 31 Desemba 2011", fmt.format(start, end));
}

function testDateRngFmtKERangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("20/11/2011 – 31/01/2012", fmt.format(start, end));
}
function testDateRngFmtKERangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("20 Nov 2011 – 31 Jan 2012", fmt.format(start, end));
}
function testDateRngFmtKERangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("20 Novemba 2011 – 31 Januari 2012", fmt.format(start, end));
}
function testDateRngFmtKERangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("20 Novemba 2011 – 31 Januari 2012", fmt.format(start, end));
}

function testDateRngFmtKERangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
    assertEquals("11/2011 – 01/2014", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
    assertEquals("Nov 2011 – Jan 2014", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
    assertEquals("Novemba 2011 – Januari 2014", fmt.format(start, end));
}
function testDateRngFmtKERangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
    assertEquals("Novemba 2011 – Januari 2014", fmt.format(start, end));
}
function testDateRngFmtKEManyYearsFull() {
    var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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