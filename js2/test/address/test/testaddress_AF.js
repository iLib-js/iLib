/*
 * testaddress.js - test the address parsing and formatting routines
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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAFAddressNormal() {
	var parsedAddress = new Address("آقای احمد توحید, خیابان، خانه شماره ۰۴۲, کابل, ۱۰۰۱, افغانستان", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱", parsedAddress.postalCode);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};

function testParseAFAddressNoZip() {
	var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲, کابل, افغانستان", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAFAddressManyLines() {
	var parsedAddress = new Address("آقای احمد توحید\nخیابان، خانه شماره ۰۴۲\nکابل ۱۰۰۱\nافغانستان", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱", parsedAddress.postalCode);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};

function testParseAFAddressOneLine() {
	var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲,کابل ۱۰۰۱ افغانستان", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱",parsedAddress.postalCode);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};

function testParseAFAddressSuperfluousWhitespace() {
	var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲   \n\t\n کابل ۱۰۰۱\t\n\n افغانستان  \n  \t\t\t", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱", parsedAddress.postalCode);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};

function testParseAFAddressNoDelimiters() {
	var parsedAddress = new Address("آقای احمد توحید خیابان، خانه شماره ۰۴۲ کابل ۱۰۰۱ افغانستان", {locale: 'fa-AF'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱", parsedAddress.postalCode);
	assertEquals("افغانستان", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};



function testParseAFAddressFromUS() {
	var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲,کابل ۱۰۰۱,Afghanistan", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("آقای احمد توحید, خیابان، خانه شماره ۰۴۲", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.locality);
	assertEquals("کابل",parsedAddress.region);
	assertEquals("۱۰۰۱", parsedAddress.postalCode);
	assertEquals("Afghanistan", parsedAddress.country);
	assertEquals("AF", parsedAddress.countryCode);
};

function testFormatAddressAF() {
	var parsedAddress = new Address({
		streetAddress: "آقای احمد توحید,خیابان، خانه شماره ۰۴۲",
		region: "کابل",
		postalCode: "۱۰۰۱",
		country: "افغانستان",
		countryCode: "AF"
	}, {locale: 'fa-AF'});
	
	var expected = "آقای احمد توحید,خیابان، خانه شماره ۰۴۲\nکابل\n۱۰۰۱\nافغانستان";
	var formatter = new AddressFmt({locale: 'fa-AF'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAFFromUS() {
	var parsedAddress = new Address({
		streetAddress: "آقای احمد توحید,خیابان، خانه شماره ۰۴۲",
		postalCode: "۱۰۰۱",
		country: "Afghanistan",
		countryCode: "AF"
	}, {locale: 'en-US'});
	
	var expected = "آقای احمد توحید,خیابان، خانه شماره ۰۴۲\n۱۰۰۱\nAfghanistan";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
