/*
 * phonenum_GB.js - Test parsing phone numbers in GB
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
function testParseGBFull(){
	var parsed = new PhoneNumber("020 1234 5678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBLocalNumber(){
	var parsed = new PhoneNumber("3456789", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBBogusPrefix(){
	var parsed = new PhoneNumber("06 69812345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "669812345",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseGBFullLongAreaCode(){
	var parsed = new PhoneNumber("01946712345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "19467",
		subscriberNumber: "12345"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBFullSpecialAreaCode(){
	var parsed = new PhoneNumber("01946123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1946",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBIgnoreFormatting(){
	var parsed = new PhoneNumber("(020) 1234-5678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBFullLongAreaCodeIgnoreFormatting(){
	var parsed = new PhoneNumber("(01999)123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBIgnoreCrap(){
	var parsed = new PhoneNumber("$020@1234&5678-", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBNoAreaCode(){
	var parsed = new PhoneNumber("82345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBInvalidLocalNumber(){
	var parsed = new PhoneNumber("12345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "12345678",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBServiceCode(){
	var parsed = new PhoneNumber("034012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		serviceCode: "340",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithVSC(){
	var parsed = new PhoneNumber("14102012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		vsc: "141",
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPersonalNumbering(){
	var parsed = new PhoneNumber("07012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		serviceCode: "70",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBMobileNumber(){
	var parsed = new PhoneNumber("07534123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "7534",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBZerosIDDToUS(){
	var parsed = new PhoneNumber("0012028675309", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("1999123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "1999123456",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBEmergencyNumber(){
	var parsed = new PhoneNumber("116", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "116"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBEmergencyNumberPlus(){
	var parsed = new PhoneNumber("116116", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPartial1(){
	var parsed = new PhoneNumber("0", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPartial2(){
	var parsed = new PhoneNumber("01", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial3(){
	var parsed = new PhoneNumber("019", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "19"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial4(){
	var parsed = new PhoneNumber("0199", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "199"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial5(){
	var parsed = new PhoneNumber("01999", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial6(){
	var parsed = new PhoneNumber("019991", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "1"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial7(){
	var parsed = new PhoneNumber("0199912", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "12"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial8(){
	var parsed = new PhoneNumber("01999123", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial9(){
	var parsed = new PhoneNumber("019991234", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "1234"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial10(){
	var parsed = new PhoneNumber("0199912345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "12345"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial11(){
	var parsed = new PhoneNumber("01999123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithUSMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithFRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithMXMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithDEMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithGBMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
