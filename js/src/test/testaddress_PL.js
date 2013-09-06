/*
 * testaddress_PL.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski ul. Łączności 1\nELBLAG\nPoland", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski\nul. Łączności 1\n\n82-300\nELBLAG\nPoland\n\n\n", {locale: 'pl-PL'});
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski, ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski , ul. Łączności 1 , 82-300 , ELBLAG , Poland", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski, ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tAdrian Kieślowski\n\t\t\tul. Łączności 1\n\t\n82-300\t\nELBLAG\n\t Poland\n\n\n", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski, ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski ul. Łączności 1 82-300 ELBLAG Poland", {locale: 'pl-PL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adrian Kieślowski ul. Łączności 1", parsedAddress.streetAddress);
	assertEquals("ELBLAG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("82-300", parsedAddress.postalCode);
	assertEquals("Poland", parsedAddress.country);
	assertEquals("PL", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Adrian Kieślowski ul. Łączności 1",
		locality: "ELBLAG",
		postalCode: "82-300",
		country: "Poland",
		countryCode: "PL"
	}, {locale: 'pl-PL'});
	
	var expected = "Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland";
	var formatter = new ilib.AddressFmt({locale: 'pl-PL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Adrian Kieślowski ul. Łączności 1",
		locality: "ELBLAG",
		postalCode: "82-300",
		country: "Poland",
		countryCode: "PL"
	}, {locale: 'en-US'});
	
	var expected = "Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
