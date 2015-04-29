/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

function testParseAddressLTNormal() {
	var parsedAddress = new ilib.Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTNoZip() {
	var parsedAddress = new ilib.Address("Adelei Mickienei Plento g. 17-2 Ariogala\nRaseiniu r.sav\nLITHUANIA", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLTNoCountry() {
	var parsedAddress = new ilib.Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTManyLines() {
	var parsedAddress = new ilib.Address("Adelei Mickienei\nPlento g.\n17-2 Ariogala\n\n60249\n\nRaseiniu r.sav\n\n\nLITHUANIA\n\n\n", {locale: 'lt-LT'});
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei, Plento g., 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTOneLine() {
	var parsedAddress = new ilib.Address("Adelei Mickienei , Plento g. , 17-2 Ariogala , 60249 , Raseiniu r.sav , LITHUANIA", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei, Plento g., 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tAdelei Mickienei\t\t\rPlento g.\t\t\r17-2 Ariogala\n\n60249\n\nRaseiniu r.sav\n\t LITHUANIA\n\n\n", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTNoDelimiters() {
	var parsedAddress = new ilib.Address("Adelei Mickienei Plento g. 17-2 Ariogala 60249 Raseiniu r.sav LITHUANIA", {locale: 'lt-LT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testParseAddressLTFromUS() {
	var parsedAddress = new ilib.Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Adelei Mickienei Plento g. 17-2 Ariogala", parsedAddress.streetAddress);
	assertEquals("Raseiniu r.sav", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("60249", parsedAddress.postalCode);
	assertEquals("LITHUANIA", parsedAddress.country);
	assertEquals("LT", parsedAddress.countryCode);
};

function testFormatAddressLT() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Adelei Mickienei Plento g. 17-2 Ariogala",
		locality: "Raseiniu r.sav",
		postalCode: "60249",
		country: "LITHUANIA",
		countryCode: "LT"
	}, {locale: 'lt-LT'});
	
	var expected = "Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA";
	var formatter = new ilib.AddressFmt({locale: 'lt-LT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressLTFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Adelei Mickienei Plento g. 17-2 Ariogala",
		locality: "Raseiniu r.sav",
		postalCode: "60249",
		country: "LITHUANIA",
		countryCode: "LT"
	}, {locale: 'en-US'});
	
	var expected = "Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
