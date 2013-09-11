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


function testParseAddressNormalNative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
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


function testParseAddressNoCountrynative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر,مكة المكرمة ٢١۴۵۴,المملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressNoDelimiters() {
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressFromUSNative() {
	var parsedAddress = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};



function testFormatAddressSANative() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد عبد الله ناصر",
		locality: "مكة المكرمة",
		region: null,
		postalCode: "٢١۴۵۴",
		country: "المملكة العربية السعودية",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية";
	var formatter = new ilib.AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد عبد الله ناصر",
		locality: "مكة المكرمة",
		region: null,
		postalCode: "٢١۴۵۴",
		country: "SAUDI ARABIA",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA";
	var formatter = new ilib.AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};
