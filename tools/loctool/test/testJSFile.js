/*
 * testJSFile.js - test the JSFile class
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

var util = require("util");
var fs = require("fs");

var common = require("../../tools/cldr/common.js");
var TranslationSet = require("../../tools/loctool/translationset.js");
var TranslationUnit = require("../../tools/loctool/translationunit.js");
var JSFile = require("../../tools/loctool/JSFile.js");

function testJSFileConstructorWithOptions() {
    var jsf = new JSFile({
    	filename: "test/testfiles/dollarl.js"
    });
    assertNotUndefined(jsf);
}

function testJSFileConstructorMissingFile() {
	var jsf;
	try {
	    jsf = new JSFile({
	    	filename: "test/testfiles/missing.js"
	    });
	    assertTrue(false);
	} catch (e) {
		assertUndefined(jsf);
	}
}

function testJSFileScanDollarL() {
    var jsf = new JSFile({
    	filename: "test/testfiles/dollarl.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
}

function testJSFileScanGetStringRightContents() {
    var jsf = new JSFile({
    	filename: "test/testfiles/getstring.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This string should be extracted.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("This string should be extracted.", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);

    tu = ts.getTranslationUnit("This is a new string.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This is a new string.", tu.source);
    assertEquals("This is a new string.", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
}

function testJSFileScanDollarLRightContents() {
    var jsf = new JSFile({
    	filename: "test/testfiles/dollarl.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This string should be extracted.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("This string should be extracted.", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
    
    tu = ts.getTranslationUnit("This string should be extracted too.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string should be extracted too.", tu.source);
    assertEquals("This string should be extracted too.", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
}

function testJSFileScanGetStringWithKeyContents() {
    var jsf = new JSFile({
    	filename: "test/testfiles/getstringwithkey.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("firstkey", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("firstkey", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
    
    tu = ts.getTranslationUnit("secondkey", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string should be extracted.", tu.source);
    assertEquals("secondkey", tu.key);
    assertUndefined(tu.translation);
    assertUndefined(tu.locale);
}

function testJSFileScanIgnoreSlashDotComments() {
    var jsf = new JSFile({
    	filename: "test/testfiles/ignoreslashdot.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This string should not be extracted.", "-");
    assertUndefined(tu);

    tu = ts.getTranslationUnit("This string should not be extracted either.", "-");
    assertUndefined(tu);

    tu = ts.getTranslationUnit("This string should be extracted.", "-");
    assertNotUndefined(tu);
}

function testJSFileScanIgnoreSlashSlashComments() {
    var jsf = new JSFile({
    	filename: "test/testfiles/ignoreslashslash.js"
    });
    assertNotUndefined("-1", jsf);
    
    var ts = jsf.scan();
    assertNotUndefined("0", ts);
    
    var tu = ts.getTranslationUnit("This string should not be extracted.", "-");
    assertUndefined("1", tu);

    tu = ts.getTranslationUnit("This string should not be extracted either.", "-");
    assertUndefined("2", tu);

    tu = ts.getTranslationUnit("This string should be extracted.", "-");
    assertNotUndefined("3", tu);
    
    tu = ts.getTranslationUnit("But this string should not.", "-");
    assertUndefined("4", tu);
}

function testJSFileScanExtractSlashDotTranslatorCommentLineBefore() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 1 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 1 with slash dot translator's comment.", tu.source);
    assertEquals("String 1 with slash dot translator's comment.", tu.key);
    assertEquals("This is a slash dot translator's comment.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentMultiLineBefore() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 2 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 2 with slash dot translator's comment.", tu.source);
    assertEquals("String 2 with slash dot translator's comment.", tu.key);
    assertEquals("This is a multiline slash dot translator's comment with the return characters removed.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentMultiLineWithStars() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 3 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 3 with slash dot translator's comment.", tu.source);
    assertEquals("String 3 with slash dot translator's comment.", tu.key);
    assertEquals("This is a slash dot translator's comment with stars at the beginning of the lines.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentSameLine() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 4 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 4 with slash dot translator's comment.", tu.source);
    assertEquals("String 4 with slash dot translator's comment.", tu.key);
    assertEquals("Translator's comment on the same line.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentSlashDoubleDot() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 5 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 5 with slash dot translator's comment.", tu.source);
    assertEquals("String 5 with slash dot translator's comment.", tu.key);
    assertEquals("This is a slash dot translator's comment with a slash double dot.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentLastOneWins() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 6 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 6 with slash dot translator's comment.", tu.source);
    assertEquals("String 6 with slash dot translator's comment.", tu.key);
    assertEquals("This one appears on the same line.", tu.comment);
}

function testJSFileScanExtractSlashDotTranslatorCommentNoComment() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashdotcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("String 7 with slash dot translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("String 7 with slash dot translator's comment.", tu.source);
    assertEquals("String 7 with slash dot translator's comment.", tu.key);
    assertUndefined(tu.comment);
}

function testJSFileScanExtractSlashSlashTranslatorCommentSameLine() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashslashcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This is string 1 with a slash slash translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This is string 1 with a slash slash translator's comment.", tu.source);
    assertEquals("This is string 1 with a slash slash translator's comment.", tu.key);
    assertEquals("this translator's comment appears later on the same line", tu.comment);
}

function testJSFileScanExtractSlashSlashTranslatorCommentLineBefore() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashslashcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This is string 2 with a slash slash translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This is string 2 with a slash slash translator's comment.", tu.source);
    assertEquals("This is string 2 with a slash slash translator's comment.", tu.key);
    assertEquals("this translator's comment appears on the line before", tu.comment);
}

function testJSFileScanExtractSlashSlashTranslatorCommentNoSpace() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashslashcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This is string 3 with a slash slash translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This is string 3 with a slash slash translator's comment.", tu.source);
    assertEquals("This is string 3 with a slash slash translator's comment.", tu.key);
    assertEquals("this translator's comment appears on the line before with no space after the slashes", tu.comment);
}

function testJSFileScanExtractSlashSlashTranslatorCommentOverride() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashslashcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This is string 4 with a slash slash translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This is string 4 with a slash slash translator's comment.", tu.source);
    assertEquals("This is string 4 with a slash slash translator's comment.", tu.key);
    assertEquals("This one appears on the same line.", tu.comment);
}

function testJSFileScanExtractSlashSlashTranslatorNoComment() {
    var jsf = new JSFile({
    	filename: "test/testfiles/slashslashcomment.js"
    });
    assertNotUndefined(jsf);
    
    var ts = jsf.scan();
    assertNotUndefined(ts);
    
    var tu = ts.getTranslationUnit("This string has no translator's comment.", "-");
    assertNotUndefined(tu);
    
    assertEquals("This string has no translator's comment.", tu.source);
    assertEquals("This string has no translator's comment.", tu.key);
    assertUndefined(tu.comment);
}

