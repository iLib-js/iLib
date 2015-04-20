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

function testParseAddressNZNormal() {
	var parsedAddress = new Address("PO Box 10362\nWellington 6143\nNew Zealand", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("PO Box 10362", parsedAddress.streetAddress);
	assertEquals("Wellington", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6143", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZNoZip() {
	var parsedAddress = new Address("23 Kate Sheppard Place,\nThorndon\nWellington\nNew Zealand", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("23 Kate Sheppard Place, Thorndon", parsedAddress.streetAddress);
	assertEquals("Wellington", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNZNoCountry() {
	var parsedAddress = new Address("45a Clevedon-Takanini Rd\nArdmore\nAuckland 2582", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("45a Clevedon-Takanini Rd, Ardmore", parsedAddress.streetAddress);
	assertEquals("Auckland", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2582", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZManyLines() {
	var parsedAddress = new Address("Level 6\nTower Centre\n45 Queen Street\nAuckland\n1010\nNew Zealand\n\n\n", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 6, Tower Centre, 45 Queen Street", parsedAddress.streetAddress);
	assertEquals("Auckland", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1010", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZOneLine() {
	var parsedAddress = new Address("70 Falsgrave St, Waltham, Christchurch 8011, New Zealand", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("70 Falsgrave St, Waltham", parsedAddress.streetAddress);
	assertEquals("Christchurch", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("8011", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t29b Bolt Rd\n\n\r\r\t\n   Tahuna\n\t\r\rNelson\r5678\r\r\n\r\n\tNew\tZealand\n\n\n", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("29b Bolt Rd, Tahuna", parsedAddress.streetAddress);
	assertEquals("Nelson", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("5678", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZNoDelimiters() {
	var parsedAddress = new Address("70 Falsgrave St Waltham Christchurch 8011 New Zealand", {locale: 'en-NZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("70 Falsgrave St Waltham", parsedAddress.streetAddress);
	assertEquals("Christchurch", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("8011", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testParseAddressNZFromUS() {
	var parsedAddress = new Address("70 Falsgrave St\nWaltham\nChristchurch 8011\nNew Zealand", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("70 Falsgrave St, Waltham", parsedAddress.streetAddress);
	assertEquals("Christchurch", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("8011", parsedAddress.postalCode);
	assertEquals("New Zealand", parsedAddress.country);
	assertEquals("NZ", parsedAddress.countryCode);
};

function testFormatAddressNZ() {
	var parsedAddress = new Address({
		streetAddress: "70 Falsgrave St, Waltham",
		locality: "Christchurch",
		postalCode: "8011",
		country: "New Zealand",
		countryCode: "NZ"
	}, {locale: 'en-NZ'});
	
	var expected = "70 Falsgrave St, Waltham\nChristchurch 8011\nNew Zealand";
	var formatter = new AddressFmt({locale: 'en-NZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressNZFromUS() {
	var parsedAddress = new Address({
		streetAddress: "70 Falsgrave St, Waltham",
		locality: "Christchurch",
		postalCode: "8011",
		country: "New Zealand",
		countryCode: "NZ"
	}, {locale: 'en-US'});
	
	var expected = "70 Falsgrave St, Waltham\nChristchurch 8011\nNew Zealand";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
