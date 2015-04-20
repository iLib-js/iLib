/*
 * testaddress_GM.js - test the address parsing and formatting routines
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
function testParseAddressGMNormal() {
	var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. A. Ceesay 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

function testParseAddressGMNoZip() {
	var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. A. Ceesay 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGMNoCountry() {
	var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. A. Ceesay 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

function testParseAddressGMManyLines() {
	var parsedAddress = new Address("Mr. A. Ceesay\n21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. A. Ceesay, 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

function testParseAddressGMOneLine() {
	var parsedAddress = new Address("Mr. A. Ceesay , 21 Liberation Avenue , BANJUL , GAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. A. Ceesay, 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

function testParseAddressGMSuperfluousWhitespace() {
	var parsedAddress = new Address("Mr. A. Ceesay\n\n\t\r\t\t\r21 Liberation Avenue\r\r\n\nBANJUL\t\r\n\t\rGAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. A. Ceesay, 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

/*function testParseAddressGMNoDelimiters() {
	var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue BANJUL GAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. A. Ceesay 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};*/

function testParseAddressGMFromUS() {
	var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. A. Ceesay 21 Liberation Avenue", parsedAddress.streetAddress);
	assertEquals("BANJUL", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GAMBIA", parsedAddress.country);
	assertEquals("GM", parsedAddress.countryCode);
};

function testFormatAddressGM() {
	var parsedAddress = new Address({
		streetAddress: "Mr. A. Ceesay 21 Liberation Avenue",
		locality: "BANJUL",
		postalCode: "1010",
		country: "GAMBIA",
		countryCode: "GM"
	}, {locale: 'en-GM'});
	
	var expected = "Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA";
	var formatter = new AddressFmt({locale: 'en-GM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. A. Ceesay 21 Liberation Avenue",
		locality: "BANJUL",
		postalCode: "1010",
		country: "GAMBIA",
		countryCode: "GM"
	}, {locale: 'en-US'});
	
	var expected = "Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
