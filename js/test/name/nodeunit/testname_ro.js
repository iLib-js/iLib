/*
 * testname_ro_RO.js - test the name object in Romanian
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * unless required by applicable law or agreed to in writing, software
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

module.exports.testname_ro = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Sebastian Stan", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Sebastian",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSimpleNameWithMiddleName_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Alexandra Maria Lara", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Alexandra",
            middleName: "Maria",
            familyName: "Lara"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Sebastian Stan doctorand", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "doctorand",
            givenName: "Sebastian",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Dl. Stan", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dl.",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Dl. și D-na. Stan", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dl. și D-na.",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Dl. Sebastian Stan", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dl.",
            givenName: "Sebastian",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefixAndSuffix_ro_RO: function(test) {
        test.expect(2);
        var parsed = new Name("Vice-presedinte Sebastian Stan retras", {locale: 'ro-RO'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Vice-presedinte",
            givenName: "Sebastian",
            familyName: "Stan",
            suffix:"retras"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Sebastian",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Sebastian",
            
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Sebastian",
            
            familyName: "Stan",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    
    testFormatSurname_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dl. i D-na.",
            
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dl. i D-na. Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Administrator",
            givenName: "Sebastian",
            
            familyName: "Stan",
            suffix: "doctorand"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Administrator Sebastian Stan doctorand";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Administrator",
            givenName: "Sebastian",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Administrator",
            givenName: "Sebastian",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_ro_RO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Administrator",
            givenName: "Sebastian",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'ro-RO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Administrator Sebastian Stan";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};