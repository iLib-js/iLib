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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressRWNormal() {
	var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWNoZip() {
	var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressRWNoCountry() {
	var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWManyLines() {
	var parsedAddress = new Address("M. Pierre Simon\nB.P. 3425\nKIGALI\nRwanda\n\n\n", {locale: 'fr-RW'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon, B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWOneLine() {
	var parsedAddress = new Address("M. Pierre Simon , B.P. 3425 , KIGALI , Rwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon, B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t\tM. Pierre Simon\t\t\tB.P. 3425\n\t\nKIGALI\n\tRwanda\n\n\n", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWNoDelimiters() {
	var parsedAddress = new Address("M. Pierre Simon B.P. 3425 KIGALI Rwanda", {locale: 'fr-RW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testParseAddressRWFromUS() {
	var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Simon B.P. 3425", parsedAddress.streetAddress);
	assertEquals("KIGALI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Rwanda", parsedAddress.country);
	assertEquals("RW", parsedAddress.countryCode);
};

function testFormatAddressRW() {
	var parsedAddress = new Address({
		streetAddress: "M. Pierre Simon B.P. 3425",
		locality: "KIGALI",
		country: "Rwanda",
		countryCode: "RW"
	}, {locale: 'fr-RW'});
	
	var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
	var formatter = new AddressFmt({locale: 'fr-RW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressRWFromUS() {
	var parsedAddress = new Address({
		streetAddress: "M. Pierre Simon B.P. 3425",
		locality: "KIGALI",
		country: "Rwanda",
		countryCode: "RW"
	}, {locale: 'en-US'});
	
	var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
