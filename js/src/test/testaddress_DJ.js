
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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAddressFRNormal() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFRNoZip() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressFRManyLines() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël\nBP 32\nDJIBOUTI\n DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFROneLine() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël \n BP 32   \n\t\n DJIBOUTI\t\n\n  DJIBOUTI  \n  \t\t\t", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFRNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël 2  BP 32 DJIBOUTI  DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël 2 BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFRSpecialChars() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël,BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressFRFromUS() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël,BP 32,DJIBOUTI, DJIBOUTI", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testFormatAddressFR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Farah Ismaël\nBP 32",
		locality: "DJIBOUTI",
		country: " DJIBOUTI",
		countryCode: "DJ"
	}, {locale: 'fr-DJ'});
	
	var expected = "Mr. Farah Ismaël\nBP 32\nDJIBOUTI\nDJIBOUTI";
	var formatter = new ilib.AddressFmt({locale: 'fr-DJ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Farah Ismaël\nBP 32",
		locality: "DJIBOUTI",
		country: " DJIBOUTI",
		countryCode: "DJ"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Farah Ismaël\nBP 32\nDJIBOUTI\nDJIBOUTI";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testParseAddressARNormal() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARNoZip() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressARManyLines() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل\nجيبوتي\n جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressAROneLine() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل   \n\t\n جيبوتي\t\n\n  جيبوتي  \n  \t\t\t", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل  ٢ شارع الاستقلال جيبوتي  جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARSpecialChars() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressARFromUS() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل,جيبوتي, DJIBOUTI", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testFormatARAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد فرح إسماعيل",
		locality: "جيبوتي",
		country: " جيبوتي",
		countryCode: "DJ"
	}, {locale: 'ar-DJ'});
	
	var expected = "السيد فرح إسماعيل\nجيبوتي\nجيبوتي";
	var formatter = new ilib.AddressFmt({locale: 'ar-DJ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد فرح إسماعيل",
		locality: "جيبوتي",
		country: "DJIBOUTI",
		countryCode: "DJ"
	}, {locale: 'en-US'});
	
	var expected = "السيد فرح إسماعيل\nجيبوتي\nDJIBOUTI";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
