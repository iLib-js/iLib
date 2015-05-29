/*
 * testaddress.js - test the address parsing and formatting routines
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

function testParseAddressISNormal() {
	var parsedAddress = new ilib.Address("Gudmundur Jonasson Travel\nBorgartun 34\n105 REYKJAVÍK\nICELAND", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gudmundur Jonasson Travel, Borgartun 34", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("105", parsedAddress.postalCode);
	assertEquals("ICELAND", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISNoZip() {
	var parsedAddress = new ilib.Address("Gudmundur Jonasson Travel\nBorgartun 34\nREYKJAVÍK", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gudmundur Jonasson Travel, Borgartun 34", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressISNoCountry() {
	var parsedAddress = new ilib.Address("Wabbitwatchin Excursions\n121 REYKJAVÍK", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Wabbitwatchin Excursions", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("121", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISManyLines() {
	var parsedAddress = new ilib.Address("Elmér Fúdd\nWabbitwatchin Excursions\nPósthólf 1034\n121 REYKJAVÍK\nICELAND", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("121", parsedAddress.postalCode);
	assertEquals("ICELAND", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISOneLine() {
	var parsedAddress = new ilib.Address("Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034, 121 REYKJAVÍK, ICELAND", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("121", parsedAddress.postalCode);
	assertEquals("ICELAND", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tElmér Fúdd\n\t\t\tWabbitwatchin Excursions, \t\t\t\r\r Pósthólf 1034, \n\t\n121 REYKJAVÍK\t\n\t \nICELAND\n\n", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("121", parsedAddress.postalCode);
	assertEquals("ICELAND", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISNoDelimiters() {
	var parsedAddress = new ilib.Address("Elmér Fúdd Wabbitwatchin Excursions Pósthólf 1034 121 REYKJAVÍK ICELAND", {locale: 'en-IS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Elmér Fúdd Wabbitwatchin Excursions Pósthólf 1034", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("121", parsedAddress.postalCode);
	assertEquals("ICELAND", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testParseAddressISFromDE() {
	var parsedAddress = new ilib.Address("Gudmundur Jonasson Travel\nBorgartun 34\n105 REYKJAVÍK\nisland", {locale: 'de-DE'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gudmundur Jonasson Travel, Borgartun 34", parsedAddress.streetAddress);
	assertEquals("REYKJAVÍK", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("105", parsedAddress.postalCode);
	assertEquals("island", parsedAddress.country);
	assertEquals("IS", parsedAddress.countryCode);
};

function testFormatAddressIS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Gudmundur Jonasson Travel, Borgartun 34",
		locality: "REYKJAVÍK",
		postalCode: "105",
		country: "ISLAND",
		countryCode: "IS"
	}, {locale: 'en-IS'});
	
	var expected = "Gudmundur Jonasson Travel, Borgartun 34\n105 REYKJAVÍK\nISLAND";
	var formatter = new ilib.AddressFmt({locale: 'en-IS'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressISFromDE() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Gudmundur Jonasson Travel, Borgartun 34",
		locality: "REYKJAVÍK",
		postalCode: "105",
		country: "island",
		countryCode: "IS"
	}, {locale: 'de-DE'});
	
	var expected = "Gudmundur Jonasson Travel, Borgartun 34\n105 REYKJAVÍK\nisland";
	var formatter = new ilib.AddressFmt({locale: 'de-DE'});
	assertEquals(expected, formatter.format(parsedAddress));
};
