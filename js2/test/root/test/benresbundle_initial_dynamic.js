/*
 * benresbundle_initial_dynamic.js - benchmark the initial load of a ResBundle object with dynamic resources
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

var ResBundle = require("./../lib/ResBundle.js");
function testResBundleConstructorRootInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-dynamic-root-initial",
		fn: function () {
			var rb = new ResBundle({
				name: "sysres"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorComplexInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-dynamic-complex-initial",
		fn: function () {
			var rb = new ResBundle({
				name: "sysres",
				locale: "zh-Hant-TW"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-dynamic-nonexistent-initial",
		fn: function () {
			var rb = new ResBundle({
				name: "sysres",
				locale: "foo-XY"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorPsuedoInitial(results) {
    // should not pseudo-ize the replacement parameter names
	var tt = new TimedTest({
		name: "ResBundle-dynamic-pseudo",
		fn: function () {
		    var rb = new ResBundle({
		        name: "sysres",
		        locale: "zxx-XX",
		        type: "html"
		    });

		    assertNotNull(rb);
		}
	});

	tt.run(results);
}
