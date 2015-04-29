/*
 * bentimezone_initial_dynamic.js - benchmark the TimeZone object with initial dynamic formats
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

function testTimeZoneConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "TimeZone-dynamic-empty-initial",
		fn: function () {
		    var fmt = new ilib.TimeZone();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealInitialLocale(results) {
	var tt = new TimedTest({
		name: "TimeZone-dynamic-normal-initial",
		fn: function () {
			var fmt = new ilib.TimeZone({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealInitialId(results) {
	var tt = new TimedTest({
		name: "TimeZone-dynamic-normal-initial",
		fn: function () {
			var fmt = new ilib.TimeZone({
				id: "Europe/Berlin"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "TimeZone-dynamic-nonexistent-initial",
		fn: function () {
			var fmt = new ilib.TimeZone({
				id: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

