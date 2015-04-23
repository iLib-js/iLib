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

function testKRIDDPrefix() {
	var parsed = new ilib.PhoneNumber("001 31 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ko-KR'})); // 'ko-KR'
};

function testKRIDDPrefixAlreadyPlus() {
	var parsed = new ilib.PhoneNumber("+31 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ko-KR'})); // 'ko-KR'
};

function testKRWithNoLocale() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testKRNoHints() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'ko-KR'
};

function testKRWithNoHintsNoLocale() {
	var parsed = new ilib.PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testKRLDNumberUsingKRMCC() {
	var parsed = new ilib.PhoneNumber("02-312-3456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450"
	};
	var expected = "+8223123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testKRLDNumberUsingKRMCCOtherLocale() {
	var parsed = new ilib.PhoneNumber("02 312 3456", {locale: 'ko-KR'});
	var hints = {
		mcc: "450",
		locale: 'de-DE'
	};
	var expected = "+8223123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testKRLDNumberUsingKRMCC() {
	var parsed = new ilib.PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "450" //ko-KR
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testKRAreaCodeFromHint() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'ko-KR'});
	var hints = {
		defaultAreaCode: "51"
	};
	var expected = "+82512123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testKRAreaCodeIgnoreHint() {
	var parsed = new ilib.PhoneNumber("051-212-3456", {locale: 'ko-KR'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+82512123456";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testKRNoAreaCodeAndNoCountry() {
	var parsed = new ilib.PhoneNumber("212-3456", {locale: 'ko-KR'});
	var expected = "2123456";
	
	assertEquals(expected, parsed.normalize());
};

function testKRAssistedDialingLocalToLocalUMTS() {
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

function testKRAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
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

function testKRAssistedDialingLocalToLocalCDMA() {
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

function testKRAssistedDialingLocalToLocalCDMAAddTrunkOpen() {
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

function testKRAssistedDialingIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "+82512123456";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testKRAssistedDialingIntlToLDUMTS() {
	var phone = new ilib.PhoneNumber("051 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "+82512123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ko-KR'	
};

function testKRAssistedDialingIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "51",
		assistedDialing: true
	};
	var expectedString = "001182512123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ko-KR'	
};

function testKRAssistedDialingIntlToLDCDMA() {
	var phone = new ilib.PhoneNumber("051 2123456", {locale: 'ko-KR'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "0082512123456";

	assertEquals(expectedString, phone.normalize(hints)); // 'ko-KR'	
};

