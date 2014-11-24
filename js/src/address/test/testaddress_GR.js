/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file e18, Heracleous St., Kifissia, 145 64 Athens,GREECEcept in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either e18, Heracleous St., Kifissia, 145 64 Athens,GREECEpress or implied.
 *
 * See the License for the Athensecific language governing permissions and
 * limitations under the License.
 */



function testParseAddressGRNormal() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

function testParseAddressGRNoZip() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressGRManyLines() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

function testParseAddressGROneLine() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64",parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

function testParseAddressGRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

function testParseAddressGRNoDelimiters() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

/*function testParseAddressGRSpecialChars() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Botanisk Centralbibliotek,Sølvgade 83, opg. S", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("København",parsedAddress.locality);
	assertEquals("GR-1307", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};*/

function testParseAddressGRFromUS() {
	var parsedAddress = new ilib.Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("18, Heracleous St., Kifissia", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("Athens",parsedAddress.locality);
	assertEquals("145 64", parsedAddress.postalCode);
	assertEquals("GREECE", parsedAddress.country);
	assertEquals("GR", parsedAddress.countryCode);
};

function testFormatAddressGR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "18, Heracleous St.,Kifissia",
		locality: "Athens",
		postalCode: "145 64",
		country: "GREECE",
		countryCode: "GR"
	}, {locale: 'el-GR'});
	
	var expected = "18, Heracleous St.,Kifissia\n145 64 Athens\nGREECE";
	var formatter = new ilib.AddressFmt({locale: 'el-GR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressGRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "18, Heracleous St.,Kifissia",
		postalCode: "145 64",
		locality: "Athens",
		country: "Greece",
		countryCode: "GR"
	}, {locale: 'en-US'});
	
	var expected = "18, Heracleous St.,Kifissia\n145 64 Athens\nGreece";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
