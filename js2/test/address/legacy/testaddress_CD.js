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
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function testParseAddressCDNormal() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDNoZip() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCDManyLines() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948\nKINSHASA 1\nrépublique démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDOneLine() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948  \n\t\n KINSHASA 1\t\n\n république démocratique du congo  \n  \t\t\t", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele B.P. 7948 KINSHASA 1 république démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDSpecialChars() {
	var parsedAddress = new ilib.Address("Office congolais des postes, et télécommunications,B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Office congolais des postes, et télécommunications, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testParseAddressCDFromUS() {
	var parsedAddress = new ilib.Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Mashala Kashama Kashele, B.P. 7948", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("KINSHASA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("république démocratique du congo", parsedAddress.country);
	assertEquals("CD", parsedAddress.countryCode);
};

function testFormatAddressCD() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Mashala Kashama Kashele\nB.P. 7948",
		locality: "KINSHASA 1",
		country: "république démocratique du congo",
		countryCode: "AM"
	}, {locale: 'fr-CD'});
	
	var expected = "M. Mashala Kashama Kashele\nB.P. 7948\nKINSHASA 1\nrépublique démocratique du congo";
	var formatter = new ilib.AddressFmt({locale: 'fr-CD'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCDFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Mashala Kashama Kashele\nB.P. 7948",
		country: "république démocratique du congo",
		locality: "KINSHASA 1",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "M. Mashala Kashama Kashele\nB.P. 7948\nKINSHASA 1\nrépublique démocratique du congo";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
