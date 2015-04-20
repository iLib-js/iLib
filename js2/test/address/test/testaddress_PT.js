/*
 * testaddress_PT.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressPTNormal() {
	var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTNoZip() {
	var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\nParede\nPortugal", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressPTNoCountry() {
	var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTManyLines() {
	var parsedAddress = new Address("Augusto Rodrigues\nAvenida António Arroio 5\n\n2775-153\nParede\nPortugal\n\n\n", {locale: 'pt-PT'});
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues, Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTOneLine() {
	var parsedAddress = new Address("Augusto Rodrigues , Avenida António Arroio 5 , 2775-153 , Parede , Portugal", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues, Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tAugusto Rodrigues\n\t\t\tAvenida António Arroio 5\n\t\n2775-153\t\nParede\n\t Portugal\n\n\n", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues, Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTNoDelimiters() {
	var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5 2775-153 Parede Portugal", {locale: 'pt-PT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testParseAddressPTFromUS() {
	var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Augusto Rodrigues Avenida António Arroio 5", parsedAddress.streetAddress);
	assertEquals("Parede", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2775-153", parsedAddress.postalCode);
	assertEquals("Portugal", parsedAddress.country);
	assertEquals("PT", parsedAddress.countryCode);
};

function testFormatAddressPT() {
	var parsedAddress = new Address({
		streetAddress: "Augusto Rodrigues Avenida António Arroio 5",
		locality: "Parede",
		postalCode: "2775-153",
		country: "Portugal",
		countryCode: "PT"
	}, {locale: 'pt-PT'});
	
	var expected = "Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal";
	var formatter = new AddressFmt({locale: 'pt-PT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressPTFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Augusto Rodrigues Avenida António Arroio 5",
		locality: "Parede",
		postalCode: "2775-153",
		country: "Portugal",
		countryCode: "PT"
	}, {locale: 'en-US'});
	
	var expected = "Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
