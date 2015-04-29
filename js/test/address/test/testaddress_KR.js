/*
 * testaddress.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressKRNormal() {
	var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742\nSOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNormalNative() {
	var parsedAddress = new Address("대한민국\n151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRWithBrackets() {
	var parsedAddress = new Address("(609-735) 부산광역시 금정구 부산대학로63번길 2 (장전동)", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("금정구 부산대학로63번길 2 (장전동)", parsedAddress.streetAddress);
	assertEquals("부산광역시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("(609-735)", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRWithRegion() {
	var parsedAddress = new Address("Chuncheon National University of Education.\nGongji Ro 126, Chuncheon 200-703, Gangwon-Do, Republic of Korea", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Chuncheon National University of Education., Gongji Ro 126", parsedAddress.streetAddress);
	assertEquals("Chuncheon", parsedAddress.locality);
	assertEquals("Gangwon-Do", parsedAddress.region);
	assertEquals("200-703", parsedAddress.postalCode);
	assertEquals("Republic of Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRWithRegionNative() {
	var parsedAddress = new Address("(200-703) 강원도 춘천시 공지로 126(석사동)", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("(200-703)", parsedAddress.postalCode);
	assertEquals("강원도", parsedAddress.region);
	assertEquals("춘천시", parsedAddress.locality);
	assertEquals("공지로 126(석사동)", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoZip() {
	var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul\nSOUTH KOREA", {locale: 'ko-KR'});

	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoZipNative() {
	var parsedAddress = new Address("대한민국\n서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});

	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoCountry() {
	var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoCountryNative() {
	var parsedAddress = new Address("151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRManyLines() {
	var parsedAddress = new Address("Seoul National University\n1 Gwanak-ro\nGwanak-gu\nSeoul\n151-742\nKorea\n", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRManyLinesNative() {
	var parsedAddress = new Address("대한민국\n151-742\n서울시\n관악구 관악로\n1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKROneLine() {
	var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742, SOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKROneLineNative() {
	var parsedAddress = new Address("대한민국, 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoDelimiters() {
	var parsedAddress = new Address("Seoul National University 1 Gwanak-ro Gwanak-gu Seoul 151-742 SOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University 1 Gwanak-ro Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoDelimitersNative() {
	var parsedAddress = new Address("대한민국 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("관악구 관악로 1 서울대학교", parsedAddress.streetAddress);
	assertEquals("서울시", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRLatinFromUS() {
	var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nRepublic of Korea", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Seoul National University, 1 Gwanak-ro, Gwanak-gu", parsedAddress.streetAddress);
	assertEquals("Seoul", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("151-742", parsedAddress.postalCode);
	assertEquals("Republic of Korea", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testFormatAddressKRLatin() {
	var parsedAddress = new Address({
		streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
		locality: "Seoul",
		postalCode: "151-742",
		country: "SOUTH KOREA",
		countryCode: "KR",
		format: "latin"
	}, {locale: 'ko-KR'});
	
	var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
	var formatter = new AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRLatinWithRegion() {
	var parsedAddress = new Address({
		streetAddress: "Chuncheon National University of Education, 339 Seoksa-dong",
		locality: "Chuncheon-si",
		region: "Gangwon-do",
		postalCode: "200-703",
		country: "South Korea",
		countryCode: "KR",
		format: "latin"
	}, {locale: 'ko-KR'});
	
	var expected = "Chuncheon National University of Education, 339 Seoksa-dong\nChuncheon-si Gangwon-do 200-703\nSouth Korea";
	var formatter = new AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRLatinFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
		locality: "Seoul",
		postalCode: "151-742",
		country: "SOUTH KOREA",
		countryCode: "KR",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRNative() {
	var parsedAddress = new Address({
		streetAddress: "관악구 관악로 1 서울대학교",
		locality: "서울시",
		postalCode: "151-742",
		country: "대한민국",
		countryCode: "KR",
		format: "asian"
	}, {locale: 'ko-KR'});
	
	var expected = "대한민국\n151-742 서울시 관악구 관악로 1 서울대학교";
	var formatter = new AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRNativeWithRegion() {
	var parsedAddress = new Address({
		streetAddress: "공지로 126(석사동)",
		locality: "춘천시",
		region: "강원도",
		postalCode: "(200-703)",
		country: "대한민국",
		countryCode: "KR",
		format: "asian"
	}, {locale: 'ko-KR'});
	
	var expected = "대한민국\n(200-703) 강원도 춘천시 공지로 126(석사동)";
	var formatter = new AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

