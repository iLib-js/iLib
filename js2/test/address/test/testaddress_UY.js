/*
 * testaddress_UY.js - test the address parsing and formatting routines
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

function testParseAddressUYNormal() {
	var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n11801 Montevideo\nUruguay", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Florencio Agustini Eduardo Acevedo Diaz 1753", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYNoZip() {
	var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\nMontevideo\nUruguay", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Florencio Agustini Eduardo Acevedo Diaz 1753", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressUYNoCountry() {
	var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n11801 Montevideo", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Florencio Agustini Eduardo Acevedo Diaz 1753", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYManyLines() {
	var parsedAddress = new Address("Mr. Richard Chanda\n10\nNyimba\nRoad\n11801\nMontevideo\nUruguay\n\n\n", {locale: 'es-UY'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10, Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYOneLine() {
	var parsedAddress = new Address("Mr. Richard Chanda , 10 , Nyimba , Road , 11801 , Montevideo , Uruguay", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10, Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tMr. Richard Chanda\n\t\t\t10 \t\t\t\r\r Nyimba \n \r \tRoad \n\t\n11801\t\nMontevideo\n\t Uruguay\n\n\n", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10 Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYNoDelimiters() {
	var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753 11801 Montevideo Uruguay", {locale: 'es-UY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Florencio Agustini Eduardo Acevedo Diaz 1753", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11801", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testParseAddressUYFromUS() {
	var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Florencio Agustini Eduardo Acevedo Diaz 1753", parsedAddress.streetAddress);
	assertEquals("Montevideo", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("56001", parsedAddress.postalCode);
	assertEquals("Uruguay", parsedAddress.country);
	assertEquals("UY", parsedAddress.countryCode);
};

function testFormatAddressUY() {
	var parsedAddress = new Address({
		streetAddress: "Florencio Agustini Eduardo Acevedo Diaz 1753",
		locality: "Montevideo",
		postalCode: "56001",
		country: "Uruguay",
		countryCode: "UY"
	}, {locale: 'es-UY'});
	
	var expected = "Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay";
	var formatter = new AddressFmt({locale: 'es-UY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressUYFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Florencio Agustini Eduardo Acevedo Diaz 1753",
		locality: "Montevideo",
		postalCode: "56001",
		country: "Uruguay",
		countryCode: "UY"
	}, {locale: 'en-US'});
	
	var expected = "Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
