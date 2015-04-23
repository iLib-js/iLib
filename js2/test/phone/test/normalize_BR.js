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

var PhoneNumber = require("./../lib/PhoneNumber.js");

function testBRIDDPrefix() {
	var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({locale: 'pt-BR'})); 
};

function testBRIDDPrefixAlreadyPlus() {
	var parsed = new PhoneNumber("+31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({locale: 'pt-BR'})); 
};

function testBRWithNoLocale() {
	var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize({}));
};

function testBRNoHints() {
	var parsed = new PhoneNumber("00 14 31 55 345 343", {locale: 'pt-BR'});
	var expected = "+3155345343";
	
	assertEquals(expected, parsed.normalize()); 
};


function testBRLDNumberUsingBRRMCC() {
	var parsed = new PhoneNumber("62-312-3456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724"
	};
	var expected = "+55623123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testBRLDNumberUsingBRMCCOtherLocale() {
	var parsed = new PhoneNumber("98-912-3456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		locale:"de-DE"
	};
	var expected = "+55989123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testBRLDNumberUsingBRMCC() {
	var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "724" 
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testBRAreaCodeFromHint() {
	var parsed = new PhoneNumber("212-3456", {locale: 'pt-BR'});
	var hints = {
		defaultAreaCode: "21"
	};
	var expected = "+55212123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testBRAreaCodeIgnoreHint() {
	var parsed = new PhoneNumber("98-212-3456", {locale: 'pt-BR'});
	var hints = {
		defaultAreaCode: "21"
	};
	var expected = "+55982123456";
	
	assertEquals(expected, parsed.normalize(hints)); 
};

function testBRNoAreaCodeAndNoCountry() {
	var parsed = new PhoneNumber("212-3456", {locale: 'pt-BR'});
	var expected = "2123456";
	
	assertEquals(expected, parsed.normalize());
};

function testBRAssistedDialingLocalToLocalUMTS() {
	var phone = new PhoneNumber("2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "umts",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testBRAssistedDialingLocalToLocalUMTSAddTrunkClosed() {
	var phone = new PhoneNumber("+55 21 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "umts",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "0212123456";
	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testBRAssistedDialingLocalToLocalCDMA() {
	var phone = new PhoneNumber("2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "cdma",
		defaultAreaCode: "98",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testBRAssistedDialingLocalToLocalCDMAAddTrunkClosed() {
	var phone = new PhoneNumber("+55 62 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "724",
		networkType: "cdma",
		defaultAreaCode: "62",
		assistedDialing: true
	};
	var expectedString = "0622123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testBRAssistedDialingIntlToLocalUMTS() {
	var phone = new PhoneNumber("32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "62",
		assistedDialing: true
	};
	var expectedString = "+556232012325";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testBRAssistedDialingIntlToLDUMTS() {
	var phone = new PhoneNumber("079 32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "79",
		assistedDialing: true
	};
	var expectedString = "+557932012325";

	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testBRAssistedDialingIntlToLocalCDMA() {
	var phone = new PhoneNumber("32012325", {locale: 'pt-BR'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "85",
		assistedDialing: true
	};
	var expectedString = "0011558532012325";

	assertEquals(expectedString, phone.normalize(hints)); 	
};

function testBRAssistedDialingIntlToLDCDMA() {
	var phone = new PhoneNumber("099 2123456", {locale: 'pt-BR'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "21",
		assistedDialing: true
	};
	var expectedString = "0055992123456";

	assertEquals(expectedString, phone.normalize(hints)); 	
};

