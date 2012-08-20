/*
 * testnumfmt.js - test the number formatter object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testNumFmtNumberStyleScientific() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.2345678901234568e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmall() {
    var fmt = new ilib.NumFmt({
        style: "scientific"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234567890123456e-6", fmt.format(0.000001234567890123456));
}

function testNumFmtNumberStyleScientificWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxFractionDigits() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e-6", fmt.format(0.0000012345678901234567890123456789));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "up"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23457e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 5,
        roundingMode: "down"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.23456e+28", fmt.format(12345678901234567890123456789.0));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234e+28", fmt.format(12345000000000000000000000000.0));
}

function testNumFmtNumberStyleScientificSmallWithMaxAndRoundHalfDown() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.234e-6", fmt.format(0.0000012345));
}

function testNumFmtNumberStyleScientificWithMaxAndRoundHalfUp() {
    var fmt = new ilib.NumFmt({
        style: "scientific",
        maxFractionDigits: 3,
        roundingMode: "halfup"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.235e+28", fmt.format(12345000000000000000000000000.0));
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

function testNumFmtNumberFormatRoundingHalfevenLessThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.743));
}

function testNumFmtNumberFormatRoundingHalfeven5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.74", fmt.format(1.745));
}

function testNumFmtNumberFormatRoundingHalfevenMoreThan5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    // still round to the even neighbour
    assertEquals("1.75", fmt.format(1.747));
}

function testNumFmtNumberFormatRoundingHalfevenExactly5() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    // no rounding
    assertEquals("1.75", fmt.format(1.75));
}

function testNumFmtNumberFormatRoundingHalfevenLessThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.75", fmt.format(1.753));
}

function testNumFmtNumberFormatRoundingHalfeven5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
    });
    
    assertNotNull(fmt);
    
    assertEquals("1.76", fmt.format(1.755));
}

function testNumFmtNumberFormatRoundingHalfevenMoreThan5Up() {
    var fmt = new ilib.NumFmt({
        maxFractionDigits: 2,
        roundingMode: "halfeven"
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
    
    assertEquals("1 234 567,745", fmt.format(1234567.745));
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
    
    assertEquals("57 %", fmt.format(57.0));
}

function testNumFmtPercentageFormatDEWithDecimal() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage"
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.8));
}

function testNumFmtPercentageFormatDEWithDecimalAndRounding() {
    var fmt = new ilib.NumFmt({
        locale: "de-DE",
        type: "percentage",
        maxFractionDigits: 1
    });
    
    assertNotNull(fmt);
    
    assertEquals("57,8 %", fmt.format(57.789));
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
    
    assertEquals("USD 57.35", fmt.format(57.35));
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
    
    assertEquals("EUR 57.35", fmt.format(57.35));
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

function testNumFmtCurrencyUseCorrectRoundingModeForLocale() {
    var fmt = new ilib.NumFmt({
        type: "currency",
        locale: "xx-XX",
        currency: "USD"
    });
    
    assertNotNull(fmt);
    
    assertEquals("halfeven", fmt.getRoundingMode());
}

