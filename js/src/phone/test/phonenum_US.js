/*
 * phonenum_US.js - Test parsing phone numbers in US
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

function testParseUSFull(){
	var parsed = new ilib.PhoneNumber("(456) 345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSFullNoLocale(){
	var parsed = new ilib.PhoneNumber("(456) 345-3434");
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSFull2(){
	var parsed = new ilib.PhoneNumber("4154154155", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "4154155"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("456-345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("@456@345@$%^3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSLocalNumber(){
	var parsed = new ilib.PhoneNumber("345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSWithTrunk(){
	var parsed = new ilib.PhoneNumber("1 (456) 345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSWithTrunkAltFormatting(){
	var parsed = new ilib.PhoneNumber("1-456-345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSWithDialAround(){
	var parsed = new ilib.PhoneNumber("10-10-321-456-345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSWithVSC(){
	var parsed = new ilib.PhoneNumber("*67 (456) 345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*674563453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSWithVSCandTrunk(){
	var parsed = new ilib.PhoneNumber("*67 1 (456) 345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*6714563453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithAlternateVSC(){
	var parsed = new ilib.PhoneNumber("112 (456) 345-3434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "1124563453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithAlternateVSCBogusCode(){
	var parsed = new ilib.PhoneNumber("111111111", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "111111111"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("911", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "911"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumberExtended(){
	var parsed = new ilib.PhoneNumber("911 123", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "911",
		subscriberNumber: "123"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalWithPauseChars(){
	var parsed = new ilib.PhoneNumber("6175568w1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLDWithPauseChars(){
	var parsed = new ilib.PhoneNumber("4156175568w1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLDWithPauseCharsAndTrunk(){
	var parsed = new ilib.PhoneNumber("1-415-617-5568 w 1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalWithExtension(){
	var parsed = new ilib.PhoneNumber("617-5568x1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLDWithExtension(){
	var parsed = new ilib.PhoneNumber("415-617-5568 x1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("011442012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "011",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPlusIDDToGBLongArea(){
	var parsed = new ilib.PhoneNumber("+441997123456", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial2(){
	var parsed = new ilib.PhoneNumber("+4", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial3(){
	var parsed = new ilib.PhoneNumber("+44", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial4(){
	var parsed = new ilib.PhoneNumber("+442", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial5(){
	var parsed = new ilib.PhoneNumber("+4420", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial6(){
	var parsed = new ilib.PhoneNumber("+44201", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial7(){
	var parsed = new ilib.PhoneNumber("+442012", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial8(){
	var parsed = new ilib.PhoneNumber("+4420123", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial9(){
	var parsed = new ilib.PhoneNumber("+44201234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial10(){
	var parsed = new ilib.PhoneNumber("+442012345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial11(){
	var parsed = new ilib.PhoneNumber("+4420123456", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial12(){
	var parsed = new ilib.PhoneNumber("+44201234567", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPlusIDDToGBPartial13(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseUSPlusIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("+5062012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// Costa Rica
		subscriberNumber: "2012345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSZerosIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("0115062012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "011",
		countryCode: "506", // Costa Rica
		subscriberNumber: "2012345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial1(){
	var parsed = new ilib.PhoneNumber("4", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPartial2(){
	var parsed = new ilib.PhoneNumber("45", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "45"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial3(){
	var parsed = new ilib.PhoneNumber("456", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "456"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial4(){
	var parsed = new ilib.PhoneNumber("4563", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4563"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial5(){
	var parsed = new ilib.PhoneNumber("45634", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "45634"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial6(){
	var parsed = new ilib.PhoneNumber("456345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "456345"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial7(){
	var parsed = new ilib.PhoneNumber("4563453", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4563453"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial8(){
	var parsed = new ilib.PhoneNumber("45634534", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial9(){
	var parsed = new ilib.PhoneNumber("456345343", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345343"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial10(){
	var parsed = new ilib.PhoneNumber("4563453434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartial11(){
	var parsed = new ilib.PhoneNumber("45634534345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534345",
		invalid: true
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPartialTrunk0(){
	var parsed = new ilib.PhoneNumber("1", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPartialTrunk1(){
	var parsed = new ilib.PhoneNumber("14", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		subscriberNumber: "4"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPartialTrunk2(){
	var parsed = new ilib.PhoneNumber("145", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		subscriberNumber: "45"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk3(){
	var parsed = new ilib.PhoneNumber("1456", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk4(){
	var parsed = new ilib.PhoneNumber("14563", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk5(){
	var parsed = new ilib.PhoneNumber("145634", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk6(){
	var parsed = new ilib.PhoneNumber("1456345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk7(){
	var parsed = new ilib.PhoneNumber("14563453", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk8(){
	var parsed = new ilib.PhoneNumber("145634534", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk9(){
	var parsed = new ilib.PhoneNumber("1456345343", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345343"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk10(){
	var parsed = new ilib.PhoneNumber("14563453434", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialTrunk11(){
	var parsed = new ilib.PhoneNumber("145634534345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534345",
		invalid: true
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD1(){
	var parsed = new ilib.PhoneNumber("+", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD2(){
	var parsed = new ilib.PhoneNumber("+3", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD3(){
	var parsed = new ilib.PhoneNumber("+35", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "35"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD4(){
	var parsed = new ilib.PhoneNumber("+353", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD5(){
	var parsed = new ilib.PhoneNumber("+3531", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD6(){
	var parsed = new ilib.PhoneNumber("+35311", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD7(){
	var parsed = new ilib.PhoneNumber("+353112", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD8(){
	var parsed = new ilib.PhoneNumber("+3531123", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "123"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD9(){
	var parsed = new ilib.PhoneNumber("+35311234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1234"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD10(){
	var parsed = new ilib.PhoneNumber("+353112345", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12345"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD11(){
	var parsed = new ilib.PhoneNumber("+3531123456", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "123456"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD12(){
	var parsed = new ilib.PhoneNumber("+35311234567", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1234567"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDD13(){
	var parsed = new ilib.PhoneNumber("+353112345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseUSPartialIDDtoPreserveZeroCountry0(){
	var parsed = new ilib.PhoneNumber("+", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry1(){
	var parsed = new ilib.PhoneNumber("+3", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry2(){
	var parsed = new ilib.PhoneNumber("+39", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry3(){
	var parsed = new ilib.PhoneNumber("+390", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry4(){
	var parsed = new ilib.PhoneNumber("+3904", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		subscriberNumber: "4"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry5(){
	var parsed = new ilib.PhoneNumber("+39040", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry6(){
	var parsed = new ilib.PhoneNumber("+390401", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "1"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseUSPartialIDDtoPreserveZeroCountry7(){
	var parsed = new ilib.PhoneNumber("+3904012345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-US", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
		});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-US", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en-FR'});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-US", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: 'en-MX'});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-US", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en-DE'});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseWithUSMCCNoLocale(){
	var parsed = new ilib.PhoneNumber("6153222313", {mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCCNoLocale(){
	var parsed = new ilib.PhoneNumber("6153222313", {mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en-FR'});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCCNoLocale(){
	var parsed = new ilib.PhoneNumber("6153222313", {mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: 'en-MX'});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCCNoLocale(){
	var parsed = new ilib.PhoneNumber("6153222313", {mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en-DE'});
	
	assertTrue(parsed.equals(expected));
	
};


// for NOV-108200
function testParseBogusSpecialChars(){
	var parsed = new ilib.PhoneNumber("+P13817803573", {mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParse555Number(){
	var parsed = new ilib.PhoneNumber("(408) 555-1234", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "5551234"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseHtmlGarbage(){
	var parsed = new ilib.PhoneNumber("<button>t1</button>", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		extension: "ttt1tt"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIntermediateSizedNumber(){
	var parsed = new ilib.PhoneNumber("56765432", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "567",
		subscriberNumber: "65432"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyLikeServiceNumber(){
	var parsed = new ilib.PhoneNumber("411", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "411"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testBogusInternationalNumber(){
	var parsed = new ilib.PhoneNumber("+33112345678", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	
	assertTrue(parsed.equals(expected));
	
};


function testFictitousNumberLocale(){
	var parsed = new ilib.PhoneNumber("5555555", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "5555555"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testFictitousNumberLD(){
	var parsed = new ilib.PhoneNumber("5555555555", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "555",
		subscriberNumber: "5555555"
	});
	
	assertTrue(parsed.equals(expected));
	
};

// for NOV-113367
function testCrazyIntlCall(){
	var parsed = new ilib.PhoneNumber("+1123", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		trunkAccess: "1",
		subscriberNumber: "23"
	});
	
	assertTrue(parsed.equals(expected));
	
};

//for NOV-109333
function testWierdVSC(){
	var parsed = new ilib.PhoneNumber("*#43#", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*#43#"
	});
	
	assertTrue(parsed.equals(expected));
	
};

function testSSCode(){
	var parsed = new ilib.PhoneNumber("*646#", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*646#"
	});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-5088
function testVSCUMTS1(){
	var parsed = new ilib.PhoneNumber("#*06", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "#*06"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCUMTS2(){
	var parsed = new ilib.PhoneNumber("*#06#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*#06#4089876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCUMTS3(){
	var parsed = new ilib.PhoneNumber("*#062#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*#062#4089876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCUMTS4(){
	var parsed = new ilib.PhoneNumber("#62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "#62#4089876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCUMTS5(){
	var parsed = new ilib.PhoneNumber("*##62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*##62#4089876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCUMTS6(){
	var parsed = new ilib.PhoneNumber("##62#408-987-6543", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "##62#4089876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-6022
function testVSCVerizon(){
	var parsed = new ilib.PhoneNumber("*228", {locale: "en-US"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*228"
	});
	
	assertTrue(parsed.equals(expected));
	
};
function testVSCVerizon2(){
	var parsed = new ilib.PhoneNumber("*844752224458", {mcc: "310"}); // US
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "*844752224458"
	});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-6362
function testVSCCDMALong(){
	var parsed = new ilib.PhoneNumber("1123456", {mcc: "310"}); // US
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "1123456"
	});
	
	assertTrue(parsed.equals(expected));
	
};

//for CFISH-6444
function testParseWithForeignIDD(){
	var parsed = new ilib.PhoneNumber("0044209876543", {mcc: "310"}); // US but with a foreign IDD
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44", // uk
		areaCode: "20", // london
		subscriberNumber: "9876543"
	});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-6845
function testParseWithChinaIDD(){
	var parsed = new ilib.PhoneNumber("00861098765432"); // US home locale but using a foreign IDD
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "86", // china
		areaCode: "10", // beijing
		subscriberNumber: "98765432"
	});
	
	assertTrue(parsed.equals(expected));
	
};
