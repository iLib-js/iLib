/*
 * phoneloc.js - Test the phoneloc class.
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

var ilib = require("./../lib/ilib.js");
var PhoneLocale = require("./../lib/PhoneLocale.js");

function testGetByMCCUS() {
	var loc = new PhoneLocale({mcc: "310"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByMCCDE() {
	var loc = new PhoneLocale({mcc: "262"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());
};

function testGetByMCCUnknownMCC() {
	var loc = new PhoneLocale({mcc: "31"});
	assertNotUndefined(loc);
	assertEquals("XX", loc.getRegion());
};

function testGetByCC1() {
	var loc = new PhoneLocale({countryCode: "1"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByCC1() {
	var loc = new PhoneLocale({countryCode: "44"});
	assertNotUndefined(loc);
	assertEquals("GB", loc.getRegion());	
};

function testGetByCCUnknownCC() {
	var loc = new PhoneLocale({countryCode: "0"});
	assertNotUndefined(loc);
	assertEquals("XX", loc.getRegion());
};

function testGetByLocaleUS() {
	var loc = new PhoneLocale({locale: "en-US"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByLocaleDE() {
	var loc = new PhoneLocale({locale: "de-DE"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());	
};

function testGetDefault() {
	var loc = new PhoneLocale();
	assertNotUndefined(loc);
	assertEquals("US", loc.region);	
};

function testGetDefaultEmpty() {
	var loc = new PhoneLocale({});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.cc2reg); // for the generic, shared stuff
	data.push(ilib.data.reg2cc);
	data.push(ilib.data.mcc2reg);
	data.push(ilib.data.area2reg);
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testPhoneLocLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	PhoneLocale.cache = {};
	ilib.setLoaderCallback(mockLoader);

	new PhoneLocale({
		countryCode: "44",
		sync: false,
		onLoad: function (loc) {
    		assertNotNull(loc);
    		assertEquals("GB", loc.getRegion());    			
    	}
	});
    ilib.setLoaderCallback(undefined);
};