/*
 * testaddress_IR.js - test the address parsing and formatting routines
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



function testParseAddressIRNormal() {
	var parsedAddress = new ilib.Address("خانم فاطمه, شماره طبقه, فرهنگ, تهران, ۱۱۹۳۶۵۴۴۷۱, ایران", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱", parsedAddress.postalCode);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};

function testParseAddressIRNoZip() {
	var parsedAddress = new ilib.Address("خانم فاطمه,شماره  طبقه, فرهنگ, تهران, ایران", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressIRManyLines() {
	var parsedAddress = new ilib.Address("خانم فاطمه\nشماره  طبقه\nفرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱\nایران", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱", parsedAddress.postalCode);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};

function testParseAddressIROneLine() {
	var parsedAddress = new ilib.Address("خانم فاطمه,شماره  طبقه,فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱ ایران", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱",parsedAddress.postalCode);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};

function testParseAddressIRSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("خانم فاطمه,شماره  طبقه   \n\t\n فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱\t\n\n ایران  \n  \t\t\t", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱", parsedAddress.postalCode);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};

function testParseAddressIRNoDelimiters() {
	var parsedAddress = new ilib.Address("خانم فاطمه شماره  طبقه فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱ ایران", {locale: 'fa-IR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱", parsedAddress.postalCode);
	assertEquals("ایران", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};



function testParseAddressIRFromUS() {
	var parsedAddress = new ilib.Address("خانم فاطمه,شماره  طبقه,فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱,Iran", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("خانم فاطمه, شماره طبقه", parsedAddress.streetAddress);
	assertEquals("فرهنگ", parsedAddress.locality);
	assertEquals("تهران", parsedAddress.region);
	assertEquals("۱۱۹۳۶۵۴۴۷۱", parsedAddress.postalCode);
	assertEquals("Iran", parsedAddress.country);
	assertEquals("IR", parsedAddress.countryCode);
};

function testFormatAddressIR() {
	var parsedAddress = new ilib.Address({
		streetAddress: "خانم فاطمه,شماره  طبقه",
		locality: "فرهنگ",
		region: "تهران",
		postalCode: "۱۱۹۳۶۵۴۴۷۱",
		country: "ایران",
		countryCode: "IR"
	}, {locale: 'fa-IR'});
	
	var expected = "خانم فاطمه,شماره طبقه\nفرهنگ\nتهران\n۱۱۹۳۶۵۴۴۷۱\nایران";
	var formatter = new ilib.AddressFmt({locale: 'fa-IR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressIRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "خانم فاطمه,شماره  طبقه",
		postalCode: "۱۱۹۳۶۵۴۴۷۱",
		country: "Iran",
		countryCode: "IR"
	}, {locale: 'en-US'});
	
	var expected = "خانم فاطمه,شماره طبقه\n۱۱۹۳۶۵۴۴۷۱\nIran";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
