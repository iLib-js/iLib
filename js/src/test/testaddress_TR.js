/*
 * testaddress_TR.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Orhaniye Street No 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};

function testParseAddressNormal1() {
	var parsedAddress = new ilib.Address("Teyfikhane Sok No 1\nSultanahmet Istanbul 34110Turkey\n", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Teyfikhane Sok No 1", parsedAddress.streetAddress);
	assertEquals("Sultanahmet", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
	assertEquals("34110", parsedAddress.postalCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Teyfikhane Sok No 1\nSultanahmet Istanbul\nTurkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Teyfikhane Sok No 1", parsedAddress.streetAddress);
	assertEquals("Sultanahmet", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Orhaniye Street No 14\nSirkeci Istanbul 34120", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Orhaniye Street No 14 Sirkeci Istanbul 34120 Turkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Orhaniye Street , No 14 , Sirkeci , Istanbul , 34120 , Turkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street, No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressOther() {
	var parsedAddress = new ilib.Address("Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR  ISTANBUL 34692\n", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Alemdag Cad. Yanyol Sok. No 6-8", parsedAddress.streetAddress);
	assertEquals("ÜSKÜDAR", parsedAddress.locality);
	assertEquals("ISTANBUL", parsedAddress.region);
	assertEquals("34692", parsedAddress.postalCode);
	assertEquals("TURKEY", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Orhaniye Street\nNo 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street, No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};



function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Alemdag Cad. Yanyol Sok. No 6-8",
		locality: "ÜSKÜDAR",
		postalCode: "34692",
		region: "ISTANBUL",
		country: "TURKEY",
		countryCode: "TR"
	}, {locale: 'tr-TR'});
	
	var expected = "Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR ISTANBUL 34692\n";
	var formatter = new ilib.AddressFmt({locale: 'tr-TR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Orhaniye Street No 14",
		locality: "Sirkeci",
		region: "Istanbul",
		postalCode: "34120",
		country: "Turkey",
		countryCode: "TR"
	}, {locale: 'en-US'});
	
	var expected = "Orhaniye Street No 14\nSirkeci Istanbul 34120\n";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

