/*
 * testaddress_GA.js - test the address parsing and formatting routines
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

function testParseAddressGANormal() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGANoZip() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGANoCountry() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGAManyLines() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service\nde l'organisation et\nde l'exploitation du réseau postal\nBP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Direction de la Poste Service, de l'organisation et, de l'exploitation du réseau postal, BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGAOneLine() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service , de l'organisation et , de l'exploitation du réseau postal , BP 20000 , LIBREVILLE , GABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Direction de la Poste Service, de l'organisation et, de l'exploitation du réseau postal, BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGASuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service\r\r\tde l'organisation et\t\t\tde l'exploitation du réseau postal\t\t\rBP 20000\r\r\n\nLIBREVILLE\t\r\n\t\rGABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGANoDelimiters() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000 LIBREVILLE GABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testParseAddressGAFromUS() {
	var parsedAddress = new ilib.Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000", parsedAddress.streetAddress);
	assertEquals("LIBREVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GABON", parsedAddress.country);
	assertEquals("GA", parsedAddress.countryCode);
};

function testFormatAddressGA() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000",
		locality: "LIBREVILLE",
		postalCode: "1010",
		country: "GABON",
		countryCode: "GA"
	}, {locale: 'fr-GA'});
	
	var expected = "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON";
	var formatter = new ilib.AddressFmt({locale: 'fr-GA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGAFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000",
		locality: "LIBREVILLE",
		postalCode: "1010",
		country: "GABON",
		countryCode: "GA"
	}, {locale: 'en-US'});
	
	var expected = "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
