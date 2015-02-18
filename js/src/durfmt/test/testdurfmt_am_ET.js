/*
 * testdurfmt_am_ET.js - test the duration formatter object
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

function testDurFmtAMFormatShortDefaultStyle1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1ዓ 1ወ 1ሳ 1ቀ 1ሰዓ 1ደ 1ሰከ", duration.toString());
};

function testDurFmtAMFormatShortText1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1ዓ 1ወ 1ሳ 1ቀ 1ሰዓ 1ደ 1ሰከ", duration.toString());
};

function testDurFmtAMFormatShortClock1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1ዓ 1ወ 1ሳ 1ቀ 1:01:01", duration.toString());
};

function testDurFmtAMFormatMedium1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1 ዓመ 1 ወራ 1 ሳም 1 ቀና 1 ሰዓ 1 ደቂ 1 ሰከ", duration.toString());
};

function testDurFmtAMFormatLong1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1 ዓመታት፣ 1 ወራት፣ 1 ሳምን፣ 1 ቀናት፣ 1 ሰዓቶች፣ 1 ደቂቃ፣ እና 1 ሰከን", duration.toString());
};

function testDurFmtAMFormatFull1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("1 ዓመታት፣ 1 ወራት፣ 1 ሳምንታት፣ 1 ቀናት፣ 1 ሰዓቶች፣ 1 ደቂቃዎች፣ እና 1 ሰከንዶች", duration.toString());
};

function testDurFmtAMFormatShortDefaultStyle2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2ዓ 2ወ 2ሳ 2ቀ 2ሰዓ 2ደ 2ሰከ", duration.toString());
};

function testDurFmtAMFormatShortText2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2ዓ 2ወ 2ሳ 2ቀ 2ሰዓ 2ደ 2ሰከ", duration.toString());
};

function testDurFmtAMFormatShortClock2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2ዓ 2ወ 2ሳ 2ቀ 2:02:02", duration.toString());
};

function testDurFmtAMFormatMedium2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2 ዓመ 2 ወራ 2 ሳም 2 ቀና 2 ሰዓ 2 ደቂ 2 ሰከ", duration.toString());
};

function testDurFmtAMFormatLong2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2 ዓመታት፣ 2 ወራት፣ 2 ሳምን፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃ፣ እና 2 ሰከን", duration.toString());
};

function testDurFmtAMFormatFull2() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች፣ እና 2 ሰከንዶች", duration.toString());
};

function testDurFmtAMFormatShortDefaultStyle3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3ዓ 3ወ 3ሳ 3ቀ 3ሰዓ 3ደ 3ሰከ", duration.toString());
};

function testDurFmtAMFormatShortText3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3ዓ 3ወ 3ሳ 3ቀ 3ሰዓ 3ደ 3ሰከ", duration.toString());
};

function testDurFmtAMFormatShortClock3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3ዓ 3ወ 3ሳ 3ቀ 3:03:03", duration.toString());
};

function testDurFmtAMFormatMedium3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3 ዓመ 3 ወራ 3 ሳም 3 ቀና 3 ሰዓ 3 ደቂ 3 ሰከ", duration.toString());
};

function testDurFmtAMFormatLong3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3 ዓመታት፣ 3 ወራት፣ 3 ሳምን፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃ፣ እና 3 ሰከን", duration.toString());
};

function testDurFmtAMFormatFull3() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች፣ እና 3 ሰከንዶች", duration.toString());
};

function testDurFmtAMFormatShortDefaultStyle11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11ዓ 11ወ 11ሳ 11ቀ 11ሰዓ 11ደ 11ሰከ", duration.toString());
};

function testDurFmtAMFormatShortText11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11ዓ 11ወ 11ሳ 11ቀ 11ሰዓ 11ደ 11ሰከ", duration.toString());
};

function testDurFmtAMFormatShortClock11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11ዓ 11ወ 11ሳ 11ቀ 11:11:11", duration.toString());
};

function testDurFmtAMFormatMedium11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11 ዓመ 11 ወራ 11 ሳም 11 ቀና 11 ሰዓ 11 ደቂ 11 ሰከ", duration.toString());
};

function testDurFmtAMFormatLong11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11 ዓመታት፣ 11 ወራት፣ 11 ሳምን፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃ፣ እና 11 ሰከን", duration.toString());
};

function testDurFmtAMFormatFull11() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች፣ እና 11 ሰከንዶች", duration.toString());
};

function testDurFmtAMAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsyncWithLocale1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("1 ዓመታት፣ 1 ወራት፣ 1 ሳምንታት፣ 1 ቀናት፣ 1 ሰዓቶች፣ 1 ደቂቃዎች፣ እና 1 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsync2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች፣ እና 2 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsyncWithLocale2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች፣ እና 2 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsync3() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች፣ እና 3 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsyncWithLocale3() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች፣ እና 3 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsync11() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች፣ እና 11 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsyncWithLocale11() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች፣ እና 11 ሰከንዶች", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMFormatShortClockAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};



function testDurFmtAMFormatWesternShortDefaultStyle1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};

function testDurFmtAMFormatWesternShortText1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};

function testDurFmtAMFormatWesternShortClock1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};

function testDurFmtAMFormatWesternMedium1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};

function testDurFmtAMFormatWesternLong1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};

function testDurFmtAMFormatWesternFull1() {
    var fmt = new ilib.DurFmt({
    	locale: "am-ET",
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
    assertEquals("", duration.toString());
};


function testDurFmtAMAsync2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMAsyncWithLocale2() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAMFormatWesternShortClockAsync1() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "am-ET",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
