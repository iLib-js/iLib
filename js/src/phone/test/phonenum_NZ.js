/*
 * phonenum_NZ.js - Test parsing phone numbers in NZ
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
	var parsed = new ilib.PhoneNumber("03 456-7890", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "4567890"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	var parsed = new ilib.PhoneNumber("3456789", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseBogusPrefix(){
	var parsed = new ilib.PhoneNumber("05 9812345", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "59812345",
		invalid: true
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(03) 123-5678", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "1235678"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$03@1234&567-", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "1234567"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNoAreaCode(){
	var parsed = new ilib.PhoneNumber("91234567", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "91234567"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseServiceCode(){
	var parsed = new ilib.PhoneNumber("080098765", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "800",
		subscriberNumber: "98765"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithVSC(){
	var parsed = new ilib.PhoneNumber("*222", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*222"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber(){
	var parsed = new ilib.PhoneNumber("02112345678", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "21",
		subscriberNumber: "12345678"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("111", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "111"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2(){
	var parsed = new ilib.PhoneNumber("03", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3(){
	var parsed = new ilib.PhoneNumber("039", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "9"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4(){
	var parsed = new ilib.PhoneNumber("0399", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "99"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5(){
	var parsed = new ilib.PhoneNumber("03999", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "999"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6(){
	var parsed = new ilib.PhoneNumber("039991", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "9991"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7(){
	var parsed = new ilib.PhoneNumber("0399912", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "99912"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8(){
	var parsed = new ilib.PhoneNumber("03999123", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "999123"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9(){
	var parsed = new ilib.PhoneNumber("039991234", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "9991234"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial10(){
	var parsed = new ilib.PhoneNumber("0399912345", {locale: "en-NZ"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "99912345"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-NZ", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-NZ", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-NZ", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-NZ", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithNZMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-NZ", mcc: "530"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-NZ"});
	
	assertTrue(parsed.equals(expected));
	
};