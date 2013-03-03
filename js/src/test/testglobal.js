/*
 * testglobal.js - test the ilib static routines
 * 
 * Copyright © 2012, JEDLSoft
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
    assertEquals("1.3", ilib.getVersion());
}

function testGetTimeZoneDefault() {
    assertEquals("Etc/UTC", ilib.getTimeZone());
}

function testSetTimeZone() {
    assertEquals("Etc/UTC", ilib.getTimeZone());
    
    ilib.setTimeZone("America/Los_Angeles");
    
    assertEquals("America/Los_Angeles", ilib.getTimeZone());
    delete ilib.tz; // clean up
}

function testSetTimeZoneEmpty() {
    assertEquals("Etc/UTC", ilib.getTimeZone());
    
    ilib.setTimeZone();
    
    assertEquals("Etc/UTC", ilib.getTimeZone());
}

function testGetTimeZoneBrowser() {
	ilib.tz = undefined;
	if (typeof(navigator) === 'undefined') {
		navigator = {};
	}
	navigator.timezone = 'America/Los_Angeles';
	
	assertEquals("America/Los_Angeles", ilib.getTimeZone());
	
	navigator.timezone = undefined;
}

function testGetTimeZoneNodejs() {
	ilib.tz = undefined;
	if (typeof(process) === 'undefined') {
		process = {
			env: {}
		};
	}
	process.env.TZ = "America/Phoenix";
	
	assertEquals("America/Phoenix", ilib.getTimeZone());
	
	process.env.TZ = undefined;
}

function testGetTimeZoneRhino() {
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
	ilib.tz = undefined;
	if (typeof(webos) === 'undefined') {
		webos = {};
	}
	webos.timezone = "Europe/London";
	
	assertEquals("Europe/London", ilib.getTimeZone());
	
	webos = undefined;
}

function testGetLocaleBrowser() {
	ilib.locale = undefined;
	if (typeof(navigator) === 'undefined') {
		navigator = {};
	}
	navigator.language = 'ja-JP';
	
	assertEquals("ja-JP", ilib.getLocale());
	
	navigator.language = undefined;
}

function testGetLocaleNodejs1() {
	ilib.locale = undefined;
	if (typeof(process) === 'undefined') {
		process = {
			env: {}
		};
	}
	process.env.LANG = "Th-TH";
	
	assertEquals("th-TH", ilib.getLocale());
	
	process.env.LANG = undefined;
}

function testGetLocaleNodejs2() {
	ilib.locale = undefined;
	if (typeof(process) === 'undefined') {
		process = {
			env: {}
		};
	}
	process.env.LC_ALL = "Th-TH";
	
	assertEquals("th-TH", ilib.getLocale());
	
	process.env.LC_ALL = undefined;
}

function testGetLocaleRhino() {
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
	ilib.locale = undefined;
	if (typeof(webos) === 'undefined') {
		webos = {
			locales: {}	
		};
	}
	webos.locales.ui = "ru-RU";
	
	assertEquals("ru-RU", ilib.getLocale());
	
	webos = undefined;
}
