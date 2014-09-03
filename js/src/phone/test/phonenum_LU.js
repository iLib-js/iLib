/*
 * phonenum_LU.js - Test parsing phone numbers in LU
 * 
 * Copyright © 2014, JEDLSoft
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

function testParseFull() {
	var parsed = new ilib.PhoneNumber("26 26 45 45", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting() {
	var parsed = new ilib.PhoneNumber("26.26.45.45", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap() {
	var parsed = new ilib.PhoneNumber("@23!60$12^34(", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23601234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS() {
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS() {
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToGB() {
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToGB() {
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber() {
	var parsed = new ilib.PhoneNumber("112", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseEmergencyNumberPlus() {
	var parsed = new ilib.PhoneNumber("112115", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber() {
	var parsed = new ilib.PhoneNumber("621123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "621",
		subscriberNumber: "123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDialAround() {
	var parsed = new ilib.PhoneNumber("15232 360 12 34", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		cic: "15232",
		subscriberNumber: "3601234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseService() {
	var parsed = new ilib.PhoneNumber("80069123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "80069",
		subscriberNumber: "123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePremium() {
	var parsed = new ilib.PhoneNumber("908-8765-4321", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "908",
		subscriberNumber: "87654321"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1() {
	var parsed = new ilib.PhoneNumber("2", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2() {
	var parsed = new ilib.PhoneNumber("26", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "26"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3() {
	var parsed = new ilib.PhoneNumber("266", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "266"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4() {
	var parsed = new ilib.PhoneNumber("2662", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2662"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5() {
	var parsed = new ilib.PhoneNumber("26621", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "26621"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6() {
	var parsed = new ilib.PhoneNumber("266212", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "266212"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7() {
	var parsed = new ilib.PhoneNumber("2662123", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2662123"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8() {
	var parsed = new ilib.PhoneNumber("26621234", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "26621234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9() {
	var parsed = new ilib.PhoneNumber("266212345", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "266212345"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial10() {
	var parsed = new ilib.PhoneNumber("2662123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2662123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};