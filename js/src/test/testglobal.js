/*
 * testglobal.js - test the ilib static routines
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testGetLocaleDefault() {
    assertEquals("en-US", ilib.getLocale());
}

function testSetLocale() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale("it-IT");
    
    assertEquals("it-IT", ilib.getLocale());
    delete ilib.locale; // clean up
}

function testSetLocaleObject() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale(new ilib.Locale("it-IT"));

    // do not change the locale if the arg is not a string
    assertEquals("en-US", ilib.getLocale());
}

function testSetLocaleEmpty() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale();
    
    assertEquals("en-US", ilib.getLocale());
}

function testGetVersion() {
    assertEquals("10.0", ilib.getVersion());
}

function testGetTimeZoneDefault() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("local", ilib.getTimeZone());
}

function testSetTimeZone() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("local", ilib.getTimeZone());
    
    ilib.setTimeZone("America/Los_Angeles");
    
    assertEquals("America/Los_Angeles", ilib.getTimeZone());
    delete ilib.tz; // clean up
}

function testSetTimeZoneEmpty() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("local", ilib.getTimeZone());
    
    ilib.setTimeZone();
    
    assertEquals("local", ilib.getTimeZone());
}

function testGetTimeZoneNodejs() {
	if (ilib._getPlatform() === "nodejs") {
		ilib._platform = undefined;
		ilib.tz = undefined;
		if (typeof(process) === 'undefined') {
			process = {
				env: {}
			};
		}
		process.env.TZ = "America/Phoenix";
		
		assertEquals("America/Phoenix", ilib.getTimeZone());
		
		process.env.TZ = "";
	}
}

function testGetTimeZoneRhino() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	ilib._platform = undefined;
	ilib.tz = undefined;
	if (ilib._isGlobal("navigator")) {
		// this won't work in a browser
		navigator = undefined;
	}
	if (ilib._isGlobal("navigator") || ilib._isGlobal("PalmSystem")) {
		// can't test on these systems because you can't unset these
		return;
	}
	
	if (typeof(environment) === 'undefined') {
		environment = {
			user: {}
		};
	}
	environment.user.timezone = "America/New_York";
	
	assertEquals("America/New_York", ilib.getTimeZone());
	
	environment = undefined;
}

function testGetTimeZoneWebOS() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	ilib._platform = undefined;
	ilib.tz = undefined;

	if (ilib._isGlobal("navigator") || ilib._isGlobal("PalmSystem")) {
		// can't test on these systems because you can't unset these
		return;
	}
	
	PalmSystem = {
		timezone: "Europe/London"
	};
		
	assertEquals("Europe/London", ilib.getTimeZone());
	
	PalmSystem = undefined;
}

function testGetLocaleNodejs1() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(process) === 'undefined') {
		process = {
			env: {}
		};
	}
	process.env.LANG = "th-TH";
	
	assertEquals("th-TH", ilib.getLocale());
	
	process.env.LANG = "";
}

function testGetLocaleNodejs2() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(process) === 'undefined') {
		process = {
			env: {}
		};
	}
	process.env.LC_ALL = "th-TH";
	
	assertEquals("th-TH", ilib.getLocale());
	
	process.env.LC_ALL = "";
}

function testGetLocaleRhino() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(environment) === 'undefined') {
		environment = {
			user: {}
		};
	}
	console.log("platform is " + ilib._getPlatform());
	environment.user.language = "de";
	environment.user.country = "AT";
	
	assertEquals("de-AT", ilib.getLocale());
	
	environment = {};
}

function testGetLocaleWebOS() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(PalmSystem) === 'undefined') {
		PalmSystem = {
			locales: {}
		};
	}
	PalmSystem.locales.UI = "ru-RU";
	
	assertEquals("ru-RU", ilib.getLocale());
	
	PalmSystem = undefined;
}

function testGetLocaleNotString() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	ilib._platform = undefined;
	PalmSystem = undefined;
	ilib.locale = new ilib.Locale("it-IT");
	
	// should remove the locale object and make it into a string
	assertEquals("en-US", ilib.getLocale());
}

function testGetTimeZoneBrowser() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}

	ilib._platform = undefined;
	ilib.tz = undefined;
	navigator = {
		timezone: 'America/Los_Angeles'             
	};
	
	assertEquals("America/Los_Angeles", ilib.getTimeZone());
	
	navigator = undefined;
}

function testGetLocaleBrowser() {
	if (ilib.isDynCode()) {
		// can't test this with dynamically loaded code because the global context
		// is different for each module and we cannot set global variables, so we 
		// cannot simulate the conditions where this code would work
		return;
	}
	if (ilib._isGlobal("navigator")) {
		navigator = undefined; // this won't work on a browser, so we have to check again
		if (typeof(navigator) !== 'undefined') {
			// can't test setting things up for the browser when you are testing within the 
			// the browser already -- navigator.language is already set up and overrides
			// everything else
			return;
		}
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(navigator) === 'undefined') {
		navigator = {};
	}
	navigator.language = 'ja-JP';
	
	assertEquals("ja-JP", ilib.getLocale());
	
	navigator = undefined;
}

function testIsArrayNewArrayObj() {
	var a = new Array();
	assertTrue(ilib.isArray(a));
}

function testIsArrayNewArrayBrackets() {
	var a = [];
	assertTrue(ilib.isArray(a));
}

function testIsArrayObject() {
	var a = {foo:234};
	assertFalse(ilib.isArray(a));
}

function testIsArrayObjectWithNumericProperties() {
	var a = {"0": "d", "1": "c"};
	assertFalse(ilib.isArray(a));
}

function testIsArrayNumber() {
	var a = 234;
	assertFalse(ilib.isArray(a));
}

function testIsArrayString() {
	var a = "asdf";
	assertFalse(ilib.isArray(a));
}

function testIsArrayNull() {
	var a = null;
	assertFalse(ilib.isArray(a));
}

function testIsArrayUndefined() {
	var a = undefined;
	assertFalse(ilib.isArray(a));
}

function testExtendSimple() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": "B", "c": "C", "d": "D"}, object1);
}

function testExtendReturnObject1() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    var x = ilib.extend(object1, object2);
    assertEquals(object1, x);
}

function testExtendArrays() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["d"]};
   
    ilib.extend(object1, object2);
    assertObjectEquals({"a": ["b", "c", "d"]}, object1);
}

function testExtendArraysDups() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["c", "d"]};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": ["b", "c", "c", "d"]}, object1);
}

function testExtendArraysEmptySource() {
    var object1 = {"a": []},
        object2 = {"a": ["d"]};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": ["d"]}, object1);
}

function testExtendArraysEmptyTarget() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": []};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": ["b", "c"]}, object1);
}

function testExtendArraysIncongruentTypes1() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": "d"};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "d"}, object1);
}

function testExtendArraysIncongruentTypes2() {
    var object1 = {"a": "b"},
        object2 = {"a": ["d"]};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": ["d"]}, object1);
}

function testExtendSimpleProperty() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"b": "X"};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": "X"}, object1);
}

function testExtendComplexProperty() {
    var object1 = {"a": "A", "b": {"x": "B"}},
        object2 = {"b": "X"};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": "X"}, object1);
}

function testExtendSubobjects() {
    var object1 = {"b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"b": {"x": "M", "y": "N"}}, object1);
}

function testExtendSubobjectsLeaveObj1PropsUntouched() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, object1);
}

function testExtendSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, object1);
}

function testExtendSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, object1);
}

function testExtendBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"b": false};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": true, "b": false}, object1);
}

function testExtendAddBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"c": false};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": true, "b": true, "c": false}, object1);
}

function testExtendNumbers() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 3};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": 1, "b": 3}, object1);
}

function testExtendNumbersWithZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 0};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": 1, "b": 0}, object1);
}

function testExtendNumbersAddZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"c": 0};
    
    ilib.extend(object1, object2);
    assertObjectEquals({"a": 1, "b": 2, "c": 0}, object1);
}
