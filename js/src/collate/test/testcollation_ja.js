/*
 * testcollation_ja.js - test the Collator object in Japanese
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

function testJSCollatorQuatKanji_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// kanji are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	assertTrue("頴 < 円", col.compare("頴", "円") < 0);
	assertTrue("円 < 凹", col.compare("円", "凹") < 0);
	assertTrue("凹 < 臆", col.compare("凹", "臆") < 0);
	assertTrue("臆 < 寡", col.compare("臆", "寡") < 0);
	assertTrue("寡 < 火", col.compare("寡", "火") < 0);
	assertTrue("火 < 茄", col.compare("火", "茄") < 0);
	assertTrue("茄 < 荷", col.compare("茄", "荷") < 0);
	assertTrue("荷 < 外", col.compare("荷", "外") < 0);
	assertTrue("外 < 竃", col.compare("外", "竃") < 0);
	assertTrue("竃 < 凶", col.compare("竃", "凶") < 0);
	assertTrue("凶 < 形", col.compare("凶", "形") < 0);
	assertTrue("形 < 戸", col.compare("形", "戸") < 0);
	assertTrue("戸 < 語", col.compare("戸", "語") < 0);
	assertTrue("語 < 三", col.compare("語", "三") < 0);
	assertTrue("三 < 女", col.compare("三", "女") < 0);
	assertTrue("女 < 小", col.compare("女", "小") < 0);
	assertTrue("小 < 上", col.compare("小", "上") < 0);
	assertTrue("上 < 人", col.compare("上", "人") < 0);
	assertTrue("人 < 大", col.compare("人", "大") < 0);
	assertTrue("大 < 辻", col.compare("大", "辻") < 0);
	assertTrue("辻 < 匹", col.compare("辻", "匹") < 0);
	assertTrue("匹 < 夕", col.compare("匹", "夕") < 0);
	assertTrue("夕 < 六", col.compare("夕", "六") < 0);
	assertTrue("六 < 孑", col.compare("六", "孑") < 0);
	assertTrue("孑 < 彳", col.compare("孑", "彳") < 0);
	assertTrue("彳 < 杲", col.compare("彳", "杲") < 0);
	assertTrue("杲 < 熾", col.compare("杲", "熾") < 0);
	assertTrue("熾 < 疸", col.compare("熾", "疸") < 0);
	assertTrue("疸 < 穽", col.compare("疸", "穽") < 0);
	assertTrue("穽 < 詁", col.compare("穽", "詁") < 0);
	assertTrue("詁 < 逎", col.compare("詁", "逎") < 0);
	assertTrue("逎 < 鶩", col.compare("逎", "鶩") < 0);
	assertTrue("鶩 < 熙", col.compare("鶩", "熙") < 0);
}

function testJSCollatorTerKanji_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// kanji are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	assertTrue("頴 < 円", col.compare("頴", "円") < 0);
	assertTrue("円 < 凹", col.compare("円", "凹") < 0);
	assertTrue("凹 < 臆", col.compare("凹", "臆") < 0);
	assertTrue("臆 < 寡", col.compare("臆", "寡") < 0);
	assertTrue("寡 < 火", col.compare("寡", "火") < 0);
	assertTrue("火 < 茄", col.compare("火", "茄") < 0);
	assertTrue("茄 < 荷", col.compare("茄", "荷") < 0);
	assertTrue("荷 < 外", col.compare("荷", "外") < 0);
	assertTrue("外 < 竃", col.compare("外", "竃") < 0);
	assertTrue("竃 < 凶", col.compare("竃", "凶") < 0);
	assertTrue("凶 < 形", col.compare("凶", "形") < 0);
	assertTrue("形 < 戸", col.compare("形", "戸") < 0);
	assertTrue("戸 < 語", col.compare("戸", "語") < 0);
	assertTrue("語 < 三", col.compare("語", "三") < 0);
	assertTrue("三 < 女", col.compare("三", "女") < 0);
	assertTrue("女 < 小", col.compare("女", "小") < 0);
	assertTrue("小 < 上", col.compare("小", "上") < 0);
	assertTrue("上 < 人", col.compare("上", "人") < 0);
	assertTrue("人 < 大", col.compare("人", "大") < 0);
	assertTrue("大 < 辻", col.compare("大", "辻") < 0);
	assertTrue("辻 < 匹", col.compare("辻", "匹") < 0);
	assertTrue("匹 < 夕", col.compare("匹", "夕") < 0);
	assertTrue("夕 < 六", col.compare("夕", "六") < 0);
	assertTrue("六 < 孑", col.compare("六", "孑") < 0);
	assertTrue("孑 < 彳", col.compare("孑", "彳") < 0);
	assertTrue("彳 < 杲", col.compare("彳", "杲") < 0);
	assertTrue("杲 < 熾", col.compare("杲", "熾") < 0);
	assertTrue("熾 < 疸", col.compare("熾", "疸") < 0);
	assertTrue("疸 < 穽", col.compare("疸", "穽") < 0);
	assertTrue("穽 < 詁", col.compare("穽", "詁") < 0);
	assertTrue("詁 < 逎", col.compare("詁", "逎") < 0);
	assertTrue("逎 < 鶩", col.compare("逎", "鶩") < 0);
	assertTrue("鶩 < 熙", col.compare("鶩", "熙") < 0);
}

function testJSCollatorSecKanji_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	// kanji are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	assertTrue("頴 < 円", col.compare("頴", "円") < 0);
	assertTrue("円 < 凹", col.compare("円", "凹") < 0);
	assertTrue("凹 < 臆", col.compare("凹", "臆") < 0);
	assertTrue("臆 < 寡", col.compare("臆", "寡") < 0);
	assertTrue("寡 < 火", col.compare("寡", "火") < 0);
	assertTrue("火 < 茄", col.compare("火", "茄") < 0);
	assertTrue("茄 < 荷", col.compare("茄", "荷") < 0);
	assertTrue("荷 < 外", col.compare("荷", "外") < 0);
	assertTrue("外 < 竃", col.compare("外", "竃") < 0);
	assertTrue("竃 < 凶", col.compare("竃", "凶") < 0);
	assertTrue("凶 < 形", col.compare("凶", "形") < 0);
	assertTrue("形 < 戸", col.compare("形", "戸") < 0);
	assertTrue("戸 < 語", col.compare("戸", "語") < 0);
	assertTrue("語 < 三", col.compare("語", "三") < 0);
	assertTrue("三 < 女", col.compare("三", "女") < 0);
	assertTrue("女 < 小", col.compare("女", "小") < 0);
	assertTrue("小 < 上", col.compare("小", "上") < 0);
	assertTrue("上 < 人", col.compare("上", "人") < 0);
	assertTrue("人 < 大", col.compare("人", "大") < 0);
	assertTrue("大 < 辻", col.compare("大", "辻") < 0);
	assertTrue("辻 < 匹", col.compare("辻", "匹") < 0);
	assertTrue("匹 < 夕", col.compare("匹", "夕") < 0);
	assertTrue("夕 < 六", col.compare("夕", "六") < 0);
	assertTrue("六 < 孑", col.compare("六", "孑") < 0);
	assertTrue("孑 < 彳", col.compare("孑", "彳") < 0);
	assertTrue("彳 < 杲", col.compare("彳", "杲") < 0);
	assertTrue("杲 < 熾", col.compare("杲", "熾") < 0);
	assertTrue("熾 < 疸", col.compare("熾", "疸") < 0);
	assertTrue("疸 < 穽", col.compare("疸", "穽") < 0);
	assertTrue("穽 < 詁", col.compare("穽", "詁") < 0);
	assertTrue("詁 < 逎", col.compare("詁", "逎") < 0);
	assertTrue("逎 < 鶩", col.compare("逎", "鶩") < 0);
	assertTrue("鶩 < 熙", col.compare("鶩", "熙") < 0);
}

function testJSCollatorPriKanji_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	// kanji are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	assertTrue("頴 < 円", col.compare("頴", "円") < 0);
	assertTrue("円 < 凹", col.compare("円", "凹") < 0);
	assertTrue("凹 < 臆", col.compare("凹", "臆") < 0);
	assertTrue("臆 < 寡", col.compare("臆", "寡") < 0);
	assertTrue("寡 < 火", col.compare("寡", "火") < 0);
	assertTrue("火 < 茄", col.compare("火", "茄") < 0);
	assertTrue("茄 < 荷", col.compare("茄", "荷") < 0);
	assertTrue("荷 < 外", col.compare("荷", "外") < 0);
	assertTrue("外 < 竃", col.compare("外", "竃") < 0);
	assertTrue("竃 < 凶", col.compare("竃", "凶") < 0);
	assertTrue("凶 < 形", col.compare("凶", "形") < 0);
	assertTrue("形 < 戸", col.compare("形", "戸") < 0);
	assertTrue("戸 < 語", col.compare("戸", "語") < 0);
	assertTrue("語 < 三", col.compare("語", "三") < 0);
	assertTrue("三 < 女", col.compare("三", "女") < 0);
	assertTrue("女 < 小", col.compare("女", "小") < 0);
	assertTrue("小 < 上", col.compare("小", "上") < 0);
	assertTrue("上 < 人", col.compare("上", "人") < 0);
	assertTrue("人 < 大", col.compare("人", "大") < 0);
	assertTrue("大 < 辻", col.compare("大", "辻") < 0);
	assertTrue("辻 < 匹", col.compare("辻", "匹") < 0);
	assertTrue("匹 < 夕", col.compare("匹", "夕") < 0);
	assertTrue("夕 < 六", col.compare("夕", "六") < 0);
	assertTrue("六 < 孑", col.compare("六", "孑") < 0);
	assertTrue("孑 < 彳", col.compare("孑", "彳") < 0);
	assertTrue("彳 < 杲", col.compare("彳", "杲") < 0);
	assertTrue("杲 < 熾", col.compare("杲", "熾") < 0);
	assertTrue("熾 < 疸", col.compare("熾", "疸") < 0);
	assertTrue("疸 < 穽", col.compare("疸", "穽") < 0);
	assertTrue("穽 < 詁", col.compare("穽", "詁") < 0);
	assertTrue("詁 < 逎", col.compare("詁", "逎") < 0);
	assertTrue("逎 < 鶩", col.compare("逎", "鶩") < 0);
	assertTrue("鶩 < 熙", col.compare("鶩", "熙") < 0);
}

function testJSCollatorHiraganaQuat_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が < が", col.compare("が", "が") < 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ < ぎ", col.compare("ぎ", "ぎ") < 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ < ぐ", col.compare("ぐ", "ぐ") < 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ < げ", col.compare("げ", "げ") < 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご < ご", col.compare("ご", "ご") < 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ < ざ", col.compare("ざ", "ざ") < 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ < じ", col.compare("じ", "じ") < 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず < ず", col.compare("ず", "ず") < 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ < ぜ", col.compare("ぜ", "ぜ") < 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ < ぞ", col.compare("ぞ", "ぞ") < 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ < だ", col.compare("だ", "だ") < 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ < ぢ", col.compare("ぢ", "ぢ") < 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ < づ", col.compare("づ", "づ") < 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で < で", col.compare("で", "で") < 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど < ど", col.compare("ど", "ど") < 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば < ば", col.compare("ば", "ば") < 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ < ぱ", col.compare("ぱ", "ぱ") < 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び < び", col.compare("び", "び") < 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ < ぴ", col.compare("ぴ", "ぴ") < 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ < ぶ", col.compare("ぶ", "ぶ") < 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ < ぷ", col.compare("ぷ", "ぷ") < 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ < べ", col.compare("べ", "べ") < 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ < ぺ", col.compare("ぺ", "ぺ") < 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ < ぼ", col.compare("ぼ", "ぼ") < 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ < ぽ", col.compare("ぽ", "ぽ") < 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaTer_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaSec_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaPri_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う = ゔ", col.compare("う", "ゔ") === 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か = が", col.compare("か", "が") === 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き = ぎ", col.compare("き", "ぎ") === 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く = ぐ", col.compare("く", "ぐ") === 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け = げ", col.compare("け", "げ") === 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ = ご", col.compare("こ", "ご") === 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ = ざ", col.compare("さ", "ざ") === 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し = じ", col.compare("し", "じ") === 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す = ず", col.compare("す", "ず") === 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ = ぜ", col.compare("せ", "ぜ") === 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ = ぞ", col.compare("そ", "ぞ") === 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た = だ", col.compare("た", "だ") === 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち = ぢ", col.compare("ち", "ぢ") === 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ = づ", col.compare("つ", "づ") === 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て = で", col.compare("て", "で") === 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と = ど", col.compare("と", "ど") === 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は = ば", col.compare("は", "ば") === 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば = ぱ", col.compare("ば", "ぱ") === 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ = び", col.compare("ひ", "び") === 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び = ぴ", col.compare("び", "ぴ") === 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ = ぶ", col.compare("ふ", "ぶ") === 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ = ぷ", col.compare("ぶ", "ぷ") === 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ = べ", col.compare("へ", "べ") === 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ = ぺ", col.compare("べ", "ぺ") === 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ = ぼ", col.compare("ほ", "ぼ") === 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ = ぽ", col.compare("ぼ", "ぽ") === 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaLengthMarksQuat_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);
	assertTrue("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
	assertTrue("たー < たぁ", col.compare("たー", "たぁ") < 0);
	assertTrue("だー < だぁ", col.compare("だー", "だぁ") < 0);
	assertTrue("なー < なぁ", col.compare("なー", "なぁ") < 0);
	assertTrue("はー < はぁ", col.compare("はー", "はぁ") < 0);
	assertTrue("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
	assertTrue("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
	assertTrue("まー < まぁ", col.compare("まー", "まぁ") < 0);
	assertTrue("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
	assertTrue("やー < やぁ", col.compare("やー", "やぁ") < 0);
	assertTrue("らー < らぁ", col.compare("らー", "らぁ") < 0);
	assertTrue("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
	assertTrue("わー < わぁ", col.compare("わー", "わぁ") < 0);
	
	assertTrue("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
	assertTrue("いー < いぃ", col.compare("いー", "いぃ") < 0);
	assertTrue("きー < きぃ", col.compare("きー", "きぃ") < 0);
	assertTrue("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
	assertTrue("しー < しぃ", col.compare("しー", "しぃ") < 0);
	assertTrue("じー < じぃ", col.compare("じー", "じぃ") < 0);
	assertTrue("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
	assertTrue("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
	assertTrue("にー < にぃ", col.compare("にー", "にぃ") < 0);
	assertTrue("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
	assertTrue("びー < びぃ", col.compare("びー", "びぃ") < 0);
	assertTrue("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
	assertTrue("みー < みぃ", col.compare("みー", "みぃ") < 0);
	assertTrue("りー < りぃ", col.compare("りー", "りぃ") < 0);
	assertTrue("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
	
	assertTrue("ぅー < ぅぃ", col.compare("ぅー", "ぅぅ") < 0);
	assertTrue("うー < うぃ", col.compare("うー", "うぅ") < 0);
	assertTrue("くー < くぃ", col.compare("くー", "くぅ") < 0);
	assertTrue("ぐー < ぐぃ", col.compare("ぐー", "ぐぅ") < 0);
	assertTrue("すー < すぃ", col.compare("すー", "すぅ") < 0);
	assertTrue("ずー < ずぃ", col.compare("ずー", "ずぅ") < 0);
	assertTrue("っー < っぃ", col.compare("っー", "っぅ") < 0);
	assertTrue("つー < つぃ", col.compare("つー", "つぅ") < 0);
	assertTrue("づー < づぃ", col.compare("づー", "づぅ") < 0);
	assertTrue("ぬー < ぬぃ", col.compare("ぬー", "ぬぅ") < 0);
	assertTrue("ふー < ふぃ", col.compare("ふー", "ふぅ") < 0);
	assertTrue("ぶー < ぶぃ", col.compare("ぶー", "ぶぅ") < 0);
	assertTrue("ぷー < ぷぃ", col.compare("ぷー", "ぷぅ") < 0);
	assertTrue("むー < むぃ", col.compare("むー", "むぅ") < 0);
	assertTrue("ゅー < ゅぃ", col.compare("ゅー", "ゅぅ") < 0);
	assertTrue("ゆー < ゆぃ", col.compare("ゆー", "ゆぅ") < 0);
	assertTrue("るー < るぃ", col.compare("るー", "るぅ") < 0);
	assertTrue("ゔー < ゔぃ", col.compare("ゔー", "ゔぅ") < 0);
	
	assertTrue("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
	assertTrue("えー < えぇ", col.compare("えー", "えぇ") < 0);
	assertTrue("けー < けぇ", col.compare("けー", "けぇ") < 0);
	assertTrue("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
	assertTrue("げー < げぇ", col.compare("げー", "げぇ") < 0);
	assertTrue("せー < せぇ", col.compare("せー", "せぇ") < 0);
	assertTrue("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
	assertTrue("てー < てぇ", col.compare("てー", "てぇ") < 0);
	assertTrue("でー < でぇ", col.compare("でー", "でぇ") < 0);
	assertTrue("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
	assertTrue("へー < へぇ", col.compare("へー", "へぇ") < 0);
	assertTrue("べー < べぇ", col.compare("べー", "べぇ") < 0);
	assertTrue("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
	assertTrue("めー < めぇ", col.compare("めー", "めぇ") < 0);
	assertTrue("れー < れぇ", col.compare("れー", "れぇ") < 0);
	assertTrue("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
	
	assertTrue("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
	assertTrue("おー < おぉ", col.compare("おー", "おぉ") < 0);
	assertTrue("こー < こぉ", col.compare("こー", "こぉ") < 0);
	assertTrue("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
	assertTrue("そー < そぉ", col.compare("そー", "そぉ") < 0);
	assertTrue("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
	assertTrue("とー < とぉ", col.compare("とー", "とぉ") < 0);
	assertTrue("どー < どぉ", col.compare("どー", "どぉ") < 0);
	assertTrue("のー < のぉ", col.compare("のー", "のぉ") < 0);
	assertTrue("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
	assertTrue("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
	assertTrue("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
	assertTrue("もー < もぉ", col.compare("もー", "もぉ") < 0);
	assertTrue("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
	assertTrue("よー < よぉ", col.compare("よー", "よぉ") < 0);
	assertTrue("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
	assertTrue("をー < をぉ", col.compare("をー", "をぉ") < 0);
}

function testJSCollatorHiraganaLengthMarksTer_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);
	assertTrue("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
	assertTrue("たー < たぁ", col.compare("たー", "たぁ") < 0);
	assertTrue("だー < だぁ", col.compare("だー", "だぁ") < 0);
	assertTrue("なー < なぁ", col.compare("なー", "なぁ") < 0);
	assertTrue("はー < はぁ", col.compare("はー", "はぁ") < 0);
	assertTrue("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
	assertTrue("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
	assertTrue("まー < まぁ", col.compare("まー", "まぁ") < 0);
	assertTrue("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
	assertTrue("やー < やぁ", col.compare("やー", "やぁ") < 0);
	assertTrue("らー < らぁ", col.compare("らー", "らぁ") < 0);
	assertTrue("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
	assertTrue("わー < わぁ", col.compare("わー", "わぁ") < 0);
	
	assertTrue("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
	assertTrue("いー < いぃ", col.compare("いー", "いぃ") < 0);
	assertTrue("きー < きぃ", col.compare("きー", "きぃ") < 0);
	assertTrue("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
	assertTrue("しー < しぃ", col.compare("しー", "しぃ") < 0);
	assertTrue("じー < じぃ", col.compare("じー", "じぃ") < 0);
	assertTrue("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
	assertTrue("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
	assertTrue("にー < にぃ", col.compare("にー", "にぃ") < 0);
	assertTrue("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
	assertTrue("びー < びぃ", col.compare("びー", "びぃ") < 0);
	assertTrue("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
	assertTrue("みー < みぃ", col.compare("みー", "みぃ") < 0);
	assertTrue("りー < りぃ", col.compare("りー", "りぃ") < 0);
	assertTrue("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
	
	assertTrue("ぅー < ぅぅ", col.compare("ぅー", "ぅぅ") < 0);
	assertTrue("うー < うぅ", col.compare("うー", "うぅ") < 0);
	assertTrue("くー < くぅ", col.compare("くー", "くぅ") < 0);
	assertTrue("ぐー < ぐぅ", col.compare("ぐー", "ぐぅ") < 0);
	assertTrue("すー < すぅ", col.compare("すー", "すぅ") < 0);
	assertTrue("ずー < ずぅ", col.compare("ずー", "ずぅ") < 0);
	assertTrue("っー < っぅ", col.compare("っー", "っぅ") < 0);
	assertTrue("つー < つぅ", col.compare("つー", "つぅ") < 0);
	assertTrue("づー < づぅ", col.compare("づー", "づぅ") < 0);
	assertTrue("ぬー < ぬぅ", col.compare("ぬー", "ぬぅ") < 0);
	assertTrue("ふー < ふぅ", col.compare("ふー", "ふぅ") < 0);
	assertTrue("ぶー < ぶぅ", col.compare("ぶー", "ぶぅ") < 0);
	assertTrue("ぷー < ぷぅ", col.compare("ぷー", "ぷぅ") < 0);
	assertTrue("むー < むぅ", col.compare("むー", "むぅ") < 0);
	assertTrue("ゅー < ゅぅ", col.compare("ゅー", "ゅぅ") < 0);
	assertTrue("ゆー < ゆぅ", col.compare("ゆー", "ゆぅ") < 0);
	assertTrue("るー < るぅ", col.compare("るー", "るぅ") < 0);
	assertTrue("ゔー < ゔぅ", col.compare("ゔー", "ゔぅ") < 0);
	
	assertTrue("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
	assertTrue("えー < えぇ", col.compare("えー", "えぇ") < 0);
	assertTrue("けー < けぇ", col.compare("けー", "けぇ") < 0);
	assertTrue("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
	assertTrue("げー < げぇ", col.compare("げー", "げぇ") < 0);
	assertTrue("せー < せぇ", col.compare("せー", "せぇ") < 0);
	assertTrue("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
	assertTrue("てー < てぇ", col.compare("てー", "てぇ") < 0);
	assertTrue("でー < でぇ", col.compare("でー", "でぇ") < 0);
	assertTrue("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
	assertTrue("へー < へぇ", col.compare("へー", "へぇ") < 0);
	assertTrue("べー < べぇ", col.compare("べー", "べぇ") < 0);
	assertTrue("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
	assertTrue("めー < めぇ", col.compare("めー", "めぇ") < 0);
	assertTrue("れー < れぇ", col.compare("れー", "れぇ") < 0);
	assertTrue("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
	
	assertTrue("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
	assertTrue("おー < おぉ", col.compare("おー", "おぉ") < 0);
	assertTrue("こー < こぉ", col.compare("こー", "こぉ") < 0);
	assertTrue("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
	assertTrue("そー < そぉ", col.compare("そー", "そぉ") < 0);
	assertTrue("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
	assertTrue("とー < とぉ", col.compare("とー", "とぉ") < 0);
	assertTrue("どー < どぉ", col.compare("どー", "どぉ") < 0);
	assertTrue("のー < のぉ", col.compare("のー", "のぉ") < 0);
	assertTrue("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
	assertTrue("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
	assertTrue("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
	assertTrue("もー < もぉ", col.compare("もー", "もぉ") < 0);
	assertTrue("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
	assertTrue("よー < よぉ", col.compare("よー", "よぉ") < 0);
	assertTrue("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
	assertTrue("をー < をぉ", col.compare("をー", "をぉ") < 0);
}

function testJSCollatorHiraganaLengthMarksSec_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
	assertTrue("あー = あぁ", col.compare("あー", "あぁ") === 0);
	assertTrue("かー = かぁ", col.compare("かー", "かぁ") === 0);
	assertTrue("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
	assertTrue("がー = がぁ", col.compare("がー", "がぁ") === 0);
	assertTrue("さー = さぁ", col.compare("さー", "さぁ") === 0);
	assertTrue("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
	assertTrue("たー = たぁ", col.compare("たー", "たぁ") === 0);
	assertTrue("だー = だぁ", col.compare("だー", "だぁ") === 0);
	assertTrue("なー = なぁ", col.compare("なー", "なぁ") === 0);
	assertTrue("はー = はぁ", col.compare("はー", "はぁ") === 0);
	assertTrue("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
	assertTrue("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
	assertTrue("まー = まぁ", col.compare("まー", "まぁ") === 0);
	assertTrue("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
	assertTrue("やー = やぁ", col.compare("やー", "やぁ") === 0);
	assertTrue("らー = らぁ", col.compare("らー", "らぁ") === 0);
	assertTrue("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
	assertTrue("わー = わぁ", col.compare("わー", "わぁ") === 0);
	
	assertTrue("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
	assertTrue("いー = いぃ", col.compare("いー", "いぃ") === 0);
	assertTrue("きー = きぃ", col.compare("きー", "きぃ") === 0);
	assertTrue("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
	assertTrue("しー = しぃ", col.compare("しー", "しぃ") === 0);
	assertTrue("じー = じぃ", col.compare("じー", "じぃ") === 0);
	assertTrue("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
	assertTrue("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
	assertTrue("にー = にぃ", col.compare("にー", "にぃ") === 0);
	assertTrue("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
	assertTrue("びー = びぃ", col.compare("びー", "びぃ") === 0);
	assertTrue("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
	assertTrue("みー = みぃ", col.compare("みー", "みぃ") === 0);
	assertTrue("りー = りぃ", col.compare("りー", "りぃ") === 0);
	assertTrue("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
	
	assertTrue("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
	assertTrue("うー = うぃ", col.compare("うー", "うぅ") === 0);
	assertTrue("くー = くぃ", col.compare("くー", "くぅ") === 0);
	assertTrue("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
	assertTrue("すー = すぃ", col.compare("すー", "すぅ") === 0);
	assertTrue("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
	assertTrue("っー = っぃ", col.compare("っー", "っぅ") === 0);
	assertTrue("つー = つぃ", col.compare("つー", "つぅ") === 0);
	assertTrue("づー = づぃ", col.compare("づー", "づぅ") === 0);
	assertTrue("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
	assertTrue("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
	assertTrue("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
	assertTrue("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
	assertTrue("むー = むぃ", col.compare("むー", "むぅ") === 0);
	assertTrue("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
	assertTrue("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
	assertTrue("るー = るぃ", col.compare("るー", "るぅ") === 0);
	assertTrue("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
	
	assertTrue("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
	assertTrue("えー = えぇ", col.compare("えー", "えぇ") === 0);
	assertTrue("けー = けぇ", col.compare("けー", "けぇ") === 0);
	assertTrue("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
	assertTrue("げー = げぇ", col.compare("げー", "げぇ") === 0);
	assertTrue("せー = せぇ", col.compare("せー", "せぇ") === 0);
	assertTrue("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
	assertTrue("てー = てぇ", col.compare("てー", "てぇ") === 0);
	assertTrue("でー = でぇ", col.compare("でー", "でぇ") === 0);
	assertTrue("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
	assertTrue("へー = へぇ", col.compare("へー", "へぇ") === 0);
	assertTrue("べー = べぇ", col.compare("べー", "べぇ") === 0);
	assertTrue("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
	assertTrue("めー = めぇ", col.compare("めー", "めぇ") === 0);
	assertTrue("れー = れぇ", col.compare("れー", "れぇ") === 0);
	assertTrue("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
	
	assertTrue("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
	assertTrue("おー = おぉ", col.compare("おー", "おぉ") === 0);
	assertTrue("こー = こぉ", col.compare("こー", "こぉ") === 0);
	assertTrue("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
	assertTrue("そー = そぉ", col.compare("そー", "そぉ") === 0);
	assertTrue("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
	assertTrue("とー = とぉ", col.compare("とー", "とぉ") === 0);
	assertTrue("どー = どぉ", col.compare("どー", "どぉ") === 0);
	assertTrue("のー = のぉ", col.compare("のー", "のぉ") === 0);
	assertTrue("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
	assertTrue("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
	assertTrue("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
	assertTrue("もー = もぉ", col.compare("もー", "もぉ") === 0);
	assertTrue("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
	assertTrue("よー = よぉ", col.compare("よー", "よぉ") === 0);
	assertTrue("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
	assertTrue("をー = をぉ", col.compare("をー", "をぉ") === 0);
}

function testJSCollatorHiraganaLengthMarksPri_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
	assertTrue("あー = あぁ", col.compare("あー", "あぁ") === 0);
	assertTrue("かー = かぁ", col.compare("かー", "かぁ") === 0);
	assertTrue("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
	assertTrue("がー = がぁ", col.compare("がー", "がぁ") === 0);
	assertTrue("さー = さぁ", col.compare("さー", "さぁ") === 0);
	assertTrue("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
	assertTrue("たー = たぁ", col.compare("たー", "たぁ") === 0);
	assertTrue("だー = だぁ", col.compare("だー", "だぁ") === 0);
	assertTrue("なー = なぁ", col.compare("なー", "なぁ") === 0);
	assertTrue("はー = はぁ", col.compare("はー", "はぁ") === 0);
	assertTrue("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
	assertTrue("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
	assertTrue("まー = まぁ", col.compare("まー", "まぁ") === 0);
	assertTrue("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
	assertTrue("やー = やぁ", col.compare("やー", "やぁ") === 0);
	assertTrue("らー = らぁ", col.compare("らー", "らぁ") === 0);
	assertTrue("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
	assertTrue("わー = わぁ", col.compare("わー", "わぁ") === 0);
	
	assertTrue("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
	assertTrue("いー = いぃ", col.compare("いー", "いぃ") === 0);
	assertTrue("きー = きぃ", col.compare("きー", "きぃ") === 0);
	assertTrue("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
	assertTrue("しー = しぃ", col.compare("しー", "しぃ") === 0);
	assertTrue("じー = じぃ", col.compare("じー", "じぃ") === 0);
	assertTrue("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
	assertTrue("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
	assertTrue("にー = にぃ", col.compare("にー", "にぃ") === 0);
	assertTrue("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
	assertTrue("びー = びぃ", col.compare("びー", "びぃ") === 0);
	assertTrue("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
	assertTrue("みー = みぃ", col.compare("みー", "みぃ") === 0);
	assertTrue("りー = りぃ", col.compare("りー", "りぃ") === 0);
	assertTrue("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
	
	assertTrue("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
	assertTrue("うー = うぃ", col.compare("うー", "うぅ") === 0);
	assertTrue("くー = くぃ", col.compare("くー", "くぅ") === 0);
	assertTrue("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
	assertTrue("すー = すぃ", col.compare("すー", "すぅ") === 0);
	assertTrue("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
	assertTrue("っー = っぃ", col.compare("っー", "っぅ") === 0);
	assertTrue("つー = つぃ", col.compare("つー", "つぅ") === 0);
	assertTrue("づー = づぃ", col.compare("づー", "づぅ") === 0);
	assertTrue("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
	assertTrue("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
	assertTrue("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
	assertTrue("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
	assertTrue("むー = むぃ", col.compare("むー", "むぅ") === 0);
	assertTrue("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
	assertTrue("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
	assertTrue("るー = るぃ", col.compare("るー", "るぅ") === 0);
	assertTrue("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
	
	assertTrue("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
	assertTrue("えー = えぇ", col.compare("えー", "えぇ") === 0);
	assertTrue("けー = けぇ", col.compare("けー", "けぇ") === 0);
	assertTrue("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
	assertTrue("げー = げぇ", col.compare("げー", "げぇ") === 0);
	assertTrue("せー = せぇ", col.compare("せー", "せぇ") === 0);
	assertTrue("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
	assertTrue("てー = てぇ", col.compare("てー", "てぇ") === 0);
	assertTrue("でー = でぇ", col.compare("でー", "でぇ") === 0);
	assertTrue("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
	assertTrue("へー = へぇ", col.compare("へー", "へぇ") === 0);
	assertTrue("べー = べぇ", col.compare("べー", "べぇ") === 0);
	assertTrue("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
	assertTrue("めー = めぇ", col.compare("めー", "めぇ") === 0);
	assertTrue("れー = れぇ", col.compare("れー", "れぇ") === 0);
	assertTrue("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
	
	assertTrue("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
	assertTrue("おー = おぉ", col.compare("おー", "おぉ") === 0);
	assertTrue("こー = こぉ", col.compare("こー", "こぉ") === 0);
	assertTrue("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
	assertTrue("そー = そぉ", col.compare("そー", "そぉ") === 0);
	assertTrue("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
	assertTrue("とー = とぉ", col.compare("とー", "とぉ") === 0);
	assertTrue("どー = どぉ", col.compare("どー", "どぉ") === 0);
	assertTrue("のー = のぉ", col.compare("のー", "のぉ") === 0);
	assertTrue("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
	assertTrue("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
	assertTrue("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
	assertTrue("もー = もぉ", col.compare("もー", "もぉ") === 0);
	assertTrue("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
	assertTrue("よー = よぉ", col.compare("よー", "よぉ") === 0);
	assertTrue("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
	assertTrue("をー = をぉ", col.compare("をー", "をぉ") === 0);
}

function testJSCollatorHiraganaIterationMarksQuat_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);
	assertTrue("ゔゞ < ゔう", col.compare("ゔゞ", "ゔう") < 0);
	assertTrue("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
	assertTrue("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
	assertTrue("おゝ < おお", col.compare("おゝ", "おお") < 0);
	assertTrue("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);

	assertTrue("かゝ < かか", col.compare("かゝ", "かか") < 0);
	assertTrue("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
	assertTrue("がゝ < がが", col.compare("がゝ", "がが") < 0);
	assertTrue("きゝ < きき", col.compare("きゝ", "きき") < 0);
	assertTrue("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
	assertTrue("きゞ < きき", col.compare("きゞ", "きき") < 0);
	assertTrue("ぎゞ < ぎき", col.compare("ぎゞ", "ぎき") < 0);
	assertTrue("くゝ < くく", col.compare("くゝ", "くく") < 0);
	assertTrue("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
	assertTrue("くゞ < くく", col.compare("くゞ", "くく") < 0);
	assertTrue("ぐゞ < ぐく", col.compare("ぐゞ", "ぐく") < 0);
	assertTrue("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
	assertTrue("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
	assertTrue("げゝ < げげ", col.compare("げゝ", "げげ") < 0);
	assertTrue("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
	assertTrue("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
	assertTrue("こゞ < ここ", col.compare("こゞ", "ここ") < 0);
	assertTrue("ごゞ < ごこ", col.compare("ごゞ", "ごこ") < 0);

	assertTrue("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
	assertTrue("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
	assertTrue("さゞ < ささ", col.compare("さゞ", "ささ") < 0);
	assertTrue("ざゞ < ざさ", col.compare("ざゞ", "ざさ") < 0);
	assertTrue("しゝ < しし", col.compare("しゝ", "しし") < 0);
	assertTrue("じゝ < じし", col.compare("じゝ", "じし") < 0);
	assertTrue("しゞ < しし", col.compare("しゞ", "しし") < 0);
	assertTrue("じゞ < じし", col.compare("じゞ", "じし") < 0);
	assertTrue("すゝ < すす", col.compare("すゝ", "すす") < 0);
	assertTrue("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
	assertTrue("すゞ < すす", col.compare("すゞ", "すす") < 0);
	assertTrue("ずゞ < ずす", col.compare("ずゞ", "ずす") < 0);
	assertTrue("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
	assertTrue("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
	assertTrue("せゞ < せせ", col.compare("せゞ", "せせ") < 0);
	assertTrue("ぜゞ < ぜせ", col.compare("ぜゞ", "ぜせ") < 0);
	assertTrue("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
	assertTrue("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
	assertTrue("そゞ < そそ", col.compare("そゞ", "そそ") < 0);
	assertTrue("ぞゞ < ぞそ", col.compare("ぞゞ", "ぞそ") < 0);

	assertTrue("たゝ < たた", col.compare("たゝ", "たた") < 0);
	assertTrue("だゝ < だた", col.compare("だゝ", "だた") < 0);
	assertTrue("たゞ < たた", col.compare("たゞ", "たた") < 0);
	assertTrue("だゞ < だた", col.compare("だゞ", "だた") < 0);
	assertTrue("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
	assertTrue("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
	assertTrue("ちゞ < ちち", col.compare("ちゞ", "ちち") < 0);
	assertTrue("ぢゞ < ぢち", col.compare("ぢゞ", "ぢち") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
	assertTrue("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("づゞ < づつ", col.compare("づゞ", "づつ") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゞ < っつ", col.compare("っゞ", "っつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("てゝ < てて", col.compare("てゝ", "てて") < 0);
	assertTrue("でゝ < でて", col.compare("でゝ", "でて") < 0);
	assertTrue("てゞ < てて", col.compare("てゞ", "てて") < 0);
	assertTrue("でゞ < でて", col.compare("でゞ", "でて") < 0);
	assertTrue("とゝ < とと", col.compare("とゝ", "とと") < 0);
	assertTrue("どゝ < どと", col.compare("どゝ", "どと") < 0);
	assertTrue("とゞ < とと", col.compare("とゞ", "とと") < 0);
	assertTrue("どゞ < どと", col.compare("どゞ", "どと") < 0);

	assertTrue("なゝ < なな", col.compare("なゝ", "なな") < 0);
	assertTrue("にゝ < にに", col.compare("にゝ", "にに") < 0);
	assertTrue("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
	assertTrue("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
	assertTrue("のゝ < のの", col.compare("のゝ", "のの") < 0);

	assertTrue("はゝ < はは", col.compare("はゝ", "はは") < 0);
	assertTrue("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
	assertTrue("はゞ < はは", col.compare("はゞ", "はは") < 0);
	assertTrue("ばゞ < ばは", col.compare("ばゞ", "ばは") < 0);
	assertTrue("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ぱゞ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
	assertTrue("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
	assertTrue("ひゞ < ひひ", col.compare("ひゞ", "ひひ") < 0);
	assertTrue("びゞ < びひ", col.compare("びゞ", "びひ") < 0);
	assertTrue("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ぴゞ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
	assertTrue("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
	assertTrue("ふゞ < ふふ", col.compare("ふゞ", "ふふ") < 0);
	assertTrue("ぶゞ < ぶふ", col.compare("ぶゞ", "ぶふ") < 0);
	assertTrue("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("ぷゞ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
	assertTrue("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
	assertTrue("へゞ < へへ", col.compare("へゞ", "へへ") < 0);
	assertTrue("べゞ < べへ", col.compare("べゞ", "べへ") < 0);
	assertTrue("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ぺゞ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
	assertTrue("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
	assertTrue("ほゞ < ほほ", col.compare("ほゞ", "ほほ") < 0);
	assertTrue("ぼゞ < ぼほ", col.compare("ぼゞ", "ぼほ") < 0);
	assertTrue("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
	assertTrue("ぽゞ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);

	assertTrue("まゝ < まま", col.compare("まゝ", "まま") < 0);
	assertTrue("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
	assertTrue("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
	assertTrue("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
	assertTrue("もゝ < もも", col.compare("もゝ", "もも") < 0);

	assertTrue("やゝ < やや", col.compare("やゝ", "やや") < 0);
	assertTrue("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
	assertTrue("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
	assertTrue("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
	assertTrue("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
	assertTrue("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);

	assertTrue("らゝ < らら", col.compare("らゝ", "らら") < 0);
	assertTrue("りゝ < りり", col.compare("りゝ", "りり") < 0);
	assertTrue("るゝ < るる", col.compare("るゝ", "るる") < 0);
	assertTrue("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
	assertTrue("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);

	assertTrue("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
	assertTrue("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
	assertTrue("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
	assertTrue("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
	assertTrue("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
	assertTrue("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
	assertTrue("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
	assertTrue("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
	assertTrue("をゝ < をを", col.compare("をゝ", "をを") < 0);
	assertTrue("をゞ < をを", col.compare("をゞ", "をを") < 0);

	assertTrue("んゝ < んん", col.compare("んゝ", "んん") < 0);
}

function testJSCollatorHiraganaIterationMarksTer_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);
	assertTrue("ゔゞ < ゔう", col.compare("ゔゞ", "ゔう") < 0);
	assertTrue("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
	assertTrue("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
	assertTrue("おゝ < おお", col.compare("おゝ", "おお") < 0);
	assertTrue("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);

	assertTrue("かゝ < かか", col.compare("かゝ", "かか") < 0);
	assertTrue("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
	assertTrue("がゝ < がが", col.compare("がゝ", "がが") < 0);
	assertTrue("きゝ < きき", col.compare("きゝ", "きき") < 0);
	assertTrue("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
	assertTrue("きゞ < きき", col.compare("きゞ", "きき") < 0);
	assertTrue("ぎゞ < ぎき", col.compare("ぎゞ", "ぎき") < 0);
	assertTrue("くゝ < くく", col.compare("くゝ", "くく") < 0);
	assertTrue("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
	assertTrue("くゞ < くく", col.compare("くゞ", "くく") < 0);
	assertTrue("ぐゞ < ぐく", col.compare("ぐゞ", "ぐく") < 0);
	assertTrue("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
	assertTrue("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
	assertTrue("げゝ < げげ", col.compare("げゝ", "げげ") < 0);
	assertTrue("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
	assertTrue("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
	assertTrue("こゞ < ここ", col.compare("こゞ", "ここ") < 0);
	assertTrue("ごゞ < ごこ", col.compare("ごゞ", "ごこ") < 0);

	assertTrue("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
	assertTrue("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
	assertTrue("さゞ < ささ", col.compare("さゞ", "ささ") < 0);
	assertTrue("ざゞ < ざさ", col.compare("ざゞ", "ざさ") < 0);
	assertTrue("しゝ < しし", col.compare("しゝ", "しし") < 0);
	assertTrue("じゝ < じし", col.compare("じゝ", "じし") < 0);
	assertTrue("しゞ < しし", col.compare("しゞ", "しし") < 0);
	assertTrue("じゞ < じし", col.compare("じゞ", "じし") < 0);
	assertTrue("すゝ < すす", col.compare("すゝ", "すす") < 0);
	assertTrue("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
	assertTrue("すゞ < すす", col.compare("すゞ", "すす") < 0);
	assertTrue("ずゞ < ずす", col.compare("ずゞ", "ずす") < 0);
	assertTrue("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
	assertTrue("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
	assertTrue("せゞ < せせ", col.compare("せゞ", "せせ") < 0);
	assertTrue("ぜゞ < ぜせ", col.compare("ぜゞ", "ぜせ") < 0);
	assertTrue("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
	assertTrue("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
	assertTrue("そゞ < そそ", col.compare("そゞ", "そそ") < 0);
	assertTrue("ぞゞ < ぞそ", col.compare("ぞゞ", "ぞそ") < 0);

	assertTrue("たゝ < たた", col.compare("たゝ", "たた") < 0);
	assertTrue("だゝ < だた", col.compare("だゝ", "だた") < 0);
	assertTrue("たゞ < たた", col.compare("たゞ", "たた") < 0);
	assertTrue("だゞ < だた", col.compare("だゞ", "だた") < 0);
	assertTrue("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
	assertTrue("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
	assertTrue("ちゞ < ちち", col.compare("ちゞ", "ちち") < 0);
	assertTrue("ぢゞ < ぢち", col.compare("ぢゞ", "ぢち") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
	assertTrue("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("づゞ < づつ", col.compare("づゞ", "づつ") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゞ < っつ", col.compare("っゞ", "っつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("てゝ < てて", col.compare("てゝ", "てて") < 0);
	assertTrue("でゝ < でて", col.compare("でゝ", "でて") < 0);
	assertTrue("てゞ < てて", col.compare("てゞ", "てて") < 0);
	assertTrue("でゞ < でて", col.compare("でゞ", "でて") < 0);
	assertTrue("とゝ < とと", col.compare("とゝ", "とと") < 0);
	assertTrue("どゝ < どと", col.compare("どゝ", "どと") < 0);
	assertTrue("とゞ < とと", col.compare("とゞ", "とと") < 0);
	assertTrue("どゞ < どと", col.compare("どゞ", "どと") < 0);

	assertTrue("なゝ < なな", col.compare("なゝ", "なな") < 0);
	assertTrue("にゝ < にに", col.compare("にゝ", "にに") < 0);
	assertTrue("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
	assertTrue("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
	assertTrue("のゝ < のの", col.compare("のゝ", "のの") < 0);

	assertTrue("はゝ < はは", col.compare("はゝ", "はは") < 0);
	assertTrue("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
	assertTrue("はゞ < はは", col.compare("はゞ", "はは") < 0);
	assertTrue("ばゞ < ばは", col.compare("ばゞ", "ばは") < 0);
	assertTrue("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ぱゞ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
	assertTrue("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
	assertTrue("ひゞ < ひひ", col.compare("ひゞ", "ひひ") < 0);
	assertTrue("びゞ < びひ", col.compare("びゞ", "びひ") < 0);
	assertTrue("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ぴゞ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
	assertTrue("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
	assertTrue("ふゞ < ふふ", col.compare("ふゞ", "ふふ") < 0);
	assertTrue("ぶゞ < ぶふ", col.compare("ぶゞ", "ぶふ") < 0);
	assertTrue("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("ぷゞ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
	assertTrue("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
	assertTrue("へゞ < へへ", col.compare("へゞ", "へへ") < 0);
	assertTrue("べゞ < べへ", col.compare("べゞ", "べへ") < 0);
	assertTrue("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ぺゞ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
	assertTrue("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
	assertTrue("ほゞ < ほほ", col.compare("ほゞ", "ほほ") < 0);
	assertTrue("ぼゞ < ぼほ", col.compare("ぼゞ", "ぼほ") < 0);
	assertTrue("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
	assertTrue("ぽゞ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);

	assertTrue("まゝ < まま", col.compare("まゝ", "まま") < 0);
	assertTrue("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
	assertTrue("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
	assertTrue("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
	assertTrue("もゝ < もも", col.compare("もゝ", "もも") < 0);

	assertTrue("やゝ < やや", col.compare("やゝ", "やや") < 0);
	assertTrue("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
	assertTrue("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
	assertTrue("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
	assertTrue("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
	assertTrue("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);

	assertTrue("らゝ < らら", col.compare("らゝ", "らら") < 0);
	assertTrue("りゝ < りり", col.compare("りゝ", "りり") < 0);
	assertTrue("るゝ < るる", col.compare("るゝ", "るる") < 0);
	assertTrue("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
	assertTrue("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);

	assertTrue("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
	assertTrue("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
	assertTrue("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
	assertTrue("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
	assertTrue("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
	assertTrue("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
	assertTrue("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
	assertTrue("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
	assertTrue("をゝ < をを", col.compare("をゝ", "をを") < 0);
	assertTrue("をゞ < をを", col.compare("をゞ", "をを") < 0);

	assertTrue("んゝ < んん", col.compare("んゝ", "んん") < 0);
}

function testJSCollatorHiraganaIterationMarksSec_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
	assertTrue("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
	assertTrue("いゝ = いい", col.compare("いゝ", "いい") === 0);
	assertTrue("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
	assertTrue("うゝ = うう", col.compare("うゝ", "うう") === 0);
	assertTrue("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
	assertTrue("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
	assertTrue("うゞ = うう", col.compare("うゞ", "うう") === 0);
	assertTrue("ぅゞ = ぅう", col.compare("ぅゞ", "ぅう") === 0);
	assertTrue("ゔゞ = ゔう", col.compare("ゔゞ", "ゔう") === 0);
	assertTrue("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
	assertTrue("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
	assertTrue("おゝ = おお", col.compare("おゝ", "おお") === 0);
	assertTrue("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);

	assertTrue("かゝ = かか", col.compare("かゝ", "かか") === 0);
	assertTrue("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
	assertTrue("がゝ = がか", col.compare("がゝ", "がか") === 0);
	assertTrue("きゝ = きき", col.compare("きゝ", "きき") === 0);
	assertTrue("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
	assertTrue("きゞ = きき", col.compare("きゞ", "きき") === 0);
	assertTrue("ぎゞ = ぎき", col.compare("ぎゞ", "ぎき") === 0);
	assertTrue("くゝ = くく", col.compare("くゝ", "くく") === 0);
	assertTrue("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
	assertTrue("くゞ = くく", col.compare("くゞ", "くく") === 0);
	assertTrue("ぐゞ = ぐく", col.compare("ぐゞ", "ぐく") === 0);
	assertTrue("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
	assertTrue("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
	assertTrue("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
	assertTrue("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
	assertTrue("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
	assertTrue("こゞ = ここ", col.compare("こゞ", "ここ") === 0);
	assertTrue("ごゞ = ごこ", col.compare("ごゞ", "ごこ") === 0);

	assertTrue("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
	assertTrue("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
	assertTrue("さゞ = ささ", col.compare("さゞ", "ささ") === 0);
	assertTrue("ざゞ = ざさ", col.compare("ざゞ", "ざさ") === 0);
	assertTrue("しゝ = しし", col.compare("しゝ", "しし") === 0);
	assertTrue("じゝ = じし", col.compare("じゝ", "じし") === 0);
	assertTrue("しゞ = しし", col.compare("しゞ", "しし") === 0);
	assertTrue("じゞ = じし", col.compare("じゞ", "じし") === 0);
	assertTrue("すゝ = すす", col.compare("すゝ", "すす") === 0);
	assertTrue("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
	assertTrue("すゞ = すす", col.compare("すゞ", "すす") === 0);
	assertTrue("ずゞ = ずす", col.compare("ずゞ", "ずす") === 0);
	assertTrue("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
	assertTrue("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
	assertTrue("せゞ = せせ", col.compare("せゞ", "せせ") === 0);
	assertTrue("ぜゞ = ぜせ", col.compare("ぜゞ", "ぜせ") === 0);
	assertTrue("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
	assertTrue("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
	assertTrue("そゞ = そそ", col.compare("そゞ", "そそ") === 0);
	assertTrue("ぞゞ = ぞそ", col.compare("ぞゞ", "ぞそ") === 0);

	assertTrue("たゝ = たた", col.compare("たゝ", "たた") === 0);
	assertTrue("だゝ = だた", col.compare("だゝ", "だた") === 0);
	assertTrue("たゞ = たた", col.compare("たゞ", "たた") === 0);
	assertTrue("だゞ = だた", col.compare("だゞ", "だた") === 0);
	assertTrue("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
	assertTrue("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
	assertTrue("ちゞ = ちち", col.compare("ちゞ", "ちち") === 0);
	assertTrue("ぢゞ = ぢち", col.compare("ぢゞ", "ぢち") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
	assertTrue("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("づゞ = づつ", col.compare("づゞ", "づつ") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゞ = っつ", col.compare("っゞ", "っつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("てゝ = てて", col.compare("てゝ", "てて") === 0);
	assertTrue("でゝ = でて", col.compare("でゝ", "でて") === 0);
	assertTrue("てゞ = てて", col.compare("てゞ", "てて") === 0);
	assertTrue("でゞ = でて", col.compare("でゞ", "でて") === 0);
	assertTrue("とゝ = とと", col.compare("とゝ", "とと") === 0);
	assertTrue("どゝ = どと", col.compare("どゝ", "どと") === 0);
	assertTrue("とゞ = とと", col.compare("とゞ", "とと") === 0);
	assertTrue("どゞ = どと", col.compare("どゞ", "どと") === 0);

	assertTrue("なゝ = なな", col.compare("なゝ", "なな") === 0);
	assertTrue("にゝ = にに", col.compare("にゝ", "にに") === 0);
	assertTrue("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
	assertTrue("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
	assertTrue("のゝ = のの", col.compare("のゝ", "のの") === 0);

	assertTrue("はゝ = はは", col.compare("はゝ", "はは") === 0);
	assertTrue("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
	assertTrue("はゞ = はは", col.compare("はゞ", "はは") === 0);
	assertTrue("ばゞ = ばは", col.compare("ばゞ", "ばは") === 0);
	assertTrue("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ぱゞ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
	assertTrue("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
	assertTrue("ひゞ = ひひ", col.compare("ひゞ", "ひひ") === 0);
	assertTrue("びゞ = びひ", col.compare("びゞ", "びひ") === 0);
	assertTrue("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ぴゞ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
	assertTrue("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
	assertTrue("ふゞ = ふふ", col.compare("ふゞ", "ふふ") === 0);
	assertTrue("ぶゞ = ぶふ", col.compare("ぶゞ", "ぶふ") === 0);
	assertTrue("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("ぷゞ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
	assertTrue("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
	assertTrue("へゞ = へへ", col.compare("へゞ", "へへ") === 0);
	assertTrue("べゞ = べへ", col.compare("べゞ", "べへ") === 0);
	assertTrue("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ぺゞ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
	assertTrue("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
	assertTrue("ほゞ = ほほ", col.compare("ほゞ", "ほほ") === 0);
	assertTrue("ぼゞ = ぼほ", col.compare("ぼゞ", "ぼほ") === 0);
	assertTrue("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
	assertTrue("ぽゞ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);

	assertTrue("まゝ = まま", col.compare("まゝ", "まま") === 0);
	assertTrue("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
	assertTrue("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
	assertTrue("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
	assertTrue("もゝ = もも", col.compare("もゝ", "もも") === 0);

	assertTrue("やゝ = やや", col.compare("やゝ", "やや") === 0);
	assertTrue("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
	assertTrue("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
	assertTrue("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
	assertTrue("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
	assertTrue("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);

	assertTrue("らゝ = らら", col.compare("らゝ", "らら") === 0);
	assertTrue("りゝ = りり", col.compare("りゝ", "りり") === 0);
	assertTrue("るゝ = るる", col.compare("るゝ", "るる") === 0);
	assertTrue("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
	assertTrue("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);

	assertTrue("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
	assertTrue("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
	assertTrue("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
	assertTrue("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
	assertTrue("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
	assertTrue("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
	assertTrue("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
	assertTrue("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
	assertTrue("をゝ = をを", col.compare("をゝ", "をを") === 0);
	assertTrue("をゞ = をを", col.compare("をゞ", "をを") === 0);

	assertTrue("んゝ = んん", col.compare("んゝ", "んん") === 0);
}

function testJSCollatorHiraganaIterationMarksPri_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
	assertTrue("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
	assertTrue("いゝ = いい", col.compare("いゝ", "いい") === 0);
	assertTrue("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
	assertTrue("うゝ = うう", col.compare("うゝ", "うう") === 0);
	assertTrue("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
	assertTrue("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
	assertTrue("うゞ = うう", col.compare("うゞ", "うう") === 0);
	assertTrue("ぅゞ = ぅう", col.compare("ぅゞ", "ぅう") === 0);
	assertTrue("ゔゞ = ゔう", col.compare("ゔゞ", "ゔう") === 0);
	assertTrue("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
	assertTrue("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
	assertTrue("おゝ = おお", col.compare("おゝ", "おお") === 0);
	assertTrue("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);

	assertTrue("かゝ = かか", col.compare("かゝ", "かか") === 0);
	assertTrue("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
	assertTrue("がゝ = がか", col.compare("がゝ", "がか") === 0);
	assertTrue("きゝ = きき", col.compare("きゝ", "きき") === 0);
	assertTrue("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
	assertTrue("きゞ = きき", col.compare("きゞ", "きき") === 0);
	assertTrue("ぎゞ = ぎき", col.compare("ぎゞ", "ぎき") === 0);
	assertTrue("くゝ = くく", col.compare("くゝ", "くく") === 0);
	assertTrue("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
	assertTrue("くゞ = くく", col.compare("くゞ", "くく") === 0);
	assertTrue("ぐゞ = ぐく", col.compare("ぐゞ", "ぐく") === 0);
	assertTrue("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
	assertTrue("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
	assertTrue("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
	assertTrue("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
	assertTrue("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
	assertTrue("こゞ = ここ", col.compare("こゞ", "ここ") === 0);
	assertTrue("ごゞ = ごこ", col.compare("ごゞ", "ごこ") === 0);

	assertTrue("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
	assertTrue("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
	assertTrue("さゞ = ささ", col.compare("さゞ", "ささ") === 0);
	assertTrue("ざゞ = ざさ", col.compare("ざゞ", "ざさ") === 0);
	assertTrue("しゝ = しし", col.compare("しゝ", "しし") === 0);
	assertTrue("じゝ = じし", col.compare("じゝ", "じし") === 0);
	assertTrue("しゞ = しし", col.compare("しゞ", "しし") === 0);
	assertTrue("じゞ = じし", col.compare("じゞ", "じし") === 0);
	assertTrue("すゝ = すす", col.compare("すゝ", "すす") === 0);
	assertTrue("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
	assertTrue("すゞ = すす", col.compare("すゞ", "すす") === 0);
	assertTrue("ずゞ = ずす", col.compare("ずゞ", "ずす") === 0);
	assertTrue("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
	assertTrue("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
	assertTrue("せゞ = せせ", col.compare("せゞ", "せせ") === 0);
	assertTrue("ぜゞ = ぜせ", col.compare("ぜゞ", "ぜせ") === 0);
	assertTrue("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
	assertTrue("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
	assertTrue("そゞ = そそ", col.compare("そゞ", "そそ") === 0);
	assertTrue("ぞゞ = ぞそ", col.compare("ぞゞ", "ぞそ") === 0);

	assertTrue("たゝ = たた", col.compare("たゝ", "たた") === 0);
	assertTrue("だゝ = だた", col.compare("だゝ", "だた") === 0);
	assertTrue("たゞ = たた", col.compare("たゞ", "たた") === 0);
	assertTrue("だゞ = だた", col.compare("だゞ", "だた") === 0);
	assertTrue("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
	assertTrue("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
	assertTrue("ちゞ = ちち", col.compare("ちゞ", "ちち") === 0);
	assertTrue("ぢゞ = ぢち", col.compare("ぢゞ", "ぢち") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
	assertTrue("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("づゞ = づつ", col.compare("づゞ", "づつ") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゞ = っつ", col.compare("っゞ", "っつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("てゝ = てて", col.compare("てゝ", "てて") === 0);
	assertTrue("でゝ = でて", col.compare("でゝ", "でて") === 0);
	assertTrue("てゞ = てて", col.compare("てゞ", "てて") === 0);
	assertTrue("でゞ = でて", col.compare("でゞ", "でて") === 0);
	assertTrue("とゝ = とと", col.compare("とゝ", "とと") === 0);
	assertTrue("どゝ = どと", col.compare("どゝ", "どと") === 0);
	assertTrue("とゞ = とと", col.compare("とゞ", "とと") === 0);
	assertTrue("どゞ = どと", col.compare("どゞ", "どと") === 0);

	assertTrue("なゝ = なな", col.compare("なゝ", "なな") === 0);
	assertTrue("にゝ = にに", col.compare("にゝ", "にに") === 0);
	assertTrue("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
	assertTrue("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
	assertTrue("のゝ = のの", col.compare("のゝ", "のの") === 0);

	assertTrue("はゝ = はは", col.compare("はゝ", "はは") === 0);
	assertTrue("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
	assertTrue("はゞ = はは", col.compare("はゞ", "はは") === 0);
	assertTrue("ばゞ = ばは", col.compare("ばゞ", "ばは") === 0);
	assertTrue("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ぱゞ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
	assertTrue("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
	assertTrue("ひゞ = ひひ", col.compare("ひゞ", "ひひ") === 0);
	assertTrue("びゞ = びひ", col.compare("びゞ", "びひ") === 0);
	assertTrue("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ぴゞ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
	assertTrue("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
	assertTrue("ふゞ = ふふ", col.compare("ふゞ", "ふふ") === 0);
	assertTrue("ぶゞ = ぶふ", col.compare("ぶゞ", "ぶふ") === 0);
	assertTrue("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("ぷゞ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
	assertTrue("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
	assertTrue("へゞ = へへ", col.compare("へゞ", "へへ") === 0);
	assertTrue("べゞ = べへ", col.compare("べゞ", "べへ") === 0);
	assertTrue("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ぺゞ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
	assertTrue("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
	assertTrue("ほゞ = ほほ", col.compare("ほゞ", "ほほ") === 0);
	assertTrue("ぼゞ = ぼほ", col.compare("ぼゞ", "ぼほ") === 0);
	assertTrue("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
	assertTrue("ぽゞ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);

	assertTrue("まゝ = まま", col.compare("まゝ", "まま") === 0);
	assertTrue("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
	assertTrue("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
	assertTrue("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
	assertTrue("もゝ = もも", col.compare("もゝ", "もも") === 0);

	assertTrue("やゝ = やや", col.compare("やゝ", "やや") === 0);
	assertTrue("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
	assertTrue("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
	assertTrue("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
	assertTrue("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
	assertTrue("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);

	assertTrue("らゝ = らら", col.compare("らゝ", "らら") === 0);
	assertTrue("りゝ = りり", col.compare("りゝ", "りり") === 0);
	assertTrue("るゝ = るる", col.compare("るゝ", "るる") === 0);
	assertTrue("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
	assertTrue("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);

	assertTrue("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
	assertTrue("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
	assertTrue("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
	assertTrue("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
	assertTrue("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
	assertTrue("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
	assertTrue("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
	assertTrue("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
	assertTrue("をゝ = をを", col.compare("をゝ", "をを") === 0);
	assertTrue("をゞ = をを", col.compare("をゞ", "をを") === 0);

	assertTrue("んゝ = んん", col.compare("んゝ", "んん") === 0);
}

function testJSCollatorKatakanaQuat_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	assertTrue("ガ < ガ", col.compare("ガ", "ガ") < 0);
	assertTrue("ガ < キ", col.compare("ガ", "キ") < 0);
	assertTrue("キ < ギ", col.compare("キ", "ギ") < 0);
	assertTrue("ギ < ギ", col.compare("ギ", "ギ") < 0);
	assertTrue("ギ < ク", col.compare("ギ", "ク") < 0);
	assertTrue("ク < グ", col.compare("ク", "グ") < 0);
	assertTrue("グ < グ", col.compare("グ", "グ") < 0);
	assertTrue("グ < ケ", col.compare("グ", "ケ") < 0);
	assertTrue("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
	assertTrue("ゲ < ゲ", col.compare("ゲ", "ゲ") < 0);
	assertTrue("ゲ < コ", col.compare("ゲ", "コ") < 0);
	assertTrue("コ < ゴ", col.compare("コ", "ゴ") < 0);
	assertTrue("ゴ < ゴ", col.compare("ゴ", "ゴ") < 0);
	assertTrue("ゴ < サ", col.compare("ゴ", "サ") < 0);
	assertTrue("サ < ザ", col.compare("サ", "ザ") < 0);
	assertTrue("ザ < ザ", col.compare("ザ", "ザ") < 0);
	assertTrue("ザ < シ", col.compare("ザ", "シ") < 0);
	assertTrue("シ < ジ", col.compare("シ", "ジ") < 0);
	assertTrue("ジ < ジ", col.compare("ジ", "ジ") < 0);
	assertTrue("ジ < ス", col.compare("ジ", "ス") < 0);
	assertTrue("ス < ズ", col.compare("ス", "ズ") < 0);
	assertTrue("ズ < ズ", col.compare("ズ", "ズ") < 0);
	assertTrue("ズ < セ", col.compare("ズ", "セ") < 0);
	assertTrue("セ < ゼ", col.compare("セ", "ゼ") < 0);
	assertTrue("ゼ < ゼ", col.compare("ゼ", "ゼ") < 0);
	assertTrue("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
	assertTrue("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
	assertTrue("ゾ < ゾ", col.compare("ゾ", "ゾ") < 0);
	assertTrue("ゾ < タ", col.compare("ゾ", "タ") < 0);
	assertTrue("タ < ダ", col.compare("タ", "ダ") < 0);
	assertTrue("ダ < ダ", col.compare("ダ", "ダ") < 0);
	assertTrue("ダ < チ", col.compare("ダ", "チ") < 0);
	assertTrue("チ < ヂ", col.compare("チ", "ヂ") < 0);
	assertTrue("ヂ < ヂ", col.compare("ヂ", "ヂ") < 0);
	assertTrue("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
	assertTrue("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
	assertTrue("ヅ < ヅ", col.compare("ヅ", "ヅ") < 0);
	assertTrue("ヅ < テ", col.compare("ヅ", "テ") < 0);
	assertTrue("テ < デ", col.compare("テ", "デ") < 0);
	assertTrue("デ < デ", col.compare("デ", "デ") < 0);
	assertTrue("デ < ト", col.compare("デ", "ト") < 0);
	assertTrue("ト < ド", col.compare("ト", "ド") < 0);
	assertTrue("ド < ド", col.compare("ド", "ド") < 0);
	assertTrue("ド < ナ", col.compare("ド", "ナ") < 0);
	assertTrue("ナ < ニ", col.compare("ナ", "ニ") < 0);
	assertTrue("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
	assertTrue("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
	assertTrue("ネ < ノ", col.compare("ネ", "ノ") < 0);
	assertTrue("ノ < ハ", col.compare("ノ", "ハ") < 0);
	assertTrue("ハ < バ", col.compare("ハ", "バ") < 0);
	assertTrue("バ < バ", col.compare("バ", "バ") < 0);
	assertTrue("バ < パ", col.compare("バ", "パ") < 0);
	assertTrue("パ < パ", col.compare("パ", "パ") < 0);
	assertTrue("パ < ヒ", col.compare("パ", "ヒ") < 0);
	assertTrue("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
	assertTrue("ビ < ビ", col.compare("ビ", "ビ") < 0);
	assertTrue("ビ < ピ", col.compare("ビ", "ピ") < 0);
	assertTrue("ピ < ピ", col.compare("ピ", "ピ") < 0);
	assertTrue("ピ < フ", col.compare("ピ", "フ") < 0);
	assertTrue("フ < ブ", col.compare("フ", "ブ") < 0);
	assertTrue("ブ < ブ", col.compare("ブ", "ブ") < 0);
	assertTrue("ブ < プ", col.compare("ブ", "プ") < 0);
	assertTrue("プ < プ", col.compare("プ", "プ") < 0);
	assertTrue("プ < ヘ", col.compare("プ", "ヘ") < 0);
	assertTrue("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
	assertTrue("ベ < ベ", col.compare("ベ", "ベ") < 0);
	assertTrue("ベ < ペ", col.compare("ベ", "ペ") < 0);
	assertTrue("ペ < ペ", col.compare("ペ", "ペ") < 0);
	assertTrue("ペ < ホ", col.compare("ペ", "ホ") < 0);
	assertTrue("ホ < ボ", col.compare("ホ", "ボ") < 0);
	assertTrue("ボ < ボ", col.compare("ボ", "ボ") < 0);
	assertTrue("ボ < ポ", col.compare("ボ", "ポ") < 0);
	assertTrue("ポ < ポ", col.compare("ポ", "ポ") < 0);
	assertTrue("ポ < マ", col.compare("ポ", "マ") < 0);
	assertTrue("マ < ミ", col.compare("マ", "ミ") < 0);
	assertTrue("ミ < ム", col.compare("ミ", "ム") < 0);
	assertTrue("ム < メ", col.compare("ム", "メ") < 0);
	assertTrue("メ < モ", col.compare("メ", "モ") < 0);
	assertTrue("モ < ヤ", col.compare("モ", "ヤ") < 0);
	assertTrue("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
	assertTrue("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
	assertTrue("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
	assertTrue("ラ < リ", col.compare("ラ", "リ") < 0);
	assertTrue("リ < ル", col.compare("リ", "ル") < 0);
	assertTrue("ル < レ", col.compare("ル", "レ") < 0);
	assertTrue("レ < ロ", col.compare("レ", "ロ") < 0);
	assertTrue("ロ < ワ", col.compare("ロ", "ワ") < 0);
	assertTrue("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
	assertTrue("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
	assertTrue("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
	assertTrue("ヲ < ン", col.compare("ヲ", "ン") < 0);
}


/*
function testJSCollatorQuatSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorTerSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorSecSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorPriSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testCollatorCase_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 	    "ΐ", 
	    "ί̈", 
 	    "Α", 
	    "ξ", 
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
	    "ϊ", 
	    "ά", 
	    "ω", 
	    "ώ", 
	    "α", 
	    "Σ", 
	    "ϊ", 
	    "Δ", 
	    "ά", 
	    "ώ",
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    var expected = [
	    "Α", 
	    "α", 
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ"
	];

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
	    "ΐ", 
	    "ας",
	    "ί̈", 
 	    "Α", 
	    "ξ", 
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
	    "αδ",
	    "ϊ", 
	    "ά", 
	    "ω", 
	    "ώ", 
	    "α", 
	    "Σ", 
	    "ϊ", 
	    "Δ", 
	    "ά", 
	    "ώ",
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    var expected = [
	    "Α", 
	    "α",
	    "αδ",
	    "ας",
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ"
    ];

    assertArrayEquals(expected, input);
}

function testCollatorIgnoreStressMarks_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});
    assertNotUndefined(col);

    var comp = col.getComparator();
    
    // ignore stress marks
    assertEquals(0, comp("παϊδάκια", "παιδάκια"));
    assertEquals(0, comp("Αθηνά", "Αθήνα"));
}

function testJSCollatorQuatLatin_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
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

function testCollatorPrimaryMixed_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
 	    "ΐ", 
	    "ας",
	    "Σ", 
	    "ϊ", 
	    "Δ", 
        "orange",
	    "ί̈", 
        "peach",
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
        "apple",
	    "αδ",
	    "ϊ", 
	    "ά", 
	    "ω", 
        "raspberry",
 	    "Α", 
	    "ξ", 
	    "ώ", 
	    "α", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ά", 
	    "ώ",
        "banana",
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    // Latin letters sort after the Cyrillic ones
    
    var expected = [
	    "Α", 
	    "α",
	    "αδ",
	    "ας",
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ",
        "apple",
        "banana",
        "orange",
        "peach",
        "raspberry"
	];

    assertArrayEquals(expected, input);
}
*/