/*
 * testcharset.js - test the charset info object
 *
 * Copyright © 2014-2015, JEDLSoft
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

var ilib = require("./../lib/ilib.js");
var Charset = require("./../lib/Charset.js");

function testCharsetConstructor() {
	var cs = new Charset();

	assertNotNull(cs);
}

function testCharsetConstructorCurrentLocale() {
	var cs = new Charset();

	assertNotNull(cs);
	
	// should be the charset of the current locale
	assertEquals("UTF-8", cs.getName());
}

function testCharsetGetStandardNameIdentity() {
	assertEquals("UTF-8", new Charset({name: "UTF-8"}).getName());
	assertEquals("KOI8-R", new Charset({name: "KOI8-R"}).getName());
}

function testCharsetGetStandardNameUndefined() {
	assertNotUndefined(new Charset({}));
}

function testCharsetGetStandardNameIdentityUnknown() {
	assertEquals("foobarfoo", new Charset({name: "foobarfoo"}).getName());
}

function testCharsetGetStandardNameUTF8() {
	assertEquals("UTF-8", new Charset({name: "UTF8"}).getName());
	assertEquals("UTF-8", new Charset({name: "UTF"}).getName());
}

function testCharsetGetStandardNameUTF8IgnoreCase() {
	assertEquals("UTF-8", new Charset({name: "utf-8"}).getName());
	assertEquals("UTF-8", new Charset({name: "utf8"}).getName());
	assertEquals("UTF-8", new Charset({name: "utf"}).getName());
}

function testCharsetGetStandardNameISOLatin1() {
	assertEquals("ISO-8859-1", new Charset({name: "Latin1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "Latin-1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO-8859-1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO_8859_1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO-Latin-1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISOLatin1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "iso-8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "iso-8859-1"}).getName());
}

function testCharsetGetStandardNameISOLatin1Defaults() {
	assertEquals("ISO-8859-1", new Charset({name: "8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO-8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO_8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "ISO88591"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "Latin"}).getName());
}

function testCharsetGetStandardNameISOLatin1IgnoreCase() {
	assertEquals("ISO-8859-1", new Charset({name: "latin1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "iso-latin-1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "isolatin1"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "iso-8859"}).getName());
	assertEquals("ISO-8859-1", new Charset({name: "iso-8859-1"}).getName());
}

function testCharsetGetStandardNameISOLatin15() {
	assertEquals("ISO-8859-15", new Charset({name: "latin9"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "Latin9"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "ISO-8859-15"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "iso-8859-15"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "ISO885915"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "ISO-Latin-9"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "iso-latin-9"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "ISOLatin9"}).getName());
	assertEquals("ISO-8859-15", new Charset({name: "isolatin9"}).getName());
}

function testCharsetGetStandardNameShiftJIS() {
	assertEquals("Shift_JIS", new Charset({name: "csShiftJIS"}).getName());
	assertEquals("Shift_JIS", new Charset({name: "mskanji"}).getName());
}

function testCharsetGetStandardNameEUCKR() {
	assertEquals("EUC-KR", new Charset({name: "cseuckr"}).getName());
	assertEquals("EUC-KR", new Charset({name: "euckr"}).getName());
}

function testCharsetGetOriginalName() {
	assertEquals("cseuckr", new Charset({name: "cseuckr"}).getOriginalName());
}

function testCharsetGetOriginalNameUnknown() {
	assertEquals("foobarfoo", new Charset({name: "foobarfoo"}).getOriginalName());
}

function testCharsetMinCharWidth1() {
	var cs = new Charset({name: "Latin1"});
	assertEquals(1, cs.getMinCharWidth());
}

function testCharsetMinCharWidth2() {
	var cs = new Charset({name: "UCS-2"});
	assertEquals(2, cs.getMinCharWidth());
}

function testCharsetMinCharWidthUTF16() {
	var cs = new Charset({name: "UTF-16"});
	assertEquals(2, cs.getMinCharWidth());
}

function testCharsetMinCharWidthMultibyte() {
	var cs = new Charset({name: "EUC-JP"});
	assertEquals(1, cs.getMinCharWidth());
}

function testCharsetMaxCharWidth1() {
	var cs = new Charset({name: "Latin1"});
	assertEquals(1, cs.getMaxCharWidth());
}

function testCharsetMaxCharWidth2() {
	var cs = new Charset({name: "UCS-2"});
	assertEquals(2, cs.getMaxCharWidth());
}

function testCharsetMaxCharWidthUTF16() {
	var cs = new Charset({name: "UTF-16"});
	assertEquals(2, cs.getMaxCharWidth());
}

function testCharsetMaxCharWidthMultibyte() {
	var cs = new Charset({name: "EUC-JP"});
	assertEquals(3, cs.getMaxCharWidth());
}

function testCharsetIsMultibyteTrue() {
	var cs = new Charset({name: "Shift_JIS"});
	assertTrue(cs.isMultibyte());
}

function testCharsetIsMultibyteFalse() {
	var cs = new Charset({name: "Latin1"});
	assertFalse(cs.isMultibyte());
}

function testCharsetGetScriptsJP() {
	var cs = new Charset({name: "Shift_JIS"});
	var expected = [
	    "Latn",
	    "Hrkt",
        "Hira",
        "Kana",
        "Jpan",
        "Hani"
	];
	assertArrayEqualsIgnoringOrder(expected, cs.getScripts());
}

function testCharsetGetScriptsEN() {
	var cs = new Charset({name: "ISO-Latin-15"});
	var expected = [
	    "Latn"
	];
	assertArrayEqualsIgnoringOrder(expected, cs.getScripts());
}

function testCharsetIsBigEndianUTF16() {
	var cs = new Charset({name: "UTF-16"});
	assertTrue(cs.isBigEndian());
}

function testCharsetIsBigEndianUTF16LE() {
	var cs = new Charset({name: "UTF-16LE"});
	assertFalse(cs.isBigEndian());
}
