/*
 * phonenum_BR.js - Test parsing phone numbers in BR
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonenum_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseBRFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("021 11 5841 2047", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "021",
            areaCode: "11",
            subscriberNumber: "58412047"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("5841-2047", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "58412047"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("012-11-2345-6789", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "012",
            areaCode: "11",
            subscriberNumber: "23456789"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(021) 11 1234-5678", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "021",
            areaCode: "11",
            subscriberNumber: "12345678"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$012@115841&2047-", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "012",
            areaCode: "11",
            subscriberNumber: "58412047"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("58412047", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "58412047"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRInvalidLocalNumber: function(test) {
        test.expect(2);
        // local number is too long
        var parsed = new PhoneNumber("234567888", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "234567888",
            invalid: true
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0300-2345678", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "0300",
            subscriberNumber: "2345678"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("92345-6789", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "9",
            subscriberNumber: "23456789"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("002112028675309", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "0021",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRLongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("5123456789", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "5123456789",
            invalid: true
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBREmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("192", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "192"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBREmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("199199", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "199",
            subscriberNumber: "199"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "6"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("061", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0613", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "3"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06133", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "33"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("061332", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "332"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0613321", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "3321"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06133212", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "33212"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("061332125", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "332125"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseBRPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0613321250", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "3321250"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06133212504", {locale: "pt-BR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "61",
            subscriberNumber: "33212504"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "pt-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "pt-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "pt-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "pt-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithKRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "pt-BR", mcc: "450"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "pt-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseBRWithBRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("23456789", {locale: "pt-BR", mcc: "724"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "23456789"
        }, {locale: "pt-BR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    }
};
