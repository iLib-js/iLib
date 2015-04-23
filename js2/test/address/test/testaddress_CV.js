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


function testParseAddressCVNormal() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVNoZip() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38,PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressCVManyLines() {
	var parsedAddress = new Address("Luis Felipe Ramos\nRua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVOneLine() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVSuperfluousWhitespace() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38  \n\t\n 7600 PRAIA, SANTIAGO\t\n\n CAPE VERDE  \n  \t\t\t", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVNoDelimiters() {
	var parsedAddress = new Address("Luis Felipe Ramos Rua 5 de Julho 138/Platô C.P. 38 7600 PRAIA SANTIAGO CAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos Rua 5 de Julho 138/Platô C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVSpecialChars() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testParseAddressCVFromUS() {
	var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38", parsedAddress.streetAddress);
	assertEquals("SANTIAGO", parsedAddress.region);
	assertEquals("PRAIA", parsedAddress.locality);
	assertEquals("7600", parsedAddress.postalCode);
	assertEquals("CAPE VERDE", parsedAddress.country);
	assertEquals("CV", parsedAddress.countryCode);
};

function testFormatAddressCV() {
	var parsedAddress = new Address({
		streetAddress: "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38",
		locality: "PRAIA",
		postalCode: "7600",
		region: "SANTIAGO",
		country: "CAPE VERDE",
		countryCode: "CV"
	}, {locale: 'pt-CV'});
	
	var expected = "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE";
	var formatter = new AddressFmt({locale: 'pt-CV'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCVFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38",
		postalCode: "7600",
		region: "SANTIAGO",
		country: "CAPE VERDE",
		locality: "PRAIA",
		countryCode: "CV"
	}, {locale: 'en-US'});
	
	var expected = "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
