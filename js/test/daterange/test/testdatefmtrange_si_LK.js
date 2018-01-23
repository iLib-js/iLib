/*
 * testdatefmtrange_si_LK.js - test the date range formatter object in Sri Lanka
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
function testDateRngFmtLKRangeInDayShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-12-31 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeInDayMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 දෙසැ 31 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeInDayLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 දෙසැම්බර් 31 13.45 – 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeInDayFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 දෙසැම්බර් 31 13.45 – 14.30", fmt.format(start, end));
}

function testDateRngFmtLKRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-12-30 13.45 – 2011-12-31 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 දෙසැ 30 13.45 – 2011 දෙසැ 31 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 දෙසැම්බර් 30 13.45 – 2011 දෙසැම්බර් 31 14.30", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 දෙසැම්බර් 30 13.45 – 2011 දෙසැම්බර් 31 14.30", fmt.format(start, end));
}

function testDateRngFmtLKRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-12-20 – 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 දෙසැ 20 – 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 දෙසැම්බර් 20 – 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 දෙසැම්බර් 20 – 31", fmt.format(start, end));
}

function testDateRngFmtLKRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-11-20 – 2011-12-31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 නොවැ 20 – 2011 දෙසැ 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 නොවැම්බර් 20 – දෙසැම්බර් 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 නොවැම්බර් 20 – දෙසැම්බර් 31", fmt.format(start, end));
}

function testDateRngFmtLKRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-11-20 – 2012-01-31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 නොවැ 20 – 2012 ජන 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 නොවැම්බර් 20 – 2012 ජනවාරි 31", fmt.format(start, end));
}
function testDateRngFmtLKRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 නොවැම්බර් 20 – 2012 ජනවාරි 31", fmt.format(start, end));
}

function testDateRngFmtLKRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    assertEquals("2011-11 – 2014-01", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
    assertEquals("2011 නොවැ – 2014 ජන", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
    assertEquals("2011 නොවැම්බර් – 2014 ජනවාරි", fmt.format(start, end));
}
function testDateRngFmtLKRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
    assertEquals("2011 නොවැම්බර් – 2014 ජනවාරි", fmt.format(start, end));
}
function testDateRngFmtLKManyYearsFull() {
    var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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