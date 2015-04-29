/*
 * testtolower.js - Test the lower-casing mapper
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

var CaseMapper = require("./../lib/CaseMapper.js");

function testToLowerFromLower_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("this is a string", mapper.map("this is a string"));
}

function testToLowerFromUpper_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("this is a string", mapper.map("THIS IS A STRING"));
}

function testToLowerFromMixed_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("this is a string", mapper.map("This is a String"));
}

function testToLowerFromPunctuationUnchanged_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
}

function testToLowerFromNonLatinUnchanged_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
}

function testToLowerFromExtendedLatin_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("ãéìôü", mapper.map("ÃÉÌÔÜ"));
}

function testToLowerCyrillic_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("празл", mapper.map("ПРАЗЛ"));
}

function testToLowerGreek_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("αβγδεζηθ", mapper.map("ΑΒΓΔΕΖΗΘ"));
}

function testToLowerGreekSigma_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
	assertEquals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
}

function testToLowerCoptic_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ", mapper.map("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ"));
}

function testToLowerArmenian_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("աբգդեզէըթ", mapper.map("ԱԲԳԴԵԶԷԸԹ"));
}

function testToLowerGeorgian_default() {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    assertEquals("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ", mapper.map("ႠႡႢႣႤႥႦႧႨႩ"));
}

/* Azeri tests */
function testToLower_az_AZ() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "az-AZ"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Turkish tests */
function testToLower_tr_TR() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "tr-TR"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Crimean Tatar tests */
function testToLower_crh_Latn_UK() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "crh-Latn-UK"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Kazakh tests */
function testToLower_kk_Latn_KK() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "kk-Latn-KK"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Tatar tests */
function testToLower_tt_Latn_RU() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "tt-Latn-RU"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* Karachay-Balkar tests */
function testToLower_krc_Latn_RU() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "krc-Latn-RU"
	});
    assertEquals("ıi", mapper.map("Iİ"));
}

/* German tests */
function testToLowerDoubleS_de_DE() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "de-DE"
	});
    assertEquals("gross", mapper.map("GROSS"));
}

function testToLowerWithSZ_de_DE() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "de-DE"
	});
    assertEquals("groß", mapper.map("GROß"));
}


/* Russian tests */
function testToLowerLowerPalochka_ru_RU() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ru-RU"
	});
    assertEquals("ӏ", mapper.map("ӏ"));
}

function testToLowerUpperPalochka_ru_RU() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ru-RU"
	});
    assertEquals("Ӏ", mapper.map("Ӏ"));
}

/* Greek tests */
function testToLower_el_GR() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "el-GR"
	});
    assertEquals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
}

/* French tests */
function testToLowerNoAccents_fr_FR() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    assertEquals("tete-a-tete", mapper.map("TETE-A-TETE"));
}
function testToLowerWithAccents_fr_FR() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    assertEquals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
}
function testToLowerMixedWithAccents_fr_FR() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    assertEquals("tête-à-tête", mapper.map("Tête-à-Tête"));
}

/* French Canadian tests */
function testToLower_fr_CA() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-CA"
	});
    assertEquals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
}

//make sure it is not broken in Lithuanian
function testToLower_lt() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "lt-LT"
	});
    assertEquals("aąbcčdeęėfghiįyjklmnoprsštuųūvzž", mapper.map("AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ"));
}

/*Afrikaan Test cases*/
function testToLower_af_ZA1() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    assertEquals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
}

function testToLower_af_ZA2() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    assertEquals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
}

function testToLowerMixed_af_ZA3() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    assertEquals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
}


function testToLower_af_NA1() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    assertEquals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
}

function testToLower_af_NA2() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    assertEquals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
}

function testToLowerMixed_af_NA3() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    assertEquals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
}

/*Hausa */
function testToLower_ha_GH1() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-GH"
	});
    assertEquals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
}

function testToLower_ha_NE1() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-NE"
	});
     assertEquals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
}

function testToLower_ha_NG1() {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-NG"
	});
     assertEquals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
}
