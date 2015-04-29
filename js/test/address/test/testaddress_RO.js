/*
 * testaddress_RO.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressRONormal() {
	var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressRONoZip() {
	var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\nBUCUREŞTI\nRomania", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressRONoCountry() {
	var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressROManyLines() {
	var parsedAddress = new Address("Călina Enescu Stradă\nMăguricea 1\nap. 1\n\n014231\nBUCUREŞTI\n\nRomania\n\n\n", {locale: 'ro-RO'});
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă, Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressROOneLine() {
	var parsedAddress = new Address("Călina Enescu Stradă , Măguricea 1 , ap. 1 , 014231 , BUCUREŞTI , Romania", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă, Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressROSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tCălina Enescu Stradă\t\t\rMăguricea 1\t\t\rap. 1\n\n014231\t\n\nBUCUREŞTI\n\t\nRomania\n\n\n", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1 ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressRONoDelimiters() {
	var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1 014231 BUCUREŞTI Romania", {locale: 'ro-RO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testParseAddressROFromUS() {
	var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Călina Enescu Stradă Măguricea 1, ap. 1", parsedAddress.streetAddress);
	assertEquals("BUCUREŞTI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("014231", parsedAddress.postalCode);
	assertEquals("Romania", parsedAddress.country);
	assertEquals("RO", parsedAddress.countryCode);
};

function testFormatAddressRO() {
	var parsedAddress = new Address({
		streetAddress: "Călina Enescu Stradă Măguricea 1, ap. 1",
		locality: "BUCUREŞTI",
		postalCode: "014231",
		country: "Romania",
		countryCode: "RO"
	}, {locale: 'ro-RO'});
	
	var expected = "Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania";
	var formatter = new AddressFmt({locale: 'ro-RO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressROFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Călina Enescu Stradă Măguricea 1, ap. 1",
		locality: "BUCUREŞTI",
		postalCode: "014231",
		country: "Romania",
		countryCode: "RO"
	}, {locale: 'en-US'});
	
	var expected = "Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
