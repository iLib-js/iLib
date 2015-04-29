/*
 * phonenum_IE.js - Test parsing phone numbers in IE
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
function testParseIEFull(){
	var parsed = new PhoneNumber("0112345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEFullLongAreaCode(){
	var parsed = new PhoneNumber("040412345", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12345"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEIgnoreFormatting(){
	var parsed = new PhoneNumber("(0404) 12-345", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12345"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEIgnoreCrap(){
	var parsed = new PhoneNumber("0@11$23%45&678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIENoAreaCode(){
	var parsed = new PhoneNumber("82345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIELocalInvalidNumber(){
	var parsed = new PhoneNumber("12345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "12345678",
		invalid: true
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testVSC(){
	var parsed = new PhoneNumber("14282345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		vsc: "142",
		subscriberNumber: "82345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEZerosIDDToUS(){
	var parsed = new PhoneNumber("0012028675309", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIELongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("404123456", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "404123456"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIELocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("82345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEPlusIDDToGB(){
	var parsed = new PhoneNumber("+442012345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEPlusIDDToIE(){
	var parsed = new PhoneNumber("+353 86 822 3689", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEZerosIDDToGB(){
	var parsed = new PhoneNumber("00442012345678", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEService(){
	var parsed = new PhoneNumber("15308765432", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "1530",
		subscriberNumber: "8765432"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEMobileNumber(){
	var parsed = new PhoneNumber("0871234567", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "87",
		subscriberNumber: "1234567"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEPartial1(){
	var parsed = new PhoneNumber("0", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIEPartial2(){
	var parsed = new PhoneNumber("04", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "4"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial3(){
	var parsed = new PhoneNumber("040", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "40"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial4(){
	var parsed = new PhoneNumber("0404", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial5(){
	var parsed = new PhoneNumber("04041", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial6(){
	var parsed = new PhoneNumber("040412", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial7(){
	var parsed = new PhoneNumber("0404123", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "123"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial8(){
	var parsed = new PhoneNumber("04041234", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "1234"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIEPartial9(){
	var parsed = new PhoneNumber("040412345", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-5426
function testParseIEEmergencyNumber(){
	var parsed = new PhoneNumber("999", {locale: "en-IE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "999"
	}, {locale: "en-IE"});
	
	assertTrue(parsed.equals(expected));
	
};
