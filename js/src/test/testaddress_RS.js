/*
 * testaddress_RS.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића 56 Нови Београд\n11070 Београд\nЦентрална Србија\nСрбија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Булевар Арсенија Чарнојевића 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића 56 Нови Београд\nБеоград\nЦентрална Србија\nСрбија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Булевар Арсенија Чарнојевића 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића 56 Нови Београд\n11070 Београд\nЦентрална Србија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Булевар Арсенија Чарнојевића 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића\n56 Нови Београд\n11070 Београд\nЦентрална Србија\nСрбија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Булевар Арсенија Чарнојевића, 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића , 56 Нови Београд , 11070 , Београд , Централна Србија , Србија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Булевар Арсенија Чарнојевића, 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевић\n\n\t56 Нови Београд\n\n\r11070\r\r\nБеоград\t\t\rЦентрална Србија\t\t\rСрбија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Булевар Арсенија Чарнојевић, 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Булевар Арсенија Чарнојевића 56 Нови Београд 11070 Београд Централна Србија Србија", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Булевар Арсенија Чарнојевића 56 Нови Београд", parsedAddress.streetAddress);
	assertEquals("Београд", parsedAddress.locality);
	assertEquals("Централна Србија", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Србија", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Bulevar Arsenija Carnojevica 56 New Belgrade\n11070 Belgrade\nCentral Serbia\nSerbia", {locale: 'sr-Latn-RS'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Bulevar Arsenija Carnojevica 56 New Belgrade", parsedAddress.streetAddress);
	assertEquals("Belgrade", parsedAddress.locality);
	assertEquals("Central Serbia", parsedAddress.region);
	assertEquals("11070", parsedAddress.postalCode);
	assertEquals("Serbia", parsedAddress.country);
	assertEquals("RS", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Булевар Арсенија Чарнојевића 56 Нови Београд",
		locality: "Београд",
		postalCode: "11070",
		region: "Централна Србија",
		country: "Србија",
		countryCode: "RS"
	}, {locale: 'sr-Latn-RS'});
	
	var expected = "Булевар Арсенија Чарнојевића 56 Нови Београд\n11070 Београд\nЦентрална Србија\nСрбија";
	var formatter = new ilib.AddressFmt({locale: 'sr-Latn-RS'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Булевар Арсенија Чарнојевића 56 Нови Београд",
		locality: "Београд",
		postalCode: "11070",
		region: "Централна Србија",
		country: "Србија",
		countryCode: "RS"
	}, {locale: 'en-US'});
	
	var expected = "Булевар Арсенија Чарнојевића 56 Нови Београд\n11070 Београд\nЦентрална Србија\nСрбија";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
