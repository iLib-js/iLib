/*
 * testlocalematch.js - test the locale matcher object
 *
 * Copyright © 2012-2015, JEDLSoft
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

var LocaleMatcher = require("./../lib/LocaleMatcher.js");

function testLocaleMatcherConstructor() {
	var loc = new LocaleMatcher();

	assertNotNull(loc);
}

function testLocaleMatcherGetLikelyLocaleByLanguage1() {
	var lm = new LocaleMatcher({
		locale: "uz"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Latn-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguage2() {
	var lm = new LocaleMatcher({
		locale: "alt"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("alt-Cyrl-RU", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguage3() {
	var lm = new LocaleMatcher({
		locale: "gv"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("gv-Latn-IM", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguage4() {
	var lm = new LocaleMatcher({
		locale: "ia"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ia-Latn-FR", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguage5() {
	var lm = new LocaleMatcher({
		locale: "sd"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("sd-Arab-PK", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegion() {
	var lm = new LocaleMatcher({
		locale: "UZ"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Latn-UZ", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByScript() {
	var lm = new LocaleMatcher({
		locale: "Arab"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ar-Arab-EG", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScript1() {
	var lm = new LocaleMatcher({
		locale: "pa-Arab"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("pa-Arab-PK", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScript2() {
	var lm = new LocaleMatcher({
		locale: "Cyrl-PL"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("be-Cyrl-PL", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndScriptOriya() {
	var lm = new LocaleMatcher({
		locale: "or-Orya"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByScriptOriya() {
	var lm = new LocaleMatcher({
		locale: "or"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageOriya() {
	var lm = new LocaleMatcher({
		locale: "Orya"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("or-Orya-IN", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegion() {
	var lm = new LocaleMatcher({
		locale: "uz-AF"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Arab-AF", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByRegionAndScript() {
	var lm = new LocaleMatcher({
		locale: "MA-Latn"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("fr-Latn-MA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleAlreadySpecified() {
	var lm = new LocaleMatcher({
		locale: "en-CA-Latn"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-Latn-CA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageMissing() {
	var lm = new LocaleMatcher({
		locale: "zxx"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("zxx", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLanguageAndRegionMissing() {
	var lm = new LocaleMatcher({
		locale: "en-GB"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-GB", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF() {
	var lm = new LocaleMatcher({
		locale: "af-ZA"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("af-ZA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleCodeAF() {
	var lm = new LocaleMatcher({
		locale: "af"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("af-Latn-ZA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF() {
	var lm = new LocaleMatcher({
		locale: "af-NA"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("af-NA", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeET() {
	var lm = new LocaleMatcher({
		locale: "am-ET"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("am-ET", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleCodeET() {
	var lm = new LocaleMatcher({
		locale: "am"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("am-Ethi-ET", locale.getSpec());
}
/*Hausa */
function testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeHANG() {
	var lm = new LocaleMatcher({
		locale: "ha"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ha-Latn-NG", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleCodeHANG() {
	var lm = new LocaleMatcher({
		locale: "ha-NG"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ha-NG", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleCodeHANE() {
	var lm = new LocaleMatcher({
		locale: "ha-NE"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ha-NE", locale.getSpec());
}

function testLocaleMatcherGetLikelyLocaleByLocaleCodeGH() {
	var lm = new LocaleMatcher({
		locale: "ha-GH"
	});
	assertNotUndefined(lm);
	var locale = lm.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ha-GH", locale.getSpec());
}
