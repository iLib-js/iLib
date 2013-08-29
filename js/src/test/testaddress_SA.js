/*
 * testaddress_SA.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH 21454\nSAUDI ARABIA", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("21454", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressNormalNative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ۲۱۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("۲۱۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};



function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH\nSAUDI ARABIA", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoZipNative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH 21454", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("21454", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ۲۱۴۵۴", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("۲۱۴۵۴", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("AU", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir\nP.O. Box\n15501\nMAKKAH\n21454\nSAUDI ARABIA\n\n", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir, P.O. Box, 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("21454", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir, P.O. Box, 15501, MAKKAH, 21454, SAUDI ARABIA", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir, P.O. Box, 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("21454", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir P.O. Box 15501 MAKKAH 21454 SAUDI ARABIA", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("21454", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH 21454\nSAUDI ARABIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("MAKKAH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("21454", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressFromUSNative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ۲۱۴۵۴\nالمملكة العربية السعودية", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("۲۱۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testFormatAddressSA() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Abdullah Nassir P.O. Box 15501",
		locality: "MAKKAH",
		region: null,
		postalCode: "21454",
		country: "SAUDI ARABIA",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH 21454\nSAUDI ARABIA";
	var formatter = new ilib.AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFormatAddressSANative() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد عبد الله ناصر",
		locality: "مكة المكرمة",
		region: null,
		postalCode: "۲۱۴۵۴",
		country: "المملكة العربية السعودية",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "السيد عبد الله ناصر\nمكة المكرمة ۲۱۴۵۴\nالمملكة العربية السعودية";
	var formatter = new ilib.AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Abdullah Nassir P.O. Box 15501",
		locality: "MAKKAH",
		region: null,
		postalCode: "21454",
		country: "SAUDI ARABIA",
		countryCode: "SA"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Abdullah Nassir P.O. Box 15501\nMAKKAH 21454\nSAUDI ARABIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
