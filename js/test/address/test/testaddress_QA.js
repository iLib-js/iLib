/*
 * testaddress_QA.js - test the address parsing and formatting routines
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
function testParseAddressQANormal() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("قطر", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressQANoZip() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("قطر", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressQANoCountry() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressQAManyLines() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\nمكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\n\nقطر\n\n\n", {locale: 'ar-QA'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("قطر", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressQAOneLine() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ , ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣ , ﺎﻟﺩﻮﺣﺓ , قطر", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("قطر", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressQASuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\n\n\tمكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\n\t\n\n\tﺎﻟﺩﻮﺣﺓ\n\n\tقطر\n\n\n", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("قطر", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};



function testParseAddressQAFromUS() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\nQatar", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Qatar", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testFormatAddressQA() {
	var parsedAddress = new Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
		locality: "ﺎﻟﺩﻮﺣﺓ",
		country: "قطر",
		countryCode: "QA"
	}, {locale: 'ar-QA'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر";
	var formatter = new AddressFmt({locale: 'ar-QA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressQAFromUS() {
	var parsedAddress = new Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
		locality: "ﺎﻟﺩﻮﺣﺓ",
		country: "Qatar",
		countryCode: "QA"
	}, {locale: 'en-US'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nQatar";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
