
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
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */



function testParseAddressDJFRNormal() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFRNoZip() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressDJFRManyLines() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël\nBP 32\nDJIBOUTI\n DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFROneLine() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël, BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël \n BP 32   \n\t\n DJIBOUTI\t\n\n  DJIBOUTI  \n  \t\t\t", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFRNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël 2  BP 32 DJIBOUTI  DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël 2 BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFRSpecialChars() {
	var parsedAddress = new ilib.Address("Mr. Farah Ismaël,BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Farah Ismaël, BP 32", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("DJIBOUTI", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("DJIBOUTI", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJFRFromUS() {
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

function testFormatAddressDJFR() {
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

function testFormatAddressDJFRFromUS() {
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


function testParseAddressDJARNormal() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJARNoZip() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressDJARManyLines() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل\nجيبوتي\n جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJAROneLine() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل   \n\t\n جيبوتي\t\n\n  جيبوتي  \n  \t\t\t", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJARNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل  ٢ شارع الاستقلال جيبوتي  جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJARSpecialChars() {
	var parsedAddress = new ilib.Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد فرح إسماعيل", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("جيبوتي",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("جيبوتي", parsedAddress.country);
	assertEquals("DJ", parsedAddress.countryCode);
};

function testParseAddressDJARFromUS() {
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

function testFormatAddressDJARFromUS() {
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
