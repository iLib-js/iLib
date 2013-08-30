/*
 * testaddress_SA.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA 12411\nEGYPT", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("12411", parsedAddress.postalCode);
	assertEquals("EGYPT", parsedAddress.country);
	assertEquals("EG", parsedAddress.countryCode);
};



function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA\nEGYPT", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Abdullah Nassir P.O. Box 15501", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EGYPT", parsedAddress.country);
	assertEquals("EG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA 12411", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("12411", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	
};


function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30\nRue Ahmed Orabi\nAl-Mohandessine\nGIZA\n12411\nEGYPT\n\n", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("12411", parsedAddress.postalCode);
	assertEquals("EGYPT", parsedAddress.country);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30 , Rue Ahmed Orabi , Al-Mohandessine , GIZA , 12411 , EGYPT", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("12411", parsedAddress.postalCode);
	assertEquals("EGYPT", parsedAddress.country);
};


function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi Al-Mohandessine GIZA 12411 EGYPT", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("12411", parsedAddress.postalCode);
	assertEquals("EGYPT", parsedAddress.country);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA 12411\nEGYPT", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi", parsedAddress.streetAddress);
	assertEquals("Al-Mohandessine", parsedAddress.locality);
	assertEquals("GIZA", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("12411", parsedAddress.postalCode);
	assertEquals("EGYPT", parsedAddress.country);
};


function testFormatAddressEG() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi",
		locality: "Al-Mohandessine",
		region: null,
		postalCode: "12411",
		country: "EGYPT",
		countryCode: "EG"
	}, {locale: 'ar-EG'});
	
	var expected = "Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA 12411\nEGYPT";
	var formatter = new ilib.AddressFmt({locale: 'ar-EG'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi",
		locality: "Al-Mohandessine",
		region: null,
		postalCode: "12411",
		country: "EGYPT",
		countryCode: "EG"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Mohamed Ahmed Mahmoud 30, Rue Ahmed Orabi\nAl-Mohandessine GIZA 12411\nEGYPT";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
