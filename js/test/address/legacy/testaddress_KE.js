/*
 * testaddress_KE.js - test the address parsing and formatting routines
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

function testParseAddressKENormal() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKENoZip() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\nKENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressKENoCountry() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKEManyLines() {
	var parsedAddress = new ilib.Address("Paul Makeba\nP.O. Box 3120\n\n\n\n\nNAKURU\n\n20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba, P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKEOneLine() {
	var parsedAddress = new ilib.Address("Paul Makeba , P.O. Box 3120 , NAKURU , 20100 , KENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba, P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKESuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tPaul Makeba\t\t\rP.O. Box 3120\t\t\r\n\n\n\nNAKURU\n\t20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKENoDelimiters() {
	var parsedAddress = new ilib.Address("Paul Makeba P.O. Box 3120 NAKURU\n20100 KENYA", {locale: 'en-KE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Paul Makeba P.O. Box 3120", parsedAddress.streetAddress);
	assertEquals("NAKURU", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("20100", parsedAddress.postalCode);
	assertEquals("KENYA", parsedAddress.country);
	assertEquals("KE", parsedAddress.countryCode);
};

function testParseAddressKEFromUS() {
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

function testFormatAddressKE() {
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

function testFormatAddressKEFromUS() {
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
