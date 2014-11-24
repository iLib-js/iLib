/*
 * testaddress_ME.js - test the address parsing and formatting routines
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

function testParseAddressMENormal() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nCrna Gora", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMESRNormal() {
	var parsedAddress = new ilib.Address("Петар Петровић Ул. Слобода бр. 1\n81000 Подгорица\nЦрна Гора", {locale: 'sr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петар Петровић Ул. Слобода бр. 1", parsedAddress.streetAddress);
	assertEquals("Подгорица", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Црна Гора", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};


function testParseAddressMESQNormal() {
	var parsedAddress = new ilib.Address("Z. Petar Petroviq Ul. Ka liri. 1\n81000 Podgorica\nMontenegro", {locale: 'sq-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Z. Petar Petroviq Ul. Ka liri. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Montenegro", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMEBSNormal() {
	var parsedAddress = new ilib.Address("Petar Petrović Ul. Sloboda ne. 1\n81000 Podgorica\nCrna Gora", {locale: 'sq-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Petar Petrović Ul. Sloboda ne. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};



function testParseAddressMENoZip() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. Slobode br. 1\nPodgorica\nCrna Gora", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMENoCountry() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMEManyLines() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul.\nSlobode br. 1\n\n81000 Podgorica\n\nCrna Gora\n\n\n", {locale: 'hr-ME'});
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul., Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMEOneLine() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. , Slobode br. 1 , Podgorica , 81000 , Crna Gora", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul., Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMESuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tG. Petar Petrović Ul.\t\t\rSlobode br. 1\t\n\n\nPodgorica\n\t\n81000\n\n\tCrna Gora\n\n\n", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMENoDelimiters() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. Slobode br. 1 81000 Podgorica Crna Gora", {locale: 'hr-ME'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Crna Gora", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testParseAddressMEFromUS() {
	var parsedAddress = new ilib.Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nMontenegro", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("G. Petar Petrović Ul. Slobode br. 1", parsedAddress.streetAddress);
	assertEquals("Podgorica", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("81000", parsedAddress.postalCode);
	assertEquals("Montenegro", parsedAddress.country);
	assertEquals("ME", parsedAddress.countryCode);
};

function testFormatAddressME() {
	var parsedAddress = new ilib.Address({
		streetAddress: "G. Petar Petrović Ul. Slobode br. 1",
		locality: "Podgorica",
		postalCode: "81000",
		country: "Crna Gora",
		countryCode: "ME"
	}, {locale: 'hr-ME'});
	
	var expected = "G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nCrna Gora";
	var formatter = new ilib.AddressFmt({locale: 'hr-ME'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMEFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "G. Petar Petrović Ul. Slobode br. 1",
		locality: "Podgorica",
		postalCode: "81000",
		country: "Montenegro",
		countryCode: "ME"
	}, {locale: 'en-US'});
	
	var expected = "G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nMontenegro";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
