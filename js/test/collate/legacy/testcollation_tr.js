/*
 * testcollation_tr.js - test the Collator object in Turkish
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

function testJSCollatorQuat_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â < Â",  col.compare("Â", "Â") < 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â < â",  col.compare("â", "â") < 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç < Ç",  col.compare("Ç", "Ç") < 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç < ç",  col.compare("ç", "ç") < 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ < ğ",  col.compare("ğ", "ğ") < 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î < Î",  col.compare("Î", "Î") < 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î < î",  col.compare("î", "î") < 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö < Ö",  col.compare("Ö", "Ö") < 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö < ö",  col.compare("ö", "ö") < 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş < Ş",  col.compare("Ş", "Ş") < 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş < ş",  col.compare("ş", "ş") < 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û < Û",  col.compare("Û", "Û") < 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û < û",  col.compare("û", "û") < 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü < Ü",  col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü",  col.compare("ü", "ü") < 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorTer_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â = Â",  col.compare("Â", "Â") === 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â = â",  col.compare("â", "â") === 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç = Ç",  col.compare("Ç", "Ç") === 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç = ç",  col.compare("ç", "ç") === 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ = ğ",  col.compare("ğ", "ğ") === 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î = Î",  col.compare("Î", "Î") === 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î = î",  col.compare("î", "î") === 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö = Ö",  col.compare("Ö", "Ö") === 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö = ö",  col.compare("ö", "ö") === 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş = Ş",  col.compare("Ş", "Ş") === 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş = ş",  col.compare("ş", "ş") === 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û = Û",  col.compare("Û", "Û") === 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û = û",  col.compare("û", "û") === 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü = Ü",  col.compare("Ü", "Ü") === 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü = ü",  col.compare("ü", "ü") === 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorSec_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A = a",  col.compare("A", "a") === 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â = Â",  col.compare("Â", "Â") === 0);
	assertTrue("Â = â",  col.compare("Â", "â") === 0);
	assertTrue("â = â",  col.compare("â", "â") === 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C = c",  col.compare("C", "c") === 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç = Ç",  col.compare("Ç", "Ç") === 0);
	assertTrue("Ç = ç",  col.compare("Ç", "ç") === 0);
	assertTrue("ç = ç",  col.compare("ç", "ç") === 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G = g",  col.compare("G", "g") === 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
	assertTrue("Ğ = ğ",  col.compare("Ğ", "ğ") === 0);
	assertTrue("ğ = ğ",  col.compare("ğ", "ğ") === 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H = h",  col.compare("H", "h") === 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I = ı",  col.compare("I", "ı") === 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î = Î",  col.compare("Î", "Î") === 0);
	assertTrue("Î = î",  col.compare("Î", "î") === 0);
	assertTrue("î = î",  col.compare("î", "î") === 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ = i",  col.compare("İ", "i") === 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O = o",  col.compare("O", "o") === 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö = Ö",  col.compare("Ö", "Ö") === 0);
	assertTrue("Ö = ö",  col.compare("Ö", "ö") === 0);
	assertTrue("ö = ö",  col.compare("ö", "ö") === 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S = s",  col.compare("S", "s") === 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş = Ş",  col.compare("Ş", "Ş") === 0);
	assertTrue("Ş = ş",  col.compare("Ş", "ş") === 0);
	assertTrue("ş = ş",  col.compare("ş", "ş") === 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U = u",  col.compare("U", "u") === 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û = Û",  col.compare("Û", "Û") === 0);
	assertTrue("Û = û",  col.compare("Û", "û") === 0);
	assertTrue("û = û",  col.compare("û", "û") === 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü = Ü",  col.compare("Ü", "Ü") === 0);
	assertTrue("Ü = ü",  col.compare("Ü", "ü") === 0);
	assertTrue("ü = ü",  col.compare("ü", "ü") === 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorPri_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A = a",  col.compare("A", "a") === 0);
	assertTrue("a = Â",  col.compare("a", "Â") === 0);
	assertTrue("Â = Â",  col.compare("Â", "Â") === 0);
	assertTrue("Â = â",  col.compare("Â", "â") === 0);
	assertTrue("â = â",  col.compare("â", "â") === 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C = c",  col.compare("C", "c") === 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç = Ç",  col.compare("Ç", "Ç") === 0);
	assertTrue("Ç = ç",  col.compare("Ç", "ç") === 0);
	assertTrue("ç = ç",  col.compare("ç", "ç") === 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G = g",  col.compare("G", "g") === 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
	assertTrue("Ğ = ğ",  col.compare("Ğ", "ğ") === 0);
	assertTrue("ğ = ğ",  col.compare("ğ", "ğ") === 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H = h",  col.compare("H", "h") === 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I = ı",  col.compare("I", "ı") === 0);
	assertTrue("ı = Î",  col.compare("ı", "Î") === 0);
	assertTrue("Î = Î",  col.compare("Î", "Î") === 0);
	assertTrue("Î = î",  col.compare("Î", "î") === 0);
	assertTrue("î = î",  col.compare("î", "î") === 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ = i",  col.compare("İ", "i") === 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O = o",  col.compare("O", "o") === 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö = Ö",  col.compare("Ö", "Ö") === 0);
	assertTrue("Ö = ö",  col.compare("Ö", "ö") === 0);
	assertTrue("ö = ö",  col.compare("ö", "ö") === 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S = s",  col.compare("S", "s") === 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş = Ş",  col.compare("Ş", "Ş") === 0);
	assertTrue("Ş = ş",  col.compare("Ş", "ş") === 0);
	assertTrue("ş = ş",  col.compare("ş", "ş") === 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U = u",  col.compare("U", "u") === 0);
	assertTrue("u = Û",  col.compare("u", "Û") === 0);
	assertTrue("Û = Û",  col.compare("Û", "Û") === 0);
	assertTrue("Û = û",  col.compare("Û", "û") === 0);
	assertTrue("û = û",  col.compare("û", "û") === 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü = Ü",  col.compare("Ü", "Ü") === 0);
	assertTrue("Ü = ü",  col.compare("Ü", "ü") === 0);
	assertTrue("ü = ü",  col.compare("ü", "ü") === 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorSortQuat_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â < Â",  col.compare("Â", "Â") < 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â < â",  col.compare("â", "â") < 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç < Ç",  col.compare("Ç", "Ç") < 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç < ç",  col.compare("ç", "ç") < 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ < ğ",  col.compare("ğ", "ğ") < 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î < Î",  col.compare("Î", "Î") < 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î < î",  col.compare("î", "î") < 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö < Ö",  col.compare("Ö", "Ö") < 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö < ö",  col.compare("ö", "ö") < 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş < Ş",  col.compare("Ş", "Ş") < 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş < ş",  col.compare("ş", "ş") < 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û < Û",  col.compare("Û", "Û") < 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û < û",  col.compare("û", "û") < 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü < Ü",  col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü",  col.compare("ü", "ü") < 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorSortTer_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â < Â",  col.compare("Â", "Â") < 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â < â",  col.compare("â", "â") < 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç < Ç",  col.compare("Ç", "Ç") < 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç < ç",  col.compare("ç", "ç") < 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ < ğ",  col.compare("ğ", "ğ") < 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î < Î",  col.compare("Î", "Î") < 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î < î",  col.compare("î", "î") < 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö < Ö",  col.compare("Ö", "Ö") < 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö < ö",  col.compare("ö", "ö") < 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş < Ş",  col.compare("Ş", "Ş") < 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş < ş",  col.compare("ş", "ş") < 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û < Û",  col.compare("Û", "Û") < 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û < û",  col.compare("û", "û") < 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü < Ü",  col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü",  col.compare("ü", "ü") < 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorSortSec_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â < Â",  col.compare("Â", "Â") < 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â < â",  col.compare("â", "â") < 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç < Ç",  col.compare("Ç", "Ç") < 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç < ç",  col.compare("ç", "ç") < 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ < ğ",  col.compare("ğ", "ğ") < 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î < Î",  col.compare("Î", "Î") < 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î < î",  col.compare("î", "î") < 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö < Ö",  col.compare("Ö", "Ö") < 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö < ö",  col.compare("ö", "ö") < 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş < Ş",  col.compare("Ş", "Ş") < 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş < ş",  col.compare("ş", "ş") < 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û < Û",  col.compare("Û", "Û") < 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û < û",  col.compare("û", "û") < 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü < Ü",  col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü",  col.compare("ü", "ü") < 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testJSCollatorSortPri_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
	assertTrue("A < a",  col.compare("A", "a") < 0);
	assertTrue("a < Â",  col.compare("a", "Â") < 0);
	assertTrue("Â < Â",  col.compare("Â", "Â") < 0);
	assertTrue("Â < â",  col.compare("Â", "â") < 0);
	assertTrue("â < â",  col.compare("â", "â") < 0);
	assertTrue("â < B",  col.compare("â", "B") < 0);
	assertTrue("C < c",  col.compare("C", "c") < 0);
	assertTrue("c < Ç",  col.compare("c", "Ç") < 0);
	assertTrue("Ç < Ç",  col.compare("Ç", "Ç") < 0);
	assertTrue("Ç < ç",  col.compare("Ç", "ç") < 0);
	assertTrue("ç < ç",  col.compare("ç", "ç") < 0);
	assertTrue("ç < D",  col.compare("ç", "D") < 0);
	assertTrue("G < g",  col.compare("G", "g") < 0);
	assertTrue("g < Ğ",  col.compare("g", "Ğ") < 0);
	assertTrue("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
	assertTrue("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
	assertTrue("ğ < ğ",  col.compare("ğ", "ğ") < 0);
	assertTrue("ğ < H",  col.compare("ğ", "H") < 0);
	assertTrue("H < h",  col.compare("H", "h") < 0);
	assertTrue("h < I",  col.compare("h", "I") < 0);
	assertTrue("I < ı",  col.compare("I", "ı") < 0);
	assertTrue("ı < Î",  col.compare("ı", "Î") < 0);
	assertTrue("Î < Î",  col.compare("Î", "Î") < 0);
	assertTrue("Î < î",  col.compare("Î", "î") < 0);
	assertTrue("î < î",  col.compare("î", "î") < 0);
	assertTrue("î < İ",  col.compare("î", "İ") < 0);
	assertTrue("İ < i",  col.compare("İ", "i") < 0);
	assertTrue("i < J",  col.compare("i", "J") < 0);
	assertTrue("O < o",  col.compare("O", "o") < 0);
	assertTrue("o < Ö",  col.compare("o", "Ö") < 0);
	assertTrue("Ö < Ö",  col.compare("Ö", "Ö") < 0);
	assertTrue("Ö < ö",  col.compare("Ö", "ö") < 0);
	assertTrue("ö < ö",  col.compare("ö", "ö") < 0);
	assertTrue("ö < P",  col.compare("ö", "P") < 0);
	assertTrue("S < s",  col.compare("S", "s") < 0);
	assertTrue("s < Ş",  col.compare("s", "Ş") < 0);
	assertTrue("Ş < Ş",  col.compare("Ş", "Ş") < 0);
	assertTrue("Ş < ş",  col.compare("Ş", "ş") < 0);
	assertTrue("ş < ş",  col.compare("ş", "ş") < 0);
	assertTrue("ş < T",  col.compare("ş", "T") < 0);
	assertTrue("U < u",  col.compare("U", "u") < 0);
	assertTrue("u < Û",  col.compare("u", "Û") < 0);
	assertTrue("Û < Û",  col.compare("Û", "Û") < 0);
	assertTrue("Û < û",  col.compare("Û", "û") < 0);
	assertTrue("û < û",  col.compare("û", "û") < 0);
	assertTrue("û < Ü",  col.compare("û", "Ü") < 0);
	assertTrue("Ü < Ü",  col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü",  col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü",  col.compare("ü", "ü") < 0);
	assertTrue("ü < V",  col.compare("ü", "V") < 0);
}

function testCollatorWithSortCase_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
 		"ügur",
		"Çolasan",
		"Cumali",
		"Çolaşan",
		"uğur",
		"ıpekçi",
		"Coskun",
		"ugur",
		"çakar",
		"Üğur",
		"Çonaşan",
		"Cumalı",
		"Uğur",
		"Eroğlu",
		"cakar",
		"Coşkun",
		"ipekçi",
		"Eroglu",
		"Çulaşan",
		"Çölaşan",
		"Cakar",
		"Ugur",
		"coskun",
		"Ipekçi",
		"Çakar",
		"üğur",
		"coşkun",
		"İpekçi",
		"Ügur"
	];

    input.sort(col.getComparator());

    var expected = [
		"Cakar",
		"Coskun",
		"Coşkun",
		"Cumalı",
		"Cumali",
		"cakar",
		"coskun",
		"coşkun",
		"Çakar",
		"Çolasan",
		"Çolaşan",
		"Çonaşan",
		"Çölaşan",
		"Çulaşan",
		"çakar",
		"Eroglu",
		"Eroğlu",
		"Ipekçi",
		"ıpekçi",
		"İpekçi",
		"ipekçi",
		"Ugur",
		"Uğur",
		"ugur",
		"uğur",
		"Ügur",
		"Üğur",
		"ügur",
		"üğur"
	];

    assertArrayEquals(expected, input);
}

function testCollatorWithSortVariant_tr() {
	var col = new ilib.Collator({
		locale: "tr-TR",
		useNative: false,
		sensitivity: "variant",
		upperFirst: true,
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
		"ügur",
		"Çolasan",
		"Cumali",
		"Çolaşan",
		"uğur",
		"ıpekçi",
		"Coskun",
		"ugur",
		"çakar",
		"Üğur",
		"Çonaşan",
		"Cumalı",
		"Uğur",
		"Eroğlu",
		"cakar",
		"Coşkun",
		"ipekçi",
		"Eroglu",
		"Çulaşan",
		"Çölaşan",
		"Cakar",
		"Ugur",
		"coskun",
		"Ipekçi",
		"Çakar",
		"üğur",
		"coşkun",
		"İpekçi",
		"Ügur"
	];

	input.sort(col.getComparator());
	
	var expected = [
		"Cakar",
		"Coskun",
		"Coşkun",
		"Cumalı",
		"Cumali",
		"cakar",
		"coskun",
		"coşkun",
		"Çakar",
		"Çolasan",
		"Çolaşan",
		"Çonaşan",
		"Çölaşan",
		"Çulaşan",
		"çakar",
		"Eroglu",
		"Eroğlu",
		"Ipekçi",
		"ıpekçi",
		"İpekçi",
		"ipekçi",
		"Ugur",
		"Uğur",
		"ugur",
		"uğur",
		"Ügur",
		"Üğur",
		"ügur",
		"üğur"
	];

    assertArrayEquals(expected, input);
}

