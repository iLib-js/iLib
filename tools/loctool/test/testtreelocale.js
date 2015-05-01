/*
 * testtreelocale.js - test the TreeLocale class
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

var common = require("../../tools/cldr/common.js");
var TreeLocale = require("../../tools/loctool/treelocale.js");
var util = require("util");
var fs = require("fs");

function testTLConstructorEmpty() {
    var tl = new TreeLocale();
    assertNotUndefined(tl);
}

function testTLConstructorEmptyDefault() {
    var tl = new TreeLocale();
    assertNotUndefined(tl);
    
    assertEquals("en-US", tl.getSpec());
}

function testTLConstructorWithLocale() {
    var tl = new TreeLocale("de-DE");
    assertNotUndefined(tl);
    
    assertEquals("de-DE", tl.getSpec());
}

function testTLGetParentGerman1() {
    var tl = new TreeLocale("de");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentGerman2() {
    var tl = new TreeLocale("de-DE");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentGerman3() {
    var tl = new TreeLocale("de-Latn-DE");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentGerman4() {
    var tl = new TreeLocale("de-AT");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("de-Latn-DE", parent.getSpec());
}

function testTLGetParentUnknown() {
    var tl = new TreeLocale("xx-Xxxx-XX");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentNonEnglish1() {
    var tl = new TreeLocale("fr-CA");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("fr-Latn-FR", parent.getSpec());
}

function testTLGetParentNonEnglish2() {
    var tl = new TreeLocale("fr-Latn-CA");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("fr-Latn-FR", parent.getSpec());
}

function testTLGetParentNonEnglish3() {
    var tl = new TreeLocale("fr-Latn-FR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentNonEnglish4() {
    var tl = new TreeLocale("fr-FR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentNonEnglish4() {
    var tl = new TreeLocale("fr");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentEnglishBritish1() {
    var tl = new TreeLocale("en-AU");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-GB", parent.getSpec());
}

function testTLGetParentEnglishBritish2() {
    var tl = new TreeLocale("en-NZ");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-GB", parent.getSpec());
}

function testTLGetParentEnglishBritish3() {
    var tl = new TreeLocale("en-IE");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-GB", parent.getSpec());
}

function testTLGetParentUSEnglish0() {
    var tl = new TreeLocale("zh-Hans-CN");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentUSEnglish1() {
    var tl = new TreeLocale("ko-KR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentUSEnglish2() {
    var tl = new TreeLocale("en-GB");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentUSEnglish4() {
    var tl = new TreeLocale("en-LR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}

function testTLGetParentWithScript1() {
    var tl = new TreeLocale("zh-Hant-HK");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("zh-Hant-TW", parent.getSpec());
}

function testTLGetParentWithScript2() {
    var tl = new TreeLocale("zh-Hant-TW");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("zh-Hans-CN", parent.getSpec());
}

function testTLGetParentWithScript4() {
    var tl = new TreeLocale("uz-Arab-UZ");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("uz-Cyrl-UZ", parent.getSpec());
}

function testTLGetParentWithScript5() {
    var tl = new TreeLocale("uz-Cyrl-UZ");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-Latn-US", parent.getSpec());
}


function testTLIsRootFalse1() {
    var tl = new TreeLocale("fr-CA");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse2() {
    var tl = new TreeLocale("fr-FR");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse3() {
    var tl = new TreeLocale("en-GB");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse4() {
    var tl = new TreeLocale("fr-Latn-FR");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse5() {
    var tl = new TreeLocale("fr");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse6() {
    var tl = new TreeLocale("en-Latn-GB");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse7() {
    var tl = new TreeLocale("en-GB");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootFalse8() {
    var tl = new TreeLocale("en-AU");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}

function testTLIsRootTrue0() {
    var tl = new TreeLocale("en");
    assertNotUndefined(tl);
    
    assertTrue(tl.isRoot());
}

function testTLIsRootTrue1() {
    var tl = new TreeLocale("en-US");
    assertNotUndefined(tl);
    
    assertTrue(tl.isRoot());
}

function testTLIsRootTrue2() {
    var tl = new TreeLocale("en-Latn-US");
    assertNotUndefined(tl);
    
    assertTrue(tl.isRoot());
}
