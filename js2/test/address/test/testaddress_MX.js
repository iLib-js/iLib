/*
 * testaddress_MX.js - test the address parsing and formatting routines for Mexico
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
function testParseAddressMXNormal() {
	var parsedAddress = new Address("Paseo de la Reforma #115, Piso 22\nCol. Lomas de Chapultepec\n11000 México D.F.\nMéxico", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paseo de la Reforma #115, Piso 22, Col. Lomas de Chapultepec", parsedAddress.streetAddress);
	assertEquals("México", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXNoZip() {
	var parsedAddress = new Address("20 de Noviembre 855 Sur\nObispado\nMonterrey, NL\nMéxico", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 de Noviembre 855 Sur, Obispado", parsedAddress.streetAddress);
	assertEquals("Monterrey", parsedAddress.locality);
	assertEquals("NL", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXNoCountry() {
	var parsedAddress = new Address("AV RIO MIXCOAC N° 125 , INSURGENTES MIXCOAC , C.P 03920 , BENITO JUAREZ , DF", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("AV RIO MIXCOAC N° 125, INSURGENTES MIXCOAC", parsedAddress.streetAddress);
	assertEquals("BENITO JUAREZ", parsedAddress.locality);
	assertEquals("DF", parsedAddress.region);
	assertEquals("C.P 03920", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXManyLines() {
	var parsedAddress = new Address("Colegio Niños de México\nQueretaro 151\nRoma\nC.P 06700\nCuauhtemoc\nDF\nMéxico", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Colegio Niños de México, Queretaro 151, Roma", parsedAddress.streetAddress);
	assertEquals("Cuauhtemoc", parsedAddress.locality);
	assertEquals("DF", parsedAddress.region);
	assertEquals("C.P 06700", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXOneLine() {
	var parsedAddress = new Address("Vicente Guerrero S/N , Centro , C.P 23450 , Cabo San Lucas , BCS , México", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Vicente Guerrero S/N, Centro", parsedAddress.streetAddress);
	assertEquals("Cabo San Lucas", parsedAddress.locality);
	assertEquals("BCS", parsedAddress.region);
	assertEquals("C.P 23450", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tVicente     Guerrero \tS/N\n\t\tCentro\t\n C.P\t\r 23450\n\t\t\r Cabo   \t\r San Lucas\n\n\n\tBCS\r\t\nMéxico\n\n\n", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Vicente Guerrero S/N, Centro", parsedAddress.streetAddress);
	assertEquals("Cabo San Lucas", parsedAddress.locality);
	assertEquals("BCS", parsedAddress.region);
	assertEquals("C.P 23450", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXNoDelimiters() {
	var parsedAddress = new Address("Vicente Guerrero S/N Centro C.P 23450 Cabo San Lucas BCS México", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Vicente Guerrero S/N Centro", parsedAddress.streetAddress);
	assertEquals("Cabo San Lucas", parsedAddress.locality);
	assertEquals("BCS", parsedAddress.region);
	assertEquals("C.P 23450", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXSpecialChars() {
	var parsedAddress = new Address("Calle Yucatán No. 45\nC.P 97751 Chichén Itzá, Yucatán\nMéxico", {locale: 'es-MX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle Yucatán No. 45", parsedAddress.streetAddress);
	assertEquals("Chichén Itzá", parsedAddress.locality);
	assertEquals("Yucatán", parsedAddress.region);
	assertEquals("C.P 97751", parsedAddress.postalCode);
	assertEquals("México", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testParseAddressMXFromUS() {
	var parsedAddress = new Address("Vicente Guerrero S/N , Centro\nC.P 23450 Cabo San Lucas, BCS\nMexico", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Vicente Guerrero S/N, Centro", parsedAddress.streetAddress);
	assertEquals("Cabo San Lucas", parsedAddress.locality);
	assertEquals("BCS", parsedAddress.region);
	assertEquals("C.P 23450", parsedAddress.postalCode);
	assertEquals("Mexico", parsedAddress.country);
	assertEquals("MX", parsedAddress.countryCode);
};

function testFormatAddressMX() {
	var parsedAddress = new Address({
		streetAddress: "Vicente Guerrero S/N, Centro",
		locality: "Cabo San Lucas",
		region: "BCS",
		postalCode: "C.P 23450",
		country: "México",
		countryCode: "MX"
	}, {locale: 'es-MX'});
	
	var expected = "Vicente Guerrero S/N, Centro\nC.P 23450 Cabo San Lucas, BCS\nMéxico";
	var formatter = new AddressFmt({locale: 'es-MX'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMXFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Vicente Guerrero S/N, Centro",
		locality: "Cabo San Lucas",
		region: "BCS",
		postalCode: "C.P 23450",
		country: "Mexico",
		countryCode: "MX"
	}, {locale: 'en-US'});
	
	var expected = "Vicente Guerrero S/N, Centro\nC.P 23450 Cabo San Lucas, BCS\nMexico";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
