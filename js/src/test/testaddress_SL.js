/*
 * testaddress_SL.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. John Kamara 7A Ross Road Cline\nFreetown", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. John Kamara\n7A Ross Road Cline\nFreetown\nSierra Leone\n\n\n", {locale: 'en-SL'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara, 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. John Kamara , 7A Ross Road Cline , Freetown , Sierra Leone", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara, 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t\tMr. John Kamara\t\t\t7A Ross Road Cline\t\nFreetown\n\t Sierra Leone\n\n\n", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. John Kamara 7A Ross Road Cline Freetown Sierra Leone", {locale: 'en-SL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Kamara 7A Ross Road Cline", parsedAddress.streetAddress);
	assertEquals("Freetown", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Sierra Leone", parsedAddress.country);
	assertEquals("SL", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. John Kamara 7A Ross Road Cline",
		locality: "Freetown",
		country: "Sierra Leone",
		countryCode: "SL"
	}, {locale: 'en-SL'});
	
	var expected = "Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone";
	var formatter = new ilib.AddressFmt({locale: 'en-SL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. John Kamara 7A Ross Road Cline",
		locality: "Freetown",
		country: "Sierra Leone",
		countryCode: "SL"
	}, {locale: 'en-US'});
	
	var expected = "Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
