/*
 * testaddress_KW.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan Al-Sabbahiya 48001\n54551 KUWAIT\nKUWAIT", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan Al-Sabbahiya 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("54551", parsedAddress.postalCode);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};


function testParseAddressNormalNative() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\nالكويت ١٥٥٤٥\nالكويت", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١٥٥٤٥", parsedAddress.postalCode);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};



function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan Al-Sabbahiya 48001\nKUWAIT\nKUWAIT", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan Al-Sabbahiya 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoZipNative() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\nالكويت\nالكويت", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("الكويت", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan Al-Sabbahiya 48001\n54551 KUWAIT", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan Al-Sabbahiya 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("54551", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressNoCountryNative() {
	var parsedAddress = new ilib.Address("حمد عبد الله حسن آل الصباح ١٠٠٨٤\nالكويت ١٥٥٤٥", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("حمد عبد الله حسن آل الصباح ١٠٠٨٤", parsedAddress.streetAddress);
	assertEquals("الكويت", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("۲١٥٥٤٥", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan\nAl-Sabbahiya\n48001\n54551\nKUWAIT\nKUWAIT\n\n", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan, Al-Sabbahiya, 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("54551", parsedAddress.postalCode);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan , Al-Sabbahiya , 48001 , 54551 , KUWAIT , KUWAIT\n\n", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan, Al-Sabbahiya, 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("54551", parsedAddress.postalCode);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};


function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan , Al-Sabbahiya , 48001 , 54551 , KUWAIT , KUWAIT", {locale: 'ar-KW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan, Al-Sabbahiya, 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("54551", parsedAddress.postalCode);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Hamad Abdallah Hassan Al-Sabbahiya 48001\n54551 KUWAIT\nKUWAIT", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hamad Abdallah Hassan, Al-Sabbahiya, 48001", parsedAddress.streetAddress);
	assertEquals("KUWAIT", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("54551", parsedAddress.postalCode);
	assertEquals("KUWAIT", parsedAddress.country);
	assertEquals("KW", parsedAddress.countryCode);
};


function testFormatAddressSA() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Hamad Abdallah Hassan Al-Sabbahiya 48001",
		locality: "KUWAIT",
		region: null,
		postalCode: "54551",
		country: "KUWAIT",
		countryCode: "KW"
	}, {locale: 'ar-KW'});
	
	var expected = "Hamad Abdallah Hassan Al-Sabbahiya 48001\n54551 KUWAIT\nKUWAIT";
	var formatter = new ilib.AddressFmt({locale: 'ar-KW'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFormatAddressSANative() {
	var parsedAddress = new ilib.Address({
		streetAddress: "حمد عبد الله حسن آل الصباح ١٠٠٨٤",
		locality: "الكويت",
		region: null,
		postalCode: "١٥٥٤٥",
		country: "الكويت",
		countryCode: "KW"
	}, {locale: 'ar-KW'});
	
	var expected = "حمد عبد الله حسن آل الصباح ١٠٠٨٤\nالكويت ١٥٥٤٥\nالكويت";
	var formatter = new ilib.AddressFmt({locale: 'ar-KW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Hamad Abdallah Hassan Al-Sabbahiya 48001",
		locality: "KUWAIT",
		region: null,
		postalCode: "54551",
		country: "KUWAIT",
		countryCode: "KW"
	}, {locale: 'en-US'});
	
	var expected = "Hamad Abdallah Hassan Al-Sabbahiya 48001\n54551 KUWAIT\nKUWAIT";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
