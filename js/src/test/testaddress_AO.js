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



function testParseAOAddressNormal() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o, LUANDA, ANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressNoZip() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o, LUANDA, ANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAOAddressManyLines() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele\nRua Frederik Engels 92 – 7 o\nLUANDA\nANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressOneLine() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o, LUANDA, ANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o  \n\t\n LUANDA\t\n\n ANGOLA  \n  \t\t\t", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele P. 15 Sh. 1 LUANDA ANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele P. 15 Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressSpeciAOChars() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o, LUANDA, ANGOLA", {locale: 'pt-AO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testParseAOAddressFromUS() {
	var parsedAddress = new ilib.Address("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o, LUANDA, ANGOLA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("LUANDA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ANGOLA", parsedAddress.country);
	assertEquals("AO", parsedAddress.countryCode);
};

function testFormatAddressAO() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o",
		locality: "LUANDA",
		country: "ANGOLA",
		countryCode: "AO"
	}, {locale: 'pt-AO'});
	
	var expected = "Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o\nLUANDA\nANGOLA";
	var formatter = new ilib.AddressFmt({locale: 'pt-AO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAOFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o",
		locality: "LUANDA",
		country: "ANGOLA",
		countryCode: "AO"
	}, {locale: 'en-US'});
	
	var expected = "Sr. Jõao Pembele, Rua Frederik Engels 92 – 7 o\nLUANDA\nANGOLA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
