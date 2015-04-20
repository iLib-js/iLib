/*
 * testaddress_VE.js - test the address parsing and formatting routines
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

function testParseAddressVENormal() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVENoZip() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS D.F.\nVenezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressVENoCountry() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVEManyLines() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV.\nFUERZAS ARMADAS TORRE\nSAN JOSE\nENTRADA B PISO 5\nAPARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE, SAN JOSE, ENTRADA B PISO 5, APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVEOneLine() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. , FUERZAS ARMADAS TORRE , SAN JOSE , ENTRADA B PISO 5 , APARTAMENTO 20 , CARACAS , 1010 , D.F. , Venezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE, SAN JOSE, ENTRADA B PISO 5, APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVESuperfluousWhitespace() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV.\n\n\t\rFUERZAS ARMADAS TORRE\t\t\rSAN JOSE\r\r\rENTRADA B PISO 5\t\t\rAPARTAMENTO 20\n\n\nCARACAS\t\t\r1010\r\r\rD.F.\t\t\rVenezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE SAN JOSE ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVENoDelimiters() {
	var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20 CARACAS 1010 D.F., Venezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testParseAddressVEFromUS() {
	var parsedAddress = new Address("Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20", parsedAddress.streetAddress);
	assertEquals("CARACAS", parsedAddress.locality);
	assertEquals("D.F.", parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("Venezuela", parsedAddress.country);
	assertEquals("VE", parsedAddress.countryCode);
};

function testFormatAddressVE() {
	var parsedAddress = new Address({
		streetAddress: "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20",
		locality: "CARACAS",
		postalCode: "1010",
		region: "D.F.",
		country: "Venezuela",
		countryCode: "VE"
	}, {locale: 'es-VE'});
	
	var expected = "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela";
	var formatter = new AddressFmt({locale: 'es-VE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressVEFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20",
		locality: "CARACAS",
		postalCode: "1010",
		region: "D.F.",
		country: "Venezuela",
		countryCode: "VE"
	}, {locale: 'en-US'});
	
	var expected = "Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
