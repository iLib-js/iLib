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

function testParseAddressLatinNormal() {
	var parsedAddress = new ilib.Address("L30, Unit 3007, Teemtower, Teemmall,\n208 Tianhe Road, Tianhe District,\nGuangzhou, Guangdong 510620\nChina", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("L30, Unit 3007, Teemtower, Teemmall, 208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guangzhou", parsedAddress.locality);
	assertEquals("Guangdong", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressLatinNoZip() {
	var parsedAddress = new ilib.Address("No. 1 Zhongguancun East Road\nHaidian District\nBeijing, People's Republic of China", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 1 Zhongguancun East Road, Haidian District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("People's Republic of China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLatinNoCountry() {
	var parsedAddress = new ilib.Address("No.268 Xizang Zhong Road, Huangpu District\nShanghai, 200001", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.268 Xizang Zhong Road, Huangpu District", parsedAddress.streetAddress);
	assertEquals("Shanghai", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("200001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressAsianNormal() {
	var parsedAddress = new ilib.Address("中国北京市朝阳区建国路112号 中国惠普大厦100022", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("朝阳区建国路112号 中国惠普大厦", parsedAddress.streetAddress);
	assertEquals("北京市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100022", parsedAddress.postalCode);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressAsianNoZip() {
	var parsedAddress = new ilib.Address("中国武汉市汉口建设大道568号新世界国贸大厦I座9楼910室", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressAsianNoCountry() {
	var parsedAddress = new ilib.Address("北京市朝阳区北四环中路 27号盘古大观 A 座 23层200001", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("朝阳区北四环中路 27号盘古大观 A 座 23层", parsedAddress.streetAddress);
	assertEquals("北京市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("200001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressAsianWithRegion() {
	var parsedAddress = new ilib.Address("中国湖北省武汉市汉口建设大道568号新世界国贸大厦I座9楼910室430000", {locale: 'zh-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertEquals("湖北省", parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
	assertEquals("430000", parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Tsinghua Science Park Bldg 6\nNo. 1 Zhongguancun East Road\nHaidian District\nBeijing 100084\nPRC\n\n", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tsinghua Science Park Bldg 6, No. 1 Zhongguancun East Road, Haidian District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100084", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("No. 27, Central North Fourth Ring Road, Chaoyang District, Beijing 100101, PRC", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27, Central North Fourth Ring Road, Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tNo. 27, Central North Fourth \r\t   \tRing Road\t\t\n\t, Chaoyang \r\tDistrict\n\t\rBeijing\t\r\n100101\n\t\t\r\rPRC\t\n\n\n", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27, Central North Fourth Ring Road, Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("No. 27 Central North Fourth Ring Road Chaoyang District Beijing 100101 PRC", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No. 27 Central North Fourth Ring Road Chaoyang District", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100101", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'pt-MO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngzhōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngzhōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("China", parsedAddress.country);
	assertEquals("CN", parsedAddress.countryCode);
};

function testFormatAddressLatin() {
	var parsedAddress = new ilib.Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngzhōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "China",
		countryCode: "CN",
		format: "latin"
	}, {locale: 'pt-MO'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
	var formatter = new ilib.AddressFmt({locale: 'pt-MO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngzhōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "China",
		countryCode: "CN",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
