/*
 * testaddress_VE.js - test the address parsing and formatting routines
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

function testParseAddressHNNormal() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNNoZip() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\nLAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressHNNoCountry() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNManyLines() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNOneLine() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel , CM1102 , LAS LAJAS , Comayagua , HONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\n\n\n\rCM1102\r\nLAS LAJAS\r\r\rComayagua\t\t\rHONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
        assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNNoDelimiters() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel CM1102 LAS LAJAS Comayagua HONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testParseAddressHNFromUS() {
	var parsedAddress = new ilib.Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan C. Martel", parsedAddress.streetAddress);
	assertEquals("LAS LAJAS", parsedAddress.locality);
	assertEquals("Comayagua", parsedAddress.region);
	assertEquals("CM1102", parsedAddress.postalCode);
	assertEquals("HONDURAS", parsedAddress.country);
	assertEquals("HN", parsedAddress.countryCode);
};

function testFormatAddressHN() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Sr. Juan C. Martel",
		locality: "LAS LAJAS",
		postalCode: "CM1102",
		region: "Comayagua",
		country: "HONDURAS",
		countryCode: "HN"
	}, {locale: 'es-HN'});
	
	var expected = "Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS";
	var formatter = new ilib.AddressFmt({locale: 'es-HN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressHNFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Sr. Juan C. Martel",
		locality: "LAS LAJAS",
		postalCode: "CM1102",
		region: "Comayagua",
		country: "HONDURAS",
		countryCode: "HN"
	}, {locale: 'en-US'});
	
	var expected = "Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
