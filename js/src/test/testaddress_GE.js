/*
 * testaddress_GE.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nГРУЗИЯ", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ\nГРУЗИЯ", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ, 0100", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай \nУлица Казбеги 19\n\nТБИЛИСИ\n\n0100\nГРУЗИЯ\n\n\n", {locale: 'ru-GE'});
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай, Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай , Улица Казбеги 19 , ТБИЛИСИ , 0100 , ГРУЗИЯ", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай, Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tГ-н Лали Хай \n\t\tУлица Казбеги 19\n\n\nТБИЛИСИ\n\n0100\n\t ГРУЗИЯ\n\n\n", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай, Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай Улица Казбеги 19 ТБИЛИСИ 0100 ГРУЗИЯ", {locale: 'ru-GE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("ГРУЗИЯ", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nGeorgia", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Г-н Лали Хай Улица Казбеги 19", parsedAddress.streetAddress);
	assertEquals("ТБИЛИСИ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0100", parsedAddress.postalCode);
	assertEquals("Georgia", parsedAddress.country);
	assertEquals("GE", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Г-н Лали Хай Улица Казбеги 19",
		locality: "ТБИЛИСИ",
		postalCode: "0100",
		country: "ГРУЗИЯ",
		countryCode: "GE"
	}, {locale: 'ru-GE'});
	
	var expected = "Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nГРУЗИЯ";
	var formatter = new ilib.AddressFmt({locale: 'ru-GE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Г-н Лали Хай Улица Казбеги 19",
		locality: "ТБИЛИСИ",
		postalCode: "0100",
		country: "Georgia",
		countryCode: "GE"
	}, {locale: 'en-US'});
	
	var expected = "Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nGeorgia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
