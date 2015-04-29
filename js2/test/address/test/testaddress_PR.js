/*
 * testaddress_PR.js - test the address parsing and formatting routines for Puerto Rico
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
function testParseAddressPRNormal() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPRNormalLanguageIndepedent() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'es-PR'});
		
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPRNoZip() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPRShortZip() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPRNoCountry() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPRManyLines() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ\nURB LAS GLADIOLAS\n150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ, URB LAS GLADIOLAS, 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressPROneLine() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A, SAN JUAN, PR 00926-3232, Puerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};


function testParseAddressPRNoDelimiters() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A SAN JUAN PR 00926-3232 Puerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};


function testParseAddressPRFromUS() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressPRFromUSWithCountry() {
	var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A", parsedAddress.streetAddress);
	assertEquals("SAN JUAN", parsedAddress.locality);
	assertEquals("PR", parsedAddress.region);
	assertEquals("00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testFormatAddressPR() {
	var parsedAddress = new Address({
		streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A",
		locality: "SAN JUAN",
		region: "PR",
		postalCode: "00926-3232",
		country: "Puerto Rico",
		countryCode: "PR"
	}, {locale: 'en-PR'});
	
	var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico";
	var formatter = new AddressFmt({locale: 'en-PR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressPRFromUS() {
	var parsedAddress = new Address({
		streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A",
		locality: "SAN JUAN",
		region: "PR",
		postalCode: "00926-3232",
		country: "Puerto Rico",
		countryCode: "PR"
	}, {locale: 'en-US'});
	
	var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
