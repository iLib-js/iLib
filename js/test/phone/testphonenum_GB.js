/*
 * phonenum_GB.js - Test parsing phone numbers in GB
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

module.exports.phonenum_GB = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseGBFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("020 1234 5678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("3456789", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "3456789"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBBogusPrefix: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06 69812345", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "669812345",
            invalid: true
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },


    testParseGBFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01946712345", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "19467",
            subscriberNumber: "12345"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBFullSpecialAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01946123456", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1946",
            subscriberNumber: "123456"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(020) 1234-5678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBFullLongAreaCodeIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(01999)123456", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1999",
            subscriberNumber: "123456"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$020@1234&5678-", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("82345678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBInvalidLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("12345678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "12345678",
            invalid: true
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("034012345678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "340",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14102012345678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "141",
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBPersonalNumbering: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("07012345678", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "70",
            subscriberNumber: "12345678"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("07534123456", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "7534",
            subscriberNumber: "123456"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBLongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("1999123456", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "1999123456",
            invalid: true
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("116", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "116"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("116116", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "116",
            subscriberNumber: "116"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("019", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "19"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0199", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "199"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01999", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1999"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("019991", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1999",
            subscriberNumber: "1"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0199912", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1999",
            subscriberNumber: "12"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01999123", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1999",
            subscriberNumber: "123"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("019991234", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1999",
                subscriberNumber: "1234"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0199912345", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1999",
                subscriberNumber: "12345"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseGBPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01999123456", {locale: "en-GB"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1999",
                subscriberNumber: "123456"
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-US"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-FR"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-MX"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-DE"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseGBWithGBMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-GB", mcc: "235"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "en-GB"});

        test.ok(parsed.equals(expected));
        test.done();

    }

};
