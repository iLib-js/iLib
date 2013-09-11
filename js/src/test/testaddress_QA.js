/*
 * testaddress_QA.js - test the address parsing and formatting routines
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
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nﻖﻃﺭ", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nﻖﻃﺭ", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\nP.O. ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\n\nﻖﻃﺭ\n\n\n", {locale: 'ar-QA'});
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, P.O. ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ , ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣ , ﺎﻟﺩﻮﺣﺓ , ﻖﻃﺭ", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\tﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\n\n\tP.O. ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\n\t\n\n\tﺎﻟﺩﻮﺣﺓ\n\n\tﻖﻃﺭ\n\n\n", {locale: 'ar-QA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, P.O. ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};



function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\nﻖﻃﺭ", {locale: 'en-US'});
	
	// the country name is in German because this address is for a contact in a German database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣", parsedAddress.streetAddress);
	assertEquals("ﺎﻟﺩﻮﺣﺓ", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("ﻖﻃﺭ", parsedAddress.country);
	assertEquals("QA", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
		locality: "ﺎﻟﺩﻮﺣﺓ",
		
		country: "ﻖﻃﺭ",
		countryCode: "QA"
	}, {locale: 'ar-QA'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\nﻖﻃﺭ";
	var formatter = new ilib.AddressFmt({locale: 'ar-QA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
		locality: "ﺎﻟﺩﻮﺣﺓ",
		country: "ﻖﻃﺭ",
		countryCode: "QA"
	}, {locale: 'en-US'});
	
	var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ P.O. ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫ\nﻖﻃﺭ";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
