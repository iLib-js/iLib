/*
 * testlocalematch.js - test the locale matcher object
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

function testLocaleMatcherConstructor() {
	var loc = new ilib.LocaleMatcher();

	assertNotNull(loc);
}

function testLocaleMatcherGetLikelyLocaleByLanguage() {
	var lm = new ilib.LocaleMatcher("uz");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegion() {
	var lm = new ilib.LocaleMatcher("UZ");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByScript() {
	var lm = new ilib.LocaleMatcher("Arab");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ar-Arab-EG", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScript() {
	var lm = new ilib.LocaleMatcher("pa-Arab");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("pa-Arab-PK", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegion() {
	var lm = new ilib.LocaleMatcher("uz-AF");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Arab-AF", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegionAndScript() {
	var lm = new ilib.LocaleMatcher("MA-Latn");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("fr-Latn-MA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleAlreadySpecified() {
	var lm = new ilib.LocaleMatcher("en-CA-Latn");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-Latn-CA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageMissing() {
	var lm = new ilib.LocaleMatcher("zxx");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("zxx", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegionMissing() {
	var lm = new ilib.LocaleMatcher("en-GB");
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-GB", locale.getSpec());
}
