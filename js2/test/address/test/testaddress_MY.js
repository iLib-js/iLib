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
function testParseAddressMYMYLatinNormal() {
	var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR\nMalaysia", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1, Taman Budiman", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertEquals("SELANGOR",parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testParseAddressMYMYLatinNoZip() {
	var parsedAddress = new Address("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre,29 Jalan Sekilau\nJOHOR BAHRU\nJohor\nMalaysia", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre, 29 Jalan Sekilau", parsedAddress.streetAddress);
	assertEquals("JOHOR BAHRU",parsedAddress.locality);
	assertEquals("Johor",parsedAddress.region);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMYMYLatinNoCountry() {
	var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1, Taman Budiman", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertEquals("SELANGOR",parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

/*function testParseAddressMYMYAsianNormal() {
	var parsedAddress = new Address("新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertEquals("新加坡", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertEquals("新加坡共和國", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testParseAddressMYMYAsianNoZip() {
	var parsedAddress = new Address("新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("新加坡", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testParseAddressMYMYAsianNoCountry() {
	var parsedAddress = new Address("159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertEquals("新加坡", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};*/

function testParseAddressMYMYManyLines() {
	var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR\nMalaysia", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1, Taman Budiman", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertEquals("SELANGOR",parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testParseAddressMYMYOneLine() {
	var parsedAddress = new Address("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre,29 Jalan Sekilau,JOHOR BAHRU,Johor,Malaysia", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre, 29 Jalan Sekilau", parsedAddress.streetAddress);
	assertEquals("JOHOR BAHRU",parsedAddress.locality);
	assertEquals("Johor",parsedAddress.region);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMYMYSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t11 Jalan Budi 1\t\t\r\n\t42700 BANTING\r\t SELANGOR\t\nMalaysia\r\t\n", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertEquals("SELANGOR",parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testParseAddressMYMYNoDelimiters() {
	var parsedAddress = new Address("11 Jalan Budi 1 Taman Budiman 42700 BANTING SELANGOR Malaysia", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1 Taman Budiman", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertEquals("SELANGOR",parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

/*function testParseAddressMYMYSpecialChars() {
	var parsedAddress = new Address("Lín Jì Lù 4\n# 06-07/08 Xì Tǒng Kējì Dàshà\nMalaysia 159088\n", {locale: 'en-MY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Lín Jì Lù 4, # 06-07/08 Xì Tǒng Kējì Dàshà", parsedAddress.streetAddress);
	assertEquals("Malaysia", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};*/

function testParseAddressMYMYFromUS() {
	var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nMalaysia", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("11 Jalan Budi 1, Taman Budiman", parsedAddress.streetAddress);
	assertEquals("BANTING", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("42700", parsedAddress.postalCode);
	assertEquals("Malaysia", parsedAddress.country);
	assertEquals("MY", parsedAddress.countryCode);
};

function testFormatAddressMYLatin() {
	var parsedAddress = new Address({
		streetAddress: "11 Jalan Budi 1, Taman Budiman",
		locality: "BANTING",
		postalCode: "42700",
		country: "Malaysia",
		countryCode: "MY",
		format: "latin"
	}, {locale: 'en-MY'});
	
	var expected = "11 Jalan Budi 1, Taman Budiman\nBANTING 42700\nMalaysia";
	var formatter = new AddressFmt({locale: 'en-MY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

/*function testFormatAddressMYAsian() {
	var parsedAddress = new Address({
		streetAddress: "麟記路4＃06-07/08矽統科技大廈",
		locality: "新加坡",
		postalCode: "159088",
		country: "新加坡共和國",
		countryCode: "MY",
		format: "asian"
	}, {locale: 'zh-MY'});
	
	var expected = "新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈";
	var formatter = new AddressFmt({locale: 'zh-MY'});
	assertEquals(expected, formatter.format(parsedAddress));
};*/

function testFormatAddressMYFromUS() {
	var parsedAddress = new Address({
		streetAddress: "11 Jalan Budi 1, Taman Budiman",
		locality: "BANTING",
		postalCode: "42700",
		country: "Malaysia",
		countryCode: "MY",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "11 Jalan Budi 1, Taman Budiman\nBANTING 42700\nMalaysia";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
