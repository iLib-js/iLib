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

function testParseAddressGBNormal() {
	var parsedAddress = new ilib.Address("Belgrave House\n76 Buckingham Palace Road\nLondon SW1W 9TQ\nUnited Kingdom", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Belgrave House, 76 Buckingham Palace Road", parsedAddress.streetAddress);
	assertEquals("London", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("SW1W 9TQ", parsedAddress.postalCode);
	assertEquals("United Kingdom", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBNoZip() {
	var parsedAddress = new ilib.Address("Peter House\nOxford Street\nManchester", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Peter House, Oxford Street", parsedAddress.streetAddress);
	assertEquals("Manchester", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGBNoCountry() {
	var parsedAddress = new ilib.Address("88 Wood Street\nLondon\nEC2V 7QT", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("88 Wood Street", parsedAddress.streetAddress);
	assertEquals("London", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("EC2V 7QT", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBManyLines() {
	var parsedAddress = new ilib.Address("2 Kelvin Close\nBirchwood Science Park North\nNorth Risley\nWarrington\nCheshire\nWA3 7PB\nUK", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("2 Kelvin Close, Birchwood Science Park North, North Risley, Warrington", parsedAddress.streetAddress);
	assertEquals("Cheshire", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("WA3 7PB", parsedAddress.postalCode);
	assertEquals("UK", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBOneLine() {
	var parsedAddress = new ilib.Address("Amen Corner, Cain Road, Bracknell, Berkshire, RG12 1HN, England", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Amen Corner, Cain Road, Bracknell", parsedAddress.streetAddress);
	assertEquals("Berkshire", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("RG12 1HN", parsedAddress.postalCode);
	assertEquals("England", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tAmen Corner\n\t\t\tCain Road, \t\t\t\r\r Bracknell, \n \r \tBerkshire, \n\t\nRG12 1HN\t\n\t England\n\n\n", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Amen Corner, Cain Road, Bracknell", parsedAddress.streetAddress);
	assertEquals("Berkshire", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("RG12 1HN", parsedAddress.postalCode);
	assertEquals("England", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBNoDelimiters() {
	var parsedAddress = new ilib.Address("Amen Corner Cain Road Bracknell Berkshire RG12 1HN England", {locale: 'en-GB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Amen Corner Cain Road Bracknell", parsedAddress.streetAddress);
	assertEquals("Berkshire", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("RG12 1HN", parsedAddress.postalCode);
	assertEquals("England", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testParseAddressGBFromDE() {
	var parsedAddress = new ilib.Address("Belgrave House\n76 Buckingham Palace Road\nLondon SW1W 9TQ\nGroßbritannien", {locale: 'de-DE'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Belgrave House, 76 Buckingham Palace Road", parsedAddress.streetAddress);
	assertEquals("London", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("SW1W 9TQ", parsedAddress.postalCode);
	assertEquals("Großbritannien", parsedAddress.country);
	assertEquals("GB", parsedAddress.countryCode);
};

function testFormatAddressGB() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Belgrave House, 76 Buckingham Palace Road",
		locality: "London",
		postalCode: "SW1W 9TQ",
		country: "Old Blighty",
		countryCode: "GB"
	}, {locale: 'en-GB'});
	
	var expected = "Belgrave House, 76 Buckingham Palace Road\nLondon\nSW1W 9TQ\nOld Blighty";
	var formatter = new ilib.AddressFmt({locale: 'en-GB'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGBFromDE() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Belgrave House, 76 Buckingham Palace Road",
		locality: "London",
		postalCode: "SW1W 9TQ",
		country: "Old Blighty",
		countryCode: "GB"
	}, {locale: 'de-DE'});
	
	var expected = "Belgrave House, 76 Buckingham Palace Road\nLondon\nSW1W 9TQ\nOld Blighty";
	var formatter = new ilib.AddressFmt({locale: 'de-DE'});
	assertEquals(expected, formatter.format(parsedAddress));
};
