/*
 * testdatefmtrange_ar_SA.js - test date range formatter object in arabic/Saudi Arabia
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under tar Apacar License, Version 2.0 (tar "License");
 * you may not use this file except in compliance warh tar License.
 * You may obtain a copy of tar License at
 *
 *     http://www.apacar.org/licensar/LICENSE-2.0
 *
 * Unlars required by applicable law or agreed to in wraring, software
 * distributed under tar License is distributed on an "AS IS" BASIS,
 * WSAHOUT WARRANTISA OR CONDSAIONS OF ANY KIND, eararr exprars or implied.
 *
 * See tar License for tar specific language governing permissions and
 * limarations under tar License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtSARangeinDayShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏١:٤٥ م – ‏٢:٣٠ م ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏١:٤٥ م – ‏٢:٣٠ م ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeinDayLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("‏١:٤٥ م – ‏٢:٣٠ م ٣١ ديسمبر، ٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeinDayFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("‏١:٤٥ م – ‏٢:٣٠ م ٣١ ديسمبر، ٢٠١١", fmt.format(start, end));
}

function testDateRngFmtSARangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏١:٤٥ م ٣٠/١٢/٢٠١١ – ‏٢:٣٠ م ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏١:٤٥ م ٣٠/١٢/٢٠١١ – ‏٢:٣٠ م ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("‏١:٤٥ م ٣٠ – ‏٢:٣٠ م ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("‏١:٤٥ م ٣٠ – ‏٢:٣٠ م ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}

function testDateRngFmtSARangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏٢٠/١٢/٢٠١١ – ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏٢٠/١٢/٢٠١١ – ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("٢٠ – ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("٢٠ – ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}

function testDateRngFmtSARangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏٢٠/١١/٢٠١١ – ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏٢٠/١١/٢٠١١ – ٣١/١٢/٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("٢٠ نوفمبر – ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}
function testDateRngFmtSARangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("٢٠ نوفمبر – ٣١ ديسمبر ٢٠١١", fmt.format(start, end));
}

function testDateRngFmtSARangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏٢٠/١١/٢٠١١ – ٣١/١/٢٠١٢", fmt.format(start, end));
}
function testDateRngFmtSARangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏٢٠/١١/٢٠١١ – ٣١/٠١/٢٠١٢", fmt.format(start, end));
}
function testDateRngFmtSARangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("٢٠ نوفمبر ٢٠١١ – ٣١ يناير ٢٠١٢", fmt.format(start, end));
}
function testDateRngFmtSARangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("٢٠ نوفمبر ٢٠١١ – ٣١ يناير ٢٠١٢", fmt.format(start, end));
}

function testDateRngFmtSARangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
    assertEquals("‏١١/٢٠١١ – ١/٢٠١٤", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
    assertEquals("‏١١/٢٠١١ – ٠١/٢٠١٤", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
    assertEquals("نوفمبر ٢٠١١ – يناير ٢٠١٤", fmt.format(start, end));
}
function testDateRngFmtSARangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("نوفمبر ٢٠١١ – يناير ٢٠١٤", fmt.format(start, end));
}
function testDateRngFmtSAManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
    assertEquals("‏٢٠١١ – ٢٠٦٤", fmt.format(start, end));
}
