/*
 * testlistfmt_pa.js - test the list formatter object
 *
 * Copyright © 2017, 2020 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(ListFmt) === "undefined") {
    var ListFmt = require("../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_pa = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // pa-Guru-IN
    
    testListFmtpaGuruINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ"]), "ਇੱਕ");
        test.done();
    },
    
    testListFmtpaGuruINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ"]), "ਇੱਕ ਅਤੇ ਦੋ");
        test.done();
    },
    
    testListFmtpaGuruINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ", "ਤਿੰਨ"]), "ਇੱਕ, ਦੋ ਅਤੇ ਤਿੰਨ");
        test.done();
    },
    
    testListFmtpaGuruINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ", "ਤਿੰਨ", "ਚਾਰ"]), "ਇੱਕ, ਦੋ, ਤਿੰਨ ਅਤੇ ਚਾਰ");
        test.done();
    },
    testListFmtUnitStylepaGuruINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ"]), "ਇੱਕ");
        test.done();
    },
    
    testListFmtUnitStylepaGuruINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ"]), "ਇੱਕ, ਦੋ");
        test.done();
    },
    
    testListFmtUnitStylepaGuruINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ", "ਤਿੰਨ"]), "ਇੱਕ, ਦੋ, ਤਿੰਨ");
        test.done();
    },
    
    testListFmtUnitStylepaGuruINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Guru-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ਇੱਕ", "ਦੋ", "ਤਿੰਨ", "ਚਾਰ"]), "ਇੱਕ, ਦੋ, ਤਿੰਨ, ਚਾਰ");
        test.done();
    },

    //pa-Arab-PK
    testListFmtpaArabPKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtpaArabPKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد, اثنان");
        test.done();
    },
    
    testListFmtpaArabPKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد, اثنان, ثلاثة");
        test.done();
    },
    
    testListFmtpaArabPKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد, اثنان, ثلاثة, أربعة");
        test.done();
    },

    testListFmtUnitStylepaArabPKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylepaArabPKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد, اثنان");
        test.done();
    },
    
    testListFmtUnitStylepaArabPKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد, اثنان, ثلاثة");
        test.done();
    },
    
    testListFmtUnitStylepaArabPKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pa-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد, اثنان, ثلاثة, أربعة");
        test.done();
    }
};
