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

function testIDDPrefix() {
	var parsed = new ilib.PhoneNumber("011 31 456 3453434", {locale: 'en-US'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'en-US'})); // 'en-US'
};

function testIDDPrefixAlreadyPlus() {
	var parsed = new ilib.PhoneNumber("+31 456 3453434", {locale: 'en-US'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'en-US'})); // 'en-US'
};

function testWithNoLocale() {
	var parsed = new ilib.PhoneNumber("01131 456 3453434", {locale: 'en-US'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testNoHints() {
	var parsed = new ilib.PhoneNumber("01131 456 3453434", {locale: 'en-US'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'en-US'
};

function testWithNoHintsNoLocale() {
	var parsed = new ilib.PhoneNumber("01131 456 3453434", {locale: 'en-US'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testLDNumberUsingUSMCC() {
	var parsed = new ilib.PhoneNumber("650 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testLDNumberUsingUSMCCOtherLocale() {
	var parsed = new ilib.PhoneNumber("650 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testLDNumberUsingDEMCC() {
	var parsed = new ilib.PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testServiceNumberUsingDEMCC() {
	var parsed = new ilib.PhoneNumber("0191 7654321", {locale: 'de-DE'});
	var hints = {
		mcc: "262"
	};
	var expected = "+491917654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testServiceNumberDontAddAreaCode() {
	var parsed = new ilib.PhoneNumber("0191 7654321", {locale: 'de-DE'});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491917654321";

	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testMobileNumberUsingDEMCC() {
	var parsed = new ilib.PhoneNumber("016 87654321", {locale: 'de-DE'});
	var hints = {
		mcc: "262"
	};
	var expected = "+491687654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testMobileNumberDontAddAreaCode() {
	var parsed = new ilib.PhoneNumber("016 87654321", {locale: 'de-DE'});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491687654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testLDNumberUsingDEMCCOtherLocale() {
	var parsed = new ilib.PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'fr-FR'
};

function testLDNumberUsingUSLocale() {
	var parsed = new ilib.PhoneNumber("650 7654321", {locale: 'en-US'});
	var expected = "+16507654321";
	
	assertEquals(expected, parsed.normalize()); // 'en-US'
};

function testLDNumberUsingUSSpanishLocale() {
	var parsed = new ilib.PhoneNumber("650 7654321", {locale: 'es-US'});
	var expected = "+16507654321";
	
	assertEquals(expected, parsed.normalize()); // 'es-us'
};

function testLDNumberUsingDELocale() {
	var parsed = new ilib.PhoneNumber("030 87654321", {locale: 'de-DE'});
	var expected = "+493087654321";
	
	assertEquals(expected, parsed.normalize()); // 'de-DE'
};

function testAreaCodeFromHint() {
	var parsed = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testAreaCodeIgnoreHint() {
	var parsed = new ilib.PhoneNumber("408 7654321", {locale: 'en-US'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+14087654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testNoAreaCodeAndNoCountry() {
	var parsed = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var expected = "7654321";
	
	assertEquals(expected, parsed.normalize()); // 'en-US'
};

function testDontAddCountry() {
	var parsed = new ilib.PhoneNumber("7654321", {locale: 'de-DE'});
	var hints = {
		mcc: "262"	// de
	};
	var expected = "7654321";	// can't add country because we don't know the area code
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testIgnoreTrunkAccessUS() {
	var parsed = new ilib.PhoneNumber("1 408 7654321", {locale: 'en-US'});
	var expected = "+14087654321";
	
	assertEquals(expected, parsed.normalize()); // 'en-US'
};

function testIgnoreTrunkAccessDE() {
	var parsed = new ilib.PhoneNumber("030 87654321", {locale: 'de-DE'});
	var expected = "+493087654321";
	
	assertEquals(expected, parsed.normalize()); // 'de-DE'
};

function testDontIgnoreTrunkAccessIT() {
	var parsed = new ilib.PhoneNumber("+39 06 87654321", {locale: 'it-IT'}); // rome
	var expected = "+390687654321";
	
	assertEquals(expected, parsed.normalize()); // 'it-IT'	
};

function testDontIgnoreTrunkAccessNoCountryIT() {
	var parsed = new ilib.PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
	var expected = "+390687654321";
	
	assertEquals(expected, parsed.normalize()); // 'it-IT'
};

function testDontIgnoreTrunkAccessUseMCCIT() {
	var parsed = new ilib.PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
	var hints = {
		mcc: "222"
	};
	var expected = "+390687654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testAddTrunkAccessNoCountryIT() {
	var parsed = new ilib.PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
	var expected = "+390687654321";
	
	assertEquals(expected, parsed.normalize()); // 'it-IT'
};

function testCountryHintUS() {
	var parsed = new ilib.PhoneNumber("408 7654321", {locale: 'en-US'});
	var hints = {
		country: "US"
	};
	var expected = "+14087654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testCountryHintUSOverrideLocale() {
	var parsed = new ilib.PhoneNumber("408 7654321", {locale: 'en-US'});
	var hints = {
		country: "US"
	};
	var expected = "+14087654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'	
};

function testCountryHintFR() {
	var parsed = new ilib.PhoneNumber("02 12345678", {locale: 'fr-FR'});
	var hints = {
		country: "FR"
	};
	var expected = "+33212345678";
	
	assertEquals(expected, parsed.normalize(hints)); // 'en-US'
};

function testStringIDDPrefix() {
	var phone = new ilib.PhoneNumber("011-31-456-3453434", {locale: "en-US"});
	var expected = "+314563453434";

	assertEquals(expected, phone.normalize());	
};

function testStringLDNumberUsingUSMCC() {
	var phone = new ilib.PhoneNumber("650-765-4321", {locale: "en-US"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'en-US'	
};

function testStringLDNumberUsingUSMCCOtherLocale() {
	var phone = new ilib.PhoneNumber("650.765.4321", {locale: "en-US"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'
};

function testStringLDNumberUsingDEMCC() {
	var phone = new ilib.PhoneNumber("02302-654321", {locale: "de-DE"});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'
};

function testStringServiceNumberUsingDEMCC() {
	var phone = new ilib.PhoneNumber("0191 7654321", {locale: "de-DE"});
	var hints = {
		mcc: "262"
	};
	var expected = "+491917654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'	
};

function testStringServiceNumberDontAddAreaCode() {
	var phone = new ilib.PhoneNumber("0191/7654321", {locale: "de-DE"});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491917654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'	
};

function testStringMobileNumberUsingDEMCC() {
	var phone = new ilib.PhoneNumber("016 8765 4321", {locale: "de-DE"});
	var hints = {
		mcc: "262"
	};
	var expected = "+491687654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'	
};

function testStringMobileNumberDontAddAreaCode() {
	var phone = new ilib.PhoneNumber("016 87654321", {locale: "de-DE"});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491687654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'	
};

function testStringLDStringNumberUsingUSMCCOtherLocale() {
	var phone = new ilib.PhoneNumber("(650) 765-4321", {mcc: "316"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	assertEquals(expected, phone.normalize(hints)); // 'de-DE'	
};

// for CFISH-7296
function testNormalizeForSkype() {
	var phone = new ilib.PhoneNumber("765-4321", {mcc: "310"});  // en-us
	var hints = {
		mcc: "310",
		defaultAreaCode: "408"
	};
	var expected = "+14087654321";
	
	assertEquals(expected, phone.normalize(hints));	
};

function testAssistedDialingLocalToLocalUMTS() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "316",
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "6507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkClosed() {
	var phone = new ilib.PhoneNumber("+33 1 87654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0187654321";
	assertEquals(expectedString, phone.normalize(hints)); // 'fr-FR'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkOpenNoAreaCodes() {
	var phone = new ilib.PhoneNumber("+352 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "270", // from Luxembourg, where there are no area codes
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "7654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'de-lu'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		defaultAreaCode: "10",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'	
};

function testAssistedDialingLocalToLocalUMTSNoTrunkOpen() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		defaultAreaCode: "20",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'	
};

function testAssistedDialingLocalToLocalCDMA() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "310", // US
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "6507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'
};

function testAssistedDialingLocalToLocalCDMAAddTrunkClosed() {
	var phone = new ilib.PhoneNumber("+33 1 87654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "0187654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'fr-FR'
};

function testAssistedDialingLocalToLocalCDMAAddTrunkOpen() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		defaultAreaCode: "10",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'	
};

function testAssistedDialingLocalToLocalCDMANoTrunkOpen() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		defaultAreaCode: "20",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'	
};

function testAssistedDialingIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDUMTS() {
	var phone = new ilib.PhoneNumber("416 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDUMTSRemoveTrunk() {
	var phone = new ilib.PhoneNumber("1416 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDUMTSKeepTrunk() {
	var phone = new ilib.PhoneNumber("010 87654321", {locale: 'it-IT'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "+3901087654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'it-IT'	
};

function testAssistedDialingIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "001116507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDCDMA() {
	var phone = new ilib.PhoneNumber("416 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0014167654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDCDMARemoveTrunk() {
	var phone = new ilib.PhoneNumber("1416 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0014167654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingIntlToLDCDMAKeepTrunk() {
	var phone = new ilib.PhoneNumber("010 87654321", {locale: 'it-IT'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "003901087654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'it-IT'	
};

function testAssistedDialingLocalToLocalUMTSOpenNoDefAreaCode() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'	
};

function testAssistedDialingLocalToLocalCDMAOpenNoDefAreaCode() {
	var phone = new ilib.PhoneNumber("+31 20 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'nl-NL'
};

function testAssistedDialingIntlToLDDefaultToUMTS() {
	var phone = new ilib.PhoneNumber("416 7654321", {locale: 'en-US'});
	var hints = {
		mcc: "208", // from France
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingDefaultIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "730", // from Chile
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingNonDefaultIntlToLocalUMTS() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "440",	// from Japan
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";
	
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingDefaultIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "415", // from Lebanon
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0016507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingNonDefaultIntlToLocalCDMA() {
	var phone = new ilib.PhoneNumber("7654321", {locale: 'en-US'});
	var hints = {
		mcc: "440", // from Japan
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "01016507654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'
};

function testAssistedDialingThreeLocalesCDMA() {
	var phone = new ilib.PhoneNumber({
		trunkAccess: "8",
		areaCode: "495",	// moscow
		subscriberNumber: "7654321",
		plan: new ilib.NumPlan({locale: "ru-RU"}),
		locale: new ilib.PhoneLoc({locale: "ru-RU"}),
		destinationPlan: new ilib.NumPlan({locale: "ru-RU"}),
		destinationLocale: new ilib.PhoneLoc({locale: "ru-RU"})
	}, {locale: "ru-RU"});
	var hints = {
		mcc: "732", // from Columbia
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "00974957654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testAssistedDialingThreeLocalesUMTS() {
	var phone = new ilib.PhoneNumber({
		trunkAccess: "8",
		areaCode: "495",	// moscow
		subscriberNumber: "7654321",
		plan: new ilib.NumPlan({locale: "ru-RU"}),
		locale: new ilib.PhoneLoc({locale: "ru-RU"}),
		destinationPlan: new ilib.NumPlan({locale: "ru-RU"}),
		destinationLocale: new ilib.PhoneLoc({locale: "ru-RU"})
	}, {locale: "ru-RU"});
	var hints = {
		mcc: "732", // from Columbia
		networkType: "umts",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "+74957654321";

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

// for CFISH-5258
function testAssistedDialNormalizeBogusNumberNonVerizon(){
	var left = new ilib.PhoneNumber("442076543211", {locale: 'de-DE'});
	
	var hints = {
		homeLocale: 'de-DE',
		mcc: "262", // in Germany
		networkType: "umts",
		defaultAreaCode: "30",	// phone is a German phone
		assistedDialing: true
	};
	var expectedString = "442076543211"; // don't assume it is international and add the bogus plus

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'	
};

function testAssistedDialNormalizeBogusNumberForVerizonUMTS(){
	var left = new ilib.PhoneNumber("442076543211"); // number is too long, so try with a + prefix
	
	var hints = {
		mcc: "310",
		networkType: "umts",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "+442076543211"; // assumed to be an international call

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

function testAssistedDialNormalizeBogusNumberForVerizonCDMA(){
	var left = new ilib.PhoneNumber("442076543211"); // number is too long, so try with a + prefix
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011442076543211"; // the plus gets converted to 011 for cdma

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

function testAssistedDialNormalizeBogusNumberForVerizonAlreadyPlus(){
	var left = new ilib.PhoneNumber("+442076543211");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011442076543211"; // plus gets converted to 011 for cdma

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

function testAssistedDialNormalizeBogusNumberForVerizonAlreadyIDD(){
	var left = new ilib.PhoneNumber("011442076543211");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011442076543211";

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

function testAssistedDialNormalizeBogusNumberForVerizonWithTrunk(){
	var left = new ilib.PhoneNumber("1442076543233");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "1442076543233"; // don't touch things that already have a trunk prefix

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

function testAssistedDialNormalizeBogusNumberForVerizonInvalidCountryCode(){
	var left = new ilib.PhoneNumber("4259876543233");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "4259876543233"; // don't touch things with an invalid country code. ie. the reparse with a + didn't work.

	assertEquals(expectedString, left.normalize(hints)); // 'en-US'
};

//for CFISH-5447
function testDontRemoveDefaultAreaCodeAtHome() {
	var phone = new ilib.PhoneNumber("408-234-5678", {locale: 'en-US'}); // number is invalid in the UK with no valid area code
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "4082345678"; // should not strip default area code

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'
};

function testDoAddDefaultAreaCodeAtHome() {
	var phone = new ilib.PhoneNumber("234-5678", {locale: 'en-US'});
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "4082345678"; // should add default area code

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

// for CFISH-5217
function testDefaultAreaCodeOnlyAtHome() {
	var phone = new ilib.PhoneNumber("+442076543211", {locale: 'en-US'}); // number is invalid in the UK with no valid area code
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "011442076543211"; // should not add default area code, which is for the US, not the UK

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'
};

function testDefaultAreaCodeAtHome() {
	var phone = new ilib.PhoneNumber("6543211", {locale: 'en-US'}); // number is in the same area code as the device is
	var hints = {
		mcc: "234", // currently located in the UK
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "0016506543211"; // should not add default area code, which is for the US, not the UK

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testDefaultAreaCodeAtHomeNoDefault() {
	var phone = new ilib.PhoneNumber("4086543211", {locale: 'en-US'}); // number is in the same area code as the device is
	var hints = {
		mcc: "234", // currently located in the UK
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "0014086543211"; // should not add default area code, which is for the US, not the UK

	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

// for CFISH-5307
function testSMSToUSNumbersCDMA() {
	var phone = new ilib.PhoneNumber("650 456 7890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "16504567890"; // should not add IDD for CDMA and not the default area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'
};

function testSMSToUSNumbersUMTS() {
	var phone = new ilib.PhoneNumber("650 456 7890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+16504567890"; // should add IDD for UMTS and not the default area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testSMSToUSNumbersNoAreaCodeCDMA() {
	var phone = new ilib.PhoneNumber("456 7890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "14084567890"; // should not add IDD, but do add the default area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testSMSToUSNumbersNoAreaCodeUMTS() {
	var phone = new ilib.PhoneNumber("456 7890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+14084567890"; // should not add IDD, but do add the default area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

//for CFISH-5308
function testSMSToNonUSNumbersFromAbroadCDMA() {
	var phone = new ilib.PhoneNumber("+44 20 4567890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testSMSToNonUSNumbersFromAbroadUMTS() {
	var phone = new ilib.PhoneNumber("+44 20 4567890", {locale: 'en-US'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testSMSToNonUSNumbersFromUSCDMA() {
	var phone = new ilib.PhoneNumber("+44 20 4567890", {locale: 'en-US'});
	var hints = {
		mcc: "310", // currently located in US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

function testSMSToNonUSNumbersFromUSUMTS() {
	var phone = new ilib.PhoneNumber("+44 20 4567890", {locale: 'en-US'});
	var hints = {
		mcc: "310", // currently located in US
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+44204567890"; // should add special IDD and no area code
	assertEquals(expectedString, phone.normalize(hints)); // 'en-US'	
};

// for CFISH-5729
function testAssistedDialingEmergencyNumberDontNormalize() {
	var parsed = new ilib.PhoneNumber({
		emergency: "911"
	}, {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "408"
	};
	var expected = "911";

	assertEquals(expected, parsed.normalize(hints));
};

// for CFISH-5753
function testAssistedDialingServiceNumberDontAddAreaCodeCDMA() {
	var parsed = new ilib.PhoneNumber("1 800 7654321", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "430"
	};
	var expected = "0018007654321";

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingServiceNumberDontAddAreaCodeUMTS() {
	var parsed = new ilib.PhoneNumber("1 800 7654321", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "430"
	};
	var expected = "+18007654321";

	assertEquals(expected, parsed.normalize(hints));
};

// for CFISH-6022
function testAssistedDialingVerizonVSC() {
	var parsed = new ilib.PhoneNumber("*228", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "310", // US
		defaultAreaCode: "430"
	};
	var expected = "*228";

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-5261
function testAssistedDialingNonManual() {
	var parsed = new ilib.PhoneNumber("987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingNonManualNoOption() {
	var parsed = new ilib.PhoneNumber("987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingNonManualCDMA() {
	var parsed = new ilib.PhoneNumber("987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		manualDialing: false,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "0014089876543";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManual() {
	var parsed = new ilib.PhoneNumber("987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "9876543";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManualWithTrunk() {
	var parsed = new ilib.PhoneNumber("1-408-987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManualWithIDD() {
	var parsed = new ilib.PhoneNumber("011-1-408-987-6543", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManualWithTrunkFR() {
	var parsed = new ilib.PhoneNumber("01 12 34 56 78", {locale: 'fr-FR'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "204", // Netherlands
		defaultAreaCode: "2"
	};
	var expected = "+33112345678";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManualWithIDDFR() {
	var parsed = new ilib.PhoneNumber("+33 1 12 34 56 78", {locale: 'fr-FR'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "2"
	};
	var expected = "0112345678";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingManualLocalIN() {
	var parsed = new ilib.PhoneNumber("40861 76683", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "4086176683";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingNonManualIN() {
	var parsed = new ilib.PhoneNumber("4086176683", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "+14086176683";

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-8481
function testAssistedDialingLocalMobileIN() {
	var parsed = new ilib.PhoneNumber("011 91 9911234567", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "09911234567";

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingLocalLandLineIN() {
	var parsed = new ilib.PhoneNumber("011 91 11 12345678", {locale: 'en-US'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "01112345678";

	assertEquals(expected, parsed.normalize(hints));	
};

//for CFISH-6043
function testNormalizeES() {
	var parsed = new ilib.PhoneNumber("987654321", {locale: "es-ES"});
	var hints = {
		networkType: "umts",
		mcc: "214", // from US
		defaultAreaCode: "984"
	};
	var expected = "+34987654321";  // should not add trunk code

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingESSMS() {
	var parsed = new ilib.PhoneNumber("987654321", {locale: "es-ES"});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "310", // from US
		defaultAreaCode: "984",
		sms: true
	};
	var expected = "+34987654321";  // should not add trunk code

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingES() {
	var parsed = new ilib.PhoneNumber("987654321", {locale: "es-ES"});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "310", // from US
		defaultAreaCode: "984"
	};
	var expected = "+34987654321";  // should not add trunk code

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingFR() {
	var parsed = new ilib.PhoneNumber("12345678", {locale: 'fr-FR'});
	var hints = {
		homeLocale: 'en-FR',
		assistedDialing: true,
		networkType: "umts",
		mcc: "310", // from US
		defaultAreaCode: "1"
	};
	var expected = "+33112345678";

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-6444
function testAssistedDialingCN1() {
	var parsed = new ilib.PhoneNumber("011 86 10 30123456");
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "01030123456";

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingCN2() {
	var parsed = new ilib.PhoneNumber("011 44 20 76543211");
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "00442076543211";

	assertEquals(expected, parsed.normalize(hints));	
};

// for DFISH-6274
function testAssistedDialingBogusInputs1() {
	var parsed = new ilib.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "bogus",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "+14086176683"; // should default to UMTS

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingBogusInputs2() {
	var parsed = new ilib.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "460", // from China
		defaultAreaCode: undefined
	};
	var expected = "6176683"; // should return as much as it can

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingBogusInputs3() {
	var parsed = new ilib.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "-4564", // from never never land
		defaultAreaCode: "408"
	};
	var expected = "+14086176683"; // should default to international call

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingBogusInputs4() {
	var parsed = new ilib.PhoneNumber("", {locale: "en-US"}); // empty!
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = ""; // should return something instead of giving an exception

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingBogusInputs5() {
	var parsed = new ilib.PhoneNumber("4157773456");
	var hints = {
		assistedDialing: true,
		mcc: "310", // from US
		defaultAreaCode: undefined
	};
	var expected = "4157773456"; // should return something instead of giving an exception

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingBogusInputs6() {
	var parsed = new ilib.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: undefined,
		defaultAreaCode: "408"
	};
	var expected = "4086176683"; // should default to domestic call

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-6873
function testAssistedDialingSMSSameCountryHomeIsUS() {
	var parsed = new ilib.PhoneNumber("+861098765432");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011861098765432"; // should go through US first

	assertEquals(expected, parsed.normalize(hints));
};

// for CFISH-6444
function testAssistedDialingForeignIDD() {
	var parsed = new ilib.PhoneNumber("0044209876543");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: false,
		networkType: "cdma",
		mcc: "310", // in US
		defaultAreaCode: "408"
	};
	var expected = "01144209876543"; // normalize the foreign IDD to the proper US one

	assertEquals(expected, parsed.normalize(hints));
};

// for CFISH-6845
function testAssistedDialingSameCountryHomeIsUS() {
	var parsed = new ilib.PhoneNumber("00861098765432");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: false,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "01098765432"; // should be a domestic call

	assertEquals(expected, parsed.normalize(hints));
};

//for CFISH-6869
function testAssistedDialingSMSToUSFromIntlCDMA1() {
	var parsed = new ilib.PhoneNumber("0019087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	assertEquals(expected, parsed.normalize(hints));
};

function testAssistedDialingSMSToUSFromIntlCDMA2() {
	var parsed = new ilib.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA2Manual() {
	var parsed = new ilib.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA3() {
	var parsed = new ilib.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA3Manual() {
	var parsed = new ilib.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321"; // don't touch manually dialed stuff

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA4() {
	var parsed = new ilib.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";  // fix up things in your contact list

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA4Manual() {
	var parsed = new ilib.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "9087654321"; // don't touch manually dialed stuff

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA5() {
	var parsed = new ilib.PhoneNumber("65876"); // short code
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "65876"; // special case -- don't do anything to short codes

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA6() {
	var parsed = new ilib.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "19087654321";  // fix up things in your contact list

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlCDMA6Manual() {
	var parsed = new ilib.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "7654321";  // don't fix up manually dialed things

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA1() {
	var parsed = new ilib.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA1Manual() {
	var parsed = new ilib.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA2() {
	var parsed = new ilib.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA2Manual() {
	var parsed = new ilib.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA3() {
	var parsed = new ilib.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA3Manual() {
	var parsed = new ilib.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA4() {
	var parsed = new ilib.PhoneNumber("658765432101", {locale: "en-US"}); // +65 is Singapore -- special case
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "658765432101"; // special case -- don't add the special IDD

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA5() {
	var parsed = new ilib.PhoneNumber("0119087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlCDMA5Manual() {
	var parsed = new ilib.PhoneNumber("0119087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS1() {
	var parsed = new ilib.PhoneNumber("0019087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS2() {
	var parsed = new ilib.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS2Manual() {
	var parsed = new ilib.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS3() {
	var parsed = new ilib.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS3Manual() {
	var parsed = new ilib.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321"; // does touch the manually dialed stuff when there is a trunk prefix

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS4() {
	var parsed = new ilib.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS4Manual() {
	var parsed = new ilib.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "9087654321"; // don't touch manually dialed stuff

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS5() {
	var parsed = new ilib.PhoneNumber("65876"); // short code
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "65876"; // special case -- don't do anything to short codes

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS6() {
	var parsed = new ilib.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToUSFromIntlUMTS6Manual() {
	var parsed = new ilib.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "7654321";  // don't fix up manually dialed things

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS1() {
	var parsed = new ilib.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS1Manual() {
	var parsed = new ilib.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS2() {
	var parsed = new ilib.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS2Manual() {
	var parsed = new ilib.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS3() {
	var parsed = new ilib.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS3Manual() {
	var parsed = new ilib.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	assertEquals(expected, parsed.normalize(hints));	
};

function testAssistedDialingSMSToIntlFromIntlUMTS4() {
	var parsed = new ilib.PhoneNumber("658765432101", {locale: "en-US"}); // +65 is Singapore -- special case
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "658765432101"; // special case -- don't add the special IDD

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-3992
function testAssistedDialingSMSToIntlFromIntlCDMAChina() {
	var parsed = new ilib.PhoneNumber("+8613917331446");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460" // in China
	};
	var expected = "0118613917331446";

	assertEquals(expected, parsed.normalize(hints));
};

//for CFISH-7040
function testNormalizeESRegular1() {
	var parsed = new ilib.PhoneNumber("665 545 880", {locale: "en-ES"});
	var hints = {
		assistedDialing: false,
		manualDialing: false,
		sms: false,
		networkType: "umts",
		mcc: "214" // in Spain
	};
	var expected = "+34665545880";

	assertEquals(expected, parsed.normalize(hints));
};

function testNormalizeESRegular2() {
	var parsed = new ilib.PhoneNumber("+34 665 545 880", {locale: "en-ES"});
	var hints = {
		assistedDialing: false,
		manualDialing: false,
		sms: false,
		networkType: "umts",
		mcc: "214" // in Spain
	};
	var expected = "+34665545880";

	assertEquals(expected, parsed.normalize(hints));	
};

// for CFISH-10884
function testAssistedDialingIntlToLLDUMTSForES() {
	var phone = new ilib.PhoneNumber("+34 659 702 066", {locale: "es-ES"}); // calling from Spain to Spain
	var hints = {
		mcc: "214", // already in Spain
		networkType: "umts",
		defaultAreaCode: "659",
		assistedDialing: true
	};
	var expectedString = "659702066";

	assertEquals(expectedString, phone.normalize(hints)); // "es-ES"	
};
