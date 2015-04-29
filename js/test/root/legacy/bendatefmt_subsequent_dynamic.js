/*
 * bendatefmt_subsequent_dynamic.js - benchmark the DateFmt object with subsequent dynamic formats
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

function testDateFmtConstructorEmptySubsequent(results) {
    new ilib.DateFmt();

    var tt = new TimedTest({
		name: "DateFmt-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new ilib.DateFmt();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testDateFmtConstructorRealSubsequent(results) {
	new ilib.DateFmt({
		locale: "de-DE"
	});

	var tt = new TimedTest({
		name: "DateFmt-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testDateFmtConstructorNonexistentSubsequent(results) {
	new ilib.DateFmt({
		locale: "xx-YY"
	});

	var tt = new TimedTest({
		name: "DateFmt-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testDateFmtConstructorOtherComplexSubsequent(results) {
	new ilib.DateFmt({
		locale: "zh-Hant-TW"
	});

	var tt = new TimedTest({
		name: "DateFmt-dynamic-otherfile-complex-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "zh-Hant-TW"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testDateFmtConstructorWithOptionsSubsequent(results) {
	new ilib.DateFmt({
		locale: "fr-FR",
		type: "datetime",
		date: "dmywg",
		time: "hmsaz",
		length: "full"
	});

	var tt = new TimedTest({
		name: "DateFmt-dynamic-otherfile-options-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.DateFmt({
				locale: "fr-FR",
				type: "datetime",
				date: "dmywg",
				time: "hmsaz",
				length: "full"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
