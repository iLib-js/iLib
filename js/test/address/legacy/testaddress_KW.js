/*
 * testaddress_KW.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testParseAddressKWNormal() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن\n آل الصباح ١٠٠٨٤\n١٥٥٤٥ الكويت\n\nالكويت\n\n\n", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن, آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressKWNoZip() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\nالكويت\nالكويت", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressKWNoCountry() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\n١٥٥٤٥ الجهرا", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الجهرا", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressKWManyLines() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن\n آل الصباح ١٠٠٨٤\n١٥٥٤٥\nالكويت\n\nالكويت\n\n\n", {locale: 'ar-KW'});
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن, آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};


function testParseAddressKWSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tحمد عبد الله حسن\n\n\t آل الصباح ١٠٠٨٤\n\n\t١٥٥٤٥\n\n\tالكويت\n\n\tالكويت\n\n\n", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن, آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};


function testParseAddressKWFromUS() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\n١٥٥٤٥\nالكويت\nKuwait", {locale: 'en-US'});
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertEquals("Kuwait", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testFormatAddressKW() {
	var parsedAddress = new ilib.Address({
		streetAddress: "حمد عبد الله حسن آل الصباح ١٠٠٨٤",
		locality: "الكويت",
		postalCode: "١٥٥٤٥",
		country: "الكويت",
		countryCode: "KW"
	}, {locale: 'ar-KW'});
	
	var expected = "حمد عبد الله حسن آل الصباح ١٠٠٨٤\n١٥٥٤٥ الكويت\nالكويت";
	var formatter = new ilib.AddressFmt({locale: 'ar-KW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKWFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "حمد عبد الله حسن آل الصباح ١٠٠٨٤",
		locality: "الكويت",
		postalCode: "١٥٥٤٥",
		country: "Kuwait",
		countryCode: "KW"
	}, {locale: 'en-US'});
	
	var expected = "حمد عبد الله حسن آل الصباح ١٠٠٨٤\n١٥٥٤٥ الكويت\nKuwait";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
