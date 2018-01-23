/*
 * phonenum_ES.js - Test parsing phone numbers in ES
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

module.exports.phonenum_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseESFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("925123456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "925",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(925) 123 456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "925",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("9@251$23%45&6", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "925",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112115", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112",
                subscriberNumber: "115"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("654123456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "654",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESServiceNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("800123456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "800",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESDialAround: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1032955123456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "1032",
            areaCode: "955",
            subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("9", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "9"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("95", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "95"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("9571", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957",
            subscriberNumber: "1"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957 12", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957",
            subscriberNumber: "12"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957 123", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957",
            subscriberNumber: "123"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957 123 4", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957",
            subscriberNumber: "1234"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957 123 45", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "957",
            subscriberNumber: "12345"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("957 123 456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                areaCode: "957",
                subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseESDialIDD00International1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "0"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("001", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0016", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                subscriberNumber: "6"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00165", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                subscriberNumber: "65"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("001650", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0016505", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00165055", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "55"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("001650555", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "555"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0016505551", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5551"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00165055512", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "55512"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("001650555123", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "555123"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseESDialIDD00International13: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0016505551234", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5551234"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    
    testParseESFromInternational: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+34912123456", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "34",
                areaCode: "912",
                subscriberNumber: "123456"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    //for CFISH-7040
    testParseESMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("665 545 880", {locale: "es-ES"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "665",
            subscriberNumber: "545880"
        }, {locale: "es-ES"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};