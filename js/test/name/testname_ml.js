/*
 * testname_ml_IN.js - test the name object in Malalyam
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(NameFmt) === "undefined") {
    var NameFmt = require("../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testname_ml = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ml_IN: function(test) {
        test.expect(2);
        var parsed = new Name("മോഹന ലള", {locale: 'ml-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "മോഹന",
            familyName: "ലള"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_ml_IN: function(test) {
        test.expect(2);
        var parsed = new Name("മോഹന ലള ജൂനിയര്‍", {locale: 'ml-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "ജൂനിയര്‍",
            givenName: "മോഹന",
            familyName: "ലള"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_ml_IN: function(test) {
        test.expect(2);
        var parsed = new Name("മിസ്റ്റര്‍ ലള", {locale: 'ml-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "മിസ്റ്റര്‍",
            familyName: "ലള"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_ml_IN: function(test) {
        test.expect(2);
        var parsed = new Name("മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം ലള", {locale: 'ml-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം",
            familyName: "ലള"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_ml_IN: function(test) {
        test.expect(2);
        var parsed = new Name("മിസ്റ്റര്‍ മോഹന ലള", {locale: 'ml-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "മിസ്റ്റര്‍",
            givenName: "മോഹന",
            familyName: "ലള"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ഡോക്ടര്‍",
            givenName: "മോഹന",
            familyName: "ലള",
            suffix: "ജൂനിയര്‍"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ഡോക്ടര്‍ മോഹന ലള ജൂനിയര്‍";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ഡോക്ടര്‍",
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ഡോക്ടര്‍",
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_ml_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ഡോക്ടര്‍",
            givenName: "മോഹന",
            familyName: "ലള"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'ml-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ഡോക്ടര്‍ മോഹന ലള";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
