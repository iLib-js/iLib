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
        var fmt = new NameFmt();
        
        test.expect(1);
        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    
    testNameFmtGetLocaleDefault: function(test) {
        var fmt = new NameFmt();
        
        test.expect(1);
        test.equal(fmt.getLocale().getSpec(), "en-US");
        test.done();
    },
    
    testNameFmtGetLocale: function(test) {
        var fmt = new NameFmt({
            locale: "nl-NL"
        });
        
        test.expect(1);
        test.equal(fmt.getLocale().getSpec(), "nl-NL");
        test.done();
    },
    
    testNameFmtGetBogus: function(test) {
        var fmt = new NameFmt({
            locale: "ii-II"
        });
        
        test.expect(1);
        test.equal(fmt.getLocale().getSpec(), "ii-II");
        test.done();
    },
    
    testNameFmtGetStyle: function(test) {
        var fmt = new NameFmt({
            style: "medium"
        });
        
        test.expect(1);
        test.equal(fmt.getStyle(), "medium");
        test.done();
    },
    
    testNameFmtGetStyleDefault: function(test) {
        var fmt = new NameFmt();
        
        test.expect(1);
        test.equal(fmt.getStyle(), "short");
        test.done();
    },
    
    testNameFmtGetStyleBogus: function(test) {
        var fmt = new NameFmt({
            style: "humungous"
        });
        
        test.expect(1);
        test.equal(fmt.getStyle(), "short");
        test.done();
    },
    
    testNameFmtENShort: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "John Smith");
        test.done();
    },
    
    testNameFmtENMedium: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "John Kevin Smith");
        test.done();
    },
    
    testNameFmtENLong: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Kevin Smith");
        test.done();
    },
    
    testNameFmtENFull: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Kevin Smith Phd.");
        test.done();
    },
    
    testNameFmtENWithCommaInSuffix: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Kevin Smith, Phd.");
        test.done();
    },
    
    testNameFmtENComponentsP: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr.");
        test.done();
    },
    
    testNameFmtENComponentsPG: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John");
        test.done();
    },
    
    testNameFmtENComponentsPF: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. Smith");
        test.done();
    },
    
    testNameFmtENComponentsPGF: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    testNameFmtENComponentsPFS: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. Smith Phd.");
        test.done();
    },
    
    testNameFmtENComponentsPGFScrambled: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    testNameFmtENComponentsOverrideStyle: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Mr. John Smith");
        test.done();
    },
    
    
    testNameFmtDEShort: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEMedium: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtDELong: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtDEFull: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt MdB");
        test.done();
    },
    
    testNameFmtDEWithCommaInSuffix: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Helmut Schmidt, MdB");
        test.done();
    },
    
    testNameFmtDEComponentsP: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr.");
        test.done();
    },
    
    testNameFmtDEComponentsPG: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas");
        test.done();
    },
    
    testNameFmtDEComponentsPF: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsPGF: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsPFS: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Schmidt MdB");
        test.done();
    },
    
    testNameFmtDEComponentsPGFScrambled: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    },
    
    testNameFmtDEComponentsOverrideStyle: function(test) {
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
        
        test.expect(1);
        test.equal(fmt.format(name), "Hr. Andreas Schmidt");
        test.done();
    }
    
};