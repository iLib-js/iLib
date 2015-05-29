/*
 * normalize.js - test phonenumber normalize function()
 * 
 * Copyright © 2014-2015, JEDLSoft
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

function testTWIDDPrefix() {
	var parsed = new PhoneNumber("002 31 456 3453434", {locale: 'zh-TW'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'zh-TW'})); // 'zh-TW'
};

function testTWIDDPrefixAlreadyPlus() {
	var parsed = new PhoneNumber("+31 456 3453434", {locale: 'zh-TW'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'zh-TW'})); // 'zh-TW'
};

function testTWWithNoLocale() {
	var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testTWNoHints() {
	var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'zh-TW'
};

function testTWWithNoHintsNoLocale() {
	var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testTWLDNumberUsingTWMCC() {
	var parsed = new PhoneNumber("02-24766830", {locale: 'zh-TW'});
	var hints = {
		mcc: "466"
	};
	var expected = "+886224766830";
	
	assertEquals(expected, parsed.normalize(hints)); // 'zh-TW'
};

function testTWLDNumberUsingTWMCCOtherLocale() {
	var parsed = new PhoneNumber("02-24766830", {locale: 'zh-TW'});
	var hints = {
		mcc: "466",
		locale: 'de-DE'
	};
	var expected = "+886224766830";
	
	assertEquals(expected, parsed.normalize(hints)); // 'zh-TW'
};

function testTWLDNumberUsingTWMCC() {
	var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "466" //zh-TW
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testTWAreaCodeFromHintTW() {
	var parsed = new PhoneNumber("2435674", {locale: 'zh-TW'});
	var hints = {
		defaultAreaCode: "49"
	};
	var expected = "+886492435674";
	
	assertEquals(expected, parsed.normalize(hints)); // 'zh-TW'
};

function testTWAreaCodeIgnoreHintTW() {
	var parsed = new PhoneNumber("05-531-5123", {locale: 'zh-TW'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+88655315123";
	
	assertEquals(expected, parsed.normalize(hints)); // 'zh-TW'
};

function testTWNoAreaCodeAndNoCountry() {
	var parsed = new PhoneNumber("531-5123", {locale: 'zh-TW'});
	var expected = "5315123";
	
	assertEquals(expected, parsed.normalize());
};

function testTWAssistedDialingLocalToLocalUMTS() {
	var phone = new PhoneNumber("5315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "466",
		networkType: "umts",
		defaultAreaCode: "5",
		assistedDialing: true
	};
	var expectedString = "5315123";

	assertEquals(expectedString, phone.normalize(hints)); // 'zh-TW'	
};

function testTWAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
	var phone = new PhoneNumber("+88655315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "466",
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "055315123";
	assertEquals(expectedString, phone.normalize(hints)); // 'zh-TW'	
};

function testTWAssistedDialingLocalToLocalCDMA() {
	var phone = new PhoneNumber("5315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "466",
		networkType: "cdma",
		defaultAreaCode: "5",
		assistedDialing: true
	};
	var expectedString = "5315123";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testTWAssistedDialingLocalToLocalCDMAAddTrunkOpen() {
	var phone = new PhoneNumber("+886492315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "466",
		networkType: "cdma",
		defaultAreaCode: "49",
		assistedDialing: true
	};
	var expectedString = "0492315123";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testTWAssistedDialingIntlToLocalUMTS() {
	var phone = new PhoneNumber("2315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "49",
		assistedDialing: true
	};
	var expectedString = "+886492315123";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testTWAssistedDialingIntlToLDUMTS() {
	var phone = new PhoneNumber("0492315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "+886492315123";

	assertEquals(expectedString, phone.normalize(hints)); // 'zh-TW'	
};

function testTWAssistedDialingIntlToLocalCDMA() {
	var phone = new PhoneNumber("2315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "49",
		assistedDialing: true
	};
	var expectedString = "0011886492315123";

	assertEquals(expectedString, phone.normalize(hints)); // 'zh-TW'	
};

function testTWAssistedDialingIntlToLDCDMA() {
	var phone = new PhoneNumber("0492315123", {locale: 'zh-TW'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "00886492315123";

	assertEquals(expectedString, phone.normalize(hints)); // 'zh-TW'	
};

