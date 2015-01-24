/*
 * testcollation_zh-Hant.js - test the Collator object in traditional Chinese
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

function testJSCollatorQuatHanzi_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("乁 < 丄", col.compare("乁", "丄") < 0);
	assertTrue("丄 < 下", col.compare("丄", "下") < 0);
	assertTrue("下 < 々", col.compare("下", "々") < 0);
	assertTrue("々 < 不", col.compare("々", "不") < 0);
	assertTrue("不 < 㓙", col.compare("不", "㓙") < 0);
	assertTrue("㓙 < 亜", col.compare("㓙", "亜") < 0);
	assertTrue("亜 < 亞", col.compare("亜", "亞") < 0);
	assertTrue("亞 < 郆", col.compare("亞", "郆") < 0);
	assertTrue("郆 < 㑣", col.compare("郆", "㑣") < 0);
	assertTrue("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
	assertTrue("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
	assertTrue("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
	assertTrue("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
	assertTrue("嘣 < 澕", col.compare("嘣", "澕") < 0);
	assertTrue("澕 < 朤", col.compare("澕", "朤") < 0);
	assertTrue("朤 < 濱", col.compare("朤", "濱") < 0);
	assertTrue("濱 < 簧", col.compare("濱", "簧") < 0);
	assertTrue("簧 < 䳡", col.compare("簧", "䳡") < 0);
	assertTrue("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
	assertTrue("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
	assertTrue("䱹 < 囈", col.compare("䱹", "囈") < 0);
	assertTrue("囈 < 覉", col.compare("囈", "覉") < 0);
	assertTrue("覉 < 靈", col.compare("覉", "靈") < 0);
	assertTrue("靈 < 䵴", col.compare("靈", "䵴") < 0);
	assertTrue("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
	assertTrue("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
	assertTrue("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
	assertTrue("㿜 < 虋", col.compare("㿜", "虋") < 0);
	assertTrue("虋 < 䂅", col.compare("虋", "䂅") < 0);
	assertTrue("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
	assertTrue("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
	assertTrue("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
	assertTrue("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
	assertTrue("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
	assertTrue("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
	assertTrue("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
	assertTrue("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
	assertTrue("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
	assertTrue("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
	assertTrue("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
	assertTrue("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
	assertTrue("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
	assertTrue("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
	assertTrue("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
	assertTrue("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
	assertTrue("龘 < 䨻", col.compare("龘", "䨻") < 0);
	assertTrue("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
}

function testJSCollatorTerHanzi_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("乁 < 丄", col.compare("乁", "丄") < 0);
	assertTrue("丄 < 下", col.compare("丄", "下") < 0);
	assertTrue("下 < 々", col.compare("下", "々") < 0);
	assertTrue("々 < 不", col.compare("々", "不") < 0);
	assertTrue("不 < 㓙", col.compare("不", "㓙") < 0);
	assertTrue("㓙 < 亜", col.compare("㓙", "亜") < 0);
	assertTrue("亜 < 亞", col.compare("亜", "亞") < 0);
	assertTrue("亞 < 郆", col.compare("亞", "郆") < 0);
	assertTrue("郆 < 㑣", col.compare("郆", "㑣") < 0);
	assertTrue("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
	assertTrue("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
	assertTrue("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
	assertTrue("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
	assertTrue("嘣 < 澕", col.compare("嘣", "澕") < 0);
	assertTrue("澕 < 朤", col.compare("澕", "朤") < 0);
	assertTrue("朤 < 濱", col.compare("朤", "濱") < 0);
	assertTrue("濱 < 簧", col.compare("濱", "簧") < 0);
	assertTrue("簧 < 䳡", col.compare("簧", "䳡") < 0);
	assertTrue("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
	assertTrue("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
	assertTrue("䱹 < 囈", col.compare("䱹", "囈") < 0);
	assertTrue("囈 < 覉", col.compare("囈", "覉") < 0);
	assertTrue("覉 < 靈", col.compare("覉", "靈") < 0);
	assertTrue("靈 < 䵴", col.compare("靈", "䵴") < 0);
	assertTrue("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
	assertTrue("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
	assertTrue("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
	assertTrue("㿜 < 虋", col.compare("㿜", "虋") < 0);
	assertTrue("虋 < 䂅", col.compare("虋", "䂅") < 0);
	assertTrue("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
	assertTrue("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
	assertTrue("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
	assertTrue("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
	assertTrue("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
	assertTrue("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
	assertTrue("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
	assertTrue("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
	assertTrue("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
	assertTrue("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
	assertTrue("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
	assertTrue("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
	assertTrue("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
	assertTrue("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
	assertTrue("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
	assertTrue("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
	assertTrue("龘 < 䨻", col.compare("龘", "䨻") < 0);
	assertTrue("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
}

function testJSCollatorSecHanzi_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("乁 < 丄", col.compare("乁", "丄") < 0);
	assertTrue("丄 < 下", col.compare("丄", "下") < 0);
	assertTrue("下 < 々", col.compare("下", "々") < 0);
	assertTrue("々 < 不", col.compare("々", "不") < 0);
	assertTrue("不 < 㓙", col.compare("不", "㓙") < 0);
	assertTrue("㓙 < 亜", col.compare("㓙", "亜") < 0);
	assertTrue("亜 < 亞", col.compare("亜", "亞") < 0);
	assertTrue("亞 < 郆", col.compare("亞", "郆") < 0);
	assertTrue("郆 < 㑣", col.compare("郆", "㑣") < 0);
	assertTrue("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
	assertTrue("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
	assertTrue("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
	assertTrue("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
	assertTrue("嘣 < 澕", col.compare("嘣", "澕") < 0);
	assertTrue("澕 < 朤", col.compare("澕", "朤") < 0);
	assertTrue("朤 < 濱", col.compare("朤", "濱") < 0);
	assertTrue("濱 < 簧", col.compare("濱", "簧") < 0);
	assertTrue("簧 < 䳡", col.compare("簧", "䳡") < 0);
	assertTrue("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
	assertTrue("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
	assertTrue("䱹 < 囈", col.compare("䱹", "囈") < 0);
	assertTrue("囈 < 覉", col.compare("囈", "覉") < 0);
	assertTrue("覉 < 靈", col.compare("覉", "靈") < 0);
	assertTrue("靈 < 䵴", col.compare("靈", "䵴") < 0);
	assertTrue("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
	assertTrue("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
	assertTrue("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
	assertTrue("㿜 < 虋", col.compare("㿜", "虋") < 0);
	assertTrue("虋 < 䂅", col.compare("虋", "䂅") < 0);
	assertTrue("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
	assertTrue("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
	assertTrue("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
	assertTrue("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
	assertTrue("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
	assertTrue("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
	assertTrue("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
	assertTrue("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
	assertTrue("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
	assertTrue("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
	assertTrue("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
	assertTrue("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
	assertTrue("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
	assertTrue("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
	assertTrue("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
	assertTrue("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
	assertTrue("龘 < 䨻", col.compare("龘", "䨻") < 0);
	assertTrue("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
}

function testJSCollatorPriHanzi_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("乁 < 丄", col.compare("乁", "丄") < 0);
	assertTrue("丄 < 下", col.compare("丄", "下") < 0);
	assertTrue("下 < 々", col.compare("下", "々") < 0);
	assertTrue("々 < 不", col.compare("々", "不") < 0);
	assertTrue("不 < 㓙", col.compare("不", "㓙") < 0);
	assertTrue("㓙 < 亜", col.compare("㓙", "亜") < 0);
	assertTrue("亜 < 亞", col.compare("亜", "亞") < 0);
	assertTrue("亞 < 郆", col.compare("亞", "郆") < 0);
	assertTrue("郆 < 㑣", col.compare("郆", "㑣") < 0);
	assertTrue("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
	assertTrue("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
	assertTrue("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
	assertTrue("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
	assertTrue("嘣 < 澕", col.compare("嘣", "澕") < 0);
	assertTrue("澕 < 朤", col.compare("澕", "朤") < 0);
	assertTrue("朤 < 濱", col.compare("朤", "濱") < 0);
	assertTrue("濱 < 簧", col.compare("濱", "簧") < 0);
	assertTrue("簧 < 䳡", col.compare("簧", "䳡") < 0);
	assertTrue("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
	assertTrue("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
	assertTrue("䱹 < 囈", col.compare("䱹", "囈") < 0);
	assertTrue("囈 < 覉", col.compare("囈", "覉") < 0);
	assertTrue("覉 < 靈", col.compare("覉", "靈") < 0);
	assertTrue("靈 < 䵴", col.compare("靈", "䵴") < 0);
	assertTrue("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
	assertTrue("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
	assertTrue("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
	assertTrue("㿜 < 虋", col.compare("㿜", "虋") < 0);
	assertTrue("虋 < 䂅", col.compare("虋", "䂅") < 0);
	assertTrue("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
	assertTrue("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
	assertTrue("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
	assertTrue("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
	assertTrue("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
	assertTrue("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
	assertTrue("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
	assertTrue("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
	assertTrue("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
	assertTrue("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
	assertTrue("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
	assertTrue("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
	assertTrue("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
	assertTrue("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
	assertTrue("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
	assertTrue("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
	assertTrue("龘 < 䨻", col.compare("龘", "䨻") < 0);
	assertTrue("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
}

function testJSCollatorQuatHanziVariants_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorTerHanziVariants_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorSecHanziVariants_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorPriHanziVariants_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorPinyinQuat_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorPinyinTer_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorPinyinSec_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorPinyinPri_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
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

function testJSCollatorZhuyinQuat_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	assertTrue("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
	assertTrue("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
	assertTrue("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
	assertTrue("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
	assertTrue("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
	assertTrue("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
	assertTrue("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
	assertTrue("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
	assertTrue("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
	assertTrue("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
	assertTrue("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
	assertTrue("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
	assertTrue("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
	assertTrue("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
	assertTrue("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
	assertTrue("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
	assertTrue("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
	assertTrue("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
	assertTrue("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
	assertTrue("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
	assertTrue("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
	assertTrue("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
	assertTrue("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
	assertTrue("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
	assertTrue("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
	assertTrue("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
	assertTrue("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
	assertTrue("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
	assertTrue("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
	assertTrue("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
	assertTrue("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
	assertTrue("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
	assertTrue("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
	assertTrue("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
	assertTrue("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
	assertTrue("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
	assertTrue("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
}

function testJSCollatorZhuyinTer_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	assertTrue("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
	assertTrue("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
	assertTrue("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
	assertTrue("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
	assertTrue("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
	assertTrue("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
	assertTrue("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
	assertTrue("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
	assertTrue("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
	assertTrue("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
	assertTrue("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
	assertTrue("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
	assertTrue("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
	assertTrue("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
	assertTrue("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
	assertTrue("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
	assertTrue("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
	assertTrue("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
	assertTrue("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
	assertTrue("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
	assertTrue("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
	assertTrue("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
	assertTrue("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
	assertTrue("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
	assertTrue("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
	assertTrue("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
	assertTrue("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
	assertTrue("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
	assertTrue("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
	assertTrue("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
	assertTrue("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
	assertTrue("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
	assertTrue("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
	assertTrue("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
	assertTrue("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
	assertTrue("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
	assertTrue("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
}

function testJSCollatorZhuyinSec_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	assertTrue("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
	assertTrue("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
	assertTrue("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
	assertTrue("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
	assertTrue("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
	assertTrue("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
	assertTrue("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
	assertTrue("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
	assertTrue("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
	assertTrue("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
	assertTrue("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
	assertTrue("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
	assertTrue("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
	assertTrue("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
	assertTrue("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
	assertTrue("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
	assertTrue("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
	assertTrue("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
	assertTrue("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
	assertTrue("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
	assertTrue("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
	assertTrue("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
	assertTrue("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
	assertTrue("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
	assertTrue("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
	assertTrue("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
	assertTrue("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
	assertTrue("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
	assertTrue("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
	assertTrue("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
	assertTrue("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
	assertTrue("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
	assertTrue("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
	assertTrue("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
	assertTrue("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
	assertTrue("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
	assertTrue("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
}

function testJSCollatorZhuyinPri_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);
	
	assertTrue("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
	assertTrue("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
	assertTrue("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
	assertTrue("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
	assertTrue("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
	assertTrue("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
	assertTrue("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
	assertTrue("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
	assertTrue("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
	assertTrue("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
	assertTrue("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
	assertTrue("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
	assertTrue("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
	assertTrue("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
	assertTrue("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
	assertTrue("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
	assertTrue("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
	assertTrue("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
	assertTrue("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
	assertTrue("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
	assertTrue("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
	assertTrue("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
	assertTrue("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
	assertTrue("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
	assertTrue("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
	assertTrue("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
	assertTrue("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
	assertTrue("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
	assertTrue("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
	assertTrue("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
	assertTrue("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
	assertTrue("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
	assertTrue("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
	assertTrue("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
	assertTrue("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
	assertTrue("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
	assertTrue("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
}

function testCollatorCase_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
        "唐", // 10
        "㸌", // 20
        "乃", // 2
        "儓", // 16
        "㩥", // 18
        "㐮", // 13
        "咗", // 8 
        "不", // 4
        "丿", // 1
        "㒆", // 14
        "乒", // 6
        "𠴭", // 11
        "儍", // 15
        "串", // 7
        "員", // 10
        "世", // 5
        "傪", // 13
        "乻", // 9
        "个"  // 3
	];

    input.sort(col.getComparator());

    var expected = [
        "丿", // 1
        "乃", // 2
        "个", // 3
        "不", // 4
        "世", // 5
        "乒", // 6
        "串", // 7
        "咗", // 8 
        "乻", // 9
        "員", // 10
        "唐", // 10
        "𠴭", // 11
        "㐮", // 13
        "傪", // 13
        "㒆", // 14
        "儍", // 15
        "儓", // 16
        "㩥", // 18
        "㸌"  // 20
	];

    assertArrayEquals(expected, input);
}

function testCollatorPri_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
        "唐", // 10
        "㸌", // 20
        "乃", // 2
        "儓", // 16
        "㩥", // 18
        "㐮", // 13
        "咗", // 8 
        "不", // 4
        "丿", // 1
        "㒆", // 14
        "乒", // 6
        "𠴭", // 11
        "儍", // 15
        "串", // 7
        "員", // 10
        "世", // 5
        "傪", // 13
        "乻", // 9
        "个"  // 3
	];

    input.sort(col.getComparator());

    var expected = [
        "丿", // 1
        "乃", // 2
        "个", // 3
        "不", // 4
        "世", // 5
        "乒", // 6
        "串", // 7
        "咗", // 8 
        "乻", // 9
        "員", // 10
        "唐", // 10
        "𠴭", // 11
        "㐮", // 13
        "傪", // 13
        "㒆", // 14
        "儍", // 15
        "儓", // 16
        "㩥", // 18
        "㸌"  // 20
	];

    assertArrayEquals(expected, input);
}

function testCollatorCaseMixed_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
        "唐", // 10
        "oRange",
        "㸌", // 20
        "乃", // 2
        "儓", // 16
        "RASPBERRY",
        "㩥", // 18
        "㐮", // 13
        "咗", // 8 
        "banana",
        "不", // 4
        "apple",
        "丿", // 1
        "㒆", // 14
        "乒", // 6
        "𠴭", // 11
        "儍", // 15
        "Apple",
        "串", // 7
        "員", // 10
        "orange",
        "世", // 5
        "peach",
        "傪", // 13
        "raspberry",
        "乻", // 9
        "个"  // 3
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
        "丿", // 1
        "乃", // 2
        "个", // 3
        "不", // 4
        "世", // 5
        "乒", // 6
        "串", // 7
        "咗", // 8 
        "乻", // 9
        "員", // 10
        "唐", // 10
        "𠴭", // 11
        "㐮", // 13
        "傪", // 13
        "㒆", // 14
        "儍", // 15
        "儓", // 16
        "㩥", // 18
        "㸌"  // 20
	];

    assertArrayEquals(expected, input);
}

function testCollatorCaseMixedWithIndexMarkers_zh_Hant() {
	var col = new ilib.Collator({
		locale: "zh-Hant-TW",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
        "唐", // 10
        "\uFDD0.13",
        "\uFDD0.11",
        "㸌", // 20
        "乃", // 2
        "儓", // 16
        "\uFDD0.6",
        "㩥", // 18
        "㐮", // 13
        "咗", // 8 
        "\uFDD0.10",
        "不", // 4
        "\uFDD0.3",
        "丿", // 1
        "㒆", // 14
        "乒", // 6
        "𠴭", // 11
        "儍", // 15
        "串", // 7
        "員", // 10
        "世", // 5
        "傪", // 13
        "\uFDD0.20",
        "乻", // 9
        "个"  // 3
	];

    input.sort(col.getComparator());

    var expected = [
        "丿", // 1
        "乃", // 2
        "\uFDD0.3",
        "个", // 3
        "不", // 4
        "世", // 5
        "\uFDD0.6",
        "乒", // 6
        "串", // 7
        "咗", // 8 
        "乻", // 9
        "\uFDD0.10",
        "員", // 10
        "唐", // 10
        "\uFDD0.11",
        "𠴭", // 11
        "\uFDD0.13",
        "㐮", // 13
        "傪", // 13
        "㒆", // 14
        "儍", // 15
        "儓", // 16
        "㩥", // 18
        "\uFDD0.20",
        "㸌"  // 20
	];

    assertArrayEquals(expected, input);
}
