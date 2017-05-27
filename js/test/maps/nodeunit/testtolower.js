/*
 * testtolower.js - Test the lower-casing mapper
 * 
 * Copyright © 2014-2017, JEDLSoft
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

if (typeof(CaseMapper) === "undefined") {
	var CaseMapper = require("./../lib/CaseMapper.js");
    test.done();
}

function testToLowerFromLower_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("this is a string", mapper.map("this is a string"));
    test.done();
}

function testToLowerFromUpper_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("this is a string", mapper.map("THIS IS A STRING"));
    test.done();
}

function testToLowerFromMixed_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("this is a string", mapper.map("This is a String"));
    test.done();
}

function testToLowerFromPunctuationUnchanged_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
    test.done();
}

function testToLowerFromNonLatinUnchanged_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
    test.done();
}

function testToLowerFromExtendedLatin_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("ãéìôü", mapper.map("ÃÉÌÔÜ"));
    test.done();
}

function testToLowerCyrillic_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("празл", mapper.map("ПРАЗЛ"));
    test.done();
}

function testToLowerGreek_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("αβγδεζηθ", mapper.map("ΑΒΓΔΕΖΗΘ"));
    test.done();
}

function testToLowerGreekSigma_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
	test.equals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
    test.done();
}

function testToLowerCoptic_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ", mapper.map("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ"));
    test.done();
}

function testToLowerArmenian_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("աբգդեզէըթ", mapper.map("ԱԲԳԴԵԶԷԸԹ"));
    test.done();
}

function testToLowerGeorgian_default(test) {
	var mapper = new CaseMapper({
		direction: "tolower"
	});
    test.equals("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ", mapper.map("ႠႡႢႣႤႥႦႧႨႩ"));
    test.done();
}

/* Azeri tests */
function testToLower_az_AZ(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "az-AZ"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* Turkish tests */
function testToLower_tr_TR(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "tr-TR"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* Crimean Tatar tests */
function testToLower_crh_Latn_UK(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "crh-Latn-UK"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* Kazakh tests */
function testToLower_kk_Latn_KK(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "kk-Latn-KK"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* Tatar tests */
function testToLower_tt_Latn_RU(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "tt-Latn-RU"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* Karachay-Balkar tests */
function testToLower_krc_Latn_RU(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "krc-Latn-RU"
	});
    test.equals("ıi", mapper.map("Iİ"));
    test.done();
}

/* German tests */
function testToLowerDoubleS_de_DE(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "de-DE"
	});
    test.equals("gross", mapper.map("GROSS"));
    test.done();
}

function testToLowerWithSZ_de_DE(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "de-DE"
	});
    test.equals("groß", mapper.map("GROß"));
    test.done();
}


/* Russian tests */
function testToLowerLowerPalochka_ru_RU(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ru-RU"
	});
    test.equals("ӏ", mapper.map("ӏ"));
    test.done();
}

function testToLowerUpperPalochka_ru_RU(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ru-RU"
	});
    test.equals("Ӏ", mapper.map("Ӏ"));
    test.done();
}

/* Greek tests */
function testToLower_el_GR(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "el-GR"
	});
    test.equals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
    test.done();
}

/* French tests */
function testToLowerNoAccents_fr_FR(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    test.equals("tete-a-tete", mapper.map("TETE-A-TETE"));
    test.done();
}
function testToLowerWithAccents_fr_FR(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    test.equals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
    test.done();
}
function testToLowerMixedWithAccents_fr_FR(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-FR"
	});
    test.equals("tête-à-tête", mapper.map("Tête-à-Tête"));
    test.done();
}

/* French Canadian tests */
function testToLower_fr_CA(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "fr-CA"
	});
    test.equals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
    test.done();
}

//make sure it is not broken in Lithuanian
function testToLower_lt(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "lt-LT"
	});
    test.equals("aąbcčdeęėfghiįyjklmnoprsštuųūvzž", mapper.map("AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ"));
    test.done();
}

/*Afrikaan Test cases*/
function testToLower_af_ZA1(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    test.equals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
    test.done();
}

function testToLower_af_ZA2(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    test.equals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
    test.done();
}

function testToLowerMixed_af_ZA3(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-ZA"
	});
    test.equals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
    test.done();
}


function testToLower_af_NA1(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    test.equals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
    test.done();
}

function testToLower_af_NA2(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    test.equals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
    test.done();
}

function testToLowerMixed_af_NA3(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "af-NA"
	});
    test.equals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
    test.done();
}

/*Hausa */
function testToLower_ha_GH1(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-GH"
	});
    test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
    test.done();
}

function testToLower_ha_NE1(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-NE"
	});
    test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
    test.done();
}

function testToLower_ha_NG1(test) {
	var mapper = new CaseMapper({
		direction: "tolower",
		locale: "ha-NG"
	});
    test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
    test.done();
}
