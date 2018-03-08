/*
 * phonefmt_ES.js - Test the phonefmt_ES Style.
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
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../.././../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonefmt_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatESStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "957 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "957 12 34 56";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "95 712 34 56";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "viejo"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "957 123456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "compacto"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatESInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "34",
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "+34 957 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                mobilePrefix: "616",
                subscriberNumber: "846357"
        });
        var expected = "616 846 357";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatESInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "34",
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "00 34 957 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatESDialAround: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                cic: "1032",
                areaCode: "957",
                subscriberNumber: "123456"
        });
        var expected = "1032 957 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatESStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "9"
        });
        var expected = "9";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "91"
        });
        var expected = "91 ";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912"
        });
        var expected = "912 ";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1"
        });
        var expected = "912 1";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "12"
        });
        var expected = "912 12";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "123"
        });
        var expected = "912 123";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1234"
        });
        var expected = "912 123 4";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "12345"
        });
        var expected = "912 123 45";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "123456"
        });
        var expected = "912 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1234567"    // too long
        });
        var expected = "9121234567";     // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatESStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "9"
        });
        var expected = "9";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "91"
        });
        var expected = "91 ";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912"
        });
        var expected = "912 ";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1"
        });
        var expected = "912 1";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "12"
        });
        var expected = "912 12";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "123"
        });
        var expected = "912 12 3";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1234"
        });
        var expected = "912 12 34";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "12345"
        });
        var expected = "912 12 34 5";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "123456"
        });
        var expected = "912 12 34 56";
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatESStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "912",
                subscriberNumber: "1234567"    // too long
        });
        var expected = "9121234567";     // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-ES", style: "dobles"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "34",
                areaCode: "912",
                subscriberNumber: "123456"
        });
        var expected = "+34 912 123 456";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatInternationalPartial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00"
        });
        var expected = "00 ";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1"
        });
        var expected = "00 1 ";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                subscriberNumber: "6"
        });
        var expected = "00 1 6";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                subscriberNumber: "65"
        });
        var expected = "00 1 65";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650"
        });
        var expected = "00 1 650 ";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5"
        });
        var expected = "00 1 650 5";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "55"
        });
        var expected = "00 1 650 55";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "555"
        });
        var expected = "00 1 650 555";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5551"
        });
        var expected = "00 1 650 555 1";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "55512"
        });
        var expected = "00 1 650 555 12";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "555123"
        });
        var expected = "00 1 650 555 123";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatInternationalPartial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "1",
                areaCode: "650",
                subscriberNumber: "5551234"
        });
        var expected = "00 1 650 555 1234";
        
        var fmt = new PhoneFmt({locale: "es-ES"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};
