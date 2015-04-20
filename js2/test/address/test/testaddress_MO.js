/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressMOLatinNormal() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078\n Macau", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOLatinNoZip() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau \n Macau", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMOLatinNoCountry() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078", {locale: 'pt-MO'});

	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("MO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.country);
};

function testParseAddressMOAsianNormal() {
	var parsedAddress = new Address("澳門999078商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("商業大馬路251A-301號這是一個友善博祚20樓行政中心", parsedAddress.streetAddress);
	assertEquals("澳門", parsedAddress.country);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOAsianNoZip() {
	var parsedAddress = new Address("澳門商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("商業大馬路251A-301號這是一個友善博祚20樓行政中心", parsedAddress.streetAddress);
	assertEquals("澳門", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMOAsianNoCountry() {
	var parsedAddress = new Address("999078商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("商業大馬路251A-301號這是一個友善博祚20樓行政中心", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.country);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOManyLines() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n\n Lisboa Gardens, Tower B3\n\n 14th Floor D,\n\n\n Macau 999078\n\n Macau", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOOneLine() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D, Macau 999078 Macau", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tRua Cidade de Lisboa N.o 130\r\t Lisboa Gardens,\r\t   \tTower B3 14th Floor D,\t\t\n\t Macau \r\t999078 \n\t\t\r\rMacau\t\n\n\n", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMONoDelimiters() {
	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130 Lisboa Gardens Tower B3 14th Floor D Macau 999078 Macau", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130 Lisboa Gardens Tower B3 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testParseAddressMOFromUS() {	

	var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078\n Macau", {locale: 'en-US'});
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D", parsedAddress.streetAddress);
	assertEquals("Macau", parsedAddress.region);
	assertEquals("999078", parsedAddress.postalCode);
	assertEquals("Macau", parsedAddress.country);
	assertEquals("MO", parsedAddress.countryCode);
};

function testFormatAddressMOLatin() {
	var parsedAddress = new Address({
		streetAddress: "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D",
		region: "Macau",
		postalCode: "999078",
		country: "Macau",
		countryCode: "MO",
		format: "latin"
	}, {locale: 'pt-MO'});
	
	var expected = "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D\nMacau 999078\nMacau";
	var formatter = new AddressFmt({locale: 'pt-MO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMOFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D",
		region: "Macau",
		postalCode: "999078",
		country: "Macau",
		countryCode: "MO",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D\nMacau 999078\nMacau";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
