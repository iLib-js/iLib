/*
 * testaddress_OM.js - test the address parsing and formatting routines
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

function testParseAddressOMNormal() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMNoZip() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressOMNoCountry() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMManyLines() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ\n٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\n\nعُمان\n\n\n", {locale: 'ar-OM'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMOneLine() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ,  ٣٣٨ - ﺭﻮﻳ , ١١٢ , ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ , عُمان", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﻡﻭﺎﻘﻓ ﻑﺮﻋ\n\n\t٣٣٨ - ﺭﻮﻳ\n\n\t١١٢\n\n\tﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\n\n\tعُمان\n\n\n", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMNoDelimiters() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ ١١٢  ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ عُمان", {locale: 'ar-OM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("عُمان", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOMFromUS() {
	var parsedAddress = new ilib.Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nOman", {locale: 'en-US'});
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١٢", parsedAddress.postalCode);
	assertEquals("Oman", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testFormatAddressOM() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ",
		locality: "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ",
		postalCode: "١١٢",
		country: "عُمان",
		countryCode: "OM"
	}, {locale: 'ar-OM'});
	
	var expected = "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان";
	var formatter = new ilib.AddressFmt({locale: 'ar-OM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressOMFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ",
		locality: "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ",
		postalCode: "١١٢",
		country: "Oman",
		countryCode: "OM"
	}, {locale: 'en-US'});
	
	var expected = "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nOman";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
