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



function testParseAddressCRNormal() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCRNoZip() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
	assertEquals("40501", parsedAddress.postalCode);
};

function testParseAddressCRManyLines() {
	var parsedAddress = new ilib.Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, Ca 15 Av 37 # 55\nHeredia, San Rafael, San Rafael\n40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCROneLine() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55\n\t\n Heredia, San Rafael, San Rafael\t\n\n 40501, COSTA RICA  \n  \t\t\t", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCRNoDelimiters() {
	var parsedAddress = new ilib.Address("SEÑOR Gabriel Garcia Marquez Ca 15 Av 37 # 55 Heredia San Rafael, San Rafael 40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR Gabriel Garcia Marquez Ca 15 Av 37 # 55 Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCRSpecialChars() {
	var parsedAddress = new ilib.Address("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'es-CR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testParseAddressCRFromUS() {
	var parsedAddress = new ilib.Address("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia, San Rafael, San Rafael, 40501, COSTA RICA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia", parsedAddress.streetAddress);
	assertEquals("San Rafael", parsedAddress.region);
	assertEquals("San Rafael", parsedAddress.locality);
	assertEquals("40501", parsedAddress.postalCode);
	assertEquals("COSTA RICA", parsedAddress.country);
	assertEquals("CR", parsedAddress.countryCode);
};

function testFormatAddressCR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia",
		locality: "San Rafael",
		region: "San Rafael",
		country: "COSTA RICA",
		countryCode: "CR"
	}, {locale: 'es-CR'});
	
	var expected = "Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia\nSan Rafael, San Rafael\nCOSTA RICA";
	var formatter = new ilib.AddressFmt({locale: 'es-CR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia",
		country: "COSTA RICA",
		region: "San Rafael",
		locality: "San Rafael",
		countryCode: "CR"
	}, {locale: 'en-US'});
	
	var expected = "Señor Carlos Torres, Ca 15 Av 37 # 55, Heredia\nSan Rafael, San Rafael\nCOSTA RICA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
