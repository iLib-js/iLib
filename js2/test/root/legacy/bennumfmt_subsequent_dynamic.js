/*
 * bennumfmt_subsequent_dynamic.js - benchmark the NumFmt object with subsequent dynamic formats
 *
 * Copyright © 2014-2015, JEDLSoft
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

function testNumFmtConstructorEmptySubsequent(results) {
    new ilib.NumFmt();

    var tt = new TimedTest({
		name: "NumFmt-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new ilib.NumFmt();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testNumFmtConstructorRealSubsequent(results) {
	new ilib.NumFmt({
		locale: "de-DE"
	});

	var tt = new TimedTest({
		name: "NumFmt-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.NumFmt({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testNumFmtConstructorNonexistentSubsequent(results) {
	new ilib.NumFmt({
		locale: "xx-YY"
	});

	var tt = new TimedTest({
		name: "NumFmt-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.NumFmt({
				locale: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
