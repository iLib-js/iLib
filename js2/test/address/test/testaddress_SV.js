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


function testParseAddressSVNormal() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVNoZip() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressSVManyLines() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVOneLine() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVSuperfluousWhitespace() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29  \n\t\n CP 1120 - MEJICANOS, SAN SALVADOR\t\n\n EL SALVADOR  \n  \t\t\t", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVNoDelimiters() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja Colonia Universitaria Norte #2 Calle Alcaine #29 CP 1120 - MEJICANOS SAN SALVADOR EL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja Colonia Universitaria Norte #2 Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVSpecialChars() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testParseAddressSVFromUS() {
	var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29", parsedAddress.streetAddress);
	assertEquals("SAN SALVADOR", parsedAddress.region);
	assertEquals("MEJICANOS", parsedAddress.locality);
	assertEquals("CP 1120", parsedAddress.postalCode);
	assertEquals("EL SALVADOR", parsedAddress.country);
	assertEquals("SV", parsedAddress.countryCode);
};

function testFormatAddressSV() {
		var parsedAddress = new Address({
		streetAddress: "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29",
		region: "SAN SALVADOR",
		locality: "MEJICANOS",
		postalCode: "CP 1120",
		country: "EL SALVADOR",
		countryCode: "SV"
	}, {locale: 'es-SV'});
	
	var expected = "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR";
	var formatter = new AddressFmt({locale: 'es-SV'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSVFromUS() {
		var parsedAddress = new Address({
		streetAddress: "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29",
		region: "SAN SALVADOR",
		locality: "MEJICANOS",
		postalCode: "CP 1120",
		country: "EL SALVADOR",
		countryCode: "SV"
	}, {locale: 'es-SV'});
	
	var expected = "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR";
	var formatter = new AddressFmt({locale: 'es-SV'});
	assertEquals(expected, formatter.format(parsedAddress));
};
