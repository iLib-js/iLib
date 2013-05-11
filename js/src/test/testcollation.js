/*
 * testcollation.js - test the Collator object
 * 
 * Copyright © 2013, JEDLSoft
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

function testCollatorConstructor() {
    var col = new ilib.Collator();
    
    assertNotNull(col);
}

function testCollatorDefault() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    // should compare in English
    assertEquals("equality", 0, col.compare("string", "string"));
    assertEquals("a < b", -1, col.compare("a", "b"));
    assertEquals("b < c", -1, col.compare("b", "c"));
    assertEquals("c < z", -1, col.compare("c", "z"));
}

function testCollatorDefaultCase() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    // should compare upper-case first
    assertEquals("A < a", -1, col.compare("A", "a"));
    assertEquals("B < b", -1, col.compare("B", "b"));
    assertEquals("B < a", -1, col.compare("B", "a"));
}

function testCollatorGetComparator() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    // should compare in English
    var func = col.getComparator();
    assertNotNull(func);
    assertEquals("function", typeof(func));
}

function testCollatorGetComparatorWorks() {
    var col = new ilib.Collator();
    
    assertNotNull(col);
    
    var func = col.getComparator();
    assertNotNull(func);
    
    // should compare in English
    assertEquals("equality", 0, func("string", "string"));
    assertEquals("a < b", -1, func("a", "b"));
    assertEquals("b < c", -1, func("b", "c"));
    assertEquals("c < z", -1, func("c", "z"));
}

function testCollatorGetComparatorWorksWithCase() {
    var col = new ilib.Collator();
    
    assertNotNull(col);
    
    var func = col.getComparator();
    assertNotNull(func);
    
    // should compare upper-case first
    assertEquals("A < a", -1, func("A", "a"));
    assertEquals("B < b", -1, func("B", "b"));
    assertEquals("B < a", -1, func("B", "a"));
}

function testCollatorGetSortKey() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    assertEquals("string", typeof(col.sortKey("string")));
}

function testCollatorGetSortKeyWorks() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    // should compare in English
    assertTrue("string", col.sortKey("string") === col.sortKey("string"));
    assertTrue("a < b", col.sortKey("a") < col.sortKey("b"));
    assertTrue("b < c", col.sortKey("b") < col.sortKey("c"));
    assertTrue("c < z", col.sortKey("c") < col.sortKey("z"));
}

function testCollatorWithSort() {
    var col = new ilib.Collator();
    assertNotNull(col);
    
    var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    
    input.sort(col.getComparator());
    
    var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperFirst() {
    var col = new ilib.Collator();
    assertNotNull(col);
    
    var input = ["q", "W", "e", "r", "T", "Y", "U", "i", "o", "p"];
    
    input.sort(col.getComparator());
    
    var expected = ["T", "U", "W", "Y", "e", "i", "o", "p", "q", "r"];
    
    assertArrayEquals(expected, input);
}

function testCollatorGetAvailableScripts() {
    assertArrayEquals(["Latn"], ilib.Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles() {
    assertArrayEquals(["standard"], ilib.Collator.getAvailableStyles());
}

/*
function testCollatorDefaultExtendedChars() {
    var col = new ilib.Collator();
    
    assertNotNull(col);

    // should compare in English
    assertEquals("e = ë", 0, col.compare("e", "ë"));
    assertEquals("o = ø", 0, col.compare("o","ø"));
}
*/