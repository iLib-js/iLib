/*
 * testname_hi_IN.js - test the name object in Hindi
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
    var NameFmt = require("../../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_hi = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_hi_IN: function(test) {
        test.expect(2);
        var parsed = new Name("आदित्य मित्तल", {locale: 'hi-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "आदित्य",
            familyName: "मित्तल"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_hi_IN: function(test) {
        test.expect(2);
        var parsed = new Name("आदित्य मित्तल जूनियर", {locale: 'hi-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "जूनियर",
            givenName: "आदित्य",
            familyName: "मित्तल"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_hi_IN: function(test) {
        test.expect(2);
        var parsed = new Name("राज्यपाल मित्तल", {locale: 'hi-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "राज्यपाल",
            familyName: "मित्तल"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_hi_IN: function(test) {
        test.expect(2);
        var parsed = new Name("श्री और श्रीमती मित्तल", {locale: 'hi-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "श्री और श्रीमती",
            familyName: "मित्तल"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_hi_IN: function(test) {
        test.expect(2);
        var parsed = new Name("श्री आदित्य मित्तल", {locale: 'hi-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "श्री",
            givenName: "आदित्य",
            familyName: "मित्तल"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "आदित्य",
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "आदित्य",
            
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "आदित्य",
            
            familyName: "मित्तल",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "श्री और श्रीमती",
            
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "श्री और श्रीमती मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "प्रोफेसर",
            givenName: "आदित्य",
            
            familyName: "मित्तल",
            suffix: " वरिष्ठ"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "प्रोफेसर आदित्य मित्तल वरिष्ठ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "प्रोफेसर",
            givenName: "आदित्य",
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "प्रोफेसर",
            givenName: "आदित्य",
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_hi_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "प्रोफेसर",
            givenName: "आदित्य",
            familyName: "मित्तल"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'hi-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "प्रोफेसर आदित्य मित्तल";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
