/*
 * benresbundle_subsequent_assembled.js - benchmark the ResBundle object with dynamic resources
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

function testResBundleConstructorRootSubsequent(results) {
	new ilib.ResBundle({
		name: "sysres"
	}); // burn the initial iteration

	var tt = new TimedTest({
		name: "ResBundle-dynamic-root-subsequent",
		iterations: 1000,
		fn: function () {
			var rb = new ilib.ResBundle({
				name: "sysres"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorComplexSubsequent(results) {
	// burn the initial iteration
	new ilib.ResBundle({
		name: "sysres",
		locale: "zh-Hant-TW"
	});
	var tt = new TimedTest({
		name: "ResBundle-dynamic-complex-subsequent",
		iterations: 1000,
		fn: function () {
			var rb = new ilib.ResBundle({
				name: "sysres",
				locale: "zh-Hant-TW"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorNonexistentSubsequent(results) {
	// burn the initial iteration
	new ilib.ResBundle({
		name: "sysres",
		locale: "foo-XY"
	});
	var tt = new TimedTest({
		name: "ResBundle-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var rb = new ilib.ResBundle({
				name: "sysres",
				locale: "foo-XY"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorPsuedoSubsequent(results) {
    var rb = new ilib.ResBundle({
        name: "sysres",
        locale: "zxx-XX",
        type: "html"
    });

    assertNotNull(rb);

    // should not pseudo-ize the replacement parameter names
	var tt = new TimedTest({
		name: "ResBundle-dynamic-pseudo-subsequent",
		iterations: 1000,
		fn: function () {
		    var rb = new ilib.ResBundle({
		        name: "sysres",
		        locale: "zxx-XX",
		        type: "html"
		    });

		    assertNotNull(rb);
		}
	});

	tt.run(results);
}
