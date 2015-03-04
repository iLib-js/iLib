/*
 * testtranslationset.js - test the TranslationSet class
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
var TranslationSet = require("../../../tools/cldr/translationset.js");
var util = require("util");

function testTSConstructorEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);
}

function testTSConstructorFromFile() {
    var ts = new TranslationSet({
    	file: "test/teststringsdb.json"
    });
    assertNotUndefined(ts);
}

/*
function testTSConstructorFromFileRightContents() {
    var ts = new TranslationSet({
    	file: "test/teststringsdb.json"
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
}

function testTSConstructorFromXliff() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
}

function testTSGetOccurancesEmpty() {
    var ts = new TranslationSet({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(ts);
}

function testTSAddOccuranceRightNumber() {
    var ts = new TranslationSet({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(ts);
}

function testTSAddOccuranceRightContents() {
    var ts = new TranslationSet({
    	key: "a",
    	source: "b",
    	translation: "c",
    	locale: "de-DE"
    });
    assertNotUndefined(ts);
}
*/