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



function testParseAddressIDNormal() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx, Jakarta Selatan 10110,Jakarta,INDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertEquals("Jakarta",parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

function testParseAddressIDNoZip() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx, Jakarta Selatan, INDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressIDManyLines() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta\nJalan Medan Merdeka Selatan No. xx\nJakarta Selatan 10110\nINDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

function testParseAddressIDOneLine() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx,Jakarta Selatan 10110 INDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110",parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

function testParseAddressIDSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx   \n\t\n Jakarta Selatan 10110\t\n\n INDONESIA  \n  \t\t\t", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

function testParseAddressIDNoDelimiters() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta Jalan Medan Merdeka Selatan No. xx Jakarta Selatan 10110 INDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

/*function testParseAddressIDSpecialChars() {
	var parsedAddress = new ilib.Address("Botanisk Centralbibliotek,Sølvgade 83, opg. S,ID-1307 København K.,INDONESIA", {locale: 'id-ID'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Botanisk Centralbibliotek,Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("København",parsedAddress.locality);
	assertEquals("ID-1307", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};*/

function testParseAddressIDFromUS() {
	var parsedAddress = new ilib.Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx,Jakarta Selatan 10110,INDONESIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Jakarta Selatan", parsedAddress.locality);
	assertEquals("10110", parsedAddress.postalCode);
	assertEquals("INDONESIA", parsedAddress.country);
	assertEquals("ID", parsedAddress.countryCode);
};

function testFormatAddressID() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx",
		locality: "Jakarta Selatan",
		postalCode: "10110",
		country: "INDONESIA",
		countryCode: "ID"
	}, {locale: 'id-ID'});
	
	var expected = "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx\nJakarta Selatan 10110\nINDONESIA";
	var formatter = new ilib.AddressFmt({locale: 'id-ID'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressIDFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx",
		postalCode: "10110",
		country: "Indonesia",
		countryCode: "ID"
	}, {locale: 'en-US'});
	
	var expected = "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx\n10110\nIndonesia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
