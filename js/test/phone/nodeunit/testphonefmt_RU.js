/*
 * phonefmt_RU.js - Test the phonefmt_RU Style.
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
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../../../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonefmt_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatRUStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345678", {locale:"ru-RU"});
        var expected = "8 (812) 234-56-78";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("83852234567", {locale: "ru-RU"});
        var expected = "8 (3852) 23-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+78123289701", {locale: "ru-RU"});
        
        var expected = "+7 812 328-97-01";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
    
        var parsed = new PhoneNumber("81014084567890", {locale: "ru-RU"});
    
        var expected = "810 1 408 456 7890";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRULongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("84132234567", {locale:"ru-RU"});
        var expected = "8 (41322) 3-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("89012345678", {locale: "ru-RU"});
        var expected = "8-901-234-5678";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        
        var parsed = new PhoneNumber("+79015551234");
        var expected = "+7 901-555-1234";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88001234567", {locale: "ru-RU"});
        var expected = "8 (800) 123-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUEmergency1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("101", {locale: "ru-RU"});
        var expected = "101";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUEmergency2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("112", {locale: "ru-RU"});
        var expected = "112";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUIEIDD: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+35311234567", {locale: "ru-RU"});
        var expected = "+353 1 123 4567";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8", {locale:"ru-RU"});
        
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88", {locale:"ru-RU"});
        var expected = "88";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881", {locale:"ru-RU"});
        var expected = "881";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812", {locale:"ru-RU"});
        var expected = "8 (812) ";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
        var expected = "8 (812) 2";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
        var expected = "8 (812) 23";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
        var expected = "8 (812) 234";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
        var expected = "8 (812) 234-5";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
        var expected = "8 (812) 2-34-56";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
        var expected = "8 (812) 23-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        var expected = "8 (812) 234-56-78";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
        var expected = "881223456789";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "8"
        });
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88", {locale: "ru-RU"});
        var expected = "88";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881", {locale: "ru-RU"});
        var expected = "881";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
        var expected = "8 (812) ";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
            
        var expected = "8 (812) 2";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
        var expected = "8 (812) 23";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
        var expected = "8 (812) 234";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
        var expected = "8 (812) 234-5";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
        var expected = "8 (812) 2-34-56";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
        var expected = "8 (812) 23-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        var expected = "8 (812) 234-56-78";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0Whole11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
        var expected = "881223456789";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "8"
        });
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88", {locale: "ru-RU"});
        var expected = "88";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881", {locale: "ru-RU"});
        var expected = "881";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812", {locale: "ru-RU"});
        var expected = "8.812.";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122", {locale: "ru-RU"});
        var expected = "8.812.2";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223", {locale: "ru-RU"});
        var expected = "8.812.23";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234", {locale: "ru-RU"});
        var expected = "8.812.234";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345", {locale: "ru-RU"});
        var expected = "8.812.234-5";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456", {locale: "ru-RU"});
        var expected = "8.812.2-34-56";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("8812234567", {locale: "ru-RU"});
        var expected = "8.812.23-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("88122345678", {locale: "ru-RU"});
        var expected = "8.812.234-56-78";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("881223456789", {locale: "ru-RU"});
        var expected = "881223456789";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "точка"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("2", {locale: "ru-RU"});
        var expected = "2";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("23", {locale: "ru-RU"});
        var expected = "23";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("234", {locale: "ru-RU"});
        var expected = "234";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("2345", {locale: "ru-RU"});
        var expected = "234-5";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("23456", {locale: "ru-RU"});
        var expected = "2-34-56";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("234567", {locale: "ru-RU"});
        var expected = "23-45-67";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("2345678", {locale: "ru-RU"});
        var expected = "234-56-78";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatRUStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("23456789", {locale: "ru-RU"});
        var expected = "23456789";
        
        var fmt = new PhoneFmt({locale: "ru-RU", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    }
};
