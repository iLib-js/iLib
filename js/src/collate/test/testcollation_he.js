/*
 * testcollation_he.js - test the Collator object in Hebrew
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

function testJSCollatorQuat_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א < ﬡ", col.compare("א", "ﬡ") < 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
	assertTrue("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
	assertTrue("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ < ן", col.compare("נ", "ן") < 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ < ף", col.compare("פ", "ף") < 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ < ץ", col.compare("צ", "ץ") < 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorTer_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א = ﬡ", col.compare("א", "ﬡ") === 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
	assertTrue("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
	assertTrue("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ = ן", col.compare("נ", "ן") === 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ = ף", col.compare("פ", "ף") === 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ = ץ", col.compare("צ", "ץ") === 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorSec_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א = ﬡ", col.compare("א", "ﬡ") === 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
	assertTrue("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
	assertTrue("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ = ן", col.compare("נ", "ן") === 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ = ף", col.compare("פ", "ף") === 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ = ץ", col.compare("צ", "ץ") === 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorPri_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א = ﬡ", col.compare("א", "ﬡ") === 0);
	assertTrue("ﬡ = אַ", col.compare("ﬡ", "אַ") === 0);
	assertTrue("אַ = אָ", col.compare("אַ", "אָ") === 0);
	assertTrue("אָ = אּ", col.compare("אָ", "אּ") === 0);
	assertTrue("אּ = ﭏ", col.compare("אּ", "ﭏ") === 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב = בּ", col.compare("ב", "בּ") === 0);
	assertTrue("בּ = בֿ", col.compare("בּ", "בֿ") === 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג = גּ", col.compare("ג", "גּ") === 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד = ﬢ", col.compare("ד", "ﬢ") === 0);
	assertTrue("ﬢ = דּ", col.compare("ﬢ", "דּ") === 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה = ﬣ", col.compare("ה", "ﬣ") === 0);
	assertTrue("ﬣ = הּ", col.compare("ﬣ", "הּ") === 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו = וֹ", col.compare("ו", "וֹ") === 0);
	assertTrue("וֹ = וּ", col.compare("וֹ", "וּ") === 0);
	assertTrue("וּ = װ", col.compare("וּ", "װ") === 0);
	assertTrue("װ = ױ", col.compare("װ", "ױ") === 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז = זּ", col.compare("ז", "זּ") === 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט = טּ", col.compare("ט", "טּ") === 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י = יִ", col.compare("י", "יִ") === 0);
	assertTrue("יִ = יּ", col.compare("יִ", "יּ") === 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ = ײַ", col.compare("ײ", "ײַ") === 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ = ﬤ", col.compare("כ", "ﬤ") === 0);
	assertTrue("ﬤ = ך", col.compare("ﬤ", "ך") === 0);
	assertTrue("ך = כּ", col.compare("ך", "כּ") === 0);
	assertTrue("כּ = ךּ", col.compare("כּ", "ךּ") === 0);
	assertTrue("ךּ = כֿ", col.compare("ךּ", "כֿ") === 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל = ﬥ", col.compare("ל", "ﬥ") === 0);
	assertTrue("ﬥ = לּ", col.compare("ﬥ", "לּ") === 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ = ﬦ", col.compare("מ", "ﬦ") === 0);
	assertTrue("ﬦ = ם", col.compare("ﬦ", "ם") === 0);
	assertTrue("ם = מּ", col.compare("ם", "מּ") === 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ = ן", col.compare("נ", "ן") === 0);
	assertTrue("ן = נּ", col.compare("ן", "נּ") === 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס = סּ", col.compare("ס", "סּ") === 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע = ﬠ", col.compare("ע", "ﬠ") === 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ = ף", col.compare("פ", "ף") === 0);
	assertTrue("ף = פּ", col.compare("ף", "פּ") === 0);
	assertTrue("פּ = ףּ", col.compare("פּ", "ףּ") === 0);
	assertTrue("ףּ = פֿ", col.compare("ףּ", "פֿ") === 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ = ץ", col.compare("צ", "ץ") === 0);
	assertTrue("ץ = צּ", col.compare("ץ", "צּ") === 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק = קּ", col.compare("ק", "קּ") === 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר = ﬧ", col.compare("ר", "ﬧ") === 0);
	assertTrue("ﬧ = רּ", col.compare("ﬧ", "רּ") === 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש = שׂ", col.compare("ש", "שׂ") === 0);
	assertTrue("שׂ = שׁ", col.compare("שׂ", "שׁ") === 0);
	assertTrue("שׁ = שּ", col.compare("שׁ", "שּ") === 0);
	assertTrue("שּ = שּׂ", col.compare("שּ", "שּׂ") === 0);
	assertTrue("שּׂ = שּׁ", col.compare("שּׂ", "שּׁ") === 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת = ﬨ", col.compare("ת", "ﬨ") === 0);
	assertTrue("ﬨ = תּ", col.compare("ﬨ", "תּ") === 0);
}

function testJSCollatorQuatSort_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א < ﬡ", col.compare("א", "ﬡ") < 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
	assertTrue("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
	assertTrue("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ < ן", col.compare("נ", "ן") < 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ < ף", col.compare("פ", "ף") < 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ < ץ", col.compare("צ", "ץ") < 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorTerSort_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א < ﬡ", col.compare("א", "ﬡ") < 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
	assertTrue("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
	assertTrue("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ < ן", col.compare("נ", "ן") < 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ < ף", col.compare("פ", "ף") < 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ < ץ", col.compare("צ", "ץ") < 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorSecSort_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א < ﬡ", col.compare("א", "ﬡ") < 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
	assertTrue("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
	assertTrue("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ < ן", col.compare("נ", "ן") < 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ < ף", col.compare("פ", "ף") < 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ < ץ", col.compare("צ", "ץ") < 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testJSCollatorPriSort_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// א ﬡ אַ אָ אּ ﭏ ב בּ בֿ ג גּ ד ﬢ דּ ה ﬣ הּ ו וֹ וּ װ ױ ז זּ ח ט טּ י יִ יּ ײ ײַ כ ﬤ ך כּ ךּ כֿ ל ﬥ לּ מ ﬦ ם מּ נ ן נּ ס סּ ע ﬠ פ ף פּ ףּ פֿ צ ץ צּ ק קּ ר ﬧ רּ ש שׂ שׁ שּ שּׂ שּׁ ת ﬨ תּ
	
	assertTrue("א < ﬡ", col.compare("א", "ﬡ") < 0);
	assertTrue("ﬡ < אַ", col.compare("ﬡ", "אַ") < 0);
	assertTrue("אַ < אָ", col.compare("אַ", "אָ") < 0);
	assertTrue("אָ < אּ", col.compare("אָ", "אּ") < 0);
	assertTrue("אּ < ﭏ", col.compare("אּ", "ﭏ") < 0);
	assertTrue("ﭏ < ב", col.compare("ﭏ", "ב") < 0);
	assertTrue("ב < בּ", col.compare("ב", "בּ") < 0);
	assertTrue("בּ < בֿ", col.compare("בּ", "בֿ") < 0);
	assertTrue("בֿ < ג", col.compare("בֿ", "ג") < 0);
	assertTrue("ג < גּ", col.compare("ג", "גּ") < 0);
	assertTrue("גּ < ד", col.compare("גּ", "ד") < 0);
	assertTrue("ד < ﬢ", col.compare("ד", "ﬢ") < 0);
	assertTrue("ﬢ < דּ", col.compare("ﬢ", "דּ") < 0);
	assertTrue("דּ < ה", col.compare("דּ", "ה") < 0);
	assertTrue("ה < ﬣ", col.compare("ה", "ﬣ") < 0);
	assertTrue("ﬣ < הּ", col.compare("ﬣ", "הּ") < 0);
	assertTrue("הּ < ו", col.compare("הּ", "ו") < 0);
	assertTrue("ו < וֹ", col.compare("ו", "וֹ") < 0);
	assertTrue("וֹ < וּ", col.compare("וֹ", "וּ") < 0);
	assertTrue("וּ < װ", col.compare("וּ", "װ") < 0);
	assertTrue("װ < ױ", col.compare("װ", "ױ") < 0);
	assertTrue("ױ < ז", col.compare("ױ", "ז") < 0);
	assertTrue("ז < זּ", col.compare("ז", "זּ") < 0);
	assertTrue("זּ < ח", col.compare("זּ", "ח") < 0);
	assertTrue("ח < ט", col.compare("ח", "ט") < 0);
	assertTrue("ט < טּ", col.compare("ט", "טּ") < 0);
	assertTrue("טּ < י", col.compare("טּ", "י") < 0);
	assertTrue("י < יִ", col.compare("י", "יִ") < 0);
	assertTrue("יִ < יּ", col.compare("יִ", "יּ") < 0);
	assertTrue("יּ < ײ", col.compare("יּ", "ײ") < 0);
	assertTrue("ײ < ײַ", col.compare("ײ", "ײַ") < 0);
	assertTrue("ײַ < כ", col.compare("ײַ", "כ") < 0);
	assertTrue("כ < ﬤ", col.compare("כ", "ﬤ") < 0);
	assertTrue("ﬤ < ך", col.compare("ﬤ", "ך") < 0);
	assertTrue("ך < כּ", col.compare("ך", "כּ") < 0);
	assertTrue("כּ < ךּ", col.compare("כּ", "ךּ") < 0);
	assertTrue("ךּ < כֿ", col.compare("ךּ", "כֿ") < 0);
	assertTrue("כֿ < ל", col.compare("כֿ", "ל") < 0);
	assertTrue("ל < ﬥ", col.compare("ל", "ﬥ") < 0);
	assertTrue("ﬥ < לּ", col.compare("ﬥ", "לּ") < 0);
	assertTrue("לּ < מ", col.compare("לּ", "מ") < 0);
	assertTrue("מ < ﬦ", col.compare("מ", "ﬦ") < 0);
	assertTrue("ﬦ < ם", col.compare("ﬦ", "ם") < 0);
	assertTrue("ם < מּ", col.compare("ם", "מּ") < 0);
	assertTrue("מּ < נ", col.compare("מּ", "נ") < 0);
	assertTrue("נ < ן", col.compare("נ", "ן") < 0);
	assertTrue("ן < נּ", col.compare("ן", "נּ") < 0);
	assertTrue("נּ < ס", col.compare("נּ", "ס") < 0);
	assertTrue("ס < סּ", col.compare("ס", "סּ") < 0);
	assertTrue("סּ < ע", col.compare("סּ", "ע") < 0);
	assertTrue("ע < ﬠ", col.compare("ע", "ﬠ") < 0);
	assertTrue("ﬠ < פ", col.compare("ﬠ", "פ") < 0);
	assertTrue("פ < ף", col.compare("פ", "ף") < 0);
	assertTrue("ף < פּ", col.compare("ף", "פּ") < 0);
	assertTrue("פּ < ףּ", col.compare("פּ", "ףּ") < 0);
	assertTrue("ףּ < פֿ", col.compare("ףּ", "פֿ") < 0);
	assertTrue("פֿ < צ", col.compare("פֿ", "צ") < 0);
	assertTrue("צ < ץ", col.compare("צ", "ץ") < 0);
	assertTrue("ץ < צּ", col.compare("ץ", "צּ") < 0);
	assertTrue("צּ < ק", col.compare("צּ", "ק") < 0);
	assertTrue("ק < קּ", col.compare("ק", "קּ") < 0);
	assertTrue("קּ < ר", col.compare("קּ", "ר") < 0);
	assertTrue("ר < ﬧ", col.compare("ר", "ﬧ") < 0);
	assertTrue("ﬧ < רּ", col.compare("ﬧ", "רּ") < 0);
	assertTrue("רּ < ש", col.compare("רּ", "ש") < 0);
	assertTrue("ש < שׂ", col.compare("ש", "שׂ") < 0);
	assertTrue("שׂ < שׁ", col.compare("שׂ", "שׁ") < 0);
	assertTrue("שׁ < שּ", col.compare("שׁ", "שּ") < 0);
	assertTrue("שּ < שּׂ", col.compare("שּ", "שּׂ") < 0);
	assertTrue("שּׂ < שּׁ", col.compare("שּׂ", "שּׁ") < 0);
	assertTrue("שּׁ < ת", col.compare("שּׁ", "ת") < 0);
	assertTrue("ת < ﬨ", col.compare("ת", "ﬨ") < 0);
	assertTrue("ﬨ < תּ", col.compare("ﬨ", "תּ") < 0);
}

function testCollatorVariant_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "variant",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
	];

    input.sort(col.getComparator());

    var expected = [
	];

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}

function testJSCollatorQuatLatin_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
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

function testCollatorPrimaryMixed_he() {
	var col = new ilib.Collator({
		locale: "he-IL",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
	assertNotUndefined(col);

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

	// Latin letters sort after the Cyrillic ones

	var expected = [
		"אפרסק",
		"בננה",
		"פטל",
		"תפוז",
		"תפוח",
		"apple",
		"banana",
		"orange",
		"peach",
		"raspberry"
    ];

	assertArrayEquals(expected, input);
}
