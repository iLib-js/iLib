/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

function testParseAddressPYNormal() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYNoZip() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\nASUNCIÓN\nPARAGUAY", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressPYNoCountry() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYManyLines() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811\n PISO 9\n\n1321\nASUNCIÓN\nPARAGUAY\n\n\n", {locale: 'es-PY'});
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYOneLine() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811 , PISO 9 , 1321 , ASUNCIÓN , PARAGUAY", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tJOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811\n\t\t\t PISO 9\n\t\n1321\t\nASUNCIÓN\n\t PARAGUAY\n\n\n", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYNoDelimiters() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9 1321 ASUNCIÓN PARAGUAY", {locale: 'es-PY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testParseAddressPYFromUS() {
	var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9", parsedAddress.streetAddress);
	assertEquals("ASUNCIÓN", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1321", parsedAddress.postalCode);
	assertEquals("PARAGUAY", parsedAddress.country);
	assertEquals("PY", parsedAddress.countryCode);
};

function testFormatAddressPY() {
	var parsedAddress = new Address({
		streetAddress: "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9",
		locality: "ASUNCIÓN",
		postalCode: "1321",
		country: "PARAGUAY",
		countryCode: "PY"
	}, {locale: 'es-PY'});
	
	var expected = "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY";
	var formatter = new AddressFmt({locale: 'es-PY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressPYFromUS() {
	var parsedAddress = new Address({
		streetAddress: "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9",
		locality: "ASUNCIÓN",
		postalCode: "1321",
		country: "PARAGUAY",
		countryCode: "PY"
	}, {locale: 'en-US'});
	
	var expected = "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
