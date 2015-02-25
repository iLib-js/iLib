/*
 * testnumfmt_af.js - test the number formatter object for Afrikaans language
 * 
 * Copyright © 2012-2013, JEDLSoft
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


function testNumFmtNumberZAFormatNoFractionalLimit() {

    var fmt = new ilib.NumFmt({
        locale: "af-ZA"
    });
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("1,012345678901234", fmt.format(1.012345678901234));
}

function testNumFmtNumberZAFormatNoIntegralLimit() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA"
    });
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("12 345 678 901 234", fmt.format(12345678901234.0));
}

function testNumFmtNumberZAFormatWithMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,75", fmt.format(1.7453));
}

function testNumFmtNumberZAFormatWithMinFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,7500", fmt.format(1.75));
}

function testNumFmtNumberZAFormatWithMinFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("1,75", fmt.format(1.75));
}

function testNumFmtNumberZAFormatWithMinFracDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("17 500", fmt.format(17500));
}

function testNumFmtNumberZAFormatWithMinFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);

    // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
    assertEquals("1,01234567890123460000", fmt.format(1.012345678901234567890123456789));
}

function testNumFmtNumberZAFormatWithMinAndMaxFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,700", fmt.format(1.7));
}

function testNumFmtNumberZAFormatWithMinAndMaxFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,765433", fmt.format(1.76543298765));
}

function testNumFmtNumberZAFormatWithMinAndMaxFracDigitsJustRight() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76543", fmt.format(1.76543));
}

function testNumFmtNumberZAStyleStandard() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("2 345 678 901 234 567", fmt.format(2345678901234567.0));
}

function testNumFmtNumberZAFormatStandardWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123 456 789,4", fmt.format(123456789.4));
}

function testNumFmtNumberZAFormatWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456 789,4", fmt.format(-123456789.4));
}

function testNumFmtNumberZAStyleScientific() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,2345678901234568E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberZAStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,234567890123456E-6", fmt.format(0.000001234567890123456));
}


function testNumFmtNumberZAStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "scientific",
        minFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,23400E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberZAStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "scientific",
        minFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    // min of 1 means we can have more digits than one!
    assertEquals("1,23456789E+28", fmt.format(12345678900000000000000000000.0));
}

function testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        style: "scientific",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,234E+20", fmt.format(123400000000000000000.0));
}

function testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "af-ZA",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1E+28", fmt.format(10000000000000000000000000000.0));
}

function testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooBig() {
    var fmt = new ilib.NumFmt({
	locale: "af-ZA",
        style: "scientific",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);
    
    // max is 20
    assertEquals("1,23400000000000000000E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberZAStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "af-ZA",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,23457E+28", fmt.format(12345678901234567890123456789.0));
}




function testNumFmtNumberZAStyleNogroupingInteger() {
    var fmt = new ilib.NumFmt({
	locale:"af-ZA",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789", fmt.format(123456789));
}

function testNumFmtNumberZAStyleNogroupingFloat() {
    var fmt = new ilib.NumFmt({
	locale:"af-ZA",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789,345345", fmt.format(123456789.345345));
}

function GetUseNativeHasNativeButFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA"
    });
    
    assertNotNull(fmt);
    
    // Tamil does have native digits, but they are not frequently used
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideTrue() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitTrue() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}



function testNumFmtPercentageFormatRegular() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",	
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

function testNumFmtPercentageGetType() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("percentage", fmt.getType());
}

function testNumFmtPercentageFormatWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "af-ZA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57,05", fmt.format(57.05));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57.05", fmt.format(57.05));
}
function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57,06", fmt.format(57.056));
}

function testNumFmtCurrencyUseCorrectFractionDigitsForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
    assertEquals(2, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57,00", fmt.format(57));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57,10", fmt.format(57.1));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        minFractionDigits: 5,
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R57,10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        style: "iso",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("ZAR57,10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatZADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(R57,00)", fmt.format(-57));
}

function testNumFmtCurrencyFormatZAGrouping() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-ZA",
        currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R123 456 788,00", fmt.format(123456788));
}

/*Namibia test cases*/


