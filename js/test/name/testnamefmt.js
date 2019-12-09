/*
 * testnamefmt.js - test the name formatter object
 * 
 * Copyright © 2013-2015,2017,2019 JEDLSoft
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
    var NameFmt = require("../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../lib/Name.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
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

    testNameFmtENFamiliar: function(test) {
        test.expect(1);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Kevin",
            familyName: "Smith",
            suffix: "Phd."
        });
        var fmt = new NameFmt({
            style: "familiar"
        });

        test.equal(fmt.format(name), "John");
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

    testNameFmtDEFamiliar: function(test) {
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
            style: "familiar",
            locale: "de-DE"
        });

        test.equal(fmt.format(name), "Hr. Schmidt");
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
    },
    
    testNameFmtENWithHonorific: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "Dr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt"
        }, {
            locale: "en-US"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: "en-US"
        });
        
        test.equal(fmt.format(name), "Dr. Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtZHWithHonorific: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "医生",
            givenName: "芳",
            familyName: "李"
        }, {
            locale: "zh-Hans-CN"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: "zh-Hans-CN"
        });
        
        test.equal(fmt.format(name), "李芳医生");
        test.done();
    },

    testNameFmtENFormalShort: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "Dr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt"
        }, {
            locale: "en-US"
        });
        var fmt = new NameFmt({
            style: "formal_short",
            locale: "en-US"
        });
        
        test.equal(fmt.format(name), "Dr. Schmidt");
        test.done();
    },
    
    testNameFmtENFormalLong: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "Dr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt"
        }, {
            locale: "en-US"
        });
        var fmt = new NameFmt({
            style: "formal_long",
            locale: "en-US"
        });
        
        test.equal(fmt.format(name), "Dr. Andreas Schmidt");
        test.done();
    },

    testNameFmtZHFormalShort: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "医生",
            givenName: "芳",
            familyName: "李"
        }, {
            locale: "zh-Hans-CN"
        });
        var fmt = new NameFmt({
            style: "formal_short",
            locale: "zh-Hans-CN"
        });
        
        test.equal(fmt.format(name), "李医生");
        test.done();
    },

    testNameFmtZHFormalLong: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "医生",
            givenName: "芳",
            familyName: "李"
        }, {
            locale: "zh-Hans-CN"
        });
        var fmt = new NameFmt({
            style: "formal_long",
            locale: "zh-Hans-CN"
        });
        
        test.equal(fmt.format(name), "李芳医生");
        test.done();
    },
    
    testNameFmtKOFormalShort: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            style: "formal_short",
            locale: "ko-KR"
        });
        
        // use the full name, even in formal_short
        // honorifics are prefixes in Korean
        test.equal(fmt.format(name), "박은성");
        test.done();
    },
    testNameFmtKOFormalShort2: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            style: "formal_short",
            locale: "ko-KR"
        });

        // use the full name, even in formal_short
        // honorifics are prefixes in Korean
        test.equal(fmt.format(name), "박은성 님");
        test.done();
    },

    testNameFmtKOShort: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            locale: "ko-KR",
            style: "short"
        });
        test.equal(fmt.format(name), "박은성");
        test.done();
    },

    testNameFmtKOMedium: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            locale: "ko-KR",
            style: "medium"
        });

        test.equal(fmt.format(name), "박은성");
        test.done();
    },

    testNameFmtKOLong: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            locale: "ko-KR",
            style: "long"
        });

        test.equal(fmt.format(name), "박은성 님");
        test.done();
    },

    testNameFmtKOFull: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            locale: "ko-KR",
            style: "full"
        });

        test.equal(fmt.format(name), "닥터 박은성 님");
        test.done();
    },

    testNameFmtKOFamiliar: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            style: "formal_long",
            locale: "ko-KR"
        });
        
        test.equal(fmt.format(name), "닥터 박은성");
        test.done();
    },

    testNameFmtZHFormalLong2: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박",
            suffix: "님"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            style: "formal_long",
            locale: "ko-KR"
        });

        test.equal(fmt.format(name), "닥터 박은성 님");
        test.done();
    },

    testNameFmtKOFormalLong: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "닥터",
            givenName: "은성",
            familyName: "박"
        }, {
            locale: "ko-KR"
        });
        var fmt = new NameFmt({
            style: "familiar",
            locale: "ko-KR"
        });

        test.equal(fmt.format(name), "닥터 박은성");
        test.done();
    },

    testNameFmtCSFamiliar: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "Pan",
            givenName: "Jan",
            familyName: "Novák"
        }, {
            locale: "cs-CZ"
        });
        var fmt = new NameFmt({
            style: "familiar",
            locale: "cs-CZ"
        });

        test.equal(fmt.format(name), "Pan Novák");
        test.done();
    },

    testNameFmtSKFamiliar: function(test) {
        test.expect(1);
        var name = new Name({
            honorific: "Pani",
            givenName: "Mária",
            familyName: "Obecny"
        }, {
            locale: "sk-SK"
        });
        var fmt = new NameFmt({
            style: "familiar",
            locale: "sk-SK"
        });

        test.equal(fmt.format(name), "Pani Obecny");
        test.done();
    },

    testNameFmtENWithImplicitConversionOfArgToName: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            style: "full",
            locale: "en-US"
        });
        
        test.equal(fmt.format({
            honorific: "Dr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt"
        }), "Dr. Andreas Helmut Schmidt");
        test.done();
    },
    
    testNameFmtENImplicitConversionTakesOnLocaleOfFormatter: function(test) {
        test.expect(1);
        var fmt = new NameFmt({
            style: "full",
            locale: "hu-MG"
        });
        
        test.equal(fmt.format({
            honorific: "Dr.",
            givenName: "Andreas",
            middleName: "Helmut",
            familyName: "Schmidt"
        }), "Dr. Schmidt Andreas Helmut");
        test.done();
    }
};
