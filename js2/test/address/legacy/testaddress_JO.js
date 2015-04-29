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

function testParseAddressJONormal() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب, عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

function testParseAddressJONoZip() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب, عمان, الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressJOManyLines() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب\nعمان ١١٩٣٧\n الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

function testParseAddressJOOneLine() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

function testParseAddressJOSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب   \n\t\n عمان ١١٩٣٧\t\n\n  الأردن  \n  \t\t\t", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

//needs a precise regular expression top deal with no delimiters for locality
/*function testParseAddressJONoDelimiters() {
	var parsedAddress = new ilib.Address("رويل ٥ آل الحلب  ٢ شارع الاستقلال عمان ١١٩٣٧  الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥ آل الحلب ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};*/

function testParseAddressJOSpecialChars() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان",parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("الأردن", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

function testParseAddressJOFromUS() {
	var parsedAddress = new ilib.Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, Jordan", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("رويل ٥, آل الحلب", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("عمان", parsedAddress.locality);
	assertEquals("١١٩٣٧", parsedAddress.postalCode);
	assertEquals("Jordan", parsedAddress.country);
	assertEquals("JO", parsedAddress.countryCode);
};

function testFormatAddressJO() {
	var parsedAddress = new ilib.Address({
		streetAddress: "رويل ٥, آل الحلب",
		locality: "عمان ١١٩٣٧",
		country: " الأردن",
		countryCode: "JO"
	}, {locale: 'ar-JO'});
	
	var expected = "رويل ٥, آل الحلب\nعمان ١١٩٣٧\nالأردن";
	var formatter = new ilib.AddressFmt({locale: 'ar-JO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressJOARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "رويل ٥, آل الحلب",
		locality: "عمان ١١٩٣٧",
		country: "Jordan",
		countryCode: "JO"
	}, {locale: 'en-US'});
	
	var expected = "رويل ٥, آل الحلب\nعمان ١١٩٣٧\nJordan";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
