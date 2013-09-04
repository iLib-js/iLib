/*
 * testaddress_PY.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ 03127\nУКРАЇНА", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\nУКРАЇНА", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ 03127", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Володимир Свідерський\nВУЛ ДУБІНІНА Володя 5\n\nКИЇВ\n\n03127\nУКРАЇНА\n\n\n", {locale: 'uk-UA'});
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Володимир Свідерський , ВУЛ ДУБІНІНА Володя 5 , КИЇВ , 03127 , УКРАЇНА", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tВолодимир Свідерський\n\t\t\rВУЛ ДУБІНІНА\t\t\rВолодя\t\t5\n\n\nКИЇВ\n\n03127\n\t УКРАЇНА\n\n\n", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5 КИЇВ 03127 УКРАЇНА", {locale: 'uk-UA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ 03127\nУКРАЇНА", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5", parsedAddress.streetAddress);
	assertEquals("КИЇВ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("03127", parsedAddress.postalCode);
	assertEquals("УКРАЇНА", parsedAddress.country);
	assertEquals("UA", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5",
		locality: "КИЇВ",
		postalCode: "03127",
		country: "УКРАЇНА",
		countryCode: "UA"
	}, {locale: 'uk-UA'});
	
	var expected = "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ 03127\nУКРАЇНА";
	var formatter = new ilib.AddressFmt({locale: 'uk-UA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5",
		locality: "КИЇВ",
		postalCode: "03127",
		country: "УКРАЇНА",
		countryCode: "UA"
	}, {locale: 'en-US'});
	
	var expected = "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ 03127\nУКРАЇНА";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
