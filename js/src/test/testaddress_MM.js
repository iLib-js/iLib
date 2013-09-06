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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\n\nMyanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON\nMyanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications\nNo 43 Bo Aung Gyaw Street\n\nYANGON\n\n11181\nMyanmar\n\n\n", {locale: 'en-MM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications , No 43 Bo Aung Gyaw Street , YANGON , 11181 , Myanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tPosts and Telecommunications\n\t\t\rNo 43 Bo\t\t\rAung Gyaw Street\t\n\n\nYANGON\n\n11181\n\t Myanmar\n\n\n", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications, No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street YANGON, 11181 Myanmar", {locale: 'en-MM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Posts and Telecommunications No 43 Bo Aung Gyaw Street", parsedAddress.streetAddress);
	assertEquals("YANGON", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11181", parsedAddress.postalCode);
	assertEquals("Myanmar", parsedAddress.country);
	assertEquals("MM", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
		locality: "YANGON",
		postalCode: "11181",
		country: "Myanmar",
		countryCode: "MM"
	}, {locale: 'en-MM'});
	
	var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
	var formatter = new ilib.AddressFmt({locale: 'en-MM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
		locality: "YANGON",
		postalCode: "11181",
		country: "Myanmar",
		countryCode: "MM"
	}, {locale: 'en-US'});
	
	var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
