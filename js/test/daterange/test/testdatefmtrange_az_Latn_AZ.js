/*
 * testdatefmtrange_az_Latn_AZ.js - test the date range formatter object in Azerbaijani
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

var GregorianDate = require("../lib/GregorianDate.js");
var DateRngFmt = require("../lib/DateRngFmt.js");
function testDateRngFmtAZRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("31.12.11 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("31 dek 2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("31 dekabr 2011 13:45 – 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("31 dekabr 2011 13:45 – 14:30", fmt.format(start, end));
}

function testDateRngFmtAZRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("30.12.11 13:45 – 31.12.11 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("30 dek 2011 13:45 – 31 dek 2011 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("30 dekabr 2011 13:45 – 31 dekabr 2011 14:30", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("30 dekabr 2011 13:45 – 31 dekabr 2011 14:30", fmt.format(start, end));
}

function testDateRngFmtAZRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("20 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("20 – 31 dek 2011", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("20 – 31 dekabr 2011", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("20 – 31 dekabr 2011", fmt.format(start, end));
}

function testDateRngFmtAZRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("20.11 – 31.12.11", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("20 noy – 31 dek 2011", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("20 noyabr – 31 dekabr 2011", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("20 noyabr – 31 dekabr 2011", fmt.format(start, end));
}

function testDateRngFmtAZRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("20.11.11 – 31.01.12", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("20 noy 2011 – 31 yan 2012", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("20 noyabr 2011 – 31 yanvar 2012", fmt.format(start, end));
}
function testDateRngFmtAZRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("20 noyabr 2011 – 31 yanvar 2012", fmt.format(start, end));
}

function testDateRngFmtAZRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    assertEquals("11.11 – 01.14", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
    assertEquals("noy 2011 – yan 2014", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
    assertEquals("noyabr 2011 – yanvar 2014", fmt.format(start, end));
}
function testDateRngFmtAZRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
    assertEquals("noyabr 2011 – yanvar 2014", fmt.format(start, end));
}
function testDateRngFmtAZManyYearsFull() {
    var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
