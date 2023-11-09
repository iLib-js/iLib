/*
 * phonenum_HK.js - Test parsing phone numbers in HK
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

module.exports.phonenum_HK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testHKLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("23897077", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "23897077"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testHKFromIntl: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+85223897077", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "852",
            subscriberNumber: "23897077"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testHKMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("93897077", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            mobilePrefix: "9",
            subscriberNumber: "3897077"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testHKFromIntlToMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+85293897077", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "852",
            mobilePrefix: "9",
            subscriberNumber: "3897077"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testHKLocalNumberWithMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("23897077", {locale: "en-US", mcc: "454"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "23897077"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 4567", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "21234567"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("22-34-56-78", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "22345678"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2!1@2$3-^4&5(6)7", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "21234567"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("18501", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            serviceCode: "1",
            subscriberNumber: "8501"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("51234567", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            mobilePrefix: "5",
            subscriberNumber: "1234567"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00112028675309", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "001",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("999", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "999"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKEmergencyNumberGSM: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "112"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("21", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "21"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("212", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "212"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2123"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 4", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "21234"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 45", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "212345"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 456", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "2123456"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 4567", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "21234567"
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("2123 4567 8", {locale: "en-HK"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "212345678",
            invalid: true
        }, {locale: "en-HK"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-HK", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-US"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-HK", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-FR"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-HK", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-MX"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-HK", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-DE"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseHKWithGBMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-HK", mcc: "235"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    }
};