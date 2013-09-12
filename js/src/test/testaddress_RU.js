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

function testParseAddressNormal() {
   var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул\nЛесная D. 5 поз\nЛесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул , Лесная D. 5 поз , Лесной , АЛЕКСЕЕВСКИЙ R-N , Воронежская область , 247112 , Россия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул\t\t\rЛесная D. 5 поз\t\t\rЛесной\t\t\rАЛЕКСЕЕВСКИЙ R-N\n\t\trВоронежская область\n\t\r247112\n\t\rРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул Лесная D. 5 поз Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

/*function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной АЛЕКСЕЕВСКИЙ R-N Воронежская область 247112 Россия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};*/

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112\nRussia", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testFormatAddress() {
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

function testFormatAddressFromUS() {
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
