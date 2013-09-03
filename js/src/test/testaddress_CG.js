/*
 * testaddress_CG.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCONGO", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCONGO", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12\nrue Kakamoueka\nBRAZZAVILLE\nCONGO\n\n\n", {locale: 'fr-CG'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12 , rue Kakamoueka , BRAZZAVILLE , CONGO", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t\tM. Joseph Mbemba 12\t\t\true Kakamouekat\n\t\nBRAZZAVILLE\n\tCONGO\n\n\n", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12 rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12, rue Kakamoueka BRAZZAVILLE CONGO", {locale: 'fr-CG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCONGO", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Joseph Mbemba 12, rue Kakamoueka", parsedAddress.streetAddress);
	assertEquals("BRAZZAVILLE", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("CONGO", parsedAddress.country);
	assertEquals("CG", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
		locality: "BRAZZAVILLE",
		country: "CONGO",
		countryCode: "CG"
	}, {locale: 'fr-CG'});
	
	var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCONGO";
	var formatter = new ilib.AddressFmt({locale: 'fr-CG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
		locality: "BRAZZAVILLE",
		country: "CONGO",
		countryCode: "CG"
	}, {locale: 'en-US'});
	
	var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCONGO";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
