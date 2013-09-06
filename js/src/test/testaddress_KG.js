/*
 * testaddress_KG.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКЫРГЫЗСТАН", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA\nSri Lanka", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 720001", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara\n25/1\nCyril Jansz\nMawatha\nPANADURA\n720001\nSri Lanka\n\n\n", {locale: 'ru-KG'});
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara , 25/1 , Cyril Jansz , Mawatha ,  PANADURA , 720001 , Sri Lanka", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMarvan Sangakkara\n\t\t\t25/1,\t\t\t\r\r Cyril Jansz \n \r \tMawatha \n\t\nPANADURA\n\t 720001\t\nSri Lanka\n\n\n", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1 Cyril Jansz Mawatha PANADURA 720001 Sri Lanka", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1 Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka", {locale: 'en-US'});
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("56001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
		locality: "PANADURA",
		postalCode: "56001",
		country: "Sri Lanka",
		countryCode: "KG"
	}, {locale: 'ru-KG'});
	
	var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
	var formatter = new ilib.AddressFmt({locale: 'ru-KG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
		locality: "PANADURA",
		postalCode: "56001",
		country: "Sri Lanka",
		countryCode: "KG"
	}, {locale: 'en-US'});
	
	var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
