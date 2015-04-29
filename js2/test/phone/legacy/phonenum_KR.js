/*
 * phonenum_KR.js - Test parsing phone numbers in KR
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

function testParseKRFull(){
	var parsed = new ilib.PhoneNumber("02-1234-5678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRLocalNumber(){
	var parsed = new ilib.PhoneNumber("345-6789", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRFullLongAreaCode(){
	var parsed = new ilib.PhoneNumber("033-9467-2345", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "94672345"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(051) 1234-5678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "51",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$051@1234&5678-", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "51",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRNoAreaCode(){
	var parsed = new ilib.PhoneNumber("82345678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRInvalidLocalNumber(){
	// local number is too long
	var parsed = new ilib.PhoneNumber("2345678888", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2345678888",
		invalid: true
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRServiceCode(){
	var parsed = new ilib.PhoneNumber("030-12345678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "30",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

/*
no vsc in Korea?
function testParseKRWithVSC(){
	var parsed = new ilib.PhoneNumber("14102012345678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "141",
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

no personal numbering in Korea?
function testParseKRPersonalNumbering(){
	var parsed = new ilib.PhoneNumber("07012345678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "70",
		subscriberNumber: "12345678"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
*/

function testParseKRMobileNumber(){
	var parsed = new ilib.PhoneNumber("016-53412345", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "16",
		subscriberNumber: "53412345"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("00212028675309", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "002",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("212345678", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212345678",
		invalid: true
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKREmergencyNumber(){
	var parsed = new ilib.PhoneNumber("112", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKREmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("112112", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112",
		subscriberNumber: "112"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRPartial2(){
	var parsed = new ilib.PhoneNumber("02", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial3(){
	var parsed = new ilib.PhoneNumber("029", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "9"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial4(){
	var parsed = new ilib.PhoneNumber("0299", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "99"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial5(){
	var parsed = new ilib.PhoneNumber("02999", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "999"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial6(){
	var parsed = new ilib.PhoneNumber("029991", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "9991"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial7(){
	var parsed = new ilib.PhoneNumber("0299912", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "99912"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial8(){
	var parsed = new ilib.PhoneNumber("02999123", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "999123"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial9(){
	var parsed = new ilib.PhoneNumber("029991234", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "9991234"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseKRPartial10(){
	var parsed = new ilib.PhoneNumber("0299912345", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "99912345"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ko-KR", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ko-US"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ko-KR", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ko-FR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ko-KR", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ko-MX"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ko-KR", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ko-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithKRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ko-KR", mcc: "450"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithTrunkAccess(){
	var parsed = new ilib.PhoneNumber("00", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "0"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithExtensionCharacter(){
	var parsed = new ilib.PhoneNumber("5551212,1234", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "5551212",
		extension:",1234"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseKRWithExtensionCharacter2(){
	var parsed = new ilib.PhoneNumber("35850950777;12345", {locale: "ko-KR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "35850950777",
		invalid:true,
		extension:";12345"
	}, {locale: "ko-KR"});
	
	assertTrue(parsed.equals(expected));
};