/*
 * testaddress_NG.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressNGNormal() {
	var parsedAddress = new Address("Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS 930283\nPLATEAU\nNIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ben Tal 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGNoZip() {
	var parsedAddress = new Address("Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS PLATEAU\nNIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ben Tal 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNGNoCountry() {
	var parsedAddress = new Address("Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS 930283\nPLATEAU", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ben Tal 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGManyLines() {
	var parsedAddress = new Address("Mr. Ben Tal\n1234 Bauchu Road\nYelwa\nJOS 930283\nPLATEAU\nNIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ben Tal, 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGOneLine() {
	var parsedAddress = new Address("Mr. Ben Tal , 1234 Bauchu Road , Yelwa , JOS , 930283 , PLATEAU , NIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ben Tal, 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGSuperfluousWhitespace() {
	var parsedAddress = new Address("Mr. Ben Tal\n\n\t1234 Bauchu RoadS\n\n\nYelwa\n\t\nJOS\t\t\r930283\r\r\n\rPLATEAU\t\t\rNIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. Ben Tal, 1234 Bauchu RoadS, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGNoDelimiters() {
	var parsedAddress = new Address("Mr. Ben Tal 1234 Bauchu Road, Yelwa JOS 930283\nPLATEAU NIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ben Tal 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testParseAddressNGFromUS() {
	var parsedAddress = new Address("Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS 930283\nPLATEAU\nNIGERIA", {locale: 'en-NG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Ben Tal 1234 Bauchu Road, Yelwa", parsedAddress.streetAddress);
	assertEquals("JOS", parsedAddress.locality);
	assertEquals("PLATEAU", parsedAddress.region);
	assertEquals("930283", parsedAddress.postalCode);
	assertEquals("NIGERIA", parsedAddress.country);
	assertEquals("NG", parsedAddress.countryCode);
};

function testFormatAddressNG() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Ben Tal 1234 Bauchu Road, Yelwa",
		locality: "JOS",
		postalCode: "930283",
		region: "PLATEAU",
		country: "NIGERIA",
		countryCode: "NG"
	}, {locale: 'en-NG'});
	
	var expected = "Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS 930283\nPLATEAU\nNIGERIA";
	var formatter = new AddressFmt({locale: 'en-NG'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressNGFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Mr. Ben Tal 1234 Bauchu Road, Yelwa",
		locality: "JOS",
		postalCode: "930283",
		region: "PLATEAU",
		country: "NIGERIA",
		countryCode: "NG"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Ben Tal 1234 Bauchu Road, Yelwa\nJOS 930283\nPLATEAU\nNIGERIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
