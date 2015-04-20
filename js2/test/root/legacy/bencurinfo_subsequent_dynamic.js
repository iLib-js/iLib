/*
 * bencurinfo_subsequent_dynamic.js - benchmark the Currency object with subsequent dynamic formats
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

function testCurrencyConstructorEmptySubsequent(results) {
    new ilib.Currency();

    var tt = new TimedTest({
		name: "Currency-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new ilib.Currency();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testCurrencyConstructorRealSubsequent(results) {
	new ilib.Currency({
		code: "USD"
	});

	var tt = new TimedTest({
		name: "Currency-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.Currency({
				code: "USD"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testCurrencyConstructorBySignSubsequent(results) {
	new ilib.Currency({
		sign: "$"
	});

	var tt = new TimedTest({
		name: "Currency-dynamic-bysign-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ilib.Currency({
				sign: "$"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
