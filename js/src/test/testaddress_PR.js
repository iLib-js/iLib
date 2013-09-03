/*
 * testaddress_PR.js - test the address parsing and formatting routines for Mexico
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

function testParseAddressNormal() {
var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A SAN JUAN PR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A SAN JUAN\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A SAN JUAN PR 00926-3232", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ\nURB LAS GLADIOLAS\n150\nCALLE A\nSAN JUAN\nPR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ, URB LAS GLADIOLAS, 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ , URB LAS GLADIOLAS , 150 , CALLE A , SAN JUAN , PR 00926-3232 , Puerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ, URB LAS GLADIOLAS, 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};


function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A SAN JUAN PR 00926-3232 Puerto Rico", {locale: 'en-PR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};


function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A SAN JUAN PR 00926-3232\nPuerto Rico", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150", parsedAddress.streetAddress);
	assertEquals("CALLE A", parsedAddress.locality);
	assertEquals("SAN JUAN", parsedAddress.region);
	assertEquals("PR 00926-3232", parsedAddress.postalCode);
	assertEquals("Puerto Rico", parsedAddress.country);
	assertEquals("PR", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150",
		locality: "CALLE A",
		region: "SAN JUAN",
		postalCode: "PR 00926-3232",
		country: "Puerto Rico",
		countryCode: "PR"
	}, {locale: 'en-PR'});
	
	var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A SAN JUAN PR 00926-3232\nPuerto Rico";
	var formatter = new ilib.AddressFmt({locale: 'en-PR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150",
		locality: "CALLE A",
		region: "SAN JUAN",
		postalCode: "PR 00926-3232",
		country: "Puerto Rico",
		countryCode: "PR"
	}, {locale: 'en-US'});
	
	var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nPR 00926-3232 CALLE A SAN JUAN\nPuerto Rico";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
