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

function testParseAddressKRNormal() {
	var parsedAddress = new ilib.Address("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912\nYeosu, Seoul 100-813\nSOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912", parsedAddress.streetAddress);
	assertEquals("Yeosu,", parsedAddress.locality);
	assertUndefined("Seoul",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};


function testParseAddressKRNormalNative() {
	var parsedAddress = new ilib.Address("대한민국100-813\n서울 특별시여수시하나 아파트 9층 912호 박민호 선생님", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("하나 아파트 9층 912호 박민호 선생님", parsedAddress.streetAddress);
	assertEquals("여수시", parsedAddress.locality);
	assertUndefined("서울 특별",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKRNoZip() {
	var parsedAddress = new ilib.Address("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912\nYeosu, Seoul\nSOUTH KOREA", {locale: 'ko-KR'});

			assertNotUndefined(parsedAddress);
			assertEquals("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912", parsedAddress.streetAddress);
			assertEquals("Yeosu,", parsedAddress.locality);
			assertUndefined("Seoul",parsedAddress.region);
			assertUndefined(parsedAddress.postalCode);
			assertEquals("SOUTH KOREA", parsedAddress.country);
			assertEquals("KR", parsedAddress.countryCode);

};


function testParseAddressKRNoZipNative() {
	var parsedAddress = new ilib.Address("대한민국\n서울 특별시여수시하나 아파트 9층 912호 박민호 선생님", {locale: 'ko-KR'});

			assertNotUndefined(parsedAddress);
			assertEquals("하나 아파트 9층 912호 박민호 선생님", parsedAddress.streetAddress);
			assertEquals("여수시", parsedAddress.locality);
			assertUndefined("서울 특별",parsedAddress.region);
			assertUndefined(parsedAddress.postalCode);
			assertEquals("대한민국", parsedAddress.country);
			assertEquals("KR", parsedAddress.countryCode);

};




function testParseAddressKRNoCountry() {
	var parsedAddress = new ilib.Address("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912\nYeosu, Seoul 100-813", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912", parsedAddress.streetAddress);
	assertEquals("Yeosu,", parsedAddress.locality);
	assertUndefined("Seoul",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("KR", parsedAddress.countryCode);
	assertUndefined(parsedAddress.country);
	
};

function testParseAddressKRNoCountryNative() {
	var parsedAddress = new ilib.Address("100-813\n서울 특별시여수시하나 아파트 9층 912호 박민호 선생님", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("하나 아파트 9층 912호 박민호 선생님", parsedAddress.streetAddress);
	assertEquals("여수시", parsedAddress.locality);
	assertUndefined("서울 특별",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);

	
};


function testParseAddressKRManyLines() {
	var parsedAddress = new ilib.Address("Mr. Minho PARK\nHana Apartments\n9th floor\nApt.\n912\nYeosu\nSeoul\n100-813\nSOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Minho PARK, Hana Apartments, 9th floor, Apt., 912", parsedAddress.streetAddress);
	assertEquals("Yeosu,", parsedAddress.locality);
	assertUndefined("Seoul",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);


};


function testParseAddressKRManyLinesNative() {
	var parsedAddress = new ilib.Address("대한민국\n100-813\n서울 특별시\n여수시\n하나\n아파트\n9층\n912호\n박민호 선생님", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("하나, 아파트, 9층, 912호, 박민호 선생님", parsedAddress.streetAddress);
	assertEquals("여수시", parsedAddress.locality);
	assertUndefined("서울 특별",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("대한민국", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};

function testParseAddressKROneLine() {
	var parsedAddress = new ilib.Address("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912 Yeosu, Seoul 100-813 SOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912", parsedAddress.streetAddress);
	assertEquals("Yeosu,", parsedAddress.locality);
	assertUndefined("Seoul",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);
};



function testParseAddressKRFromUS() {
	
	var parsedAddress = new ilib.Address("Mr. Minho PARK Hana Apartments, 9th floor Apt. 912\nYeosu, Seoul 100-813\nSOUTH KOREA", {locale: 'ko-KR'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. Minho PARK Hana Apartments, 9th floor, Apt. 912", parsedAddress.streetAddress);
	assertEquals("Yeosu,", parsedAddress.locality);
	assertUndefined("Seoul",parsedAddress.region);
	assertEquals("100-813", parsedAddress.postalCode);
	assertEquals("SOUTH KOREA", parsedAddress.country);
	assertEquals("KR", parsedAddress.countryCode);

};

function testFormatAddressKRAU() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Minho PARK Hana Apartments, 9th floor Apt. 912",
		locality: "Yeosu,",
		region: "Seoul",
		postalCode: "100-813",
		country: "SOUTH KOREA",
		countryCode: "KR"
	}, {locale: 'ko-KR'});
	
	var expected = "Mr. Minho PARK Hana Apartments, 9th floor Apt. 912\nYeosu, Seoul 100-813\nSOUTH KOREA";
	var formatter = new ilib.AddressFmt({locale: 'ko-KR'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressKRFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. Minho PARK Hana Apartments, 9th floor Apt. 912",
		locality: "Yeosu,",
		region: "Seoul",
		postalCode: "100-813",
		country: "SOUTH KOREA",
		countryCode: "KR"
	}, {locale: 'en-US'});
	
	var expected = "Mr. Minho PARK Hana Apartments, 9th floor Apt. 912\nYeosu, Seoul 100-813\nSOUTH KOREA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
