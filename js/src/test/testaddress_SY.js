/*
 * testaddress_SY.js - test the address parsing and formatting routines
 * 
 * Copyright © 2٠١3, JEDLSoft
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
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nسوريا", {locale: 'ar-SY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٠١٠٠", parsedAddress.postalCode);
	assertEquals("سوريا", parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\nﺪﻤﺸﻗ\nسوريا", {locale: 'ar-SY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("سوريا", parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ", {locale: 'ar-SY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٠١٠٠", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦  ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\nﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١\n٠١٠٠\nﺪﻤﺸﻗ\n\nسوريا\n\n\n", {locale: 'ar-SY'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٠١٠٠", parsedAddress.postalCode);
	assertEquals("سوريا", parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
};


function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦  ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n\n\tﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١\n\n\t٠١٠٠\n\n\tﺪﻤﺸﻗ\n\n\tسوريا\n\n\n", {locale: 'ar-SY'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٠١٠٠", parsedAddress.postalCode);
	assertEquals("سوريا", parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
};


function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠\nﺪﻤﺸﻗ\nSyria", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ", parsedAddress.streetAddress);
	assertEquals("ﺪﻤﺸﻗ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("٠١٠٠", parsedAddress.postalCode);
	assertEquals("Syria", parsedAddress.country);
	assertEquals("SY", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ",
		locality: "ﺪﻤﺸﻗ",
		postalCode: "٠١٠٠",
		country: "سوريا",
		countryCode: "SY"
	}, {locale: 'ar-SY'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nسوريا";
	var formatter = new ilib.AddressFmt({locale: 'ar-SY'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ",
		locality: "ﺪﻤﺸﻗ",
		postalCode: "٠١٠٠",
		country: "Syria",
		countryCode: "SY"
	}, {locale: 'en-US'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nSyria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
