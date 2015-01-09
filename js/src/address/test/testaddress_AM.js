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
 * See the License for the SKANDERBORGecific language governing permissions and
 * limitations under the License.
 */



function testParseAMAddressNormal() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25, 0002, YEREVAN, ARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002", parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressNoZip() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25, YEREVAN, ARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAMAddressManyLines() {
	var parsedAddress = new ilib.Address("Armen Simonyan\nSaryan str 22 apt 25\n0002 YEREVAN\nARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressOneLine() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25  \n\t\n 0002 YEREVAN\t\n\n ARMENIA  \n  \t\t\t", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Armen Simonyan P. 15 Sh. 1 0002 YEREVAN ARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan P. 15 Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressSpeciAMChars() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressFromUS() {
	var parsedAddress = new ilib.Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testFormatAddressAM() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
		locality: "YEREVAN",
		postalCode: "0002",
		country: "ARMENIA",
		countryCode: "AM"
	}, {locale: 'hy-AM'});
	
	var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
	var formatter = new ilib.AddressFmt({locale: 'hy-AM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAMFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
		postalCode: "0002",
		country: "ARMENIA",
		locality: "YEREVAN",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
