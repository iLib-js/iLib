/*
 * testdurfmt_ar_SA.js - test the duration formatter object
 * 
 * Copyright © 2012-2015, JEDLSoft
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

//test cases for ar-SA

function testDurFmtARFormatShortDefaultStyle1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏١ سنة، ١ شهر، ١ أ، ١ ي، ١ س، ١ د، ١ ث", duration.toString());
};

function testDurFmtARFormatShortText1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏١ سنة، ١ شهر، ١ أ، ١ ي، ١ س، ١ د، ١ ث", duration.toString());
};

function testDurFmtARFormatShortClock1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏١ سنة، ١ شهر، ١ أ، ١ ي، ‏١:٠١:٠١", duration.toString());
};

function testDurFmtARFormatMedium1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
};

function testDurFmtARFormatLong1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏سنة واحدة، وشهر، وأسبوع، ويوم، و١ س، و١ د، و١ ث", duration.toString());
};

function testDurFmtARFormatFull1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
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
    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
};

function testDurFmtARFormatShortDefaultStyle2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short"
    });
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
    assertEquals("‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ٢ س، ٢ د، ٢ ث", duration.toString());
};

function testDurFmtARFormatShortText2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "text"
    });
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
    assertEquals("‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ٢ س، ٢ د، ٢ ث", duration.toString());
};

function testDurFmtARFormatShortClock2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "clock"
    });
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
    assertEquals("‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ‏٢:٠٢:٠٢", duration.toString());
};

function testDurFmtARFormatMedium2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "medium"
    });
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
    assertEquals("‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان", duration.toString());
};

function testDurFmtARFormatLong2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "long"
    });
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
    assertEquals("‏سنتان، و٢ شهر، وأسبوعان، ويومان، و٢ س، و٢ د، و٢ ث", duration.toString());
};

function testDurFmtARFormatFull2() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full"
    });
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
    assertEquals("‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان", duration.toString());
};

function testDurFmtARFormatShortDefaultStyle3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ٣ س، ٣ د، ٣ ث", duration.toString());
};

function testDurFmtARFormatShortText3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ٣ س، ٣ د، ٣ ث", duration.toString());
};

function testDurFmtARFormatShortClock3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ‏٣:٠٣:٠٣", duration.toString());
};

function testDurFmtARFormatMedium3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان", duration.toString());
};

function testDurFmtARFormatLong3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنة، و٣ شهر، و٣ أسابيع، و٣ يوم، و٣ س، و٣ د، و٣ ث", duration.toString());
};

function testDurFmtARFormatFull3() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 3,
    	month: 3,
    	week: 3,
    	day: 3,
    	hour: 3,
    	minute: 3,
    	second: 3
    });
    assertEquals("‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان", duration.toString());
};

function testDurFmtARFormatShortDefaultStyle11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });
    assertEquals("‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ١١ س، ١١ د، ١١ ث", duration.toString());
};

function testDurFmtARFormatShortText11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });
    assertEquals("‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ١١ س، ١١ د، ١١ ث", duration.toString());
};

function testDurFmtARFormatShortClock11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });
    assertEquals("‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ‏١١:١١:١١", duration.toString());
};

function testDurFmtARFormatMedium11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });
    assertEquals("‏١١ سنة، و١١ شهر، و١١ أسبوع، و١١ يوم، و١١ ساعة، و١١ دقيقة، و١١ ثانية", duration.toString());
};

function testDurFmtARFormatLong11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });
    assertEquals("‏١١ سنة، و١١ شهر، و١١ أسبوعًا، و١١ يوم، و١١ س، و١١ د، و١١ ث", duration.toString());
};

function testDurFmtARFormatFull11() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 11,
    	month: 11,
    	week: 11,
    	day: 11,
    	hour: 11,
    	minute: 11,
    	second: 11
    });           
    assertEquals("‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية", duration.toString());
};

function testDurFmtARAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
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
    	    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsyncWithLocale1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
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
    	    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsync2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
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
    	    assertEquals("‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان", duration.toString());

    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsyncWithLocale2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
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
    	    assertEquals("‏سنتان، شهران، أسبوعان، يومان، ساعتان، دقيقتان، و ثانيتان", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsync3() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 3,
    	    	month: 3,
    	    	week: 3,
    	    	day: 3,
    	    	hour: 3,
    	    	minute: 3,
    	    	second: 3
    	    });
    	    assertEquals("‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsyncWithLocale3() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 3,
    	    	month: 3,
    	    	week: 3,
    	    	day: 3,
    	    	hour: 3,
    	    	minute: 3,
    	    	second: 3
    	    });
    	    assertEquals("‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsync11() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 11,
    	    	month: 11,
    	    	week: 11,
    	    	day: 11,
    	    	hour: 11,
    	    	minute: 11,
    	    	second: 11
    	    });
    	    assertEquals("‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsyncWithLocale11() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 11,
    	    	month: 11,
    	    	week: 11,
    	    	day: 11,
    	    	hour: 11,
    	    	minute: 11,
    	    	second: 11
    	    });
    	    assertEquals("‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARFormatShortClockAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
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
    	    assertEquals("‏١ سنة، ١ شهر، ١ أ، ١ ي، ‏١:٠١:٠١", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};



function testDurFmtARFormatWesternShortDefaultStyle1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	useNative: false
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
    assertEquals("‏1 سنة، 1 شهر، 1 أ، 1 ي، 1 س، 1 د، 1 ث", duration.toString());
};

function testDurFmtARFormatWesternShortText1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "text",
    	useNative: false
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
    assertEquals("‏1 سنة، 1 شهر، 1 أ، 1 ي، 1 س، 1 د، 1 ث", duration.toString());
};

function testDurFmtARFormatWesternShortClock1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "clock",
    	useNative: false
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
    assertEquals("‏1 سنة، 1 شهر، 1 أ، 1 ي، ‏1:01:01", duration.toString());
};

function testDurFmtARFormatWesternMedium1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "medium",
    	useNative: false
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
    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
};

function testDurFmtARFormatWesternLong1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "long",
    	useNative: false
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
    assertEquals("‏سنة واحدة، وشهر، وأسبوع، ويوم، و1 س، و1 د، و1 ث", duration.toString());
};

function testDurFmtARFormatWesternFull1() {
    var fmt = new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	useNative: false
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
    assertEquals("‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية", duration.toString());
};


function testDurFmtARAsync2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	useNative: false,
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
    	    assertEquals("‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARAsyncWithLocale2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "full",
    	useNative: false,
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
    	    assertEquals("‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtARFormatWesternShortClockAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ar-SA",
    	length: "short",
    	style: "clock",
    	useNative: false,
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
    	    assertEquals("‏1 سنة، 1 شهر، 1 أ، 1 ي، ‏1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
