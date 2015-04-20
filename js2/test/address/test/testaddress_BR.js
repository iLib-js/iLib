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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAddressBRNormal() {
	var parsedAddress = new Address("Carlos Rossi,Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP,13035-680,BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Carlos Rossi, Avenida João Jorge, 112, ap. 31 Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("13035-680", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRNoZip() {
	var parsedAddress = new Address("Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP, BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Avenida João Jorge, 112, ap. 31 Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBRManyLines() {
	var parsedAddress = new Address("Carlos Rossi\nAvenida João Jorge, 112, ap. 31\nVila Industrial\nCampinas - SP\n13035-680\nBRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Carlos Rossi, Avenida João Jorge, 112, ap. 31, Vila Industrial", parsedAddress.streetAddress);
	assertEquals("Campinas", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("13035-680", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBROneLine() {
	var parsedAddress = new Address("Rua Visconde de Porto Seguro 1238, Sao Paulo - SP,BRAZIL", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro 1238", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRSuperfluousWhitespace() {
	var parsedAddress = new Address("Rua Visconde de Porto Seguro 1238   \n\t\n Sao Paulo - SP\n\n\n BRAZIL  \n  \t\n 04642-000 \t\t\t", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro 1238", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRNoDelimiters() {
	var parsedAddress = new Address("Rua Visconde de Porto Seguro Sao Paulo - SP BRAZIL  04642-000 ", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRSpecialChars() {
	var parsedAddress = new Address("SOCIEDADE BRASILEIRA DE FÍSICA,Caixa Postal 66328,São Paulo - SP,BRAZIL,05315-970", {locale: 'pt-BR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("SOCIEDADE BRASILEIRA DE FÍSICA, Caixa Postal 66328", parsedAddress.streetAddress);
	assertEquals("São Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("05315-970", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBRFromUS() {
	var parsedAddress = new Address("Rua Visconde de Porto Seguro, Sao Paulo - SP, Brasil, 04642-000", {locale: 'pt-BR'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Visconde de Porto Seguro", parsedAddress.streetAddress);
	assertEquals("Sao Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("04642-000", parsedAddress.postalCode);
	assertEquals("Brasil", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testFormatAddressBR() {
	var parsedAddress = new Address({
		streetAddress: "Rua Visconde de Porto Seguro",
		locality: "Sao Paulo",
		region: "SP",
		postalCode: "04642-000",
		country: "BRAZIL",
		countryCode: "BR"
	}, {locale: 'pt-BR'});
	
	var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\nBRAZIL\n04642-000";
	var formatter = new AddressFmt({locale: 'pt-BR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBRFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Rua Visconde de Porto Seguro",
		locality: "Sao Paulo",
		region: "SP",
		postalCode: "04642-000",
		country: "BRAZIL",
		countryCode: "BR"
	}, {locale: 'en-US'});
	
	var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\nBRAZIL\n04642-000";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testParseAddressBR1() {
	var parsedAddress = new Address("Lívia Amaral, Av. Paulista, 1098, 1º andar, apto. 101, Bela Vista, São Paulo - SP, Brasil, 01310-000", {locale: 'pt-BR'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Lívia Amaral, Av. Paulista, 1098, 1º andar, apto. 101, Bela Vista", parsedAddress.streetAddress);
	assertEquals("São Paulo", parsedAddress.locality);
	assertEquals("SP",parsedAddress.region);
	assertEquals("01310-000", parsedAddress.postalCode);
	assertEquals("Brasil", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBR2() {
	var parsedAddress = new Address("Rua Afonso Canargo, 805, Santana, Guarapuava - PR, 85070-200", {locale: 'pt-BR'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Rua Afonso Canargo, 805, Santana", parsedAddress.streetAddress);
	assertEquals("Guarapuava", parsedAddress.locality);
	assertEquals("PR",parsedAddress.region);
	assertEquals("85070-200", parsedAddress.postalCode);

	assertEquals("BR", parsedAddress.countryCode);
};

function testParseAddressBR3() {
	var parsedAddress = new Address("Boulevard das Flores 255,	SALVADOR - BA, BRAZIL, 40301-110", {locale: 'pt-BR'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Boulevard das Flores 255", parsedAddress.streetAddress);
	assertEquals("SALVADOR", parsedAddress.locality);
	assertEquals("BA",parsedAddress.region);
	assertEquals("40301-110", parsedAddress.postalCode);
	assertEquals("BRAZIL", parsedAddress.country);
	assertEquals("BR", parsedAddress.countryCode);
};
