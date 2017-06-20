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
    var Name = require("../.././../lib/Name.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
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
            suffix: "e"
        });
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "b", middleName: "c", familyName: "d", suffix: "e" }, name, { prefix: "a");
        test.done();
    },
    
    testNameENSimple: function(test) {
        test.expect(2);
        var name = new Name("John Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "Doe" }, name, { givenName: "John");
        test.done();
    },
    
    testNameENSlightlyComplex: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Jacob", familyName: "Doe" }, name, { givenName: "John");
        test.done();
    },
    
    testNameENMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Winchester Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Jacob Winchester", familyName: "Doe" }, name, { givenName: "John");
        test.done();
    },
    
    testNameENWithSuffix: function(test) {
        test.expect(2);
        var name = new Name("John Jacob Winchester Doe Jr.");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Jacob Winchester", familyName: "Doe", suffix: "Jr." }, name, { givenName: "John");
        test.done();
    },
    
    testNameENWithPrefix: function(test) {
        test.expect(2);
        var name = new Name("Mr. John Jacob Winchester Doe");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "John", middleName: "Jacob Winchester", familyName: "Doe" }, name, { prefix: "Mr.");
        test.done();
    },
    
    testNameENFull: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Jacob Winchester Doe, Phd.");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "John", middleName: "Jacob Winchester", familyName: "Doe", suffix: ", Phd." }, name, { prefix: "Dr.");
        test.done();
    },
    
    testNameENPrefixFamily: function(test) {
        test.expect(2);
        var name = new Name("Dr. Winchester");
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "Winchester" }, name, { prefix: "Dr."); 
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
        
        test.contains(familyName: "Herzheim" }, name, { givenName: "Josef");
        test.done();
    },
    
    testNameDESlightlyComplex: function(test) {
        test.expect(2);
        var name = new Name("Josef Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Jürgen", familyName: "Herzheim" }, name, { givenName: "Josef");
        test.done();
    },
    
    testNameDEMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Hans Jürgen", familyName: "Herzheim" }, name, { givenName: "Josef");
        test.done();
    },
    
    testNameDEWithSuffix: function(test) {
        test.expect(2);
        var name = new Name("Josef Hans Jürgen Herzheim III", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Hans Jürgen", familyName: "Herzheim", suffix: "III" }, name, { givenName: "Josef");
        test.done();
    },
    
    testNameDEWithPrefix: function(test) {
        test.expect(2);
        var name = new Name("Herr Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim" }, name, { prefix: "Herr");
        test.done();
    },
    
    testNameDEWithMultiplePrefixes: function(test) {
        test.expect(2);
        var name = new Name("Herr Dr. Josef Hans Jürgen Herzheim", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "Josef", middleName: "Hans Jürgen", familyName: "Herzheim" }, name, { prefix: "Herr Dr.");
        test.done();
    },
    
    testNameDEWithAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Ludwig von Beethoven", {locale: "de-DE"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "von Beethoven" }, name, { givenName: "Ludwig"); 
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
        
        test.contains(familyName: "Arroyo" }, name, { givenName: "Juan");
        test.done();
    },
    
    testNameESMoreComplex: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos Arroyo", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "Carlos Arroyo" }, name, { givenName: "Juan");
        test.done();
    },
    
    testNameESFull: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos Maria León Arroyo", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Carlos Maria", familyName: "León Arroyo" }, name, { givenName: "Juan");
        test.done();
    },
    
    testNameESAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Juan de los Reyes", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "de los Reyes" }, name, { givenName: "Juan");
        test.done();
    },
    
    testNameESFullWithAuxillaries: function(test) {
        test.expect(2);
        var name = new Name("Juan Carlos de los Reyes de León", {locale: "es-ES"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(middleName: "Carlos", familyName: "de los Reyes de León" }, name, { givenName: "Juan");
        test.done();
    },
    
    testNameZHSimple: function(test) {
        test.expect(2);
        var name = new Name("王志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "王" }, name, { givenName: "志成");
        test.done();
    },
    
    testNameZHCompoundFamily: function(test) {
        test.expect(2);
        var name = new Name("南宫志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "南宫" }, name, { givenName: "志成");
        test.done();
    },
    
    testNameZHPrefix: function(test) {
        test.expect(2);
        var name = new Name("老王志成", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "志成", familyName: "王" }, name, { prefix: "老");
        test.done();
    },
    
    testNameZHMarriedName: function(test) {
        test.expect(2);
        var name = new Name("王杨凭平", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(familyName: "王杨" }, name, { givenName: "凭平");
        test.done();
    },
    
    testNameZHHonorific: function(test) {
        test.expect(2);
        var name = new Name("堂哥胡锦涛", {locale: "zh-CN"});
        test.ok(typeof(name) !== "undefined");
        
        test.contains(givenName: "锦涛", familyName: "胡" }, name, { prefix: "堂哥");
        test.done();
    }
    
    
};