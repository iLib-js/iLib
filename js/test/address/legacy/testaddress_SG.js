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

function testParseAddressSGSGLatinNormal() {
	var parsedAddress = new ilib.Address("#38-01/01A\n8 Shenton Way\nSingapore 068811\nSingapore", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("#38-01/01A, 8 Shenton Way", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("068811", parsedAddress.postalCode);
	assertEquals("Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGLatinNoZip() {
	var parsedAddress = new ilib.Address("9 Changi Business Park Central 1\nSingapore", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("9 Changi Business Park Central 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressSGSGLatinNoCountry() {
	var parsedAddress = new ilib.Address("#38-01/01A\n8 Shenton Way\nSingapore 068811", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("#38-01/01A, 8 Shenton Way", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("068811", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGAsianNormal() {
	var parsedAddress = new ilib.Address("新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertEquals("新加坡", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertEquals("新加坡共和國", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGAsianNoZip() {
	var parsedAddress = new ilib.Address("新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("新加坡", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGAsianNoCountry() {
	var parsedAddress = new ilib.Address("159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("麟記路4＃06-07/08矽統科技大廈", parsedAddress.streetAddress);
	assertEquals("新加坡", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGManyLines() {
	var parsedAddress = new ilib.Address("Blk 111\nAng Mo Kio Avenue 4\nSingapore\n560111\nRepublic of Singapore\n\n", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Blk 111, Ang Mo Kio Avenue 4", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("560111", parsedAddress.postalCode);
	assertEquals("Republic of Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGOneLine() {
	var parsedAddress = new ilib.Address("152 Beach Rd., #16-00 Gateway East, Singapore 189721, The Republic of Singapore", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("152 Beach Rd., #16-00 Gateway East", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("189721", parsedAddress.postalCode);
	assertEquals("The Republic of Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t2 Orchard Turn\t\t\r\n\t#04-05\r\t ION \tOrchard\t\nSingapore \r\t\n238801\n\t\rSingapore\n\n", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("2 Orchard Turn, #04-05 ION Orchard", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("238801", parsedAddress.postalCode);
	assertEquals("Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGNoDelimiters() {
	var parsedAddress = new ilib.Address("152 Beach Rd. #16-00 Gateway East Singapore 189721 The Republic of Singapore", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("152 Beach Rd. #16-00 Gateway East", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("189721", parsedAddress.postalCode);
	assertEquals("The Republic of Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGSpecialChars() {
	var parsedAddress = new ilib.Address("Lín Jì Lù 4\n# 06-07/08 Xì Tǒng Kējì Dàshà\nSingapore 159088\n", {locale: 'en-SG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Lín Jì Lù 4, # 06-07/08 Xì Tǒng Kējì Dàshà", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("159088", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testParseAddressSGSGFromUS() {
	var parsedAddress = new ilib.Address("#38-01/01A\n8 Shenton Way\nSingapore 068811\nSingapore", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("#38-01/01A, 8 Shenton Way", parsedAddress.streetAddress);
	assertEquals("Singapore", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("068811", parsedAddress.postalCode);
	assertEquals("Singapore", parsedAddress.country);
	assertEquals("SG", parsedAddress.countryCode);
};

function testFormatAddressSGLatin() {
	var parsedAddress = new ilib.Address({
		streetAddress: "#38-01/01A, 8 Shenton Way",
		locality: "Singapore",
		postalCode: "068811",
		country: "Singapore",
		countryCode: "SG",
		format: "latin"
	}, {locale: 'en-SG'});
	
	var expected = "#38-01/01A, 8 Shenton Way\nSingapore 068811\nSingapore";
	var formatter = new ilib.AddressFmt({locale: 'en-SG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSGAsian() {
	var parsedAddress = new ilib.Address({
		streetAddress: "麟記路4＃06-07/08矽統科技大廈",
		locality: "新加坡",
		postalCode: "159088",
		country: "新加坡共和國",
		countryCode: "SG",
		format: "asian"
	}, {locale: 'zh-SG'});
	
	var expected = "新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈";
	var formatter = new ilib.AddressFmt({locale: 'zh-SG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSGFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "#38-01/01A, 8 Shenton Way",
		locality: "Singapore",
		postalCode: "068811",
		country: "Republic of Singapore",
		countryCode: "SG",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "#38-01/01A, 8 Shenton Way\nSingapore 068811\nRepublic of Singapore";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
