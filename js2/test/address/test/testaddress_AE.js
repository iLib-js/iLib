/*
 * testaddress_AE.js - test the address parsing and formatting routines
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

function testParseAEAddressNormal() {
	var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١\nدبي\nالإمارات العربية المتحدة", {locale: 'ar-AE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١", parsedAddress.streetAddress);
	assertEquals("دبي", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("الإمارات العربية المتحدة", parsedAddress.country);
	assertEquals("AE", parsedAddress.countryCode);
};

function testParseAEAddressManyLines() {
	var parsedAddress = new Address("تاج قصر الفندق\nصندوق البريد بالبوسطة\n٤٢٢١١\nدبي\nالإمارات العربية المتحدة\n\n", {locale: 'ar-AE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("تاج قصر الفندق, صندوق البريد بالبوسطة, ٤٢٢١١", parsedAddress.streetAddress);
	assertEquals("دبي", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("الإمارات العربية المتحدة", parsedAddress.country);
	assertEquals("AE", parsedAddress.countryCode);
};

function testParseAEAddressOneLine() {
	var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١ دبي الإمارات العربية المتحدة", {locale: 'ar-AE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١", parsedAddress.streetAddress);
	assertEquals("دبي", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("الإمارات العربية المتحدة", parsedAddress.country);
	assertEquals("AE", parsedAddress.countryCode);
};


function testParseAEAddressNoDelimiters() {
	var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١ دبي الإمارات العربية المتحدة", {locale: 'ar-AE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١", parsedAddress.streetAddress);
	assertEquals("دبي", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("الإمارات العربية المتحدة", parsedAddress.country);
	assertEquals("AE", parsedAddress.countryCode);
};


function testParseAEAddressFromUS() {
	var parsedAddress = new Address("فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١\nدبي\nUnited Arab Emirates", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١", parsedAddress.streetAddress);
	assertEquals("دبي", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("United Arab Emirates", parsedAddress.country);
	assertEquals("AE", parsedAddress.countryCode);
};



function testFormatAddressAESANative() {
	var parsedAddress = new Address({
		streetAddress: "فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١",
		locality: "دبي",
		region: null,
		postalCode: null,
		country: "الإمارات العربية المتحدة",
		countryCode: "AE"
	}, {locale: 'ar-AE'});
	
	var expected = "فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١\nدبي\nالإمارات العربية المتحدة";
	var formatter = new AddressFmt({locale: 'ar-AE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAEFromUS() {
	var parsedAddress = new Address({
		streetAddress: "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١",
		locality: "دبي",
		region: null,
		postalCode: null,
		country: "United Arab Emirates",
		countryCode: "AE"
	}, {locale: 'en-US'});
	
	var expected = "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١\nدبي\nUnited Arab Emirates";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
