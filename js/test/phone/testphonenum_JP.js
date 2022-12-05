/*
 * phonenum_JP.js - Test parsing phone numbers in JP
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

module.exports.phonenum_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseJPFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03-5841-2047", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "58412047"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("345-6789", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "3456789"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0152-41-0670", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "152",
            subscriberNumber: "410670"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(075) 1234-5678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "75",
            subscriberNumber: "12345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$075@1234&5678-", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "75",
            subscriberNumber: "12345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("82345678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPInvalidLocalNumber: function(test) {
        test.expect(2);
        // local number is too long
        var parsed = new PhoneNumber("23456788889123", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "23456788889123",
            invalid: true
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0130-12345678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "130",
            subscriberNumber: "12345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    /*
    no vsc in Japan? I can't find example of vsc.
    testParseJPWithVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14102012345678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "141",
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    */

    testParseJPMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("070-53412345", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "70",
            subscriberNumber: "53412345"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01012028675309", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            iddPrefix: "10",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPLongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("13712345678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "13712345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("110", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "110"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("171171", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "171",
            subscriberNumber: "171"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "4"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("047", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "47"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0475", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "475"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04751", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "475",
                subscriberNumber: "1"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("047512", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "475",
            subscriberNumber: "12"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0475123", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "475",
            subscriberNumber: "123"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04751234", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "475",
            subscriberNumber: "1234"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("047512345", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "475",
                subscriberNumber: "12345"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseJPPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0475123456", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "475",
                subscriberNumber: "123456"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04751234567", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "475",
                subscriberNumber: "1234567"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPPartial12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("047512345678", {locale: "ja-JP"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "475",
                subscriberNumber: "12345678"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ja-US"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ja-FR"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ja-MX"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ja-DE"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithKRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "450"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "ja-KR"});

        test.ok(parsed.equals(expected));
        test.done();
    },

    testParseJPWithJPMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "ja-JP", mcc: "440"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ja-JP"});

        test.ok(parsed.equals(expected));
        test.done();
    }
};
