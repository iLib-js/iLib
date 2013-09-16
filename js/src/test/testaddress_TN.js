/*
 * testaddress_TN.js - test the address parsing and formatting routines
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

function testParseAddressTNNormal() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("تونس", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testParseAddressTNNoZip() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("تونس", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressTNNoCountry() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testParseAddressTNManyLines() {
	var parsedAddress = new ilib.Address("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\nتونس\n\n\n", {locale: 'ar-TN'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("تونس", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};


function testParseAddressTNSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n\n\tﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n\n\t٨١٢٩\n\n\tﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\n\tتونس\n\n\n", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("تونس", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};


function testParseAddressTNFromUS() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nTunisia", {locale: 'en-US'});
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("Tunisia", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testFormatAddressTN() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
		locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
		postalCode: "٨١٢٩",
		country: "تونس",
		countryCode: "TN"
	}, {locale: 'ar-TN'});
	
	var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس";
	var formatter = new ilib.AddressFmt({locale: 'ar-TN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTNFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
		locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
		postalCode: "٨١٢٩",
		country: "Tunisia",
		countryCode: "TN"
	}, {locale: 'en-US'});
	
	var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nTunisia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
