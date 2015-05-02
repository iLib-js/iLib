/*
 * testcollation_zh-Hans.js - test the Collator object in simplified Chinese
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

function testJSCollatorQuatHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorTerHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorSecHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorPriHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorQuatHanziVariants_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	// extra variants at the tertiary level
	assertTrue("幼 < ㉅", col.compare("幼", "㉅") < 0);
	assertTrue("平成 < ㍻", col.compare("平成", "㍻") < 0);
	assertTrue("幼 < ㉅", col.compare("幼", "㉅") < 0);
	assertTrue("木 < ⽊", col.compare("木", "⽊") < 0);
	assertTrue("木 < ㊍", col.compare("木", "㊍") < 0);
	assertTrue("株式会社 < ㍿", col.compare("株式会社", "㍿") < 0);
	assertTrue("穴 < ⽳", col.compare("穴", "⽳") < 0);
	assertTrue("非 < ⾮", col.compare("非", "⾮") < 0);
	assertTrue("龠 < ⿕", col.compare("龠", "⿕") < 0);
}

function testJSCollatorTerHanziVariants_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	// extra variants at the tertiary level
	assertTrue("幼 < ㉅", col.compare("幼", "㉅") < 0);
	assertTrue("平成 < ㍻", col.compare("平成", "㍻") < 0);
	assertTrue("幼 < ㉅", col.compare("幼", "㉅") < 0);
	assertTrue("木 < ⽊", col.compare("木", "⽊") < 0);
	assertTrue("木 < ㊍", col.compare("木", "㊍") < 0);
	assertTrue("株式会社 < ㍿", col.compare("株式会社", "㍿") < 0);
	assertTrue("穴 < ⽳", col.compare("穴", "⽳") < 0);
	assertTrue("非 < ⾮", col.compare("非", "⾮") < 0);
	assertTrue("龠 < ⿕", col.compare("龠", "⿕") < 0);
}

function testJSCollatorSecHanziVariants_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	// extra variants at the tertiary level
	assertTrue("幼 = ㉅", col.compare("幼", "㉅") === 0);
	assertTrue("平成 = ㍻", col.compare("平成", "㍻") === 0);
	assertTrue("幼 = ㉅", col.compare("幼", "㉅") === 0);
	assertTrue("木 = ⽊", col.compare("木", "⽊") === 0);
	assertTrue("木 = ㊍", col.compare("木", "㊍") === 0);
	assertTrue("株式会社 = ㍿", col.compare("株式会社", "㍿") === 0);
	assertTrue("穴 = ⽳", col.compare("穴", "⽳") === 0);
	assertTrue("非 = ⾮", col.compare("非", "⾮") === 0);
	assertTrue("龠 = ⿕", col.compare("龠", "⿕") === 0);
}

function testJSCollatorPriHanziVariants_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	// extra variants at the tertiary level
	assertTrue("幼 = ㉅", col.compare("幼", "㉅") === 0);
	assertTrue("平成 = ㍻", col.compare("平成", "㍻") === 0);
	assertTrue("幼 = ㉅", col.compare("幼", "㉅") === 0);
	assertTrue("木 = ⽊", col.compare("木", "⽊") === 0);
	assertTrue("木 = ㊍", col.compare("木", "㊍") === 0);
	assertTrue("株式会社 = ㍿", col.compare("株式会社", "㍿") === 0);
	assertTrue("穴 = ⽳", col.compare("穴", "⽳") === 0);
	assertTrue("非 = ⾮", col.compare("非", "⾮") === 0);
	assertTrue("龠 = ⿕", col.compare("龠", "⿕") === 0);
}

function testJSCollatorPinyinQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā < bá", col.compare("bā", "bá") < 0);
	assertTrue("bá < bǎ", col.compare("bá", "bǎ") < 0);
	assertTrue("bǎ < bà", col.compare("bǎ", "bà") < 0);
	assertTrue("bà < ba", col.compare("bà", "ba") < 0);
	assertTrue("bāi < bai", col.compare("bāi", "bai") < 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn < ché", col.compare("chēn", "ché") < 0);
	assertTrue("ché < chě", col.compare("ché", "chě") < 0);
	assertTrue("chě < chè", col.compare("chě", "chè") < 0);
	
	assertTrue("Ā < Ā", col.compare("Ā", "Ā") < 0);
	assertTrue("Ā < ā", col.compare("Ā", "ā") < 0);
	assertTrue("ā < ā", col.compare("ā", "ā") < 0);
	assertTrue("ā < Á", col.compare("ā", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < Ǎ", col.compare("á", "Ǎ") < 0);
	assertTrue("Ǎ < Ǎ", col.compare("Ǎ", "Ǎ") < 0);
	assertTrue("Ǎ < ǎ", col.compare("Ǎ", "ǎ") < 0);
	assertTrue("ǎ < ǎ", col.compare("ǎ", "ǎ") < 0);
	assertTrue("ǎ < À", col.compare("ǎ", "À") < 0);
	assertTrue("À < À", col.compare("À", "À") < 0);
	assertTrue("À < à", col.compare("À", "à") < 0);
	assertTrue("à < à", col.compare("à", "à") < 0);
	assertTrue("à < A", col.compare("à", "A") < 0);
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ē", col.compare("d", "Ē") < 0);
	assertTrue("Ē < Ē", col.compare("Ē", "Ē") < 0);
	assertTrue("Ē < ē", col.compare("Ē", "ē") < 0);
	assertTrue("ē < ē", col.compare("ē", "ē") < 0);
	assertTrue("ē < É", col.compare("ē", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < È", col.compare("ě", "È") < 0);
	assertTrue("È < È", col.compare("È", "È") < 0);
	assertTrue("È < è", col.compare("È", "è") < 0);
	assertTrue("è < è", col.compare("è", "è") < 0);
	assertTrue("è < E", col.compare("è", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < Ê̄", col.compare("e", "Ê̄") < 0);
	assertTrue("Ê̄ < Ē̂", col.compare("Ê̄", "Ē̂") < 0);
	assertTrue("Ē̂ < Ê̄", col.compare("Ē̂", "Ê̄") < 0);
	assertTrue("Ê̄ < ê̄", col.compare("Ê̄", "ê̄") < 0);
	assertTrue("ê̄ < ē̂", col.compare("ê̄", "ē̂") < 0);
	assertTrue("ē̂ < ê̄", col.compare("ē̂", "ê̄") < 0);
	assertTrue("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
	assertTrue("Ế < É̂", col.compare("Ế", "É̂") < 0);
	assertTrue("É̂ < Ế", col.compare("É̂", "Ế") < 0);
	assertTrue("Ế < ế", col.compare("Ế", "ế") < 0);
	assertTrue("ế < é̂", col.compare("ế", "é̂") < 0);
	assertTrue("é̂ < ế", col.compare("é̂", "ế") < 0);
	assertTrue("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
	assertTrue("Ê̌ < Ě̂", col.compare("Ê̌", "Ě̂") < 0);
	assertTrue("Ě̂ < Ê̌", col.compare("Ě̂", "Ê̌") < 0);
	assertTrue("Ê̌ < ê̌", col.compare("Ê̌", "ê̌") < 0);
	assertTrue("ê̌ < ě̂", col.compare("ê̌", "ě̂") < 0);
	assertTrue("ě̂ < ê̌", col.compare("ě̂", "ê̌") < 0);
	assertTrue("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
	assertTrue("Ề < È̂", col.compare("Ề", "È̂") < 0);
	assertTrue("È̂ < Ề", col.compare("È̂", "Ề") < 0);
	assertTrue("Ề < ề", col.compare("Ề", "ề") < 0);
	assertTrue("ề < è̂", col.compare("ề", "è̂") < 0);
	assertTrue("è̂ < ề", col.compare("è̂", "ề") < 0);
	assertTrue("ề < F", col.compare("ề", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < Ī", col.compare("h", "Ī") < 0);
	assertTrue("Ī < Ī", col.compare("Ī", "Ī") < 0);
	assertTrue("Ī < ī", col.compare("Ī", "ī") < 0);
	assertTrue("ī < ī", col.compare("ī", "ī") < 0);
	assertTrue("ī < Í", col.compare("ī", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < Ǐ", col.compare("í", "Ǐ") < 0);
	assertTrue("Ǐ < Ǐ", col.compare("Ǐ", "Ǐ") < 0);
	assertTrue("Ǐ < ǐ", col.compare("Ǐ", "ǐ") < 0);
	assertTrue("ǐ < ǐ", col.compare("ǐ", "ǐ") < 0);
	assertTrue("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
	assertTrue("Ì < Ì", col.compare("Ì", "Ì") < 0);
	assertTrue("Ì < ì", col.compare("Ì", "ì") < 0);
	assertTrue("ì < ì", col.compare("ì", "ì") < 0);
	assertTrue("ì < I", col.compare("ì", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < J", col.compare("i", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M̄", col.compare("l", "M̄") < 0);
	assertTrue("M̄ < m̄", col.compare("M̄", "m̄") < 0);
	assertTrue("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
	assertTrue("Ḿ < Ḿ", col.compare("Ḿ", "Ḿ") < 0);
	assertTrue("Ḿ < ḿ", col.compare("Ḿ", "ḿ") < 0);
	assertTrue("ḿ < ḿ", col.compare("ḿ", "ḿ") < 0);
	assertTrue("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
	assertTrue("M̌ < m̌", col.compare("M̌", "m̌") < 0);
	assertTrue("m̌ < M̀", col.compare("m̌", "M̀") < 0);
	assertTrue("M̀ < m̀", col.compare("M̀", "m̀") < 0);
	assertTrue("m̀ < M", col.compare("m̀", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N̄", col.compare("m", "N̄") < 0);
	assertTrue("N̄ < n̄", col.compare("N̄", "n̄") < 0);
	assertTrue("n̄ < Ń", col.compare("n̄", "Ń") < 0);
	assertTrue("Ń < Ń", col.compare("Ń", "Ń") < 0);
	assertTrue("Ń < ń", col.compare("Ń", "ń") < 0);
	assertTrue("ń < ń", col.compare("ń", "ń") < 0);
	assertTrue("ń < Ň", col.compare("ń", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
	assertTrue("Ǹ < Ǹ", col.compare("Ǹ", "Ǹ") < 0);
	assertTrue("Ǹ < ǹ", col.compare("Ǹ", "ǹ") < 0);
	assertTrue("ǹ < ǹ", col.compare("ǹ", "ǹ") < 0);
	assertTrue("ǹ < N", col.compare("ǹ", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ō", col.compare("n", "Ō") < 0);
	assertTrue("Ō < Ō", col.compare("Ō", "Ō") < 0);
	assertTrue("Ō < ō", col.compare("Ō", "ō") < 0);
	assertTrue("ō < ō", col.compare("ō", "ō") < 0);
	assertTrue("ō < Ó", col.compare("ō", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
	assertTrue("Ǒ < Ǒ", col.compare("Ǒ", "Ǒ") < 0);
	assertTrue("Ǒ < ǒ", col.compare("Ǒ", "ǒ") < 0);
	assertTrue("ǒ < ǒ", col.compare("ǒ", "ǒ") < 0);
	assertTrue("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
	assertTrue("Ò < Ò", col.compare("Ò", "Ò") < 0);
	assertTrue("Ò < ò", col.compare("Ò", "ò") < 0);
	assertTrue("ò < ò", col.compare("ò", "ò") < 0);
	assertTrue("ò < O", col.compare("ò", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < P", col.compare("o", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < S", col.compare("r", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < T", col.compare("s", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ū", col.compare("t", "Ū") < 0);
	assertTrue("Ū < Ū", col.compare("Ū", "Ū") < 0);
	assertTrue("Ū < ū", col.compare("Ū", "ū") < 0);
	assertTrue("ū < ū", col.compare("ū", "ū") < 0);
	assertTrue("ū < Ú", col.compare("ū", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
	assertTrue("Ǔ < Ǔ", col.compare("Ǔ", "Ǔ") < 0);
	assertTrue("Ǔ < ǔ", col.compare("Ǔ", "ǔ") < 0);
	assertTrue("ǔ < ǔ", col.compare("ǔ", "ǔ") < 0);
	assertTrue("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
	assertTrue("Ù < Ù", col.compare("Ù", "Ù") < 0);
	assertTrue("Ù < ù", col.compare("Ù", "ù") < 0);
	assertTrue("ù < ù", col.compare("ù", "ù") < 0);
	assertTrue("ù < U", col.compare("ù", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ǖ", col.compare("u", "Ǖ") < 0);
	assertTrue("Ǖ < Ṻ", col.compare("Ǖ", "Ṻ") < 0);
	assertTrue("Ṻ < Ǖ", col.compare("Ṻ", "Ǖ") < 0);
	assertTrue("Ǖ < ǖ", col.compare("Ǖ", "ǖ") < 0);
	assertTrue("ǖ < ṻ", col.compare("ǖ", "ṻ") < 0);
	assertTrue("ṻ < ǖ", col.compare("ṻ", "ǖ") < 0);
	assertTrue("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
	assertTrue("Ǘ < Ú̈", col.compare("Ǘ", "Ú̈") < 0);
	assertTrue("Ú̈ < Ǘ", col.compare("Ú̈", "Ǘ") < 0);
	assertTrue("Ǘ < ǘ", col.compare("Ǘ", "ǘ") < 0);
	assertTrue("ǘ < ú̈", col.compare("ǘ", "ú̈") < 0);
	assertTrue("ú̈ < ǘ", col.compare("ú̈", "ǘ") < 0);
	assertTrue("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
	assertTrue("Ǚ < Ǔ̈", col.compare("Ǚ", "Ǔ̈") < 0);
	assertTrue("Ǔ̈ < Ǚ", col.compare("Ǔ̈", "Ǚ") < 0);
	assertTrue("Ǚ < ǚ", col.compare("Ǚ", "ǚ") < 0);
	assertTrue("ǚ < ǔ̈", col.compare("ǚ", "ǔ̈") < 0);
	assertTrue("ǔ̈ < ǚ", col.compare("ǔ̈", "ǚ") < 0);
	assertTrue("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
	assertTrue("Ǜ < Ù̈", col.compare("Ǜ", "Ù̈") < 0);
	assertTrue("Ù̈ < Ǜ", col.compare("Ù̈", "Ǜ") < 0);
	assertTrue("Ǜ < ǜ", col.compare("Ǜ", "ǜ") < 0);
	assertTrue("ǜ < ù̈", col.compare("ǜ", "ù̈") < 0);
	assertTrue("ù̈ < ǜ", col.compare("ù̈", "ǜ") < 0);
	assertTrue("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
	assertTrue("Ü < Ü", col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü", col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü", col.compare("ü", "ü") < 0);
	assertTrue("ü < V", col.compare("ü", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Z", col.compare("y", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
}

function testJSCollatorPinyinTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā < bá", col.compare("bā", "bá") < 0);
	assertTrue("bá < bǎ", col.compare("bá", "bǎ") < 0);
	assertTrue("bǎ < bà", col.compare("bǎ", "bà") < 0);
	assertTrue("bà < ba", col.compare("bà", "ba") < 0);
	assertTrue("bāi < bai", col.compare("bāi", "bai") < 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn < ché", col.compare("chēn", "ché") < 0);
	assertTrue("ché < chě", col.compare("ché", "chě") < 0);
	assertTrue("chě < chè", col.compare("chě", "chè") < 0);

	assertTrue("Ā = Ā", col.compare("Ā", "Ā") === 0);
	assertTrue("Ā < ā", col.compare("Ā", "ā") < 0);
	assertTrue("ā = ā", col.compare("ā", "ā") === 0);
	assertTrue("ā < Á", col.compare("ā", "Á") < 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á < Ǎ", col.compare("á", "Ǎ") < 0);
	assertTrue("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
	assertTrue("Ǎ < ǎ", col.compare("Ǎ", "ǎ") < 0);
	assertTrue("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
	assertTrue("ǎ < À", col.compare("ǎ", "À") < 0);
	assertTrue("À = À", col.compare("À", "À") === 0);
	assertTrue("À < à", col.compare("À", "à") < 0);
	assertTrue("à = à", col.compare("à", "à") === 0);
	assertTrue("à < A", col.compare("à", "A") < 0);
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ē", col.compare("d", "Ē") < 0);
	assertTrue("Ē = Ē", col.compare("Ē", "Ē") === 0);
	assertTrue("Ē < ē", col.compare("Ē", "ē") < 0);
	assertTrue("ē = ē", col.compare("ē", "ē") === 0);
	assertTrue("ē < É", col.compare("ē", "É") < 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě < È", col.compare("ě", "È") < 0);
	assertTrue("È = È", col.compare("È", "È") === 0);
	assertTrue("È < è", col.compare("È", "è") < 0);
	assertTrue("è = è", col.compare("è", "è") === 0);
	assertTrue("è < E", col.compare("è", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < Ê̄", col.compare("e", "Ê̄") < 0);
	assertTrue("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
	assertTrue("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
	assertTrue("Ê̄ < ê̄", col.compare("Ê̄", "ê̄") < 0);
	assertTrue("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
	assertTrue("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
	assertTrue("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
	assertTrue("Ế = É̂", col.compare("Ế", "É̂") === 0);
	assertTrue("É̂ = Ế", col.compare("É̂", "Ế") === 0);
	assertTrue("Ế < ế", col.compare("Ế", "ế") < 0);
	assertTrue("ế = é̂", col.compare("ế", "é̂") === 0);
	assertTrue("é̂ = ế", col.compare("é̂", "ế") === 0);
	assertTrue("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
	assertTrue("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
	assertTrue("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
	assertTrue("Ê̌ < ê̌", col.compare("Ê̌", "ê̌") < 0);
	assertTrue("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
	assertTrue("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
	assertTrue("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
	assertTrue("Ề = È̂", col.compare("Ề", "È̂") === 0);
	assertTrue("È̂ = Ề", col.compare("È̂", "Ề") === 0);
	assertTrue("Ề < ề", col.compare("Ề", "ề") < 0);
	assertTrue("ề = è̂", col.compare("ề", "è̂") === 0);
	assertTrue("è̂ = ề", col.compare("è̂", "ề") === 0);
	assertTrue("ề < F", col.compare("ề", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < Ī", col.compare("h", "Ī") < 0);
	assertTrue("Ī = Ī", col.compare("Ī", "Ī") === 0);
	assertTrue("Ī < ī", col.compare("Ī", "ī") < 0);
	assertTrue("ī = ī", col.compare("ī", "ī") === 0);
	assertTrue("ī < Í", col.compare("ī", "Í") < 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í < Ǐ", col.compare("í", "Ǐ") < 0);
	assertTrue("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
	assertTrue("Ǐ < ǐ", col.compare("Ǐ", "ǐ") < 0);
	assertTrue("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
	assertTrue("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
	assertTrue("Ì = Ì", col.compare("Ì", "Ì") === 0);
	assertTrue("Ì < ì", col.compare("Ì", "ì") < 0);
	assertTrue("ì = ì", col.compare("ì", "ì") === 0);
	assertTrue("ì < I", col.compare("ì", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < J", col.compare("i", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M̄", col.compare("l", "M̄") < 0);
	assertTrue("M̄ < m̄", col.compare("M̄", "m̄") < 0);
	assertTrue("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
	assertTrue("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
	assertTrue("Ḿ < ḿ", col.compare("Ḿ", "ḿ") < 0);
	assertTrue("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
	assertTrue("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
	assertTrue("M̌ < m̌", col.compare("M̌", "m̌") < 0);
	assertTrue("m̌ < M̀", col.compare("m̌", "M̀") < 0);
	assertTrue("M̀ < m̀", col.compare("M̀", "m̀") < 0);
	assertTrue("m̀ < M", col.compare("m̀", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N̄", col.compare("m", "N̄") < 0);
	assertTrue("N̄ < n̄", col.compare("N̄", "n̄") < 0);
	assertTrue("n̄ < Ń", col.compare("n̄", "Ń") < 0);
	assertTrue("Ń = Ń", col.compare("Ń", "Ń") === 0);
	assertTrue("Ń < ń", col.compare("Ń", "ń") < 0);
	assertTrue("ń = ń", col.compare("ń", "ń") === 0);
	assertTrue("ń < Ň", col.compare("ń", "Ň") < 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
	assertTrue("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
	assertTrue("Ǹ < ǹ", col.compare("Ǹ", "ǹ") < 0);
	assertTrue("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
	assertTrue("ǹ < N", col.compare("ǹ", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ō", col.compare("n", "Ō") < 0);
	assertTrue("Ō = Ō", col.compare("Ō", "Ō") === 0);
	assertTrue("Ō < ō", col.compare("Ō", "ō") < 0);
	assertTrue("ō = ō", col.compare("ō", "ō") === 0);
	assertTrue("ō < Ó", col.compare("ō", "Ó") < 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
	assertTrue("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
	assertTrue("Ǒ < ǒ", col.compare("Ǒ", "ǒ") < 0);
	assertTrue("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
	assertTrue("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
	assertTrue("Ò = Ò", col.compare("Ò", "Ò") === 0);
	assertTrue("Ò < ò", col.compare("Ò", "ò") < 0);
	assertTrue("ò = ò", col.compare("ò", "ò") === 0);
	assertTrue("ò < O", col.compare("ò", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < P", col.compare("o", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < S", col.compare("r", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < T", col.compare("s", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ū", col.compare("t", "Ū") < 0);
	assertTrue("Ū = Ū", col.compare("Ū", "Ū") === 0);
	assertTrue("Ū < ū", col.compare("Ū", "ū") < 0);
	assertTrue("ū = ū", col.compare("ū", "ū") === 0);
	assertTrue("ū < Ú", col.compare("ū", "Ú") < 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
	assertTrue("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
	assertTrue("Ǔ < ǔ", col.compare("Ǔ", "ǔ") < 0);
	assertTrue("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
	assertTrue("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
	assertTrue("Ù = Ù", col.compare("Ù", "Ù") === 0);
	assertTrue("Ù < ù", col.compare("Ù", "ù") < 0);
	assertTrue("ù = ù", col.compare("ù", "ù") === 0);
	assertTrue("ù < U", col.compare("ù", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ǖ", col.compare("u", "Ǖ") < 0);
	assertTrue("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
	assertTrue("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
	assertTrue("Ǖ < ǖ", col.compare("Ǖ", "ǖ") < 0);
	assertTrue("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
	assertTrue("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
	assertTrue("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
	assertTrue("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
	assertTrue("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
	assertTrue("Ǘ < ǘ", col.compare("Ǘ", "ǘ") < 0);
	assertTrue("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
	assertTrue("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
	assertTrue("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
	assertTrue("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
	assertTrue("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
	assertTrue("Ǚ < ǚ", col.compare("Ǚ", "ǚ") < 0);
	assertTrue("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
	assertTrue("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
	assertTrue("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
	assertTrue("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
	assertTrue("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
	assertTrue("Ǜ < ǜ", col.compare("Ǜ", "ǜ") < 0);
	assertTrue("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
	assertTrue("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
	assertTrue("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
	assertTrue("Ü = Ü", col.compare("Ü", "Ü") === 0);
	assertTrue("Ü < ü", col.compare("Ü", "ü") < 0);
	assertTrue("ü = ü", col.compare("ü", "ü") === 0);
	assertTrue("ü < V", col.compare("ü", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Z", col.compare("y", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
}

function testJSCollatorPinyinSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā < bá", col.compare("bā", "bá") < 0);
	assertTrue("bá < bǎ", col.compare("bá", "bǎ") < 0);
	assertTrue("bǎ < bà", col.compare("bǎ", "bà") < 0);
	assertTrue("bà < ba", col.compare("bà", "ba") < 0);
	assertTrue("bāi < bai", col.compare("bāi", "bai") < 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn < ché", col.compare("chēn", "ché") < 0);
	assertTrue("ché < chě", col.compare("ché", "chě") < 0);
	assertTrue("chě < chè", col.compare("chě", "chè") < 0);

	assertTrue("Ā = Ā", col.compare("Ā", "Ā") === 0);
	assertTrue("Ā = ā", col.compare("Ā", "ā") === 0);
	assertTrue("ā = ā", col.compare("ā", "ā") === 0);
	assertTrue("ā < Á", col.compare("ā", "Á") < 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á = á", col.compare("Á", "á") === 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á < Ǎ", col.compare("á", "Ǎ") < 0);
	assertTrue("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
	assertTrue("Ǎ = ǎ", col.compare("Ǎ", "ǎ") === 0);
	assertTrue("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
	assertTrue("ǎ < À", col.compare("ǎ", "À") < 0);
	assertTrue("À = À", col.compare("À", "À") === 0);
	assertTrue("À = à", col.compare("À", "à") === 0);
	assertTrue("à = à", col.compare("à", "à") === 0);
	assertTrue("à < A", col.compare("à", "A") < 0);
	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B = b", col.compare("B", "b") === 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C = c", col.compare("C", "c") === 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D = d", col.compare("D", "d") === 0);
	assertTrue("d < Ē", col.compare("d", "Ē") < 0);
	assertTrue("Ē = Ē", col.compare("Ē", "Ē") === 0);
	assertTrue("Ē = ē", col.compare("Ē", "ē") === 0);
	assertTrue("ē = ē", col.compare("ē", "ē") === 0);
	assertTrue("ē < É", col.compare("ē", "É") < 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É = é", col.compare("É", "é") === 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě = ě", col.compare("Ě", "ě") === 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě < È", col.compare("ě", "È") < 0);
	assertTrue("È = È", col.compare("È", "È") === 0);
	assertTrue("È = è", col.compare("È", "è") === 0);
	assertTrue("è = è", col.compare("è", "è") === 0);
	assertTrue("è < E", col.compare("è", "E") < 0);
	assertTrue("E = e", col.compare("E", "e") === 0);
	assertTrue("e < Ê̄", col.compare("e", "Ê̄") < 0);
	assertTrue("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
	assertTrue("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
	assertTrue("Ê̄ = ê̄", col.compare("Ê̄", "ê̄") === 0);
	assertTrue("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
	assertTrue("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
	assertTrue("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
	assertTrue("Ế = É̂", col.compare("Ế", "É̂") === 0);
	assertTrue("É̂ = Ế", col.compare("É̂", "Ế") === 0);
	assertTrue("Ế = ế", col.compare("Ế", "ế") === 0);
	assertTrue("ế = é̂", col.compare("ế", "é̂") === 0);
	assertTrue("é̂ = ế", col.compare("é̂", "ế") === 0);
	assertTrue("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
	assertTrue("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
	assertTrue("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
	assertTrue("Ê̌ = ê̌", col.compare("Ê̌", "ê̌") === 0);
	assertTrue("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
	assertTrue("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
	assertTrue("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
	assertTrue("Ề = È̂", col.compare("Ề", "È̂") === 0);
	assertTrue("È̂ = Ề", col.compare("È̂", "Ề") === 0);
	assertTrue("Ề = ề", col.compare("Ề", "ề") === 0);
	assertTrue("ề = è̂", col.compare("ề", "è̂") === 0);
	assertTrue("è̂ = ề", col.compare("è̂", "ề") === 0);
	assertTrue("ề < F", col.compare("ề", "F") < 0);
	assertTrue("F = f", col.compare("F", "f") === 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G = g", col.compare("G", "g") === 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H = h", col.compare("H", "h") === 0);
	assertTrue("h < Ī", col.compare("h", "Ī") < 0);
	assertTrue("Ī = Ī", col.compare("Ī", "Ī") === 0);
	assertTrue("Ī = ī", col.compare("Ī", "ī") === 0);
	assertTrue("ī = ī", col.compare("ī", "ī") === 0);
	assertTrue("ī < Í", col.compare("ī", "Í") < 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í = í", col.compare("Í", "í") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í < Ǐ", col.compare("í", "Ǐ") < 0);
	assertTrue("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
	assertTrue("Ǐ = ǐ", col.compare("Ǐ", "ǐ") === 0);
	assertTrue("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
	assertTrue("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
	assertTrue("Ì = Ì", col.compare("Ì", "Ì") === 0);
	assertTrue("Ì = ì", col.compare("Ì", "ì") === 0);
	assertTrue("ì = ì", col.compare("ì", "ì") === 0);
	assertTrue("ì < I", col.compare("ì", "I") < 0);
	assertTrue("I = i", col.compare("I", "i") === 0);
	assertTrue("i < J", col.compare("i", "J") < 0);
	assertTrue("J = j", col.compare("J", "j") === 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K = k", col.compare("K", "k") === 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L = l", col.compare("L", "l") === 0);
	assertTrue("l < M̄", col.compare("l", "M̄") < 0);
	assertTrue("M̄ = m̄", col.compare("M̄", "m̄") === 0);
	assertTrue("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
	assertTrue("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
	assertTrue("Ḿ = ḿ", col.compare("Ḿ", "ḿ") === 0);
	assertTrue("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
	assertTrue("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
	assertTrue("M̌ = m̌", col.compare("M̌", "m̌") === 0);
	assertTrue("m̌ < M̀", col.compare("m̌", "M̀") < 0);
	assertTrue("M̀ = m̀", col.compare("M̀", "m̀") === 0);
	assertTrue("m̀ < M", col.compare("m̀", "M") < 0);
	assertTrue("M = m", col.compare("M", "m") === 0);
	assertTrue("m < N̄", col.compare("m", "N̄") < 0);
	assertTrue("N̄ = n̄", col.compare("N̄", "n̄") === 0);
	assertTrue("n̄ < Ń", col.compare("n̄", "Ń") < 0);
	assertTrue("Ń = Ń", col.compare("Ń", "Ń") === 0);
	assertTrue("Ń = ń", col.compare("Ń", "ń") === 0);
	assertTrue("ń = ń", col.compare("ń", "ń") === 0);
	assertTrue("ń < Ň", col.compare("ń", "Ň") < 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň = ň", col.compare("Ň", "ň") === 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
	assertTrue("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
	assertTrue("Ǹ = ǹ", col.compare("Ǹ", "ǹ") === 0);
	assertTrue("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
	assertTrue("ǹ < N", col.compare("ǹ", "N") < 0);
	assertTrue("N = n", col.compare("N", "n") === 0);
	assertTrue("n < Ō", col.compare("n", "Ō") < 0);
	assertTrue("Ō = Ō", col.compare("Ō", "Ō") === 0);
	assertTrue("Ō = ō", col.compare("Ō", "ō") === 0);
	assertTrue("ō = ō", col.compare("ō", "ō") === 0);
	assertTrue("ō < Ó", col.compare("ō", "Ó") < 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó = ó", col.compare("Ó", "ó") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
	assertTrue("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
	assertTrue("Ǒ = ǒ", col.compare("Ǒ", "ǒ") === 0);
	assertTrue("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
	assertTrue("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
	assertTrue("Ò = Ò", col.compare("Ò", "Ò") === 0);
	assertTrue("Ò = ò", col.compare("Ò", "ò") === 0);
	assertTrue("ò = ò", col.compare("ò", "ò") === 0);
	assertTrue("ò < O", col.compare("ò", "O") < 0);
	assertTrue("O = o", col.compare("O", "o") === 0);
	assertTrue("o < P", col.compare("o", "P") < 0);
	assertTrue("P = p", col.compare("P", "p") === 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q = q", col.compare("Q", "q") === 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R = r", col.compare("R", "r") === 0);
	assertTrue("r < S", col.compare("r", "S") < 0);
	assertTrue("S = s", col.compare("S", "s") === 0);
	assertTrue("s < T", col.compare("s", "T") < 0);
	assertTrue("T = t", col.compare("T", "t") === 0);
	assertTrue("t < Ū", col.compare("t", "Ū") < 0);
	assertTrue("Ū = Ū", col.compare("Ū", "Ū") === 0);
	assertTrue("Ū = ū", col.compare("Ū", "ū") === 0);
	assertTrue("ū = ū", col.compare("ū", "ū") === 0);
	assertTrue("ū < Ú", col.compare("ū", "Ú") < 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú = ú", col.compare("Ú", "ú") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
	assertTrue("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
	assertTrue("Ǔ = ǔ", col.compare("Ǔ", "ǔ") === 0);
	assertTrue("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
	assertTrue("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
	assertTrue("Ù = Ù", col.compare("Ù", "Ù") === 0);
	assertTrue("Ù = ù", col.compare("Ù", "ù") === 0);
	assertTrue("ù = ù", col.compare("ù", "ù") === 0);
	assertTrue("ù < U", col.compare("ù", "U") < 0);
	assertTrue("U = u", col.compare("U", "u") === 0);
	assertTrue("u < Ǖ", col.compare("u", "Ǖ") < 0);
	assertTrue("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
	assertTrue("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
	assertTrue("Ǖ = ǖ", col.compare("Ǖ", "ǖ") === 0);
	assertTrue("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
	assertTrue("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
	assertTrue("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
	assertTrue("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
	assertTrue("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
	assertTrue("Ǘ = ǘ", col.compare("Ǘ", "ǘ") === 0);
	assertTrue("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
	assertTrue("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
	assertTrue("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
	assertTrue("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
	assertTrue("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
	assertTrue("Ǚ = ǚ", col.compare("Ǚ", "ǚ") === 0);
	assertTrue("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
	assertTrue("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
	assertTrue("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
	assertTrue("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
	assertTrue("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
	assertTrue("Ǜ = ǜ", col.compare("Ǜ", "ǜ") === 0);
	assertTrue("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
	assertTrue("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
	assertTrue("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
	assertTrue("Ü = Ü", col.compare("Ü", "Ü") === 0);
	assertTrue("Ü = ü", col.compare("Ü", "ü") === 0);
	assertTrue("ü = ü", col.compare("ü", "ü") === 0);
	assertTrue("ü < V", col.compare("ü", "V") < 0);
	assertTrue("V = v", col.compare("V", "v") === 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W = w", col.compare("W", "w") === 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X = x", col.compare("X", "x") === 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y = y", col.compare("Y", "y") === 0);
	assertTrue("y < Z", col.compare("y", "Z") < 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
}

function testJSCollatorPinyinPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā = bá", col.compare("bā", "bá") === 0);
	assertTrue("bá = bǎ", col.compare("bá", "bǎ") === 0);
	assertTrue("bǎ = bà", col.compare("bǎ", "bà") === 0);
	assertTrue("bà = ba", col.compare("bà", "ba") === 0);
	assertTrue("bāi = bai", col.compare("bāi", "bai") === 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn > ché", col.compare("chēn", "ché") > 0);
	assertTrue("ché = chě", col.compare("ché", "chě") === 0);
	assertTrue("chě = chè", col.compare("chě", "chè") === 0);

	assertTrue("Ā = Ā", col.compare("Ā", "Ā") === 0);
	assertTrue("Ā = ā", col.compare("Ā", "ā") === 0);
	assertTrue("ā = ā", col.compare("ā", "ā") === 0);
	assertTrue("ā = Á", col.compare("ā", "Á") === 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á = á", col.compare("Á", "á") === 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á = Ǎ", col.compare("á", "Ǎ") === 0);
	assertTrue("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
	assertTrue("Ǎ = ǎ", col.compare("Ǎ", "ǎ") === 0);
	assertTrue("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
	assertTrue("ǎ = À", col.compare("ǎ", "À") === 0);
	assertTrue("À = À", col.compare("À", "À") === 0);
	assertTrue("À = à", col.compare("À", "à") === 0);
	assertTrue("à = à", col.compare("à", "à") === 0);
	assertTrue("à = A", col.compare("à", "A") === 0);
	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B = b", col.compare("B", "b") === 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C = c", col.compare("C", "c") === 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D = d", col.compare("D", "d") === 0);
	assertTrue("d < Ē", col.compare("d", "Ē") < 0);
	assertTrue("Ē = Ē", col.compare("Ē", "Ē") === 0);
	assertTrue("Ē = ē", col.compare("Ē", "ē") === 0);
	assertTrue("ē = ē", col.compare("ē", "ē") === 0);
	assertTrue("ē = É", col.compare("ē", "É") === 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É = é", col.compare("É", "é") === 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é = Ě", col.compare("é", "Ě") === 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě = ě", col.compare("Ě", "ě") === 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě = È", col.compare("ě", "È") === 0);
	assertTrue("È = È", col.compare("È", "È") === 0);
	assertTrue("È = è", col.compare("È", "è") === 0);
	assertTrue("è = è", col.compare("è", "è") === 0);
	assertTrue("è = E", col.compare("è", "E") === 0);
	assertTrue("E = e", col.compare("E", "e") === 0);
	assertTrue("e = Ê̄", col.compare("e", "Ê̄") === 0);
	assertTrue("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
	assertTrue("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
	assertTrue("Ê̄ = ê̄", col.compare("Ê̄", "ê̄") === 0);
	assertTrue("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
	assertTrue("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
	assertTrue("ê̄ = Ế", col.compare("ê̄", "Ế") === 0);
	assertTrue("Ế = É̂", col.compare("Ế", "É̂") === 0);
	assertTrue("É̂ = Ế", col.compare("É̂", "Ế") === 0);
	assertTrue("Ế = ế", col.compare("Ế", "ế") === 0);
	assertTrue("ế = é̂", col.compare("ế", "é̂") === 0);
	assertTrue("é̂ = ế", col.compare("é̂", "ế") === 0);
	assertTrue("ế = Ê̌", col.compare("ế", "Ê̌") === 0);
	assertTrue("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
	assertTrue("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
	assertTrue("Ê̌ = ê̌", col.compare("Ê̌", "ê̌") === 0);
	assertTrue("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
	assertTrue("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
	assertTrue("ê̌ = Ề", col.compare("ê̌", "Ề") === 0);
	assertTrue("Ề = È̂", col.compare("Ề", "È̂") === 0);
	assertTrue("È̂ = Ề", col.compare("È̂", "Ề") === 0);
	assertTrue("Ề = ề", col.compare("Ề", "ề") === 0);
	assertTrue("ề = è̂", col.compare("ề", "è̂") === 0);
	assertTrue("è̂ = ề", col.compare("è̂", "ề") === 0);
	assertTrue("ề < F", col.compare("ề", "F") < 0);
	assertTrue("F = f", col.compare("F", "f") === 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G = g", col.compare("G", "g") === 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H = h", col.compare("H", "h") === 0);
	assertTrue("h < Ī", col.compare("h", "Ī") < 0);
	assertTrue("Ī = Ī", col.compare("Ī", "Ī") === 0);
	assertTrue("Ī = ī", col.compare("Ī", "ī") === 0);
	assertTrue("ī = ī", col.compare("ī", "ī") === 0);
	assertTrue("ī = Í", col.compare("ī", "Í") === 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í = í", col.compare("Í", "í") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í = Ǐ", col.compare("í", "Ǐ") === 0);
	assertTrue("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
	assertTrue("Ǐ = ǐ", col.compare("Ǐ", "ǐ") === 0);
	assertTrue("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
	assertTrue("ǐ = Ì", col.compare("ǐ", "Ì") === 0);
	assertTrue("Ì = Ì", col.compare("Ì", "Ì") === 0);
	assertTrue("Ì = ì", col.compare("Ì", "ì") === 0);
	assertTrue("ì = ì", col.compare("ì", "ì") === 0);
	assertTrue("ì = I", col.compare("ì", "I") === 0);
	assertTrue("I = i", col.compare("I", "i") === 0);
	assertTrue("i < J", col.compare("i", "J") < 0);
	assertTrue("J = j", col.compare("J", "j") === 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K = k", col.compare("K", "k") === 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L = l", col.compare("L", "l") === 0);
	assertTrue("l < M̄", col.compare("l", "M̄") < 0);
	assertTrue("M̄ = m̄", col.compare("M̄", "m̄") === 0);
	assertTrue("m̄ = Ḿ", col.compare("m̄", "Ḿ") === 0);
	assertTrue("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
	assertTrue("Ḿ = ḿ", col.compare("Ḿ", "ḿ") === 0);
	assertTrue("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
	assertTrue("ḿ = M̌", col.compare("ḿ", "M̌") === 0);
	assertTrue("M̌ = m̌", col.compare("M̌", "m̌") === 0);
	assertTrue("m̌ = M̀", col.compare("m̌", "M̀") === 0);
	assertTrue("M̀ = m̀", col.compare("M̀", "m̀") === 0);
	assertTrue("m̀ = M", col.compare("m̀", "M") === 0);
	assertTrue("M = m", col.compare("M", "m") === 0);
	assertTrue("m < N̄", col.compare("m", "N̄") < 0);
	assertTrue("N̄ = n̄", col.compare("N̄", "n̄") === 0);
	assertTrue("n̄ = Ń", col.compare("n̄", "Ń") === 0);
	assertTrue("Ń = Ń", col.compare("Ń", "Ń") === 0);
	assertTrue("Ń = ń", col.compare("Ń", "ń") === 0);
	assertTrue("ń = ń", col.compare("ń", "ń") === 0);
	assertTrue("ń = Ň", col.compare("ń", "Ň") === 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň = ň", col.compare("Ň", "ň") === 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň = Ǹ", col.compare("ň", "Ǹ") === 0);
	assertTrue("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
	assertTrue("Ǹ = ǹ", col.compare("Ǹ", "ǹ") === 0);
	assertTrue("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
	assertTrue("ǹ = N", col.compare("ǹ", "N") === 0);
	assertTrue("N = n", col.compare("N", "n") === 0);
	assertTrue("n < Ō", col.compare("n", "Ō") < 0);
	assertTrue("Ō = Ō", col.compare("Ō", "Ō") === 0);
	assertTrue("Ō = ō", col.compare("Ō", "ō") === 0);
	assertTrue("ō = ō", col.compare("ō", "ō") === 0);
	assertTrue("ō = Ó", col.compare("ō", "Ó") === 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó = ó", col.compare("Ó", "ó") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó = Ǒ", col.compare("ó", "Ǒ") === 0);
	assertTrue("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
	assertTrue("Ǒ = ǒ", col.compare("Ǒ", "ǒ") === 0);
	assertTrue("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
	assertTrue("ǒ = Ò", col.compare("ǒ", "Ò") === 0);
	assertTrue("Ò = Ò", col.compare("Ò", "Ò") === 0);
	assertTrue("Ò = ò", col.compare("Ò", "ò") === 0);
	assertTrue("ò = ò", col.compare("ò", "ò") === 0);
	assertTrue("ò = O", col.compare("ò", "O") === 0);
	assertTrue("O = o", col.compare("O", "o") === 0);
	assertTrue("o < P", col.compare("o", "P") < 0);
	assertTrue("P = p", col.compare("P", "p") === 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q = q", col.compare("Q", "q") === 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R = r", col.compare("R", "r") === 0);
	assertTrue("r < S", col.compare("r", "S") < 0);
	assertTrue("S = s", col.compare("S", "s") === 0);
	assertTrue("s < T", col.compare("s", "T") < 0);
	assertTrue("T = t", col.compare("T", "t") === 0);
	assertTrue("t < Ū", col.compare("t", "Ū") < 0);
	assertTrue("Ū = Ū", col.compare("Ū", "Ū") === 0);
	assertTrue("Ū = ū", col.compare("Ū", "ū") === 0);
	assertTrue("ū = ū", col.compare("ū", "ū") === 0);
	assertTrue("ū = Ú", col.compare("ū", "Ú") === 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú = ú", col.compare("Ú", "ú") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú = Ǔ", col.compare("ú", "Ǔ") === 0);
	assertTrue("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
	assertTrue("Ǔ = ǔ", col.compare("Ǔ", "ǔ") === 0);
	assertTrue("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
	assertTrue("ǔ = Ù", col.compare("ǔ", "Ù") === 0);
	assertTrue("Ù = Ù", col.compare("Ù", "Ù") === 0);
	assertTrue("Ù = ù", col.compare("Ù", "ù") === 0);
	assertTrue("ù = ù", col.compare("ù", "ù") === 0);
	assertTrue("ù = U", col.compare("ù", "U") === 0);
	assertTrue("U = u", col.compare("U", "u") === 0);
	assertTrue("u = Ǖ", col.compare("u", "Ǖ") === 0);
	assertTrue("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
	assertTrue("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
	assertTrue("Ǖ = ǖ", col.compare("Ǖ", "ǖ") === 0);
	assertTrue("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
	assertTrue("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
	assertTrue("ǖ = Ǘ", col.compare("ǖ", "Ǘ") === 0);
	assertTrue("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
	assertTrue("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
	assertTrue("Ǘ = ǘ", col.compare("Ǘ", "ǘ") === 0);
	assertTrue("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
	assertTrue("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
	assertTrue("ǘ = Ǚ", col.compare("ǘ", "Ǚ") === 0);
	assertTrue("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
	assertTrue("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
	assertTrue("Ǚ = ǚ", col.compare("Ǚ", "ǚ") === 0);
	assertTrue("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
	assertTrue("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
	assertTrue("ǚ = Ǜ", col.compare("ǚ", "Ǜ") === 0);
	assertTrue("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
	assertTrue("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
	assertTrue("Ǜ = ǜ", col.compare("Ǜ", "ǜ") === 0);
	assertTrue("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
	assertTrue("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
	assertTrue("ǜ = Ü", col.compare("ǜ", "Ü") === 0);
	assertTrue("Ü = Ü", col.compare("Ü", "Ü") === 0);
	assertTrue("Ü = ü", col.compare("Ü", "ü") === 0);
	assertTrue("ü = ü", col.compare("ü", "ü") === 0);
	assertTrue("ü < V", col.compare("ü", "V") < 0);
	assertTrue("V = v", col.compare("V", "v") === 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W = w", col.compare("W", "w") === 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X = x", col.compare("X", "x") === 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y = y", col.compare("Y", "y") === 0);
	assertTrue("y < Z", col.compare("y", "Z") < 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
}

function testCollatorCase_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 		"波", // bō  
		"里", // lǐ 
		"摸", // mō 
		"子", // zī
		"次", // cī
		"西", // xī
		"德", // dé
		"科", // kē
		"记", // jī
		"各", // gè 
		"坡", // pō
 		"啊", // ā
		"日", // rī
		"吴", // wú
		"那", // nà
		"吃", // chī
		"食", // shí
		"起", // qī
		"站", // zhàn
		"体", // tǐ 
		"和", // hé
		"一", // yī
		"额", // é
		"佛", // fú
		"四"  // sī 
	];

    input.sort(col.getComparator());

    var expected = [
		"啊", // ā
		"波", // bō  
		"吃", // chī
		"次", // cī
		"德", // dé
		"额", // é
		"佛", // fú
		"各", // gè 
		"和", // hé
		"记", // jī
		"科", // kē
		"里", // lǐ 
		"摸", // mō 
		"那", // nà
		"坡", // pō
		"起", // qī
		"日", // rī
		"食", // shí
		"四", // sī 
		"体", // tǐ 
		"吴", // wú
		"西", // xī
		"一", // yī
		"站", // zhàn
		"子"  // zī
	];

    assertArrayEquals(expected, input);
}

function testCollatorPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 		"波", // bō  
		"里", // lǐ 
		"摸", // mō 
		"子", // zī
		"次", // cī
		"西", // xī
		"德", // dé
		"科", // kē
		"记", // jī
		"各", // gè 
		"坡", // pō
 		"啊", // ā
		"日", // rī
		"吴", // wú
		"那", // nà
		"吃", // chī
		"食", // shí
		"起", // qī
		"站", // zhàn
		"体", // tǐ 
		"和", // hé
		"一", // yī
		"额", // é
		"佛", // fú
		"四"  // sī 
	];

    input.sort(col.getComparator());

    var expected = [
		"啊", // ā
		"波", // bō  
		"吃", // chī
		"次", // cī
		"德", // dé
		"额", // é
		"佛", // fú
		"各", // gè 
		"和", // hé
		"记", // jī
		"科", // kē
		"里", // lǐ 
		"摸", // mō 
		"那", // nà
		"坡", // pō
		"起", // qī
		"日", // rī
		"食", // shí
		"四", // sī 
		"体", // tǐ 
		"吴", // wú
		"西", // xī
		"一", // yī
		"站", // zhàn
		"子"  // zī
	];

    assertArrayEquals(expected, input);
}

function testCollatorCaseMixed_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 		"波", // bō  
		"里", // lǐ 
        "apple",
		"摸", // mō 
		"子", // zī
        "orange",
		"次", // cī
		"西", // xī
		"德", // dé
		"科", // kē
		"记", // jī
		"各", // gè 
        "banana",
		"坡", // pō
 		"啊", // ā
		"日", // rī
        "oRange",
		"吴", // wú
		"那", // nà
		"吃", // chī
        "Apple",
		"食", // shí
		"起", // qī
		"站", // zhàn
        "raspberry",
		"体", // tǐ 
		"和", // hé
		"一", // yī
        "peach",
		"额", // é
		"佛", // fú
        "RASPBERRY",
		"四"  // sī 
	];

    input.sort(col.getComparator());

    var expected = [
        "Apple",
        "apple",
        "banana",
        "oRange",
        "orange",
        "peach",
        "RASPBERRY",
        "raspberry",
		"啊", // ā
		"波", // bō  
		"吃", // chī
		"次", // cī
		"德", // dé
		"额", // é
		"佛", // fú
		"各", // gè 
		"和", // hé
		"记", // jī
		"科", // kē
		"里", // lǐ 
		"摸", // mō 
		"那", // nà
		"坡", // pō
		"起", // qī
		"日", // rī
		"食", // shí
		"四", // sī 
		"体", // tǐ 
		"吴", // wú
		"西", // xī
		"一", // yī
		"站", // zhàn
		"子"  // zī
	];

    assertArrayEquals(expected, input);
}

function testCollatorCaseMixedWithIndexMarkers_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 		"波", // bō  
		"里", // lǐ 
        "\uFDD0Apple",
		"摸", // mō 
		"子", // zī
        "\uFDD0Orange",
		"次", // cī
		"西", // xī
		"\uFDD0Yam",
		"德", // dé
		"\uFDD0Lemon",
		"科", // kē
		"记", // jī
		"各", // gè 
        "\uFDD0Banana",
		"坡", // pō
 		"啊", // ā
		"日", // rī
        "\uFDD0ORange",
		"吴", // wú
		"那", // nà
		"吃", // chī
        "\uFDD0APPLE",
		"食", // shí
		"起", // qī
		"站", // zhàn
        "\uFDD0Raspberry",
		"体", // tǐ 
		"和", // hé
		"一", // yī
        "\uFDD0Peach",
		"额", // é
		"佛", // fú
        "\uFDD0RASPBERRY",
		"四"  // sī 
	];

    input.sort(col.getComparator());

    var expected = [
        "\uFDD0APPLE",
        "\uFDD0Apple",
		"啊", // ā
        "\uFDD0Banana",
		"波", // bō  
		"吃", // chī
		"次", // cī
		"德", // dé
		"额", // é
		"佛", // fú
		"各", // gè 
		"和", // hé
		"记", // jī
		"科", // kē
		"\uFDD0Lemon",
		"里", // lǐ 
		"摸", // mō 
		"那", // nà
        "\uFDD0ORange",
        "\uFDD0Orange",
        "\uFDD0Peach",
		"坡", // pō
		"起", // qī
        "\uFDD0RASPBERRY",
        "\uFDD0Raspberry",
		"日", // rī
		"食", // shí
		"四", // sī
		"体", // tǐ 
		"吴", // wú
		"西", // xī
		"\uFDD0Yam",
		"一", // yī
		"站", // zhàn
		"子"  // zī
	];

    assertArrayEquals(expected, input);
}


function testCollatorHanziTones_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
		"鱼",
		"闷",
		"白",
		"报",
		"皮",
		"孕",
		"劈",
		"被",
		"伯",
		"笨",
 		"耳",
		"把",
		"批",
		"癖",
		"勇",
		"有",
		"鬓",
		"月",
		"病",
		"捕",
		"美",
		"办",
		"别",
		"谬",
		"帮",
		"崩",
		"逼",
	];

    input.sort(col.getComparator());

    var expected = [
   		"把", // "bǎ"
		"白", // "bái"
		"办", // "bàn"
   		"帮", // "bāng"
		"报", // "bào"
		"被", // "bèi"
		"笨", // "bèn"
		"崩", // "bēng"
		"逼", // "bī"
		"别", // "bié"
		"鬓", // "bìn"
		"病", // "bìng"
		"伯", // "bó"  
		"捕", // "bǔ"
		"耳", // "Ěr"
		"美", // "měi"
		"闷", // "mèn"
		"谬", // "miù"
		"批", // "pī"
		"劈", // "pī"
		"皮", // "pí"
		"癖", // "pǐ"
		"勇", // "yǒng"
		"有", // "yǒu"
		"鱼", // "yú" 
		"月", // "yuè"
		"孕"  // "yùn"
	];

    assertArrayEquals(expected, input);
}

