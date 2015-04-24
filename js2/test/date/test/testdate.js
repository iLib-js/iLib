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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
var DateFactory = require("./../lib/DateFactory.js");

function testDateConstructor() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
};

function testDateConstructorFull() {
    var gd = new DateFactory({
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
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setYears(123);
    
    assertEquals(123, gd.getYears());
};

function testDateSetMonths() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setMonths(7);
    
    assertEquals(7, gd.getMonths());
};

function testDateSetDays() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setDays(12);
    
    assertEquals(12, gd.getDays());
};

function testDateSetHours() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setHours(12);
    
    assertEquals(12, gd.getHours());
};

function testDateSetMinutes() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setMinutes(13);
    
    assertEquals(13, gd.getMinutes());
};

function testDateSetSeconds() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setSeconds(23);
    
    assertEquals(23, gd.getSeconds());
};

function testDateSetMilliseconds() {
    var gd = new DateFactory();
    
    assertNotNull(gd);
    
    gd.setMilliseconds(123);
    
    assertEquals(123, gd.getMilliseconds());
};


function testDateFactoryRightType() {
    var date = DateFactory({
    	type: "gregorian"
    });
    
    assertNotNull(date);
    assertEquals("gregorian", date.getCalendar());
};

function testDateFactoryDefaultGregorian() {
    var date = DateFactory();
    
    assertNotNull(date);
    assertEquals("gregorian", date.getCalendar());
};

function testDateFactoryNonGregorian() {
    var date = DateFactory({
    	type: "hebrew"
    });
    
    assertNotNull(date);
    assertEquals("hebrew", date.getCalendar());
};

function testDateFactoryNonGregorianWithCalendar() {
    var date = DateFactory({
    	calendar: "hebrew"
    });
    
    assertNotNull(date);
    assertEquals("hebrew", date.getCalendar());
};

function testDateFactoryBogus() {
    var date = DateFactory({
    	type: "asdf"
    });
    
    assertUndefined(date);
};

function testDateToIlibUndefined() {
    var date = DateFactory._dateToIlib();
    
    assertUndefined(date);
}

function testDateToIlibNull() {
    var date = DateFactory._dateToIlib(null);
    
    assertNull(date);
}

function testDateToIlibDateWithDate() {
	var d = new Date();
    var date = DateFactory._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
    assertEquals(d.getTime(), date.getTime());
}

function testDateToIlibDateWithIlibDate() {
	var d = new GregorianDate();
    var date = DateFactory._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
    assertEquals(d.getTime(), date.getTime());
}

function testDateToIlibDateWithNumber() {
	var date = DateFactory._dateToIlib(1000);
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
    assertEquals(1000, date.getTime());
}

function testDateToIlibDateWithString() {
	var date = DateFactory._dateToIlib("Wed Mar 05 2014 14:18:12 GMT-0800");
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
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
    var date = DateFactory._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
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
	var date = DateFactory._dateToIlib(d);
    
    assertEquals("object", typeof(date));
    assertNotUndefined(typeof(date.cal));
    assertEquals("gregorian", date.cal.type);
    assertEquals(now.getFullYear(), date.year);
    assertEquals(now.getMonth(), date.month-1);
    assertEquals(now.getDate(), date.day);
    assertEquals(now.getHours(), date.hour);
    assertEquals(now.getMinutes(), date.minute);
    assertTrue(date.second - now.getSeconds() <= 1);
}

function testDateToIlibDate() {
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
    var ildMyBday = DateFactory({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 37,
        second: 35
    });
    var fmt = new DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(DateFactory._dateToIlib(datMyBday)));
}

function testDateToIlibString() {
    var strMyBday = "Fri Aug 13 1982 13:37:35 GMT-0700";
    var ildMyBday = DateFactory({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 37,
        second: 35
    });
    var fmt = new DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(DateFactory._dateToIlib(strMyBday)));
}

function testDateToIlibInteger() {
    var intMyBday = 1234657890000;
    var ildMyBday = DateFactory({unixtime: 1234657890000});
    var fmt = new DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(DateFactory._dateToIlib(intMyBday)));
}

function testDateToIlibIlibDate() {
    var ildMyBday = DateFactory({unixtime: 1234657890000});
    assertObjectEquals(ildMyBday, DateFactory._dateToIlib(ildMyBday));
}

function testDateGetJSDateBeyond32Bits() {
	var d = DateFactory({
		year: 2040,  // beyond the end of 32-bit unix time
		month: 1,
		day: 1
	});
	
	var jsd = d.getJSDate();
	
	assertNotUndefined(jsd);
	assertEquals(2040, jsd.getFullYear());
	assertEquals(0, jsd.getMonth());
	assertEquals(1, jsd.getDate());
}
