/*
 * testaddress_YE.js - test the address parsing and formatting routines
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

function testParseAddressYENormal() {
	var parsedAddress = new ilib.Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن", {locale: 'ar-YE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("اليمن", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};

function testParseAddressYENoZip() {
	var parsedAddress = new ilib.Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن", {locale: 'ar-YE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("اليمن", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressYENoCountry() {
	var parsedAddress = new ilib.Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\nﻉﺪﻧ", {locale: 'ar-YE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};

function testParseAddressYEManyLines() {
	var parsedAddress = new ilib.Address("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ\n\nﻉﺪﻧ\n\nاليمن\n\n\n", {locale: 'ar-YE'});
	assertNotUndefined(parsedAddress);
	assertEquals("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("اليمن", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};

function testParseAddressYEOneLine() {
	var parsedAddress = new ilib.Address("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣ , ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣ , ﻉﺪﻧ , اليمن", {locale: 'ar-YE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("اليمن", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};

function testParseAddressYESuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tپﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\n\tﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ\n\n\t\n\n\tﻉﺪﻧ\n\n\tاليمن\n\n\n", {locale: 'ar-YE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("اليمن", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};



function testParseAddressYEFromUS() {
	var parsedAddress = new ilib.Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\nﻉﺪﻧ\nYemen", {locale: 'en-US'});
	
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣", parsedAddress.streetAddress);
	assertEquals("ﻉﺪﻧ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Yemen", parsedAddress.country);
	assertEquals("YE", parsedAddress.countryCode);
};

function testFormatAddressYE() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣",
		locality: "ﻉﺪﻧ",
		country: "اليمن",
		countryCode: "YE"
	}, {locale: 'ar-YE'});
	
	var expected = "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن";
	var formatter = new ilib.AddressFmt({locale: 'ar-YE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressYEFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣",
		locality: "ﻉﺪﻧ",
		country: "Yemen",
		countryCode: "YE"
	}, {locale: 'en-US'});
	
	var expected = "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nYemen";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
