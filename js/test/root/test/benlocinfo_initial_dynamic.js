/*
 * benlocinfo_initial_dynamic.js - benchmark the LocaleInfo object with initial dynamic formats
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


var LocaleInfo = require("./../lib/LocaleInfo.js");
function testLocaleInfoConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-empty-initial",
		fn: function () {
		    var fmt = new LocaleInfo();	    
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-normal-initial",
		fn: function () {
			var fmt = new LocaleInfo("de-DE");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-nonexistent-initial",
		fn: function () {
			var fmt = new LocaleInfo("xx-YY");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorOtherComplexInitial(results) {
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-otherfile-complex-initial",
		fn: function () {
			var fmt = new LocaleInfo("zh-Hant-TW");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}
