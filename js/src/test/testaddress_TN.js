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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nﺕﻮﻨﺳ", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("ﺕﻮﻨﺳ", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nﺕﻮﻨﺳ", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ﺕﻮﻨﺳ", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\nﺕﻮﻨﺳ\n\n\n", {locale: 'ar-TN'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("ﺕﻮﻨﺳ", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};


function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n\n\tﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n\n\t٨١٢٩\n\n\tﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\n\tﺕﻮﻨﺳ\n\n\n", {locale: 'ar-TN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("ﺕﻮﻨﺳ", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};


function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nﺕﻮﻨﺳ", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢", parsedAddress.streetAddress);
	assertEquals("ﻊﻴﻧ ﺩﺭﺎﻬﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٨١٢٩", parsedAddress.postalCode);
	assertEquals("ﺕﻮﻨﺳ", parsedAddress.country);
	assertEquals("TN", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
		locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
		postalCode: "٨١٢٩",
		country: "ﺕﻮﻨﺳ",
		countryCode: "TN"
	}, {locale: 'ar-TN'});
	
	var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nﺕﻮﻨﺳ";
	var formatter = new ilib.AddressFmt({locale: 'ar-TN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
		locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
		postalCode: "٨١٢٩",
		country: "ﺕﻮﻨﺳ",
		countryCode: "TN"
	}, {locale: 'en-US'});
	
	var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫ\nﺕﻮﻨﺳ";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
