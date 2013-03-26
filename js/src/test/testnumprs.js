/*
 * testnumprs.js - test the number parsing routines
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

function testNumberConstructorDefault() {
    var num = new ilib.Number("3.4");
    assertNotNull(num);
}

function testNumberConstructorWithPrimitiveNumber() {
    var num = new ilib.Number(3.4);
    assertNotNull(num);
}

function testNumberConstructorWithNumber() {
    var num = new ilib.Number(new Number(3.4));
    assertNotNull(num);
}

function testNumberConstructorWithIlibNumber() {
    var num = new ilib.Number(new ilib.Number("3.4"));
    assertNotNull(num);
}

function testNumberGetLocaleDefault() {
    var num = new ilib.Number("3.4");
    assertNotNull(num);
    
    assertEquals("en-US", num.getLocale().getSpec());
}

function testNumberGetLocaleOther() {
    var num = new ilib.Number("3.4", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals("de-DE", num.getLocale().getSpec());
}

function testNumberFloat() {
    var num = new ilib.Number("3.4");
    assertNotNull(num);
    
    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithPrimitiveNumber() {
    var num = new ilib.Number(3.4);
    assertNotNull(num);
    
    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithNumberObject() {
    var num = new ilib.Number(new Number(3.4));
    assertNotNull(num);
    
    assertEquals(3.4, num.valueOf());
}

function testNumberFloatWithIlibNumberObject() {
    var num = new ilib.Number(new ilib.Number(3.4));
    assertNotNull(num);
    
    assertEquals(3.4, num.valueOf());
}

function testNumberFloatThousands() {
    var num = new ilib.Number("1,233.4");
    assertNotNull(num);
    
    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatNegative() {
    var num = new ilib.Number("-1233.4");
    assertNotNull(num);
    
    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatIgnoreInternalDashes() {
    var num = new ilib.Number("123-33.4");
    assertNotNull(num);
    
    assertEquals(12333.4, num.valueOf());
}

function testNumberFloatIgnoreInternalDashesNegative() {
    var num = new ilib.Number("-123-33.4");
    assertNotNull(num);
    
    assertEquals(-12333.4, num.valueOf());
}

function testNumberFloatThousandsNoFormatting() {
    var num = new ilib.Number("1233.4");
    assertNotNull(num);
    
    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatThousandsBogusFormatting() {
    var num = new ilib.Number("1,2,3,3,.4");
    assertNotNull(num);
    
    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatInvalid() {
    var num = new ilib.Number("1.A4");
    assertNotNull(num);
    
    // just parse what you can and ignore the rest
    assertEquals(1.4, num.valueOf());
}

function testNumberFloatStartsWithDecimal() {
    var num = new ilib.Number(".4342");
    assertNotNull(num);
    
    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatStartsWithZero() {
    var num = new ilib.Number("0.4342");
    assertNotNull(num);
    
    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatStartsWithDecimalNegative() {
    var num = new ilib.Number("-.4342");
    assertNotNull(num);
    
    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatStartsWithZeroNegative() {
    var num = new ilib.Number("-0.4342");
    assertNotNull(num);
    
    assertEquals(-0.4342, num.valueOf());
}


function testNumberInt() {
    var num = new ilib.Number("123");
    assertNotNull(num);
    
    assertEquals(123, num.valueOf());
}

function testNumberIntThousands() {
    var num = new ilib.Number("123,456");
    assertNotNull(num);
    
    assertEquals(123456, num.valueOf());
}

function testNumberInvalid() {
    var num = new ilib.Number("123.234.234");
    assertNotNull(num);
    
    assertEquals(123.234, num.valueOf());
}

function testNumberEmpty() {
    var num = new ilib.Number("");
    assertNotNull(num);
    
    assertEquals(0, num.valueOf());
}

function testNumberPercentage() {
    var num = new ilib.Number("58.3%", {type: "percentage"});
    assertNotNull(num);
    
    assertEquals(0.583, num.valueOf());
}

function testNumberPercentageNegative() {
    var num = new ilib.Number("-58.3%", {type: "percentage"});
    assertNotNull(num);
    
    assertEquals(-0.583, num.valueOf());
}

function testNumberPercentageNoTypeSpecified() {
    var num = new ilib.Number("58.3%");
    assertNotNull(num);
    
    assertEquals(58.3, num.valueOf());
}

function testNumberCurrencyValue() {
    var num = new ilib.Number("$5.80", {type: "currency"});
    assertNotNull(num);
    
    assertEquals(5.80, num.valueOf());
}

function testNumberCurrencyValueNegative1() {
    var num = new ilib.Number("$-5.80", {type: "currency"});
    assertNotNull(num);
    
    assertEquals(-5.80, num.valueOf());
}

function testNumberCurrencyValueNegative2() {
    var num = new ilib.Number("-$5.80", {type: "currency"});
    assertNotNull(num);
    
    assertEquals(-5.80, num.valueOf());
}

function testNumberCurrencyType() {
    var num = new ilib.Number("$5.80", {type: "currency"});
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("USD", cur.getCode());
}

function testNumberCurrencyTypeUsingISOCode() {
    var num = new ilib.Number("USD 5.80", {type: "currency"});
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("USD", cur.getCode());
}

function testNumberCurrencyNotForLocale() {
    var num = new ilib.Number("£5.80", {type: "currency"});
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("GBP", cur.getCode());
}

function testNumberCurrencyForLocale() {
    var num = new ilib.Number("£5.80", {locale: "ar-EG", type: "currency"});
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("EGP", cur.getCode());
}

function testNumberFloatDE() {
    var num = new ilib.Number("3,4", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(3.4, num.valueOf());
}

function testNumberFloatDENegative() {
    var num = new ilib.Number("-3,4", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(-3.4, num.valueOf());
}

function testNumberFloatDEThousands() {
    var num = new ilib.Number("1.233,4", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(1233.4, num.valueOf());
}

function testNumberFloatDEThousandsNegative() {
    var num = new ilib.Number("-1.233,4", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(-1233.4, num.valueOf());
}

function testNumberFloatDEWithDashForZeros() {
    var num = new ilib.Number("3,-", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(3.0, num.valueOf());
}

function testNumberFloatDEStartsWithDecimal() {
    var num = new ilib.Number(",4342", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithZero() {
    var num = new ilib.Number("0,4342", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithDecimalNegative() {
    var num = new ilib.Number("-,4342", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithZeroNegative() {
    var num = new ilib.Number("-0,4342", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(-0.4342, num.valueOf());
}

function testNumberFloatDEStartsWithPeriodIgnore() {
    var num = new ilib.Number(".4342", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(4342.0, num.valueOf());
}

function testNumberFloatDEWithMDashForZeros() {
    var num = new ilib.Number("3,—", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(3.0, num.valueOf());
}

function testNumberIntDE() {
    var num = new ilib.Number("123", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(123, num.valueOf());
}

function testNumberIntDEThousands() {
    var num = new ilib.Number("123.456", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(123456, num.valueOf());
}

function testNumberInvalidDE() {
    var num = new ilib.Number("123,234,234", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(123.234, num.valueOf());
}

function testNumberEmptyDE() {
    var num = new ilib.Number("", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(0, num.valueOf());
}

function testNumberPercentageDE() {
    var num = new ilib.Number("58,4 %", {
    	locale: "de-DE",
    	type: "percentage"
    });
    assertNotNull(num);
    
    assertEquals(0.584, num.valueOf());
}

function testNumberPercentageDENoTypeSpecified() {
    var num = new ilib.Number("58,4 %", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertEquals(58.4, num.valueOf());
}

function testNumberCurrencyDEValue() {
    var num = new ilib.Number("5,84 €", {
    	locale: "de-DE",
    	type: "currency"
    });
    assertNotNull(num);
    
    assertEquals(5.84, num.valueOf());
}

function testNumberCurrencyDEType() {
    var num = new ilib.Number("5,84 €", {
    	locale: "de-DE",
    	type: "currency"
    });
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("EUR", cur.getCode());
}

function testNumberCurrencyDENoTypeSpecified() {
    var num = new ilib.Number("5,84 €", {
    	locale: "de-DE"
    });
    assertNotNull(num);
    
    assertUndefined(num.getCurrency());
}

function testNumberCurrencyDETypeUsingISOCode() {
    var num = new ilib.Number("5,84 EUR", {
    	locale: "de-DE",
    	type: "currency"
    });
    assertNotNull(num);
    
    var cur = num.getCurrency();
    assertNotUndefined(cur);
    assertEquals("EUR", cur.getCode());
}

function testNumberZH() {
    var num = new ilib.Number("12,3234", {
    	locale: "zh-CN"	
    });
    assertNotNull(num);
    
    assertEquals(123234.0, num.valueOf());
}

function testNumberZHDecimal() {
    var num = new ilib.Number("12,3234.324", {
    	locale: "zh-CN"	
    });
    assertNotNull(num);
    
    assertEquals(123234.324, num.valueOf());
}


function testNumberParseAsync() {
	var callbackCalled = false;
    new ilib.Number("-0,4342", {
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
    new ilib.Number("5,84 EUR", {
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
