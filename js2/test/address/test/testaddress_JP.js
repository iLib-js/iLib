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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressJPSimple() {
	var parsedAddress = new Address("5-2-1 Ginza, Chuo-ku\nTokyo 170-3293\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5-2-1 Ginza", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("170-3293", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPLatinNormal() {
	var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo 100-8994\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPLatinNoZip() {
	var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressJPLatinNoCountry() {
	var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo 100-8994", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPAsianNormal1() {
	var parsedAddress = new Address("〒150-2345 東京都渋谷区本町2丁目4-7サニーマンション203", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("本町2丁目4-7サニーマンション203", parsedAddress.streetAddress);
	assertEquals("渋谷区", parsedAddress.locality);
	assertEquals("東京都",parsedAddress.region);
	assertEquals("〒150-2345", parsedAddress.postalCode);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPAsianNormal2() {
	var parsedAddress = new Address("〒108-8282\n東京都港区港南2-16-1\n品川イーストワンタワー", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("港南2-16-1品川イーストワンタワー", parsedAddress.streetAddress);
	assertEquals("港区", parsedAddress.locality);
	assertEquals("東京都",parsedAddress.region);
	assertEquals("〒108-8282", parsedAddress.postalCode);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPAsianNormal3() {
	var parsedAddress = new Address("623-0006京都府綾部市有岡町田坂１６", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("有岡町田坂１６", parsedAddress.streetAddress);
	assertEquals("綾部市", parsedAddress.locality);
	assertEquals("京都府",parsedAddress.region);
	assertEquals("623-0006", parsedAddress.postalCode);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPAsianNoZip() {
	var parsedAddress = new Address("東京都港区港南2-16-1n品川イーストワンタワー", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("港南2-16-1n品川イーストワンタワー", parsedAddress.streetAddress);
	assertEquals("港区", parsedAddress.locality);
	assertEquals("東京都",parsedAddress.region);
	assertEquals("JP", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressJPAsianNoCountry() {	
	var parsedAddress = new Address("100-8994東京都中央区\n東京中央郵便局、2085-3、八重洲1丁目", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("東京中央郵便局、2085-3、八重洲1丁目", parsedAddress.streetAddress);
	assertEquals("中央区", parsedAddress.locality);
	assertEquals("東京都",parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPManyLines() {
	var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3\nYaesu 1-Chome\nChuo-ku\nTokyo\n100-8994\nJapan\n\n\n", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo",parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPOneLine() {
	var parsedAddress = new Address("6-11 SHIMOHONDA, KOYASU-CHO, HACHIOJI, TOKYO 192-0993, JAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA, KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI", parsedAddress.locality);
	assertEquals("TOKYO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t6-11 SHIMOHONDA \r\t   \tKOYASU-CHO\t\t\t, HACHIOJI-SHI \r\tTOKYO 192-0993\t\n\n\nJAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI-SHI", parsedAddress.locality);
	assertEquals("TOKYO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPNoDelimiters() {
	var parsedAddress = new Address("6-11 SHIMOHONDA KOYASU-CHO HACHIOJI-SHI TOKYO 192-0993 JAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI-SHI", parsedAddress.locality);
	assertEquals("TOKYO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressJPFromUS() {
	var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nChūō, Tōkyō 192-0993\nJapan", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Chūō", parsedAddress.locality);
	assertEquals("Tōkyō", parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testFormatAddressJPLatin() {
	var parsedAddress = new Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Chūō",
		region: "Tōkyō",
		postalCode: "192-0993",
		country: "Japan",
		countryCode: "JP",
		format: "latin"
	}, {locale: 'en-JP'});
	
	var expected = "208 Tianhe Road, Tianhe District\nChūō, Tōkyō 192-0993\nJapan";
	var formatter = new AddressFmt({locale: 'en-JP'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressJPFromUS() {
	var parsedAddress = new Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Chūō",
		region: "Tōkyō",
		postalCode: "192-0993",
		country: "Japan",
		countryCode: "JP",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "208 Tianhe Road, Tianhe District\nChūō, Tōkyō 192-0993\nJapan";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressJPAsianNormal() {
	var parsedAddress = new Address({
		streetAddress: "本町2丁目4-7サニーマンション203",
		locality: "渋谷区",
		region: "東京都",
		postalCode: "〒150-2345",
		countryCode: "JP",
		format: "asian"
	}, {locale: 'ja-JP'});
	
	var expected = "〒150-2345\n東京都渋谷区本町2丁目4-7サニーマンション203";
	var formatter = new AddressFmt({locale: 'ja-JP'});
	assertEquals(expected, formatter.format(parsedAddress));
};

