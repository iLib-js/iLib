
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



function testParseAddressDZFRNormal() {
	var parsedAddress = new ilib.Address("M. Said Mohamed, 2, rue de l'Indépendance, 16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFRNoZip() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance, ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressDZFRManyLines() {
	var parsedAddress = new ilib.Address("M. Said Mohamed\n2, rue de l'Indépendance\n16027 ALGIERS\n Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFROneLine() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027",parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance   \n\t\n 16027 ALGIERS\t\n\n  Algérie  \n  \t\t\t", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFRNoDelimiters() {
	var parsedAddress = new ilib.Address("M. Said Mohamed 2  rue de l'Indépendance 16027 ALGIERS  Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed 2 rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS", parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFRSpecialChars() {
	var parsedAddress = new ilib.Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("M. Said Mohamed, 2, rue de l'Indépendance", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("ALGIERS",parsedAddress.locality);
	assertEquals("16027", parsedAddress.postalCode);
	assertEquals("Algérie", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZFRFromUS() {
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

function testFormatAddressDZFR() {
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

function testFormatAddressDZFRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "M. Said Mohamed,2, rue de l'Indépendance",
		postalCode: "10110",
		locality: "ALGIERS",
		country: "Algeria",
		countryCode: "DZ"
	}, {locale: 'en-US'});
	
	var expected = "M. Said Mohamed,2, rue de l'Indépendance\n10110 ALGIERS\nAlgeria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testParseAddressDZARNormal() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال, ١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZARNoZip() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال, الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressDZARManyLines() {
	var parsedAddress = new ilib.Address("محمد سعيد\n٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\n الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZAROneLine() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦",parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZARSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال   \n\t\n ١٦٠٢٦ الجزائر\t\n\n  الجزائر  \n  \t\t\t", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZARNoDelimiters() {
	var parsedAddress = new ilib.Address("محمد سعيد  ٢ شارع الاستقلال ١٦٠٢٦ الجزائر  الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر", parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZARSpecialChars() {
	var parsedAddress = new ilib.Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("محمد سعيد, ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("الجزائر",parsedAddress.locality);
	assertEquals("١٦٠٢٦", parsedAddress.postalCode);
	assertEquals("الجزائر", parsedAddress.country);
	assertEquals("DZ", parsedAddress.countryCode);
};

function testParseAddressDZARFromUS() {
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

function testFormatAddressDZARFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "محمد سعيد, ٢ شارع الاستقلال",
		postalCode: "١٦٠٢٦",
		locality: "الجزائر",
		country: "Algeria",
		countryCode: "DZ"
	}, {locale: 'en-US'});
	
	var expected = "محمد سعيد, ٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\nAlgeria";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
