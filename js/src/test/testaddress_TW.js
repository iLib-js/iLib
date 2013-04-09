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

function testParseAddressTWLatinNormal() {
	var parsedAddress = new ilib.Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTaipei, 110\nTaiwan", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5", parsedAddress.streetAddress);
	assertEquals("Taipei", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("110", parsedAddress.postalCode);
	assertEquals("Taiwan", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWLatinNoZip() {
	var parsedAddress = new ilib.Address("3F-499, Jung-Ming S. Road, West District, Taichung, Taiwan, R.O.C.", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("3F-499, Jung-Ming S. Road, West District", parsedAddress.streetAddress);
	assertEquals("Taichung", parsedAddress.locality);
	assertEquals("Taiwan", parsedAddress.region);
	assertEquals("R.O.C.", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressTWLatinNoCountry() {
	var parsedAddress = new ilib.Address("3F, No.7\nShong-Ren Rd.\nTaipei City 11045", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("3F, No.7, Shong-Ren Rd.", parsedAddress.streetAddress);
	assertEquals("Taipei City", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("11045", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWAsianNormal() {
	var parsedAddress = new ilib.Address("中華民國高雄市苓雅區802四維三路6號18樓A", {locale: 'zh-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("苓雅區四維三路6號18樓A", parsedAddress.streetAddress);
	assertEquals("高雄市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("802", parsedAddress.postalCode);
	assertEquals("中華民國", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWAsianNoZip() {
	var parsedAddress = new ilib.Address("中華民國台灣省台北市南港區經貿二路66號10樓", {locale: 'zh-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("南港區經貿二路66號10樓", parsedAddress.streetAddress);
	assertEquals("台北市", parsedAddress.locality);
	assertEquals("台灣省", parsedAddress.region);
	assertEquals("中華民國", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressTWAsianNoCountry() {
	var parsedAddress = new ilib.Address("高雄市苓雅區 802 四維三路 6 號 26 樓", {locale: 'zh-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("苓雅區四維三路 6 號 26 樓", parsedAddress.streetAddress);
	assertEquals("高雄市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("802", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWAsianWithRegion() {
	var parsedAddress = new ilib.Address("中華民國台灣省台高雄市苓雅區802四維三路6號18樓A", {locale: 'zh-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("苓雅區四維三路6號18樓A", parsedAddress.streetAddress);
	assertEquals("台高雄市", parsedAddress.locality);
	assertEquals("台灣省", parsedAddress.region);
	assertEquals("802", parsedAddress.postalCode);
	assertEquals("中華民國", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWAsianZipAtEnd() {
	var parsedAddress = new ilib.Address("中華民國\n台灣省台高雄市苓雅區四維三路6號18樓A 80245", {locale: 'zh-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("苓雅區四維三路6號18樓A", parsedAddress.streetAddress);
	assertEquals("台高雄市", parsedAddress.locality);
	assertEquals("台灣省", parsedAddress.region);
	assertEquals("80245", parsedAddress.postalCode);
	assertEquals("中華民國", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWManyLines() {
	var parsedAddress = new ilib.Address("Level 73\nTaipei 101 Tower\n7 Xinyi Road\nSec. 5\nTaipei\n110\nTaiwan\n\n\n", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5", parsedAddress.streetAddress);
	assertEquals("Taipei", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("110", parsedAddress.postalCode);
	assertEquals("Taiwan", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWOneLine() {
	var parsedAddress = new ilib.Address("3F, 499, Jung-Ming S. Road, West District, Taichung, 403, Taiwan, R.O.C.", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("3F, 499, Jung-Ming S. Road, West District", parsedAddress.streetAddress);
	assertEquals("Taichung", parsedAddress.locality);
	assertEquals("Taiwan", parsedAddress.region);
	assertEquals("403", parsedAddress.postalCode);
	assertEquals("R.O.C.", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t3F, \t\rNo.7\n  \rShong-Ren Rd.\t\t   \n\r \t Taipei \t\tCity\r  \r \n  \tTaiwan  \t \t 110\t \n\t \r \t Republic of China\n\n\n", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("TW", parsedAddress.countryCode);
	assertEquals("Republic of China", parsedAddress.country);
	assertEquals("110", parsedAddress.postalCode);
	assertEquals("Taiwan", parsedAddress.region);
	assertEquals("Taipei City", parsedAddress.locality);
	assertEquals("3F, No.7, Shong-Ren Rd.", parsedAddress.streetAddress);
};

function testParseAddressTWNoDelimiters() {
	var parsedAddress = new ilib.Address("3F 499 Jung-Ming S. Road West District Taichung 403 Taiwan R.O.C.", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("3F 499 Jung-Ming S. Road West District", parsedAddress.streetAddress);
	assertEquals("Taichung", parsedAddress.locality);
	assertEquals("Taiwan", parsedAddress.region);
	assertEquals("403", parsedAddress.postalCode);
	assertEquals("R.O.C.", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWSpecialChars() {
	var parsedAddress = new ilib.Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTáiběi, 110\nTáiwān\nROC", {locale: 'en-TW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5", parsedAddress.streetAddress);
	assertEquals("Táiběi", parsedAddress.locality);
	assertEquals("Táiwān", parsedAddress.region);
	assertEquals("110", parsedAddress.postalCode);
	assertEquals("ROC", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testParseAddressTWFromUS() {
	var parsedAddress = new ilib.Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTaipei, 110\nTaiwan\nRepublic of China", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5", parsedAddress.streetAddress);
	assertEquals("Taipei", parsedAddress.locality);
	assertEquals("Taiwan", parsedAddress.region);
	assertEquals("110", parsedAddress.postalCode);
	assertEquals("Republic of China", parsedAddress.country);
	assertEquals("TW", parsedAddress.countryCode);
};

function testFormatAddressTWLatin() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5",
		locality: "Taipei",
		region: "Taiwan",
		postalCode: "11045",
		country: "Republic of China",
		countryCode: "TW",
		format: "latin"
	}, {locale: 'en-TW'});
	
	var expected = "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5\nTaipei, Taiwan, 11045\nRepublic of China";
	var formatter = new ilib.AddressFmt({locale: 'en-TW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTWAsian() {
	var parsedAddress = new ilib.Address({
		streetAddress: "苓雅區四維三路6號18樓A",
		locality: "高雄市",
		region: "台灣省",
		postalCode: "80212",
		country: "中華民國",
		countryCode: "TW",
		format: "asian"
	}, {locale: 'zh-TW'});
	
	var expected = "中華民國\n台灣省高雄市苓雅區四維三路6號18樓A80212";
	var formatter = new ilib.AddressFmt({locale: 'zh-TW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTWFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5",
		locality: "Taipei",
		region: "Taiwan",
		postalCode: "11045",
		country: "Republic of China",
		countryCode: "TW",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5\nTaipei, Taiwan, 11045\nRepublic of China";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
