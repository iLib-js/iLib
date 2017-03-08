/*
 * testnumfmt.js - test the number formatter object
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testNumFmtConstructorEmpty() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
}

function testNumFmtDefaults() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("number", fmt.getType());
    assertEquals(-1, fmt.getMaxFractionDigits());
    assertEquals(-1, fmt.getMinFractionDigits());
    assertTrue(fmt.isGroupingUsed());
    assertEquals("halfdown", fmt.getRoundingMode());
    assertUndefined(fmt.getCurrency());
}

function testNumFmtNumberFormatSimple() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("1.745", fmt.format(1.745));
}

function testNumFmtNumberFormatUndefined() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("", fmt.format());
}

function testNumFmtNumberFormatSimpleNeg() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    assertEquals("-1.745", fmt.format(-1.745));
}

function testNumFmtNumberFormatNoFractionalLimit() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("1.012345678901234", fmt.format(1.012345678901234));
}

function testNumFmtNumberFormatNoIntegralLimit() {
    var fmt = new ilib.NumFmt();
    
    assertNotNull(fmt);
    
    // no limit imposed by the function -- JavaScript has a limit for itself though
    // of about 16 significant digits, which stems from the implementation of
    // floating point arithmetic that it uses
    assertEquals("12,345,678,901,234", fmt.format(12345678901234.0));
}

function testNumFmtNumberFormatWithMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.7453));
}

function testNumFmtNumberFormatWithMinFracDigits() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.7500", fmt.format(1.75));
}

function testNumFmtNumberFormatWithMinFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatWithMinFracDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: -5
    });
    
    assertNotNull(fmt);
    
    // lower bound is 0
    assertEquals("17,500", fmt.format(17500));
}

function testNumFmtNumberFormatWithMinFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);

    // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
    assertEquals("1.01234567890123460000", fmt.format(1.012345678901234567890123456789));
}

function testNumFmtNumberFormatWithMinAndMaxFracDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.700", fmt.format(1.7));
}

function testNumFmtNumberFormatWithMinAndMaxFracDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.765433", fmt.format(1.76543298765));
}

function testNumFmtNumberFormatWithMinAndMaxFracDigitsJustRight() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 3,
        maxFractionDigits: 6
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76543", fmt.format(1.76543));
}

function testNumFmtNumberGetMaxFracDigits() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
}

function testNumFmtGetMinFracDigits() {
    var fmt = new ilib.NumFmt({
        minFractionDigits: 4
    });
    
    assertNotNull(fmt);
    
    assertEquals(4, fmt.getMinFractionDigits());
}

function testNumFmtNumberStyleStandard() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("2,345,678,901,234,567", fmt.format(2345678901234567.0));
}

function testNumFmtNumberFormatStandardWithMultiGroups() {
    var fmt = new ilib.NumFmt({
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
    	style: "standard"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberStyleScientific() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.2345678901234568E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234567890123456E-6", fmt.format(0.000001234567890123456));
}

function testNumFmtNumberStyleScientificWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457E-6", fmt.format(0.0000012345678901234567890123456789));
}

function testNumFmtNumberStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        minFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23400E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificWithMinFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        minFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    // min of 1 means we can have more digits than one!
    assertEquals("1.23456789E+28", fmt.format(12345678900000000000000000000.0));
}

function testNumFmtNumberStyleScientificWithMinFractionDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234E+20", fmt.format(123400000000000000000.0));
}

function testNumFmtNumberStyleScientificWithMinFractionDigitsTooSmallNoDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        minFractionDigits: -2
    });
    
    assertNotNull(fmt);
    
    assertEquals("1E+28", fmt.format(10000000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificWithMinFractionDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        minFractionDigits: 25
    });
    
    assertNotNull(fmt);
    
    // max is 20
    assertEquals("1.23400000000000000000E+28", fmt.format(12340000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23456E+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234E+28", fmt.format(12345000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234E-6", fmt.format(0.0000012345));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.235E+28", fmt.format(12345000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsTooSmall() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        minFractionDigits: 3
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.200E-6", fmt.format(0.0000012));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsTooBig() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        minFractionDigits: 3
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457E-6", fmt.format(0.00000123456789));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndMinFractionDigitsJustRight() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        minFractionDigits: 3
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.2345E-6", fmt.format(0.0000012345));
}

function testNumFmtNumberStyleNogroupingInteger() {
    var fmt = new ilib.NumFmt({
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789", fmt.format(123456789));
}

function testNumFmtNumberStyleNogroupingFloat() {
    var fmt = new ilib.NumFmt({
        style: "nogrouping"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789.345345", fmt.format(123456789.345345));
}

function testNumFmtNumberStyleNogroupingWithLocale() {
    var fmt = new ilib.NumFmt({
    	locale: "fa-IR",
        style: "nogrouping",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertEquals("2014", fmt.format(2014));
}

function testNumFmtNumberStyleNogroupingWithNative() {
    var fmt = new ilib.NumFmt({
    	locale: "fa-IR",
        style: "nogrouping",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertEquals("۱۳۹۳", fmt.format(1393));
}

function testNumFmtNumberStyleNogroupingWithMaxFrac() {
    var fmt = new ilib.NumFmt({
        style: "nogrouping",
        maxFractionDigits: 3
    });
    
    assertNotNull(fmt);
    
    assertEquals("123456789.346", fmt.format(123456789.345945345));
}

function testNumFmtNumberFormatRoundingCeiling() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "ceiling"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingCeilingNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "ceiling"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingDown() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingDownNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingFloor() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "floor"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingFloorNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "floor"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingUp() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.74475));
}

function testNumFmtNumberFormatRoundingUpNeg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.74475));
}

function testNumFmtNumberFormatRoundingHalfdownReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.746));
}

function testNumFmtNumberFormatRoundingHalfdownAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfdownNegReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.746));
}

function testNumFmtNumberFormatRoundingHalfdownNegAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.74", fmt.format(-1.745));
}

function testNumFmtNumberFormatRoundinghalfdownLessThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.743));
}

function testNumFmtNumberFormatRoundinghalfdown5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundinghalfdownMoreThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    // still round to the even neighbour
    assertEquals("1.75", fmt.format(1.747));
}

function testNumFmtNumberFormatRoundinghalfdownExactly5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    // no rounding
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatRoundinghalfdownLessThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.753));
}

function testNumFmtNumberFormatRoundinghalfdown5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.755));
}

function testNumFmtNumberFormatRoundinghalfdownMoreThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    // still round to the even neighbour
    assertEquals("1.76", fmt.format(1.757));
}

function testNumFmtNumberFormatRoundingHalfoddLessThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.743));
}

function testNumFmtNumberFormatRoundingHalfodd5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfoddMoreThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // still round to the odd neighbour
    assertEquals("1.75", fmt.format(1.747));
}

function testNumFmtNumberFormatRoundingHalfoddExactly5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // no rounding
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatRoundingHalfoddLessThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.753));
}

function testNumFmtNumberFormatRoundingHalfodd5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.755));
}

function testNumFmtNumberFormatRoundingHalfoddMoreThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfodd"
    });
    
    assertNotNull(fmt);
    
    // still round to the odd neighbour
    assertEquals("1.76", fmt.format(1.757));
}

function testNumFmtNumberFormatRoundingHalfupReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.746));
}

function testNumFmtNumberFormatRoundingHalfupAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfupNegReg() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.746));
}

function testNumFmtNumberFormatRoundingHalfupNegAtHalf() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1.75", fmt.format(-1.745));
}

function testNumFmtNumberStyleStringArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with string arguments
    assertEquals("2,345,678,901,234,567", fmt.format("2345678901234567.0"));
}

function testNumFmtNumberStyleNumberObjectArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with a number object
    assertEquals("2,345,678,901,234,567", fmt.format(new Number(2345678901234567.0)));
}

function testNumFmtNumberStyleIlibNumberObjectArgument() {
    var fmt = new ilib.NumFmt({
        style: "standard"
    });
    
    assertNotNull(fmt);
    
    // should work with a number object
    assertEquals("2,345,678,901,234,567", fmt.format(new ilib.Number(2345678901234567.0)));
}

function testNumFmtGetUseNativeDefaultFalse() {
    var fmt = new ilib.NumFmt({
        locale: "en-US"
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeDefaultTrue() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN"
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeHasNativeButFalse() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN"
    });
    
    assertNotNull(fmt);
    
    // Tamil does have native digits, but they are not frequently used
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeHasNativeButFalse_OR_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN"
    });
    
    assertNotNull(fmt);
    
    // Oriya does have native digits, but they are not frequently used
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideTrue() {
    var fmt = new ilib.NumFmt({
        locale: "en-US",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitTrue() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.getUseNative());
}

function testNumFmtGetUseNativeExplicitFalse() {
    var fmt = new ilib.NumFmt({
        locale: "en-US",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtGetUseNativeOverrideFalse() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertFalse(fmt.getUseNative());
}

function testNumFmtFormatWesternDefault() {
    var fmt = new ilib.NumFmt({
        locale: "en-US"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtFormatWesternOverrideNative() {
    var fmt = new ilib.NumFmt({
        locale: "en-US",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtFormatNativeDefaultTrue() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("১২৩.৪৫৬", fmt.format(123.456));
}

function testNumFmtFormatNativeDefaultFalse_or_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN"
    });
    
    assertNotNull(fmt);
    
    // oriya has native digits, but they are not used by default
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtFormatNativeDefaultFalse() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN"
    });
    
    assertNotNull(fmt);
    
    // Tamil has native digits, but they are not used by default
    assertEquals("123.456", fmt.format(123.456));
}


function testNumFmtFormatNativeExplicitTrue() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertEquals("১২৩.৪৫৬", fmt.format(123.456));
}

function testNumFmtFormatNativeExplicitFalse() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtFormatNativeExplicitTrue2() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertEquals("௧௨௩.௪௫௬", fmt.format(123.456));
}

function testNumFmtFormatNativeExplicitTrue2_or_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN",
        useNative: true
    });
    
    assertNotNull(fmt);
    
    assertEquals("୧୨୩.୪୫୬", fmt.format(123.456));
}

function testNumFmtFormatNativeExplicitFalse2() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtFormatNativeExplicitFalse2_or_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN",
        useNative: false
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456", fmt.format(123.456));
}

function testNumFmtNumberFormatDESimple() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtDEIsGroupingUsed() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.isGroupingUsed());
}

function testNumFmtNumberFormatDEWithThousands() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234.567,745", fmt.format(1234567.745));
}

function testNumFmtNumberFormatDEWithThousandsWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123.456.789,4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatDEWithThousandsWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456.789,4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatFRSimple() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtNumberFormatFRWithThousands() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1 234 567,745", fmt.format(1234567.745));
}

function testNumFmtNumberFormatDESimple() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1,745", fmt.format(1.745));
}

function testNumFmtPercentageFormatRegular() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

function testNumFmtPercentageGetType() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("percentage", fmt.getType());
}

function testNumFmtPercentageFormatWithDecimal() {
    var fmt = new ilib.NumFmt({
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtPercentageFormatWithDecimalAndRounding() {
    var fmt = new ilib.NumFmt({
        type: "percentage",
        maxFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.789));
}

function testNumFmtPercentageFormatDERegular() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}

function testNumFmtPercentageFormatDEWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

function testNumFmtPercentageFormatDEWithDecimalAndRounding() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage",
        maxFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.789));
}

function testNumFmtCurrencyFormatDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.05", fmt.format(57.05));
}

function testNumFmtCurrencyFormatZeroCents() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.00", fmt.format(57));
}

function testNumFmtCurrencyGetType() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("currency", fmt.getType());
}

function testNumFmtCurrencyGetStyleDefault() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("common", fmt.getStyle());
}

function testNumFmtCurrencyFormatDefaultRounding() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.35", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 5,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.34600", fmt.format(57.346));
}

function testNumFmtCurrencyFormatOverrideMaxFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        maxFractionDigits: 0,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinAndMaxFraction() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 3,
        maxFractionDigits: 3,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.347", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatOverrideMinAndMaxFractionWonky() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        minFractionDigits: 4,
        maxFractionDigits: 3,
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$57.347", fmt.format(57.3467));
}

function testNumFmtCurrencyFormatAlternateStyle() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        style: "iso",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("USD57.35", fmt.format(57.35));
}

function testNumFmtCurrencyFormatOtherCurrency() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("€57.35", fmt.format(57.35));
}

function testNumFmtCurrencyFormatOtherCurrencyIsoStyle() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "EUR",
        style: "iso"
    });
    
    assertNotNull(fmt);
    
    assertEquals("EUR57.35", fmt.format(57.35));
}

function testNumFmtCurrencyGetDefaultFractionDigits() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals(2, fmt.getMaxFractionDigits());
    assertEquals(2, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyGetFractionDigitsOtherCurrency() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "JPY"  // Japanese yen
    });
    
    assertNotNull(fmt);
    
    assertEquals(0, fmt.getMaxFractionDigits());
    assertEquals(0, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatOtherCurrencyUseDefaultDigits() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        currency: "JPY"  // japanese yen use 0 fraction digits
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥345", fmt.format(345.3));
}

function testNumFmtCurrencyNoCurrencyDefaultForLocale() {
    var fmt;
    
    try {
    	fmt = new ilib.NumFmt({
	        type: "currency",
	        locale: "ja-JP"
	    });

    	fail();
    } catch (e) {
    	assertUndefined(fmt);
    	assertEquals("A currency property is required in the options to the number formatter constructor when the type property is set to currency.", e);
    }
}

function testNumFmtCurrencyUseCorrectFractionDigitsForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ja-JP",
        currency: "JPY"
    });
    
    assertNotNull(fmt);
    
    assertEquals(0, fmt.getMaxFractionDigits());
    assertEquals(0, fmt.getMinFractionDigits());
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ja-JP",
        currency: "JPY"
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥345", fmt.format(345.3));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-CA",
        currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 000,00 $", fmt.format(100000.00));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocalefr_CA1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-CA",
        currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 $", fmt.format(100110.57));
}

function testNumFmtCurrencyUseCorrectRoundingModeForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zxx-XX",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("halfdown", fmt.getRoundingMode());
}

function testNumFmtJAIsGroupingUsed() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertTrue(fmt.isGroupingUsed());
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroups() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegative() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsja() {
    var fmt = new ilib.NumFmt({
        locale: "ja"
    });
    
    assertNotNull(fmt);
    
    assertEquals("123,456,789.4", fmt.format(123456789.4));
}

function testNumFmtNumberFormatJAWithThousandsWithMultiGroupsNegativeja() {
    var fmt = new ilib.NumFmt({
        locale: "ja"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456,789.4", fmt.format(-123456789.4));
}

function testNumFmtNumberFormatJALessThanOne() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("0.7", fmt.format(0.7));
}

function testNumFmtNumberFormatJALessThanOneNegative() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("-0.7", fmt.format(-0.7));
}

// test all of tier 1 locales and a number of the tier 2 and lower locales
function testNumFmtzhCN() {
    var fmt = new ilib.NumFmt({
        locale: "zh-CN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtenIN() {
    var fmt = new ilib.NumFmt({
        locale: "en-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,23,456.78", fmt.format(-123456.785));
}



function testNumFmtasIN() {
    var fmt = new ilib.NumFmt({
        locale: "as-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-১,২৩,৪৫৬.৭৮", fmt.format(-123456.785));
}


/***************** test cases written by Birendra 3/6/2013 *******************************************/
//test acses for hi-IN
function testNumFmthi_IN() {
    var fmt = new ilib.NumFmt({
        locale: "hi-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,12,34,56,13,232.78", fmt.format(-112345613232.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_hi_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "hi-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_hi_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "hi-IN",
	useNative: true,
	currency: "INR"
    });
   
    assertNotNull(fmt);
    
    assertEquals("₹१,००,११०.५७", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_hi_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "hi-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹१,००,११०.५७", fmt.format(100110.57));
}

//test cases for bn-IN

function testNumFmtbn_IN() {
    var fmt = new ilib.NumFmt({
        locale: "bn-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-১,১২,৩৪,৫৬,১৩,২৩২.৭৮", fmt.format(-112345613232.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_bn_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "bn-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("১,০০,১১০.৫৭₹", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_bn_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "bn-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("১,০০,১১০.৫৭₹", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_bn_IN() {
    var fmt = new ilib.NumFmt({
	locale: "bn-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("৫৭.৮%", fmt.format(57.8));
}

//test cases for mr-IN

function testNumFmt_mr_IN() {
    var fmt = new ilib.NumFmt({
        locale: "mr-IN",
        useNative: false,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}

function testNumFmtNative_mr_IN() {
    var fmt = new ilib.NumFmt({
        locale: "mr-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-१२,३४,५६८.७८", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_mr_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "mr-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹१,००,११०.५७", fmt.format(100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_mr_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "mr-IN",
        useNative: false,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNativeCorrectCurrencyForLocale_mr_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "mr-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹१,००,११०.५७", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_mr_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "mr-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹१,००,११०.५७", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_mr_IN() {
    var fmt = new ilib.NumFmt({
	locale: "mr-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("५७.८%", fmt.format(57.8));
}

function testNumFmtPercentageNativeFormatRegular_mr_IN() {
    var fmt = new ilib.NumFmt({
	locale: "mr-IN",
	useNative: false,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}


//test cases for kn-IN

function testNumFmt_kn_IN() {
    var fmt = new ilib.NumFmt({
        locale: "kn-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,234,568.78", fmt.format(-1234568.78));
}

function testNumFmtNative_kn_IN() {
    var fmt = new ilib.NumFmt({
        locale: "kn-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-೧,೨೩೪,೫೬೮.೭೮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_kn_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "kn-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹೧೦೦,೧೧೦.೫೭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_kn_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "kn-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹೧೦೦,೧೧೦.೫೭)", fmt.format(-100110.57));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_kn_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "kn-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹100,110.57", fmt.format(100110.57));
}

function testNumFmtPercentageFormatRegular_kn_IN() {
    var fmt = new ilib.NumFmt({
	locale: "kn-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("೫೭.೮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_kn_IN() {
    var fmt = new ilib.NumFmt({
	locale: "kn-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for gu-IN

function testNumFmt_gu_IN() {
    var fmt = new ilib.NumFmt({
        locale: "gu-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_gu_IN() {
    var fmt = new ilib.NumFmt({
        locale: "gu-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-૧૨,૩૪,૫૬૮.૭૮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_gu_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "gu-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹૧,૦૦,૧૧૦.૫૭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_gu_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "gu-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹૧,૦૦,૧૧૦.૫૭)", fmt.format(-100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_gu_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "gu-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_gu_IN() {
    var fmt = new ilib.NumFmt({
	locale: "gu-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("૫૭.૮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_gu_IN() {
    var fmt = new ilib.NumFmt({
	locale: "gu-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for ta-IN

function testNumFmt_ta_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_ta_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ta-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-௧௨,௩௪,௫௬௮.௭௮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_ta_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ta-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹௧,௦௦,௧௧௦.௫௭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ta_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ta-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹௧,௦௦,௧௧௦.௫௭)", fmt.format(-100110.57));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ta_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ta-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_ta_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ta-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("௫௭.௮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_ta_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ta-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for or-IN

function testNumFmt_or_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_or_IN() {
    var fmt = new ilib.NumFmt({
        locale: "or-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-୧୨,୩୪,୫୬୮.୭୮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_or_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "or-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹୧,୦୦,୧୧୦.୫୭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_or_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "or-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹୧,୦୦,୧୧୦.୫୭)", fmt.format(-100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_or_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "or-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_or_IN() {
    var fmt = new ilib.NumFmt({
	locale: "or-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("୫୭.୮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_or_IN() {
    var fmt = new ilib.NumFmt({
	locale: "or-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for ha-Latn-NG

function testNumFmt_ha_Latn_NG() {
    var fmt = new ilib.NumFmt({
        locale: "ha-Latn-NG",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-1,234,568.78", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatCurrencyForLocale_ha_Latn_NG1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ha-Latn-NG",	
	currency: "NGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₦ 100,110.57", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeCurrencyForLocale_ha_Latn_NG1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ha-Latn-NG",
	currency: "NGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₦100,110.57)", fmt.format(-100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ha_Latn_NG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ha-Latn-NG",
	currency: "NGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₦ 100,110.57", fmt.format(100110.57));
}

function testNumFmtPercentageFormatRegular_ha_Latn_NG() {
    var fmt = new ilib.NumFmt({
	locale: "ha-Latn-NG",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}
//test acses for ml-IN

function testNumFmt_ml_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ml-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_ml_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ml-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-൧൨,൩൪,൫൬൮.൭൮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_ml_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ml-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹൧,൦൦,൧൧൦.൫൭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ml_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ml-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹൧,൦൦,൧൧൦.൫൭)", fmt.format(-100110.57));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ml_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ml-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}

function testNumFmtPercentageFormatRegular_ml_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ml-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("൫൭.൮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_ml_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ml-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for te-IN

function testNumFmt_te_IN() {
    var fmt = new ilib.NumFmt({
        locale: "te-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_te_IN() {
    var fmt = new ilib.NumFmt({
        locale: "te-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-౧౨,౩౪,౫౬౮.౭౮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_te_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "te-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹౧,౦౦,౧౧౦.౫౭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_te_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "te-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹౧,౦౦,౧౧౦.౫౭)", fmt.format(-100110.57));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_te_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "te-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_te_IN() {
    var fmt = new ilib.NumFmt({
	locale: "te-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("౫౭.౮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_te_IN() {
    var fmt = new ilib.NumFmt({
	locale: "te-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for pa-IN

function testNumFmt_pa_IN() {
    var fmt = new ilib.NumFmt({
        locale: "pa-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-12,34,568.78", fmt.format(-1234568.78));
}


function testNumFmtNative_pa_IN() {
    var fmt = new ilib.NumFmt({
        locale: "pa-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-੧੨,੩੪,੫੬੮.੭੮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_pa_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pa-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹੧,੦੦,੧੧੦.੫੭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_pa_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pa-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹੧,੦੦,੧੧੦.੫੭)", fmt.format(-100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_pa_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pa-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_pa_IN() {
    var fmt = new ilib.NumFmt({
	locale: "pa-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("੫੭.੮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_pa_IN() {
    var fmt = new ilib.NumFmt({
	locale: "pa-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

//test cases for ur-IN

function testNumFmt_ur_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ur-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-۱۲,۳۴,۵۶۸.۷۸", fmt.format(-1234568.78));
}


function testNumFmtNative_ur_IN() {
    var fmt = new ilib.NumFmt({
        locale: "ur-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-۱۲,۳۴,۵۶۸.۷۸", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_ur_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ur-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹۱,۰۰,۱۱۰.۵۷", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_ur_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ur-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹۱,۰۰,۱۱۰.۵۷)", fmt.format(-100110.57));
}


function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ur_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ur-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
   
    assertEquals("₹۱,۰۰,۱۱۰.۵۷", fmt.format(100110.57));
}


function testNumFmtPercentageFormatRegular_ur_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ur-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("۵۷.۸%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_ur_IN() {
    var fmt = new ilib.NumFmt({
	locale: "ur-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("۵۷.۸%", fmt.format(57.8));
}

//test cases for as-IN


function testNumFmt_as_IN() {
    var fmt = new ilib.NumFmt({
        locale: "as-IN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-১২,৩৪,৫৬৮.৭৮", fmt.format(-1234568.78));
}


function testNumFmtNative_as_IN() {
    var fmt = new ilib.NumFmt({
        locale: "as-IN",
	useNative: true,
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-১২,৩৪,৫৬৮.৭৮", fmt.format(-1234568.78));
}

function testNumFmtCurrencyFormatNativeCurrencyForLocale_as_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "as-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹১,০০,১১০.৫৭", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatNegativeNativeCurrencyForLocale_as_IN1() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "as-IN",
	useNative: true,
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₹১,০০,১১০.৫৭)", fmt.format(-100110.57));
}

function testNumFmtPercentageFormatRegular_as_IN() {
    var fmt = new ilib.NumFmt({
	locale: "as-IN",
	useNative: true,
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("৫৭.৮%", fmt.format(57.8));
}


function testNumFmtPercentageNativeFormatRegular_as_IN() {
    var fmt = new ilib.NumFmt({
	locale: "as-IN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("৫৭.৮%", fmt.format(57.8));
}


//test cases for en-US
function testNumFmt_en_US() {
    var fmt = new ilib.NumFmt({
        locale: "en-US",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_US() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-US",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_US() {
    var fmt = new ilib.NumFmt({
	locale: "en-US",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}


//test cases for en-GB

function testNumFmtenGB() {
    var fmt = new ilib.NumFmt({
        locale: "en-GB",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_GB() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-GB",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_GB() {
    var fmt = new ilib.NumFmt({
	locale: "en-GB",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}


//test cases for ko-KR

function testNumFmtko_KR() {
    var fmt = new ilib.NumFmt({
        locale: "ko-KR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocaleko_KR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ko-KR",
        currency: "KRW",
	maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("₩100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ko_KR() {
    var fmt = new ilib.NumFmt({
	locale: "ko-KR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for zh-Hans-CN
function testNumFmt_zh_Hans_CN() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hans-CN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hans_CN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-Hans-CN",
        currency: "CNY"
    });
    
    assertNotNull(fmt);

    assertEquals("¥100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zh_Hans_CN() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hans-CN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for honk-kong

function testNumFmt_zh_Hant_HK() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hant-HK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hant_HK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-Hant-HK",
	style: "iso",
        currency: "HKD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("HKD100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zh_Hant_HK() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hant-HK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//zh-Hank-TW

function testNumFmt_zh_Hant_TW() {
    var fmt = new ilib.NumFmt({
        locale: "zh-Hant-TW",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_zh_Hant_TW() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "zh-Hant-TW",
	style: "iso",
        currency: "TWD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("TWD100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_zh_Hant_TW() {
    var fmt = new ilib.NumFmt({
	locale: "zh-Hant-TW",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for fr-FR
function testNumFmt_fr_FR() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_fr_FR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fr-FR",
	currency: "CAD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 $", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_fr_FR() {
    var fmt = new ilib.NumFmt({
	locale: "fr-FR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}

//test cases for pt-BR
function testNumFmt_pt_BR() {
    var fmt = new ilib.NumFmt({
        locale: "pt-BR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}


function testNumFmtPercentageFormatRegular_pt_BR() {
    var fmt = new ilib.NumFmt({
	locale: "pt-BR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,21%", fmt.format(57.21));
}
function testNumFmtCurrencyFormatCorrectCurrencyForLocale_pt_BR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pt-BR",
	currency: "BRL"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R$100.110,57", fmt.format(100110.57));
}
//test cases for pt-PT
function testNumFmt_pt_PT() {
    var fmt = new ilib.NumFmt({
        locale: "pt-PT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_pt_PT() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pt-PT",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 €", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_pt_PT() {
    var fmt = new ilib.NumFmt({
	locale: "pt-PT",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for es-ES
function testNumFmt_es_ES() {
    var fmt = new ilib.NumFmt({
        locale: "es-ES",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_ES() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-ES",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 €", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_ES() {
    var fmt = new ilib.NumFmt({
	locale: "es-ES",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for es-CO
function testNumFmt_es_CO() {
    var fmt = new ilib.NumFmt({
        locale: "es-CO",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_CO() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-CO",
	currency: "COP"
    });
    
    assertNotNull(fmt);

    assertEquals("$100.111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_CO() {
    var fmt = new ilib.NumFmt({
	locale: "es-CO",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for ja-JP
function testNumFmt_ja_JP() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ja_JP() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ja-JP",
	currency: "JPY"
    });
    
    assertNotNull(fmt);
    
    assertEquals("¥100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ja_JP() {
    var fmt = new ilib.NumFmt({
	locale: "ja-JP",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}

//test cases for itIT
function testNumFmt_it_IT() {
    var fmt = new ilib.NumFmt({
        locale: "it-IT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_it_IT() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "it-IT",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 €", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_it_IT() {
    var fmt = new ilib.NumFmt({
	locale: "it-IT",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//test cases for sv-SE
function testNumFmt_svSE() {
    var fmt = new ilib.NumFmt({
        locale: "sv-SE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_sv_SE() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "sv-SE",
	currency: "SEK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 kr", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_svSE() {
    var fmt = new ilib.NumFmt({
	locale: "sv-SE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for fi-FI
function testNumFmt_fi_FI() {
    var fmt = new ilib.NumFmt({
        locale: "fi-FI",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_fiFI() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fi-FI",
        currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 €", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_fiFI() {
    var fmt = new ilib.NumFmt({
    	locale: "fi-FI",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for cs-CZ
function testNumFmt_csCZ() {
    var fmt = new ilib.NumFmt({
        locale: "cs-CZ",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_cs_CZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "cs-CZ",
	currency: "CZK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 Kč", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_cs_CZ() {
    var fmt = new ilib.NumFmt({
	locale: "cs-CZ",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for el-GR
function testNumFmt_el_GR() {
    var fmt = new ilib.NumFmt({
        locale: "el-GR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_el_GR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "el-GR",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("€100.110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_el_GR() {
    var fmt = new ilib.NumFmt({
	locale: "el-GR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//test cases for hu-HU
function testNumFmt_hu_Hu() {
    var fmt = new ilib.NumFmt({
        locale: "hu-HU",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_hu_Hu() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "hu-HU",
	currency: "HUF"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 Ft", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_hu_HU() {
    var fmt = new ilib.NumFmt({
	locale: "hu-HU",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//test cases for nl_NL
function testNumFmt_nl_NL() {
    var fmt = new ilib.NumFmt({
        locale: "nl-NL",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_nl_NL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "nl-NL",
	currency: "ANG"
    });
    
    assertNotNull(fmt);
    
    assertEquals("ƒ100.110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_nl_NL() {
    var fmt = new ilib.NumFmt({
	locale: "nl-NL",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//test cases for pl_PL
function testNumFmt_pl_PL() {
    var fmt = new ilib.NumFmt({
        locale: "pl-PL",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_pl_PL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pl-PL",
	currency: "PLN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 zł", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_pl_PL() {
    var fmt = new ilib.NumFmt({
	locale: "pl-PL",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57%", fmt.format(57.0));
}
//test cases for da-DK
function testNumFmt_da_DK() {
    var fmt = new ilib.NumFmt({
        locale: "da-DK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_da_DK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "da-DK",
	currency: "DKK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 kr", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_da_DK() {
    var fmt = new ilib.NumFmt({
	locale: "da-DK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}
//test cases for ro_RO
function testNumFmt_ro_RO() {
    var fmt = new ilib.NumFmt({
        locale: "ro-RO",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ro_RO() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ro-RO",
	currency: "RON"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 L", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ro_RO() {
    var fmt = new ilib.NumFmt({
	locale: "ro-RO",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57 %", fmt.format(57.0));
}



//test cases for en-IN
function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹1,00,110.57", fmt.format(100110.57));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_as_IN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "as-IN",
	currency: "INR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₹১,০০,১১০.৫৭", fmt.format(100110.57));
}

//test cases for ar-SA
function testNumFmt_ar_SA() {
    var fmt = new ilib.NumFmt({
        locale: "ar-SA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-١٢٣٬٤٥٦٫٧٨", fmt.format(-123456.785));
}

/*function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ar_SA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ar-SA",
	currency: "SAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("ر.س 100٬110٫57", fmt.format(100110.57));
}*/
function testNumFmtPercentageFormatRegular_ar_SA() {
    var fmt = new ilib.NumFmt({
	locale: "ar-SA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("٥٧٫٨%", fmt.format(57.8));
}

//test cases for bg-BG
function testNumFmt_bg_BG() {
    var fmt = new ilib.NumFmt({
        locale: "bg-BG",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_bg_BG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "bg-BG",
	currency: "BGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 лв", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_bg_BG() {
    var fmt = new ilib.NumFmt({
	locale: "bg-BG",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for bs-Latn-BA
function testNumFmt_bs_Latn_BA() {
    var fmt = new ilib.NumFmt({
        locale: "bs-Latn-BA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_bs_Latn_BA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "bs-Latn-BA",
	currency: "BAM"
    });
    
    assertNotNull(fmt);

    assertEquals("100.110,57 KM", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_bs_Latn_BA() {
    var fmt = new ilib.NumFmt({
	locale: "bs-Latn-BA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for de-DE
function testNumFmt_de_DE() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_de_DE() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "de-DE",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 €", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_de_DE() {
    var fmt = new ilib.NumFmt({
	locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

//test cases for et-EE
function testNumFmt_et_EE() {
    var fmt = new ilib.NumFmt({
        locale: "et-EE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_et_EE() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "et-EE",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 €", fmt.format(100110.57));
}


function testNumFmtCurrencyFormatCorrectNegativeCurrencyForLocale_cs_CZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "cs-CZ",
	currency: "CZK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(Kč100 110,57)", fmt.format(-100110.57));
}
function testNumFmtPercentageFormatRegular_et_EE() {
    var fmt = new ilib.NumFmt({
	locale: "et-EE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for fa-IR
function testNumFmt_fa_IR() {
    var fmt = new ilib.NumFmt({
        locale: "fa-IR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-۱۱۱٬۱۲۳٬۴۵۶٫۷۸", fmt.format(-111123456.785));
}

/*function testNumFmtCurrencyFormatCorrectCurrencyForLocale_fa_IR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "fa-IR",
	currency: "IRR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("﷼100٬110٫57", fmt.format(100110.57));
}*/
function testNumFmtPercentageFormatRegular_fa_IR() {
    var fmt = new ilib.NumFmt({
	locale: "fa-IR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("۵۷٫۸%", fmt.format(57.8));
}

//test cases for ga-IE
function testNumFmt_ga_IE() {
    var fmt = new ilib.NumFmt({
        locale: "ga-IE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ga_IE() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ga-IE",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("€100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ga_IE() {
    var fmt = new ilib.NumFmt({
	locale: "ga-IE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}
//test cases for he-IL
function testNumFmt_he_IL() {
    var fmt = new ilib.NumFmt({
        locale: "he-IL",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_he_IL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "he-IL",
	currency: "ILS"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 ₪", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_he_IL() {
    var fmt = new ilib.NumFmt({
	locale: "he-IL",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}
//test cases for hr-HR
function testNumFmt_hr_HR() {
    var fmt = new ilib.NumFmt({
        locale: "hr-HR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111.123.456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_hr_HR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "hr-HR",
	currency: "HRK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100.110,57 kn", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_hr_HR() {
    var fmt = new ilib.NumFmt({
	locale: "hr-HR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}

//test cases for id-ID
function testNumFmt_id_ID() {
    var fmt = new ilib.NumFmt({
        locale: "id-ID",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111.123.456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_id_ID() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "id-ID",
	currency: "IDR"
    });
    
    assertNotNull(fmt);

    assertEquals("Rp100.111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_id_ID() {
    var fmt = new ilib.NumFmt({
	locale: "id-ID",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}

//test cases for kk-Cyrl-KZ
function testNumFmt_kk_Cyrl_KZ () {
    var fmt = new ilib.NumFmt({
        locale: "kk-Cyrl-KZ",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_kk_Cyrl_KZ () {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "kk-Cyrl-KZ",
	currency: "KZT"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 ₸", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_kk_Cyrl_KZ () {
    var fmt = new ilib.NumFmt({
	locale: "kk-Cyrl-KZ",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for lt-LT
function testNumFmt_lt_LT() {
    var fmt = new ilib.NumFmt({
        locale: "lt-LT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_lt_LT() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "lt-LT",
	currency: "LTL"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100 110,57 Lt", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_lt_LT() {
    var fmt = new ilib.NumFmt({
	locale: "lt-LT",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    assertEquals("57,8 %", fmt.format(57.8));
}

//test cases for lv-LV
function testNumFmt_lv_LV() {
    var fmt = new ilib.NumFmt({
        locale: "lv-LV",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_lv_LV() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "lv-LV",
    currency: "EUR"
    });
    
    assertNotNull(fmt);

    assertEquals("€100 110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_lv_LV() {
    var fmt = new ilib.NumFmt({
	locale: "lv-LV",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for mk-MK
function testNumFmt_mk_MK() {
    var fmt = new ilib.NumFmt({
        locale: "mk-MK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111.123.456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_mk_MK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "mk-MK",
	currency: "MKD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("ден100.110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_mk_MK() {
    var fmt = new ilib.NumFmt({
	locale: "mk-MK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}
//test cases for ms-MY
function testNumFmt_ms_MY() {
    var fmt = new ilib.NumFmt({
        locale: "ms-MY",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ms_MY() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ms-MY",
	currency: "MNT"
    });
    
    assertNotNull(fmt);

    assertEquals("₮100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ms_MY() {
    var fmt = new ilib.NumFmt({
	locale: "ms-MY",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}
//test cases for nb-NO
function testNumFmt_nb_NO() {
    var fmt = new ilib.NumFmt({
        locale: "nb-NO",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_nb_NO() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "nb-NO",
	currency: "NOK"
    });
    
    assertNotNull(fmt);
    
    assertEquals("kr100 110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_nb_NO() {
    var fmt = new ilib.NumFmt({
	locale: "nb-NO",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}
//test cases for ru-RU
function testNumFmtruRU() {
    var fmt = new ilib.NumFmt({
        locale: "ru-RU",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}
function testNumFmtCurrencyFormatCorrectCurrencyForLocale_ru_RU() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ru-RU",
	currency: "RUB"
    });
    
    assertNotNull(fmt);

    assertEquals("100 110,57 ₽", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_ru_RU() {
    var fmt = new ilib.NumFmt({
	locale: "ru-RU",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

//test cases for negative currency
function testNumFmtNegativeCurrencyFormatForLocale_nl_NL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "nl-NL",
	currency: "ANG"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(ƒ 100.110,57)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_pl_PL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pl-PL",
	currency: "PLN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(100 110,57 zł)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_US() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-US",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
     assertEquals("($100,110.57)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_et_EE() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "et-EE",
	currency: "EUR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(100 110,57 €)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_ko_KR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ko-KR",
	currency: "KRW",
	 maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₩100,110.57)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_ms_MY() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "ms-MY",
	currency: "MNT"
    });
    
    assertNotNull(fmt);

    assertEquals("(₮100,111)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_pt_BR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "pt-BR",
	currency: "BRL"
    });
    
    assertNotNull(fmt);
    
      assertEquals("(R$100.110,57)", fmt.format(-100110.57));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_EC() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-EC",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
      assertEquals("$-100.110,57", fmt.format(-100110.57));
}

//test cases for en-SL

function testNumFmt_en_SL() {
    var fmt = new ilib.NumFmt({
        locale: "en-SL",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SL",
	currency: "SLL"
    });
    
    assertNotNull(fmt);

    assertEquals("Le100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_SL() {
    var fmt = new ilib.NumFmt({
	locale: "en-SL",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_SL() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SL",
	currency: "SLL"
    });
    
    assertNotNull(fmt);

    assertEquals("(Le100,111)", fmt.format(-100110.57));
}

//test cases for en-SG


function testNumFmt_en_SG() {
    var fmt = new ilib.NumFmt({
        locale: "en-SG",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SG",
	currency: "SGD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_SG() {
    var fmt = new ilib.NumFmt({
	locale: "en-SG",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_SG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SG",
	currency: "SGD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}

//test caes for en-ZA
function testNumFmt_en_ZA() {
    var fmt = new ilib.NumFmt({
        locale: "en-ZA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111 123 456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_ZA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-ZA",
	currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("R100 110,57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_ZA() {
    var fmt = new ilib.NumFmt({
	locale: "en-ZA",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_ZA() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-ZA",
	currency: "ZAR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(R100 110,57)", fmt.format(-100110.57));
}

//test cases for en-MY

function testNumFmt_en_MY() {
    var fmt = new ilib.NumFmt({
        locale: "en-MY",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_MY() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-MY",
	currency: "MYR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("RM100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_MY() {
    var fmt = new ilib.NumFmt({
	locale: "en-MY",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_MY() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-MY",
	currency: "MYR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(RM100,110.57)", fmt.format(-100110.57));
}

//test cases for en-MM

function testNumFmt_en_MM() {
    var fmt = new ilib.NumFmt({
        locale: "en-MM",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_MM() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-MM",
	currency: "MMK"
    });
    
    assertNotNull(fmt);

    assertEquals("K100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_MM() {
    var fmt = new ilib.NumFmt({
	locale: "en-MM",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_MM() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-MM",
	currency: "MMK"
    });
    
    assertNotNull(fmt);

    assertEquals("(K100,111)", fmt.format(-100110.57));
}

//test cases for en-NZ

function testNumFmt_en_NZ() {
    var fmt = new ilib.NumFmt({
        locale: "en-NZ",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_NZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-NZ",
	currency: "NZD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_NZ() {
    var fmt = new ilib.NumFmt({
	locale: "en-NZ",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_NZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-NZ",
	currency: "NZD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}

//test cases for en-NG
function testNumFmt_en_NG() {
    var fmt = new ilib.NumFmt({
        locale: "en-NG",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_NG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-NG",
	currency: "NGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₦100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_NG() {
    var fmt = new ilib.NumFmt({
	locale: "en-NG",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_NG() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-NG",
	currency: "NGN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₦100,110.57)", fmt.format(-100110.57));
}

//test cases for en-PK

function testNumFmt_en_PK() {
    var fmt = new ilib.NumFmt({
        locale: "en-PK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-11,11,23,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PK",
	currency: "PKR"
    });
    
    assertNotNull(fmt);

    assertEquals("Rs1,00,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_PK() {
    var fmt = new ilib.NumFmt({
	locale: "en-PK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_PK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PK",
	currency: "PKR"
    });
    
    assertNotNull(fmt);

    assertEquals("(Rs1,00,111)", fmt.format(-100110.57));
}

//test cases for en-PH

function testNumFmt_en_PH() {
    var fmt = new ilib.NumFmt({
        locale: "en-PH",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PH() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PH",
	currency: "PHP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("₱100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_PH() {
    var fmt = new ilib.NumFmt({
	locale: "en-PH",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_PH() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PH",
	currency: "PHP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(₱100,110.57)", fmt.format(-100110.57));
}
//test cases for en-PR

function testNumFmt_en_PR() {
    var fmt = new ilib.NumFmt({
        locale: "en-PR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_PR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PR",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("$100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_PR() {
    var fmt = new ilib.NumFmt({
	locale: "en-PR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_PR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-PR",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}

//test cases for en-RW
function testNumFmt_en_RW() {
    var fmt = new ilib.NumFmt({
        locale: "en-RW",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_RW() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-RW",
	currency: "RWF"
    });
    
    assertNotNull(fmt);

    assertEquals("RF100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_RW() {
    var fmt = new ilib.NumFmt({
	locale: "en-RW",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_RW() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-RW",
	currency: "RWF"
    });
    
    assertNotNull(fmt);

    assertEquals("(RF100,111)", fmt.format(-100110.57));
}

//test cases for en-LK

function testNumFmt_en_LK() {
    var fmt = new ilib.NumFmt({
        locale: "en-LK",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_LK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-LK",
	currency: "LKR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Rs100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_LK() {
    var fmt = new ilib.NumFmt({
	locale: "en-LK",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_LK() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-LK",
	currency: "LKR"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(Rs100,110.57)", fmt.format(-100110.57));
}

//test cases for en-SD

function testNumFmt_en_SD() {
    var fmt = new ilib.NumFmt({
        locale: "en-SD",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_SD() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SD",
	currency: "SDG"
    });
    
    assertNotNull(fmt);
    
    assertEquals("£100,110.57", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_SD() {
    var fmt = new ilib.NumFmt({
	locale: "en-SD",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_SD() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-SD",
	currency: "SDG"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(£100,110.57)", fmt.format(-100110.57));
}

//test cases for en-TZ

function testNumFmt_en_TZ() {
    var fmt = new ilib.NumFmt({
        locale: "en-TZ",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_en_TZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-TZ",
	currency: "TZS"
    });
    
    assertNotNull(fmt);

    assertEquals("Sh100,111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_en_TZ() {
    var fmt = new ilib.NumFmt({
	locale: "en-TZ",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_en_TZ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "en-TZ",
	currency: "TZS"
    });
    
    assertNotNull(fmt);

    assertEquals("(Sh100,111)", fmt.format(-100110.57));
}

//test cases for es-CR

function testNumFmt_es_CR() {
    var fmt = new ilib.NumFmt({
        locale: "es-CR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111.123.456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_CR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-CR",
	currency: "CRC"
    });
    
    assertNotNull(fmt);

    assertEquals("₡100.111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_CR() {
    var fmt = new ilib.NumFmt({
	locale: "es-CR",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_CR() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-CR",
	currency: "CRC"
    });
    
    assertNotNull(fmt);

    assertEquals("(₡100.111)", fmt.format(-100110.57));
}

//test cases for es-DO

function testNumFmt_es_DO() {
    var fmt = new ilib.NumFmt({
        locale: "es-DO",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_DO() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-DO",
	currency: "DOP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 $", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_DO() {
    var fmt = new ilib.NumFmt({
	locale: "es-DO",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_DO() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-DO",
	currency: "DOP"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}


//test cases for es-SV

function testNumFmt_es_SV() {
    var fmt = new ilib.NumFmt({
        locale: "es-SV",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_SV() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-SV",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 $", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_SV() {
    var fmt = new ilib.NumFmt({
	locale: "es-SV",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_SV() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-SV",
	currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}

//test cases for es-GQ

function testNumFmt_es_GQ() {
    var fmt = new ilib.NumFmt({
        locale: "es-GQ",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111.123.456,78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_GQ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-GQ",
	currency: "XAF"
    });
    
    assertNotNull(fmt);
    
    assertEquals("Fr100.111", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_GQ() {
    var fmt = new ilib.NumFmt({
	locale: "es-GQ",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_GQ() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-GQ",
	currency: "XAF"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(Fr100.111)", fmt.format(-100110.57));
}
//test cases for es-GT

function testNumFmt_es_GT() {
    var fmt = new ilib.NumFmt({
        locale: "es-GT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_GT() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-GT",
	currency: "GTQ"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 Q", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_GT() {
    var fmt = new ilib.NumFmt({
	locale: "es-GT",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_GT() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-GT",
	currency: "GTQ"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(Q100,110.57)", fmt.format(-100110.57));
}

//test cases for es-HN

function testNumFmt_es_HN() {
    var fmt = new ilib.NumFmt({
        locale: "es-HN",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_HN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-HN",
	currency: "HNL"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 L", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_HN() {
    var fmt = new ilib.NumFmt({
	locale: "es-HN",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8 %", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_HN() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-HN",
	currency: "HNL"
    });
    
    assertNotNull(fmt);
    
    assertEquals("(L100,110.57)", fmt.format(-100110.57));
}

//test cases for es-MX

function testNumFmt_es_MX() {
    var fmt = new ilib.NumFmt({
        locale: "es-MX",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-111,123,456.78", fmt.format(-111123456.785));
}

function testNumFmtCurrencyFormatCorrectCurrencyForLocale_es_MX() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-MX",
	currency: "MXN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("100,110.57 $", fmt.format(100110.57));
}
function testNumFmtPercentageFormatRegular_es_MX() {
    var fmt = new ilib.NumFmt({
	locale: "es-MX",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57.8%", fmt.format(57.8));
}

function testNumFmtNegativeCurrencyFormatForLocale_es_MX() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "es-MX",
	currency: "MXN"
    });
    
    assertNotNull(fmt);
    
    assertEquals("($100,110.57)", fmt.format(-100110.57));
}
/******************************** End of test cases****************************************************/
function testNumFmt_en_GB() {
    var fmt = new ilib.NumFmt({
        locale: "en-GB",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmt_en_CA() {
    var fmt = new ilib.NumFmt({
        locale: "en-CA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmt_ja_JP() {
    var fmt = new ilib.NumFmt({
        locale: "ja-JP",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123,456.78", fmt.format(-123456.785));
}

function testNumFmt_pt_BR() {
    var fmt = new ilib.NumFmt({
        locale: "pt-BR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmt_de_DE() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}


function testNumFmt_id_ID() {
    var fmt = new ilib.NumFmt({
        locale: "id-ID",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmt_fr_FR() {
    var fmt = new ilib.NumFmt({
        locale: "fr-FR",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmt_fr_CA() {
    var fmt = new ilib.NumFmt({
        locale: "fr-CA",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123 456,78", fmt.format(-123456.785));
}

function testNumFmt_it_IT() {
    var fmt = new ilib.NumFmt({
        locale: "it-IT",
        maxFractionDigits: 2
    });
    
    assertNotNull(fmt);
    
    assertEquals("-123.456,78", fmt.format(-123456.785));
}

function testNumFmtAsyncDefaults() {
	var callbackCalled = false;
    new ilib.NumFmt({
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);

    	    assertEquals("number", fmt.getType());
    	    assertEquals(-1, fmt.getMaxFractionDigits());
    	    assertEquals(-1, fmt.getMinFractionDigits());
    	    assertTrue(fmt.isGroupingUsed());
    	    assertEquals("halfdown", fmt.getRoundingMode());
    	    assertUndefined(fmt.getCurrency());
    	    
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
}

function testNumFmtAsync() {
	var callbackCalled = false;
    new ilib.NumFmt({
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);
    	    assertEquals("12,345,678,901,234", fmt.format(12345678901234.0));
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
}

function testNumFmtAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.NumFmt({
        locale: "it-IT",
        maxFractionDigits: 2,
    	sync: false,
    	onLoad: function (fmt) {
    	    assertNotNull(fmt);
    	    assertEquals("-123.456,78", fmt.format(-123456.785));
    	    callbackCalled = true;
    	}
        
    });
    assertTrue(callbackCalled);
}
