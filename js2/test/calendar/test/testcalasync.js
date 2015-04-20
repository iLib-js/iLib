/*
 * testcalasync.js - test the calendar objects asynchronously
 * 
 * Copyright © 2015, JEDLSoft
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

function testTZAsyncGetAvailableIds() {
    ilib.TimeZone.getAvailableIds(undefined, false, function(zones) {
        assertNotUndefined(zones);
        
        assertTrue(zones.length > 0);
    });
}

function testTZAsyncGetAvailableIdsRightValues() {
	ilib.TimeZone.getAvailableIds(undefined, false, function(zones) {
        assertNotUndefined(zones);
        
        //var util = require("util");
        //util.print("ilib._load is " + util.inspect(ilib._load) + "\n");
        assertContains("Europe/London", zones);
        assertContains("America/Los_Angeles", zones);
        assertContains("Australia/Sydney", zones);
        assertContains("Asia/Tokyo", zones);
        assertContains("Africa/Cairo", zones);
    });
}

function testTZAsyncGetAvailableIdsNoFilterContainsLocal() {
    ilib.TimeZone.getAvailableIds(undefined, false, function(zones) {
        assertNotUndefined(zones);
        
        assertTrue(zones.indexOf("local") != -1);
    });
}

function testTZAsyncGetAvailableIdsByCountryRightLength() {
    ilib.TimeZone.getAvailableIds("US", false, function(zones) {
        assertNotUndefined(zones);
        
        assertEquals(29, zones.length);
    });
}

function testTZAsyncGetAvailableIdsWithFilterContainsNoLocal() {
	try {
	    ilib.TimeZone.getAvailableIds("US", false, function(zones) {
	        assertNotUndefined(zones);
	        
	        assertTrue(zones.indexOf("local") == -1);
	    });
	} catch (e) {
		assertNotUndefined(e);
	}
}

function testTZAsyncGetAvailableIdsByCountryRightContents() {
    ilib.TimeZone.getAvailableIds("US", false, function(zones) {
        assertNotUndefined(zones);
        
        var expected = [
			"America/New_York",
			"America/Detroit",
			"America/Kentucky/Louisville",
			"America/Kentucky/Monticello",
			"America/Indiana/Indianapolis",
			"America/Indiana/Vincennes",
			"America/Indiana/Winamac",
			"America/Indiana/Marengo",
			"America/Indiana/Petersburg",
			"America/Indiana/Vevay",
			"America/Chicago",
			"America/Indiana/Tell_City",
			"America/Indiana/Knox",
			"America/Menominee",
			"America/North_Dakota/Center",
			"America/North_Dakota/New_Salem",
			"America/North_Dakota/Beulah",
			"America/Denver",
			"America/Boise",
			"America/Phoenix",
			"America/Los_Angeles",
			"America/Anchorage",
			"America/Juneau",
			"America/Sitka",
			"America/Yakutat",
			"America/Nome",
			"America/Adak",
			"America/Metlakatla",
			"Pacific/Honolulu"
	    ];
	    
	    assertArrayEqualsIgnoringOrder(expected, zones);
    });
}

function testTZAsyncGetAvailableIdsByCountry2RightLength() {
    var zones = ilib.TimeZone.getAvailableIds("SG", false, function(zones) {
        assertNotUndefined(zones);
        
        assertEquals(1, zones.length);
    });
}

function testTZAsyncGetAvailableIdsByCountry2RightContents() {
    var zones = ilib.TimeZone.getAvailableIds("SG", false, function(zones) {
        assertNotUndefined(zones);
        
        var expected = [
			"Asia/Singapore"
		];
	    
	    assertArrayEqualsIgnoringOrder(expected, zones);
    });
}
