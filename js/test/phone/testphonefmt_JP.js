/*
 * phonefmt_JP.js - Test the phonefmt_JP Style.
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
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.phonefmt_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testFormatJPStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0358412047", {locale:"ja-JP"});
        var expected = "03-5841-2047";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0668795111", {locale: "ja-JP"});
        var expected = "06-6879-5111";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+8166877511", {locale: "ja-JP"});

        var expected = "+81 6 687 7511";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "010",
            countryCode: "1",
            areaCode: "408",
            subscriberNumber: "4567890"
        });
        var expected = "010 1 408 456 7890";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPLongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0152410670", {locale:"ja-JP"});
        var expected = "0152-41-0670";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("09017901357", {locale: "ja-JP"});
        var expected = "090-1790-1357";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+819012345678");
        var expected = "+81 90 1234 5678";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0301234567", {locale: "ja-JP"});
        var expected = "030-123-4567";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPEmergency1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("116", {locale: "ja-JP"});
        var expected = "116 ";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPEmergency2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("136", {locale: "ja-JP"});
        var expected = "136 ";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPIEIDD: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+35311234567", {locale: "ja-JP"});
        var expected = "+353 1 123 4567";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed);

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0", {locale:"ja-JP"});

        var expected = "0";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("04", {locale:"ja-JP"});
        var expected = "04-";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("047", {locale:"ja-JP"});
        var expected = "047-";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0475", {locale:"ja-JP"});
        var expected = "0475-";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("047512", {locale: "ja-JP"});
        var expected = "0475-12";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0475123", {locale: "ja-JP"});
        var expected = "0475-123";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("04751234", {locale: "ja-JP"});
        var expected = "0475-123-4";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("047512345", {locale: "ja-JP"});
        var expected = "0475-123-45";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0475123456", {locale: "ja-JP"});
        var expected = "0475-123-456";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("04751234567", {locale: "ja-JP"});
        var expected = "0475-123-4567";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("047512345678", {locale: "ja-JP"});
        var expected = "0475-1234-5678";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0475123456789", {locale: "ja-JP"});
        var expected = "0475123456789";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("04", {locale: "ja-JP"});
        var expected = "04-";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075", {locale: "ja-JP"});
        var expected = "075-";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751", {locale: "ja-JP"});
        var expected = "075-1";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512", {locale: "ja-JP"});

        var expected = "075-12";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075123", {locale: "ja-JP"});
        var expected = "075-123";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751234", {locale: "ja-JP"});
        var expected = "075-1234";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512345", {locale: "ja-JP"});
        var expected = "075-12-345";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075123456", {locale: "ja-JP"});
        var expected = "075-12-3456";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751234567", {locale: "ja-JP"});
        var expected = "075-123-4567";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512345678", {locale: "ja-JP"});
        var expected = "075-1234-5678";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0Whole11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075123456789", {locale: "ja-JP"});
        var expected = "075123456789";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: false});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("03", {locale: "ja-JP"});
        var expected = "(03) ";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075", {locale: "ja-JP"});
        var expected = "(075) ";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751", {locale: "ja-JP"});
        var expected = "(075) 1";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512", {locale: "ja-JP"});
        var expected = "(075) 12";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075123", {locale: "ja-JP"});
        var expected = "(075) 123";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751234", {locale: "ja-JP"});
        var expected = "(075) 123-4";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512345", {locale: "ja-JP"});
        var expected = "(075) 12-345";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("075123456", {locale: "ja-JP"});
        var expected = "(075) 12-3456";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0751234567", {locale: "ja-JP"});
        var expected = "(075) 123-4567";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("07512345678", {locale: "ja-JP"});
        var expected = "(075) 1234-5678";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "かっこ"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("7", {locale: "ja-JP"});
        var expected = "7";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("73", {locale: "ja-JP"});
        var expected = "73";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("738", {locale: "ja-JP"});
        var expected = "738";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("7380", {locale: "ja-JP"});
        var expected = "738-0";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("73803", {locale: "ja-JP"});
        var expected = "738-03";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("738034", {locale: "ja-JP"});
        var expected = "738-034";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("7380343", {locale: "ja-JP"});
        var expected = "738-0343";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("73553433", {locale: "ja-JP"});
        var expected = "7355-3433";

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    },
    testFormatJPStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("735534331", {locale: "ja-JP"});
        var expected = "735534331";    // use last resort rule

        var fmt = new PhoneFmt({locale: "ja-JP", style: "default"});
        formatted = fmt.format(parsed, {partial: true});

        test.equal(formatted, expected);
        test.done();
    }
};