/*
 * phonenum_CN.js - Test parsing phone numbers in CN
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

function testParseCNFull(){
	var parsed = new ilib.PhoneNumber("01012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNFull2(){
	var parsed = new ilib.PhoneNumber("08081123456", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "8081",
		subscriberNumber: "123456"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("010-12345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("01%0@-12$&34!56^7(8", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNLocalNumber(){
	var parsed = new ilib.PhoneNumber("87654321", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "87654321"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPlusIDDToGBLongArea(){
	var parsed = new ilib.PhoneNumber("+441997123456", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNMobileNumber(){
	var parsed = new ilib.PhoneNumber("15005179573", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNIDDToMobile(){
	var parsed = new ilib.PhoneNumber("+8615005179573", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442012", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420123", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201234", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442012345", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420123456", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201234567", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("110", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "110"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("120115", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "120",
			subscriberNumber: "115"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPlusIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("+5062012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNZerosIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("005062012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPartial2(){
	var parsed = new ilib.PhoneNumber("01", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial3(){
	var parsed = new ilib.PhoneNumber("010", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial4(){
	var parsed = new ilib.PhoneNumber("0101", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial5(){
	var parsed = new ilib.PhoneNumber("01012", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial6(){
	var parsed = new ilib.PhoneNumber("010123", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial7(){
	var parsed = new ilib.PhoneNumber("0101234", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial8(){
	var parsed = new ilib.PhoneNumber("01012345", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial9(){
	var parsed = new ilib.PhoneNumber("010123456", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial10(){
	var parsed = new ilib.PhoneNumber("0101234567", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartial11(){
	var parsed = new ilib.PhoneNumber("01012345678", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPartialLocal1(){
	var parsed = new ilib.PhoneNumber("8", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "8"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCNPartialLocal2(){
	var parsed = new ilib.PhoneNumber("87", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "87"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal3(){
	var parsed = new ilib.PhoneNumber("876", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "876"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal4(){
	var parsed = new ilib.PhoneNumber("8765", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "8765"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal5(){
	var parsed = new ilib.PhoneNumber("87654", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "87654"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal6(){
	var parsed = new ilib.PhoneNumber("876543", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "876543"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal7(){
	var parsed = new ilib.PhoneNumber("8765432", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "8765432"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNPartialLocal8(){
	var parsed = new ilib.PhoneNumber("87654321", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "87654321"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};

//for DFISH-26683
function testParseCNNewMobilePrefix1(){
	var parsed = new ilib.PhoneNumber("14782808075", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "147",
		subscriberNumber: "82808075"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseCNNewMobilePrefix2(){
	var parsed = new ilib.PhoneNumber("18721083400", {locale: "zh-CN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "187",
		subscriberNumber: "21083400"
	}, {locale: "zh-CN"});
	
	assertTrue(parsed.equals(expected));
	
};
