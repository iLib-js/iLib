/*
 * normalize.js - test phonenumber normalize function()
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneLocale) === "undefined") {
    var PhoneLocale = require("../.././../lib/PhoneLocale.js");
}
if (typeof(NumberingPlan) === "undefined") {
    var NumberingPlan = require("../.././../lib/NumberingPlan.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.normalize = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testIDDPrefix: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011 31 456 3453434", {locale: 'en-US'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({locale: 'en-US'}), expected); // 'en-US'
        test.done();
    },
    
    testIDDPrefixAlreadyPlus: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+31 456 3453434", {locale: 'en-US'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({locale: 'en-US'}), expected); // 'en-US'
        test.done();
    },
    
    testWithNoLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("01131 456 3453434", {locale: 'en-US'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testNoHints: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("01131 456 3453434", {locale: 'en-US'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize(), expected); // 'en-US'
        test.done();
    },
    
    testWithNoHintsNoLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("01131 456 3453434", {locale: 'en-US'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testLDNumberUsingUSMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("650 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "316"
        };
        var expected = "+16507654321";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testLDNumberUsingUSMCCOtherLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("650 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "316"
        };
        var expected = "+16507654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testLDNumberUsingDEMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "262"
        };
        var expected = "+492302654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testServiceNumberUsingDEMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0191 7654321", {locale: 'de-DE'});
        var hints = {
            mcc: "262"
        };
        var expected = "+491917654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testServiceNumberDontAddAreaCode: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0191 7654321", {locale: 'de-DE'});
        var hints = {
            defaultAreaCode: "30"
        };
        var expected = "+491917654321";
    
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testMobileNumberUsingDEMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("016 87654321", {locale: 'de-DE'});
        var hints = {
            mcc: "262"
        };
        var expected = "+491687654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testMobileNumberDontAddAreaCode: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("016 87654321", {locale: 'de-DE'});
        var hints = {
            defaultAreaCode: "30"
        };
        var expected = "+491687654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testLDNumberUsingDEMCCOtherLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "262"
        };
        var expected = "+492302654321";
        
        test.equal(parsed.normalize(hints), expected); // 'fr-FR'
        test.done();
    },
    
    testLDNumberUsingUSLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("650 7654321", {locale: 'en-US'});
        var expected = "+16507654321";
        
        test.equal(parsed.normalize(), expected); // 'en-US'
        test.done();
    },
    
    testLDNumberUsingUSSpanishLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("650 7654321", {locale: 'es-US'});
        var expected = "+16507654321";
        
        test.equal(parsed.normalize(), expected); // 'es-us'
        test.done();
    },
    
    testLDNumberUsingDELocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("030 87654321", {locale: 'de-DE'});
        var expected = "+493087654321";
        
        test.equal(parsed.normalize(), expected); // 'de-DE'
        test.done();
    },
    
    testAreaCodeFromHint: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            defaultAreaCode: "650"
        };
        var expected = "+16507654321";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testAreaCodeIgnoreHint: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("408 7654321", {locale: 'en-US'});
        var hints = {
            defaultAreaCode: "650"
        };
        var expected = "+14087654321";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testNoAreaCodeAndNoCountry: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321", {locale: 'en-US'});
        var expected = "7654321";
        
        test.equal(parsed.normalize(), expected); // 'en-US'
        test.done();
    },
    
    testDontAddCountry: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321", {locale: 'de-DE'});
        var hints = {
            mcc: "262"    // de
        };
        var expected = "7654321";    // can't add country because we don't know the area code
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testIgnoreTrunkAccessUS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("1 408 7654321", {locale: 'en-US'});
        var expected = "+14087654321";
        
        test.equal(parsed.normalize(), expected); // 'en-US'
        test.done();
    },
    
    testIgnoreTrunkAccessDE: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("030 87654321", {locale: 'de-DE'});
        var expected = "+493087654321";
        
        test.equal(parsed.normalize(), expected); // 'de-DE'
        test.done();
    },
    
    testDontIgnoreTrunkAccessIT: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+39 06 87654321", {locale: 'it-IT'}); // rome
        var expected = "+390687654321";
        
        test.equal(parsed.normalize(), expected); // 'it-IT'    
        test.done();
    },
    
    testDontIgnoreTrunkAccessNoCountryIT: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
        var expected = "+390687654321";
        
        test.equal(parsed.normalize(), expected); // 'it-IT'
        test.done();
    },
    
    testDontIgnoreTrunkAccessUseMCCIT: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
        var hints = {
            mcc: "222"
        };
        var expected = "+390687654321";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testAddTrunkAccessNoCountryIT: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("06 87654321", {locale: 'it-IT'}); // rome
        var expected = "+390687654321";
        
        test.equal(parsed.normalize(), expected); // 'it-IT'
        test.done();
    },
    
    testCountryHintUS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("408 7654321", {locale: 'en-US'});
        var hints = {
            country: "US"
        };
        var expected = "+14087654321";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testCountryHintUSOverrideLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("408 7654321", {locale: 'en-US'});
        var hints = {
            country: "US"
        };
        var expected = "+14087654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    testCountryHintFR: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("02 12345678", {locale: 'fr-FR'});
        var hints = {
            country: "FR"
        };
        var expected = "+33212345678";
        
        test.equal(parsed.normalize(hints), expected); // 'en-US'
        test.done();
    },
    
    testStringIDDPrefix: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("011-31-456-3453434", {locale: "en-US"});
        var expected = "+314563453434";
    
        test.equal(phone.normalize(), expected);    
        test.done();
    },
    
    testStringLDNumberUsingUSMCC: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("650-765-4321", {locale: "en-US"});
        var hints = {
            mcc: "316"
        };
        var expected = "+16507654321";
        
        test.equal(phone.normalize(hints), expected); // 'en-US'    
        test.done();
    },
    
    testStringLDNumberUsingUSMCCOtherLocale: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("650.765.4321", {locale: "en-US"});
        var hints = {
            mcc: "316"
        };
        var expected = "+16507654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testStringLDNumberUsingDEMCC: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("02302-654321", {locale: "de-DE"});
        var hints = {
            mcc: "262"
        };
        var expected = "+492302654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testStringServiceNumberUsingDEMCC: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("0191 7654321", {locale: "de-DE"});
        var hints = {
            mcc: "262"
        };
        var expected = "+491917654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    testStringServiceNumberDontAddAreaCode: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("0191/7654321", {locale: "de-DE"});
        var hints = {
            defaultAreaCode: "30"
        };
        var expected = "+491917654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    testStringMobileNumberUsingDEMCC: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("016 8765 4321", {locale: "de-DE"});
        var hints = {
            mcc: "262"
        };
        var expected = "+491687654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    testStringMobileNumberDontAddAreaCode: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("016 87654321", {locale: "de-DE"});
        var hints = {
            defaultAreaCode: "30"
        };
        var expected = "+491687654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    testStringLDStringNumberUsingUSMCCOtherLocale: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("(650) 765-4321", {mcc: "316"});
        var hints = {
            mcc: "316"
        };
        var expected = "+16507654321";
        
        test.equal(phone.normalize(hints), expected); // 'de-DE'    
        test.done();
    },
    
    // for CFISH-7296
    testNormalizeForSkype: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("765-4321", {mcc: "310"});  // en-us
        var hints = {
            mcc: "310",
            defaultAreaCode: "408"
        };
        var expected = "+14087654321";
        
        test.equal(phone.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "316",
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "6507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTSAddTrunkClosed: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+33 1 87654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "0187654321";
        test.equal(phone.normalize(hints), expectedString); // 'fr-FR'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTSAddTrunkOpenNoAreaCodes: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+352 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "270", // from Luxembourg, where there are no area codes
            networkType: "umts",
            assistedDialing: true
        };
        var expectedString = "7654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'de-lu'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTSAddTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "umts",
            defaultAreaCode: "10",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTSNoTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "umts",
            defaultAreaCode: "20",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "310", // US
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "6507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialingLocalToLocalCDMAAddTrunkClosed: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+33 1 87654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "1",
            assistedDialing: true
        };
        var expectedString = "0187654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'fr-FR'
        test.done();
    },
    
    testAssistedDialingLocalToLocalCDMAAddTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "cdma",
            defaultAreaCode: "10",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalCDMANoTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "cdma",
            defaultAreaCode: "20",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'    
        test.done();
    },
    
    testAssistedDialingIntlToLocalUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+16507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("416 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+14167654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDUMTSRemoveTrunk: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("1416 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+14167654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDUMTSKeepTrunk: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("010 87654321", {locale: 'it-IT'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "1",
            assistedDialing: true
        };
        var expectedString = "+3901087654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'it-IT'    
        test.done();
    },
    
    testAssistedDialingIntlToLocalCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "001116507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("416 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "0014167654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDCDMARemoveTrunk: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("1416 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "0014167654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingIntlToLDCDMAKeepTrunk: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("010 87654321", {locale: 'it-IT'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "1",
            assistedDialing: true
        };
        var expectedString = "003901087654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'it-IT'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalUMTSOpenNoDefAreaCode: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "umts",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'    
        test.done();
    },
    
    testAssistedDialingLocalToLocalCDMAOpenNoDefAreaCode: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+31 20 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "204", // from Netherlands
            networkType: "cdma",
            assistedDialing: true
        };
        var expectedString = "0207654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'nl-NL'
        test.done();
    },
    
    testAssistedDialingIntlToLDDefaultToUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("416 7654321", {locale: 'en-US'});
        var hints = {
            mcc: "208", // from France
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+14167654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingDefaultIntlToLocalUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "730", // from Chile
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+16507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingNonDefaultIntlToLocalUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "440",    // from Japan
            networkType: "umts",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "+16507654321";
        
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingDefaultIntlToLocalCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "415", // from Lebanon
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "0016507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingNonDefaultIntlToLocalCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("7654321", {locale: 'en-US'});
        var hints = {
            mcc: "440", // from Japan
            networkType: "cdma",
            defaultAreaCode: "650",
            assistedDialing: true
        };
        var expectedString = "01016507654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialingThreeLocalesCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "495",    // moscow
            subscriberNumber: "7654321",
            plan: new NumberingPlan({locale: "ru-RU"}),
            locale: new PhoneLocale({locale: "ru-RU"}),
            destinationPlan: new NumberingPlan({locale: "ru-RU"}),
            destinationLocale: new PhoneLocale({locale: "ru-RU"})
        }, {locale: "ru-RU"});
        var hints = {
            mcc: "732", // from Columbia
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "00974957654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialingThreeLocalesUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "495",    // moscow
            subscriberNumber: "7654321",
            plan: new NumberingPlan({locale: "ru-RU"}),
            locale: new PhoneLocale({locale: "ru-RU"}),
            destinationPlan: new NumberingPlan({locale: "ru-RU"}),
            destinationLocale: new PhoneLocale({locale: "ru-RU"})
        }, {locale: "ru-RU"});
        var hints = {
            mcc: "732", // from Columbia
            networkType: "umts",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "+74957654321";
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    // for CFISH-5258
    testAssistedDialNormalizeBogusNumberNonVerizon: function(test) {
        test.expect(1);
        var left = new PhoneNumber("442076543211", {locale: 'de-DE'});
        
        var hints = {
            homeLocale: 'de-DE',
            mcc: "262", // in Germany
            networkType: "umts",
            defaultAreaCode: "30",    // phone is a German phone
            assistedDialing: true
        };
        var expectedString = "442076543211"; // don't assume it is international and add the bogus plus
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonUMTS: function(test) {
        test.expect(1);
        var left = new PhoneNumber("442076543211"); // number is too long, so try with a + prefix
        
        var hints = {
            mcc: "310",
            networkType: "umts",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "+442076543211"; // assumed to be an international call
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonCDMA: function(test) {
        test.expect(1);
        var left = new PhoneNumber("442076543211"); // number is too long, so try with a + prefix
        
        var hints = {
            mcc: "310",  // US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "011442076543211"; // the plus gets converted to 011 for cdma
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonAlreadyPlus: function(test) {
        test.expect(1);
        var left = new PhoneNumber("+442076543211");
        
        var hints = {
            mcc: "310",  // US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "011442076543211"; // plus gets converted to 011 for cdma
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonAlreadyIDD: function(test) {
        test.expect(1);
        var left = new PhoneNumber("011442076543211");
        
        var hints = {
            mcc: "310",  // US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "011442076543211";
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonWithTrunk: function(test) {
        test.expect(1);
        var left = new PhoneNumber("1442076543233");
        
        var hints = {
            mcc: "310",  // US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "1442076543233"; // don't touch things that already have a trunk prefix
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testAssistedDialNormalizeBogusNumberForVerizonInvalidCountryCode: function(test) {
        test.expect(1);
        var left = new PhoneNumber("4259876543233");
        
        var hints = {
            mcc: "310",  // US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone
            assistedDialing: true
        };
        var expectedString = "4259876543233"; // don't touch things with an invalid country code. ie. the reparse with a + didn't work.
    
        test.equal(left.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    //for CFISH-5447
    testDontRemoveDefaultAreaCodeAtHome: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("408-234-5678", {locale: 'en-US'}); // number is invalid in the UK with no valid area code
        var hints = {
            mcc: "310", // currently located in the US
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true
        };
        var expectedString = "4082345678"; // should not strip default area code
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testDoAddDefaultAreaCodeAtHome: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("234-5678", {locale: 'en-US'});
        var hints = {
            mcc: "310", // currently located in the US
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true
        };
        var expectedString = "4082345678"; // should add default area code
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    // for CFISH-5217
    testDefaultAreaCodeOnlyAtHome: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+442076543211", {locale: 'en-US'}); // number is invalid in the UK with no valid area code
        var hints = {
            mcc: "310", // currently located in the US
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true
        };
        var expectedString = "011442076543211"; // should not add default area code, which is for the US, not the UK
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testDefaultAreaCodeAtHome: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("6543211", {locale: 'en-US'}); // number is in the same area code as the device is
        var hints = {
            mcc: "234", // currently located in the UK
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true
        };
        var expectedString = "0016506543211"; // should not add default area code, which is for the US, not the UK
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testDefaultAreaCodeAtHomeNoDefault: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("4086543211", {locale: 'en-US'}); // number is in the same area code as the device is
        var hints = {
            mcc: "234", // currently located in the UK
            networkType: "cdma",
            defaultAreaCode: "650",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true
        };
        var expectedString = "0014086543211"; // should not add default area code, which is for the US, not the UK
    
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    // for CFISH-5307
    testSMSToUSNumbersCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("650 456 7890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "16504567890"; // should not add IDD for CDMA and not the default area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'
        test.done();
    },
    
    testSMSToUSNumbersUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("650 456 7890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "umts",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "+16504567890"; // should add IDD for UMTS and not the default area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testSMSToUSNumbersNoAreaCodeCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("456 7890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "14084567890"; // should not add IDD, but do add the default area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testSMSToUSNumbersNoAreaCodeUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("456 7890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "umts",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "+14084567890"; // should not add IDD, but do add the default area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    //for CFISH-5308
    testSMSToNonUSNumbersFromAbroadCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+44 20 4567890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "01144204567890"; // should add special IDD and no area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testSMSToNonUSNumbersFromAbroadUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+44 20 4567890", {locale: 'en-US'});
        var hints = {
            mcc: "208", // currently located in India
            networkType: "umts",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "01144204567890"; // should add special IDD and no area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testSMSToNonUSNumbersFromUSCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+44 20 4567890", {locale: 'en-US'});
        var hints = {
            mcc: "310", // currently located in US
            networkType: "cdma",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "01144204567890"; // should add special IDD and no area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    testSMSToNonUSNumbersFromUSUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+44 20 4567890", {locale: 'en-US'});
        var hints = {
            mcc: "310", // currently located in US
            networkType: "umts",
            defaultAreaCode: "408",    // phone is a US phone, so this default area code only applies to calls to US numbers
            assistedDialing: true,
            sms: true
        };
        var expectedString = "+44204567890"; // should add special IDD and no area code
        test.equal(phone.normalize(hints), expectedString); // 'en-US'    
        test.done();
    },
    
    // for CFISH-5729
    testAssistedDialingEmergencyNumberDontNormalize: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber({
            emergency: "911"
        }, {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "204", // from the Netherlands
            defaultAreaCode: "408"
        };
        var expected = "911";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    // for CFISH-5753
    testAssistedDialingServiceNumberDontAddAreaCodeCDMA: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("1 800 7654321", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "cdma",
            mcc: "204", // from the Netherlands
            defaultAreaCode: "430"
        };
        var expected = "0018007654321";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingServiceNumberDontAddAreaCodeUMTS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("1 800 7654321", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "204", // from the Netherlands
            defaultAreaCode: "430"
        };
        var expected = "+18007654321";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    // for CFISH-6022
    testAssistedDialingVerizonVSC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("*228", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "310", // US
            defaultAreaCode: "430"
        };
        var expected = "*228";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-5261
    testAssistedDialingNonManual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "+14089876543";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingNonManualNoOption: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "+14089876543";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingNonManualCDMA: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "cdma",
            manualDialing: false,
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "0014089876543";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "9876543";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManualWithTrunk: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("1-408-987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "+14089876543";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManualWithIDD: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011-1-408-987-6543", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "208", // France
            defaultAreaCode: "408"
        };
        var expected = "+14089876543";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManualWithTrunkFR: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("01 12 34 56 78", {locale: 'fr-FR'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "204", // Netherlands
            defaultAreaCode: "2"
        };
        var expected = "+33112345678";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManualWithIDDFR: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+33 1 12 34 56 78", {locale: 'fr-FR'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "208", // France
            defaultAreaCode: "2"
        };
        var expected = "0112345678";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingManualLocalIN: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("40861 76683", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: true,
            mcc: "405", // India
            defaultAreaCode: "80"
        };
        var expected = "4086176683";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingNonManualIN: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("4086176683", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "405", // India
            defaultAreaCode: "80"
        };
        var expected = "+14086176683";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-8481
    testAssistedDialingLocalMobileIN: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011 91 9911234567", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "405", // India
            defaultAreaCode: "80"
        };
        var expected = "09911234567";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingLocalLandLineIN: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011 91 11 12345678", {locale: 'en-US'});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "405", // India
            defaultAreaCode: "80"
        };
        var expected = "01112345678";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    //for CFISH-6043
    testNormalizeES: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987654321", {locale: "es-ES"});
        var hints = {
            networkType: "umts",
            mcc: "214", // from US
            defaultAreaCode: "984"
        };
        var expected = "+34987654321";  // should not add trunk code
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingESSMS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987654321", {locale: "es-ES"});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "310", // from US
            defaultAreaCode: "984",
            sms: true
        };
        var expected = "+34987654321";  // should not add trunk code
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingES: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("987654321", {locale: "es-ES"});
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            manualDialing: false,
            mcc: "310", // from US
            defaultAreaCode: "984"
        };
        var expected = "+34987654321";  // should not add trunk code
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingFR: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("12345678", {locale: 'fr-FR'});
        var hints = {
            homeLocale: 'en-FR',
            assistedDialing: true,
            networkType: "umts",
            mcc: "310", // from US
            defaultAreaCode: "1"
        };
        var expected = "+33112345678";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-6444
    testAssistedDialingCN1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011 86 10 30123456");
        var hints = {
            assistedDialing: true,
            networkType: "cdma",
            mcc: "460", // from China
            defaultAreaCode: "408"
        };
        var expected = "01030123456";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingCN2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("011 44 20 76543211");
        var hints = {
            assistedDialing: true,
            networkType: "cdma",
            mcc: "460", // from China
            defaultAreaCode: "408"
        };
        var expected = "00442076543211";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for DFISH-6274
    testAssistedDialingBogusInputs1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("617 6683");
        var hints = {
            assistedDialing: true,
            networkType: "bogus",
            mcc: "460", // from China
            defaultAreaCode: "408"
        };
        var expected = "+14086176683"; // should default to UMTS
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingBogusInputs2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("617 6683");
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "460", // from China
            defaultAreaCode: undefined
        };
        var expected = "6176683"; // should return as much as it can
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingBogusInputs3: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("617 6683");
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "-4564", // from never never land
            defaultAreaCode: "408"
        };
        var expected = "+14086176683"; // should default to international call
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingBogusInputs4: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("", {locale: "en-US"}); // empty!
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: "460", // from China
            defaultAreaCode: "408"
        };
        var expected = ""; // should return something instead of giving an exception
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingBogusInputs5: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("4157773456");
        var hints = {
            assistedDialing: true,
            mcc: "310", // from US
            defaultAreaCode: undefined
        };
        var expected = "4157773456"; // should return something instead of giving an exception
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingBogusInputs6: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("617 6683");
        var hints = {
            assistedDialing: true,
            networkType: "umts",
            mcc: undefined,
            defaultAreaCode: "408"
        };
        var expected = "4086176683"; // should default to domestic call
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-6873
    testAssistedDialingSMSSameCountryHomeIsUS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+861098765432");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "011861098765432"; // should go through US first
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    // for CFISH-6444
    testAssistedDialingForeignIDD: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0044209876543");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: false,
            networkType: "cdma",
            mcc: "310", // in US
            defaultAreaCode: "408"
        };
        var expected = "01144209876543"; // normalize the foreign IDD to the proper US one
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    // for CFISH-6845
    testAssistedDialingSameCountryHomeIsUS: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("00861098765432");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: false,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "01098765432"; // should be a domestic call
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    //for CFISH-6869
    testAssistedDialingSMSToUSFromIntlCDMA1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0019087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA2Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA3: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA3Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321"; // don't touch manually dialed stuff
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA4: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "19087654321";  // fix up things in your contact list
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA4Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "9087654321"; // don't touch manually dialed stuff
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA5: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("65876"); // short code
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "65876"; // special case -- don't do anything to short codes
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA6: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "908"
        };
        var expected = "19087654321";  // fix up things in your contact list
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlCDMA6Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "908"
        };
        var expected = "7654321";  // don't fix up manually dialed things
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA1Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("009087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA2Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("009087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA3: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("908765432101"); // +90 is Turkey
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "011908765432101";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA3Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("908765432101"); // +90 is Turkey
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "011908765432101";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA4: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("658765432101", {locale: "en-US"}); // +65 is Singapore -- special case
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "658765432101"; // special case -- don't add the special IDD
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA5: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0119087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlCDMA5Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0119087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "cdma",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("0019087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS2Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS3: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321";  // fix up things in your contact list
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS3Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("19087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321"; // does touch the manually dialed stuff when there is a trunk prefix
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS4: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "+19087654321";  // fix up things in your contact list
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS4Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "9087654321"; // don't touch manually dialed stuff
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS5: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("65876"); // short code
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "65876"; // special case -- don't do anything to short codes
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS6: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "908"
        };
        var expected = "+19087654321";  // fix up things in your contact list
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToUSFromIntlUMTS6Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("7654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "908"
        };
        var expected = "7654321";  // don't fix up manually dialed things
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS1Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+9087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("009087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS2Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("009087654321");
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "0119087654321";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS3: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("908765432101"); // +90 is Turkey
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "011908765432101";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS3Manual: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("908765432101"); // +90 is Turkey
        var hints = {
            assistedDialing: true,
            manualDialing: true,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "011908765432101";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    testAssistedDialingSMSToIntlFromIntlUMTS4: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("658765432101", {locale: "en-US"}); // +65 is Singapore -- special case
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "umts",
            mcc: "460", // in China
            defaultAreaCode: "408"
        };
        var expected = "658765432101"; // special case -- don't add the special IDD
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-3992
    testAssistedDialingSMSToIntlFromIntlCDMAChina: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+8613917331446");
        var hints = {
            assistedDialing: true,
            manualDialing: false,
            sms: true,
            networkType: "cdma",
            mcc: "460" // in China
        };
        var expected = "0118613917331446";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    //for CFISH-7040
    testNormalizeESRegular1: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("665 545 880", {locale: "en-ES"});
        var hints = {
            assistedDialing: false,
            manualDialing: false,
            sms: false,
            networkType: "umts",
            mcc: "214" // in Spain
        };
        var expected = "+34665545880";
    
        test.equal(parsed.normalize(hints), expected);
        test.done();
    },
    
    testNormalizeESRegular2: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+34 665 545 880", {locale: "en-ES"});
        var hints = {
            assistedDialing: false,
            manualDialing: false,
            sms: false,
            networkType: "umts",
            mcc: "214" // in Spain
        };
        var expected = "+34665545880";
    
        test.equal(parsed.normalize(hints), expected);    
        test.done();
    },
    
    // for CFISH-10884
    testAssistedDialingIntlToLLDUMTSForES: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+34 659 702 066", {locale: "es-ES"}); // calling from Spain to Spain
        var hints = {
            mcc: "214", // already in Spain
            networkType: "umts",
            defaultAreaCode: "659",
            assistedDialing: true
        };
        var expectedString = "659702066";
    
        test.equal(phone.normalize(hints), expectedString); // "es-ES"    
        test.done();
    }
    
};
