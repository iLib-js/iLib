/*
 * testname_ku_Arab.js - test the name object in Kurdish
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
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testname_ku_Arab = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ku_Arab: function(test) {
        test.expect(2);
        var parsed = new Name("جەلال تاڵەبانی", {locale: 'ku-Arab-IQ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "جەلال",
            familyName: "تاڵەبانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_ku_Arab: function(test) {
        test.expect(2);
        var parsed = new Name("بەڕێز و خاتوو تاڵەبانی", {locale: 'ku-Arab-IQ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            prefix: "بەڕێز و خاتوو",
            familyName: "تاڵەبانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_ku_Arab: function(test) {
        test.expect(2);
        var parsed = new Name("جەلال تاڵەبانی کوڕ", {locale: 'ku-Arab-IQ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "کوڕ",
            givenName: "جەلال",
            familyName: "تاڵەبانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    
    
    testParseEverything_ku_Arab: function(test) {
        test.expect(2);
        var parsed = new Name("بەڕێز جەلال تاڵەبانی", {locale: 'ku-Arab-IQ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "بەڕێز",
            givenName: "جەلال",
            familyName: "تاڵەبانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ku_Arab: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "جەلال",
            familyName: "تاڵەبانی"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ku-Arab-IQ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "جەلال تاڵەبانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ku_Arab: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "جەلال",
            familyName: "تاڵەبانی"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ku-Arab-IQ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "جەلال تاڵەبانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ku_Arab: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "جەلال",
            
            familyName: "تاڵەبانی",
            suffix: "کوڕ"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ku-Arab-IQ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "جەلال تاڵەبانی کوڕ";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
    
    
};