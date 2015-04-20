/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

function testParseAddressMWNormal() {
	var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWNoZip() {
	var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMWNoCountry() {
	var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWManyLines() {
	var parsedAddress = new Address("Mr. W.M. Lundu\nP.O. Box 30500\n\n\n\n\nLILONGWE 3\n\n\nMALAWI\n\n\n", {locale: 'en-MW'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu, P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWOneLine() {
	var parsedAddress = new Address("Mr. W.M. Lundu , P.O. Box 30500 , LILONGWE 3 , MALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu, P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tMr. W.M. Lundu\t\t\rP.O. Box 30500\t\t\r\n\n\n\nLILONGWE 3\n\t MALAWI\n\n\n", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWNoDelimiters() {
	var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500  LILONGWE 3 MALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressMWFromUS() {
	var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\n LILONGWE 3\nMALAWI", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testFormatAddressMW() {
	var parsedAddress = new Address({
		streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
		locality: "LILONGWE 3",
		country: "MALAWI",
		countryCode: "MW"
	}, {locale: 'en-MW'});
	
	var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
	var formatter = new AddressFmt({locale: 'en-MW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMWFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
		locality: "LILONGWE 3",
		country: "MALAWI",
		countryCode: "MW"
	}, {locale: 'en-US'});
	
	var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
