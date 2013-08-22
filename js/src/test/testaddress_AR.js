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

// TODO: put in Argentina addresses here

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Luis Escala Piedras 623\nPiso 2, depto 4\nC1070AAM, Capital Federa\nARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Escala Piedras 623", parsedAddress.streetAddress);
	assertEquals("Piso 2, depto 4", parsedAddress.locality);
	assertEquals("Capital Federa" ,parsedAddress.region);
	assertEquals("C1070AAM ", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Luis Escala Piedras 623\nPiso 2, depto 4\nCapital Federa", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Berliner Straße 111", parsedAddress.streetAddress);
	assertEquals("Ratingen", parsedAddress.locality);
	assertEquals("Capital Federa" ,parsedAddress.region);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address(" At. Sr. Hiro Gordo-Globo Sumo Informática S.A. Calle 39 No 1540\nB1000TBU San Sebastian", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("At. Sr. Hiro Gordo-Globo Sumo Informática S.A. Calle 39 No 1540", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("San Sebastian" ,parsedAddress.region);
	assertEquals("B1000TBU", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Prof. Carlo Francis Xavier\nEscuela Rural 45 \nX5187XAB San Clemente\nARGENTINA\n\n\n", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prof. Carlo Francis Xavier, Escuela Rural 45", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("San Clemente", parsedAddress.region);
	assertEquals("X5187XAB", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("ABC-Strasse 19, X5187XAB San Sebastian, ARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ABC-Strasse 19", parsedAddress.streetAddress);
	assertEquals("San Sebastian", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("X5187XAB", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tAltrottstraße 31\n\n\nPartner Port SAP\n   \t\nX5187XAB\n   \r\t\n Walldorf/Baden\n   \t \t \t ARGENTINA\n\n\n", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Altrottstraße 31, Partner Port SAP", parsedAddress.streetAddress);
	assertEquals("Walldorf/Baden", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("X5187XAB", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("ABC-Strasse 19 X5187XAB  San Luis ARGENTINA", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ABC-Strasse 19", parsedAddress.streetAddress);
	assertEquals("San Luis", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("X5187XAB ", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Geschäftsstelle Lützowplatz 15\n(Eingang Einemstraße 24)\nX5187XAB Würtzheim", {locale: 'es-AR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Geschäftsstelle Lützowplatz 15, (Eingang Einemstraße 24)", parsedAddress.streetAddress);
	assertEquals("Würtzheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("X5187XAB", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Dienerstrasse 12\nX5187XAB  San Luis\nARGENTINA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dienerstrasse 12", parsedAddress.streetAddress);
	assertEquals("San Luis", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("X5187XAB ", parsedAddress.postalCode);
	assertEquals("ARGENTINA", parsedAddress.country);
	assertEquals("AR", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Dienerstrasse 12",
		locality: "Entre Ríos",
		postalCode: "X5187XAB ",
		country: "ARGENTINA",
		countryCode: "AT"
	}, {locale: 'es-AR'});
	
	var expected = "Dienerstrasse 12\nX5187XAB  Entre Ríos\nARGENTINA";
	var formatter = new ilib.AddressFmt({locale: 'es-AR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Dienerstrasse 12",
		locality: "San Luis",
		postalCode: "X5187XAB ",
		country: "ARGENTINA",
		countryCode: "AT"
	}, {locale: 'en-US'});
	
	var expected = "Dienerstrasse 12\nX5187XAB  San Luis\nARGENTINA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
