/*
 * phonenum.js - test phonenumber class
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

function testNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchUSIgnoreSomeFields() {
	var left = new ilib.PhoneNumber('1 (650) 456-7890'),
		right = new ilib.PhoneNumber('650-456-7890');
	assertNotUndefined(left);
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments2(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments3(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments1Reverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchFRDepartmentsWrongArea(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchFRDepartmentsWrongAreaReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(0, right.compare(left));
};

function testNumberMatchFRDepartmentsDifferentCountryCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDifferentSN(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123454"
	}, {locale: "fr-FR"});
	
	assertEquals(0, left.compare(right));	
};

function testNumberMatchUSTrunk(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSTrunkDefaultLocale(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkDefaultLocaleReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSTrunkWrongLocale(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkWrongLocaleReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSMissingArea(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(88, left.compare(right));
};

function testNumberMatchUSMissingAreaReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(88, right.compare(left));
};

function testNumberMatchUSDifferentArea(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchUSDifferentAreaReverse(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(0, right.compare(left));
};

function testNumberMatchUSCompletelyDifferentCountryCodes(){
	// different area codes, where neither is the US
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "30",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchUSMissingCountryCodeThisCountry(){
	// missing area code, where the one that is present is the same as the locale
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	
	assertEquals(84, left.compare(right));
};

function testNumberMatchUSMissingCountryCodeThisCountryReverse(){
	// missing area code, where the one that is present is the same as the locale
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	
	assertEquals(84, right.compare(left));
};

function testNumberMatchUSMissingCountryCodeOtherCountry(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(68, left.compare(right));
};

function testNumberMatchUSMissingCountryCodeOtherCountryReverse(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(68, right.compare(left));
};

function testNumberMatchITSanMarino(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITSanMarinoReverse(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSSanMarino(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});

	// only a 100% match if calling from inside of italy
	assertEquals(68, left.compare(right));
};

function testNumberMatchITSanMarinoWrongArea(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchITSanMarinoDifferentCountryCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITSanMarinoDifferentCountryCodesReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchITVaticanCity(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITVaticanCityReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchITOther(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(84, left.compare(right));
};

function testNumberMatchITOtherReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(84, right.compare(left));
};

function testNumberMatchUSDifferentCountryCodesIT(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new ilib.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSDifferentCountryCodesITReverse(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new ilib.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSDifferentCountryCodesFR(){
	// both ways are valid ways to reach the departments from abroad
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSDifferentCountryCodesFRReverse(){
	// both ways are valid ways to reach the departments from abroad
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchDEMissingExtension(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchDEMissingExtensionReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, right.compare(left));
};

function testNumberMatchDEDifferentExtension(){
	var location;
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchUSEverythingDifferent(){
	var location;
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		countryCode: "49",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchCAUseNanpRules(){
	var location;
	var left = new ilib.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en-CA"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en-CA"});
	
	assertEquals(100, left.compare(right));
};

// for bug NOV-116615
function testNumberMatchMobileVsLDNumber(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		mobilePrefix: "7734",
		subscriberNumber: "345345"
	}, {locale: "en-gb"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1483",
		subscriberNumber: "345345"
	}, {locale: "en-gb"});
	
	assertEquals(0, left.compare(right));
};

//for bug NOV-118901

function testNumberMatchSG(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertEquals(84, left.compare(right));
};

function testNumberMatchSGWrongLocale(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-US"});
	
	assertEquals(68, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodes(){
	var left = new ilib.PhoneNumber('+378 0549 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+39 0549 123 456', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoMissingCountryCodes(){
	var left = new ilib.PhoneNumber('+378 0549 123 456', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('0549 123 456', {locale: "it-IT"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes(){
	var left = new ilib.PhoneNumber('+378 0548 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+39 0545 123 456', {locale: "en-US"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchITOther(){
	var left = new ilib.PhoneNumber('+39 06 69812345', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('06-69812345', {locale: "it-IT"});
	assertEquals(84, left.compare(right));
};

function testStringsNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber('+590 590 123 456', {locale: "fr-FR"}),
		right = new ilib.PhoneNumber('0590 123 456', {locale: "fr-FR"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchDEMissingExtension(){
	var left = new ilib.PhoneNumber('02203 123456', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchDEDifferentExtension(){
	var left = new ilib.PhoneNumber('02203/123456-833', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchUSIgnoreSomeFieldsReverse(){
	var left = new ilib.PhoneNumber('650-456-7890', {locale: "en-US"}),
		right = new ilib.PhoneNumber('1 (650) 456-7890', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesReverse(){
	var left = new ilib.PhoneNumber('+39 0549 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+378 0549 123 456', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoMissingCountryCodesReverse(){
	var left = new ilib.PhoneNumber('0549 123 456', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('+378 0549 123 456', {locale: "it-IT"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodesReverse(){
	var left = new ilib.PhoneNumber('+39 0545 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+378 0548 123 456', {locale: "en-US"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchITOtherReverse(){
	var left = new ilib.PhoneNumber('06-69812345', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('+39 06 69812345', {locale: "it-IT"});
	assertEquals(84, left.compare(right));
};

function testStringsNumberMatchFRDepartments1Reverse(){
	var left = new ilib.PhoneNumber('0590 123 456', {locale: "fr-FR"}),
		right = new ilib.PhoneNumber('+590 590 123 456', {locale: "fr-FR"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchDEMissingExtensionReverse(){
	var left = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchDEDifferentExtensionReverse(){
	var left = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203/123456-833', {locale: "de-DE"});
	assertEquals(0, left.compare(right));	
};


function testEqualsNotEqual(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertFalse(left.equals(right));
};

function testEquals(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(left.equals(right));
};

function testEqualsDifferentLocaleOkay(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	// same number because they have the country code
	assertTrue(left.equals(right));	
};

function testEqualsDifferentLocaleNotOkay(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	// same local number, but different country
	assertFalse(left.equals(right));
};

function testEqualsMissingLocaleLeft(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(left.equals(right));
};

function testEqualsMissingLocaleRight(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	
	assertTrue(left.equals(right));
};

function testEqualsMissingLocaleBoth(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});

	assertTrue(left.equals(right));
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.states); // for the generic, shared stuff
	data.push(ilib.data.states_US);
	data.push(ilib.data.states_FR);
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testPhoneNumLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	ilib.PhoneNumber.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR",
		sync: false});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR", 
		sync: false});
	
	assertEquals(100, left.compare(right));
    ilib.setLoaderCallback(undefined);
};

var lookAheadStates = {
    "s": [
        0,
        0,
        0,
        0,
        {	// 4 -> area
            "l": 7,
            "s": [
                0,
                0,
                0,
                0,
                0,
                { // 45 -> area
                    "l": 7,
                    "s": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        7	// 456 -> area
                    ]
                },
                {  // 46
                    "s": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        { // 465
                            "s": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                { // 4655
                                    "s": [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        7	// 46555 -> area
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        { // ^
            "s": [
                12 // ^0 -> trunk
            ]
        }
    ]
};

function testPhoneNumLookaheadRoot() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = {
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^04", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("4", left.areaCode);
};

function testPhoneNumLookaheadSubleaf1() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^045", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("45", left.areaCode);
};

function testPhoneNumLookaheadSubleaf2() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^0456", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("456", left.areaCode);
};

function testPhoneNumLookaheadSubleaf3() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^046555", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("46555", left.areaCode);
};

function testPhoneNumLookaheadFallback1() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	left.subscriberNumber = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^047", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("4", left.areaCode);
	assertEquals("7", left.subscriberNumber);
};

function testPhoneNumLookaheadFallback2() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	left.subscriberNumber = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^046", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("4", left.areaCode);
	assertEquals("6", left.subscriberNumber);
};

function testPhoneNumLookaheadFallback3() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	left.subscriberNumber = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^04655", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("4", left.areaCode);
	assertEquals("655", left.subscriberNumber);
};

function testPhoneNumLookaheadFallback4() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	left.subscriberNumber = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^0457", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("45", left.areaCode);
	assertEquals("7", left.subscriberNumber);
};

function testPhoneNumLookaheadFallback5() {
	var left = new ilib.PhoneNumber("0", {locale: "XX"});
	
	left.trunkAccess = undefined;
	left.areaCode = undefined;
	left.subscriberNumber = undefined;
	
	// use custom states data to test lookahead parsing
	var regionData = { 
		stateData: lookAheadStates,
		plan: left.plan,
		handler: ilib._handlerFactory(left.locale, left.plan)
	};
	
	left._parseNumber("^0477", regionData, {sync: true});
	
	assertEquals("0", left.trunkAccess);
	assertEquals("4", left.areaCode);
	assertEquals("77", left.subscriberNumber);
};
