/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
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

module.exports.testname_el = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_el_GR: function(test) {
        test.expect(2);
        var parsed = new Name("Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_el_GR: function(test) {
        test.expect(2);
        var parsed = new Name("Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_el_GR: function(test) {
        test.expect(2);
        var parsed = new Name("Νικόλαος Αλεξόπουλος κατώτερος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
             suffix : "κατώτερος",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_el_GR1: function(test) {
        test.expect(2);
        var parsed = new Name("Ο κ. Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Ο κ.",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_el_GR_second: function(test) {
        test.expect(2);
        var parsed = new Name("Κυρία. Νικόλαος Αλεξόπουλος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Κυρία.",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_el_GR: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "Ο κ.",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος",
            suffix: "μουσκεύω"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Ο κ. Νικόλαος Αλεξόπουλος μουσκεύω";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunctex_el_GR: function(test) {
        test.expect(2);
        var parsed = new Name("αντιπρόεδρος Νικόλαος Αλεξόπουλος μουσκεύω", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "αντιπρόεδρος",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος",
            suffix : "μουσκεύω"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseCompoundHonorific_el_GR: function(test) {
        test.expect(2);
        var parsed = new Name("Ο κ. Αλεξόπουλος", {locale: 'el-GR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Ο κ.",
            familyName: "Αλεξόπουλος"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Νικόλαος Αλεξόπουλος";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Νικόλαος Αλεξόπουλος";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος",
            suffix: "μουσκεύω"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Νικόλαος Αλεξόπουλος μουσκεύω";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "μουσκεύω",
            givenName: "Νικόλαος",
            familyName: "Αλεξόπουλος"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Νικόλαος Αλεξόπουλος";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_el_GR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'el-GR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};