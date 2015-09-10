/*
 * testdatefmtrange_uz_Cyrl_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
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

/*
 * testdatefmtrange_uz_Cyrl_UZ.js - test the date range formatter object in German/Germany
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed unuzr the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unuzr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unuzr the License.
 */

function testDateRngFmtCyrl_UZRangeInDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("13:45 – 14:30 11/12/31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("13:45 – 14:30 2011 Дек 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("13:45 – 14:30 2011 Декабр 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeInDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("13:45 – 14:30 2011 Декабр 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("13:45 11/12/30 – 14:30 12/31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("13:45 2011 Дек 30 – 14:30 Дек 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("13:45 2011 Декабр 30 – 14:30 Декабр 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("13:45 2011 Декабр 30 – 14:30 Декабр 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeMultiDayShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("11/12/20 – 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("2011 Дек 20 – 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("2011 Декабр 20 – 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiDayFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("2011 Декабр 20 – 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextMonthShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("11/11/20 – 12/31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("2011 Ноя 20 – Дек 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("2011 Ноябр 20 – Декабр 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextMonthFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("2011 Ноябр 20 – Декабр 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeNextYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("11/11/20 – 12/01/31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("2011 Ноя 20 – 2012 Янв 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("2011 Ноябр 20 – 2012 Январ 31", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeNextYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("2011 Ноябр 20 – 2012 Январ 31", fmt.format(start, end));
}

function testDateRngFmtCyrl_UZRangeMultiYearShort() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "short"});
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
    assertEquals("11/11 – 14/01", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "medium"});
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
    assertEquals("2011 Ноя – 2014 Янв", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearLong() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "long"});
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
    assertEquals("2011 Ноябр – 2014 Январ", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZRangeMultiYearFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
    assertEquals("2011 Ноябр – 2014 Январ", fmt.format(start, end));
}
function testDateRngFmtCyrl_UZManyYearsFull() {
    var fmt = new ilib.DateRngFmt({locale: "uz-Cyrl-UZ", length: "full"});
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
