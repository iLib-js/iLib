/*
 * testaddress.js - test the address parsing and formatting routines
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



function testParseAddressCONormal() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCONoZip() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCOManyLines() {
	var parsedAddress = new ilib.Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCOOneLine() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCOSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702  \n\t\n ARACATACA–MAGDALENA\t\n\n COLOMBIA  \n  \t\t\t", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCONoDelimiters() {
	var parsedAddress = new ilib.Address("SEÑOR Gabriel Garcia Marquez SOCIEDAD DE ESCRITORES COLOMBIANOS Av. 15 no 80–13 oficina 702 ARACATACA–MAGDALENA COLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR Gabriel Garcia Marquez SOCIEDAD DE ESCRITORES COLOMBIANOS Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCOSpecialChars() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressCOFromUS() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ARACATACA–MAGDALENA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("COLOMBIA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testFormatAddressCO() {
	var parsedAddress = new ilib.Address({
		streetAddress: "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702",
		locality: "ARACATACA–MAGDALENA",
		country: "COLOMBIA",
		countryCode: "CO"
	}, {locale: 'es-CO'});
	
	var expected = "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA";
	var formatter = new ilib.AddressFmt({locale: 'es-CO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCOFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702",
		country: "COLOMBIA",
		locality: "ARACATACA–MAGDALENA",
		countryCode: "CO"
	}, {locale: 'en-US'});
	
	var expected = "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
