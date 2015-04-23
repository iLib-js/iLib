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



function testParseAddressBGNormal() {
	var parsedAddress = new ilib.Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGNoZip() {
	var parsedAddress = new ilib.Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
	assertEquals("1309", parsedAddress.postalCode);
};

function testParseAddressBGManyLines() {
	var parsedAddress = new ilib.Address("Georg Popandov\nKukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGOneLine() {
	var parsedAddress = new ilib.Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Georg Popandov, Kukush Str. 2, fl.6  \n\t\n 1309 SOFIA\t\n\n BULGARIA  \n  \t\t\t", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGNoDelimiters() {
	var parsedAddress = new ilib.Address("Georg Popandov Kukush Str. 2 fl.6 1309 SOFIA BULGARIA", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov Kukush Str. 2 fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGSpecialChars() {
	var parsedAddress = new ilib.Address("Джордж Попандов, Ул. Кукуш. 2, ет.6, 1309 СОФИЯ, БЪЛГАРИЯ", {locale: 'bg-BG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Джордж Попандов, Ул. Кукуш. 2, ет.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("СОФИЯ",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("БЪЛГАРИЯ", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testParseAddressBGFromUS() {
	var parsedAddress = new ilib.Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Georg Popandov, Kukush Str. 2, fl.6", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SOFIA",parsedAddress.locality);
	assertEquals("1309", parsedAddress.postalCode);
	assertEquals("BULGARIA", parsedAddress.country);
	assertEquals("BG", parsedAddress.countryCode);
};

function testFormatAddressBG() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Georg Popandov, Kukush Str. 2, fl.6",
		locality: "1309 SOFIA",
		country: "BULGARIA",
		countryCode: "BG"
	}, {locale: 'bg-BG'});
	
	var expected = "Georg Popandov, Kukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA";
	var formatter = new ilib.AddressFmt({locale: 'bg-BG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBGFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Georg Popandov, Kukush Str. 2, fl.6",
		country: "BULGARIA",
		locality: "1309 SOFIA",
		countryCode: "BG"
	}, {locale: 'en-US'});
	
	var expected = "Georg Popandov, Kukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
