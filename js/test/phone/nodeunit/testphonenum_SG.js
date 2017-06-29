/*
 * phonenum_SG.js - Test parsing phone numbers in SG
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
// for bug NOV-118901
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.phonenum_SG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testSGLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("93897077", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "93897077"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testSGFromIntl: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+6593897077", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "65",
            subscriberNumber: "93897077"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testSGLocalNumberWithMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("83897077", {locale: "en-US", mcc: "525"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "83897077"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 4567", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "61234567"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("62-34-56-78", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "62345678"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6!1@2$3-^4&5(6)7", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "61234567"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1800 345 6789", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "1800",
            subscriberNumber: "3456789"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("81234567", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "81234567"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00112028675309", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "001",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("999", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "999"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("61", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "61"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("612", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "612"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6123"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 4", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "61234"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 45", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "612345"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 456", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6123456"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 4567", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "61234567"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseSGPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6123 4567 8", {locale: "en-SG"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "612345678"
        }, {locale: "en-SG"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseSGWithGBMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-SG", mcc: "235"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "en-GB"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};