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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAddressHRNormal() {
	var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHRNoZip() {
	var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
	assertEquals("HR-51410", parsedAddress.postalCode);
};

function testParseAddressHRManyLines() {
	var parsedAddress = new Address("Hrvoje Horvat\nUlica Maršala Tita 174\nHR-51410 Opatija\nCroatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHROneLine() {
	var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHRSuperfluousWhitespace() {
	var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174  \n\t\n HR-51410 Opatija\t\n\n Croatia  \n  \t\t\t", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHRNoDelimiters() {
	var parsedAddress = new Address("Hrvoje Horvat Ulica Maršala Tita 174 HR-51410 Opatija Croatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHRSpecialChars() {
	var parsedAddress = new Address("Annette Ruzicka, BISTRIČKA 9 A, 31225 BREZNICA NAŠIČKA, Croatia", {locale: 'hr-HR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Annette Ruzicka, BISTRIČKA 9 A", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("BREZNICA NAŠIČKA", parsedAddress.locality);
	assertEquals("31225", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testParseAddressHRFromUS() {
	var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Hrvoje Horvat, Ulica Maršala Tita 174", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Opatija", parsedAddress.locality);
	assertEquals("HR-51410", parsedAddress.postalCode);
	assertEquals("Croatia", parsedAddress.country);
	assertEquals("HR", parsedAddress.countryCode);
};

function testFormatAddressHR() {
	var parsedAddress = new Address({
		streetAddress: "Hrvoje Horvat, Ulica Maršala Tita 174",
		locality: "Opatija",
		postalCode: "HR-51410",
		country: "Croatia",
		countryCode: "HR"
	}, {locale: 'hr-HR'});
	
	var expected = "Hrvoje Horvat, Ulica Maršala Tita 174\nHR-51410 Opatija\nCroatia";
	var formatter = new AddressFmt({locale: 'hr-HR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressHRFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Hrvoje Horvat, Ulica Maršala Tita 174",
		locality: "Opatija",
		postalCode: "HR-51410",
		country: "Croatia",
		countryCode: "HR"
	}, {locale: 'en-US'});
	
	var expected = "Hrvoje Horvat, Ulica Maršala Tita 174\nHR-51410 Opatija\nCroatia";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
