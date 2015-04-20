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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAddressECNormal() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECNoZip() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, QUITO, Ecuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressECManyLines() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V, QUITO\nEcuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECOneLine() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECSuperfluousWhitespace() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito  \n\t\n P0133V, QUITO\t\n\n Ecuador  \n  \t\t\t", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECNoDelimiters() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín Empresa Nacional de Correos Succursal No 21– Quito  P0133V QUITO Ecuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín Empresa Nacional de Correos Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECSpecialChars() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testParseAddressECFromUS() {
	var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("QUITO", parsedAddress.locality);
	assertEquals("P0133V", parsedAddress.postalCode);
	assertEquals("Ecuador", parsedAddress.country);
	assertEquals("EC", parsedAddress.countryCode);
};

function testFormatAddressEC() {
	var parsedAddress = new Address({
		streetAddress: "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito",
		locality: "QUITO",
		postalCode: "P0133V",
		country: "Ecuador",
		countryCode: "EC"
	}, {locale: 'es-EC'});
	
	var expected = "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V\nQUITO\nEcuador";
	var formatter = new AddressFmt({locale: 'es-EC'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressECFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito",
		locality: "QUITO",
		postalCode: "P0133V",
		country: "Ecuador",
		countryCode: "EC"
	}, {locale: 'es-EC'});
	
	var expected = "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V\nQUITO\nEcuador";
	var formatter = new AddressFmt({locale: 'es-EC'});
	assertEquals(expected, formatter.format(parsedAddress));
};
