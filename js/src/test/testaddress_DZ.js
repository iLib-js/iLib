
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



function testParseAddressFRNormal() {
	var parsedAddress = new ilib.Address("M. Said Mohamed, 2, rue de l'Indépendance, 16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFRNoZip() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance, ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressFRManyLines() {
	var parsedAddress = new ilib.Address("M. Said Mohamed\n2, rue de l'Indépendance\n16027 ALGIERS\n Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFROneLine() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027",parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance   \n\t\n 16027 ALGIERS\t\n\n  Algérie  \n  \t\t\t", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFRNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Said Mohamed 2  rue de l'Indépendance 16027 ALGIERS  Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed 2 rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFRSpecialChars() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS",parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressFRFromUS() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algeria", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algeria", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testFormatAddressFR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Said Mohamed,2, rue de l'Indépendance",
		locality: "ALGIERS",
		postalCode: "16027",
		country: "Algérie",
		countryCode: "DZ"
	}, {locale: 'fr-DZ'});
	
	var expected = "M. Said Mohamed,2, rue de l'Indépendance\n16027 ALGIERS\nAlgérie";
	var formatter = new ilib.AddressFmt({locale: 'fr-DZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Said Mohamed,2, rue de l'Indépendance",
		postalCode: "10110",
		locality: "ALGIERS",
		country: "Algeria",
		countryCode: "DZ"
	}, {locale: 'en-US'});
	
	var expected = "M. Said Mohamed,2, rue de l'Indépendance\n16027 ALGIERS\nAlgeria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testParseAddressARNormal() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال, ١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressARNoZip() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال, الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressARManyLines() {
	var parsedAddress = new ilib.Address("محمد سعيد\n٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\n الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressAROneLine() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("10110",parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال   \n\t\n ١٦٠٢٦ الجزائر\t\n\n  الجزائر  \n  \t\t\t", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressARNoDelimiters() {
	var parsedAddress = new ilib.Address("محمد سعيد  ٢ شارع الاستقلال ١٦٠٢٦ الجزائر  الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد 2  ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressARSpecialChars() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر",parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressARFromUS() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, Algeria", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("Algeria", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testFormatARAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "محمد سعيد, ٢ شارع الاستقلال",
		locality: "الجزائر",
		postalCode: "١٦٠٢٦",
		country: " الجزائر",
		countryCode: "DZ"
	}, {locale: 'ar-DZ'});
	
	var expected = "محمد سعيد, ٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\nالجزائر";
	var formatter = new ilib.AddressFmt({locale: 'ar-DZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "محمد سعيد, ٢ شارع الاستقلال",
		postalCode: "10110",
		locality: "الجزائر",
		country: "Algeria",
		countryCode: "DZ"
	}, {locale: 'en-US'});
	
	var expected = "محمد سعيد, ٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\nAlgeria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
