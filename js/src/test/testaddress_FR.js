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

function testParseAddressFRNormal() {
	var parsedAddress = new ilib.Address("38 avenue de l‘Opéra\n75002 Paris\nFrance", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("38 avenue de l‘Opéra", parsedAddress.streetAddress);
	assertEquals("Paris", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("75002", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRNoZip() {
	var parsedAddress = new ilib.Address("80 rue Camille Desmoulins\nIssy-les-Moulineaux\nFrance", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("80 rue Camille Desmoulins", parsedAddress.streetAddress);
	assertEquals("Issy-les-Moulineaux", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressFRNoCountry() {
	var parsedAddress = new ilib.Address("38 avenue de l‘Opéra\n75002 Paris", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("38 avenue de l‘Opéra", parsedAddress.streetAddress);
	assertEquals("Paris", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("75002", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRCedex() {
	var parsedAddress = new ilib.Address("38 avenue de l‘Opéra\n75002 Paris cedex 9\nFrance", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("38 avenue de l‘Opéra", parsedAddress.streetAddress);
	assertEquals("Paris", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("75002 cedex 9", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRManyLines() {
	var parsedAddress = new ilib.Address("Technoparc de l'Aubinière\n3, avenie des Améthystes\n44300\nNantes\nFrance", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Technoparc de l'Aubinière, 3, avenie des Améthystes", parsedAddress.streetAddress);
	assertEquals("Nantes", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44300", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFROneLine() {
	var parsedAddress = new ilib.Address("4, Avenue Pablo Picasso, 92024 Nanterre, France", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("4, Avenue Pablo Picasso", parsedAddress.streetAddress);
	assertEquals("Nanterre", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("92024", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tTechnoparc de l'Aubinière\n  \t \t \t  3, avenie des Améthystes\n\n\t \t \n44300 \t\r \n       Nantes\t\nFrance \r\r\t \t \n\n\n", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Technoparc de l'Aubinière, 3, avenie des Améthystes", parsedAddress.streetAddress);
	assertEquals("Nantes", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44300", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRNoDelimiters() {
	var parsedAddress = new ilib.Address("4 Avenue Pablo Picasso 92024 Nanterre France", {locale: 'fr-FR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("4 Avenue Pablo Picasso", parsedAddress.streetAddress);
	assertEquals("Nanterre", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("92024", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testParseAddressFRFromUS() {
	var parsedAddress = new ilib.Address("Z.I. de Courtaboeuf\n1, avenue du Canada\n91947 Les Ulis\nFrance", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Z.I. de Courtaboeuf, 1, avenue du Canada", parsedAddress.streetAddress);
	assertEquals("Les Ulis", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("91947", parsedAddress.postalCode);
	assertEquals("France", parsedAddress.country);
	assertEquals("FR", parsedAddress.countryCode);
};

function testFormatAddressFR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "38 avenue de l‘Opéra",
		locality: "Paris",
		postalCode: "75002",
		country: "France",
		countryCode: "FR"
	}, {locale: 'fr-FR'});
	
	var expected = "38 avenue de l‘Opéra\n75002 Paris\nFrance";
	var formatter = new ilib.AddressFmt({locale: 'fr-FR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "38 avenue de l‘Opéra",
		locality: "Paris",
		postalCode: "75002",
		country: "France",
		countryCode: "FR"
	}, {locale: 'en-US'});
	
	var expected = "38 avenue de l‘Opéra\n75002 Paris\nFrance";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
