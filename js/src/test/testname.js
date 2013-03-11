/*
 * testname.js - test the name object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testNameEmptyConstructor() {
    var name = new ilib.Name();
    
    assertNotUndefined(name);
}

function testNameCopyConstructor() {
    var name = new ilib.Name({
    	prefix: "a",
    	givenName: "b",
    	middleName: "c",
    	familyName: "d",
    	suffix: "e"
    });
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "a",
    	givenName: "b",
    	middleName: "c",
    	familyName: "d",
    	suffix: "e"
    }, name);
}

function testNameENSimple() {
    var name = new ilib.Name("John Doe");
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "John",
    	familyName: "Doe"
    }, name);
}

function testNameENSlightlyComplex() {
    var name = new ilib.Name("John Jacob Doe");
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "John",
    	middleName: "Jacob",
    	familyName: "Doe"
    }, name);
}

function testNameENMoreComplex() {
    var name = new ilib.Name("John Jacob Winchester Doe");
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "John",
    	middleName: "Jacob Winchester",
    	familyName: "Doe"
    }, name);
}

function testNameENWithSuffix() {
    var name = new ilib.Name("John Jacob Winchester Doe Jr.");
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "John",
    	middleName: "Jacob Winchester",
    	familyName: "Doe",
    	suffix: "Jr."
    }, name);
}

function testNameENWithPrefix() {
    var name = new ilib.Name("Mr. John Jacob Winchester Doe");
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "Mr.",
    	givenName: "John",
    	middleName: "Jacob Winchester",
    	familyName: "Doe"
    }, name);
}

function testNameENFull() {
    var name = new ilib.Name("Dr. John Jacob Winchester Doe, Phd.");
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "Dr.",
    	givenName: "John",
    	middleName: "Jacob Winchester",
    	familyName: "Doe",
    	suffix: ", Phd."
    }, name);
}

function testNameENPrefixFamily() {
    var name = new ilib.Name("Dr. Winchester");
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "Dr.",
    	familyName: "Winchester"
    }, name);
}

function testNameENOneName() {
    var name = new ilib.Name("Sting");
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Sting"
    }, name);
}

function testNameENGetSortFamilyName() {
    var name = new ilib.Name("Jason Smith");
    assertNotUndefined(name);
    
    assertEquals("Smith", name.getSortFamilyName());
}


function testNameENGetSortFamilyNameWithAuxillaries() {
    var name = new ilib.Name("Jason van der Muiden");
    assertNotUndefined(name);
    
    assertEquals("van der Muiden", name.getSortFamilyName());
}


function testNameDESimple() {
    var name = new ilib.Name("Josef Herzheim", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Josef",
    	familyName: "Herzheim"
    }, name);
}

function testNameDESlightlyComplex() {
    var name = new ilib.Name("Josef Jürgen Herzheim", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Josef",
    	middleName: "Jürgen",
    	familyName: "Herzheim"
    }, name);
}

function testNameDEMoreComplex() {
    var name = new ilib.Name("Josef Hans Jürgen Herzheim", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Josef",
    	middleName: "Hans Jürgen",
    	familyName: "Herzheim"
    }, name);
}

function testNameDEWithSuffix() {
    var name = new ilib.Name("Josef Hans Jürgen Herzheim III", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Josef",
    	middleName: "Hans Jürgen",
    	familyName: "Herzheim",
    	suffix: "III"
    }, name);
}

function testNameDEWithPrefix() {
    var name = new ilib.Name("Herr Josef Hans Jürgen Herzheim", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "Herr",
    	givenName: "Josef",
    	middleName: "Hans Jürgen",
    	familyName: "Herzheim"
    }, name);
}

function testNameDEWithMultiplePrefixes() {
    var name = new ilib.Name("Herr Dr. Josef Hans Jürgen Herzheim", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "Herr Dr.",
    	givenName: "Josef",
    	middleName: "Hans Jürgen",
    	familyName: "Herzheim"
    }, name);
}

function testNameDEWithAuxillaries() {
    var name = new ilib.Name("Ludwig von Beethoven", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Ludwig",
    	familyName: "von Beethoven"
    }, name);
}

function testNameDEGetSortFamilyName() {
    var name = new ilib.Name("Ludwig von Beethoven", {locale: "de-DE"});
    assertNotUndefined(name);
    
    assertEquals("Beethoven, von", name.getSortFamilyName());
}

function testNameESSimple() {
    var name = new ilib.Name("Juan Arroyo", {locale: "es-ES"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Juan",
    	familyName: "Arroyo"
    }, name);
}

function testNameESMoreComplex() {
    var name = new ilib.Name("Juan Carlos Arroyo", {locale: "es-ES"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Juan",
    	familyName: "Carlos Arroyo"
    }, name);
}

function testNameESFull() {
    var name = new ilib.Name("Juan Carlos Maria León Arroyo", {locale: "es-ES"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Juan",
    	middleName: "Carlos Maria",
    	familyName: "León Arroyo"
    }, name);
}

function testNameESAuxillaries() {
    var name = new ilib.Name("Juan de los Reyes", {locale: "es-ES"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Juan",
    	familyName: "de los Reyes"
    }, name);
}

function testNameESFullWithAuxillaries() {
    var name = new ilib.Name("Juan Carlos de los Reyes de León", {locale: "es-ES"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "Juan",
    	middleName: "Carlos",
    	familyName: "de los Reyes de León"
    }, name);
}

function testNameZHSimple() {
    var name = new ilib.Name("王志成", {locale: "zh-CN"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "志成",
    	familyName: "王"
    }, name);
}

function testNameZHCompoundFamily() {
    var name = new ilib.Name("南宫志成", {locale: "zh-CN"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "志成",
    	familyName: "南宫"
    }, name);
}

function testNameZHPrefix() {
    var name = new ilib.Name("老王志成", {locale: "zh-CN"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "老",
    	givenName: "志成",
    	familyName: "王"
    }, name);
}

function testNameZHMarriedName() {
    var name = new ilib.Name("王杨凭平", {locale: "zh-CN"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	givenName: "凭平",
    	familyName: "王杨"
    }, name);
}

function testNameZHHonorific() {
    var name = new ilib.Name("堂哥胡锦涛", {locale: "zh-CN"});
    assertNotUndefined(name);
    
    assertObjectContains({
    	prefix: "堂哥",
    	givenName: "锦涛",
    	familyName: "胡"
    }, name);
}

