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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAddressBFNormal() {
	var parsedAddress = new Address("03 B.P. 7021, Ouagadougou 03, Burkina Faso", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("03 B.P. 7021", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Ouagadougou 03",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Burkina Faso", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFNoZip() {
	var parsedAddress = new Address("BP 621, BOBO-DIOULASSO, BURKINA FASO", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBFManyLines() {
	var parsedAddress = new Address("01 BP 621\nBOBO-DIOULASSO 01\nBURKINA FASO", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("01 BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFOneLine() {
	var parsedAddress = new Address("01 BP 621, BOBO-DIOULASSO 01, BURKINA FASO", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("01 BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFSuperfluousWhitespace() {
	var parsedAddress = new Address("01 BP 621  \n\t\n BOBO-DIOULASSO 01\t\n\n BURKINA FASO  \n  \t\t\t", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("01 BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFNoDelimiters() {
	var parsedAddress = new Address("01 BP 621 BOBO-DIOULASSO 01 BURKINA FASO", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("01 BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFSpecialChars() {
	var parsedAddress = new Address("Société nationale des postes, 01 BP 6000, BOBO-DIOULASSO 01, BURKINA FASO", {locale: 'fr-BF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Société nationale des postes, 01 BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testParseAddressBFFromUS() {
	var parsedAddress = new Address("01 BP 621, BOBO-DIOULASSO 01, BURKINA FASO", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("01 BP 621", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BOBO-DIOULASSO 01",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BURKINA FASO", parsedAddress.country);
	assertEquals("BF", parsedAddress.countryCode);
};

function testFormatAddressBF() {
	var parsedAddress = new Address({
		streetAddress: "01 BP 621",
		locality: "BOBO-DIOULASSO 01",
		country: "BURKINA FASO",
		countryCode: "BF"
	}, {locale: 'fr-BF'});
	
	var expected = "01 BP 621\nBOBO-DIOULASSO 01\nBURKINA FASO";
	var formatter = new AddressFmt({locale: 'fr-BF'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBFFromUS() {
	var parsedAddress = new Address({
		streetAddress: "01 BP 621",
		country: "BURKINA FASO",
		locality: "BOBO-DIOULASSO 01",
		countryCode: "BF"
	}, {locale: 'en-US'});
	
	var expected = "01 BP 621\nBOBO-DIOULASSO 01\nBURKINA FASO";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
