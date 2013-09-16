/*
 * testaddress_RU.js - test the address parsing and formatting routines
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

function testParseAddressRUNormal() {
   var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUNoZip() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressRUNoCountry() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUManyLines() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул\nЛесная D. 5 поз\nЛесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUOneLine() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул , Лесная D. 5 поз , Лесной , АЛЕКСЕЕВСКИЙ R-N , Воронежская область , 247112 , Россия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул\t\t\rЛесная D. 5 поз\t\t\rЛесной\n\tАЛЕКСЕЕВСКИЙ R-N\n\t\tВоронежская область\n\t\r247112\n\t\rРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул Лесная D. 5 поз Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

/*function testParseAddressRUNoDelimiters() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной АЛЕКСЕЕВСКИЙ R-N Воронежская область 247112 Россия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};*/

function testParseAddressRUFromUS() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nRussia", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Russia", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testFormatAddressRU() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
		locality: "АЛЕКСЕЕВСКИЙ R-N",
		postalCode: "247112",
		region: "Воронежская область",
		country: "Россия",
		countryCode: "RU"
	}, {locale: 'ru-RU'});
	
	var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nРоссия";
	var formatter = new ilib.AddressFmt({locale: 'ru-RU'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressRUFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
		locality: "АЛЕКСЕЕВСКИЙ R-N",
		postalCode: "247112",
		region: "Воронежская область",
		country: "Russia",
		countryCode: "RU"
	}, {locale: 'en-US'});
	
	var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nRussia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
