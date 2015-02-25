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
	var lm = new ilib.LocaleMatcher({
		locale: "uz"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegion() {
	var lm = new ilib.LocaleMatcher({
		locale: "UZ"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByScript() {
	var lm = new ilib.LocaleMatcher({
		locale: "Arab"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ar-Arab-EG", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScript() {
	var lm = new ilib.LocaleMatcher({
		locale: "pa-Arab"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("pa-Arab-PK", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScriptOriya() {
	var lm = new ilib.LocaleMatcher({
		locale: "or-Orya"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByScriptOriya() {
	var lm = new ilib.LocaleMatcher({
		locale: "or"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageOriya() {
	var lm = new ilib.LocaleMatcher({
		locale: "Orya"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegion() {
	var lm = new ilib.LocaleMatcher({
		locale: "uz-AF"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Arab-AF", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegionAndScript() {
	var lm = new ilib.LocaleMatcher({
		locale: "MA-Latn"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("fr-Latn-MA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleAlreadySpecified() {
	var lm = new ilib.LocaleMatcher({
		locale: "en-CA-Latn"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-Latn-CA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageMissing() {
	var lm = new ilib.LocaleMatcher({
		locale: "zxx"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("zxx", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegionMissing() {
	var lm = new ilib.LocaleMatcher({
		locale: "en-GB"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-GB", locale.getSpec());
}
