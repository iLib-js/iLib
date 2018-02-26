/*
 * testname_mn_Cyrl.js - test the name object in Arabic
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
    var NameFmt = require("../../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_mn_Cyrl = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_mn_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("Цахиагийн Элбэгдорж", {locale: 'mn-Cyrl-MN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_mn_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("Ноён ба Хатагтай Элбэгдорж", {locale: 'mn-Cyrl-MN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            prefix: "Ноён ба Хатагтай",
            familyName: "Элбэгдорж"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSingleNameWithPrefixAndAdjunct_mn_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("хатагтай Элбэгдорж", {locale: 'mn-Cyrl-MN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "хатагтай",
            familyName: "Элбэгдорж"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_mn_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("Цахиагийн Элбэгдорж 9-р", {locale: 'mn-Cyrl-MN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "9-р",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_mn_Cyrl: function(test) {
        test.expect(2);
        var parsed = new Name("ц.э Цахиагийн Элбэгдорж ерөнхийлөгч", {locale: 'mn-Cyrl-MN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ц.э",
            suffix: "ерөнхийлөгч",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameFull_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "mонгол Улсын Ерөнхийлөгч",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж",
            suffix: "9-р"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "mонгол Улсын Ерөнхийлөгч Цахиагийн Элбэгдорж 9-р";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "mонгол Улсын Ерөнхийлөгч",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Цахиагийн Элбэгдорж";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "mонгол Улсын Ерөнхийлөгч",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Цахиагийн Элбэгдорж";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "mонгол Улсын Ерөнхийлөгч",
            givenName: "Цахиагийн",
            familyName: "Элбэгдорж"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "mонгол Улсын Ерөнхийлөгч Цахиагийн Элбэгдорж";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_mn_Cyrl: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'mn-Cyrl-MN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};
