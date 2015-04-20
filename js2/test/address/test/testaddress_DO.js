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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAddressDONormal() {
	var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDONoZip() {
	var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
	assertEquals("11903", parsedAddress.postalCode);
};

function testParseAddressDOManyLines() {
	var parsedAddress = new Address("Dominica L. Hernandez\nC/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nRepública Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDOOneLine() {
	var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDOSuperfluousWhitespace() {
	var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas  \n\t\n 11903 SANTO DOMINGO\t\n\n República Dominicana  \n  \t\t\t", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDONoDelimiters() {
	var parsedAddress = new Address("Dominica L. Hernandez C/45 # 33 Katanga, Los Minas 11903 SANTO DOMINGO República Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez C/45 # 33 Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDOSpecialChars() {
	var parsedAddress = new Address("Instituto Postal Dominicano, C/Héroes de Luperón esq. Rafael Damirón, Centro de los Héroes, 10101 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Instituto Postal Dominicano, C/Héroes de Luperón esq. Rafael Damirón", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Centro de los Héroes", parsedAddress.locality);
	assertEquals("10101", parsedAddress.postalCode);
	assertEquals("República Dominicana", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testParseAddressDOFromUS() {
	var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, Dominican Republic", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Dominica L. Hernandez, C/45 # 33, Katanga", parsedAddress.streetAddress);
	assertEquals("SANTO DOMINGO", parsedAddress.region);
	assertEquals("Los Minas", parsedAddress.locality);
	assertEquals("11903", parsedAddress.postalCode);
	assertEquals("Dominican Republic", parsedAddress.country);
	assertEquals("DO", parsedAddress.countryCode);
};

function testFormatAddressDO() {
	var parsedAddress = new Address({
		streetAddress: "Dominica L. Hernandez, C/45 # 33",
		region: "SANTO DOMINGO",
		locality: "Katanga, Los Minas",
		postalCode: "11903",
		country: "República Dominicana",
		countryCode: "DO"
	}, {locale: 'es-DO'});
	
	var expected = "Dominica L. Hernandez, C/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nRepública Dominicana";
	var formatter = new AddressFmt({locale: 'es-DO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressDOFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Dominica L. Hernandez, C/45 # 33",
		region: "SANTO DOMINGO",
		locality: "Katanga, Los Minas",
		postalCode: "11903",
		country: "Dominican Republic",
		countryCode: "DO"
	}, {locale: 'en-US'});
	
	var expected = "Dominica L. Hernandez, C/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nDominican Republic";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
