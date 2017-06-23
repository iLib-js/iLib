/*
 * phonefmt_US.js - Test the phonefmt_US Style.
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../.././../lib/PhoneFmt.js");
}

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.phonefmt);
    data.push(ilib.data.phonefmt_US);
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.phonefmt_US = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatUSNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "(456) 345-3434";
        
        // default to US format
        var fmt = new PhoneFmt({style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "(456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSFull0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "4154155"
        });
        var expected = "(415) 415-4155";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatUSInternational2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("+82317105678", {locale:"en-US"});
        var expected = "+82 31 710 5678";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatUSInternationalLongArea: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "1997",
            subscriberNumber: "123456"
        });
        var expected = "+44 1997 123456";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSInternationalAccessCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "011",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "011 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSInternationalAccessCode2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("011821045670923", {locale:"en-US"});
                
        var expected = "011 82 10 4567 0923";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSPlusIDDtoUnknownCountry: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",    // costa rica
            subscriberNumber: "87654321"
        });
        var expected = "+506 87654321";    // use last resort rule for subscriber number
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0DialAround: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            cic: "1010321",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "10-10-321 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle1DialAround: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            cic: "1010321",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "10-10-321-456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0Vertical: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            vsc: "*55",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "*55 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0OldVertical: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            vsc: "115",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "115 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalWithPauseChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "w1234"
        });
        var expected = "617-5568 w1234";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLDWithPauseChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "w1234"
        });
        var expected = "(415) 617-5568 w1234";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalWithExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLDWithExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "(415) 617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLDWithTrunkAndExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "1 (415) 617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0Emergency: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            emergency: "911"
        });
        var expected = "911 ";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSEmergencyLikeServiceNumber: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            emergency: "411"
        });
        var expected = "411 ";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSStyle0EmergencyExtended: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            emergency: "911",
            subscriberNumber: "123"
        });
        var expected = "911 123";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithUSMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithUSMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithUSMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithUSMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatUSNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithDEMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithDEMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({style: "default", mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSLocalNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    //for NOV-108200
    testFormatUSWithBogusSpecialChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "P1",
            areaCode: "381",
            subscriberNumber: "7803573"
        });
        var expected = "+P1 381 780 3573";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "(456) 345-3434";
        
        // default to US format
        var fmt = new PhoneFmt({style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "(456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSFull0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "4154155"
        });
        var expected = "(415) 415-4155";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatPartialSMS: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "34534"
        });
        var expected = "345-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatWholeSMS: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "34534"
        });
        var expected = "34534";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSInternationalLongArea: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "1997",
            subscriberNumber: "123456"
        });
        var expected = "+44 1997 123456";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSInternationalAccessCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "011",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "011 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPlusIDDtoUnknownCountry: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",    // costa rica
            subscriberNumber: "87654321"
        });
        var expected = "+506 87654321";    // use last resort rule for subscriber number
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0DialAround: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            cic: "1010321",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "10-10-321 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1DialAround: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            cic: "1010321",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "10-10-321-456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Vertical: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            vsc: "*55",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "*55 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0OldVertical: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            vsc: "115",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "115 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalWithPauseChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "w1234"
        });
        var expected = "617-5568 w1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLDWithPauseChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "w1234"
        });
        var expected = "(415) 617-5568 w1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalWithExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLDWithExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "(415) 617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLDWithTrunkAndExtension: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "1234"
        });
        var expected = "1 (415) 617-5568 1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Emergency: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                emergency: "911"
        });
        var expected = "911 ";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0EmergencyExtended: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            emergency: "911",
            subscriberNumber: "123"
        });
        var expected = "911 123";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "4"
        });
        var expected = "(4)";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "45"
        });
        var expected = "(45)";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456"
        });
        var expected = "(456) ";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3"
        });
        var expected = "(456) 3";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34"
        });
        var expected = "(456) 34";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "345"
        });
        var expected = "(456) 345";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453"
        });
        var expected = "(456) 345-3";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534"
        });
        var expected = "(456) 345-34";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "345343"
        });
        var expected = "(456) 345-343";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "(456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534345" // too long
        });
        var expected = "45634534345"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634535"  // too long
        });
        var expected = "45634535";  // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1"
        });
        var expected = "1";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "4"
        });
        var expected = "1 (4)";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "45"
        });
        var expected = "1 (45)";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456"
        });
        var expected = "1 (456) ";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3"
        });
        var expected = "1 (456) 3";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34"
        });
        var expected = "1 (456) 34";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345"
        });
        var expected = "1 (456) 345";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453"
        });
        var expected = "1 (456) 345-3";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534"
        });
        var expected = "1 (456) 345-34";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345343"
        });
        var expected = "1 (456) 345-343";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "1 (456) 345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle0PartialTrunk11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534345" // too long
        });
        var expected = "145634534345";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456"
        });
        var expected = "456-";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453"
        });
        var expected = "456-345-3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534"
        });
        var expected = "456-345-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "345343"
        });
        var expected = "456-345-343";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534345"
        });
        var expected = "45634534345";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634534" // too long
        });
        var expected = "45634534";  // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1"
        });
        var expected = "1-";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "4"
        });
        var expected = "1-4";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "45"
        });
        var expected = "1-45";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456"
        });
        var expected = "1-456-";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3"
        });
        var expected = "1-456-3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34"
        });
        var expected = "1-456-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345"
        });
        var expected = "1-456-345";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453"
        });
        var expected = "1-456-345-3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534"
        });
        var expected = "1-456-345-34";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345343"
        });
        var expected = "1-456-345-343";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453434"
        });
        var expected = "1-456-345-3434";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSStyle1PartialTrunk11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534343" // too long
        });
        var expected = "145634534343";  // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+"
        });
        var expected = "+";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "3"
        });
        var expected = "+3";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39"
        });
        var expected = "+39 ";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0"
        });
        var expected = "+39 0";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            subscriberNumber: "4"
        });
        var expected = "+39 04";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40"
        });
        var expected = "+39 040 ";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40",
            subscriberNumber: "1"
        });
        var expected = "+39 040 1";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatUSPartialIDDToPreserveZeroCountry7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40",
            subscriberNumber: "12345678"
        });
        var expected = "+39 040 12345678";
        
        var fmt = new PhoneFmt({locale: "en-US", style: "dashes"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithUSMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithUSMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithUSMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithUSMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithDEMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithDEMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "en-US", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatUSNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatLocalNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    //for NOV-108200
    testWithParamsFormatWithBogusSpecialChars: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "P1",
            areaCode: "381",
            subscriberNumber: "7803573"
        });
        var expected = "+P1 381 780 3573";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatWith555Number: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "408",
            subscriberNumber: "5551234"
        });
        var expected = "(408) 555-1234";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatFictitiousNumberLocal: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "5555555"
        });
        var expected = "555-5555";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatFictitiousNumberLD: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "555",
            subscriberNumber: "5555555"
        });
        var expected = "(555) 555-5555";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testWithParamsFormatSMSThatLooksFictitious: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "5555"
        });
        var expected = "5555";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    //for NOV-113367
    testCrazyIntl: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            trunkAccess: "1",
            subscriberNumber: "23"
        });
        var expected = "+1 123";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    //for NOV-109333
    testOddVSC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "*#43#"
        });
        var expected = "*#43#";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testSSCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            vsc: "*64",
            subscriberNumber: "6#"
        });
        var expected = "*64 6#";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    // for CFISH-5088
    testVSCUMTS1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("#*06", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "#*06 ";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("*#06#408-987-6543", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "*#06#4089876543";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("*#062#408-987-6543", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "*#062#4089876543";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("#62#408-987-6543", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "#62#4089876543";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("*##62#408-987-6543", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "*##62#4089876543";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("##62#408-987-6543", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "##62#4089876543";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testVSCUMTS7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("*911", {locale: "en-US"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "*911 ";
        
        var fmt = new PhoneFmt({locale: "en-US"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testVSCUMTS8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("*844752224458", {mcc: "310"}); // US
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "*844752224458";
        
        var fmt = new PhoneFmt({isPartial: true, mcc: "310"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    // for CFISH-6362
    testVSCCDMALong: function(test) {
        var formatted;
        var parsed = new PhoneNumber("1112345", {mcc: "310"}); // US
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = "1112345";
        
        var fmt = new PhoneFmt({mcc: "310"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testGetAvailableStyles: function(test) {
        var fmtStyle = new PhoneFmt({locale: "en-US"});
        var styles = fmtStyle.getAvailableStyles();
        test.expect(4);
        test.ok(typeof(styles) !== "undefined");
    
        test.equal(styles[0], "default");
        test.equal(styles[1], "dashes");
        test.equal(styles[2], "dots");
        test.done();
    },
    
    testGetStyleExample: function(test) {
        var fmtStyle = new PhoneFmt({locale: "en-US"});
        var exampleDefault = fmtStyle.getStyleExample("default");
        var exampleDashes = fmtStyle.getStyleExample("dashes");
        var exampleDots = fmtStyle.getStyleExample("dots");
        
        test.expect(3);
        test.equal(exampleDefault, "1 (650) 555-1234");
        test.equal(exampleDashes, "1-650-555-1234");
        test.equal(exampleDots, "1.650.555.1234");
        test.done();
    },
    
    testPhoneFmtUSLoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
        test.done();
            return;
        }
        
        ilib.setLoaderCallback(mockLoader);
    
        var phonefmt = new PhoneFmt({
            locale: "en-US",
            sync: false,
            onLoad: function (fmt) {
        test.expect(2);
                test.ok(fmt !== null);
            }
        });
    
        test.equal(phonefmt.getStyleExample("default"), "1 (650) 555-1234");
        test.done();
    }
    
};