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


function testParseAddressHUNormal() {
	var parsedAddress = new Address("Budapest, Fiktív utca 82., IV. em./28. - or - Pf. 184, 2806, HUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Fiktív utca 82., IV. em./28. - or - Pf. 184", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("2806", parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testParseAddressHUNoZip() {
	var parsedAddress = new Address("Budapest, Fiktív utca 82., IV. em./28. - or - Pf. 184, HUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Fiktív utca 82., IV. em./28. - or - Pf. 184", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressHUManyLines() {
	var parsedAddress = new Address("Budapest\nHonvéd utca 13-15\n1055\nHUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Honvéd utca 13-15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("1055", parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testParseAddressHUOneLine() {
	var parsedAddress = new Address("Budapest, Honvéd utca 13-15, 1055, HUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Honvéd utca 13-15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("1055",parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testParseAddressHUSuperfluousWhitespace() {
	var parsedAddress = new Address("Budapest   \n\t\n Honvéd utca 13-15\t\n\n 1055\n\nHUNGARY  \n  \t\t\t", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Honvéd utca 13-15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("1055", parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testParseAddressHUNoDelimiters() {
	var parsedAddress = new Address("Budapest Honvéd utca 13-15 1055 HUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Honvéd utca 13-15", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Budapest",parsedAddress.locality);
	assertEquals("1055", parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testParseAddressHUSpecialChars() {
	var parsedAddress = new Address("Győr, Arató utca 7 fsz. 2, 9028, HUNGARY", {locale: 'hu-HU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Arató utca 7 fsz. 2", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Győr",parsedAddress.locality);
	assertEquals("9028", parsedAddress.postalCode);
	assertEquals("HUNGARY", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};
function testParseAddressHUFromUS() {
	var parsedAddress = new Address("Győr, Arató utca 7 fsz. 2, 9028, Hungary", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Arató utca 7 fsz. 2", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Győr",parsedAddress.locality);
	assertEquals("9028", parsedAddress.postalCode);
	assertEquals("Hungary", parsedAddress.country);
	assertEquals("HU", parsedAddress.countryCode);
};

function testFormatAddressHU() {
	var parsedAddress = new Address({
		streetAddress: "Fiktív utca 82., IV. em./28. - or - Pf. 184.",
		locality: "Budapest",
		postalCode: "2806",
		country: "HUNGARY",
		countryCode: "HU"
	}, {locale: 'hu-HU'});
	
	var expected = "Budapest\nFiktív utca 82., IV. em./28. - or - Pf. 184.\n2806\nHUNGARY";
	var formatter = new AddressFmt({locale: 'hu-HU'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressHUFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Fiktív utca 82., IV. em./28. - or - Pf. 184.",
		locality: "Budapest",
		postalCode: "2806",
		country: "Hungary",
		countryCode: "HU"
	}, {locale: 'en-US'});
	
	var expected = "Budapest\nFiktív utca 82., IV. em./28. - or - Pf. 184.\n2806\nHungary";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
