/*
 * testscriptinfo.js - test the script info object
 * 
 * Copyright © 2013-2017, JEDLSoft
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

if (typeof(ScriptInfo) === "undefined") {
    var ScriptInfo = require("../.././../lib/ScriptInfo.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testscriptinfo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testScriptConstructor: function(test) {
        var si = new ScriptInfo();
        test.expect(1);
        test.ok(si !== null);
        test.done();
    },
    
    testScriptGet1: function(test) {
        var si = new ScriptInfo("Latn");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Latn");
        test.equal(si.getCodeNumber(), 215);
        test.equal(si.getName(), "Latin");
        test.equal(si.getLongCode(), "Latin");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(si.getCasing());
        test.done();
    },
    
    testScriptGet2: function(test) {
        var si = new ScriptInfo("Phag");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Phag");
        test.equal(si.getCodeNumber(), 331);
        test.equal(si.getName(), "Phags-pa");
        test.equal(si.getLongCode(), "Phags_Pa");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGet3: function(test) {
        var si = new ScriptInfo("Hebr");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Hebr");
        test.equal(si.getCodeNumber(), 125);
        test.equal(si.getName(), "Hebrew");
        test.equal(si.getLongCode(), "Hebrew");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGet4: function(test) {
        var si = new ScriptInfo("Hans");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Hans");
        test.equal(si.getCodeNumber(), 501);
        test.equal(si.getName(), "Han (Simplified variant)");
        test.equal(si.getLongCode(), "Han_(Simplified_variant)");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGetDefaultLongCode: function(test) {
        var si = new ScriptInfo("Sara");
        test.expect(5);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Sara");
        test.equal(si.getCodeNumber(), 292);
        test.equal(si.getName(), "Sarati");
        test.equal(si.getLongCode(), "Sarati");
        test.done();
    },
    
    testScriptGetDefaultLongCodeOrya: function(test) {
        var si = new ScriptInfo("Orya");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Orya");
        test.equal(si.getCodeNumber(), 327);
        test.equal(si.getName(), "Oriya (Odia)");
        test.equal(si.getLongCode(), "Oriya");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGetDefaultLongCodeAmharic: function(test) {
        var si = new ScriptInfo("Ethi");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Ethi");
        test.equal(si.getCodeNumber(), 430);
        test.equal(si.getName(), "Ethiopic (Geʻez)");
        test.equal(si.getLongCode(), "Ethiopic");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodeWithSpaces: function(test) {
        var si = new ScriptInfo("Kore");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Kore");
        test.equal(si.getCodeNumber(), 287);
        test.equal(si.getName(), "Korean (alias for Hangul + Han)");
        test.equal(si.getLongCode(), "Korean_(alias_for_Hangul_+_Han)");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGetDefaultLongCodeArab: function(test) {
        var si = new ScriptInfo("Arab");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Arab");
        test.equal(si.getCodeNumber(), 160);
        test.equal(si.getName(), "Arabic");
        test.equal(si.getLongCode(), "Arabic");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetUnknown: function(test) {
        var si = new ScriptInfo("Fooo");
        test.expect(5);
        test.ok(si !== null);
        
        test.equal(si.getCode(), undefined);
        test.equal(si.getCodeNumber(), 0);
        test.equal(si.getName(), undefined);
        test.equal(si.getLongCode(), undefined);
        test.done();
    },
    
    testScriptGetAllScripts: function(test) {
        var scripts = ScriptInfo.getAllScripts();
        test.expect(7);
        test.ok(scripts !== null);
        
        test.equal(scripts.length, 189);
    
        test.equal(scripts[0], "Adlm");
        test.equal(scripts[1], "Afak");
        test.equal(scripts[2], "Aghb");
        test.equal(scripts[4], "Arab");
        test.equal(scripts[scripts.length-1], "Zzzz");
        test.done();
    },
    
    testScriptGetDefaultLongCodeKits: function(test) {
        var si = new ScriptInfo("Kits");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Kits");
        test.equal(si.getCodeNumber(), 288);
        test.equal(si.getName(), "Khitan small script");
        test.equal(si.getLongCode(), "Khitan_small_script");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGetDefaultLongCodePauc: function(test) {
        var si = new ScriptInfo("Pauc");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Pauc");
        test.equal(si.getCodeNumber(), 263);
        test.equal(si.getName(), "Pau Cin Hau");
        test.equal(si.getLongCode(), "Pau_Cin_Hau");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    
    testScriptGetDefaultLongCodeMend: function(test) {
        var si = new ScriptInfo("Mend");
        test.expect(8);
        test.ok(si !== null);
        
        test.equal(si.getCode(), "Mend");
        test.equal(si.getCodeNumber(), 438);
        test.equal(si.getName(), "Mende Kikakui");
        test.equal(si.getLongCode(), "Mende_Kikakui");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    }
    
};