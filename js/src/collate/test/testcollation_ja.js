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

/*
function testJSCollatorHiraganaSec_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
}

function testJSCollatorHiraganaPri_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
}

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