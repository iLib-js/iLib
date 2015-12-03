/*
 * testdurfmtasync.js - test the duration formatter object asynchronously
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

var DurationFmt = require("./../lib/DurationFmt.js");

function testDurFmtAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	length: "full",
    	sync: false,
    	locale: "en-GB",
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2,
    	    	millisecond: 2
    	    });
    	    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds, and 2 milliseconds", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fr-FR",
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
    	    	second: 2,
    	    	millisecond: 2
    	    });
    	    assertEquals("2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes, 2 secondes et 2 millisecondes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fr-FR",
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
    	    	second: 1,
    	    	millisecond: 1
    	    });
    	    assertEquals("1a 1mo 1sm 1j 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtBGAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bg-BG",
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
    	    assertEquals("2 години, 2 месеца, 2 седмици, 2 дена, 2 часа, 2 минути и 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtBGAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bg-BG",
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
    	    assertEquals("2 години, 2 месеца, 2 седмици, 2 дена, 2 часа, 2 минути и 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtBSLatnAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	    assertEquals("2 godine, 2 meseca, 2 nedelje, 2 dana, 2 sata, 2 minute i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtCSAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "cs-CZ",
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
    	    assertEquals("2 roky, 2 měsíce, 2 týdny, 2 dny, 2 hodiny, 2 minuty a 2 sekundy", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtDAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "da-DK",
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
    	    assertEquals("2 år, 2 måneder, 2 uger, 2 dage, 2 timer, 2 minutter og 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtGRAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "el-GR",
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
    	    assertEquals("2 έτη, 2 μήνες, 2 εβδομάδες, 2 ημέρες, 2 ώρες, 2 λεπτά και 2 δευτερόλεπτα", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtESAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "es-CO",
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
    	    assertEquals("2 años, 2 meses, 2 semanas, 2 días, 2 horas, 2 minutos y 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtETAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "et-EE",
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
    	    assertEquals("2 aastat, 2 kuud, 2 nädalat, 2 ööpäeva, 2 tundi, 2 minutit ja 2 sekundit", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fa-IR",
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
    	    assertEquals("۲ سال،‏ ۲ ماه،‏ ۲ هفته،‏ ۲ روز،‏ ۲ ساعت،‏ ۲ دقیقه، و ۲ ثانیه", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFIAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fi-FI",
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
    	    assertEquals("2 vuotta, 2 kuukautta, 2 viikkoa, 2 päivää, 2 tuntia, 2 minuuttia ja 2 sekuntia", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


//test cases for fr-CA

function testDurFmtFRCAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fr-CA",
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
    	    assertEquals("2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes et 2 secondes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFRCAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "fr-CA",
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
    	    assertEquals("1a 1mo 1sm 1j 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for ga-IE

function testDurFmtGAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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




function testDurFmtGAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ga-IE",
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

function testDurFmtGAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ga-IE",
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

//test cases for hebrew

function testDurFmtHEAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "he-IL",
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
    	    assertEquals("2 שנים, 2 חודשים, 2 שבועות, 2 ימים, 2 שעות, 2 דקות ו2 שניות", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHEFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "he-IL",
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
    	    assertEquals("1ש 1ח 1ש ‏1 יום 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for hi-IN

function testDurFmtHIAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hi-IN",
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
    	    assertEquals("2 साल, 2 महीने, 2 सप्ताह, 2 दिन, 2 घंटे, 2 मिनट, और 2 सेकंड", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHIFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hi-IN",
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
    	    assertEquals("1स 1म 1स 1द 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for marathi mr-IN

function testDurFmtMRAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mr-IN",
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
    	    assertEquals("2 वर्षे, 2 महिने, 2 आठवडे, 2 दिवस, 2 तास, 2 मिनिटे आणि 2 सेकंद", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


function testDurFmtMRFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mr-IN",
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
    	    assertEquals("1व 1म 1आ 1द 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//testa cases for Telugu (te-IN)

function testDurFmtTEAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "te-IN",
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
    	    assertEquals("2 సంవత్సరాలు, 2 నెలలు, 2 వారాలు, 2 రోజులు, 2 గంటలు, 2 నిమిషాలు మరియు 2 సెకన్లు", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTEFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "te-IN",
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
    	    assertEquals("1స 1న 1వ 1ర 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for kannada(kn-IN)

function testDurFmtKNAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "kn-IN",
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
    	    assertEquals("2 ವರ್ಷಗಳು, 2 ತಿಂಗಳುಗಳು, 2 ವಾರಗಳು, 2 ದಿನಗಳು, 2 ಗಂಟೆಗಳು, 2 ನಿಮಿಷಗಳು, ಮತ್ತು 2 ಸೆಕೆಂಡುಗಳು", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKNFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "kn-IN",
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
    	    assertEquals("1ವ 1ತ 1ವ 1ದ 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for tamil(ta-IN)

function testDurFmtTAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ta-IN",
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
    	    assertEquals("2 வருடங்கள், 2 மாதங்கள், 2 வாரங்கள், 2 நாட்கள், 2 மணிநேரம், 2 நிமிடங்கள் மற்றும் 2 வினாடிகள்", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ta-IN",
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
    	    assertEquals("1வ 1ம 1வ 1ந 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Malaylam(ml-IN)

function testDurFmtMLAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ml-IN",
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
    	    assertEquals("2 വർഷം, 2 മാസം, 2 ആഴ്ച, 2 ദിവസം, 2 മണിക്കൂർ, 2 മിനിട്ട്,  എന്നിവ2 സെക്കന്റ്", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMLFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ml-IN",
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
    	    assertEquals("1വ 1മ 1ആ 1ദ 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Gujrati(gu-IN)

function testDurFmtGUAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "gu-IN",
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
    	    assertEquals("2 વર્ષ, 2 મહિનો, 2 અઠવાડિયા, 2 દિવસ, 2 કલાક, 2 મિનિટ અને 2 સેકંડ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtGUFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "gu-IN",
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
    	    assertEquals("1વ 1મ 1અ 1દ 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for Bengali(bn-IN)

function testDurFmtBNAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bn-IN",
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
    	    assertEquals("২ বছর, ২ মাস, ২ সপ্তাহ, ২ দিন, ২ ঘন্টা, ২ মিনিট, এবং ২ সেকেন্ড", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtBNFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bn-IN",
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
    	    assertEquals("১ব ১ম ১স ১দ ১:০১:০১", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtBNFormatShortClockAsyncWestern() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	useNative: false,
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
    	    assertEquals("1ব 1ম 1স 1দ 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Assamese(as-IN)
/*

function testDurFmtASAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "as-IN",
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
    	    assertEquals("y", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtASFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "as-IN",
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
    	    assertEquals("y", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
*/

