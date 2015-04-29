/*
 * testaddress_SA.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");

function testParseAddressSANormalNative() {
	var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};



function testParseAddressSANoZipNative() {
	var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressSANoCountrynative() {
	var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressSAManyLines() {
	var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressSAOneLine() {
	var parsedAddress = new Address("السيد عبد الله ناصر, مكة المكرمة ٢١۴۵۴, المملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressSANoDelimiters() {
	var parsedAddress = new Address("السيد عبد الله ناصر, مكة المكرمة ٢١۴۵۴ المملكة العربية السعودية", {locale: 'ar-SA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("المملكة العربية السعودية", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};


function testParseAddressSAFromUSNative() {
	var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
		
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
	assertEquals("مكة المكرمة", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٢١۴۵۴", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};



function testFormatAddressSASANative() {
	var parsedAddress = new Address({
		streetAddress: "السيد عبد الله ناصر",
		locality: "مكة المكرمة",
		region: null,
		postalCode: "٢١۴۵۴",
		country: "المملكة العربية السعودية",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية";
	var formatter = new AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSAFromUS() {
	var parsedAddress = new Address({
		streetAddress: "السيد عبد الله ناصر",
		locality: "مكة المكرمة",
		region: null,
		postalCode: "٢١۴۵۴",
		country: "SAUDI ARABIA",
		countryCode: "SA"
	}, {locale: 'ar-SA'});
	
	var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA";
	var formatter = new AddressFmt({locale: 'ar-SA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressSA1() {
	var parsedAddress = new Address("Zakat & Income Tax Dept,RIYADH 11187, SAUDI ARABIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
		
	assertNotUndefined(parsedAddress);
	assertEquals("Zakat & Income Tax Dept", parsedAddress.streetAddress);
	assertEquals("RIYADH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11187", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};

function testParseAddressSA2() {
	var parsedAddress = new Address("Mr. Ibrahim Mohamad, P.O. Box 56577, RIYADH 11564, SAUDI ARABIA", {locale: 'en-US'});
	// the country name is in English because this address is for a contact in a US database
		
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ibrahim Mohamad, P.O. Box 56577", parsedAddress.streetAddress);
	assertEquals("RIYADH", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11564", parsedAddress.postalCode);
	assertEquals("SAUDI ARABIA", parsedAddress.country);
	assertEquals("SA", parsedAddress.countryCode);
};
