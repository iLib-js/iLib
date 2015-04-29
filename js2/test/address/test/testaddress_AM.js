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


function testParseAMAddressNormal() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002, YEREVAN, ARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002", parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressNoZip() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, YEREVAN, ARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAMAddressManyLines() {
	var parsedAddress = new Address("Armen Simonyan\nSaryan str 22 apt 25\n0002 YEREVAN\nARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressOneLine() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressSuperfluousWhitespace() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25  \n\t\n 0002 YEREVAN\t\n\n ARMENIA  \n  \t\t\t", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressNoDelimiters() {
	var parsedAddress = new Address("Armen Simonyan P. 15 Sh. 1 0002 YEREVAN ARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan P. 15 Sh. 1", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressSpeciAMChars() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Armen Simonyan, Saryan str 22 apt 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("YEREVAN",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ARMENIA", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressFromUS() {
	var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-US'});
	
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
	var parsedAddress = new Address({
		streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
		locality: "YEREVAN",
		postalCode: "0002",
		country: "ARMENIA",
		countryCode: "AM"
	}, {locale: 'en-AM'});
	
	var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
	var formatter = new AddressFmt({locale: 'en-AM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
		postalCode: "0002",
		country: "ARMENIA",
		locality: "YEREVAN",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressinArmenian() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 , 0002 ԵՐԵՎԱՆ , ՀԱՅԱՍՏԱՆ", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAddressinArmenianNoZip() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 , ԵՐԵՎԱՆ , ՀԱՅԱՍՏԱՆ", {locale: 'hy-AM'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};
function testParseAMAddressSuperfluousinArmenianWhitespace() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 \n\t\n 0002 ԵՐԵՎԱՆ\t\n\n ՀԱՅԱՍՏԱՆ \n  \t\t\t", {locale: 'hy-AM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressManyLineinArmenian() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 \n 0002 ԵՐԵՎԱՆ\n ՀԱՅԱՍՏԱՆ \n", {locale: 'hy-AM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressNoDelimittersinArmenian() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25  0002 ԵՐԵՎԱՆ  ՀԱՅԱՍՏԱՆ ", {locale: 'hy-AM'});
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testParseAMAddressfromUSinAM() {
	var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25  0002 ԵՐԵՎԱՆ  ՀԱՅԱՍՏԱՆ ", {locale: 'en-US'});
	assertNotUndefined(parsedAddress);
	assertEquals("Արմեն Սիմոնյանը, Սարյան փող 22, բն 25", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ԵՐԵՎԱՆ",parsedAddress.locality);
	assertEquals("0002",parsedAddress.postalCode);
	assertEquals("ՀԱՅԱՍՏԱՆ", parsedAddress.country);
	assertEquals("AM", parsedAddress.countryCode);
};

function testFormatAddressAMinArmenian() {
	var parsedAddress = new Address({
		streetAddress: "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25",
		locality: "ԵՐԵՎԱՆ",
		postalCode: "0002",
		country: "ՀԱՅԱՍՏԱՆ",
		countryCode: "AM"
	}, {locale: 'hy-AM'});
	
	var expected = "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25\n0002 ԵՐԵՎԱՆ\nՀԱՅԱՍՏԱՆ";
	var formatter = new AddressFmt({locale: 'en-AM'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAMFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25",
		locality: "ԵՐԵՎԱՆ",
		postalCode: "0002",
		country: "ՀԱՅԱՍՏԱՆ",
		countryCode: "AM"
	}, {locale: 'en-US'});
	
	var expected = "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25\n0002 ԵՐԵՎԱՆ\nՀԱՅԱՍՏԱՆ";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
