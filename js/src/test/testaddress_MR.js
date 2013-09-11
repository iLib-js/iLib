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


function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\n موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢   \n\t\nطرابلس\t\n\n  موريتانيا  \n  \t\t\t", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد الغزالي ١٢ نواكشوط موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("نواكشوط", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("موريتانيا", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, Mauritania ", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد حامد ولد أحمد, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Mauritania", parsedAddress.country);
	assertEquals("MR", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
		locality: "طرابلس",
		country: "موريتانيا",
		countryCode: "MR"
	}, {locale: 'ar-MR'});
	
	var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nموريتانيا";
	var formatter = new ilib.AddressFmt({locale: 'ar-MR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
		locality: "طرابلس",
		country: "Mauritania",
		countryCode: "MR"
	}, {locale: 'en-US'});
	
	var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nMauritania";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
