/*
 * testaddress_KE.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\nKENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Paul Makeba\nP.O. Box 3120\n\n\n\n\nNAKURU\n\n20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba, P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Paul Makeba , P.O. Box 3120 , NAKURU , 20100 , KENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba, P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tPaul Makeba\t\t\rP.O. Box 3120\t\t\r\n\n\n\nNAKURU\n\t20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120 NAKURU\n20100 KENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Paul Makeba P.O. Box 3120",
		locality: "NAKURU",
		postalCode: "20100",
		country: "KENYA",
		countryCode: "KE"
	}, {locale: 'en-KE'});
	
	var expected = "Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA";
	var formatter = new ilib.AddressFmt({locale: 'en-KE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Paul Makeba P.O. Box 3120",
		locality: "NAKURU",
		postalCode: "20100",
		country: "KENYA",
		countryCode: "KE"
	}, {locale: 'en-US'});
	
	var expected = "Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
