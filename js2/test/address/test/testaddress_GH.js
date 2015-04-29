/*
 * testaddress_GH.js - test the address parsing and formatting routines
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
function testParseAddressGHNormal() {
	var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHNoZip() {
	var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGHNoCountry() {
	var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHManyLines() {
	var parsedAddress = new Address("Mr. John Mensah\nP.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHOneLine() {
	var parsedAddress = new Address("Mr. John Mensah , P.O. Box 1234 , ACCRA , GHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHSuperfluousWhitespace() {
	var parsedAddress = new Address("Mr. John Mensah\n\n\t\r\t\t\rP.O. Box 1234\r\r\n\nACCRA\t\r\n\t\rGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHNoDelimiters() {
	var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234 ACCRA GHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressGHFromUS() {
	var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testFormatAddressGH() {
	var parsedAddress = new Address({
		streetAddress: "Mr. John Mensah P.O. Box 1234",
		locality: "ACCRA",
		postalCode: "1010",
		country: "GHANA",
		countryCode: "GH"
	}, {locale: 'en-GH'});
	
	var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
	var formatter = new AddressFmt({locale: 'en-GH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGHFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. John Mensah P.O. Box 1234",
		locality: "ACCRA",
		postalCode: "1010",
		country: "GHANA",
		countryCode: "GH"
	}, {locale: 'en-US'});
	
	var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
