/*
 * testaddress_UG.js - test the address parsing and formatting routines
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
function testParseAddressUGNormal() {
	var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGNoZip() {
	var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressUGNoCountry() {
	var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGManyLines() {
	var parsedAddress = new Address("Ms. Olive Takubua\nP.O. Box 21310\nKAMPALA\nUganda\n\n\n", {locale: 'en-UG'});
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua, P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGOneLine() {
	var parsedAddress = new Address("Ms. Olive Takubua , P.O. Box 21310 , KAMPALA , Uganda", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua, P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t\tMs. Olive Takubua\t\t\tP.O. Box\t\r\r21310\t\nKAMPALA\n\t Uganda\n\n\n", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGNoDelimiters() {
	var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310 KAMPALA Uganda", {locale: 'en-UG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testParseAddressUGFromUS() {
	var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Olive Takubua P.O. Box 21310", parsedAddress.streetAddress);
	assertEquals("KAMPALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Uganda", parsedAddress.country);
	assertEquals("UG", parsedAddress.countryCode);
};

function testFormatAddressUG() {
	var parsedAddress = new Address({
		streetAddress: "Ms. Olive Takubua P.O. Box 21310",
		locality: "KAMPALA",
		country: "Uganda",
		countryCode: "UG"
	}, {locale: 'en-UG'});
	
	var expected = "Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda";
	var formatter = new AddressFmt({locale: 'en-UG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressUGFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Ms. Olive Takubua P.O. Box 21310",
		locality: "KAMPALA",
		country: "Uganda",
		countryCode: "UG"
	}, {locale: 'en-US'});
	
	var expected = "Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
