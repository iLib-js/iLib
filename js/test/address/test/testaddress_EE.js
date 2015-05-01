/*
 * testaddress.js - test the address parsing and formatting routines
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


function testParseAddressEENormal() {
	var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEENoZip() {
	var parsedAddress = new Address("The Stenbock House, Rahukohtu 3,Tallinn, Estonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressEEManyLines() {
	var parsedAddress = new Address("The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEEOneLine() {
	var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEESuperfluousWhitespace() {
	var parsedAddress = new Address("The Stenbock House\n\tRahukohtu 3  \n\t\n 15161 Tallinn\t\n\n Estonia  \n  \t\t\t", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEENoDelimiters() {
	var parsedAddress = new Address("The Stenbock House Rahukohtu 3 15161 Tallinn Estonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEESpecialChars() {
	var parsedAddress = new Address("Informatics Center, Rävala 5, 15169 Tallinn, Estonia", {locale: 'et-EE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Informatics Center, Rävala 5", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15169", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testParseAddressEEFromUS() {
	var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("The Stenbock House, Rahukohtu 3", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Tallinn", parsedAddress.locality);
	assertEquals("15161", parsedAddress.postalCode);
	assertEquals("Estonia", parsedAddress.country);
	assertEquals("EE", parsedAddress.countryCode);
};

function testFormatAddressEE() {
	var parsedAddress = new Address({
		streetAddress: "The Stenbock House\nRahukohtu 3",
		locality: "Tallinn",
		postalCode: "15161",
		country: "Estonia",
		countryCode: "EE"
	}, {locale: 'et-EE'});
	
	var expected = "The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia";
	var formatter = new AddressFmt({locale: 'et-EE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressEEFromUS() {
	var parsedAddress = new Address({
		streetAddress: "The Stenbock House\nRahukohtu 3",
		locality: "Tallinn",
		postalCode: "15161",
		country: "Estonia",
		countryCode: "EE"
	}, {locale: 'en-US'});
	
	var expected = "The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
