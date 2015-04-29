/*
 * testaddress_CG.js - test the address parsing and formatting routines
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
function testParseAddressCGNormal() {
	var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGNoZip() {
	var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCGNoCountry() {
	var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGManyLines() {
	var parsedAddress = new Address("M. Joseph Mbemba 12\nrue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville\n\n\n", {locale: 'fr-CG'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGOneLine() {
	var parsedAddress = new Address("M. Joseph Mbemba 12 , rue Kakamoueka , BRAZZAVILLE , Congo-Brazzaville", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t\tM. Joseph Mbemba 12\t\t\true Kakamoueka\n\t\nBRAZZAVILLE\n\tCongo-Brazzaville\n\n\n", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12 rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGNoDelimiters() {
	var parsedAddress = new Address("M. Joseph Mbemba 12 rue Kakamoueka BRAZZAVILLE Congo-Brazzaville", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12 rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo-Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressCGFromUS() {
	var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo - Brazzaville", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Congo - Brazzaville", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testFormatAddressCG() {
	var parsedAddress = new Address({
		streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
		locality: "BRAZZAVILLE",
		country: "Congo-Brazzaville",
		countryCode: "CG"
	}, {locale: 'fr-CG'});
	
	var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville";
	var formatter = new AddressFmt({locale: 'fr-CG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCGFromUS() {
	var parsedAddress = new Address({
		streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
		locality: "BRAZZAVILLE",
		country: "Congo - Brazzaville",
		countryCode: "CG"
	}, {locale: 'en-US'});
	
	var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo - Brazzaville";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
