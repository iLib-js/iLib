/*
 * testnumprs.js - test the number parsing routines
 *
 * Copyright © 2012-2016, JEDLSoft
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

var INumber = require("./../lib/INumber.js");

function testNumberConstructorDefault() {
    var num = new INumber("3.4");
    assertNotNull(num);
}

function testNumberConstructorWithPrimitiveNumber() {
    var num = new INumber(3.4);
    assertNotNull(num);
}

function testNumberConstructorWithNumber() {
    var num = new INumber(new Number(3.4));
    assertNotNull(num);
}

function testNumberConstructorWithIlibNumber() {
    var num = new INumber(new INumber("3.4"));
    assertNotNull(num);
}

function testNumberGetLocaleDefault() {
    var num = new INumber("3.4");
    assertNotNull(num);

    assertEquals("en-US", num.getLocale().getSpec());
}

function testNumberGetLocaleOther() {
    var num = new INumber("3.4", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals("de-DE", num.getLocale().getSpec());
}

function testNumberFloat() {
    var num = new INumber("3.4");
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithPrimitiveNumber() {
    var num = new INumber(3.4);
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithNumberObject() {
    var num = new INumber(new Number(3.4));
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithIlibNumberObject() {
    var num = new INumber(new INumber(3.4));
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatThousands() {
    var num = new INumber("1,233.4");
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatNegative() {
    var num = new INumber("-1233.4");
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatIgnoreInternalDashes() {
    var num = new INumber("123-33.4");
    assertNotNull(num);

    assertEquals(12333.4, num.valueOf());
}

function testNumberFloatIgnoreInternalDashesNegative() {
    var num = new INumber("-123-33.4");
    assertNotNull(num);

    assertEquals(-12333.4, num.valueOf());
}

function testNumberFloatThousandsNoFormatting() {
    var num = new INumber("1233.4");
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatThousandsBogusFormatting() {
    var num = new INumber("1,2,3,3,.4");
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatInvalid() {
    var num = new INumber("1.A4");
    assertNotNull(num);

    // just parse what you can and ignore the rest
    assertEquals(1.4, num.valueOf());
}

function testNumberFloatStartsWithDecimal() {
    var num = new INumber(".4342");
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatStartsWithZero() {
    var num = new INumber("0.4342");
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatStartsWithDecimalNegative() {
    var num = new INumber("-.4342");
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatStartsWithZeroNegative() {
    var num = new INumber("-0.4342");
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}


function testNumberInt() {
    var num = new INumber("123");
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberIntThousands() {
    var num = new INumber("123,456");
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalid() {
    var num = new INumber("123.234.234");
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmpty() {
    var num = new INumber("");
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentage() {
    var num = new INumber("58.3%", {type: "percentage"});
    assertNotNull(num);

    assertEquals(0.583, num.valueOf());
}

function testNumberPercentageNegative() {
    var num = new INumber("-58.3%", {type: "percentage"});
    assertNotNull(num);

    assertEquals(-0.583, num.valueOf());
}

function testNumberPercentageNoTypeSpecified() {
    var num = new INumber("58.3%");
    assertNotNull(num);

    assertEquals(58.3, num.valueOf());
}

function testNumberCurrencyValue() {
    var num = new INumber("$5.80", {type: "currency"});
    assertNotNull(num);

    assertEquals(5.80, num.valueOf());
}

function testNumberCurrencyValueNegative1() {
    var num = new INumber("$-5.80", {type: "currency"});
    assertNotNull(num);

    assertEquals(-5.80, num.valueOf());
}

function testNumberCurrencyValueNegative2() {
    var num = new INumber("-$5.80", {type: "currency"});
    assertNotNull(num);

    assertEquals(-5.80, num.valueOf());
}

function testNumberCurrencyType() {
    var num = new INumber("$5.80", {type: "currency"});
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("USD", cur.getCode());
}

function testNumberCurrencyTypeUsingISOCode() {
    var num = new INumber("USD 5.80", {type: "currency"});
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("USD", cur.getCode());
}

function testNumberCurrencyNotForLocale() {
    var num = new INumber("£5.80", {type: "currency"});
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("GBP", cur.getCode());
}

function testNumberCurrencyForLocale() {
    var num = new INumber("£5.80", {locale: "ar-EG", type: "currency"});
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("GBP", cur.getCode());
}

function testNumberFloatDE() {
    var num = new INumber("3,4", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatDENegative() {
    var num = new INumber("-3,4", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloatDEThousands() {
    var num = new INumber("1.233,4", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatDEThousandsNegative() {
    var num = new INumber("-1.233,4", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatDEWithDashForZeros() {
    var num = new INumber("3,-", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloatDEStartsWithDecimal() {
    var num = new INumber(",4342", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithZero() {
    var num = new INumber("0,4342", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithDecimalNegative() {
    var num = new INumber("-,4342", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithZeroNegative() {
    var num = new INumber("-0,4342", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithPeriodIgnore() {
    var num = new INumber(".4342", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloatDEWithMDashForZeros() {
    var num = new INumber("3,—", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberIntDE() {
    var num = new INumber("123", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberIntDEThousands() {
    var num = new INumber("123.456", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalidDE() {
    var num = new INumber("123,234,234", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmptyDE() {
    var num = new INumber("", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentageDE() {
    var num = new INumber("58,4 %", {
        locale: "de-DE",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentageDENoTypeSpecified() {
    var num = new INumber("58,4 %", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrencyDEValue() {
    var num = new INumber("5,84 €", {
        locale: "de-DE",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrencyDEType() {
    var num = new INumber("5,84 €", {
        locale: "de-DE",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("EUR", cur.getCode());
}

function testNumberCurrencyDENoTypeSpecified() {
    var num = new INumber("5,84 €", {
        locale: "de-DE"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrencyDETypeUsingISOCode() {
    var num = new INumber("5,84 EUR", {
        locale: "de-DE",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("EUR", cur.getCode());
}

function testNumberZH() {
    var num = new INumber("12,3234", {
        locale: "zh-CN"
    });
    assertNotNull(num);

    assertEquals(123234.0, num.valueOf());
}

function testNumberZHDecimal() {
    var num = new INumber("12,3234.324", {
        locale: "zh-CN"
    });
    assertNotNull(num);

    assertEquals(123234.324, num.valueOf());
}


function testNumberParseAsync() {
    var callbackCalled = false;
    new INumber("-0,4342", {
        locale: "de-DE",
        sync: false,
        onLoad: function (num) {
            assertNotNull(num);

            assertEquals(-0.4342, num.valueOf());
            callbackCalled = true;
        }
    });
    assertTrue(callbackCalled);
}

function testNumberParseAsyncCurrency() {
    var callbackCalled = false;
    new INumber("5,84 EUR", {
        locale: "de-DE",
        type: "currency",
        sync: false,
        onLoad: function (num) {
            assertNotNull(num);

            var cur = num.getCurrency();
            assertNotUndefined(cur);
            assertEquals("EUR", cur.getCode());
            callbackCalled = true;
        }
    });
    assertTrue(callbackCalled);
}

/*Test cases for Afrikaans*/
function testNumberFloatAF() {
    var num = new INumber("3,4", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatAFNegative() {
    var num = new INumber("-3,4", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloatAFThousands() {
    var num = new INumber("1.233,4", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatAFThousandsNegative() {
    var num = new INumber("-1.233,4", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatAFWithDashForZeros() {
    var num = new INumber("3,-", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloatAFStartsWithDecimal() {
    var num = new INumber(",4342", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatAFStartsWithZero() {
    var num = new INumber("0,4342", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatAFStartsWithDecimalNegative() {
    var num = new INumber("-,4342", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatAFStartsWithZeroNegative() {
    var num = new INumber("-0,4342", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatAFStartsWithPeriodIgnore() {
    var num = new INumber(".4342", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloatAFWithMDashForZeros() {
    var num = new INumber("3,—", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberIntAF() {
    var num = new INumber("123", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberIntAFThousands() {
    var num = new INumber("123.456", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalidAF() {
    var num = new INumber("123,234,234", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmptyAF() {
    var num = new INumber("", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentageAF() {
    var num = new INumber("58,4 %", {
        locale: "af-ZA",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentageAFNoTypeSpecified() {
    var num = new INumber("58,4 %", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrencyAFValue() {
    var num = new INumber("R5,84", {
        locale: "af-ZA",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrencyAFType() {
    var num = new INumber("R5,84", {
        locale: "af-ZA",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("ZAR", cur.getCode());
}

function testNumberCurrencyAFNoTypeSpecified() {
    var num = new INumber("5,84 €", {
        locale: "af-ZA"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrencyAFTypeUsingISOCode() {
    var num = new INumber("5,84 ZAR", {
        locale: "af-ZA",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("ZAR", cur.getCode());
}
/*Nambian*/
/*Test cases for Afrikaans*/
function testNumberFloatNA() {
    var num = new INumber("3,4", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatNANegative() {
    var num = new INumber("-3,4", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloatNAThousands() {
    var num = new INumber("1.233,4", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatNAThousandsNegative() {
    var num = new INumber("-1.233,4", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatNAWithDashForZeros() {
    var num = new INumber("3,-", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloatNAStartsWithDecimal() {
    var num = new INumber(",4342", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatNAStartsWithZero() {
    var num = new INumber("0,4342", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatNAStartsWithDecimalNegative() {
    var num = new INumber("-,4342", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatNAStartsWithZeroNegative() {
    var num = new INumber("-0,4342", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatNAStartsWithPeriodIgnore() {
    var num = new INumber(".4342", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloatNAWithMDashForZeros() {
    var num = new INumber("3,—", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberIntNA() {
    var num = new INumber("123", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberIntNAThousands() {
    var num = new INumber("123.456", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalidNA() {
    var num = new INumber("123,234,234", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmptyNA() {
    var num = new INumber("", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentageNA() {
    var num = new INumber("58,4 %", {
        locale: "af-NA",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentageNANoTypeSpecified() {
    var num = new INumber("58,4 %", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrencyNAValue() {
    var num = new INumber("5,84 $", {
        locale: "af-NA",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrencyNAType() {
    var num = new INumber("$5,84", {
        locale: "af-NA",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("NAD", cur.getCode());
}

function testNumberCurrencyNANoTypeSpecified() {
    var num = new INumber("5,84 $", {
        locale: "af-NA"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrencyNATypeUsingISOCode() {
    var num = new INumber("5,84 NAD", {
        locale: "af-NA",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("NAD", cur.getCode());
}

// number parsing test cases for Hausa
function testNumberFloat_ha_Latn_NG() {
    var num = new INumber("3.4", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_Negative() {
    var num = new INumber("-3.4", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_Thousands() {
    var num = new INumber("1,233.4", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_ThousandsNegative() {
    var num = new INumber("-1,233.4", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_WithDashForZeros() {
    var num = new INumber("3.-", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_StartsWithDecimal() {
    var num = new INumber(".4342", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_StartsWithZero() {
    var num = new INumber("0.4342", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_StartsWithDecimalNegative() {
    var num = new INumber("-.4342", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_StartsWithZeroNegative() {
    var num = new INumber("-0.4342", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_StartsWithPeriodIgnore() {
    var num = new INumber(",4342", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloat_ha_Latn_NG_WithMDashForZeros() {
    var num = new INumber("3.—", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberInt_ha_Latn_NG_() {
    var num = new INumber("123", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberInt_ha_Latn_NG_Thousands() {
    var num = new INumber("123,456", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalid_ha_Latn_NG_() {
    var num = new INumber("123.234.234", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmpty_ha_Latn_NG_() {
    var num = new INumber("", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentage_ha_Latn_NG_() {
    var num = new INumber("58.4 %", {
        locale: "ha-Latn-NG",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentage_ha_Latn_NG_NoTypeSpecified() {
    var num = new INumber("58.4 %", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrency_ha_Latn_NG_Value() {
    var num = new INumber("5.84 ₦", {
        locale: "ha-Latn-NG",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrency_ha_Latn_NG_Type() {
    var num = new INumber("5.84 ₦", {
        locale: "ha-Latn-NG",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("NGN", cur.getCode());
}

function testNumberCurrency_ha_Latn_NG_NoTypeSpecified() {
    var num = new INumber("5.84 ₦", {
        locale: "ha-Latn-NG"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrency_ha_Latn_NG_TypeUsingISOCode() {
    var num = new INumber("5.84 NGN", {
        locale: "ha-Latn-NG",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("NGN", cur.getCode());
}

// number parsing test cases for Oriya
function testNumberFloat_or_IN() {
    var num = new INumber("3.4", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloat_or_INNegative() {
    var num = new INumber("-3.4", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloat_or_IN_Thousands() {
    var num = new INumber("1,233.4", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(1233.4, num.valueOf());
}

function testNumberFloat_or_IN_ThousandsNegative() {
    var num = new INumber("-1,233.4", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloat_or_IN_WithDashForZeros() {
    var num = new INumber("3.-", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloat_or_IN_StartsWithDecimal() {
    var num = new INumber(".4342", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloat_or_IN_StartsWithZero() {
    var num = new INumber("0.4342", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloat_or_IN_StartsWithDecimalNegative() {
    var num = new INumber("-.4342", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloat_or_IN_StartsWithZeroNegative() {
    var num = new INumber("-0.4342", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloat_or_IN_StartsWithPeriodIgnore() {
    var num = new INumber(",4342", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloat_or_IN_WithMDashForZeros() {
    var num = new INumber("3.—", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberInt_or_IN_() {
    var num = new INumber("123", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberInt_or_IN_Thousands() {
    var num = new INumber("123,456", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalid_or_IN_() {
    var num = new INumber("123.234.234", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmpty_or_IN_() {
    var num = new INumber("", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentage_or_IN_() {
    var num = new INumber("58.4 %", {
        locale: "or-IN",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentage_or_IN_NoTypeSpecified() {
    var num = new INumber("58.4 %", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrency_or_IN_Value() {
    var num = new INumber("5.84 ₹", {
        locale: "or-IN",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrency_or_IN_Type() {
    var num = new INumber("5.84 ₹", {
        locale: "or-IN",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("INR", cur.getCode());
}

function testNumberCurrency_or_IN_NoTypeSpecified() {
    var num = new INumber("5.84 ₹", {
        locale: "or-IN"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrency_or_IN_TypeUsingISOCode() {
    var num = new INumber("5.84 IND", {
        locale: "or-IN",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("INR", cur.getCode());
}
/*Amharic test cases */
function testNumberFloatET() {
    var num = new INumber("3.4", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(3.4, num.valueOf());
}

function testNumberFloatETNegative() {
    var num = new INumber("-3.4", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(-3.4, num.valueOf());
}

function testNumberFloatETThousands() {
    var num = new INumber("1.233.4", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(1.233, num.valueOf());
}

function testNumberFloatETThousandsNegative() {
    var num = new INumber("-1.2334", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(-1.2334, num.valueOf());
}

function testNumberFloatETWithDashForZeros() {
    var num = new INumber("3.-", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberFloatETStartsWithDecimal() {
    var num = new INumber(".4342", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatETStartsWithZero() {
    var num = new INumber("0.4342", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatETStartsWithDecimalNegative() {
    var num = new INumber("-.4342", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatETStartsWithZeroNegative() {
    var num = new INumber("-0.4342", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatETStartsWithPeriodIgnore() {
    var num = new INumber("4342", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(4342.0, num.valueOf());
}

function testNumberFloatETWithMDashForZeros() {
    var num = new INumber("3.—", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(3.0, num.valueOf());
}

function testNumberIntET() {
    var num = new INumber("123", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(123, num.valueOf());
}

function testNumberIntETThousands() {
    var num = new INumber("123,456", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(123456, num.valueOf());
}

function testNumberInvalidET() {
    var num = new INumber("123.234.234", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(123.234, num.valueOf());
}

function testNumberEmptyET() {
    var num = new INumber("", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(0, num.valueOf());
}

function testNumberPercentageET() {
    var num = new INumber("58.4 %", {
        locale: "am-ET",
        type: "percentage"
    });
    assertNotNull(num);

    assertEquals(0.584, num.valueOf());
}

function testNumberPercentageETNoTypeSpecified() {
    var num = new INumber("58.4 %", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertEquals(58.4, num.valueOf());
}

function testNumberCurrencyETValue() {
    var num = new INumber("5.84 Br", {
        locale: "am-ET",
        type: "currency"
    });
    assertNotNull(num);

    assertEquals(5.84, num.valueOf());
}

function testNumberCurrencyETType() {
    var num = new INumber("Br 5.84", {
        locale: "am-ET",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("ETB", cur.getCode());
}

function testNumberCurrencyETNoTypeSpecified() {
    var num = new INumber("5.84 €", {
        locale: "am-ET"
    });
    assertNotNull(num);

    assertUndefined(num.getCurrency());
}

function testNumberCurrencyETTypeUsingISOCode() {
    var num = new INumber("5.84 ETB", {
        locale: "am-ET",
        type: "currency"
    });
    assertNotNull(num);

    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("ETB", cur.getCode());
}
