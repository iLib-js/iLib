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
function testParseAUAddressNormal() {
	var parsedAddress = new Address("Level 5, 48 Pirrama Road,\nPyrmont, NSW 2009\nAustralia", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 5, 48 Pirrama Road", parsedAddress.streetAddress);
	assertEquals("Pyrmont", parsedAddress.locality);
	assertEquals("NSW", parsedAddress.region);
	assertEquals("2009", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressNoZip() {
	var parsedAddress = new Address("Canberra Nara Centre,\n1 Constitution Ave\nCanberra City, Australia", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Canberra Nara Centre, 1 Constitution Ave", parsedAddress.streetAddress);
	assertEquals("Canberra City", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAUAddressNoCountry() {
	var parsedAddress = new Address("Trevarrick Rd\nSevenhill SA 5453", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Trevarrick Rd", parsedAddress.streetAddress);
	assertEquals("Sevenhill", parsedAddress.locality);
	assertEquals("SA", parsedAddress.region);
	assertEquals("5453", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressManyLines() {
	var parsedAddress = new Address("Dept of Treasury\nLangton Crs\nParkes\nACT 2600\nAustralia\n\n\n", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dept of Treasury, Langton Crs", parsedAddress.streetAddress);
	assertEquals("Parkes", parsedAddress.locality);
	assertEquals("ACT", parsedAddress.region);
	assertEquals("2600", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressOneLine() {
	var parsedAddress = new Address("630 Beaufort St, Mt Lawley, WA 6050, Australia", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("630 Beaufort St", parsedAddress.streetAddress);
	assertEquals("Mt Lawley", parsedAddress.locality);
	assertEquals("WA", parsedAddress.region);
	assertEquals("6050", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tPiccadilly\t\t\r  Lot 6B Spring \r\r\tGully Rd\nPiccadilly \n\t\rSA \r\t\n5151\nAustralia    \n\n\n", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Piccadilly Lot 6B Spring Gully Rd", parsedAddress.streetAddress);
	assertEquals("Piccadilly", parsedAddress.locality);
	assertEquals("SA", parsedAddress.region);
	assertEquals("5151", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressNoDelimiters() {
	var parsedAddress = new Address("630 Beaufort St Mt Lawley WA 6050 Australia", {locale: 'en-AU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("630 Beaufort St", parsedAddress.streetAddress);
	assertEquals("Mt Lawley", parsedAddress.locality);
	assertEquals("WA", parsedAddress.region);
	assertEquals("6050", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAUAddressFromUS() {
	var parsedAddress = new Address("Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Shp1/ Wanneroo Rd", parsedAddress.streetAddress);
	assertEquals("Landsdale", parsedAddress.locality);
	assertEquals("WA", parsedAddress.region);
	assertEquals("6065", parsedAddress.postalCode);
	assertEquals("Australia", parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testFormatAddressAU() {
	var parsedAddress = new Address({
		streetAddress: "Shp1/ Wanneroo Rd",
		locality: "Landsdale",
		region: "WA",
		postalCode: "6065",
		country: "Australia",
		countryCode: "AU"
	}, {locale: 'en-AU'});
	
	var expected = "Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia";
	var formatter = new AddressFmt({locale: 'en-AU'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAUFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Shp1/ Wanneroo Rd",
		locality: "Landsdale",
		region: "WA",
		postalCode: "6065",
		country: "Australia",
		countryCode: "AU"
	}, {locale: 'en-US'});
	
	var expected = "Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
