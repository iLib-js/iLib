/*
 * testaddress_PE.js - test the address parsing and formatting routines
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

function testParseAddressPENormal() {
	var parsedAddress = new ilib.Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Catalina Huanca 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPENoZip() {
	var parsedAddress = new ilib.Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Catalina Huanca 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressPENoCountry() {
	var parsedAddress = new ilib.Address("Catalina Huanca 110 San Isidro\nLima 27", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Catalina Huanca 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPEManyLines() {
	var parsedAddress = new ilib.Address("Catalina Huanca\n110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Catalina Huanca, 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPEOneLine() {
	var parsedAddress = new ilib.Address("Catalina Huanca , 110 San Isidro , Lima 27 , PERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Catalina Huanca, 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPESuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Catalina Huanca\n\n\t\r\t\t\r110 San Isidro\r\r\n\nLima 27\t\r\n\t\rPERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Catalina Huanca, 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPENoDelimiters() {
	var parsedAddress = new ilib.Address("Catalina Huanca 110 San Isidro Lima 27 PERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Catalina Huanca 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testParseAddressPEFromUS() {
	var parsedAddress = new ilib.Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Catalina Huanca 110 San Isidro", parsedAddress.streetAddress);
	assertEquals("Lima 27", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("PERU", parsedAddress.country);
	assertEquals("PE", parsedAddress.countryCode);
};

function testFormatAddressPE() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Catalina Huanca 110 San Isidro",
		locality: "Lima 27",
		postalCode: "1010",
		country: "PERU",
		countryCode: "PE"
	}, {locale: 'es-PE'});
	
	var expected = "Catalina Huanca 110 San Isidro\nLima 27\nPERU";
	var formatter = new ilib.AddressFmt({locale: 'es-PE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressPEFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Catalina Huanca 110 San Isidro",
		locality: "Lima 27",
		postalCode: "1010",
		country: "PERU",
		countryCode: "PE"
	}, {locale: 'en-US'});
	
	var expected = "Catalina Huanca 110 San Isidro\nLima 27\nPERU";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
