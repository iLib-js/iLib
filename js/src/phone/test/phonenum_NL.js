/*
 * phonenum_NL.js - Test parsing phone numbers in NL
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

function testParseFull(){
	var parsed = new ilib.PhoneNumber("0201234567", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("020/123-4567", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("0@2!0$12^34(56_7", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNoAreaCode(){
	var parsed = new ilib.PhoneNumber("7654321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("519123456", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "519123456"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("654 321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("112", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("112115", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber(){
	var parsed = new ilib.PhoneNumber("0612345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMobileInternationalNumber(){
	var parsed = new ilib.PhoneNumber("+31 6 12345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseService(){
	var parsed = new ilib.PhoneNumber("1800 12345678", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "12345678"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseBlock(){
	var parsed = new ilib.PhoneNumber("116116", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseInternetDialup(){
	var parsed = new ilib.PhoneNumber("082 87654321", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "82",
		subscriberNumber: "87654321"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2(){
	var parsed = new ilib.PhoneNumber("03", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3(){
	var parsed = new ilib.PhoneNumber("034", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "34"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4(){
	var parsed = new ilib.PhoneNumber("0344", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5(){
	var parsed = new ilib.PhoneNumber("03444", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6(){
	var parsed = new ilib.PhoneNumber("034441", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "41"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7(){
	var parsed = new ilib.PhoneNumber("0344412", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "412"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8(){
	var parsed = new ilib.PhoneNumber("03444123", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "4123"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9(){
	var parsed = new ilib.PhoneNumber("034441234", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "41234"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial10(){
	var parsed = new ilib.PhoneNumber("0344412345", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "412345"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial11(){
	var parsed = new ilib.PhoneNumber("03444123456", {locale: "nl-NL"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4123456"
	}, {locale: "nl-NL"});
	
	assertTrue(parsed.equals(expected));
	
};