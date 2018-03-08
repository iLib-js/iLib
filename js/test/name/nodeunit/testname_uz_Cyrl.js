/*
 * testname_uz_Cyrl.js - test the name object in Uzbek
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_uz_Cyrl = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_uz_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("Бобур Мирзаев", {locale: 'uz-Cyrl-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName:"Бобур",
            familyName: "Мирзаев"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSingleNameWithPrefixAndAdjunct_uz_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("жаноб ва хоним Мирзаев", {locale: 'uz-Cyrl-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "жаноб ва хоним",
            familyName: "Мирзаев"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_uz_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("Бобур Мирзаев кичик", {locale: 'uz-Cyrl-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "кичик",
            givenName:"Бобур",
            familyName: "Мирзаев"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_uz_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("доктор Мирзаев", {locale: 'uz-Cyrl-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "доктор",
            familyName: "Мирзаев"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_uz_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("доктор Бобур Мирзаев", {locale: 'uz-Cyrl-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "доктор",
            givenName: "Бобур",
            familyName: "Мирзаев"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_uz_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Бобур",
            familyName: "Мирзаев"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'uz-Cyrl-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Бобур Мирзаев";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_uz_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Бобур",
            familyName: "Мирзаев"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'uz-Cyrl-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Бобур Мирзаев";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    
    testFormatSimpleNameFull_uz_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "доктор",
            givenName: "Бобур",
            familyName: "Мирзаев",
            suffix: "2-чи"
           });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'uz-Cyrl-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "доктор Бобур Мирзаев 2-чи";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
