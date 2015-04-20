/*
 * testaddress_VN.js - test the address parsing and formatting routines
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

function testParseAddressVNNormal() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNNoZip() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3 Ho Chi Minh City\nViệt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressVNNoCountry() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNManyLines() {
	var parsedAddress = new Address("No.123/45\nđường Nguyễn Thị Minh Khai\nPhường 5\nQuận 3\nHo Chi Minh City\n705612\nViệt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNOneLine() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612, Việt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNSuperfluousWhitespace() {
	var parsedAddress = new Address("No.123/45\n\nđường Nguyễn\t\tThị Minh Khai\n\n\tPhường 5\n\t\t\rQuận 3\r\r\n\tHo Chi Minh City\n\n\t705612\n\n\t\rViệt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNNoDelimiters() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612, Việt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testParseAddressVNFromUS() {
	var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam", {locale: 'vi-VN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5", parsedAddress.streetAddress);
	assertEquals("Quận 3", parsedAddress.locality);
	assertEquals("Ho Chi Minh City", parsedAddress.region);
	assertEquals("705612", parsedAddress.postalCode);
	assertEquals("Việt Nam", parsedAddress.country);
	assertEquals("VN", parsedAddress.countryCode);
};

function testFormatAddressVN() {
	var parsedAddress = new Address({
		streetAddress: "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5",
		locality: "Quận 3",
		postalCode: "705612",
		region: "Ho Chi Minh City",
		country: "Việt Nam",
		countryCode: "VN"
	}, {locale: 'vi-VN'});
	
	var expected = "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam";
	var formatter = new AddressFmt({locale: 'vi-VN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressVNFromUS() {
	var parsedAddress = new Address({
		streetAddress: "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5",
		locality: "Quận 3",
		postalCode: "705612",
		region: "Ho Chi Minh City",
		country: "Việt Nam",
		countryCode: "VN"
	}, {locale: 'en-US'});
	
	var expected = "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
