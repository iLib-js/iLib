/*
 * testaddress_EG.js - test the address parsing and formatting routines
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

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");
function testParseAddressEGNormal() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("مصر", parsedAddress.country);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertEquals("مصر", parsedAddress.country);
	assertEquals("EG", parsedAddress.countryCode);
};



function testParseAddressEGNoZip() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\nمصر", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("مصر", parsedAddress.country);
	assertEquals("EG", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};


function testParseAddressEGNoCountry() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n ١٢٤١١", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	
};


function testParseAddressEGManyLines() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠\nشارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر\n\n", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertEquals("مصر", parsedAddress.country);
};

function testParseAddressEGOneLine() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠ , شارع احمد عرابى , آل المهندسين , الجيزة , ١٢٤١١ , مصر", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertEquals("مصر", parsedAddress.country);
};

//needs a more precise regular expression to handle spaces within localities
/*function testParseAddressEGNoDelimiters() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى آل المهندسين\n الجيزة\n ١٢٤١١ مصر", {locale: 'ar-EG'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertEquals("مصر", parsedAddress.country);
};*/

function testParseAddressEGFromUS() {
	var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\n الجيزة\n ١٢٤١١\nEgypt", {locale: 'en-US'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("السيد محمد احمد محمود ٣٠, شارع احمد عرابى", parsedAddress.streetAddress);
	assertEquals("آل المهندسين", parsedAddress.locality);
	assertEquals("الجيزة", parsedAddress.region);
	assertEquals("EG", parsedAddress.countryCode);
	assertEquals("١٢٤١١", parsedAddress.postalCode);
	assertEquals("Egypt", parsedAddress.country);
};


function testFormatAddressEGEG() {
	var parsedAddress = new Address({
		streetAddress: "السيد محمد احمد محمود ٣٠, شارع احمد عرابى",
		locality: "آل المهندسين",
		region: "الجيزة",
		postalCode: "١٢٤١١",
		country: "مصر",
		countryCode: "EG"
	}, {locale: 'ar-EG'});
	
	var expected = "السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر";
	var formatter = new AddressFmt({locale: 'ar-EG'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testFormatAddressEGFromUS() {
	var parsedAddress = new Address({
		streetAddress: "السيد محمد احمد محمود ٣٠, شارع احمد عرابى",
		locality: "آل المهندسين",
		region: "الجيزة",
		postalCode: "١٢٤١١",
		country: "Egypt",
		countryCode: "EG"
	}, {locale: 'en-US'});
	
	var expected = "السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nEgypt";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
