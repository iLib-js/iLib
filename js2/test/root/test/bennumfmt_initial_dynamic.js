/*
 * bennumfmt_initial_dynamic.js - benchmark the NumFmt object with initial dynamic formats
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

function testNumFmtConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "NumFmt-dynamic-empty-initial",
		fn: function () {
		    var fmt = new ilib.NumFmt();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testNumFmtConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "NumFmt-dynamic-normal-initial",
		fn: function () {
			var fmt = new ilib.NumFmt({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testNumFmtConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "NumFmt-dynamic-nonexistent-initial",
		fn: function () {
			var fmt = new ilib.NumFmt({
				locale: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
