/*
 * testaddress_ZM.js - test the address parsing and formatting routines
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
function testParseAddressZMNormal() {
	var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n50100 NDOLA\nZAMBIA", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda 10 Nyimba Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMNoZip() {
	var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\nNDOLA\nZAMBIA", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda 10 Nyimba Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressZMNoCountry() {
	var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n50100 NDOLA", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda 10 Nyimba Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMManyLines() {
	var parsedAddress = new Address("Mr. Richard Chanda\n10\nNyimba\nRoad\n50100\nNDOLA\nZAMBIA\n\n\n", {locale: 'en-ZM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10, Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMOneLine() {
	var parsedAddress = new Address("Mr. Richard Chanda , 10 , Nyimba , Road , 50100 , NDOLA , ZAMBIA", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10, Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tMr. Richard Chanda\n\t\t\t10 \t\t\t\r\r Nyimba \n \r \tRoad \n\t\n50100\t\nNDOLA\n\t ZAMBIA\n\n\n", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda, 10 Nyimba, Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMNoDelimiters() {
	var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road 50100 NDOLA ZAMBIA", {locale: 'en-ZM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda 10 Nyimba Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("50100", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testParseAddressZMFromUS() {
	var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Richard Chanda 10 Nyimba Road", parsedAddress.streetAddress);
	assertEquals("NDOLA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("56001", parsedAddress.postalCode);
	assertEquals("ZAMBIA", parsedAddress.country);
	assertEquals("ZM", parsedAddress.countryCode);
};

function testFormatAddressZM() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Richard Chanda 10 Nyimba Road",
		locality: "NDOLA",
		postalCode: "56001",
		country: "ZAMBIA",
		countryCode: "ZM"
	}, {locale: 'en-ZM'});
	
	var expected = "Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA";
	var formatter = new AddressFmt({locale: 'en-ZM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressZMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Richard Chanda 10 Nyimba Road",
		locality: "NDOLA",
		postalCode: "56001",
		country: "ZAMBIA",
		countryCode: "ZM"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
