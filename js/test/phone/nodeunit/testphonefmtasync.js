/*
 * testphonefmtasync.js - Test the phonefmt
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../.././../lib/PhoneFmt.js");
}

module.exports.phonefmtasync = {
    testFormatAsyncUSNoLocale: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
            areaCode: "456",
            subscriberNumber: "3453434"
        }, {
            sync: false,
            onLoad: function(parsed) {
                // default to US format
                new PhoneFmt({
                    style: "default",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "(456) 345-3434";
                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncUSPlusIDDtoUnknownCountry: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
            iddPrefix: "+",
            countryCode: "506",    // costa rica
            subscriberNumber: "87654321"
        }, {
            sync: false,
            onLoad: function(parsed) {
                // default to US format
                new PhoneFmt({
                    locale: "en-US",
                    style: "dashes",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "+506 87654321";    // use last resort rule for subscriber number

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncUSStyle0Emergency: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
            emergency: "911"
        }, {
            sync: false,
            onLoad: function(parsed) {
                // default to US format
                new PhoneFmt({
                    locale: "en-US",
                    style: "default",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "911 ";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncUSNumberWithFRMCC: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        }, {
            sync: false,
            onLoad: function(parsed) {
                // default to US format
                new PhoneFmt({
                    locale: "en-US",
                    style: "default",
                    mcc: "208",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "06 15 98 76 54";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncWithParamsFormatUSInternational: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {
            locale: "en-US",
            sync: false,
            onLoad: function(parsed) {
                new PhoneFmt({
                    locale: "en-US",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "+33 1 12 34 56 78";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncGBLongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
                trunkAccess: "0",
                areaCode: "17684",
                subscriberNumber: "12345"
        }, {
            locale: "en-GB",
            sync: false,
            onLoad: function(parsed) {
                new PhoneFmt({
                    locale: "en-GB",
                    style: "default",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "(0176 84) 12345";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });


    },

    testFormatAsyncDEStyle1: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        }, {
            locale: "de-DE",
            sync: false,
            onLoad: function(parsed) {
                new PhoneFmt({
                    locale: "de-DE",
                    style: "alten",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "06224/1 23 45 67";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testFormatAsyncJPStyle1: function(test) {
        test.expect(1);
        var formatted;
        new PhoneNumber("0668795111", {
            locale: "ja-JP",
            sync: false,
            onLoad: function(parsed) {
                new PhoneFmt({
                    locale: "ja-JP",
                    style: "default",
                    sync: false,
                    onLoad: function(fmt) {
                        var expected = "06-6879-5111";

                        fmt.format(parsed, {
                            sync: false,
                            onLoad: function(formatted) {
                                test.equal(formatted, expected);
                                test.done();
                            }
                        });

                    }
                });
            }
        });
    }
};
