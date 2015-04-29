/*
 * testaddress_TH.js - test the address parsing and formatting routines
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

function testParseAddressTHNormal() {
	var parsedAddress = new ilib.Address("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ 10330\nประเทศไทย", {locale: 'th-Th'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี", parsedAddress.streetAddress);
	assertEquals("เขตปทุมวัน", parsedAddress.locality);
	assertEquals("กรุงเทพฯ", parsedAddress.region);
	assertEquals("10330", parsedAddress.postalCode);
	assertEquals("ประเทศไทย", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};



function testParseAddressTHNoZip() {
	var parsedAddress = new ilib.Address("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ\nประเทศไทย", {locale: 'th-Th'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี", parsedAddress.streetAddress);
	assertEquals("เขตปทุมวัน", parsedAddress.locality);
	assertEquals("กรุงเทพฯ", parsedAddress.region);
	assertEquals("ประเทศไทย", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressTHNoCountry() {
	var parsedAddress = new ilib.Address("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า", parsedAddress.streetAddress);
	assertEquals("อำเภอเมือง", parsedAddress.locality);
	assertEquals("นนทบุรี", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};

function testParseAddressTHManyLines() {
	var parsedAddress = new ilib.Address("112/119\nมณียา สมบูรณ์ ผลงานชิ้นเอก\nไทรม้า\nเขตปทุมวัน\nกรุงเทพฯ\n11000\nประเทศไทย", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119, มณียา สมบูรณ์ ผลงานชิ้นเอก, ไทรม้า", parsedAddress.streetAddress);
	assertEquals("เขตปทุมวัน", parsedAddress.locality);
	assertEquals("กรุงเทพฯ", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("ประเทศไทย", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testParseAddressTHOneLine() {
	var parsedAddress = new ilib.Address("112/119,มณียา สมบูรณ์ ผลงานชิ้นเอก,ไทรม้า\nเขตปทุมวัน,กรุงเทพฯ,11000,ประเทศไทย", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119, มณียา สมบูรณ์ ผลงานชิ้นเอก, ไทรม้า", parsedAddress.streetAddress);
	assertEquals("เขตปทุมวัน", parsedAddress.locality);
	assertEquals("กรุงเทพฯ", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("ประเทศไทย", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testParseAddressTHOther() {
	var parsedAddress = new ilib.Address("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000\nประเทศไทย", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า", parsedAddress.streetAddress);
	assertEquals("อำเภอเมือง", parsedAddress.locality);
	assertEquals("นนทบุรี", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("ประเทศไทย", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testFormatAddressTH() {
	var parsedAddress = new ilib.Address({
		streetAddress: "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี",
		locality: "เขตปทุมวัน",
		postalCode: "10330",
		region: "กรุงเทพฯ",
		country: "ประเทศไทย",
		countryCode: "TH"
	}, {locale: 'th-TH'});
	
	var expected = "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ 10330\nประเทศไทย";
	var formatter = new ilib.AddressFmt({locale: 'tH-TH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTHFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า",
		locality: "อำเภอเมือง",
		region: "นนทบุรี",
		postalCode: "11000",
		country: "Thailand",
		countryCode: "TH"
	}, {locale: 'en-US'});
	var expected = "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000\nThailand";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

