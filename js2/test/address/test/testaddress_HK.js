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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressHKHKLatinNormal() {
	var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay, Hong Kong", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tower 1, Times Square, 1 Matheson Street, Room 1706", parsedAddress.streetAddress);
	assertEquals("Causeway Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKLatinNoCountry() {
	var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tower 1, Times Square, 1 Matheson Street, Room 1706", parsedAddress.streetAddress);
	assertEquals("Causeway Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKLatinDouble() {
	var parsedAddress = new Address("Room 1301-1302, 13/F, Block A, Sea View Estate,\n2 Watson Road, Hong Kong\nHong Kong", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Room 1301-1302, 13/F, Block A, Sea View Estate, 2 Watson Road", parsedAddress.streetAddress);
	assertEquals("Hong Kong", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKAsianNormal() {
	var parsedAddress = new Address("香港太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("英皇道1111號太古城中心1期19字樓", parsedAddress.streetAddress);
	assertEquals("太古城", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("香港", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKAsianNoCountry() {
	var parsedAddress = new Address("太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("英皇道1111號太古城中心1期19字樓", parsedAddress.streetAddress);
	assertEquals("太古城", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

/*
// for DFISH-20855
function testParseAddressHKHKMixed() {
	// in Hong Kong, it is more likely to be mixed like this
	var parsedAddress = new Address("Hong Kong太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("英皇道1111號太古城中心1期19字樓", parsedAddress.streetAddress);
	assertEquals("太古城", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};
*/

function testParseAddressHKHKOneLine() {
	var parsedAddress = new Address("Room 1403-5, 14/F, Chinachem Exchange Square, 1 Hoi Wan Street, Quarry Bay, Hong Kong", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Room 1403-5, 14/F, Chinachem Exchange Square, 1 Hoi Wan Street", parsedAddress.streetAddress);
	assertEquals("Quarry Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t10/F PCCW Tower\n\t\nTaikoo Place\n \r\n\r\r979 King's Road\n	Quarry Bay\r\r\n	Hong Kong\t\n\n\n", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("10/F PCCW Tower, Taikoo Place, 979 King's Road", parsedAddress.streetAddress);
	assertEquals("Quarry Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKNoDelimiters() {
	var parsedAddress = new Address("Tower 1 Times Square 1 Matheson Street Room 1706 Causeway Bay Hong Kong", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tower 1 Times Square 1 Matheson Street Room 1706", parsedAddress.streetAddress);
	assertEquals("Causeway Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKSpecialChars() {
	var parsedAddress = new Address("Suite 19, 1st Floor, Tǎi Gù Chung Zhong Shìn, Hăo 1111, In Huang Street, Dàpǔ Xīn Shìzhèn, Hong Kong", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Suite 19, 1st Floor, Tǎi Gù Chung Zhong Shìn, Hăo 1111, In Huang Street", parsedAddress.streetAddress);
	assertEquals("Dàpǔ Xīn Shìzhèn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testParseAddressHKHKFromUS() {
	var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay, Hong Kong", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tower 1, Times Square, 1 Matheson Street, Room 1706", parsedAddress.streetAddress);
	assertEquals("Causeway Bay", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Hong Kong", parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testFormatAddressHKHKLatin() {
	var parsedAddress = new Address({
		streetAddress: "Tower 1, Times Square, 1 Matheson Street, Room 1706",
		locality: "Causeway Bay",
		country: "Hong Kong",
		countryCode: "HK",
		format: "latin"
	}, {locale: 'en-HK'});
	
	var expected = "Tower 1, Times Square, 1 Matheson Street, Room 1706\nCauseway Bay\nHong Kong";
	var formatter = new AddressFmt({locale: 'en-HK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressHKHKAsian() {
	var parsedAddress = new Address({
		streetAddress: "英皇道1111號太古城中心1期19字樓",
		locality: "太古城",
		country: "香港",
		countryCode: "HK",
		format: "asian"
	}, {locale: 'en-HK'});
	
	var expected = "香港太古城英皇道1111號太古城中心1期19字樓";
	var formatter = new AddressFmt({locale: 'en-HK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressHKHKFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Tower 1, Times Square, 1 Matheson Street, Room 1706",
		locality: "Causeway Bay",
		country: "Hong Kong",
		countryCode: "HK",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "Tower 1, Times Square, 1 Matheson Street, Room 1706\nCauseway Bay\nHong Kong";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
