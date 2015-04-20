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



function testParseAddressCMNormal() {
	var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMNoZip() {
	var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCMManyLines() {
	var parsedAddress = new Address("M. Pierre Marie\nBP 6000, YAOUNDE\nCAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMOneLine() {
	var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMSuperfluousWhitespace() {
	var parsedAddress = new Address("M. Pierre Marie  \n\t\n BP 6000, YAOUNDE\t\n\n CAMEROON  \n  \t\t\t", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMNoDelimiters() {
	var parsedAddress = new Address("M. Pierre Marie BP 6000 YAOUNDE CAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMSpecialChars() {
	var parsedAddress = new Address("Direction des postes ,Régulation des réseaux et services postaux, YAOUNDE, CAMEROON", {locale: 'fr-CM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction des postes, Régulation des réseaux et services postaux", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testParseAddressCMFromUS() {
	var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Pierre Marie, BP 6000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YAOUNDE",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CAMEROON", parsedAddress.country);
	assertEquals("CM", parsedAddress.countryCode);
};

function testFormatAddressCM() {
	var parsedAddress = new Address({
		streetAddress: "M. Pierre Marie\nBP 6000",
		locality: "YAOUNDE",
		country: "CAMEROON",
		countryCode: "AM"
	}, {locale: 'fr-CM'});
	
	var expected = "M. Pierre Marie\nBP 6000\nYAOUNDE\nCAMEROON";
	var formatter = new AddressFmt({locale: 'fr-CM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "M. Pierre Marie\nBP 6000",
		country: "CAMEROON",
		locality: "YAOUNDE",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "M. Pierre Marie\nBP 6000\nYAOUNDE\nCAMEROON";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
