/*
 * phonenum_SG.js - Test parsing phone numbers in SG
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
// for bug NOV-118901
function testSGLocalNumber(){
	var parsed = new PhoneNumber("93897077", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testSGFromIntl(){
	var parsed = new PhoneNumber("+6593897077", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testSGLocalNumberWithMCC(){
	var parsed = new PhoneNumber("83897077", {locale: "en-US", mcc: "525"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "83897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGLocalNumber(){
	var parsed = new PhoneNumber("6123 4567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGIgnoreFormatting(){
	var parsed = new PhoneNumber("62-34-56-78", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "62345678"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGIgnoreCrap(){
	var parsed = new PhoneNumber("6!1@2$3-^4&5(6)7", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGServiceCode(){
	var parsed = new PhoneNumber("1800 345 6789", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "3456789"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGMobileNumber(){
	var parsed = new PhoneNumber("81234567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "81234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGZerosIDDToUS(){
	var parsed = new PhoneNumber("00112028675309", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGEmergencyNumber(){
	var parsed = new PhoneNumber("999", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		emergency: "999"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGPartial1(){
	var parsed = new PhoneNumber("6", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGPartial2(){
	var parsed = new PhoneNumber("61", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "61"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial3(){
	var parsed = new PhoneNumber("612", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "612"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial4(){
	var parsed = new PhoneNumber("6123", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6123"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial5(){
	var parsed = new PhoneNumber("6123 4", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "61234"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial6(){
	var parsed = new PhoneNumber("6123 45", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "612345"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial7(){
	var parsed = new PhoneNumber("6123 456", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6123456"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial8(){
	var parsed = new PhoneNumber("6123 4567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseSGPartial9(){
	var parsed = new PhoneNumber("6123 4567 8", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "612345678"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGWithUSMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGWithFRMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGWithMXMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGWithDEMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseSGWithGBMCC(){
	var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
