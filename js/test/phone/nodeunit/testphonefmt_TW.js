/*
 * phonefmt_TW.js - Test the phonefmt_TW Style.
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
    var ilib = require("../../..");
}

module.exports.phonefmt_TW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatTWStyle0: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039606537", {locale:"zh-TW"});
        var expected = "(039) 606-537";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039606537", {locale: "zh-TW"});
        var expected = "039 606 537";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039606537", {locale: "zh-TW"});
        var expected = "039-606-537";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039606537", {locale: "zh-TW"});
        var expected = "(039) 606537";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber("+886233663366", {locale: "zh-TW"});
        
        var expected = "+886 2 3366 3366";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWInternationalAccessCode: function(test) {
        var formatted;
    
        var parsed = new PhoneNumber("00214084567890", {locale: "zh-TW"});
        
        var expected = "002 1 408 456 7890";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWLongAreaCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber("04582410670", {locale:"zh-TW"});
        var expected = "(0458) 241-0670";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWMobile: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0912-345-678", {locale: "zh-TW"});
        var expected = "0912-345-678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWMobileInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber("+886912345678");
        var expected = "+886 912 345 678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWService: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0800011765", {locale: "zh-TW"});
        var expected = "0800-011-765";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWEmergency1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("166", {locale: "zh-TW"});
        var expected = "166 ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWEmergency2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("110", {locale: "zh-TW"});
        var expected = "110 ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWIEIDD: function(test) {
        var formatted;
        var parsed = new PhoneNumber("+35311234567", {locale: "zh-TW"});
        var expected = "+353 1 123 4567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial0: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0", {locale:"zh-TW"});
        
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03", {locale:"zh-TW"});
        var expected = "(03) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039", {locale:"zh-TW"});
        var expected = "(039) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396", {locale:"zh-TW"});
        var expected = "(039) 6";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961", {locale: "zh-TW"});
        var expected = "(039) 61";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612", {locale: "zh-TW"});
        var expected = "(039) 612";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123", {locale: "zh-TW"});
        var expected = "(039) 612-3";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234", {locale: "zh-TW"});
        var expected = "(039) 612-34";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345", {locale: "zh-TW"});
        var expected = "(039) 612-345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123456", {locale: "zh-TW"});
        var expected = "(039) 612-3456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234567", {locale: "zh-TW"});
        var expected = "(039) 6123-4567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345678", {locale: "zh-TW"});
        var expected = "039612345678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03", {locale: "zh-TW"});
        var expected = "(03) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039", {locale: "zh-TW"});
        var expected = "(039) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396", {locale: "zh-TW"});
        var expected = "(039) 6";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961", {locale: "zh-TW"});
            
        var expected = "(039) 61";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612", {locale: "zh-TW"});
        var expected = "(039) 612";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123", {locale: "zh-TW"});
        var expected = "(039) 612-3";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234", {locale: "zh-TW"});
        var expected = "(039) 612-34";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345", {locale: "zh-TW"});
        var expected = "(039) 612-345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123456", {locale: "zh-TW"});
        var expected = "(039) 612-3456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole10: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234567", {locale: "zh-TW"});
        var expected = "(039) 6123-4567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0Whole11: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345678", {locale: "zh-TW"});
        var expected = "039612345678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03", {locale: "zh-TW"});
        var expected = "03 ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039", {locale: "zh-TW"});
        var expected = "039 ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396", {locale: "zh-TW"});
        var expected = "039 6";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961", {locale: "zh-TW"});
        var expected = "039 61";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612", {locale: "zh-TW"});
        var expected = "039 612";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123", {locale: "zh-TW"});
        var expected = "039 612 3";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234", {locale: "zh-TW"});
        var expected = "039 612 34";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345", {locale: "zh-TW"});
        var expected = "039 612 345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123456", {locale: "zh-TW"});
        var expected = "039 612 3456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234567", {locale: "zh-TW"});
        var expected = "039 6123 4567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle1Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345678", {locale: "zh-TW"});
        var expected = "039612345678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "括號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03", {locale: "zh-TW"});
        var expected = "03-";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039", {locale: "zh-TW"});
        var expected = "039-";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396", {locale: "zh-TW"});
        var expected = "039-6";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961", {locale: "zh-TW"});
        var expected = "039-61";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612", {locale: "zh-TW"});
        var expected = "039-612";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123", {locale: "zh-TW"});
        var expected = "039-612-3";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234", {locale: "zh-TW"});
        var expected = "039-612-34";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345", {locale: "zh-TW"});
        var expected = "039-612-345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123456", {locale: "zh-TW"});
        var expected = "039-612-3456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234567", {locale: "zh-TW"});
        var expected = "039-6123-4567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle2Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345678", {locale: "zh-TW"});
        var expected = "039612345678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "破折號"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03", {locale: "zh-TW"});
        var expected = "(03) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039", {locale: "zh-TW"});
        var expected = "(039) ";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396", {locale: "zh-TW"});
        var expected = "(039) 6";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961", {locale: "zh-TW"});
        var expected = "(039) 61";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612", {locale: "zh-TW"});
        var expected = "(039) 612";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123", {locale: "zh-TW"});
        var expected = "(039) 6123";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234", {locale: "zh-TW"});
        var expected = "(039) 61234";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345", {locale: "zh-TW"});
        var expected = "(039) 612345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("0396123456", {locale: "zh-TW"});
        var expected = "(039) 6123456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber("03961234567", {locale: "zh-TW"});
        var expected = "(039) 61234567";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle3Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber("039612345678", {locale: "zh-TW"});
        var expected = "039612345678";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "沒有空格"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber("2", {locale: "zh-TW"});
        var expected = "2";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber("27", {locale: "zh-TW"});
        var expected = "27";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber("271", {locale: "zh-TW"});
        var expected = "271";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber("2712", {locale: "zh-TW"});
        var expected = "271-2";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber("27123", {locale: "zh-TW"});
        var expected = "271-23";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber("271234", {locale: "zh-TW"});
        var expected = "271-234";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber("2712345", {locale: "zh-TW"});
        var expected = "271-2345";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber("27123456", {locale: "zh-TW"});
        var expected = "2712-3456";
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatTWStyle0PartialLocal9: function(test) {
        var formatted;
        var parsed = new PhoneNumber("271234567", {locale: "zh-TW"});
        var expected = "271234567";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "zh-TW", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
    }
};