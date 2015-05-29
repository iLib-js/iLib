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

// TODO: put in Austrian addresses here

function testParseATAddressNormal() {
	var parsedAddress = new ilib.Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien, Österreich", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R. Fellner, Pazmaniteng 24-9", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("A-1020", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressNoZip() {
	var parsedAddress = new ilib.Address("R. Fellner, Pazmaniteng 24-9, Wien, Österreich", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R. Fellner, Pazmaniteng 24-9", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseATAddressNoCountry() {
	var parsedAddress = new ilib.Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R. Fellner, Pazmaniteng 24-9", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("A-1020", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressManyLines() {
	var parsedAddress = new ilib.Address("Wolfgang Schüssel\nLiebiggasse 5\n1010 Wien\nÖsterreich\n\n\n", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wolfgang Schüssel, Liebiggasse 5", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressOneLine() {
	var parsedAddress = new ilib.Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien, Österreich", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R. Fellner, Pazmaniteng 24-9", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("A-1020", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("  \t  \r  Wolfgang Schüssel,\n\t    Liebiggasse 5,\n\n\n\n\t 1010 Wien\r\t  ,\n\t Österreich       ", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wolfgang Schüssel, Liebiggasse 5", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Wolfgang Schüssel Liebiggasse 5 1010 Wien Österreich", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wolfgang Schüssel Liebiggasse 5", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Wolfgang Schüssel, Liebiggasse 5, 1010 Wien, Österreich", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wolfgang Schüssel, Liebiggasse 5", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Österreich", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testParseATAddressFromUS() {
	var parsedAddress = new ilib.Address("Wolfgang Schüssel, Liebiggasse 5, 1010 Wien, Austria", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wolfgang Schüssel, Liebiggasse 5", parsedAddress.streetAddress);
	assertEquals("Wien", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Austria", parsedAddress.country);
	assertEquals("AT", parsedAddress.countryCode);
};

function testFormatAddressAT() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Wolfgang Schüssel, Liebiggasse 5",
		locality: "Wien",
		postalCode: "1010",
		country: "Österreich",
		countryCode: "AT"
	}, {locale: 'de-AT'});
	
	var expected = "Wolfgang Schüssel, Liebiggasse 5\n1010 Wien\nÖsterreich";
	var formatter = new ilib.AddressFmt({locale: 'de-AT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressATFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Wolfgang Schüssel, Liebiggasse 5",
		locality: "Vienna",
		postalCode: "1010",
		country: "Austria",
		countryCode: "AT"
	}, {locale: 'en-US'});
	
	var expected = "Wolfgang Schüssel, Liebiggasse 5\n1010 Vienna\nAustria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
