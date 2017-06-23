/*
 * testname_it_IT.js - test the name object in Italian
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

module.exports.testname_it = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_it_IT: function(test) {
        var parsed = new Name("Leonardo DiCaprio", {locale: 'it-IT'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Leonardo",
            familyName: "DiCaprio"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_it_IT: function(test) {
        var parsed = new Name("Leonardo DiCaprio", {locale: 'it-IT'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Leonardo",
            familyName: "DiCaprio"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_it_IT: function(test) {
        var parsed = new Name("ingegnere. DiCaprio", {locale: 'it-IT'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ingegnere.",
            familyName: "DiCaprio"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_it_IT: function(test) {
        var parsed = new Name("ingegnere Leonardo DiCaprio", {locale: 'it-IT'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ingegnere",
            givenName: "Leonardo",
            familyName: "DiCaprio"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_it_IT: function(test) {
        var name = new Name({
            givenName: "Leonardo",
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_it_IT: function(test) {
        var name = new Name({
            givenName: "Leonardo",
            
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_it_IT: function(test) {
        var name = new Name({
            givenName: "Leonardo",
            
            familyName: "DiCaprio",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_it_IT: function(test) {
        var name = new Name({
            prefix: "dottore",
            givenName: "Leonardo",
            
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "dottore Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_it_IT: function(test) {
        var name = new Name({
            prefix: "dottore",
            givenName: "Leonardo",
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_it_IT: function(test) {
        var name = new Name({
            prefix: "dottore",
            givenName: "Leonardo",
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_it_IT: function(test) {
        var name = new Name({
            prefix: "dottore",
            givenName: "Leonardo",
            familyName: "DiCaprio"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'it-IT'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "dottore Leonardo DiCaprio";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};