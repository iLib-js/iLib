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

var PhoneNumber = require("./../lib/PhoneNumber.js");
function testParseLUFull() {
	var parsed = new PhoneNumber("26 26 45 45", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUIgnoreFormatting() {
	var parsed = new PhoneNumber("26.26.45.45", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUIgnoreCrap() {
	var parsed = new PhoneNumber("@23!60$12^34(", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "23601234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUPlusIDDToUS() {
	var parsed = new PhoneNumber("+12028675309", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUZerosIDDToUS() {
	var parsed = new PhoneNumber("0012028675309", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUPlusIDDToGB() {
	var parsed = new PhoneNumber("+442012345678", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUZerosIDDToGB() {
	var parsed = new PhoneNumber("00442012345678", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUEmergencyNumber() {
	var parsed = new PhoneNumber("112", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "112"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUEmergencyNumberPlus() {
	var parsed = new PhoneNumber("112115", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUMobileNumber() {
	var parsed = new PhoneNumber("621123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		mobilePrefix: "621",
		subscriberNumber: "123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUDialAround() {
	var parsed = new PhoneNumber("15232 360 12 34", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "15232",
		subscriberNumber: "3601234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUService() {
	var parsed = new PhoneNumber("80069123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "80069",
		subscriberNumber: "123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUPremium() {
	var parsed = new PhoneNumber("908-8765-4321", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "908",
		subscriberNumber: "87654321"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUPartial1() {
	var parsed = new PhoneNumber("2", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLUPartial2() {
	var parsed = new PhoneNumber("26", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "26"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial3() {
	var parsed = new PhoneNumber("266", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "266"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial4() {
	var parsed = new PhoneNumber("2662", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2662"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial5() {
	var parsed = new PhoneNumber("26621", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "26621"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial6() {
	var parsed = new PhoneNumber("266212", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "266212"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial7() {
	var parsed = new PhoneNumber("2662123", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2662123"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial8() {
	var parsed = new PhoneNumber("26621234", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "26621234"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial9() {
	var parsed = new PhoneNumber("266212345", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "266212345"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseLUPartial10() {
	var parsed = new PhoneNumber("2662123456", {locale: "de-LU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2662123456"
	}, {locale: "de-LU"});
	
	assertTrue(parsed.equals(expected));
	
};