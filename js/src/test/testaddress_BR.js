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



function testParseAddressBRNormal() {
	var parsedAddress = new ilib.Address("Carlos Rossi,Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP,13035-680,BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Carlos Rossi, Avenida João Jorge, 112, ap. 31 Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("13035-680", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRNoZip() {
	var parsedAddress = new ilib.Address("Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP, BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avenida João Jorge, 112, ap. 31 Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBRManyLines() {
	var parsedAddress = new ilib.Address("Carlos Rossi\nAvenida João Jorge, 112, ap. 31\nVila Industrial\nCampinas - SP\n13035-680\nBRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Carlos Rossi, Avenida João Jorge, 112, ap. 31, Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("13035-680", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBROneLine() {
	var parsedAddress = new ilib.Address("Rua Visconde de Porto Seguro 1238, Sao Paulo - SP,BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro 1238", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Rua Visconde de Porto Seguro 1238   \n\t\n Sao Paulo - SP \t\n 04642-000,\n\n\n BRAZIL  \n  \t\t\t", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro 1238", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRNoDelimiters() {
	var parsedAddress = new ilib.Address("Rua Visconde de Porto Seguro Sao Paulo - SP 04642-000 BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRSpecialChars() {
	var parsedAddress = new ilib.Address("SOCIEDADE BRASILEIRA DE FÍSICA,Caixa Postal 66328,São Paulo - SP,05315-970,BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SOCIEDADE BRASILEIRA DE FÍSICA, Caixa Postal 66328", parsedAddress.streetAddress);
	assertEquals("São Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("05315-970", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRFromUS() {
	var parsedAddress = new ilib.Address("Rua Visconde de Porto Seguro, Sao Paulo - SP, 04642-000, BRAZIL", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testFormatAddressBR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Rua Visconde de Porto Seguro",
		locality: "Sao Paulo",
		region: "SP",
		postalCode: "04642-000",
		country: "BRAZIL",
		countryCode: "BR"
	}, {locale: 'pt-BR'});
	
	var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\n04642-000\nBRAZIL";
	var formatter = new ilib.AddressFmt({locale: 'pt-BR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Rua Visconde de Porto Seguro",
		locality: "Sao Paulo",
		region: "SP",
		postalCode: "04642-000",
		country: "BRAZIL",
		countryCode: "BR"
	}, {locale: 'en-US'});
	
	var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\n04642-000\nBRAZIL";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
