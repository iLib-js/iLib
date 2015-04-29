/*
 * testaddress_IQ.js - test the address parsing and formatting routines
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

function testParseAddressIQNormal() {
	var parsedAddress = new ilib.Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n٦١٠٠٢\nالعراق", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertEquals("العراق", parsedAddress.country);
	assertEquals("IQ", parsedAddress.countryCode);
};



function testParseAddressIQNoZip() {
	var parsedAddress = new ilib.Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\nالعراق", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("العراق", parsedAddress.country);
	assertEquals("IQ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressIQNoCountry() {
	var parsedAddress = new ilib.Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n ٦١٠٠٢", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("IQ", parsedAddress.countryCode);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	
};


function testParseAddressIQManyLines() {
	var parsedAddress = new ilib.Address("السيد احمد طارق\n١٠ قهوة الشريعة\nالاصمعي\nالبصرة\n٦١٠٠٢\nالعراق\n\n", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("IQ", parsedAddress.countryCode);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertEquals("العراق", parsedAddress.country);
};

function testParseAddressIQOneLine() {
	var parsedAddress = new ilib.Address("السيد احمد طارق , ١٠ قهوة الشريعة , الاصمعي , البصرة , ٦١٠٠٢ , العراق", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("IQ", parsedAddress.countryCode);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertEquals("العراق", parsedAddress.country);
};


function testParseAddressIQNoDelimiters() {
	var parsedAddress = new ilib.Address("السيد احمد طارق, ١٠ قهوة الشريعة الاصمعي  البصرة  ٦١٠٠٢ العراق", {locale: 'ar-IQ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("IQ", parsedAddress.countryCode);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertEquals("العراق", parsedAddress.country);
};

function testParseAddressIQFromUS() {
	var parsedAddress = new ilib.Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n ٦١٠٠٢\nIraq", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد احمد طارق, ١٠ قهوة الشريعة", parsedAddress.streetAddress);
	assertEquals("الاصمعي", parsedAddress.locality);
	assertEquals("البصرة", parsedAddress.region);
	assertEquals("IQ", parsedAddress.countryCode);
	assertEquals("٦١٠٠٢", parsedAddress.postalCode);
	assertEquals("Iraq", parsedAddress.country);
};


function testFormatAddressIQ() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد احمد طارق, ١٠ قهوة الشريعة",
		locality: "الاصمعي",
		region: "البصرة",
		postalCode: "٦١٠٠٢",
		country: "العراق",
		countryCode: "IQ"
	}, {locale: 'ar-IQ'});
	
	var expected = "السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي, البصرة\n٦١٠٠٢\nالعراق";
	var formatter = new ilib.AddressFmt({locale: 'ar-IQ'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFormatAddressIQFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "السيد احمد طارق, ١٠ قهوة الشريعة",
		locality: "الاصمعي",
		region: "البصرة",
		postalCode: "٦١٠٠٢",
		country: "Iraq",
		countryCode: "IQ"
	}, {locale: 'en-US'});
	
	var expected = "السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي, البصرة\n٦١٠٠٢\nIraq";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
