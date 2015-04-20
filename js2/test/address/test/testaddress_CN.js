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
function testParseAddressCNLatinNormal() {
	var parsedAddress = new Address("L30, Unit 3007, Teemtower, Teemmall,\n208 Tianhe Road, Tianhe District,\nGuangzhou, Guangdong 510620\nChina", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("L30, Unit 3007, Teemtower, Teemmall, 208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guangzhou", parsedAddress.locality);
	assertEquals("Guangdong", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNLatinNoZip() {
	var parsedAddress = new Address("No. 1 Zhongguancun East Road\nHaidian District\nBeijing, People's Republic of China", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 1 Zhongguancun East Road, Haidian District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("People's Republic of China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCNLatinNoCountry() {
	var parsedAddress = new Address("No.268 Xizang Zhong Road, Huangpu District\nShanghai, 200001", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.268 Xizang Zhong Road, Huangpu District", parsedAddress.streetAddress);
	assertEquals("Shanghai", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("200001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNAsianNormal() {
	var parsedAddress = new Address("中国北京市朝阳区建国路112号 中国惠普大厦100022", {locale: 'zh-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("建国路112号 中国惠普大厦", parsedAddress.streetAddress);
	assertEquals("朝阳区", parsedAddress.locality);
	assertEquals("北京市", parsedAddress.region);
	assertEquals("100022", parsedAddress.postalCode);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNAsianNoZip() {
	var parsedAddress = new Address("中国武汉市汉口建设大道568号新世界国贸大厦I座9楼910室", {locale: 'zh-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCNAsianNoCountry() {
	var parsedAddress = new Address("北京市朝阳区北四环中路 27号盘古大观 A 座 23层200001", {locale: 'zh-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("北四环中路 27号盘古大观 A 座 23层", parsedAddress.streetAddress);
	assertEquals("北京市", parsedAddress.region);
	assertEquals("朝阳区", parsedAddress.locality);
	assertEquals("200001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNAsianNOExplicitCityDistrict() {
	var parsedAddress = new Address("中国四川成都领事馆路4号,邮编 610041", {locale: 'zh-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("领事馆路4号邮编", parsedAddress.streetAddress);
	assertEquals("四川", parsedAddress.region);
	assertEquals("成都", parsedAddress.locality);
	assertEquals("610041", parsedAddress.postalCode);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNAsianWithRegion() {
	var parsedAddress = new Address("中国湖北省武汉市汉口建设大道568号新世界国贸大厦I座9楼910室430000", {locale: 'zh-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertEquals("湖北省", parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertEquals("430000", parsedAddress.postalCode);
};

function testParseAddressCNManyLines() {
	var parsedAddress = new Address("Tsinghua Science Park Bldg 6\nNo. 1 Zhongguancun East Road\nHaidian District\nBeijing 100084\nPRC\n\n", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tsinghua Science Park Bldg 6, No. 1 Zhongguancun East Road, Haidian District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100084", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNOneLine() {
	var parsedAddress = new Address("No. 27, Central North Fourth Ring Road, Chaoyang District, Beijing 100101, PRC", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27, Central North Fourth Ring Road, Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tNo. 27, Central North Fourth \r\t   \tRing Road\t\t\n\t, Chaoyang \r\tDistrict\n\t\rBeijing\t\r\n100101\n\t\t\r\rPRC\t\n\n\n", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27, Central North Fourth Ring Road, Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNNoDelimiters() {
	var parsedAddress = new Address("No. 27 Central North Fourth Ring Road Chaoyang District Beijing 100101 PRC", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27 Central North Fourth Ring Road Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNSpecialChars() {
	var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'en-CN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngzhōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressCNFromUS() {
	var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngzhōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testFormatAddressCNLatin() {
	var parsedAddress = new Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngzhōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "China",
		countryCode: "CN",
		format: "latin"
	}, {locale: 'en-CN'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
	var formatter = new AddressFmt({locale: 'en-CN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCNFromUS() {
	var parsedAddress = new Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngzhōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "China",
		countryCode: "CN",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
