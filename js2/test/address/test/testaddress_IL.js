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

function testParseAddressILNormal() {
	var parsedAddress = new Address("Yisrael Yisraeli\nHaDoar 1\nJerusalem 12345\nIsrael", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Yisrael Yisraeli, HaDoar 1", parsedAddress.streetAddress);
	assertEquals("Jerusalem", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12345",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressILNoCountry() {
	var parsedAddress = new Address("Yisrael Yisraeli, HaDoar 1\nJerusalem 12345", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Yisrael Yisraeli, HaDoar 1", parsedAddress.streetAddress);
	assertEquals("Jerusalem", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12345",parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};



function testParseAddressILOneLine() {
	var parsedAddress = new Address("R.O.Y. International , PO Box 13056, TEL-AVIV ISL-61130, Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressILSuperfluousWhitespace() {
	var parsedAddress = new Address("\t\t\tR.O.Y. International\n\t\nPO Box 13056\n \r\n\r\rTEL-AVIV	ISL-61130\r\r\n	Israel\t\n\n\n", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressILNoDelimiters() {
	var parsedAddress = new Address("R.O.Y. International PO Box 13056 TEL-AVIV ISL-61130 Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertEquals(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

/*function testParseAddressILSpecialChars() {
	var parsedAddress = new Address("Työpajankatu 13,IL-00580 Helsinki, Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Työpajankatu 13", parsedAddress.streetAddress);
	assertEquals("Helsinki", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("IL-00580",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};*/

function testParseAddressILFromUS() {
	var parsedAddress = new Address("R.O.Y. International\nPO Box 13056\nTEL-AVIV, Israel", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testFormatAddressIL() {
	var parsedAddress = new Address({
		streetAddress: "R.O.Y. International, PO Box 13056",
		locality: "TEL-AVIV",
		country: "Israel",
		countryCode: "IL",
	}, {locale: 'he-IL'});
	
	var expected = "R.O.Y. International, PO Box 13056\nTEL-AVIV\nIsrael";
	var formatter = new AddressFmt({locale: 'he-IL'});
	assertEquals(expected, formatter.format(parsedAddress));
};



function testFormatAddressILFromUS() {
	var parsedAddress = new Address({
		streetAddress: "R.O.Y. International, PO Box 13056, Albertinkatu 36 B",
		locality: "TEL-AVIV",
		country: "Israel",
		countryCode: "IL",
	}, {locale: 'en-US'});
	
	var expected = "R.O.Y. International, PO Box 13056, Albertinkatu 36 B\nTEL-AVIV\nIsrael";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
