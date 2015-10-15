/*
 * testcharmap.js - Test the charset mapping routines
 * 
 * Copyright © 20142015, JEDLSoft
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

var CharmapFactory = require("./../lib/CharmapFactory.js");

function testCharmapConstructor() {
	var cm = CharmapFactory();
    assertNotUndefined(cm);
}

function testCharmapLoadMap() {
	var cm = CharmapFactory({
		name: "ISO-8859-15"
	});
    assertNotUndefined(cm);
    assertNotUndefined(cm.map);
    assertEquals("ISO-8859-15", cm.getName());
}

function testCharmapAlias() {
	var cm = CharmapFactory({
		name: "ISO-Latin-9"
	});
    assertNotUndefined(cm);
    assertNotUndefined(cm.map);
    assertEquals("ISO-8859-15", cm.getName());
}

function testCharmapLoadAlgorithmic() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    assertUndefined(cm.map); // no map because it's algorithmic
    assertEquals("UTF-8", cm.getName());
}
