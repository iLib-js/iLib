/*
 * imsi.js - Test the parseImsi() function.
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
var PhoneNumber = require("./../lib/PhoneNumber.js");

function testRegularImsi3DigitMNC() {
	var imsi = "31003014084567890"
	var expected = {
		mcc: "310",
		mnc: "030",
		msin: "14084567890"
	};

	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testRegularImsi2DigitMNC() {
	var imsi = "26207201234567"
	var expected = {
		mcc: "262",
		mnc: "07",
		msin: "201234567"
	};

	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testSpecialImsi1() {
	var imsi = "31000201234567"
	var expected = {
		mcc: "310",
		mnc: "00",
		msin: "201234567"
	};
	
	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testSpecialImsi2() {
	var imsi = "310004201234567"
	var expected = {
		mcc: "310",
		mnc: "004",
		msin: "201234567"
	};
	
	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testBrokenMCC() {
	var imsi = "32000414084567890"
	var expected = {
		mcc: "320",
		mnc: "004",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testBrokenMNC() {
	var imsi = "31014114084567890"
	var expected = {
		mcc: "310",
		mnc: "141",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi));
};

function testTooShort() {
	var imsi = "31"
	assertObjectEquals(undefined, PhoneNumber.parseImsi(imsi));
};

function testUndefined() {
	assertUndefined(PhoneNumber.parseImsi(undefined));
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.mnc); // for the generic, shared stuff
	
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testIMSILoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	PhoneNumber.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var field = [];
	var imsi = "31003014084567890";
	var options = {sync: false}
  	var expected = {
		mcc: "310",
		mnc: "030",
		msin: "14084567890"
	};
	
	fields = PhoneNumber.parseImsi(imsi)
	assertObjectEquals(expected, PhoneNumber.parseImsi(imsi, options));
    ilib.setLoaderCallback(undefined);
};