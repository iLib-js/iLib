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

// TODO: get some Luxembourg addresses

function testParseAddressLUNormal() {
	var parsedAddress = new ilib.Address("M. Andrée TROMMER BP 501\nL-1050 Luxembourg\nLUXEMBOURG", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Andrée TROMMER BP 501", parsedAddress.streetAddress);
	assertEquals("Luxembourg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-1050", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};


function testParseAddressLUotherNormal() {
	var parsedAddress = new ilib.Address("M. Jacques Muller 71, route de Longwy\nL-4750 PETANGE\nLUXEMBOURG", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Jacques Muller 71, route de Longwy", parsedAddress.streetAddress);
	assertEquals("PETANGE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-4750", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};


function testParseAddressLUNoZip() {
	var parsedAddress = new ilib.Address("M. Andrée TROMMER BP 5019\nLuxembourg\nLUXEMBOURG", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Andrée TROMMER BP 5019", parsedAddress.streetAddress);
	assertEquals("Luxembourg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLUManyLines() {
	var parsedAddress = new ilib.Address("M. Jacques Muller 71\nroute\nde\nLongwy\nL-4750\nPETANGE\nLUXEMBOURG\n\n\n", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Jacques Muller 71, route, de, Longwy", parsedAddress.streetAddress);
	assertEquals("PETANGE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-4750", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};

function testParseAddressLUOneLine() {
	var parsedAddress = new ilib.Address("M. Jacques Muller 71, route, de, Longwy, L-4750, PETANGE, LUXEMBOURG", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Jacques Muller 71, route, de, Longwy", parsedAddress.streetAddress);
	assertEquals("PETANGE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-4750", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};

function testParseAddressLUSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("M. Jacques Muller 71\n\troute\n\tde\tLongwy\t\nL-4750\n\tPETANGE\n\tLUXEMBOURG\n\t", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Jacques Muller 71, route, de Longwy", parsedAddress.streetAddress);
	assertEquals("PETANGE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-4750", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};

function testParseAddressLUNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Andrée TROMMER BP 5019 L-1050 Luxembourg LUXEMBOURG", {locale: 'fr-LU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Andrée TROMMER BP 5019", parsedAddress.streetAddress);
	assertEquals("Luxembourg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-1050", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};


function testParseAddressLUFromUS() {
	var parsedAddress = new ilib.Address("M. Andrée TROMMER BP 501\nL-1050 Luxembourg\nLUXEMBOURG", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Andrée TROMMER BP 501", parsedAddress.streetAddress);
	assertEquals("Luxembourg", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("L-1050", parsedAddress.postalCode);
	assertEquals("LUXEMBOURG", parsedAddress.country);
	assertEquals("LU", parsedAddress.countryCode);
};

function testFormatAddressLU() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Andrée TROMMER BP 5019",
		locality: "Luxembourg",
		postalCode: "L-1050",
		country: "LUXEMBOURG",
		countryCode: "LU"
	}, {locale: 'fr-LU'});
	
	var expected = "M. Andrée TROMMER BP 5019\nL-1050 Luxembourg\nLUXEMBOURG";
	var formatter = new ilib.AddressFmt({locale: 'fr-LU'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLUFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Andrée TROMMER BP 5019",
		locality: "Luxembourg",
		postalCode: "L-1050",
		country: "LUXEMBOURG",
		countryCode: "LU"
	}, {locale: 'en-US'});
	
	var expected = "M. Andrée TROMMER BP 5019\nL-1050 Luxembourg\nLUXEMBOURG";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
