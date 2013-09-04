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



function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 84205077, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 84205077, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
	assertEquals("84205077",parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185\nDep. 609\n84205077\nRecoleta\nChile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 84205077, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609 \n\t\n 84205077\nRecoleta\t\n\n Chile  \n  \t\t\t", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185 Dep. 609 84205077 Recoleta Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185 Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 84205077, Recoleta, Chile", {locale: 'es-CL'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Av. Bellavista N° 185, Dep. 609, 84205077, Recoleta, Chile", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Av. Bellavista N° 185, Dep. 609", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Recoleta", parsedAddress.locality);
	assertEquals("84205077",parsedAddress.postalCode);
	assertEquals("Chile", parsedAddress.country);
	assertEquals("CL", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Av. Bellavista N° 185, Dep. 609",
		locality: "Recoleta",
		postalCode: "84205077",
		country: "Chile",
		countryCode: "CL"
	}, {locale: 'es-CL'});
	
	var expected = "Av. Bellavista N° 185, Dep. 609\n84205077\nRecoleta\nChile";
	var formatter = new ilib.AddressFmt({locale: 'es-CL'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Av. Bellavista N° 185, Dep. 609",
		locality: "Recoleta",
		postalCode: "84205077",
		country: "Chile",
		countryCode: "CL"
	}, {locale: 'en-US'});
	
	var expected = "Av. Bellavista N° 185, Dep. 609\n84205077\nRecoleta\nChile";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
