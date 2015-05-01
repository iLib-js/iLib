/*
 * testaddress_PA.js - test the address parsing and formatting routines
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
function testParseAddressPANormal() {
	var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle 52 y Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPANoZip() {
	var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle 52 y Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressPANoCountry() {
	var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle 52 y Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPAManyLines() {
	var parsedAddress = new Address("Calle 52 y\nRicardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Calle 52 y, Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPAOneLine() {
	var parsedAddress = new Address("Calle 52 y , Ricardo Arias. , Area Bancaria , Panama City , Panama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Calle 52 y, Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPASuperfluousWhitespace() {
	var parsedAddress = new Address("Calle 52 y\n\n\t\r\t\t\rRicardo Arias.\r\r\r\t\t\r\n\n\nArea Bancaria\t\r\r\rPanama City\t\t\rPanama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Calle 52 y, Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPAFromUS() {
	var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Calle 52 y Ricardo Arias.", parsedAddress.streetAddress);
	assertEquals("Area Bancaria", parsedAddress.locality);
	assertEquals("Panama City", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Panama", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testFormatAddressPA() {
	var parsedAddress = new Address({
		streetAddress: "Calle 52 y Ricardo Arias.",
		locality: "Area Bancaria",
		postalCode: "1010",
		region: "Panama City",
		country: "Panama",
		countryCode: "PA"
	}, {locale: 'es-PA'});
	
	var expected = "Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama";
	var formatter = new AddressFmt({locale: 'es-PA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressPAFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Calle 52 y Ricardo Arias.",
		locality: "Area Bancaria",
		postalCode: "1010",
		region: "Panama City",
		country: "Panama",
		countryCode: "PA"
	}, {locale: 'en-US'});
	
	var expected = "Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressPANormal1() {
	var parsedAddress = new Address("MARTÍN GUTIERREZ,Via Israel 3,0424,VOLCÁN,Chiriquí,PANAMA", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MARTÍN GUTIERREZ, Via Israel 3, 0424", parsedAddress.streetAddress);
	assertEquals("VOLCÁN", parsedAddress.locality);
	assertEquals("Chiriquí", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PANAMA", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPANormal2() {
	var parsedAddress = new Address("Parque Industrial Milla 8,Ciudad de Panamá,Panamá,PANAMA", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Parque Industrial Milla 8", parsedAddress.streetAddress);
	assertEquals("Ciudad de Panamá", parsedAddress.locality);
	assertEquals("Panamá", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PANAMA", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};

function testParseAddressPANormal3() {
	var parsedAddress = new Address("Edificio Plaza Fidanque, Piso 2,P.O Box 0816-01349,Ciudad de Panamá,Panamá,PANAMA", {locale: 'es-PA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Edificio Plaza Fidanque, Piso 2, P.O Box 0816-01349", parsedAddress.streetAddress);
	assertEquals("Ciudad de Panamá", parsedAddress.locality);
	assertEquals("Panamá", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PANAMA", parsedAddress.country);
	assertEquals("PA", parsedAddress.countryCode);
};
