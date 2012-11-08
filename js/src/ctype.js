/*
 * ctype.js - Character type definitions
 * 
 * Copyright © 2012, JEDLSoft
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

// !depends ilibglobal.js locale.js

// !data ctype

/**
 * @namespace
 * Provides a set of static routines that return information about characters.
 * These routines emulate the C-library ctype functions. The characters must be 
 * encoded in utf-8, as no other charsets are currently supported. Only the first
 * character of the given string is tested.
 */
ilib.CType = {
	/**
	 * @protected
	 * Actual implementation for withinRange. Searches the given object for ranges.
	 * The range names are taken from the Unicode range names in 
	 * http://www.unicode.org/Public/UNIDATA/extracted/DerivedGeneralCategory.txt
	 * 
	 * <ul>
	 * <li>cn - Unassigned
	 * <li>lu - Uppercase_Letter
	 * <li>ll - Lowercase_Letter
	 * <li>lt - Titlecase_Letter
	 * <li>lm - Modifier_Letter
	 * <li>lo - Other_Letter
	 * <li>mn - Nonspacing_Mark
	 * <li>me - Enclosing_Mark
	 * <li>mc - Spacing_Mark
	 * <li>nd - Decimal_Number
	 * <li>nl - Letter_Number
	 * <li>no - Other_Number
	 * <li>zs - Space_Separator
	 * <li>zl - Line_Separator
	 * <li>zp - Paragraph_Separator
	 * <li>cc - Control
	 * <li>cf - Format
	 * <li>co - Private_Use
	 * <li>cs - Surrogate
	 * <li>pd - Dash_Punctuation
	 * <li>ps - Open_Punctuation
	 * <li>pe - Close_Punctuation
	 * <li>pc - Connector_Punctuation
	 * <li>po - Other_Punctuation
	 * <li>sm - Math_Symbol
	 * <li>sc - Currency_Symbol
	 * <li>sk - Modifier_Symbol
	 * <li>so - Other_Symbol
	 * <li>pi - Initial_Punctuation
	 * <li>pf - Final_Punctuation
	 * </ul>
	 * 
	 * @param {string} ch character to examine
	 * @param {string} rangeName the name of the range to check
	 * @param {Object} obj object containing the character range data
	 * @return {boolean} true if the first character is within the named
	 * range
	 */
	_inRange: function(ch, rangeName, obj) {
		var range, i, num;
		if (!ch || ch.length === 0 || !rangeName || typeof(obj) === 'undefined') {
			return false;
		}
		
		num = ch.charCodeAt(0);
		range = obj[rangeName.toLowerCase()];
		if (!range) {
			return false;
		}
		
		for (i = 0; i < range.length; i++) {
			// JS only supports the BMP (chars from 0x0000 to 0xFFFF), but the
			// data is includes ranges above that for use with other languages
			// that do support all ISO 10646 characters. So, check if the range
			// is less than the max first.
			if (range[i][0] < 0x10000) {
				if (range[i].length === 1) {
					// single character range
					if (num === range[i][0]) {
						return true;
					}
				} else if (num >= range[i][0] && num <= range[i][1]) {
					// multi-character range
					return true;
				}
			}
		}
		
		return false;
	},
	
	/**
	 * Return whether or not the first character is within the named range
	 * of Unicode characters. The valid list of range names are taken from 
	 * the Unicode 6.0 spec. Only those ranges which have characters in the 
	 * Basic Multilingual Plane (BMP) are supported. Currently, this method 
	 * supports the following range names:
	 * 
	 * <ul>
	 * <li><i>ascii</i> - basic ASCII
	 * <li><i>latin</i> - Latin, Latin Extended Additional, Latin Extended-C, Latin Extended-D
	 * <li><i>armenian</i>
	 * <li><i>greek</i> - Greek, Greek Extended
	 * <li><i>cyrillic</i> - Cyrillic, Cyrillic Extended-A, Cyrillic Extended-B
	 * <li><i>georgian</i> - Georgian, Georgian Supplement
	 * <li><i>glagolitic</i>
	 * <li><i>gothic</i>
	 * <li><i>ogham</i>
	 * <li><i>oldpersian</i>
	 * <li><i>runic</i>
	 * <li><i>ipa</i> - IPA, Phonetic Extensions, Phonetic Extensions Supplement
	 * <li><i>phonetic</i>
	 * <li><i>modifiertone</i> - Modifier Tone Letters
	 * <li><i>spacing</i>
	 * <li><i>diacritics</i>
	 * <li><i>halfmarks</i> - Combining Half Marks
	 * <li><i>small</i> - Small Form Variants
	 * <li><i>bamum</i> - Bamum, Bamum Supplement
	 * <li><i>ethiopic</i> - Ethiopic, Ethiopic Extended, Ethiopic Extended-A
	 * <li><i>nko</i>
	 * <li><i>osmanya</i>
	 * <li><i>tifinagh</i>
	 * <li><i>val</i>
	 * <li><i>arabic</i> - Arabic, Arabic Supplement, Arabic Presentation Forms-A, 
	 * Arabic Presentation Forms-B
	 * <li><i>carlan</i>
	 * <li><i>hebrew</i>
	 * <li><i>mandaic</i>
	 * <li><i>samaritan</i>
	 * <li><i>syriac</i>
	 * <li><i>mongolian</i>
	 * <li><i>phagspa</i>
	 * <li><i>tibetan</i>
	 * <li><i>bengali</i>
	 * <li><i>devanagari</i> - Devanagari, Devanagari Extended
	 * <li><i>gujarati</i>
	 * <li><i>gurmukhi</i>
	 * <li><i>kannada</i>
	 * <li><i>lepcha</i>
	 * <li><i>limbu</i>
	 * <li><i>malayalam</i>
	 * <li><i>meetaimayek</i>
	 * <li><i>olchiki</i>
	 * <li><i>oriya</i>
	 * <li><i>saurashtra</i>
	 * <li><i>sinhala</i>
	 * <li><i>sylotinagri</i> - Syloti Nagri
	 * <li><i>tamil</i>
	 * <li><i>telugu</i>
	 * <li><i>thaana</i>
	 * <li><i>vedic</i>
	 * <li><i>batak</i>
	 * <li><i>balinese</i>
	 * <li><i>buginese</i>
	 * <li><i>cham</i>
	 * <li><i>javanese</i>
	 * <li><i>kayahli</i>
	 * <li><i>khmer</i>
	 * <li><i>lao</i>
	 * <li><i>myanmar</i> - Myanmar, Myanmar Extended-A
	 * <li><i>newtailue</i>
	 * <li><i>rejang</i>
	 * <li><i>sundanese</i>
	 * <li><i>taile</i>
	 * <li><i>taitham</i>
	 * <li><i>taiviet</i>
	 * <li><i>thai</i>
	 * <li><i>buhld</i>
	 * <li><i>hanunoo</i>
	 * <li><i>tagalog</i>
	 * <li><i>tagbanwa</i>
	 * <li><i>bopomofo</i> - Bopomofo, Bopomofo Extended
	 * <li><i>cjk</i> - the CJK unified ideographs (Han), CJK Unified Ideographs
	 *  Extension A, CJK Unified Ideographs Extension B, CJK Unified Ideographs 
	 *  Extension C, CJK Unified Ideographs Extension D, Ideographic Description 
	 *  Characters (=isIdeo())
	 * <li><i>cjkcompatibility</i> - CJK Compatibility, CJK Compatibility 
	 * Ideographs, CJK Compatibility Forms, CJK Compatibility Ideographs Supplement
	 * <li><i>cjkradicals</i> - the CJK radicals, KangXi radicals
	 * <li><i>hangul</i> - Hangul Jamo, Hangul Syllables, Hangul Jamo Extended-A, 
	 * Hangul Jamo Extended-B, Hangul Compatibility Jamo
	 * <li><i>cjkpunct</i> - CJK symbols and punctuation
	 * <li><i>cjkstrokes</i> - CJK strokes
	 * <li><i>hiragana</i>
	 * <li><i>katakana</i> - Katakana, Katakana Phonetic Extensions, Kana Supplement
	 * <li><i>kanbun</i>
	 * <li><i>lisu</i>
	 * <li><i>yi</i> - Yi Syllables, Yi Radicals
	 * <li><i>cherokee</i>
	 * <li><i>canadian</i> - Unified Canadian Aboriginal Syllabics, Unified Canadian 
	 * Aboriginal Syllabics Extended
	 * <li><i>presentation</i> - Alphabetic presentation forms
	 * <li><i>vertical</i> - Vertical Forms
	 * <li><i>width</i> - Halfwidth and Fullwidth Forms
	 * <li><i>punctuation</i> - General punctuation, Supplemental Punctuation
	 * <li><i>box</i> - Box Drawing
	 * <li><i>block</i> - Block Elements
	 * <li><i>letterlike</i> - Letterlike symbols
	 * <li><i>mathematical</i> - Mathematical alphanumeric symbols, Miscellaneous 
	 * Mathematical Symbols-A, Miscellaneous Mathematical Symbols-B
	 * <li><i>enclosedalpha</i> - Enclosed alphanumerics, Enclosed Alphanumeric Supplement
	 * <li><i>enclosedcjk</i> - Enclosed CJK letters and months, Enclosed Ideographic Supplement
	 * <li><i>cjkcompatibility</i> - CJK compatibility
	 * <li><i>apl</i> - APL symbols
	 * <li><i>controlpictures</i> - Control pictures
	 * <li><i>misc</i> - Miscellaneous technical
	 * <li><i>ocr</i> - Optical character recognition (OCR)
	 * <li><i>combining</i> - Combining Diacritical Marks, Combining Diacritical Marks 
	 * for Symbols, Combining Diacritical Marks Supplement
	 * <li><i>digits</i> - ASCII digits (=isDigit())
	 * <li><i>indicnumber</i> - Common Indic Number Forms
	 * <li><i>numbers</i> - Number dorms
	 * <li><i>supersub</i> - Super- and subscripts
	 * <li><i>arrows</i> - Arrows, Miscellaneous Symbols and Arrows, Supplemental Arrows-A,
	 * Supplemental Arrows-B
	 * <li><i>operators</i> - Mathematical operators, supplemental 
	 * mathematical operators 
	 * <li><i>geometric</i> - Geometric shapes
	 * <li><i>ancient</i> - Ancient symbols
	 * <li><i>braille</i> - Braille patterns
	 * <li><i>currency</i> - Currency symbols
	 * <li><i>dingbats</i>
	 * <li><i>gamesymbols</i>
	 * <li><i>yijing</i> - Yijing Hexagram Symbols
	 * <li><i>specials</i>
	 * <li><i>variations</i> - Variation Selectors, Variation Selectors Supplement
	 * <li><i>privateuse</i> - Private Use Area, Supplementary Private Use Area-A, 
	 * Supplementary Private Use Area-B
	 * <li><i>supplementarya</i> - Supplementary private use area-A
	 * <li><i>supplementaryb</i> - Supplementary private use area-B
	 * <li><i>highsurrogates</i> - High Surrogates, High Private Use Surrogates
	 * <li><i>lowsurrogates</i>
	 * <li><i>reserved</i>
	 * <li><i>noncharacters</i>
	 * </ul><p>
	 * 
	 * Depends directive: !depends ctype.js
	 * 
	 * @param {string} ch character to examine
	 * @param {string} rangeName the name of the range to check
	 * @return {boolean} true if the first character is within the named
	 * range
	 */
	withinRange: function(ch, rangeName) {
		return ilib.CType._inRange(ch, rangeName, ilib.data.ctype);
	}
};
