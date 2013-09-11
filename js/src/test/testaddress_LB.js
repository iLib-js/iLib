
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
 * distributed under the License is distributed on an "AS IS"BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */



function testParseAddressFRNormal() {
	var parsedAddress = new ilib.Address("Banque du Liban, P.O. Box 11–5544, RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFRNoZip() {
	var parsedAddress = new ilib.Address("Banque du Liban, P.O. Box 11–5544, RIAD EL SOLH BEIRUT, Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressFRManyLines() {
	var parsedAddress = new ilib.Address("Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT 1107 2810\n Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFROneLine() {
	var parsedAddress = new ilib.Address("Banque du Liban, P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Banque du Liban \n P.O. Box 11–5544\t\n\n  RIAD EL SOLH BEIRUT 1107 2810  \nLiban  \t\t\t", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFRNoDelimiters() {
	var parsedAddress = new ilib.Address("Banque du Liban 2  P.O. Box 11–5544 RIAD EL SOLH BEIRUT 1107 2810  Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban 2 P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFRSpecialChars() {
	var parsedAddress = new ilib.Address("Banque du Liban,P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Liban", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressFRFromUS() {
	var parsedAddress = new ilib.Address("Banque du Liban,P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Lebanon", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Banque du Liban, P.O. Box 11–5544", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("RIAD EL SOLH BEIRUT", parsedAddress.locality);
	assertEquals("1107 2810", parsedAddress.postalCode);
	assertEquals("Lebanon", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testFormatAddressFR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Banque du Liban\nP.O. Box 11–5544",
		locality: "RIAD EL SOLH BEIRUT",
		country: "Liban",
		countryCode: "LB"
	}, {locale: 'fr-LB'});
	
	var expected = "Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT\nLiban";
	var formatter = new ilib.AddressFmt({locale: 'fr-LB'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Banque du Liban\nP.O. Box 11–5544",
		locality: "RIAD EL SOLH BEIRUT",
		country: "Lebanon",
		countryCode: "LB"
	}, {locale: 'en-US'});
	
	var expected = "Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT\nLebanon";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testParseAddressARNormal() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي, بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressARNoZip() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي, بيروت , لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressARManyLines() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي\nبيروت ١٠٠٠\n لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressAROneLine() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي,بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي   \n\t\n   بيروت ١٠٠٠  \n  \t\t\tلبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

/*function testParseAddressARNoDelimiters() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي  ٢ شارع الاستقلال  بيروت ١٠٠٠  لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي ٢ شارع الاستقلا", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};*/

function testParseAddressARSpecialChars() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت, مطار بيروت الدولي,بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت",parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("لبنان", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testParseAddressARFromUS() {
	var parsedAddress = new ilib.Address("مركز الفرز بيروت , مطار بيروت الدولي ,بيروت ١٠٠٠, Lebanon", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("مركز الفرز بيروت, مطار بيروت الدولي", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("بيروت", parsedAddress.locality);
	assertEquals("١٠٠٠", parsedAddress.postalCode);
	assertEquals("Lebanon", parsedAddress.country);
	assertEquals("LB", parsedAddress.countryCode);
};

function testFormatARAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "مركز الفرز بيروت, مطار بيروت الدولي",
		locality: "لبنان",
		country: "لبنان",
		countryCode: "LB"
	}, {locale: 'ar-LB'});
	
	var expected = "مركز الفرز بيروت, مطار بيروت الدولي\nلبنان\nلبنان";
	var formatter = new ilib.AddressFmt({locale: 'ar-LB'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "مركز الفرز بيروت, مطار بيروت الدولي",
		locality: "لبنان",
		country: "Lebanon",
		countryCode: "LB"
	}, {locale: 'en-US'});
	
	var expected = "مركز الفرز بيروت, مطار بيروت الدولي\nلبنان\nLebanon";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
