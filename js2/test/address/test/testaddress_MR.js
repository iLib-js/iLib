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


function testParseAddressMRNormal() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMRNoZip() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMRManyLines() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\n موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMROneLine() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMRSuperfluousWhitespace() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢   \n\t\nطرابلس\t\n\n  موريتانيا  \n  \t\t\t", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMRNoDelimiters() {
	var parsedAddress = new Address("السيد حامد ولد أحمد الغزالي ١٢ نواكشوط موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMRSpecialChars() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressMRFromUS() {
	var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, Mauritania ", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Mauritania", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testFormatAddressMR() {
	var parsedAddress = new Address({
		streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
		locality: "طرابلس",
		country: "موريتانيا",
		countryCode: "MR"
	}, {locale: 'ar-MR'});
	
	var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nموريتانيا";
	var formatter = new AddressFmt({locale: 'ar-MR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMRARFromUS() {
	var parsedAddress = new Address({
		streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
		locality: "طرابلس",
		country: "Mauritania",
		countryCode: "MR"
	}, {locale: 'en-US'});
	
	var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nMauritania";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
