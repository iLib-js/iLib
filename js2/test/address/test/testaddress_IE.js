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
function testParseAddressIENormal() {
	var parsedAddress = new Address("Gordon House\nBarrow Street\nDublin 4\nIreland", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gordon House, Barrow Street", parsedAddress.streetAddress);
	assertEquals("Dublin", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("4", parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIENoZip() {
	var parsedAddress = new Address("Metro Park\nCloughfern Avenue\nNewtownabbey\nCo. Antrim\nIreland", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Metro Park, Cloughfern Avenue", parsedAddress.streetAddress);
	assertEquals("Newtownabbey", parsedAddress.locality);
	assertEquals("Co. Antrim", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIENoCountry() {
	var parsedAddress = new Address("Liffey Park Technology Campus\nBarnhall Road\nLeixlip\nCo Kildare", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Liffey Park Technology Campus, Barnhall Road", parsedAddress.streetAddress);
	assertEquals("Leixlip", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Co Kildare", parsedAddress.region);
	assertUndefined(parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIEDublinPostalCode() {
	var parsedAddress = new Address("Gordon House\nBarrow Street\nDublin D6W\nIreland", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gordon House, Barrow Street", parsedAddress.streetAddress);
	assertEquals("Dublin", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("D6W", parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIEManyLines() {
	var parsedAddress = new Address("Belfield Office Park\nBeaver Row\nClonskeagh\nDublin 4\nIreland\n\n", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Belfield Office Park, Beaver Row, Clonskeagh", parsedAddress.streetAddress);
	assertEquals("Dublin", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("4", parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIEOneLine() {
	var parsedAddress = new Address("Swords Business Campus, Balheary Road, Swords, County: Dublin, Ireland", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Swords Business Campus, Balheary Road", parsedAddress.streetAddress);
	assertEquals("Swords", parsedAddress.locality);
	assertEquals("County: Dublin", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIESuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tSwords Business Campus\n\t\r Balheary Road\n\t\n\tSwords\   \t \t \t   County:    Dublin   \n\n\t Ireland  \n\n\n", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Swords Business Campus, Balheary Road", parsedAddress.streetAddress);
	assertEquals("Swords", parsedAddress.locality);
	assertEquals("County: Dublin", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIENoDelimiters() {
	var parsedAddress = new Address("Swords Business Campus Balheary Road Swords County: Dublin Ireland", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Swords Business Campus Balheary Road", parsedAddress.streetAddress);
	assertEquals("Swords", parsedAddress.locality);
	assertEquals("County: Dublin", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Ireland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIESpecialChars() {
	var parsedAddress = new Address("Teach Ceilteach, Sráid Doire, Cill Iníon Léinín, Tamhlacht, Contae Átha Cliath, Éire", {locale: 'en-IE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Teach Ceilteach, Sráid Doire, Cill Iníon Léinín", parsedAddress.streetAddress);
	assertEquals("Tamhlacht", parsedAddress.locality);
	assertEquals("Contae Átha Cliath", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Éire", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testParseAddressIEFromDE() {
	var parsedAddress = new Address("Metro Park\nCloughfern Avenue\nNewtownabbey\nCo. Antrim\nIrland", {locale: 'de-DE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Metro Park, Cloughfern Avenue", parsedAddress.streetAddress);
	assertEquals("Newtownabbey", parsedAddress.locality);
	assertEquals("Co. Antrim", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Irland", parsedAddress.country);
	assertEquals("IE", parsedAddress.countryCode);
};

function testFormatAddressIE() {
	var parsedAddress = new Address({
		streetAddress: "Gordon House, Barrow Street",
		locality: "Dublin",
		postalCode: "4",
		country: "Ireland",
		countryCode: "IE"
	}, {locale: 'en-IE'});
	
	var expected = "Gordon House, Barrow Street\nDublin 4\nIreland";
	var formatter = new AddressFmt({locale: 'en-IE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressIEWithCounty() {
	var parsedAddress = new Address({
		streetAddress: "Gordon House, Barrow Street",
		locality: "Galway",
		region: "County Galway",
		country: "Ireland",
		countryCode: "IE"
	}, {locale: 'en-IE'});
	
	var expected = "Gordon House, Barrow Street\nGalway\nCounty Galway\nIreland";
	var formatter = new AddressFmt({locale: 'en-IE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressIEFromFR() {
	var parsedAddress = new Address({
		streetAddress: "Gordon House, Barrow Street",
		locality: "Dublin",
		postalCode: "4",
		country: "Irlande",
		countryCode: "IE"
	}, {locale: 'fr-FR'});
	
	var expected = "Gordon House, Barrow Street\nDublin 4\nIrlande";
	var formatter = new AddressFmt({locale: 'fr-FR'});
	assertEquals(expected, formatter.format(parsedAddress));
};
