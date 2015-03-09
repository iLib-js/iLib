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
var fs = require("fs");

function testTSConstructorEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);
}

function testTSGetPathEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);
    
    assertEquals("stringsdb.json", ts.getPath());
}

function testTSConstructorFromFile() {
    var ts = new TranslationSet({
    	file: "./test/stringsdb.json"
    });
    assertNotUndefined(ts);
}

function testTSGetPathFile() {
    var ts = new TranslationSet({
    	file: "./test/stringsdb.json"
    });
    assertNotUndefined(ts);
    
    assertEquals("test/stringsdb.json", ts.getPath());
}

function testTSConstructorFromPath() {
    var ts = new TranslationSet({
    	path: "./test"
    });
    assertNotUndefined(ts);
}

function testTSGetPathFromPath() {
    var ts = new TranslationSet({
    	path: "./test"
    });
    assertNotUndefined(ts);
    
    assertEquals("test/stringsdb.json", ts.getPath());
}

function testTSConstructorFromFileRightContents() {
    var ts = new TranslationSet({
    	file: "./test/stringsdb.json"
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
	'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
	'<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n' +
	'<xliff version="1.2">\n' +
	'  <file datatype="javascript" source-language="en-US" target-language="de-DE">\n' +
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
	'</xliff>\n';

function testTSConstructorFromXliff() {
	var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
}

function testTSConstructorFromXliffRightContents() {
	var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    // util.print("tu is " + JSON.stringify(tu, undefined, 4) + "\n");
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
}

function testTSGetPathFromXliff() {
	var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    assertEquals("stringsdb.json", ts.getPath());
}

function testTSGetTranslationUnitEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    // should at least not crash
    var tu = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingKey() {
	var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit(undefined, "de-DE");
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingLocale() {
	var ts = new TranslationSet({
    	xliff: xliff
    });
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", undefined);
    assertUndefined(tu);
}

function testTSGetTranslationUnitMissingTU() {
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
    assertEquals("This string should be localized.", tu2.source);
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
    assertEquals("This string should be localized.", tu2.source);
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
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);
    
    tu2 = ts.getTranslationUnit("firstkey", "fr-FR");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("fr-FR", tu2.locale);
    assertEquals("Traduction de la première clé.", tu2.translation);
}

function testTSAddTranslationUnitOverwritePrevious() {
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
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);

    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized too.",
    	translation: "Übersetzung des ersten Schlüssel wiedermal.",
    	locale: "de-DE"
    });
    
    // overwrite
    ts.addTranslationUnit(tu);

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be localized too.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel wiedermal.", tu2.translation);
}

function testTSAddTranslationUnitNoOverwritePreviousWithUndefined() {
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
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);

    tu = undefined;
    
    // no overwrite
    ts.addTranslationUnit(tu);

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");

    assertNotUndefined(tu2);

    // should be same as before
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);
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

function testTSRemoveTranslationUnitReturnOldTU() {
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

    var tu2 = ts.removeTranslationUnit("firstkey", "de-DE");

    assertNotUndefined(tu2);
    
    assertEquals("firstkey", tu2.key);
    assertEquals("This string should be localized.", tu2.source);
    assertEquals("de-DE", tu2.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu2.translation);

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertUndefined(tu2);
}

function testTSRemoveTranslationUnitMissingKey() {
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

    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);

    tu2 = ts.removeTranslationUnit(undefined, "de-DE");
    assertUndefined(tu2);

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);
}

function testTSRemoveTranslationUnitMissingLocale() {
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

    var tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);

    tu2 = ts.removeTranslationUnit("firstkey", undefined);
    assertUndefined(tu2);

    tu2 = ts.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu2);
}

function testTSGetAllLocalesEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
    assertEquals(0, locales.length);
}

function testTSGetAllLocalesSourceTransUnitsOnly() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    var locales = ts.getAllLocales();
    assertNotUndefined(locales);
    assertEquals(0, locales.length);
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

function testTSGetAllTranslationUnitsEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var units = ts.getAllTranslationUnits();
    assertNotUndefined(units);
    assertEquals(0, units.length);
}

function testTSGetAllTranslationUnitsSourceTransUnit() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    var units = ts.getAllTranslationUnits();
    assertNotUndefined(units);
    assertEquals(1, units.length);
}

function testTSGetAllTranslationUnitsSourceTransUnitRightContents() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized."
    });
    
    ts.addTranslationUnit(tu);
    
    var units = ts.getAllTranslationUnits();
    assertNotUndefined(units);
    assertEquals(1, units.length);
    
    assertEquals("firstkey", units[0].key);
    assertEquals("This string should be localized.", units[0].source);
    assertUndefined(units[0].translation);
    assertUndefined(units[0].locale);
}

function testTSGetAllTranslationUnitsSingle() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    var units = ts.getAllTranslationUnits();
    assertNotUndefined(units);
    assertEquals(1, units.length);
    
    assertEquals("firstkey", units[0].key);
    assertEquals("This string should be localized.", units[0].source);
    assertEquals("Übersetzung des ersten Schlüssel.", units[0].translation);
    assertEquals("de-DE", units[0].locale);
}

function testTSGetAllTranslationUnitsSingleWithLocale() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be localized.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    var units = ts.getAllTranslationUnits("de-DE");
    assertNotUndefined(units);
    assertEquals(1, units.length);
    
    assertEquals("firstkey", units[0].key);
    assertEquals("This string should be localized.", units[0].source);
    assertEquals("Übersetzung des ersten Schlüssel.", units[0].translation);
    assertEquals("de-DE", units[0].locale);
}

