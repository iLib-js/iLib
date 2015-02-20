function testDurFmtORFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s", duration.toString());
};

function testDurFmtORFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s", duration.toString());
};

function testDurFmtORFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 1:01:01", duration.toString());
};

function testDurFmtORFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se", duration.toString());
};

function testDurFmtORFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 y 1 m 1 w 1 d 1 h 1 min 1 s", duration.toString());
};

function testDurFmtORFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "or-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s", duration.toString());
};


function testDurFmtORAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "or-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 y, 2 m, 2 w, 2 d, 2 h, 2 min, 2 s", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtORFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "or-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1y 1m 1w 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
