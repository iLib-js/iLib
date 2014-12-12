/*
 * normalize.js - test phonenumber normalize function()
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
	var parsed = new ilib.PhoneNumber("001 31 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ko-KR'})); // 'ko-KR'
};

function testIDDPrefixAlreadyPlus() {
	var parsed = new ilib.PhoneNumber("+31 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ko-KR'})); // 'ko-KR'
};

function testWithNoLocale() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testNoHints() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'ko-KR'
};

function testWithNoHintsNoLocale() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testLDNumberUsingKRMCC() {
	var parsed = new ilib.PhoneNumber("02-312-3456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450"
	};
	var expected = "+8223123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testLDNumberUsingKRMCCOtherLocale() {
	var parsed = new ilib.PhoneNumber("02 312 3456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		locale: 'de-DE'
	};
	var expected = "+8223123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testLDNumberUsingKRMCC() {
	var parsed = new ilib.PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "450" //ko-KR
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testAreaCodeFromHint() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'ko-KR'});
	var hints = {
		defaultAreaCode: "51"
	};
	var expected = "+82512123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testAreaCodeIgnoreHint() {
	var parsed = new ilib.PhoneNumber("051-212-3456", {locale: 'ko-KR'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+82512123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testNoAreaCodeAndNoCountry() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'ko-KR'});
	var expected = "2123456";
	
	assertEquals(expected, parsed.normalize());
};

function testAssistedDialingLocalToLocalUMTS() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		networkType: "umts",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ko-KR'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
	var phone = new ilib.PhoneNumber("+82 51 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		networkType: "umts",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "0512123456";
	assertEquals(expectedString, phone.normalize(hints)); // 'ko-KR'	
};

function testAssistedDialingLocalToLocalCDMA() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		networkType: "cdma",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "2123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingLocalToLocalCDMAAddTrunkOpen() {
	var phone = new ilib.PhoneNumber("+82 51 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		networkType: "cdma",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "0512123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "+82512123456";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'ko-KR'})); 
};

function testAssistedDialingIntlToLDUMTS() {
	var phone = new ilib.PhoneNumber("051 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "+82512123456";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'ko-KR'})); // 'ko-KR'	
};

function testAssistedDialingIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "001182512123456";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'ko-KR'})); // 'ko-KR'	
};

function testAssistedDialingIntlToLDCDMA() {
	var phone = new ilib.PhoneNumber("051 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "0082512123456";

	assertEquals(expectedString, phone.normalize(hints,{locale: 'ko-KR'})); // 'ko-KR'	
};

