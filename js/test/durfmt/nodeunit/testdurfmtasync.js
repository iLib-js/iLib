/*
 * testdurfmtasync.js - test the duration formatter object asynchronously
 * 
 * Copyright © 2012-2015,2017, JEDLSoft
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

if (typeof(DurationFmt) === "undefined") {
    var DurationFmt = require("../.././../lib/DurationFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdurfmtasync = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            length: "full",
            sync: false,
            locale: "en-GB",
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds, and 2 milliseconds");
                test.done();
            }
        });
    
    },
    
    testDurFmtAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fr-FR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes, 2 secondes et 2 millisecondes");
                test.done();
            }
        });
    
    },
    
    testDurFmtFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fr-FR",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "1a 1mo 1sm 1j 01:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtBGAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bg-BG",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 години, 2 месеца, 2 седмици, 2 дена, 2 часа, 2 минути и 2 секунди");
                test.done();
            }
        });
    
    },
    
    testDurFmtBGAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bg-BG",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 години, 2 месеца, 2 седмици, 2 дена, 2 часа, 2 минути и 2 секунди");
                test.done();
            }
        });
    
    },
    
    testDurFmtBSLatnAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bs-Latn-BA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 godine, 2 meseca, 2 nedelje, 2 dana, 2 sata, 2 minute i 2 sekunde");
                test.done();
            }
        });
    
    },
    
    testDurFmtCSAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "cs-CZ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 roky, 2 měsíce, 2 týdny, 2 dny, 2 hodiny, 2 minuty a 2 sekundy");
                test.done();
            }
        });
    
    },
    
    testDurFmtDAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "da-DK",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 år, 2 måneder, 2 uger, 2 dage, 2 timer, 2 minutter og 2 sekunder");
                test.done();
            }
        });
    
    },
    
    testDurFmtGRAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "el-GR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 έτη, 2 μήνες, 2 εβδομάδες, 2 ημέρες, 2 ώρες, 2 λεπτά και 2 δευτερόλεπτα");
                test.done();
            }
        });
    
    },
    
    testDurFmtESAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "es-CO",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 años, 2 meses, 2 semanas, 2 días, 2 horas, 2 minutos y 2 segundos");
                test.done();
            }
        });
    
    },
    
    testDurFmtETAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "et-EE",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 aastat, 2 kuud, 2 nädalat, 2 ööpäeva, 2 tundi, 2 minutit ja 2 sekundit");
                test.done();
            }
        });
    
    },
    
    testDurFmtFAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fa-IR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "۲ سال،‏ ۲ ماه،‏ ۲ هفته،‏ ۲ روز،‏ ۲ ساعت،‏ ۲ دقیقه، و ۲ ثانیه");
                test.done();
            }
        });
    
    },
    
    testDurFmtFIAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fi-FI",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 vuotta, 2 kuukautta, 2 viikkoa, 2 päivää, 2 tuntia, 2 minuuttia ja 2 sekuntia");
                test.done();
            }
        });
    
    },
    
    
    //test cases for fr-CA
    
    testDurFmtFRCAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fr-CA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes et 2 secondes");
                test.done();
            }
        });
    
    },
    
    testDurFmtFRCAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "fr-CA",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1a 1mo 1sm 1j 01:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for ga-IE
    
    testDurFmtGAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1h 1m 1s");
        test.done();
    },
    
    testDurFmtGAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1h 1m 1s");
        test.done();
    },
    
    testDurFmtGAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1:01:01");
        test.done();
    },
    
    testDurFmtGAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se");
        test.done();
    },
    
    testDurFmtGAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y 1 m 1 w 1 d 1 h 1 min 1 s");
        test.done();
    },
    
    testDurFmtGAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    
    
    
    testDurFmtGAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ga-IE",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 y, 2 m, 2 w, 2 d, 2 h, 2 min, 2 s");
                test.done();
            }
        });
    
    },
    
    testDurFmtGAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ga-IE",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1y 1m 1w 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for hebrew
    
    testDurFmtHEAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "he-IL",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 שנים, 2 חודשים, 2 שבועות, 2 ימים, 2 שעות, 2 דקות ו2 שניות");
                test.done();
            }
        });
    
    },
    
    testDurFmtHEFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "he-IL",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ש 1ח 1ש ‏1 יום 01:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for hi-IN
    
    testDurFmtHIAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hi-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 साल, 2 महीने, 2 सप्ताह, 2 दिन, 2 घंटे, 2 मिनट, और 2 सेकंड");
                test.done();
            }
        });
    
    },
    
    testDurFmtHIFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hi-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1स 1म 1स 1द 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for marathi mr-IN
    
    testDurFmtMRAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mr-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 वर्षे, 2 महिने, 2 आठवडे, 2 दिवस, 2 तास, 2 मिनिटे आणि 2 सेकंद");
                test.done();
            }
        });
    
    },
    
    
    testDurFmtMRFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mr-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1व 1म 1आ 1द 1:01:01");
                test.done();
            }
        });
    },
    
    //testa cases for Telugu (te-IN)
    
    testDurFmtTEAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "te-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 సంవత్సరాలు, 2 నెలలు, 2 వారాలు, 2 రోజులు, 2 గంటలు, 2 నిమిషాలు మరియు 2 సెకన్లు");
                test.done();
            }
        });
    
    },
    
    testDurFmtTEFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "te-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1స 1న 1వ 1ర 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for kannada(kn-IN)
    
    testDurFmtKNAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "kn-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 ವರ್ಷಗಳು, 2 ತಿಂಗಳುಗಳು, 2 ವಾರಗಳು, 2 ದಿನಗಳು, 2 ಗಂಟೆಗಳು, 2 ನಿಮಿಷಗಳು, ಮತ್ತು 2 ಸೆಕೆಂಡುಗಳು");
                test.done();
            }
        });
    
    },
    
    testDurFmtKNFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "kn-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ವ 1ತ 1ವ 1ದ 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for tamil(ta-IN)
    
    testDurFmtTAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ta-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 வருடங்கள், 2 மாதங்கள், 2 வாரங்கள், 2 நாட்கள், 2 மணிநேரம், 2 நிமிடங்கள் மற்றும் 2 வினாடிகள்");
                test.done();
            }
        });
    
    },
    
    testDurFmtTAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ta-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1வ 1ம 1வ 1ந 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for Malaylam(ml-IN)
    
    testDurFmtMLAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ml-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 വർഷം, 2 മാസം, 2 ആഴ്ച, 2 ദിവസം, 2 മണിക്കൂർ, 2 മിനിട്ട്,  എന്നിവ2 സെക്കന്റ്");
                test.done();
            }
        });
    
    },
    
    testDurFmtMLFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ml-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1വ 1മ 1ആ 1ദ 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for Gujrati(gu-IN)
    
    testDurFmtGUAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "gu-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 વર્ષ, 2 મહિનો, 2 અઠવાડિયા, 2 દિવસ, 2 કલાક, 2 મિનિટ અને 2 સેકંડ");
                test.done();
            }
        });
    
    },
    
    testDurFmtGUFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "gu-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1વ 1મ 1અ 1દ 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for Bengali(bn-IN)
    
    testDurFmtBNAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bn-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "২ বছর, ২ মাস, ২ সপ্তাহ, ২ দিন, ২ ঘন্টা, ২ মিনিট, এবং ২ সেকেন্ড");
                test.done();
            }
        });
    
    },
    
    testDurFmtBNFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bn-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "১ব ১ম ১স ১দ ১:০১:০১");
                test.done();
            }
        });
    },
    
    testDurFmtBNFormatShortClockAsyncWestern: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "bn-IN",
            length: "short",
            style: "clock",
            sync: false,
            useNative: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ব 1ম 1স 1দ 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for Assamese(as-IN)
    /*
    
    testDurFmtASAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "as-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "y");
                test.done();
            }
        });
    
    },
    
    testDurFmtASFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "as-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "y");
                test.done();
            }
        });
    },
    */
    
    //test cases for Punjabi(pa-Guru-IN)
    
    testDurFmtPAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pa-Guru-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 ਸਾਲ, 2 ਮਹੀਨੇ, 2 ਹਫ਼ਤੇ, 2 ਦਿਨ, 2 ਘੰਟੇ, 2 ਮਿੰਟ, 2 ਸਕਿੰਟ");
                test.done();
            }
        });
    
    },
    
    testDurFmtPAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pa-Guru-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ਸ 1ਮ 1ਹ 1ਦਿ 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for Urdu(ur-IN)
    
    testDurFmtURAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ur-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "۲ سال، ۲ مہینے، ۲ ہفتے، ۲ دن، ۲ گھنٹے، ۲ منٹ، اور ۲ سیکنڈ");
                test.done();
            }
        });
    
    },
    
    testDurFmtURAsyncWithLocaleWestern: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ur-IN",
            length: "full",
            sync: false,
            useNative: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 سال، 2 مہینے، 2 ہفتے، 2 دن، 2 گھنٹے، 2 منٹ، اور 2 سیکنڈ");
                test.done();
            }
        });
    
    },
    
    testDurFmtURFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ur-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "۱س ۱م ۱ہ ۱د ‏۱:۰۱:۰۱");
                test.done();
            }
        });
    },
    
    //test cases for croation
    
    testDurFmtHRAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hr-HR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 godine, 2 mjeseca, 2 tjedna, 2 dana, 2 sata, 2 minute i 2 sekunde");
                test.done();
            }
        });
    
    },
    
    testDurFmtHRFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hr-HR",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1g 1m 1t 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for hungarian
    
    testDurFmtHUAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hu-HU",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 év, 2 hónap, 2 hét, 2 nap, 2 óra, 2 perc és 2 másodperc");
                test.done();
            }
        });
    
    },
    
    testDurFmtHUFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "hu-HU",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1é 1h 1h 1n 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for indonesia
    
    testDurFmtIDAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "id-ID",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 menit, dan 2 detik");
                test.done();
            }
        });
    
    },
    
    testDurFmtIDFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "id-ID",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1t 1b 1m 1h 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for Italy
    
    testDurFmtITAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "it-IT",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 anni, 2 mesi, 2 settimane, 2 giorni, 2 ore, 2 minuti, e 2 secondi");
                test.done();
            }
        });
    
    },
    
    testDurFmtITFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "it-IT",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1a 1me 1st 1g 01.01.01");
                test.done();
            }
        });
    },
    
    
    //test cases for japanese
    
    testDurFmtJAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ja-JP",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "2年、2ヶ月、2週間、2日、2時間、2分、2秒、2ミリ秒");
                test.done();
            }
        });
    
    },
    
    testDurFmtJAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ja-JP",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "1年1ヶ月1週間1日01:01:01");
                test.done();
            }
        });
    },
    
    //test cases for kk-Cyrl-KZ
    
    testDurFmtKKAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "kk-Cyrl-KZ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 жыл, 2 ай, 2 апта, 2 тәулік, 2 сағат, 2 минут, 2 секунд");
                test.done();
            }
        });
    
    },
    
    testDurFmtKKFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "kk-Cyrl-KZ",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ж 1а 1а 1т 1:01:01");
                test.done();
            }
        });
    },
    
    
    //test cases for ko-KR
    
    testDurFmtKOAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ko-KR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
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
                test.equal(duration.toString(), "2년, 2개월, 2주, 2일, 2시간, 2분, 2초 및 1밀리초");
                test.done();
            }
        });
    
    },
    
    testDurFmtKOFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ko-KR",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1년 1개 1주 1일 1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtKUAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ku-Arab-IQ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    
    },
    
    testDurFmtKUFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ku-Arab-IQ",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    },
    
    //test cases for lt-LT
    
    testDurFmtLTAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "lt-LT",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 metai, 2 mėnesiai, 2 savaitės, 2 dienos, 2 valandos, 2 minutės ir 2 sekundės");
                test.done();
            }
        });
    
    },
    
    testDurFmtLTFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "lt-LT",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1m 1m 1s 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for lv-LV
    
    testDurFmtLVAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "lv-LV",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 gadi, 2 mēneši, 2 nedēļas, 2 diennaktis, 2 stundas, 2 minūtes un 2 sekundes");
                test.done();
            }
        });
    
    },
    
    testDurFmtLVFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "lv-LV",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1g 1m 1n 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for mk-MK
    
    testDurFmtMKAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mk-MK",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 години, 2 месеци, 2 недели, 2 денови, 2 часови, 2 минути, 2 секунди");
                test.done();
            }
        });
    
    },
    
    testDurFmtMKFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mk-MK",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1г 1м 1н 1д 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for mn-Cyrl-MN
    
    testDurFmtMNAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mn-Cyrl-MN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    
    },
    
    testDurFmtMNFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "mn-Cyrl-MN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    },
    
    //test cases for ms-Latn-MY
    
    testDurFmtMSAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ms-Latn-MY",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 minit, dan 2 saat");
                test.done();
            }
        });
    
    },
    
    testDurFmtMSFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ms-Latn-MY",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1t 1b 1m 1h 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for nb-NO
    
    testDurFmtNBAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "nb-NO",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 år, 2 måneder, 2 uker, 2 dager, 2 timer, 2 minutter og 2 sekunder");
                test.done();
            }
        });
    
    },
    
    testDurFmtNBFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "nb-NO",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1å 1m 1u 1d 01:01:01");
                test.done();
            }
        });
    },
    
    //test cases for nl-NL
    
    testDurFmtNLAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "nl-NL",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 jaar, 2 maanden, 2 weken, 2 dagen, 2 uur, 2 minuten en 2 seconden");
                test.done();
            }
        });
    
    },
    
    testDurFmtNLFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "nl-NL",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1j 1m 1w 1d 01:01:01");
                test.done();
            }
        });
    },
    
    //test cases for pl-PL
    
    testDurFmtPLFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pl-PL",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1r 1m 1t 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for pt-BR
    
    testDurFmtPTAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pt-BR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos");
                test.done();
            }
        });
    
    },
    
    testDurFmtPTFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pt-BR",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1a 1me 1sm 1d 01H01min01s");
                test.done();
            }
        });
    },
    
    //test cases for ro-RO
    
    testDurFmtROAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ro-RO",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 ani, 2 luni, 2 săptămâni, 2 zile, 2 ore, 2 minute şi 2 secunde");
                test.done();
            }
        });
    
    },
    
    testDurFmtROFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ro-RO",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1a 1l 1s 1z 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for ru-RU
    
    testDurFmtRUAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ru-RU",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 года, 2 месяца, 2 недели, 2 дня, 2 часа, 2 минуты и 2 секунды");
                test.done();
            }
        });
    
    },
    
    testDurFmtRUFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ru-RU",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1г 1м 1н 1д 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for sk-SK
    
    testDurFmtSKAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sk-SK",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 roky, 2 mesiace, 2 týždne, 2 dni, 2 hodiny, 2 minúty a 2 sekundy");
                test.done();
            }
        });
    
    },
    
    testDurFmtSKFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sk-SK",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1r 1m 1t 1d 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for sq-AL
    
    testDurFmtSQAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sq-AL",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 vjet, 2 muaj, 2 javë, 2 ditë, 2 orë, 2 minuta, 2 sekonda");
                test.done();
            }
        });
    
    },
    
    testDurFmtSQFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sq-AL",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1v 1m 1j 1d 1.01.01.");
                test.done();
            }
        });
    },
    
    //test cases for sr-Latn-RS
    
    testDurFmtSRAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sr-Latn-RS",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 godine, 2 meseca, 2 nedelje, 2 dana, 2 sata, 2 minute i 2 sekunde");
                test.done();
            }
        });
    
    },
    
    testDurFmtSRFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sr-Latn-RS",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1g 1m 1n 1d 01.01.01");
                test.done();
            }
        });
    },
    
    
    testDurFmtTHAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "th-TH",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 ปี 2 เดือน 2 สัปดาห์ 2 วัน 2 ชั่วโมง 2 นาที และ2 วินาที");
                test.done();
            }
        });
    
    },
    
    testDurFmtTHFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "th-TH",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1ป 1เ 1ส 1ว 1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtUKUAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uk-UA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 роки, 2 місяці, 2 тижні, 2 дні, 2 години, 2 хвилини та 2 секунди");
                test.done();
            }
        });
    
    },
    
    testDurFmtUKUAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uk-UA",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1р 1м 1т 1д 1:01:01");
                test.done();
            }
        });
    },
    
    //test cases for uz-Cyrl-UZ
    testDurFmtUZAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uz-Cyrl-UZ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    
    },
    
    testDurFmtUZFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uz-Cyrl-UZ",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    },
    
    testDurFmtUZLATNAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uz-Latn-UZ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "");
                test.done();
            }
        });
    
    },
    
    testDurFmtUZLATNFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "uz-Latn-UZ",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtVIAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "vi-VN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 năm, 2 tháng, 2 tuần, 2 ngày, 2 giờ, 2 phút và 2 giây");
                test.done();
            }
        });
    
    },
    
    testDurFmtVIFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "vi-VN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1n 1t 1t 1n 01H01:01");
                test.done();
            }
        });
    },
    
    testDurFmtZHAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hant-TW",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2年、2個月、2週、2天、2小時、2分鐘和2秒");
                test.done();
            }
        });
    
    },
    
    testDurFmtZHFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hant-TW",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1年1個月1週1天1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtZHHKAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hant-HK",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2年、2個月、2週、2天、2小時、2分鐘和2秒");
                test.done();
            }
        });
    
    },
    
    testDurFmtZHHKFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hant-HK",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1年1個月1週1天1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtTRAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "tr-TR",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 yıl, 2 ay, 2 hafta, 2 gün, 2 saat, 2 dakika ve 2 saniye");
                test.done();
            }
        });
    
    },
    
    testDurFmtTRFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "tr-TR",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1y 1a 1h 1g 01:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtSVAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sv-SE",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 år, 2 månader, 2 veckor, 2 dygn, 2 timmar, 2 minuter och 2 sekunder");
                test.done();
            }
        });
    
    },
    
    testDurFmtSVFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sv-SE",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1å 1må 1v 1d 01:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtSLAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sl-SI",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 leti, 2 meseca, 2 tedna, 2 dni, 2 uri, 2 minuti in 2 sekundi");
                test.done();
            }
        });
    
    },
    
    testDurFmtSLFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "sl-SI",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1l 1m 1t 1d 1:01:01");
                test.done();
            }
        });
    },
    
    testDurFmtPTPTAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pt-PT",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos");
                test.done();
            }
        });
    
    },
    
    testDurFmtPTPTFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "pt-PT",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1a 1me 1sm 1d 01H01min01s");
                test.done();
            }
        });
    }
    
};