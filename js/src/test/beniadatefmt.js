/*
 * beniadatefmt.js - benchmark the DateFmt object with initial assembled formats
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


function testDateFmtConstructorEmpty() {
	var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
};

function testDateFmtConstructorDefaultLocale() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testResBundleConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "assembled-ResBundle-empty-initial",
		fn: function () {
			var rb = new ilib.ResBundle();		
		    assertNotNull(rb);
		}
	});
	
	tt.run(results);
}

function testResBundleConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "assembled-ResBundle-normal-initial",
		fn: function () {
			var rb = new ilib.ResBundle({
				locale: "de-DE"
			});		
		    assertNotNull(rb);
		}
	});
	
	tt.run(results);
}

function testResBundleConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "assembled-ResBundle-nonexistent-initial",
		fn: function () {
			var rb = new ilib.ResBundle({
				locale: "ja-JP"
			});		
		    assertNotNull(rb);
		}
	});
	
	tt.run(results);
}

function testResBundleConstructorOtherFileInitial(results) {
	var tt = new TimedTest({
		name: "assembled-ResBundle-otherfile-initial",
		fn: function () {
			var rb = new ilib.ResBundle({
				name: "tester"
			});		
		    assertNotNull(rb);
		}
	});
	
	tt.run(results);
}

function testResBundleConstructorOtherComplexInitial(results) {
	var tt = new TimedTest({
		name: "assembled-ResBundle-otherfile-complex-initial",
		fn: function () {
			var rb = new ilib.ResBundle({
				name: "tester",
				locale: "es-MX-slang"
			});		
		    assertNotNull(rb);
		}
	});
	
	tt.run(results);
}

