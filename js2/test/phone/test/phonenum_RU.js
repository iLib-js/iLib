/*
 * phonenum_RU.js - Test parsing phone numbers in RU
 * 
 * Copyright © 2014-2015, JEDLSoft
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
function testParseRUFull(){
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRULocalNumber(){
	var parsed = new PhoneNumber("234-56-78", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUFullLongAreaCode(){
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUIgnoreFormatting(){
	var parsed = new PhoneNumber("8.812.234-56-78", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUIgnoreCrap(){
	var parsed = new PhoneNumber("8$812@234&5678-", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUNoAreaCode(){
	var parsed = new PhoneNumber("2345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUInvalidLocalNumber(){
	// local number is too long
	var parsed = new PhoneNumber("2345678889123", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2345678889123",
		invalid: true
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUServiceCode(){
	var parsed = new PhoneNumber("88042345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		serviceCode: "804",
		subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUMobileNumber(){
	var parsed = new PhoneNumber("89105551234", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		mobilePrefix: "9",
		subscriberNumber: "105551234"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUZerosIDDToUS(){
	var parsed = new PhoneNumber("81012028675309", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "810",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRULongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("3022345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "3022345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUEmergencyNumber(){
	var parsed = new PhoneNumber("112", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "112"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUEmergencyNumberPlus(){
	var parsed = new PhoneNumber("104123", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "104",
		subscriberNumber: "123"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUPartial1(){
	var parsed = new PhoneNumber("8", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUPartial2(){
	var parsed = new PhoneNumber("84", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		subscriberNumber: "4"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial3(){
	var parsed = new PhoneNumber("881", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		subscriberNumber: "81"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial4(){
	var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial5(){
	var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "8",
			areaCode: "812",
			subscriberNumber: "2"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial6(){
	var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "23"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial7(){
	var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "234"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial8(){
	var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "8",
		areaCode: "812",
		subscriberNumber: "2345"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial9(){
	var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "8",
			areaCode: "812",
			subscriberNumber: "23456"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};
function testParseRUPartial10(){
	var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "8",
			areaCode: "812",
			subscriberNumber: "234567"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUPartial11(){
	var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "8",
			areaCode: "812",
			subscriberNumber: "2345678"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUPartial12(){
	var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "8",
			areaCode: "812",
			subscriberNumber: "23456789"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithUSMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ru-US"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithFRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ru-FR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithMXMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ru-MX"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithDEMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ru-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithKRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "450"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "ru-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithJPMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "440"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ru-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithTWMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "466"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ru-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseRUWithRUMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "250"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ru-RU"});
	
	assertTrue(parsed.equals(expected));
};