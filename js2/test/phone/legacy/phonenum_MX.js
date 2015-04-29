/*
 * phonenum_MX.js - Test parsing phone numbers in MX
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

function testParseMXFull(){
	var parsed = new ilib.PhoneNumber("6241234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXLocal(){
	var parsed = new ilib.PhoneNumber("62412345", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "62412345"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("624-123-4567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("62@4$1%2^3&45!67", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXMobileNumber(){
	var parsed = new ilib.PhoneNumber("019981234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "01",
		areaCode: "998",
		subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXServiceNumber(){
	var parsed = new ilib.PhoneNumber("026241234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "02",
		subscriberNumber: "6241234567",
		invalid: true
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXServiceNumber2(){
	var parsed = new ilib.PhoneNumber("8006241234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "800",
		subscriberNumber: "6241234567",
		invalid: true
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXShortAreaCode(){
	var parsed = new ilib.PhoneNumber("5512345678", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "55",
		subscriberNumber: "12345678"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXPartial1(){
	var parsed = new ilib.PhoneNumber("5", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "5"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXPartial2(){
	var parsed = new ilib.PhoneNumber("55", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			subscriberNumber: "55"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial3(){
	var parsed = new ilib.PhoneNumber("551", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "551"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial4(){
	var parsed = new ilib.PhoneNumber("5512", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "5512"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial5(){
	var parsed = new ilib.PhoneNumber("55123", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "55123"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial6(){
	var parsed = new ilib.PhoneNumber("551234", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "551234"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial7(){
	var parsed = new ilib.PhoneNumber("5512345", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "5512345"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial8(){
	var parsed = new ilib.PhoneNumber("55123456", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "55123456"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial9(){
	var parsed = new ilib.PhoneNumber("551234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			areaCode: "55",
			subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartial10(){
	var parsed = new ilib.PhoneNumber("5512345678", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			areaCode: "55",
			subscriberNumber: "12345678"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXPartialTrunk0(){
	var parsed = new ilib.PhoneNumber("0", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			subscriberNumber: "0"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk1(){
	var parsed = new ilib.PhoneNumber("01", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk2(){
	var parsed = new ilib.PhoneNumber("015", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			subscriberNumber: "5"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk3(){
	var parsed = new ilib.PhoneNumber("0155", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk4(){
	var parsed = new ilib.PhoneNumber("01551", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk5(){
	var parsed = new ilib.PhoneNumber("015512", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk6(){
	var parsed = new ilib.PhoneNumber("0155123", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk7(){
	var parsed = new ilib.PhoneNumber("01551234", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk8(){
	var parsed = new ilib.PhoneNumber("015512345", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk9(){
	var parsed = new ilib.PhoneNumber("0155123456", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk10(){
	var parsed = new ilib.PhoneNumber("01551234567", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseMXPartialTrunk11(){
	var parsed = new ilib.PhoneNumber("015512345678", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "es-MX", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "es-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "es-MX", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "es-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "es-MX", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMXWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "es-MX", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "es-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

// for bug NOV-119557
function testParseMXTollFree(){
	var parsed = new ilib.PhoneNumber("01 800 022 0606", {locale: "es-MX"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "01",
		serviceCode: "800",
		subscriberNumber: "0220606"
	}, {locale: "es-MX"});
	
	assertTrue(parsed.equals(expected));
	
};
