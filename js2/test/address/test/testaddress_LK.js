/*
 * testaddress_ZM.js - test the address parsing and formatting routines
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

function testParseAddressLKNormal() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 12500\nSri Lanka", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKNoZip() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA\nSri Lanka", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLKNoCountry() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 12500", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKManyLines() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara\n25/1\nCyril Jansz\nMawatha\nPANADURA\n12500\nSri Lanka\n\n\n", {locale: 'en-LK'});
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKOneLine() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara , 25/1 , Cyril Jansz , Mawatha ,  PANADURA , 12500 , Sri Lanka", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMarvan Sangakkara\n\t\t\t25/1,\t\t\t\r\r Cyril Jansz \n \r \tMawatha \n\t\nPANADURA\n\t 12500\t\nSri Lanka\n\n\n", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKNoDelimiters() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1 Cyril Jansz Mawatha\nPANADURA 12500 Sri Lanka", {locale: 'en-LK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1 Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12500", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testParseAddressLKFromUS() {
	var parsedAddress = new ilib.Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka", {locale: 'en-US'});
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1, Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("PANADURA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("56001", parsedAddress.postalCode);
	assertEquals("Sri Lanka", parsedAddress.country);
	assertEquals("LK", parsedAddress.countryCode);
};

function testFormatAddressLK() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
		locality: "PANADURA",
		postalCode: "56001",
		country: "Sri Lanka",
		countryCode: "LK"
	}, {locale: 'en-LK'});
	
	var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
	var formatter = new ilib.AddressFmt({locale: 'en-LK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLKFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
		locality: "PANADURA",
		postalCode: "56001",
		country: "Sri Lanka",
		countryCode: "LK"
	}, {locale: 'en-US'});
	
	var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
