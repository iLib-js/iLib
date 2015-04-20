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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAddressETNormal() {
	var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETNoZip() {
	var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressETManyLines() {
	var parsedAddress = new Address("Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETOneLine() {
	var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETSuperfluousWhitespace() {
	var parsedAddress = new Address("Mr. Abebe Bekele\n\tP.O. Box 1519  \n\t\n ADDIS ABABA\t\n\n ETHIOPIA  \n  \t\t\t", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETNoDelimiters() {
	var parsedAddress = new Address("Mr. Abebe Bekele P.O. Box 1519 ADDIS ABABA ETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETSpecialChars() {
	var parsedAddress = new Address("Post Office Headquarters, P.O. Box 5555, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Post Office Headquarters, P.O. Box 5555", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testParseAddressETFromUS() {
	var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abebe Bekele, P.O. Box 1519", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ADDIS ABABA", parsedAddress.locality);
	assertEquals("ETHIOPIA", parsedAddress.country);
	assertEquals("ET", parsedAddress.countryCode);
};

function testFormatAddressET() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Abebe Bekele\nP.O. Box 1519",
		locality: "ADDIS ABABA",
		country: "ETHIOPIA",
		countryCode: "ET"
	}, {locale: 'en-ET'});
	
	var expected = "Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA";
	var formatter = new AddressFmt({locale: 'en-ET'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressETFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Abebe Bekele\nP.O. Box 1519",
		locality: "ADDIS ABABA",
		country: "ETHIOPIA",
		countryCode: "ET"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
