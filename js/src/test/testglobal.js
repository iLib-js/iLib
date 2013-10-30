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

function testSetLocaleEmpty() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale();
    
    assertEquals("en-US", ilib.getLocale());
}

function testGetVersion() {
    assertEquals("4.0", ilib.getVersion());
}

function testGetTimeZoneDefault() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("Etc/UTC", ilib.getTimeZone());
}

function testSetTimeZone() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("Etc/UTC", ilib.getTimeZone());
    
    ilib.setTimeZone("America/Los_Angeles");
    
    assertEquals("America/Los_Angeles", ilib.getTimeZone());
    delete ilib.tz; // clean up
}

function testSetTimeZoneEmpty() {
	ilib._platform = undefined;
	ilib.tz = undefined;
	assertEquals("Etc/UTC", ilib.getTimeZone());
    
    ilib.setTimeZone();
    
    assertEquals("Etc/UTC", ilib.getTimeZone());
}

function testGetTimeZoneNodejs() {
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

function testGetTimeZoneRhino() {
	ilib._platform = undefined;
	ilib.tz = undefined;
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
	ilib._platform = undefined;
	ilib.tz = undefined;
	if (typeof(PalmSystem) === 'undefined') {
		PalmSystem = {};
	}
	PalmSystem.timezone = "Europe/London";
	
	assertEquals("Europe/London", ilib.getTimeZone());
	
	PalmSystem = undefined;
}

function testGetLocaleNodejs1() {
	if (typeof(navigator.language) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator.language is already set up and overrides
		// everything else
		return;
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
	if (typeof(navigator.language) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator.language is already set up and overrides
		// everything else
		return;
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
	if (typeof(navigator.language) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator.language is already set up and overrides
		// everything else
		return;
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(environment) === 'undefined') {
		environment = {
			user: {}
		};
	}
	environment.user.language = "de";
	environment.user.country = "AT";
	
	assertEquals("de-AT", ilib.getLocale());
	
	environment = {};
}

function testGetLocaleWebOS() {
	if (typeof(navigator.language) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator.language is already set up and overrides
		// everything else
		return;
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

function testGetTimeZoneBrowser() {
	if (typeof(navigator) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator is read-only!
		return;
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
	if (typeof(navigator) !== 'undefined' && typeof(navigator.language) !== 'undefined') {
		// can't test setting things up for the browser when you are testing within the 
		// the browser already -- navigator.language is read-only!
		return;
	}
	
	ilib._platform = undefined;
	ilib.locale = undefined;
	if (typeof(navigator) === 'undefined') {
		navigator = {};
	}
	navigator.language = 'ja-JP';
	
	assertEquals("ja-JP", ilib.getLocale());
	
	navigator.language = undefined;
}

