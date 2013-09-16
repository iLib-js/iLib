/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
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
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */



function testParseAddressBHNormal() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢, المنامة ٣١٦, البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHNoZip() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢, المنامة, البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBHManyLines() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد\nعمارة ٢٢٢\nالمنامة ٣١٦\n البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHOneLine() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦, البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦",parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢  \n\t\n المنامة ٣١٦\t\n\n البحرين \n \t\t\t", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد عمارة ٢٢٢ المنامة ٣١٦  البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHSpecialChars() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦,  البحرين", {locale: 'ar-BH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة",parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("البحرين", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testParseAddressBHFromUS() {
	var parsedAddress = new ilib.Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦, Bahrain", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد عبد الله احمد, عمارة ٢٢٢", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("المنامة", parsedAddress.locality);
	assertEquals("٣١٦", parsedAddress.postalCode);
	assertEquals("Bahrain", parsedAddress.country);
	assertEquals("BH", parsedAddress.countryCode);
};

function testFormatAddressBH() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد عبد الله احمد, عمارة ٢٢٢",
		locality: " المنامة",
		postalCode: "٣١٦",
		country: "  البحرين",
		countryCode: "BH"
	}, {locale: 'ar-BH'});
	
	var expected = "السيد عبد الله احمد, عمارة ٢٢٢\nالمنامة ٣١٦\n البحرين";
	var formatter = new ilib.AddressFmt({locale: 'ar-BH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBHFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد عبد الله احمد, عمارة ٢٢٢",
		postalCode: "٣١٦",
		locality: " المنامة",
		country: "Bahrain",
		countryCode: "BH"
	}, {locale: 'en-US'});
	
	var expected = "السيد عبد الله احمد, عمارة ٢٢٢\nالمنامة ٣١٦\nBahrain";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
