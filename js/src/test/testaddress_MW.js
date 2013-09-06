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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu\nP.O. Box 30500\n\n\n\n\nLILONGWE 3\n\n\nMALAWI\n\n\n", {locale: 'en-MW'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu, P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu , P.O. Box 30500 , LILONGWE 3 , MALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu, P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMr. W.M. Lundu\t\t\rP.O. Box 30500\t\t\r\n\n\n\nLILONGWE 3\n\t MALAWI\n\n\n", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu P.O. Box 30500  LILONGWE 3 MALAWI", {locale: 'en-MW'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. W.M. Lundu P.O. Box 30500\n LILONGWE 3\nMALAWI", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. W.M. Lundu P.O. Box 30500", parsedAddress.streetAddress);
	assertEquals("LILONGWE 3", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("MALAWI", parsedAddress.country);
	assertEquals("MW", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
		locality: "LILONGWE 3",
		country: "MALAWI",
		countryCode: "MW"
	}, {locale: 'en-MW'});
	
	var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
	var formatter = new ilib.AddressFmt({locale: 'en-MW'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
		locality: "LILONGWE 3",
		country: "MALAWI",
		countryCode: "MW"
	}, {locale: 'en-US'});
	
	var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
