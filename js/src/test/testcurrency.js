/*
 * testcurrency.js - test the currency routines
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

function testCurrencyConstructorEmpty() {
    var cur = new ilib.Currency();
    
    assertNotNull(cur);
}

function testCurrencyDefaults() {
    var cur = new ilib.Currency();
    assertNotNull(cur);
    
    assertEquals("USD", cur.getCode());
    assertEquals(2, cur.getFractionDigits());
    assertEquals("$", cur.getSign());
    assertEquals("US Dollar", cur.getName());
    var locale = cur.getLocale();
    assertNotUndefined(locale);
    assertEquals("en-US", locale.toString());
}

function testCurrencyGetByCode1() {
    var cur = new ilib.Currency({
        code: "EUR"
    });
    assertNotNull(cur);
    
    assertEquals("EUR", cur.getCode());
    assertEquals(2, cur.getFractionDigits());
    assertEquals("€", cur.getSign());
    assertEquals("Euro", cur.getName());
    var locale = cur.getLocale();
    assertEquals("en-US", locale.toString());
}

function testCurrencyGetByCode2() {
    var cur = new ilib.Currency({
        code: "JPY"
    });
    assertNotNull(cur);
    
    assertEquals("JPY", cur.getCode());
    assertEquals(0, cur.getFractionDigits());
    assertEquals("¥", cur.getSign());
    assertEquals("Yen", cur.getName());
    var locale = cur.getLocale();
    assertEquals("en-US", locale.toString());
}

function testCurrencyGetByCodeUnknown() {
    try {
        var cur = new ilib.Currency({
            code: "xxx"
        });
        fail();
    } catch (e) {
        assertEquals("currency xxx is unknown", e);
    }
}

function testCurrencyGetBySignUnambiguous() {
    var cur = new ilib.Currency({
        sign: "€"
    });
    assertNotNull(cur);
    
    assertEquals("EUR", cur.getCode());
    assertEquals(2, cur.getFractionDigits());
    assertEquals("€", cur.getSign());
    assertEquals("Euro", cur.getName());
    var locale = cur.getLocale();
    assertEquals("en-US", locale.toString());
}

function testCurrencyGetBySignAmbiguousCurrentLocale() {
    var cur = new ilib.Currency({
    	locale: "en-CA",
        sign: "$"
    });
    assertNotNull(cur);
    
    assertEquals("CAD", cur.getCode());
    assertEquals(2, cur.getFractionDigits());
    assertEquals("$", cur.getSign());
    assertEquals("Canadian Dollar", cur.getName());
    var locale = cur.getLocale();
    assertEquals("en-CA", locale.toString());
}

function testCurrencyGetBySignAmbiguousNotCurrentLocale() {
    var cur = new ilib.Currency({
    	locale: "en-GB",
        sign: "$"
    });
    assertNotNull(cur);
    
    assertEquals("USD", cur.getCode());
    assertEquals(2, cur.getFractionDigits());
    assertEquals("$", cur.getSign());
    assertEquals("US Dollar", cur.getName());
    var locale = cur.getLocale();
    assertEquals("en-GB", locale.toString());
}
