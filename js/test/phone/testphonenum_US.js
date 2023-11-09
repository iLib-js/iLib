/*
 * phonenum_US.js - Test parsing phone numbers in US
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

module.exports.phonenum_US = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseUSFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(456) 345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSFullNoLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(456) 345-3434");
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSFull2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4154154155", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "4154155"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("456-345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("@456@345@$%^3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithTrunk: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1 (456) 345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithTrunkAltFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1-456-345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithDialAround: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("10-10-321-456-345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            cic: "1010321",
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*67 (456) 345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*674563453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithVSCandTrunk: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*67 1 (456) 345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*6714563453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithAlternateVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112 (456) 345-3434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "1124563453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithAlternateVSCBogusCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("111111111", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "111111111"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("911", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "911"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSEmergencyNumberExtended: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("911 123", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            emergency: "911",
            subscriberNumber: "123"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLocalWithPauseChars: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6175568w1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "w1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLDWithPauseChars: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4156175568w1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "w1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLDWithPauseCharsAndTrunk: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1-415-617-5568 w 1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "w1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLocalWithExtension: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("617-5568x1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6175568",
            extension: "1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSLDWithExtension: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("415-617-5568 x1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "415",
            subscriberNumber: "6175568",
            extension: "1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("011442012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "011",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBLongArea: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+441997123456", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "1997",
            subscriberNumber: "123456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "4"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            subscriberNumber: "2"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12345"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+4420123456", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "123456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+44201234567", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "1234567"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToGBPartial13: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "20",
                subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPlusIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+5062012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",    // Costa Rica
            subscriberNumber: "2012345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSZerosIDDToUnknown: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0115062012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "011",
            countryCode: "506", // Costa Rica
            subscriberNumber: "2012345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("45", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "45"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("456", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4563", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4563"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("45634", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "45634"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("456345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "456345"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4563453", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "4563453"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("45634534", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("456345343", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "345343"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4563453434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("45634534345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "34534345",
            invalid: true
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk0: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            subscriberNumber: "4"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("145", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            subscriberNumber: "45"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1456", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14563", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("145634", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1456345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14563453", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("145634534", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1456345343", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "345343"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14563453434", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "3453434"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialTrunk11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("145634534345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "456",
            subscriberNumber: "34534345",
            invalid: true
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "3"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+35", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "35"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3531", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+35311", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "1"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353112", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "12"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3531123", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "123"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+35311234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "1234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353112345", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "12345"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3531123456", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "123456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+35311234567", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "1234567"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDD13: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353112345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            areaCode: "1",
            subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry0: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            subscriberNumber: "3"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+39", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+390", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3904", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            subscriberNumber: "4"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+39040", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+390401", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40",
            subscriberNumber: "1"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSPartialIDDtoPreserveZeroCountry7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3904012345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "40",
            subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-US", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
            });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-US", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: 'en-FR'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-US", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: 'en-MX'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "en-US", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: 'en-DE'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithUSMCCNoLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithFRMCCNoLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: 'en-FR'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithMXMCCNoLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: 'en-MX'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSWithDEMCCNoLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: 'en-DE'});

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for NOV-108200
    testParseUSBogusSpecialChars: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+P13817803573", {mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "P1",
            areaCode: "381",
            subscriberNumber: "7803573"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUS555Number: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(408) 555-1234", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "408",
            subscriberNumber: "5551234"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSHtmlGarbage: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("<button>t1</button>", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            extension: "ttt1tt"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSIntermediateSizedNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("56765432", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "567",
            subscriberNumber: "65432"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseUSEmergencyLikeServiceNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("411", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            serviceCode: "411"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSBogusInternationalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+33112345678", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSFictitousNumberLocale: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("5555555", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            subscriberNumber: "5555555"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSFictitousNumberLD: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("5555555555", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            areaCode: "555",
            subscriberNumber: "5555555"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for NOV-113367
    testUSCrazyIntlCall: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+1123", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            subscriberNumber: "123"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    //for NOV-109333
    testUSWierdVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*#43#", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*#43#"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSSSCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*646#", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*646#"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for CFISH-5088
    testUSVSCUMTS1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("#*06", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "#*06"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCUMTS2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*#06#408-987-6543", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*#06#4089876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCUMTS3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*#062#408-987-6543", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*#062#4089876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCUMTS4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("#62#408-987-6543", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "#62#4089876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCUMTS5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*##62#408-987-6543", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*##62#4089876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCUMTS6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("##62#408-987-6543", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "##62#4089876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for CFISH-6022
    testUSVSCVerizon: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*228", {locale: "en-US"});
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*228"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    testUSVSCVerizon2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("*844752224458", {mcc: "310"}); // US
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "*844752224458"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for CFISH-6362
    testUSVSCCDMALong: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1123456", {mcc: "310"}); // US
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            vsc: "1123456"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    //for CFISH-6444
    testParseUSWithForeignIDD: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0044209876543", {mcc: "310"}); // US but with a foreign IDD
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44", // uk
            areaCode: "20", // london
            subscriberNumber: "9876543"
        });

        test.ok(parsed.equals(expected));
        test.done();
    },
    // for CFISH-6845
    testParseUSWithChinaIDD: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00861098765432"); // US home locale but using a foreign IDD
        test.ok(typeof(parsed) !== "undefined");

        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "86", // china
            areaCode: "10", // beijing
            subscriberNumber: "98765432"
        });

        test.ok(parsed.equals(expected));
        test.done();

    }
};