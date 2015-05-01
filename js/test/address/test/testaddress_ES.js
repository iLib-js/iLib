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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressESNormal() {
	var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Valencia\nEspaña", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avda.General Avilés, 35-37, Bajo", parsedAddress.streetAddress);
	assertEquals("Valencia", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
	assertEquals("46015", parsedAddress.postalCode);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESNoZip() {
	var parsedAddress = new Address("Torre Picasso\nPlaza Pablo Ruiz Picasso 1\nMadrid\nEspaña", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Torre Picasso, Plaza Pablo Ruiz Picasso 1", parsedAddress.streetAddress);
	assertEquals("Madrid", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressESNoCountry() {
	var parsedAddress = new Address("Isabel de Santo Domingo, 6\n50014 - Zaragoza", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Isabel de Santo Domingo, 6", parsedAddress.streetAddress);
	assertEquals("Zaragoza", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
	assertEquals("50014", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESManyLines() {
	var parsedAddress = new Address("Cami de Can Graells\nno. 1-21\n08174\nSant Cugat del Valles\nBarcelona\nEspaña", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Cami de Can Graells, no. 1-21", parsedAddress.streetAddress);
	assertEquals("Sant Cugat del Valles", parsedAddress.locality);
	assertEquals("Barcelona", parsedAddress.region);
	assertEquals("08174", parsedAddress.postalCode);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESOneLine() {
	var parsedAddress = new Address("Calle José Echegaray, 8, Parque Empresarial Madrid-Las Rozas, 28232 - Las Rozas. Madrid, España", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle José Echegaray, 8, Parque Empresarial Madrid-Las Rozas", parsedAddress.streetAddress);
	assertEquals("Las Rozas.", parsedAddress.locality);
	assertEquals("Madrid", parsedAddress.region);
	assertEquals("28232", parsedAddress.postalCode);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tAvda.General\t\t\r Avilés,\r 35-37,\r Bajo\n\t\t\t\r\r46015\r -\r\r \nValencia,\n,\t\tEspaña\n\n\n", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avda.General Avilés, 35-37, Bajo", parsedAddress.streetAddress);
	assertEquals("Valencia", parsedAddress.region);
	assertUndefined(parsedAddress.locality);
	assertEquals("46015", parsedAddress.postalCode);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESNoDelimiters() {
	var parsedAddress = new Address("Calle José Echegaray, 8 Parque Empresarial Madrid-Las Rozas 28232 - Las Rozas Madrid España", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle José Echegaray, 8 Parque Empresarial Madrid-Las Rozas", parsedAddress.streetAddress);
	assertEquals("Las Rozas", parsedAddress.locality);
	assertEquals("Madrid", parsedAddress.region);
	assertEquals("28232", parsedAddress.postalCode);
	assertEquals("España", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESSpecialChars() {
	var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví, València", {locale: 'es-ES'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avda.General Avilés, 35-37, Bajo", parsedAddress.streetAddress);
	assertEquals("Sedaví", parsedAddress.locality);
	assertEquals("València", parsedAddress.region);
	assertEquals("46015", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testParseAddressESFromUS() {
	var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví, València, Spain", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avda.General Avilés, 35-37, Bajo", parsedAddress.streetAddress);
	assertEquals("Sedaví", parsedAddress.locality);
	assertEquals("València", parsedAddress.region);
	assertEquals("46015", parsedAddress.postalCode);
	assertEquals("Spain", parsedAddress.country);
	assertEquals("ES", parsedAddress.countryCode);
};

function testFormatAddressES() {
	var parsedAddress = new Address({
		streetAddress: "Avda.General Avilés, 35-37, Bajo",
		locality: "Sedaví",
		region: "València",
		postalCode: "46015",
		country: "España",
		countryCode: "ES"
	}, {locale: 'es-ES'});
	
	var expected = "Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví València\nEspaña";
	var formatter = new AddressFmt({locale: 'es-ES'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressESFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Avda.General Avilés, 35-37, Bajo",
		locality: "Sedaví",
		region: "València",
		postalCode: "46015",
		country: "Spain",
		countryCode: "ES"
	}, {locale: 'en-US'});
	
	var expected = "Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví València\nSpain";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
