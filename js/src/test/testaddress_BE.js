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
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// TODO: fill in Belgian addresses here

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("31, Place de Brouckere\n1000 Brussels\nBelgium", {locale: 'nl-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place de Brouckere", parsedAddress.streetAddress);
	assertEquals("Brussels", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
};

function testParseAddressOtherNormal() {
	var parsedAddress = new ilib.Address("31, Place de Brouckère\n1000 Bruxelles\nBelgium", {locale: 'fr-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place de Brouckère", parsedAddress.streetAddress);
	assertEquals("Bruxelles", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
	
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("31, Place de Brouckère\nBruxelles\nBelgium", {locale: 'fr-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place de Brouckère", parsedAddress.streetAddress);
	assertEquals("Bruxelles", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("31\nPlace\nde Brouckere\n1000\nBrussels\nBelgium", {locale: 'nl-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place, de Brouckere", parsedAddress.streetAddress);
	assertEquals("Brussels", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("31, Place de Brouckere , 1000 Brussels , Belgium", {locale: 'nl-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place de Brouckere", parsedAddress.streetAddress);
	assertEquals("Brussels", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
};



function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("31 Place de Brouckere 1000 Brussels Belgium", {locale: 'nl-BE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("31 Place de Brouckere", parsedAddress.streetAddress);
	assertEquals("Brussels", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
};



function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("31, Place de Brouckere , 1000 Brussels , Belgium", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("31, Place de Brouckere", parsedAddress.streetAddress);
	assertEquals("Brussels", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Belgium", parsedAddress.country);
	assertEquals("BE", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "31, Place de Brouckere",
		locality: "Brussels",
		postalCode: "1000",
		country: "Belgium",
		countryCode: "BE"
	}, {locale: 'nl-BE'});
	
	var expected = "31, Place de Brouckere\n1000 Brussels\nBelgium";
	var formatter = new ilib.AddressFmt({locale: 'nl-BE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "31, Place de Brouckere",
		locality: "Brussels",
		postalCode: "1000",
		country: "Belgium",
		countryCode: "BE"
	}, {locale: 'en-US'});
	
	var expected = "31, Place de Brouckere\n1000 Brussels\nBelgium";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
