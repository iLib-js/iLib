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
	var parsedAddress = new ilib.Address("Yisrael Yisraeli\nHaDoar 1\nJerusalem 12345\nIsrael", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Yisrael Yisraeli, HaDoar 1", parsedAddress.streetAddress);
	assertEquals("Jerusalem", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12345",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Yisrael Yisraeli, HaDoar 1\nJerusalem 12345", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Yisrael Yisraeli, HaDoar 1", parsedAddress.streetAddress);
	assertEquals("Jerusalem", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("12345",parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};



function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("R.O.Y. International , PO Box 13056, TEL-AVIV ISL-61130, Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tR.O.Y. International\n\t\nPO Box 13056\n \r\n\r\rTEL-AVIV	ISL-61130\r\r\n	Israel\t\n\n\n", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("R.O.Y. International PO Box 13056 TEL-AVIV ISL-61130 Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertEquals(parsedAddress.region);
	assertEquals("ISL-61130",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

/*function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Työpajankatu 13,IL-00580 Helsinki, Israel", {locale: 'he-IL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Työpajankatu 13", parsedAddress.streetAddress);
	assertEquals("Helsinki", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("IL-00580",parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};*/

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("R.O.Y. International\nPO Box 13056\nTEL-AVIV, Israel", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("R.O.Y. International, PO Box 13056", parsedAddress.streetAddress);
	assertEquals("TEL-AVIV", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Israel", parsedAddress.country);
	assertEquals("IL", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "R.O.Y. International, PO Box 13056",
		locality: "TEL-AVIV",
		country: "Israel",
		countryCode: "IL",
	}, {locale: 'he-IL'});
	
	var expected = "R.O.Y. International, PO Box 13056\nTEL-AVIV\nIsrael";
	var formatter = new ilib.AddressFmt({locale: 'he-IL'});
	assertEquals(expected, formatter.format(parsedAddress));
};



function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "R.O.Y. International, PO Box 13056, Albertinkatu 36 B",
		locality: "TEL-AVIV",
		country: "Israel",
		countryCode: "IL",
	}, {locale: 'en-US'});
	
	var expected = "R.O.Y. International, PO Box 13056, Albertinkatu 36 B\nTEL-AVIV\nIsrael";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
