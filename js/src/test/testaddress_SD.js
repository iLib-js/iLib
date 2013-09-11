/*
 * testaddress_SD.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nﺎﻠﺳﻭﺩﺎﻧ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺧﺮﻃﻮﻣ\nﺎﻠﺳﻭﺩﺎﻧ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\n\nﺎﻠﺳﻭﺩﺎﻧ\n\n\n", {locale: 'ar-OM'});
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ,  ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ , ١١١١١ , ﺎﻠﺧﺮﻃﻮﻣ , ﺎﻠﺳﻭﺩﺎﻧ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n\n\tﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n\n\t١١١١١\n\n\tﺎﻠﺧﺮﻃﻮﻣ\n\n\tﺎﻠﺳﻭﺩﺎﻧ\n\n\n", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ١١١١١  ﺎﻠﺧﺮﻃﻮﻣ ﺎﻠﺳﻭﺩﺎﻧ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nﺎﻠﺳﻭﺩﺎﻧ", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("ﺎﻠﺳﻭﺩﺎﻧ", parsedAddress.country);
	assertEquals("OM", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
		locality: "ﺎﻠﺧﺮﻃﻮﻣ",
		postalCode: "١١١١١",
		country: "ﺎﻠﺳﻭﺩﺎﻧ",
		countryCode: "OM"
	}, {locale: 'ar-SD'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nﺎﻠﺳﻭﺩﺎﻧ";
	var formatter = new ilib.AddressFmt({locale: 'ar-SD'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
		locality: "ﺎﻠﺧﺮﻃﻮﻣ",
		postalCode: "١١١١١",
		country: "ﺎﻠﺳﻭﺩﺎﻧ",
		countryCode: "OM"
	}, {locale: 'en-US'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nﺎﻠﺳﻭﺩﺎﻧ";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
