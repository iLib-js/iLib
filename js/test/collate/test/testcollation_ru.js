/*
 * testcollation_ru.js - test the Collator object in Russian
 * 
 * Copyright © 2015, JEDLSoft
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

var ilib = require("../lib/ilib.js");
var Collator = require("../lib/Collator.js");
function testJSCollatorQuat_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А < А́", col.compare("А", "А́") < 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а < а́", col.compare("а", "а́") < 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
}

function testJSCollatorTer_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А = А́", col.compare("А", "А́") === 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а = а́", col.compare("а", "а́") === 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
}

function testJSCollatorSec_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А = А́", col.compare("А", "А́") === 0);
	assertTrue("А́ = а", col.compare("А́", "а") === 0);
	assertTrue("а = а́", col.compare("а", "а́") === 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
	assertTrue("Ӑ = ӑ", col.compare("Ӑ", "ӑ") === 0);
	assertTrue("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
	assertTrue("Ӓ = ӓ", col.compare("Ӓ", "ӓ") === 0);
	assertTrue("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б = б", col.compare("Б", "б") === 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В = в", col.compare("В", "в") === 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г = г", col.compare("Г", "г") === 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ = ґ", col.compare("Ґ", "ґ") === 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ = ғ", col.compare("Ғ", "ғ") === 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ = ӻ", col.compare("Ӻ", "ӻ") === 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ = ҕ", col.compare("Ҕ", "ҕ") === 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ = ӷ", col.compare("Ӷ", "ӷ") === 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
	assertTrue("Ѓ = ѓ", col.compare("Ѓ", "ѓ") === 0);
	assertTrue("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
}

function testJSCollatorPri_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А = А́", col.compare("А", "А́") === 0);
	assertTrue("А́ = а", col.compare("А́", "а") === 0);
	assertTrue("а = а́", col.compare("а", "а́") === 0);
	assertTrue("а́ = Ӑ", col.compare("а́", "Ӑ") === 0);
	assertTrue("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
	assertTrue("Ӑ = ӑ", col.compare("Ӑ", "ӑ") === 0);
	assertTrue("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
	assertTrue("ӑ = Ӓ", col.compare("ӑ", "Ӓ") === 0);
	assertTrue("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
	assertTrue("Ӓ = ӓ", col.compare("Ӓ", "ӓ") === 0);
	assertTrue("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б = б", col.compare("Б", "б") === 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В = в", col.compare("В", "в") === 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г = г", col.compare("Г", "г") === 0);
	assertTrue("г = Ґ", col.compare("г", "Ґ") === 0);
	assertTrue("Ґ = ґ", col.compare("Ґ", "ґ") === 0);
	assertTrue("ґ = Ғ", col.compare("ґ", "Ғ") === 0);
	assertTrue("Ғ = ғ", col.compare("Ғ", "ғ") === 0);
	assertTrue("ғ = Ӻ", col.compare("ғ", "Ӻ") === 0);
	assertTrue("Ӻ = ӻ", col.compare("Ӻ", "ӻ") === 0);
	assertTrue("ӻ = Ҕ", col.compare("ӻ", "Ҕ") === 0);
	assertTrue("Ҕ = ҕ", col.compare("Ҕ", "ҕ") === 0);
	assertTrue("ҕ = Ӷ", col.compare("ҕ", "Ӷ") === 0);
	assertTrue("Ӷ = ӷ", col.compare("Ӷ", "ӷ") === 0);
	assertTrue("ӷ = Ѓ", col.compare("ӷ", "Ѓ") === 0);
	assertTrue("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
	assertTrue("Ѓ = ѓ", col.compare("Ѓ", "ѓ") === 0);
	assertTrue("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
}

function testJSCollatorQuatSort_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А < А́", col.compare("А", "А́") < 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а < а́", col.compare("а", "а́") < 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
}

function testJSCollatorTerSort_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А < А́", col.compare("А", "А́") < 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а < а́", col.compare("а", "а́") < 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
}

function testJSCollatorSecSort_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А < А́", col.compare("А", "А́") < 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а < а́", col.compare("а", "а́") < 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
}

function testJSCollatorPriSort_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
	assertTrue("А < А́", col.compare("А", "А́") < 0);
	assertTrue("А́ < а", col.compare("А́", "а") < 0);
	assertTrue("а < а́", col.compare("а", "а́") < 0);
	assertTrue("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
	assertTrue("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
	assertTrue("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
	assertTrue("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
	assertTrue("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
	assertTrue("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
	assertTrue("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
	assertTrue("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
	assertTrue("ӓ < Б", col.compare("ӓ", "Б") < 0);
	assertTrue("Б < б", col.compare("Б", "б") < 0);
	assertTrue("б < В", col.compare("б", "В") < 0);
	assertTrue("В < в", col.compare("В", "в") < 0);
	assertTrue("в < Г", col.compare("в", "Г") < 0);
	assertTrue("Г < г", col.compare("Г", "г") < 0);
	assertTrue("г < Ґ", col.compare("г", "Ґ") < 0);
	assertTrue("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
	assertTrue("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
	assertTrue("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
	assertTrue("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
	assertTrue("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
	assertTrue("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
	assertTrue("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
	assertTrue("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
	assertTrue("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
	assertTrue("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
	assertTrue("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
	assertTrue("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
	assertTrue("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
}

function testCollatorCase_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
        "У",
        "Ё",
        "ГУ",
        "Й",
        "Е́",
        "А́А",
        "Ѐ",
        "Ю",
        "аа",
        "ё",
        "Ꙕ",
        "И",
        "Е",
        "Гж",
        "е",
        "Ў",
        "Ё"
	];

    input.sort(col.getComparator());

    var expected = [
        "А́А",
        "аа",
        "Гж",
        "ГУ",
        "Е",
        "Е́",
        "е",
        "Ѐ",
        "Ё",
        "Ё",
        "ё",
        "И",
        "Й",
        "У",
        "Ў",
        "Ю",
        "Ꙕ"
	];

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
        "У",
        "Ё",
        "ГУ",
        "Й",
        "Е́",
        "А́А",
        "Ѐ",
        "Ю",
        "аа",
        "ё",
        "Ꙕ",
        "И",
        "Е",
        "Гж",
        "е",
        "Ў",
        "Ё"
	];

    input.sort(col.getComparator());

    var expected = [
        "А́А",
        "аа",
        "Гж",
        "ГУ",
        "Е",
        "Е́",
        "е",
        "Ѐ",
        "Ё",
        "Ё",
        "ё",
        "И",
        "Й",
        "У",
        "Ў",
        "Ю",
        "Ꙕ"
	];

    assertArrayEquals(expected, input);
}

function testCollatorIgnoreStressMarks_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "case",
		usage: "search"
	});
    assertNotUndefined(col);

    var comp = col.getComparator();
    
    // ignore stress marks
    assertEquals(0, comp("за́мок", "замо́к"));
    assertEquals(0, comp("сто́ящий", "стоя́щий"));
    assertEquals(0, comp("чудно́", "чу́дно"));
    assertEquals(0, comp("молоде́ц", "мо́лодец"));
    assertEquals(0, comp("узна́ю", "узнаю́"));
    assertEquals(0, comp("отреза́ть", "отре́зать"));
    assertEquals(0, comp("Ты́ съел печенье?", "Ты съе́л печенье?"));
    
    assertEquals(0, comp("ЗА́МОК", "ЗАМО́К"));
}

function testJSCollatorQuatLatin_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// all latin letters
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < E", col.compare("d", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < F", col.compare("e", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < I", col.compare("h", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
}

function testCollatorPrimaryMixed_ru() {
	var col = new Collator({
		locale: "ru-RU",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
        "У",
        "Ё",
        "ГУ",
        "banana",
        "Й",
        "Е́",
        "А́А",
        "Ѐ",
        "peach",
        "apple",
        "Ю",
        "аа",
        "ё",
        "Ꙕ",
        "И",
        "Е",
        "Гж",
        "orange",
        "е",
        "Ў",
        "raspberry",
        "Ё"
	];

    input.sort(col.getComparator());

    // Latin letters sort before the Cyrillic ones
    
    var expected = [
        "apple",
        "banana",
        "orange",
        "peach",
        "raspberry",
        "А́А",
        "аа",
        "Гж",
        "ГУ",
        "Е",
        "Е́",
        "е",
        "Ѐ",
        "Ё",
        "Ё",
        "ё",
        "И",
        "Й",
        "У",
        "Ў",
        "Ю",
        "Ꙕ"
	];

    assertArrayEquals(expected, input);
}
