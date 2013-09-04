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



function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
	assertEquals("40501", parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, Ca 15 Av 37 # 55\nHeredia, San Rafael, San Rafael\n40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55\n\t\n Heredia, San Rafael, San Rafael\t\n\n 40501, COSTA RICA  \n  \t\t\t", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("SEÑOR Gabriel Garcia Marquez Ca 15 Av 37 # 55 Heredia San Rafael, San Rafael 40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR Gabriel Garcia Marquez Ca 15 Av 37 # 55", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, Ca 15 Av 37 # 55", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CO", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Señor Carlos Torres, Ca 15 Av 37 # 55",
		locality: "Heredia, San Rafael",
		region: "San Rafael",
		country: "COSTA RICA",
		countryCode: "CO"
	}, {locale: 'es-CO'});
	
	var expected = "Señor Carlos Torres, Ca 15 Av 37 # 55\nHeredia, San Rafael, San Rafael\n40501, COSTA RICA";
	var formatter = new ilib.AddressFmt({locale: 'es-CO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Señor Carlos Torres, Ca 15 Av 37 # 55",
		country: "COSTA RICA",
		region: "San Rafael",
		locality: "Heredia, San Rafael",
		countryCode: "CO"
	}, {locale: 'en-US'});
	
	var expected = "Señor Carlos Torres, Ca 15 Av 37 # 55\nHeredia, San Rafael, San Rafael\n40501, COSTA RICA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
