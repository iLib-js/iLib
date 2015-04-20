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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAddressDKNormal() {
	var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKNoZip() {
	var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, SKANDERBORG, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressDKShortZip() {
	var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, 8660 SKANDERBORG, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKManyLines() {
	var parsedAddress = new Address("Hr. Niels Henriksen\nKastanievej 15\nDK-8660 SKANDERBORG\nDENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKOneLine() {
	var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660",parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKSuperfluousWhitespace() {
	var parsedAddress = new Address("Hr. Niels Henriksen,          Kastanievej 15   \n\t\n DK-8660      \t SKANDERBORG\t\n\n DENMARK  \n  \t\t\t", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKNoDelimiters() {
	var parsedAddress = new Address("Hr. Niels Henriksen Kastanievej 15 DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKSpecialChars() {
	var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("København",parsedAddress.locality);
	assertEquals("DK-1307", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("Botanisk Centralbibliotek, Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKPostOffice() {
	var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K, DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("København",parsedAddress.locality);
	assertEquals("DK-1307", parsedAddress.postalCode);
	assertEquals("K", parsedAddress.postOffice);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("Botanisk Centralbibliotek, Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKPostOfficeDot() {
	var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK", {locale: 'da-DK'});
	
	assertNotUndefined(parsedAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("København",parsedAddress.locality);
	assertEquals("DK-1307", parsedAddress.postalCode);
	assertEquals("K.", parsedAddress.postOffice);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("Botanisk Centralbibliotek, Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertEquals("DK", parsedAddress.countryCode);
};

function testParseAddressDKFromUS() {
	var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG, DENMARK", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hr. Niels Henriksen, Kastanievej 15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SKANDERBORG",parsedAddress.locality);
	assertEquals("DK-8660", parsedAddress.postalCode);
	assertEquals("DENMARK", parsedAddress.country);
	assertEquals("DK", parsedAddress.countryCode);
};

function testFormatAddressDK() {
	var parsedAddress = new Address({
		streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
		locality: "SKANDERBORG",
		postalCode: "DK-8660",
		country: "DENMARK",
		countryCode: "DK"
	}, {locale: 'da-DK'});
	
	var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG\nDENMARK";
	var formatter = new AddressFmt({locale: 'da-DK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressDKPostOffice() {
	var parsedAddress = new Address({
		streetAddress: "Hr. Niels Henriksen, Kastanievej 15",
		locality: "SKANDERBORG",
		postalCode: "DK-8660",
		postOffice: "K.",
		country: "DENMARK",
		countryCode: "DK"
	}, {locale: 'da-DK'});
	
	var expected = "Hr. Niels Henriksen, Kastanievej 15\nDK-8660 SKANDERBORG K.\nDENMARK";
	var formatter = new AddressFmt({locale: 'da-DK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressDKFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
		postalCode: "DK-8660",
		locality: "SKANDERBORG",
		country: "DENMARK",
		countryCode: "DK"
	}, {locale: 'en-US'});
	
	var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG\nDENMARK";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
