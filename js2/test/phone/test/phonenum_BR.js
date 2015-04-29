/*
 * phonenum_BR.js - Test parsing phone numbers in BR
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
function testParseBRFull(){
	var parsed = new PhoneNumber("021 11 5841 2047", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "021",
		areaCode: "11",
		subscriberNumber: "58412047"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRLocalNumber(){
	var parsed = new PhoneNumber("5841-2047", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "58412047"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRFullLongAreaCode(){
	var parsed = new PhoneNumber("012-11-2345-6789", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "012",
		areaCode: "11",
		subscriberNumber: "23456789"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRIgnoreFormatting(){
	var parsed = new PhoneNumber("(021) 11 1234-5678", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "021",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRIgnoreCrap(){
	var parsed = new PhoneNumber("$012@115841&2047-", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "012",
		areaCode: "11",
		subscriberNumber: "58412047"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRNoAreaCode(){
	var parsed = new PhoneNumber("58412047", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "58412047"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRInvalidLocalNumber(){
	// local number is too long
	var parsed = new PhoneNumber("234567888", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "234567888",
		invalid: true
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRServiceCode(){
	var parsed = new PhoneNumber("0300-2345678", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "0300",
		subscriberNumber: "2345678"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRMobileNumber(){
	var parsed = new PhoneNumber("92345-6789", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		mobilePrefix: "9",
		subscriberNumber: "23456789"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRZerosIDDToUS(){
	var parsed = new PhoneNumber("002112028675309", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "0021",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("5123456789", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "5123456789",
		invalid: true
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBREmergencyNumber(){
	var parsed = new PhoneNumber("192", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "192"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBREmergencyNumberPlus(){
	var parsed = new PhoneNumber("199199", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "199",
		subscriberNumber: "199"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRPartial1(){
	var parsed = new PhoneNumber("0", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRPartial2(){
	var parsed = new PhoneNumber("06", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "6"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial3(){
	var parsed = new PhoneNumber("061", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial4(){
	var parsed = new PhoneNumber("0613", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "3"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial5(){
	var parsed = new PhoneNumber("06133", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "33"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial6(){
	var parsed = new PhoneNumber("061332", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "332"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial7(){
	var parsed = new PhoneNumber("0613321", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "3321"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial8(){
	var parsed = new PhoneNumber("06133212", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "33212"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial9(){
	var parsed = new PhoneNumber("061332125", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "332125"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};
function testParseBRPartial10(){
	var parsed = new PhoneNumber("0613321250", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "3321250"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRPartial11(){
	var parsed = new PhoneNumber("06133212504", {locale: "pt-BR"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "61",
		subscriberNumber: "33212504"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithUSMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "pt-US"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithFRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "pt-FR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithMXMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "pt-MX"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithDEMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "pt-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithKRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "450"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "pt-KR"});
	
	assertTrue(parsed.equals(expected));
};

function testParseBRWithBRMCC(){
	var parsed = new PhoneNumber("23456789", {locale: "pt-BR", mcc: "724"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "23456789"
	}, {locale: "pt-BR"});
	
	assertTrue(parsed.equals(expected));
};