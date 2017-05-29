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
},

module.exports = {
	testToLowerFromLower_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("this is a string", mapper.map("this is a string"));
		test.done();
	},

	testToLowerFromUpper_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("this is a string", mapper.map("THIS IS A STRING"));
		test.done();
	},

	testToLowerFromMixed_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("this is a string", mapper.map("This is a String"));
		test.done();
	},

	testToLowerFromPunctuationUnchanged_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("!@#$%^&*()", mapper.map("!@#$%^&*()"));
		test.done();
	},

	testToLowerFromNonLatinUnchanged_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("演蟻人 道格拉斯最老英雄", mapper.map("演蟻人 道格拉斯最老英雄"));
		test.done();
	},

	testToLowerFromExtendedLatin_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("ãéìôü", mapper.map("ÃÉÌÔÜ"));
		test.done();
	},

	testToLowerCyrillic_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("празл", mapper.map("ПРАЗЛ"));
		test.done();
	},

	testToLowerGreek_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("αβγδεζηθ", mapper.map("ΑΒΓΔΕΖΗΘ"));
		test.done();
	},

	testToLowerGreekSigma_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
		test.done();
	},

	testToLowerCoptic_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗ", mapper.map("ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖ"));
		test.done();
	},

	testToLowerArmenian_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("աբգդեզէըթ", mapper.map("ԱԲԳԴԵԶԷԸԹ"));
		test.done();
	},

	testToLowerGeorgian_default: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower"
		});
		test.equals("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉ", mapper.map("ႠႡႢႣႤႥႦႧႨႩ"));
		test.done();
	},

	/* Azeri tests */
	testToLower_az_AZ: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "az-AZ"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* Turkish tests */
	testToLower_tr_TR: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "tr-TR"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* Crimean Tatar tests */
	testToLower_crh_Latn_UK: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "crh-Latn-UK"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* Kazakh tests */
	testToLower_kk_Latn_KK: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "kk-Latn-KK"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* Tatar tests */
	testToLower_tt_Latn_RU: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "tt-Latn-RU"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* Karachay-Balkar tests */
	testToLower_krc_Latn_RU: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "krc-Latn-RU"
		});
		test.equals("ıi", mapper.map("Iİ"));
		test.done();
	},

	/* German tests */
	testToLowerDoubleS_de_DE: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "de-DE"
		});
		test.equals("gross", mapper.map("GROSS"));
		test.done();
	},

	testToLowerWithSZ_de_DE: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "de-DE"
		});
		test.equals("groß", mapper.map("GROß"));
		test.done();
	},


	/* Russian tests */
	testToLowerLowerPalochka_ru_RU: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "ru-RU"
		});
		test.equals("ӏ", mapper.map("ӏ"));
		test.done();
	},

	testToLowerUpperPalochka_ru_RU: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "ru-RU"
		});
		test.equals("Ӏ", mapper.map("Ӏ"));
		test.done();
	},

	/* Greek tests */
	testToLower_el_GR: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "el-GR"
		});
		test.equals("ιασας ιασας", mapper.map("ΙΑΣΑΣ ΙΑΣΑΣ"));
		test.done();
	},

	/* French tests */
	testToLowerNoAccents_fr_FR: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "fr-FR"
		});
		test.equals("tete-a-tete", mapper.map("TETE-A-TETE"));
		test.done();
	},
	testToLowerWithAccents_fr_FR: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "fr-FR"
		});
		test.equals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
		test.done();
	},
	testToLowerMixedWithAccents_fr_FR: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "fr-FR"
		});
		test.equals("tête-à-tête", mapper.map("Tête-à-Tête"));
		test.done();
	},

	/* French Canadian tests */
	testToLower_fr_CA: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "fr-CA"
		});
		test.equals("tête-à-tête", mapper.map("TÊTE-À-TÊTE"));
		test.done();
	},

//		make sure it is not broken in Lithuanian
	testToLower_lt: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "lt-LT"
		});
		test.equals("aąbcčdeęėfghiįyjklmnoprsštuųūvzž", mapper.map("AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ"));
		test.done();
	},

	/*Afrikaan Test cases*/
	testToLower_af_ZA1: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-ZA"
		});
		test.equals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
		test.done();
	},

	testToLower_af_ZA2: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-ZA"
		});
		test.equals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
		test.done();
	},

	testToLowerMixed_af_ZA3: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-ZA"
		});
		test.equals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
		test.done();
	},


	testToLower_af_NA1: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-NA"
		});
		test.equals("aáäbcdeêëéèfg", mapper.map("AÁÄBCDEÊËÉÈFG"));
		test.done();
	},

	testToLower_af_NA2: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-NA"
		});
		test.equals("hiîïíjklmnoôöópqrstuûüúvwxyz", mapper.map("HIÎÏÍJKLMNOÔÖÓPQRSTUÛÜÚVWXYZ"));
		test.done();
	},

	testToLowerMixed_af_NA3: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "af-NA"
		});
		test.equals("hiî - ïíjkl", mapper.map("Hiî - ÏÍjkL"));
		test.done();
	},

	/*Hausa */
	testToLower_ha_GH1: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "ha-GH"
		});
		test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
		test.done();
	},

	testToLower_ha_NE1: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "ha-NE"
		});
		test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
		test.done();
	},

	testToLower_ha_NG1: function(test) {
		var mapper = new CaseMapper({
			direction: "tolower",
			locale: "ha-NG"
		});
		test.equals("abɓcdɗefghijkƙlmnorstuwyƴz", mapper.map("ABƁCDƊEFGHIJKƘLMNORSTUWYƳZ"));
		test.done();
	}
};
