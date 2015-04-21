/*
 * phonenum_DE.js - Test parsing phone numbers in DE
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
function testParseDEFull(){
	var parsed = new PhoneNumber("02360123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEIgnoreFormatting(){
	var parsed = new PhoneNumber("02360/ 123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEIgnoreCrap(){
	var parsed = new PhoneNumber("0@23!60$12^34(56", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDENoAreaCode(){
	var parsed = new PhoneNumber("8234 5678", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEPlusIDDToUS(){
	var parsed = new PhoneNumber("+12028675309", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEZerosIDDToUS(){
	var parsed = new PhoneNumber("0012028675309", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEIDDToIEMobile(){
	var parsed = new PhoneNumber("+353 86 8223689", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDELongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("2360/ 123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "2360123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDELocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("723 456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "723456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEInvalidLocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new PhoneNumber("123 456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "123456",
		invalid: true
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDELocalWithPauseChars(){
	var parsed = new PhoneNumber("4156568w1234", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		subscriberNumber: "4156568",
		extension: "w1234"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDELDWithPauseChars(){
	var parsed = new PhoneNumber("02360/ 123456w1234", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456",
		extension: "w1234"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEPlusIDDToGB(){
	var parsed = new PhoneNumber("+442012345678", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEZerosIDDToGB(){
	var parsed = new PhoneNumber("00442012345678", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEEmergencyNumber(){
	var parsed = new PhoneNumber("112", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "112"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};
function testParseDEEmergencyNumberPlus(){
	var parsed = new PhoneNumber("19222115", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			emergency: "19222",
			subscriberNumber: "115"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};

function testParseDEMobileNumber(){
	var parsed = new PhoneNumber("016512345678", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "165",
		subscriberNumber: "12345678"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};
function testParseDEDialAround(){
	var parsed = new PhoneNumber("01032 2360/ 123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		cic: "1032",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};
function testParseDEDialAroundLong(){
	var parsed = new PhoneNumber("010032 2360/ 123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		cic: "10032",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};
function testParseDEService(){
	var parsed = new PhoneNumber("01169 123/45678", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		serviceCode: "11",
		subscriberNumber: "6912345678"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
};
function testParseDEBlock(){
	var parsed = new PhoneNumber("116116", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		serviceCode: "116116"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseDEInternetDialup(){
	var parsed = new PhoneNumber("01925 87654321", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		serviceCode: "192",
		subscriberNumber: "587654321"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseDEPartial1(){
	var parsed = new PhoneNumber("0", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseDEPartial2(){
	var parsed = new PhoneNumber("05", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial3(){
	var parsed = new PhoneNumber("058", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "58"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial4(){
	var parsed = new PhoneNumber("0584", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "584"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial5(){
	var parsed = new PhoneNumber("05844", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial6(){
	var parsed = new PhoneNumber("058441", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "1"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial7(){
	var parsed = new PhoneNumber("0584412", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "12"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial8(){
	var parsed = new PhoneNumber("05844123", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "123"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial9(){
	var parsed = new PhoneNumber("058441234", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "1234"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial10(){
	var parsed = new PhoneNumber("0584412345", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "12345"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseDEPartial11(){
	var parsed = new PhoneNumber("05844123456", {locale: "de-DE"});
	assertNotUndefined(parsed);
	
	var expected = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "123456"
	}, {locale: "de-DE"});
	
	assertTrue(parsed.equals(expected));
	
};