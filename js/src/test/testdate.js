/*
 * testdate.js - test the date object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testDateConstructor() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
};

function testDateConstructorFull() {
    var gd = new ilib.Date({
    	year: 2011, 
    	month: 9, 
    	day: 23, 
    	hour: 16, 
    	minute: 7, 
    	second: 12, 
    	millisecond: 123	
    });
    
    assertNotNull(gd);
    
    assertEquals(2011, gd.getYears());
    assertEquals(9, gd.getMonths());
    assertEquals(23, gd.getDays());
    assertEquals(16, gd.getHours());
    assertEquals(7, gd.getMinutes());
    assertEquals(12, gd.getSeconds());
    assertEquals(123, gd.getMilliseconds());
};

function testDateSetYears() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setYears(123);
    
    assertEquals(123, gd.getYears());
};

function testDateSetMonths() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setMonths(7);
    
    assertEquals(7, gd.getMonths());
};

function testDateSetDays() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setDays(12);
    
    assertEquals(12, gd.getDays());
};

function testDateSetHours() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setHours(12);
    
    assertEquals(12, gd.getHours());
};

function testDateSetMinutes() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setMinutes(13);
    
    assertEquals(13, gd.getMinutes());
};

function testDateSetSeconds() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setSeconds(23);
    
    assertEquals(23, gd.getSeconds());
};

function testDateSetMilliseconds() {
    var gd = new ilib.Date();
    
    assertNotNull(gd);
    
    gd.setMilliseconds(123);
    
    assertEquals(123, gd.getMilliseconds());
};


function testDateFactoryRightType() {
    var date = ilib.Date.newInstance({
    	type: "gregorian"
    });
    
    assertNotNull(date);
    assertEquals("gregorian", date.getCalendar());
};

function testDateFactoryDefaultGregorian() {
    var date = ilib.Date.newInstance();
    
    assertNotNull(date);
    assertEquals("gregorian", date.getCalendar());
};

function testDateFactoryNonGregorian() {
    var date = ilib.Date.newInstance({
    	type: "hebrew"
    });
    
    assertNotNull(date);
    assertEquals("hebrew", date.getCalendar());
};

function testDateFactoryBogus() {
    var date = ilib.Date.newInstance({
    	type: "asdf"
    });
    
    assertUndefined(date);
};
