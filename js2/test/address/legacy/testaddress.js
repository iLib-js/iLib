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

function testParseAddressSimple() {
	var parsedAddress = new ilib.Address("950 W Maude Ave.\nSunnyvale, CA 94085\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W Maude Ave.", parsedAddress.streetAddress);
	assertEquals("Sunnyvale", parsedAddress.locality);
	assertEquals("CA", parsedAddress.region);
	assertEquals("94085", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

// to verify NOV-111026
function testParseAddressSimple2() {
	var parsedAddress = new ilib.Address("20 Main St.\nMyTown, NY 11530\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("NY", parsedAddress.region);
	assertEquals("11530", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressSimple3() {
	var parsedAddress = new ilib.Address("5-2-1 Ginza, Chuo-ku\nTokyo 170-3293\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5-2-1 Ginza", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("170-3293", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressMoreComplex() {
	var parsedAddress = new ilib.Address("950 W 21st Ave, Apt 45\nNY, NY 10234", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W 21st Ave, Apt 45", parsedAddress.streetAddress);
	assertEquals("NY", parsedAddress.locality);
	assertEquals("NY", parsedAddress.region);
	assertEquals("10234", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressSpelledOutState() {
	var parsedAddress = new ilib.Address("20 Main St.\nMyTown, Arizona 11530\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("Arizona", parsedAddress.region);
	assertEquals("11530", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressSpelledOutStateWithSpaces() {
	var parsedAddress = new ilib.Address("20 Main St.\nMyTown, New York 11530\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("New York", parsedAddress.region);
	assertEquals("11530", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressSpelledOutStateWithPrefix() {
	var parsedAddress = new ilib.Address("20 Main St.\nMyTown, Arkansas 11530\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("Arkansas", parsedAddress.region);
	assertEquals("11530", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("20 Main St.\nMyTown, NY\nUSA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("NY", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("950 W 21st Ave\nApt 45\nNY\nNY\n10234", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W 21st Ave, Apt 45", parsedAddress.streetAddress);
	assertEquals("NY", parsedAddress.locality);
	assertEquals("NY", parsedAddress.region);
	assertEquals("10234", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("950 W Maude Ave., Sunnyvale, CA 94085 USA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W Maude Ave.", parsedAddress.streetAddress);
	assertEquals("Sunnyvale", parsedAddress.locality);
	assertEquals("CA", parsedAddress.region);
	assertEquals("94085", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("950 W 21st Ave\n\n   Apt 45      \n NY,    NY   10234\n\n   \n\n", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W 21st Ave, Apt 45", parsedAddress.streetAddress);
	assertEquals("NY", parsedAddress.locality);
	assertEquals("NY", parsedAddress.region);
	assertEquals("10234", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressFewDelimiters() {
	var parsedAddress = new ilib.Address("950 W Maude Ave., Sunnyvale CA 94085 USA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W Maude Ave.", parsedAddress.streetAddress);
	assertEquals("Sunnyvale", parsedAddress.locality);
	assertEquals("CA", parsedAddress.region);
	assertEquals("94085", parsedAddress.postalCode);
	assertEquals("USA", parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressWithStreetNumberThatLooksLikeAZip() {
	var parsedAddress = new ilib.Address("15672 W 156st St #45\nSeattle, WA 98765", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("15672 W 156st St #45", parsedAddress.streetAddress);
	assertEquals("Seattle", parsedAddress.locality);
	assertEquals("WA", parsedAddress.region);
	assertEquals("98765", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressPOBox() {
	var parsedAddress = new ilib.Address("P.O. Box 350\nMinneapolis MN 45678-2234", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("P.O. Box 350", parsedAddress.streetAddress);
	assertEquals("Minneapolis", parsedAddress.locality);
	assertEquals("MN", parsedAddress.region);
	assertEquals("45678-2234", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressHawaii() {
	var parsedAddress = new ilib.Address("20 Hawai'i Oe Lane\nKa'anapali, HI 99232", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Hawai'i Oe Lane", parsedAddress.streetAddress);
	assertEquals("Ka'anapali", parsedAddress.locality);
	assertEquals("HI", parsedAddress.region);
	assertEquals("99232", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testParseAddressUnknown() {

	var parsedAddress = new ilib.Address("123 Main Street, Pretoria 5678, South Africa", {locale: 'en-US'});

	assertNotUndefined(parsedAddress);
	assertEquals("123 Main Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("5678", parsedAddress.postalCode);
	assertEquals("South Africa", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};

function testParseAddressNonUS() {
	var parsedAddress = new ilib.Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
	assertEquals("Uithoorn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2345 GD", parsedAddress.postalCode);
	assertEquals("Netherlands", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};
	
// for NOV-118061
function testParseAddressNonStandard() {
	var parsedAddress = new ilib.Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("123 mcdonald ave, apt 234", parsedAddress.streetAddress);
	assertEquals("sunnyvale", parsedAddress.locality);
	assertEquals("CA", parsedAddress.region);
	assertEquals("34567", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("US", parsedAddress.countryCode);
};

function testFormatAddressUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "1234 Any Street",
		locality: "Anytown",
		region: "CA",
		postalCode: "94085",
		country: "United States of America",
		countryCode: "US"
	}, {locale: 'en-US'});
	
	var expected = "1234 Any Street\nAnytown CA 94085\nUnited States of America";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressDomestic() {
	var parsedAddress = new ilib.Address({
		streetAddress: "1234 Any Street",
		locality: "Anytown",
		region: "CA",
		postalCode: "94085",
		country: "United States of America",
		countryCode: "US"
	}, {locale: 'en-US'});
	
	var expected = "1234 Any Street\nAnytown CA 94085";
	var formatter = new ilib.AddressFmt({locale: 'en-US', style: 'nocountry'});
	assertEquals(expected, formatter.format(parsedAddress));
};

// for DFISH-9927
function testParseAddressUnknownLocale() {
	var parsedAddress = new ilib.Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'zxx-XX'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("123 mcdonald ave, apt 234, sunnyvale", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("CA", parsedAddress.locality);
	assertEquals("34567", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("XX", parsedAddress.countryCode);
};

//for DFISH-23879
function testParseAddressUnknownLocaleQQ() {
	var parsedAddress = new ilib.Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-QQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("123 mcdonald ave, apt 234, sunnyvale", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("CA", parsedAddress.locality);
	assertEquals("34567", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("QQ", parsedAddress.countryCode);
};

function testFormatAddressUnknownLocaleQQ() {
	var parsedAddress = new ilib.Address({
		streetAddress: "123 mcdonald ave, apt 234", 
		locality: "Sunnyvale",
		region: "CA",
		postalCode: "94086", 
		locale: 'en-QQ'
	});
	
	var expected = "123 mcdonald ave, apt 234\nSunnyvale CA 94086";
	var formatter = new ilib.AddressFmt({locale: 'en-QQ', style: 'nocountry'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressUnknownLocaleHK() {
	var parsedAddress = new ilib.Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-HK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("123 mcdonald ave, apt 234, sunnyvale, CA 34567", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("HK", parsedAddress.countryCode);
};

function testFormatAddressUnknownLocaleHK() {
	var parsedAddress = new ilib.Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-HK'});
	
	var expected = "123 mcdonald ave, apt 234, sunnyvale, CA 34567";
	var formatter = new ilib.AddressFmt({locale: 'en-HK', style: 'nocountry'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressDefaultEverythingButForeignAddress() {
	var parsedAddress = new ilib.Address({
	    country: "Hong Kong",
	    countryCode: "HK",
	    locality: "North Point",
	    streetAddress: "5F, 633 King's Road"
	});
	
	var expected = "5F, 633 King's Road\nNorth Point\nHong Kong";
	var formatter = new ilib.AddressFmt();
	assertEquals(expected, formatter.format(parsedAddress));
};

