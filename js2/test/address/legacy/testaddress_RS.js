/*
 * testaddress_RS.js - test the address parsing and formatting routines
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

function testParseAddressRSNormal() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Boulevard arsenicum Carnojevica 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSNoZip() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\nBelgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Boulevard arsenicum Carnojevica 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressRSNoCountry() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Boulevard arsenicum Carnojevica 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSManyLines() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica\n56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Boulevard arsenicum Carnojevica, 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSOneLine() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica , 56 Novi Belgradum , 11070 , Belgradum , Central-Serbia , Serbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Boulevard arsenicum Carnojevica, 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Чарнојевић\n\n\t56 Novi Belgradum\n\n\r11070\r\r\nBelgradum\t\t\rCentral-Serbia\t\t\rSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Boulevard arsenicum Чарнојевић, 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSNoDelimiters() {
	var parsedAddress = new ilib.Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum 11070 Belgradum Central-Serbia Serbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Boulevard arsenicum Carnojevica 56 Novi Belgradum", parsedAddress.streetAddress);
	assertEquals("Belgradum", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressRSFromUS() {
	var parsedAddress = new ilib.Address("Bulevar Arsenija Carnojevica 56 New Belgrade\n11070 Belgrade\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Bulevar Arsenija Carnojevica 56 New Belgrade", parsedAddress.streetAddress);
	assertEquals("Belgrade", parsedAddress.locality);
	assertEquals("Central-Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testFormatAddressRS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Boulevard arsenicum Carnojevica 56 Novi Belgradum",
		locality: "Belgradum",
		postalCode: "11070",
		region: "Central-Serbia",
		country: "Serbia",
		countryCode: "RS"
	}, {locale: 'sr-Latn-RS'});
	
	var expected = "Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia";
	var formatter = new ilib.AddressFmt({locale: 'sr-Latn-RS'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressRSFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Boulevard arsenicum Carnojevica 56 Novi Belgradum",
		locality: "Belgradum",
		postalCode: "11070",
		region: "Central-Serbia",
		country: "Serbia",
		countryCode: "RS"
	}, {locale: 'en-US'});
	
	var expected = "Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