//test cases for Punjabi(pa-IN)

function testDurFmtPAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pa-IN",
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
    	    assertEquals("2 ਸਾਲ, 2 ਮਹੀਨੇ, 2 ਹਫ਼ਤੇ, 2 ਦਿਨ, 2 ਘੰਟੇ, 2 ਮਿੰਟ, 2 ਸਕਿੰਟ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pa-IN",
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
    	    assertEquals("1ਸ 1ਮ 1ਹ 1ਦਿ 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Urdu(ur-IN)

function testDurFmtURAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ur-IN",
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
    	    assertEquals("۲ سال، ۲ مہینے، ۲ ہفتے، ۲ دن، ۲ گھنٹے، ۲ منٹ، اور ۲ سیکنڈ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtURAsyncWithLocaleWestern() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ur-IN",
    	length: "full",
    	sync: false,
    	useNative: false,
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
    	    assertEquals("2 سال، 2 مہینے، 2 ہفتے، 2 دن، 2 گھنٹے، 2 منٹ، اور 2 سیکنڈ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtURFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ur-IN",
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
    	    assertEquals("۱س ۱م ۱ہ ۱د ‏۱:۰۱:۰۱", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for croation

function testDurFmtHRAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hr-HR",
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
    	    assertEquals("2 godine, 2 mjeseca, 2 tjedna, 2 dana, 2 sata, 2 minute i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHRFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hr-HR",
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
    	    assertEquals("1g 1m 1t 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for hungarian

function testDurFmtHUAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hu-HU",
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
    	    assertEquals("2 év, 2 hónap, 2 hét, 2 nap, 2 óra, 2 perc és 2 másodperc", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHUFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "hu-HU",
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
    	    assertEquals("1é 1h 1h 1n 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for indonesia

function testDurFmtIDAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "id-ID",
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
    	    assertEquals("2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 menit, dan 2 detik", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtIDFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "id-ID",
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
    	    assertEquals("1t 1b 1m 1h 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for Italy

function testDurFmtITAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "it-IT",
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
    	    assertEquals("2 anni, 2 mesi, 2 settimane, 2 giorni, 2 ore, 2 minuti, e 2 secondi", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtITFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "it-IT",
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
    	    assertEquals("1a 1me 1st 1g 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for japanese

function testDurFmtJAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ja-JP",
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
    	    	second: 2,
    	millisecond: 2
    	    });
    	    assertEquals("2年、2ヶ月、2週間、2日、2時間、2分、2秒、2ミリ秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtJAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ja-JP",
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
    	    	second: 1,
    	millisecond: 1
    	    });
    	    assertEquals("1年1ヶ月1週間1日01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for kk-Cyrl-KZ

function testDurFmtKKAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	    assertEquals("2 жыл, 2 ай, 2 апта, 2 тәулік, 2 сағат, 2 минут, 2 секунд", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKKFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	    assertEquals("1ж 1а 1а 1т 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for ko-KR

function testDurFmtKOAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ko-KR",
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
    	    	second: 2,
    	millisecond: 1
    	    });
    	    assertEquals("2년, 2개월, 2주, 2일, 2시간, 2분, 2초 및 1밀리초", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKOFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ko-KR",
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
    	    assertEquals("1년 1개 1주 1일 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtKUAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKUFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ku-Arab-IQ",
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

//test cases for lt-LT

function testDurFmtLTAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "lt-LT",
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
    	    assertEquals("2 metai, 2 mėnesiai, 2 savaitės, 2 dienos, 2 valandos, 2 minutės ir 2 sekundės", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtLTFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "lt-LT",
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
    	    assertEquals("1m 1m 1s 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for lv-LV

function testDurFmtLVAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "lv-LV",
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
    	    assertEquals("2 gadi, 2 mēneši, 2 nedēļas, 2 diennaktis, 2 stundas, 2 minūtes un 2 sekundes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtLVFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "lv-LV",
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
    	    assertEquals("1g 1m 1n 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for mk-MK

function testDurFmtMKAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mk-MK",
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
    	    assertEquals("2 години, 2 месеци, 2 недели, 2 денови, 2 часови, 2 минути, 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMKFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mk-MK",
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
    	    assertEquals("1г 1м 1н 1д 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for mn-Cyrl-MN

function testDurFmtMNAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMNFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "mn-Cyrl-MN",
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

//test cases for ms-MY

function testDurFmtMSAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ms-MY",
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
    	    assertEquals("2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 minit, dan 2 saat", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMSFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ms-MY",
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
    	    assertEquals("1t 1b 1m 1h 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for nb-NO

function testDurFmtNBAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "nb-NO",
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
    	    assertEquals("2 år, 2 måneder, 2 uker, 2 dager, 2 timer, 2 minutter og 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtNBFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "nb-NO",
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
    	    assertEquals("1å 1m 1u 1d 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for nl-NL

function testDurFmtNLAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "nl-NL",
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
    	    assertEquals("2 jaar, 2 maanden, 2 weken, 2 dagen, 2 uur, 2 minuten en 2 seconden", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtNLFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "nl-NL",
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
    	    assertEquals("1j 1m 1w 1d 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for pl-PL

function testDurFmtPLFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pl-PL",
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
    	    assertEquals("1r 1m 1t 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for pt-BR

function testDurFmtPTAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pt-BR",
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
    	    assertEquals("2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPTFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pt-BR",
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
    	    assertEquals("1a 1me 1sm 1d 01H01min01s", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for ro-RO

function testDurFmtROAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ro-RO",
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
    	    assertEquals("2 ani, 2 luni, 2 săptămâni, 2 zile, 2 ore, 2 minute şi 2 secunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtROFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ro-RO",
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
    	    assertEquals("1a 1l 1s 1z 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for ru-RU

function testDurFmtRUAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ru-RU",
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
    	    assertEquals("2 года, 2 месяца, 2 недели, 2 дня, 2 часа, 2 минуты и 2 секунды", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtRUFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "ru-RU",
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
    	    assertEquals("1г 1м 1н 1д 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for sk-SK

function testDurFmtSKAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sk-SK",
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
    	    assertEquals("2 roky, 2 mesiace, 2 týždne, 2 dni, 2 hodiny, 2 minúty a 2 sekundy", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSKFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sk-SK",
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
    	    assertEquals("1r 1m 1t 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for sq-AL

function testDurFmtSQAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sq-AL",
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
    	    assertEquals("2 vjet, 2 muaj, 2 javë, 2 ditë, 2 orë, 2 minuta, 2 sekonda", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSQFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sq-AL",
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
    	    assertEquals("1v 1m 1j 1d 1.01.01.", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for sr-Latn-RS

function testDurFmtSRAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	    assertEquals("2 godine, 2 meseca, 2 nedelje, 2 dana, 2 sata, 2 minute i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSRFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	    assertEquals("1g 1m 1n 1d 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


function testDurFmtTHAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "th-TH",
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
    	    assertEquals("2 ปี 2 เดือน 2 สัปดาห์ 2 วัน 2 ชั่วโมง 2 นาที และ2 วินาที", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTHFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "th-TH",
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
    	    assertEquals("1ป 1เ 1ส 1ว 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtUKUAAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uk-UA",
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
    	    assertEquals("2 роки, 2 місяці, 2 тижні, 2 дні, 2 години, 2 хвилини та 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUKUAFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uk-UA",
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
    	    assertEquals("1р 1м 1т 1д 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for uz-Cyrl-UZ
function testDurFmtUZAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUZFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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

function testDurFmtUZLATNAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	    assertEquals("", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUZLATNFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	    assertEquals("1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtVIAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "vi-VN",
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
    	    assertEquals("2 năm, 2 tháng, 2 tuần, 2 ngày, 2 giờ, 2 phút và 2 giây", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtVIFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "vi-VN",
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
    	    assertEquals("1n 1t 1t 1n 01H01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtZHAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	    assertEquals("2年、2個月、2週、2天、2小時、2分鐘和2秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtZHFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	    assertEquals("1年1個月1週1天1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtZHHKAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	    assertEquals("2年、2個月、2週、2天、2小時、2分鐘和2秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtZHHKFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	    assertEquals("1年1個月1週1天1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtTRAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "tr-TR",
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
    	    assertEquals("2 yıl, 2 ay, 2 hafta, 2 gün, 2 saat, 2 dakika ve 2 saniye", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTRFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "tr-TR",
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
    	    assertEquals("1y 1a 1h 1g 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtSVAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sv-SE",
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
    	    assertEquals("2 år, 2 månader, 2 veckor, 2 dygn, 2 timmar, 2 minuter och 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSVFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sv-SE",
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
    	    assertEquals("1å 1må 1v 1d 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtSLAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sl-SI",
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
    	    assertEquals("2 leti, 2 meseca, 2 tedna, 2 dni, 2 uri, 2 minuti in 2 sekundi", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSLFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "sl-SI",
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
    	    assertEquals("1l 1m 1t 1d 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtPTPTAsyncWithLocale() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pt-PT",
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
    	    assertEquals("2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPTPTFormatShortClockAsync() {
	var callbackCalled = false;
    new DurationFmt({
    	locale: "pt-PT",
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
    	    assertEquals("1a 1me 1sm 1d 01H01min01s", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
