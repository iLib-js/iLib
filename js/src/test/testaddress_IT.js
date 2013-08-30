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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Corso Europa 2\n20122 Milan\nItalia", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Corso Europa 2", parsedAddress.streetAddress);
	assertEquals("Milan", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20122", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("C.so Trapani 16\nTorino\nItalia", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("C.so Trapani 16", parsedAddress.streetAddress);
	assertEquals("Torino", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Corso Europa 2\n20122 Milan", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Corso Europa 2", parsedAddress.streetAddress);
	assertEquals("Milan", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20122", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressWithRegion() {
	var parsedAddress = new ilib.Address("via Paná, 56\n35027 Noventa Padovana (PD)", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("via Paná, 56", parsedAddress.streetAddress);
	assertEquals("Noventa Padovana", parsedAddress.locality);
	assertEquals("(PD)", parsedAddress.region);
	assertEquals("35027", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressWithRegion2() {
	var parsedAddress = new ilib.Address("via Napoli 45\n96017 Noto (SR)\nItalia", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("via Napoli 45", parsedAddress.streetAddress);
	assertEquals("Noto", parsedAddress.locality);
	assertEquals("(SR)", parsedAddress.region);
	assertEquals("96017", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Centro Direzionale\nFab. 1 G/7\n80143\nNapoli\nItalia\n", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Centro Direzionale, Fab. 1 G/7", parsedAddress.streetAddress);
	assertEquals("Napoli", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("80143", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Via Achille Campanile 85, 00144 ROMA, Italia", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Via Achille Campanile 85", parsedAddress.streetAddress);
	assertEquals("ROMA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("00144", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tVia Achille   \t\t\t Campanile 85,\n\n\t\r\t00144\t\t\t\n ROMA\t\t\n\r\r Italia\n\n\n", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Via Achille Campanile 85", parsedAddress.streetAddress);
	assertEquals("ROMA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("00144", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Via Achille Campanile 85 00144 ROMA Italia", {locale: 'it-IT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Via Achille Campanile 85", parsedAddress.streetAddress);
	assertEquals("ROMA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("00144", parsedAddress.postalCode);
	assertEquals("Italia", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Via Achille Campanile 85\n00144 ROMA\nItaly", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Via Achille Campanile 85", parsedAddress.streetAddress);
	assertEquals("ROMA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("00144", parsedAddress.postalCode);
	assertEquals("Italy", parsedAddress.country);
	assertEquals("IT", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Corso Europa 2",
		locality: "Milan",
		postalCode: "20122",
		country: "Italia",
		countryCode: "IT"
	}, {locale: 'it-IT'});
	
	var expected = "Corso Europa 2\n20122 Milan\nItalia";
	var formatter = new ilib.AddressFmt({locale: 'it-IT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Corso Europa 2",
		locality: "Milan",
		postalCode: "20122",
		country: "Italia",
		countryCode: "IT"
	}, {locale: 'en-US'});
	
	var expected = "Corso Europa 2\n20122 Milan\nItalia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
