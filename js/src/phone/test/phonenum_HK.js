/*
 * phonenum_HK.js - Test parsing phone numbers in HK
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

function testHKLocalNumber(){
	var parsed = new ilib.PhoneNumber("23897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testHKFromIntl(){
	var parsed = new ilib.PhoneNumber("+85223897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testHKMobile(){
	var parsed = new ilib.PhoneNumber("93897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testHKFromIntlToMobile(){
	var parsed = new ilib.PhoneNumber("+85293897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testHKLocalNumberWithMCC(){
	var parsed = new ilib.PhoneNumber("23897077", {locale: "en-US", mcc: "454"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKLocalNumber(){
	var parsed = new ilib.PhoneNumber("2123 4567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("22-34-56-78", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "22345678"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("2!1@2$3-^4&5(6)7", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKServiceCode(){
	var parsed = new ilib.PhoneNumber("18501", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "1",
		subscriberNumber: "8501"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKMobileNumber(){
	var parsed = new ilib.PhoneNumber("51234567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "5",
		subscriberNumber: "1234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("00112028675309", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("999", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "999"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKEmergencyNumberGSM(){
	var parsed = new ilib.PhoneNumber("112", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKPartial1(){
	var parsed = new ilib.PhoneNumber("2", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKPartial2(){
	var parsed = new ilib.PhoneNumber("21", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial3(){
	var parsed = new ilib.PhoneNumber("212", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial4(){
	var parsed = new ilib.PhoneNumber("2123", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2123"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial5(){
	var parsed = new ilib.PhoneNumber("2123 4", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial6(){
	var parsed = new ilib.PhoneNumber("2123 45", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212345"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial7(){
	var parsed = new ilib.PhoneNumber("2123 456", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2123456"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial8(){
	var parsed = new ilib.PhoneNumber("2123 4567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseHKPartial9(){
	var parsed = new ilib.PhoneNumber("2123 4567 8", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212345678",
		invalid: true
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHKWithGBMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
