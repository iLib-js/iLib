/*
 * testtoupper.js - Test the upper-casing mapper
 * 
 * Copyright © 2014-2015, JEDLSoft
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
	var mapper = new ilib.CaseMapper();
    assertEquals("THIS IS A STRING", mapper.map("this is a string"));
}

function testToUpperFromUpper_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("THIS IS A STRING", mapper.map("THIS IS A STRING"));
}

function testToUpperFromMixed_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("THIS IS A STRING", mapper.map("This is a String"));
}

function testToUpperFromLowerExplicitDirection_default() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("this is a string"));
}

function testToUpperFromUpperExplicitDirection_default() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("THIS IS A STRING"));
}

function testToUpperFromMixedExplicitDirection_default() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("This is a String"));
}

function testToUpperFromPunctuationUnchanged_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
}

function testToUpperFromNonLatinUnchanged_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
}

function testToUpperFromExtendedLatin_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ÃÉÌÔÜ", mapper.map("ãéìôü"));
}

function testToUpperCyrillic_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ПРАЗЛ", mapper.map("празл"));
}

function testToUpperGreek_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ΑΒΓΔΕΖΗΘ", mapper.map("αβγδεζηθ"));
}

function testToUpperGreekSigma_default() {
	var mapper = new ilib.CaseMapper();
	assertEquals("ΙΑΣΑΣ ΙΑΣΑΣ", mapper.map("ιασας ιασας"));
}

function testToUpperCoptic_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ", mapper.map("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ"));
}

function testToUpperArmenian_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ԱԲԳԴԵԶԷԸԹ", mapper.map("աբգդեզէըթ"));
}

function testToUpperGeorgian_default() {
	var mapper = new ilib.CaseMapper();
    assertEquals("ႠႡႢႣႤႥႦႧႨႩ", mapper.map("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ"));
}

/* Azeri tests */
function testToUpper_az_AZ() {
	var mapper = new ilib.CaseMapper({
		locale: "az-AZ"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Turkish tests */
function testToUpper_tr_TR() {
	var mapper = new ilib.CaseMapper({
		locale: "tr-TR"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Crimean Tatar tests */
function testToUpper_crh_Latn_UK() {
	var mapper = new ilib.CaseMapper({
		locale: "crh-Latn-UK"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Kazakh tests */
function testToUpper_kk_Latn_KK() {
	var mapper = new ilib.CaseMapper({
		locale: "kk-Latn-KK"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Tatar tests */
function testToUpper_tt_Latn_RU() {
	var mapper = new ilib.CaseMapper({
		locale: "tt-Latn-RU"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* Karachay-Balkar tests */
function testToUpper_krc_Latn_RU() {
	var mapper = new ilib.CaseMapper({
		locale: "krc-Latn-RU"
	});
    assertEquals("Iİ", mapper.map("ıi"));
}

/* German tests */
function testToUpper_de_DE() {
	var mapper = new ilib.CaseMapper({
		locale: "de-DE"
	});
    assertEquals("GROSS", mapper.map("groß"));
}

/* Russian tests */
function testToUpperLowerPalochka_ru_RU() {
	var mapper = new ilib.CaseMapper({
		locale: "ru-RU"
	});
    assertEquals("Ӏ", mapper.map("ӏ"));
}

function testToUpperUpperPalochka_ru_RU() {
	var mapper = new ilib.CaseMapper({
		locale: "ru-RU"
	});
    assertEquals("Ӏ", mapper.map("Ӏ"));
}

/* Greek tests */
function testToUpper_el_GR() {
	var mapper = new ilib.CaseMapper({
		locale: "el-GR"
	});
    assertEquals("ΙΑΣΑΣ ΙΑΣΑΣ", mapper.map("ιασας ιασας"));
}

function testToUpperAccents_el_GR() {
	var mapper = new ilib.CaseMapper({
		locale: "el-GR"
	});
    assertEquals("ΑΕΗΙΥΙΥΟΥΩΙ", mapper.map("άέήίΰϊϋόύώΐ"));
}

/* French tests */
function testToUpper_fr_FR() {
	var mapper = new ilib.CaseMapper({
		locale: "fr-FR"
	});
    assertEquals("TETE-A-TETE", mapper.map("Tête-à-tête"));
}

/* French Canadian tests */
function testToUpper_fr_CA() {
	var mapper = new ilib.CaseMapper({
		locale: "fr-CA"
	});
    assertEquals("TÊTE-À-TÊTE", mapper.map("Tête-à-tête"));
}

// make sure it is not broken in Lithuanian
function testToUpper_lt() {
	var mapper = new ilib.CaseMapper({
		locale: "lt-LT"
	});
    assertEquals("AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ", mapper.map("aąbcčdeęėfghiįyjklmnoprsštuųūvzž"));
}

/*Afrikaans Test cases*/
function testToUpper_af_ZA1() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-ZA"
	});
    assertEquals("AÁÄBCDEÊËÉÈFG", mapper.map("aáäbcdeêëéèfg"));
}

function testToUpper_af_ZA2() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-ZA"
	});
    assertEquals("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ", mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"));
}

function testToUpperMixed_af_ZA3() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-ZA"
	});
    assertEquals("HIÎ - ÏÍJKL", mapper.map("hiî - ïíjkl"));
}


function testToUpper_af_NA1() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-NA"
	});
    assertEquals("AÁÄBCDEÊËÉÈFG", mapper.map("aáäbcdeêëéèfg"));
}

function testToUpper_af_NA2() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-NA"
	});
    assertEquals("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ", mapper.map("hiîïíjklmnoôöópqrstuûüúvwxyz"));
}

function testToUpperMixed_af_NA3() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "af-NA"
	});
    assertEquals("HIÎ - ÏÍJKL", mapper.map("hiî - ïíjkl"));
}
/*Hausa */
function testToUpper_ha_GH1() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "ha-GH"
	});
    assertEquals("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ", mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"));
}

function testToUpper_ha_NE1() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "ha-NE"
	});
    assertEquals("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ", mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"));
}

function testToUpper_ha_NG1() {
	var mapper = new ilib.CaseMapper({
		direction: "toupper",
		locale: "ha-NG"
	});
    assertEquals("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ", mapper.map("abɓcdɗefghijkƙlmnorstuwyƴz"));
}


