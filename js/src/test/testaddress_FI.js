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

function testParseAddressFIfinnishNormal() {
	var parsedAddress = new ilib.Address("Eduskunta\nMatti Mallikainen\nMannerheimintie 30 as 5\nFI-00102 Eduskunta\nFinland", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Eduskunta, Matti Mallikainen, Mannerheimintie 30 as 5", parsedAddress.streetAddress);
	assertEquals("Eduskunta", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-00102",parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFIfinnishNoCountry() {
	var parsedAddress = new ilib.Address("Eduskunta, Matti Mallikainen\nMannerheimintie 30 as 5\nFI-00102 Eduskunta", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Eduskunta, Matti Mallikainen, Mannerheimintie 30 as 5", parsedAddress.streetAddress);
	assertEquals("Eduskunta", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-00102",parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};


function testParseAddressFIswedishNormal() {
	var parsedAddress = new ilib.Address("Kalevankatu 12, 1st floor, FI-60100 Seinäjoki,Finland", {locale: 'sv-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Kalevankatu 12, 1st floor", parsedAddress.streetAddress);
	assertEquals("Seinäjoki", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-60100",parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFIswedishNoCountry() {
	var parsedAddress = new ilib.Address("Kalevankatu 12, 1st floor, FI-60100 Seinäjoki", {locale: 'sv-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Kalevankatu 12, 1st floor", parsedAddress.streetAddress);
	assertEquals("Seinäjoki", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-60100",parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};



function testParseAddressFIOneLine() {
	var parsedAddress = new ilib.Address("Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B, 00180 HELSINKI, Finland", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B", parsedAddress.streetAddress);
	assertEquals("HELSINKI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("00180",parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFISuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMs. Aulikki Laasko\n\t\nVesakkotic 1399\n \r\n\r\rFI-00630	HELSINKI\r\r\n	Finland\t\n\n\n", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Aulikki Laasko, Vesakkotic 1399", parsedAddress.streetAddress);
	assertEquals("HELSINKI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-00630",parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFINoDelimiters() {
	var parsedAddress = new ilib.Address("Ms. Aulikki Laasko Vesakkotic 1399 HELSINKI Finland", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Aulikki Laasko Vesakkotic 1399", parsedAddress.streetAddress);
	assertEquals("HELSINKI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFISpecialChars() {
	var parsedAddress = new ilib.Address("Työpajankatu 13,FI-00580 Helsinki, Finland", {locale: 'fi-FI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Työpajankatu 13", parsedAddress.streetAddress);
	assertEquals("Helsinki", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("FI-00580",parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testParseAddressFIFromUS() {
	var parsedAddress = new ilib.Address("Saga Matkat OY\nSaga Tours Ltd\nAlbertinkatu 36 B\nHELSINKI, Finland", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B", parsedAddress.streetAddress);
	assertEquals("HELSINKI", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Finland", parsedAddress.country);
	assertEquals("FI", parsedAddress.countryCode);
};

function testFormatAddressFIfinnish() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B",
		locality: "HELSINKI",
		country: "Finland",
		countryCode: "FI",
	}, {locale: 'fi-FI'});
	
	var expected = "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B\nHELSINKI\nFinland";
	var formatter = new ilib.AddressFmt({locale: 'fi-FI'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFIswedish() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Työpajankatu 13",
		locality: "Helsinki",
		country: "Finland",
		countryCode: "FI",
		format: "asian"
	}, {locale: 'fi-FI'});
	
	var expected = "Työpajankatu 13, Helsinki,Finland";
	var formatter = new ilib.AddressFmt({locale: 'fi-FI'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFIFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B",
		locality: "HELSINKI",
		country: "Finland",
		countryCode: "FI",
	}, {locale: 'en-US'});
	
	var expected = "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B\nHELSINKI\nFinland";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
