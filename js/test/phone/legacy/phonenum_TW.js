/*
 * phonenum_TW.js - Test parsing phone numbers in TW
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

function testParseTWFull(){
	var parsed = new ilib.PhoneNumber("(039)606-5378", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "6065378"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWLocalNumber(){
	var parsed = new ilib.PhoneNumber("345-6789", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWFullLongAreaCode(){
	var parsed = new ilib.PhoneNumber("0458-345-6789", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "458",
		subscriberNumber: "3456789"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("039-1234-5678", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "12345678"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$039@1234&5678-", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "12345678"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWNoAreaCode(){
	var parsed = new ilib.PhoneNumber("82345678", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWInvalidLocalNumber(){
	// local number is too long
	var parsed = new ilib.PhoneNumber("23456788889123", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23456788889123",
		invalid: true
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWServiceCode(){
	var parsed = new ilib.PhoneNumber("0800-011-765", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "800",
		subscriberNumber: "011765"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWMobileNumber(){
	var parsed = new ilib.PhoneNumber("0988-123-456", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "9",
		subscriberNumber: "88123456"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("00212028675309", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "002",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("3912345678", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3912345678"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("110", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "110"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("117171", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "117",
		subscriberNumber: "171"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWPartial2(){
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial3(){
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial4(){
	var parsed = new ilib.PhoneNumber("0391", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "1"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial5(){
	var parsed = new ilib.PhoneNumber("03912", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "12"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial6(){
	var parsed = new ilib.PhoneNumber("039123", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "123"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial7(){
	var parsed = new ilib.PhoneNumber("0391234", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "1234"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial8(){
	var parsed = new ilib.PhoneNumber("03912345", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "12345"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial9(){
	var parsed = new ilib.PhoneNumber("039123456", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "123456"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};
function testParseTWPartial10(){
	var parsed = new ilib.PhoneNumber("0391234567", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "1234567"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWPartial11(){
	var parsed = new ilib.PhoneNumber("03912345678", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "12345678"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWPartial12(){
	var parsed = new ilib.PhoneNumber("039123456789", {locale: "zh-TW"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "123456789"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "zh-US"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "zh-FR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "zh-MX"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "zh-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithKRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "450"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "zh-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithJPMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "440"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "zh-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseTWWithTWMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "zh-TW", mcc: "466"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "zh-TW"});
	
	assertTrue(parsed.equals(expected));
};