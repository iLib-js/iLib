/*
 * testaddress_CZ.js - test the Czech address parsing and formatting routines
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

function testParseAddressCZNormal() {
	var parsedAddress = new ilib.Address("Prujezdna 320/62, 100 00 PRAHA 10, česká republika", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prujezdna 320/62", parsedAddress.streetAddress);
	assertEquals("PRAHA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100 00", parsedAddress.postalCode);
	assertEquals("česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testParseAddressCZNoZip() {
	var parsedAddress = new ilib.Address("Prujezdna 320/62, PRAHA, česká republika", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prujezdna 320/62", parsedAddress.streetAddress);
	assertEquals("PRAHA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCZManyLines() {
	var parsedAddress = new ilib.Address("Jaromir Jagr\nPrujezdna 320/62\n100 00 Praha 10\nčeská republika", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Jaromir Jagr, Prujezdna 320/62", parsedAddress.streetAddress);
	assertEquals("Praha 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100 00", parsedAddress.postalCode);
	assertEquals("česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testParseAddressCZOneLine() {
	var parsedAddress = new ilib.Address("Prujezdna 320/62 100 00 PRAHA 10 česká republika", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prujezdna 320/62", parsedAddress.streetAddress);
	assertEquals("PRAHA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100 00", parsedAddress.postalCode);
	assertEquals("česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testParseAddressCZSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\n\t\t\rPrujezdna 320/62\t   \t\n   \r100 00 Praha 10    \t\n \n\n    česká republika              \t\t", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prujezdna 320/62", parsedAddress.streetAddress);
	assertEquals("Praha 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100 00", parsedAddress.postalCode);
	assertEquals("česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testParseAddressCZSpecialChars() {
	var parsedAddress = new ilib.Address("Tyršova 1000, 592 31 Nové Město na Moravě 1000, Česká republika", {locale: 'cs-CZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tyršova 1000", parsedAddress.streetAddress);
	assertEquals("Nové Město na Moravě 1000", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("592 31", parsedAddress.postalCode);
	assertEquals("Česká republika", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testParseAddressCZFromUS() {
	var parsedAddress = new ilib.Address("Tyršova 1000, 592 31 Nové Město na Moravě 1000, Czech Republic", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tyršova 1000", parsedAddress.streetAddress);
	assertEquals("Nové Město na Moravě 1000", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("592 31", parsedAddress.postalCode);
	assertEquals("Czech Republic", parsedAddress.country);
	assertEquals("CZ", parsedAddress.countryCode);
};

function testFormatAddressCZ() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Kostel svatého Šimona a Judy, Dušní",
 		locality: "Praha 1",
		postalCode: "110 00",
		country: "Česká republika",
		countryCode: "CZ"
	}, {locale: 'cs-CZ'});
	
	var expected = "Kostel svatého Šimona a Judy, Dušní\n110 00 Praha 1\nČeská republika";
	var formatter = new ilib.AddressFmt({locale: 'cs-CZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCZFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Kostel svatého Šimona a Judy, Dušní",
 		locality: "Praha 1",
		postalCode: "110 00",
		country: "Czech Republic",
		countryCode: "CZ"
	}, {locale: 'en-US'});
	
	var expected = "Kostel svatého Šimona a Judy, Dušní\n110 00 Praha 1\nCzech Republic";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
