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

// TODO: put in Austrian addresses here

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Herrenberger Straße 140, 71034 Böblingen, Deutschland", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herrenberger Straße 140", parsedAddress.streetAddress);
	assertEquals("Böblingen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("71034", parsedAddress.postalCode);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Berliner Straße 111, Ratingen, Deutschland", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Berliner Straße 111", parsedAddress.streetAddress);
	assertEquals("Ratingen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Herrenberger Straße 140, 71034 Böblingen", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herrenberger Straße 140", parsedAddress.streetAddress);
	assertEquals("Böblingen", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("71034", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Altrottstraße 31\nPartner Port SAP\n69190\nWalldorf/Baden\nDeutschland\n\n\n", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Altrottstraße 31, Partner Port SAP", parsedAddress.streetAddress);
	assertEquals("Walldorf/Baden", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("69190", parsedAddress.postalCode);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("ABC-Strasse 19, 20354 Hamburg, Deutschland", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ABC-Strasse 19", parsedAddress.streetAddress);
	assertEquals("Hamburg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20354", parsedAddress.postalCode);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tAltrottstraße 31\n\n\nPartner Port SAP\n   \t\n69190\n   \r\t\n Walldorf/Baden\n   \t \t \t Deutschland\n\n\n", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Altrottstraße 31, Partner Port SAP", parsedAddress.streetAddress);
	assertEquals("Walldorf/Baden", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("69190", parsedAddress.postalCode);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("ABC-Strasse 19 20354 Hamburg Deutschland", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ABC-Strasse 19", parsedAddress.streetAddress);
	assertEquals("Hamburg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20354", parsedAddress.postalCode);
	assertEquals("Deutschland", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Geschäftsstelle Lützowplatz 15\n(Eingang Einemstraße 24)\n10785 Würtzheim", {locale: 'de-AT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Geschäftsstelle Lützowplatz 15, (Eingang Einemstraße 24)", parsedAddress.streetAddress);
	assertEquals("Würtzheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10785", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Dienerstrasse 12\n80331 Munich\nGermany", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dienerstrasse 12", parsedAddress.streetAddress);
	assertEquals("Munich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("80331", parsedAddress.postalCode);
	assertEquals("Germany", parsedAddress.country);
	assertEquals("DE", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Dienerstrasse 12",
		locality: "München",
		postalCode: "80331",
		country: "Deutschland",
		countryCode: "AT"
	}, {locale: 'de-AT'});
	
	var expected = "Dienerstrasse 12\n80331 München\nDeutschland";
	var formatter = new ilib.AddressFmt({locale: 'de-AT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Dienerstrasse 12",
		locality: "Munich",
		postalCode: "80331",
		country: "Germany",
		countryCode: "AT"
	}, {locale: 'en-US'});
	
	var expected = "Dienerstrasse 12\n80331 Munich\nGermany";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
