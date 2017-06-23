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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.normalize_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJPIDDPrefix: function(test) {
        var parsed = new PhoneNumber("010 31 456 3453434", {locale: 'ja-JP'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'ja-JP'}), expected); // 'ja-JP'
        test.done();
    },
    
    testJPIDDPrefixAlreadyPlus: function(test) {
        var parsed = new PhoneNumber("+31 456 3453434", {locale: 'ja-JP'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'ja-JP'}), expected); // 'ja-JP'
        test.done();
    },
    
    testJPWithNoLocale: function(test) {
        var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testJPNoHints: function(test) {
        var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected); // 'ja-JP'
        test.done();
    },
    
    testJPWithNoHintsNoLocale: function(test) {
        var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testJPLDNumberUsingJPMCC: function(test) {
        var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "440"
        };
        var expected = "+8156531111111";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ko-KR'
        test.done();
    },
    
    testJPLDNumberUsingJPMCCOtherLocale: function(test) {
        var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "440",
            locale: 'de-DE'
        };
        var expected = "+8156531111111";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ja-JP'
        test.done();
    },
    
    testJPLDNumberUsingJPMCC: function(test) {
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "440" //ja-JP
        };
        var expected = "+492302654321";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testJPAreaCodeFromHint: function(test) {
        var parsed = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
        var hints = {
            defaultAreaCode: "565"
        };
        var expected = "+8156531111111";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ja-JP'
        test.done();
    },
    
    testJPAreaCodeIgnoreHint: function(test) {
        var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            defaultAreaCode: "650"
        };
        var expected = "+8156531111111";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ja-JP'
        test.done();
    },
    
    testJPNoAreaCodeAndNoCountry: function(test) {
        var parsed = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
        var expected = "31111111";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testJPAssistedDialingLocalToLocalUMTS: function(test) {
        var phone = new PhoneNumber("32622391", {locale: 'ja-JP'});
        var hints = {
            mcc: "440",
            networkType: "umts",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "32622391";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ja-JP'    
        test.done();
    },
    
    testJPAssistedDialingLocalToLocalUMTSAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+81-56-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "440",
            networkType: "umts",
            assistedDialing: true
        };
        var expectedString = "056531111111";
        test.expect(1);
        test.equal(phone.normalize(hints,{locale: 'ja-JP'}), expectedString); // 'ja-JP'    
        test.done();
    },
    
    testJPAssistedDialingLocalToLocalCDMA: function(test) {
        var phone = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "440",
            networkType: "cdma",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "31111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testJPAssistedDialingLocalToLocalCDMAAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+81-56-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "440",
            networkType: "cdma",
            defaultAreaCode: "565",
            assistedDialing: true
        };
        var expectedString = "056531111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testJPAssistedDialingIntlToLocalUMTS: function(test) {
        var phone = new PhoneNumber("31111111", {locale: 'ja-JP'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "565",
            assistedDialing: true
        };
        var expectedString = "+8156531111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testJPAssistedDialingIntlToLDUMTS: function(test) {
        var phone = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "+8156531111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ja-JP'    
        test.done();
    },
    
    testJPAssistedDialingIntlToLocalCDMA: function(test) {
        var phone = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "001181331111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ja-JP'    
        test.done();
    },
    
    testJPAssistedDialingIntlToLDCDMA: function(test) {
        var phone = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "008156531111111";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ja-JP'    
        test.done();
    }
    
    
};