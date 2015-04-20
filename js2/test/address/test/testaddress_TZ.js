/*
 * testaddress_TZ.js - test the address parsing and formatting routines
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
function testParseAddressTZNormal() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZNoZip() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressTZNoCountry() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZManyLines() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia\nP.O. Box 10084\nDAR ES SALAAM\nTanzania\n\n\n", {locale: 'en-TZ'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia, P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZOneLine() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia , P.O. Box 10084 , DAR ES SALAAM , Tanzania", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia, P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\t\tMr. Abel H.H. Bilia\t\t\tP.O. Box\t\r\r10084\t\nDAR ES SALAAM\n\t Tanzania\n\n\n", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZNoDelimiters() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084 DAR ES SALAAM Tanzania", {locale: 'en-TZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testParseAddressTZFromUS() {
	var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abel H.H. Bilia P.O. Box 10084", parsedAddress.streetAddress);
	assertEquals("DAR ES SALAAM", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Tanzania", parsedAddress.country);
	assertEquals("TZ", parsedAddress.countryCode);
};

function testFormatAddressTZ() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Abel H.H. Bilia P.O. Box 10084",
		locality: "DAR ES SALAAM",
		country: "Tanzania",
		countryCode: "TZ"
	}, {locale: 'en-TZ'});
	
	var expected = "Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania";
	var formatter = new AddressFmt({locale: 'en-TZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressTZFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Abel H.H. Bilia P.O. Box 10084",
		locality: "DAR ES SALAAM",
		country: "Tanzania",
		countryCode: "TZ"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
