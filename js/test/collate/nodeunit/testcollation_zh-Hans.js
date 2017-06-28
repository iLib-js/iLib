/*
 * testcollation_zh-Hans.js - test the Collator object in simplified Chinese
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

module.exports.testcollation_zh_Hans = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatHanzi_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(21);
        test.ok(typeof(col) !== "undefined");
        
        test.ok("阿 < 拜", col.compare("阿", "拜") < 0);
        test.ok("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
        test.ok("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
        test.ok("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
        test.ok("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
        test.ok("捶 < 峒", col.compare("捶", "峒") < 0);
        test.ok("峒 < 㶥", col.compare("峒", "㶥") < 0);
        test.ok("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
        test.ok("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
        test.ok("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
        test.ok("䢧 < 苜", col.compare("䢧", "苜") < 0);
        test.ok("苜 < 肶", col.compare("苜", "肶") < 0);
        test.ok("肶 < 埁", col.compare("肶", "埁") < 0);
        test.ok("埁 < 泩", col.compare("埁", "泩") < 0);
        test.ok("泩 < 窱", col.compare("泩", "窱") < 0);
        test.ok("窱 < 扤", col.compare("窱", "扤") < 0);
        test.ok("扤 < 辥", col.compare("扤", "辥") < 0);
        test.ok("辥 < 䓰", col.compare("辥", "䓰") < 0);
        test.ok("䓰 < 赵", col.compare("䓰", "赵") < 0);
        test.ok("赵 < 蓙", col.compare("赵", "蓙") < 0);
        test.done();
    },
    
    testJSCollatorTerHanzi_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(21);
        test.ok(typeof(col) !== "undefined");
        test.ok("阿 < 拜", col.compare("阿", "拜") < 0);
        test.ok("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
        test.ok("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
        test.ok("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
        test.ok("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
        test.ok("捶 < 峒", col.compare("捶", "峒") < 0);
        test.ok("峒 < 㶥", col.compare("峒", "㶥") < 0);
        test.ok("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
        test.ok("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
        test.ok("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
        test.ok("䢧 < 苜", col.compare("䢧", "苜") < 0);
        test.ok("苜 < 肶", col.compare("苜", "肶") < 0);
        test.ok("肶 < 埁", col.compare("肶", "埁") < 0);
        test.ok("埁 < 泩", col.compare("埁", "泩") < 0);
        test.ok("泩 < 窱", col.compare("泩", "窱") < 0);
        test.ok("窱 < 扤", col.compare("窱", "扤") < 0);
        test.ok("扤 < 辥", col.compare("扤", "辥") < 0);
        test.ok("辥 < 䓰", col.compare("辥", "䓰") < 0);
        test.ok("䓰 < 赵", col.compare("䓰", "赵") < 0);
        test.ok("赵 < 蓙", col.compare("赵", "蓙") < 0);
        test.done();
    },
    
    testJSCollatorSecHanzi_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(21);
        test.ok(typeof(col) !== "undefined");
        test.ok("阿 < 拜", col.compare("阿", "拜") < 0);
        test.ok("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
        test.ok("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
        test.ok("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
        test.ok("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
        test.ok("捶 < 峒", col.compare("捶", "峒") < 0);
        test.ok("峒 < 㶥", col.compare("峒", "㶥") < 0);
        test.ok("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
        test.ok("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
        test.ok("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
        test.ok("䢧 < 苜", col.compare("䢧", "苜") < 0);
        test.ok("苜 < 肶", col.compare("苜", "肶") < 0);
        test.ok("肶 < 埁", col.compare("肶", "埁") < 0);
        test.ok("埁 < 泩", col.compare("埁", "泩") < 0);
        test.ok("泩 < 窱", col.compare("泩", "窱") < 0);
        test.ok("窱 < 扤", col.compare("窱", "扤") < 0);
        test.ok("扤 < 辥", col.compare("扤", "辥") < 0);
        test.ok("辥 < 䓰", col.compare("辥", "䓰") < 0);
        test.ok("䓰 < 赵", col.compare("䓰", "赵") < 0);
        test.ok("赵 < 蓙", col.compare("赵", "蓙") < 0);
        test.done();
    },
    
    testJSCollatorPriHanzi_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(21);
        test.ok(typeof(col) !== "undefined");
        test.ok("阿 < 拜", col.compare("阿", "拜") < 0);
        test.ok("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
        test.ok("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
        test.ok("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
        test.ok("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
        test.ok("捶 < 峒", col.compare("捶", "峒") < 0);
        test.ok("峒 < 㶥", col.compare("峒", "㶥") < 0);
        test.ok("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
        test.ok("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
        test.ok("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
        test.ok("䢧 < 苜", col.compare("䢧", "苜") < 0);
        test.ok("苜 < 肶", col.compare("苜", "肶") < 0);
        test.ok("肶 < 埁", col.compare("肶", "埁") < 0);
        test.ok("埁 < 泩", col.compare("埁", "泩") < 0);
        test.ok("泩 < 窱", col.compare("泩", "窱") < 0);
        test.ok("窱 < 扤", col.compare("窱", "扤") < 0);
        test.ok("扤 < 辥", col.compare("扤", "辥") < 0);
        test.ok("辥 < 䓰", col.compare("辥", "䓰") < 0);
        test.ok("䓰 < 赵", col.compare("䓰", "赵") < 0);
        test.ok("赵 < 蓙", col.compare("赵", "蓙") < 0);
        test.done();
    },
    
    testJSCollatorQuatHanziVariants_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.expect(10);
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("幼 < ㉅", col.compare("幼", "㉅") < 0);
        test.ok("平成 < ㍻", col.compare("平成", "㍻") < 0);
        test.ok("幼 < ㉅", col.compare("幼", "㉅") < 0);
        test.ok("木 < ⽊", col.compare("木", "⽊") < 0);
        test.ok("木 < ㊍", col.compare("木", "㊍") < 0);
        test.ok("株式会社 < ㍿", col.compare("株式会社", "㍿") < 0);
        test.ok("穴 < ⽳", col.compare("穴", "⽳") < 0);
        test.ok("非 < ⾮", col.compare("非", "⾮") < 0);
        test.ok("龠 < ⿕", col.compare("龠", "⿕") < 0);
        test.done();
    },
    
    testJSCollatorTerHanziVariants_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.expect(10);
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("幼 < ㉅", col.compare("幼", "㉅") < 0);
        test.ok("平成 < ㍻", col.compare("平成", "㍻") < 0);
        test.ok("幼 < ㉅", col.compare("幼", "㉅") < 0);
        test.ok("木 < ⽊", col.compare("木", "⽊") < 0);
        test.ok("木 < ㊍", col.compare("木", "㊍") < 0);
        test.ok("株式会社 < ㍿", col.compare("株式会社", "㍿") < 0);
        test.ok("穴 < ⽳", col.compare("穴", "⽳") < 0);
        test.ok("非 < ⾮", col.compare("非", "⾮") < 0);
        test.ok("龠 < ⿕", col.compare("龠", "⿕") < 0);
        test.done();
    },
    
    testJSCollatorSecHanziVariants_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.expect(10);
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("幼 = ㉅", col.compare("幼", "㉅") === 0);
        test.ok("平成 = ㍻", col.compare("平成", "㍻") === 0);
        test.ok("幼 = ㉅", col.compare("幼", "㉅") === 0);
        test.ok("木 = ⽊", col.compare("木", "⽊") === 0);
        test.ok("木 = ㊍", col.compare("木", "㊍") === 0);
        test.ok("株式会社 = ㍿", col.compare("株式会社", "㍿") === 0);
        test.ok("穴 = ⽳", col.compare("穴", "⽳") === 0);
        test.ok("非 = ⾮", col.compare("非", "⾮") === 0);
        test.ok("龠 = ⿕", col.compare("龠", "⿕") === 0);
        test.done();
    },
    
    testJSCollatorPriHanziVariants_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.expect(10);
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("幼 = ㉅", col.compare("幼", "㉅") === 0);
        test.ok("平成 = ㍻", col.compare("平成", "㍻") === 0);
        test.ok("幼 = ㉅", col.compare("幼", "㉅") === 0);
        test.ok("木 = ⽊", col.compare("木", "⽊") === 0);
        test.ok("木 = ㊍", col.compare("木", "㊍") === 0);
        test.ok("株式会社 = ㍿", col.compare("株式会社", "㍿") === 0);
        test.ok("穴 = ⽳", col.compare("穴", "⽳") === 0);
        test.ok("非 = ⾮", col.compare("非", "⾮") === 0);
        test.ok("龠 = ⿕", col.compare("龠", "⿕") === 0);
        test.done();
    },
    
    testJSCollatorPinyinQuat_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(219);
        test.ok(typeof(col) !== "undefined");
        
        test.ok("bā < bá", col.compare("bā", "bá") < 0);
        test.ok("bá < bǎ", col.compare("bá", "bǎ") < 0);
        test.ok("bǎ < bà", col.compare("bǎ", "bà") < 0);
        test.ok("bà < ba", col.compare("bà", "ba") < 0);
        test.ok("bāi < bai", col.compare("bāi", "bai") < 0);
        test.ok("bai < chái", col.compare("bai", "chái") < 0);
        test.ok("chái < chē", col.compare("chái", "chē") < 0);
        test.ok("chē < chēn", col.compare("chē", "chēn") < 0);
        test.ok("chēn < ché", col.compare("chēn", "ché") < 0);
        test.ok("ché < chě", col.compare("ché", "chě") < 0);
        test.ok("chě < chè", col.compare("chě", "chè") < 0);
        
        test.ok("Ā < Ā", col.compare("Ā", "Ā") < 0);
        test.ok("Ā < ā", col.compare("Ā", "ā") < 0);
        test.ok("ā < ā", col.compare("ā", "ā") < 0);
        test.ok("ā < Á", col.compare("ā", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < Ǎ", col.compare("á", "Ǎ") < 0);
        test.ok("Ǎ < Ǎ", col.compare("Ǎ", "Ǎ") < 0);
        test.ok("Ǎ < ǎ", col.compare("Ǎ", "ǎ") < 0);
        test.ok("ǎ < ǎ", col.compare("ǎ", "ǎ") < 0);
        test.ok("ǎ < À", col.compare("ǎ", "À") < 0);
        test.ok("À < À", col.compare("À", "À") < 0);
        test.ok("À < à", col.compare("À", "à") < 0);
        test.ok("à < à", col.compare("à", "à") < 0);
        test.ok("à < A", col.compare("à", "A") < 0);
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ē", col.compare("d", "Ē") < 0);
        test.ok("Ē < Ē", col.compare("Ē", "Ē") < 0);
        test.ok("Ē < ē", col.compare("Ē", "ē") < 0);
        test.ok("ē < ē", col.compare("ē", "ē") < 0);
        test.ok("ē < É", col.compare("ē", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < È", col.compare("ě", "È") < 0);
        test.ok("È < È", col.compare("È", "È") < 0);
        test.ok("È < è", col.compare("È", "è") < 0);
        test.ok("è < è", col.compare("è", "è") < 0);
        test.ok("è < E", col.compare("è", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < Ê̄", col.compare("e", "Ê̄") < 0);
        test.ok("Ê̄ < Ē̂", col.compare("Ê̄", "Ē̂") < 0);
        test.ok("Ē̂ < Ê̄", col.compare("Ē̂", "Ê̄") < 0);
        test.ok("Ê̄ < ê̄", col.compare("Ê̄", "ê̄") < 0);
        test.ok("ê̄ < ē̂", col.compare("ê̄", "ē̂") < 0);
        test.ok("ē̂ < ê̄", col.compare("ē̂", "ê̄") < 0);
        test.ok("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
        test.ok("Ế < É̂", col.compare("Ế", "É̂") < 0);
        test.ok("É̂ < Ế", col.compare("É̂", "Ế") < 0);
        test.ok("Ế < ế", col.compare("Ế", "ế") < 0);
        test.ok("ế < é̂", col.compare("ế", "é̂") < 0);
        test.ok("é̂ < ế", col.compare("é̂", "ế") < 0);
        test.ok("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
        test.ok("Ê̌ < Ě̂", col.compare("Ê̌", "Ě̂") < 0);
        test.ok("Ě̂ < Ê̌", col.compare("Ě̂", "Ê̌") < 0);
        test.ok("Ê̌ < ê̌", col.compare("Ê̌", "ê̌") < 0);
        test.ok("ê̌ < ě̂", col.compare("ê̌", "ě̂") < 0);
        test.ok("ě̂ < ê̌", col.compare("ě̂", "ê̌") < 0);
        test.ok("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
        test.ok("Ề < È̂", col.compare("Ề", "È̂") < 0);
        test.ok("È̂ < Ề", col.compare("È̂", "Ề") < 0);
        test.ok("Ề < ề", col.compare("Ề", "ề") < 0);
        test.ok("ề < è̂", col.compare("ề", "è̂") < 0);
        test.ok("è̂ < ề", col.compare("è̂", "ề") < 0);
        test.ok("ề < F", col.compare("ề", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < Ī", col.compare("h", "Ī") < 0);
        test.ok("Ī < Ī", col.compare("Ī", "Ī") < 0);
        test.ok("Ī < ī", col.compare("Ī", "ī") < 0);
        test.ok("ī < ī", col.compare("ī", "ī") < 0);
        test.ok("ī < Í", col.compare("ī", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < Ǐ", col.compare("í", "Ǐ") < 0);
        test.ok("Ǐ < Ǐ", col.compare("Ǐ", "Ǐ") < 0);
        test.ok("Ǐ < ǐ", col.compare("Ǐ", "ǐ") < 0);
        test.ok("ǐ < ǐ", col.compare("ǐ", "ǐ") < 0);
        test.ok("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
        test.ok("Ì < Ì", col.compare("Ì", "Ì") < 0);
        test.ok("Ì < ì", col.compare("Ì", "ì") < 0);
        test.ok("ì < ì", col.compare("ì", "ì") < 0);
        test.ok("ì < I", col.compare("ì", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M̄", col.compare("l", "M̄") < 0);
        test.ok("M̄ < m̄", col.compare("M̄", "m̄") < 0);
        test.ok("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
        test.ok("Ḿ < Ḿ", col.compare("Ḿ", "Ḿ") < 0);
        test.ok("Ḿ < ḿ", col.compare("Ḿ", "ḿ") < 0);
        test.ok("ḿ < ḿ", col.compare("ḿ", "ḿ") < 0);
        test.ok("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
        test.ok("M̌ < m̌", col.compare("M̌", "m̌") < 0);
        test.ok("m̌ < M̀", col.compare("m̌", "M̀") < 0);
        test.ok("M̀ < m̀", col.compare("M̀", "m̀") < 0);
        test.ok("m̀ < M", col.compare("m̀", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N̄", col.compare("m", "N̄") < 0);
        test.ok("N̄ < n̄", col.compare("N̄", "n̄") < 0);
        test.ok("n̄ < Ń", col.compare("n̄", "Ń") < 0);
        test.ok("Ń < Ń", col.compare("Ń", "Ń") < 0);
        test.ok("Ń < ń", col.compare("Ń", "ń") < 0);
        test.ok("ń < ń", col.compare("ń", "ń") < 0);
        test.ok("ń < Ň", col.compare("ń", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
        test.ok("Ǹ < Ǹ", col.compare("Ǹ", "Ǹ") < 0);
        test.ok("Ǹ < ǹ", col.compare("Ǹ", "ǹ") < 0);
        test.ok("ǹ < ǹ", col.compare("ǹ", "ǹ") < 0);
        test.ok("ǹ < N", col.compare("ǹ", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ō", col.compare("n", "Ō") < 0);
        test.ok("Ō < Ō", col.compare("Ō", "Ō") < 0);
        test.ok("Ō < ō", col.compare("Ō", "ō") < 0);
        test.ok("ō < ō", col.compare("ō", "ō") < 0);
        test.ok("ō < Ó", col.compare("ō", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
        test.ok("Ǒ < Ǒ", col.compare("Ǒ", "Ǒ") < 0);
        test.ok("Ǒ < ǒ", col.compare("Ǒ", "ǒ") < 0);
        test.ok("ǒ < ǒ", col.compare("ǒ", "ǒ") < 0);
        test.ok("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
        test.ok("Ò < Ò", col.compare("Ò", "Ò") < 0);
        test.ok("Ò < ò", col.compare("Ò", "ò") < 0);
        test.ok("ò < ò", col.compare("ò", "ò") < 0);
        test.ok("ò < O", col.compare("ò", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ū", col.compare("t", "Ū") < 0);
        test.ok("Ū < Ū", col.compare("Ū", "Ū") < 0);
        test.ok("Ū < ū", col.compare("Ū", "ū") < 0);
        test.ok("ū < ū", col.compare("ū", "ū") < 0);
        test.ok("ū < Ú", col.compare("ū", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
        test.ok("Ǔ < Ǔ", col.compare("Ǔ", "Ǔ") < 0);
        test.ok("Ǔ < ǔ", col.compare("Ǔ", "ǔ") < 0);
        test.ok("ǔ < ǔ", col.compare("ǔ", "ǔ") < 0);
        test.ok("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
        test.ok("Ù < Ù", col.compare("Ù", "Ù") < 0);
        test.ok("Ù < ù", col.compare("Ù", "ù") < 0);
        test.ok("ù < ù", col.compare("ù", "ù") < 0);
        test.ok("ù < U", col.compare("ù", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ǖ", col.compare("u", "Ǖ") < 0);
        test.ok("Ǖ < Ṻ", col.compare("Ǖ", "Ṻ") < 0);
        test.ok("Ṻ < Ǖ", col.compare("Ṻ", "Ǖ") < 0);
        test.ok("Ǖ < ǖ", col.compare("Ǖ", "ǖ") < 0);
        test.ok("ǖ < ṻ", col.compare("ǖ", "ṻ") < 0);
        test.ok("ṻ < ǖ", col.compare("ṻ", "ǖ") < 0);
        test.ok("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
        test.ok("Ǘ < Ú̈", col.compare("Ǘ", "Ú̈") < 0);
        test.ok("Ú̈ < Ǘ", col.compare("Ú̈", "Ǘ") < 0);
        test.ok("Ǘ < ǘ", col.compare("Ǘ", "ǘ") < 0);
        test.ok("ǘ < ú̈", col.compare("ǘ", "ú̈") < 0);
        test.ok("ú̈ < ǘ", col.compare("ú̈", "ǘ") < 0);
        test.ok("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
        test.ok("Ǚ < Ǔ̈", col.compare("Ǚ", "Ǔ̈") < 0);
        test.ok("Ǔ̈ < Ǚ", col.compare("Ǔ̈", "Ǚ") < 0);
        test.ok("Ǚ < ǚ", col.compare("Ǚ", "ǚ") < 0);
        test.ok("ǚ < ǔ̈", col.compare("ǚ", "ǔ̈") < 0);
        test.ok("ǔ̈ < ǚ", col.compare("ǔ̈", "ǚ") < 0);
        test.ok("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
        test.ok("Ǜ < Ù̈", col.compare("Ǜ", "Ù̈") < 0);
        test.ok("Ù̈ < Ǜ", col.compare("Ù̈", "Ǜ") < 0);
        test.ok("Ǜ < ǜ", col.compare("Ǜ", "ǜ") < 0);
        test.ok("ǜ < ù̈", col.compare("ǜ", "ù̈") < 0);
        test.ok("ù̈ < ǜ", col.compare("ù̈", "ǜ") < 0);
        test.ok("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
        test.ok("Ü < Ü", col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü", col.compare("Ü", "ü") < 0);
        test.ok("ü < ü", col.compare("ü", "ü") < 0);
        test.ok("ü < V", col.compare("ü", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.done();
    },
    
    testJSCollatorPinyinTer_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(219);
        test.ok(typeof(col) !== "undefined");
        
        test.ok("bā < bá", col.compare("bā", "bá") < 0);
        test.ok("bá < bǎ", col.compare("bá", "bǎ") < 0);
        test.ok("bǎ < bà", col.compare("bǎ", "bà") < 0);
        test.ok("bà < ba", col.compare("bà", "ba") < 0);
        test.ok("bāi < bai", col.compare("bāi", "bai") < 0);
        test.ok("bai < chái", col.compare("bai", "chái") < 0);
        test.ok("chái < chē", col.compare("chái", "chē") < 0);
        test.ok("chē < chēn", col.compare("chē", "chēn") < 0);
        test.ok("chēn < ché", col.compare("chēn", "ché") < 0);
        test.ok("ché < chě", col.compare("ché", "chě") < 0);
        test.ok("chě < chè", col.compare("chě", "chè") < 0);
    
        test.ok("Ā = Ā", col.compare("Ā", "Ā") === 0);
        test.ok("Ā < ā", col.compare("Ā", "ā") < 0);
        test.ok("ā = ā", col.compare("ā", "ā") === 0);
        test.ok("ā < Á", col.compare("ā", "Á") < 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á < Ǎ", col.compare("á", "Ǎ") < 0);
        test.ok("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
        test.ok("Ǎ < ǎ", col.compare("Ǎ", "ǎ") < 0);
        test.ok("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
        test.ok("ǎ < À", col.compare("ǎ", "À") < 0);
        test.ok("À = À", col.compare("À", "À") === 0);
        test.ok("À < à", col.compare("À", "à") < 0);
        test.ok("à = à", col.compare("à", "à") === 0);
        test.ok("à < A", col.compare("à", "A") < 0);
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ē", col.compare("d", "Ē") < 0);
        test.ok("Ē = Ē", col.compare("Ē", "Ē") === 0);
        test.ok("Ē < ē", col.compare("Ē", "ē") < 0);
        test.ok("ē = ē", col.compare("ē", "ē") === 0);
        test.ok("ē < É", col.compare("ē", "É") < 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě < È", col.compare("ě", "È") < 0);
        test.ok("È = È", col.compare("È", "È") === 0);
        test.ok("È < è", col.compare("È", "è") < 0);
        test.ok("è = è", col.compare("è", "è") === 0);
        test.ok("è < E", col.compare("è", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < Ê̄", col.compare("e", "Ê̄") < 0);
        test.ok("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
        test.ok("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
        test.ok("Ê̄ < ê̄", col.compare("Ê̄", "ê̄") < 0);
        test.ok("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
        test.ok("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
        test.ok("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
        test.ok("Ế = É̂", col.compare("Ế", "É̂") === 0);
        test.ok("É̂ = Ế", col.compare("É̂", "Ế") === 0);
        test.ok("Ế < ế", col.compare("Ế", "ế") < 0);
        test.ok("ế = é̂", col.compare("ế", "é̂") === 0);
        test.ok("é̂ = ế", col.compare("é̂", "ế") === 0);
        test.ok("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
        test.ok("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
        test.ok("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
        test.ok("Ê̌ < ê̌", col.compare("Ê̌", "ê̌") < 0);
        test.ok("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
        test.ok("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
        test.ok("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
        test.ok("Ề = È̂", col.compare("Ề", "È̂") === 0);
        test.ok("È̂ = Ề", col.compare("È̂", "Ề") === 0);
        test.ok("Ề < ề", col.compare("Ề", "ề") < 0);
        test.ok("ề = è̂", col.compare("ề", "è̂") === 0);
        test.ok("è̂ = ề", col.compare("è̂", "ề") === 0);
        test.ok("ề < F", col.compare("ề", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < Ī", col.compare("h", "Ī") < 0);
        test.ok("Ī = Ī", col.compare("Ī", "Ī") === 0);
        test.ok("Ī < ī", col.compare("Ī", "ī") < 0);
        test.ok("ī = ī", col.compare("ī", "ī") === 0);
        test.ok("ī < Í", col.compare("ī", "Í") < 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í < Ǐ", col.compare("í", "Ǐ") < 0);
        test.ok("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
        test.ok("Ǐ < ǐ", col.compare("Ǐ", "ǐ") < 0);
        test.ok("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
        test.ok("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
        test.ok("Ì = Ì", col.compare("Ì", "Ì") === 0);
        test.ok("Ì < ì", col.compare("Ì", "ì") < 0);
        test.ok("ì = ì", col.compare("ì", "ì") === 0);
        test.ok("ì < I", col.compare("ì", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M̄", col.compare("l", "M̄") < 0);
        test.ok("M̄ < m̄", col.compare("M̄", "m̄") < 0);
        test.ok("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
        test.ok("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
        test.ok("Ḿ < ḿ", col.compare("Ḿ", "ḿ") < 0);
        test.ok("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
        test.ok("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
        test.ok("M̌ < m̌", col.compare("M̌", "m̌") < 0);
        test.ok("m̌ < M̀", col.compare("m̌", "M̀") < 0);
        test.ok("M̀ < m̀", col.compare("M̀", "m̀") < 0);
        test.ok("m̀ < M", col.compare("m̀", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N̄", col.compare("m", "N̄") < 0);
        test.ok("N̄ < n̄", col.compare("N̄", "n̄") < 0);
        test.ok("n̄ < Ń", col.compare("n̄", "Ń") < 0);
        test.ok("Ń = Ń", col.compare("Ń", "Ń") === 0);
        test.ok("Ń < ń", col.compare("Ń", "ń") < 0);
        test.ok("ń = ń", col.compare("ń", "ń") === 0);
        test.ok("ń < Ň", col.compare("ń", "Ň") < 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
        test.ok("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
        test.ok("Ǹ < ǹ", col.compare("Ǹ", "ǹ") < 0);
        test.ok("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
        test.ok("ǹ < N", col.compare("ǹ", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ō", col.compare("n", "Ō") < 0);
        test.ok("Ō = Ō", col.compare("Ō", "Ō") === 0);
        test.ok("Ō < ō", col.compare("Ō", "ō") < 0);
        test.ok("ō = ō", col.compare("ō", "ō") === 0);
        test.ok("ō < Ó", col.compare("ō", "Ó") < 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
        test.ok("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
        test.ok("Ǒ < ǒ", col.compare("Ǒ", "ǒ") < 0);
        test.ok("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
        test.ok("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
        test.ok("Ò = Ò", col.compare("Ò", "Ò") === 0);
        test.ok("Ò < ò", col.compare("Ò", "ò") < 0);
        test.ok("ò = ò", col.compare("ò", "ò") === 0);
        test.ok("ò < O", col.compare("ò", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ū", col.compare("t", "Ū") < 0);
        test.ok("Ū = Ū", col.compare("Ū", "Ū") === 0);
        test.ok("Ū < ū", col.compare("Ū", "ū") < 0);
        test.ok("ū = ū", col.compare("ū", "ū") === 0);
        test.ok("ū < Ú", col.compare("ū", "Ú") < 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
        test.ok("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
        test.ok("Ǔ < ǔ", col.compare("Ǔ", "ǔ") < 0);
        test.ok("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
        test.ok("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
        test.ok("Ù = Ù", col.compare("Ù", "Ù") === 0);
        test.ok("Ù < ù", col.compare("Ù", "ù") < 0);
        test.ok("ù = ù", col.compare("ù", "ù") === 0);
        test.ok("ù < U", col.compare("ù", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ǖ", col.compare("u", "Ǖ") < 0);
        test.ok("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
        test.ok("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
        test.ok("Ǖ < ǖ", col.compare("Ǖ", "ǖ") < 0);
        test.ok("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
        test.ok("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
        test.ok("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
        test.ok("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
        test.ok("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
        test.ok("Ǘ < ǘ", col.compare("Ǘ", "ǘ") < 0);
        test.ok("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
        test.ok("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
        test.ok("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
        test.ok("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
        test.ok("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
        test.ok("Ǚ < ǚ", col.compare("Ǚ", "ǚ") < 0);
        test.ok("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
        test.ok("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
        test.ok("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
        test.ok("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
        test.ok("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
        test.ok("Ǜ < ǜ", col.compare("Ǜ", "ǜ") < 0);
        test.ok("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
        test.ok("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
        test.ok("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
        test.ok("Ü = Ü", col.compare("Ü", "Ü") === 0);
        test.ok("Ü < ü", col.compare("Ü", "ü") < 0);
        test.ok("ü = ü", col.compare("ü", "ü") === 0);
        test.ok("ü < V", col.compare("ü", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.done();
    },
    
    testJSCollatorPinyinSec_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(219);
        test.ok(typeof(col) !== "undefined");
        
        test.ok("bā < bá", col.compare("bā", "bá") < 0);
        test.ok("bá < bǎ", col.compare("bá", "bǎ") < 0);
        test.ok("bǎ < bà", col.compare("bǎ", "bà") < 0);
        test.ok("bà < ba", col.compare("bà", "ba") < 0);
        test.ok("bāi < bai", col.compare("bāi", "bai") < 0);
        test.ok("bai < chái", col.compare("bai", "chái") < 0);
        test.ok("chái < chē", col.compare("chái", "chē") < 0);
        test.ok("chē < chēn", col.compare("chē", "chēn") < 0);
        test.ok("chēn < ché", col.compare("chēn", "ché") < 0);
        test.ok("ché < chě", col.compare("ché", "chě") < 0);
        test.ok("chě < chè", col.compare("chě", "chè") < 0);
    
        test.ok("Ā = Ā", col.compare("Ā", "Ā") === 0);
        test.ok("Ā = ā", col.compare("Ā", "ā") === 0);
        test.ok("ā = ā", col.compare("ā", "ā") === 0);
        test.ok("ā < Á", col.compare("ā", "Á") < 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á = á", col.compare("Á", "á") === 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á < Ǎ", col.compare("á", "Ǎ") < 0);
        test.ok("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
        test.ok("Ǎ = ǎ", col.compare("Ǎ", "ǎ") === 0);
        test.ok("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
        test.ok("ǎ < À", col.compare("ǎ", "À") < 0);
        test.ok("À = À", col.compare("À", "À") === 0);
        test.ok("À = à", col.compare("À", "à") === 0);
        test.ok("à = à", col.compare("à", "à") === 0);
        test.ok("à < A", col.compare("à", "A") < 0);
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < Ē", col.compare("d", "Ē") < 0);
        test.ok("Ē = Ē", col.compare("Ē", "Ē") === 0);
        test.ok("Ē = ē", col.compare("Ē", "ē") === 0);
        test.ok("ē = ē", col.compare("ē", "ē") === 0);
        test.ok("ē < É", col.compare("ē", "É") < 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É = é", col.compare("É", "é") === 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě = ě", col.compare("Ě", "ě") === 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě < È", col.compare("ě", "È") < 0);
        test.ok("È = È", col.compare("È", "È") === 0);
        test.ok("È = è", col.compare("È", "è") === 0);
        test.ok("è = è", col.compare("è", "è") === 0);
        test.ok("è < E", col.compare("è", "E") < 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e < Ê̄", col.compare("e", "Ê̄") < 0);
        test.ok("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
        test.ok("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
        test.ok("Ê̄ = ê̄", col.compare("Ê̄", "ê̄") === 0);
        test.ok("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
        test.ok("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
        test.ok("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
        test.ok("Ế = É̂", col.compare("Ế", "É̂") === 0);
        test.ok("É̂ = Ế", col.compare("É̂", "Ế") === 0);
        test.ok("Ế = ế", col.compare("Ế", "ế") === 0);
        test.ok("ế = é̂", col.compare("ế", "é̂") === 0);
        test.ok("é̂ = ế", col.compare("é̂", "ế") === 0);
        test.ok("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
        test.ok("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
        test.ok("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
        test.ok("Ê̌ = ê̌", col.compare("Ê̌", "ê̌") === 0);
        test.ok("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
        test.ok("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
        test.ok("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
        test.ok("Ề = È̂", col.compare("Ề", "È̂") === 0);
        test.ok("È̂ = Ề", col.compare("È̂", "Ề") === 0);
        test.ok("Ề = ề", col.compare("Ề", "ề") === 0);
        test.ok("ề = è̂", col.compare("ề", "è̂") === 0);
        test.ok("è̂ = ề", col.compare("è̂", "ề") === 0);
        test.ok("ề < F", col.compare("ề", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < Ī", col.compare("h", "Ī") < 0);
        test.ok("Ī = Ī", col.compare("Ī", "Ī") === 0);
        test.ok("Ī = ī", col.compare("Ī", "ī") === 0);
        test.ok("ī = ī", col.compare("ī", "ī") === 0);
        test.ok("ī < Í", col.compare("ī", "Í") < 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í = í", col.compare("Í", "í") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í < Ǐ", col.compare("í", "Ǐ") < 0);
        test.ok("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
        test.ok("Ǐ = ǐ", col.compare("Ǐ", "ǐ") === 0);
        test.ok("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
        test.ok("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
        test.ok("Ì = Ì", col.compare("Ì", "Ì") === 0);
        test.ok("Ì = ì", col.compare("Ì", "ì") === 0);
        test.ok("ì = ì", col.compare("ì", "ì") === 0);
        test.ok("ì < I", col.compare("ì", "I") < 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M̄", col.compare("l", "M̄") < 0);
        test.ok("M̄ = m̄", col.compare("M̄", "m̄") === 0);
        test.ok("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
        test.ok("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
        test.ok("Ḿ = ḿ", col.compare("Ḿ", "ḿ") === 0);
        test.ok("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
        test.ok("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
        test.ok("M̌ = m̌", col.compare("M̌", "m̌") === 0);
        test.ok("m̌ < M̀", col.compare("m̌", "M̀") < 0);
        test.ok("M̀ = m̀", col.compare("M̀", "m̀") === 0);
        test.ok("m̀ < M", col.compare("m̀", "M") < 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N̄", col.compare("m", "N̄") < 0);
        test.ok("N̄ = n̄", col.compare("N̄", "n̄") === 0);
        test.ok("n̄ < Ń", col.compare("n̄", "Ń") < 0);
        test.ok("Ń = Ń", col.compare("Ń", "Ń") === 0);
        test.ok("Ń = ń", col.compare("Ń", "ń") === 0);
        test.ok("ń = ń", col.compare("ń", "ń") === 0);
        test.ok("ń < Ň", col.compare("ń", "Ň") < 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň = ň", col.compare("Ň", "ň") === 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
        test.ok("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
        test.ok("Ǹ = ǹ", col.compare("Ǹ", "ǹ") === 0);
        test.ok("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
        test.ok("ǹ < N", col.compare("ǹ", "N") < 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < Ō", col.compare("n", "Ō") < 0);
        test.ok("Ō = Ō", col.compare("Ō", "Ō") === 0);
        test.ok("Ō = ō", col.compare("Ō", "ō") === 0);
        test.ok("ō = ō", col.compare("ō", "ō") === 0);
        test.ok("ō < Ó", col.compare("ō", "Ó") < 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó = ó", col.compare("Ó", "ó") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
        test.ok("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
        test.ok("Ǒ = ǒ", col.compare("Ǒ", "ǒ") === 0);
        test.ok("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
        test.ok("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
        test.ok("Ò = Ò", col.compare("Ò", "Ò") === 0);
        test.ok("Ò = ò", col.compare("Ò", "ò") === 0);
        test.ok("ò = ò", col.compare("ò", "ò") === 0);
        test.ok("ò < O", col.compare("ò", "O") < 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < Ū", col.compare("t", "Ū") < 0);
        test.ok("Ū = Ū", col.compare("Ū", "Ū") === 0);
        test.ok("Ū = ū", col.compare("Ū", "ū") === 0);
        test.ok("ū = ū", col.compare("ū", "ū") === 0);
        test.ok("ū < Ú", col.compare("ū", "Ú") < 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú = ú", col.compare("Ú", "ú") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
        test.ok("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
        test.ok("Ǔ = ǔ", col.compare("Ǔ", "ǔ") === 0);
        test.ok("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
        test.ok("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
        test.ok("Ù = Ù", col.compare("Ù", "Ù") === 0);
        test.ok("Ù = ù", col.compare("Ù", "ù") === 0);
        test.ok("ù = ù", col.compare("ù", "ù") === 0);
        test.ok("ù < U", col.compare("ù", "U") < 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u < Ǖ", col.compare("u", "Ǖ") < 0);
        test.ok("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
        test.ok("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
        test.ok("Ǖ = ǖ", col.compare("Ǖ", "ǖ") === 0);
        test.ok("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
        test.ok("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
        test.ok("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
        test.ok("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
        test.ok("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
        test.ok("Ǘ = ǘ", col.compare("Ǘ", "ǘ") === 0);
        test.ok("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
        test.ok("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
        test.ok("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
        test.ok("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
        test.ok("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
        test.ok("Ǚ = ǚ", col.compare("Ǚ", "ǚ") === 0);
        test.ok("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
        test.ok("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
        test.ok("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
        test.ok("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
        test.ok("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
        test.ok("Ǜ = ǜ", col.compare("Ǜ", "ǜ") === 0);
        test.ok("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
        test.ok("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
        test.ok("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
        test.ok("Ü = Ü", col.compare("Ü", "Ü") === 0);
        test.ok("Ü = ü", col.compare("Ü", "ü") === 0);
        test.ok("ü = ü", col.compare("ü", "ü") === 0);
        test.ok("ü < V", col.compare("ü", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.done();
    },
    
    testJSCollatorPinyinPri_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.expect(219);
        test.ok(typeof(col) !== "undefined");
        
        test.ok("bā = bá", col.compare("bā", "bá") === 0);
        test.ok("bá = bǎ", col.compare("bá", "bǎ") === 0);
        test.ok("bǎ = bà", col.compare("bǎ", "bà") === 0);
        test.ok("bà = ba", col.compare("bà", "ba") === 0);
        test.ok("bāi = bai", col.compare("bāi", "bai") === 0);
        test.ok("bai < chái", col.compare("bai", "chái") < 0);
        test.ok("chái < chē", col.compare("chái", "chē") < 0);
        test.ok("chē < chēn", col.compare("chē", "chēn") < 0);
        test.ok("chēn > ché", col.compare("chēn", "ché") > 0);
        test.ok("ché = chě", col.compare("ché", "chě") === 0);
        test.ok("chě = chè", col.compare("chě", "chè") === 0);
    
        test.ok("Ā = Ā", col.compare("Ā", "Ā") === 0);
        test.ok("Ā = ā", col.compare("Ā", "ā") === 0);
        test.ok("ā = ā", col.compare("ā", "ā") === 0);
        test.ok("ā = Á", col.compare("ā", "Á") === 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á = á", col.compare("Á", "á") === 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á = Ǎ", col.compare("á", "Ǎ") === 0);
        test.ok("Ǎ = Ǎ", col.compare("Ǎ", "Ǎ") === 0);
        test.ok("Ǎ = ǎ", col.compare("Ǎ", "ǎ") === 0);
        test.ok("ǎ = ǎ", col.compare("ǎ", "ǎ") === 0);
        test.ok("ǎ = À", col.compare("ǎ", "À") === 0);
        test.ok("À = À", col.compare("À", "À") === 0);
        test.ok("À = à", col.compare("À", "à") === 0);
        test.ok("à = à", col.compare("à", "à") === 0);
        test.ok("à = A", col.compare("à", "A") === 0);
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < Ē", col.compare("d", "Ē") < 0);
        test.ok("Ē = Ē", col.compare("Ē", "Ē") === 0);
        test.ok("Ē = ē", col.compare("Ē", "ē") === 0);
        test.ok("ē = ē", col.compare("ē", "ē") === 0);
        test.ok("ē = É", col.compare("ē", "É") === 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É = é", col.compare("É", "é") === 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é = Ě", col.compare("é", "Ě") === 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě = ě", col.compare("Ě", "ě") === 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě = È", col.compare("ě", "È") === 0);
        test.ok("È = È", col.compare("È", "È") === 0);
        test.ok("È = è", col.compare("È", "è") === 0);
        test.ok("è = è", col.compare("è", "è") === 0);
        test.ok("è = E", col.compare("è", "E") === 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e = Ê̄", col.compare("e", "Ê̄") === 0);
        test.ok("Ê̄ = Ē̂", col.compare("Ê̄", "Ē̂") === 0);
        test.ok("Ē̂ = Ê̄", col.compare("Ē̂", "Ê̄") === 0);
        test.ok("Ê̄ = ê̄", col.compare("Ê̄", "ê̄") === 0);
        test.ok("ê̄ = ē̂", col.compare("ê̄", "ē̂") === 0);
        test.ok("ē̂ = ê̄", col.compare("ē̂", "ê̄") === 0);
        test.ok("ê̄ = Ế", col.compare("ê̄", "Ế") === 0);
        test.ok("Ế = É̂", col.compare("Ế", "É̂") === 0);
        test.ok("É̂ = Ế", col.compare("É̂", "Ế") === 0);
        test.ok("Ế = ế", col.compare("Ế", "ế") === 0);
        test.ok("ế = é̂", col.compare("ế", "é̂") === 0);
        test.ok("é̂ = ế", col.compare("é̂", "ế") === 0);
        test.ok("ế = Ê̌", col.compare("ế", "Ê̌") === 0);
        test.ok("Ê̌ = Ě̂", col.compare("Ê̌", "Ě̂") === 0);
        test.ok("Ě̂ = Ê̌", col.compare("Ě̂", "Ê̌") === 0);
        test.ok("Ê̌ = ê̌", col.compare("Ê̌", "ê̌") === 0);
        test.ok("ê̌ = ě̂", col.compare("ê̌", "ě̂") === 0);
        test.ok("ě̂ = ê̌", col.compare("ě̂", "ê̌") === 0);
        test.ok("ê̌ = Ề", col.compare("ê̌", "Ề") === 0);
        test.ok("Ề = È̂", col.compare("Ề", "È̂") === 0);
        test.ok("È̂ = Ề", col.compare("È̂", "Ề") === 0);
        test.ok("Ề = ề", col.compare("Ề", "ề") === 0);
        test.ok("ề = è̂", col.compare("ề", "è̂") === 0);
        test.ok("è̂ = ề", col.compare("è̂", "ề") === 0);
        test.ok("ề < F", col.compare("ề", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < Ī", col.compare("h", "Ī") < 0);
        test.ok("Ī = Ī", col.compare("Ī", "Ī") === 0);
        test.ok("Ī = ī", col.compare("Ī", "ī") === 0);
        test.ok("ī = ī", col.compare("ī", "ī") === 0);
        test.ok("ī = Í", col.compare("ī", "Í") === 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í = í", col.compare("Í", "í") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í = Ǐ", col.compare("í", "Ǐ") === 0);
        test.ok("Ǐ = Ǐ", col.compare("Ǐ", "Ǐ") === 0);
        test.ok("Ǐ = ǐ", col.compare("Ǐ", "ǐ") === 0);
        test.ok("ǐ = ǐ", col.compare("ǐ", "ǐ") === 0);
        test.ok("ǐ = Ì", col.compare("ǐ", "Ì") === 0);
        test.ok("Ì = Ì", col.compare("Ì", "Ì") === 0);
        test.ok("Ì = ì", col.compare("Ì", "ì") === 0);
        test.ok("ì = ì", col.compare("ì", "ì") === 0);
        test.ok("ì = I", col.compare("ì", "I") === 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M̄", col.compare("l", "M̄") < 0);
        test.ok("M̄ = m̄", col.compare("M̄", "m̄") === 0);
        test.ok("m̄ = Ḿ", col.compare("m̄", "Ḿ") === 0);
        test.ok("Ḿ = Ḿ", col.compare("Ḿ", "Ḿ") === 0);
        test.ok("Ḿ = ḿ", col.compare("Ḿ", "ḿ") === 0);
        test.ok("ḿ = ḿ", col.compare("ḿ", "ḿ") === 0);
        test.ok("ḿ = M̌", col.compare("ḿ", "M̌") === 0);
        test.ok("M̌ = m̌", col.compare("M̌", "m̌") === 0);
        test.ok("m̌ = M̀", col.compare("m̌", "M̀") === 0);
        test.ok("M̀ = m̀", col.compare("M̀", "m̀") === 0);
        test.ok("m̀ = M", col.compare("m̀", "M") === 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N̄", col.compare("m", "N̄") < 0);
        test.ok("N̄ = n̄", col.compare("N̄", "n̄") === 0);
        test.ok("n̄ = Ń", col.compare("n̄", "Ń") === 0);
        test.ok("Ń = Ń", col.compare("Ń", "Ń") === 0);
        test.ok("Ń = ń", col.compare("Ń", "ń") === 0);
        test.ok("ń = ń", col.compare("ń", "ń") === 0);
        test.ok("ń = Ň", col.compare("ń", "Ň") === 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň = ň", col.compare("Ň", "ň") === 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň = Ǹ", col.compare("ň", "Ǹ") === 0);
        test.ok("Ǹ = Ǹ", col.compare("Ǹ", "Ǹ") === 0);
        test.ok("Ǹ = ǹ", col.compare("Ǹ", "ǹ") === 0);
        test.ok("ǹ = ǹ", col.compare("ǹ", "ǹ") === 0);
        test.ok("ǹ = N", col.compare("ǹ", "N") === 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < Ō", col.compare("n", "Ō") < 0);
        test.ok("Ō = Ō", col.compare("Ō", "Ō") === 0);
        test.ok("Ō = ō", col.compare("Ō", "ō") === 0);
        test.ok("ō = ō", col.compare("ō", "ō") === 0);
        test.ok("ō = Ó", col.compare("ō", "Ó") === 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó = ó", col.compare("Ó", "ó") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó = Ǒ", col.compare("ó", "Ǒ") === 0);
        test.ok("Ǒ = Ǒ", col.compare("Ǒ", "Ǒ") === 0);
        test.ok("Ǒ = ǒ", col.compare("Ǒ", "ǒ") === 0);
        test.ok("ǒ = ǒ", col.compare("ǒ", "ǒ") === 0);
        test.ok("ǒ = Ò", col.compare("ǒ", "Ò") === 0);
        test.ok("Ò = Ò", col.compare("Ò", "Ò") === 0);
        test.ok("Ò = ò", col.compare("Ò", "ò") === 0);
        test.ok("ò = ò", col.compare("ò", "ò") === 0);
        test.ok("ò = O", col.compare("ò", "O") === 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < Ū", col.compare("t", "Ū") < 0);
        test.ok("Ū = Ū", col.compare("Ū", "Ū") === 0);
        test.ok("Ū = ū", col.compare("Ū", "ū") === 0);
        test.ok("ū = ū", col.compare("ū", "ū") === 0);
        test.ok("ū = Ú", col.compare("ū", "Ú") === 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú = ú", col.compare("Ú", "ú") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú = Ǔ", col.compare("ú", "Ǔ") === 0);
        test.ok("Ǔ = Ǔ", col.compare("Ǔ", "Ǔ") === 0);
        test.ok("Ǔ = ǔ", col.compare("Ǔ", "ǔ") === 0);
        test.ok("ǔ = ǔ", col.compare("ǔ", "ǔ") === 0);
        test.ok("ǔ = Ù", col.compare("ǔ", "Ù") === 0);
        test.ok("Ù = Ù", col.compare("Ù", "Ù") === 0);
        test.ok("Ù = ù", col.compare("Ù", "ù") === 0);
        test.ok("ù = ù", col.compare("ù", "ù") === 0);
        test.ok("ù = U", col.compare("ù", "U") === 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u = Ǖ", col.compare("u", "Ǖ") === 0);
        test.ok("Ǖ = Ṻ", col.compare("Ǖ", "Ṻ") === 0);
        test.ok("Ṻ = Ǖ", col.compare("Ṻ", "Ǖ") === 0);
        test.ok("Ǖ = ǖ", col.compare("Ǖ", "ǖ") === 0);
        test.ok("ǖ = ṻ", col.compare("ǖ", "ṻ") === 0);
        test.ok("ṻ = ǖ", col.compare("ṻ", "ǖ") === 0);
        test.ok("ǖ = Ǘ", col.compare("ǖ", "Ǘ") === 0);
        test.ok("Ǘ = Ú̈", col.compare("Ǘ", "Ú̈") === 0);
        test.ok("Ú̈ = Ǘ", col.compare("Ú̈", "Ǘ") === 0);
        test.ok("Ǘ = ǘ", col.compare("Ǘ", "ǘ") === 0);
        test.ok("ǘ = ú̈", col.compare("ǘ", "ú̈") === 0);
        test.ok("ú̈ = ǘ", col.compare("ú̈", "ǘ") === 0);
        test.ok("ǘ = Ǚ", col.compare("ǘ", "Ǚ") === 0);
        test.ok("Ǚ = Ǔ̈", col.compare("Ǚ", "Ǔ̈") === 0);
        test.ok("Ǔ̈ = Ǚ", col.compare("Ǔ̈", "Ǚ") === 0);
        test.ok("Ǚ = ǚ", col.compare("Ǚ", "ǚ") === 0);
        test.ok("ǚ = ǔ̈", col.compare("ǚ", "ǔ̈") === 0);
        test.ok("ǔ̈ = ǚ", col.compare("ǔ̈", "ǚ") === 0);
        test.ok("ǚ = Ǜ", col.compare("ǚ", "Ǜ") === 0);
        test.ok("Ǜ = Ù̈", col.compare("Ǜ", "Ù̈") === 0);
        test.ok("Ù̈ = Ǜ", col.compare("Ù̈", "Ǜ") === 0);
        test.ok("Ǜ = ǜ", col.compare("Ǜ", "ǜ") === 0);
        test.ok("ǜ = ù̈", col.compare("ǜ", "ù̈") === 0);
        test.ok("ù̈ = ǜ", col.compare("ù̈", "ǜ") === 0);
        test.ok("ǜ = Ü", col.compare("ǜ", "Ü") === 0);
        test.ok("Ü = Ü", col.compare("Ü", "Ü") === 0);
        test.ok("Ü = ü", col.compare("Ü", "ü") === 0);
        test.ok("ü = ü", col.compare("ü", "ü") === 0);
        test.ok("ü < V", col.compare("ü", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.done();
    },
    
    testCollatorCase_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPri_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixed_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixedWithIndexMarkers_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        
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
        var browser = ilib._getBrowser();
        if (browser === "ie") {
            var expected = [
              "\uFDD0APPLE",
              "\uFDD0Apple",
              "\uFDD0Banana",
              "\uFDD0Lemon",
              "\uFDD0ORange",
              "\uFDD0Orange",
              "\uFDD0Peach",
              "\uFDD0RASPBERRY",
              "\uFDD0Raspberry",
              "\uFDD0Yam",
              "啊",
             "波",
              "吃",
              "次",
              "德",
              "额",
              "佛",
              "各",
              "和",
              "记",
              "科",
              "里",
              "摸",
              "那",
              "坡",
              "起",
              "日",
              "食",
              "四",
              "体",
              "吴",
              "西",
              "一",
              "站",
              "子"
            ]
        } else {
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
        }
        test.deepEqual(input, expected);
        test.done();
    },
    
    
    testCollatorHanziTones_zh_Hans: function(test) {
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    }
    
    
};