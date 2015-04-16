/*
 * testlocale.js - test the locale object
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testLocaleConstructor() {
    var loc = new ilib.Locale();
    
    assertNotNull(loc);
}

function testLocaleConstructorCurrent() {
    var loc = new ilib.Locale(); // gives locale of the host JS engine
    
    assertNotNull(loc);

    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorDefault() {
	ilib.setLocale("it-IT");
	
    var loc = new ilib.Locale();
    
    assertNotNull(loc);

    assertEquals("it", loc.getLanguage());
    assertEquals("IT", loc.getRegion());
    assertUndefined(loc.getVariant());
    
    delete ilib.locale;
}

function testLocaleCopyConstructor() {
    var loc2 = new ilib.Locale("de", "DE");
    var loc = new ilib.Locale(loc2);
    
    assertNotNull(loc);
    
    assertEquals("de", loc.getLanguage());
    assertEquals("DE", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorFull() {
    var loc = new ilib.Locale("en", "US", "Midwest");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertEquals("Midwest", loc.getVariant());
}

function testLocaleConstructorSpecWithVariant() {
    var loc = new ilib.Locale("en-US-Midwest");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertEquals("Midwest", loc.getVariant());
    assertUndefined(loc.getScript());
}

function testLocaleConstructorSpecWithScript() {
    var loc = new ilib.Locale("en-US-Latn");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertEquals("Latn", loc.getScript());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorPartial() {
    var loc = new ilib.Locale("en", "US");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorSpecPartial() {
    var loc = new ilib.Locale("en-US");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorShort() {
    var loc = new ilib.Locale("en");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertUndefined(loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorUpperCaseLanguage() {
    var loc = new ilib.Locale("EN", "US");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorLowerCaseRegion() {
    var loc = new ilib.Locale("en", "us");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleConstructorSpecMissingRegion() {
    var loc = new ilib.Locale("en--Midwest");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertUndefined(loc.getRegion());
    assertEquals("Midwest", loc.getVariant());
    assertUndefined(loc.getScript());
}

function testLocaleConstructorSpecMissingLanguage() {
    var loc = new ilib.Locale("-US-Midwest");
    
    assertNotNull(loc);
    
    assertUndefined(loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertEquals("Midwest", loc.getVariant());
    assertUndefined(loc.getScript());    
}

function testLocaleConstructorSpecMissingLanguageAndVariant() {
    var loc = new ilib.Locale("-US");
    
    assertNotNull(loc);
    
    assertUndefined(loc.getLanguage());
    assertEquals("US", loc.getRegion());
    assertUndefined(loc.getVariant());
    assertUndefined(loc.getScript());
}

function testLocaleEqualsTrue() {
    var loc1 = new ilib.Locale("en-US"),
        loc2 = new ilib.Locale("en", "US");
    
    assertNotNull(loc1);
    assertNotNull(loc2);
    
    assertTrue(loc1.equals(loc2));
}

function testLocaleEqualsFalse() {
    var loc1 = new ilib.Locale("en-US"),
        loc2 = new ilib.Locale("en", "CA");
    
    assertNotNull(loc1);
    assertNotNull(loc2);
    
    assertFalse(loc1.equals(loc2));
}

function testLocaleEqualsMissing() {
    var loc1 = new ilib.Locale("en-US"),
        loc2 = new ilib.Locale("en", "US", "govt");
    
    assertNotNull(loc1);
    assertNotNull(loc2);
    
    assertFalse(loc1.equals(loc2));
}

function testLocaleEqualsTrueFull() {
    var loc1 = new ilib.Locale("en-US-govt"),
        loc2 = new ilib.Locale("en", "US", "govt");
    
    assertNotNull(loc1);
    assertNotNull(loc2);
    
    assertTrue(loc1.equals(loc2));
}

function testLocaleEqualsTrueShort() {
    var loc1 = new ilib.Locale("en"),
        loc2 = new ilib.Locale("en");
    
    assertNotNull(loc1);
    assertNotNull(loc2);
    
    assertTrue(loc1.equals(loc2));
}

function testLocaleIsPseudoTrue() {
    var loc = new ilib.Locale("zxx-XX");
    
    assertNotNull(loc);
    
    assertTrue(loc.isPseudo(loc));
}

function testLocaleIsPseudoFalse() {
    var loc = new ilib.Locale("en-US");
    
    assertNotNull(loc);
    
    assertFalse(loc.isPseudo(loc));
}

function testLocaleIsPseudoFalseButClosLang() {
    var loc = new ilib.Locale("zxx-US");
    
    assertNotNull(loc);
    
    assertFalse(loc.isPseudo(loc));
}

function testLocaleIsPseudoFalse() {
    var loc = new ilib.Locale("en-XX");
    
    assertNotNull(loc);
    
    assertFalse(loc.isPseudo(loc));
}


function testLocaleGetSpecLangOnly() {
    var loc = new ilib.Locale("en");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getSpec());
}

function testLocaleGetSpecRegionOnly() {
    var loc = new ilib.Locale("CA");
    
    assertNotNull(loc);
    
    assertEquals("CA", loc.getSpec());
}

function testLocaleGetSpecScriptOnly() {
    var loc = new ilib.Locale("Latn");
    
    assertNotNull(loc);
    
    assertEquals("Latn", loc.getSpec());
}

function testLocaleGetSpecVariantOnly() {
    var loc = new ilib.Locale("asdfasdf");
    
    assertNotNull(loc);
    
    assertEquals("asdfasdf", loc.getSpec());
}

function testLocaleGetSpecLangAndScript() {
    var loc = new ilib.Locale("Latn-en");
    
    assertNotNull(loc);
    
    assertEquals("en-Latn", loc.getSpec());
}

function testLocaleGetSpecLangAndRegion() {
    var loc = new ilib.Locale("CA-en");
    
    assertNotNull(loc);
    
    assertEquals("en-CA", loc.getSpec());
}

function testLocaleGetSpecLangAndVariant() {
    var loc = new ilib.Locale("asdf-en");
    
    assertNotNull(loc);
    
    assertEquals("en-asdf", loc.getSpec());
}

function testLocaleGetSpecScriptAndRegion() {
    var loc = new ilib.Locale("CA-Latn");
    
    assertNotNull(loc);
    
    assertEquals("Latn-CA", loc.getSpec());
}

function testLocaleGetSpecScriptAndVariant() {
    var loc = new ilib.Locale("asdf-Latn");
    
    assertNotNull(loc);
    
    assertEquals("Latn-asdf", loc.getSpec());
}

function testLocaleGetSpecRegionAndVariant() {
    var loc = new ilib.Locale("asdf-CA");
    
    assertNotNull(loc);
    
    assertEquals("CA-asdf", loc.getSpec());
}

function testLocaleGetSpecLangScriptRegion() {
    var loc = new ilib.Locale("CA-en-Latn");
    
    assertNotNull(loc);
    
    assertEquals("en-Latn-CA", loc.getSpec());
}

function testLocaleGetSpecScriptRegionVariant() {
    var loc = new ilib.Locale("CA-asdf-Latn");
    
    assertNotNull(loc);
    
    assertEquals("Latn-CA-asdf", loc.getSpec());
}

function testLocaleGetSpecLangScriptVariant() {
    var loc = new ilib.Locale("asdf-Latn-en");
    
    assertNotNull(loc);
    
    assertEquals("en-Latn-asdf", loc.getSpec());
}

function testLocaleGetSpecLangRegionVariant() {
    var loc = new ilib.Locale("asdf-CA-en");
    
    assertNotNull(loc);
    
    assertEquals("en-CA-asdf", loc.getSpec());
}

function testLocaleGetSpecAll() {
    var loc = new ilib.Locale("asdf-CA-Latn-en");
    
    assertNotNull(loc);
    
    assertEquals("en-Latn-CA-asdf", loc.getSpec());
}

function testLocaleM49RegionCodeGetParts() {
    var loc = new ilib.Locale("en-001");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("001", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleM49RegionCodeGetParts2() {
    var loc = new ilib.Locale("en-150");
    
    assertNotNull(loc);
    
    assertEquals("en", loc.getLanguage());
    assertEquals("150", loc.getRegion());
    assertUndefined(loc.getVariant());
}

function testLocaleM49RegionCodeGetSpec() {
    var loc = new ilib.Locale("en-001");
    
    assertNotNull(loc);
    
    assertEquals("en-001", loc.getSpec());
}

function testLocaleNoLocale() {
    var loc = new ilib.Locale("-");
    
    assertNotNull(loc);
    
    assertEquals("", loc.getSpec());
    assertUndefined(loc.getLanguage());
    assertUndefined(loc.getRegion());
    assertUndefined(loc.getScript());
    assertUndefined(loc.getVariant());
}


function testLocaleRegionMap1() {
    assertEquals("SGP", ilib.Locale.regionAlpha2ToAlpha3("SG"));
}

function testLocaleRegionMap2() {
    assertEquals("VNM", ilib.Locale.regionAlpha2ToAlpha3("VN"));
}

function testLocaleRegionMap3() {
    assertEquals("KOR", ilib.Locale.regionAlpha2ToAlpha3("KR"));
}

function testLocaleRegionMapEmpty() {
    assertEquals("", ilib.Locale.regionAlpha2ToAlpha3(""));
}

function testLocaleRegionMapUnknown() {
    assertEquals("QQ", ilib.Locale.regionAlpha2ToAlpha3("QQ"));
}

function testLocaleRegionMapWrongCase() {
    assertEquals("sg", ilib.Locale.regionAlpha2ToAlpha3("sg"));
}

function testLocaleRegionMapUndefined() {
    assertUndefined(ilib.Locale.regionAlpha2ToAlpha3(undefined));
}

function testLocaleLanguageMap1() {
    assertEquals("kor", ilib.Locale.languageAlpha1ToAlpha3("ko"));
}

function testLocaleLanguageMap2() {
    assertEquals("tha", ilib.Locale.languageAlpha1ToAlpha3("th"));
}

function testLocaleLanguageMap3() {
    assertEquals("hrv", ilib.Locale.languageAlpha1ToAlpha3("hr"));
}

function testLocaleLanguageMapEmpty() {
    assertEquals("", ilib.Locale.languageAlpha1ToAlpha3(""));
}

function testLocaleLanguageMapUnknown() {
    assertEquals("qq", ilib.Locale.languageAlpha1ToAlpha3("qq"));
}

function testLocaleLanguageMapWrongCase() {
    assertEquals("EN", ilib.Locale.languageAlpha1ToAlpha3("EN"));
}

function testLocaleLanguageMapUndefined() {
    assertUndefined(ilib.Locale.languageAlpha1ToAlpha3(undefined));
}

function testLocaleGetLanguageAlpha3_1() {
    var loc = new ilib.Locale("en-US");
    
    assertNotNull(loc);
    
    assertEquals("eng", loc.getLanguageAlpha3());
}

function testLocaleGetLanguageAlpha3_2() {
    var loc = new ilib.Locale("ru-RU");
    
    assertNotNull(loc);
    
    assertEquals("rus", loc.getLanguageAlpha3());
}

function testLocaleGetLanguageAlpha3_3() {
    var loc = new ilib.Locale("gv-GB");
    
    assertNotNull(loc);
    
    assertEquals("glv", loc.getLanguageAlpha3());
}

function testLocaleGetLanguageAlpha3NoLanguage() {
    var loc = new ilib.Locale("GB");
    
    assertNotNull(loc);
    
    assertUndefined(loc.getLanguageAlpha3());
}

function testLocaleGetRegionAlpha3_1() {
    var loc = new ilib.Locale("en-US");
    
    assertNotNull(loc);
    
    assertEquals("USA", loc.getRegionAlpha3());
}

function testLocaleGetRegionAlpha3_2() {
    var loc = new ilib.Locale("ru-RU");
    
    assertNotNull(loc);
    
    assertEquals("RUS", loc.getRegionAlpha3());
}

function testLocaleGetRegionAlpha3_3() {
    var loc = new ilib.Locale("gv-GB");
    
    assertNotNull(loc);
    
    assertEquals("GBR", loc.getRegionAlpha3());
}

function testLocaleGetRegionAlpha3NoRegion() {
    var loc = new ilib.Locale("en");
    
    assertNotNull(loc);
    
    assertUndefined(loc.getRegionAlpha3());
}
