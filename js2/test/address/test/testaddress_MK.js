/*
 * testaddress_MK.js - test the address parsing and formatting routines
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
function testParseAddressMKNormal() {
	var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKNoZip() {
	var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\nОХРИД\nМАКЕДОНИЈА", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMKNoCountry() {
	var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKManyLines() {
	var parsedAddress = new Address("Сања Јанчевски\nГРАДСКИ\nПАЗАР 5\n\n6000\n\nОХРИД\n\n\nМАКЕДОНИЈА\n\n\n", {locale: 'mk-MK'});
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски, ГРАДСКИ, ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKOneLine() {
	var parsedAddress = new Address("Сања Јанчевски , ГРАДСКИ , ПАЗАР 5 , 6000 , ОХРИД , МАКЕДОНИЈА", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски, ГРАДСКИ, ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tСања Јанчевски\t\t\rГРАДСКИ\t\t\rПАЗАР 5\n\n6000\n\nОХРИД\n\t МАКЕДОНИЈА\n\n\n", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKNoDelimiters() {
	var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5 6000 ОХРИД МАКЕДОНИЈА", {locale: 'mk-MK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testParseAddressMKFromUS() {
	var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Сања Јанчевски ГРАДСКИ ПАЗАР 5", parsedAddress.streetAddress);
	assertEquals("ОХРИД", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("6000", parsedAddress.postalCode);
	assertEquals("МАКЕДОНИЈА", parsedAddress.country);
	assertEquals("MK", parsedAddress.countryCode);
};

function testFormatAddressMK() {
	var parsedAddress = new Address({
		streetAddress: "Сања Јанчевски ГРАДСКИ ПАЗАР 5",
		locality: "ОХРИД",
		postalCode: "6000",
		country: "МАКЕДОНИЈА",
		countryCode: "MK"
	}, {locale: 'mk-MK'});
	
	var expected = "Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА";
	var formatter = new AddressFmt({locale: 'mk-MK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMKFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Сања Јанчевски ГРАДСКИ ПАЗАР 5",
		locality: "ОХРИД",
		postalCode: "6000",
		country: "МАКЕДОНИЈА",
		countryCode: "MK"
	}, {locale: 'en-US'});
	
	var expected = "Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
