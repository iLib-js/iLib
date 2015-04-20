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


function testParseAddressMANormal() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMANoZip() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,خريبكة , المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressMAManyLines() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة\n٢٥٠٠٥ خريبكة \n المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMAOneLine() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMASuperfluousWhitespace() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة   \n\t\n٢٥٠٠٥ خريبكة \t\n\n  المغرب  \n  \t\t\t", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMANoDelimiters() {
	var parsedAddress = new Address("السيد. محمد إبراهيم بلدية خريبكة  ٢ شارع الاستقلال٢٥٠٠٥  خريبكة   المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم بلدية خريبكة ٢ شارع الاستقلال", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMASpecialChars() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة",parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("المغرب", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testParseAddressMAFromUS() {
	var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , Morocco", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد. محمد إبراهيم, بلدية خريبكة", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("خريبكة", parsedAddress.locality);
	assertEquals("٢٥٠٠٥", parsedAddress.postalCode);
	assertEquals("Morocco", parsedAddress.country);
	assertEquals("MA", parsedAddress.countryCode);
};

function testFormatAddressMA() {
	var parsedAddress = new Address({
		streetAddress: "السيد. محمد إبراهيم, بلدية خريبكة",
		locality: "طرابلس",
		country: "المغرب",
		countryCode: "MA"
	}, {locale: 'ar-MA'});
	
	var expected = "السيد. محمد إبراهيم, بلدية خريبكة\nطرابلس\nالمغرب";
	var formatter = new AddressFmt({locale: 'ar-MA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressMAARFromUS() {
	var parsedAddress = new Address({
		streetAddress: "السيد. محمد إبراهيم, بلدية خريبكة",
		locality: "طرابلس",
		country: "Morocco",
		countryCode: "MA"
	}, {locale: 'en-US'});
	
	var expected = "السيد. محمد إبراهيم, بلدية خريبكة\nطرابلس\nMorocco";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
