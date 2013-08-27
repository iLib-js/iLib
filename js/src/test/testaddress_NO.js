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
 * distributed under the License is distributed on an "AS NO" BASNO,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Norwegian Post and Telecommunications Authority\nPostboks 447 Sentrum\n0104 Trondheim\n", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Norwegian Post and Telecommunications Authority, Postboks 447 Sentrum", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0104", parsedAddress.postalCode);
	assertEquals("NORWAY", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Norwegian Post and Telecommunications Authority\nBorgartun 34\nTrondheim", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Norwegian Post and Telecommunications Authority, Borgartun 34", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Storgata 6\nNO-7321 Trondheim", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Storgata 6", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("NO-7321", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Stine Hansendd\nLeilighet 425\nStorgata 6\nNO-7321 Trondheim\n", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Stine Hansendd, Leilighet 425, Storgata 6", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("NO-7321", parsedAddress.postalCode);
	assertEquals("NORWAY", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Stine Hansendd, Leilighet 425, Storgata 634, NO-7321 Trondheim, ", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Stine Hansendd, Leilighet 425, Storgata 634", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("NO-7321", parsedAddress.postalCode);
	assertEquals("NORWAY", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tStine Hansendd\n\t\t\tLeilighet 425, \t\t\t\r\r Storgata 634, \n\t\nNO-7321 Trondheim\t\n\t \n\n\n", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Stine Hansendd, Leilighet 425, Storgata 634", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("NO-7321", parsedAddress.postalCode);
	assertEquals("NORWAY", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Stine Hansendd Leilighet 425 Storgata 634 NO-7321 Trondheim ", {locale: 'nb-NO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Stine Hansendd Leilighet 425 Storgata 634", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("NO-7321", parsedAddress.postalCode);
	assertEquals("NORWAY", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Norwegian Post and Telecommunications Authority\nBorgartun 34\n0104 Trondheim\n", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a English database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Norwegian Post and Telecommunications Authority, Borgartun 34", parsedAddress.streetAddress);
	assertEquals("Trondheim", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0104", parsedAddress.postalCode);
	assertEquals("island", parsedAddress.country);
	assertEquals("NO", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Norwegian Post and Telecommunications Authority, Borgartun 34",
		locality: "Trondheim",
		postalCode: "0104",
		country: "NORWAY",
		countryCode: "NO"
	}, {locale: 'nb-NO'});
	
	var expected = "Norwegian Post and Telecommunications Authority, Borgartun 34\nTrondheim\n0104\n";
	var formatter = new ilib.AddressFmt({locale: 'nb-NO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Norwegian Post and Telecommunications Authority, Borgartun 34",
		locality: "Trondheim",
		postalCode: "0104",
		country: "Norway",
		countryCode: "NO"
	}, {locale: 'en-US'});
	
	var expected = "Norwegian Post and Telecommunications Authority, Borgartun 34\nTrondheim 0104\n";
	var formatter = new ilib.AddressFmt({locale: 'de-DE'});
	assertEquals(expected, formatter.format(parsedAddress));
};
