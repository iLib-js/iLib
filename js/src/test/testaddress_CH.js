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


function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze Tastentanzenstrasse 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressNormalforItaly() {
	var parsedAddress = new ilib.Address("Mr. Hans gatto Tastentanz Via 5/16\n1234 Zurich\nSVIZZERA", {locale: 'it-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Hans gatto Tastentanz Via 5/16", parsedAddress.streetAddress);
	assertEquals("Zurich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SVIZZERA", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};


function testParseAddressNormalforFrance() {
	var parsedAddress = new ilib.Address("M. Hans chat Tastentanz rue 5/16\n1234 Zurich\nSUISSE", {locale: 'fr-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Hans chat Tastentanz rue 5/16", parsedAddress.streetAddress);
	assertEquals("Zurich, parsedAddress.locality");
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SUISSE", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};


function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Herr Hans Katze Tastentanzenstrasse 5/16\nZuerich\nSWITZERLAND", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze Tastentanzenstrasse 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze Tastentanzenstrasse 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Herr Hans Katze\nTastentanzenstrasse\n5/16\n1234\nZuerich\nSWITZERLAND\n\n", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze, Tastentanzenstrasse, 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Herr Hans Katze , Tastentanzenstrasse , 5/16 , 1234 , Zuerich , SWITZERLAND", {locale: 'de-CH'});
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze, Tastentanzenstrasse, 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t\Herr Hans Katze\nTastentanzenstrasse\n5/16\n\t1234\n\t\tZuerich\n\t\tSWITZERLAND\t\t", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze, Tastentanzenstrasse, 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Herr Hans Katze Tastentanzenstrasse 5/16 1234 Zuerich SWITZERLAND", {locale: 'de-CH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze Tastentanzenstrasse 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Herr Hans Katze Tastentanzenstrasse 5/16", parsedAddress.streetAddress);
	assertEquals("Zuerich", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1234", parsedAddress.postalCode);
	assertEquals("SWITZERLAND", parsedAddress.country);
	assertEquals("CH", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Herr Hans Katze Tastentanzenstrasse 5/16",
		locality: "Zuerich",
		postalCode: "1234",
		country: "SWITZERLAND",
		countryCode: "CH"
	}, {locale: 'de-CH'});
	
	var expected = "Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND";
	var formatter = new ilib.AddressFmt({locale: 'de-CH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Herr Hans Katze Tastentanzenstrasse 5/16",
		locality: "Zuerich",
		postalCode: "1234",
		country: "SWITZERLAND",
		countryCode: "CH"
	}, {locale: 'en-US'});
	
	var expected = "Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
