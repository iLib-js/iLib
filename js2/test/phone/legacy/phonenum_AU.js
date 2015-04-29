/*
 * phonenum_AU.js - Test parsing phone numbers in AU
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

function testParseAUFull(){
	var parsed = new ilib.PhoneNumber("(08) 1234 5678", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "8",
		subscriberNumber: "12345678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAULocalNumber(){
	var parsed = new ilib.PhoneNumber("23456789", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23456789"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUBogusPrefix(){
	var parsed = new ilib.PhoneNumber("09 69812345", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "969812345",
		invalid: true
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(02) 1234-5678", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$02@1234&5678-", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUNoAreaCode(){
	var parsed = new ilib.PhoneNumber("91234567", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "91234567"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUServiceCode(){
	var parsed = new ilib.PhoneNumber("0198 123 456", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "198",
		subscriberNumber: "123456"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithVSC(){
	var parsed = new ilib.PhoneNumber("1831 02 2345 6789", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "1831",
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23456789"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUInternationalCarrierSelection(){
	var parsed = new ilib.PhoneNumber("0016 61 2 5678 1234", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "0016",
		countryCode: "61",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUCarrierSelectionInternational(){
	var parsed = new ilib.PhoneNumber("1441 0011 61 2 5678 1234", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		cic: "1441",
		iddPrefix: "0011",
		countryCode: "61",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUCarrierSelectionDomestic(){
	var parsed = new ilib.PhoneNumber("1441 2 5678 1234", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		cic: "1441",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUMobileNumber(){
	var parsed = new ilib.PhoneNumber("0412 345 678", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "4123",
		subscriberNumber: "45678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("001112028675309", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "0011",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUInternationalDialAround(){
	var parsed = new ilib.PhoneNumber("1456 0011 1 202 867 5309", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		cic: "1456",
		iddPrefix: "0011",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("000", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "000"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUEmergencyGSM(){
	var parsed = new ilib.PhoneNumber("112", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUPartial2(){
	var parsed = new ilib.PhoneNumber("02", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial3(){
	var parsed = new ilib.PhoneNumber("02 2", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "2"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial4(){
	var parsed = new ilib.PhoneNumber("02 23", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial5(){
	var parsed = new ilib.PhoneNumber("02 234", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "234"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial6(){
	var parsed = new ilib.PhoneNumber("02 2345", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "2345"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial7(){
	var parsed = new ilib.PhoneNumber("02 2345 6", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23456"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial8(){
	var parsed = new ilib.PhoneNumber("02 2345 67", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "234567"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial9(){
	var parsed = new ilib.PhoneNumber("02 2345 678", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "2345678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial10(){
	var parsed = new ilib.PhoneNumber("02 2345 6789", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "23456789"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseAUPartial11(){
	var parsed = new ilib.PhoneNumber("02 2345 6789 0", {locale: "en-AU"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "234567890",
			invalid: true
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithUSMCC(){
	var parsed = new ilib.PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "0212345678",
		invalid: true
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithFRMCC(){
	var parsed = new ilib.PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithMXMCC(){
	var parsed = new ilib.PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "02",
		subscriberNumber: "12345678"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithDEMCC(){
	var parsed = new ilib.PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "345678"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseAUWithAUMCC(){
	var parsed = new ilib.PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "505"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en-AU"});
	
	assertTrue(parsed.equals(expected));
	
};
