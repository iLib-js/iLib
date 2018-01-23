/*
 * testname.js - test the name object
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

if (typeof(Name) === "undefined") {
    var Name = require("../../../lib/Name.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNameEmptyConstructor: function(test) {
        test.expect(1);
        var name = new Name();
        
        test.ok(typeof(name) !== "undefined");
        test.done();
    },
    
    testNameCopyConstructor: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "a",
            givenName: "b",
            middleName: "c",
            familyName: "d",
            suffix: "e",
            honorific: "x"
        });
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "a", givenName: "b", middleName: "c", familyName: "d", suffix: "e", honorific: "x"});
        test.done();
    },
    
    testNameENSimple: function(test) {
        test.expect(2);
        var name = new Name("John Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "John", familyName: "Doe" });
        test.done();
    },
    
    testNameENSlightlyComplex: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "John", middleName: "Jacob", familyName: "Doe" });
        test.done();
    },
    
    testNameENMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Winchester Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "John", middleName: "Jacob Winchester", familyName: "Doe" });
        test.done();
    },
    
    testNameENWithSuffix: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Winchester Doe Jr.");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "John", middleName: "Jacob Winchester", familyName: "Doe", suffix: "Jr." });
        test.done();
    },
    
    testNameENWithPrefix: function(test) {
        test.expect(2);
        var name = new Name("Mr. John Jacob Winchester Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "Mr.", givenName: "John", middleName: "Jacob Winchester", familyName: "Doe" });
        test.done();
    },
    
    testNameENFull: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Jacob Winchester Doe, Phd.");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "Dr.", givenName: "John", middleName: "Jacob Winchester", familyName: "Doe", suffix: ", Phd." });
        test.done();
    },
    
    testNameENPrefixFamily: function(test) {
        test.expect(2);
        var name = new Name("Dr. Winchester");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "Dr.", familyName: "Winchester" }); 
        test.done();
    },
    testNameENOneName: function(test) {
        test.expect(2);
        var name = new Name("Sting");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Sting" });
        test.done();
    },
    
    testNameENGetSortFamilyName: function(test) {
        test.expect(2);
        var name = new Name("Jason Smith");
        test.ok(typeof(name) !== "undefined");
        
        test.equal(name.getSortFamilyName(), "Smith");
        test.done();
    },
    
    
    testNameENGetSortFamilyNameWithAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Jason van der Muiden");
        test.ok(typeof(name) !== "undefined");
        
        test.equal(name.getSortFamilyName(), "van der Muiden");
        test.done();
    },
    
    
    testNameDESimple: function(test) {
        test.expect(2);
        var name = new Name("Josef Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Josef", familyName: "Herzheim" });
        test.done();
    },
    
    testNameDESlightlyComplex: function(test) {
        test.expect(2);
        var name = new Name("Josef Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Josef", middleName: "Jürgen", familyName: "Herzheim" });
        test.done();
    },
    
    testNameDEMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim" });
        test.done();
    },
    
    testNameDEWithSuffix: function(test) {
        test.expect(2);
        var name = new Name("Josef Hans Jürgen Herzheim III", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim", suffix: "III" });
        test.done();
    },
    
    testNameDEWithPrefix: function(test) {
        test.expect(2);
        var name = new Name("Herr Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "Herr", givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim" });
        test.done();
    },
    
    testNameDEWithMultiplePrefixes: function(test) {
        test.expect(2);
        var name = new Name("Herr Dr. Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "Herr Dr.", givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim" });
        test.done();
    },
    
    testNameDEWithAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Ludwig von Beethoven", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Ludwig", familyName: "von Beethoven" }); 
        test.done();
    },
    testNameDEGetSortFamilyName: function(test) {
        test.expect(2);
        var name = new Name("Ludwig von Beethoven", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.equal(name.getSortFamilyName(), "Beethoven, von");
        test.done();
    },
    
    testNameESSimple: function(test) {
        test.expect(2);
        var name = new Name("Juan Arroyo", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Juan", familyName: "Arroyo" });
        test.done();
    },
    
    testNameESMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos Arroyo", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Juan", familyName: "Carlos Arroyo" });
        test.done();
    },
    
    testNameESFull: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos Maria León Arroyo", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Juan", middleName: "Carlos Maria", familyName: "León Arroyo" });
        test.done();
    },
    
    testNameESAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Juan de los Reyes", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Juan", familyName: "de los Reyes" });
        test.done();
    },
    
    testNameESFullWithAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos de los Reyes de León", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "Juan", middleName: "Carlos", familyName: "de los Reyes de León" });
        test.done();
    },
    
    testNameZHSimple: function(test) {
        test.expect(2);
        var name = new Name("王志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "志成", familyName: "王" });
        test.done();
    },
    
    testNameZHCompoundFamily: function(test) {
        test.expect(2);
        var name = new Name("南宫志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "志成", familyName: "南宫" });
        test.done();
    },
    
    testNameZHPrefix: function(test) {
        test.expect(2);
        var name = new Name("老王志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "老", givenName: "志成", familyName: "王" });
        test.done();
    },
    
    testNameZHMarriedName: function(test) {
        test.expect(2);
        var name = new Name("王杨凭平", {locale: "zh-CN", compoundFamilyName: true});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { givenName: "凭平", familyName: "王杨" });
        test.done();
    },
    
    testNameZHHonorific: function(test) {
        test.expect(2);
        var name = new Name("堂哥胡锦涛", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(name, { prefix: "堂哥", givenName: "锦涛", familyName: "胡" });
        test.done();
    }
    
    
};