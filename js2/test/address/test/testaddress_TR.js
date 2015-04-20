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

function testParseAddressTRNormal() {
	var parsedAddress = new Address("Orhaniye Street No 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};

function testParseAddressTRNoZip() {
	var parsedAddress = new Address("Teyfikhane Sok No 1\nSultanahmet Istanbul\nTurkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Teyfikhane Sok No 1", parsedAddress.streetAddress);
	assertEquals("Sultanahmet", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressTRNoCountry() {
	var parsedAddress = new Address("Orhaniye Street No 14\nSirkeci Istanbul 34120", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};

function testParseAddressTRNoDelimiters() {
	var parsedAddress = new Address("Orhaniye Street No 14 Sirkeci Istanbul 34120 Turkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressTROneLine() {
	var parsedAddress = new Address("Orhaniye Street , No 14 , Sirkeci , Istanbul , 34120 , Turkey", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street, No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressTROther() {
	var parsedAddress = new Address("Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR  ISTANBUL 34692\nTURKEY", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Alemdag Cad. Yanyol Sok. No 6-8", parsedAddress.streetAddress);
	assertEquals("ÜSKÜDAR", parsedAddress.locality);
	assertEquals("ISTANBUL", parsedAddress.region);
	assertEquals("34692", parsedAddress.postalCode);
	assertEquals("TURKEY", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};


function testParseAddressTRManyLines() {
	var parsedAddress = new Address("Orhaniye Street\nNo 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Orhaniye Street, No 14", parsedAddress.streetAddress);
	assertEquals("Sirkeci", parsedAddress.locality);
	assertEquals("Istanbul", parsedAddress.region);
	assertEquals("34120", parsedAddress.postalCode);
	assertEquals("Turkey", parsedAddress.country);
	assertEquals("TR", parsedAddress.countryCode);
};



function testFormatAddressTR() {
	var parsedAddress = new Address({
		streetAddress: "Alemdag Cad. Yanyol Sok. No 6-8",
		locality: "ÜSKÜDAR",
		postalCode: "34692",
		region: "ISTANBUL",
		country: "TURKEY",
		countryCode: "TR"
	}, {locale: 'tr-TR'});
	
	var expected = "Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR ISTANBUL 34692\nTURKEY";
	var formatter = new AddressFmt({locale: 'tr-TR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTRFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Orhaniye Street No 14",
		locality: "Sirkeci",
		region: "Istanbul",
		postalCode: "34120",
		country: "Turkey",
		countryCode: "TR"
	}, {locale: 'en-US'});
	
	var expected = "Orhaniye Street No 14\nSirkeci Istanbul 34120\nTurkey";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

