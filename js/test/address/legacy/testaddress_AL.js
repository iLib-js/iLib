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



function testParseALAddressNormal() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressNoZip() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, TIRANE, ALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseALAddressManyLines() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu'\nP. 15, Sh. 1\n1001-TIRANE\nALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressOneLine() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001",parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1  \n\t\n 1001-TIRANE\t\n\n ALBANIA  \n  \t\t\t", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu' P. 15 Sh. 1 1001-TIRANE ALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu' P. 15 Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testParseALAddressFromUS() {
	var parsedAddress = new ilib.Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rr 'Aleksander Moisiu', P. 15, Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("TIRANE",parsedAddress.locality);
	assertEquals("1001", parsedAddress.postalCode);
	assertEquals("ALBANIA", parsedAddress.country);
	assertEquals("AL", parsedAddress.countryCode);
};

function testFormatAddressAL() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Rr 'Aleksander Moisiu', P. 15, Sh. 1",
		locality: "TIRANE",
		postalCode: "1001",
		country: "ALBANIA",
		countryCode: "AL"
	}, {locale: 'sq-AL'});
	
	var expected = "Rr 'Aleksander Moisiu', P. 15, Sh. 1\n1001-TIRANE\nALBANIA";
	var formatter = new ilib.AddressFmt({locale: 'sq-AL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressALFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Rr 'Aleksander Moisiu', P. 15, Sh. 1",
		postalCode: "1001",
		locality: "TIRANE",
		country: "ALBANIA",
		countryCode: "AL"
	}, {locale: 'en-US'});
	
	var expected = "Rr 'Aleksander Moisiu', P. 15, Sh. 1\n1001-TIRANE\nALBANIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
