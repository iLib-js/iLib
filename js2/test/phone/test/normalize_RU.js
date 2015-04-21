/*
 * normalize_RU.js - test phonenumber normalize function()
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
function testIDDPrefix() {
	var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ru-RU'})); // 'ru-RU'
};

function testIDDPrefixAlreadyPlus() {
	var parsed = new PhoneNumber("+31 456 3453434", {locale: 'ru-RU'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ru-RU'})); // 'ru-RU'
};

function testWithNoLocale() {
	var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testNoHints() {
	var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'ru-RU'
};

function testWithNoHintsNoLocale() {
	var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testLDNumberUsingRUMCC() {
	var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
	var hints = {
		mcc: "250"
	};
	var expected = "+78122345678";
	assertEquals(expected, parsed.normalize(hints)); // 'ru-RU'
};

function testLDNumberUsingRUMCCOtherLocale() {
	var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
	var hints = {
		mcc: "250",
		locale: 'de-DE'
	};
	var expected = "+78122345678";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testLDNumberUsingRUMCC() {
	var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "250" //ru-RU
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testAreaCodeFromHint() {
	var parsed = new PhoneNumber("212-3456", {locale: 'ru-RU'});
	var hints = {
		defaultAreaCode: "8332"
	};
	var expected = "+783322123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ru-RU'
};
function testAreaCodeIgnoreHint() {
	var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
	var hints = {
		defaultAreaCode: "877"
	};
	var expected = "+78122345678";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testNoAreaCodeAndNoCountry() {
	var parsed = new PhoneNumber("212-3456", {locale: 'ru-RU'});
	var expected = "2123456";
	
	assertEquals(expected, parsed.normalize());
};

function testAssistedDialingLocalToLocalUMTSRU() {
	var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "250",
		networkType: "umts",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ru-RU'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
	var phone = new PhoneNumber("+7 495 2123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "250",
		networkType: "umts",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "84952123456";
	assertEquals(expectedString, phone.normalize(hints)); // 'ru-RU'	
};

function testAssistedDialingLocalToLocalCDMA() {
	var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "250",
		networkType: "cdma",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingRULocalToLocalCDMAAddTrunkOpen() {
	var phone = new PhoneNumber("+7 495 2123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "250",
		networkType: "cdma",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "84952123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testRUAssistedDialingIntlToLocalUMTS() {
	var phone = new PhoneNumber("22-33-44", {locale: 'ru-RU'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "+7495223344";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testRUAssistedDialingIntlToLDUMTS() {
	var phone = new PhoneNumber("83022 212345", {locale: 'ru-RU'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "+73022212345";

	assertEquals(expectedString, phone.normalize(hints)); // 'ru-RU'	
};

function testAssistedDialingIntlToLocalCDMARU() {
	var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "495",
		assistedDialing: true
	};
	var expectedString = "001174952123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ru-RU'	
};

function testAssistedDialingIntlToLDCDMARU() {
	var phone = new PhoneNumber("84952123456", {locale: 'ru-RU'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "4822",
		assistedDialing: true
	};
	var expectedString = "0074952123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ru-RU'	
};