function testNumFmtNumberNAFormatNoFractionalLimit() {

    var fmt = new ilib.NumFmt({
        locale: "af-NA"
    });
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("1,012345678901234", fmt.format(1.012345678901234));
}

function testNumFmtNumberNAFormatNoIntegralLimit() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA"
    });
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("12 345 678 901 234", fmt.format(12345678901234.0));
}

function testNumFmtNumberNAFormatWithMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,75", fmt.format(1.7453));
}

function testNumFmtNumberNAFormatWithMinFracDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,7500", fmt.format(1.75));
}

function testNumFmtNumberNAFormatWithMinFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("1,75", fmt.format(1.75));
}

function testNumFmtNumberNAFormatWithMinFracDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("17 500", fmt.format(17500));
}

function testNumFmtNumberNAFormatWithMinFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);

    // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
    assertEquals("1,01234567890123460000", fmt.format(1.012345678901234567890123456789));
}

function testNumFmtNumberNAFormatWithMinAndMaxFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,700", fmt.format(1.7));
}

function testNumFmtNumberNAFormatWithMinAndMaxFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,765433", fmt.format(1.76543298765));
}

function testNumFmtNumberNAFormatWithMinAndMaxFracDigitsJustRight() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76543", fmt.format(1.76543));
}

function testNumFmtNumberNAStyleStandard() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("2 345 678 901 234 567", fmt.format(2345678901234567.0));
}

function testNumFmtNumberNAFormatStandardWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123 456 789,4", fmt.format(123456789.4));
}

function testNumFmtNumberNAFormatWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456 789,4", fmt.format(-123456789.4));
}

function testNumFmtNumberNAStyleScientific() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,2345678901234568E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberNAStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,234567890123456E-6", fmt.format(0.000001234567890123456));
}


function testNumFmtNumberNAStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "scientific",
        minFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,23400E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberNAStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "scientific",
        minFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    // min of 1 means we can have more digits than one!
    assertEquals("1,23456789E+28", fmt.format(12345678900000000000000000000.0));
}

function testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        style: "scientific",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,234E+20", fmt.format(123400000000000000000.0));
}

function testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "af-NA",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1E+28", fmt.format(10000000000000000000000000000.0));
}

function testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooBig() {
    var fmt = new ilib.NumFmt({
	locale: "af-NA",
        style: "scientific",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);
    
    // max is 20
    assertEquals("1,23400000000000000000E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberNAStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
	locale: "af-NA",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,23457E+28", fmt.format(12345678901234567890123456789.0));
}




function testNumFmtNumberNAStyleNogroupingInteger() {
    var fmt = new ilib.NumFmt({
	locale:"af-NA",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789", fmt.format(123456789));
}

function testNumFmtNumberNAStyleNogroupingFloat() {
    var fmt = new ilib.NumFmt({
	locale:"af-NA",
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789,345345", fmt.format(123456789.345345));
}

function GetUseNativeHasNativeButFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA"
    });
    
    assertNotNull(fmt);
    
    // Tamil does have native digits, but they are not frequently used
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideTrue() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitTrue() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideFalse() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}



function testNumFmtPercentageFormatRegular() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",	
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

function testNumFmtPercentageGetType() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("percentage", fmt.getType());
}

function testNumFmtPercentageFormatWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "af-NA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57,05", fmt.format(57.05));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57.05", fmt.format(57.05));
}
function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57,06", fmt.format(57.056));
}

function testNumFmtCurrencyUseCorrectFractionDigitsForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
    assertEquals(2, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57,00", fmt.format(57));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57,10", fmt.format(57.1));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        minFractionDigits: 5,
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 57,10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        style: "iso",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("NAD57,10000", fmt.format(57.1));
}

function testNumFmtCurrencyFormatNADefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($57,00)", fmt.format(-57));
}

function testNumFmtCurrencyFormatNAGrouping() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "af-NA",
        currency: "NAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$ 123 456 788,00", fmt.format(123456788));
}


