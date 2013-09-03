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
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580  \n\t\n COCHABAMBA\t\n\n BOLIVIA  \n  \t\t\t", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("SEÑOR FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BOX 580 COCHABAMBA BOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressSpeciAMChars() {
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COCHABAMBA",parsedAddress.locality);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BOLIVIA", parsedAddress.country);
	assertEquals("BO", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580",
		locality: "COCHABAMBA",
		country: "BOLIVIA",
		countryCode: "BO"
	}, {locale: 'es-BO'});
	
	var expected = "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA";
	var formatter = new ilib.AddressFmt({locale: 'es-BO'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580",
		country: "BOLIVIA",
		locality: "COCHABAMBA",
		countryCode: "BO"
	}, {locale: 'en-US'});
	
	var expected = "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
