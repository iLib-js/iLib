/*
 * testnumfmt_am.js - test the number formatter object for Amharic language
 * 
 * Copyright © 2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function testNumFmtNumberETFormatNoFractionalLimit() {

    var fmt = new ilib.NumFmt({
        locale: "am-ET"
    });
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("1.012345678901234", fmt.format(1.012345678901234));
}

function testNumFmtNumberETFormatNoIntegralLimit() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET"
    });
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("12,345,678,901,234", fmt.format(12345678901234.0));
}

function testNumFmtNumberETFormatWithMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.7453));
}

function testNumFmtNumberETFormatWithMinFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.7500", fmt.format(1.75));
}

function testNumFmtNumberETFormatWithMinFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberETFormatWithMinFracDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("17,500", fmt.format(17500));
}

function testNumFmtNumberETFormatWithMinFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);

    // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
    assertEquals("1.01234567890123460000", fmt.format(1.012345678901234567890123456789));
}

function testNumFmtNumberETFormatWithMinAndMaxFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.700", fmt.format(1.7));
}

function testNumFmtNumberETFormatWithMinAndMaxFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.765433", fmt.format(1.76543298765));
}

function testNumFmtNumberETFormatWithMinAndMaxFracDigitsJustRight() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76543", fmt.format(1.76543));
}

function testNumFmtNumberETStyleStandard() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("2,345,678,901,234,567", fmt.format(2345678901234567.0));
}

function testNumFmtNumberETFormatStandardWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberETFormatWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberETStyleScientific() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.2345678901234568E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberETStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234567890123456E-6", fmt.format(0.000001234567890123456));
}


function testNumFmtNumberETStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "scientific",
        minFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23400E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberETStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "scientific",
        minFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    // min of 1 means we can have more digits than one!
    assertEquals("1.23456789E+28", fmt.format(12345678900000000000000000000.0));
}

function testNumFmtNumberETStyleScientificWithMinFractionDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        style: "scientific",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234E+20", fmt.format(123400000000000000000.0));
}

function testNumFmtNumberETStyleScientificWithMinFractionDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "am-ET",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1E+28", fmt.format(10000000000000000000000000000.0));
}

function testNumFmtNumberETStyleScientificWithMinFractionDigitsTooBig() {
    var fmt = new ilib.NumFmt({
	locale: "am-ET",
        style: "scientific",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);
    
    // max is 20
    assertEquals("1.23400000000000000000E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberETStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "am-ET",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457E+28", fmt.format(12345678901234567890123456789.0));
}




function testNumFmtNumberETStyleNogroupingInteger() {
    var fmt = new ilib.NumFmt({
	locale:"am-ET",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789", fmt.format(123456789));
}

function testNumFmtNumberETStyleNogroupingFloat() {
    var fmt = new ilib.NumFmt({
	locale:"am-ET",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789.345345", fmt.format(123456789.345345));
}

function GetUseNativeHasNativeButFalse() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET"
    });
    
    assertNotNull(fmt);
    
    // Tamil does have native digits, but they are not frequently used
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideTrue() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitTrue() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitFalse() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideFalse() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}



function testNumFmtPercentageFormatRegular() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",	
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

function testNumFmtPercentageGetType() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("percentage", fmt.getType());
}

function testNumFmtPercentageFormatWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "am-ET",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br57.05", fmt.format(57.05));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br57.05", fmt.format(57.05));
}
function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br57,06", fmt.format(57.056));
}

function testNumFmtCurrencyUseCorrectFractionDigitsForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
    assertEquals(2, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br57,00", fmt.format(57));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br57.10", fmt.format(57.1));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        minFractionDigits: 5,
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("BR57.10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        style: "iso",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("ETB57,10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatETDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(Br57.00)", fmt.format(-57));
}

function testNumFmtCurrencyFormatETGrouping() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "am-ET",
        currency: "ETB"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Br123,456,788.00", fmt.format(123456788));
}
