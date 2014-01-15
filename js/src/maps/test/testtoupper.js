/*
 * testtoupper.js - Test the upper-casing mapper
 * 
 * Copyright © 2014, JEDLSoft
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

function testToUpperFromLower_en_US() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("this is a string"));
}

function testToUpperFromUpper_en_US() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("THIS IS A STRING"));
}

function testToUpperFromMixed_en_US() {
	var mapper = new ilib.StringMapper({
		name: "toupper"
	});
    assertEquals("THIS IS A STRING", mapper.map("This is a String"));
}
