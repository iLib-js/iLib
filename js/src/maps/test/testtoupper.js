/*
 * testtoupper.js - Test the upper-casing mapper
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

function testToUpperFromLower_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("THIS IS A STRING", mapper.map("this is a string"));
}

function testToUpperFromUpper_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("THIS IS A STRING", mapper.map("THIS IS A STRING"));
}

function testToUpperFromMixed_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("THIS IS A STRING", mapper.map("This is a String"));
}

function testToUpperFromPunctuationUnchanged_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
}

function testToUpperFromNonLatinUnchanged_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
}

function testToUpperFromExtendedLatin_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ÃÉÌÔÜ", mapper.map("ãéìôü"));
}

function testToUpperCyrillic_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ПРАЗЛ", mapper.map("празл"));
}

function testToUpperGreek_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ΑΒΓΔΕΖΗΘ", mapper.map("αβγδεζηθ"));
}

function testToUpperGreekSigma_default() {
	var mapper = new ilib.ToUpperMapper();
	assertEquals("ΙΑΣΑΣ ΙΑΣΑΣ", mapper.map("ιασας ιασας"));
}

function testToUpperCoptic_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ", mapper.map("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ"));
}

function testToUpperArmenian_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ԱԲԳԴԵԶԷԸԹ", mapper.map("աբգդեզէըթ"));
}

function testToUpperGeorgian_default() {
	var mapper = new ilib.ToUpperMapper();
    assertEquals("ႠႡႢႣႤႥႦႧႨႩ", mapper.map("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ"));
}

/* Azeri tests */
function testToUpper_az_AZ() {
	var mapper = new ilib.ToUpperMapper({
		locale: "az-AZ"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Turkish tests */
function testToUpper_tr_TR() {
	var mapper = new ilib.ToUpperMapper({
		locale: "tr-TR"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Crimean Tatar tests */
function testToUpper_crh_Latn_UK() {
	var mapper = new ilib.ToUpperMapper({
		locale: "crh-Latn-UK"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Kazakh tests */
function testToUpper_kk_Latn_KK() {
	var mapper = new ilib.ToUpperMapper({
		locale: "kk-Latn-KK"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Tatar tests */
function testToUpper_tt_Latn_RU() {
	var mapper = new ilib.ToUpperMapper({
		locale: "tt-Latn-RU"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Karachay-Balkar tests */
function testToUpper_krc_Latn_RU() {
	var mapper = new ilib.ToUpperMapper({
		locale: "krc-Latn-RU"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* German tests */
function testToUpper_de_DE() {
	var mapper = new ilib.ToUpperMapper({
		locale: "de-DE"
	});
    assertEquals("GROSS", mapper.map("groß"));
}

/* Russian tests */
function testToUpperLowerPalochka_ru_RU() {
	var mapper = new ilib.ToUpperMapper({
		locale: "ru-RU"
	});
    assertEquals("Ӏ", mapper.map("ӏ"));
}

function testToUpperUpperPalochka_ru_RU() {
	var mapper = new ilib.ToUpperMapper({
		locale: "ru-RU"
	});
    assertEquals("Ӏ", mapper.map("Ӏ"));
}

/* Greek tests */
function testToUpper_el_GR() {
	var mapper = new ilib.ToUpperMapper({
		locale: "el-GR"
	});
    assertEquals("ΙΑΣΑΣ ΙΑΣΑΣ", mapper.map("ιασας ιασας"));
}

function testToUpperAccents_el_GR() {
	var mapper = new ilib.ToUpperMapper({
		locale: "el-GR"
	});
    assertEquals("ΑΕΗΙΥΙΥΟΥΩΙ", mapper.map("άέήίΰϊϋόύώΐ"));
}

/* French tests */
function testToUpper_fr_FR() {
	var mapper = new ilib.ToUpperMapper({
		locale: "fr-FR"
	});
    assertEquals("TETE-A-TETE", mapper.map("Tête-à-tête"));
}

/* French Canadian tests */
function testToUpper_fr_CA() {
	var mapper = new ilib.ToUpperMapper({
		locale: "fr-CA"
	});
    assertEquals("TÊTE-À-TÊTE", mapper.map("Tête-à-tête"));
}
