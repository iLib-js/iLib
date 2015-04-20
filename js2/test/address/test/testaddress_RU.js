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
   var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUNoZip() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressRUNoCountry() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUManyLines() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул\nЛесная D. 5 поз\nЛесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUOneLine() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул , Лесная D. 5 поз , Лесной , АЛЕКСЕЕВСКИЙ R-N , Воронежская область, Россия , 247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testParseAddressRUSuperfluousWhitespace() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул\t\t\rЛесная D. 5 поз\t\t\rЛесной\n\tАЛЕКСЕЕВСКИЙ R-N\n\t\tВоронежская область\n\t\rРоссия\n\t\r247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Петров Иван Сергеевич ул Лесная D. 5 поз Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

/*function testParseAddressRUNoDelimiters() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной АЛЕКСЕЕВСКИЙ R-N Воронежская область 247112 Россия", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};*/

function testParseAddressRUFromUS() {
	var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
	assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
	assertEquals("Воронежская область", parsedAddress.region);
	assertEquals("247112", parsedAddress.postalCode);
	assertEquals("Россия", parsedAddress.country);
	assertEquals("RU", parsedAddress.countryCode);
};

function testFormatAddressRU() {
	var parsedAddress = new Address({
		streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
		locality: "АЛЕКСЕЕВСКИЙ R-N",
		postalCode: "247112",
		region: "Воронежская область",
		country: "Россия",
		countryCode: "RU"
	}, {locale: 'ru-RU'});
	
	var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112";
	var formatter = new AddressFmt({locale: 'ru-RU'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressRUFromUS() {
	var parsedAddress = new Address({
		streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
		locality: "АЛЕКСЕЕВСКИЙ R-N",
		postalCode: "247112",
		region: "Воронежская область",
		country: "Russia",
		countryCode: "RU"
	}, {locale: 'en-US'});
	
	var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nRussia\n247112";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressRU1() {
    var parsedAddress = new Address("23, Ilyinka Street,Moscow, 103132, Russia");
    assertNotUndefined(parsedAddress);
    assertEquals("23, Ilyinka Street", parsedAddress.streetAddress);
    assertEquals("Moscow", parsedAddress.locality);

    assertEquals("103132", parsedAddress.postalCode);
    assertEquals("Russia", parsedAddress.country);

};
function testFormatAddressRU2() {
	
    var parsedAddress = new Address("Ред Сяуаре, 3, Плосчад Револутсии Метро Сяуаре, Мосцов Циты Центре,Мосцов,103132,Россия");
    assertNotUndefined(parsedAddress);
    assertEquals("Ред Сяуаре, 3, Плосчад Револутсии Метро Сяуаре, Мосцов Циты Центре", parsedAddress.streetAddress);
    assertEquals("Мосцов", parsedAddress.locality);

    assertEquals("103132", parsedAddress.postalCode);
    
};
function testFormatAddressRU2() {
	
    var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Россия,606480",{locale: 'ru-RU'});
    assertNotUndefined(parsedAddress);
    assertEquals("ул. Победы, д. 20, кв. 29 пос., Октябрьский", parsedAddress.streetAddress);
    assertEquals("Борский р-н", parsedAddress.locality);
    assertEquals("нижегородская область", parsedAddress.region);

    assertEquals("Россия", parsedAddress.country);
    assertEquals("606480", parsedAddress.postalCode);
    
};
function testFormatAddressRU3() {
	
    var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Россия,606480",{locale: 'ru-RU'});
    assertNotUndefined(parsedAddress);
    assertEquals("ул. Победы, д. 20, кв. 29 пос., Октябрьский", parsedAddress.streetAddress);
    assertEquals("Борский р-н", parsedAddress.locality);
    assertEquals("нижегородская область", parsedAddress.region);

    assertEquals("Россия", parsedAddress.country);
    assertEquals("606480", parsedAddress.postalCode);
    
};

function testFormatAddressRU4() {
	
    var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Российская Федерация,606480",{locale: 'ru-RU'});
    assertNotUndefined(parsedAddress);
    assertEquals("ул. Победы, д. 20, кв. 29 пос., Октябрьский", parsedAddress.streetAddress);
    assertEquals("Борский р-н", parsedAddress.locality);
    assertEquals("нижегородская область", parsedAddress.region);

    assertEquals("Российская Федерация", parsedAddress.country);
    assertEquals("606480", parsedAddress.postalCode);
    
};

