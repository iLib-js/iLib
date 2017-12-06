/*
 * testalphaindex.js - test the Alphabetic Index class
 * 
 * Copyright © 2017, JEDLSoft
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

var ilib = require("../lib/ilib.js");
var AlphabeticIndex = require("../lib/AlphabeticIndex.js");

function testAlphaIndexConstructor() {
	var ai = new AlphabeticIndex();

	assertNotUndefined(ai);
}

function testAlphaIndexConstructorWithParams() {
    var ai = new AlphabeticIndex({
        locale: "de-DE",
        caseSensitive: false
    });

    assertNotUndefined(ai);
}

function testAlphaIndexENUSAddElement() {
    var ai = new AlphabeticIndex({
        locale: "en-US"
    });

    ai.addElement("a");
    ai.addElement("b");
    
    assertNotUndefined(ai);
}
