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
var TranslationUnit = require("../../../tools/cldr/translationunit.js");
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

var xliff = 
'<xliff version="1.2">\n' +
'  <file datatype="javascript" source-language="en-US" target-langauge="de-DE">\n' +
'    <body>\n' +
'      <trans-unit>\n' +
'        <source>This string should be extracted.</source>\n' +
'        <target>Dieser String soll übersetzt werden.</target>\n' +
'      </trans-unit>\n' +
'      <trans-unit>\n' +
'        <source key="firstkey">This string should be extracted.</source>\n' +
'        <target>Übersetzung des ersten Schlüssel.</target>\n' +
'      </trans-unit>\n' +
'      <trans-unit>\n' +
'        <source key="secondkey">This string should be extracted.</source>\n' +
'        <target>Übersetzung des zweiten Schlüssel.</target>\n' +
'      </trans-unit>\n' +
'    </body>\n' +
'  </file>\n' +
'</xliff>';

function testTSConstructorFromXliff() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
}

function testTSConstructorFromXliff() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
}

function testTSGetTranslationUnitEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    // should at least not crash
    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingKey() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit(undefined, "de-DE");
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingLocale() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", undefined);
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingTU() {
	var xliff = "";
    var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    // don't have a translation for this locale
    var tu = ts.getTranslationUnit("firstkey", "zu-ZA");
    assertUndefined(tu);
}

function testTSAddTranslationUnit() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    
    ts.addTranslationUnit(tu);
    
    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be extracted.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);
}

function testTSAddTranslationUnitMissingTranslationAndLocale1() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");

    assertUndefined(tu2);
}

function testTSAddTranslationUnitMissingTranslationAndLocale2() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    var tu2 = ts.getTranslationUnit("firstkey");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be extracted.", tu2.source);
    assertUndefined(tu2.locale);
    assertUndefined(tu2.translation);
}

function testTSAddTranslationUnitMultiple() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
    tu = ts.getTranslationUnit("firstkey", "fr-FR");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be extracted.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);
    
    tu2 = ts.getTranslationUnit("firstkey", "fr-FR");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be extracted.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Traduction de la première clé.", tu2.translation);
}

function testTSRemoveTranslationUnit() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
    tu = ts.getTranslationUnit("firstkey", "fr-FR");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);

    ts.removeTranslationUnit("firstkey", "de-DE");

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu2);
}

function testTSRemoveTranslationUnitOtherUnitsStillThere() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
    tu = ts.getTranslationUnit("firstkey", "fr-FR");
    assertUndefined(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);
    tu2 = ts.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu2);

    ts.removeTranslationUnit("firstkey", "de-DE");

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu2);
    tu2 = ts.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu2);
}

function testTSGetAllLocalesEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    assertUndefined(ts.getAllLocales());
}

function testTSGetAllLocalesSourceTransUnitsOnly() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    assertUndefined(ts.getAllLocales());
}

function testTSGetAllLocalesSingle() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
}

function testTSGetAllLocalesSingleRightContents() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
    
    assertEquals(1, locales.length);
    assertEquals("de-DE", locales[0]);
}

function testTSGetAllLocalesMultiple() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
    
    assertEquals(2, locales.length);
    assertEquals("de-DE", locales[0]);
    assertEquals("fr-FR", locales[1]);
}

function testTSGetAllLocalesMultipleSuperset() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "secondkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la seconde clé.",
    	locale: "fr-FR"
    });
    ts.addTranslationUnit(tu);

    // the two French units should only cause 1 copy of "fr-FR" in this array
    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
    
    assertEquals(2, locales.length);
    assertEquals("de-DE", locales[0]);
    assertEquals("fr-FR", locales[1]);
}

function testTSMergeEmpty() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    ts1.merge(ts2);
    
    assertUndefined(ts.getAllLocales());
}

function testTSMergeSomethingIntoEmpty() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts2.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts2.addTranslationUnit(tu);

    ts1.merge(ts2);
    
    assertNotUndefined(ts.getAllLocales());
}

function testTSMergeSomethingIntoEmptyRightContents() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts2.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts2.addTranslationUnit(tu);

    ts1.merge(ts2);
    
    tu = ts1.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
    
    tu = ts1.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("fr-FR", tu.locale);
    assertEquals("Traduction de la première clé.", tu.translation);
}

function testTSMergeNoConflicts() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts1.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Traduction de la première clé.",
    	locale: "fr-FR"
    });
    ts2.addTranslationUnit(tu);

    ts1.merge(ts2);
    
    tu = ts1.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
    
    tu = ts1.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("fr-FR", tu.locale);
    assertEquals("Traduction de la première clé.", tu.translation);
}

function testTSMergeOverwrite() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts1.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Andere Übersetzung.",
    	locale: "de-DE"
    });
    ts2.addTranslationUnit(tu);

    ts1.merge(ts2);
    
    tu = ts1.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Andere Übersetzung.", tu.translation);
}
