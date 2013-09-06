/*
 * testaddress_CI.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI\nCOMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI , COMMERCANTE 06 B.P. 37 , ABIDJAN 06 , côte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI\n\n\t\r\t\t\rCOMMERCANTE 06 B.P. 37\r\r\n\nABIDJAN 06\t\r\n\t\rcôte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06 côte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37", parsedAddress.streetAddress);
	assertEquals("ABIDJAN 06", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("côte d’ivoire", parsedAddress.country);
	assertEquals("CI", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37",
		locality: "ABIDJAN 06",
		postalCode: "1010",
		country: "côte d’ivoire",
		countryCode: "CI"
	}, {locale: 'fr-CI'});
	
	var expected = "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire";
	var formatter = new ilib.AddressFmt({locale: 'fr-CI'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37",
		locality: "ABIDJAN 06",
		postalCode: "1010",
		country: "côte d’ivoire",
		countryCode: "CI"
	}, {locale: 'en-US'});
	
	var expected = "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
