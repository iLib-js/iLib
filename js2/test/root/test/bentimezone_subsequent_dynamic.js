/*
 * bentimezone_subsequent_dynamic.js - benchmark the TimeZone object with subsequent dynamic formats
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

var TimeZone = require("./../lib/TimeZone.js");
function testTimeZoneConstructorEmptySubsequent(results) {
    new TimeZone();

    var tt = new TimedTest({
		name: "TimeZone-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new TimeZone();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealSubsequentLocale(results) {
	new TimeZone({
		locale: "de-DE"
	});

	var tt = new TimedTest({
		name: "TimeZone-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new TimeZone({
				locale: "de-DE"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorRealSubsequentId(results) {
	new TimeZone({
		id: "Europe/Berlin"
	});

	var tt = new TimedTest({
		name: "TimeZone-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new TimeZone({
				id: "Europe/Berlin"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testTimeZoneConstructorNonexistentSubsequent(results) {
	new TimeZone({
		id: "xx-YY"
	});

	var tt = new TimedTest({
		name: "TimeZone-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new TimeZone({
				id: "xx-YY"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
