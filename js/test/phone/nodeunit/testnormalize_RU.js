/*
 * normalize_RU.js - test phonenumber normalize function()
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
    var PhoneNumber = require("../../../lib/PhoneNumber.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.normalize_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testRUIDDPrefix: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({locale: 'ru-RU'}), expected); // 'ru-RU'
        test.done();
    },
    
    testRUIDDPrefixAlreadyPlus: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("+31 456 3453434", {locale: 'ru-RU'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({locale: 'ru-RU'}), expected); // 'ru-RU'
        test.done();
    },
    
    testRUWithNoLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testRUNoHints: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize(), expected); // 'ru-RU'
        test.done();
    },
    
    testRUWithNoHintsNoLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8 10 31 456 3453434", {locale: 'ru-RU'});
        var expected = "+314563453434";
        
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testRULDNumberUsingRUMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
        var hints = {
            mcc: "250"
        };
        var expected = "+78122345678";
        test.equal(parsed.normalize(hints), expected); // 'ru-RU'
        test.done();
    },
    
    testRULDNumberUsingRUMCCOtherLocale: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
        var hints = {
            mcc: "250",
            locale: 'de-DE'
        };
        var expected = "+78122345678";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testRULDNumberUsingRUMCC: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "250" //ru-RU
        };
        var expected = "+492302654321";
        
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testRUAreaCodeFromHint: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("212-3456", {locale: 'ru-RU'});
        var hints = {
            defaultAreaCode: "8332"
        };
        var expected = "+783322123456";
        
        test.equal(parsed.normalize(hints), expected); // 'ru-RU'
        test.done();
    },
    testRUAreaCodeIgnoreHint: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("8.812.234-56-78", {locale: 'ru-RU'});
        var hints = {
            defaultAreaCode: "877"
        };
        var expected = "+78122345678";
        
        test.equal(parsed.normalize(hints), expected); // 'ko-KR'
        test.done();
    },
    
    testRUNoAreaCodeAndNoCountry: function(test) {
        test.expect(1);
        var parsed = new PhoneNumber("212-3456", {locale: 'ru-RU'});
        var expected = "2123456";
        
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testRUAssistedDialingLocalToLocalUMTSRU: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "250",
            networkType: "umts",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.equal(phone.normalize(hints), expectedString); // 'ru-RU'    
        test.done();
    },
    
    testRUAssistedDialingLocalToLocalUMTSAddTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+7 495 2123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "250",
            networkType: "umts",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "84952123456";
        test.equal(phone.normalize(hints), expectedString); // 'ru-RU'    
        test.done();
    },
    
    testRUAssistedDialingLocalToLocalCDMA: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "250",
            networkType: "cdma",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testRUAssistedDialingRULocalToLocalCDMAAddTrunkOpen: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("+7 495 2123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "250",
            networkType: "cdma",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "84952123456";
    
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testRURUAssistedDialingIntlToLocalUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("22-33-44", {locale: 'ru-RU'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "+7495223344";
    
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testRURUAssistedDialingIntlToLDUMTS: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("83022 212345", {locale: 'ru-RU'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "+73022212345";
    
        test.equal(phone.normalize(hints), expectedString); // 'ru-RU'    
        test.done();
    },
    
    testRUAssistedDialingIntlToLocalCDMARU: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("2123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "495",
            assistedDialing: true
        };
        var expectedString = "001174952123456";
    
        test.equal(phone.normalize(hints), expectedString); // 'ru-RU'    
        test.done();
    },
    
    testRUAssistedDialingIntlToLDCDMARU: function(test) {
        test.expect(1);
        var phone = new PhoneNumber("84952123456", {locale: 'ru-RU'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "4822",
            assistedDialing: true
        };
        var expectedString = "0074952123456";
    
        test.equal(phone.normalize(hints), expectedString); // 'ru-RU'    
        test.done();
    }
    
    
};
