/*
 * testaddress_GN.js - test the address parsing and formatting routines
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
function testParseAddressGNNormal() {
	var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertEquals("CONAKRY", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
        assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNNoZip() {
	var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("CONAKRY", parsedAddress.region);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGNNoCountry() {
	var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
        assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNManyLines() {
	var parsedAddress = new Address("Office de la poste guinéenne\nDirection générale\n001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale, 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNOneLine() {
	var parsedAddress = new Address("Office de la poste guinéenne , Direction générale , 001 BP 2984 , CONAKRY , guinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale, 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNSuperfluousWhitespace() {
	var parsedAddress = new Address("Office de la poste guinéenne\n\n\t\r\t\t\rDirection générale\r\r\t001 BP 2984\r\r\n\nCONAKRY\t\r\n\t\rguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNNoDelimiters() {
	var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY guinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressGNFromUS() {
	var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testFormatAddressGN() {
	var parsedAddress = new Address({
		streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
		region: "CONAKRY",
		postalCode: "1010",
		country: "guinée",
		countryCode: "GN"
	}, {locale: 'fr-GN'});
	
	var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
	var formatter = new AddressFmt({locale: 'fr-GN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGNFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
		region: "CONAKRY",
		postalCode: "1010",
		country: "guinée",
		countryCode: "GN"
	}, {locale: 'en-US'});
	
	var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
