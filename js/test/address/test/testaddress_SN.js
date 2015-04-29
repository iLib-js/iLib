/*
 * testaddress_SN.js - test the address parsing and formatting routines
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
function testParseAddressSNNormal() {
	var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR\nSenegal", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("10000", parsedAddress.postalCode);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNNoZip() {
	var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressSNNoCountry() {
	var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNManyLines() {
	var parsedAddress = new Address("La Poste\nDirection de la production\npostale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000\nDAKAR\nSenegal\n\n\n", {locale: 'fr-SN'});
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste, Direction de la production, postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10000", parsedAddress.postalCode);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNOneLine() {
	var parsedAddress = new Address("La Poste , Direction de la production , postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE , 10000, DAKAR , Senegal", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste, Direction de la production, postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10000", parsedAddress.postalCode);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t\tLa Poste\t\t\tDirection de la production postale\t\t\r6 RUE ABDOULAYE SECK MARIE PÉRSINE\t\n10000\n\tDAKAR\n\t Senegal\n\n\n", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10000", parsedAddress.postalCode);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNNoDelimiters() {
	var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE 12500 DAKAR Senegal", {locale: 'fr-SN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSNFromUS() {
	var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR\nSenegal", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE", parsedAddress.streetAddress);
	assertEquals("DAKAR", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("10000", parsedAddress.postalCode);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testFormatAddressSN() {
	var parsedAddress = new Address({
		streetAddress: "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE",
		locality: "DAKAR",
		country: "Senegal",
		countryCode: "SN"
	}, {locale: 'fr-SN'});
	
	var expected = "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal";
	var formatter = new AddressFmt({locale: 'fr-SN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSNFromUS() {
	var parsedAddress = new Address({
		streetAddress: "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE",
		locality: "DAKAR",
		country: "Senegal",
		countryCode: "SN"
	}, {locale: 'en-US'});
	
	var expected = "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressSN1() {
	var parsedAddress = new Address("Monsieur Amadou Diop, Résidence Fallou Ndiaye, Appartement 12, 12 Avenue Cheikh Anta Diop, 12500 Dakar, SENEGAL");
	assertNotUndefined(parsedAddress);
	assertEquals("Monsieur Amadou Diop, Résidence Fallou Ndiaye, Appartement 12, 12 Avenue Cheikh Anta Diop", parsedAddress.streetAddress);
	assertEquals("Dakar", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("SENEGAL", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};

function testParseAddressSN2() {
	var parsedAddress = new Address("American Embassy Dakar, Route des Almadies, Dakar, Senegal");
	assertNotUndefined(parsedAddress);
	assertEquals("American Embassy Dakar, Route des Almadies", parsedAddress.streetAddress);
	assertEquals("Dakar", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Senegal", parsedAddress.country);
	assertEquals("SN", parsedAddress.countryCode);
};
function testFormatAddressSN1() {
	var parsedAddress = new Address({
		streetAddress: "Monsieur Amadou DIOP, Appartement 12, Résidence Fallou Ndiaye",
		locality: "DAKAR",
		postalCode: "12500",
		country: "Senegal",
		countryCode: "SN"
	}, {locale: 'en-US'});
	
	var expected = "Monsieur Amadou DIOP, Appartement 12, Résidence Fallou Ndiaye\n12500 DAKAR\nSenegal";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
