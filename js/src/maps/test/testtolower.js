/*
 * testtolower.js - Test the lower-casing mapper
 * 
 * Copyright © 2014, JEDLSoft
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

function testToLowerFromLower_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("this is a string", mapper.map("this is a string"));
}

function testToLowerFromUpper_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("this is a string", mapper.map("THIS IS A STRING"));
}

function testToLowerFromMixed_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("this is a string", mapper.map("This is a String"));
}

function testToLowerFromPunctuationUnchanged_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
}

function testToLowerFromNonLatinUnchanged_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
}

function testToLowerFromExtendedLatin_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("ãéìôü", mapper.map("ÃÉÌÔÜ"));
}

function testToLowerCyrillic_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("празл", mapper.map("ПРАЗЛ"));
}

function testToLowerGreek_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("αβγδεζηθ", mapper.map("ΑΒΓΔΕΖΗΘ"));
}

function testToLowerArmenian_default() {
	var mapper = new ilib.StringMapper({
		name: "tolower"
	});
    assertEquals("աբգդեզէըթ", mapper.map("ԱԲԳԴԵԶԷԹ"));
}

/* Azeri tests */
function testToLower_az_AZ() {
	var mapper = new ilib.StringMapper({
		locale: "az-AZ",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Turkish tests */
function testToLower_tr_TR() {
	var mapper = new ilib.StringMapper({
		locale: "tr-TR",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Crimean Tatar tests */
function testToLower_crh_Latn_UK() {
	var mapper = new ilib.StringMapper({
		locale: "crh-Latn-UK",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Kazakh tests */
function testToLower_kk_Latn_KK() {
	var mapper = new ilib.StringMapper({
		locale: "kk-Latn-KK",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Tatar tests */
function testToLower_tt_Latn_RU() {
	var mapper = new ilib.StringMapper({
		locale: "tt-Latn-RU",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Karachay-Balkar tests */
function testToLower_krc_Latn_RU() {
	var mapper = new ilib.StringMapper({
		locale: "krc-Latn-RU",
		name: "tolower"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* German tests */
function testToLowerDoubleS_de_DE() {
	var mapper = new ilib.StringMapper({
		locale: "de-DE",
		name: "tolower"
	});
    assertEquals("gross", mapper.map("GROSS"));
}

function testToLowerWithSZ_de_DE() {
	var mapper = new ilib.StringMapper({
		locale: "de-DE",
		name: "tolower"
	});
    assertEquals("groß", mapper.map("GROß"));
}


/* Russian tests */
function testToLowerLowerPalochka_ru_RU() {
	var mapper = new ilib.StringMapper({
		locale: "ru-RU",
		name: "tolower"
	});
    assertEquals("ӏ", mapper.map("ӏ"));
}

function testToLowerUpperPalochka_ru_RU() {
	var mapper = new ilib.StringMapper({
		locale: "ru-RU",
		name: "tolower"
	});
    assertEquals("Ӏ", mapper.map("Ӏ"));
}

/* Greek tests */
function testToLower_el_GR() {
	var mapper = new ilib.StringMapper({
		locale: "el-GR",
		name: "tolower"
	});
    assertEquals("ιασασ", mapper.map("ΙΑΣΑΣ"));
}

/* French tests */
function testToLowerNoAccents_fr_FR() {
	var mapper = new ilib.StringMapper({
		locale: "fr-FR",
		name: "tolower"
	});
    assertEquals("tete-a-tete", mapper.map("TETE-A-TETE"));
}
function testToLowerWithAccents_fr_FR() {
	var mapper = new ilib.StringMapper({
		locale: "fr-FR",
		name: "tolower"
	});
    assertEquals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
}
function testToLowerMixedWithAccents_fr_FR() {
	var mapper = new ilib.StringMapper({
		locale: "fr-FR",
		name: "tolower"
	});
    assertEquals("tête-à-tête", mapper.map("Tête-à-Tête"));
}

/* French Canadian tests */
function testToLower_fr_CA() {
	var mapper = new ilib.StringMapper({
		locale: "fr-CA",
		name: "tolower"
	});
    assertEquals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
}
