/*
 * testnamefmt.js - test the name formatter object
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(NameFmt) === "undefined") {
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testnamefmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNameFmtConstructor: function(test) {
        test.expect(1);
        var fmt = new NameFmt();
        
        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    
    testNameFmtGetLocaleDefault: function(test) {
        test.expect(1);
        var fmt = new NameFmt();
        
        test.equal(fmt.getLocale().getSpec(), "en-US");
        test.done();
    },
    
    testNameFmtGetLocale: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            locale: "nl-NL"
        });
        
        test.equal(fmt.getLocale().getSpec(), "nl-NL");
        test.done();
    },
    
    testNameFmtGetBogus: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            locale: "ii-II"
        });
        
        test.equal(fmt.getLocale().getSpec(), "ii-II");
        test.done();
    },
    
    testNameFmtGetStyle: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            style: "medium"
        });
        
        test.equal(fmt.getStyle(), "medium");
        test.done();
    },
    
    testNameFmtGetStyleDefault: function(test) {
        test.expect(1);
        var fmt = new NameFmt();
        
        test.equal(fmt.getStyle(), "short");
        test.done();
    },
    
    testNameFmtGetStyleBogus: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            style: "humungous"
        });
        
        test.equal(fmt.getStyle(), "short");
        test.done();
    },
    
    testNameFmtENShort: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "short"
        });
        
        test.equal(fmt.format(name), "John Smith");
        test.done();
    },
    
    testNameFmtENMedium: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "medium"
        });
        
        test.equal(fmt.format(name), "John Kevin Smith");
        test.done();
    },
    
    testNameFmtENLong: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "long"
        });
        
        test.equal(fmt.format(name), "Mr. John Kevin Smith");
        test.done();
    },
    
    testNameFmtENFull: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "full"
        });
        
        test.equal(fmt.format(name), "Mr. John Kevin Smith Phd.");
        test.done();
    },
    
    testNameFmtENWithCommaInSuffix: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: ", Phd."
        });
        var fmt = new NameFmt({
            style: "full"
        });
        
        test.equal(fmt.format(name), "Mr. John Kevin Smith, Phd.");
        test.done();
    },
    
    testNameFmtENComponentsP: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "p"
        });
        
        test.equal(fmt.format(name), "Mr.");
        test.done();
    },
    
    testNameFmtENComponentsPG: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "pg"
        });
        
        test.equal(fmt.format(name), "Mr. John");
        test.done();
    },
    
    testNameFmtENComponentsPF: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "pf"
        });
        
        test.equal(fmt.format(name), "Mr. Smith");
        test.done();
    },
    
    testNameFmtENComponentsPGF: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "pgf"
        });
        
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    testNameFmtENComponentsPFS: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "pfs"
        });
        
        test.equal(fmt.format(name), "Mr. Smith Phd.");
        test.done();
    },
    
    testNameFmtENComponentsPGFScrambled: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            components: "gfp"
        });
        
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    testNameFmtENComponentsOverrideStyle: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "full",
            components: "gfp"
        });
        
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    
    testNameFmtDEShort: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEMedium: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtDELong: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtDEFull: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt MdB");
        test.done();
    },
    
    testNameFmtDEWithCommaInSuffix: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: ", MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt, MdB");
        test.done();
    },
    
    testNameFmtDEComponentsP: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "p",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr.");
        test.done();
    },
    
    testNameFmtDEComponentsPG: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "pg",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas");
        test.done();
    },
    
    testNameFmtDEComponentsPF: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "pf",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsPGF: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "pgf",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsPFS: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "pfs",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Schmidt MdB");
        test.done();
    },
    
    testNameFmtDEComponentsPGFScrambled: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            components: "gfp",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsOverrideStyle: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Hr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt",
            suffix: "MdB"
        }, {
            locale: "de-DE"
        });
        var fmt = new NameFmt({
            style: "full",
            components: "pgf",
            locale: "de-DE"
        });
        
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    }
    
};