/*
 * testaddress_GN.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertEquals("CONAKRY", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
        assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("CONAKRY", parsedAddress.region);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
        assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne\nDirection générale\n001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale, 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne , Direction générale , 001 BP 2984 , CONAKRY , guinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale, 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne\n\n\t\r\t\t\rDirection générale\r\r\t001 BP 2984\r\r\n\nCONAKRY\t\r\n\t\rguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Office de la poste guinéenne, Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY guinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office de la poste guinéenne Direction générale 001 BP 2984", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
        assertEquals("CONAKRY", parsedAddress.region);  
	assertUndefined(parsedAddress.postalCode);
	assertEquals("guinée", parsedAddress.country);
	assertEquals("GN", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
		region: "CONAKRY",
		postalCode: "1010",
		country: "guinée",
		countryCode: "GN"
	}, {locale: 'fr-GN'});
	
	var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
	var formatter = new ilib.AddressFmt({locale: 'fr-GN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
		region: "CONAKRY",
		postalCode: "1010",
		country: "guinée",
		countryCode: "GN"
	}, {locale: 'en-US'});
	
	var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
