/*
 * testaddress_SK.js - test the address parsing and formatting routines for Mexico
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

function testParseAddressSKNormal() {
	
	var parsedAddress = new ilib.Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
        assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("010 01", parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);

};

function testParseAddressSKOtherName() {
	
var parsedAddress = new ilib.Address("Slovenská Pošta, š.p. Partizánska Cesta 9\n975 99 BANSKÁ BYSTRICA 1\nSLOVAKIA", {locale: 'sk-SK'});
        assertNotUndefined(parsedAddress);
	assertEquals("Slovenská Pošta, š.p. Partizánska Cesta 9", parsedAddress.streetAddress);
	assertEquals("BANSKÁ BYSTRICA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("975 99", parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);

};

function testParseAddressSKNoZip() {
	var parsedAddress = new ilib.Address("Pawel Opatovský Gazdova 4\nŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
	assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);
};

function testParseAddressSKNoCountry() {
	var parsedAddress = new ilib.Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1", {locale: 'sk-SK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("010 01", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);
	
};

function testParseAddressSKManyLines() {
	var parsedAddress = new ilib.Address("Pawel Opatovský\nGazdova 4\n010 01\nŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský, Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("010 01", parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);
};

function testParseAddressSKNoDelimiters() {
	var parsedAddress = new ilib.Address("Pawel Opatovský Gazdova 4 010 01 ŽILINA 1 SLOVAKIA", {locale: 'sk-SK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("010 01", parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);
};


function testParseAddressSKFromUS() {
	var parsedAddress = new ilib.Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Pawel Opatovský Gazdova 4", parsedAddress.streetAddress);
	assertEquals("ŽILINA 1", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("010 01", parsedAddress.postalCode);
	assertEquals("SLOVAKIA", parsedAddress.country);
	assertEquals("SK", parsedAddress.countryCode);
};

function testFormatAddressSK() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Pawel Opatovský Gazdova 4",
		locality: "ŽILINA 1",
		region: null,
		postalCode: "010 01",
		country: "SLOVAKIA",
		countryCode: "SK"
	}, {locale: 'sk-SK'});
	
	var expected = "Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA";
	var formatter = new ilib.AddressFmt({locale: 'sk-SK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSKFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Pawel Opatovský Gazdova 4",
		locality: "ŽILINA 1",
		region: null,
		postalCode: "010 01",
		country: "SLOVAKIA",
		countryCode: "SK"
	}, {locale: 'en-US'});
	
	var expected = "Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
