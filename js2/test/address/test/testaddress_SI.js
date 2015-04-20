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

function testParseAddressSINormal() {
	var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek Prvomajska ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertEquals("SLOVENIA", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};

function testParseAddressSINoZip() {
	var parsedAddress = new Address("Prešernova 31\n1000 Ljubljana\nSlovenia", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Prešernova 31", parsedAddress.streetAddress);
	assertEquals("Ljubljana", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1000", parsedAddress.postalCode);
	assertEquals("Slovenia", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};

function testParseAddressSINoCountry() {
	var parsedAddress = new Address("Marija Borisek , Prvomajska , ulica 20 , 1270 LITIJA", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek, Prvomajska, ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};

function testParseAddressSIManyLines() {
	var parsedAddress = new Address("Marija Borisek\nPrvomajska ulica 20\n1270 LITIJA\nSLOVENIA", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek, Prvomajska ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertEquals("SLOVENIA", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};

function testParseAddressSIOneLine() {
	var parsedAddress = new Address("Marija Borisek , Prvomajska ulica 20 , 1270 , LITIJA , SLOVENIA", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek, Prvomajska ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertEquals("SLOVENIA", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};



function testParseAddressSINoDelimiters() {
	var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20 1270 LITIJA SLOVENIA", {locale: 'sl-SI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek Prvomajska ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertEquals("SLOVENIA", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};


function testParseAddressSIFromUS() {
	var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20\nLITIJA 1270\nSLOVENIA", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Marija Borisek Prvomajska ulica 20", parsedAddress.streetAddress);
	assertEquals("LITIJA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("1270", parsedAddress.postalCode);
	assertEquals("SLOVENIA", parsedAddress.country);
	assertEquals("SI", parsedAddress.countryCode);
};

function testFormatAddressSI() {
	var parsedAddress = new Address({
		streetAddress: "Marija Borisek Prvomajska ulica 20",
		locality: "LITIJA",
		region: null,
		postalCode: "1270",
		country: "SLOVENIA",
		countryCode: "SI"
	}, {locale: 'sl-SI'});
	
	var expected = "Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA";
	var formatter = new AddressFmt({locale: 'sl-SI'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressSIFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Marija Borisek Prvomajska ulica 20",
		locality: "LITIJA",
		region: null,
		postalCode: "1270",
		country: "SLOVENIA",
		countryCode: "SI"
	}, {locale: 'en-US'});
	
	var expected = "Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
