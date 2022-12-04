/*
 * phonenum_RU.js - Test parsing phone numbers in RU
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

module.exports.phonenum_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseRUFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRULocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("234-56-78", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8.812.234-56-78", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8$812@234&5678-", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUInvalidLocalNumber: function(test) {
        test.expect(2);
        // local number is too long
        var parsed = new PhoneNumber("2345678889123", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2345678889123",
            invalid: true
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88042345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            serviceCode: "804",
            subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("89105551234", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            mobilePrefix: "9",
            subscriberNumber: "105551234"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("81012028675309", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "810",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRULongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("3022345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "3022345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "112"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("104123", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "104",
            subscriberNumber: "123"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("84", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            subscriberNumber: "4"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("881", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            subscriberNumber: "81"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "8",
                areaCode: "812",
                subscriberNumber: "2"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "23"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "234"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "8",
            areaCode: "812",
            subscriberNumber: "2345"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "8",
                areaCode: "812",
                subscriberNumber: "23456"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseRUPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "8",
                areaCode: "812",
                subscriberNumber: "234567"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "8",
                areaCode: "812",
                subscriberNumber: "2345678"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUPartial12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "8",
                areaCode: "812",
                subscriberNumber: "23456789"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ru-US"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ru-FR"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ru-MX"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ru-DE"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithKRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "450"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "ru-KR"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithJPMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "440"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ru-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithTWMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "466"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ru-TW"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseRUWithRUMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ru-RU", mcc: "250"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ru-RU"});

        test.ok(parsed.equals(expected));
        test.done();
    }
};
