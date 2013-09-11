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



function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ", parsedAddress.locality);
	assertEquals("2012", parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str.,GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR\n45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str.  \n\t\n 2012 GÄNCÄ\t\n\n AZERBAIJAN  \n  \t\t\t", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR 45 Hatai Str. 2012 GÄNCÄ AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-US'});
	
	// the country nAZe is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
		locality: "GÄNCÄ",
		postalCode: "2012",
		country: "AZERBAIJAN",
		countryCode: "AZ"
	}, {locale: 'en-AZ'});
	
	var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
	var formatter = new ilib.AddressFmt({locale: 'en-AZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
		postalCode: "2012",
		country: "AZERBAIJAN",
		locality: "GÄNCÄ",
		countryCode: "AZ"
	}, {locale: 'en-US'});
	
	var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
