/*
 * testname_te_IN.js - test the name object in Telgu
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

module.exports.testname_te = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_te_IN: function(test) {
        test.expect(2);
        var parsed = new Name("రామ్ తేజ", {locale: 'te-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "రామ్",
            familyName: "తేజ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_te_IN: function(test) {
        test.expect(2);
        var parsed = new Name("రామ్ తేజ సీనియర్", {locale: 'te-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "సీనియర్",
            givenName: "రామ్",
            familyName: "తేజ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_te_IN: function(test) {
        test.expect(2);
        var parsed = new Name("మిస్టర్ తేజ", {locale: 'te-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "మిస్టర్",
            familyName: "తేజ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_te_IN: function(test) {
        test.expect(2);
        var parsed = new Name("మిస్టర్ మరియు మిస్ తేజ", {locale: 'te-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "మిస్టర్ మరియు మిస్",
            familyName: "తేజ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_te_IN: function(test) {
        test.expect(2);
        var parsed = new Name("మిస్టర్ రామ్ తేజ", {locale: 'te-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "మిస్టర్",
            givenName: "రామ్",
            familyName: "తేజ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "మిస్టర్ మరియు మిస్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "మిస్టర్ మరియు మిస్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "డాక్టర్",
            givenName: "రామ్",
            familyName: "తేజ",
            suffix: "జూనియర్"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "డాక్టర్ రామ్ తేజ జూనియర్";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "డాక్టర్",
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "డాక్టర్",
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_te_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "డాక్టర్",
            givenName: "రామ్",
            familyName: "తేజ"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'te-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "డాక్టర్ రామ్ తేజ";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
