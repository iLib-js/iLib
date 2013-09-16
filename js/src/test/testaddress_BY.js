/*
 * testaddress_BY.js - test the address parsing and formatting routines
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

function testParseAddressBYNormal() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYNoZip() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\nBelarus", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBYNoCountry() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\n211388", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYManyLines() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер.\nЧЕРНЫШЕВСКОГО 8\n\n\n\n\nОрша\n\n211388\n\nBelarus\n\n\n", {locale: 'ru-BY'});
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер., ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYOneLine() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. , ЧЕРНЫШЕВСКОГО 8 , Орша , 211388 , Belarus", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер., ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tАдамович 4-й пер.\t\t\rЧЕРНЫШЕВСКОГО 8\t\t\r\n\n\n\nОрша\n\t211388\n\nBelarus\n\n\n", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYNoDelimiters() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8 Орша\n211388 Belarus", {locale: 'ru-BY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testParseAddressBYFromUS() {
	var parsedAddress = new ilib.Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\n211388\nBelarus", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8", parsedAddress.streetAddress);
	assertEquals("Орша", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("211388", parsedAddress.postalCode);
	assertEquals("Belarus", parsedAddress.country);
	assertEquals("BY", parsedAddress.countryCode);
};

function testFormatAddressBY() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8",
		locality: "Орша",
		postalCode: "211388",
		country: "Belarus",
		countryCode: "BY"
	}, {locale: 'ru-BY'});
	
	var expected = "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus";
	var formatter = new ilib.AddressFmt({locale: 'ru-BY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBYFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8",
		locality: "Орша",
		postalCode: "211388",
		country: "Belarus",
		countryCode: "BY"
	}, {locale: 'en-US'});
	
	var expected = "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
