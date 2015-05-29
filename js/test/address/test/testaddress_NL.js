/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
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
function testParseAddressNLNormal() {
	var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Nederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
	assertEquals("Uithoorn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2345 GD", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLNoZip() {
	var parsedAddress = new Address("Achterberglaan 23, Uithoorn, Nederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
	assertEquals("Uithoorn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNLManyLines() {
	var parsedAddress = new Address("Claude Debussylaan 34\nVinoly Mahler 4\nToren B\n15th Floor\n1082 MD\nAmsterdam\nNederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Claude Debussylaan 34, Vinoly Mahler 4, Toren B, 15th Floor", parsedAddress.streetAddress);
	assertEquals("Amsterdam", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1082 MD", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLOneLine() {
	var parsedAddress = new Address("Startbaan 16, 1187 XR Amstelveen, Nederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Startbaan 16", parsedAddress.streetAddress);
	assertEquals("Amstelveen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1187 XR", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLSuperfluousWhitespace() {
	var parsedAddress = new Address("Startbaan 16,   \n\t\n 1187 XR \t\t Amstelveen,\n\n\n Nederland  \n  \t\t\t", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Startbaan 16", parsedAddress.streetAddress);
	assertEquals("Amstelveen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1187 XR", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLNoDelimiters() {
	var parsedAddress = new Address("Startbaan 16 1187 XR Amstelveen Nederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Startbaan 16", parsedAddress.streetAddress);
	assertEquals("Amstelveen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1187 XR", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLSpecialChars() {
	var parsedAddress = new Address("Óók 16, 1187 XR s'Hertogen-bósch, Nederland", {locale: 'nl-NL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Óók 16", parsedAddress.streetAddress);
	assertEquals("s'Hertogen-bósch", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1187 XR", parsedAddress.postalCode);
	assertEquals("Nederland", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testParseAddressNLFromUS() {
	var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, The Netherlands", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
	assertEquals("Uithoorn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2345 GD", parsedAddress.postalCode);
	assertEquals("The Netherlands", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};

function testFormatAddressNL() {
	var parsedAddress = new Address({
		streetAddress: "Achterberglaan 23",
		locality: "Uithoorn",
		postalCode: "2345 GD",
		country: "Nederland",
		countryCode: "NL"
	}, {locale: 'nl-NL'});
	
	var expected = "Achterberglaan 23\n2345 GD Uithoorn\nNederland";
	var formatter = new AddressFmt({locale: 'nl-NL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressNLFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Achterberglaan 23",
		locality: "Uithoorn",
		postalCode: "2345 GD",
		country: "Netherlands",
		countryCode: "NL"
	}, {locale: 'en-US'});
	
	var expected = "Achterberglaan 23\n2345 GD Uithoorn\nNetherlands";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
