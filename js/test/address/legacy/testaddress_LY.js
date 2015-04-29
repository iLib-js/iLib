/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
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


function testParseAddressLYARNormal() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};

function testParseAddressLYARNoZip() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLYARManyLines() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\n ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};

function testParseAddressLYAROneLine() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};

function testParseAddressLYARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢   \n\t\n طرابلس\t\n\n  ليبيا  \n  \t\t\t", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};
//needs a precise regular expression to handle locality with and without spaces in no delimiter case
/*function testParseAddressLYARNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة الغزالي ١٢  ٢ شارع الاستقلال طرابلس  ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة الغزالي ١٢ ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};*/


function testParseAddressLYARSpecialChars() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-LY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};

function testParseAddressLYFromUS() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, Libya", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Libya", parsedAddress.country);
	assertEquals("LY", parsedAddress.countryCode);
};

function testFormatAddressLY() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
		locality: "طرابلس",
		country: " ليبيا",
		countryCode: "LY"
	}, {locale: 'ar-LY'});
	
	var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nليبيا";
	var formatter = new ilib.AddressFmt({locale: 'ar-LY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLYARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
		locality: "طرابلس",
		country: "Libya",
		countryCode: "LY"
	}, {locale: 'en-US'});
	
	var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nLibya";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
