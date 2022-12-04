/*
 * phonenum_NZ.js - Test parsing phone numbers in NZ
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

module.exports.phonenum_NZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseNZFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03 456-7890", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "4567890"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("3456789", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "3456789"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZBogusPrefix: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05 9812345", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "59812345"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(03) 123-5678", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "1235678"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$03@1234&567-", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "1234567"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("91234567", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "91234567"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("080098765", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "800",
            subscriberNumber: "98765"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*222", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*222"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02112345678", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "21",
            subscriberNumber: "12345678"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("111", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "111"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "9"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0399", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "99"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03999", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "999"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039991", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "9991"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0399912", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "99912"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03999123", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "999123"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039991234", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "9991234"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },
    testParseNZPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0399912345", {locale: "en-NZ"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "99912345"
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-NZ", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-US"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-NZ", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-FR"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-NZ", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "en-MX"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-NZ", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "en-DE"});

        test.ok(parsed.equals(expected));
        test.done();

    },

    testParseNZWithNZMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-NZ", mcc: "530"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "en-NZ"});

        test.ok(parsed.equals(expected));
        test.done();

    }
};
