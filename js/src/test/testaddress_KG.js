/*
 * testaddress_KG.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("720001\nБИШКЕК\nПроспект Чуй\n193\nкв. 28 Колупаева\nАнара\nКиргизия\n\n\n", {locale: 'ru-KG'});
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева, Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("720001 , БИШКЕК , Проспект Чуй , 193 , кв. 28 Колупаева , Анара , Киргизия", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева, Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t720001\t\t\nБИШКЕК\t\t\nПроспект Чуй\t\t193\t\tкв. 28 Колупаева\t\tАнара\t\nКиргизия\n\n\n", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй 193 кв. 28 Колупаева Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("720001 БИШКЕК Проспект Чуй 193 кв. 28 Колупаева Анара Киргизия", {locale: 'ru-KG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marvan Sangakkara 25/1 Cyril Jansz Mawatha", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Киргизия", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nKyrgyzstan", {locale: 'en-US'});
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Проспект Чуй, 193, кв. 28 Колупаева Анара", parsedAddress.streetAddress);
	assertEquals("БИШКЕК", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("720001", parsedAddress.postalCode);
	assertEquals("Kyrgyzstan", parsedAddress.country);
	assertEquals("KG", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Проспект Чуй, 193, кв. 28 Колупаева Анара",
		locality: "БИШКЕК",
		postalCode: "720001",
		country: "Киргизия",
		countryCode: "KG"
	}, {locale: 'ru-KG'});
	
	var expected = "720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия";
	var formatter = new ilib.AddressFmt({locale: 'ru-KG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Проспект Чуй, 193, кв. 28 Колупаева Анара",
		locality: "БИШКЕК",
		postalCode: "720001",
		country: "Kyrgyzstan",
		countryCode: "KG"
	}, {locale: 'en-US'});
	
	var expected = "720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nKyrgyzstan";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
