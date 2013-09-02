/*
 * testaddress_TH.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("49 Soi Ruamrudee, Phloenchit Road, Lumpinee\nPathumwan Bangkok 10330\nThailand", {locale: 'th-Th'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("49 Soi Ruamrudee, Phloenchit Road, Lumpinee", parsedAddress.streetAddress);
	assertEquals("Pathumwan", parsedAddress.locality);
	assertEquals("Bangkok", parsedAddress.region);
	assertEquals("10330", parsedAddress.postalCode);
	assertEquals("Thailand", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("49 Soi Ruamrudee, Phloenchit Road, Lumpinee\nPathumwan Bangkok\nThailand", {locale: 'th-Th'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("49 Soi Ruamrudee, Phloenchit Road, Lumpinee", parsedAddress.streetAddress);
	assertEquals("Pathumwan", parsedAddress.locality);
	assertEquals("Bangkok", parsedAddress.region);
	assertEquals("Thailand", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("112/119 Maneeya Perfect Masterpiece Saima\nMuang Nonthaburi 11000", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 Maneeya Perfect Masterpiece Saima", parsedAddress.streetAddress);
	assertEquals("Muang", parsedAddress.locality);
	assertEquals("Nonthaburi", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};

function testParseAddressNoCountryWithSpace() {
	var parsedAddress = new ilib.Address("112/119 Maneeya Perfect Masterpiece, Saima\nMuang Nonthaburi 11000", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 Maneeya Perfect Masterpiece, Saima", parsedAddress.streetAddress);
	assertEquals("Muang", parsedAddress.locality);
	assertEquals("Nonthaburi", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};



function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("112/119\nManeeya Perfect Masterpiece\nSaima\nPathumwan\nBangkok\n11000\nThailand", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119, Maneeya Perfect Masterpiece, Saima", parsedAddress.streetAddress);
	assertEquals("Pathumwan", parsedAddress.locality);
	assertEquals("Bangkok", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("Thailand", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("112/119 Maneeya Perfect Masterpiece Saima Muang Nonthaburi 11000 THAILAND", {locale: 'th-TH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 Maneeya Perfect Masterpiece Saima", parsedAddress.streetAddress);
	assertEquals("Pathumwan", parsedAddress.locality);
	assertEquals("Bangkok", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("Thailand", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testParseAddressOther() {
	var parsedAddress = new ilib.Address("112/119 Maneeya Perfect Masterpiece Saima\nMuang Nonthaburi 11000\nTHAILAND", {locale: 'tr-TR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("112/119 Maneeya Perfect Masterpiece Saima", parsedAddress.streetAddress);
	assertEquals("Muang", parsedAddress.locality);
	assertEquals("Nonthaburi", parsedAddress.region);
	assertEquals("11000", parsedAddress.postalCode);
	assertEquals("THAILAND", parsedAddress.country);
	assertEquals("TH", parsedAddress.countryCode);
};


function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "49 Soi Ruamrudee, Phloenchit Road, Lumpinee",
		locality: "Pathumwan",
		postalCode: "10330",
		region: "Bangkok",
		country: "Thailand",
		countryCode: "TH"
	}, {locale: 'th-TH'});
	
	var expected = "49 Soi Ruamrudee, Phloenchit Road, Lumpinee\nPathumwan Bangkok 10330\nThailand";
	var formatter = new ilib.AddressFmt({locale: 'tH-TH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "112/119 Maneeya Perfect Masterpiece Saima",
		locality: "Muang",
		region: "Nonthaburi",
		postalCode: "11000",
		country: "THAILAND",
		countryCode: "TH"
	}, {locale: 'en-US'});
	var expected = "112/119 Maneeya Perfect Masterpiece Saima\nMuang Nonthaburi 11000\nTHAILAND";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

