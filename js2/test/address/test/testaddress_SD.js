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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressSDNormal() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDNoZip() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressSDNoCountry() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDManyLines() {
	var parsedAddress = new Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\n\nالسودان\n\n\n", {locale: 'ar-OM'});
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDOneLine() {
	var parsedAddress = new Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ,  ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ , ١١١١١ , ﺎﻠﺧﺮﻃﻮﻣ , السودان", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n\n\tﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n\n\t١١١١١\n\n\tﺎﻠﺧﺮﻃﻮﻣ\n\n\tالسودان\n\n\n", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDNoDelimiters() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ١١١١١  ﺎﻠﺧﺮﻃﻮﻣ السودان", {locale: 'ar-SD'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("السودان", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testParseAddressSDFromUS() {
	var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nSudan", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١", parsedAddress.streetAddress);
	assertEquals("ﺎﻠﺧﺮﻃﻮﻣ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("١١١١١", parsedAddress.postalCode);
	assertEquals("Sudan", parsedAddress.country);
	assertEquals("SD", parsedAddress.countryCode);
};

function testFormatAddressSD() {
	var parsedAddress = new Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
		locality: "ﺎﻠﺧﺮﻃﻮﻣ",
		postalCode: "١١١١١",
		country: "السودان",
		countryCode: "SD"
	}, {locale: 'ar-SD'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان";
	var formatter = new AddressFmt({locale: 'ar-SD'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSDFromUS() {
	var parsedAddress = new Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
		locality: "ﺎﻠﺧﺮﻃﻮﻣ",
		postalCode: "١١١١١",
		country: "Sudan",
		countryCode: "SD"
	}, {locale: 'en-US'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nSudan";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
