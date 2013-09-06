/*
 * testaddress_VE.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\nLaoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107\n1901 Airport Road\nCabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road, Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107 , 1901 Airport Road , Cabungaan , 2900 , Laoag City , 2900 , Ilocos Norte , Philippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road, Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107\n\n\t\r1901 Airport Road\t\t\rCabungaan\n\n\t\r2900\r\n\nLaoag City\t\rIlocos Norte\t\t\rPhilippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107 1901 Airport Road Cabungaan 2900 Laoag City Ilocos Norte Philippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juan dela Cruz Rm 107 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan", parsedAddress.streetAddress);
	assertEquals("Laoag City", parsedAddress.locality);
	assertEquals("Ilocos Norte", parsedAddress.region);
	assertEquals("2900", parsedAddress.postalCode);
	assertEquals("Philippines", parsedAddress.country);
	assertEquals("PH", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan",
		locality: "Laoag City",
		postalCode: "2900",
		region: "Ilocos Norte",
		country: "Philippines",
		countryCode: "PH"
	}, {locale: 'es-PH'});
	
	var expected = "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines";
	var formatter = new ilib.AddressFmt({locale: 'es-PH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan",
		locality: "Laoag City",
		postalCode: "2900",
		region: "Ilocos Norte",
		country: "Philippines",
		countryCode: "PH"
	}, {locale: 'en-US'});
	
	var expected = "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
