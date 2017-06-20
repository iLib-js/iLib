/*
 * testcollation_he.js - test the Collator object in Hebrew
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

module.exports.testcollation_he = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuat_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א < ﬡ", col.compare("א", "ﬡ") < 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
        test.ok("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
        test.ok("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ < ן", col.compare("נ", "ן") < 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ < ף", col.compare("פ", "ף") < 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ < ץ", col.compare("צ", "ץ") < 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorTer_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א = ﬡ", col.compare("א", "ﬡ") === 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
        test.ok("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
        test.ok("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ = ן", col.compare("נ", "ן") === 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ = ף", col.compare("פ", "ף") === 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ = ץ", col.compare("צ", "ץ") === 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorSec_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א = ﬡ", col.compare("א", "ﬡ") === 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
        test.ok("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
        test.ok("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ = ן", col.compare("נ", "ן") === 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ = ף", col.compare("פ", "ף") === 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ = ץ", col.compare("צ", "ץ") === 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorPri_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א = ﬡ", col.compare("א", "ﬡ") === 0);
        test.ok("ﬡ = אַ", col.compare("ﬡ", "אַ") === 0);
        test.ok("אַ = אָ", col.compare("אַ", "אָ") === 0);
        test.ok("אָ = אּ", col.compare("אָ", "אּ") === 0);
        test.ok("אּ = ﭏ", col.compare("אּ", "ﭏ") === 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב = בּ", col.compare("ב", "בּ") === 0);
        test.ok("בּ = בֿ", col.compare("בּ", "בֿ") === 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג = גּ", col.compare("ג", "גּ") === 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
        test.ok("ﬢ = דּ", col.compare("ﬢ", "דּ") === 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
        test.ok("ﬣ = הּ", col.compare("ﬣ", "הּ") === 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו = וֹ", col.compare("ו", "וֹ") === 0);
        test.ok("וֹ = וּ", col.compare("וֹ", "וּ") === 0);
        test.ok("וּ = װ", col.compare("וּ", "װ") === 0);
        test.ok("װ = ױ", col.compare("װ", "ױ") === 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז = זּ", col.compare("ז", "זּ") === 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט = טּ", col.compare("ט", "טּ") === 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י = יִ", col.compare("י", "יִ") === 0);
        test.ok("יִ = יּ", col.compare("יִ", "יּ") === 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ = ײַ", col.compare("ײ", "ײַ") === 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
        test.ok("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
        test.ok("ך = כּ", col.compare("ך", "כּ") === 0);
        test.ok("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
        test.ok("ךּ = כֿ", col.compare("ךּ", "כֿ") === 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
        test.ok("ﬥ = לּ", col.compare("ﬥ", "לּ") === 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
        test.ok("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
        test.ok("ם = מּ", col.compare("ם", "מּ") === 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ = ן", col.compare("נ", "ן") === 0);
        test.ok("ן = נּ", col.compare("ן", "נּ") === 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס = סּ", col.compare("ס", "סּ") === 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ = ף", col.compare("פ", "ף") === 0);
        test.ok("ף = פּ", col.compare("ף", "פּ") === 0);
        test.ok("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
        test.ok("ףּ = פֿ", col.compare("ףּ", "פֿ") === 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ = ץ", col.compare("צ", "ץ") === 0);
        test.ok("ץ = צּ", col.compare("ץ", "צּ") === 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק = קּ", col.compare("ק", "קּ") === 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
        test.ok("ﬧ = רּ", col.compare("ﬧ", "רּ") === 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש = שׂ", col.compare("ש", "שׂ") === 0);
        test.ok("שׂ = שׁ", col.compare("שׂ", "שׁ") === 0);
        test.ok("שׁ = שּ", col.compare("שׁ", "שּ") === 0);
        test.ok("שּ = שּׂ", col.compare("שּ", "שּׂ") === 0);
        test.ok("שּׂ = שּׁ", col.compare("שּׂ", "שּׁ") === 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
        test.ok("ﬨ = תּ", col.compare("ﬨ", "תּ") === 0);
        test.done();
    },
    
    testJSCollatorQuatSort_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א < ﬡ", col.compare("א", "ﬡ") < 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
        test.ok("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
        test.ok("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ < ן", col.compare("נ", "ן") < 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ < ף", col.compare("פ", "ף") < 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ < ץ", col.compare("צ", "ץ") < 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorTerSort_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א < ﬡ", col.compare("א", "ﬡ") < 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
        test.ok("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
        test.ok("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ < ן", col.compare("נ", "ן") < 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ < ף", col.compare("פ", "ף") < 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ < ץ", col.compare("צ", "ץ") < 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorSecSort_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א < ﬡ", col.compare("א", "ﬡ") < 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
        test.ok("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
        test.ok("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ < ן", col.compare("נ", "ן") < 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ < ף", col.compare("פ", "ף") < 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ < ץ", col.compare("צ", "ץ") < 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testJSCollatorPriSort_he: function(test) {
        test.expect(74);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
        
        test.ok("א < ﬡ", col.compare("א", "ﬡ") < 0);
        test.ok("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
        test.ok("אַ < אָ", col.compare("אַ", "אָ") < 0);
        test.ok("אָ < אּ", col.compare("אָ", "אּ") < 0);
        test.ok("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
        test.ok("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
        test.ok("ב < בּ", col.compare("ב", "בּ") < 0);
        test.ok("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
        test.ok("בֿ < ג", col.compare("בֿ", "ג") < 0);
        test.ok("ג < גּ", col.compare("ג", "גּ") < 0);
        test.ok("גּ < ד", col.compare("גּ", "ד") < 0);
        test.ok("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
        test.ok("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
        test.ok("דּ < ה", col.compare("דּ", "ה") < 0);
        test.ok("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
        test.ok("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
        test.ok("הּ < ו", col.compare("הּ", "ו") < 0);
        test.ok("ו < וֹ", col.compare("ו", "וֹ") < 0);
        test.ok("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
        test.ok("וּ < װ", col.compare("וּ", "װ") < 0);
        test.ok("װ < ױ", col.compare("װ", "ױ") < 0);
        test.ok("ױ < ז", col.compare("ױ", "ז") < 0);
        test.ok("ז < זּ", col.compare("ז", "זּ") < 0);
        test.ok("זּ < ח", col.compare("זּ", "ח") < 0);
        test.ok("ח < ט", col.compare("ח", "ט") < 0);
        test.ok("ט < טּ", col.compare("ט", "טּ") < 0);
        test.ok("טּ < י", col.compare("טּ", "י") < 0);
        test.ok("י < יִ", col.compare("י", "יִ") < 0);
        test.ok("יִ < יּ", col.compare("יִ", "יּ") < 0);
        test.ok("יּ < ײ", col.compare("יּ", "ײ") < 0);
        test.ok("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
        test.ok("ײַ < כ", col.compare("ײַ", "כ") < 0);
        test.ok("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
        test.ok("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
        test.ok("ך < כּ", col.compare("ך", "כּ") < 0);
        test.ok("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
        test.ok("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
        test.ok("כֿ < ל", col.compare("כֿ", "ל") < 0);
        test.ok("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
        test.ok("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
        test.ok("לּ < מ", col.compare("לּ", "מ") < 0);
        test.ok("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
        test.ok("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
        test.ok("ם < מּ", col.compare("ם", "מּ") < 0);
        test.ok("מּ < נ", col.compare("מּ", "נ") < 0);
        test.ok("נ < ן", col.compare("נ", "ן") < 0);
        test.ok("ן < נּ", col.compare("ן", "נּ") < 0);
        test.ok("נּ < ס", col.compare("נּ", "ס") < 0);
        test.ok("ס < סּ", col.compare("ס", "סּ") < 0);
        test.ok("סּ < ע", col.compare("סּ", "ע") < 0);
        test.ok("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
        test.ok("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
        test.ok("פ < ף", col.compare("פ", "ף") < 0);
        test.ok("ף < פּ", col.compare("ף", "פּ") < 0);
        test.ok("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
        test.ok("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
        test.ok("פֿ < צ", col.compare("פֿ", "צ") < 0);
        test.ok("צ < ץ", col.compare("צ", "ץ") < 0);
        test.ok("ץ < צּ", col.compare("ץ", "צּ") < 0);
        test.ok("צּ < ק", col.compare("צּ", "ק") < 0);
        test.ok("ק < קּ", col.compare("ק", "קּ") < 0);
        test.ok("קּ < ר", col.compare("קּ", "ר") < 0);
        test.ok("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
        test.ok("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
        test.ok("רּ < ש", col.compare("רּ", "ש") < 0);
        test.ok("ש < שׂ", col.compare("ש", "שׂ") < 0);
        test.ok("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
        test.ok("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
        test.ok("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
        test.ok("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
        test.ok("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
        test.ok("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
        test.ok("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
        test.done();
    },
    
    testCollatorVariant_he: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "variant",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPrimary_he: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "תפוז",
            "ת",
            "ע",
             "תפוח",
             "ש",
            "ב",
             "אפרסק",
             "ס",
            "פטל",
             "בננה",
            "ד",
            "כ"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "אפרסק",
            "ב",
            "בננה",
            "ד",
            "כ",
            "ס",
            "ע",
            "פטל",
            "ש",
            "ת",
            "תפוז",
            "תפוח"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testJSCollatorQuatLatin_he: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "he-IL",
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
    
    testCollatorPrimaryMixed_he: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "he-IL",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "banana",
            "תפוז",
            "peach",
            "תפוח",
            "apple",
            "orange",
            "אפרסק",
            "פטל",
            "raspberry",
            "בננה"
        ];
    
        input.sort(col.getComparator());
    
        // Latin letters sort before the Hebrew ones
    
        var expected = [
            "apple",
            "banana",
            "orange",
            "peach",
            "raspberry",
            "אפרסק",
            "בננה",
            "פטל",
            "תפוז",
            "תפוח"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
};