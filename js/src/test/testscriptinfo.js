/*
 * tests.js - test the time zone object
 * 
 * Copyright © 2012, JEDLSoft
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
}

function testScriptGet2() {
    var si = new ilib.ScriptInfo("Phag");
    assertNotNull(si);
    
    assertEquals("Phag", si.getCode());
    assertEquals(331, si.getCodeNumber());
    assertEquals("Phags-pa", si.getName());
    assertEquals("Phags_Pa", si.getLongCode());
}

function testScriptGetDefaultLongCode() {
    var si = new ilib.ScriptInfo("Sara");
    assertNotNull(si);
    
    assertEquals("Sara", si.getCode());
    assertEquals(292, si.getCodeNumber());
    assertEquals("Sarati", si.getName());
    assertEquals("Sarati", si.getLongCode());
}

function testScriptGetDefaultLongCodeWithSpaces() {
    var si = new ilib.ScriptInfo("Kore");
    assertNotNull(si);
    
    assertEquals("Kore", si.getCode());
    assertEquals(287, si.getCodeNumber());
    assertEquals("Korean (alias for Hangul + Han)", si.getName());
    assertEquals("Korean_(alias_for_Hangul_+_Han)", si.getLongCode());
}

function testScriptGetUnknown() {
    var si = new ilib.ScriptInfo("Fooo");
    assertNotNull(si);
    
    assertEquals(undefined, si.getCode());
    assertEquals(0, si.getCodeNumber());
    assertEquals(undefined, si.getName());
    assertEquals(undefined, si.getLongCode());
}
