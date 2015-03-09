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

var common = require("../../../tools/cldr/common.js");
var TreeLocale = require("../../../tools/cldr/treelocale.js");
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

function testTLGetParent() {
    var tl = new TreeLocale("de-DE");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-US", parent.getSpec());
}

function testTLGetParentUnknown() {
    var tl = new TreeLocale("ha-NG");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-US", parent.getSpec());
}

function testTLGetParentNonEnglish1() {
    var tl = new TreeLocale("fr-CA");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("fr-FR", parent.getSpec());
}

function testTLGetParentNonEnglish2() {
    var tl = new TreeLocale("fr-FR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-US", parent.getSpec());
}

function testTLGetParentEnglishBritish1() {
    var tl = new TreeLocale("en-AU");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-GB", parent.getSpec());
}

function testTLGetParentEnglishBritish2() {
    var tl = new TreeLocale("en-NZ");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-GB", parent.getSpec());
}

function testTLGetParentEnglishBritish3() {
    var tl = new TreeLocale("en-IE");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-GB", parent.getSpec());
}

function testTLGetParentEnglishBritish4() {
    var tl = new TreeLocale("zh-Hans-CN");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-GB", parent.getSpec());
}

function testTLGetParentUSEnglish1() {
    var tl = new TreeLocale("ko-KR");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-US", parent.getSpec());
}

function testTLGetParentUSEnglish2() {
    var tl = new TreeLocale("en-GB");
    assertNotUndefined(tl);
    
    var parent = tl.getParent();
    assertNotUndefined(parent);
    
    assertEquals("en-US", parent.getSpec());
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

function testTLIsRootTree() {
    var tl = new TreeLocale("en-US");
    assertNotUndefined(tl);
    
    assertFalse(tl.isRoot());
}
