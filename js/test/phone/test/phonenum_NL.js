/*
 * phonenum_NL.js - Test parsing phone numbers in NL
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
function testParseNLFull(){
	var parsed = new PhoneNumber("0201234567", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLIgnoreFormatting(){
	var parsed = new PhoneNumber("020/123-4567", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLIgnoreCrap(){
	var parsed = new PhoneNumber("0@2!0$12^34(56_7", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLNoAreaCode(){
	var parsed = new PhoneNumber("7654321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLZerosIDDToUS(){
	var parsed = new PhoneNumber("0012028675309", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("519123456", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "519123456"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLLocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("654 321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLPlusIDDToGB(){
	var parsed = new PhoneNumber("+442012345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLZerosIDDToGB(){
	var parsed = new PhoneNumber("00442012345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLEmergencyNumber(){
	var parsed = new PhoneNumber("112", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLEmergencyNumberPlus(){
	var parsed = new PhoneNumber("112115", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLMobileNumber(){
	var parsed = new PhoneNumber("0612345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLMobileInternationalNumber(){
	var parsed = new PhoneNumber("+31 6 12345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLService(){
	var parsed = new PhoneNumber("1800 12345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLBlock(){
	var parsed = new PhoneNumber("116116", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLInternetDialup(){
	var parsed = new PhoneNumber("082 87654321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		serviceCode: "82",
		subscriberNumber: "87654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLPartial1(){
	var parsed = new PhoneNumber("0", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNLPartial2(){
	var parsed = new PhoneNumber("03", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial3(){
	var parsed = new PhoneNumber("034", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "34"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial4(){
	var parsed = new PhoneNumber("0344", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "344"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial5(){
	var parsed = new PhoneNumber("03444", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial6(){
	var parsed = new PhoneNumber("034441", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "41"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial7(){
	var parsed = new PhoneNumber("0344412", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "412"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial8(){
	var parsed = new PhoneNumber("03444123", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "4123"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial9(){
	var parsed = new PhoneNumber("034441234", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "41234"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial10(){
	var parsed = new PhoneNumber("0344412345", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "412345"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseNLPartial11(){
	var parsed = new PhoneNumber("03444123456", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4123456"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};