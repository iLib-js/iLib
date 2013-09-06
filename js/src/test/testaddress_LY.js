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


function testParseAddressARNormal() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARNoZip() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressARManyLines() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\n ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressAROneLine() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢   \n\t\n طرابلس\t\n\n  ليبيا  \n  \t\t\t", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة الغزالي ١٢  ٢ شارع الاستقلال طرابلس  ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة الغزالي ١٢ ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARSpecialChars() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ليبيا", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, Libya", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد علي خليفة, الغزالي ١٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("طرابلس", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Libya", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
		locality: "طرابلس",
		country: " ليبيا",
		countryCode: "DJ"
	}, {locale: 'ar-DJ'});
	
	var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nليبيا";
	var formatter = new ilib.AddressFmt({locale: 'ar-DJ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
		locality: "طرابلس",
		country: "Libya",
		countryCode: "DJ"
	}, {locale: 'en-US'});
	
	var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nLibya";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
