/*
 * testcollation_ja.js - test the Collator object in Japanese
 * 
 * Copyright © 2015,2017, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(Collator) === "undefined") {
    var Collator = require("../../../lib/Collator.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcollation_ja = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatKanji_ja: function(test) {
        test.expect(37);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // kanji are all primary differences from each other
    
        test.ok(typeof(col) !== "undefined");
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        test.ok("頴 < 円", col.compare("頴", "円") < 0);
        test.ok("円 < 凹", col.compare("円", "凹") < 0);
        test.ok("凹 < 臆", col.compare("凹", "臆") < 0);
        test.ok("臆 < 寡", col.compare("臆", "寡") < 0);
        test.ok("寡 < 火", col.compare("寡", "火") < 0);
        test.ok("火 < 茄", col.compare("火", "茄") < 0);
        test.ok("茄 < 荷", col.compare("茄", "荷") < 0);
        test.ok("荷 < 外", col.compare("荷", "外") < 0);
        test.ok("外 < 竃", col.compare("外", "竃") < 0);
        test.ok("竃 < 凶", col.compare("竃", "凶") < 0);
        test.ok("凶 < 形", col.compare("凶", "形") < 0);
        test.ok("形 < 戸", col.compare("形", "戸") < 0);
        test.ok("戸 < 語", col.compare("戸", "語") < 0);
        test.ok("語 < 三", col.compare("語", "三") < 0);
        test.ok("三 < 女", col.compare("三", "女") < 0);
        test.ok("女 < 小", col.compare("女", "小") < 0);
        test.ok("小 < 上", col.compare("小", "上") < 0);
        test.ok("上 < 人", col.compare("上", "人") < 0);
        test.ok("人 < 大", col.compare("人", "大") < 0);
        test.ok("大 < 辻", col.compare("大", "辻") < 0);
        test.ok("辻 < 匹", col.compare("辻", "匹") < 0);
        test.ok("匹 < 夕", col.compare("匹", "夕") < 0);
        test.ok("夕 < 六", col.compare("夕", "六") < 0);
        test.ok("六 < 孑", col.compare("六", "孑") < 0);
        test.ok("孑 < 彳", col.compare("孑", "彳") < 0);
        test.ok("彳 < 杲", col.compare("彳", "杲") < 0);
        test.ok("杲 < 熾", col.compare("杲", "熾") < 0);
        test.ok("熾 < 疸", col.compare("熾", "疸") < 0);
        test.ok("疸 < 穽", col.compare("疸", "穽") < 0);
        test.ok("穽 < 詁", col.compare("穽", "詁") < 0);
        test.ok("詁 < 逎", col.compare("詁", "逎") < 0);
        test.ok("逎 < 鶩", col.compare("逎", "鶩") < 0);
        test.ok("鶩 < 熙", col.compare("鶩", "熙") < 0);
        test.done();
    },
    
    testJSCollatorTerKanji_ja: function(test) {
        test.expect(37);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // kanji are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        test.ok("頴 < 円", col.compare("頴", "円") < 0);
        test.ok("円 < 凹", col.compare("円", "凹") < 0);
        test.ok("凹 < 臆", col.compare("凹", "臆") < 0);
        test.ok("臆 < 寡", col.compare("臆", "寡") < 0);
        test.ok("寡 < 火", col.compare("寡", "火") < 0);
        test.ok("火 < 茄", col.compare("火", "茄") < 0);
        test.ok("茄 < 荷", col.compare("茄", "荷") < 0);
        test.ok("荷 < 外", col.compare("荷", "外") < 0);
        test.ok("外 < 竃", col.compare("外", "竃") < 0);
        test.ok("竃 < 凶", col.compare("竃", "凶") < 0);
        test.ok("凶 < 形", col.compare("凶", "形") < 0);
        test.ok("形 < 戸", col.compare("形", "戸") < 0);
        test.ok("戸 < 語", col.compare("戸", "語") < 0);
        test.ok("語 < 三", col.compare("語", "三") < 0);
        test.ok("三 < 女", col.compare("三", "女") < 0);
        test.ok("女 < 小", col.compare("女", "小") < 0);
        test.ok("小 < 上", col.compare("小", "上") < 0);
        test.ok("上 < 人", col.compare("上", "人") < 0);
        test.ok("人 < 大", col.compare("人", "大") < 0);
        test.ok("大 < 辻", col.compare("大", "辻") < 0);
        test.ok("辻 < 匹", col.compare("辻", "匹") < 0);
        test.ok("匹 < 夕", col.compare("匹", "夕") < 0);
        test.ok("夕 < 六", col.compare("夕", "六") < 0);
        test.ok("六 < 孑", col.compare("六", "孑") < 0);
        test.ok("孑 < 彳", col.compare("孑", "彳") < 0);
        test.ok("彳 < 杲", col.compare("彳", "杲") < 0);
        test.ok("杲 < 熾", col.compare("杲", "熾") < 0);
        test.ok("熾 < 疸", col.compare("熾", "疸") < 0);
        test.ok("疸 < 穽", col.compare("疸", "穽") < 0);
        test.ok("穽 < 詁", col.compare("穽", "詁") < 0);
        test.ok("詁 < 逎", col.compare("詁", "逎") < 0);
        test.ok("逎 < 鶩", col.compare("逎", "鶩") < 0);
        test.ok("鶩 < 熙", col.compare("鶩", "熙") < 0);
        test.done();
    },
    
    testJSCollatorSecKanji_ja: function(test) {
        test.expect(37);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        // kanji are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        test.ok("頴 < 円", col.compare("頴", "円") < 0);
        test.ok("円 < 凹", col.compare("円", "凹") < 0);
        test.ok("凹 < 臆", col.compare("凹", "臆") < 0);
        test.ok("臆 < 寡", col.compare("臆", "寡") < 0);
        test.ok("寡 < 火", col.compare("寡", "火") < 0);
        test.ok("火 < 茄", col.compare("火", "茄") < 0);
        test.ok("茄 < 荷", col.compare("茄", "荷") < 0);
        test.ok("荷 < 外", col.compare("荷", "外") < 0);
        test.ok("外 < 竃", col.compare("外", "竃") < 0);
        test.ok("竃 < 凶", col.compare("竃", "凶") < 0);
        test.ok("凶 < 形", col.compare("凶", "形") < 0);
        test.ok("形 < 戸", col.compare("形", "戸") < 0);
        test.ok("戸 < 語", col.compare("戸", "語") < 0);
        test.ok("語 < 三", col.compare("語", "三") < 0);
        test.ok("三 < 女", col.compare("三", "女") < 0);
        test.ok("女 < 小", col.compare("女", "小") < 0);
        test.ok("小 < 上", col.compare("小", "上") < 0);
        test.ok("上 < 人", col.compare("上", "人") < 0);
        test.ok("人 < 大", col.compare("人", "大") < 0);
        test.ok("大 < 辻", col.compare("大", "辻") < 0);
        test.ok("辻 < 匹", col.compare("辻", "匹") < 0);
        test.ok("匹 < 夕", col.compare("匹", "夕") < 0);
        test.ok("夕 < 六", col.compare("夕", "六") < 0);
        test.ok("六 < 孑", col.compare("六", "孑") < 0);
        test.ok("孑 < 彳", col.compare("孑", "彳") < 0);
        test.ok("彳 < 杲", col.compare("彳", "杲") < 0);
        test.ok("杲 < 熾", col.compare("杲", "熾") < 0);
        test.ok("熾 < 疸", col.compare("熾", "疸") < 0);
        test.ok("疸 < 穽", col.compare("疸", "穽") < 0);
        test.ok("穽 < 詁", col.compare("穽", "詁") < 0);
        test.ok("詁 < 逎", col.compare("詁", "逎") < 0);
        test.ok("逎 < 鶩", col.compare("逎", "鶩") < 0);
        test.ok("鶩 < 熙", col.compare("鶩", "熙") < 0);
        test.done();
    },
    
    testJSCollatorPriKanji_ja: function(test) {
        test.expect(37);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        // kanji are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        test.ok("頴 < 円", col.compare("頴", "円") < 0);
        test.ok("円 < 凹", col.compare("円", "凹") < 0);
        test.ok("凹 < 臆", col.compare("凹", "臆") < 0);
        test.ok("臆 < 寡", col.compare("臆", "寡") < 0);
        test.ok("寡 < 火", col.compare("寡", "火") < 0);
        test.ok("火 < 茄", col.compare("火", "茄") < 0);
        test.ok("茄 < 荷", col.compare("茄", "荷") < 0);
        test.ok("荷 < 外", col.compare("荷", "外") < 0);
        test.ok("外 < 竃", col.compare("外", "竃") < 0);
        test.ok("竃 < 凶", col.compare("竃", "凶") < 0);
        test.ok("凶 < 形", col.compare("凶", "形") < 0);
        test.ok("形 < 戸", col.compare("形", "戸") < 0);
        test.ok("戸 < 語", col.compare("戸", "語") < 0);
        test.ok("語 < 三", col.compare("語", "三") < 0);
        test.ok("三 < 女", col.compare("三", "女") < 0);
        test.ok("女 < 小", col.compare("女", "小") < 0);
        test.ok("小 < 上", col.compare("小", "上") < 0);
        test.ok("上 < 人", col.compare("上", "人") < 0);
        test.ok("人 < 大", col.compare("人", "大") < 0);
        test.ok("大 < 辻", col.compare("大", "辻") < 0);
        test.ok("辻 < 匹", col.compare("辻", "匹") < 0);
        test.ok("匹 < 夕", col.compare("匹", "夕") < 0);
        test.ok("夕 < 六", col.compare("夕", "六") < 0);
        test.ok("六 < 孑", col.compare("六", "孑") < 0);
        test.ok("孑 < 彳", col.compare("孑", "彳") < 0);
        test.ok("彳 < 杲", col.compare("彳", "杲") < 0);
        test.ok("杲 < 熾", col.compare("杲", "熾") < 0);
        test.ok("熾 < 疸", col.compare("熾", "疸") < 0);
        test.ok("疸 < 穽", col.compare("疸", "穽") < 0);
        test.ok("穽 < 詁", col.compare("穽", "詁") < 0);
        test.ok("詁 < 逎", col.compare("詁", "逎") < 0);
        test.ok("逎 < 鶩", col.compare("逎", "鶩") < 0);
        test.ok("鶩 < 熙", col.compare("鶩", "熙") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaQuat_ja: function(test) {
        test.expect(100);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
        test.ok("え < お", col.compare("え", "お") < 0);
        test.ok("お < か", col.compare("お", "か") < 0);
        test.ok("か < が", col.compare("か", "が") < 0);
        test.ok("が < が", col.compare("が", "が") < 0);
        test.ok("が < き", col.compare("が", "き") < 0);
        test.ok("き < ぎ", col.compare("き", "ぎ") < 0);
        test.ok("ぎ < ぎ", col.compare("ぎ", "ぎ") < 0);
        test.ok("ぎ < く", col.compare("ぎ", "く") < 0);
        test.ok("く < ぐ", col.compare("く", "ぐ") < 0);
        test.ok("ぐ < ぐ", col.compare("ぐ", "ぐ") < 0);
        test.ok("ぐ < け", col.compare("ぐ", "け") < 0);
        test.ok("け < げ", col.compare("け", "げ") < 0);
        test.ok("げ < げ", col.compare("げ", "げ") < 0);
        test.ok("げ < こ", col.compare("げ", "こ") < 0);
        test.ok("こ < ご", col.compare("こ", "ご") < 0);
        test.ok("ご < ご", col.compare("ご", "ご") < 0);
        test.ok("ご < さ", col.compare("ご", "さ") < 0);
        test.ok("さ < ざ", col.compare("さ", "ざ") < 0);
        test.ok("ざ < ざ", col.compare("ざ", "ざ") < 0);
        test.ok("ざ < し", col.compare("ざ", "し") < 0);
        test.ok("し < じ", col.compare("し", "じ") < 0);
        test.ok("じ < じ", col.compare("じ", "じ") < 0);
        test.ok("じ < す", col.compare("じ", "す") < 0);
        test.ok("す < ず", col.compare("す", "ず") < 0);
        test.ok("ず < ず", col.compare("ず", "ず") < 0);
        test.ok("ず < せ", col.compare("ず", "せ") < 0);
        test.ok("せ < ぜ", col.compare("せ", "ぜ") < 0);
        test.ok("ぜ < ぜ", col.compare("ぜ", "ぜ") < 0);
        test.ok("ぜ < そ", col.compare("ぜ", "そ") < 0);
        test.ok("そ < ぞ", col.compare("そ", "ぞ") < 0);
        test.ok("ぞ < ぞ", col.compare("ぞ", "ぞ") < 0);
        test.ok("ぞ < た", col.compare("ぞ", "た") < 0);
        test.ok("た < だ", col.compare("た", "だ") < 0);
        test.ok("だ < だ", col.compare("だ", "だ") < 0);
        test.ok("だ < ち", col.compare("だ", "ち") < 0);
        test.ok("ち < ぢ", col.compare("ち", "ぢ") < 0);
        test.ok("ぢ < ぢ", col.compare("ぢ", "ぢ") < 0);
        test.ok("ぢ < つ", col.compare("ぢ", "つ") < 0);
        test.ok("つ < づ", col.compare("つ", "づ") < 0);
        test.ok("づ < づ", col.compare("づ", "づ") < 0);
        test.ok("づ < て", col.compare("づ", "て") < 0);
        test.ok("て < で", col.compare("て", "で") < 0);
        test.ok("で < で", col.compare("で", "で") < 0);
        test.ok("で < と", col.compare("で", "と") < 0);
        test.ok("と < ど", col.compare("と", "ど") < 0);
        test.ok("ど < ど", col.compare("ど", "ど") < 0);
        test.ok("ど < な", col.compare("ど", "な") < 0);
        test.ok("な < に", col.compare("な", "に") < 0);
        test.ok("に < ぬ", col.compare("に", "ぬ") < 0);
        test.ok("ぬ < ね", col.compare("ぬ", "ね") < 0);
        test.ok("ね < の", col.compare("ね", "の") < 0);
        test.ok("の < は", col.compare("の", "は") < 0);
        test.ok("は < ば", col.compare("は", "ば") < 0);
        test.ok("ば < ば", col.compare("ば", "ば") < 0);
        test.ok("ば < ぱ", col.compare("ば", "ぱ") < 0);
        test.ok("ぱ < ぱ", col.compare("ぱ", "ぱ") < 0);
        test.ok("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
        test.ok("ひ < び", col.compare("ひ", "び") < 0);
        test.ok("び < び", col.compare("び", "び") < 0);
        test.ok("び < ぴ", col.compare("び", "ぴ") < 0);
        test.ok("ぴ < ぴ", col.compare("ぴ", "ぴ") < 0);
        test.ok("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
        test.ok("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
        test.ok("ぶ < ぶ", col.compare("ぶ", "ぶ") < 0);
        test.ok("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
        test.ok("ぷ < ぷ", col.compare("ぷ", "ぷ") < 0);
        test.ok("ぷ < へ", col.compare("ぷ", "へ") < 0);
        test.ok("へ < べ", col.compare("へ", "べ") < 0);
        test.ok("べ < べ", col.compare("べ", "べ") < 0);
        test.ok("べ < ぺ", col.compare("べ", "ぺ") < 0);
        test.ok("ぺ < ぺ", col.compare("ぺ", "ぺ") < 0);
        test.ok("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
        test.ok("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
        test.ok("ぼ < ぼ", col.compare("ぼ", "ぼ") < 0);
        test.ok("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
        test.ok("ぽ < ぽ", col.compare("ぽ", "ぽ") < 0);
        test.ok("ぽ < ま", col.compare("ぽ", "ま") < 0);
        test.ok("ま < み", col.compare("ま", "み") < 0);
        test.ok("み < む", col.compare("み", "む") < 0);
        test.ok("む < め", col.compare("む", "め") < 0);
        test.ok("め < も", col.compare("め", "も") < 0);
        test.ok("も < や", col.compare("も", "や") < 0);
        test.ok("や < ゆ", col.compare("や", "ゆ") < 0);
        test.ok("ゆ < よ", col.compare("ゆ", "よ") < 0);
        test.ok("よ < ら", col.compare("よ", "ら") < 0);
        test.ok("ら < り", col.compare("ら", "り") < 0);
        test.ok("り < る", col.compare("り", "る") < 0);
        test.ok("る < れ", col.compare("る", "れ") < 0);
        test.ok("れ < ろ", col.compare("れ", "ろ") < 0);
        test.ok("ろ < わ", col.compare("ろ", "わ") < 0);
        test.ok("わ < ゐ", col.compare("わ", "ゐ") < 0);
        test.ok("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
        test.ok("ゑ < を", col.compare("ゑ", "を") < 0);
        test.ok("を < ん", col.compare("を", "ん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaTer_ja: function(test) {
        test.expect(100);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
        test.ok("え < お", col.compare("え", "お") < 0);
        test.ok("お < か", col.compare("お", "か") < 0);
        test.ok("か < が", col.compare("か", "が") < 0);
        test.ok("が = が", col.compare("が", "が") === 0);
        test.ok("が < き", col.compare("が", "き") < 0);
        test.ok("き < ぎ", col.compare("き", "ぎ") < 0);
        test.ok("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
        test.ok("ぎ < く", col.compare("ぎ", "く") < 0);
        test.ok("く < ぐ", col.compare("く", "ぐ") < 0);
        test.ok("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
        test.ok("ぐ < け", col.compare("ぐ", "け") < 0);
        test.ok("け < げ", col.compare("け", "げ") < 0);
        test.ok("げ = げ", col.compare("げ", "げ") === 0);
        test.ok("げ < こ", col.compare("げ", "こ") < 0);
        test.ok("こ < ご", col.compare("こ", "ご") < 0);
        test.ok("ご = ご", col.compare("ご", "ご") === 0);
        test.ok("ご < さ", col.compare("ご", "さ") < 0);
        test.ok("さ < ざ", col.compare("さ", "ざ") < 0);
        test.ok("ざ = ざ", col.compare("ざ", "ざ") === 0);
        test.ok("ざ < し", col.compare("ざ", "し") < 0);
        test.ok("し < じ", col.compare("し", "じ") < 0);
        test.ok("じ = じ", col.compare("じ", "じ") === 0);
        test.ok("じ < す", col.compare("じ", "す") < 0);
        test.ok("す < ず", col.compare("す", "ず") < 0);
        test.ok("ず = ず", col.compare("ず", "ず") === 0);
        test.ok("ず < せ", col.compare("ず", "せ") < 0);
        test.ok("せ < ぜ", col.compare("せ", "ぜ") < 0);
        test.ok("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
        test.ok("ぜ < そ", col.compare("ぜ", "そ") < 0);
        test.ok("そ < ぞ", col.compare("そ", "ぞ") < 0);
        test.ok("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
        test.ok("ぞ < た", col.compare("ぞ", "た") < 0);
        test.ok("た < だ", col.compare("た", "だ") < 0);
        test.ok("だ = だ", col.compare("だ", "だ") === 0);
        test.ok("だ < ち", col.compare("だ", "ち") < 0);
        test.ok("ち < ぢ", col.compare("ち", "ぢ") < 0);
        test.ok("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
        test.ok("ぢ < つ", col.compare("ぢ", "つ") < 0);
        test.ok("つ < づ", col.compare("つ", "づ") < 0);
        test.ok("づ = づ", col.compare("づ", "づ") === 0);
        test.ok("づ < て", col.compare("づ", "て") < 0);
        test.ok("て < で", col.compare("て", "で") < 0);
        test.ok("で = で", col.compare("で", "で") === 0);
        test.ok("で < と", col.compare("で", "と") < 0);
        test.ok("と < ど", col.compare("と", "ど") < 0);
        test.ok("ど = ど", col.compare("ど", "ど") === 0);
        test.ok("ど < な", col.compare("ど", "な") < 0);
        test.ok("な < に", col.compare("な", "に") < 0);
        test.ok("に < ぬ", col.compare("に", "ぬ") < 0);
        test.ok("ぬ < ね", col.compare("ぬ", "ね") < 0);
        test.ok("ね < の", col.compare("ね", "の") < 0);
        test.ok("の < は", col.compare("の", "は") < 0);
        test.ok("は < ば", col.compare("は", "ば") < 0);
        test.ok("ば = ば", col.compare("ば", "ば") === 0);
        test.ok("ば < ぱ", col.compare("ば", "ぱ") < 0);
        test.ok("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
        test.ok("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
        test.ok("ひ < び", col.compare("ひ", "び") < 0);
        test.ok("び = び", col.compare("び", "び") === 0);
        test.ok("び < ぴ", col.compare("び", "ぴ") < 0);
        test.ok("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
        test.ok("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
        test.ok("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
        test.ok("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
        test.ok("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
        test.ok("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
        test.ok("ぷ < へ", col.compare("ぷ", "へ") < 0);
        test.ok("へ < べ", col.compare("へ", "べ") < 0);
        test.ok("べ = べ", col.compare("べ", "べ") === 0);
        test.ok("べ < ぺ", col.compare("べ", "ぺ") < 0);
        test.ok("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
        test.ok("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
        test.ok("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
        test.ok("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
        test.ok("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
        test.ok("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
        test.ok("ぽ < ま", col.compare("ぽ", "ま") < 0);
        test.ok("ま < み", col.compare("ま", "み") < 0);
        test.ok("み < む", col.compare("み", "む") < 0);
        test.ok("む < め", col.compare("む", "め") < 0);
        test.ok("め < も", col.compare("め", "も") < 0);
        test.ok("も < や", col.compare("も", "や") < 0);
        test.ok("や < ゆ", col.compare("や", "ゆ") < 0);
        test.ok("ゆ < よ", col.compare("ゆ", "よ") < 0);
        test.ok("よ < ら", col.compare("よ", "ら") < 0);
        test.ok("ら < り", col.compare("ら", "り") < 0);
        test.ok("り < る", col.compare("り", "る") < 0);
        test.ok("る < れ", col.compare("る", "れ") < 0);
        test.ok("れ < ろ", col.compare("れ", "ろ") < 0);
        test.ok("ろ < わ", col.compare("ろ", "わ") < 0);
        test.ok("わ < ゐ", col.compare("わ", "ゐ") < 0);
        test.ok("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
        test.ok("ゑ < を", col.compare("ゑ", "を") < 0);
        test.ok("を < ん", col.compare("を", "ん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaSec_ja: function(test) {
        test.expect(100);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
        test.ok("え < お", col.compare("え", "お") < 0);
        test.ok("お < か", col.compare("お", "か") < 0);
        test.ok("か < が", col.compare("か", "が") < 0);
        test.ok("が = が", col.compare("が", "が") === 0);
        test.ok("が < き", col.compare("が", "き") < 0);
        test.ok("き < ぎ", col.compare("き", "ぎ") < 0);
        test.ok("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
        test.ok("ぎ < く", col.compare("ぎ", "く") < 0);
        test.ok("く < ぐ", col.compare("く", "ぐ") < 0);
        test.ok("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
        test.ok("ぐ < け", col.compare("ぐ", "け") < 0);
        test.ok("け < げ", col.compare("け", "げ") < 0);
        test.ok("げ = げ", col.compare("げ", "げ") === 0);
        test.ok("げ < こ", col.compare("げ", "こ") < 0);
        test.ok("こ < ご", col.compare("こ", "ご") < 0);
        test.ok("ご = ご", col.compare("ご", "ご") === 0);
        test.ok("ご < さ", col.compare("ご", "さ") < 0);
        test.ok("さ < ざ", col.compare("さ", "ざ") < 0);
        test.ok("ざ = ざ", col.compare("ざ", "ざ") === 0);
        test.ok("ざ < し", col.compare("ざ", "し") < 0);
        test.ok("し < じ", col.compare("し", "じ") < 0);
        test.ok("じ = じ", col.compare("じ", "じ") === 0);
        test.ok("じ < す", col.compare("じ", "す") < 0);
        test.ok("す < ず", col.compare("す", "ず") < 0);
        test.ok("ず = ず", col.compare("ず", "ず") === 0);
        test.ok("ず < せ", col.compare("ず", "せ") < 0);
        test.ok("せ < ぜ", col.compare("せ", "ぜ") < 0);
        test.ok("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
        test.ok("ぜ < そ", col.compare("ぜ", "そ") < 0);
        test.ok("そ < ぞ", col.compare("そ", "ぞ") < 0);
        test.ok("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
        test.ok("ぞ < た", col.compare("ぞ", "た") < 0);
        test.ok("た < だ", col.compare("た", "だ") < 0);
        test.ok("だ = だ", col.compare("だ", "だ") === 0);
        test.ok("だ < ち", col.compare("だ", "ち") < 0);
        test.ok("ち < ぢ", col.compare("ち", "ぢ") < 0);
        test.ok("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
        test.ok("ぢ < つ", col.compare("ぢ", "つ") < 0);
        test.ok("つ < づ", col.compare("つ", "づ") < 0);
        test.ok("づ = づ", col.compare("づ", "づ") === 0);
        test.ok("づ < て", col.compare("づ", "て") < 0);
        test.ok("て < で", col.compare("て", "で") < 0);
        test.ok("で = で", col.compare("で", "で") === 0);
        test.ok("で < と", col.compare("で", "と") < 0);
        test.ok("と < ど", col.compare("と", "ど") < 0);
        test.ok("ど = ど", col.compare("ど", "ど") === 0);
        test.ok("ど < な", col.compare("ど", "な") < 0);
        test.ok("な < に", col.compare("な", "に") < 0);
        test.ok("に < ぬ", col.compare("に", "ぬ") < 0);
        test.ok("ぬ < ね", col.compare("ぬ", "ね") < 0);
        test.ok("ね < の", col.compare("ね", "の") < 0);
        test.ok("の < は", col.compare("の", "は") < 0);
        test.ok("は < ば", col.compare("は", "ば") < 0);
        test.ok("ば = ば", col.compare("ば", "ば") === 0);
        test.ok("ば < ぱ", col.compare("ば", "ぱ") < 0);
        test.ok("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
        test.ok("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
        test.ok("ひ < び", col.compare("ひ", "び") < 0);
        test.ok("び = び", col.compare("び", "び") === 0);
        test.ok("び < ぴ", col.compare("び", "ぴ") < 0);
        test.ok("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
        test.ok("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
        test.ok("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
        test.ok("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
        test.ok("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
        test.ok("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
        test.ok("ぷ < へ", col.compare("ぷ", "へ") < 0);
        test.ok("へ < べ", col.compare("へ", "べ") < 0);
        test.ok("べ = べ", col.compare("べ", "べ") === 0);
        test.ok("べ < ぺ", col.compare("べ", "ぺ") < 0);
        test.ok("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
        test.ok("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
        test.ok("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
        test.ok("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
        test.ok("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
        test.ok("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
        test.ok("ぽ < ま", col.compare("ぽ", "ま") < 0);
        test.ok("ま < み", col.compare("ま", "み") < 0);
        test.ok("み < む", col.compare("み", "む") < 0);
        test.ok("む < め", col.compare("む", "め") < 0);
        test.ok("め < も", col.compare("め", "も") < 0);
        test.ok("も < や", col.compare("も", "や") < 0);
        test.ok("や < ゆ", col.compare("や", "ゆ") < 0);
        test.ok("ゆ < よ", col.compare("ゆ", "よ") < 0);
        test.ok("よ < ら", col.compare("よ", "ら") < 0);
        test.ok("ら < り", col.compare("ら", "り") < 0);
        test.ok("り < る", col.compare("り", "る") < 0);
        test.ok("る < れ", col.compare("る", "れ") < 0);
        test.ok("れ < ろ", col.compare("れ", "ろ") < 0);
        test.ok("ろ < わ", col.compare("ろ", "わ") < 0);
        test.ok("わ < ゐ", col.compare("わ", "ゐ") < 0);
        test.ok("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
        test.ok("ゑ < を", col.compare("ゑ", "を") < 0);
        test.ok("を < ん", col.compare("を", "ん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaPri_ja: function(test) {
        test.expect(100);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う = ゔ", col.compare("う", "ゔ") === 0);
        test.ok("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
        test.ok("え < お", col.compare("え", "お") < 0);
        test.ok("お < か", col.compare("お", "か") < 0);
        test.ok("か = が", col.compare("か", "が") === 0);
        test.ok("が = が", col.compare("が", "が") === 0);
        test.ok("が < き", col.compare("が", "き") < 0);
        test.ok("き = ぎ", col.compare("き", "ぎ") === 0);
        test.ok("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
        test.ok("ぎ < く", col.compare("ぎ", "く") < 0);
        test.ok("く = ぐ", col.compare("く", "ぐ") === 0);
        test.ok("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
        test.ok("ぐ < け", col.compare("ぐ", "け") < 0);
        test.ok("け = げ", col.compare("け", "げ") === 0);
        test.ok("げ = げ", col.compare("げ", "げ") === 0);
        test.ok("げ < こ", col.compare("げ", "こ") < 0);
        test.ok("こ = ご", col.compare("こ", "ご") === 0);
        test.ok("ご = ご", col.compare("ご", "ご") === 0);
        test.ok("ご < さ", col.compare("ご", "さ") < 0);
        test.ok("さ = ざ", col.compare("さ", "ざ") === 0);
        test.ok("ざ = ざ", col.compare("ざ", "ざ") === 0);
        test.ok("ざ < し", col.compare("ざ", "し") < 0);
        test.ok("し = じ", col.compare("し", "じ") === 0);
        test.ok("じ = じ", col.compare("じ", "じ") === 0);
        test.ok("じ < す", col.compare("じ", "す") < 0);
        test.ok("す = ず", col.compare("す", "ず") === 0);
        test.ok("ず = ず", col.compare("ず", "ず") === 0);
        test.ok("ず < せ", col.compare("ず", "せ") < 0);
        test.ok("せ = ぜ", col.compare("せ", "ぜ") === 0);
        test.ok("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
        test.ok("ぜ < そ", col.compare("ぜ", "そ") < 0);
        test.ok("そ = ぞ", col.compare("そ", "ぞ") === 0);
        test.ok("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
        test.ok("ぞ < た", col.compare("ぞ", "た") < 0);
        test.ok("た = だ", col.compare("た", "だ") === 0);
        test.ok("だ = だ", col.compare("だ", "だ") === 0);
        test.ok("だ < ち", col.compare("だ", "ち") < 0);
        test.ok("ち = ぢ", col.compare("ち", "ぢ") === 0);
        test.ok("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
        test.ok("ぢ < つ", col.compare("ぢ", "つ") < 0);
        test.ok("つ = づ", col.compare("つ", "づ") === 0);
        test.ok("づ = づ", col.compare("づ", "づ") === 0);
        test.ok("づ < て", col.compare("づ", "て") < 0);
        test.ok("て = で", col.compare("て", "で") === 0);
        test.ok("で = で", col.compare("で", "で") === 0);
        test.ok("で < と", col.compare("で", "と") < 0);
        test.ok("と = ど", col.compare("と", "ど") === 0);
        test.ok("ど = ど", col.compare("ど", "ど") === 0);
        test.ok("ど < な", col.compare("ど", "な") < 0);
        test.ok("な < に", col.compare("な", "に") < 0);
        test.ok("に < ぬ", col.compare("に", "ぬ") < 0);
        test.ok("ぬ < ね", col.compare("ぬ", "ね") < 0);
        test.ok("ね < の", col.compare("ね", "の") < 0);
        test.ok("の < は", col.compare("の", "は") < 0);
        test.ok("は = ば", col.compare("は", "ば") === 0);
        test.ok("ば = ば", col.compare("ば", "ば") === 0);
        test.ok("ば = ぱ", col.compare("ば", "ぱ") === 0);
        test.ok("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
        test.ok("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
        test.ok("ひ = び", col.compare("ひ", "び") === 0);
        test.ok("び = び", col.compare("び", "び") === 0);
        test.ok("び = ぴ", col.compare("び", "ぴ") === 0);
        test.ok("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
        test.ok("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
        test.ok("ふ = ぶ", col.compare("ふ", "ぶ") === 0);
        test.ok("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
        test.ok("ぶ = ぷ", col.compare("ぶ", "ぷ") === 0);
        test.ok("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
        test.ok("ぷ < へ", col.compare("ぷ", "へ") < 0);
        test.ok("へ = べ", col.compare("へ", "べ") === 0);
        test.ok("べ = べ", col.compare("べ", "べ") === 0);
        test.ok("べ = ぺ", col.compare("べ", "ぺ") === 0);
        test.ok("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
        test.ok("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
        test.ok("ほ = ぼ", col.compare("ほ", "ぼ") === 0);
        test.ok("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
        test.ok("ぼ = ぽ", col.compare("ぼ", "ぽ") === 0);
        test.ok("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
        test.ok("ぽ < ま", col.compare("ぽ", "ま") < 0);
        test.ok("ま < み", col.compare("ま", "み") < 0);
        test.ok("み < む", col.compare("み", "む") < 0);
        test.ok("む < め", col.compare("む", "め") < 0);
        test.ok("め < も", col.compare("め", "も") < 0);
        test.ok("も < や", col.compare("も", "や") < 0);
        test.ok("や < ゆ", col.compare("や", "ゆ") < 0);
        test.ok("ゆ < よ", col.compare("ゆ", "よ") < 0);
        test.ok("よ < ら", col.compare("よ", "ら") < 0);
        test.ok("ら < り", col.compare("ら", "り") < 0);
        test.ok("り < る", col.compare("り", "る") < 0);
        test.ok("る < れ", col.compare("る", "れ") < 0);
        test.ok("れ < ろ", col.compare("れ", "ろ") < 0);
        test.ok("ろ < わ", col.compare("ろ", "わ") < 0);
        test.ok("わ < ゐ", col.compare("わ", "ゐ") < 0);
        test.ok("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
        test.ok("ゑ < を", col.compare("ゑ", "を") < 0);
        test.ok("を < ん", col.compare("を", "ん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaLengthMarksQuat_ja: function(test) {
        test.expect(86);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
        test.ok("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
        test.ok("たー < たぁ", col.compare("たー", "たぁ") < 0);
        test.ok("だー < だぁ", col.compare("だー", "だぁ") < 0);
        test.ok("なー < なぁ", col.compare("なー", "なぁ") < 0);
        test.ok("はー < はぁ", col.compare("はー", "はぁ") < 0);
        test.ok("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
        test.ok("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
        test.ok("まー < まぁ", col.compare("まー", "まぁ") < 0);
        test.ok("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
        test.ok("やー < やぁ", col.compare("やー", "やぁ") < 0);
        test.ok("らー < らぁ", col.compare("らー", "らぁ") < 0);
        test.ok("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
        test.ok("わー < わぁ", col.compare("わー", "わぁ") < 0);
        
        test.ok("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
        test.ok("いー < いぃ", col.compare("いー", "いぃ") < 0);
        test.ok("きー < きぃ", col.compare("きー", "きぃ") < 0);
        test.ok("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
        test.ok("しー < しぃ", col.compare("しー", "しぃ") < 0);
        test.ok("じー < じぃ", col.compare("じー", "じぃ") < 0);
        test.ok("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
        test.ok("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
        test.ok("にー < にぃ", col.compare("にー", "にぃ") < 0);
        test.ok("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
        test.ok("びー < びぃ", col.compare("びー", "びぃ") < 0);
        test.ok("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
        test.ok("みー < みぃ", col.compare("みー", "みぃ") < 0);
        test.ok("りー < りぃ", col.compare("りー", "りぃ") < 0);
        test.ok("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
        
        test.ok("ぅー < ぅぃ", col.compare("ぅー", "ぅぅ") < 0);
        test.ok("うー < うぃ", col.compare("うー", "うぅ") < 0);
        test.ok("くー < くぃ", col.compare("くー", "くぅ") < 0);
        test.ok("ぐー < ぐぃ", col.compare("ぐー", "ぐぅ") < 0);
        test.ok("すー < すぃ", col.compare("すー", "すぅ") < 0);
        test.ok("ずー < ずぃ", col.compare("ずー", "ずぅ") < 0);
        test.ok("っー < っぃ", col.compare("っー", "っぅ") < 0);
        test.ok("つー < つぃ", col.compare("つー", "つぅ") < 0);
        test.ok("づー < づぃ", col.compare("づー", "づぅ") < 0);
        test.ok("ぬー < ぬぃ", col.compare("ぬー", "ぬぅ") < 0);
        test.ok("ふー < ふぃ", col.compare("ふー", "ふぅ") < 0);
        test.ok("ぶー < ぶぃ", col.compare("ぶー", "ぶぅ") < 0);
        test.ok("ぷー < ぷぃ", col.compare("ぷー", "ぷぅ") < 0);
        test.ok("むー < むぃ", col.compare("むー", "むぅ") < 0);
        test.ok("ゅー < ゅぃ", col.compare("ゅー", "ゅぅ") < 0);
        test.ok("ゆー < ゆぃ", col.compare("ゆー", "ゆぅ") < 0);
        test.ok("るー < るぃ", col.compare("るー", "るぅ") < 0);
        test.ok("ゔー < ゔぃ", col.compare("ゔー", "ゔぅ") < 0);
        
        test.ok("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
        test.ok("えー < えぇ", col.compare("えー", "えぇ") < 0);
        test.ok("けー < けぇ", col.compare("けー", "けぇ") < 0);
        test.ok("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
        test.ok("げー < げぇ", col.compare("げー", "げぇ") < 0);
        test.ok("せー < せぇ", col.compare("せー", "せぇ") < 0);
        test.ok("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
        test.ok("てー < てぇ", col.compare("てー", "てぇ") < 0);
        test.ok("でー < でぇ", col.compare("でー", "でぇ") < 0);
        test.ok("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
        test.ok("へー < へぇ", col.compare("へー", "へぇ") < 0);
        test.ok("べー < べぇ", col.compare("べー", "べぇ") < 0);
        test.ok("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
        test.ok("めー < めぇ", col.compare("めー", "めぇ") < 0);
        test.ok("れー < れぇ", col.compare("れー", "れぇ") < 0);
        test.ok("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
        
        test.ok("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
        test.ok("おー < おぉ", col.compare("おー", "おぉ") < 0);
        test.ok("こー < こぉ", col.compare("こー", "こぉ") < 0);
        test.ok("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
        test.ok("そー < そぉ", col.compare("そー", "そぉ") < 0);
        test.ok("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
        test.ok("とー < とぉ", col.compare("とー", "とぉ") < 0);
        test.ok("どー < どぉ", col.compare("どー", "どぉ") < 0);
        test.ok("のー < のぉ", col.compare("のー", "のぉ") < 0);
        test.ok("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
        test.ok("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
        test.ok("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
        test.ok("もー < もぉ", col.compare("もー", "もぉ") < 0);
        test.ok("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
        test.ok("よー < よぉ", col.compare("よー", "よぉ") < 0);
        test.ok("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
        test.ok("をー < をぉ", col.compare("をー", "をぉ") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaLengthMarksTer_ja: function(test) {
        test.expect(86);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
        test.ok("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
        test.ok("たー < たぁ", col.compare("たー", "たぁ") < 0);
        test.ok("だー < だぁ", col.compare("だー", "だぁ") < 0);
        test.ok("なー < なぁ", col.compare("なー", "なぁ") < 0);
        test.ok("はー < はぁ", col.compare("はー", "はぁ") < 0);
        test.ok("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
        test.ok("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
        test.ok("まー < まぁ", col.compare("まー", "まぁ") < 0);
        test.ok("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
        test.ok("やー < やぁ", col.compare("やー", "やぁ") < 0);
        test.ok("らー < らぁ", col.compare("らー", "らぁ") < 0);
        test.ok("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
        test.ok("わー < わぁ", col.compare("わー", "わぁ") < 0);
        
        test.ok("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
        test.ok("いー < いぃ", col.compare("いー", "いぃ") < 0);
        test.ok("きー < きぃ", col.compare("きー", "きぃ") < 0);
        test.ok("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
        test.ok("しー < しぃ", col.compare("しー", "しぃ") < 0);
        test.ok("じー < じぃ", col.compare("じー", "じぃ") < 0);
        test.ok("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
        test.ok("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
        test.ok("にー < にぃ", col.compare("にー", "にぃ") < 0);
        test.ok("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
        test.ok("びー < びぃ", col.compare("びー", "びぃ") < 0);
        test.ok("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
        test.ok("みー < みぃ", col.compare("みー", "みぃ") < 0);
        test.ok("りー < りぃ", col.compare("りー", "りぃ") < 0);
        test.ok("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
        
        test.ok("ぅー < ぅぅ", col.compare("ぅー", "ぅぅ") < 0);
        test.ok("うー < うぅ", col.compare("うー", "うぅ") < 0);
        test.ok("くー < くぅ", col.compare("くー", "くぅ") < 0);
        test.ok("ぐー < ぐぅ", col.compare("ぐー", "ぐぅ") < 0);
        test.ok("すー < すぅ", col.compare("すー", "すぅ") < 0);
        test.ok("ずー < ずぅ", col.compare("ずー", "ずぅ") < 0);
        test.ok("っー < っぅ", col.compare("っー", "っぅ") < 0);
        test.ok("つー < つぅ", col.compare("つー", "つぅ") < 0);
        test.ok("づー < づぅ", col.compare("づー", "づぅ") < 0);
        test.ok("ぬー < ぬぅ", col.compare("ぬー", "ぬぅ") < 0);
        test.ok("ふー < ふぅ", col.compare("ふー", "ふぅ") < 0);
        test.ok("ぶー < ぶぅ", col.compare("ぶー", "ぶぅ") < 0);
        test.ok("ぷー < ぷぅ", col.compare("ぷー", "ぷぅ") < 0);
        test.ok("むー < むぅ", col.compare("むー", "むぅ") < 0);
        test.ok("ゅー < ゅぅ", col.compare("ゅー", "ゅぅ") < 0);
        test.ok("ゆー < ゆぅ", col.compare("ゆー", "ゆぅ") < 0);
        test.ok("るー < るぅ", col.compare("るー", "るぅ") < 0);
        test.ok("ゔー < ゔぅ", col.compare("ゔー", "ゔぅ") < 0);
        
        test.ok("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
        test.ok("えー < えぇ", col.compare("えー", "えぇ") < 0);
        test.ok("けー < けぇ", col.compare("けー", "けぇ") < 0);
        test.ok("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
        test.ok("げー < げぇ", col.compare("げー", "げぇ") < 0);
        test.ok("せー < せぇ", col.compare("せー", "せぇ") < 0);
        test.ok("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
        test.ok("てー < てぇ", col.compare("てー", "てぇ") < 0);
        test.ok("でー < でぇ", col.compare("でー", "でぇ") < 0);
        test.ok("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
        test.ok("へー < へぇ", col.compare("へー", "へぇ") < 0);
        test.ok("べー < べぇ", col.compare("べー", "べぇ") < 0);
        test.ok("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
        test.ok("めー < めぇ", col.compare("めー", "めぇ") < 0);
        test.ok("れー < れぇ", col.compare("れー", "れぇ") < 0);
        test.ok("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
        
        test.ok("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
        test.ok("おー < おぉ", col.compare("おー", "おぉ") < 0);
        test.ok("こー < こぉ", col.compare("こー", "こぉ") < 0);
        test.ok("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
        test.ok("そー < そぉ", col.compare("そー", "そぉ") < 0);
        test.ok("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
        test.ok("とー < とぉ", col.compare("とー", "とぉ") < 0);
        test.ok("どー < どぉ", col.compare("どー", "どぉ") < 0);
        test.ok("のー < のぉ", col.compare("のー", "のぉ") < 0);
        test.ok("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
        test.ok("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
        test.ok("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
        test.ok("もー < もぉ", col.compare("もー", "もぉ") < 0);
        test.ok("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
        test.ok("よー < よぉ", col.compare("よー", "よぉ") < 0);
        test.ok("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
        test.ok("をー < をぉ", col.compare("をー", "をぉ") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaLengthMarksSec_ja: function(test) {
        test.expect(86);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
        test.ok("あー = あぁ", col.compare("あー", "あぁ") === 0);
        test.ok("かー = かぁ", col.compare("かー", "かぁ") === 0);
        test.ok("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
        test.ok("がー = がぁ", col.compare("がー", "がぁ") === 0);
        test.ok("さー = さぁ", col.compare("さー", "さぁ") === 0);
        test.ok("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
        test.ok("たー = たぁ", col.compare("たー", "たぁ") === 0);
        test.ok("だー = だぁ", col.compare("だー", "だぁ") === 0);
        test.ok("なー = なぁ", col.compare("なー", "なぁ") === 0);
        test.ok("はー = はぁ", col.compare("はー", "はぁ") === 0);
        test.ok("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
        test.ok("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
        test.ok("まー = まぁ", col.compare("まー", "まぁ") === 0);
        test.ok("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
        test.ok("やー = やぁ", col.compare("やー", "やぁ") === 0);
        test.ok("らー = らぁ", col.compare("らー", "らぁ") === 0);
        test.ok("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
        test.ok("わー = わぁ", col.compare("わー", "わぁ") === 0);
        
        test.ok("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
        test.ok("いー = いぃ", col.compare("いー", "いぃ") === 0);
        test.ok("きー = きぃ", col.compare("きー", "きぃ") === 0);
        test.ok("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
        test.ok("しー = しぃ", col.compare("しー", "しぃ") === 0);
        test.ok("じー = じぃ", col.compare("じー", "じぃ") === 0);
        test.ok("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
        test.ok("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
        test.ok("にー = にぃ", col.compare("にー", "にぃ") === 0);
        test.ok("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
        test.ok("びー = びぃ", col.compare("びー", "びぃ") === 0);
        test.ok("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
        test.ok("みー = みぃ", col.compare("みー", "みぃ") === 0);
        test.ok("りー = りぃ", col.compare("りー", "りぃ") === 0);
        test.ok("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
        
        test.ok("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
        test.ok("うー = うぃ", col.compare("うー", "うぅ") === 0);
        test.ok("くー = くぃ", col.compare("くー", "くぅ") === 0);
        test.ok("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
        test.ok("すー = すぃ", col.compare("すー", "すぅ") === 0);
        test.ok("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
        test.ok("っー = っぃ", col.compare("っー", "っぅ") === 0);
        test.ok("つー = つぃ", col.compare("つー", "つぅ") === 0);
        test.ok("づー = づぃ", col.compare("づー", "づぅ") === 0);
        test.ok("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
        test.ok("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
        test.ok("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
        test.ok("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
        test.ok("むー = むぃ", col.compare("むー", "むぅ") === 0);
        test.ok("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
        test.ok("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
        test.ok("るー = るぃ", col.compare("るー", "るぅ") === 0);
        test.ok("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
        
        test.ok("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
        test.ok("えー = えぇ", col.compare("えー", "えぇ") === 0);
        test.ok("けー = けぇ", col.compare("けー", "けぇ") === 0);
        test.ok("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
        test.ok("げー = げぇ", col.compare("げー", "げぇ") === 0);
        test.ok("せー = せぇ", col.compare("せー", "せぇ") === 0);
        test.ok("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
        test.ok("てー = てぇ", col.compare("てー", "てぇ") === 0);
        test.ok("でー = でぇ", col.compare("でー", "でぇ") === 0);
        test.ok("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
        test.ok("へー = へぇ", col.compare("へー", "へぇ") === 0);
        test.ok("べー = べぇ", col.compare("べー", "べぇ") === 0);
        test.ok("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
        test.ok("めー = めぇ", col.compare("めー", "めぇ") === 0);
        test.ok("れー = れぇ", col.compare("れー", "れぇ") === 0);
        test.ok("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
        
        test.ok("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
        test.ok("おー = おぉ", col.compare("おー", "おぉ") === 0);
        test.ok("こー = こぉ", col.compare("こー", "こぉ") === 0);
        test.ok("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
        test.ok("そー = そぉ", col.compare("そー", "そぉ") === 0);
        test.ok("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
        test.ok("とー = とぉ", col.compare("とー", "とぉ") === 0);
        test.ok("どー = どぉ", col.compare("どー", "どぉ") === 0);
        test.ok("のー = のぉ", col.compare("のー", "のぉ") === 0);
        test.ok("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
        test.ok("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
        test.ok("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
        test.ok("もー = もぉ", col.compare("もー", "もぉ") === 0);
        test.ok("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
        test.ok("よー = よぉ", col.compare("よー", "よぉ") === 0);
        test.ok("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
        test.ok("をー = をぉ", col.compare("をー", "をぉ") === 0);
        test.done();
    },
    
    testJSCollatorHiraganaLengthMarksPri_ja: function(test) {
        test.expect(86);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
        test.ok("あー = あぁ", col.compare("あー", "あぁ") === 0);
        test.ok("かー = かぁ", col.compare("かー", "かぁ") === 0);
        test.ok("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
        test.ok("がー = がぁ", col.compare("がー", "がぁ") === 0);
        test.ok("さー = さぁ", col.compare("さー", "さぁ") === 0);
        test.ok("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
        test.ok("たー = たぁ", col.compare("たー", "たぁ") === 0);
        test.ok("だー = だぁ", col.compare("だー", "だぁ") === 0);
        test.ok("なー = なぁ", col.compare("なー", "なぁ") === 0);
        test.ok("はー = はぁ", col.compare("はー", "はぁ") === 0);
        test.ok("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
        test.ok("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
        test.ok("まー = まぁ", col.compare("まー", "まぁ") === 0);
        test.ok("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
        test.ok("やー = やぁ", col.compare("やー", "やぁ") === 0);
        test.ok("らー = らぁ", col.compare("らー", "らぁ") === 0);
        test.ok("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
        test.ok("わー = わぁ", col.compare("わー", "わぁ") === 0);
        
        test.ok("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
        test.ok("いー = いぃ", col.compare("いー", "いぃ") === 0);
        test.ok("きー = きぃ", col.compare("きー", "きぃ") === 0);
        test.ok("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
        test.ok("しー = しぃ", col.compare("しー", "しぃ") === 0);
        test.ok("じー = じぃ", col.compare("じー", "じぃ") === 0);
        test.ok("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
        test.ok("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
        test.ok("にー = にぃ", col.compare("にー", "にぃ") === 0);
        test.ok("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
        test.ok("びー = びぃ", col.compare("びー", "びぃ") === 0);
        test.ok("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
        test.ok("みー = みぃ", col.compare("みー", "みぃ") === 0);
        test.ok("りー = りぃ", col.compare("りー", "りぃ") === 0);
        test.ok("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
        
        test.ok("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
        test.ok("うー = うぃ", col.compare("うー", "うぅ") === 0);
        test.ok("くー = くぃ", col.compare("くー", "くぅ") === 0);
        test.ok("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
        test.ok("すー = すぃ", col.compare("すー", "すぅ") === 0);
        test.ok("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
        test.ok("っー = っぃ", col.compare("っー", "っぅ") === 0);
        test.ok("つー = つぃ", col.compare("つー", "つぅ") === 0);
        test.ok("づー = づぃ", col.compare("づー", "づぅ") === 0);
        test.ok("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
        test.ok("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
        test.ok("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
        test.ok("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
        test.ok("むー = むぃ", col.compare("むー", "むぅ") === 0);
        test.ok("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
        test.ok("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
        test.ok("るー = るぃ", col.compare("るー", "るぅ") === 0);
        test.ok("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
        
        test.ok("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
        test.ok("えー = えぇ", col.compare("えー", "えぇ") === 0);
        test.ok("けー = けぇ", col.compare("けー", "けぇ") === 0);
        test.ok("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
        test.ok("げー = げぇ", col.compare("げー", "げぇ") === 0);
        test.ok("せー = せぇ", col.compare("せー", "せぇ") === 0);
        test.ok("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
        test.ok("てー = てぇ", col.compare("てー", "てぇ") === 0);
        test.ok("でー = でぇ", col.compare("でー", "でぇ") === 0);
        test.ok("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
        test.ok("へー = へぇ", col.compare("へー", "へぇ") === 0);
        test.ok("べー = べぇ", col.compare("べー", "べぇ") === 0);
        test.ok("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
        test.ok("めー = めぇ", col.compare("めー", "めぇ") === 0);
        test.ok("れー = れぇ", col.compare("れー", "れぇ") === 0);
        test.ok("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
        
        test.ok("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
        test.ok("おー = おぉ", col.compare("おー", "おぉ") === 0);
        test.ok("こー = こぉ", col.compare("こー", "こぉ") === 0);
        test.ok("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
        test.ok("そー = そぉ", col.compare("そー", "そぉ") === 0);
        test.ok("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
        test.ok("とー = とぉ", col.compare("とー", "とぉ") === 0);
        test.ok("どー = どぉ", col.compare("どー", "どぉ") === 0);
        test.ok("のー = のぉ", col.compare("のー", "のぉ") === 0);
        test.ok("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
        test.ok("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
        test.ok("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
        test.ok("もー = もぉ", col.compare("もー", "もぉ") === 0);
        test.ok("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
        test.ok("よー = よぉ", col.compare("よー", "よぉ") === 0);
        test.ok("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
        test.ok("をー = をぉ", col.compare("をー", "をぉ") === 0);
        test.done();
    },
    
    testJSCollatorHiraganaIterationMarksQuat_ja: function(test) {
        test.expect(139);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
        test.ok("ゔゞ < ゔゔ", col.compare("ゔゞ", "ゔゔ") < 0);
        test.ok("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
        test.ok("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
        test.ok("おゝ < おお", col.compare("おゝ", "おお") < 0);
        test.ok("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);
    
        test.ok("かゝ < かか", col.compare("かゝ", "かか") < 0);
        test.ok("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
        test.ok("がゝ < がか", col.compare("がゝ", "がか") < 0);
        test.ok("きゝ < きき", col.compare("きゝ", "きき") < 0);
        test.ok("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
        test.ok("きゞ < きぎ", col.compare("きゞ", "きぎ") < 0);
        test.ok("ぎゞ < ぎぎ", col.compare("ぎゞ", "ぎぎ") < 0);
        test.ok("くゝ < くく", col.compare("くゝ", "くく") < 0);
        test.ok("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
        test.ok("くゞ < くぐ", col.compare("くゞ", "くぐ") < 0);
        test.ok("ぐゞ < ぐぐ", col.compare("ぐゞ", "ぐぐ") < 0);
        test.ok("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
        test.ok("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
        test.ok("げゝ < げけ", col.compare("げゝ", "げけ") < 0);
        test.ok("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
        test.ok("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
        test.ok("こゞ < こご", col.compare("こゞ", "こご") < 0);
        test.ok("ごゞ < ごご", col.compare("ごゞ", "ごご") < 0);
    
        test.ok("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
        test.ok("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
        test.ok("さゞ < さざ", col.compare("さゞ", "さざ") < 0);
        test.ok("ざゞ < ざざ", col.compare("ざゞ", "ざざ") < 0);
        test.ok("しゝ < しし", col.compare("しゝ", "しし") < 0);
        test.ok("じゝ < じし", col.compare("じゝ", "じし") < 0);
        test.ok("しゞ < しじ", col.compare("しゞ", "しじ") < 0);
        test.ok("じゞ < じじ", col.compare("じゞ", "じじ") < 0);
        test.ok("すゝ < すす", col.compare("すゝ", "すす") < 0);
        test.ok("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
        test.ok("すゞ < すず", col.compare("すゞ", "すず") < 0);
        test.ok("ずゞ < ずず", col.compare("ずゞ", "ずず") < 0);
        test.ok("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
        test.ok("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
        test.ok("せゞ < せぜ", col.compare("せゞ", "せぜ") < 0);
        test.ok("ぜゞ < ぜぜ", col.compare("ぜゞ", "ぜぜ") < 0);
        test.ok("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
        test.ok("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
        test.ok("そゞ < そぞ", col.compare("そゞ", "そぞ") < 0);
        test.ok("ぞゞ < ぞぞ", col.compare("ぞゞ", "ぞぞ") < 0);
    
        test.ok("たゝ < たた", col.compare("たゝ", "たた") < 0);
        test.ok("だゝ < だた", col.compare("だゝ", "だた") < 0);
        test.ok("たゞ < ただ", col.compare("たゞ", "ただ") < 0);
        test.ok("だゞ < だだ", col.compare("だゞ", "だだ") < 0);
        test.ok("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
        test.ok("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
        test.ok("ちゞ < ちぢ", col.compare("ちゞ", "ちぢ") < 0);
        test.ok("ぢゞ < ぢぢ", col.compare("ぢゞ", "ぢぢ") < 0);
        test.ok("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
        test.ok("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
        test.ok("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
        test.ok("つゞ < つづ", col.compare("つゞ", "つづ") < 0);
        test.ok("づゞ < づづ", col.compare("づゞ", "づづ") < 0);
        test.ok("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
        test.ok("っゞ < っづ", col.compare("っゞ", "っづ") < 0);
        test.ok("つゞ < つづ", col.compare("つゞ", "つづ") < 0);
        test.ok("てゝ < てて", col.compare("てゝ", "てて") < 0);
        test.ok("でゝ < でて", col.compare("でゝ", "でて") < 0);
        test.ok("てゞ < てで", col.compare("てゞ", "てで") < 0);
        test.ok("でゞ < でで", col.compare("でゞ", "でで") < 0);
        test.ok("とゝ < とと", col.compare("とゝ", "とと") < 0);
        test.ok("どゝ < どと", col.compare("どゝ", "どと") < 0);
        test.ok("とゞ < とど", col.compare("とゞ", "とど") < 0);
        test.ok("どゞ < どど", col.compare("どゞ", "どど") < 0);
    
        test.ok("なゝ < なな", col.compare("なゝ", "なな") < 0);
        test.ok("にゝ < にに", col.compare("にゝ", "にに") < 0);
        test.ok("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
        test.ok("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
        test.ok("のゝ < のの", col.compare("のゝ", "のの") < 0);
    
        test.ok("はゝ < はは", col.compare("はゝ", "はは") < 0);
        test.ok("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
        test.ok("はゞ < はば", col.compare("はゞ", "はば") < 0);
        test.ok("ばゞ < ばば", col.compare("ばゞ", "ばば") < 0);
        test.ok("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
        test.ok("ぱゞ < ぱば", col.compare("ぱゝ", "ぱは") < 0);
        test.ok("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
        test.ok("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
        test.ok("ひゞ < ひび", col.compare("ひゞ", "ひび") < 0);
        test.ok("びゞ < びび", col.compare("びゞ", "びび") < 0);
        test.ok("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
        test.ok("ぴゞ < ぴび", col.compare("ぴゞ", "ぴび") < 0);
        test.ok("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
        test.ok("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
        test.ok("ふゞ < ふぶ", col.compare("ふゞ", "ふぶ") < 0);
        test.ok("ぶゞ < ぶぶ", col.compare("ぶゞ", "ぶぶ") < 0);
        test.ok("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
        test.ok("ぷゞ < ぷぶ", col.compare("ぷゞ", "ぷぶ") < 0);
        test.ok("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
        test.ok("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
        test.ok("へゞ < へべ", col.compare("へゞ", "へべ") < 0);
        test.ok("べゞ < べべ", col.compare("べゞ", "べべ") < 0);
        test.ok("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
        test.ok("ぺゞ < ぺべ", col.compare("ぺゞ", "ぺべ") < 0);
        test.ok("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
        test.ok("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
        test.ok("ほゞ < ほぼ", col.compare("ほゞ", "ほぼ") < 0);
        test.ok("ぼゞ < ぼぼ", col.compare("ぼゞ", "ぼぼ") < 0);
        test.ok("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
        test.ok("ぽゞ < ぽぼ", col.compare("ぽゞ", "ぽぼ") < 0);
    
        test.ok("まゝ < まま", col.compare("まゝ", "まま") < 0);
        test.ok("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
        test.ok("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
        test.ok("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
        test.ok("もゝ < もも", col.compare("もゝ", "もも") < 0);
    
        test.ok("やゝ < やや", col.compare("やゝ", "やや") < 0);
        test.ok("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
        test.ok("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
        test.ok("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
        test.ok("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
        test.ok("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);
    
        test.ok("らゝ < らら", col.compare("らゝ", "らら") < 0);
        test.ok("りゝ < りり", col.compare("りゝ", "りり") < 0);
        test.ok("るゝ < るる", col.compare("るゝ", "るる") < 0);
        test.ok("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
        test.ok("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);
    
        test.ok("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
        test.ok("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
        test.ok("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
        test.ok("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
        test.ok("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
        test.ok("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
        test.ok("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
        test.ok("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
        test.ok("をゝ < をを", col.compare("をゝ", "をを") < 0);
        test.ok("をゞ < をを", col.compare("をゞ", "をを") < 0);
    
        test.ok("んゝ < んん", col.compare("んゝ", "んん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaIterationMarksTer_ja: function(test) {
        test.expect(139);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
        test.ok("ゔゞ < ゔゔ", col.compare("ゔゞ", "ゔゔ") < 0);
        test.ok("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
        test.ok("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
        test.ok("おゝ < おお", col.compare("おゝ", "おお") < 0);
        test.ok("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);
    
        test.ok("かゝ < かか", col.compare("かゝ", "かか") < 0);
        test.ok("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
        test.ok("がゝ < がか", col.compare("がゝ", "がか") < 0);
        test.ok("きゝ < きき", col.compare("きゝ", "きき") < 0);
        test.ok("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
        test.ok("きゞ < きぎ", col.compare("きゞ", "きぎ") < 0);
        test.ok("ぎゞ < ぎぎ", col.compare("ぎゞ", "ぎぎ") < 0);
        test.ok("くゝ < くく", col.compare("くゝ", "くく") < 0);
        test.ok("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
        test.ok("くゞ < くぐ", col.compare("くゞ", "くぐ") < 0);
        test.ok("ぐゞ < ぐぐ", col.compare("ぐゞ", "ぐぐ") < 0);
        test.ok("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
        test.ok("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
        test.ok("げゝ < げけ", col.compare("げゝ", "げけ") < 0);
        test.ok("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
        test.ok("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
        test.ok("こゞ < こご", col.compare("こゞ", "こご") < 0);
        test.ok("ごゞ < ごご", col.compare("ごゞ", "ごご") < 0);
    
        test.ok("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
        test.ok("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
        test.ok("さゞ < さざ", col.compare("さゞ", "さざ") < 0);
        test.ok("ざゞ < ざざ", col.compare("ざゞ", "ざざ") < 0);
        test.ok("しゝ < しし", col.compare("しゝ", "しし") < 0);
        test.ok("じゝ < じし", col.compare("じゝ", "じし") < 0);
        test.ok("しゞ < しじ", col.compare("しゞ", "しじ") < 0);
        test.ok("じゞ < じじ", col.compare("じゞ", "じじ") < 0);
        test.ok("すゝ < すす", col.compare("すゝ", "すす") < 0);
        test.ok("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
        test.ok("すゞ < すず", col.compare("すゞ", "すず") < 0);
        test.ok("ずゞ < ずず", col.compare("ずゞ", "ずず") < 0);
        test.ok("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
        test.ok("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
        test.ok("せゞ < せぜ", col.compare("せゞ", "せぜ") < 0);
        test.ok("ぜゞ < ぜぜ", col.compare("ぜゞ", "ぜぜ") < 0);
        test.ok("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
        test.ok("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
        test.ok("そゞ < そぞ", col.compare("そゞ", "そぞ") < 0);
        test.ok("ぞゞ < ぞぞ", col.compare("ぞゞ", "ぞぞ") < 0);
    
        test.ok("たゝ < たた", col.compare("たゝ", "たた") < 0);
        test.ok("だゝ < だた", col.compare("だゝ", "だた") < 0);
        test.ok("たゞ < ただ", col.compare("たゞ", "ただ") < 0);
        test.ok("だゞ < だだ", col.compare("だゞ", "だだ") < 0);
        test.ok("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
        test.ok("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
        test.ok("ちゞ < ちぢ", col.compare("ちゞ", "ちぢ") < 0);
        test.ok("ぢゞ < ぢぢ", col.compare("ぢゞ", "ぢぢ") < 0);
        test.ok("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
        test.ok("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
        test.ok("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
        test.ok("つゞ < つづ", col.compare("つゞ", "つづ") < 0);
        test.ok("づゞ < づづ", col.compare("づゞ", "づづ") < 0);
        test.ok("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
        test.ok("っゞ < っづ", col.compare("っゞ", "っづ") < 0);
        test.ok("つゞ < つづ", col.compare("つゞ", "つづ") < 0);
        test.ok("てゝ < てて", col.compare("てゝ", "てて") < 0);
        test.ok("でゝ < でて", col.compare("でゝ", "でて") < 0);
        test.ok("てゞ < てで", col.compare("てゞ", "てで") < 0);
        test.ok("でゞ < でで", col.compare("でゞ", "でで") < 0);
        test.ok("とゝ < とと", col.compare("とゝ", "とと") < 0);
        test.ok("どゝ < どと", col.compare("どゝ", "どと") < 0);
        test.ok("とゞ < とど", col.compare("とゞ", "とど") < 0);
        test.ok("どゞ < どど", col.compare("どゞ", "どど") < 0);
    
        test.ok("なゝ < なな", col.compare("なゝ", "なな") < 0);
        test.ok("にゝ < にに", col.compare("にゝ", "にに") < 0);
        test.ok("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
        test.ok("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
        test.ok("のゝ < のの", col.compare("のゝ", "のの") < 0);
    
        test.ok("はゝ < はは", col.compare("はゝ", "はは") < 0);
        test.ok("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
        test.ok("はゞ < はば", col.compare("はゞ", "はば") < 0);
        test.ok("ばゞ < ばば", col.compare("ばゞ", "ばば") < 0);
        test.ok("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
        test.ok("ぱゞ < ぱば", col.compare("ぱゝ", "ぱは") < 0);
        test.ok("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
        test.ok("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
        test.ok("ひゞ < ひび", col.compare("ひゞ", "ひび") < 0);
        test.ok("びゞ < びび", col.compare("びゞ", "びび") < 0);
        test.ok("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
        test.ok("ぴゞ < ぴび", col.compare("ぴゞ", "ぴび") < 0);
        test.ok("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
        test.ok("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
        test.ok("ふゞ < ふぶ", col.compare("ふゞ", "ふぶ") < 0);
        test.ok("ぶゞ < ぶぶ", col.compare("ぶゞ", "ぶぶ") < 0);
        test.ok("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
        test.ok("ぷゞ < ぷぶ", col.compare("ぷゞ", "ぷぶ") < 0);
        test.ok("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
        test.ok("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
        test.ok("へゞ < へべ", col.compare("へゞ", "へべ") < 0);
        test.ok("べゞ < べべ", col.compare("べゞ", "べべ") < 0);
        test.ok("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
        test.ok("ぺゞ < ぺべ", col.compare("ぺゞ", "ぺべ") < 0);
        test.ok("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
        test.ok("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
        test.ok("ほゞ < ほぼ", col.compare("ほゞ", "ほぼ") < 0);
        test.ok("ぼゞ < ぼぼ", col.compare("ぼゞ", "ぼぼ") < 0);
        test.ok("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
        test.ok("ぽゞ < ぽぼ", col.compare("ぽゞ", "ぽぼ") < 0);
    
        test.ok("まゝ < まま", col.compare("まゝ", "まま") < 0);
        test.ok("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
        test.ok("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
        test.ok("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
        test.ok("もゝ < もも", col.compare("もゝ", "もも") < 0);
    
        test.ok("やゝ < やや", col.compare("やゝ", "やや") < 0);
        test.ok("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
        test.ok("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
        test.ok("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
        test.ok("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
        test.ok("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);
    
        test.ok("らゝ < らら", col.compare("らゝ", "らら") < 0);
        test.ok("りゝ < りり", col.compare("りゝ", "りり") < 0);
        test.ok("るゝ < るる", col.compare("るゝ", "るる") < 0);
        test.ok("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
        test.ok("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);
    
        test.ok("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
        test.ok("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
        test.ok("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
        test.ok("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
        test.ok("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
        test.ok("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
        test.ok("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
        test.ok("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
        test.ok("をゝ < をを", col.compare("をゝ", "をを") < 0);
        test.ok("をゞ < をを", col.compare("をゞ", "をを") < 0);
    
        test.ok("んゝ < んん", col.compare("んゝ", "んん") < 0);
        test.done();
    },
    
    testJSCollatorHiraganaIterationMarksSec_ja: function(test) {
        test.expect(139);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
        test.ok("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
        test.ok("いゝ = いい", col.compare("いゝ", "いい") === 0);
        test.ok("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
        test.ok("うゝ = うう", col.compare("うゝ", "うう") === 0);
        test.ok("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
        test.ok("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
        test.ok("うゞ = うゔ", col.compare("うゞ", "うゔ") === 0);
        test.ok("ぅゞ = ぅゔ", col.compare("ぅゞ", "ぅゔ") === 0);
        test.ok("ゔゞ = ゔゔ", col.compare("ゔゞ", "ゔゔ") === 0);
        test.ok("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
        test.ok("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
        test.ok("おゝ = おお", col.compare("おゝ", "おお") === 0);
        test.ok("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);
    
        test.ok("かゝ = かか", col.compare("かゝ", "かか") === 0);
        test.ok("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
        test.ok("がゝ = がか", col.compare("がゝ", "がか") === 0);
        test.ok("きゝ = きき", col.compare("きゝ", "きき") === 0);
        test.ok("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
        test.ok("きゞ = きぎ", col.compare("きゞ", "きぎ") === 0);
        test.ok("ぎゞ = ぎぎ", col.compare("ぎゞ", "ぎぎ") === 0);
        test.ok("くゝ = くく", col.compare("くゝ", "くく") === 0);
        test.ok("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
        test.ok("くゞ = くぐ", col.compare("くゞ", "くぐ") === 0);
        test.ok("ぐゞ = ぐぐ", col.compare("ぐゞ", "ぐぐ") === 0);
        test.ok("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
        test.ok("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
        test.ok("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
        test.ok("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
        test.ok("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
        test.ok("こゞ = こご", col.compare("こゞ", "こご") === 0);
        test.ok("ごゞ = ごご", col.compare("ごゞ", "ごご") === 0);
    
        test.ok("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
        test.ok("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
        test.ok("さゞ = さざ", col.compare("さゞ", "さざ") === 0);
        test.ok("ざゞ = ざざ", col.compare("ざゞ", "ざざ") === 0);
        test.ok("しゝ = しし", col.compare("しゝ", "しし") === 0);
        test.ok("じゝ = じし", col.compare("じゝ", "じし") === 0);
        test.ok("しゞ = しじ", col.compare("しゞ", "しじ") === 0);
        test.ok("じゞ = じじ", col.compare("じゞ", "じじ") === 0);
        test.ok("すゝ = すす", col.compare("すゝ", "すす") === 0);
        test.ok("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
        test.ok("すゞ = すず", col.compare("すゞ", "すず") === 0);
        test.ok("ずゞ = ずず", col.compare("ずゞ", "ずず") === 0);
        test.ok("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
        test.ok("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
        test.ok("せゞ = せぜ", col.compare("せゞ", "せぜ") === 0);
        test.ok("ぜゞ = ぜぜ", col.compare("ぜゞ", "ぜぜ") === 0);
        test.ok("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
        test.ok("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
        test.ok("そゞ = そぞ", col.compare("そゞ", "そぞ") === 0);
        test.ok("ぞゞ = ぞぞ", col.compare("ぞゞ", "ぞぞ") === 0);
    
        test.ok("たゝ = たた", col.compare("たゝ", "たた") === 0);
        test.ok("だゝ = だた", col.compare("だゝ", "だた") === 0);
        test.ok("たゞ = ただ", col.compare("たゞ", "ただ") === 0);
        test.ok("だゞ = だだ", col.compare("だゞ", "だだ") === 0);
        test.ok("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
        test.ok("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
        test.ok("ちゞ = ちぢ", col.compare("ちゞ", "ちぢ") === 0);
        test.ok("ぢゞ = ぢぢ", col.compare("ぢゞ", "ぢぢ") === 0);
        test.ok("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
        test.ok("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
        test.ok("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
        test.ok("つゞ = つづ", col.compare("つゞ", "つづ") === 0);
        test.ok("づゞ = づづ", col.compare("づゞ", "づづ") === 0);
        test.ok("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
        test.ok("っゞ = っづ", col.compare("っゞ", "っづ") === 0);
        test.ok("つゞ = つづ", col.compare("つゞ", "つづ") === 0);
        test.ok("てゝ = てて", col.compare("てゝ", "てて") === 0);
        test.ok("でゝ = でて", col.compare("でゝ", "でて") === 0);
        test.ok("てゞ = てで", col.compare("てゞ", "てで") === 0);
        test.ok("でゞ = でで", col.compare("でゞ", "でで") === 0);
        test.ok("とゝ = とと", col.compare("とゝ", "とと") === 0);
        test.ok("どゝ = どと", col.compare("どゝ", "どと") === 0);
        test.ok("とゞ = とど", col.compare("とゞ", "とど") === 0);
        test.ok("どゞ = どど", col.compare("どゞ", "どど") === 0);
    
        test.ok("なゝ = なな", col.compare("なゝ", "なな") === 0);
        test.ok("にゝ = にに", col.compare("にゝ", "にに") === 0);
        test.ok("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
        test.ok("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
        test.ok("のゝ = のの", col.compare("のゝ", "のの") === 0);
    
        test.ok("はゝ = はは", col.compare("はゝ", "はは") === 0);
        test.ok("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
        test.ok("はゞ = はば", col.compare("はゞ", "はば") === 0);
        test.ok("ばゞ = ばば", col.compare("ばゞ", "ばば") === 0);
        test.ok("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
        test.ok("ぱゞ = ぱば", col.compare("ぱゝ", "ぱは") === 0);
        test.ok("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
        test.ok("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
        test.ok("ひゞ = ひび", col.compare("ひゞ", "ひび") === 0);
        test.ok("びゞ = びび", col.compare("びゞ", "びび") === 0);
        test.ok("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
        test.ok("ぴゞ = ぴび", col.compare("ぴゞ", "ぴび") === 0);
        test.ok("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
        test.ok("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
        test.ok("ふゞ = ふぶ", col.compare("ふゞ", "ふぶ") === 0);
        test.ok("ぶゞ = ぶぶ", col.compare("ぶゞ", "ぶぶ") === 0);
        test.ok("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
        test.ok("ぷゞ = ぷぶ", col.compare("ぷゞ", "ぷぶ") === 0);
        test.ok("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
        test.ok("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
        test.ok("へゞ = へべ", col.compare("へゞ", "へべ") === 0);
        test.ok("べゞ = べべ", col.compare("べゞ", "べべ") === 0);
        test.ok("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
        test.ok("ぺゞ = ぺべ", col.compare("ぺゞ", "ぺべ") === 0);
        test.ok("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
        test.ok("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
        test.ok("ほゞ = ほぼ", col.compare("ほゞ", "ほぼ") === 0);
        test.ok("ぼゞ = ぼぼ", col.compare("ぼゞ", "ぼぼ") === 0);
        test.ok("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
        test.ok("ぽゞ = ぽぼ", col.compare("ぽゞ", "ぽぼ") === 0);
    
        test.ok("まゝ = まま", col.compare("まゝ", "まま") === 0);
        test.ok("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
        test.ok("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
        test.ok("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
        test.ok("もゝ = もも", col.compare("もゝ", "もも") === 0);
    
        test.ok("やゝ = やや", col.compare("やゝ", "やや") === 0);
        test.ok("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
        test.ok("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
        test.ok("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
        test.ok("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
        test.ok("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);
    
        test.ok("らゝ = らら", col.compare("らゝ", "らら") === 0);
        test.ok("りゝ = りり", col.compare("りゝ", "りり") === 0);
        test.ok("るゝ = るる", col.compare("るゝ", "るる") === 0);
        test.ok("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
        test.ok("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);
    
        test.ok("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
        test.ok("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
        test.ok("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
        test.ok("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
        test.ok("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
        test.ok("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
        test.ok("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
        test.ok("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
        test.ok("をゝ = をを", col.compare("をゝ", "をを") === 0);
        test.ok("をゞ = をを", col.compare("をゞ", "をを") === 0);
    
        test.ok("んゝ = んん", col.compare("んゝ", "んん") === 0);
        test.done();
    },
    
    testJSCollatorHiraganaIterationMarksPri_ja: function(test) {
        test.expect(139);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        
        test.ok("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
        test.ok("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
        test.ok("いゝ = いい", col.compare("いゝ", "いい") === 0);
        test.ok("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
        test.ok("うゝ = うう", col.compare("うゝ", "うう") === 0);
        test.ok("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
        test.ok("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
        test.ok("うゞ = うゔ", col.compare("うゞ", "うゔ") === 0);
        test.ok("ぅゞ = ぅゔ", col.compare("ぅゞ", "ぅゔ") === 0);
        test.ok("ゔゞ = ゔゔ", col.compare("ゔゞ", "ゔゔ") === 0);
        test.ok("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
        test.ok("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
        test.ok("おゝ = おお", col.compare("おゝ", "おお") === 0);
        test.ok("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);
    
        test.ok("かゝ = かか", col.compare("かゝ", "かか") === 0);
        test.ok("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
        test.ok("がゝ = がか", col.compare("がゝ", "がか") === 0);
        test.ok("きゝ = きき", col.compare("きゝ", "きき") === 0);
        test.ok("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
        test.ok("きゞ = きぎ", col.compare("きゞ", "きぎ") === 0);
        test.ok("ぎゞ = ぎぎ", col.compare("ぎゞ", "ぎぎ") === 0);
        test.ok("くゝ = くく", col.compare("くゝ", "くく") === 0);
        test.ok("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
        test.ok("くゞ = くぐ", col.compare("くゞ", "くぐ") === 0);
        test.ok("ぐゞ = ぐぐ", col.compare("ぐゞ", "ぐぐ") === 0);
        test.ok("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
        test.ok("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
        test.ok("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
        test.ok("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
        test.ok("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
        test.ok("こゞ = こご", col.compare("こゞ", "こご") === 0);
        test.ok("ごゞ = ごご", col.compare("ごゞ", "ごご") === 0);
    
        test.ok("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
        test.ok("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
        test.ok("さゞ = さざ", col.compare("さゞ", "さざ") === 0);
        test.ok("ざゞ = ざざ", col.compare("ざゞ", "ざざ") === 0);
        test.ok("しゝ = しし", col.compare("しゝ", "しし") === 0);
        test.ok("じゝ = じし", col.compare("じゝ", "じし") === 0);
        test.ok("しゞ = しじ", col.compare("しゞ", "しじ") === 0);
        test.ok("じゞ = じじ", col.compare("じゞ", "じじ") === 0);
        test.ok("すゝ = すす", col.compare("すゝ", "すす") === 0);
        test.ok("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
        test.ok("すゞ = すず", col.compare("すゞ", "すず") === 0);
        test.ok("ずゞ = ずず", col.compare("ずゞ", "ずず") === 0);
        test.ok("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
        test.ok("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
        test.ok("せゞ = せぜ", col.compare("せゞ", "せぜ") === 0);
        test.ok("ぜゞ = ぜぜ", col.compare("ぜゞ", "ぜぜ") === 0);
        test.ok("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
        test.ok("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
        test.ok("そゞ = そぞ", col.compare("そゞ", "そぞ") === 0);
        test.ok("ぞゞ = ぞぞ", col.compare("ぞゞ", "ぞぞ") === 0);
    
        test.ok("たゝ = たた", col.compare("たゝ", "たた") === 0);
        test.ok("だゝ = だた", col.compare("だゝ", "だた") === 0);
        test.ok("たゞ = ただ", col.compare("たゞ", "ただ") === 0);
        test.ok("だゞ = だだ", col.compare("だゞ", "だだ") === 0);
        test.ok("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
        test.ok("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
        test.ok("ちゞ = ちぢ", col.compare("ちゞ", "ちぢ") === 0);
        test.ok("ぢゞ = ぢぢ", col.compare("ぢゞ", "ぢぢ") === 0);
        test.ok("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
        test.ok("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
        test.ok("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
        test.ok("つゞ = つづ", col.compare("つゞ", "つづ") === 0);
        test.ok("づゞ = づづ", col.compare("づゞ", "づづ") === 0);
        test.ok("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
        test.ok("っゞ = っづ", col.compare("っゞ", "っづ") === 0);
        test.ok("つゞ = つづ", col.compare("つゞ", "つづ") === 0);
        test.ok("てゝ = てて", col.compare("てゝ", "てて") === 0);
        test.ok("でゝ = でて", col.compare("でゝ", "でて") === 0);
        test.ok("てゞ = てで", col.compare("てゞ", "てで") === 0);
        test.ok("でゞ = でで", col.compare("でゞ", "でで") === 0);
        test.ok("とゝ = とと", col.compare("とゝ", "とと") === 0);
        test.ok("どゝ = どと", col.compare("どゝ", "どと") === 0);
        test.ok("とゞ = とど", col.compare("とゞ", "とど") === 0);
        test.ok("どゞ = どど", col.compare("どゞ", "どど") === 0);
    
        test.ok("なゝ = なな", col.compare("なゝ", "なな") === 0);
        test.ok("にゝ = にに", col.compare("にゝ", "にに") === 0);
        test.ok("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
        test.ok("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
        test.ok("のゝ = のの", col.compare("のゝ", "のの") === 0);
    
        test.ok("はゝ = はは", col.compare("はゝ", "はは") === 0);
        test.ok("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
        test.ok("はゞ = はば", col.compare("はゞ", "はば") === 0);
        test.ok("ばゞ = ばば", col.compare("ばゞ", "ばば") === 0);
        test.ok("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
        test.ok("ぱゞ = ぱば", col.compare("ぱゝ", "ぱは") === 0);
        test.ok("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
        test.ok("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
        test.ok("ひゞ = ひび", col.compare("ひゞ", "ひび") === 0);
        test.ok("びゞ = びび", col.compare("びゞ", "びび") === 0);
        test.ok("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
        test.ok("ぴゞ = ぴび", col.compare("ぴゞ", "ぴび") === 0);
        test.ok("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
        test.ok("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
        test.ok("ふゞ = ふぶ", col.compare("ふゞ", "ふぶ") === 0);
        test.ok("ぶゞ = ぶぶ", col.compare("ぶゞ", "ぶぶ") === 0);
        test.ok("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
        test.ok("ぷゞ = ぷぶ", col.compare("ぷゞ", "ぷぶ") === 0);
        test.ok("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
        test.ok("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
        test.ok("へゞ = へべ", col.compare("へゞ", "へべ") === 0);
        test.ok("べゞ = べべ", col.compare("べゞ", "べべ") === 0);
        test.ok("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
        test.ok("ぺゞ = ぺべ", col.compare("ぺゞ", "ぺべ") === 0);
        test.ok("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
        test.ok("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
        test.ok("ほゞ = ほぼ", col.compare("ほゞ", "ほぼ") === 0);
        test.ok("ぼゞ = ぼぼ", col.compare("ぼゞ", "ぼぼ") === 0);
        test.ok("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
        test.ok("ぽゞ = ぽぼ", col.compare("ぽゞ", "ぽぼ") === 0);
    
        test.ok("まゝ = まま", col.compare("まゝ", "まま") === 0);
        test.ok("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
        test.ok("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
        test.ok("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
        test.ok("もゝ = もも", col.compare("もゝ", "もも") === 0);
    
        test.ok("やゝ = やや", col.compare("やゝ", "やや") === 0);
        test.ok("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
        test.ok("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
        test.ok("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
        test.ok("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
        test.ok("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);
    
        test.ok("らゝ = らら", col.compare("らゝ", "らら") === 0);
        test.ok("りゝ = りり", col.compare("りゝ", "りり") === 0);
        test.ok("るゝ = るる", col.compare("るゝ", "るる") === 0);
        test.ok("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
        test.ok("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);
    
        test.ok("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
        test.ok("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
        test.ok("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
        test.ok("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
        test.ok("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
        test.ok("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
        test.ok("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
        test.ok("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
        test.ok("をゝ = をを", col.compare("をゝ", "をを") === 0);
        test.ok("をゞ = をを", col.compare("をゞ", "をを") === 0);
    
        test.ok("んゝ = んん", col.compare("んゝ", "んん") === 0);
        test.done();
    },
    
    testJSCollatorKatakanaQuat_ja: function(test) {
        test.expect(98);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        test.ok("ガ < ガ", col.compare("ガ", "ガ") < 0);
        test.ok("ガ < キ", col.compare("ガ", "キ") < 0);
        test.ok("キ < ギ", col.compare("キ", "ギ") < 0);
        test.ok("ギ < ギ", col.compare("ギ", "ギ") < 0);
        test.ok("ギ < ク", col.compare("ギ", "ク") < 0);
        test.ok("ク < グ", col.compare("ク", "グ") < 0);
        test.ok("グ < グ", col.compare("グ", "グ") < 0);
        test.ok("グ < ケ", col.compare("グ", "ケ") < 0);
        test.ok("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
        test.ok("ゲ < ゲ", col.compare("ゲ", "ゲ") < 0);
        test.ok("ゲ < コ", col.compare("ゲ", "コ") < 0);
        test.ok("コ < ゴ", col.compare("コ", "ゴ") < 0);
        test.ok("ゴ < ゴ", col.compare("ゴ", "ゴ") < 0);
        test.ok("ゴ < サ", col.compare("ゴ", "サ") < 0);
        test.ok("サ < ザ", col.compare("サ", "ザ") < 0);
        test.ok("ザ < ザ", col.compare("ザ", "ザ") < 0);
        test.ok("ザ < シ", col.compare("ザ", "シ") < 0);
        test.ok("シ < ジ", col.compare("シ", "ジ") < 0);
        test.ok("ジ < ジ", col.compare("ジ", "ジ") < 0);
        test.ok("ジ < ス", col.compare("ジ", "ス") < 0);
        test.ok("ス < ズ", col.compare("ス", "ズ") < 0);
        test.ok("ズ < ズ", col.compare("ズ", "ズ") < 0);
        test.ok("ズ < セ", col.compare("ズ", "セ") < 0);
        test.ok("セ < ゼ", col.compare("セ", "ゼ") < 0);
        test.ok("ゼ < ゼ", col.compare("ゼ", "ゼ") < 0);
        test.ok("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
        test.ok("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
        test.ok("ゾ < ゾ", col.compare("ゾ", "ゾ") < 0);
        test.ok("ゾ < タ", col.compare("ゾ", "タ") < 0);
        test.ok("タ < ダ", col.compare("タ", "ダ") < 0);
        test.ok("ダ < ダ", col.compare("ダ", "ダ") < 0);
        test.ok("ダ < チ", col.compare("ダ", "チ") < 0);
        test.ok("チ < ヂ", col.compare("チ", "ヂ") < 0);
        test.ok("ヂ < ヂ", col.compare("ヂ", "ヂ") < 0);
        test.ok("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
        test.ok("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
        test.ok("ヅ < ヅ", col.compare("ヅ", "ヅ") < 0);
        test.ok("ヅ < テ", col.compare("ヅ", "テ") < 0);
        test.ok("テ < デ", col.compare("テ", "デ") < 0);
        test.ok("デ < デ", col.compare("デ", "デ") < 0);
        test.ok("デ < ト", col.compare("デ", "ト") < 0);
        test.ok("ト < ド", col.compare("ト", "ド") < 0);
        test.ok("ド < ド", col.compare("ド", "ド") < 0);
        test.ok("ド < ナ", col.compare("ド", "ナ") < 0);
        test.ok("ナ < ニ", col.compare("ナ", "ニ") < 0);
        test.ok("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
        test.ok("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
        test.ok("ネ < ノ", col.compare("ネ", "ノ") < 0);
        test.ok("ノ < ハ", col.compare("ノ", "ハ") < 0);
        test.ok("ハ < バ", col.compare("ハ", "バ") < 0);
        test.ok("バ < バ", col.compare("バ", "バ") < 0);
        test.ok("バ < パ", col.compare("バ", "パ") < 0);
        test.ok("パ < パ", col.compare("パ", "パ") < 0);
        test.ok("パ < ヒ", col.compare("パ", "ヒ") < 0);
        test.ok("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
        test.ok("ビ < ビ", col.compare("ビ", "ビ") < 0);
        test.ok("ビ < ピ", col.compare("ビ", "ピ") < 0);
        test.ok("ピ < ピ", col.compare("ピ", "ピ") < 0);
        test.ok("ピ < フ", col.compare("ピ", "フ") < 0);
        test.ok("フ < ブ", col.compare("フ", "ブ") < 0);
        test.ok("ブ < ブ", col.compare("ブ", "ブ") < 0);
        test.ok("ブ < プ", col.compare("ブ", "プ") < 0);
        test.ok("プ < プ", col.compare("プ", "プ") < 0);
        test.ok("プ < ヘ", col.compare("プ", "ヘ") < 0);
        test.ok("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
        test.ok("ベ < ベ", col.compare("ベ", "ベ") < 0);
        test.ok("ベ < ペ", col.compare("ベ", "ペ") < 0);
        test.ok("ペ < ペ", col.compare("ペ", "ペ") < 0);
        test.ok("ペ < ホ", col.compare("ペ", "ホ") < 0);
        test.ok("ホ < ボ", col.compare("ホ", "ボ") < 0);
        test.ok("ボ < ボ", col.compare("ボ", "ボ") < 0);
        test.ok("ボ < ポ", col.compare("ボ", "ポ") < 0);
        test.ok("ポ < ポ", col.compare("ポ", "ポ") < 0);
        test.ok("ポ < マ", col.compare("ポ", "マ") < 0);
        test.ok("マ < ミ", col.compare("マ", "ミ") < 0);
        test.ok("ミ < ム", col.compare("ミ", "ム") < 0);
        test.ok("ム < メ", col.compare("ム", "メ") < 0);
        test.ok("メ < モ", col.compare("メ", "モ") < 0);
        test.ok("モ < ヤ", col.compare("モ", "ヤ") < 0);
        test.ok("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
        test.ok("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
        test.ok("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
        test.ok("ラ < リ", col.compare("ラ", "リ") < 0);
        test.ok("リ < ル", col.compare("リ", "ル") < 0);
        test.ok("ル < レ", col.compare("ル", "レ") < 0);
        test.ok("レ < ロ", col.compare("レ", "ロ") < 0);
        test.ok("ロ < ワ", col.compare("ロ", "ワ") < 0);
        test.ok("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
        test.ok("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
        test.ok("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
        test.ok("ヲ < ン", col.compare("ヲ", "ン") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaTer_ja: function(test) {
        test.expect(98);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        test.ok("ガ = ガ", col.compare("ガ", "ガ") === 0);
        test.ok("ガ < キ", col.compare("ガ", "キ") < 0);
        test.ok("キ < ギ", col.compare("キ", "ギ") < 0);
        test.ok("ギ = ギ", col.compare("ギ", "ギ") === 0);
        test.ok("ギ < ク", col.compare("ギ", "ク") < 0);
        test.ok("ク < グ", col.compare("ク", "グ") < 0);
        test.ok("グ = グ", col.compare("グ", "グ") === 0);
        test.ok("グ < ケ", col.compare("グ", "ケ") < 0);
        test.ok("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
        test.ok("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
        test.ok("ゲ < コ", col.compare("ゲ", "コ") < 0);
        test.ok("コ < ゴ", col.compare("コ", "ゴ") < 0);
        test.ok("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
        test.ok("ゴ < サ", col.compare("ゴ", "サ") < 0);
        test.ok("サ < ザ", col.compare("サ", "ザ") < 0);
        test.ok("ザ = ザ", col.compare("ザ", "ザ") === 0);
        test.ok("ザ < シ", col.compare("ザ", "シ") < 0);
        test.ok("シ < ジ", col.compare("シ", "ジ") < 0);
        test.ok("ジ = ジ", col.compare("ジ", "ジ") === 0);
        test.ok("ジ < ス", col.compare("ジ", "ス") < 0);
        test.ok("ス < ズ", col.compare("ス", "ズ") < 0);
        test.ok("ズ = ズ", col.compare("ズ", "ズ") === 0);
        test.ok("ズ < セ", col.compare("ズ", "セ") < 0);
        test.ok("セ < ゼ", col.compare("セ", "ゼ") < 0);
        test.ok("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
        test.ok("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
        test.ok("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
        test.ok("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
        test.ok("ゾ < タ", col.compare("ゾ", "タ") < 0);
        test.ok("タ < ダ", col.compare("タ", "ダ") < 0);
        test.ok("ダ = ダ", col.compare("ダ", "ダ") === 0);
        test.ok("ダ < チ", col.compare("ダ", "チ") < 0);
        test.ok("チ < ヂ", col.compare("チ", "ヂ") < 0);
        test.ok("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
        test.ok("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
        test.ok("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
        test.ok("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
        test.ok("ヅ < テ", col.compare("ヅ", "テ") < 0);
        test.ok("テ < デ", col.compare("テ", "デ") < 0);
        test.ok("デ = デ", col.compare("デ", "デ") === 0);
        test.ok("デ < ト", col.compare("デ", "ト") < 0);
        test.ok("ト < ド", col.compare("ト", "ド") < 0);
        test.ok("ド = ド", col.compare("ド", "ド") === 0);
        test.ok("ド < ナ", col.compare("ド", "ナ") < 0);
        test.ok("ナ < ニ", col.compare("ナ", "ニ") < 0);
        test.ok("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
        test.ok("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
        test.ok("ネ < ノ", col.compare("ネ", "ノ") < 0);
        test.ok("ノ < ハ", col.compare("ノ", "ハ") < 0);
        test.ok("ハ < バ", col.compare("ハ", "バ") < 0);
        test.ok("バ = バ", col.compare("バ", "バ") === 0);
        test.ok("バ < パ", col.compare("バ", "パ") < 0);
        test.ok("パ = パ", col.compare("パ", "パ") === 0);
        test.ok("パ < ヒ", col.compare("パ", "ヒ") < 0);
        test.ok("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
        test.ok("ビ = ビ", col.compare("ビ", "ビ") === 0);
        test.ok("ビ < ピ", col.compare("ビ", "ピ") < 0);
        test.ok("ピ = ピ", col.compare("ピ", "ピ") === 0);
        test.ok("ピ < フ", col.compare("ピ", "フ") < 0);
        test.ok("フ < ブ", col.compare("フ", "ブ") < 0);
        test.ok("ブ = ブ", col.compare("ブ", "ブ") === 0);
        test.ok("ブ < プ", col.compare("ブ", "プ") < 0);
        test.ok("プ = プ", col.compare("プ", "プ") === 0);
        test.ok("プ < ヘ", col.compare("プ", "ヘ") < 0);
        test.ok("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
        test.ok("ベ = ベ", col.compare("ベ", "ベ") === 0);
        test.ok("ベ < ペ", col.compare("ベ", "ペ") < 0);
        test.ok("ペ = ペ", col.compare("ペ", "ペ") === 0);
        test.ok("ペ < ホ", col.compare("ペ", "ホ") < 0);
        test.ok("ホ < ボ", col.compare("ホ", "ボ") < 0);
        test.ok("ボ = ボ", col.compare("ボ", "ボ") === 0);
        test.ok("ボ < ポ", col.compare("ボ", "ポ") < 0);
        test.ok("ポ = ポ", col.compare("ポ", "ポ") === 0);
        test.ok("ポ < マ", col.compare("ポ", "マ") < 0);
        test.ok("マ < ミ", col.compare("マ", "ミ") < 0);
        test.ok("ミ < ム", col.compare("ミ", "ム") < 0);
        test.ok("ム < メ", col.compare("ム", "メ") < 0);
        test.ok("メ < モ", col.compare("メ", "モ") < 0);
        test.ok("モ < ヤ", col.compare("モ", "ヤ") < 0);
        test.ok("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
        test.ok("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
        test.ok("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
        test.ok("ラ < リ", col.compare("ラ", "リ") < 0);
        test.ok("リ < ル", col.compare("リ", "ル") < 0);
        test.ok("ル < レ", col.compare("ル", "レ") < 0);
        test.ok("レ < ロ", col.compare("レ", "ロ") < 0);
        test.ok("ロ < ワ", col.compare("ロ", "ワ") < 0);
        test.ok("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
        test.ok("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
        test.ok("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
        test.ok("ヲ < ン", col.compare("ヲ", "ン") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaSec_ja: function(test) {
        test.expect(98);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        test.ok("ガ = ガ", col.compare("ガ", "ガ") === 0);
        test.ok("ガ < キ", col.compare("ガ", "キ") < 0);
        test.ok("キ < ギ", col.compare("キ", "ギ") < 0);
        test.ok("ギ = ギ", col.compare("ギ", "ギ") === 0);
        test.ok("ギ < ク", col.compare("ギ", "ク") < 0);
        test.ok("ク < グ", col.compare("ク", "グ") < 0);
        test.ok("グ = グ", col.compare("グ", "グ") === 0);
        test.ok("グ < ケ", col.compare("グ", "ケ") < 0);
        test.ok("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
        test.ok("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
        test.ok("ゲ < コ", col.compare("ゲ", "コ") < 0);
        test.ok("コ < ゴ", col.compare("コ", "ゴ") < 0);
        test.ok("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
        test.ok("ゴ < サ", col.compare("ゴ", "サ") < 0);
        test.ok("サ < ザ", col.compare("サ", "ザ") < 0);
        test.ok("ザ = ザ", col.compare("ザ", "ザ") === 0);
        test.ok("ザ < シ", col.compare("ザ", "シ") < 0);
        test.ok("シ < ジ", col.compare("シ", "ジ") < 0);
        test.ok("ジ = ジ", col.compare("ジ", "ジ") === 0);
        test.ok("ジ < ス", col.compare("ジ", "ス") < 0);
        test.ok("ス < ズ", col.compare("ス", "ズ") < 0);
        test.ok("ズ = ズ", col.compare("ズ", "ズ") === 0);
        test.ok("ズ < セ", col.compare("ズ", "セ") < 0);
        test.ok("セ < ゼ", col.compare("セ", "ゼ") < 0);
        test.ok("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
        test.ok("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
        test.ok("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
        test.ok("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
        test.ok("ゾ < タ", col.compare("ゾ", "タ") < 0);
        test.ok("タ < ダ", col.compare("タ", "ダ") < 0);
        test.ok("ダ = ダ", col.compare("ダ", "ダ") === 0);
        test.ok("ダ < チ", col.compare("ダ", "チ") < 0);
        test.ok("チ < ヂ", col.compare("チ", "ヂ") < 0);
        test.ok("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
        test.ok("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
        test.ok("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
        test.ok("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
        test.ok("ヅ < テ", col.compare("ヅ", "テ") < 0);
        test.ok("テ < デ", col.compare("テ", "デ") < 0);
        test.ok("デ = デ", col.compare("デ", "デ") === 0);
        test.ok("デ < ト", col.compare("デ", "ト") < 0);
        test.ok("ト < ド", col.compare("ト", "ド") < 0);
        test.ok("ド = ド", col.compare("ド", "ド") === 0);
        test.ok("ド < ナ", col.compare("ド", "ナ") < 0);
        test.ok("ナ < ニ", col.compare("ナ", "ニ") < 0);
        test.ok("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
        test.ok("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
        test.ok("ネ < ノ", col.compare("ネ", "ノ") < 0);
        test.ok("ノ < ハ", col.compare("ノ", "ハ") < 0);
        test.ok("ハ < バ", col.compare("ハ", "バ") < 0);
        test.ok("バ = バ", col.compare("バ", "バ") === 0);
        test.ok("バ < パ", col.compare("バ", "パ") < 0);
        test.ok("パ = パ", col.compare("パ", "パ") === 0);
        test.ok("パ < ヒ", col.compare("パ", "ヒ") < 0);
        test.ok("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
        test.ok("ビ = ビ", col.compare("ビ", "ビ") === 0);
        test.ok("ビ < ピ", col.compare("ビ", "ピ") < 0);
        test.ok("ピ = ピ", col.compare("ピ", "ピ") === 0);
        test.ok("ピ < フ", col.compare("ピ", "フ") < 0);
        test.ok("フ < ブ", col.compare("フ", "ブ") < 0);
        test.ok("ブ = ブ", col.compare("ブ", "ブ") === 0);
        test.ok("ブ < プ", col.compare("ブ", "プ") < 0);
        test.ok("プ = プ", col.compare("プ", "プ") === 0);
        test.ok("プ < ヘ", col.compare("プ", "ヘ") < 0);
        test.ok("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
        test.ok("ベ = ベ", col.compare("ベ", "ベ") === 0);
        test.ok("ベ < ペ", col.compare("ベ", "ペ") < 0);
        test.ok("ペ = ペ", col.compare("ペ", "ペ") === 0);
        test.ok("ペ < ホ", col.compare("ペ", "ホ") < 0);
        test.ok("ホ < ボ", col.compare("ホ", "ボ") < 0);
        test.ok("ボ = ボ", col.compare("ボ", "ボ") === 0);
        test.ok("ボ < ポ", col.compare("ボ", "ポ") < 0);
        test.ok("ポ = ポ", col.compare("ポ", "ポ") === 0);
        test.ok("ポ < マ", col.compare("ポ", "マ") < 0);
        test.ok("マ < ミ", col.compare("マ", "ミ") < 0);
        test.ok("ミ < ム", col.compare("ミ", "ム") < 0);
        test.ok("ム < メ", col.compare("ム", "メ") < 0);
        test.ok("メ < モ", col.compare("メ", "モ") < 0);
        test.ok("モ < ヤ", col.compare("モ", "ヤ") < 0);
        test.ok("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
        test.ok("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
        test.ok("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
        test.ok("ラ < リ", col.compare("ラ", "リ") < 0);
        test.ok("リ < ル", col.compare("リ", "ル") < 0);
        test.ok("ル < レ", col.compare("ル", "レ") < 0);
        test.ok("レ < ロ", col.compare("レ", "ロ") < 0);
        test.ok("ロ < ワ", col.compare("ロ", "ワ") < 0);
        test.ok("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
        test.ok("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
        test.ok("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
        test.ok("ヲ < ン", col.compare("ヲ", "ン") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaPri_ja: function(test) {
        test.expect(98);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ = ガ", col.compare("カ", "ガ") === 0);
        test.ok("ガ = ガ", col.compare("ガ", "ガ") === 0);
        test.ok("ガ < キ", col.compare("ガ", "キ") < 0);
        test.ok("キ = ギ", col.compare("キ", "ギ") === 0);
        test.ok("ギ = ギ", col.compare("ギ", "ギ") === 0);
        test.ok("ギ < ク", col.compare("ギ", "ク") < 0);
        test.ok("ク = グ", col.compare("ク", "グ") === 0);
        test.ok("グ = グ", col.compare("グ", "グ") === 0);
        test.ok("グ < ケ", col.compare("グ", "ケ") < 0);
        test.ok("ケ = ゲ", col.compare("ケ", "ゲ") === 0);
        test.ok("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
        test.ok("ゲ < コ", col.compare("ゲ", "コ") < 0);
        test.ok("コ = ゴ", col.compare("コ", "ゴ") === 0);
        test.ok("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
        test.ok("ゴ < サ", col.compare("ゴ", "サ") < 0);
        test.ok("サ = ザ", col.compare("サ", "ザ") === 0);
        test.ok("ザ = ザ", col.compare("ザ", "ザ") === 0);
        test.ok("ザ < シ", col.compare("ザ", "シ") < 0);
        test.ok("シ = ジ", col.compare("シ", "ジ") === 0);
        test.ok("ジ = ジ", col.compare("ジ", "ジ") === 0);
        test.ok("ジ < ス", col.compare("ジ", "ス") < 0);
        test.ok("ス = ズ", col.compare("ス", "ズ") === 0);
        test.ok("ズ = ズ", col.compare("ズ", "ズ") === 0);
        test.ok("ズ < セ", col.compare("ズ", "セ") < 0);
        test.ok("セ = ゼ", col.compare("セ", "ゼ") === 0);
        test.ok("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
        test.ok("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
        test.ok("ソ = ゾ", col.compare("ソ", "ゾ") === 0);
        test.ok("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
        test.ok("ゾ < タ", col.compare("ゾ", "タ") < 0);
        test.ok("タ = ダ", col.compare("タ", "ダ") === 0);
        test.ok("ダ = ダ", col.compare("ダ", "ダ") === 0);
        test.ok("ダ < チ", col.compare("ダ", "チ") < 0);
        test.ok("チ = ヂ", col.compare("チ", "ヂ") === 0);
        test.ok("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
        test.ok("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
        test.ok("ツ = ヅ", col.compare("ツ", "ヅ") === 0);
        test.ok("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
        test.ok("ヅ < テ", col.compare("ヅ", "テ") < 0);
        test.ok("テ = デ", col.compare("テ", "デ") === 0);
        test.ok("デ = デ", col.compare("デ", "デ") === 0);
        test.ok("デ < ト", col.compare("デ", "ト") < 0);
        test.ok("ト = ド", col.compare("ト", "ド") === 0);
        test.ok("ド = ド", col.compare("ド", "ド") === 0);
        test.ok("ド < ナ", col.compare("ド", "ナ") < 0);
        test.ok("ナ < ニ", col.compare("ナ", "ニ") < 0);
        test.ok("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
        test.ok("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
        test.ok("ネ < ノ", col.compare("ネ", "ノ") < 0);
        test.ok("ノ < ハ", col.compare("ノ", "ハ") < 0);
        test.ok("ハ = バ", col.compare("ハ", "バ") === 0);
        test.ok("バ = バ", col.compare("バ", "バ") === 0);
        test.ok("バ = パ", col.compare("バ", "パ") === 0);
        test.ok("パ = パ", col.compare("パ", "パ") === 0);
        test.ok("パ < ヒ", col.compare("パ", "ヒ") < 0);
        test.ok("ヒ = ビ", col.compare("ヒ", "ビ") === 0);
        test.ok("ビ = ビ", col.compare("ビ", "ビ") === 0);
        test.ok("ビ = ピ", col.compare("ビ", "ピ") === 0);
        test.ok("ピ = ピ", col.compare("ピ", "ピ") === 0);
        test.ok("ピ < フ", col.compare("ピ", "フ") < 0);
        test.ok("フ = ブ", col.compare("フ", "ブ") === 0);
        test.ok("ブ = ブ", col.compare("ブ", "ブ") === 0);
        test.ok("ブ = プ", col.compare("ブ", "プ") === 0);
        test.ok("プ = プ", col.compare("プ", "プ") === 0);
        test.ok("プ < ヘ", col.compare("プ", "ヘ") < 0);
        test.ok("ヘ = ベ", col.compare("ヘ", "ベ") === 0);
        test.ok("ベ = ベ", col.compare("ベ", "ベ") === 0);
        test.ok("ベ = ペ", col.compare("ベ", "ペ") === 0);
        test.ok("ペ = ペ", col.compare("ペ", "ペ") === 0);
        test.ok("ペ < ホ", col.compare("ペ", "ホ") < 0);
        test.ok("ホ = ボ", col.compare("ホ", "ボ") === 0);
        test.ok("ボ = ボ", col.compare("ボ", "ボ") === 0);
        test.ok("ボ = ポ", col.compare("ボ", "ポ") === 0);
        test.ok("ポ = ポ", col.compare("ポ", "ポ") === 0);
        test.ok("ポ < マ", col.compare("ポ", "マ") < 0);
        test.ok("マ < ミ", col.compare("マ", "ミ") < 0);
        test.ok("ミ < ム", col.compare("ミ", "ム") < 0);
        test.ok("ム < メ", col.compare("ム", "メ") < 0);
        test.ok("メ < モ", col.compare("メ", "モ") < 0);
        test.ok("モ < ヤ", col.compare("モ", "ヤ") < 0);
        test.ok("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
        test.ok("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
        test.ok("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
        test.ok("ラ < リ", col.compare("ラ", "リ") < 0);
        test.ok("リ < ル", col.compare("リ", "ル") < 0);
        test.ok("ル < レ", col.compare("ル", "レ") < 0);
        test.ok("レ < ロ", col.compare("レ", "ロ") < 0);
        test.ok("ロ < ワ", col.compare("ロ", "ワ") < 0);
        test.ok("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
        test.ok("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
        test.ok("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
        test.ok("ヲ < ン", col.compare("ヲ", "ン") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaLengthMarksQuat_ja: function(test) {
        test.expect(189);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
        test.ok("ザー < ザア", col.compare("ザー", "ザア") < 0);
        test.ok("ター < タア", col.compare("ター", "タア") < 0);
        test.ok("ﾀー < ﾀア", col.compare("ﾀー", "ﾀア") < 0);
        test.ok("ダー < ダア", col.compare("ダー", "ダア") < 0);
        test.ok("ダー < ダア", col.compare("ダー", "ダア") < 0);
        test.ok("ナー < ナア", col.compare("ナー", "ナア") < 0);
        test.ok("ﾅー < ﾅア", col.compare("ﾅー", "ﾅア") < 0);
        test.ok("ハー < ハア", col.compare("ハー", "ハア") < 0);
        test.ok("ﾊー < ﾊア", col.compare("ﾊー", "ﾊア") < 0);
        test.ok("ㇵー < ㇵア", col.compare("ㇵー", "ㇵア") < 0);
        test.ok("バー < バア", col.compare("バー", "バア") < 0);
        test.ok("バー < バア", col.compare("パー", "パア") < 0);
        test.ok("パー < パア", col.compare("バー", "バア") < 0);
        test.ok("パー < パア", col.compare("パー", "パア") < 0);
        test.ok("マー < マア", col.compare("マー", "マア") < 0);
        test.ok("ﾏー < ﾏア", col.compare("ﾏー", "ﾏア") < 0);
        test.ok("ャー < ャア", col.compare("ャー", "ャア") < 0);
        test.ok("ｬー < ｬア", col.compare("ｬー", "ｬア") < 0);
        test.ok("ヤー < ヤア", col.compare("ヤー", "ヤア") < 0);
        test.ok("ﾔー < ﾔア", col.compare("ﾔー", "ﾔア") < 0);
        test.ok("ラー < ラア", col.compare("ラー", "ラア") < 0);
        test.ok("ﾗー < ﾗア", col.compare("ﾗー", "ﾗア") < 0);
        test.ok("ㇻー < ㇻア", col.compare("ㇻー", "ㇻア") < 0);
        test.ok("ヮー < ヮア", col.compare("ヮー", "ヮア") < 0);
        test.ok("ワー < ワア", col.compare("ワー", "ワア") < 0);
        test.ok("ﾜー < ﾜア", col.compare("ﾜー", "ﾜア") < 0);
        test.ok("ヵー < ヵア", col.compare("ヵー", "ヵア") < 0);
        test.ok("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
        test.ok("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
    
        test.ok("ィー < ィイ", col.compare("ィー", "ィイ") < 0);
        test.ok("ｨー < ｨイ", col.compare("ｨー", "ｨイ") < 0);
        test.ok("イー < イイ", col.compare("イー", "イイ") < 0);
        test.ok("ｲー < ｲイ", col.compare("ｲー", "ｲイ") < 0);
        test.ok("キー < キイ", col.compare("キー", "キイ") < 0);
        test.ok("ｷー < ｷイ", col.compare("ｷー", "ｷイ") < 0);
        test.ok("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
        test.ok("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
        test.ok("シー < シイ", col.compare("シー", "シイ") < 0);
        test.ok("ｼー < ｼイ", col.compare("ｼー", "ｼイ") < 0);
        test.ok("ㇱー < ㇱイ", col.compare("ㇱー", "ㇱイ") < 0);
        test.ok("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
        test.ok("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
        test.ok("チー < チイ", col.compare("チー", "チイ") < 0);
        test.ok("ﾁー < ﾁイ", col.compare("ﾁー", "ﾁイ") < 0);
        test.ok("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
        test.ok("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
        test.ok("ニー < ニイ", col.compare("ニー", "ニイ") < 0);
        test.ok("ﾆー < ﾆイ", col.compare("ﾆー", "ﾆイ") < 0);
        test.ok("ヒー < ヒイ", col.compare("ヒー", "ヒイ") < 0);
        test.ok("ﾋー < ﾋイ", col.compare("ﾋー", "ﾋイ") < 0);
        test.ok("ㇶー < ㇶイ", col.compare("ㇶー", "ㇶイ") < 0);
        test.ok("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
        test.ok("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
        test.ok("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
        test.ok("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
        test.ok("ミー < ミイ", col.compare("ミー", "ミイ") < 0);
        test.ok("ﾐー < ﾐイ", col.compare("ﾐー", "ﾐイ") < 0);
        test.ok("リー < リイ", col.compare("リー", "リイ") < 0);
        test.ok("ﾘー < ﾘイ", col.compare("ﾘー", "ﾘイ") < 0);
        test.ok("ㇼー < ㇼイ", col.compare("ㇼー", "ㇼイ") < 0);
        test.ok("ヰー < ヰイ", col.compare("ヰー", "ヰイ") < 0);
        test.ok("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
        test.ok("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
    
        test.ok("ゥー < ゥウ", col.compare("ゥー", "ゥウ") < 0);
        test.ok("ｩー < ｩウ", col.compare("ｩー", "ｩウ") < 0);
        test.ok("ウー < ウウ", col.compare("ウー", "ウウ") < 0);
        test.ok("ｳー < ｳウ", col.compare("ｳー", "ｳウ") < 0);
        test.ok("クー < クウ", col.compare("クー", "クウ") < 0);
        test.ok("ｸー < ｸウ", col.compare("ｸー", "ｸウ") < 0);
        test.ok("ㇰー < ㇰウ", col.compare("ㇰー", "ㇰウ") < 0);
        test.ok("グー < グウ", col.compare("グー", "グウ") < 0);
        test.ok("グー < グウ", col.compare("グー", "グウ") < 0);
        test.ok("スー < スウ", col.compare("スー", "スウ") < 0);
        test.ok("ｽー < ｽウ", col.compare("ｽー", "ｽウ") < 0);
        test.ok("ㇲー < ㇲウ", col.compare("ㇲー", "ㇲウ") < 0);
        test.ok("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
        test.ok("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
        test.ok("ッー < ッウ", col.compare("ッー", "ッウ") < 0);
        test.ok("ｯー < ｯウ", col.compare("ｯー", "ｯウ") < 0);
        test.ok("ツー < ツウ", col.compare("ツー", "ツウ") < 0);
        test.ok("ﾂー < ﾂウ", col.compare("ﾂー", "ﾂウ") < 0);
        test.ok("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
        test.ok("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
        test.ok("ヌー < ヌウ", col.compare("ヌー", "ヌウ") < 0);
        test.ok("ﾇー < ﾇウ", col.compare("ﾇー", "ﾇウ") < 0);
        test.ok("ㇴー < ㇴウ", col.compare("ㇴー", "ㇴウ") < 0);
        test.ok("フー < フウ", col.compare("フー", "フウ") < 0);
        test.ok("ﾌー < ﾌウ", col.compare("ﾌー", "ﾌウ") < 0);
        test.ok("ㇷー < ㇷウ", col.compare("ㇷー", "ㇷウ") < 0);
        test.ok("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
        test.ok("プー < プウ", col.compare("プー", "プウ") < 0);
        test.ok("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
        test.ok("プー < プウ", col.compare("プー", "プウ") < 0);
        test.ok("ムー < ムウ", col.compare("ムー", "ムウ") < 0);
        test.ok("ﾑー < ﾑウ", col.compare("ﾑー", "ﾑウ") < 0);
        test.ok("ㇺー < ㇺウ", col.compare("ㇺー", "ㇺウ") < 0);
        test.ok("ュー < ュウ", col.compare("ュー", "ュウ") < 0);
        test.ok("ｭー < ｭウ", col.compare("ｭー", "ｭウ") < 0);
        test.ok("ユー < ユウ", col.compare("ユー", "ユウ") < 0);
        test.ok("ﾕー < ﾕウ", col.compare("ﾕー", "ﾕウ") < 0);
        test.ok("ルー < ルウ", col.compare("ルー", "ルウ") < 0);
        test.ok("ﾙー < ﾙウ", col.compare("ﾙー", "ﾙウ") < 0);
        test.ok("ㇽー < ㇽウ", col.compare("ㇽー", "ㇽウ") < 0);
        test.ok("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
        test.ok("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
    
        test.ok("ェー < ェエ", col.compare("ェー", "ェエ") < 0);
        test.ok("ｪー < ｪエ", col.compare("ｪー", "ｪエ") < 0);
        test.ok("エー < エエ", col.compare("エー", "エエ") < 0);
        test.ok("ｴー < ｴエ", col.compare("ｴー", "ｴエ") < 0);
        test.ok("ケー < ケエ", col.compare("ケー", "ケエ") < 0);
        test.ok("ｹー < ｹエ", col.compare("ｹー", "ｹエ") < 0);
        test.ok("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
        test.ok("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
        test.ok("セー < セエ", col.compare("セー", "セエ") < 0);
        test.ok("ｾー < ｾエ", col.compare("ｾー", "ｾエ") < 0);
        test.ok("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
        test.ok("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
        test.ok("テー < テエ", col.compare("テー", "テエ") < 0);
        test.ok("ﾃー < ﾃエ", col.compare("ﾃー", "ﾃエ") < 0);
        test.ok("デー < デエ", col.compare("デー", "デエ") < 0);
        test.ok("デー < デエ", col.compare("デー", "デエ") < 0);
        test.ok("ネー < ネエ", col.compare("ネー", "ネエ") < 0);
        test.ok("ﾈー < ﾈエ", col.compare("ﾈー", "ﾈエ") < 0);
        test.ok("ヘー < ヘエ", col.compare("ヘー", "ヘエ") < 0);
        test.ok("ﾍー < ﾍエ", col.compare("ﾍー", "ﾍエ") < 0);
        test.ok("ㇸー < ㇸエ", col.compare("ㇸー", "ㇸエ") < 0);
        test.ok("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
        test.ok("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
        test.ok("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
        test.ok("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
        test.ok("メー < メエ", col.compare("メー", "メエ") < 0);
        test.ok("ﾒー < ﾒエ", col.compare("ﾒー", "ﾒエ") < 0);
        test.ok("レー < レエ", col.compare("レー", "レエ") < 0);
        test.ok("ﾚー < ﾚエ", col.compare("ﾚー", "ﾚエ") < 0);
        test.ok("ㇾー < ㇾエ", col.compare("ㇾー", "ㇾエ") < 0);
        test.ok("ヱー < ヱエ", col.compare("ヱー", "ヱエ") < 0);
        test.ok("ヶー < ヶエ", col.compare("ヶー", "ヶエ") < 0);
        test.ok("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
        test.ok("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
    
        test.ok("ォー < ォオ", col.compare("ォー", "ォオ") < 0);
        test.ok("ｫー < ｫオ", col.compare("ｫー", "ｫオ") < 0);
        test.ok("オー < オオ", col.compare("オー", "オオ") < 0);
        test.ok("ｵー < ｵオ", col.compare("ｵー", "ｵオ") < 0);
        test.ok("コー < コオ", col.compare("コー", "コオ") < 0);
        test.ok("ｺー < ｺオ", col.compare("ｺー", "ｺオ") < 0);
        test.ok("ゴー < ゴオ", col.compare("ゴー", "ゴオ") < 0);
        test.ok("コー < コオ", col.compare("ゴー", "ゴオ") < 0);
        test.ok("ソー < ソオ", col.compare("ソー", "ソオ") < 0);
        test.ok("ｿー < ｿオ", col.compare("ｿー", "ｿオ") < 0);
        test.ok("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
        test.ok("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
        test.ok("トー < トオ", col.compare("トー", "トオ") < 0);
        test.ok("ﾄー < ﾄオ", col.compare("ﾄー", "ﾄオ") < 0);
        test.ok("ㇳー < ㇳオ", col.compare("ㇳー", "ㇳオ") < 0);
        test.ok("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
        test.ok("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
        test.ok("ノー < ノオ", col.compare("ノー", "ノオ") < 0);
        test.ok("ﾉー < ﾉオ", col.compare("ﾉー", "ﾉオ") < 0);
        test.ok("ホー < ホオ", col.compare("ホー", "ホオ") < 0);
        test.ok("ﾎー < ﾎオ", col.compare("ﾎー", "ﾎオ") < 0);
        test.ok("ㇹー < ㇹオ", col.compare("ㇹー", "ㇹオ") < 0);
        test.ok("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
        test.ok("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
        test.ok("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
        test.ok("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
        test.ok("モー < モオ", col.compare("モー", "モオ") < 0);
        test.ok("ﾓー < ﾓオ", col.compare("ﾓー", "ﾓオ") < 0);
        test.ok("ョー < ョオ", col.compare("ョー", "ョオ") < 0);
        test.ok("ｮー < ｮオ", col.compare("ｮー", "ｮオ") < 0);
        test.ok("ヨー < ヨオ", col.compare("ヨー", "ヨオ") < 0);
        test.ok("ﾖー < ﾖオ", col.compare("ﾖー", "ﾖオ") < 0);
        test.ok("ロー < ロオ", col.compare("ロー", "ロオ") < 0);
        test.ok("ﾛー < ﾛオ", col.compare("ﾛー", "ﾛオ") < 0);
        test.ok("ㇿー < ㇿオ", col.compare("ㇿー", "ㇿオ") < 0);
        test.ok("ヲー < ヲオ", col.compare("ヲー", "ヲオ") < 0);
        test.ok("ｦー < ｦオ", col.compare("ｦー", "ｦオ") < 0);
        test.ok("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
        test.ok("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaLengthMarksTer_ja: function(test) {
        test.expect(189);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
        test.ok("ザー < ザア", col.compare("ザー", "ザア") < 0);
        test.ok("ター < タア", col.compare("ター", "タア") < 0);
        test.ok("ﾀー < ﾀア", col.compare("ﾀー", "ﾀア") < 0);
        test.ok("ダー < ダア", col.compare("ダー", "ダア") < 0);
        test.ok("ダー < ダア", col.compare("ダー", "ダア") < 0);
        test.ok("ナー < ナア", col.compare("ナー", "ナア") < 0);
        test.ok("ﾅー < ﾅア", col.compare("ﾅー", "ﾅア") < 0);
        test.ok("ハー < ハア", col.compare("ハー", "ハア") < 0);
        test.ok("ﾊー < ﾊア", col.compare("ﾊー", "ﾊア") < 0);
        test.ok("ㇵー < ㇵア", col.compare("ㇵー", "ㇵア") < 0);
        test.ok("バー < バア", col.compare("バー", "バア") < 0);
        test.ok("バー < バア", col.compare("パー", "パア") < 0);
        test.ok("パー < パア", col.compare("バー", "バア") < 0);
        test.ok("パー < パア", col.compare("パー", "パア") < 0);
        test.ok("マー < マア", col.compare("マー", "マア") < 0);
        test.ok("ﾏー < ﾏア", col.compare("ﾏー", "ﾏア") < 0);
        test.ok("ャー < ャア", col.compare("ャー", "ャア") < 0);
        test.ok("ｬー < ｬア", col.compare("ｬー", "ｬア") < 0);
        test.ok("ヤー < ヤア", col.compare("ヤー", "ヤア") < 0);
        test.ok("ﾔー < ﾔア", col.compare("ﾔー", "ﾔア") < 0);
        test.ok("ラー < ラア", col.compare("ラー", "ラア") < 0);
        test.ok("ﾗー < ﾗア", col.compare("ﾗー", "ﾗア") < 0);
        test.ok("ㇻー < ㇻア", col.compare("ㇻー", "ㇻア") < 0);
        test.ok("ヮー < ヮア", col.compare("ヮー", "ヮア") < 0);
        test.ok("ワー < ワア", col.compare("ワー", "ワア") < 0);
        test.ok("ﾜー < ﾜア", col.compare("ﾜー", "ﾜア") < 0);
        test.ok("ヵー < ヵア", col.compare("ヵー", "ヵア") < 0);
        test.ok("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
        test.ok("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
    
        test.ok("ィー < ィイ", col.compare("ィー", "ィイ") < 0);
        test.ok("ｨー < ｨイ", col.compare("ｨー", "ｨイ") < 0);
        test.ok("イー < イイ", col.compare("イー", "イイ") < 0);
        test.ok("ｲー < ｲイ", col.compare("ｲー", "ｲイ") < 0);
        test.ok("キー < キイ", col.compare("キー", "キイ") < 0);
        test.ok("ｷー < ｷイ", col.compare("ｷー", "ｷイ") < 0);
        test.ok("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
        test.ok("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
        test.ok("シー < シイ", col.compare("シー", "シイ") < 0);
        test.ok("ｼー < ｼイ", col.compare("ｼー", "ｼイ") < 0);
        test.ok("ㇱー < ㇱイ", col.compare("ㇱー", "ㇱイ") < 0);
        test.ok("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
        test.ok("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
        test.ok("チー < チイ", col.compare("チー", "チイ") < 0);
        test.ok("ﾁー < ﾁイ", col.compare("ﾁー", "ﾁイ") < 0);
        test.ok("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
        test.ok("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
        test.ok("ニー < ニイ", col.compare("ニー", "ニイ") < 0);
        test.ok("ﾆー < ﾆイ", col.compare("ﾆー", "ﾆイ") < 0);
        test.ok("ヒー < ヒイ", col.compare("ヒー", "ヒイ") < 0);
        test.ok("ﾋー < ﾋイ", col.compare("ﾋー", "ﾋイ") < 0);
        test.ok("ㇶー < ㇶイ", col.compare("ㇶー", "ㇶイ") < 0);
        test.ok("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
        test.ok("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
        test.ok("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
        test.ok("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
        test.ok("ミー < ミイ", col.compare("ミー", "ミイ") < 0);
        test.ok("ﾐー < ﾐイ", col.compare("ﾐー", "ﾐイ") < 0);
        test.ok("リー < リイ", col.compare("リー", "リイ") < 0);
        test.ok("ﾘー < ﾘイ", col.compare("ﾘー", "ﾘイ") < 0);
        test.ok("ㇼー < ㇼイ", col.compare("ㇼー", "ㇼイ") < 0);
        test.ok("ヰー < ヰイ", col.compare("ヰー", "ヰイ") < 0);
        test.ok("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
        test.ok("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
    
        test.ok("ゥー < ゥウ", col.compare("ゥー", "ゥウ") < 0);
        test.ok("ｩー < ｩウ", col.compare("ｩー", "ｩウ") < 0);
        test.ok("ウー < ウウ", col.compare("ウー", "ウウ") < 0);
        test.ok("ｳー < ｳウ", col.compare("ｳー", "ｳウ") < 0);
        test.ok("クー < クウ", col.compare("クー", "クウ") < 0);
        test.ok("ｸー < ｸウ", col.compare("ｸー", "ｸウ") < 0);
        test.ok("ㇰー < ㇰウ", col.compare("ㇰー", "ㇰウ") < 0);
        test.ok("グー < グウ", col.compare("グー", "グウ") < 0);
        test.ok("グー < グウ", col.compare("グー", "グウ") < 0);
        test.ok("スー < スウ", col.compare("スー", "スウ") < 0);
        test.ok("ｽー < ｽウ", col.compare("ｽー", "ｽウ") < 0);
        test.ok("ㇲー < ㇲウ", col.compare("ㇲー", "ㇲウ") < 0);
        test.ok("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
        test.ok("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
        test.ok("ッー < ッウ", col.compare("ッー", "ッウ") < 0);
        test.ok("ｯー < ｯウ", col.compare("ｯー", "ｯウ") < 0);
        test.ok("ツー < ツウ", col.compare("ツー", "ツウ") < 0);
        test.ok("ﾂー < ﾂウ", col.compare("ﾂー", "ﾂウ") < 0);
        test.ok("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
        test.ok("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
        test.ok("ヌー < ヌウ", col.compare("ヌー", "ヌウ") < 0);
        test.ok("ﾇー < ﾇウ", col.compare("ﾇー", "ﾇウ") < 0);
        test.ok("ㇴー < ㇴウ", col.compare("ㇴー", "ㇴウ") < 0);
        test.ok("フー < フウ", col.compare("フー", "フウ") < 0);
        test.ok("ﾌー < ﾌウ", col.compare("ﾌー", "ﾌウ") < 0);
        test.ok("ㇷー < ㇷウ", col.compare("ㇷー", "ㇷウ") < 0);
        test.ok("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
        test.ok("プー < プウ", col.compare("プー", "プウ") < 0);
        test.ok("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
        test.ok("プー < プウ", col.compare("プー", "プウ") < 0);
        test.ok("ムー < ムウ", col.compare("ムー", "ムウ") < 0);
        test.ok("ﾑー < ﾑウ", col.compare("ﾑー", "ﾑウ") < 0);
        test.ok("ㇺー < ㇺウ", col.compare("ㇺー", "ㇺウ") < 0);
        test.ok("ュー < ュウ", col.compare("ュー", "ュウ") < 0);
        test.ok("ｭー < ｭウ", col.compare("ｭー", "ｭウ") < 0);
        test.ok("ユー < ユウ", col.compare("ユー", "ユウ") < 0);
        test.ok("ﾕー < ﾕウ", col.compare("ﾕー", "ﾕウ") < 0);
        test.ok("ルー < ルウ", col.compare("ルー", "ルウ") < 0);
        test.ok("ﾙー < ﾙウ", col.compare("ﾙー", "ﾙウ") < 0);
        test.ok("ㇽー < ㇽウ", col.compare("ㇽー", "ㇽウ") < 0);
        test.ok("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
        test.ok("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
    
        test.ok("ェー < ェエ", col.compare("ェー", "ェエ") < 0);
        test.ok("ｪー < ｪエ", col.compare("ｪー", "ｪエ") < 0);
        test.ok("エー < エエ", col.compare("エー", "エエ") < 0);
        test.ok("ｴー < ｴエ", col.compare("ｴー", "ｴエ") < 0);
        test.ok("ケー < ケエ", col.compare("ケー", "ケエ") < 0);
        test.ok("ｹー < ｹエ", col.compare("ｹー", "ｹエ") < 0);
        test.ok("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
        test.ok("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
        test.ok("セー < セエ", col.compare("セー", "セエ") < 0);
        test.ok("ｾー < ｾエ", col.compare("ｾー", "ｾエ") < 0);
        test.ok("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
        test.ok("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
        test.ok("テー < テエ", col.compare("テー", "テエ") < 0);
        test.ok("ﾃー < ﾃエ", col.compare("ﾃー", "ﾃエ") < 0);
        test.ok("デー < デエ", col.compare("デー", "デエ") < 0);
        test.ok("デー < デエ", col.compare("デー", "デエ") < 0);
        test.ok("ネー < ネエ", col.compare("ネー", "ネエ") < 0);
        test.ok("ﾈー < ﾈエ", col.compare("ﾈー", "ﾈエ") < 0);
        test.ok("ヘー < ヘエ", col.compare("ヘー", "ヘエ") < 0);
        test.ok("ﾍー < ﾍエ", col.compare("ﾍー", "ﾍエ") < 0);
        test.ok("ㇸー < ㇸエ", col.compare("ㇸー", "ㇸエ") < 0);
        test.ok("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
        test.ok("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
        test.ok("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
        test.ok("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
        test.ok("メー < メエ", col.compare("メー", "メエ") < 0);
        test.ok("ﾒー < ﾒエ", col.compare("ﾒー", "ﾒエ") < 0);
        test.ok("レー < レエ", col.compare("レー", "レエ") < 0);
        test.ok("ﾚー < ﾚエ", col.compare("ﾚー", "ﾚエ") < 0);
        test.ok("ㇾー < ㇾエ", col.compare("ㇾー", "ㇾエ") < 0);
        test.ok("ヱー < ヱエ", col.compare("ヱー", "ヱエ") < 0);
        test.ok("ヶー < ヶエ", col.compare("ヶー", "ヶエ") < 0);
        test.ok("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
        test.ok("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
    
        test.ok("ォー < ォオ", col.compare("ォー", "ォオ") < 0);
        test.ok("ｫー < ｫオ", col.compare("ｫー", "ｫオ") < 0);
        test.ok("オー < オオ", col.compare("オー", "オオ") < 0);
        test.ok("ｵー < ｵオ", col.compare("ｵー", "ｵオ") < 0);
        test.ok("コー < コオ", col.compare("コー", "コオ") < 0);
        test.ok("ｺー < ｺオ", col.compare("ｺー", "ｺオ") < 0);
        test.ok("ゴー < ゴオ", col.compare("ゴー", "ゴオ") < 0);
        test.ok("コー < コオ", col.compare("ゴー", "ゴオ") < 0);
        test.ok("ソー < ソオ", col.compare("ソー", "ソオ") < 0);
        test.ok("ｿー < ｿオ", col.compare("ｿー", "ｿオ") < 0);
        test.ok("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
        test.ok("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
        test.ok("トー < トオ", col.compare("トー", "トオ") < 0);
        test.ok("ﾄー < ﾄオ", col.compare("ﾄー", "ﾄオ") < 0);
        test.ok("ㇳー < ㇳオ", col.compare("ㇳー", "ㇳオ") < 0);
        test.ok("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
        test.ok("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
        test.ok("ノー < ノオ", col.compare("ノー", "ノオ") < 0);
        test.ok("ﾉー < ﾉオ", col.compare("ﾉー", "ﾉオ") < 0);
        test.ok("ホー < ホオ", col.compare("ホー", "ホオ") < 0);
        test.ok("ﾎー < ﾎオ", col.compare("ﾎー", "ﾎオ") < 0);
        test.ok("ㇹー < ㇹオ", col.compare("ㇹー", "ㇹオ") < 0);
        test.ok("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
        test.ok("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
        test.ok("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
        test.ok("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
        test.ok("モー < モオ", col.compare("モー", "モオ") < 0);
        test.ok("ﾓー < ﾓオ", col.compare("ﾓー", "ﾓオ") < 0);
        test.ok("ョー < ョオ", col.compare("ョー", "ョオ") < 0);
        test.ok("ｮー < ｮオ", col.compare("ｮー", "ｮオ") < 0);
        test.ok("ヨー < ヨオ", col.compare("ヨー", "ヨオ") < 0);
        test.ok("ﾖー < ﾖオ", col.compare("ﾖー", "ﾖオ") < 0);
        test.ok("ロー < ロオ", col.compare("ロー", "ロオ") < 0);
        test.ok("ﾛー < ﾛオ", col.compare("ﾛー", "ﾛオ") < 0);
        test.ok("ㇿー < ㇿオ", col.compare("ㇿー", "ㇿオ") < 0);
        test.ok("ヲー < ヲオ", col.compare("ヲー", "ヲオ") < 0);
        test.ok("ｦー < ｦオ", col.compare("ｦー", "ｦオ") < 0);
        test.ok("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
        test.ok("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
        test.done();
    },
    
    testJSCollatorKatakanaLengthMarksSec_ja: function(test) {
        test.expect(189);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ァー = ァア", col.compare("ァー", "ァア") === 0);
        test.ok("ｧー = ｧア", col.compare("ｧー", "ｧア") === 0);
        test.ok("アー = アア", col.compare("アー", "アア") === 0);
        test.ok("ｱー = ｱア", col.compare("ｱー", "ｱア") === 0);
        test.ok("カー = カア", col.compare("カー", "カア") === 0);
        test.ok("ｶー = ｶア", col.compare("ｶー", "ｶア") === 0);
        test.ok("ガー = ガア", col.compare("ガー", "ガア") === 0);
        test.ok("ガー = ガア", col.compare("ガー", "ガア") === 0);
        test.ok("サー = サア", col.compare("サー", "サア") === 0);
        test.ok("ｻー = ｻア", col.compare("ｻー", "ｻア") === 0);
        test.ok("ザー = ザア", col.compare("ザー", "ザア") === 0);
        test.ok("ター = タア", col.compare("ター", "タア") === 0);
        test.ok("ﾀー = ﾀア", col.compare("ﾀー", "ﾀア") === 0);
        test.ok("ダー = ダア", col.compare("ダー", "ダア") === 0);
        test.ok("ダー = ダア", col.compare("ダー", "ダア") === 0);
        test.ok("ナー = ナア", col.compare("ナー", "ナア") === 0);
        test.ok("ﾅー = ﾅア", col.compare("ﾅー", "ﾅア") === 0);
        test.ok("ハー = ハア", col.compare("ハー", "ハア") === 0);
        test.ok("ﾊー = ﾊア", col.compare("ﾊー", "ﾊア") === 0);
        test.ok("ㇵー = ㇵア", col.compare("ㇵー", "ㇵア") === 0);
        test.ok("バー = バア", col.compare("バー", "バア") === 0);
        test.ok("バー = バア", col.compare("パー", "パア") === 0);
        test.ok("パー = パア", col.compare("バー", "バア") === 0);
        test.ok("パー = パア", col.compare("パー", "パア") === 0);
        test.ok("マー = マア", col.compare("マー", "マア") === 0);
        test.ok("ﾏー = ﾏア", col.compare("ﾏー", "ﾏア") === 0);
        test.ok("ャー = ャア", col.compare("ャー", "ャア") === 0);
        test.ok("ｬー = ｬア", col.compare("ｬー", "ｬア") === 0);
        test.ok("ヤー = ヤア", col.compare("ヤー", "ヤア") === 0);
        test.ok("ﾔー = ﾔア", col.compare("ﾔー", "ﾔア") === 0);
        test.ok("ラー = ラア", col.compare("ラー", "ラア") === 0);
        test.ok("ﾗー = ﾗア", col.compare("ﾗー", "ﾗア") === 0);
        test.ok("ㇻー = ㇻア", col.compare("ㇻー", "ㇻア") === 0);
        test.ok("ヮー = ヮア", col.compare("ヮー", "ヮア") === 0);
        test.ok("ワー = ワア", col.compare("ワー", "ワア") === 0);
        test.ok("ﾜー = ﾜア", col.compare("ﾜー", "ﾜア") === 0);
        test.ok("ヵー = ヵア", col.compare("ヵー", "ヵア") === 0);
        test.ok("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
        test.ok("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
    
        test.ok("ィー = ィイ", col.compare("ィー", "ィイ") === 0);
        test.ok("ｨー = ｨイ", col.compare("ｨー", "ｨイ") === 0);
        test.ok("イー = イイ", col.compare("イー", "イイ") === 0);
        test.ok("ｲー = ｲイ", col.compare("ｲー", "ｲイ") === 0);
        test.ok("キー = キイ", col.compare("キー", "キイ") === 0);
        test.ok("ｷー = ｷイ", col.compare("ｷー", "ｷイ") === 0);
        test.ok("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
        test.ok("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
        test.ok("シー = シイ", col.compare("シー", "シイ") === 0);
        test.ok("ｼー = ｼイ", col.compare("ｼー", "ｼイ") === 0);
        test.ok("ㇱー = ㇱイ", col.compare("ㇱー", "ㇱイ") === 0);
        test.ok("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
        test.ok("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
        test.ok("チー = チイ", col.compare("チー", "チイ") === 0);
        test.ok("ﾁー = ﾁイ", col.compare("ﾁー", "ﾁイ") === 0);
        test.ok("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
        test.ok("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
        test.ok("ニー = ニイ", col.compare("ニー", "ニイ") === 0);
        test.ok("ﾆー = ﾆイ", col.compare("ﾆー", "ﾆイ") === 0);
        test.ok("ヒー = ヒイ", col.compare("ヒー", "ヒイ") === 0);
        test.ok("ﾋー = ﾋイ", col.compare("ﾋー", "ﾋイ") === 0);
        test.ok("ㇶー = ㇶイ", col.compare("ㇶー", "ㇶイ") === 0);
        test.ok("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
        test.ok("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
        test.ok("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
        test.ok("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
        test.ok("ミー = ミイ", col.compare("ミー", "ミイ") === 0);
        test.ok("ﾐー = ﾐイ", col.compare("ﾐー", "ﾐイ") === 0);
        test.ok("リー = リイ", col.compare("リー", "リイ") === 0);
        test.ok("ﾘー = ﾘイ", col.compare("ﾘー", "ﾘイ") === 0);
        test.ok("ㇼー = ㇼイ", col.compare("ㇼー", "ㇼイ") === 0);
        test.ok("ヰー = ヰイ", col.compare("ヰー", "ヰイ") === 0);
        test.ok("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
        test.ok("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
    
        test.ok("ゥー = ゥウ", col.compare("ゥー", "ゥウ") === 0);
        test.ok("ｩー = ｩウ", col.compare("ｩー", "ｩウ") === 0);
        test.ok("ウー = ウウ", col.compare("ウー", "ウウ") === 0);
        test.ok("ｳー = ｳウ", col.compare("ｳー", "ｳウ") === 0);
        test.ok("クー = クウ", col.compare("クー", "クウ") === 0);
        test.ok("ｸー = ｸウ", col.compare("ｸー", "ｸウ") === 0);
        test.ok("ㇰー = ㇰウ", col.compare("ㇰー", "ㇰウ") === 0);
        test.ok("グー = グウ", col.compare("グー", "グウ") === 0);
        test.ok("グー = グウ", col.compare("グー", "グウ") === 0);
        test.ok("スー = スウ", col.compare("スー", "スウ") === 0);
        test.ok("ｽー = ｽウ", col.compare("ｽー", "ｽウ") === 0);
        test.ok("ㇲー = ㇲウ", col.compare("ㇲー", "ㇲウ") === 0);
        test.ok("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
        test.ok("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
        test.ok("ッー = ッウ", col.compare("ッー", "ッウ") === 0);
        test.ok("ｯー = ｯウ", col.compare("ｯー", "ｯウ") === 0);
        test.ok("ツー = ツウ", col.compare("ツー", "ツウ") === 0);
        test.ok("ﾂー = ﾂウ", col.compare("ﾂー", "ﾂウ") === 0);
        test.ok("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
        test.ok("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
        test.ok("ヌー = ヌウ", col.compare("ヌー", "ヌウ") === 0);
        test.ok("ﾇー = ﾇウ", col.compare("ﾇー", "ﾇウ") === 0);
        test.ok("ㇴー = ㇴウ", col.compare("ㇴー", "ㇴウ") === 0);
        test.ok("フー = フウ", col.compare("フー", "フウ") === 0);
        test.ok("ﾌー = ﾌウ", col.compare("ﾌー", "ﾌウ") === 0);
        test.ok("ㇷー = ㇷウ", col.compare("ㇷー", "ㇷウ") === 0);
        test.ok("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
        test.ok("プー = プウ", col.compare("プー", "プウ") === 0);
        test.ok("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
        test.ok("プー = プウ", col.compare("プー", "プウ") === 0);
        test.ok("ムー = ムウ", col.compare("ムー", "ムウ") === 0);
        test.ok("ﾑー = ﾑウ", col.compare("ﾑー", "ﾑウ") === 0);
        test.ok("ㇺー = ㇺウ", col.compare("ㇺー", "ㇺウ") === 0);
        test.ok("ュー = ュウ", col.compare("ュー", "ュウ") === 0);
        test.ok("ｭー = ｭウ", col.compare("ｭー", "ｭウ") === 0);
        test.ok("ユー = ユウ", col.compare("ユー", "ユウ") === 0);
        test.ok("ﾕー = ﾕウ", col.compare("ﾕー", "ﾕウ") === 0);
        test.ok("ルー = ルウ", col.compare("ルー", "ルウ") === 0);
        test.ok("ﾙー = ﾙウ", col.compare("ﾙー", "ﾙウ") === 0);
        test.ok("ㇽー = ㇽウ", col.compare("ㇽー", "ㇽウ") === 0);
        test.ok("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
        test.ok("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
    
        test.ok("ェー = ェエ", col.compare("ェー", "ェエ") === 0);
        test.ok("ｪー = ｪエ", col.compare("ｪー", "ｪエ") === 0);
        test.ok("エー = エエ", col.compare("エー", "エエ") === 0);
        test.ok("ｴー = ｴエ", col.compare("ｴー", "ｴエ") === 0);
        test.ok("ケー = ケエ", col.compare("ケー", "ケエ") === 0);
        test.ok("ｹー = ｹエ", col.compare("ｹー", "ｹエ") === 0);
        test.ok("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
        test.ok("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
        test.ok("セー = セエ", col.compare("セー", "セエ") === 0);
        test.ok("ｾー = ｾエ", col.compare("ｾー", "ｾエ") === 0);
        test.ok("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
        test.ok("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
        test.ok("テー = テエ", col.compare("テー", "テエ") === 0);
        test.ok("ﾃー = ﾃエ", col.compare("ﾃー", "ﾃエ") === 0);
        test.ok("デー = デエ", col.compare("デー", "デエ") === 0);
        test.ok("デー = デエ", col.compare("デー", "デエ") === 0);
        test.ok("ネー = ネエ", col.compare("ネー", "ネエ") === 0);
        test.ok("ﾈー = ﾈエ", col.compare("ﾈー", "ﾈエ") === 0);
        test.ok("ヘー = ヘエ", col.compare("ヘー", "ヘエ") === 0);
        test.ok("ﾍー = ﾍエ", col.compare("ﾍー", "ﾍエ") === 0);
        test.ok("ㇸー = ㇸエ", col.compare("ㇸー", "ㇸエ") === 0);
        test.ok("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
        test.ok("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
        test.ok("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
        test.ok("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
        test.ok("メー = メエ", col.compare("メー", "メエ") === 0);
        test.ok("ﾒー = ﾒエ", col.compare("ﾒー", "ﾒエ") === 0);
        test.ok("レー = レエ", col.compare("レー", "レエ") === 0);
        test.ok("ﾚー = ﾚエ", col.compare("ﾚー", "ﾚエ") === 0);
        test.ok("ㇾー = ㇾエ", col.compare("ㇾー", "ㇾエ") === 0);
        test.ok("ヱー = ヱエ", col.compare("ヱー", "ヱエ") === 0);
        test.ok("ヶー = ヶエ", col.compare("ヶー", "ヶエ") === 0);
        test.ok("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
        test.ok("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
    
        test.ok("ォー = ォオ", col.compare("ォー", "ォオ") === 0);
        test.ok("ｫー = ｫオ", col.compare("ｫー", "ｫオ") === 0);
        test.ok("オー = オオ", col.compare("オー", "オオ") === 0);
        test.ok("ｵー = ｵオ", col.compare("ｵー", "ｵオ") === 0);
        test.ok("コー = コオ", col.compare("コー", "コオ") === 0);
        test.ok("ｺー = ｺオ", col.compare("ｺー", "ｺオ") === 0);
        test.ok("ゴー = ゴオ", col.compare("ゴー", "ゴオ") === 0);
        test.ok("コー = コオ", col.compare("ゴー", "ゴオ") === 0);
        test.ok("ソー = ソオ", col.compare("ソー", "ソオ") === 0);
        test.ok("ｿー = ｿオ", col.compare("ｿー", "ｿオ") === 0);
        test.ok("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
        test.ok("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
        test.ok("トー = トオ", col.compare("トー", "トオ") === 0);
        test.ok("ﾄー = ﾄオ", col.compare("ﾄー", "ﾄオ") === 0);
        test.ok("ㇳー = ㇳオ", col.compare("ㇳー", "ㇳオ") === 0);
        test.ok("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
        test.ok("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
        test.ok("ノー = ノオ", col.compare("ノー", "ノオ") === 0);
        test.ok("ﾉー = ﾉオ", col.compare("ﾉー", "ﾉオ") === 0);
        test.ok("ホー = ホオ", col.compare("ホー", "ホオ") === 0);
        test.ok("ﾎー = ﾎオ", col.compare("ﾎー", "ﾎオ") === 0);
        test.ok("ㇹー = ㇹオ", col.compare("ㇹー", "ㇹオ") === 0);
        test.ok("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
        test.ok("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
        test.ok("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
        test.ok("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
        test.ok("モー = モオ", col.compare("モー", "モオ") === 0);
        test.ok("ﾓー = ﾓオ", col.compare("ﾓー", "ﾓオ") === 0);
        test.ok("ョー = ョオ", col.compare("ョー", "ョオ") === 0);
        test.ok("ｮー = ｮオ", col.compare("ｮー", "ｮオ") === 0);
        test.ok("ヨー = ヨオ", col.compare("ヨー", "ヨオ") === 0);
        test.ok("ﾖー = ﾖオ", col.compare("ﾖー", "ﾖオ") === 0);
        test.ok("ロー = ロオ", col.compare("ロー", "ロオ") === 0);
        test.ok("ﾛー = ﾛオ", col.compare("ﾛー", "ﾛオ") === 0);
        test.ok("ㇿー = ㇿオ", col.compare("ㇿー", "ㇿオ") === 0);
        test.ok("ヲー = ヲオ", col.compare("ヲー", "ヲオ") === 0);
        test.ok("ｦー = ｦオ", col.compare("ｦー", "ｦオ") === 0);
        test.ok("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
        test.ok("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
        test.done();
    },
    
    testJSCollatorKatakanaLengthMarksPri_ja: function(test) {
        test.expect(189);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 
    
        test.ok("ァー = ァア", col.compare("ァー", "ァア") === 0);
        test.ok("ｧー = ｧア", col.compare("ｧー", "ｧア") === 0);
        test.ok("アー = アア", col.compare("アー", "アア") === 0);
        test.ok("ｱー = ｱア", col.compare("ｱー", "ｱア") === 0);
        test.ok("カー = カア", col.compare("カー", "カア") === 0);
        test.ok("ｶー = ｶア", col.compare("ｶー", "ｶア") === 0);
        test.ok("ガー = ガア", col.compare("ガー", "ガア") === 0);
        test.ok("ガー = ガア", col.compare("ガー", "ガア") === 0);
        test.ok("サー = サア", col.compare("サー", "サア") === 0);
        test.ok("ｻー = ｻア", col.compare("ｻー", "ｻア") === 0);
        test.ok("ザー = ザア", col.compare("ザー", "ザア") === 0);
        test.ok("ター = タア", col.compare("ター", "タア") === 0);
        test.ok("ﾀー = ﾀア", col.compare("ﾀー", "ﾀア") === 0);
        test.ok("ダー = ダア", col.compare("ダー", "ダア") === 0);
        test.ok("ダー = ダア", col.compare("ダー", "ダア") === 0);
        test.ok("ナー = ナア", col.compare("ナー", "ナア") === 0);
        test.ok("ﾅー = ﾅア", col.compare("ﾅー", "ﾅア") === 0);
        test.ok("ハー = ハア", col.compare("ハー", "ハア") === 0);
        test.ok("ﾊー = ﾊア", col.compare("ﾊー", "ﾊア") === 0);
        test.ok("ㇵー = ㇵア", col.compare("ㇵー", "ㇵア") === 0);
        test.ok("バー = バア", col.compare("バー", "バア") === 0);
        test.ok("バー = バア", col.compare("パー", "パア") === 0);
        test.ok("パー = パア", col.compare("バー", "バア") === 0);
        test.ok("パー = パア", col.compare("パー", "パア") === 0);
        test.ok("マー = マア", col.compare("マー", "マア") === 0);
        test.ok("ﾏー = ﾏア", col.compare("ﾏー", "ﾏア") === 0);
        test.ok("ャー = ャア", col.compare("ャー", "ャア") === 0);
        test.ok("ｬー = ｬア", col.compare("ｬー", "ｬア") === 0);
        test.ok("ヤー = ヤア", col.compare("ヤー", "ヤア") === 0);
        test.ok("ﾔー = ﾔア", col.compare("ﾔー", "ﾔア") === 0);
        test.ok("ラー = ラア", col.compare("ラー", "ラア") === 0);
        test.ok("ﾗー = ﾗア", col.compare("ﾗー", "ﾗア") === 0);
        test.ok("ㇻー = ㇻア", col.compare("ㇻー", "ㇻア") === 0);
        test.ok("ヮー = ヮア", col.compare("ヮー", "ヮア") === 0);
        test.ok("ワー = ワア", col.compare("ワー", "ワア") === 0);
        test.ok("ﾜー = ﾜア", col.compare("ﾜー", "ﾜア") === 0);
        test.ok("ヵー = ヵア", col.compare("ヵー", "ヵア") === 0);
        test.ok("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
        test.ok("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
    
        test.ok("ィー = ィイ", col.compare("ィー", "ィイ") === 0);
        test.ok("ｨー = ｨイ", col.compare("ｨー", "ｨイ") === 0);
        test.ok("イー = イイ", col.compare("イー", "イイ") === 0);
        test.ok("ｲー = ｲイ", col.compare("ｲー", "ｲイ") === 0);
        test.ok("キー = キイ", col.compare("キー", "キイ") === 0);
        test.ok("ｷー = ｷイ", col.compare("ｷー", "ｷイ") === 0);
        test.ok("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
        test.ok("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
        test.ok("シー = シイ", col.compare("シー", "シイ") === 0);
        test.ok("ｼー = ｼイ", col.compare("ｼー", "ｼイ") === 0);
        test.ok("ㇱー = ㇱイ", col.compare("ㇱー", "ㇱイ") === 0);
        test.ok("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
        test.ok("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
        test.ok("チー = チイ", col.compare("チー", "チイ") === 0);
        test.ok("ﾁー = ﾁイ", col.compare("ﾁー", "ﾁイ") === 0);
        test.ok("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
        test.ok("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
        test.ok("ニー = ニイ", col.compare("ニー", "ニイ") === 0);
        test.ok("ﾆー = ﾆイ", col.compare("ﾆー", "ﾆイ") === 0);
        test.ok("ヒー = ヒイ", col.compare("ヒー", "ヒイ") === 0);
        test.ok("ﾋー = ﾋイ", col.compare("ﾋー", "ﾋイ") === 0);
        test.ok("ㇶー = ㇶイ", col.compare("ㇶー", "ㇶイ") === 0);
        test.ok("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
        test.ok("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
        test.ok("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
        test.ok("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
        test.ok("ミー = ミイ", col.compare("ミー", "ミイ") === 0);
        test.ok("ﾐー = ﾐイ", col.compare("ﾐー", "ﾐイ") === 0);
        test.ok("リー = リイ", col.compare("リー", "リイ") === 0);
        test.ok("ﾘー = ﾘイ", col.compare("ﾘー", "ﾘイ") === 0);
        test.ok("ㇼー = ㇼイ", col.compare("ㇼー", "ㇼイ") === 0);
        test.ok("ヰー = ヰイ", col.compare("ヰー", "ヰイ") === 0);
        test.ok("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
        test.ok("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
    
        test.ok("ゥー = ゥウ", col.compare("ゥー", "ゥウ") === 0);
        test.ok("ｩー = ｩウ", col.compare("ｩー", "ｩウ") === 0);
        test.ok("ウー = ウウ", col.compare("ウー", "ウウ") === 0);
        test.ok("ｳー = ｳウ", col.compare("ｳー", "ｳウ") === 0);
        test.ok("クー = クウ", col.compare("クー", "クウ") === 0);
        test.ok("ｸー = ｸウ", col.compare("ｸー", "ｸウ") === 0);
        test.ok("ㇰー = ㇰウ", col.compare("ㇰー", "ㇰウ") === 0);
        test.ok("グー = グウ", col.compare("グー", "グウ") === 0);
        test.ok("グー = グウ", col.compare("グー", "グウ") === 0);
        test.ok("スー = スウ", col.compare("スー", "スウ") === 0);
        test.ok("ｽー = ｽウ", col.compare("ｽー", "ｽウ") === 0);
        test.ok("ㇲー = ㇲウ", col.compare("ㇲー", "ㇲウ") === 0);
        test.ok("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
        test.ok("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
        test.ok("ッー = ッウ", col.compare("ッー", "ッウ") === 0);
        test.ok("ｯー = ｯウ", col.compare("ｯー", "ｯウ") === 0);
        test.ok("ツー = ツウ", col.compare("ツー", "ツウ") === 0);
        test.ok("ﾂー = ﾂウ", col.compare("ﾂー", "ﾂウ") === 0);
        test.ok("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
        test.ok("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
        test.ok("ヌー = ヌウ", col.compare("ヌー", "ヌウ") === 0);
        test.ok("ﾇー = ﾇウ", col.compare("ﾇー", "ﾇウ") === 0);
        test.ok("ㇴー = ㇴウ", col.compare("ㇴー", "ㇴウ") === 0);
        test.ok("フー = フウ", col.compare("フー", "フウ") === 0);
        test.ok("ﾌー = ﾌウ", col.compare("ﾌー", "ﾌウ") === 0);
        test.ok("ㇷー = ㇷウ", col.compare("ㇷー", "ㇷウ") === 0);
        test.ok("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
        test.ok("プー = プウ", col.compare("プー", "プウ") === 0);
        test.ok("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
        test.ok("プー = プウ", col.compare("プー", "プウ") === 0);
        test.ok("ムー = ムウ", col.compare("ムー", "ムウ") === 0);
        test.ok("ﾑー = ﾑウ", col.compare("ﾑー", "ﾑウ") === 0);
        test.ok("ㇺー = ㇺウ", col.compare("ㇺー", "ㇺウ") === 0);
        test.ok("ュー = ュウ", col.compare("ュー", "ュウ") === 0);
        test.ok("ｭー = ｭウ", col.compare("ｭー", "ｭウ") === 0);
        test.ok("ユー = ユウ", col.compare("ユー", "ユウ") === 0);
        test.ok("ﾕー = ﾕウ", col.compare("ﾕー", "ﾕウ") === 0);
        test.ok("ルー = ルウ", col.compare("ルー", "ルウ") === 0);
        test.ok("ﾙー = ﾙウ", col.compare("ﾙー", "ﾙウ") === 0);
        test.ok("ㇽー = ㇽウ", col.compare("ㇽー", "ㇽウ") === 0);
        test.ok("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
        test.ok("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
    
        test.ok("ェー = ェエ", col.compare("ェー", "ェエ") === 0);
        test.ok("ｪー = ｪエ", col.compare("ｪー", "ｪエ") === 0);
        test.ok("エー = エエ", col.compare("エー", "エエ") === 0);
        test.ok("ｴー = ｴエ", col.compare("ｴー", "ｴエ") === 0);
        test.ok("ケー = ケエ", col.compare("ケー", "ケエ") === 0);
        test.ok("ｹー = ｹエ", col.compare("ｹー", "ｹエ") === 0);
        test.ok("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
        test.ok("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
        test.ok("セー = セエ", col.compare("セー", "セエ") === 0);
        test.ok("ｾー = ｾエ", col.compare("ｾー", "ｾエ") === 0);
        test.ok("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
        test.ok("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
        test.ok("テー = テエ", col.compare("テー", "テエ") === 0);
        test.ok("ﾃー = ﾃエ", col.compare("ﾃー", "ﾃエ") === 0);
        test.ok("デー = デエ", col.compare("デー", "デエ") === 0);
        test.ok("デー = デエ", col.compare("デー", "デエ") === 0);
        test.ok("ネー = ネエ", col.compare("ネー", "ネエ") === 0);
        test.ok("ﾈー = ﾈエ", col.compare("ﾈー", "ﾈエ") === 0);
        test.ok("ヘー = ヘエ", col.compare("ヘー", "ヘエ") === 0);
        test.ok("ﾍー = ﾍエ", col.compare("ﾍー", "ﾍエ") === 0);
        test.ok("ㇸー = ㇸエ", col.compare("ㇸー", "ㇸエ") === 0);
        test.ok("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
        test.ok("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
        test.ok("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
        test.ok("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
        test.ok("メー = メエ", col.compare("メー", "メエ") === 0);
        test.ok("ﾒー = ﾒエ", col.compare("ﾒー", "ﾒエ") === 0);
        test.ok("レー = レエ", col.compare("レー", "レエ") === 0);
        test.ok("ﾚー = ﾚエ", col.compare("ﾚー", "ﾚエ") === 0);
        test.ok("ㇾー = ㇾエ", col.compare("ㇾー", "ㇾエ") === 0);
        test.ok("ヱー = ヱエ", col.compare("ヱー", "ヱエ") === 0);
        test.ok("ヶー = ヶエ", col.compare("ヶー", "ヶエ") === 0);
        test.ok("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
        test.ok("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
    
        test.ok("ォー = ォオ", col.compare("ォー", "ォオ") === 0);
        test.ok("ｫー = ｫオ", col.compare("ｫー", "ｫオ") === 0);
        test.ok("オー = オオ", col.compare("オー", "オオ") === 0);
        test.ok("ｵー = ｵオ", col.compare("ｵー", "ｵオ") === 0);
        test.ok("コー = コオ", col.compare("コー", "コオ") === 0);
        test.ok("ｺー = ｺオ", col.compare("ｺー", "ｺオ") === 0);
        test.ok("ゴー = ゴオ", col.compare("ゴー", "ゴオ") === 0);
        test.ok("コー = コオ", col.compare("ゴー", "ゴオ") === 0);
        test.ok("ソー = ソオ", col.compare("ソー", "ソオ") === 0);
        test.ok("ｿー = ｿオ", col.compare("ｿー", "ｿオ") === 0);
        test.ok("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
        test.ok("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
        test.ok("トー = トオ", col.compare("トー", "トオ") === 0);
        test.ok("ﾄー = ﾄオ", col.compare("ﾄー", "ﾄオ") === 0);
        test.ok("ㇳー = ㇳオ", col.compare("ㇳー", "ㇳオ") === 0);
        test.ok("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
        test.ok("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
        test.ok("ノー = ノオ", col.compare("ノー", "ノオ") === 0);
        test.ok("ﾉー = ﾉオ", col.compare("ﾉー", "ﾉオ") === 0);
        test.ok("ホー = ホオ", col.compare("ホー", "ホオ") === 0);
        test.ok("ﾎー = ﾎオ", col.compare("ﾎー", "ﾎオ") === 0);
        test.ok("ㇹー = ㇹオ", col.compare("ㇹー", "ㇹオ") === 0);
        test.ok("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
        test.ok("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
        test.ok("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
        test.ok("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
        test.ok("モー = モオ", col.compare("モー", "モオ") === 0);
        test.ok("ﾓー = ﾓオ", col.compare("ﾓー", "ﾓオ") === 0);
        test.ok("ョー = ョオ", col.compare("ョー", "ョオ") === 0);
        test.ok("ｮー = ｮオ", col.compare("ｮー", "ｮオ") === 0);
        test.ok("ヨー = ヨオ", col.compare("ヨー", "ヨオ") === 0);
        test.ok("ﾖー = ﾖオ", col.compare("ﾖー", "ﾖオ") === 0);
        test.ok("ロー = ロオ", col.compare("ロー", "ロオ") === 0);
        test.ok("ﾛー = ﾛオ", col.compare("ﾛー", "ﾛオ") === 0);
        test.ok("ㇿー = ㇿオ", col.compare("ㇿー", "ㇿオ") === 0);
        test.ok("ヲー = ヲオ", col.compare("ヲー", "ヲオ") === 0);
        test.ok("ｦー = ｦオ", col.compare("ｦー", "ｦオ") === 0);
        test.ok("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
        test.ok("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
        test.done();
    },
    
    testJSCollatorKatakanaIterationMarksQuat_ja: function(test) {
        test.expect(310);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("アヽ < アア", col.compare("アヽ", "アア") < 0);
        test.ok("ｱヽ < ｱア", col.compare("ｱヽ", "ｱア") < 0);
        test.ok("ァヽ < ァア", col.compare("ァヽ", "ァア") < 0);
        test.ok("ｧヽ < ｧア", col.compare("ｧヽ", "ｧア") < 0);
        test.ok("イヽ < イイ", col.compare("イヽ", "イイ") < 0);
        test.ok("ｲヽ < ｲイ", col.compare("ｲヽ", "ｲイ") < 0);
        test.ok("ィヽ < ィイ", col.compare("ィヽ", "ィイ") < 0);
        test.ok("ｨヽ < ｨイ", col.compare("ｨヽ", "ｨイ") < 0);
        
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.ok("ヴヾ < ヴヴ", col.compare("ヴヾ", "ヴヴ") < 0);
        test.ok("ヴヾ < ヴヴ", col.compare("ヴヾ", "ヴヴ") < 0);
        
        test.ok("エヽ < エエ", col.compare("エヽ", "エエ") < 0);
        test.ok("ｴヽ < ｴエ", col.compare("ｴヽ", "ｴエ") < 0);
        test.ok("ェヽ < ェエ", col.compare("ェヽ", "ェエ") < 0);
        test.ok("ｪヽ < ｪエ", col.compare("ｪヽ", "ｪエ") < 0);
        
        test.ok("オヽ < オオ", col.compare("オヽ", "オオ") < 0);
        test.ok("ｵヽ < ｵオ", col.compare("ｵヽ", "ｵオ") < 0);
        test.ok("ォヽ < ォオ", col.compare("ォヽ", "ォオ") < 0);
        test.ok("ｫヽ < ｫオ", col.compare("ｫヽ", "ｫオ") < 0);
        
        test.ok("カヽ < カカ", col.compare("カヽ", "カカ") < 0);
        test.ok("ｶヽ < ｶカ", col.compare("ｶヽ", "ｶカ") < 0);
        test.ok("ヵヽ < ヵカ", col.compare("ヵヽ", "ヵカ") < 0);
        test.ok("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
        test.ok("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
        
        test.ok("キヽ < キキ", col.compare("キヽ", "キキ") < 0);
        test.ok("ｷヽ < ｷキ", col.compare("ｷヽ", "ｷキ") < 0);
        test.ok("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
        test.ok("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
        test.ok("キヾ < キギ", col.compare("キヾ", "キギ") < 0);
        test.ok("ｷヾ < ｷギ", col.compare("ｷヾ", "ｷギ") < 0);
        test.ok("ギヾ < ギギ", col.compare("ギヾ", "ギギ") < 0);
        test.ok("ギヾ < ギギ", col.compare("ギヾ", "ギギ") < 0);
    
        test.ok("クヽ < クク", col.compare("クヽ", "クク") < 0);
        test.ok("ｸヽ < ｸク", col.compare("ｸヽ", "ｸク") < 0);
        test.ok("ㇰヽ < ㇰク", col.compare("ㇰヽ", "ㇰク") < 0);
        test.ok("グヽ < グク", col.compare("グヽ", "グク") < 0);
        test.ok("グヽ < グク", col.compare("グヽ", "グク") < 0);
        test.ok("クヾ < クグ", col.compare("クヾ", "クグ") < 0);
        test.ok("ｸヾ < ｸグ", col.compare("ｸヾ", "ｸグ") < 0);
        test.ok("ㇰヾ < ㇰグ", col.compare("ㇰヾ", "ㇰグ") < 0);
        test.ok("グヾ < ググ", col.compare("グヾ", "ググ") < 0);
        test.ok("グヾ < ググ", col.compare("グヾ", "ググ") < 0);
        
        test.ok("ケヽ < ケケ", col.compare("ケヽ", "ケケ") < 0);
        test.ok("ｹヽ < ｹケ", col.compare("ｹヽ", "ｹケ") < 0);
        test.ok("ヶヽ < ヶケ", col.compare("ヶヽ", "ヶケ") < 0);
        test.ok("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
        test.ok("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
        
        test.ok("コヽ < ココ", col.compare("コヽ", "ココ") < 0);
        test.ok("ｺヽ < ｺコ", col.compare("ｺヽ", "ｺコ") < 0);
        test.ok("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
        test.ok("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
        test.ok("コヾ < コゴ", col.compare("コヾ", "コゴ") < 0);
        test.ok("ｺヾ < ｺゴ", col.compare("ｺヾ", "ｺゴ") < 0);
        test.ok("ゴヾ < ゴゴ", col.compare("ゴヾ", "ゴゴ") < 0);
        test.ok("ゴヾ < ゴゴ", col.compare("ゴヾ", "ゴゴ") < 0);
        
        test.ok("サヽ < ササ", col.compare("サヽ", "ササ") < 0);
        test.ok("ｻヽ < ｻサ", col.compare("ｻヽ", "ｻサ") < 0);
        test.ok("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
        test.ok("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
        test.ok("サヾ < サザ", col.compare("サヾ", "サザ") < 0);
        test.ok("ｻヾ < ｻザ", col.compare("ｻヾ", "ｻザ") < 0);
        test.ok("ザヾ < ザザ", col.compare("ザヾ", "ザザ") < 0);
        test.ok("ザヾ < ザザ", col.compare("ザヾ", "ザザ") < 0);
    
        test.ok("シヽ < シシ", col.compare("シヽ", "シシ") < 0);
        test.ok("ｼヽ < ｼシ", col.compare("ｼヽ", "ｼシ") < 0);
        test.ok("ㇱヽ < ㇱシ", col.compare("ㇱヽ", "ㇱシ") < 0);
        test.ok("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
        test.ok("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
        test.ok("シヾ < シジ", col.compare("シヾ", "シジ") < 0);
        test.ok("ｼヾ < ｼジ", col.compare("ｼヾ", "ｼジ") < 0);
        test.ok("ㇱヾ < ㇱジ", col.compare("ㇱヾ", "ㇱジ") < 0);
        test.ok("ジヾ < ジジ", col.compare("ジヾ", "ジジ") < 0);
        test.ok("ジヾ < ジジ", col.compare("ジヾ", "ジジ") < 0);
    
        test.ok("スヽ < スス", col.compare("スヽ", "スス") < 0);
        test.ok("ｽヽ < ｽス", col.compare("ｽヽ", "ｽス") < 0);
        test.ok("ㇲヽ < ㇲス", col.compare("ㇲヽ", "ㇲス") < 0);
        test.ok("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
        test.ok("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
        test.ok("スヾ < スズ", col.compare("スヾ", "スズ") < 0);
        test.ok("ｽヾ < ｽズ", col.compare("ｽヾ", "ｽズ") < 0);
        test.ok("ㇲヾ < ㇲズ", col.compare("ㇲヾ", "ㇲズ") < 0);
        test.ok("ズヾ < ズズ", col.compare("ズヾ", "ズズ") < 0);
        test.ok("ズヾ < ズズ", col.compare("ズヾ", "ズズ") < 0);
    
        test.ok("セヽ < セセ", col.compare("セヽ", "セセ") < 0);
        test.ok("ｾヽ < ｾセ", col.compare("ｾヽ", "ｾセ") < 0);
        test.ok("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
        test.ok("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
        test.ok("セヾ < セゼ", col.compare("セヾ", "セゼ") < 0);
        test.ok("ｾヾ < ｾゼ", col.compare("ｾヾ", "ｾゼ") < 0);
        test.ok("ゼヾ < ゼゼ", col.compare("ゼヾ", "ゼゼ") < 0);
        test.ok("ゼヾ < ゼゼ", col.compare("ゼヾ", "ゼゼ") < 0);
    
        test.ok("ソヽ < ソソ", col.compare("ソヽ", "ソソ") < 0);
        test.ok("ｿヽ < ｿソ", col.compare("ｿヽ", "ｿソ") < 0);
        test.ok("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
        test.ok("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
        test.ok("ソヾ < ソゾ", col.compare("ソヾ", "ソゾ") < 0);
        test.ok("ｿヾ < ｿゾ", col.compare("ｿヾ", "ｿゾ") < 0);
        test.ok("ゾヾ < ゾゾ", col.compare("ゾヾ", "ゾゾ") < 0);
        test.ok("ゾヾ < ゾゾ", col.compare("ゾヾ", "ゾゾ") < 0);
    
        test.ok("タヽ < タタ", col.compare("タヽ", "タタ") < 0);
        test.ok("ﾀヽ < ﾀタ", col.compare("ﾀヽ", "ﾀタ") < 0);
        test.ok("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
        test.ok("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
        test.ok("タヾ < タダ", col.compare("タヾ", "タダ") < 0);
        test.ok("ﾀヾ < ﾀダ", col.compare("ﾀヾ", "ﾀダ") < 0);
        test.ok("ダヾ < ダダ", col.compare("ダヾ", "ダダ") < 0);
        test.ok("ダヾ < ダダ", col.compare("ダヾ", "ダダ") < 0);
    
        test.ok("チヽ < チチ", col.compare("チヽ", "チチ") < 0);
        test.ok("ﾁヽ < ﾁチ", col.compare("ﾁヽ", "ﾁチ") < 0);
        test.ok("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
        test.ok("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
        test.ok("チヾ < チヂ", col.compare("チヾ", "チヂ") < 0);
        test.ok("ﾁヾ < ﾁヂ", col.compare("ﾁヾ", "ﾁヂ") < 0);
        test.ok("ヂヾ < ヂヂ", col.compare("ヂヾ", "ヂヂ") < 0);
        test.ok("ヂヾ < ヂヂ", col.compare("ヂヾ", "ヂヂ") < 0);
    
        test.ok("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
        test.ok("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
        test.ok("ッヽ < ッツ", col.compare("ッヽ", "ッツ") < 0);
        test.ok("ｯヽ < ｯツ", col.compare("ｯヽ", "ｯツ") < 0);
        test.ok("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
        test.ok("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
        test.ok("ツヾ < ツヅ", col.compare("ツヾ", "ツヅ") < 0);
        test.ok("ﾂヾ < ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") < 0);
        test.ok("ヅヾ < ヅヅ", col.compare("ヅヾ", "ヅヅ") < 0);
        test.ok("ヅヾ < ヅヅ", col.compare("ヅヾ", "ヅヅ") < 0);
        test.ok("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
        test.ok("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
        test.ok("ッヾ < ッヅ", col.compare("ッヾ", "ッヅ") < 0);
        test.ok("ｯヾ < ｯヅ", col.compare("ｯヾ", "ｯヅ") < 0);
        test.ok("ツヾ < ツヅ", col.compare("ツヾ", "ツヅ") < 0);
        test.ok("ﾂヾ < ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") < 0);
    
        test.ok("テヽ < テテ", col.compare("テヽ", "テテ") < 0);
        test.ok("ﾃヽ < ﾃテ", col.compare("ﾃヽ", "ﾃテ") < 0);
        test.ok("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
        test.ok("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
        test.ok("テヾ < テデ", col.compare("テヾ", "テデ") < 0);
        test.ok("ﾃヾ < ﾃデ", col.compare("ﾃヾ", "ﾃデ") < 0);
        test.ok("デヾ < デデ", col.compare("デヾ", "デデ") < 0);
        test.ok("デヾ < デデ", col.compare("デヾ", "デデ") < 0);
    
        test.ok("トヽ < トト", col.compare("トヽ", "トト") < 0);
        test.ok("ﾄヽ < ﾄト", col.compare("ﾄヽ", "ﾄト") < 0);
        test.ok("ㇳヽ < ㇳト", col.compare("ㇳヽ", "ㇳト") < 0);
        test.ok("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
        test.ok("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
        test.ok("トヾ < トド", col.compare("トヾ", "トド") < 0);
        test.ok("ﾄヾ < ﾄド", col.compare("ﾄヾ", "ﾄド") < 0);
        test.ok("ㇳヾ < ㇳド", col.compare("ㇳヾ", "ㇳド") < 0);
        test.ok("ドヾ < ドド", col.compare("ドヾ", "ドド") < 0);
        test.ok("ドヾ < ドド", col.compare("ドヾ", "ドド") < 0);
    
        test.ok("ナヽ < ナナ", col.compare("ナヽ", "ナナ") < 0);
        test.ok("ﾅヽ < ﾅナ", col.compare("ﾅヽ", "ﾅナ") < 0);
    
        test.ok("ニヽ < ニニ", col.compare("ニヽ", "ニニ") < 0);
        test.ok("ﾆヽ < ﾆニ", col.compare("ﾆヽ", "ﾆニ") < 0);
    
        test.ok("ヌヽ < ヌヌ", col.compare("ヌヽ", "ヌヌ") < 0);
        test.ok("ﾇヽ < ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") < 0);
        test.ok("ㇴヽ < ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") < 0);
        
        test.ok("ネヽ < ネネ", col.compare("ネヽ", "ネネ") < 0);
        test.ok("ﾈヽ < ﾈネ", col.compare("ﾈヽ", "ﾈネ") < 0);
        
        test.ok("ノヽ < ノノ", col.compare("ノヽ", "ノノ") < 0);
        test.ok("ﾉヽ < ﾉノ", col.compare("ﾉヽ", "ﾉノ") < 0);
        
        test.ok("ハヽ < ハハ", col.compare("ハヽ", "ハハ") < 0);
        test.ok("ﾊヽ < ﾊハ", col.compare("ﾊヽ", "ﾊハ") < 0);
        test.ok("ㇵヽ < ㇵハ", col.compare("ㇵヽ", "ㇵハ") < 0);
        test.ok("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
        test.ok("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
        test.ok("ハヾ < ハバ", col.compare("ハヾ", "ハバ") < 0);
        test.ok("ﾊヾ < ﾊバ", col.compare("ﾊヾ", "ﾊバ") < 0);
        test.ok("ㇵヾ < ㇵバ", col.compare("ㇵヾ", "ㇵバ") < 0);
        test.ok("バヾ < ババ", col.compare("バヾ", "ババ") < 0);
        test.ok("バヾ < ババ", col.compare("バヾ", "ババ") < 0);
        test.ok("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
        test.ok("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
        test.ok("パヾ < パバ", col.compare("パヾ", "パバ") < 0);
        test.ok("パヾ < パバ", col.compare("パヾ", "パバ") < 0);
        
        test.ok("ヒヽ < ヒヒ", col.compare("ヒヽ", "ヒヒ") < 0);
        test.ok("ﾋヽ < ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") < 0);
        test.ok("ㇶヽ < ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") < 0);
        test.ok("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
        test.ok("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
        test.ok("ヒヾ < ヒビ", col.compare("ヒヾ", "ヒビ") < 0);
        test.ok("ﾋヾ < ﾋビ", col.compare("ﾋヾ", "ﾋビ") < 0);
        test.ok("ㇶヾ < ㇶビ", col.compare("ㇶヾ", "ㇶビ") < 0);
        test.ok("ビヾ < ビビ", col.compare("ビヾ", "ビビ") < 0);
        test.ok("ビヾ < ビビ", col.compare("ビヾ", "ビビ") < 0);
        test.ok("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
        test.ok("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
        test.ok("ピヾ < ピビ", col.compare("ピヾ", "ピビ") < 0);
        test.ok("ピヾ < ピビ", col.compare("ピヾ", "ピビ") < 0);
        
        test.ok("フヽ < フフ", col.compare("フヽ", "フフ") < 0);
        test.ok("ﾌヽ < ﾌフ", col.compare("ﾌヽ", "ﾌフ") < 0);
        test.ok("ㇷヽ < ㇷフ", col.compare("ㇷヽ", "ㇷフ") < 0);
        test.ok("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
        test.ok("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
        test.ok("フヾ < フブ", col.compare("フヾ", "フブ") < 0);
        test.ok("ﾌヾ < ﾌブ", col.compare("ﾌヾ", "ﾌブ") < 0);
        test.ok("ㇷヾ < ㇷブ", col.compare("ㇷヾ", "ㇷブ") < 0);
        test.ok("ブヾ < ブブ", col.compare("ブヾ", "ブブ") < 0);
        test.ok("ブヾ < ブブ", col.compare("ブヾ", "ブブ") < 0);
        test.ok("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
        test.ok("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
        test.ok("プヾ < プブ", col.compare("プヾ", "プブ") < 0);
        test.ok("プヾ < プブ", col.compare("プヾ", "プブ") < 0);
        
        test.ok("ヘヽ < ヘヘ", col.compare("ヘヽ", "ヘヘ") < 0);
        test.ok("ﾍヽ < ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") < 0);
        test.ok("ㇸヽ < ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") < 0);
        test.ok("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
        test.ok("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
        test.ok("ヘヾ < ヘベ", col.compare("ヘヾ", "ヘベ") < 0);
        test.ok("ﾍヾ < ﾍベ", col.compare("ﾍヾ", "ﾍベ") < 0);
        test.ok("ㇸヾ < ㇸベ", col.compare("ㇸヾ", "ㇸベ") < 0);
        test.ok("ベヾ < ベベ", col.compare("ベヾ", "ベベ") < 0);
        test.ok("ベヾ < ベベ", col.compare("ベヾ", "ベベ") < 0);
        test.ok("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
        test.ok("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
        test.ok("ペヾ < ペベ", col.compare("ペヾ", "ペベ") < 0);
        test.ok("ペヾ < ペベ", col.compare("ペヾ", "ペベ") < 0);
        
        test.ok("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
        test.ok("ﾎヽ < ﾎホ", col.compare("ﾎヽ", "ﾎホ") < 0);
        test.ok("ㇹヽ < ㇹホ", col.compare("ㇹヽ", "ㇹホ") < 0);
        test.ok("ボヽ < ボホ", col.compare("ボヽ", "ボホ") < 0);
        test.ok("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
        test.ok("ホヾ < ホボ", col.compare("ホヾ", "ホボ") < 0);
        test.ok("ﾎヾ < ﾎボ", col.compare("ﾎヾ", "ﾎボ") < 0);
        test.ok("ㇹヾ < ㇹボ", col.compare("ㇹヾ", "ㇹボ") < 0);
        test.ok("ボヾ < ボボ", col.compare("ボヾ", "ボボ") < 0);
        test.ok("ボヾ < ボボ", col.compare("ボヾ", "ボボ") < 0);
        test.ok("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
        test.ok("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
        test.ok("ポヾ < ポボ", col.compare("ポヾ", "ポボ") < 0);
        test.ok("ポヾ < ポボ", col.compare("ポヾ", "ポボ") < 0);
        
        test.ok("マヽ < ママ", col.compare("マヽ", "ママ") < 0);
        test.ok("ﾏヽ < ﾏマ", col.compare("ﾏヽ", "ﾏマ") < 0);
        
        test.ok("ミヽ < ミミ", col.compare("ミヽ", "ミミ") < 0);
        test.ok("ﾐヽ < ﾐミ", col.compare("ﾐヽ", "ﾐミ") < 0);
        
        test.ok("ムヽ < ムム", col.compare("ムヽ", "ムム") < 0);
        test.ok("ﾑヽ < ﾑム", col.compare("ﾑヽ", "ﾑム") < 0);
        test.ok("ㇺヽ < ㇺム", col.compare("ㇺヽ", "ㇺム") < 0);
        
        test.ok("メヽ < メメ", col.compare("メヽ", "メメ") < 0);
        test.ok("ﾒヽ < ﾒメ", col.compare("ﾒヽ", "ﾒメ") < 0);
        
        test.ok("モヽ < モモ", col.compare("モヽ", "モモ") < 0);
        test.ok("ﾓヽ < ﾓモ", col.compare("ﾓヽ", "ﾓモ") < 0);
        
        test.ok("ヤヽ < ヤヤ", col.compare("ヤヽ", "ヤヤ") < 0);
        test.ok("ﾔヽ < ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") < 0);
        test.ok("ャヽ < ャヤ", col.compare("ャヽ", "ャヤ") < 0);
        test.ok("ｬヽ < ｬヤ", col.compare("ｬヽ", "ｬヤ") < 0);
        
        test.ok("ユヽ < ユユ", col.compare("ユヽ", "ユユ") < 0);
        test.ok("ﾕヽ < ﾕユ", col.compare("ﾕヽ", "ﾕユ") < 0);
        test.ok("ュヽ < ュユ", col.compare("ュヽ", "ュユ") < 0);
        test.ok("ｭヽ < ｭユ", col.compare("ｭヽ", "ｭユ") < 0);
        
        test.ok("ヨヽ < ヨヨ", col.compare("ヨヽ", "ヨヨ") < 0);
        test.ok("ﾖヽ < ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") < 0);
        test.ok("ョヽ < ョヨ", col.compare("ョヽ", "ョヨ") < 0);
        test.ok("ｮヽ < ｮヨ", col.compare("ｮヽ", "ｮヨ") < 0);
        
        test.ok("ラヽ < ララ", col.compare("ラヽ", "ララ") < 0);
        test.ok("ﾗヽ < ﾗラ", col.compare("ﾗヽ", "ﾗラ") < 0);
        test.ok("ㇻヽ < ㇻラ", col.compare("ㇻヽ", "ㇻラ") < 0);
        
        test.ok("リヽ < リリ", col.compare("リヽ", "リリ") < 0);
        test.ok("ﾘヽ < ﾘリ", col.compare("ﾘヽ", "ﾘリ") < 0);
        test.ok("ㇼヽ < ㇼリ", col.compare("ㇼヽ", "ㇼリ") < 0);
        
        test.ok("ルヽ < ルル", col.compare("ルヽ", "ルル") < 0);
        test.ok("ﾙヽ < ﾙル", col.compare("ﾙヽ", "ﾙル") < 0);
        test.ok("ㇽヽ < ㇽル", col.compare("ㇽヽ", "ㇽル") < 0);
        
        test.ok("レヽ < レレ", col.compare("レヽ", "レレ") < 0);
        test.ok("ﾚヽ < ﾚレ", col.compare("ﾚヽ", "ﾚレ") < 0);
        test.ok("ㇾヽ < ㇾレ", col.compare("ㇾヽ", "ㇾレ") < 0);
        
        test.ok("ロヽ < ロロ", col.compare("ロヽ", "ロロ") < 0);
        test.ok("ﾛヽ < ﾛロ", col.compare("ﾛヽ", "ﾛロ") < 0);
        test.ok("ㇿヽ < ㇿロ", col.compare("ㇿヽ", "ㇿロ") < 0);
        
        test.ok("ワヽ < ワワ", col.compare("ワヽ", "ワワ") < 0);
        test.ok("ﾜヽ < ﾜワ", col.compare("ﾜヽ", "ﾜワ") < 0);
        test.ok("ヮヽ < ヮワ", col.compare("ヮヽ", "ヮワ") < 0);
        test.ok("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
        test.ok("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
        test.ok("ワヾ < ワヷ", col.compare("ワヾ", "ワヷ") < 0);
        test.ok("ﾜヾ < ﾜヷ", col.compare("ﾜヾ", "ﾜヷ") < 0);
        test.ok("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷヷ") < 0);
        test.ok("ヷヾ < ヷヷ", col.compare("ヷヾ", "ヷヷ") < 0);
        test.ok("ヮヾ < ヮヷ", col.compare("ヮヾ", "ヮヷ") < 0);
        
        test.ok("ヰヽ < ヰヰ", col.compare("ヰヽ", "ヰヰ") < 0);
        test.ok("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
        test.ok("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
        test.ok("ヰヾ < ヰヸ", col.compare("ヰヾ", "ヰヸ") < 0);
        test.ok("ヸヾ < ヸヸ", col.compare("ヸヾ", "ヸヸ") < 0);
        test.ok("ヸヾ < ヸヸ", col.compare("ヸヾ", "ヸヸ") < 0);
        
        test.ok("ヱヽ < ヱヱ", col.compare("ヱヽ", "ヱヱ") < 0);
        test.ok("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
        test.ok("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
        test.ok("ヱヾ < ヱヹ", col.compare("ヱヾ", "ヱヹ") < 0);
        test.ok("ヹヾ < ヹヹ", col.compare("ヹヾ", "ヹヹ") < 0);
        test.ok("ヹヾ < ヹヹ", col.compare("ヹヾ", "ヹヹ") < 0);
        
        test.ok("ヲヽ < ヲヲ", col.compare("ヲヽ", "ヲヲ") < 0);
        test.ok("ｦヽ < ｦヲ", col.compare("ｦヽ", "ｦヲ") < 0);
        test.ok("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
        test.ok("ヺヽ < ヺヺ", col.compare("ヺヽ", "ヺヺ") < 0);
        test.ok("ヲヾ < ヲヺ", col.compare("ヲヾ", "ヲヺ") < 0);
        test.ok("ｦヾ < ｦヺ", col.compare("ｦヾ", "ｦヺ") < 0);
        test.ok("ヺヾ < ヺヺ", col.compare("ヺヾ", "ヺヺ") < 0);
        test.ok("ヺヾ < ヺヺ", col.compare("ヺヾ", "ヺヺ") < 0);
        
        test.ok("ンヽ < ンン", col.compare("ンヽ", "ンン") < 0);
        test.ok("ﾝヽ < ﾝン", col.compare("ﾝヽ", "ﾝン") < 0);    
        test.done();
    },
    
    testJSCollatorKatakanaIterationMarksTer_ja: function(test) {
        test.expect(310);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("アヽ < アア", col.compare("アヽ", "アア") < 0);
        test.ok("ｱヽ < ｱア", col.compare("ｱヽ", "ｱア") < 0);
        test.ok("ァヽ < ァア", col.compare("ァヽ", "ァア") < 0);
        test.ok("ｧヽ < ｧア", col.compare("ｧヽ", "ｧア") < 0);
        test.ok("イヽ < イイ", col.compare("イヽ", "イイ") < 0);
        test.ok("ｲヽ < ｲイ", col.compare("ｲヽ", "ｲイ") < 0);
        test.ok("ィヽ < ィイ", col.compare("ィヽ", "ィイ") < 0);
        test.ok("ｨヽ < ｨイ", col.compare("ｨヽ", "ｨイ") < 0);
        
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.ok("ヴヾ < ヴヴ", col.compare("ヴヾ", "ヴヴ") < 0);
        test.ok("ヴヾ < ヴヴ", col.compare("ヴヾ", "ヴヴ") < 0);
        
        test.ok("エヽ < エエ", col.compare("エヽ", "エエ") < 0);
        test.ok("ｴヽ < ｴエ", col.compare("ｴヽ", "ｴエ") < 0);
        test.ok("ェヽ < ェエ", col.compare("ェヽ", "ェエ") < 0);
        test.ok("ｪヽ < ｪエ", col.compare("ｪヽ", "ｪエ") < 0);
        
        test.ok("オヽ < オオ", col.compare("オヽ", "オオ") < 0);
        test.ok("ｵヽ < ｵオ", col.compare("ｵヽ", "ｵオ") < 0);
        test.ok("ォヽ < ォオ", col.compare("ォヽ", "ォオ") < 0);
        test.ok("ｫヽ < ｫオ", col.compare("ｫヽ", "ｫオ") < 0);
        
        test.ok("カヽ < カカ", col.compare("カヽ", "カカ") < 0);
        test.ok("ｶヽ < ｶカ", col.compare("ｶヽ", "ｶカ") < 0);
        test.ok("ヵヽ < ヵカ", col.compare("ヵヽ", "ヵカ") < 0);
        test.ok("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
        test.ok("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
        
        test.ok("キヽ < キキ", col.compare("キヽ", "キキ") < 0);
        test.ok("ｷヽ < ｷキ", col.compare("ｷヽ", "ｷキ") < 0);
        test.ok("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
        test.ok("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
        test.ok("キヾ < キギ", col.compare("キヾ", "キギ") < 0);
        test.ok("ｷヾ < ｷギ", col.compare("ｷヾ", "ｷギ") < 0);
        test.ok("ギヾ < ギギ", col.compare("ギヾ", "ギギ") < 0);
        test.ok("ギヾ < ギギ", col.compare("ギヾ", "ギギ") < 0);
    
        test.ok("クヽ < クク", col.compare("クヽ", "クク") < 0);
        test.ok("ｸヽ < ｸク", col.compare("ｸヽ", "ｸク") < 0);
        test.ok("ㇰヽ < ㇰク", col.compare("ㇰヽ", "ㇰク") < 0);
        test.ok("グヽ < グク", col.compare("グヽ", "グク") < 0);
        test.ok("グヽ < グク", col.compare("グヽ", "グク") < 0);
        test.ok("クヾ < クグ", col.compare("クヾ", "クグ") < 0);
        test.ok("ｸヾ < ｸグ", col.compare("ｸヾ", "ｸグ") < 0);
        test.ok("ㇰヾ < ㇰグ", col.compare("ㇰヾ", "ㇰグ") < 0);
        test.ok("グヾ < ググ", col.compare("グヾ", "ググ") < 0);
        test.ok("グヾ < ググ", col.compare("グヾ", "ググ") < 0);
        
        test.ok("ケヽ < ケケ", col.compare("ケヽ", "ケケ") < 0);
        test.ok("ｹヽ < ｹケ", col.compare("ｹヽ", "ｹケ") < 0);
        test.ok("ヶヽ < ヶケ", col.compare("ヶヽ", "ヶケ") < 0);
        test.ok("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
        test.ok("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
        
        test.ok("コヽ < ココ", col.compare("コヽ", "ココ") < 0);
        test.ok("ｺヽ < ｺコ", col.compare("ｺヽ", "ｺコ") < 0);
        test.ok("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
        test.ok("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
        test.ok("コヾ < コゴ", col.compare("コヾ", "コゴ") < 0);
        test.ok("ｺヾ < ｺゴ", col.compare("ｺヾ", "ｺゴ") < 0);
        test.ok("ゴヾ < ゴゴ", col.compare("ゴヾ", "ゴゴ") < 0);
        test.ok("ゴヾ < ゴゴ", col.compare("ゴヾ", "ゴゴ") < 0);
        
        test.ok("サヽ < ササ", col.compare("サヽ", "ササ") < 0);
        test.ok("ｻヽ < ｻサ", col.compare("ｻヽ", "ｻサ") < 0);
        test.ok("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
        test.ok("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
        test.ok("サヾ < サザ", col.compare("サヾ", "サザ") < 0);
        test.ok("ｻヾ < ｻザ", col.compare("ｻヾ", "ｻザ") < 0);
        test.ok("ザヾ < ザザ", col.compare("ザヾ", "ザザ") < 0);
        test.ok("ザヾ < ザザ", col.compare("ザヾ", "ザザ") < 0);
    
        test.ok("シヽ < シシ", col.compare("シヽ", "シシ") < 0);
        test.ok("ｼヽ < ｼシ", col.compare("ｼヽ", "ｼシ") < 0);
        test.ok("ㇱヽ < ㇱシ", col.compare("ㇱヽ", "ㇱシ") < 0);
        test.ok("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
        test.ok("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
        test.ok("シヾ < シジ", col.compare("シヾ", "シジ") < 0);
        test.ok("ｼヾ < ｼジ", col.compare("ｼヾ", "ｼジ") < 0);
        test.ok("ㇱヾ < ㇱジ", col.compare("ㇱヾ", "ㇱジ") < 0);
        test.ok("ジヾ < ジジ", col.compare("ジヾ", "ジジ") < 0);
        test.ok("ジヾ < ジジ", col.compare("ジヾ", "ジジ") < 0);
    
        test.ok("スヽ < スス", col.compare("スヽ", "スス") < 0);
        test.ok("ｽヽ < ｽス", col.compare("ｽヽ", "ｽス") < 0);
        test.ok("ㇲヽ < ㇲス", col.compare("ㇲヽ", "ㇲス") < 0);
        test.ok("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
        test.ok("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
        test.ok("スヾ < スズ", col.compare("スヾ", "スズ") < 0);
        test.ok("ｽヾ < ｽズ", col.compare("ｽヾ", "ｽズ") < 0);
        test.ok("ㇲヾ < ㇲズ", col.compare("ㇲヾ", "ㇲズ") < 0);
        test.ok("ズヾ < ズズ", col.compare("ズヾ", "ズズ") < 0);
        test.ok("ズヾ < ズズ", col.compare("ズヾ", "ズズ") < 0);
    
        test.ok("セヽ < セセ", col.compare("セヽ", "セセ") < 0);
        test.ok("ｾヽ < ｾセ", col.compare("ｾヽ", "ｾセ") < 0);
        test.ok("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
        test.ok("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
        test.ok("セヾ < セゼ", col.compare("セヾ", "セゼ") < 0);
        test.ok("ｾヾ < ｾゼ", col.compare("ｾヾ", "ｾゼ") < 0);
        test.ok("ゼヾ < ゼゼ", col.compare("ゼヾ", "ゼゼ") < 0);
        test.ok("ゼヾ < ゼゼ", col.compare("ゼヾ", "ゼゼ") < 0);
    
        test.ok("ソヽ < ソソ", col.compare("ソヽ", "ソソ") < 0);
        test.ok("ｿヽ < ｿソ", col.compare("ｿヽ", "ｿソ") < 0);
        test.ok("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
        test.ok("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
        test.ok("ソヾ < ソゾ", col.compare("ソヾ", "ソゾ") < 0);
        test.ok("ｿヾ < ｿゾ", col.compare("ｿヾ", "ｿゾ") < 0);
        test.ok("ゾヾ < ゾゾ", col.compare("ゾヾ", "ゾゾ") < 0);
        test.ok("ゾヾ < ゾゾ", col.compare("ゾヾ", "ゾゾ") < 0);
    
        test.ok("タヽ < タタ", col.compare("タヽ", "タタ") < 0);
        test.ok("ﾀヽ < ﾀタ", col.compare("ﾀヽ", "ﾀタ") < 0);
        test.ok("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
        test.ok("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
        test.ok("タヾ < タダ", col.compare("タヾ", "タダ") < 0);
        test.ok("ﾀヾ < ﾀダ", col.compare("ﾀヾ", "ﾀダ") < 0);
        test.ok("ダヾ < ダダ", col.compare("ダヾ", "ダダ") < 0);
        test.ok("ダヾ < ダダ", col.compare("ダヾ", "ダダ") < 0);
    
        test.ok("チヽ < チチ", col.compare("チヽ", "チチ") < 0);
        test.ok("ﾁヽ < ﾁチ", col.compare("ﾁヽ", "ﾁチ") < 0);
        test.ok("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
        test.ok("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
        test.ok("チヾ < チヂ", col.compare("チヾ", "チヂ") < 0);
        test.ok("ﾁヾ < ﾁヂ", col.compare("ﾁヾ", "ﾁヂ") < 0);
        test.ok("ヂヾ < ヂヂ", col.compare("ヂヾ", "ヂヂ") < 0);
        test.ok("ヂヾ < ヂヂ", col.compare("ヂヾ", "ヂヂ") < 0);
    
        test.ok("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
        test.ok("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
        test.ok("ッヽ < ッツ", col.compare("ッヽ", "ッツ") < 0);
        test.ok("ｯヽ < ｯツ", col.compare("ｯヽ", "ｯツ") < 0);
        test.ok("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
        test.ok("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
        test.ok("ツヾ < ツヅ", col.compare("ツヾ", "ツヅ") < 0);
        test.ok("ﾂヾ < ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") < 0);
        test.ok("ヅヾ < ヅヅ", col.compare("ヅヾ", "ヅヅ") < 0);
        test.ok("ヅヾ < ヅヅ", col.compare("ヅヾ", "ヅヅ") < 0);
        test.ok("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
        test.ok("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
        test.ok("ッヾ < ッヅ", col.compare("ッヾ", "ッヅ") < 0);
        test.ok("ｯヾ < ｯヅ", col.compare("ｯヾ", "ｯヅ") < 0);
        test.ok("ツヾ < ツヅ", col.compare("ツヾ", "ツヅ") < 0);
        test.ok("ﾂヾ < ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") < 0);
    
        test.ok("テヽ < テテ", col.compare("テヽ", "テテ") < 0);
        test.ok("ﾃヽ < ﾃテ", col.compare("ﾃヽ", "ﾃテ") < 0);
        test.ok("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
        test.ok("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
        test.ok("テヾ < テデ", col.compare("テヾ", "テデ") < 0);
        test.ok("ﾃヾ < ﾃデ", col.compare("ﾃヾ", "ﾃデ") < 0);
        test.ok("デヾ < デデ", col.compare("デヾ", "デデ") < 0);
        test.ok("デヾ < デデ", col.compare("デヾ", "デデ") < 0);
    
        test.ok("トヽ < トト", col.compare("トヽ", "トト") < 0);
        test.ok("ﾄヽ < ﾄト", col.compare("ﾄヽ", "ﾄト") < 0);
        test.ok("ㇳヽ < ㇳト", col.compare("ㇳヽ", "ㇳト") < 0);
        test.ok("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
        test.ok("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
        test.ok("トヾ < トド", col.compare("トヾ", "トド") < 0);
        test.ok("ﾄヾ < ﾄド", col.compare("ﾄヾ", "ﾄド") < 0);
        test.ok("ㇳヾ < ㇳド", col.compare("ㇳヾ", "ㇳド") < 0);
        test.ok("ドヾ < ドド", col.compare("ドヾ", "ドド") < 0);
        test.ok("ドヾ < ドド", col.compare("ドヾ", "ドド") < 0);
    
        test.ok("ナヽ < ナナ", col.compare("ナヽ", "ナナ") < 0);
        test.ok("ﾅヽ < ﾅナ", col.compare("ﾅヽ", "ﾅナ") < 0);
    
        test.ok("ニヽ < ニニ", col.compare("ニヽ", "ニニ") < 0);
        test.ok("ﾆヽ < ﾆニ", col.compare("ﾆヽ", "ﾆニ") < 0);
    
        test.ok("ヌヽ < ヌヌ", col.compare("ヌヽ", "ヌヌ") < 0);
        test.ok("ﾇヽ < ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") < 0);
        test.ok("ㇴヽ < ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") < 0);
        
        test.ok("ネヽ < ネネ", col.compare("ネヽ", "ネネ") < 0);
        test.ok("ﾈヽ < ﾈネ", col.compare("ﾈヽ", "ﾈネ") < 0);
        
        test.ok("ノヽ < ノノ", col.compare("ノヽ", "ノノ") < 0);
        test.ok("ﾉヽ < ﾉノ", col.compare("ﾉヽ", "ﾉノ") < 0);
        
        test.ok("ハヽ < ハハ", col.compare("ハヽ", "ハハ") < 0);
        test.ok("ﾊヽ < ﾊハ", col.compare("ﾊヽ", "ﾊハ") < 0);
        test.ok("ㇵヽ < ㇵハ", col.compare("ㇵヽ", "ㇵハ") < 0);
        test.ok("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
        test.ok("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
        test.ok("ハヾ < ハバ", col.compare("ハヾ", "ハバ") < 0);
        test.ok("ﾊヾ < ﾊバ", col.compare("ﾊヾ", "ﾊバ") < 0);
        test.ok("ㇵヾ < ㇵバ", col.compare("ㇵヾ", "ㇵバ") < 0);
        test.ok("バヾ < ババ", col.compare("バヾ", "ババ") < 0);
        test.ok("バヾ < ババ", col.compare("バヾ", "ババ") < 0);
        test.ok("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
        test.ok("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
        test.ok("パヾ < パバ", col.compare("パヾ", "パバ") < 0);
        test.ok("パヾ < パバ", col.compare("パヾ", "パバ") < 0);
        
        test.ok("ヒヽ < ヒヒ", col.compare("ヒヽ", "ヒヒ") < 0);
        test.ok("ﾋヽ < ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") < 0);
        test.ok("ㇶヽ < ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") < 0);
        test.ok("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
        test.ok("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
        test.ok("ヒヾ < ヒビ", col.compare("ヒヾ", "ヒビ") < 0);
        test.ok("ﾋヾ < ﾋビ", col.compare("ﾋヾ", "ﾋビ") < 0);
        test.ok("ㇶヾ < ㇶビ", col.compare("ㇶヾ", "ㇶビ") < 0);
        test.ok("ビヾ < ビビ", col.compare("ビヾ", "ビビ") < 0);
        test.ok("ビヾ < ビビ", col.compare("ビヾ", "ビビ") < 0);
        test.ok("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
        test.ok("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
        test.ok("ピヾ < ピビ", col.compare("ピヾ", "ピビ") < 0);
        test.ok("ピヾ < ピビ", col.compare("ピヾ", "ピビ") < 0);
        
        test.ok("フヽ < フフ", col.compare("フヽ", "フフ") < 0);
        test.ok("ﾌヽ < ﾌフ", col.compare("ﾌヽ", "ﾌフ") < 0);
        test.ok("ㇷヽ < ㇷフ", col.compare("ㇷヽ", "ㇷフ") < 0);
        test.ok("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
        test.ok("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
        test.ok("フヾ < フブ", col.compare("フヾ", "フブ") < 0);
        test.ok("ﾌヾ < ﾌブ", col.compare("ﾌヾ", "ﾌブ") < 0);
        test.ok("ㇷヾ < ㇷブ", col.compare("ㇷヾ", "ㇷブ") < 0);
        test.ok("ブヾ < ブブ", col.compare("ブヾ", "ブブ") < 0);
        test.ok("ブヾ < ブブ", col.compare("ブヾ", "ブブ") < 0);
        test.ok("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
        test.ok("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
        test.ok("プヾ < プブ", col.compare("プヾ", "プブ") < 0);
        test.ok("プヾ < プブ", col.compare("プヾ", "プブ") < 0);
        
        test.ok("ヘヽ < ヘヘ", col.compare("ヘヽ", "ヘヘ") < 0);
        test.ok("ﾍヽ < ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") < 0);
        test.ok("ㇸヽ < ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") < 0);
        test.ok("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
        test.ok("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
        test.ok("ヘヾ < ヘベ", col.compare("ヘヾ", "ヘベ") < 0);
        test.ok("ﾍヾ < ﾍベ", col.compare("ﾍヾ", "ﾍベ") < 0);
        test.ok("ㇸヾ < ㇸベ", col.compare("ㇸヾ", "ㇸベ") < 0);
        test.ok("ベヾ < ベベ", col.compare("ベヾ", "ベベ") < 0);
        test.ok("ベヾ < ベベ", col.compare("ベヾ", "ベベ") < 0);
        test.ok("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
        test.ok("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
        test.ok("ペヾ < ペベ", col.compare("ペヾ", "ペベ") < 0);
        test.ok("ペヾ < ペベ", col.compare("ペヾ", "ペベ") < 0);
        
        test.ok("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
        test.ok("ﾎヽ < ﾎホ", col.compare("ﾎヽ", "ﾎホ") < 0);
        test.ok("ㇹヽ < ㇹホ", col.compare("ㇹヽ", "ㇹホ") < 0);
        test.ok("ボヽ < ボホ", col.compare("ボヽ", "ボホ") < 0);
        test.ok("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
        test.ok("ホヾ < ホボ", col.compare("ホヾ", "ホボ") < 0);
        test.ok("ﾎヾ < ﾎボ", col.compare("ﾎヾ", "ﾎボ") < 0);
        test.ok("ㇹヾ < ㇹボ", col.compare("ㇹヾ", "ㇹボ") < 0);
        test.ok("ボヾ < ボボ", col.compare("ボヾ", "ボボ") < 0);
        test.ok("ボヾ < ボボ", col.compare("ボヾ", "ボボ") < 0);
        test.ok("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
        test.ok("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
        test.ok("ポヾ < ポボ", col.compare("ポヾ", "ポボ") < 0);
        test.ok("ポヾ < ポボ", col.compare("ポヾ", "ポボ") < 0);
        
        test.ok("マヽ < ママ", col.compare("マヽ", "ママ") < 0);
        test.ok("ﾏヽ < ﾏマ", col.compare("ﾏヽ", "ﾏマ") < 0);
        
        test.ok("ミヽ < ミミ", col.compare("ミヽ", "ミミ") < 0);
        test.ok("ﾐヽ < ﾐミ", col.compare("ﾐヽ", "ﾐミ") < 0);
        
        test.ok("ムヽ < ムム", col.compare("ムヽ", "ムム") < 0);
        test.ok("ﾑヽ < ﾑム", col.compare("ﾑヽ", "ﾑム") < 0);
        test.ok("ㇺヽ < ㇺム", col.compare("ㇺヽ", "ㇺム") < 0);
        
        test.ok("メヽ < メメ", col.compare("メヽ", "メメ") < 0);
        test.ok("ﾒヽ < ﾒメ", col.compare("ﾒヽ", "ﾒメ") < 0);
        
        test.ok("モヽ < モモ", col.compare("モヽ", "モモ") < 0);
        test.ok("ﾓヽ < ﾓモ", col.compare("ﾓヽ", "ﾓモ") < 0);
        
        test.ok("ヤヽ < ヤヤ", col.compare("ヤヽ", "ヤヤ") < 0);
        test.ok("ﾔヽ < ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") < 0);
        test.ok("ャヽ < ャヤ", col.compare("ャヽ", "ャヤ") < 0);
        test.ok("ｬヽ < ｬヤ", col.compare("ｬヽ", "ｬヤ") < 0);
        
        test.ok("ユヽ < ユユ", col.compare("ユヽ", "ユユ") < 0);
        test.ok("ﾕヽ < ﾕユ", col.compare("ﾕヽ", "ﾕユ") < 0);
        test.ok("ュヽ < ュユ", col.compare("ュヽ", "ュユ") < 0);
        test.ok("ｭヽ < ｭユ", col.compare("ｭヽ", "ｭユ") < 0);
        
        test.ok("ヨヽ < ヨヨ", col.compare("ヨヽ", "ヨヨ") < 0);
        test.ok("ﾖヽ < ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") < 0);
        test.ok("ョヽ < ョヨ", col.compare("ョヽ", "ョヨ") < 0);
        test.ok("ｮヽ < ｮヨ", col.compare("ｮヽ", "ｮヨ") < 0);
        
        test.ok("ラヽ < ララ", col.compare("ラヽ", "ララ") < 0);
        test.ok("ﾗヽ < ﾗラ", col.compare("ﾗヽ", "ﾗラ") < 0);
        test.ok("ㇻヽ < ㇻラ", col.compare("ㇻヽ", "ㇻラ") < 0);
        
        test.ok("リヽ < リリ", col.compare("リヽ", "リリ") < 0);
        test.ok("ﾘヽ < ﾘリ", col.compare("ﾘヽ", "ﾘリ") < 0);
        test.ok("ㇼヽ < ㇼリ", col.compare("ㇼヽ", "ㇼリ") < 0);
        
        test.ok("ルヽ < ルル", col.compare("ルヽ", "ルル") < 0);
        test.ok("ﾙヽ < ﾙル", col.compare("ﾙヽ", "ﾙル") < 0);
        test.ok("ㇽヽ < ㇽル", col.compare("ㇽヽ", "ㇽル") < 0);
        
        test.ok("レヽ < レレ", col.compare("レヽ", "レレ") < 0);
        test.ok("ﾚヽ < ﾚレ", col.compare("ﾚヽ", "ﾚレ") < 0);
        test.ok("ㇾヽ < ㇾレ", col.compare("ㇾヽ", "ㇾレ") < 0);
        
        test.ok("ロヽ < ロロ", col.compare("ロヽ", "ロロ") < 0);
        test.ok("ﾛヽ < ﾛロ", col.compare("ﾛヽ", "ﾛロ") < 0);
        test.ok("ㇿヽ < ㇿロ", col.compare("ㇿヽ", "ㇿロ") < 0);
        
        test.ok("ワヽ < ワワ", col.compare("ワヽ", "ワワ") < 0);
        test.ok("ﾜヽ < ﾜワ", col.compare("ﾜヽ", "ﾜワ") < 0);
        test.ok("ヮヽ < ヮワ", col.compare("ヮヽ", "ヮワ") < 0);
        test.ok("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
        test.ok("ヷヽ < ヷヷ", col.compare("ヷヽ", "ヷヷ") < 0);
        test.ok("ワヾ < ワヷ", col.compare("ワヾ", "ワヷ") < 0);
        test.ok("ﾜヾ < ﾜヷ", col.compare("ﾜヾ", "ﾜヷ") < 0);
        test.ok("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷヷ") < 0);
        test.ok("ヷヾ < ヷヷ", col.compare("ヷヾ", "ヷヷ") < 0);
        test.ok("ヮヾ < ヮヷ", col.compare("ヮヾ", "ヮヷ") < 0);
        
        test.ok("ヰヽ < ヰヰ", col.compare("ヰヽ", "ヰヰ") < 0);
        test.ok("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
        test.ok("ヸヽ < ヸヸ", col.compare("ヸヽ", "ヸヸ") < 0);
        test.ok("ヰヾ < ヰヸ", col.compare("ヰヾ", "ヰヸ") < 0);
        test.ok("ヸヾ < ヸヸ", col.compare("ヸヾ", "ヸヸ") < 0);
        test.ok("ヸヾ < ヸヸ", col.compare("ヸヾ", "ヸヸ") < 0);
        
        test.ok("ヱヽ < ヱヱ", col.compare("ヱヽ", "ヱヱ") < 0);
        test.ok("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
        test.ok("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
        test.ok("ヱヾ < ヱヹ", col.compare("ヱヾ", "ヱヹ") < 0);
        test.ok("ヹヾ < ヹヹ", col.compare("ヹヾ", "ヹヹ") < 0);
        test.ok("ヹヾ < ヹヹ", col.compare("ヹヾ", "ヹヹ") < 0);
        
        test.ok("ヲヽ < ヲヲ", col.compare("ヲヽ", "ヲヲ") < 0);
        test.ok("ｦヽ < ｦヲ", col.compare("ｦヽ", "ｦヲ") < 0);
        test.ok("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
        test.ok("ヺヽ < ヺヺ", col.compare("ヺヽ", "ヺヺ") < 0);
        test.ok("ヲヾ < ヲヺ", col.compare("ヲヾ", "ヲヺ") < 0);
        test.ok("ｦヾ < ｦヺ", col.compare("ｦヾ", "ｦヺ") < 0);
        test.ok("ヺヾ < ヺヺ", col.compare("ヺヾ", "ヺヺ") < 0);
        test.ok("ヺヾ < ヺヺ", col.compare("ヺヾ", "ヺヺ") < 0);
        
        test.ok("ンヽ < ンン", col.compare("ンヽ", "ンン") < 0);
        test.ok("ﾝヽ < ﾝン", col.compare("ﾝヽ", "ﾝン") < 0);    
        test.done();
    },
    
    testJSCollatorKatakanaIterationMarksSec_ja: function(test) {
        test.expect(310);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("アヽ = アア", col.compare("アヽ", "アア") === 0);
        test.ok("ｱヽ = ｱア", col.compare("ｱヽ", "ｱア") === 0);
        test.ok("ァヽ = ァア", col.compare("ァヽ", "ァア") === 0);
        test.ok("ｧヽ = ｧア", col.compare("ｧヽ", "ｧア") === 0);
        test.ok("イヽ = イイ", col.compare("イヽ", "イイ") === 0);
        test.ok("ｲヽ = ｲイ", col.compare("ｲヽ", "ｲイ") === 0);
        test.ok("ィヽ = ィイ", col.compare("ィヽ", "ィイ") === 0);
        test.ok("ｨヽ = ｨイ", col.compare("ｨヽ", "ｨイ") === 0);
        
        test.ok("ウヽ = ウウ", col.compare("ウヽ", "ウウ") === 0);
        test.ok("ｳヽ = ｳウ", col.compare("ｳヽ", "ｳウ") === 0);
        test.ok("ゥヽ = ゥウ", col.compare("ゥヽ", "ゥウ") === 0);
        test.ok("ｩヽ = ｩウ", col.compare("ｩヽ", "ｩウ") === 0);
        test.ok("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
        test.ok("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
        test.ok("ウヾ = ウヴ", col.compare("ウヾ", "ウヴ") === 0);
        test.ok("ｳヾ = ｳヴ", col.compare("ｳヾ", "ｳヴ") === 0);
        test.ok("ゥヾ = ゥヴ", col.compare("ゥヾ", "ゥヴ") === 0);
        test.ok("ｩヾ = ｩヴ", col.compare("ｩヾ", "ｩヴ") === 0);
        test.ok("ヴヾ = ヴヴ", col.compare("ヴヾ", "ヴヴ") === 0);
        test.ok("ヴヾ = ヴヴ", col.compare("ヴヾ", "ヴヴ") === 0);
        
        test.ok("エヽ = エエ", col.compare("エヽ", "エエ") === 0);
        test.ok("ｴヽ = ｴエ", col.compare("ｴヽ", "ｴエ") === 0);
        test.ok("ェヽ = ェエ", col.compare("ェヽ", "ェエ") === 0);
        test.ok("ｪヽ = ｪエ", col.compare("ｪヽ", "ｪエ") === 0);
        
        test.ok("オヽ = オオ", col.compare("オヽ", "オオ") === 0);
        test.ok("ｵヽ = ｵオ", col.compare("ｵヽ", "ｵオ") === 0);
        test.ok("ォヽ = ォオ", col.compare("ォヽ", "ォオ") === 0);
        test.ok("ｫヽ = ｫオ", col.compare("ｫヽ", "ｫオ") === 0);
        
        test.ok("カヽ = カカ", col.compare("カヽ", "カカ") === 0);
        test.ok("ｶヽ = ｶカ", col.compare("ｶヽ", "ｶカ") === 0);
        test.ok("ヵヽ = ヵカ", col.compare("ヵヽ", "ヵカ") === 0);
        test.ok("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
        test.ok("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
        
        test.ok("キヽ = キキ", col.compare("キヽ", "キキ") === 0);
        test.ok("ｷヽ = ｷキ", col.compare("ｷヽ", "ｷキ") === 0);
        test.ok("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
        test.ok("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
        test.ok("キヾ = キギ", col.compare("キヾ", "キギ") === 0);
        test.ok("ｷヾ = ｷギ", col.compare("ｷヾ", "ｷギ") === 0);
        test.ok("ギヾ = ギギ", col.compare("ギヾ", "ギギ") === 0);
        test.ok("ギヾ = ギギ", col.compare("ギヾ", "ギギ") === 0);
    
        test.ok("クヽ = クク", col.compare("クヽ", "クク") === 0);
        test.ok("ｸヽ = ｸク", col.compare("ｸヽ", "ｸク") === 0);
        test.ok("ㇰヽ = ㇰク", col.compare("ㇰヽ", "ㇰク") === 0);
        test.ok("グヽ = グク", col.compare("グヽ", "グク") === 0);
        test.ok("グヽ = グク", col.compare("グヽ", "グク") === 0);
        test.ok("クヾ = クグ", col.compare("クヾ", "クグ") === 0);
        test.ok("ｸヾ = ｸグ", col.compare("ｸヾ", "ｸグ") === 0);
        test.ok("ㇰヾ = ㇰグ", col.compare("ㇰヾ", "ㇰグ") === 0);
        test.ok("グヾ = ググ", col.compare("グヾ", "ググ") === 0);
        test.ok("グヾ = ググ", col.compare("グヾ", "ググ") === 0);
        
        test.ok("ケヽ = ケケ", col.compare("ケヽ", "ケケ") === 0);
        test.ok("ｹヽ = ｹケ", col.compare("ｹヽ", "ｹケ") === 0);
        test.ok("ヶヽ = ヶケ", col.compare("ヶヽ", "ヶケ") === 0);
        test.ok("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
        test.ok("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
        
        test.ok("コヽ = ココ", col.compare("コヽ", "ココ") === 0);
        test.ok("ｺヽ = ｺコ", col.compare("ｺヽ", "ｺコ") === 0);
        test.ok("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
        test.ok("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
        test.ok("コヾ = コゴ", col.compare("コヾ", "コゴ") === 0);
        test.ok("ｺヾ = ｺゴ", col.compare("ｺヾ", "ｺゴ") === 0);
        test.ok("ゴヾ = ゴゴ", col.compare("ゴヾ", "ゴゴ") === 0);
        test.ok("ゴヾ = ゴゴ", col.compare("ゴヾ", "ゴゴ") === 0);
        
        test.ok("サヽ = ササ", col.compare("サヽ", "ササ") === 0);
        test.ok("ｻヽ = ｻサ", col.compare("ｻヽ", "ｻサ") === 0);
        test.ok("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
        test.ok("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
        test.ok("サヾ = サザ", col.compare("サヾ", "サザ") === 0);
        test.ok("ｻヾ = ｻザ", col.compare("ｻヾ", "ｻザ") === 0);
        test.ok("ザヾ = ザザ", col.compare("ザヾ", "ザザ") === 0);
        test.ok("ザヾ = ザザ", col.compare("ザヾ", "ザザ") === 0);
    
        test.ok("シヽ = シシ", col.compare("シヽ", "シシ") === 0);
        test.ok("ｼヽ = ｼシ", col.compare("ｼヽ", "ｼシ") === 0);
        test.ok("ㇱヽ = ㇱシ", col.compare("ㇱヽ", "ㇱシ") === 0);
        test.ok("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
        test.ok("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
        test.ok("シヾ = シジ", col.compare("シヾ", "シジ") === 0);
        test.ok("ｼヾ = ｼジ", col.compare("ｼヾ", "ｼジ") === 0);
        test.ok("ㇱヾ = ㇱジ", col.compare("ㇱヾ", "ㇱジ") === 0);
        test.ok("ジヾ = ジジ", col.compare("ジヾ", "ジジ") === 0);
        test.ok("ジヾ = ジジ", col.compare("ジヾ", "ジジ") === 0);
    
        test.ok("スヽ = スス", col.compare("スヽ", "スス") === 0);
        test.ok("ｽヽ = ｽス", col.compare("ｽヽ", "ｽス") === 0);
        test.ok("ㇲヽ = ㇲス", col.compare("ㇲヽ", "ㇲス") === 0);
        test.ok("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
        test.ok("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
        test.ok("スヾ = スズ", col.compare("スヾ", "スズ") === 0);
        test.ok("ｽヾ = ｽズ", col.compare("ｽヾ", "ｽズ") === 0);
        test.ok("ㇲヾ = ㇲズ", col.compare("ㇲヾ", "ㇲズ") === 0);
        test.ok("ズヾ = ズズ", col.compare("ズヾ", "ズズ") === 0);
        test.ok("ズヾ = ズズ", col.compare("ズヾ", "ズズ") === 0);
    
        test.ok("セヽ = セセ", col.compare("セヽ", "セセ") === 0);
        test.ok("ｾヽ = ｾセ", col.compare("ｾヽ", "ｾセ") === 0);
        test.ok("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
        test.ok("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
        test.ok("セヾ = セゼ", col.compare("セヾ", "セゼ") === 0);
        test.ok("ｾヾ = ｾゼ", col.compare("ｾヾ", "ｾゼ") === 0);
        test.ok("ゼヾ = ゼゼ", col.compare("ゼヾ", "ゼゼ") === 0);
        test.ok("ゼヾ = ゼゼ", col.compare("ゼヾ", "ゼゼ") === 0);
    
        test.ok("ソヽ = ソソ", col.compare("ソヽ", "ソソ") === 0);
        test.ok("ｿヽ = ｿソ", col.compare("ｿヽ", "ｿソ") === 0);
        test.ok("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
        test.ok("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
        test.ok("ソヾ = ソゾ", col.compare("ソヾ", "ソゾ") === 0);
        test.ok("ｿヾ = ｿゾ", col.compare("ｿヾ", "ｿゾ") === 0);
        test.ok("ゾヾ = ゾゾ", col.compare("ゾヾ", "ゾゾ") === 0);
        test.ok("ゾヾ = ゾゾ", col.compare("ゾヾ", "ゾゾ") === 0);
    
        test.ok("タヽ = タタ", col.compare("タヽ", "タタ") === 0);
        test.ok("ﾀヽ = ﾀタ", col.compare("ﾀヽ", "ﾀタ") === 0);
        test.ok("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
        test.ok("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
        test.ok("タヾ = タダ", col.compare("タヾ", "タダ") === 0);
        test.ok("ﾀヾ = ﾀダ", col.compare("ﾀヾ", "ﾀダ") === 0);
        test.ok("ダヾ = ダダ", col.compare("ダヾ", "ダダ") === 0);
        test.ok("ダヾ = ダダ", col.compare("ダヾ", "ダダ") === 0);
    
        test.ok("チヽ = チチ", col.compare("チヽ", "チチ") === 0);
        test.ok("ﾁヽ = ﾁチ", col.compare("ﾁヽ", "ﾁチ") === 0);
        test.ok("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
        test.ok("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
        test.ok("チヾ = チヂ", col.compare("チヾ", "チヂ") === 0);
        test.ok("ﾁヾ = ﾁヂ", col.compare("ﾁヾ", "ﾁヂ") === 0);
        test.ok("ヂヾ = ヂヂ", col.compare("ヂヾ", "ヂヂ") === 0);
        test.ok("ヂヾ = ヂヂ", col.compare("ヂヾ", "ヂヂ") === 0);
    
        test.ok("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
        test.ok("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
        test.ok("ッヽ = ッツ", col.compare("ッヽ", "ッツ") === 0);
        test.ok("ｯヽ = ｯツ", col.compare("ｯヽ", "ｯツ") === 0);
        test.ok("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
        test.ok("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
        test.ok("ツヾ = ツヅ", col.compare("ツヾ", "ツヅ") === 0);
        test.ok("ﾂヾ = ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") === 0);
        test.ok("ヅヾ = ヅヅ", col.compare("ヅヾ", "ヅヅ") === 0);
        test.ok("ヅヾ = ヅヅ", col.compare("ヅヾ", "ヅヅ") === 0);
        test.ok("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
        test.ok("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
        test.ok("ッヾ = ッヅ", col.compare("ッヾ", "ッヅ") === 0);
        test.ok("ｯヾ = ｯヅ", col.compare("ｯヾ", "ｯヅ") === 0);
        test.ok("ツヾ = ツヅ", col.compare("ツヾ", "ツヅ") === 0);
        test.ok("ﾂヾ = ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") === 0);
    
        test.ok("テヽ = テテ", col.compare("テヽ", "テテ") === 0);
        test.ok("ﾃヽ = ﾃテ", col.compare("ﾃヽ", "ﾃテ") === 0);
        test.ok("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
        test.ok("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
        test.ok("テヾ = テデ", col.compare("テヾ", "テデ") === 0);
        test.ok("ﾃヾ = ﾃデ", col.compare("ﾃヾ", "ﾃデ") === 0);
        test.ok("デヾ = デデ", col.compare("デヾ", "デデ") === 0);
        test.ok("デヾ = デデ", col.compare("デヾ", "デデ") === 0);
    
        test.ok("トヽ = トト", col.compare("トヽ", "トト") === 0);
        test.ok("ﾄヽ = ﾄト", col.compare("ﾄヽ", "ﾄト") === 0);
        test.ok("ㇳヽ = ㇳト", col.compare("ㇳヽ", "ㇳト") === 0);
        test.ok("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
        test.ok("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
        test.ok("トヾ = トド", col.compare("トヾ", "トド") === 0);
        test.ok("ﾄヾ = ﾄド", col.compare("ﾄヾ", "ﾄド") === 0);
        test.ok("ㇳヾ = ㇳド", col.compare("ㇳヾ", "ㇳド") === 0);
        test.ok("ドヾ = ドド", col.compare("ドヾ", "ドド") === 0);
        test.ok("ドヾ = ドド", col.compare("ドヾ", "ドド") === 0);
    
        test.ok("ナヽ = ナナ", col.compare("ナヽ", "ナナ") === 0);
        test.ok("ﾅヽ = ﾅナ", col.compare("ﾅヽ", "ﾅナ") === 0);
    
        test.ok("ニヽ = ニニ", col.compare("ニヽ", "ニニ") === 0);
        test.ok("ﾆヽ = ﾆニ", col.compare("ﾆヽ", "ﾆニ") === 0);
    
        test.ok("ヌヽ = ヌヌ", col.compare("ヌヽ", "ヌヌ") === 0);
        test.ok("ﾇヽ = ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") === 0);
        test.ok("ㇴヽ = ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") === 0);
        
        test.ok("ネヽ = ネネ", col.compare("ネヽ", "ネネ") === 0);
        test.ok("ﾈヽ = ﾈネ", col.compare("ﾈヽ", "ﾈネ") === 0);
        
        test.ok("ノヽ = ノノ", col.compare("ノヽ", "ノノ") === 0);
        test.ok("ﾉヽ = ﾉノ", col.compare("ﾉヽ", "ﾉノ") === 0);
        
        test.ok("ハヽ = ハハ", col.compare("ハヽ", "ハハ") === 0);
        test.ok("ﾊヽ = ﾊハ", col.compare("ﾊヽ", "ﾊハ") === 0);
        test.ok("ㇵヽ = ㇵハ", col.compare("ㇵヽ", "ㇵハ") === 0);
        test.ok("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
        test.ok("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
        test.ok("ハヾ = ハバ", col.compare("ハヾ", "ハバ") === 0);
        test.ok("ﾊヾ = ﾊバ", col.compare("ﾊヾ", "ﾊバ") === 0);
        test.ok("ㇵヾ = ㇵバ", col.compare("ㇵヾ", "ㇵバ") === 0);
        test.ok("バヾ = ババ", col.compare("バヾ", "ババ") === 0);
        test.ok("バヾ = ババ", col.compare("バヾ", "ババ") === 0);
        test.ok("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
        test.ok("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
        test.ok("パヾ = パバ", col.compare("パヾ", "パバ") === 0);
        test.ok("パヾ = パバ", col.compare("パヾ", "パバ") === 0);
        
        test.ok("ヒヽ = ヒヒ", col.compare("ヒヽ", "ヒヒ") === 0);
        test.ok("ﾋヽ = ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") === 0);
        test.ok("ㇶヽ = ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") === 0);
        test.ok("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
        test.ok("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
        test.ok("ヒヾ = ヒビ", col.compare("ヒヾ", "ヒビ") === 0);
        test.ok("ﾋヾ = ﾋビ", col.compare("ﾋヾ", "ﾋビ") === 0);
        test.ok("ㇶヾ = ㇶビ", col.compare("ㇶヾ", "ㇶビ") === 0);
        test.ok("ビヾ = ビビ", col.compare("ビヾ", "ビビ") === 0);
        test.ok("ビヾ = ビビ", col.compare("ビヾ", "ビビ") === 0);
        test.ok("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
        test.ok("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
        test.ok("ピヾ = ピビ", col.compare("ピヾ", "ピビ") === 0);
        test.ok("ピヾ = ピビ", col.compare("ピヾ", "ピビ") === 0);
        
        test.ok("フヽ = フフ", col.compare("フヽ", "フフ") === 0);
        test.ok("ﾌヽ = ﾌフ", col.compare("ﾌヽ", "ﾌフ") === 0);
        test.ok("ㇷヽ = ㇷフ", col.compare("ㇷヽ", "ㇷフ") === 0);
        test.ok("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
        test.ok("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
        test.ok("フヾ = フブ", col.compare("フヾ", "フブ") === 0);
        test.ok("ﾌヾ = ﾌブ", col.compare("ﾌヾ", "ﾌブ") === 0);
        test.ok("ㇷヾ = ㇷブ", col.compare("ㇷヾ", "ㇷブ") === 0);
        test.ok("ブヾ = ブブ", col.compare("ブヾ", "ブブ") === 0);
        test.ok("ブヾ = ブブ", col.compare("ブヾ", "ブブ") === 0);
        test.ok("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
        test.ok("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
        test.ok("プヾ = プブ", col.compare("プヾ", "プブ") === 0);
        test.ok("プヾ = プブ", col.compare("プヾ", "プブ") === 0);
        
        test.ok("ヘヽ = ヘヘ", col.compare("ヘヽ", "ヘヘ") === 0);
        test.ok("ﾍヽ = ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") === 0);
        test.ok("ㇸヽ = ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") === 0);
        test.ok("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
        test.ok("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
        test.ok("ヘヾ = ヘベ", col.compare("ヘヾ", "ヘベ") === 0);
        test.ok("ﾍヾ = ﾍベ", col.compare("ﾍヾ", "ﾍベ") === 0);
        test.ok("ㇸヾ = ㇸベ", col.compare("ㇸヾ", "ㇸベ") === 0);
        test.ok("ベヾ = ベベ", col.compare("ベヾ", "ベベ") === 0);
        test.ok("ベヾ = ベベ", col.compare("ベヾ", "ベベ") === 0);
        test.ok("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
        test.ok("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
        test.ok("ペヾ = ペベ", col.compare("ペヾ", "ペベ") === 0);
        test.ok("ペヾ = ペベ", col.compare("ペヾ", "ペベ") === 0);
        
        test.ok("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
        test.ok("ﾎヽ = ﾎホ", col.compare("ﾎヽ", "ﾎホ") === 0);
        test.ok("ㇹヽ = ㇹホ", col.compare("ㇹヽ", "ㇹホ") === 0);
        test.ok("ボヽ = ボホ", col.compare("ボヽ", "ボホ") === 0);
        test.ok("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
        test.ok("ホヾ = ホボ", col.compare("ホヾ", "ホボ") === 0);
        test.ok("ﾎヾ = ﾎボ", col.compare("ﾎヾ", "ﾎボ") === 0);
        test.ok("ㇹヾ = ㇹボ", col.compare("ㇹヾ", "ㇹボ") === 0);
        test.ok("ボヾ = ボボ", col.compare("ボヾ", "ボボ") === 0);
        test.ok("ボヾ = ボボ", col.compare("ボヾ", "ボボ") === 0);
        test.ok("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
        test.ok("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
        test.ok("ポヾ = ポボ", col.compare("ポヾ", "ポボ") === 0);
        test.ok("ポヾ = ポボ", col.compare("ポヾ", "ポボ") === 0);
        
        test.ok("マヽ = ママ", col.compare("マヽ", "ママ") === 0);
        test.ok("ﾏヽ = ﾏマ", col.compare("ﾏヽ", "ﾏマ") === 0);
        
        test.ok("ミヽ = ミミ", col.compare("ミヽ", "ミミ") === 0);
        test.ok("ﾐヽ = ﾐミ", col.compare("ﾐヽ", "ﾐミ") === 0);
        
        test.ok("ムヽ = ムム", col.compare("ムヽ", "ムム") === 0);
        test.ok("ﾑヽ = ﾑム", col.compare("ﾑヽ", "ﾑム") === 0);
        test.ok("ㇺヽ = ㇺム", col.compare("ㇺヽ", "ㇺム") === 0);
        
        test.ok("メヽ = メメ", col.compare("メヽ", "メメ") === 0);
        test.ok("ﾒヽ = ﾒメ", col.compare("ﾒヽ", "ﾒメ") === 0);
        
        test.ok("モヽ = モモ", col.compare("モヽ", "モモ") === 0);
        test.ok("ﾓヽ = ﾓモ", col.compare("ﾓヽ", "ﾓモ") === 0);
        
        test.ok("ヤヽ = ヤヤ", col.compare("ヤヽ", "ヤヤ") === 0);
        test.ok("ﾔヽ = ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") === 0);
        test.ok("ャヽ = ャヤ", col.compare("ャヽ", "ャヤ") === 0);
        test.ok("ｬヽ = ｬヤ", col.compare("ｬヽ", "ｬヤ") === 0);
        
        test.ok("ユヽ = ユユ", col.compare("ユヽ", "ユユ") === 0);
        test.ok("ﾕヽ = ﾕユ", col.compare("ﾕヽ", "ﾕユ") === 0);
        test.ok("ュヽ = ュユ", col.compare("ュヽ", "ュユ") === 0);
        test.ok("ｭヽ = ｭユ", col.compare("ｭヽ", "ｭユ") === 0);
        
        test.ok("ヨヽ = ヨヨ", col.compare("ヨヽ", "ヨヨ") === 0);
        test.ok("ﾖヽ = ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") === 0);
        test.ok("ョヽ = ョヨ", col.compare("ョヽ", "ョヨ") === 0);
        test.ok("ｮヽ = ｮヨ", col.compare("ｮヽ", "ｮヨ") === 0);
        
        test.ok("ラヽ = ララ", col.compare("ラヽ", "ララ") === 0);
        test.ok("ﾗヽ = ﾗラ", col.compare("ﾗヽ", "ﾗラ") === 0);
        test.ok("ㇻヽ = ㇻラ", col.compare("ㇻヽ", "ㇻラ") === 0);
        
        test.ok("リヽ = リリ", col.compare("リヽ", "リリ") === 0);
        test.ok("ﾘヽ = ﾘリ", col.compare("ﾘヽ", "ﾘリ") === 0);
        test.ok("ㇼヽ = ㇼリ", col.compare("ㇼヽ", "ㇼリ") === 0);
        
        test.ok("ルヽ = ルル", col.compare("ルヽ", "ルル") === 0);
        test.ok("ﾙヽ = ﾙル", col.compare("ﾙヽ", "ﾙル") === 0);
        test.ok("ㇽヽ = ㇽル", col.compare("ㇽヽ", "ㇽル") === 0);
        
        test.ok("レヽ = レレ", col.compare("レヽ", "レレ") === 0);
        test.ok("ﾚヽ = ﾚレ", col.compare("ﾚヽ", "ﾚレ") === 0);
        test.ok("ㇾヽ = ㇾレ", col.compare("ㇾヽ", "ㇾレ") === 0);
        
        test.ok("ロヽ = ロロ", col.compare("ロヽ", "ロロ") === 0);
        test.ok("ﾛヽ = ﾛロ", col.compare("ﾛヽ", "ﾛロ") === 0);
        test.ok("ㇿヽ = ㇿロ", col.compare("ㇿヽ", "ㇿロ") === 0);
        
        test.ok("ワヽ = ワワ", col.compare("ワヽ", "ワワ") === 0);
        test.ok("ﾜヽ = ﾜワ", col.compare("ﾜヽ", "ﾜワ") === 0);
        test.ok("ヮヽ = ヮワ", col.compare("ヮヽ", "ヮワ") === 0);
        test.ok("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
        test.ok("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
        test.ok("ワヾ = ワヷ", col.compare("ワヾ", "ワヷ") === 0);
        test.ok("ﾜヾ = ﾜヷ", col.compare("ﾜヾ", "ﾜヷ") === 0);
        test.ok("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷヷ") === 0);
        test.ok("ヷヾ = ヷヷ", col.compare("ヷヾ", "ヷヷ") === 0);
        test.ok("ヮヾ = ヮヷ", col.compare("ヮヾ", "ヮヷ") === 0);
        
        test.ok("ヰヽ = ヰヰ", col.compare("ヰヽ", "ヰヰ") === 0);
        test.ok("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
        test.ok("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
        test.ok("ヰヾ = ヰヸ", col.compare("ヰヾ", "ヰヸ") === 0);
        test.ok("ヸヾ = ヸヸ", col.compare("ヸヾ", "ヸヸ") === 0);
        test.ok("ヸヾ = ヸヸ", col.compare("ヸヾ", "ヸヸ") === 0);
        
        test.ok("ヱヽ = ヱヱ", col.compare("ヱヽ", "ヱヱ") === 0);
        test.ok("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
        test.ok("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
        test.ok("ヱヾ = ヱヹ", col.compare("ヱヾ", "ヱヹ") === 0);
        test.ok("ヹヾ = ヹヹ", col.compare("ヹヾ", "ヹヹ") === 0);
        test.ok("ヹヾ = ヹヹ", col.compare("ヹヾ", "ヹヹ") === 0);
        
        test.ok("ヲヽ = ヲヲ", col.compare("ヲヽ", "ヲヲ") === 0);
        test.ok("ｦヽ = ｦヲ", col.compare("ｦヽ", "ｦヲ") === 0);
        test.ok("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
        test.ok("ヺヽ = ヺヺ", col.compare("ヺヽ", "ヺヺ") === 0);
        test.ok("ヲヾ = ヲヺ", col.compare("ヲヾ", "ヲヺ") === 0);
        test.ok("ｦヾ = ｦヺ", col.compare("ｦヾ", "ｦヺ") === 0);
        test.ok("ヺヾ = ヺヺ", col.compare("ヺヾ", "ヺヺ") === 0);
        test.ok("ヺヾ = ヺヺ", col.compare("ヺヾ", "ヺヺ") === 0);
        
        test.ok("ンヽ = ンン", col.compare("ンヽ", "ンン") === 0);
        test.ok("ﾝヽ = ﾝン", col.compare("ﾝヽ", "ﾝン") === 0);    
        test.done();
    },
    
    testJSCollatorKatakanaIterationMarksPri_ja: function(test) {
        test.expect(310);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("アヽ = アア", col.compare("アヽ", "アア") === 0);
        test.ok("ｱヽ = ｱア", col.compare("ｱヽ", "ｱア") === 0);
        test.ok("ァヽ = ァア", col.compare("ァヽ", "ァア") === 0);
        test.ok("ｧヽ = ｧア", col.compare("ｧヽ", "ｧア") === 0);
        test.ok("イヽ = イイ", col.compare("イヽ", "イイ") === 0);
        test.ok("ｲヽ = ｲイ", col.compare("ｲヽ", "ｲイ") === 0);
        test.ok("ィヽ = ィイ", col.compare("ィヽ", "ィイ") === 0);
        test.ok("ｨヽ = ｨイ", col.compare("ｨヽ", "ｨイ") === 0);
        
        test.ok("ウヽ = ウウ", col.compare("ウヽ", "ウウ") === 0);
        test.ok("ｳヽ = ｳウ", col.compare("ｳヽ", "ｳウ") === 0);
        test.ok("ゥヽ = ゥウ", col.compare("ゥヽ", "ゥウ") === 0);
        test.ok("ｩヽ = ｩウ", col.compare("ｩヽ", "ｩウ") === 0);
        test.ok("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
        test.ok("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
        test.ok("ウヾ = ウヴ", col.compare("ウヾ", "ウヴ") === 0);
        test.ok("ｳヾ = ｳヴ", col.compare("ｳヾ", "ｳヴ") === 0);
        test.ok("ゥヾ = ゥヴ", col.compare("ゥヾ", "ゥヴ") === 0);
        test.ok("ｩヾ = ｩヴ", col.compare("ｩヾ", "ｩヴ") === 0);
        test.ok("ヴヾ = ヴヴ", col.compare("ヴヾ", "ヴヴ") === 0);
        test.ok("ヴヾ = ヴヴ", col.compare("ヴヾ", "ヴヴ") === 0);
        
        test.ok("エヽ = エエ", col.compare("エヽ", "エエ") === 0);
        test.ok("ｴヽ = ｴエ", col.compare("ｴヽ", "ｴエ") === 0);
        test.ok("ェヽ = ェエ", col.compare("ェヽ", "ェエ") === 0);
        test.ok("ｪヽ = ｪエ", col.compare("ｪヽ", "ｪエ") === 0);
        
        test.ok("オヽ = オオ", col.compare("オヽ", "オオ") === 0);
        test.ok("ｵヽ = ｵオ", col.compare("ｵヽ", "ｵオ") === 0);
        test.ok("ォヽ = ォオ", col.compare("ォヽ", "ォオ") === 0);
        test.ok("ｫヽ = ｫオ", col.compare("ｫヽ", "ｫオ") === 0);
        
        test.ok("カヽ = カカ", col.compare("カヽ", "カカ") === 0);
        test.ok("ｶヽ = ｶカ", col.compare("ｶヽ", "ｶカ") === 0);
        test.ok("ヵヽ = ヵカ", col.compare("ヵヽ", "ヵカ") === 0);
        test.ok("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
        test.ok("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
        
        test.ok("キヽ = キキ", col.compare("キヽ", "キキ") === 0);
        test.ok("ｷヽ = ｷキ", col.compare("ｷヽ", "ｷキ") === 0);
        test.ok("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
        test.ok("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
        test.ok("キヾ = キギ", col.compare("キヾ", "キギ") === 0);
        test.ok("ｷヾ = ｷギ", col.compare("ｷヾ", "ｷギ") === 0);
        test.ok("ギヾ = ギギ", col.compare("ギヾ", "ギギ") === 0);
        test.ok("ギヾ = ギギ", col.compare("ギヾ", "ギギ") === 0);
    
        test.ok("クヽ = クク", col.compare("クヽ", "クク") === 0);
        test.ok("ｸヽ = ｸク", col.compare("ｸヽ", "ｸク") === 0);
        test.ok("ㇰヽ = ㇰク", col.compare("ㇰヽ", "ㇰク") === 0);
        test.ok("グヽ = グク", col.compare("グヽ", "グク") === 0);
        test.ok("グヽ = グク", col.compare("グヽ", "グク") === 0);
        test.ok("クヾ = クグ", col.compare("クヾ", "クグ") === 0);
        test.ok("ｸヾ = ｸグ", col.compare("ｸヾ", "ｸグ") === 0);
        test.ok("ㇰヾ = ㇰグ", col.compare("ㇰヾ", "ㇰグ") === 0);
        test.ok("グヾ = ググ", col.compare("グヾ", "ググ") === 0);
        test.ok("グヾ = ググ", col.compare("グヾ", "ググ") === 0);
        
        test.ok("ケヽ = ケケ", col.compare("ケヽ", "ケケ") === 0);
        test.ok("ｹヽ = ｹケ", col.compare("ｹヽ", "ｹケ") === 0);
        test.ok("ヶヽ = ヶケ", col.compare("ヶヽ", "ヶケ") === 0);
        test.ok("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
        test.ok("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
        
        test.ok("コヽ = ココ", col.compare("コヽ", "ココ") === 0);
        test.ok("ｺヽ = ｺコ", col.compare("ｺヽ", "ｺコ") === 0);
        test.ok("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
        test.ok("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
        test.ok("コヾ = コゴ", col.compare("コヾ", "コゴ") === 0);
        test.ok("ｺヾ = ｺゴ", col.compare("ｺヾ", "ｺゴ") === 0);
        test.ok("ゴヾ = ゴゴ", col.compare("ゴヾ", "ゴゴ") === 0);
        test.ok("ゴヾ = ゴゴ", col.compare("ゴヾ", "ゴゴ") === 0);
        
        test.ok("サヽ = ササ", col.compare("サヽ", "ササ") === 0);
        test.ok("ｻヽ = ｻサ", col.compare("ｻヽ", "ｻサ") === 0);
        test.ok("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
        test.ok("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
        test.ok("サヾ = サザ", col.compare("サヾ", "サザ") === 0);
        test.ok("ｻヾ = ｻザ", col.compare("ｻヾ", "ｻザ") === 0);
        test.ok("ザヾ = ザザ", col.compare("ザヾ", "ザザ") === 0);
        test.ok("ザヾ = ザザ", col.compare("ザヾ", "ザザ") === 0);
    
        test.ok("シヽ = シシ", col.compare("シヽ", "シシ") === 0);
        test.ok("ｼヽ = ｼシ", col.compare("ｼヽ", "ｼシ") === 0);
        test.ok("ㇱヽ = ㇱシ", col.compare("ㇱヽ", "ㇱシ") === 0);
        test.ok("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
        test.ok("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
        test.ok("シヾ = シジ", col.compare("シヾ", "シジ") === 0);
        test.ok("ｼヾ = ｼジ", col.compare("ｼヾ", "ｼジ") === 0);
        test.ok("ㇱヾ = ㇱジ", col.compare("ㇱヾ", "ㇱジ") === 0);
        test.ok("ジヾ = ジジ", col.compare("ジヾ", "ジジ") === 0);
        test.ok("ジヾ = ジジ", col.compare("ジヾ", "ジジ") === 0);
    
        test.ok("スヽ = スス", col.compare("スヽ", "スス") === 0);
        test.ok("ｽヽ = ｽス", col.compare("ｽヽ", "ｽス") === 0);
        test.ok("ㇲヽ = ㇲス", col.compare("ㇲヽ", "ㇲス") === 0);
        test.ok("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
        test.ok("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
        test.ok("スヾ = スズ", col.compare("スヾ", "スズ") === 0);
        test.ok("ｽヾ = ｽズ", col.compare("ｽヾ", "ｽズ") === 0);
        test.ok("ㇲヾ = ㇲズ", col.compare("ㇲヾ", "ㇲズ") === 0);
        test.ok("ズヾ = ズズ", col.compare("ズヾ", "ズズ") === 0);
        test.ok("ズヾ = ズズ", col.compare("ズヾ", "ズズ") === 0);
    
        test.ok("セヽ = セセ", col.compare("セヽ", "セセ") === 0);
        test.ok("ｾヽ = ｾセ", col.compare("ｾヽ", "ｾセ") === 0);
        test.ok("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
        test.ok("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
        test.ok("セヾ = セゼ", col.compare("セヾ", "セゼ") === 0);
        test.ok("ｾヾ = ｾゼ", col.compare("ｾヾ", "ｾゼ") === 0);
        test.ok("ゼヾ = ゼゼ", col.compare("ゼヾ", "ゼゼ") === 0);
        test.ok("ゼヾ = ゼゼ", col.compare("ゼヾ", "ゼゼ") === 0);
    
        test.ok("ソヽ = ソソ", col.compare("ソヽ", "ソソ") === 0);
        test.ok("ｿヽ = ｿソ", col.compare("ｿヽ", "ｿソ") === 0);
        test.ok("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
        test.ok("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
        test.ok("ソヾ = ソゾ", col.compare("ソヾ", "ソゾ") === 0);
        test.ok("ｿヾ = ｿゾ", col.compare("ｿヾ", "ｿゾ") === 0);
        test.ok("ゾヾ = ゾゾ", col.compare("ゾヾ", "ゾゾ") === 0);
        test.ok("ゾヾ = ゾゾ", col.compare("ゾヾ", "ゾゾ") === 0);
    
        test.ok("タヽ = タタ", col.compare("タヽ", "タタ") === 0);
        test.ok("ﾀヽ = ﾀタ", col.compare("ﾀヽ", "ﾀタ") === 0);
        test.ok("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
        test.ok("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
        test.ok("タヾ = タダ", col.compare("タヾ", "タダ") === 0);
        test.ok("ﾀヾ = ﾀダ", col.compare("ﾀヾ", "ﾀダ") === 0);
        test.ok("ダヾ = ダダ", col.compare("ダヾ", "ダダ") === 0);
        test.ok("ダヾ = ダダ", col.compare("ダヾ", "ダダ") === 0);
    
        test.ok("チヽ = チチ", col.compare("チヽ", "チチ") === 0);
        test.ok("ﾁヽ = ﾁチ", col.compare("ﾁヽ", "ﾁチ") === 0);
        test.ok("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
        test.ok("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
        test.ok("チヾ = チヂ", col.compare("チヾ", "チヂ") === 0);
        test.ok("ﾁヾ = ﾁヂ", col.compare("ﾁヾ", "ﾁヂ") === 0);
        test.ok("ヂヾ = ヂヂ", col.compare("ヂヾ", "ヂヂ") === 0);
        test.ok("ヂヾ = ヂヂ", col.compare("ヂヾ", "ヂヂ") === 0);
    
        test.ok("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
        test.ok("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
        test.ok("ッヽ = ッツ", col.compare("ッヽ", "ッツ") === 0);
        test.ok("ｯヽ = ｯツ", col.compare("ｯヽ", "ｯツ") === 0);
        test.ok("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
        test.ok("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
        test.ok("ツヾ = ツヅ", col.compare("ツヾ", "ツヅ") === 0);
        test.ok("ﾂヾ = ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") === 0);
        test.ok("ヅヾ = ヅヅ", col.compare("ヅヾ", "ヅヅ") === 0);
        test.ok("ヅヾ = ヅヅ", col.compare("ヅヾ", "ヅヅ") === 0);
        test.ok("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
        test.ok("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
        test.ok("ッヾ = ッヅ", col.compare("ッヾ", "ッヅ") === 0);
        test.ok("ｯヾ = ｯヅ", col.compare("ｯヾ", "ｯヅ") === 0);
        test.ok("ツヾ = ツヅ", col.compare("ツヾ", "ツヅ") === 0);
        test.ok("ﾂヾ = ﾂヅ", col.compare("ﾂヾ", "ﾂヅ") === 0);
    
        test.ok("テヽ = テテ", col.compare("テヽ", "テテ") === 0);
        test.ok("ﾃヽ = ﾃテ", col.compare("ﾃヽ", "ﾃテ") === 0);
        test.ok("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
        test.ok("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
        test.ok("テヾ = テデ", col.compare("テヾ", "テデ") === 0);
        test.ok("ﾃヾ = ﾃデ", col.compare("ﾃヾ", "ﾃデ") === 0);
        test.ok("デヾ = デデ", col.compare("デヾ", "デデ") === 0);
        test.ok("デヾ = デデ", col.compare("デヾ", "デデ") === 0);
    
        test.ok("トヽ = トト", col.compare("トヽ", "トト") === 0);
        test.ok("ﾄヽ = ﾄト", col.compare("ﾄヽ", "ﾄト") === 0);
        test.ok("ㇳヽ = ㇳト", col.compare("ㇳヽ", "ㇳト") === 0);
        test.ok("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
        test.ok("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
        test.ok("トヾ = トド", col.compare("トヾ", "トド") === 0);
        test.ok("ﾄヾ = ﾄド", col.compare("ﾄヾ", "ﾄド") === 0);
        test.ok("ㇳヾ = ㇳド", col.compare("ㇳヾ", "ㇳド") === 0);
        test.ok("ドヾ = ドド", col.compare("ドヾ", "ドド") === 0);
        test.ok("ドヾ = ドド", col.compare("ドヾ", "ドド") === 0);
    
        test.ok("ナヽ = ナナ", col.compare("ナヽ", "ナナ") === 0);
        test.ok("ﾅヽ = ﾅナ", col.compare("ﾅヽ", "ﾅナ") === 0);
    
        test.ok("ニヽ = ニニ", col.compare("ニヽ", "ニニ") === 0);
        test.ok("ﾆヽ = ﾆニ", col.compare("ﾆヽ", "ﾆニ") === 0);
    
        test.ok("ヌヽ = ヌヌ", col.compare("ヌヽ", "ヌヌ") === 0);
        test.ok("ﾇヽ = ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") === 0);
        test.ok("ㇴヽ = ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") === 0);
        
        test.ok("ネヽ = ネネ", col.compare("ネヽ", "ネネ") === 0);
        test.ok("ﾈヽ = ﾈネ", col.compare("ﾈヽ", "ﾈネ") === 0);
        
        test.ok("ノヽ = ノノ", col.compare("ノヽ", "ノノ") === 0);
        test.ok("ﾉヽ = ﾉノ", col.compare("ﾉヽ", "ﾉノ") === 0);
        
        test.ok("ハヽ = ハハ", col.compare("ハヽ", "ハハ") === 0);
        test.ok("ﾊヽ = ﾊハ", col.compare("ﾊヽ", "ﾊハ") === 0);
        test.ok("ㇵヽ = ㇵハ", col.compare("ㇵヽ", "ㇵハ") === 0);
        test.ok("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
        test.ok("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
        test.ok("ハヾ = ハバ", col.compare("ハヾ", "ハバ") === 0);
        test.ok("ﾊヾ = ﾊバ", col.compare("ﾊヾ", "ﾊバ") === 0);
        test.ok("ㇵヾ = ㇵバ", col.compare("ㇵヾ", "ㇵバ") === 0);
        test.ok("バヾ = ババ", col.compare("バヾ", "ババ") === 0);
        test.ok("バヾ = ババ", col.compare("バヾ", "ババ") === 0);
        test.ok("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
        test.ok("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
        test.ok("パヾ = パバ", col.compare("パヾ", "パバ") === 0);
        test.ok("パヾ = パバ", col.compare("パヾ", "パバ") === 0);
        
        test.ok("ヒヽ = ヒヒ", col.compare("ヒヽ", "ヒヒ") === 0);
        test.ok("ﾋヽ = ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") === 0);
        test.ok("ㇶヽ = ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") === 0);
        test.ok("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
        test.ok("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
        test.ok("ヒヾ = ヒビ", col.compare("ヒヾ", "ヒビ") === 0);
        test.ok("ﾋヾ = ﾋビ", col.compare("ﾋヾ", "ﾋビ") === 0);
        test.ok("ㇶヾ = ㇶビ", col.compare("ㇶヾ", "ㇶビ") === 0);
        test.ok("ビヾ = ビビ", col.compare("ビヾ", "ビビ") === 0);
        test.ok("ビヾ = ビビ", col.compare("ビヾ", "ビビ") === 0);
        test.ok("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
        test.ok("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
        test.ok("ピヾ = ピビ", col.compare("ピヾ", "ピビ") === 0);
        test.ok("ピヾ = ピビ", col.compare("ピヾ", "ピビ") === 0);
        
        test.ok("フヽ = フフ", col.compare("フヽ", "フフ") === 0);
        test.ok("ﾌヽ = ﾌフ", col.compare("ﾌヽ", "ﾌフ") === 0);
        test.ok("ㇷヽ = ㇷフ", col.compare("ㇷヽ", "ㇷフ") === 0);
        test.ok("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
        test.ok("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
        test.ok("フヾ = フブ", col.compare("フヾ", "フブ") === 0);
        test.ok("ﾌヾ = ﾌブ", col.compare("ﾌヾ", "ﾌブ") === 0);
        test.ok("ㇷヾ = ㇷブ", col.compare("ㇷヾ", "ㇷブ") === 0);
        test.ok("ブヾ = ブブ", col.compare("ブヾ", "ブブ") === 0);
        test.ok("ブヾ = ブブ", col.compare("ブヾ", "ブブ") === 0);
        test.ok("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
        test.ok("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
        test.ok("プヾ = プブ", col.compare("プヾ", "プブ") === 0);
        test.ok("プヾ = プブ", col.compare("プヾ", "プブ") === 0);
        
        test.ok("ヘヽ = ヘヘ", col.compare("ヘヽ", "ヘヘ") === 0);
        test.ok("ﾍヽ = ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") === 0);
        test.ok("ㇸヽ = ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") === 0);
        test.ok("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
        test.ok("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
        test.ok("ヘヾ = ヘベ", col.compare("ヘヾ", "ヘベ") === 0);
        test.ok("ﾍヾ = ﾍベ", col.compare("ﾍヾ", "ﾍベ") === 0);
        test.ok("ㇸヾ = ㇸベ", col.compare("ㇸヾ", "ㇸベ") === 0);
        test.ok("ベヾ = ベベ", col.compare("ベヾ", "ベベ") === 0);
        test.ok("ベヾ = ベベ", col.compare("ベヾ", "ベベ") === 0);
        test.ok("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
        test.ok("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
        test.ok("ペヾ = ペベ", col.compare("ペヾ", "ペベ") === 0);
        test.ok("ペヾ = ペベ", col.compare("ペヾ", "ペベ") === 0);
        
        test.ok("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
        test.ok("ﾎヽ = ﾎホ", col.compare("ﾎヽ", "ﾎホ") === 0);
        test.ok("ㇹヽ = ㇹホ", col.compare("ㇹヽ", "ㇹホ") === 0);
        test.ok("ボヽ = ボホ", col.compare("ボヽ", "ボホ") === 0);
        test.ok("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
        test.ok("ホヾ = ホボ", col.compare("ホヾ", "ホボ") === 0);
        test.ok("ﾎヾ = ﾎボ", col.compare("ﾎヾ", "ﾎボ") === 0);
        test.ok("ㇹヾ = ㇹボ", col.compare("ㇹヾ", "ㇹボ") === 0);
        test.ok("ボヾ = ボボ", col.compare("ボヾ", "ボボ") === 0);
        test.ok("ボヾ = ボボ", col.compare("ボヾ", "ボボ") === 0);
        test.ok("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
        test.ok("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
        test.ok("ポヾ = ポボ", col.compare("ポヾ", "ポボ") === 0);
        test.ok("ポヾ = ポボ", col.compare("ポヾ", "ポボ") === 0);
        
        test.ok("マヽ = ママ", col.compare("マヽ", "ママ") === 0);
        test.ok("ﾏヽ = ﾏマ", col.compare("ﾏヽ", "ﾏマ") === 0);
        
        test.ok("ミヽ = ミミ", col.compare("ミヽ", "ミミ") === 0);
        test.ok("ﾐヽ = ﾐミ", col.compare("ﾐヽ", "ﾐミ") === 0);
        
        test.ok("ムヽ = ムム", col.compare("ムヽ", "ムム") === 0);
        test.ok("ﾑヽ = ﾑム", col.compare("ﾑヽ", "ﾑム") === 0);
        test.ok("ㇺヽ = ㇺム", col.compare("ㇺヽ", "ㇺム") === 0);
        
        test.ok("メヽ = メメ", col.compare("メヽ", "メメ") === 0);
        test.ok("ﾒヽ = ﾒメ", col.compare("ﾒヽ", "ﾒメ") === 0);
        
        test.ok("モヽ = モモ", col.compare("モヽ", "モモ") === 0);
        test.ok("ﾓヽ = ﾓモ", col.compare("ﾓヽ", "ﾓモ") === 0);
        
        test.ok("ヤヽ = ヤヤ", col.compare("ヤヽ", "ヤヤ") === 0);
        test.ok("ﾔヽ = ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") === 0);
        test.ok("ャヽ = ャヤ", col.compare("ャヽ", "ャヤ") === 0);
        test.ok("ｬヽ = ｬヤ", col.compare("ｬヽ", "ｬヤ") === 0);
        
        test.ok("ユヽ = ユユ", col.compare("ユヽ", "ユユ") === 0);
        test.ok("ﾕヽ = ﾕユ", col.compare("ﾕヽ", "ﾕユ") === 0);
        test.ok("ュヽ = ュユ", col.compare("ュヽ", "ュユ") === 0);
        test.ok("ｭヽ = ｭユ", col.compare("ｭヽ", "ｭユ") === 0);
        
        test.ok("ヨヽ = ヨヨ", col.compare("ヨヽ", "ヨヨ") === 0);
        test.ok("ﾖヽ = ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") === 0);
        test.ok("ョヽ = ョヨ", col.compare("ョヽ", "ョヨ") === 0);
        test.ok("ｮヽ = ｮヨ", col.compare("ｮヽ", "ｮヨ") === 0);
        
        test.ok("ラヽ = ララ", col.compare("ラヽ", "ララ") === 0);
        test.ok("ﾗヽ = ﾗラ", col.compare("ﾗヽ", "ﾗラ") === 0);
        test.ok("ㇻヽ = ㇻラ", col.compare("ㇻヽ", "ㇻラ") === 0);
        
        test.ok("リヽ = リリ", col.compare("リヽ", "リリ") === 0);
        test.ok("ﾘヽ = ﾘリ", col.compare("ﾘヽ", "ﾘリ") === 0);
        test.ok("ㇼヽ = ㇼリ", col.compare("ㇼヽ", "ㇼリ") === 0);
        
        test.ok("ルヽ = ルル", col.compare("ルヽ", "ルル") === 0);
        test.ok("ﾙヽ = ﾙル", col.compare("ﾙヽ", "ﾙル") === 0);
        test.ok("ㇽヽ = ㇽル", col.compare("ㇽヽ", "ㇽル") === 0);
        
        test.ok("レヽ = レレ", col.compare("レヽ", "レレ") === 0);
        test.ok("ﾚヽ = ﾚレ", col.compare("ﾚヽ", "ﾚレ") === 0);
        test.ok("ㇾヽ = ㇾレ", col.compare("ㇾヽ", "ㇾレ") === 0);
        
        test.ok("ロヽ = ロロ", col.compare("ロヽ", "ロロ") === 0);
        test.ok("ﾛヽ = ﾛロ", col.compare("ﾛヽ", "ﾛロ") === 0);
        test.ok("ㇿヽ = ㇿロ", col.compare("ㇿヽ", "ㇿロ") === 0);
        
        test.ok("ワヽ = ワワ", col.compare("ワヽ", "ワワ") === 0);
        test.ok("ﾜヽ = ﾜワ", col.compare("ﾜヽ", "ﾜワ") === 0);
        test.ok("ヮヽ = ヮワ", col.compare("ヮヽ", "ヮワ") === 0);
        test.ok("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
        test.ok("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
        test.ok("ワヾ = ワヷ", col.compare("ワヾ", "ワヷ") === 0);
        test.ok("ﾜヾ = ﾜヷ", col.compare("ﾜヾ", "ﾜヷ") === 0);
        test.ok("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷヷ") === 0);
        test.ok("ヷヾ = ヷヷ", col.compare("ヷヾ", "ヷヷ") === 0);
        test.ok("ヮヾ = ヮヷ", col.compare("ヮヾ", "ヮヷ") === 0);
        
        test.ok("ヰヽ = ヰヰ", col.compare("ヰヽ", "ヰヰ") === 0);
        test.ok("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
        test.ok("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
        test.ok("ヰヾ = ヰヸ", col.compare("ヰヾ", "ヰヸ") === 0);
        test.ok("ヸヾ = ヸヸ", col.compare("ヸヾ", "ヸヸ") === 0);
        test.ok("ヸヾ = ヸヸ", col.compare("ヸヾ", "ヸヸ") === 0);
        
        test.ok("ヱヽ = ヱヱ", col.compare("ヱヽ", "ヱヱ") === 0);
        test.ok("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
        test.ok("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
        test.ok("ヱヾ = ヱヹ", col.compare("ヱヾ", "ヱヹ") === 0);
        test.ok("ヹヾ = ヹヹ", col.compare("ヹヾ", "ヹヹ") === 0);
        test.ok("ヹヾ = ヹヹ", col.compare("ヹヾ", "ヹヹ") === 0);
        
        test.ok("ヲヽ = ヲヲ", col.compare("ヲヽ", "ヲヲ") === 0);
        test.ok("ｦヽ = ｦヲ", col.compare("ｦヽ", "ｦヲ") === 0);
        test.ok("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
        test.ok("ヺヽ = ヺヺ", col.compare("ヺヽ", "ヺヺ") === 0);
        test.ok("ヲヾ = ヲヺ", col.compare("ヲヾ", "ヲヺ") === 0);
        test.ok("ｦヾ = ｦヺ", col.compare("ｦヾ", "ｦヺ") === 0);
        test.ok("ヺヾ = ヺヺ", col.compare("ヺヾ", "ヺヺ") === 0);
        test.ok("ヺヾ = ヺヺ", col.compare("ヺヾ", "ヺヺ") === 0);
        
        test.ok("ンヽ = ンン", col.compare("ンヽ", "ンン") === 0);
        test.ok("ﾝヽ = ﾝン", col.compare("ﾝヽ", "ﾝン") === 0);    
        test.done();
    },
    
    testJSCollatorHiraBeforeKataQuat_ja: function(test) {
        test.expect(99);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("あ < ア", col.compare("あ", "ア") < 0);
        test.ok("い < イ", col.compare("い", "イ") < 0);
        test.ok("う < ウ", col.compare("う", "ウ") < 0);
        test.ok("え < エ", col.compare("え", "エ") < 0);
        test.ok("お < オ", col.compare("お", "オ") < 0);
        test.ok("か < カ", col.compare("か", "カ") < 0);
        test.ok("が < ガ", col.compare("が", "ガ") < 0);
        test.ok("が < ガ", col.compare("が", "ガ") < 0);
        test.ok("き < キ", col.compare("き", "キ") < 0);
        test.ok("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
        test.ok("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
        test.ok("く < ク", col.compare("く", "ク") < 0);
        test.ok("ぐ < グ", col.compare("ぐ", "グ") < 0);
        test.ok("ぐ < グ", col.compare("ぐ", "グ") < 0);
        test.ok("け < ケ", col.compare("け", "ケ") < 0);
        test.ok("げ < ゲ", col.compare("げ", "ゲ") < 0);
        test.ok("げ < ゲ", col.compare("げ", "ゲ") < 0);
        test.ok("こ < コ", col.compare("こ", "コ") < 0);
        test.ok("ご < ゴ", col.compare("ご", "ゴ") < 0);
        test.ok("ご < ゴ", col.compare("ご", "ゴ") < 0);
        test.ok("さ < サ", col.compare("さ", "サ") < 0);
        test.ok("ざ < ザ", col.compare("ざ", "ザ") < 0);
        test.ok("ざ < ザ", col.compare("ざ", "ザ") < 0);
        test.ok("し < シ", col.compare("し", "シ") < 0);
        test.ok("じ < ジ", col.compare("じ", "ジ") < 0);
        test.ok("じ < ジ", col.compare("じ", "ジ") < 0);
        test.ok("す < ス", col.compare("す", "ス") < 0);
        test.ok("ず < ズ", col.compare("ず", "ズ") < 0);
        test.ok("ず < ズ", col.compare("ず", "ズ") < 0);
        test.ok("せ < セ", col.compare("せ", "セ") < 0);
        test.ok("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
        test.ok("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
        test.ok("そ < ソ", col.compare("そ", "ソ") < 0);
        test.ok("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
        test.ok("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
        test.ok("た < タ", col.compare("た", "タ") < 0);
        test.ok("だ < ダ", col.compare("だ", "ダ") < 0);
        test.ok("だ < ダ", col.compare("だ", "ダ") < 0);
        test.ok("ち < チ", col.compare("ち", "チ") < 0);
        test.ok("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
        test.ok("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
        test.ok("つ < ツ", col.compare("つ", "ツ") < 0);
        test.ok("づ < ヅ", col.compare("づ", "ヅ") < 0);
        test.ok("づ < ヅ", col.compare("づ", "ヅ") < 0);
        test.ok("て < テ", col.compare("て", "テ") < 0);
        test.ok("で < デ", col.compare("で", "デ") < 0);
        test.ok("で < デ", col.compare("で", "デ") < 0);
        test.ok("と < ト", col.compare("と", "ト") < 0);
        test.ok("ど < ド", col.compare("ど", "ド") < 0);
        test.ok("ど < ド", col.compare("ど", "ド") < 0);
        test.ok("な < ナ", col.compare("な", "ナ") < 0);
        test.ok("に < ニ", col.compare("に", "ニ") < 0);
        test.ok("ぬ < ヌ", col.compare("ぬ", "ヌ") < 0);
        test.ok("ね < ネ", col.compare("ね", "ネ") < 0);
        test.ok("の < ノ", col.compare("の", "ノ") < 0);
        test.ok("は < ハ", col.compare("は", "ハ") < 0);
        test.ok("ば < バ", col.compare("ば", "バ") < 0);
        test.ok("ば < バ", col.compare("ば", "バ") < 0);
        test.ok("ぱ < パ", col.compare("ぱ", "パ") < 0);
        test.ok("ぱ < パ", col.compare("ぱ", "パ") < 0);
        test.ok("ひ < ヒ", col.compare("ひ", "ヒ") < 0);
        test.ok("び < ビ", col.compare("び", "ビ") < 0);
        test.ok("び < ビ", col.compare("び", "ビ") < 0);
        test.ok("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
        test.ok("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
        test.ok("ふ < フ", col.compare("ふ", "フ") < 0);
        test.ok("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
        test.ok("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
        test.ok("ぷ < プ", col.compare("ぷ", "プ") < 0);
        test.ok("ぷ < プ", col.compare("ぷ", "プ") < 0);
        test.ok("へ < ヘ", col.compare("へ", "ヘ") < 0);
        test.ok("べ < ベ", col.compare("べ", "ベ") < 0);
        test.ok("べ < ベ", col.compare("べ", "ベ") < 0);
        test.ok("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
        test.ok("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
        test.ok("ほ < ホ", col.compare("ほ", "ホ") < 0);
        test.ok("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
        test.ok("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
        test.ok("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
        test.ok("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
        test.ok("ま < マ", col.compare("ま", "マ") < 0);
        test.ok("み < ミ", col.compare("み", "ミ") < 0);
        test.ok("む < ム", col.compare("む", "ム") < 0);
        test.ok("め < メ", col.compare("め", "メ") < 0);
        test.ok("も < モ", col.compare("も", "モ") < 0);
        test.ok("や < ヤ", col.compare("や", "ヤ") < 0);
        test.ok("ゆ < ユ", col.compare("ゆ", "ユ") < 0);
        test.ok("よ < ヨ", col.compare("よ", "ヨ") < 0);
        test.ok("ら < ラ", col.compare("ら", "ラ") < 0);
        test.ok("り < リ", col.compare("り", "リ") < 0);
        test.ok("る < ル", col.compare("る", "ル") < 0);
        test.ok("れ < レ", col.compare("れ", "レ") < 0);
        test.ok("ろ < ロ", col.compare("ろ", "ロ") < 0);
        test.ok("わ < ワ", col.compare("わ", "ワ") < 0);
        test.ok("ゐ < ヰ", col.compare("ゐ", "ヰ") < 0);
        test.ok("ゑ < ヱ", col.compare("ゑ", "ヱ") < 0);
        test.ok("を < ヲ", col.compare("を", "ヲ") < 0);
        test.ok("ん < ン", col.compare("ん", "ン") < 0);
        test.done();
    },
    
    testJSCollatorHiraBeforeKataTer_ja: function(test) {
        test.expect(99);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("あ < ア", col.compare("あ", "ア") < 0);
        test.ok("い < イ", col.compare("い", "イ") < 0);
        test.ok("う < ウ", col.compare("う", "ウ") < 0);
        test.ok("え < エ", col.compare("え", "エ") < 0);
        test.ok("お < オ", col.compare("お", "オ") < 0);
        test.ok("か < カ", col.compare("か", "カ") < 0);
        test.ok("が < ガ", col.compare("が", "ガ") < 0);
        test.ok("が < ガ", col.compare("が", "ガ") < 0);
        test.ok("き < キ", col.compare("き", "キ") < 0);
        test.ok("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
        test.ok("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
        test.ok("く < ク", col.compare("く", "ク") < 0);
        test.ok("ぐ < グ", col.compare("ぐ", "グ") < 0);
        test.ok("ぐ < グ", col.compare("ぐ", "グ") < 0);
        test.ok("け < ケ", col.compare("け", "ケ") < 0);
        test.ok("げ < ゲ", col.compare("げ", "ゲ") < 0);
        test.ok("げ < ゲ", col.compare("げ", "ゲ") < 0);
        test.ok("こ < コ", col.compare("こ", "コ") < 0);
        test.ok("ご < ゴ", col.compare("ご", "ゴ") < 0);
        test.ok("ご < ゴ", col.compare("ご", "ゴ") < 0);
        test.ok("さ < サ", col.compare("さ", "サ") < 0);
        test.ok("ざ < ザ", col.compare("ざ", "ザ") < 0);
        test.ok("ざ < ザ", col.compare("ざ", "ザ") < 0);
        test.ok("し < シ", col.compare("し", "シ") < 0);
        test.ok("じ < ジ", col.compare("じ", "ジ") < 0);
        test.ok("じ < ジ", col.compare("じ", "ジ") < 0);
        test.ok("す < ス", col.compare("す", "ス") < 0);
        test.ok("ず < ズ", col.compare("ず", "ズ") < 0);
        test.ok("ず < ズ", col.compare("ず", "ズ") < 0);
        test.ok("せ < セ", col.compare("せ", "セ") < 0);
        test.ok("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
        test.ok("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
        test.ok("そ < ソ", col.compare("そ", "ソ") < 0);
        test.ok("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
        test.ok("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
        test.ok("た < タ", col.compare("た", "タ") < 0);
        test.ok("だ < ダ", col.compare("だ", "ダ") < 0);
        test.ok("だ < ダ", col.compare("だ", "ダ") < 0);
        test.ok("ち < チ", col.compare("ち", "チ") < 0);
        test.ok("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
        test.ok("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
        test.ok("つ < ツ", col.compare("つ", "ツ") < 0);
        test.ok("づ < ヅ", col.compare("づ", "ヅ") < 0);
        test.ok("づ < ヅ", col.compare("づ", "ヅ") < 0);
        test.ok("て < テ", col.compare("て", "テ") < 0);
        test.ok("で < デ", col.compare("で", "デ") < 0);
        test.ok("で < デ", col.compare("で", "デ") < 0);
        test.ok("と < ト", col.compare("と", "ト") < 0);
        test.ok("ど < ド", col.compare("ど", "ド") < 0);
        test.ok("ど < ド", col.compare("ど", "ド") < 0);
        test.ok("な < ナ", col.compare("な", "ナ") < 0);
        test.ok("に < ニ", col.compare("に", "ニ") < 0);
        test.ok("ぬ < ヌ", col.compare("ぬ", "ヌ") < 0);
        test.ok("ね < ネ", col.compare("ね", "ネ") < 0);
        test.ok("の < ノ", col.compare("の", "ノ") < 0);
        test.ok("は < ハ", col.compare("は", "ハ") < 0);
        test.ok("ば < バ", col.compare("ば", "バ") < 0);
        test.ok("ば < バ", col.compare("ば", "バ") < 0);
        test.ok("ぱ < パ", col.compare("ぱ", "パ") < 0);
        test.ok("ぱ < パ", col.compare("ぱ", "パ") < 0);
        test.ok("ひ < ヒ", col.compare("ひ", "ヒ") < 0);
        test.ok("び < ビ", col.compare("び", "ビ") < 0);
        test.ok("び < ビ", col.compare("び", "ビ") < 0);
        test.ok("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
        test.ok("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
        test.ok("ふ < フ", col.compare("ふ", "フ") < 0);
        test.ok("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
        test.ok("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
        test.ok("ぷ < プ", col.compare("ぷ", "プ") < 0);
        test.ok("ぷ < プ", col.compare("ぷ", "プ") < 0);
        test.ok("へ < ヘ", col.compare("へ", "ヘ") < 0);
        test.ok("べ < ベ", col.compare("べ", "ベ") < 0);
        test.ok("べ < ベ", col.compare("べ", "ベ") < 0);
        test.ok("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
        test.ok("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
        test.ok("ほ < ホ", col.compare("ほ", "ホ") < 0);
        test.ok("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
        test.ok("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
        test.ok("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
        test.ok("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
        test.ok("ま < マ", col.compare("ま", "マ") < 0);
        test.ok("み < ミ", col.compare("み", "ミ") < 0);
        test.ok("む < ム", col.compare("む", "ム") < 0);
        test.ok("め < メ", col.compare("め", "メ") < 0);
        test.ok("も < モ", col.compare("も", "モ") < 0);
        test.ok("や < ヤ", col.compare("や", "ヤ") < 0);
        test.ok("ゆ < ユ", col.compare("ゆ", "ユ") < 0);
        test.ok("よ < ヨ", col.compare("よ", "ヨ") < 0);
        test.ok("ら < ラ", col.compare("ら", "ラ") < 0);
        test.ok("り < リ", col.compare("り", "リ") < 0);
        test.ok("る < ル", col.compare("る", "ル") < 0);
        test.ok("れ < レ", col.compare("れ", "レ") < 0);
        test.ok("ろ < ロ", col.compare("ろ", "ロ") < 0);
        test.ok("わ < ワ", col.compare("わ", "ワ") < 0);
        test.ok("ゐ < ヰ", col.compare("ゐ", "ヰ") < 0);
        test.ok("ゑ < ヱ", col.compare("ゑ", "ヱ") < 0);
        test.ok("を < ヲ", col.compare("を", "ヲ") < 0);
        test.ok("ん < ン", col.compare("ん", "ン") < 0);
        test.done();
    },
    
    testJSCollatorHiraBeforeKataSec_ja: function(test) {
        test.expect(99);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("あ = ア", col.compare("あ", "ア") === 0);
        test.ok("い = イ", col.compare("い", "イ") === 0);
        test.ok("う = ウ", col.compare("う", "ウ") === 0);
        test.ok("え = エ", col.compare("え", "エ") === 0);
        test.ok("お = オ", col.compare("お", "オ") === 0);
        test.ok("か = カ", col.compare("か", "カ") === 0);
        test.ok("が = ガ", col.compare("が", "ガ") === 0);
        test.ok("が = ガ", col.compare("が", "ガ") === 0);
        test.ok("き = キ", col.compare("き", "キ") === 0);
        test.ok("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
        test.ok("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
        test.ok("く = ク", col.compare("く", "ク") === 0);
        test.ok("ぐ = グ", col.compare("ぐ", "グ") === 0);
        test.ok("ぐ = グ", col.compare("ぐ", "グ") === 0);
        test.ok("け = ケ", col.compare("け", "ケ") === 0);
        test.ok("げ = ゲ", col.compare("げ", "ゲ") === 0);
        test.ok("げ = ゲ", col.compare("げ", "ゲ") === 0);
        test.ok("こ = コ", col.compare("こ", "コ") === 0);
        test.ok("ご = ゴ", col.compare("ご", "ゴ") === 0);
        test.ok("ご = ゴ", col.compare("ご", "ゴ") === 0);
        test.ok("さ = サ", col.compare("さ", "サ") === 0);
        test.ok("ざ = ザ", col.compare("ざ", "ザ") === 0);
        test.ok("ざ = ザ", col.compare("ざ", "ザ") === 0);
        test.ok("し = シ", col.compare("し", "シ") === 0);
        test.ok("じ = ジ", col.compare("じ", "ジ") === 0);
        test.ok("じ = ジ", col.compare("じ", "ジ") === 0);
        test.ok("す = ス", col.compare("す", "ス") === 0);
        test.ok("ず = ズ", col.compare("ず", "ズ") === 0);
        test.ok("ず = ズ", col.compare("ず", "ズ") === 0);
        test.ok("せ = セ", col.compare("せ", "セ") === 0);
        test.ok("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
        test.ok("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
        test.ok("そ = ソ", col.compare("そ", "ソ") === 0);
        test.ok("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
        test.ok("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
        test.ok("た = タ", col.compare("た", "タ") === 0);
        test.ok("だ = ダ", col.compare("だ", "ダ") === 0);
        test.ok("だ = ダ", col.compare("だ", "ダ") === 0);
        test.ok("ち = チ", col.compare("ち", "チ") === 0);
        test.ok("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
        test.ok("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
        test.ok("つ = ツ", col.compare("つ", "ツ") === 0);
        test.ok("づ = ヅ", col.compare("づ", "ヅ") === 0);
        test.ok("づ = ヅ", col.compare("づ", "ヅ") === 0);
        test.ok("て = テ", col.compare("て", "テ") === 0);
        test.ok("で = デ", col.compare("で", "デ") === 0);
        test.ok("で = デ", col.compare("で", "デ") === 0);
        test.ok("と = ト", col.compare("と", "ト") === 0);
        test.ok("ど = ド", col.compare("ど", "ド") === 0);
        test.ok("ど = ド", col.compare("ど", "ド") === 0);
        test.ok("な = ナ", col.compare("な", "ナ") === 0);
        test.ok("に = ニ", col.compare("に", "ニ") === 0);
        test.ok("ぬ = ヌ", col.compare("ぬ", "ヌ") === 0);
        test.ok("ね = ネ", col.compare("ね", "ネ") === 0);
        test.ok("の = ノ", col.compare("の", "ノ") === 0);
        test.ok("は = ハ", col.compare("は", "ハ") === 0);
        test.ok("ば = バ", col.compare("ば", "バ") === 0);
        test.ok("ば = バ", col.compare("ば", "バ") === 0);
        test.ok("ぱ = パ", col.compare("ぱ", "パ") === 0);
        test.ok("ぱ = パ", col.compare("ぱ", "パ") === 0);
        test.ok("ひ = ヒ", col.compare("ひ", "ヒ") === 0);
        test.ok("び = ビ", col.compare("び", "ビ") === 0);
        test.ok("び = ビ", col.compare("び", "ビ") === 0);
        test.ok("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
        test.ok("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
        test.ok("ふ = フ", col.compare("ふ", "フ") === 0);
        test.ok("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
        test.ok("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
        test.ok("ぷ = プ", col.compare("ぷ", "プ") === 0);
        test.ok("ぷ = プ", col.compare("ぷ", "プ") === 0);
        test.ok("へ = ヘ", col.compare("へ", "ヘ") === 0);
        test.ok("べ = ベ", col.compare("べ", "ベ") === 0);
        test.ok("べ = ベ", col.compare("べ", "ベ") === 0);
        test.ok("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
        test.ok("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
        test.ok("ほ = ホ", col.compare("ほ", "ホ") === 0);
        test.ok("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
        test.ok("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
        test.ok("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
        test.ok("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
        test.ok("ま = マ", col.compare("ま", "マ") === 0);
        test.ok("み = ミ", col.compare("み", "ミ") === 0);
        test.ok("む = ム", col.compare("む", "ム") === 0);
        test.ok("め = メ", col.compare("め", "メ") === 0);
        test.ok("も = モ", col.compare("も", "モ") === 0);
        test.ok("や = ヤ", col.compare("や", "ヤ") === 0);
        test.ok("ゆ = ユ", col.compare("ゆ", "ユ") === 0);
        test.ok("よ = ヨ", col.compare("よ", "ヨ") === 0);
        test.ok("ら = ラ", col.compare("ら", "ラ") === 0);
        test.ok("り = リ", col.compare("り", "リ") === 0);
        test.ok("る = ル", col.compare("る", "ル") === 0);
        test.ok("れ = レ", col.compare("れ", "レ") === 0);
        test.ok("ろ = ロ", col.compare("ろ", "ロ") === 0);
        test.ok("わ = ワ", col.compare("わ", "ワ") === 0);
        test.ok("ゐ = ヰ", col.compare("ゐ", "ヰ") === 0);
        test.ok("ゑ = ヱ", col.compare("ゑ", "ヱ") === 0);
        test.ok("を = ヲ", col.compare("を", "ヲ") === 0);
        test.ok("ん = ン", col.compare("ん", "ン") === 0);
        test.done();
    },
    
    testJSCollatorHiraBeforeKataPri_ja: function(test) {
        test.expect(99);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("あ = ア", col.compare("あ", "ア") === 0);
        test.ok("い = イ", col.compare("い", "イ") === 0);
        test.ok("う = ウ", col.compare("う", "ウ") === 0);
        test.ok("え = エ", col.compare("え", "エ") === 0);
        test.ok("お = オ", col.compare("お", "オ") === 0);
        test.ok("か = カ", col.compare("か", "カ") === 0);
        test.ok("が = ガ", col.compare("が", "ガ") === 0);
        test.ok("が = ガ", col.compare("が", "ガ") === 0);
        test.ok("き = キ", col.compare("き", "キ") === 0);
        test.ok("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
        test.ok("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
        test.ok("く = ク", col.compare("く", "ク") === 0);
        test.ok("ぐ = グ", col.compare("ぐ", "グ") === 0);
        test.ok("ぐ = グ", col.compare("ぐ", "グ") === 0);
        test.ok("け = ケ", col.compare("け", "ケ") === 0);
        test.ok("げ = ゲ", col.compare("げ", "ゲ") === 0);
        test.ok("げ = ゲ", col.compare("げ", "ゲ") === 0);
        test.ok("こ = コ", col.compare("こ", "コ") === 0);
        test.ok("ご = ゴ", col.compare("ご", "ゴ") === 0);
        test.ok("ご = ゴ", col.compare("ご", "ゴ") === 0);
        test.ok("さ = サ", col.compare("さ", "サ") === 0);
        test.ok("ざ = ザ", col.compare("ざ", "ザ") === 0);
        test.ok("ざ = ザ", col.compare("ざ", "ザ") === 0);
        test.ok("し = シ", col.compare("し", "シ") === 0);
        test.ok("じ = ジ", col.compare("じ", "ジ") === 0);
        test.ok("じ = ジ", col.compare("じ", "ジ") === 0);
        test.ok("す = ス", col.compare("す", "ス") === 0);
        test.ok("ず = ズ", col.compare("ず", "ズ") === 0);
        test.ok("ず = ズ", col.compare("ず", "ズ") === 0);
        test.ok("せ = セ", col.compare("せ", "セ") === 0);
        test.ok("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
        test.ok("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
        test.ok("そ = ソ", col.compare("そ", "ソ") === 0);
        test.ok("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
        test.ok("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
        test.ok("た = タ", col.compare("た", "タ") === 0);
        test.ok("だ = ダ", col.compare("だ", "ダ") === 0);
        test.ok("だ = ダ", col.compare("だ", "ダ") === 0);
        test.ok("ち = チ", col.compare("ち", "チ") === 0);
        test.ok("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
        test.ok("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
        test.ok("つ = ツ", col.compare("つ", "ツ") === 0);
        test.ok("づ = ヅ", col.compare("づ", "ヅ") === 0);
        test.ok("づ = ヅ", col.compare("づ", "ヅ") === 0);
        test.ok("て = テ", col.compare("て", "テ") === 0);
        test.ok("で = デ", col.compare("で", "デ") === 0);
        test.ok("で = デ", col.compare("で", "デ") === 0);
        test.ok("と = ト", col.compare("と", "ト") === 0);
        test.ok("ど = ド", col.compare("ど", "ド") === 0);
        test.ok("ど = ド", col.compare("ど", "ド") === 0);
        test.ok("な = ナ", col.compare("な", "ナ") === 0);
        test.ok("に = ニ", col.compare("に", "ニ") === 0);
        test.ok("ぬ = ヌ", col.compare("ぬ", "ヌ") === 0);
        test.ok("ね = ネ", col.compare("ね", "ネ") === 0);
        test.ok("の = ノ", col.compare("の", "ノ") === 0);
        test.ok("は = ハ", col.compare("は", "ハ") === 0);
        test.ok("ば = バ", col.compare("ば", "バ") === 0);
        test.ok("ば = バ", col.compare("ば", "バ") === 0);
        test.ok("ぱ = パ", col.compare("ぱ", "パ") === 0);
        test.ok("ぱ = パ", col.compare("ぱ", "パ") === 0);
        test.ok("ひ = ヒ", col.compare("ひ", "ヒ") === 0);
        test.ok("び = ビ", col.compare("び", "ビ") === 0);
        test.ok("び = ビ", col.compare("び", "ビ") === 0);
        test.ok("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
        test.ok("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
        test.ok("ふ = フ", col.compare("ふ", "フ") === 0);
        test.ok("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
        test.ok("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
        test.ok("ぷ = プ", col.compare("ぷ", "プ") === 0);
        test.ok("ぷ = プ", col.compare("ぷ", "プ") === 0);
        test.ok("へ = ヘ", col.compare("へ", "ヘ") === 0);
        test.ok("べ = ベ", col.compare("べ", "ベ") === 0);
        test.ok("べ = ベ", col.compare("べ", "ベ") === 0);
        test.ok("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
        test.ok("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
        test.ok("ほ = ホ", col.compare("ほ", "ホ") === 0);
        test.ok("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
        test.ok("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
        test.ok("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
        test.ok("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
        test.ok("ま = マ", col.compare("ま", "マ") === 0);
        test.ok("み = ミ", col.compare("み", "ミ") === 0);
        test.ok("む = ム", col.compare("む", "ム") === 0);
        test.ok("め = メ", col.compare("め", "メ") === 0);
        test.ok("も = モ", col.compare("も", "モ") === 0);
        test.ok("や = ヤ", col.compare("や", "ヤ") === 0);
        test.ok("ゆ = ユ", col.compare("ゆ", "ユ") === 0);
        test.ok("よ = ヨ", col.compare("よ", "ヨ") === 0);
        test.ok("ら = ラ", col.compare("ら", "ラ") === 0);
        test.ok("り = リ", col.compare("り", "リ") === 0);
        test.ok("る = ル", col.compare("る", "ル") === 0);
        test.ok("れ = レ", col.compare("れ", "レ") === 0);
        test.ok("ろ = ロ", col.compare("ろ", "ロ") === 0);
        test.ok("わ = ワ", col.compare("わ", "ワ") === 0);
        test.ok("ゐ = ヰ", col.compare("ゐ", "ヰ") === 0);
        test.ok("ゑ = ヱ", col.compare("ゑ", "ヱ") === 0);
        test.ok("を = ヲ", col.compare("を", "ヲ") === 0);
        test.ok("ん = ン", col.compare("ん", "ン") === 0);
        test.done();
    },
    
    testJSCollatorKanaBeforeKanji_ja: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
        // ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
        
        test.ok("ん <  鯵", col.compare("ん", "鯵") < 0);
        test.ok("ン <  鯵", col.compare("ン", "鯵") < 0);
        test.done();
    },
    
    testJSCollatorSortQuat_ja: function(test) {
        test.expect(50);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
    
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
    
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
    
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.done();
    },
    
    testJSCollatorSortTer_ja: function(test) {
        test.expect(50);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });
    
        // with usage "sort" all of these should stay the same no matter the sensitivity
        
        test.ok(typeof(col) !== "undefined");
    
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
    
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
    
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
    
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.done();
    },
    
    testJSCollatorSortSec_ja: function(test) {
        test.expect(50);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });
    
        // with usage "sort" all of these should stay the same no matter the sensitivity
        
        test.ok(typeof(col) !== "undefined");
    
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
    
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
    
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
    
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.done();
    },
    
    testJSCollatorSortPri_ja: function(test) {
        test.expect(50);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
    
        // with usage "sort" all of these should stay the same no matter the sensitivity
        
        test.ok(typeof(col) !== "undefined");
    
        test.ok("鯵 < 允", col.compare("鯵", "允") < 0);
        test.ok("允 < 渦", col.compare("允", "渦") < 0);
        test.ok("渦 < 頴", col.compare("渦", "頴") < 0);
        
        test.ok("あ < い", col.compare("あ", "い") < 0);
        test.ok("い < う", col.compare("い", "う") < 0);
        test.ok("う < ゔ", col.compare("う", "ゔ") < 0);
        test.ok("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
        test.ok("ゔ < え", col.compare("ゔ", "え") < 0);
    
        test.ok("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
        test.ok("あー < あぁ", col.compare("あー", "あぁ") < 0);
        test.ok("かー < かぁ", col.compare("かー", "かぁ") < 0);
        test.ok("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
        test.ok("がー < がぁ", col.compare("がー", "がぁ") < 0);
        test.ok("さー < さぁ", col.compare("さー", "さぁ") < 0);
    
        test.ok("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
        test.ok("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
        test.ok("いゝ < いい", col.compare("いゝ", "いい") < 0);
        test.ok("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
        test.ok("うゝ < うう", col.compare("うゝ", "うう") < 0);
        test.ok("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
        test.ok("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
        test.ok("うゞ < うゔ", col.compare("うゞ", "うゔ") < 0);
        test.ok("ぅゞ < ぅゔ", col.compare("ぅゞ", "ぅゔ") < 0);
    
        test.ok("ア < イ", col.compare("ア", "イ") < 0);
        test.ok("イ < ウ", col.compare("イ", "ウ") < 0);
        test.ok("ウ < エ", col.compare("ウ", "エ") < 0);
        test.ok("エ < オ", col.compare("エ", "オ") < 0);
        test.ok("オ < カ", col.compare("オ", "カ") < 0);
        test.ok("カ < ガ", col.compare("カ", "ガ") < 0);
        
        test.ok("ァー < ァア", col.compare("ァー", "ァア") < 0);
        test.ok("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
        test.ok("アー < アア", col.compare("アー", "アア") < 0);
        test.ok("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
        test.ok("カー < カア", col.compare("カー", "カア") < 0);
        test.ok("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("ガー < ガア", col.compare("ガー", "ガア") < 0);
        test.ok("サー < サア", col.compare("サー", "サア") < 0);
        test.ok("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
    
        test.ok("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
        test.ok("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
        test.ok("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
        test.ok("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
        test.ok("ウヾ < ウヴ", col.compare("ウヾ", "ウヴ") < 0);
        test.ok("ｳヾ < ｳヴ", col.compare("ｳヾ", "ｳヴ") < 0);
        test.ok("ゥヾ < ゥヴ", col.compare("ゥヾ", "ゥヴ") < 0);
        test.ok("ｩヾ < ｩヴ", col.compare("ｩヾ", "ｩヴ") < 0);
        test.done();
    },
    
    testCollatorCase_ja: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
                    "ぁー",
                    "ｧー",
                    "い",
                    "ｳヾ",
               "イ",
              "ゕー",
                    "ｩヽ",
                    "オ",
                    "か",
                    "ゔゝ",
            "渦",
                    "うゞ",
                   "ぃゝ",              
                    "う",
                    "ウ",
                     "サー",
                 "ぅゞ",
                    "ア",
                    "ガー",
                    "がー",
                    "あー",
                    "あゝ",
                    "ヴヽ",
                    "アー",
                    "ヴヽ",
            "允",
                    "ゥヾ",
                     "ｻー",
            "鯵",
                    "カー",
                  "ウヽ",
                    "ガー",
                     "あ",
                    "カ",
                    "ゥヽ",
                  "ｩヾ",
                    "え",
                    "エ",
                    "お",
                    "うゝ",
                    "ぅゝ",
                    "ぁゝ",
                    "ァー",
                    "ｳヽ",
                    "ｱー",
                "ウヾ",
                    "かー",
                    "いゝ",
            "ｶー"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
                      "ぁー",
                    "ぁゝ",
            "あ",
            "あー",
            "あゝ",
            "ァー",
            "ｧー",
            "ア",
            "アー",
            "ｱー",
    
            "ぃゝ",
            "い",
            "いゝ",
            "イ",
            
            "ぅゝ",
            "ぅゞ",
            "う",
            "うゝ",
            "うゞ",
            "ゥヽ",
            "ゥヾ",
            "ｩヽ",
            "ｩヾ",
            "ウ",
            "ウヽ",
            "ウヾ",
            "ｳヽ",
            "ｳヾ",
            "ゔゝ",
            "ヴヽ",
            "ヴヽ",
            
            "え",
            "エ",
            
            "お",
            "オ",
            
            "ゕー",
            "か",
            "かー",
            "カ",
            "カー",
            "ｶー",
            "がー",
            "ガー",
            "ガー",
    
            "サー",
            "ｻー",
    
            "鯵",
            "允",
            "渦"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPrimary_ja: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "ぁー",
            "ｧー",
            "い",
            "ｳヾ",
            "イ",
            "ゕー",
            "ｩヽ",
            "オ",
            "か",
            "ゔゝ",
            "渦",
            "うゞ",
            "ぃゝ",              
            "う",
            "ウ",
            "サー",
            "ぅゞ",
            "ア",
            "ガー",
            "がー",
            "あー",
            "あゝ",
            "ヴヽ",
            "アー",
            "ヴヽ",
            "允",
            "ゥヾ",
            "ｻー",
            "鯵",
            "カー",
            "ウヽ",
            "ガー",
            "あ",
            "カ",
            "ゥヽ",
            "ｩヾ",
            "え",
            "エ",
            "お",
            "うゝ",
            "ぅゝ",
            "ぁゝ",
            "ァー",
            "ｳヽ",
            "ｱー",
            "ウヾ",
            "かー",
            "いゝ",
            "ｶー"
        ];
        
        input.sort(col.getComparator());
        
        var expected = [
            "ぁー",
            "ぁゝ",
            "あ",
            "あー",
            "あゝ",
            "ァー",
            "ｧー",
            "ア",
            "アー",
            "ｱー",
            
            "ぃゝ",
            "い",
            "いゝ",
            "イ",
            
            "ぅゝ",
            "ぅゞ",
            "う",
            "うゝ",
            "うゞ",
            "ゥヽ",
            "ゥヾ",
            "ｩヽ",
            "ｩヾ",
            "ウ",
            "ウヽ",
            "ウヾ",
            "ｳヽ",
            "ｳヾ",
            "ゔゝ",
            "ヴヽ",
            "ヴヽ",
            
            "え",
            "エ",
            
            "お",
            "オ",
            
            "ゕー",
            "か",
            "かー",
            "カ",
            "カー",
            "ｶー",
            "がー",
            "ガー",
            "ガー",
            
            "サー",
            "ｻー",
            
            "鯵",
            "允",
            "渦"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testJSCollatorQuatLatin_ja: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // all latin letters
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.done();
    },
    
    testCollatorPrimaryMixed_ja: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ja-JP",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
                     "ぁー",
                    "ｧー",
            "peach",
                   "い",
                    "ｳヾ",
               "イ",
              "ゕー",
                    "ｩヽ",
                    "オ",
                    "か",
            "banana",
                    "ゔゝ",
            "渦",
                    "うゞ",
                   "ぃゝ",              
                    "う",
                    "ウ",
                     "サー",
                 "ぅゞ",
                    "ア",
                    "ガー",
                    "がー",
                    "あー",
            "raspberry",
                   "あゝ",
                    "ヴヽ",
                    "アー",
                    "ヴヽ",
            "允",
                    "ゥヾ",
                     "ｻー",
            "鯵",
                    "カー",
                  "ウヽ",
                    "ガー",
                     "あ",
                    "カ",
                    "ゥヽ",
                  "ｩヾ",
                    "え",
                    "エ",
            "apple",
            "お",
            "うゝ",
            "ぅゝ",
            "ぁゝ",
            "ァー",
            "ｳヽ",
            "orange",
                    "ｱー",
                "ウヾ",
                    "かー",
                    "いゝ",
            "ｶー"
        ];
    
        input.sort(col.getComparator());
    
        // Latin letters sort after the Cyrillic ones
        
        var expected = [
            "apple",
            "banana",
            "orange",
            "peach",
            "raspberry",
    
                    "ぁー",
                    "ぁゝ",
                "あ",
                "あー",
                "あゝ",
                "ァー",
                "ｧー",
                "ア",
                "アー",
                "ｱー",
    
                "ぃゝ",
                "い",
                "いゝ",
                "イ",
                
                    "ぅゝ",
                   "ぅゞ",
                "う",
                "うゝ",
                "うゞ",
                   "ゥヽ",
                "ゥヾ",
                    "ｩヽ",
                   "ｩヾ",
             "ウ",
                "ウヽ",
                "ウヾ",
                "ｳヽ",
                "ｳヾ",
                "ゔゝ",
                "ヴヽ",
                "ヴヽ",
                
                "え",
                "エ",
                
                "お",
                "オ",
                
                "ゕー",
                "か",
                "かー",
                "カ",
                "カー",
                "ｶー",
                "がー",
                "ガー",
                "ガー",
    
                "サー",
                "ｻー",
    
            "鯵",
            "允",
            "渦"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
};
