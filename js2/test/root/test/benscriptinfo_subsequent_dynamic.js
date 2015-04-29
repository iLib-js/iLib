/*
 * benscriptinfo_subsequent_dynamic.js - benchmark the ScriptInfo object with subsequent dynamic formats
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

var ScriptInfo = require("./../lib/ScriptInfo.js");
function testScriptInfoConstructorEmptySubsequent(results) {
    new ScriptInfo();

    var tt = new TimedTest({
		name: "ScriptInfo-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new ScriptInfo();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testScriptInfoConstructorRealSubsequent(results) {
	new ScriptInfo("Hang");

	var tt = new TimedTest({
		name: "ScriptInfo-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ScriptInfo("Hang");
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testScriptInfoConstructorNonexistentSubsequent(results) {
	new ScriptInfo("xx-YY");

	var tt = new TimedTest({
		name: "ScriptInfo-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new ScriptInfo("xx-YY");
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
