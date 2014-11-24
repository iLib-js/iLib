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

function testParseAddressZANormal() {
	var parsedAddress = new ilib.Address("Customer Services 497 Jacob Mare Street\nPretoria 0001\nSouth Africa", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Customer Services 497 Jacob Mare Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0001", parsedAddress.postalCode);
	assertEquals("South Africa", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};

function testParseAddressZANoZip() {
	var parsedAddress = new ilib.Address("Mr. J. Public 1234 Church Street Colloyn\nPRETORIA\nSOUTH AFRICA", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. J. Public 1234 Church Street Colloyn", parsedAddress.streetAddress);
	assertEquals("PRETORIA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("SOUTH AFRICA", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressZANoCountry() {
	var parsedAddress = new ilib.Address("Customer Services 497 Jacob Mare Street\nPretoria 0001", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Customer Services 497 Jacob Mare Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0001", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};

function testParseAddressZAManyLines() {
	var parsedAddress = new ilib.Address("Customer Services 497\nJacob Mare Street\nPretoria 0001\nSOUTH AFRICA\n\n\n", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Customer Services 497, Jacob Mare Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0001", parsedAddress.postalCode);
	assertEquals("SOUTH AFRICA", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};

function testParseAddressZAOneLine() {
	var parsedAddress = new ilib.Address("Customer Services 497 ,Jacob Mare Street , Pretoria 0001 , SOUTH AFRICA", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Customer Services 497, Jacob Mare Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0001", parsedAddress.postalCode);
	assertEquals("SOUTH AFRICA", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};


function testParseAddressZANoDelimiters() {
	var parsedAddress = new ilib.Address("Customer Services 497 Jacob Mare Street Pretoria 0001 SOUTH AFRICA", {locale: 'en-ZA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Customer Services 497 Jacob Mare Street", parsedAddress.streetAddress);
	assertEquals("Pretoria", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("0001", parsedAddress.postalCode);
	assertEquals("SOUTH AFRICA", parsedAddress.country);
	assertEquals("ZA", parsedAddress.countryCode);
};

function testFormatAddressZAZA() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Customer Services 497 Jacob Mare Street",
		locality: "Pretoria",
		region: null,
		postalCode: "0001",
		country: "SOUTH AFRICA",
		countryCode: "ZA"
	}, {locale: 'en-ZA'});
	
	var expected = "Customer Services 497 Jacob Mare Street\nPretoria 0001\nSOUTH AFRICA";
	var formatter = new ilib.AddressFmt({locale: 'en-ZA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

