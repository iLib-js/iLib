/*
 * testaddress_NI.js - test the address parsing and formatting routines
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

function testParseAddressNINormal() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
assertEquals("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNINoZip() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNINoCountry() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda	\nDel Hotel Granada 1c.\narriba 75\nvrs. alsur. Reparto\nSanta Isabel\n050-008-4\nGranada, Granada", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Granada", parsedAddress.region);
	assertEquals("Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel", parsedAddress.streetAddress);
	assertEquals("Granada", parsedAddress.locality);
	assertEquals("Granada", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNIManyLines() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda\nDel Hotel Granada 1c.\narriba 75\nvrs. alsur. Reparto\nSanta Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNIOneLine() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda , Del Hotel Granada 1c. , arriba 75 , vrs. alsur. Reparto , Santa Isabel , 050-008-4 , GRANADA , GRANADA , NICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNISuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda\n\n\t\rDel Hotel Granada 1c.\t\t\rarriba 75\r\r\rvrs. alsur. Reparto\t\t\rSanta Isabel\n\n\n050-008-4\t\t\rGRANADA\r\r\rGRANADA\t\t\rNICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Sr. Juan Manuel Nurinda, Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNINoDelimiters() {
	var parsedAddress = new ilib.Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel 050-008-4\nGRANADA, GRANADA NICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testParseAddressNIFromUS() {
	var parsedAddress = new ilib.Address("Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel", parsedAddress.streetAddress);
	assertEquals("GRANADA", parsedAddress.locality);
	assertEquals("GRANADA", parsedAddress.region);
	assertEquals("050-008-4", parsedAddress.postalCode);
	assertEquals("NICARAGUA", parsedAddress.country);
	assertEquals("NI", parsedAddress.countryCode);
};

function testFormatAddressNI() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel",
		locality: "GRANADA",
		postalCode: "050-008-4",
		region: "GRANADA",
		country: "NICARAGUA",
		countryCode: "NI"
	}, {locale: 'es-NI'});
	
	var expected = "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA";
	var formatter = new ilib.AddressFmt({locale: 'es-NI'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressNIFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel",
		locality: "GRANADA",
		postalCode: "050-008-4",
		region: "GRANADA",
		country: "NICARAGUA",
		countryCode: "NI"
	}, {locale: 'en-US'});
	
	var expected = "Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
