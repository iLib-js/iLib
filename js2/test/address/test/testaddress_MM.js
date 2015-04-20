/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

function testParseAddressMMNormal() {
	var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\n\nMyanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMNoZip() {
	var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON\nMyanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMMNoCountry() {
	var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMManyLines() {
	var parsedAddress = new Address("Posts and Telecommunications\nNo 43 Bo Aung Gyaw Street\n\nYANGON\n\n11181\nMyanmar\n\n\n", {locale: 'en-MM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMOneLine() {
	var parsedAddress = new Address("Posts and Telecommunications , No 43 Bo Aung Gyaw Street , YANGON , 11181 , Myanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tPosts and Telecommunications\n\t\t\rNo 43 Bo\t\t\rAung Gyaw Street\t\n\n\nYANGON\n\n11181\n\t Myanmar\n\n\n", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMNoDelimiters() {
	var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street YANGON, 11181 Myanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressMMFromUS() {
	var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testFormatAddressMM() {
	var parsedAddress = new Address({
		streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
		locality: "YANGON",
		postalCode: "11181",
		country: "Myanmar",
		countryCode: "MM"
	}, {locale: 'en-MM'});
	
	var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
	var formatter = new AddressFmt({locale: 'en-MM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
		locality: "YANGON",
		postalCode: "11181",
		country: "Myanmar",
		countryCode: "MM"
	}, {locale: 'en-US'});
	
	var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
