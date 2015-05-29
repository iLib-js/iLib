/*
 * testaddress_GT.js - test the address parsing and formatting routines
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

function testParseAddressGTNormal() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTNoZip() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\nGUATEMALA\nGUATEMALA", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGTNoCountry() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTManyLines() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ \nAVENIDA PETAPA 37\n\nZ. 12\n01012\nGUATEMALA\n\n\nGUATEMALA\n\n\n", {locale: 'es-GT'});
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTOneLine() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ , AVENIDA PETAPA 37 , Z. 12 ,01012 GUATEMALA , GUATEMALA", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMIGUEL ÁNGEL MENCHÚ \n\t\tAVENIDA PETAPA 37\n\nZ. 12\n\n01012\n\t\nGUATEMALA\n GUATEMALA\n\n\n", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTNoDelimiters() {
	var parsedAddress = new ilib.Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12 01012-GUATEMALA GUATEMALA", {locale: 'es-GT'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testParseAddressGTFromUS() {
	var parsedAddress = new ilib.Address("MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12", parsedAddress.streetAddress);
	assertEquals("GUATEMALA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("01012", parsedAddress.postalCode);
	assertEquals("GUATEMALA", parsedAddress.country);
	assertEquals("GT", parsedAddress.countryCode);
};

function testFormatAddressGT() {
	var parsedAddress = new ilib.Address({
		streetAddress: "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12",
		locality: "GUATEMALA",
		postalCode: "01012",
		country: "GUATEMALA",
		countryCode: "GT"
	}, {locale: 'es-GT'});
	
	var expected = "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA";
	var formatter = new ilib.AddressFmt({locale: 'es-GT'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGTFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12",
		locality: "GUATEMALA",
		postalCode: "01012",
		country: "GUATEMALA",
		countryCode: "GT"
	}, {locale: 'en-US'});
	
	var expected = "MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
