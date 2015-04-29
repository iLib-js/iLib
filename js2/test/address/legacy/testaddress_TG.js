/*
 * testaddress_TZ.js - test the address parsing and formatting routines
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

function testParseAddressTGNormal() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo", {locale: 'fr-TG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};


function testParseAddressTGNoCountry() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu B.P. 526\nLome", {locale: 'fr-TG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testParseAddressTGManyLines() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu\nB.P. 526\nLome\nTogo\n\n\n", {locale: 'fr-TG'});
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu, B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testParseAddressTGOneLine() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu , B.P. 526 , Lome , Togo", {locale: 'fr-TG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu, B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testParseAddressTGSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t\tM. Nicolas Ayi Patatu\t\t\tB.P.\t\r\r526\t\nLome\n\tTogo\n\n\n", {locale: 'fr-TG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testParseAddressTGNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu B.P. 526 Lome Togo", {locale: 'fr-TG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testParseAddressTGFromUS() {
	var parsedAddress = new ilib.Address("M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Nicolas Ayi Patatu B.P. 526", parsedAddress.streetAddress);
	assertEquals("Lome", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Togo", parsedAddress.country);
	assertEquals("TG", parsedAddress.countryCode);
};

function testFormatAddressTG() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Nicolas Ayi Patatu B.P. 526",
		locality: "Lome",
		country: "Togo",
		countryCode: "TG"
	}, {locale: 'fr-TG'});
	
	var expected = "M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo";
	var formatter = new ilib.AddressFmt({locale: 'fr-TG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTGFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Nicolas Ayi Patatu B.P. 526",
		locality: "Lome",
		country: "Togo",
		countryCode: "TG"
	}, {locale: 'en-US'});
	
	var expected = "M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
