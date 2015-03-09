/*
 * testscriptinfo.js - test the script info object
 * 
 * Copyright © 2013-2015, JEDLSoft
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

function testScriptConstructor() {
    var si = new ilib.ScriptInfo();
    assertNotNull(si);
}

function testScriptGet1() {
    var si = new ilib.ScriptInfo("Latn");
    assertNotNull(si);
    
    assertEquals("Latn", si.getCode());
    assertEquals(215, si.getCodeNumber());
    assertEquals("Latin", si.getName());
    assertEquals("Latin", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertTrue(si.getCasing());
}

function testScriptGet2() {
    var si = new ilib.ScriptInfo("Phag");
    assertNotNull(si);
    
    assertEquals("Phag", si.getCode());
    assertEquals(331, si.getCodeNumber());
    assertEquals("Phags-pa", si.getName());
    assertEquals("Phags_Pa", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGet3() {
    var si = new ilib.ScriptInfo("Hebr");
    assertNotNull(si);
    
    assertEquals("Hebr", si.getCode());
    assertEquals(125, si.getCodeNumber());
    assertEquals("Hebrew", si.getName());
    assertEquals("Hebrew", si.getLongCode());
    assertEquals("rtl", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGet4() {
    var si = new ilib.ScriptInfo("Hans");
    assertNotNull(si);
    
    assertEquals("Hans", si.getCode());
    assertEquals(501, si.getCodeNumber());
    assertEquals("Han (Simplified variant)", si.getName());
    assertEquals("Han_(Simplified_variant)", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCode() {
    var si = new ilib.ScriptInfo("Sara");
    assertNotNull(si);
    
    assertEquals("Sara", si.getCode());
    assertEquals(292, si.getCodeNumber());
    assertEquals("Sarati", si.getName());
    assertEquals("Sarati", si.getLongCode());
}

function testScriptGetDefaultLongCodeOrya() {
    var si = new ilib.ScriptInfo("Orya");
    assertNotNull(si);
    
    assertEquals("Orya", si.getCode());
    assertEquals(327, si.getCodeNumber());
    assertEquals("Oriya", si.getName());
    assertEquals("Oriya", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertFalse(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetDefaultLongCodeAmharic() {
    var si = new ilib.ScriptInfo("Ethi");
    assertNotNull(si);
    
    assertEquals("Ethi", si.getCode());
    assertEquals(430, si.getCodeNumber());
    assertEquals("Ethiopic (Geʻez)", si.getName());
    assertEquals("Ethiopic", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}
function testScriptGetDefaultLongCodeWithSpaces() {
    var si = new ilib.ScriptInfo("Kore");
    assertNotNull(si);
    
    assertEquals("Kore", si.getCode());
    assertEquals(287, si.getCodeNumber());
    assertEquals("Korean (alias for Hangul + Han)", si.getName());
    assertEquals("Korean_(alias_for_Hangul_+_Han)", si.getLongCode());
    assertEquals("ltr", si.getScriptDirection());
    assertTrue(si.getNeedsIME());
    assertFalse(si.getCasing());
}

function testScriptGetUnknown() {
    var si = new ilib.ScriptInfo("Fooo");
    assertNotNull(si);
    
    assertEquals(undefined, si.getCode());
    assertEquals(0, si.getCodeNumber());
    assertEquals(undefined, si.getName());
    assertEquals(undefined, si.getLongCode());
}

function testScriptGetAllScripts() {
    var scripts = new ilib.ScriptInfo.getAllScripts();
    assertNotNull(scripts);
    
    assertEquals("Afak", scripts[0]);
    assertEquals("Aghb", scripts[1]);
    assertEquals("Arab", scripts[2]);
    assertEquals("Zzzz", scripts[scripts.length-1]);
}
