/*
 * testname_tr_TR.js - test the name object in Turkish
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
    var NameFmt = require("../../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_tr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("Kemal Sunal", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Kemal",
            familyName: "Sunal"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("Kemal Sunal kıdemli", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "kıdemli",
            givenName: "Kemal",
            familyName: "Sunal"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("Bay Sunal", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Bay",
            familyName: "Sunal"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("Bay ve Bayan Sunal", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Bay ve Bayan",
            familyName: "Sunal"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("Bay Kemal Sunal", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Bay",
            givenName: "Kemal",
            familyName: "Sunal"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefixAndSuffix_tr_TR: function(test) {
        test.expect(2);
        var parsed = new Name("belediye başkanı Kemal Sunal kıdemli", {locale: 'tr-TR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "belediye başkanı",
            givenName: "Kemal",
            familyName: "Sunal",
            suffix:"kıdemli"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Kemal",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Kemal",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Kemal",
            familyName: "Sunal",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Bay ve Bayan",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Bay ve Bayan Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Bakan",
            givenName: "Kemal",
            familyName: "Sunal",
            suffix: "kıdemli"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Bakan Kemal Sunal kıdemli";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Bakan",
            givenName: "Kemal",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Bakan",
            givenName: "Kemal",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_tr_TR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Bakan",
            givenName: "Kemal",
            familyName: "Sunal"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'tr-TR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Bakan Kemal Sunal";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};