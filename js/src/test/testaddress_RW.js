/*
 * testaddress_CG.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("M. Pierre Simon B.P. 3425\nKIGALI", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("M. Pierre Simon\nB.P. 3425\nKIGALI\nRwanda\n\n\n", {locale: 'fr-RW'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon, B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("M. Pierre Simon , B.P. 3425 , KIGALI , Rwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon, B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t\tM. Pierre Simon\t\t\tB.P. 3425\n\t\nKIGALI\n\tRwanda\n\n\n", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Pierre Simon B.P. 3425 KIGALI Rwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Pierre Simon B.P. 3425",
		locality: "KIGALI",
		country: "Rwanda",
		countryCode: "RW"
	}, {locale: 'fr-RW'});
	
	var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
	var formatter = new ilib.AddressFmt({locale: 'fr-RW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Pierre Simon B.P. 3425",
		locality: "KIGALI",
		country: "Rwanda",
		countryCode: "RW"
	}, {locale: 'en-US'});
	
	var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
