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

module.exports.normalize_TW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testTWIDDPrefix: function(test) {
        var parsed = new PhoneNumber("002 31 456 3453434", {locale: 'zh-TW'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'zh-TW'}), expected); // 'zh-TW'
        test.done();
    },
    
    testTWIDDPrefixAlreadyPlus: function(test) {
        var parsed = new PhoneNumber("+31 456 3453434", {locale: 'zh-TW'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'zh-TW'}), expected); // 'zh-TW'
        test.done();
    },
    
    testTWWithNoLocale: function(test) {
        var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testTWNoHints: function(test) {
        var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected); // 'zh-TW'
        test.done();
    },
    
    testTWWithNoHintsNoLocale: function(test) {
        var parsed = new PhoneNumber("00231 456 3453434", {locale: 'zh-TW'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testTWLDNumberUsingTWMCC: function(test) {
        var parsed = new PhoneNumber("02-24766830", {locale: 'zh-TW'});
        var hints = {
            mcc: "466"
        };
        var expected = "+886224766830";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'zh-TW'
        test.done();
    },
    
    testTWLDNumberUsingTWMCCOtherLocale: function(test) {
        var parsed = new PhoneNumber("02-24766830", {locale: 'zh-TW'});
        var hints = {
            mcc: "466",
            locale: 'de-DE'
        };
        var expected = "+886224766830";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'zh-TW'
        test.done();
    },
    
    testTWLDNumberUsingTWMCC: function(test) {
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "466" //zh-TW
        };
        var expected = "+492302654321";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testTWAreaCodeFromHintTW: function(test) {
        var parsed = new PhoneNumber("2435674", {locale: 'zh-TW'});
        var hints = {
            defaultAreaCode: "49"
        };
        var expected = "+886492435674";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'zh-TW'
        test.done();
    },
    
    testTWAreaCodeIgnoreHintTW: function(test) {
        var parsed = new PhoneNumber("05-531-5123", {locale: 'zh-TW'});
        var hints = {
            defaultAreaCode: "650"
        };
        var expected = "+88655315123";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'zh-TW'
        test.done();
    },
    
    testTWNoAreaCodeAndNoCountry: function(test) {
        var parsed = new PhoneNumber("531-5123", {locale: 'zh-TW'});
        var expected = "5315123";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testTWAssistedDialingLocalToLocalUMTS: function(test) {
        var phone = new PhoneNumber("5315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "466",
            networkType: "umts",
            defaultAreaCode: "5",
            assistedDialing: true
        };
        var expectedString = "5315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'zh-TW'    
        test.done();
    },
    
    testTWAssistedDialingLocalToLocalUMTSAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+88655315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "466",
            networkType: "umts",
            assistedDialing: true
        };
        var expectedString = "055315123";
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'zh-TW'    
        test.done();
    },
    
    testTWAssistedDialingLocalToLocalCDMA: function(test) {
        var phone = new PhoneNumber("5315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "466",
            networkType: "cdma",
            defaultAreaCode: "5",
            assistedDialing: true
        };
        var expectedString = "5315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testTWAssistedDialingLocalToLocalCDMAAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+886492315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "466",
            networkType: "cdma",
            defaultAreaCode: "49",
            assistedDialing: true
        };
        var expectedString = "0492315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testTWAssistedDialingIntlToLocalUMTS: function(test) {
        var phone = new PhoneNumber("2315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "49",
            assistedDialing: true
        };
        var expectedString = "+886492315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testTWAssistedDialingIntlToLDUMTS: function(test) {
        var phone = new PhoneNumber("0492315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "+886492315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'zh-TW'    
        test.done();
    },
    
    testTWAssistedDialingIntlToLocalCDMA: function(test) {
        var phone = new PhoneNumber("2315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "49",
            assistedDialing: true
        };
        var expectedString = "0011886492315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'zh-TW'    
        test.done();
    },
    
    testTWAssistedDialingIntlToLDCDMA: function(test) {
        var phone = new PhoneNumber("0492315123", {locale: 'zh-TW'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "00886492315123";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'zh-TW'    
        test.done();
    }
    
    
};