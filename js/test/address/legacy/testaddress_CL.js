/*
 * testaddress.js - test the address parsing and formatting routines
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



function testParseAddressCLNormal() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLNoZip() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
	assertEquals("8420000",parsedAddress.postalCode);
};

function testParseAddressCLManyLines() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185\nDep. 609\n8420000\nRecoleta\nChile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLOneLine() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609 \n\t\n 8420000\nRecoleta\t\n\n Chile  \n  \t\t\t", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLNoDelimiters() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185 Dep. 609 8420000 Recoleta Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185 Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLSpecialChars() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressCLFromUS() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("8420000",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testFormatAddressCL() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Av. Bellavista N° 185, Dep. 609",
		locality: "Recoleta",
		postalCode: "8420000",
		country: "Chile",
		countryCode: "CL"
	}, {locale: 'es-CL'});
	
	var expected = "Av. Bellavista N° 185, Dep. 609\n8420000\nRecoleta\nChile";
	var formatter = new ilib.AddressFmt({locale: 'es-CL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCLFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Av. Bellavista N° 185, Dep. 609",
		locality: "Recoleta",
		postalCode: "8420000",
		country: "Chile",
		countryCode: "CL"
	}, {locale: 'en-US'});
	
	var expected = "Av. Bellavista N° 185, Dep. 609\n8420000\nRecoleta\nChile";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCL1() {
	var parsedAddress = new ilib.Address("Señorita Patricia Vivas, Moneda 1155, 8340457, SANTIAGO, CHILE", {locale: 'es-CL'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Señorita Patricia Vivas, Moneda 1155", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("SANTIAGO", parsedAddress.locality);
	assertEquals("8340457",parsedAddress.postalCode);
	assertEquals("CHILE", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};
function testFormatAddressCL2() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Señorita Patricia Vivas Moneda 1155",
		locality: "SANTIAGO",
		postalCode: "8340457",
		country: "CHILE",
		countryCode: "CL"
	}, {locale: 'es-CL'});
	
	var expected = "Señorita Patricia Vivas Moneda 1155\n8340457\nSANTIAGO\nCHILE";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

