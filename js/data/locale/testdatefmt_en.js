/*
 * testdatefmt_en.js - test the date formatter object in English
 * 
 * Copyright © 2012-2015, JEDLSoft
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
var DateFactory = require("./../lib/DateFactory.js");

function testDateFmtConstructorEmpty_en_JP() {
	var fmt = new DateFmt({locale:"en-JP"});
	
	assertNotNull(fmt);
}

// en-JP, en-KR, en-US, en-MX, en-HN, en-BR, en-CL, en-PE, en-AR, en-EC, en-CO, en-PA

//en-JP
function testDateFmtSimpleShort_en_JP() {
	var fmt = new DateFmt({locale:"en-JP", length: "short"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtSimpleMedium_en_JP() {
	var fmt = new DateFmt({locale:"en-JP", length: "medium"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_en_JP() {
	var fmt = new DateFmt({locale:"en-JP",length: "long"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtSimpleFull_en_JP() {
	var fmt = new DateFmt({locale:"en-JP",length: "full"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtTypeTime_en_JP() {
	var fmt = new DateFmt({locale: "en-JP", type: "time"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtShortTypeDayTime_en_JP() {
	var fmt = new DateFmt({locale: "en-JP", length:"short", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11, 1:45 PM", fmt.format(date));
}

function testDateFmtMediumTypeDayTime_en_JP() {
	var fmt = new DateFmt({locale: "en-JP", length:"medium", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011, 1:45 PM", fmt.format(date));
}

function testDateFmtLongTypeDayTime_en_JP() {
	var fmt = new DateFmt({locale: "en-JP", length:"long", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

function testDateFmtFullTypeDayTime_en_JP() {
	var fmt = new DateFmt({locale: "en-JP", length:"full", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}


//en-KR

function testDateFmtSimpleShort_en_KR() {
	var fmt = new DateFmt({locale:"en-KR", length: "short"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtSimpleMedium_en_KR() {
	var fmt = new DateFmt({locale:"en-KR", length: "medium"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_en_KR() {
	var fmt = new DateFmt({locale:"en-KR",length: "long"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtSimpleFull_en_KR() {
	var fmt = new DateFmt({locale:"en-KR",length: "full"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtTypeTime_en_KR() {
	var fmt = new DateFmt({locale: "en-KR", type: "time"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtShortTypeDayTime_en_KR() {
	var fmt = new DateFmt({locale: "en-KR", length:"short", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11, 1:45 PM", fmt.format(date));
}

function testDateFmtMediumTypeDayTime_en_KR() {
	var fmt = new DateFmt({locale: "en-KR", length:"medium", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011, 1:45 PM", fmt.format(date));
}

function testDateFmtLongTypeDayTime_en_KR() {
	var fmt = new DateFmt({locale: "en-KR", length:"long", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

function testDateFmtFullTypeDayTime_en_KR() {
	var fmt = new DateFmt({locale: "en-KR", length:"full", type: "datetime"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}


//en-TW

function testDateFmtSimpleShort_en_TW() {
	var fmt = new DateFmt({locale:"en-TW", length: "short"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
	});
	assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtSimpleMedium_en_TW() {
	var fmt = new DateFmt({locale:"en-TW", length: "medium"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_en_TW() {
	var fmt = new DateFmt({locale:"en-TW",length: "long"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtSimpleFull_en_TW() {
	var fmt = new DateFmt({locale:"en-TW",length: "full"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtTypeTime_en_TW() {
	var fmt = new DateFmt({locale: "en-TW", type: "time", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone:'local'
	});
	assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtShortTypeDayTime_en_TW() {
	var fmt = new DateFmt({locale: "en-TW", length:"short", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone:'local'
	});
	assertEquals("9/29/11, 1:45 PM", fmt.format(date));
}

function testDateFmtMediumTypeDayTime_en_TW() {
	var fmt = new DateFmt({locale: "en-TW", length:"medium", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone:'local'
	});
	assertEquals("Sep 29, 2011, 1:45 PM", fmt.format(date));
}

function testDateFmtLongTypeDayTime_en_TW() {
	var fmt = new DateFmt({locale: "en-TW", length:"long", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone:'local'
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

function testDateFmtFullTypeDayTime_en_TW() {
	var fmt = new DateFmt({locale: "en-TW", length:"full", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

//en-PH
function testDateFmtSimpleShort_en_PH() {
	var fmt = new DateFmt({locale:"en-PH", length: "short"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11", fmt.format(date));
}

function testDateFmtSimpleMedium_en_PH() {
	var fmt = new DateFmt({locale:"en-PH", length: "medium"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_en_PH() {
	var fmt = new DateFmt({locale:"en-PH",length: "long"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtSimpleFull_en_PH() {
	var fmt = new DateFmt({locale:"en-PH",length: "full"});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011", fmt.format(date));
}


function testDateFmtTypeTime_en_PH() {
	var fmt = new DateFmt({locale: "en-PH", type: "time", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtShortTypeDayTime_en_PH() {
	var fmt = new DateFmt({locale: "en-PH", length:"short", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("9/29/11, 1:45 PM", fmt.format(date));
}

function testDateFmtMediumTypeDayTime_en_PH() {
	var fmt = new DateFmt({locale: "en-PH", length:"medium", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("Sep 29, 2011, 1:45 PM", fmt.format(date));
}

function testDateFmtLongTypeDayTime_en_PH() {
	var fmt = new DateFmt({locale: "en-PH", length:"long", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}

function testDateFmtFullTypeDayTime_en_PH() {
	var fmt = new DateFmt({locale: "en-PH", length:"full", type: "datetime", timezone:'local'});
	assertNotNull(fmt);
	
	var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
	assertEquals("September 29, 2011 at 1:45 PM", fmt.format(date));
}