/*
 * testaddress_LR.js - test the address parsing and formatting routines
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

function testParseAddressLRNormal() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLRNoZip() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\nMONROVIA 10\nLiberia", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLRNoCountry() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLRManyLines() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications\nPostal Operations\nGPO\n\n1000\n\nMONROVIA 10\n\n\nLiberia\n\n\n", {locale: 'en-LR'});
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications, Postal Operations, GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLROneLine() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications , Postal Operations , GPO , 1000 , MONROVIA 10 , Liberia", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications, Postal Operations, GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLRSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tMinistry of Posts and Telecommunications\t\t\rPostal Operations\t\t\rGPO\n\n1000\n\nMONROVIA 10\n\t Liberia\n\n\n", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLRNoDelimiters() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO 1000 MONROVIA 10 Liberia", {locale: 'en-LR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testParseAddressLRFromUS() {
	var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ministry of Posts and Telecommunications Postal Operations GPO", parsedAddress.streetAddress);
	assertEquals("MONROVIA 10", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Liberia", parsedAddress.country);
	assertEquals("LR", parsedAddress.countryCode);
};

function testFormatAddressLR() {
	var parsedAddress = new Address({
		streetAddress: "Ministry of Posts and Telecommunications Postal Operations GPO",
		locality: "MONROVIA 10",
		postalCode: "1000",
		country: "Liberia",
		countryCode: "LR"
	}, {locale: 'en-LR'});
	
	var expected = "Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia";
	var formatter = new AddressFmt({locale: 'en-LR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLRFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Ministry of Posts and Telecommunications Postal Operations GPO",
		locality: "MONROVIA 10",
		postalCode: "1000",
		country: "Liberia",
		countryCode: "LR"
	}, {locale: 'en-US'});
	
	var expected = "Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