function testTSGetAllTranslationUnitsMultiple() {
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

    var units = ts.getAllTranslationUnits();
    assertNotUndefined(units);
    assertEquals(2, units.length);
    
    assertEquals("firstkey", units[0].key);
    assertEquals("This string should be localized.", units[0].source);
    assertEquals("Übersetzung des ersten Schlüssel.", units[0].translation);
    assertEquals("de-DE", units[0].locale);

    assertEquals("firstkey", units[1].key);
    assertEquals("This string should be localized.", units[1].source);
    assertEquals("Traduction de la première clé.", units[1].translation);
    assertEquals("fr-FR", units[1].locale);
}

function testTSGetAllTranslationUnitsMultipleWithLocale() {
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

    var units = ts.getAllTranslationUnits("de-DE");
    assertNotUndefined(units);
    assertEquals(1, units.length);
    
    assertEquals("firstkey", units[0].key);
    assertEquals("This string should be localized.", units[0].source);
    assertEquals("Übersetzung des ersten Schlüssel.", units[0].translation);
    assertEquals("de-DE", units[0].locale);
}

function testTSMergeEmpty() {
    var ts1 = new TranslationSet();
    assertNotUndefined(ts1);

    var ts2 = new TranslationSet();
    assertNotUndefined(ts2);

    ts1.merge(ts2);
    
    var locales = ts1.getAllLocales();
    assertNotUndefined(locales);
    assertEquals(0, locales.length);
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
    
    assertNotUndefined(ts1.getAllLocales());
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

    //util.print("ts1 before merge is " + JSON.stringify(ts1, undefined, 4) + "\n");
    ts1.merge(ts2);
    //util.print("ts1 is " + JSON.stringify(ts1, undefined, 4) + "\n");
    
    tu = ts1.getTranslationUnit("firstkey", "de-DE");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be localized.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
    
    tu = ts1.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be localized.", tu.source);
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
    assertEquals("This string should be localized.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Übersetzung des ersten Schlüssel.", tu.translation);
    
    tu = ts1.getTranslationUnit("firstkey", "fr-FR");
    assertNotUndefined(tu);
    
    assertEquals("firstkey", tu.key);
    assertEquals("This string should be localized.", tu.source);
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
    assertEquals("This string should be localized.", tu.source);
    assertEquals("de-DE", tu.locale);
    assertEquals("Andere Übersetzung.", tu.translation);
}

function testTSSaveFileCreated() {
	assertFalse(fs.existsSync("./test/testfile.json"));
	
    var ts = new TranslationSet({
    	file: "./test/testfile.json"
    });
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
    
    ts.save();
    
    assertTrue(fs.existsSync("./test/testfile.json"));
    
    // clean up
    fs.unlinkSync("./test/testfile.json");
}

function testTSSaveRightContent() {
	assertFalse(fs.existsSync("./test/testfile.json"));
	
    var ts = new TranslationSet({
    	file: "./test/testfile.json"
    });
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
    
    ts.save();
    
    assertTrue(fs.existsSync("./test/testfile.json"));
    
    var json = fs.readFileSync("./test/testfile.json", "utf-8");
    var actual = JSON.parse(json);
    
    var expected = {
		"sourceLocale": "en-US",
		"db": {
			"de-DE": {
				"firstkey": {
					"source": "This string should be localized.",
					"translation": "Übersetzung des ersten Schlüssel."
				}
			},
			"fr-FR": {
				"firstkey": {
					"source": "This string should be localized.",
					"translation": "Traduction de la première clé.",
				}
			}
		}
	};
    
    assertObjectEquals(expected, actual);
    
    // clean up
    fs.unlinkSync("./test/testfile.json");
}

function testTSSaveEmpty() {
	assertFalse(fs.existsSync("./test/testfile.json"));
	
    var ts = new TranslationSet({
    	file: "./test/testfile.json"
    });
    assertNotUndefined(ts);

    ts.save();
    
    assertTrue(fs.existsSync("./test/testfile.json"));
    
    var json = fs.readFileSync("./test/testfile.json", "utf-8");
    var actual = JSON.parse(json);
    
    var expected = {
		"sourceLocale": "en-US",
		"db": {}
	};
    
    assertObjectEquals(expected, actual);
    
    // clean up
    fs.unlinkSync("./test/testfile.json");
}

function testTSToXliff() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	source: "This string should be extracted.",
    	translation: "Dieser String soll übersetzt werden.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);
    
    tu = new TranslationUnit({
    	key: "firstkey",
    	source: "This string should be extracted.",
    	translation: "Übersetzung des ersten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    tu = new TranslationUnit({
    	key: "secondkey",
    	source: "This string should be extracted.",
    	translation: "Übersetzung des zweiten Schlüssel.",
    	locale: "de-DE"
    });
    ts.addTranslationUnit(tu);

    // util.print("ts is now " + JSON.stringify(ts, undefined, 4) + "\n");
    assertEquals(xliff, ts.toXliff());
}

function testTSToXliffEmpty() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var expected =
    	'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    	'<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n' +
    	'<xliff version="1.2"/>\n';
    	
    assertEquals(expected, ts.toXliff());
}

function testTSToXliffSourceOnly() {
    var ts = new TranslationSet();
    assertNotUndefined(ts);

    var tu = new TranslationUnit({
    	source: "This string should be extracted."
    });
    ts.addTranslationUnit(tu);
    
    var expected =
    	'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    	'<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n' +
    	'<xliff version="1.2">\n' +
    	'  <file datatype="javascript" source-language="en-US">\n' +
    	'    <body>\n' +
    	'      <trans-unit>\n' +
    	'        <source>This string should be extracted.</source>\n' +
    	'      </trans-unit>\n' +
    	'    </body>\n' +
    	'  </file>\n' +
    	'</xliff>\n';
    	
    assertEquals(expected, ts.toXliff());
}
