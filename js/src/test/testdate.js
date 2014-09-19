/*
 * testdate.js - test the date object
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

function testDateFactoryNonGregorianWithCalendar() {
    var date = ilib.Date.newInstance({
    	calendar: "hebrew"
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

function testDateToIlibUndefined() {
    var date = ilib.Date._dateToIlib();
    
    assertUndefined(date);
}

function testDateToIlibNull() {
    var date = ilib.Date._dateToIlib(null);
    
    assertNull(date);
}

function testDateToIlibDateWithDate() {
	var d = new Date();
    var date = ilib.Date._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(d.getTime(), date.getTime());
}

function testDateToIlibDateWithIlibDate() {
	var d = new ilib.Date.GregDate();
    var date = ilib.Date._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(d.getTime(), date.getTime());
}

function testDateToIlibDateWithNumber() {
	var date = ilib.Date._dateToIlib(1000);
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(1000, date.getTime());
}

function testDateToIlibDateWithString() {
	var date = ilib.Date._dateToIlib("Wed Mar 05 2014 14:18:12 GMT-0800 (PST)");
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(1394057892000, date.getTime());
}

function testDateToIlibDateWithGenericObject() {
	var d = {
		year: 1968,
		month: 8,
		day: 23,
		hour: 8,
		minute: 24
	};
    var date = ilib.Date._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(1968, date.year);
    assertEquals(8, date.month);
    assertEquals(23, date.day);
    assertEquals(8, date.hour);
    assertEquals(24, date.minute);    
}

function testDateToIlibDateWithBogusObject() {
	var d = {
		foo: "bar",
		xxx: true
	};
	var now = new Date();
	var date = ilib.Date._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertTrue(date instanceof ilib.Date);
    assertEquals(now.getFullYear(), date.year);
    assertEquals(now.getMonth(), date.month-1);
    assertEquals(now.getDate(), date.day);
    assertEquals(now.getHours(), date.hour);
    assertEquals(now.getMinutes(), date.minute);
    assertEquals(now.getSeconds(), date.second);
}

function testDateToIlibDate() {
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)");
    var ildMyBday = ilib.Date.newInstance({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 37,
        second: 35
    });
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.Date._dateToIlib(datMyBday)));
}

function testDateToIlibString() {
    var strMyBday = "Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)";
    var ildMyBday = ilib.Date.newInstance({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 37,
        second: 35
    });
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.Date._dateToIlib(strMyBday)));
}

function testDateToIlibInteger() {
    var intMyBday = 1234657890000;
    var ildMyBday = ilib.Date.newInstance({unixtime: 1234657890000});
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.Date._dateToIlib(intMyBday)));
}

function testDateToIlibIlibDate() {
    var ildMyBday = ilib.Date.newInstance({unixtime: 1234657890000});
    assertObjectEquals(ildMyBday, ilib.Date._dateToIlib(ildMyBday));
}

function testDateGetJSDateBeyond32Bits() {
	var d = ilib.Date.newInstance({
		year: 2040,  // beyond the end of 32-bit unix time
		month: 1,
		day: 1
	});
	
	var jsd = d.getJSDate();
	
	assertNotUndefined(jsd);
	assertEquals(2040, jsd.getFullYear());
	assertEquals(0, jsd.getMonth());
	assertEquals(1, jsd.getDay());
}