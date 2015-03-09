/*
 * testtranslationunit.js - test the TranslationUnit class
 * 
 * Copyright © 2015, JEDLSoft
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

var common = require("../../../tools/cldr/common.js");
var TranslationUnit = require("../../../tools/cldr/translationunit.js");
var util = require("util");

function testTUConstructor() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(tu);
}

function testTUConstructorRightFields() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE",
    	dataType: "C++"
    });
    assertNotUndefined(tu);
    
    assertEquals("a", tu.key);
    assertEquals("b", tu.source);
    assertEquals("c", tu.translation);
    assertEquals("de-DE", tu.locale);
    assertEquals("C++", tu.dataType);
}

function testTUConstructorDefaults() {
    var tu = new TranslationUnit({
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(tu);
    
    assertEquals("b", tu.key);
    assertEquals("b", tu.source);
    assertEquals("c", tu.translation);
    assertEquals("de-DE", tu.locale);
    assertEquals("javascript", tu.dataType);
}

function testTUGetOccurancesEmpty() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(tu);
    
    var occurances = tu.getOccurances();
    assertNotUndefined(occurances);
    assertEquals(0, occurances.length);
}

function testTUAddOccuranceRightNumber() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(tu);
    
    var occurances = tu.getOccurances();
    assertNotUndefined(occurances);
    assertEquals(0, occurances.length);

    tu.addOccurance("foo/bar/foo.js", 23);
    
    occurances = tu.getOccurances();
    assertNotUndefined(occurances);
    assertEquals(1, occurances.length);
}

function testTUAddOccuranceRightContents() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(tu);
    
    var occurances = tu.getOccurances();
    assertNotUndefined(occurances);
    assertEquals(0, occurances.length);

    tu.addOccurance("foo/bar/foo.js", 23);
    
    occurances = tu.getOccurances();
    assertNotUndefined(occurances);
    assertEquals("foo/bar/foo.js", occurances[0].file);
    assertEquals(23, occurances[0].line);
}

function testTUAddOccuranceNoTranslationAndLocale() {
    var tu = new TranslationUnit({
    	key: "a",
    	source: "b"
    });
    assertNotUndefined(tu);

    assertEquals("a", tu.key);
    assertEquals("b", tu.source);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
    assertEquals("javascript", tu.dataType);
}

