/*
 * phonenum_JP.js - Test parsing phone numbers in JP
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

function testParseJPFull(){
	var parsed = new ilib.PhoneNumber("03-5841-2047", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "58412047"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPLocalNumber(){
	var parsed = new ilib.PhoneNumber("345-6789", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPFullLongAreaCode(){
	var parsed = new ilib.PhoneNumber("0152-41-0670", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "152",
		subscriberNumber: "410670"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(075) 1234-5678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "75",
		subscriberNumber: "12345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$075@1234&5678-", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "75",
		subscriberNumber: "12345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPNoAreaCode(){
	var parsed = new ilib.PhoneNumber("82345678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPInvalidLocalNumber(){
	// local number is too long
	var parsed = new ilib.PhoneNumber("23456788889123", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23456788889123",
		invalid: true
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPServiceCode(){
	var parsed = new ilib.PhoneNumber("0130-12345678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "130",
		subscriberNumber: "12345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

/*
no vsc in Japan? I can't find example of vsc.
function testParseJPWithVSC(){
	var parsed = new ilib.PhoneNumber("14102012345678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "141",
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
*/

function testParseJPMobileNumber(){
	var parsed = new ilib.PhoneNumber("070-53412345", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "70",
		subscriberNumber: "53412345"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("01012028675309", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		iddPrefix: "10",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("13712345678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "13712345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("110", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "110"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("171171", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "171",
		subscriberNumber: "171"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPPartial2(){
	var parsed = new ilib.PhoneNumber("04", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "4"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial3(){
	var parsed = new ilib.PhoneNumber("047", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "47"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial4(){
	var parsed = new ilib.PhoneNumber("0475", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "475"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial5(){
	var parsed = new ilib.PhoneNumber("04751", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "475",
			subscriberNumber: "1"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial6(){
	var parsed = new ilib.PhoneNumber("047512", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "475",
		subscriberNumber: "12"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial7(){
	var parsed = new ilib.PhoneNumber("0475123", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "475",
		subscriberNumber: "123"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial8(){
	var parsed = new ilib.PhoneNumber("04751234", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "475",
		subscriberNumber: "1234"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial9(){
	var parsed = new ilib.PhoneNumber("047512345", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "475",
			subscriberNumber: "12345"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};
function testParseJPPartial10(){
	var parsed = new ilib.PhoneNumber("0475123456", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "475",
			subscriberNumber: "123456"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPPartial11(){
	var parsed = new ilib.PhoneNumber("04751234567", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "475",
			subscriberNumber: "1234567"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPPartial12(){
	var parsed = new ilib.PhoneNumber("047512345678", {locale: "ja-JP"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "475",
			subscriberNumber: "12345678"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ja-US"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ja-FR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "ja-MX"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ja-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithKRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "450"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "ja-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseJPWithJPMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "ja-JP", mcc: "440"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "ja-JP"});
	
	assertTrue(parsed.equals(expected));
};