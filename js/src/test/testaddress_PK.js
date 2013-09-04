/*
 * testaddress_PY.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD\nPAKISTAN", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\n44000 ISLAMABAD", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan\nHouse No 17-B\nStreet No 30\n\nSector F-7/1\n\nISLAMABAD\n\n44000\nPAKISTAN\n\n\n", {locale: 'en-PK'});
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan, House No 17-B, Street No 30, Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan , House No 17-B , Street No 30 , Sector F-7/1 , ISLAMABAD , 44000 , PAKISTAN", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan, House No 17-B, Street No 30, Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tMr. Nasratullah Khan\t\t\rHouse No 17-B\t\t\rStreet No 30\n\nSector F-7/1\n\n\n44000\n\nISLAMABAD\n\t PAKISTAN\n\n\n", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30, Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1 ISLAMABAD 44000 PAKISTAN", {locale: 'en-PK'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1", parsedAddress.streetAddress);
	assertEquals("ISLAMABAD", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("44000", parsedAddress.postalCode);
	assertEquals("PAKISTAN", parsedAddress.country);
	assertEquals("PK", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1",
		locality: "ISLAMABAD",
		postalCode: "44000",
		country: "PAKISTAN",
		countryCode: "PK"
	}, {locale: 'en-PK'});
	
	var expected = "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN";
	var formatter = new ilib.AddressFmt({locale: 'en-PK'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1",
		locality: "ISLAMABAD",
		postalCode: "44000",
		country: "PAKISTAN",
		countryCode: "PK"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
