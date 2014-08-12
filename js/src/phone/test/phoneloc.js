/*
 * phoneloc.js - Test the phoneloc class.
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

function testGetByMCCUS() {
	var loc = new ilib.Locale.PhoneLoc({mcc: "310"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByMCCDE() {
	var loc = new ilib.Locale.PhoneLoc({mcc: "262"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());
};

function testGetByMCCUnknownMCC() {
	var loc = new ilib.Locale.PhoneLoc({mcc: "31"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.getRegion());
};

function testGetByCC1() {
	var loc = new ilib.Locale.PhoneLoc({countryCode: "1"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByCC1() {
	var loc = new ilib.Locale.PhoneLoc({countryCode: "44"});
	assertNotUndefined(loc);
	assertEquals("GB", loc.getRegion());	
};

function testGetByCCUnknownCC() {
	var loc = new ilib.Locale.PhoneLoc({countryCode: "0"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.getRegion());
};

function testGetByLocaleUS() {
	var loc = new ilib.Locale.PhoneLoc({locale: "en-US"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByLocaleDE() {
	var loc = new ilib.Locale.PhoneLoc({locale: "de-DE"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());	
};

function testGetDefault() {
	var loc = new ilib.Locale.PhoneLoc();
	assertNotUndefined(loc);
	assertEquals("US", loc.region);	
};

function testGetDefaultEmpty() {
	var loc = new ilib.Locale.PhoneLoc({});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
};