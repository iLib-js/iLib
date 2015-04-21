/*
 * phonenum_ES.js - Test parsing phone numbers in ES
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
function testParseESFull(){
	var parsed = new PhoneNumber("925123456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESIgnoreFormatting(){
	var parsed = new PhoneNumber("(925) 123 456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESIgnoreCrap(){
	var parsed = new PhoneNumber("9@251$23%45&6", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESZerosIDDToUS(){
	var parsed = new PhoneNumber("0012028675309", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESPlusIDDToGB(){
	var parsed = new PhoneNumber("+442012345678", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESZerosIDDToGB(){
	var parsed = new PhoneNumber("00442012345678", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new PhoneNumber("112", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumberPlus(){
	var parsed = new PhoneNumber("112115", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESMobileNumber(){
	var parsed = new PhoneNumber("654123456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		mobilePrefix: "654",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESServiceNumber(){
	var parsed = new PhoneNumber("800123456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "800",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESDialAround(){
	var parsed = new PhoneNumber("1032955123456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		cic: "1032",
		areaCode: "955",
		subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESPartial1(){
	var parsed = new PhoneNumber("9", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "9"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESPartial2(){
	var parsed = new PhoneNumber("95", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "95"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial3(){
	var parsed = new PhoneNumber("957", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial4(){
	var parsed = new PhoneNumber("9571", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957",
		subscriberNumber: "1"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial5(){
	var parsed = new PhoneNumber("957 12", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957",
		subscriberNumber: "12"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial6(){
	var parsed = new PhoneNumber("957 123", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957",
		subscriberNumber: "123"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial7(){
	var parsed = new PhoneNumber("957 123 4", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957",
		subscriberNumber: "1234"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial8(){
	var parsed = new PhoneNumber("957 123 45", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "957",
		subscriberNumber: "12345"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESPartial9(){
	var parsed = new PhoneNumber("957 123 456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseESDialIDD00International1(){
	var parsed = new PhoneNumber("0", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "0"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International2(){
	var parsed = new PhoneNumber("00", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International3(){
	var parsed = new PhoneNumber("001", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International4(){
	var parsed = new PhoneNumber("0016", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "6"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International5(){
	var parsed = new PhoneNumber("00165", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "65"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International6(){
	var parsed = new PhoneNumber("001650", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International7(){
	var parsed = new PhoneNumber("0016505", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International8(){
	var parsed = new PhoneNumber("00165055", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International9(){
	var parsed = new PhoneNumber("001650555", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International10(){
	var parsed = new PhoneNumber("0016505551", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International11(){
	var parsed = new PhoneNumber("00165055512", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55512"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International12(){
	var parsed = new PhoneNumber("001650555123", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555123"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseESDialIDD00International13(){
	var parsed = new PhoneNumber("0016505551234", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551234"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseESFromInternational(){
	var parsed = new PhoneNumber("+34912123456", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "912",
			subscriberNumber: "123456"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};

//for CFISH-7040
function testParseESMobileNumber() {
	var parsed = new PhoneNumber("665 545 880", {locale: "es-ES"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		mobilePrefix: "665",
		subscriberNumber: "545880"
	}, {locale: "es-ES"});
	
	assertTrue(parsed.equals(expected));
	
};
