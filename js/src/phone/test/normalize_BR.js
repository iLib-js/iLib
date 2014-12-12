/*
 * normalize_BR.js - test phonenumber normalize function()
 * 
 * Copyright © 2014, JEDLSoft
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

function testIDDPrefix() {
	var parsed = new ilib.PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({locale: 'pt-BR'})); 
};

function testIDDPrefixAlreadyPlus() {
	var parsed = new ilib.PhoneNumber("+31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({locale: 'pt-BR'})); 
};

function testWithNoLocale() {
	var parsed = new ilib.PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({}));
};

function testNoHints() {
	var parsed = new ilib.PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize()); 
};


function testLDNumberUsingBRRMCC() {
	var parsed = new ilib.PhoneNumber("62-312-3456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724"
	};
	var expected = "+55623123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testLDNumberUsingBRMCCOtherLocale() {
	var parsed = new ilib.PhoneNumber("98-912-3456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		locale:"de-DE"
	};
	var expected = "+55989123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testLDNumberUsingBRMCC() {
	var parsed = new ilib.PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "724" 
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testAreaCodeFromHint() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'pt-BR'});
	var hints = {
		defaultAreaCode: "21"
	};
	var expected = "+55212123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testAreaCodeIgnoreHint() {
	var parsed = new ilib.PhoneNumber("98-212-3456", {locale: 'pt-BR'});
	var hints = {
		defaultAreaCode: "21"
	};
	var expected = "+55982123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testNoAreaCodeAndNoCountry() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'pt-BR'});
	var expected = "2123456";
	
	assertEquals(expected, parsed.normalize());
};

function testAssistedDialingLocalToLocalUMTS() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "umts",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkClosed() {
	var phone = new ilib.PhoneNumber("+55 21 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "umts",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "0212123456";
	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testAssistedDialingLocalToLocalCDMA() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "cdma",
		defaultAreaCode: "98",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingLocalToLocalCDMAAddTrunkClosed() {
	var phone = new ilib.PhoneNumber("+55 62 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "cdma",
		defaultAreaCode: "62",
		assistedDialing: true
	};
	var expectedString = "0622123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "62",
		assistedDialing: true
	};
	var expectedString = "+556232012325";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'pt-BR'})); 
};

function testAssistedDialingIntlToLDUMTS() {
	var phone = new ilib.PhoneNumber("079 32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "79",
		assistedDialing: true
	};
	var expectedString = "+557932012325";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'pt-BR'})); 	
};

function testAssistedDialingIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "85",
		assistedDialing: true
	};
	var expectedString = "0011558532012325";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'pt-BR'})); 	
};

function testAssistedDialingIntlToLDCDMA() {
	var phone = new ilib.PhoneNumber("099 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "0055992123456";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'pt-BR'})); 	
};

