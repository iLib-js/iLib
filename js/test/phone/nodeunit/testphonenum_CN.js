/*
 * phonenum_CN.js - Test parsing phone numbers in CN
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

module.exports.phonenum_CN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseCNFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNFull2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("08081123456", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "8081",
            subscriberNumber: "123456"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("010-12345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01%0@-12$&34!56^7(8", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("87654321", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "87654321"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPlusIDDToGBLongArea: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+441997123456", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "1997",
            subscriberNumber: "123456"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("15005179573", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNIDDToMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+8615005179573", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "86",
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "4"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            subscriberNumber: "2"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12345"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123456", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123456"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234567", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234567"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("110", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "110"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("120115", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "120",
                subscriberNumber: "115"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPlusIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+5062012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",  // Costa Rica
            subscriberNumber: "2012345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNZerosIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("005062012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "506",
            subscriberNumber: "2012345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("010", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0101", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01012", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("010123", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0101234", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01012345", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("010123456", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123456"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0101234567", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234567"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01012345678", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPartialLocal1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "8"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseCNPartialLocal2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("87", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "87"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("876", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "876"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8765", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "8765"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("87654", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "87654"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("876543", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "876543"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8765432", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "8765432"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNPartialLocal8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("87654321", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "87654321"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    //for DFISH-26683
    testParseCNNewMobilePrefix1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14782808075", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "147",
            subscriberNumber: "82808075"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseCNNewMobilePrefix2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("18721083400", {locale: "zh-CN"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "187",
            subscriberNumber: "21083400"
        }, {locale: "zh-CN"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};