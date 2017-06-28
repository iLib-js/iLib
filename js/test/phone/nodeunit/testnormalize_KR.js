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

module.exports.normalize_KR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testKRIDDPrefix: function(test) {
        var parsed = new PhoneNumber("001 31 456 3453434", {locale: 'ko-KR'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'ko-KR'}), expected); // 'ko-KR'
        test.done();
    },
    
    testKRIDDPrefixAlreadyPlus: function(test) {
        var parsed = new PhoneNumber("+31 456 3453434", {locale: 'ko-KR'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({locale: 'ko-KR'}), expected); // 'ko-KR'
        test.done();
    },
    
    testKRWithNoLocale: function(test) {
        var parsed = new PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize({}), expected);
        test.done();
    },
    
    testKRNoHints: function(test) {
        var parsed = new PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected); // 'ko-KR'
        test.done();
    },
    
    testKRWithNoHintsNoLocale: function(test) {
        var parsed = new PhoneNumber("00131 456 3453434", {locale: 'ko-KR'});
        var expected = "+314563453434";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testKRLDNumberUsingKRMCC: function(test) {
        var parsed = new PhoneNumber("02-312-3456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450"
        };
        var expected = "+8223123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ko-KR'
        test.done();
    },
    
    testKRLDNumberUsingKRMCCOtherLocale: function(test) {
        var parsed = new PhoneNumber("02 312 3456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450",
            locale: 'de-DE'
        };
        var expected = "+8223123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testKRLDNumberUsingKRMCC: function(test) {
        var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
        var hints = {
            mcc: "450" //ko-KR
        };
        var expected = "+492302654321";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'de-DE'
        test.done();
    },
    
    testKRAreaCodeFromHint: function(test) {
        var parsed = new PhoneNumber("212-3456", {locale: 'ko-KR'});
        var hints = {
            defaultAreaCode: "51"
        };
        var expected = "+82512123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ko-KR'
        test.done();
    },
    
    testKRAreaCodeIgnoreHint: function(test) {
        var parsed = new PhoneNumber("051-212-3456", {locale: 'ko-KR'});
        var hints = {
            defaultAreaCode: "650"
        };
        var expected = "+82512123456";
        
        test.expect(1);
        test.equal(parsed.normalize(hints), expected); // 'ko-KR'
        test.done();
    },
    
    testKRNoAreaCodeAndNoCountry: function(test) {
        var parsed = new PhoneNumber("212-3456", {locale: 'ko-KR'});
        var expected = "2123456";
        
        test.expect(1);
        test.equal(parsed.normalize(), expected);
        test.done();
    },
    
    testKRAssistedDialingLocalToLocalUMTS: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450",
            networkType: "umts",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ko-KR'    
        test.done();
    },
    
    testKRAssistedDialingLocalToLocalUMTSAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+82 51 2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450",
            networkType: "umts",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "0512123456";
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ko-KR'    
        test.done();
    },
    
    testKRAssistedDialingLocalToLocalCDMA: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450",
            networkType: "cdma",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "2123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testKRAssistedDialingLocalToLocalCDMAAddTrunkOpen: function(test) {
        var phone = new PhoneNumber("+82 51 2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "450",
            networkType: "cdma",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "0512123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testKRAssistedDialingIntlToLocalUMTS: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "+82512123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); 
        test.done();
    },
    
    testKRAssistedDialingIntlToLDUMTS: function(test) {
        var phone = new PhoneNumber("051 2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "208", // from France
            networkType: "umts",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "+82512123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ko-KR'    
        test.done();
    },
    
    testKRAssistedDialingIntlToLocalCDMA: function(test) {
        var phone = new PhoneNumber("2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "505", // From Australia
            networkType: "cdma",
            defaultAreaCode: "51",
            assistedDialing: true
        };
        var expectedString = "001182512123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ko-KR'    
        test.done();
    },
    
    testKRAssistedDialingIntlToLDCDMA: function(test) {
        var phone = new PhoneNumber("051 2123456", {locale: 'ko-KR'});
        var hints = {
            mcc: "208", // from France
            networkType: "cdma",
            defaultAreaCode: "3",
            assistedDialing: true
        };
        var expectedString = "0082512123456";
    
        test.expect(1);
        test.equal(phone.normalize(hints), expectedString); // 'ko-KR'    
        test.done();
    }
    
    
};