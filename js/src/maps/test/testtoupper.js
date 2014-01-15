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
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("this is a string"));
}

function testToUpperFromUpper_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("THIS IS A STRING"));
}

function testToUpperFromMixed_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("This is a String"));
}

function testToUpperFromPunctuationUnchanged_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
}

function testToUpperFromNonLatinUnchanged_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
}

function testToUpperFromExtendedLatin_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("ÃÉÌÔÜ", mapper.map("ãéìôü"));
}

function testToUpperCyrillic_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("ПРАЗЛ", mapper.map("празл"));
}

function testToUpperGreek_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("ΑΒΓΔΕΖΗΘ", mapper.map("αβγδεζηθ"));
}

function testToUpperArmenian_default() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("ԱԲԳԴԵԶԷԹ", mapper.map("աբգդեզէըթ"));
}

/* Azeri tests */
function testToUpper_az_AZ() {
	var mapper = new ilib.StringMapper({
		locale: "az-AZ",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Turkish tests */
function testToUpper_tr_TR() {
	var mapper = new ilib.StringMapper({
		locale: "tr-TR",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Crimean Tatar tests */
function testToUpper_crh_Latn_UK() {
	var mapper = new ilib.StringMapper({
		locale: "crh-Latn-UK",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Kazakh tests */
function testToUpper_kk_Latn_KK() {
	var mapper = new ilib.StringMapper({
		locale: "kk-Latn-KK",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Tatar tests */
function testToUpper_tt_Latn_RU() {
	var mapper = new ilib.StringMapper({
		locale: "tt-Latn-RU",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Karachay-Balkar tests */
function testToUpper_krc_Latn_RU() {
	var mapper = new ilib.StringMapper({
		locale: "krc-Latn-RU",
		name: "toupper"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* German tests */
function testToUpper_de_DE() {
	var mapper = new ilib.StringMapper({
		locale: "de-DE",
		name: "toupper"
	});
    assertEquals("GROSS", mapper.map("groß"));
}

/* Russian tests */
function testToUpperLowerPalochka_ru_RU() {
	var mapper = new ilib.StringMapper({
		locale: "ru-RU",
		name: "toupper"
	});
    assertEquals("Ӏ", mapper.map("ӏ"));
}

function testToUpperUpperPalochka_ru_RU() {
	var mapper = new ilib.StringMapper({
		locale: "ru-RU",
		name: "toupper"
	});
    assertEquals("Ӏ", mapper.map("Ӏ"));
}

/* Greek tests */
function testToUpper_el_GR() {
	var mapper = new ilib.StringMapper({
		locale: "el-GR",
		name: "toupper"
	});
    assertEquals("ΙΑΣΑΣ", mapper.map("ιασας"));
}

function testToUpperAccents_el_GR() {
	var mapper = new ilib.StringMapper({
		locale: "el-GR",
		name: "toupper"
	});
    assertEquals("ΑΕΗΙΥΙΥΟΥΩΙ", mapper.map("άέήίΰϊϋόύώΐ"));
}

/* French tests */
function testToUpper_fr_FR() {
	var mapper = new ilib.StringMapper({
		locale: "fr-FR",
		name: "toupper"
	});
    assertEquals("TETE-A-TETE", mapper.map("Tête-à-tête"));
}

/* French Canadian tests */
function testToUpper_fr_CA() {
	var mapper = new ilib.StringMapper({
		locale: "fr-CA",
		name: "toupper"
	});
    assertEquals("TÊTE-À-TÊTE", mapper.map("Tête-à-tête"));
}
