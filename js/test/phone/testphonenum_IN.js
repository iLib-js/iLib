/*
 * phonenum_IN.js - Test parsing phone numbers in IN
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
    var PhoneNumber = require("../../lib/PhoneNumber.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.phonenum_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseINFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01112345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINFull2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("07753123456", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "7753",
            subscriberNumber: "123456"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011-12345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01%1@-12$&34!56^7(8", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("37654321", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "37654321"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINInvalidLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8765432100", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "8765432100",
            invalid: true
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("9912345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            mobilePrefix: "991",
            subscriberNumber: "2345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    // for CFISH-8481
    testParseINMobileNumberFromIntl: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+91 99123 45678", {locale: "en-us"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "91",
            mobilePrefix: "991",
            subscriberNumber: "2345678"
        }, {locale: "en-us"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINCic: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01054 80123 45678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            cic: "1054",
            areaCode: "80",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "112"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112118", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "112",
            subscriberNumber: "118"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPlusIDDToGBLongArea: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+441997123456", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "1997",
            subscriberNumber: "123456"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "4"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            subscriberNumber: "2"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12345"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123456", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123456"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234567", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234567"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },


    testParseINPlusIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+5062012345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",
            subscriberNumber: "2012345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINZerosIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("005062012345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "506",
            subscriberNumber: "2012345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0111", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01112", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011123", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0111234", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1234"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01112345", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011123456", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123456"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0111234567", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1234567"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01112345678", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345678"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011123456789", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123456789",
            invalid: true    // number is too long
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPartialLocal1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseINPartialLocal2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("47", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "47"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("476", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "476"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4765", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4765"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("47654", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "47654"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("476543", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "476543"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4765432", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4765432"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseINPartialLocal8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("47654321", {locale: "en-IN"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "47654321"
        }, {locale: "en-IN"});

        test.ok(parsed.equals(expected));
        test.done();

    }

};
