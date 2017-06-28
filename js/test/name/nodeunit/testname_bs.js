/*
 * testname_bs.js - test the name object in Bulgarian
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

module.exports.testname_bs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_bs: function(test) {
        var parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "Derviš",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_bs: function(test) {
        var parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "Derviš",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_bs: function(test) {
        var parsed = new Name("Gospodin i Gospođica Sušić", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "Gospodin i Gospođica",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_bs: function(test) {
        var parsed = new Name("Derviš Sušić viši", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "viši",
            givenName: "Derviš",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_bs: function(test) {
        var parsed = new Name("predsjednik Sušić", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "predsjednik",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_bs: function(test) {
        var parsed = new Name("predsjednik Derviš Sušić", {locale: 'bs-BA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "predsjednik",
            givenName: "Derviš",
            familyName: "Sušić"  
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_bs: function(test) {
        var name = new Name({
            givenName: "Derviš",
            familyName: "Sušić"  
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_bs: function(test) {
        var name = new Name({
            givenName: "Derviš",
            familyName: "Sušić"  
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_bs: function(test) {
        var name = new Name({
            givenName: "Derviš",
            
            familyName: "Sušić"  ,
            suffix: "viši"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_bs: function(test) {
        var name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"  ,
            suffix: "viši"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gospodin Derviš Sušić viši";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_bs: function(test) {
        var name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"  
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_bs: function(test) {
        var name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"  
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_bs: function(test) {
        var name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"  
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gospodin Derviš Sušić";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_bs: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_bs: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_bs: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'bs-BA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};