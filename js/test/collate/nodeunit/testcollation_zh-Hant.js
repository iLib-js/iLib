/*
 * testcollation_zh-Hant.js - test the Collator object in traditional Chinese
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

module.exports.testcollation_zh_Hant = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatHanzi_zh_Hant_stroke: function(test) {
        test.expect(48);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        
        test.ok("乁 < 丄", col.compare("乁", "丄") < 0);
        test.ok("丄 < 下", col.compare("丄", "下") < 0);
        test.ok("下 < 々", col.compare("下", "々") < 0);
        test.ok("々 < 不", col.compare("々", "不") < 0);
        test.ok("不 < 㓙", col.compare("不", "㓙") < 0);
        test.ok("㓙 < 亜", col.compare("㓙", "亜") < 0);
        test.ok("亜 < 亞", col.compare("亜", "亞") < 0);
        test.ok("亞 < 郆", col.compare("亞", "郆") < 0);
        test.ok("郆 < 㑣", col.compare("郆", "㑣") < 0);
        test.ok("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
        test.ok("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
        test.ok("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
        test.ok("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
        test.ok("嘣 < 澕", col.compare("嘣", "澕") < 0);
        test.ok("澕 < 朤", col.compare("澕", "朤") < 0);
        test.ok("朤 < 濱", col.compare("朤", "濱") < 0);
        test.ok("濱 < 簧", col.compare("濱", "簧") < 0);
        test.ok("簧 < 䳡", col.compare("簧", "䳡") < 0);
        test.ok("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
        test.ok("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
        test.ok("䱹 < 囈", col.compare("䱹", "囈") < 0);
        test.ok("囈 < 覉", col.compare("囈", "覉") < 0);
        test.ok("覉 < 靈", col.compare("覉", "靈") < 0);
        test.ok("靈 < 䵴", col.compare("靈", "䵴") < 0);
        test.ok("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
        test.ok("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
        test.ok("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
        test.ok("㿜 < 虋", col.compare("㿜", "虋") < 0);
        test.ok("虋 < 䂅", col.compare("虋", "䂅") < 0);
        test.ok("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
        test.ok("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
        test.ok("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
        test.ok("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
        test.ok("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
        test.ok("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
        test.ok("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
        test.ok("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
        test.ok("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
        test.ok("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
        test.ok("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
        test.ok("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
        test.ok("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
        test.ok("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
        test.ok("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
        test.ok("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
        test.ok("龘 < 䨻", col.compare("龘", "䨻") < 0);
        test.ok("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
        test.done();
    },
    
    testJSCollatorTerHanzi_zh_Hant_stroke: function(test) {
        test.expect(48);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("乁 < 丄", col.compare("乁", "丄") < 0);
        test.ok("丄 < 下", col.compare("丄", "下") < 0);
        test.ok("下 < 々", col.compare("下", "々") < 0);
        test.ok("々 < 不", col.compare("々", "不") < 0);
        test.ok("不 < 㓙", col.compare("不", "㓙") < 0);
        test.ok("㓙 < 亜", col.compare("㓙", "亜") < 0);
        test.ok("亜 < 亞", col.compare("亜", "亞") < 0);
        test.ok("亞 < 郆", col.compare("亞", "郆") < 0);
        test.ok("郆 < 㑣", col.compare("郆", "㑣") < 0);
        test.ok("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
        test.ok("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
        test.ok("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
        test.ok("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
        test.ok("嘣 < 澕", col.compare("嘣", "澕") < 0);
        test.ok("澕 < 朤", col.compare("澕", "朤") < 0);
        test.ok("朤 < 濱", col.compare("朤", "濱") < 0);
        test.ok("濱 < 簧", col.compare("濱", "簧") < 0);
        test.ok("簧 < 䳡", col.compare("簧", "䳡") < 0);
        test.ok("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
        test.ok("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
        test.ok("䱹 < 囈", col.compare("䱹", "囈") < 0);
        test.ok("囈 < 覉", col.compare("囈", "覉") < 0);
        test.ok("覉 < 靈", col.compare("覉", "靈") < 0);
        test.ok("靈 < 䵴", col.compare("靈", "䵴") < 0);
        test.ok("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
        test.ok("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
        test.ok("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
        test.ok("㿜 < 虋", col.compare("㿜", "虋") < 0);
        test.ok("虋 < 䂅", col.compare("虋", "䂅") < 0);
        test.ok("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
        test.ok("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
        test.ok("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
        test.ok("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
        test.ok("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
        test.ok("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
        test.ok("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
        test.ok("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
        test.ok("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
        test.ok("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
        test.ok("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
        test.ok("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
        test.ok("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
        test.ok("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
        test.ok("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
        test.ok("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
        test.ok("龘 < 䨻", col.compare("龘", "䨻") < 0);
        test.ok("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
        test.done();
    },
    
    testJSCollatorSecHanzi_zh_Hant_stroke: function(test) {
        test.expect(48);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("乁 < 丄", col.compare("乁", "丄") < 0);
        test.ok("丄 < 下", col.compare("丄", "下") < 0);
        test.ok("下 < 々", col.compare("下", "々") < 0);
        test.ok("々 < 不", col.compare("々", "不") < 0);
        test.ok("不 < 㓙", col.compare("不", "㓙") < 0);
        test.ok("㓙 < 亜", col.compare("㓙", "亜") < 0);
        test.ok("亜 < 亞", col.compare("亜", "亞") < 0);
        test.ok("亞 < 郆", col.compare("亞", "郆") < 0);
        test.ok("郆 < 㑣", col.compare("郆", "㑣") < 0);
        test.ok("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
        test.ok("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
        test.ok("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
        test.ok("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
        test.ok("嘣 < 澕", col.compare("嘣", "澕") < 0);
        test.ok("澕 < 朤", col.compare("澕", "朤") < 0);
        test.ok("朤 < 濱", col.compare("朤", "濱") < 0);
        test.ok("濱 < 簧", col.compare("濱", "簧") < 0);
        test.ok("簧 < 䳡", col.compare("簧", "䳡") < 0);
        test.ok("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
        test.ok("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
        test.ok("䱹 < 囈", col.compare("䱹", "囈") < 0);
        test.ok("囈 < 覉", col.compare("囈", "覉") < 0);
        test.ok("覉 < 靈", col.compare("覉", "靈") < 0);
        test.ok("靈 < 䵴", col.compare("靈", "䵴") < 0);
        test.ok("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
        test.ok("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
        test.ok("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
        test.ok("㿜 < 虋", col.compare("㿜", "虋") < 0);
        test.ok("虋 < 䂅", col.compare("虋", "䂅") < 0);
        test.ok("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
        test.ok("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
        test.ok("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
        test.ok("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
        test.ok("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
        test.ok("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
        test.ok("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
        test.ok("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
        test.ok("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
        test.ok("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
        test.ok("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
        test.ok("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
        test.ok("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
        test.ok("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
        test.ok("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
        test.ok("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
        test.ok("龘 < 䨻", col.compare("龘", "䨻") < 0);
        test.ok("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
        test.done();
    },
    
    testJSCollatorPriHanzi_zh_Hant_stroke: function(test) {
        test.expect(48);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("乁 < 丄", col.compare("乁", "丄") < 0);
        test.ok("丄 < 下", col.compare("丄", "下") < 0);
        test.ok("下 < 々", col.compare("下", "々") < 0);
        test.ok("々 < 不", col.compare("々", "不") < 0);
        test.ok("不 < 㓙", col.compare("不", "㓙") < 0);
        test.ok("㓙 < 亜", col.compare("㓙", "亜") < 0);
        test.ok("亜 < 亞", col.compare("亜", "亞") < 0);
        test.ok("亞 < 郆", col.compare("亞", "郆") < 0);
        test.ok("郆 < 㑣", col.compare("郆", "㑣") < 0);
        test.ok("㑣 < 㝝", col.compare("䌸", "㝝") < 0);
        test.ok("㝝 < 㣏", col.compare("㝝", "㣏") < 0);
        test.ok("㣏 < 嫅", col.compare("㣏", "嫅") < 0);
        test.ok("嫅 < 嘣", col.compare("嫅", "嘣") < 0);
        test.ok("嘣 < 澕", col.compare("嘣", "澕") < 0);
        test.ok("澕 < 朤", col.compare("澕", "朤") < 0);
        test.ok("朤 < 濱", col.compare("朤", "濱") < 0);
        test.ok("濱 < 簧", col.compare("濱", "簧") < 0);
        test.ok("簧 < 䳡", col.compare("簧", "䳡") < 0);
        test.ok("䳡 < 鐗", col.compare("䳡", "鐗") < 0);
        test.ok("鐗 < 䱹", col.compare("鐗", "䱹") < 0);
        test.ok("䱹 < 囈", col.compare("䱹", "囈") < 0);
        test.ok("囈 < 覉", col.compare("囈", "覉") < 0);
        test.ok("覉 < 靈", col.compare("覉", "靈") < 0);
        test.ok("靈 < 䵴", col.compare("靈", "䵴") < 0);
        test.ok("䵴 < 㜻", col.compare("䵴", "㜻") < 0);
        test.ok("㜻 < 㦭", col.compare("㜻", "㦭") < 0);
        test.ok("㦭 < 㿜", col.compare("㦭", "㿜") < 0);
        test.ok("㿜 < 虋", col.compare("㿜", "虋") < 0);
        test.ok("虋 < 䂅", col.compare("虋", "䂅") < 0);
        test.ok("䂅 < 䴐", col.compare("䂅", "䴐") < 0);
        test.ok("䴐 < 𨰻", col.compare("䴐", "𨰻") < 0);
        test.ok("𨰻 < 鱻", col.compare("𨰻", "鱻") < 0);
        test.ok("鱻 < 䯂", col.compare("鱻", "䯂") < 0);
        test.ok("䯂 < 䶫", col.compare("䯂", "䶫") < 0);
        test.ok("䶫 < 䨺", col.compare("䶫", "䨺") < 0);
        test.ok("䨺 < 𪺚", col.compare("䨺", "𪺚") < 0);
        test.ok("𪺚 < 𩎑", col.compare("𪺚", "𩎑") < 0);
        test.ok("𩎑 < 靐", col.compare("𩎑", "靐") < 0);
        test.ok("靐 < 𩇓", col.compare("靐", "𩇓") < 0);
        test.ok("𩇓 < 𪓊", col.compare("𩇓", "𪓊") < 0);
        test.ok("𪓊 < 𦧄", col.compare("𪓊", "𦧄") < 0);
        test.ok("𦧄 < 𧆘", col.compare("𦧄", "𧆘") < 0);
        test.ok("𧆘 < 䲜", col.compare("𧆘", "䲜") < 0);
        test.ok("䲜 < 𩙣", col.compare("䲜", "𩙣") < 0);
        test.ok("𩙣 < 龘", col.compare("𩙣", "龘") < 0);
        test.ok("龘 < 䨻", col.compare("龘", "䨻") < 0);
        test.ok("䨻 < 𠔻", col.compare("䨻", "𠔻") < 0);
        test.done();
    },
    
    testJSCollatorQuatHanziVariants_zh_Hant_stroke: function(test) {
        test.expect(10);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
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
    
    testJSCollatorTerHanziVariants_zh_Hant_stroke: function(test) {
        test.expect(10);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
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
    
    testJSCollatorSecHanziVariants_zh_Hant_stroke: function(test) {
        test.expect(10);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
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
    
    testJSCollatorPriHanziVariants_zh_Hant_stroke: function(test) {
        test.expect(10);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
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
    
    testJSCollatorPinyinQuat_zh_Hant_stroke: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinTer_zh_Hant_stroke: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinSec_zh_Hant_stroke: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinPri_zh_Hant_stroke: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorBopomofoQuat_zh_Hant_stroke: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoTer_zh_Hant_stroke: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoSec_zh_Hant_stroke: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoPri_zh_Hant_stroke: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testCollatorCase_zh_Hant_stroke: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPri_zh_Hant_stroke: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixed_zh_Hant_stroke: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
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
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixedWithIndexMarkers_zh_Hant_stroke: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
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
        var browser = ilib._getBrowser();
        if (browser === "ie") {
            var expected = [
                "\uFDD0.10",
                "\uFDD0.11", 
                "\uFDD0.13", 
                "\uFDD0.20", 
                "\uFDD0.3", 
                "\uFDD0.6", 
                "丿",
                "乃",
                "个",
                "不",
                "世",
                "乒",
                "串",
                "咗",
                "乻",
                "員",
                "唐",
                "�",
                "㐮",
                "傪",
                "㒆",
                "儍",
                "儓",
                "㩥",
                "㸌"
            ]
        } else {
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
        }
    
        
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testJSCollatorQuatHanzi_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        
        test.ok("八 < 豝", col.compare("八", "豝") < 0);
        test.ok("豝 < 闁", col.compare("豝", "闁") < 0);
        test.ok("闁 < 朋", col.compare("闁", "朋") < 0);
        test.ok("朋 < 玛", col.compare("朋", "玛") < 0);
        test.ok("玛 < 匚", col.compare("玛", "匚") < 0);
        test.ok("匚 < 达", col.compare("匚", "达") < 0);
        test.ok("达 < 叹", col.compare("达", "叹") < 0);
        test.ok("叹 < 睨", col.compare("叹", "睨") < 0);
        test.ok("睨 < 㔷", col.compare("睨", "㔷") < 0);
        test.ok("㔷 < 玍", col.compare("㔷", "玍") < 0);
        test.ok("玍 < 疴", col.compare("玍", "疴") < 0);
        test.ok("疴 < 禾", col.compare("疴", "禾") < 0);
        test.ok("禾 < 积", col.compare("禾", "积") < 0);
        test.ok("积 < 七", col.compare("积", "七") < 0);
        test.ok("七 < 釸", col.compare("七", "釸") < 0);
        test.ok("釸 < 樝", col.compare("釸", "樝") < 0);
        test.ok("樝 < 怊", col.compare("樝", "怊") < 0);
        test.ok("怊 < 捎", col.compare("怊", "捎") < 0);
        test.ok("捎 < 淄", col.compare("捎", "淄") < 0);
        test.ok("淄 < 私", col.compare("淄", "私") < 0);
        test.ok("私 < 阿", col.compare("私", "阿") < 0);
        test.ok("阿 < 筽", col.compare("阿", "筽") < 0);
        test.ok("筽 < 䩹", col.compare("筽", "䩹") < 0);
        test.ok("䩹 < 䀳", col.compare("䩹", "䀳") < 0);
        test.ok("䀳 < 誒", col.compare("䀳", "誒") < 0);
        test.ok("誒 < 䥝", col.compare("誒", "䥝") < 0);
        test.ok("䥝 < 吘", col.compare("䥝", "吘") < 0);
        test.ok("吘 < 䢿", col.compare("吘", "䢿") < 0);
        test.ok("䢿 < 奀", col.compare("䢿", "奀") < 0);
        test.ok("奀 < 䴐", col.compare("奀", "䇦") < 0);
        test.ok("䇦 < 鞥", col.compare("䇦", "鞥") < 0);
        test.ok("鞥 < 𥅡", col.compare("鞥", "𥅡") < 0);
        test.ok("𥅡 < 驛", col.compare("𥅡", "驛") < 0);
        test.ok("驛 < 𦶀", col.compare("驛", "𦶀") < 0);
        test.ok("𦶀 < 囗", col.compare("𦶀", "囗") < 0);
        test.ok("囗 < 臾", col.compare("囗", "臾") < 0);
        test.ok("臾 < 砽", col.compare("臾", "砽") < 0);
        test.done();
    },
    
    testJSCollatorTerHanzi_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("八 < 豝", col.compare("八", "豝") < 0);
        test.ok("豝 < 闁", col.compare("豝", "闁") < 0);
        test.ok("闁 < 朋", col.compare("闁", "朋") < 0);
        test.ok("朋 < 玛", col.compare("朋", "玛") < 0);
        test.ok("玛 < 匚", col.compare("玛", "匚") < 0);
        test.ok("匚 < 达", col.compare("匚", "达") < 0);
        test.ok("达 < 叹", col.compare("达", "叹") < 0);
        test.ok("叹 < 睨", col.compare("叹", "睨") < 0);
        test.ok("睨 < 㔷", col.compare("睨", "㔷") < 0);
        test.ok("㔷 < 玍", col.compare("㔷", "玍") < 0);
        test.ok("玍 < 疴", col.compare("玍", "疴") < 0);
        test.ok("疴 < 禾", col.compare("疴", "禾") < 0);
        test.ok("禾 < 积", col.compare("禾", "积") < 0);
        test.ok("积 < 七", col.compare("积", "七") < 0);
        test.ok("七 < 釸", col.compare("七", "釸") < 0);
        test.ok("釸 < 樝", col.compare("釸", "樝") < 0);
        test.ok("樝 < 怊", col.compare("樝", "怊") < 0);
        test.ok("怊 < 捎", col.compare("怊", "捎") < 0);
        test.ok("捎 < 淄", col.compare("捎", "淄") < 0);
        test.ok("淄 < 私", col.compare("淄", "私") < 0);
        test.ok("私 < 阿", col.compare("私", "阿") < 0);
        test.ok("阿 < 筽", col.compare("阿", "筽") < 0);
        test.ok("筽 < 䩹", col.compare("筽", "䩹") < 0);
        test.ok("䩹 < 䀳", col.compare("䩹", "䀳") < 0);
        test.ok("䀳 < 誒", col.compare("䀳", "誒") < 0);
        test.ok("誒 < 䥝", col.compare("誒", "䥝") < 0);
        test.ok("䥝 < 吘", col.compare("䥝", "吘") < 0);
        test.ok("吘 < 䢿", col.compare("吘", "䢿") < 0);
        test.ok("䢿 < 奀", col.compare("䢿", "奀") < 0);
        test.ok("奀 < 䴐", col.compare("奀", "䇦") < 0);
        test.ok("䇦 < 鞥", col.compare("䇦", "鞥") < 0);
        test.ok("鞥 < 𥅡", col.compare("鞥", "𥅡") < 0);
        test.ok("𥅡 < 驛", col.compare("𥅡", "驛") < 0);
        test.ok("驛 < 𦶀", col.compare("驛", "𦶀") < 0);
        test.ok("𦶀 < 囗", col.compare("𦶀", "囗") < 0);
        test.ok("囗 < 臾", col.compare("囗", "臾") < 0);
        test.ok("臾 < 砽", col.compare("臾", "砽") < 0);
        test.done();
    },
    
    testJSCollatorSecHanzi_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("八 < 豝", col.compare("八", "豝") < 0);
        test.ok("豝 < 闁", col.compare("豝", "闁") < 0);
        test.ok("闁 < 朋", col.compare("闁", "朋") < 0);
        test.ok("朋 < 玛", col.compare("朋", "玛") < 0);
        test.ok("玛 < 匚", col.compare("玛", "匚") < 0);
        test.ok("匚 < 达", col.compare("匚", "达") < 0);
        test.ok("达 < 叹", col.compare("达", "叹") < 0);
        test.ok("叹 < 睨", col.compare("叹", "睨") < 0);
        test.ok("睨 < 㔷", col.compare("睨", "㔷") < 0);
        test.ok("㔷 < 玍", col.compare("㔷", "玍") < 0);
        test.ok("玍 < 疴", col.compare("玍", "疴") < 0);
        test.ok("疴 < 禾", col.compare("疴", "禾") < 0);
        test.ok("禾 < 积", col.compare("禾", "积") < 0);
        test.ok("积 < 七", col.compare("积", "七") < 0);
        test.ok("七 < 釸", col.compare("七", "釸") < 0);
        test.ok("釸 < 樝", col.compare("釸", "樝") < 0);
        test.ok("樝 < 怊", col.compare("樝", "怊") < 0);
        test.ok("怊 < 捎", col.compare("怊", "捎") < 0);
        test.ok("捎 < 淄", col.compare("捎", "淄") < 0);
        test.ok("淄 < 私", col.compare("淄", "私") < 0);
        test.ok("私 < 阿", col.compare("私", "阿") < 0);
        test.ok("阿 < 筽", col.compare("阿", "筽") < 0);
        test.ok("筽 < 䩹", col.compare("筽", "䩹") < 0);
        test.ok("䩹 < 䀳", col.compare("䩹", "䀳") < 0);
        test.ok("䀳 < 誒", col.compare("䀳", "誒") < 0);
        test.ok("誒 < 䥝", col.compare("誒", "䥝") < 0);
        test.ok("䥝 < 吘", col.compare("䥝", "吘") < 0);
        test.ok("吘 < 䢿", col.compare("吘", "䢿") < 0);
        test.ok("䢿 < 奀", col.compare("䢿", "奀") < 0);
        test.ok("奀 < 䴐", col.compare("奀", "䇦") < 0);
        test.ok("䇦 < 鞥", col.compare("䇦", "鞥") < 0);
        test.ok("鞥 < 𥅡", col.compare("鞥", "𥅡") < 0);
        test.ok("𥅡 < 驛", col.compare("𥅡", "驛") < 0);
        test.ok("驛 < 𦶀", col.compare("驛", "𦶀") < 0);
        test.ok("𦶀 < 囗", col.compare("𦶀", "囗") < 0);
        test.ok("囗 < 臾", col.compare("囗", "臾") < 0);
        test.ok("臾 < 砽", col.compare("臾", "砽") < 0);
        test.done();
    },
    
    testJSCollatorPriHanzi_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
        test.ok(typeof(col) !== "undefined");
        test.ok("八 < 豝", col.compare("八", "豝") < 0);
        test.ok("豝 < 闁", col.compare("豝", "闁") < 0);
        test.ok("闁 < 朋", col.compare("闁", "朋") < 0);
        test.ok("朋 < 玛", col.compare("朋", "玛") < 0);
        test.ok("玛 < 匚", col.compare("玛", "匚") < 0);
        test.ok("匚 < 达", col.compare("匚", "达") < 0);
        test.ok("达 < 叹", col.compare("达", "叹") < 0);
        test.ok("叹 < 睨", col.compare("叹", "睨") < 0);
        test.ok("睨 < 㔷", col.compare("睨", "㔷") < 0);
        test.ok("㔷 < 玍", col.compare("㔷", "玍") < 0);
        test.ok("玍 < 疴", col.compare("玍", "疴") < 0);
        test.ok("疴 < 禾", col.compare("疴", "禾") < 0);
        test.ok("禾 < 积", col.compare("禾", "积") < 0);
        test.ok("积 < 七", col.compare("积", "七") < 0);
        test.ok("七 < 釸", col.compare("七", "釸") < 0);
        test.ok("釸 < 樝", col.compare("釸", "樝") < 0);
        test.ok("樝 < 怊", col.compare("樝", "怊") < 0);
        test.ok("怊 < 捎", col.compare("怊", "捎") < 0);
        test.ok("捎 < 淄", col.compare("捎", "淄") < 0);
        test.ok("淄 < 私", col.compare("淄", "私") < 0);
        test.ok("私 < 阿", col.compare("私", "阿") < 0);
        test.ok("阿 < 筽", col.compare("阿", "筽") < 0);
        test.ok("筽 < 䩹", col.compare("筽", "䩹") < 0);
        test.ok("䩹 < 䀳", col.compare("䩹", "䀳") < 0);
        test.ok("䀳 < 誒", col.compare("䀳", "誒") < 0);
        test.ok("誒 < 䥝", col.compare("誒", "䥝") < 0);
        test.ok("䥝 < 吘", col.compare("䥝", "吘") < 0);
        test.ok("吘 < 䢿", col.compare("吘", "䢿") < 0);
        test.ok("䢿 < 奀", col.compare("䢿", "奀") < 0);
        test.ok("奀 < 䴐", col.compare("奀", "䇦") < 0);
        test.ok("䇦 < 鞥", col.compare("䇦", "鞥") < 0);
        test.ok("鞥 < 𥅡", col.compare("鞥", "𥅡") < 0);
        test.ok("𥅡 < 驛", col.compare("𥅡", "驛") < 0);
        test.ok("驛 < 𦶀", col.compare("驛", "𦶀") < 0);
        test.ok("𦶀 < 囗", col.compare("𦶀", "囗") < 0);
        test.ok("囗 < 臾", col.compare("囗", "臾") < 0);
        test.ok("臾 < 砽", col.compare("臾", "砽") < 0);
        test.done();
    },
    
    testJSCollatorQuatHanziVariants_zh_Hant_zhuyin: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("⼀ < ㆒", col.compare("⼀", "㆒") < 0);
        test.ok("㆒ < ㊀", col.compare("㆒", "㊀") < 0);
        
        test.ok("㆘ < ㊦", col.compare("㆘", "㊦") < 0);
        
        test.ok("⼆ < ㆓", col.compare("⼆", "㆓") < 0);
        test.ok("㆓ < ㊁", col.compare("㆓", "㊁") < 0);
        test.ok("㊁ < 🈔", col.compare("㊁", "🈔") < 0);
        test.done();
    },
    
    testJSCollatorTerHanziVariants_zh_Hant_zhuyin: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("⼀ < ㆒", col.compare("⼀", "㆒") < 0);
        test.ok("㆒ < ㊀", col.compare("㆒", "㊀") < 0);
        
        test.ok("㆘ < ㊦", col.compare("㆘", "㊦") < 0);
        
        test.ok("⼆ < ㆓", col.compare("⼆", "㆓") < 0);
        test.ok("㆓ < ㊁", col.compare("㆓", "㊁") < 0);
        test.ok("㊁ < 🈔", col.compare("㊁", "🈔") < 0);
        test.done();
    },
    
    testJSCollatorSecHanziVariants_zh_Hant_zhuyin: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("⼀ = ㆒", col.compare("⼀", "㆒") === 0);
        test.ok("㆒ = ㊀", col.compare("㆒", "㊀") === 0);
        
        test.ok("㆘ = ㊦", col.compare("㆘", "㊦") === 0);
        
        test.ok("⼆ = ㆓", col.compare("⼆", "㆓") === 0);
        test.ok("㆓ = ㊁", col.compare("㆓", "㊁") === 0);
        test.ok("㊁ = 🈔", col.compare("㊁", "🈔") === 0);
        test.done();
    },
    
    testJSCollatorPriHanziVariants_zh_Hant_zhuyin: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        // extra variants at the tertiary level
        test.ok("⼀ = ㆒", col.compare("⼀", "㆒") === 0);
        test.ok("㆒ = ㊀", col.compare("㆒", "㊀") === 0);
        
        test.ok("㆘ = ㊦", col.compare("㆘", "㊦") === 0);
        
        test.ok("⼆ = ㆓", col.compare("⼆", "㆓") === 0);
        test.ok("㆓ = ㊁", col.compare("㆓", "㊁") === 0);
        test.ok("㊁ = 🈔", col.compare("㊁", "🈔") === 0);
        test.done();
    },
    
    testJSCollatorPinyinQuat_zh_Hant_zhuyin: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "quaternary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinTer_zh_Hant_zhuyin: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "tertiary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinSec_zh_Hant_zhuyin: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "secondary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorPinyinPri_zh_Hant_zhuyin: function(test) {
        test.expect(219);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "primary",
            usage: "search"
        });
    
        // Hanzi are all primary differences from each other
        
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
    
    testJSCollatorBopomofoQuat_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoTer_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoSec_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testJSCollatorBopomofoPri_zh_Hant_zhuyin: function(test) {
        test.expect(38);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
        
        test.ok("ㄅ < ㄆ", col.compare("ㄅ", "ㄆ") < 0);
        test.ok("ㄆ < ㄇ", col.compare("ㄆ", "ㄇ") < 0);
        test.ok("ㄇ < ㄈ", col.compare("ㄇ", "ㄈ") < 0);
        test.ok("ㄈ < ㄉ", col.compare("ㄈ", "ㄉ") < 0);
        test.ok("ㄉ < ㄊ", col.compare("ㄉ", "ㄊ") < 0);
        test.ok("ㄊ < ㄋ", col.compare("ㄊ", "ㄋ") < 0);
        test.ok("ㄋ < ㄌ", col.compare("ㄋ", "ㄌ") < 0);
        test.ok("ㄌ < ㄍ", col.compare("ㄌ", "ㄍ") < 0);
        test.ok("ㄍ < ㄎ", col.compare("ㄍ", "ㄎ") < 0);
        test.ok("ㄎ < ㄏ", col.compare("ㄎ", "ㄏ") < 0);
        test.ok("ㄏ < ㄐ", col.compare("ㄏ", "ㄐ") < 0);
        test.ok("ㄐ < ㄑ", col.compare("ㄐ", "ㄑ") < 0);
        test.ok("ㄑ < ㄒ", col.compare("ㄑ", "ㄒ") < 0);
        test.ok("ㄒ < ㄓ", col.compare("ㄒ", "ㄓ") < 0);
        test.ok("ㄓ < ㄔ", col.compare("ㄓ", "ㄔ") < 0);
        test.ok("ㄔ < ㄕ", col.compare("ㄔ", "ㄕ") < 0);
        test.ok("ㄕ < ㄖ", col.compare("ㄕ", "ㄖ") < 0);
        test.ok("ㄖ < ㄗ", col.compare("ㄖ", "ㄗ") < 0);
        test.ok("ㄗ < ㄘ", col.compare("ㄗ", "ㄘ") < 0);
        test.ok("ㄘ < ㄙ", col.compare("ㄘ", "ㄙ") < 0);
        test.ok("ㄙ < ㄚ", col.compare("ㄙ", "ㄚ") < 0);
        test.ok("ㄚ < ㄛ", col.compare("ㄚ", "ㄛ") < 0);
        test.ok("ㄛ < ㄜ", col.compare("ㄛ", "ㄜ") < 0);
        test.ok("ㄜ < ㄝ", col.compare("ㄜ", "ㄝ") < 0);
        test.ok("ㄝ < ㄞ", col.compare("ㄝ", "ㄞ") < 0);
        test.ok("ㄞ < ㄟ", col.compare("ㄞ", "ㄟ") < 0);
        test.ok("ㄟ < ㄠ", col.compare("ㄟ", "ㄠ") < 0);
        test.ok("ㄠ < ㄡ", col.compare("ㄠ", "ㄡ") < 0);
        test.ok("ㄡ < ㄢ", col.compare("ㄡ", "ㄢ") < 0);
        test.ok("ㄢ < ㄣ", col.compare("ㄢ", "ㄣ") < 0);
        test.ok("ㄣ < ㄤ", col.compare("ㄣ", "ㄤ") < 0);
        test.ok("ㄤ < ㄥ", col.compare("ㄤ", "ㄥ") < 0);
        test.ok("ㄥ < ㄦ", col.compare("ㄥ", "ㄦ") < 0);
        test.ok("ㄦ < ㄧ", col.compare("ㄦ", "ㄧ") < 0);
        test.ok("ㄧ < ㄨ", col.compare("ㄧ", "ㄨ") < 0);
        test.ok("ㄨ < ㄩ", col.compare("ㄨ", "ㄩ") < 0);
        test.ok("ㄩ < ㄭ", col.compare("ㄩ", "ㄭ") < 0);
        test.done();
    },
    
    testCollatorCase_zh_Hant_zhuyin: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
            "仡", // 8 
            "㸩", // 27
            "苛", // 9
            "禾", // 10
            "妲", // 4
            "峎", // 28
            "腊", // 7
            "𠳳", // 23
            "誒", // 24
            "词", // 18
            "儿", // 30
            "䀅", // 15
            "私", // 19
            "马", // 2
            "㲍", // 13
            "那", // 6
            "栥", // 17
            "法", // 3
            "卬", // 29
            "筽", // 21
            "褒", // 0
            "敖", // 25
            "榕", // 16
            "泊", // 1
            "沤", // 26
            "溚", // 5
            "乩", // 10
            "蛣", // 11
            "𧇍", // 13
            "䳗", // 22
            "啊", // 20
            "訬" // 14
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "褒", // 0
            "泊", // 1
            "马", // 2
            "法", // 3
            "妲", // 4
            "溚", // 5
            "那", // 6
            "腊", // 7
            "仡", // 8 
            "苛", // 9
            "禾", // 10
            "乩", // 10
            "蛣", // 11
            "𧇍", // 13
            "㲍", // 13
            "訬", // 14
            "䀅", // 15
            "榕", // 16
            "栥", // 17
            "词", // 18
            "私", // 19
            "啊", // 20
            "筽", // 21
            "䳗", // 22
            "𠳳", // 23
            "誒", // 24
            "敖", // 25
            "沤", // 26
            "㸩", // 27
            "峎", // 28
            "卬", // 29
            "儿", // 30
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPri_zh_Hant_zhuyin: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
             "仡", // 8 
             "㸩", // 27
             "苛", // 9
             "禾", // 10
             "妲", // 4
             "峎", // 28
             "腊", // 7
             "𠳳", // 23
             "誒", // 24
             "词", // 18
             "儿", // 30
             "䀅", // 15
             "私", // 19
             "马", // 2
             "㲍", // 13
             "那", // 6
             "栥", // 17
             "法", // 3
             "卬", // 29
             "筽", // 21
             "褒", // 0
             "敖", // 25
             "榕", // 16
             "泊", // 1
             "沤", // 26
             "溚", // 5
             "乩", // 10
             "蛣", // 11
             "𧇍", // 13
             "䳗", // 22
             "啊", // 20
             "訬" // 14
         ];
    
         input.sort(col.getComparator());
    
         var expected = [
             "褒", // 0
             "泊", // 1
             "马", // 2
             "法", // 3
             "妲", // 4
             "溚", // 5
             "那", // 6
             "腊", // 7
             "仡", // 8 
             "苛", // 9
             "禾", // 10
             "乩", // 10
             "蛣", // 11
             "𧇍", // 13
             "㲍", // 13
             "訬", // 14
             "䀅", // 15
             "榕", // 16
             "栥", // 17
             "词", // 18
             "私", // 19
             "啊", // 20
             "筽", // 21
             "䳗", // 22
             "𠳳", // 23
             "誒", // 24
             "敖", // 25
             "沤", // 26
             "㸩", // 27
             "峎", // 28
             "卬", // 29
             "儿", // 30
         ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixed_zh_Hant_zhuyin: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
            "法", // 3
            "ㄉ",
            "妲", // 4
            "ㄙ",
            "ㄤ",
            "卬", // 29
            "ㄎ",
            "禾", // 10
            "ㄐ",
            "ㄅ",
            "褒", // 0
            "私", // 19
            "啊", // 20
            "ㄖ",
            "榕", // 16
            "ㄗ",
            "ㄒ",
            "泊", // 1
            "𧇍", // 13
            "栥", // 17
            "ㄘ",
            "仡", // 8 
            "ㄚ",
            "𠳳", // 23
            "ㄍ",
            "ㄋ",
            "溚", // 5
            "ㄓ",
            "ㄦ",
            "儿", // 30
            "ㄆ",
            "ㄇ",
            "马", // 2
            "ㄢ",
            "ㄠ",
            "㸩", // 27
            "腊", // 7
            "那", // 6
            "ㄛ",
            "䀅", // 15
            "ㄊ",
            "乩", // 10
            "敖", // 25
            "ㄡ",
            "ㄏ",
            "沤", // 26
            "ㄑ",
            "蛣", // 11
            "ㄌ",
            "ㄔ",
            "訬", // 14
            "ㄈ",
            "ㄜ",
            "䳗", // 22
            "ㄞ",
            "ㄟ",
            "苛", // 9
            "誒", // 24
            "筽", // 21
            "ㄣ",
            "峎", // 28
            "㲍", // 13
            "ㄕ",
            "词"  // 18
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "ㄅ",
            "ㄆ",
            "ㄇ",
            "ㄈ",
            "ㄉ",
            "ㄊ",
            "ㄋ",
            "ㄌ",
            "ㄍ",
            "ㄎ",
            "ㄏ",
            "ㄐ",
            "ㄑ",
            "ㄒ",
            "ㄓ",
            "ㄔ",
            "ㄕ",
            "ㄖ",
            "ㄗ",
            "ㄘ",
            "ㄙ",
            "ㄚ",
            "ㄛ",
            "ㄜ",
            "ㄞ",
            "ㄟ",
            "ㄠ",
            "ㄡ",
            "ㄢ",
            "ㄣ",
            "ㄤ",
            "ㄦ",
            "褒", // 0
            "泊", // 1
            "马", // 2
            "法", // 3
            "妲", // 4
            "溚", // 5
            "那", // 6
            "腊", // 7
            "仡", // 8 
            "苛", // 9
            "禾", // 10
            "乩", // 10
            "蛣", // 11
            "𧇍", // 13
            "㲍", // 13
            "訬", // 14
            "䀅", // 15
            "榕", // 16
            "栥", // 17
            "词", // 18
            "私", // 19
            "啊", // 20
            "筽", // 21
            "䳗", // 22
            "𠳳", // 23
            "誒", // 24
            "敖", // 25
            "沤", // 26
            "㸩", // 27
            "峎", // 28
            "卬", // 29
            "儿", // 30
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorCaseMixedWithIndexMarkers_zh_Hant_zhuyin: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "zh-Hant-TW",
            useNative: false,
            style: "zhuyin",
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
             "法", // 3
             "\uFDD0ㄉ",
             "妲", // 4
             "\uFDD0ㄙ",
             "\uFDD0ㄤ",
             "卬", // 29
             "\uFDD0ㄎ",
             "禾", // 10
             "\uFDD0ㄐ",
             "\uFDD0ㄅ",
             "褒", // 0
             "私", // 19
             "啊", // 20
             "\uFDD0ㄖ",
             "榕", // 16
             "\uFDD0ㄗ",
             "\uFDD0ㄒ",
             "泊", // 1
             "𧇍", // 13
             "栥", // 17
             "\uFDD0ㄘ",
             "仡", // 8 
             "\uFDD0ㄚ",
             "𠳳", // 23
             "\uFDD0ㄍ",
             "\uFDD0ㄋ",
             "溚", // 5
             "\uFDD0ㄓ",
             "\uFDD0ㄦ",
             "儿", // 30
             "\uFDD0ㄆ",
             "\uFDD0ㄇ",
             "马", // 2
             "\uFDD0ㄢ",
             "\uFDD0ㄠ",
             "㸩", // 27
             "腊", // 7
             "那", // 6
             "\uFDD0ㄛ",
             "䀅", // 15
             "\uFDD0ㄊ",
             "乩", // 10
             "敖", // 25
             "\uFDD0ㄡ",
             "\uFDD0ㄏ",
             "沤", // 26
             "\uFDD0ㄑ",
             "蛣", // 11
             "\uFDD0ㄌ",
             "\uFDD0ㄔ",
             "訬", // 14
             "\uFDD0ㄈ",
             "\uFDD0ㄜ",
             "䳗", // 22
             "\uFDD0ㄞ",
             "\uFDD0ㄟ",
             "苛", // 9
             "誒", // 24
             "筽", // 21
             "\uFDD0ㄣ",
             "峎", // 28
             "㲍", // 13
             "\uFDD0ㄕ",
             "词"  // 18
         ];
    
        input.sort(col.getComparator());
        var browser = ilib._getBrowser();
        if (browser === "ie") {
                var expected = [
                 "\uFDD0ㄅ","\uFDD0ㄆ","\uFDD0ㄇ","\uFDD0ㄈ","\uFDD0ㄉ","\uFDD0ㄊ","\uFDD0ㄋ","\uFDD0ㄌ","\uFDD0ㄍ","\uFDD0ㄎ",
                 "\uFDD0ㄏ","\uFDD0ㄐ","\uFDD0ㄑ","\uFDD0ㄒ","\uFDD0ㄓ","\uFDD0ㄔ","\uFDD0ㄕ","\uFDD0ㄖ","\uFDD0ㄗ","\uFDD0ㄘ","\uFDD0ㄙ","\uFDD0ㄚ","\uFDD0ㄛ","\uFDD0ㄜ",
                 "\uFDD0ㄞ","\uFDD0ㄟ","\uFDD0ㄠ","\uFDD0ㄡ","\uFDD0ㄢ","\uFDD0ㄣ","\uFDD0ㄤ","\uFDD0ㄦ","褒","泊","马","法","妲","溚",
                 "那","腊","仡","苛","禾","乩","蛣","�","㲍","訬","䀅","榕","栥","词","私",
                 "啊","筽","䳗","�","誒","敖","沤","㸩","峎","卬","儿"
             ]
        } else {
         var expected = [
             "\uFDD0ㄅ",
             "褒", // 0
             "\uFDD0ㄆ",
             "泊", // 1
             "\uFDD0ㄇ",
             "马", // 2
             "\uFDD0ㄈ",
             "法", // 3
             "\uFDD0ㄉ",
             "妲", // 4
             "\uFDD0ㄊ",
             "溚", // 5
             "\uFDD0ㄋ",
             "那", // 6
             "\uFDD0ㄌ",
             "腊", // 7
             "\uFDD0ㄍ",
             "仡", // 8 
             "\uFDD0ㄎ",
             "苛", // 9
             "\uFDD0ㄏ",
             "禾", // 10
             "\uFDD0ㄐ",
             "乩", // 10
             "\uFDD0ㄑ",
             "蛣", // 11
             "\uFDD0ㄒ",
             "𧇍", // 13
             "\uFDD0ㄓ",
             "㲍", // 13
             "\uFDD0ㄔ",
             "訬", // 14
             "\uFDD0ㄕ",
             "䀅", // 15
             "\uFDD0ㄖ",
             "榕", // 16
             "\uFDD0ㄗ",
             "栥", // 17
             "\uFDD0ㄘ",
             "词", // 18
             "\uFDD0ㄙ",
             "私", // 19
             "\uFDD0ㄚ",
             "啊", // 20
             "\uFDD0ㄛ",
             "筽", // 21
             "\uFDD0ㄜ",
             "䳗", // 22
             "\uFDD0ㄞ",
             "𠳳", // 23
             "\uFDD0ㄟ",
             "誒", // 24
             "\uFDD0ㄠ",
             "敖", // 25
             "\uFDD0ㄡ",
             "沤", // 26
             "\uFDD0ㄢ",
             "㸩", // 27
             "\uFDD0ㄣ",
             "峎", // 28
             "\uFDD0ㄤ",
             "卬", // 29
             "\uFDD0ㄦ",
             "儿", // 30
         ];
         }
        test.deepEqual(input, expected);
        test.done();
    }
    
};