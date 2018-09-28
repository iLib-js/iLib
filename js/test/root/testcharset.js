/*
 * testcharset.js - test the charset info object
 *
 * Copyright © 2014-2015, 2017-2018, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(Charset) === "undefined") {
    var Charset = require("../../lib/Charset.js");
}

module.exports.testcharset = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCharsetConstructor: function(test) {
        test.expect(1);
        var cs = new Charset();
    
        test.ok(cs !== null);
        test.done();
    },
    
    testCharsetConstructorCurrentLocale: function(test) {
        test.expect(2);
        var cs = new Charset();
    
        test.ok(cs !== null);
        
        // should be the charset of the current locale
        test.equal(cs.getName(), "UTF-8");
        test.done();
    },
    
    testCharsetGetStandardNameIdentity: function(test) {
        test.expect(2);
        test.equal(new Charset({name: "UTF-8"}).getName(), "UTF-8");
        test.equal(new Charset({name: "KOI8-R"}).getName(), "KOI8-R");
        test.done();
    },
    
    testCharsetGetStandardNameUndefined: function(test) {
        test.expect(1);
        test.ok(typeof(new Charset({})) !== "undefined");
        test.done();
    },
    
    testCharsetGetStandardNameIdentityUnknown: function(test) {
        test.expect(1);
        test.equal(new Charset({name: "foobarfoo"}).getName(), "foobarfoo");
        test.done();
    },
    
    testCharsetGetStandardNameUTF8: function(test) {
        test.expect(2);
        test.equal(new Charset({name: "UTF8"}).getName(), "UTF-8");
        test.equal(new Charset({name: "UTF"}).getName(), "UTF-8");
        test.done();
    },
    
    testCharsetGetStandardNameUTF8IgnoreCase: function(test) {
        test.expect(3);
        test.equal(new Charset({name: "utf-8"}).getName(), "UTF-8");
        test.equal(new Charset({name: "utf8"}).getName(), "UTF-8");
        test.equal(new Charset({name: "utf"}).getName(), "UTF-8");
        test.done();
    },
    
    testCharsetGetStandardNameISOLatin1: function(test) {
        test.expect(8);
        test.equal(new Charset({name: "Latin1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "Latin-1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO-8859-1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO_8859_1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO-Latin-1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISOLatin1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "iso-8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "iso-8859-1"}).getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharsetGetStandardNameISOLatin1Defaults: function(test) {
        test.expect(6);
        test.equal(new Charset({name: "8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO-8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO_8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "ISO88591"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "Latin"}).getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharsetGetStandardNameISOLatin1IgnoreCase: function(test) {
        test.expect(5);
        test.equal(new Charset({name: "latin1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "iso-latin-1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "isolatin1"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "iso-8859"}).getName(), "ISO-8859-1");
        test.equal(new Charset({name: "iso-8859-1"}).getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharsetGetStandardNameISOLatin15: function(test) {
        test.expect(9);
        test.equal(new Charset({name: "latin9"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "Latin9"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "ISO-8859-15"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "iso-8859-15"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "ISO885915"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "ISO-Latin-9"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "iso-latin-9"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "ISOLatin9"}).getName(), "ISO-8859-15");
        test.equal(new Charset({name: "isolatin9"}).getName(), "ISO-8859-15");
        test.done();
    },
    
    testCharsetGetStandardNameShiftJIS: function(test) {
        test.expect(2);
        test.equal(new Charset({name: "csShiftJIS"}).getName(), "Shift_JIS");
        test.equal(new Charset({name: "mskanji"}).getName(), "Shift_JIS");
        test.done();
    },
    
    testCharsetGetStandardNameEUCKR: function(test) {
        test.expect(2);
        test.equal(new Charset({name: "cseuckr"}).getName(), "EUC-KR");
        test.equal(new Charset({name: "euckr"}).getName(), "EUC-KR");
        test.done();
    },
    
    testCharsetGetOriginalName: function(test) {
        test.expect(1);
        test.equal(new Charset({name: "cseuckr"}).getOriginalName(), "cseuckr");
        test.done();
    },
    
    testCharsetGetOriginalNameUnknown: function(test) {
        test.expect(1);
        test.equal(new Charset({name: "foobarfoo"}).getOriginalName(), "foobarfoo");
        test.done();
    },
    
    testCharsetMinCharWidth1: function(test) {
        test.expect(1);
        var cs = new Charset({name: "Latin1"});
        test.equal(cs.getMinCharWidth(), 1);
        test.done();
    },
    
    testCharsetMinCharWidth2: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UCS-2"});
        test.equal(cs.getMinCharWidth(), 2);
        test.done();
    },
    
    testCharsetMinCharWidthUTF16: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UTF-16"});
        test.equal(cs.getMinCharWidth(), 2);
        test.done();
    },
    
    testCharsetMinCharWidthMultibyte: function(test) {
        test.expect(1);
        var cs = new Charset({name: "EUC-JP"});
        test.equal(cs.getMinCharWidth(), 1);
        test.done();
    },
    
    testCharsetMaxCharWidth1: function(test) {
        test.expect(1);
        var cs = new Charset({name: "Latin1"});
        test.equal(cs.getMaxCharWidth(), 1);
        test.done();
    },
    
    testCharsetMaxCharWidth2: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UCS-2"});
        test.equal(cs.getMaxCharWidth(), 2);
        test.done();
    },
    
    testCharsetMaxCharWidthUTF16: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UTF-16"});
        test.equal(cs.getMaxCharWidth(), 2);
        test.done();
    },
    
    testCharsetMaxCharWidthMultibyte: function(test) {
        test.expect(1);
        var cs = new Charset({name: "EUC-JP"});
        test.equal(cs.getMaxCharWidth(), 3);
        test.done();
    },
    
    testCharsetIsMultibyteTrue: function(test) {
        test.expect(1);
        var cs = new Charset({name: "Shift_JIS"});
        test.ok(cs.isMultibyte());
        test.done();
    },
    
    testCharsetIsMultibyteFalse: function(test) {
        test.expect(1);
        var cs = new Charset({name: "Latin1"});
        test.ok(!cs.isMultibyte());
        test.done();
    },
    
    testCharsetGetScriptsJP: function(test) {
        test.expect(1);
        var cs = new Charset({name: "Shift_JIS"});
        var expected = [
            "Latn",
            "Hrkt",
            "Hira",
            "Kana",
            "Jpan",
            "Hani"
        ];
        test.equalIgnoringOrder(cs.getScripts(), expected);
        test.done();
    },
    
    testCharsetGetScriptsEN: function(test) {
        test.expect(1);
        var cs = new Charset({name: "ISO-Latin-15"});
        var expected = [
            "Latn"
        ];
        test.equalIgnoringOrder(cs.getScripts(), expected);
        test.done();
    },
    
    testCharsetIsBigEndianUTF16: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UTF-16"});
        test.ok(cs.isBigEndian());
        test.done();
    },
    
    testCharsetIsBigEndianUTF16LE: function(test) {
        test.expect(1);
        var cs = new Charset({name: "UTF-16LE"});
        test.ok(!cs.isBigEndian());
        test.done();
    }
    
};