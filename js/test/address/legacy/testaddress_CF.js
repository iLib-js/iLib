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



function testParseAddressCFNormal() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFNoZip() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCFManyLines() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko\nBP 729, BANGUI\nCENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFOneLine() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko  \n\t\n BP 729\nBANGUI\t\n\n CENTRAL AFRICAN REPUBLIC  \n  \t\t\t", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFNoDelimiters() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko BP 729 BANGUI CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFSpecialChars() {
	var parsedAddress = new ilib.Address("Avenue des Martyrs Boîte postale 344, BANGUI, République centrafricaine", {locale: 'fr-CF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avenue des Martyrs Boîte postale 344", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("République centrafricaine", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testParseAddressCFFromUS() {
	var parsedAddress = new ilib.Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Evangelical Church Elim Bangui – M'Poko, BP 729", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BANGUI",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CENTRAL AFRICAN REPUBLIC", parsedAddress.country);
	assertEquals("CF", parsedAddress.countryCode);
};

function testFormatAddressCF() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Evangelical Church Elim Bangui – M'Poko\nBP 729",
		locality: "BANGUI",
		country: "CENTRAL AFRICAN REPUBLIC",
		countryCode: "AM"
	}, {locale: 'fr-CF'});
	
	var expected = "Evangelical Church Elim Bangui – M'Poko\nBP 729\nBANGUI\nCENTRAL AFRICAN REPUBLIC";
	var formatter = new ilib.AddressFmt({locale: 'fr-CF'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCFFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Evangelical Church Elim Bangui – M'Poko\nBP 729",
		country: "CENTRAL AFRICAN REPUBLIC",
		locality: "BANGUI",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "Evangelical Church Elim Bangui – M'Poko\nBP 729\nBANGUI\nCENTRAL AFRICAN REPUBLIC";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
