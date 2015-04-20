/*
 * testaddress_SE.js - test the address parsing and formatting routines
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

function testParseAddressSENormal() {
        var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
        assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);

};

function testParseAddressSENoZip() {
	var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testParseAddressSENoCountry() {
	var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1 , 412 84 , GÖTEBORG", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testParseAddressSEManyLines() {
	var parsedAddress = new Address("Ms. Hypothetical\nc/o Jon Wätte Hagagatan 1\nvi\n113 49\nStockholm\nSWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical, c/o Jon Wätte Hagagatan 1, vi", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testParseAddressSEOneLine() {
	var parsedAddress = new Address("Ms. Hypothetical , c/o Jon Wätte Hagagatan 1 , 113 49 , Stockholm , SWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical, c/o Jon Wätte Hagagatan 1", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};


function testParseAddressSENoDelimiters() {
	var parsedAddress = new Address("Ms. Hypothetical c/o Jon Wätte Hagagatan 113 49 Stockholm SWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical c/o Jon Wätte Hagagatan", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};


function testParseAddressSEFromUS() {
	var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG 412 84\nSWEDEN", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testFormatAddressSE() {
	var parsedAddress = new Address({
		streetAddress: "Martin Rebas Gyllenkrooksgatan 1",
		locality: "GÖTEBORG",
		region: null,
		postalCode: "412 84",
		country: "SWEDEN",
		countryCode: "SE"
	}, {locale: 'sv-SE'});
	
	var expected = "Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN";
	var formatter = new AddressFmt({locale: 'sv-SE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSEFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Martin Rebas Gyllenkrooksgatan",
		locality: "GÖTEBORG",
		region: null,
		postalCode: "412 84",
		country: "SWEDEN",
		countryCode: "SE"
	}, {locale: 'en-US'});
	
	var expected = "Martin Rebas Gyllenkrooksgatan\n412 84 GÖTEBORG\nSWEDEN";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
