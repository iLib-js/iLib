/*
 * testdatefmts.js -
 * 
 * Copyright © 2012, 2020 JEDLSoft
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

if (typeof(common) === "undefined") {
    var common = require("../common.js");
}

if (typeof(aux) === "undefined") {
    var aux = require("../datefmts.js");
}

module.exports.testdatefmts = {
    /*
    testDistanceZeroIntrinsicString: function(test) {
        test.expect(1);
        var left = "foo";
        var right = "foo";
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroIntrinsicNumber: function(test) {
        test.expect(1);
        var left = 5.6;
        var right = 5.600;
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroIntrinsicBoolean: function(test) {
        test.expect(1);
        var left = false;
        var right = false;
        test.ok(0, aux.distance(left, right));
        test.done();
    },

    testDistanceZeroIntrinsicNull: function(test) {
        test.expect(1);
        var left = null;
        var right = null;
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroIntrinsicUndefined: function(test) {
        test.expect(1);
        var left = undefined;
        var right = undefined;
        test.ok(0, aux.distance(left, right));
        test.done();
    },*/
    testDistanceOneIntrinsicString: function(test) {
        test.expect(1);
        var left = "foo";
        var right = "foobar";
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneIntrinsicNumber: function(test) {
        test.expect(1);
        var left = 5.6;
        var right = 5.6005;
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneIntrinsicBoolean: function(test) {
        test.expect(1);
        var left = false;
        var right = true;
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneIntrinsicNull: function(test) {
        test.expect(1);
        var left = null;
        var right = "foo";
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneDifferentTypes: function(test) {
        test.expect(1);
        var left = "1";
        var right = 1;
        test.ok(1, aux.distance(left, right));
        test.done();
    },/*
    testDistanceZeroSimple: function(test) {
        test.expect(1);
        var left = {
            a: "b",
            c: "d",
            e: "f"
        };
        var right = {
            a: "b",
            c: "d",
            e: "f"
        };
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroNonStrings: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            b: 0,
            c: true,
            d: false
        };
        var right = {
            a: 1,
            b: 0,
            c: true,
            d: false
        };
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroSubObjects: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            b: 0,
            c: true,
            d: false,
            e: {
                a: "asdf",
                b: true,
                c: 2343.3453,
                d: null,
                e: {
                    x: true,
                    y: false,
                    z: "string"
                }
            }
        };
        var right = {
            a: 1,
            b: 0,
            c: true,
            d: false,
            e: {
                a: "asdf",
                b: true,
                c: 2343.3453,
                d: null,
                e: {
                    x: true,
                    y: false,
                    z: "string"
                }
            }
        };
        test.ok(0, aux.distance(left, right));
        test.done();
    },
    testDistanceZeroArrays: function(test) {
        test.expect(1);
        var left = {
            b: ["a", "b", "c", "d"]
        };
        var right = {
            b: ["a", "b", "c", "d"]
        };
        test.ok(0, aux.distance(left, right));
        test.done();
    },*/
    /*testDistanceZeroArraysComplex: function(test) {
        test.expect(1);
        var left = {
            b: [
                {
                    name: "asdf",
                    num: 4
                },
                {
                    name: "foo",
                    age: 43
                },
                {
                    name: "jjjjj",
                    weight: 343
                }
            ]
        };
        var right = {
            b: [
                {
                    name: "asdf",
                    num: 4
                },
                {
                    name: "foo",
                    age: 43
                },
                {
                    name: "jjjjj",
                    weight: 343
                }
            ]
        };
        test.ok(0, aux.distance(left, right));
        test.done();
    },*/
    testDistanceOneSimple: function(test) {
        test.expect(1);
        var left = {
            a: "b",
            c: "d",
            e: "f"
        };
        var right = {
            a: "b",
            c: "d",
            e: "g"
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneNonStrings: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            b: 0,
            c: true,
            d: false
        };
        var right = {
            a: 1,
            b: 0,
            c: false,
            d: false
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneSubObjects: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            b: 0,
            c: true,
            d: false,
            e: {
                a: "asdf",
                b: true,
                c: 2343.3453,
                d: null,
                e: {
                    x: true,
                    y: false,
                    z: "string"
                }
            }
        };
        var right = {
            a: 1,
            b: 0,
            c: true,
            d: false,
            e: {
                a: "asdf",
                b: true,
                c: 2343.3453,
                d: null,
                e: {
                    x: true,
                    y: false,
                    z: "foobar"
                }
            }
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneArrays: function(test) {
        test.expect(1);
        var left = {
            b: ["a", "b", "c", "d"]
        };
        var right = {
            b: ["a", "b", "e", "d"]
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneArraysComplex: function(test) {
        test.expect(1);
        var left = {
            b: [
                {
                    name: "asdf",
                    num: 4
                },
                {
                    name: "foo",
                    age: 43
                },
                {
                    name: "jjjjj",
                    weight: 343
                }
            ]
        };
        var right = {
            b: [
                {
                    name: "asdf",
                    num: 4
                },
                {
                    name: "foo",
                    age: 43
                },
                {
                    name: "jj",
                    weight: 343
                }
            ]
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneMissingLeft: function(test) {
        test.expect(1);
        var left = {
            a: "b",
            c: "d"
        };
        var right = {
            a: "b",
            c: "d",
            e: "f"
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceOneMissingRight: function(test) {
        test.expect(1);
        var left = {
            a: "b",
            c: "d",
            e: "f"
        };
        var right = {
            a: "b",
            c: "d"
        };
        test.ok(1, aux.distance(left, right));
        test.done();
    },
    testDistanceAgainstEmptyLeft: function(test) {
        test.expect(1);
        var left = {
            "locale": "en-AU",
            "gregorian": {
                "date": {
                    "dmy": {
                        "s": "d/MM/yy",
                        "m": "d/MM/yyyy"
                    }
                }
            }
        };
        test.ok(3, aux.distance(left, {}));
        test.done();
    },
    testDistanceAgainstEmptyRight: function(test) {
        test.expect(1);
        var right = {
            "locale": "en-AU",
            "gregorian": {
                "date": {
                    "dmy": {
                        "s": "d/MM/yy",
                        "m": "d/MM/yyyy"
                    }
                }
            }
        };
        test.ok(3, aux.distance({}, right));
        test.done();
    },
    testDistanceDifferentComplexTypesWithDifferentTypes1: function(test) {
        test.expect(1);
        var left = {
            "order": {
                "s": "{date} {time}",
                "m": "{date} {time}",
                "l": "{date}{time}",
                "f": "{date}{time}"
            }
        };
        var right = {
            "order": "{date} {time}"
        };
        test.ok(5, aux.distance(left, right));
        test.done();
    },
    testDistanceDifferentComplexTypesWithDifferentTypes2: function(test) {
        test.expect(1);
        var left = {
            "order": {
                "s": "{date} {time}",
                "m": "{date} {time}",
                "l": "{date}{time}",
                "f": "{date}{time}"
            }
        };
        var right = {
            "order": null
        };
        test.ok(4, aux.distance(left, right));
        test.done();
    },
    testDistanceDifferentComplexTypesWithDifferentTypes3: function(test) {
        test.expect(1);
        var left = {
            "order": {
                "s": "{date} {time}",
                "m": "{date} {time}",
                "l": "{date}{time}",
                "f": "{date}{time}"
            }
        };
        var right = {
            "order": undefined
        };
        test.ok(4, aux.distance(left, right));
        test.done();
    },
    testDistanceDifferentSimpleTypes: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            c: "d"
        };
        var right = {
            a: true,
            c: true
        };
        test.ok(2, aux.distance(left, right));
        test.done();
    },
    testDistanceDifferentComplexTypes: function(test) {
        test.expect(1);
        var left = {
            a: 1,
            c: {
                x: true,
                y: 1,
                z: "asdf"
            }
        };
        var right = {
            a: true,
            c: true
        };
        test.ok(5, aux.distance(left, right));
        test.done();
    },
    testDistanceArraysDifferentLengthsLeft: function(test) {
        test.expect(1);
        var left = {
            b: ["a", "b", "c"]
        };
        var right = {
            b: ["a", "b", "c", "d", "e"]
        };
        test.ok(2, aux.distance(left, right));
        test.done();
    },
    testDistanceArraysDifferentLengthsRight: function(test) {
        test.expect(1);
        var left = {
            b: ["a", "b", "c", "d", "e"]
        };
        var right = {
            b: ["a", "b", "c"]
        };
        test.ok(2, aux.distance(left, right));
        test.done();
    },
    testDistanceArraysDifferentLengthsAndContents: function(test) {
        test.expect(1);
        var left = {
            b: ["a", "b", "c"]
        };
        var right = {
            b: ["a", "x", "c", "d", "e"]
        };
        test.ok(3, aux.distance(left, right));
        test.done();
    },
    testDistanceUndefinedRight: function(test) {
        test.expect(1);
        var right = {
            b: true,
            c: false,
            e: "asdf"
        };
        test.ok(3, aux.distance(undefined, right));
        test.done();
    },
    testDistanceUndefinedRightComplex: function(test) {
        test.expect(1);
        var right = {
            b: true,
            c: false,
            e: "asdf",
            x: {
                a: "asdf",
                b: "asdf",
                y: {
                    m: "asdf",
                    n: "asdf"
                }
            }
        };
        test.ok(7, aux.distance(undefined, right));
        test.done();
    },
    testDistanceUndefinedLeft: function(test) {
        test.expect(1);
        var left = {
            b: true,
            c: false,
            e: "asdf"
        };
        test.ok(3, aux.distance(left, undefined));
        test.done();
    },
    testDistanceUndefinedLeftComplex: function(test) {
        test.expect(1);
        var left = {
            b: true,
            c: false,
            e: "asdf",
            x: {
                a: "asdf",
                b: "asdf",
                y: {
                    m: "asdf",
                    n: "asdf"
                }
            }
        };
        test.ok(7, aux.distance(left, undefined));
        test.done();
    },
    testPromoteNormal: function(test) {
        test.expect(1);
        var group = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} 'at' {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            },
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            },
            "GB": {
                data: {
                    "locale": "en-GB",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "dd/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "CA" : {
                data: {
                    "locale": "en-CA",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "AU" : {
                data: {
                    "locale": "en-AU",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "d MMM, yyyy",
                                "f": "d MMMM, yyyy"
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en-CA", group.data.locale);
        test.done();
    },
    testPromoteNotEnoughChildren: function(test) {
        test.expect(1);
        var group = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} 'at' {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            },
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en", group.data.locale);
        test.done();
    },
    testPromoteNoChildren: function(test) {
        test.expect(1);
        var group = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} 'at' {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en", group.data.locale);
        test.done();
    },
    testPromoteNoParentManyChildren: function(test) {
        test.expect(1);
        var group = {
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            },
            "GB": {
                data: {
                    "locale": "en-GB",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "dd/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "CA" : {
                data: {
                    "locale": "en-CA",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "AU" : {
                data: {
                    "locale": "en-AU",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "d MMM, yyyy",
                                "f": "d MMMM, yyyy"
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en-CA", group.data.locale);
        test.done();
    },
    testPromoteNoParentOnlyChild: function(test) {
        test.expect(2);
        // should promote the only child if there is no root data
        var group = {
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok(typeof(group.data) !== "undefined");
        test.ok("en-US", group.data.locale);
        test.done();
    },
    testPromoteRecursively: function(test) {
        test.expect(1);
        var group = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} 'at' {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            },
            "Latn": {
                data: {
                    "locale": "en-Latn",
                    "gregorian": {
                        "order": "{date} 'at' {time}",
                        "date": {
                            "dmy": {
                                "s": "dd/MM/yy",
                                "m": "dd/MM/yy",
                                "l": "dd MMM yyyy",
                                "f": "dd MMMM yyyy"
                            }
                        }
                    }
                },
                "US": {
                    data: {
                        "locale": "en-Latn-US",
                        "gregorian": {
                            "order": "{time} {date}",
                            "date": {
                                "dmy": {
                                    "s": "M/dd/yy",
                                    "m": "M/dd/yyyy",
                                    "l": "MMM d, yyyy",
                                    "f": "MMMM d, yyyy"
                                }
                            }
                        }
                    }
                },
                "GB": {
                    data: {
                        "locale": "en-Latn-GB",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "dd/MM/yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                }
                            }
                        }
                    }
                },
                "CA" : {
                    data: {
                        "locale": "en-Latn-CA",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "d/MM/yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                }
                            }
                        }
                    }
                },
                "AU" : {
                    data: {
                        "locale": "en-Latn-AU",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "d/MM/yyyy",
                                    "l": "d MMM, yyyy",
                                    "f": "d MMMM, yyyy"
                                }
                            }
                        }
                    }
                }
            },
            "Dsrt": {
                data: {
                    "locale": "en-Dsrt",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "dd.MM.yy",
                                "m": "dd.MM.yy",
                                "l": "dd MMM yyyy",
                                "f": "dd MMMM yyyy"
                            }
                        }
                    }
                },
                "US": {
                    data: {
                        "locale": "en-Dsrt-US",
                        "gregorian": {
                            "order": "{time}, {date}",
                            "date": {
                                "dmy": {
                                    "s": "M.dd.yy",
                                    "m": "M.dd.yyyy",
                                    "l": "MMM d yyyy",
                                    "f": "MMMM d yyyy"
                                },
                                "dm": {
                                    "s": "M.dd",
                                    "m": "M.dd",
                                    "l": "MMM d",
                                    "f": "MMMM d"
                                }
                            }
                        }
                    }
                },
                "GB": {
                    data: {
                        "locale": "en-Dsrt-GB",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "dd.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "dd.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                },
                "CA" : {
                    data: {
                        "locale": "en-Dsrt-CA",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "d.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                },
                "AU" : {
                    data: {
                        "locale": "en-Dsrt-AU",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM, yyyy",
                                    "f": "d MMMM, yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "d.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en-Latn-CA", group.data.locale);
        test.done();
    },
    testPromoteRecursivelyBreadthFirst: function(test) {
        test.expect(1);
        // this will fail if you don't promote the children first
        // and then promote this level. Otherwise, you are deciding
        // which one to promote before making sure each of the children
        // is finished promoting
        var group = {
            "Dsrt": {
                data: {
                    "locale": "en-Dsrt",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "dd.MM.yy",
                                "m": "dd.MM.yy",
                                "l": "dd MMM yyyy",
                                "f": "dd MMMM yyyy"
                            }
                        }
                    }
                },
                "US": {
                    data: {
                        "locale": "en-Dsrt-US",
                        "gregorian": {
                            "order": "{time}, {date}",
                            "date": {
                                "dmy": {
                                    "s": "M.dd.yy",
                                    "m": "M.dd.yyyy",
                                    "l": "MMM d yyyy",
                                    "f": "MMMM d yyyy"
                                },
                                "dm": {
                                    "s": "M.dd",
                                    "m": "M.dd",
                                    "l": "MMM d",
                                    "f": "MMMM d"
                                }
                            }
                        }
                    }
                },
                "GB": {
                    data: {
                        "locale": "en-Dsrt-GB",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "dd.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "dd.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                },
                "CA" : {
                    data: {
                        "locale": "en-Dsrt-CA",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "d.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                },
                "AU" : {
                    data: {
                        "locale": "en-Dsrt-AU",
                        "gregorian": {
                            "order": "{date}, {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM, yyyy",
                                    "f": "d MMMM, yyyy"
                                },
                                "dm": {
                                    "s": "d.MM",
                                    "m": "d.MM",
                                    "l": "d MMM",
                                    "f": "d MMMM"
                                }
                            }
                        }
                    }
                }
            },
            "Latn": {
                data: {
                    "locale": "en-Latn",
                    "gregorian": {
                        "order": "{date} 'at' {time}",
                        "date": {
                            "dmy": {
                                "s": "dd/MM/yy",
                                "m": "dd/MM/yy",
                                "l": "dd MMM yyyy",
                                "f": "dd MMMM yyyy"
                            }
                        }
                    }
                },
                "US": {
                    data: {
                        "locale": "en-Latn-US",
                        "gregorian": {
                            "order": "{time} {date}",
                            "date": {
                                "dmy": {
                                    "s": "M/dd/yy",
                                    "m": "M/dd/yyyy",
                                    "l": "MMM d, yyyy",
                                    "f": "MMMM d, yyyy"
                                }
                            }
                        }
                    }
                },
                "GB": {
                    data: {
                        "locale": "en-Latn-GB",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "dd/MM/yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                }
                            }
                        }
                    }
                },
                "CA" : {
                    data: {
                        "locale": "en-Latn-CA",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "d/MM/yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                }
                            }
                        }
                    }
                },
                "AU" : {
                    data: {
                        "locale": "en-Latn-AU",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d/MM/yy",
                                    "m": "d/MM/yyyy",
                                    "l": "d MMM, yyyy",
                                    "f": "d MMMM, yyyy"
                                }
                            }
                        }
                    }
                }
            },
            "Fooo": {
                data: {
                    "locale": "en-Fooo",
                    "gregorian": {
                        "order": "{date} 'at' {time}",
                        "date": {
                            "dmy": {
                                "s": "dd/MM/yy ",
                                "m": "dd/MM/yy ",
                                "l": "dd MMM, yyyy",
                                "f": "dd MMMM, yyyy"
                            }
                        }
                    }
                },
                "US": {
                    data: {
                        "locale": "en-Fooo-US",
                        "gregorian": {
                            "order": "{time} {date}",
                            "date": {
                                "dmy": {
                                    "s": "M.dd.yy",
                                    "m": "M.dd.yyyy",
                                    "l": "MMM d, yyyy",
                                    "f": "MMMM d, yyyy"
                                },
                                "dm": "dd MMM"
                            }
                        }
                    }
                },
                "GB": {
                    data: {
                        "locale": "en-Fooo-GB",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "dd.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": "dd MMM"
                            }
                        }
                    }
                },
                "CA" : {
                    data: {
                        "locale": "en-Fooo-CA",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM yyyy",
                                    "f": "d MMMM yyyy"
                                },
                                "dm": "dd MMM"
                            }
                        }
                    }
                },
                "AU" : {
                    data: {
                        "locale": "en-Fooo-AU",
                        "gregorian": {
                            "order": "{date} {time}",
                            "date": {
                                "dmy": {
                                    "s": "d.MM.yy",
                                    "m": "d.MM.yyyy",
                                    "l": "d MMM, yyyy",
                                    "f": "d MMMM, yyyy"
                                },
                                "dm": "dd MMM"
                            }
                        }
                    }
                }
            }
        };

        aux.promoteFormats(group);

        test.ok("en-Fooo-CA", group.data.locale);
        test.done();
    },
    testPruneNormal: function(test) {
        test.expect(1);
        var group = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yyyy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            },
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            },
            "GB": {
                data: {
                    "locale": "en-GB",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "dd/MM/yy",
                                "m": "dd/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "CA" : {
                data: {
                    "locale": "en-CA",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "dd/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "AU" : {
                data: {
                    "locale": "en-AU",
                    "gregorian": {
                        "order": "{date} {time}",
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy",
                                "l": "dd MMM yyyy",
                                "f": "dd MMMM yyyy"
                            }
                        }
                    }
                }
            }
        };

        var expected = {
            data: {
                "locale": "en",
                "gregorian": {
                    "order": "{date} {time}",
                    "date": {
                        "dmy": {
                            "s": "dd/MM/yy",
                            "m": "dd/MM/yyyy",
                            "l": "dd MMM yyyy",
                            "f": "dd MMMM yyyy"
                        }
                    }
                }
            },
            "US": {
                data: {
                    "locale": "en-US",
                    "gregorian": {
                        "order": "{time} {date}",
                        "date": {
                            "dmy": {
                                "s": "M/dd/yy",
                                "m": "M/dd/yyyy",
                                "l": "MMM d, yyyy",
                                "f": "MMMM d, yyyy"
                            }
                        }
                    }
                }
            },
            "GB": {
                data: {
                    "locale": "en-GB",
                    "gregorian": {
                        "date": {
                            "dmy": {
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "CA" : {
                data: {
                    "locale": "en-CA",
                    "gregorian": {
                        "date": {
                            "dmy": {
                                "m": "d/MM/yyyy",
                                "l": "d MMM yyyy",
                                "f": "d MMMM yyyy"
                            }
                        }
                    }
                }
            },
            "AU" : {
                data: {
                    "locale": "en-AU",
                    "gregorian": {
                        "date": {
                            "dmy": {
                                "s": "d/MM/yy",
                                "m": "d/MM/yyyy"
                            }
                        }
                    }
                }
            }
        };

        aux.pruneFormats(group);
        test.deepEqual(expected, group);
        test.done();
    },
    testMergeOverrideObjectWithString: function(test) {
        test.expect(1);
        var left = {
            a: {b: true, c: "tawasvas"}
        };
        var right = {
            a: "string"
        };

        left = common.merge(left, right);
        test.ok("string", left.a);
        test.done();
    },
    testMergeOverrideArrayWithString: function(test) {
        test.expect(1);
        var left = {
            a: ["a", "b", "c", "d"]
        };
        var right = {
            a: "string"
        };

        left = common.merge(left, right);
        test.ok("string", left.a);
        test.done();
    },
    testMergeFormatsOverrideArrayWithString: function(test) {
        test.expect(3);
        var formats = {
            data: {
                "order": "{date} {time}",
                "dmy": {
                    "s": "d/M/yy",
                    "m": "d/MM/yyyy",
                    "l": "d MMM yyyy",
                    "f": "d MMMM yyyy"
                }
            },
            "zh": {
                data: {
                    "order": {
                        "s": "{date} {time}",
                        "m": "{date} {time}",
                        "l": "{date}{time}",
                        "f": "{date}{time}"
                    }
                },
                "Hant": {
                    data: {
                        "order": "{date}{time}"
                    },
                    "TW": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "HK": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "US": {
                        data: {
                            "order": "{time} {date}",
                        }
                    }
                }
            }
        };

        aux.mergeFormats(formats, formats.zh, ["zh"]);

        test.ok("{date}{time}", formats.zh.Hant.data.order);
        test.ok("{date} {time}", formats.zh.Hant.TW.data.order);
        test.ok("d/M/yy", formats.zh.Hant.TW.data.dmy.s);
        test.done();
    },
    testMergePromote: function(test) {
        test.expect(3);
        var formats = {
            data: {
                "order": "{date} {time}",
                "dmy": {
                    "s": "d/M/yy",
                    "m": "d/MM/yyyy",
                    "l": "d MMM yyyy",
                    "f": "d MMMM yyyy"
                }
            },
            "zh": {
                data: {
                    "order": {
                        "s": "{date} {time}",
                        "m": "{date} {time}",
                        "l": "{date}{time}",
                        "f": "{date}{time}"
                    }
                },
                "Hant": {
                    data: {
                        "order": "{date}{time}"
                    },
                    "TW": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "HK": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "US": {
                        data: {
                            "order": "{time} {date}",
                        }
                    }
                }
            }
        };

        aux.mergeFormats(formats, formats.zh, ["zh"]);
        aux.promoteFormats(formats.zh);

        test.ok("{date} {time}", formats.zh.Hant.data.order);
        test.ok("{date} {time}", formats.zh.Hant.TW.data.order);
        test.ok("d/M/yy", formats.zh.Hant.TW.data.dmy.s);
        test.done();
    },
    testMergePromoteMerge: function(test) {
        test.expect(3);
        var formats = {
            data: {
                "order": "{date} {time}",
                "dmy": {
                    "s": "d/M/yy",
                    "m": "d/MM/yyyy",
                    "l": "d MMM yyyy",
                    "f": "d MMMM yyyy"
                }
            },
            "zh": {
                data: {
                    "order": {
                        "s": "{date} {time}",
                        "m": "{date} {time}",
                        "l": "{date}{time}",
                        "f": "{date}{time}"
                    }
                },
                "Hant": {
                    data: {
                        "order": "{date}{time}"
                    },
                    "TW": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "HK": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "US": {
                        data: {
                            "order": "{time} {date}",
                        }
                    }
                }
            }
        };

        aux.mergeFormats(formats, formats.zh, ["zh"]);
        aux.promoteFormats(formats.zh);
        aux.mergeFormats(formats, formats.zh, ["zh"]);

        test.ok("{date} {time}", formats.zh.Hant.data.order);
        test.ok("{date} {time}", formats.zh.Hant.TW.data.order);
        test.ok("d/M/yy", formats.zh.Hant.TW.data.dmy.s);
        test.done();
    },
    testMergePromotePrune1: function(test) {
        test.expect(6);
        var formats = {
            data: {
                "order": "{date} {time}",
                "dmy": {
                    "s": "d/M/yy",
                    "m": "d/MM/yyyy",
                    "l": "d MMM yyyy",
                    "f": "d MMMM yyyy"
                }
            },
            "zh": {
                data: {
                    "order": {
                        "s": "{date} {time}",
                        "m": "{date} {time}",
                        "l": "{date}{time}",
                        "f": "{date}{time}"
                    }
                },
                "Hant": {
                    data: {
                        "order": "{date}{time}"
                    },
                    "TW": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "HK": {
                        data: {
                            "order": "{date} {time}",
                        }
                    },
                    "US": {
                        data: {
                            "order": "{time} {date}",
                        }
                    }
                }
            }
        };

        aux.mergeFormats(formats, formats, [""]);
        aux.promoteFormats(formats.zh);
        aux.pruneFormats(formats);

         // pruned out
        test.ok(typeof(formats.zh.data.order) !== "undefined");
        test.ok("{date}{time}", formats.zh.data.order.f);
        test.ok(typeof(formats.zh.Hant.data.order) !== "undefined");
        test.ok("{date} {time}", formats.zh.Hant.data.order);
        test.ok(typeof(formats.zh.Hant.TW.data.order) === "undefined");
        test.ok(typeof(formats.zh.Hant.TW.data.dmy) === "undefined");
        test.done();
    },
    testMergePromotePrune2: function(test) {
        test.expect(8);
        var formats = {
            "en": {
                "IE": {
                    "data": {
                        "MMMM1": "January",
                        "MMM1": "Jan",
                        "NN1": "Ja",
                        "N1": "J",
                        "MMMM2": "February",
                        "MMM2": "Feb",
                        "NN2": "Fe",
                        "N2": "F",
                        "MMMM3": "March",
                        "MMM3": "Mar",
                        "NN3": "Ma",
                        "N3": "M",
                        "MMMM4": "April",
                        "MMM4": "Apr",
                        "NN4": "Ap",
                        "N4": "A",
                        "MMMM5": "May",
                        "MMM5": "May",
                        "NN5": "Ma",
                        "N5": "M",
                        "MMMM6": "June",
                        "MMM6": "Jun",
                        "NN6": "Ju",
                        "N6": "J",
                        "MMMM7": "July",
                        "MMM7": "Jul",
                        "NN7": "Ju",
                        "N7": "J",
                        "MMMM8": "August",
                        "MMM8": "Aug",
                        "NN8": "Au",
                        "N8": "A",
                        "MMMM9": "September",
                        "MMM9": "Sep",
                        "NN9": "Se",
                        "N9": "S",
                        "MMMM10": "October",
                        "MMM10": "Oct",
                        "NN10": "Oc",
                        "N10": "O",
                        "MMMM11": "November",
                        "MMM11": "Nov",
                        "NN11": "No",
                        "N11": "N",
                        "MMMM12": "December",
                        "MMM12": "Dec",
                        "NN12": "De",
                        "N12": "D",
                        "EEEE0": "Sunday",
                        "EEE0": "Sun",
                        "EE0": "Su",
                        "E0": "S",
                        "EEEE1": "Monday",
                        "EEE1": "Mon",
                        "EE1": "Mo",
                        "E1": "M",
                        "EEEE2": "Tuesday",
                        "EEE2": "Tue",
                        "EE2": "Tu",
                        "E2": "T",
                        "EEEE3": "Wednesday",
                        "EEE3": "Wed",
                        "EE3": "We",
                        "E3": "W",
                        "EEEE4": "Thursday",
                        "EEE4": "Thu",
                        "EE4": "Th",
                        "E4": "T",
                        "EEEE5": "Friday",
                        "EEE5": "Fri",
                        "EE5": "Fr",
                        "E5": "F",
                        "EEEE6": "Saturday",
                        "EEE6": "Sat",
                        "EE6": "Sa",
                        "E6": "S",
                        "ordinalChoice": "1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th",
                        "a0": "a.m.",
                        "a1": "p.m.",
                        "azh0": "AM",
                        "azh1": "AM",
                        "azh2": "AM",
                        "azh3": "PM",
                        "azh4": "PM",
                        "azh5": "PM",
                        "azh6": "PM",
                        "a0-ethiopic": "morning",
                        "a1-ethiopic": "noon",
                        "a2-ethiopic": "afternoon",
                        "a3-ethiopic": "evening",
                        "a4-ethiopic": "night",
                        "G-1": "BCE",
                        "G1": "CE",
                        "separatorFull": ", ",
                        "finalSeparatorFull": ", and ",
                        "separatorShort": " ",
                        "separatorMedium": " ",
                        "separatorLong": ", ",
                        "N1-hebrew": "N",
                        "N2-hebrew": "I",
                        "N3-hebrew": "S",
                        "N4-hebrew": "T",
                        "N5-hebrew": "A",
                        "N6-hebrew": "E",
                        "N7-hebrew": "T",
                        "N8-hebrew": "Ḥ",
                        "N9-hebrew": "K",
                        "N10-hebrew": "T",
                        "N11-hebrew": "S",
                        "N12-hebrew": "A",
                        "N13-hebrew": "A",
                        "NN1-hebrew": "Ni",
                        "NN2-hebrew": "Iy",
                        "NN3-hebrew": "Si",
                        "NN4-hebrew": "Ta",
                        "NN5-hebrew": "Av",
                        "NN6-hebrew": "El",
                        "NN7-hebrew": "Ti",
                        "NN8-hebrew": "Ḥe",
                        "NN9-hebrew": "Ki",
                        "NN10-hebrew": "Te",
                        "NN11-hebrew": "Sh",
                        "NN12-hebrew": "Ad",
                        "NN13-hebrew": "A2",
                        "MMM1-hebrew": "Nis",
                        "MMM2-hebrew": "Iyy",
                        "MMM3-hebrew": "Siv",
                        "MMM4-hebrew": "Tam",
                        "MMM5-hebrew": "Av",
                        "MMM6-hebrew": "Elu",
                        "MMM7-hebrew": "Tis",
                        "MMM8-hebrew": "Ḥes",
                        "MMM9-hebrew": "Kis",
                        "MMM10-hebrew": "Tev",
                        "MMM11-hebrew": "She",
                        "MMM12-hebrew": "Ada",
                        "MMM13-hebrew": "Ad2",
                        "MMMM1-hebrew": "Nisan",
                        "MMMM2-hebrew": "Iyyar",
                        "MMMM3-hebrew": "Sivan",
                        "MMMM4-hebrew": "Tammuz",
                        "MMMM5-hebrew": "Av",
                        "MMMM6-hebrew": "Elul",
                        "MMMM7-hebrew": "Tishri",
                        "MMMM8-hebrew": "Ḥeshvan",
                        "MMMM9-hebrew": "Kislev",
                        "MMMM10-hebrew": "Teveth",
                        "MMMM11-hebrew": "Shevat",
                        "MMMM12-hebrew": "Adar",
                        "MMMM13-hebrew": "Adar II",
                        "E0-hebrew": "R",
                        "E1-hebrew": "S",
                        "E2-hebrew": "S",
                        "E3-hebrew": "R",
                        "E4-hebrew": "Ḥ",
                        "E5-hebrew": "S",
                        "E6-hebrew": "S",
                        "EE0-hebrew": "ri",
                        "EE1-hebrew": "se",
                        "EE2-hebrew": "sl",
                        "EE3-hebrew": "rv",
                        "EE4-hebrew": "ḥa",
                        "EE5-hebrew": "si",
                        "EE6-hebrew": "sa",
                        "EEE0-hebrew": "ris",
                        "EEE1-hebrew": "she",
                        "EEE2-hebrew": "shl",
                        "EEE3-hebrew": "rvi",
                        "EEE4-hebrew": "ḥam",
                        "EEE5-hebrew": "shi",
                        "EEE6-hebrew": "sha",
                        "EEEE0-hebrew": "yom rishon",
                        "EEEE1-hebrew": "yom sheni",
                        "EEEE2-hebrew": "yom shlishi",
                        "EEEE3-hebrew": "yom r'vi‘i",
                        "EEEE4-hebrew": "yom ḥamishi",
                        "EEEE5-hebrew": "yom shishi",
                        "EEEE6-hebrew": "yom shabbat",
                        "N1-islamic": "M",
                        "N2-islamic": "Ṣ",
                        "N3-islamic": "R",
                        "N4-islamic": "R",
                        "N5-islamic": "J",
                        "N6-islamic": "J",
                        "N7-islamic": "R",
                        "N8-islamic": "Š",
                        "N9-islamic": "R",
                        "N10-islamic": "Š",
                        "N11-islamic": "Q",
                        "N12-islamic": "Ḥ",
                        "NN1-islamic": "Mu",
                        "NN2-islamic": "Ṣa",
                        "NN3-islamic": "Rb",
                        "NN4-islamic": "R2",
                        "NN5-islamic": "Ju",
                        "NN6-islamic": "J2",
                        "NN7-islamic": "Ra",
                        "NN8-islamic": "Šh",
                        "NN9-islamic": "Ra",
                        "NN10-islamic": "Ša",
                        "NN11-islamic": "Qa",
                        "NN12-islamic": "Ḥi",
                        "MMM1-islamic": "Muḥ",
                        "MMM2-islamic": "Ṣaf",
                        "MMM3-islamic": "Rab",
                        "MMM4-islamic": "Ra2",
                        "MMM5-islamic": "Jum",
                        "MMM6-islamic": "Ju2",
                        "MMM7-islamic": "Raj",
                        "MMM8-islamic": "Šha",
                        "MMM9-islamic": "Ram",
                        "MMM10-islamic": "Šaw",
                        "MMM11-islamic": "Qad",
                        "MMM12-islamic": "Ḥij",
                        "MMMM1-islamic": "Muḥarram",
                        "MMMM2-islamic": "Ṣafar",
                        "MMMM3-islamic": "Rabī‘ I",
                        "MMMM4-islamic": "Rabī‘ II",
                        "MMMM5-islamic": "Jumādā I",
                        "MMMM6-islamic": "Jumādā II",
                        "MMMM7-islamic": "Rajab",
                        "MMMM8-islamic": "Šha'bān",
                        "MMMM9-islamic": "Ramaḍān",
                        "MMMM10-islamic": "Šawwāl",
                        "MMMM11-islamic": "Ḏu al-Qa‘da",
                        "MMMM12-islamic": "Ḏu al-Ḥijja",
                        "E0-islamic": "A",
                        "E1-islamic": "I",
                        "E2-islamic": "T",
                        "E3-islamic": "A",
                        "E4-islamic": "K",
                        "E5-islamic": "J",
                        "E6-islamic": "S",
                        "EE0-islamic": "ah",
                        "EE1-islamic": "it",
                        "EE2-islamic": "th",
                        "EE3-islamic": "ar",
                        "EE4-islamic": "kh",
                        "EE5-islamic": "ju",
                        "EE6-islamic": "sa",
                        "EEE0-islamic": "aha",
                        "EEE1-islamic": "ith",
                        "EEE2-islamic": "tha",
                        "EEE3-islamic": "arb",
                        "EEE4-islamic": "kha",
                        "EEE5-islamic": "jum",
                        "EEE6-islamic": "sab",
                        "EEEE0-islamic": "yawn al-ahad",
                        "EEEE1-islamic": "yawn al-ithnaya",
                        "EEEE2-islamic": "yawn uth-thalathaa",
                        "EEEE3-islamic": "yawn al-arba‘a",
                        "EEEE4-islamic": "yawn al-khamis",
                        "EEEE5-islamic": "yawn al-jum‘a",
                        "EEEE6-islamic": "yawn as-sabt",
                        "N1-persian": "F",
                        "N2-persian": "O",
                        "N3-persian": "K",
                        "N4-persian": "T",
                        "N5-persian": "M",
                        "N6-persian": "S",
                        "N7-persian": "M",
                        "N8-persian": "A",
                        "N9-persian": "A",
                        "N10-persian": "D",
                        "N11-persian": "B",
                        "N12-persian": "E",
                        "NN1-persian": "Fa",
                        "NN2-persian": "Or",
                        "NN3-persian": "Kh",
                        "NN4-persian": "Ti",
                        "NN5-persian": "Mo",
                        "NN6-persian": "Sh",
                        "NN7-persian": "Me",
                        "NN8-persian": "Ab",
                        "NN9-persian": "Az",
                        "NN10-persian": "De",
                        "NN11-persian": "Ba",
                        "NN12-persian": "Es",
                        "MMM1-persian": "Far",
                        "MMM2-persian": "Ord",
                        "MMM3-persian": "Kho",
                        "MMM4-persian": "Tir",
                        "MMM5-persian": "Mor",
                        "MMM6-persian": "Sha",
                        "MMM7-persian": "Meh",
                        "MMM8-persian": "Aba",
                        "MMM9-persian": "Aza",
                        "MMM10-persian": "Dey",
                        "MMM11-persian": "Bah",
                        "MMM12-persian": "Esf",
                        "MMMM1-persian": "Farvardin",
                        "MMMM2-persian": "Ordibehesht",
                        "MMMM3-persian": "Khordad",
                        "MMMM4-persian": "Tir",
                        "MMMM5-persian": "Mordad",
                        "MMMM6-persian": "Shahrivar",
                        "MMMM7-persian": "Mehr",
                        "MMMM8-persian": "Aban",
                        "MMMM9-persian": "Azar",
                        "MMMM10-persian": "Dey",
                        "MMMM11-persian": "Bahman",
                        "MMMM12-persian": "Esfand",
                        "EE0-persian": "Ye",
                        "EE1-persian": "Do",
                        "EE2-persian": "Se",
                        "EE3-persian": "Ch",
                        "EE4-persian": "Pa",
                        "EE5-persian": "Jo",
                        "EE6-persian": "Sh",
                        "EEE0-persian": "Yek",
                        "EEE1-persian": "Dos",
                        "EEE2-persian": "Ses",
                        "EEE3-persian": "Cha",
                        "EEE4-persian": "Pan",
                        "EEE5-persian": "Jom",
                        "EEE6-persian": "Sha",
                        "EEEE0-persian": "Yekshanbeh",
                        "EEEE1-persian": "Doshanbeh",
                        "EEEE2-persian": "Seshhanbeh",
                        "EEEE3-persian": "Chaharshanbeh",
                        "EEEE4-persian": "Panjshanbeh",
                        "EEEE5-persian": "Jomeh",
                        "EEEE6-persian": "Shanbeh",
                        "N1-persian-algo": "F",
                        "N2-persian-algo": "O",
                        "N3-persian-algo": "K",
                        "N4-persian-algo": "T",
                        "N5-persian-algo": "M",
                        "N6-persian-algo": "S",
                        "N7-persian-algo": "M",
                        "N8-persian-algo": "A",
                        "N9-persian-algo": "A",
                        "N10-persian-algo": "D",
                        "N11-persian-algo": "B",
                        "N12-persian-algo": "E",
                        "NN1-persian-algo": "Fa",
                        "NN2-persian-algo": "Or",
                        "NN3-persian-algo": "Kh",
                        "NN4-persian-algo": "Ti",
                        "NN5-persian-algo": "Mo",
                        "NN6-persian-algo": "Sh",
                        "NN7-persian-algo": "Me",
                        "NN8-persian-algo": "Ab",
                        "NN9-persian-algo": "Az",
                        "NN10-persian-algo": "De",
                        "NN11-persian-algo": "Ba",
                        "NN12-persian-algo": "Es",
                        "MMM1-persian-algo": "Far",
                        "MMM2-persian-algo": "Ord",
                        "MMM3-persian-algo": "Kho",
                        "MMM4-persian-algo": "Tir",
                        "MMM5-persian-algo": "Mor",
                        "MMM6-persian-algo": "Sha",
                        "MMM7-persian-algo": "Meh",
                        "MMM8-persian-algo": "Aba",
                        "MMM9-persian-algo": "Aza",
                        "MMM10-persian-algo": "Dey",
                        "MMM11-persian-algo": "Bah",
                        "MMM12-persian-algo": "Esf",
                        "MMMM1-persian-algo": "Farvardin",
                        "MMMM2-persian-algo": "Ordibehesht",
                        "MMMM3-persian-algo": "Khordad",
                        "MMMM4-persian-algo": "Tir",
                        "MMMM5-persian-algo": "Mordad",
                        "MMMM6-persian-algo": "Shahrivar",
                        "MMMM7-persian-algo": "Mehr",
                        "MMMM8-persian-algo": "Aban",
                        "MMMM9-persian-algo": "Azar",
                        "MMMM10-persian-algo": "Dey",
                        "MMMM11-persian-algo": "Bahman",
                        "MMMM12-persian-algo": "Esfand",
                        "EE0-persian-algo": "Ye",
                        "EE1-persian-algo": "Do",
                        "EE2-persian-algo": "Se",
                        "EE3-persian-algo": "Ch",
                        "EE4-persian-algo": "Pa",
                        "EE5-persian-algo": "Jo",
                        "EE6-persian-algo": "Sh",
                        "EEE0-persian-algo": "Yek",
                        "EEE1-persian-algo": "Dos",
                        "EEE2-persian-algo": "Ses",
                        "EEE3-persian-algo": "Cha",
                        "EEE4-persian-algo": "Pan",
                        "EEE5-persian-algo": "Jom",
                        "EEE6-persian-algo": "Sha",
                        "EEEE0-persian-algo": "Yekshanbeh",
                        "EEEE1-persian-algo": "Doshanbeh",
                        "EEEE2-persian-algo": "Seshhanbeh",
                        "EEEE3-persian-algo": "Chaharshanbeh",
                        "EEEE4-persian-algo": "Panjshanbeh",
                        "EEEE5-persian-algo": "Jomeh",
                        "EEEE6-persian-algo": "Shanbeh",
                        "M1-thaisolar": "M",
                        "M2-thaisolar": "K",
                        "M3-thaisolar": "M",
                        "M4-thaisolar": "M",
                        "M5-thaisolar": "P",
                        "M6-thaisolar": "M",
                        "M7-thaisolar": "K",
                        "M8-thaisolar": "S",
                        "M9-thaisolar": "K",
                        "M10-thaisolar": "T",
                        "M11-thaisolar": "P",
                        "M12-thaisolar": "T",
                        "MM1-thaisolar": "MaK",
                        "MM2-thaisolar": "KP",
                        "MM3-thaisolar": "MiK",
                        "MM4-thaisolar": "MY",
                        "MM5-thaisolar": "PK",
                        "MM6-thaisolar": "MY",
                        "MM7-thaisolar": "KK",
                        "MM8-thaisolar": "SK",
                        "MM9-thaisolar": "KY",
                        "MM10-thaisolar": "TuK",
                        "MM11-thaisolar": "PY",
                        "MM12-thaisolar": "ThK",
                        "MMM1-thaisolar": "Ma.K.",
                        "MMM2-thaisolar": "Ku.P.",
                        "MMM3-thaisolar": "Mi.K.",
                        "MMM4-thaisolar": "Me.Y.",
                        "MMM5-thaisolar": "Ph.K.",
                        "MMM6-thaisolar": "Mi.Y.",
                        "MMM7-thaisolar": "Ka.K.",
                        "MMM8-thaisolar": "Si.K.",
                        "MMM9-thaisolar": "Ka.Y.",
                        "MMM10-thaisolar": "Tu.K.",
                        "MMM11-thaisolar": "Ph.Y.",
                        "MMM12-thaisolar": "Th.K.",
                        "MMMM1-thaisolar": "Makarakhom",
                        "MMMM2-thaisolar": "Kumphaphan",
                        "MMMM3-thaisolar": "Minakhom",
                        "MMMM4-thaisolar": "Mesayon",
                        "MMMM5-thaisolar": "Phruetsaphakhom",
                        "MMMM6-thaisolar": "Mithunayon",
                        "MMMM7-thaisolar": "Karakadakhom",
                        "MMMM8-thaisolar": "Singhakhom",
                        "MMMM9-thaisolar": "Kanyayon",
                        "MMMM10-thaisolar": "Tulakhom",
                        "MMMM11-thaisolar": "Phruetsachikayon",
                        "MMMM12-thaisolar": "Thanwakhom",
                        "E0-thaisolar": "A",
                        "E1-thaisolar": "C",
                        "E2-thaisolar": "A",
                        "E3-thaisolar": "P",
                        "E4-thaisolar": "P",
                        "E5-thaisolar": "S",
                        "E6-thaisolar": "S",
                        "EE0-thaisolar": "at",
                        "EE1-thaisolar": "ch",
                        "EE2-thaisolar": "an",
                        "EE3-thaisolar": "pu",
                        "EE4-thaisolar": "pr",
                        "EE5-thaisolar": "su",
                        "EE6-thaisolar": "sa",
                        "EEE0-thaisolar": "ath",
                        "EEE1-thaisolar": "cha",
                        "EEE2-thaisolar": "ang",
                        "EEE3-thaisolar": "phu",
                        "EEE4-thaisolar": "phr",
                        "EEE5-thaisolar": "suk",
                        "EEE6-thaisolar": "sao",
                        "EEEE0-thaisolar": "wan athit",
                        "EEEE1-thaisolar": "wan chan",
                        "EEEE2-thaisolar": "wan angkhan",
                        "EEEE3-thaisolar": "wan phut",
                        "EEEE4-thaisolar": "wan phruehatsabodi",
                        "EEEE5-thaisolar": "wan suk",
                        "EEEE6-thaisolar": "wan sao",
                        "N1-coptic": "T",
                        "N2-coptic": "P",
                        "N3-coptic": "A",
                        "N4-coptic": "K",
                        "N5-coptic": "T",
                        "N6-coptic": "M",
                        "N7-coptic": "P",
                        "N8-coptic": "P",
                        "N9-coptic": "P",
                        "N10-coptic": "P",
                        "N11-coptic": "E",
                        "N12-coptic": "M",
                        "N13-coptic": "E",
                        "NN1-coptic": "Th",
                        "NN2-coptic": "Pa",
                        "NN3-coptic": "At",
                        "NN4-coptic": "Ko",
                        "NN5-coptic": "To",
                        "NN6-coptic": "Me",
                        "NN7-coptic": "Pa",
                        "NN8-coptic": "Pa",
                        "NN9-coptic": "Pa",
                        "NN10-coptic": "Pa",
                        "NN11-coptic": "Ep",
                        "NN12-coptic": "Me",
                        "NN13-coptic": "Ep",
                        "MMM1-coptic": "Tho",
                        "MMM2-coptic": "Pao",
                        "MMM3-coptic": "Ath",
                        "MMM4-coptic": "Koi",
                        "MMM5-coptic": "Tob",
                        "MMM6-coptic": "Mes",
                        "MMM7-coptic": "Par",
                        "MMM8-coptic": "Par",
                        "MMM9-coptic": "Pas",
                        "MMM10-coptic": "Pao",
                        "MMM11-coptic": "Epe",
                        "MMM12-coptic": "Mes",
                        "MMM13-coptic": "Epa",
                        "MMMM1-coptic": "Thoout",
                        "MMMM2-coptic": "Paope",
                        "MMMM3-coptic": "Athor",
                        "MMMM4-coptic": "Koiak",
                        "MMMM5-coptic": "Tobe",
                        "MMMM6-coptic": "Meshir",
                        "MMMM7-coptic": "Paremotep",
                        "MMMM8-coptic": "Parmoute",
                        "MMMM9-coptic": "Pashons",
                        "MMMM10-coptic": "Paoone",
                        "MMMM11-coptic": "Epeep",
                        "MMMM12-coptic": "Mesore",
                        "MMMM13-coptic": "Epagomene",
                        "E0-coptic": "T",
                        "E1-coptic": "P",
                        "E2-coptic": "P",
                        "E3-coptic": "P",
                        "E4-coptic": "P",
                        "E5-coptic": "P",
                        "E6-coptic": "P",
                        "EE0-coptic": "Tk",
                        "EE1-coptic": "Pe",
                        "EE2-coptic": "Ps",
                        "EE3-coptic": "Pe",
                        "EE4-coptic": "Pt",
                        "EE5-coptic": "Ps",
                        "EE6-coptic": "Ps",
                        "EEE0-coptic": "Tky",
                        "EEE1-coptic": "Pes",
                        "EEE2-coptic": "Psh",
                        "EEE3-coptic": "Pef",
                        "EEE4-coptic": "Pti",
                        "EEE5-coptic": "Pso",
                        "EEE6-coptic": "Psa",
                        "EEEE0-coptic": "Tkyriake",
                        "EEEE1-coptic": "Pesnau",
                        "EEEE2-coptic": "Pshoment",
                        "EEEE3-coptic": "Peftoou",
                        "EEEE4-coptic": "Ptiou",
                        "EEEE5-coptic": "Psoou",
                        "EEEE6-coptic": "Psabbaton",
                        "N1-ethiopic": "M",
                        "N2-ethiopic": "T",
                        "N3-ethiopic": "H",
                        "N4-ethiopic": "T",
                        "N5-ethiopic": "T",
                        "N6-ethiopic": "Y",
                        "N7-ethiopic": "M",
                        "N8-ethiopic": "M",
                        "N9-ethiopic": "G",
                        "N10-ethiopic": "S",
                        "N11-ethiopic": "H",
                        "N12-ethiopic": "N",
                        "N13-ethiopic": "P",
                        "NN1-ethiopic": "Ma",
                        "NN2-ethiopic": "Te",
                        "NN3-ethiopic": "He",
                        "NN4-ethiopic": "Ta",
                        "NN5-ethiopic": "Te",
                        "NN6-ethiopic": "Ya",
                        "NN7-ethiopic": "Ma",
                        "NN8-ethiopic": "Mi",
                        "NN9-ethiopic": "Ge",
                        "NN10-ethiopic": "Sa",
                        "NN11-ethiopic": "Ha",
                        "NN12-ethiopic": "Na",
                        "NN13-ethiopic": "Pa",
                        "MMM1-ethiopic": "Mas",
                        "MMM2-ethiopic": "Teq",
                        "MMM3-ethiopic": "Hed",
                        "MMM4-ethiopic": "Tak",
                        "MMM5-ethiopic": "Ter",
                        "MMM6-ethiopic": "Yak",
                        "MMM7-ethiopic": "Mag",
                        "MMM8-ethiopic": "Miy",
                        "MMM9-ethiopic": "Gen",
                        "MMM10-ethiopic": "San",
                        "MMM11-ethiopic": "Ham",
                        "MMM12-ethiopic": "Nah",
                        "MMM13-ethiopic": "Pag",
                        "MMMM1-ethiopic": "Maskaram",
                        "MMMM2-ethiopic": "Teqemt",
                        "MMMM3-ethiopic": "Hedar",
                        "MMMM4-ethiopic": "Takhsas",
                        "MMMM5-ethiopic": "Ter",
                        "MMMM6-ethiopic": "Yakatit",
                        "MMMM7-ethiopic": "Magabit",
                        "MMMM8-ethiopic": "Miyazya",
                        "MMMM9-ethiopic": "Genbot",
                        "MMMM10-ethiopic": "Sane",
                        "MMMM11-ethiopic": "Hamle",
                        "MMMM12-ethiopic": "Nahase",
                        "MMMM13-ethiopic": "Paguemen",
                        "E0-ethiopic": "I",
                        "E1-ethiopic": "S",
                        "E2-ethiopic": "M",
                        "E3-ethiopic": "R",
                        "E4-ethiopic": "H",
                        "E5-ethiopic": "A",
                        "E6-ethiopic": "K",
                        "EE0-ethiopic": "Ih",
                        "EE1-ethiopic": "Sa",
                        "EE2-ethiopic": "Ma",
                        "EE3-ethiopic": "Ro",
                        "EE4-ethiopic": "Ha",
                        "EE5-ethiopic": "Ar",
                        "EE6-ethiopic": "Ki",
                        "EEE0-ethiopic": "Ihu",
                        "EEE1-ethiopic": "San",
                        "EEE2-ethiopic": "Mak",
                        "EEE3-ethiopic": "Rob",
                        "EEE4-ethiopic": "Ham",
                        "EEE5-ethiopic": "Arb",
                        "EEE6-ethiopic": "Kid",
                        "EEEE0-ethiopic": "Ihud",
                        "EEEE1-ethiopic": "Sanyo",
                        "EEEE2-ethiopic": "Maksanyo",
                        "EEEE3-ethiopic": "Rob/Rabu'e",
                        "EEEE4-ethiopic": "Hamus",
                        "EEEE5-ethiopic": "Arb",
                        "EEEE6-ethiopic": "Kidamme"
                    }
                },
                "US": {
                    "data": {
                        "MMMM1": "January",
                        "MMM1": "Jan",
                        "NN1": "Ja",
                        "N1": "J",
                        "MMMM2": "February",
                        "MMM2": "Feb",
                        "NN2": "Fe",
                        "N2": "F",
                        "MMMM3": "March",
                        "MMM3": "Mar",
                        "NN3": "Ma",
                        "N3": "M",
                        "MMMM4": "April",
                        "MMM4": "Apr",
                        "NN4": "Ap",
                        "N4": "A",
                        "MMMM5": "May",
                        "MMM5": "May",
                        "NN5": "Ma",
                        "N5": "M",
                        "MMMM6": "June",
                        "MMM6": "Jun",
                        "NN6": "Ju",
                        "N6": "J",
                        "MMMM7": "July",
                        "MMM7": "Jul",
                        "NN7": "Ju",
                        "N7": "J",
                        "MMMM8": "August",
                        "MMM8": "Aug",
                        "NN8": "Au",
                        "N8": "A",
                        "MMMM9": "September",
                        "MMM9": "Sep",
                        "NN9": "Se",
                        "N9": "S",
                        "MMMM10": "October",
                        "MMM10": "Oct",
                        "NN10": "Oc",
                        "N10": "O",
                        "MMMM11": "November",
                        "MMM11": "Nov",
                        "NN11": "No",
                        "N11": "N",
                        "MMMM12": "December",
                        "MMM12": "Dec",
                        "NN12": "De",
                        "N12": "D",
                        "EEEE0": "Sunday",
                        "EEE0": "Sun",
                        "EE0": "Su",
                        "E0": "S",
                        "EEEE1": "Monday",
                        "EEE1": "Mon",
                        "EE1": "Mo",
                        "E1": "M",
                        "EEEE2": "Tuesday",
                        "EEE2": "Tue",
                        "EE2": "Tu",
                        "E2": "T",
                        "EEEE3": "Wednesday",
                        "EEE3": "Wed",
                        "EE3": "We",
                        "E3": "W",
                        "EEEE4": "Thursday",
                        "EEE4": "Thu",
                        "EE4": "Th",
                        "E4": "T",
                        "EEEE5": "Friday",
                        "EEE5": "Fri",
                        "EE5": "Fr",
                        "E5": "F",
                        "EEEE6": "Saturday",
                        "EEE6": "Sat",
                        "EE6": "Sa",
                        "E6": "S",
                        "ordinalChoice": "1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th",
                        "a0": "AM",
                        "a1": "PM",
                        "azh0": "AM",
                        "azh1": "AM",
                        "azh2": "AM",
                        "azh3": "PM",
                        "azh4": "PM",
                        "azh5": "PM",
                        "azh6": "PM",
                        "a0-ethiopic": "morning",
                        "a1-ethiopic": "noon",
                        "a2-ethiopic": "afternoon",
                        "a3-ethiopic": "evening",
                        "a4-ethiopic": "night",
                        "G-1": "BCE",
                        "G1": "CE",
                        "separatorFull": ", ",
                        "finalSeparatorFull": " and ",
                        "separatorShort": " ",
                        "separatorMedium": " ",
                        "separatorLong": ", ",
                        "N1-hebrew": "N",
                        "N2-hebrew": "I",
                        "N3-hebrew": "S",
                        "N4-hebrew": "T",
                        "N5-hebrew": "A",
                        "N6-hebrew": "E",
                        "N7-hebrew": "T",
                        "N8-hebrew": "Ḥ",
                        "N9-hebrew": "K",
                        "N10-hebrew": "T",
                        "N11-hebrew": "S",
                        "N12-hebrew": "A",
                        "N13-hebrew": "A",
                        "NN1-hebrew": "Ni",
                        "NN2-hebrew": "Iy",
                        "NN3-hebrew": "Si",
                        "NN4-hebrew": "Ta",
                        "NN5-hebrew": "Av",
                        "NN6-hebrew": "El",
                        "NN7-hebrew": "Ti",
                        "NN8-hebrew": "Ḥe",
                        "NN9-hebrew": "Ki",
                        "NN10-hebrew": "Te",
                        "NN11-hebrew": "Sh",
                        "NN12-hebrew": "Ad",
                        "NN13-hebrew": "A2",
                        "MMM1-hebrew": "Nis",
                        "MMM2-hebrew": "Iyy",
                        "MMM3-hebrew": "Siv",
                        "MMM4-hebrew": "Tam",
                        "MMM5-hebrew": "Av",
                        "MMM6-hebrew": "Elu",
                        "MMM7-hebrew": "Tis",
                        "MMM8-hebrew": "Ḥes",
                        "MMM9-hebrew": "Kis",
                        "MMM10-hebrew": "Tev",
                        "MMM11-hebrew": "She",
                        "MMM12-hebrew": "Ada",
                        "MMM13-hebrew": "Ad2",
                        "MMMM1-hebrew": "Nisan",
                        "MMMM2-hebrew": "Iyyar",
                        "MMMM3-hebrew": "Sivan",
                        "MMMM4-hebrew": "Tammuz",
                        "MMMM5-hebrew": "Av",
                        "MMMM6-hebrew": "Elul",
                        "MMMM7-hebrew": "Tishri",
                        "MMMM8-hebrew": "Ḥeshvan",
                        "MMMM9-hebrew": "Kislev",
                        "MMMM10-hebrew": "Teveth",
                        "MMMM11-hebrew": "Shevat",
                        "MMMM12-hebrew": "Adar",
                        "MMMM13-hebrew": "Adar II",
                        "E0-hebrew": "R",
                        "E1-hebrew": "S",
                        "E2-hebrew": "S",
                        "E3-hebrew": "R",
                        "E4-hebrew": "Ḥ",
                        "E5-hebrew": "S",
                        "E6-hebrew": "S",
                        "EE0-hebrew": "ri",
                        "EE1-hebrew": "se",
                        "EE2-hebrew": "sl",
                        "EE3-hebrew": "rv",
                        "EE4-hebrew": "ḥa",
                        "EE5-hebrew": "si",
                        "EE6-hebrew": "sa",
                        "EEE0-hebrew": "ris",
                        "EEE1-hebrew": "she",
                        "EEE2-hebrew": "shl",
                        "EEE3-hebrew": "rvi",
                        "EEE4-hebrew": "ḥam",
                        "EEE5-hebrew": "shi",
                        "EEE6-hebrew": "sha",
                        "EEEE0-hebrew": "yom rishon",
                        "EEEE1-hebrew": "yom sheni",
                        "EEEE2-hebrew": "yom shlishi",
                        "EEEE3-hebrew": "yom r'vi‘i",
                        "EEEE4-hebrew": "yom ḥamishi",
                        "EEEE5-hebrew": "yom shishi",
                        "EEEE6-hebrew": "yom shabbat",
                        "N1-islamic": "M",
                        "N2-islamic": "Ṣ",
                        "N3-islamic": "R",
                        "N4-islamic": "R",
                        "N5-islamic": "J",
                        "N6-islamic": "J",
                        "N7-islamic": "R",
                        "N8-islamic": "Š",
                        "N9-islamic": "R",
                        "N10-islamic": "Š",
                        "N11-islamic": "Q",
                        "N12-islamic": "Ḥ",
                        "NN1-islamic": "Mu",
                        "NN2-islamic": "Ṣa",
                        "NN3-islamic": "Rb",
                        "NN4-islamic": "R2",
                        "NN5-islamic": "Ju",
                        "NN6-islamic": "J2",
                        "NN7-islamic": "Ra",
                        "NN8-islamic": "Šh",
                        "NN9-islamic": "Ra",
                        "NN10-islamic": "Ša",
                        "NN11-islamic": "Qa",
                        "NN12-islamic": "Ḥi",
                        "MMM1-islamic": "Muḥ",
                        "MMM2-islamic": "Ṣaf",
                        "MMM3-islamic": "Rab",
                        "MMM4-islamic": "Ra2",
                        "MMM5-islamic": "Jum",
                        "MMM6-islamic": "Ju2",
                        "MMM7-islamic": "Raj",
                        "MMM8-islamic": "Šha",
                        "MMM9-islamic": "Ram",
                        "MMM10-islamic": "Šaw",
                        "MMM11-islamic": "Qad",
                        "MMM12-islamic": "Ḥij",
                        "MMMM1-islamic": "Muḥarram",
                        "MMMM2-islamic": "Ṣafar",
                        "MMMM3-islamic": "Rabī‘ I",
                        "MMMM4-islamic": "Rabī‘ II",
                        "MMMM5-islamic": "Jumādā I",
                        "MMMM6-islamic": "Jumādā II",
                        "MMMM7-islamic": "Rajab",
                        "MMMM8-islamic": "Šha'bān",
                        "MMMM9-islamic": "Ramaḍān",
                        "MMMM10-islamic": "Šawwāl",
                        "MMMM11-islamic": "Ḏu al-Qa‘da",
                        "MMMM12-islamic": "Ḏu al-Ḥijja",
                        "E0-islamic": "A",
                        "E1-islamic": "I",
                        "E2-islamic": "T",
                        "E3-islamic": "A",
                        "E4-islamic": "K",
                        "E5-islamic": "J",
                        "E6-islamic": "S",
                        "EE0-islamic": "ah",
                        "EE1-islamic": "it",
                        "EE2-islamic": "th",
                        "EE3-islamic": "ar",
                        "EE4-islamic": "kh",
                        "EE5-islamic": "ju",
                        "EE6-islamic": "sa",
                        "EEE0-islamic": "aha",
                        "EEE1-islamic": "ith",
                        "EEE2-islamic": "tha",
                        "EEE3-islamic": "arb",
                        "EEE4-islamic": "kha",
                        "EEE5-islamic": "jum",
                        "EEE6-islamic": "sab",
                        "EEEE0-islamic": "yawn al-ahad",
                        "EEEE1-islamic": "yawn al-ithnaya",
                        "EEEE2-islamic": "yawn uth-thalathaa",
                        "EEEE3-islamic": "yawn al-arba‘a",
                        "EEEE4-islamic": "yawn al-khamis",
                        "EEEE5-islamic": "yawn al-jum‘a",
                        "EEEE6-islamic": "yawn as-sabt",
                        "N1-persian": "F",
                        "N2-persian": "O",
                        "N3-persian": "K",
                        "N4-persian": "T",
                        "N5-persian": "M",
                        "N6-persian": "S",
                        "N7-persian": "M",
                        "N8-persian": "A",
                        "N9-persian": "A",
                        "N10-persian": "D",
                        "N11-persian": "B",
                        "N12-persian": "E",
                        "NN1-persian": "Fa",
                        "NN2-persian": "Or",
                        "NN3-persian": "Kh",
                        "NN4-persian": "Ti",
                        "NN5-persian": "Mo",
                        "NN6-persian": "Sh",
                        "NN7-persian": "Me",
                        "NN8-persian": "Ab",
                        "NN9-persian": "Az",
                        "NN10-persian": "De",
                        "NN11-persian": "Ba",
                        "NN12-persian": "Es",
                        "MMM1-persian": "Far",
                        "MMM2-persian": "Ord",
                        "MMM3-persian": "Kho",
                        "MMM4-persian": "Tir",
                        "MMM5-persian": "Mor",
                        "MMM6-persian": "Sha",
                        "MMM7-persian": "Meh",
                        "MMM8-persian": "Aba",
                        "MMM9-persian": "Aza",
                        "MMM10-persian": "Dey",
                        "MMM11-persian": "Bah",
                        "MMM12-persian": "Esf",
                        "MMMM1-persian": "Farvardin",
                        "MMMM2-persian": "Ordibehesht",
                        "MMMM3-persian": "Khordad",
                        "MMMM4-persian": "Tir",
                        "MMMM5-persian": "Mordad",
                        "MMMM6-persian": "Shahrivar",
                        "MMMM7-persian": "Mehr",
                        "MMMM8-persian": "Aban",
                        "MMMM9-persian": "Azar",
                        "MMMM10-persian": "Dey",
                        "MMMM11-persian": "Bahman",
                        "MMMM12-persian": "Esfand",
                        "EE0-persian": "Ye",
                        "EE1-persian": "Do",
                        "EE2-persian": "Se",
                        "EE3-persian": "Ch",
                        "EE4-persian": "Pa",
                        "EE5-persian": "Jo",
                        "EE6-persian": "Sh",
                        "EEE0-persian": "Yek",
                        "EEE1-persian": "Dos",
                        "EEE2-persian": "Ses",
                        "EEE3-persian": "Cha",
                        "EEE4-persian": "Pan",
                        "EEE5-persian": "Jom",
                        "EEE6-persian": "Sha",
                        "EEEE0-persian": "Yekshanbeh",
                        "EEEE1-persian": "Doshanbeh",
                        "EEEE2-persian": "Seshhanbeh",
                        "EEEE3-persian": "Chaharshanbeh",
                        "EEEE4-persian": "Panjshanbeh",
                        "EEEE5-persian": "Jomeh",
                        "EEEE6-persian": "Shanbeh",
                        "N1-persian-algo": "F",
                        "N2-persian-algo": "O",
                        "N3-persian-algo": "K",
                        "N4-persian-algo": "T",
                        "N5-persian-algo": "M",
                        "N6-persian-algo": "S",
                        "N7-persian-algo": "M",
                        "N8-persian-algo": "A",
                        "N9-persian-algo": "A",
                        "N10-persian-algo": "D",
                        "N11-persian-algo": "B",
                        "N12-persian-algo": "E",
                        "NN1-persian-algo": "Fa",
                        "NN2-persian-algo": "Or",
                        "NN3-persian-algo": "Kh",
                        "NN4-persian-algo": "Ti",
                        "NN5-persian-algo": "Mo",
                        "NN6-persian-algo": "Sh",
                        "NN7-persian-algo": "Me",
                        "NN8-persian-algo": "Ab",
                        "NN9-persian-algo": "Az",
                        "NN10-persian-algo": "De",
                        "NN11-persian-algo": "Ba",
                        "NN12-persian-algo": "Es",
                        "MMM1-persian-algo": "Far",
                        "MMM2-persian-algo": "Ord",
                        "MMM3-persian-algo": "Kho",
                        "MMM4-persian-algo": "Tir",
                        "MMM5-persian-algo": "Mor",
                        "MMM6-persian-algo": "Sha",
                        "MMM7-persian-algo": "Meh",
                        "MMM8-persian-algo": "Aba",
                        "MMM9-persian-algo": "Aza",
                        "MMM10-persian-algo": "Dey",
                        "MMM11-persian-algo": "Bah",
                        "MMM12-persian-algo": "Esf",
                        "MMMM1-persian-algo": "Farvardin",
                        "MMMM2-persian-algo": "Ordibehesht",
                        "MMMM3-persian-algo": "Khordad",
                        "MMMM4-persian-algo": "Tir",
                        "MMMM5-persian-algo": "Mordad",
                        "MMMM6-persian-algo": "Shahrivar",
                        "MMMM7-persian-algo": "Mehr",
                        "MMMM8-persian-algo": "Aban",
                        "MMMM9-persian-algo": "Azar",
                        "MMMM10-persian-algo": "Dey",
                        "MMMM11-persian-algo": "Bahman",
                        "MMMM12-persian-algo": "Esfand",
                        "EE0-persian-algo": "Ye",
                        "EE1-persian-algo": "Do",
                        "EE2-persian-algo": "Se",
                        "EE3-persian-algo": "Ch",
                        "EE4-persian-algo": "Pa",
                        "EE5-persian-algo": "Jo",
                        "EE6-persian-algo": "Sh",
                        "EEE0-persian-algo": "Yek",
                        "EEE1-persian-algo": "Dos",
                        "EEE2-persian-algo": "Ses",
                        "EEE3-persian-algo": "Cha",
                        "EEE4-persian-algo": "Pan",
                        "EEE5-persian-algo": "Jom",
                        "EEE6-persian-algo": "Sha",
                        "EEEE0-persian-algo": "Yekshanbeh",
                        "EEEE1-persian-algo": "Doshanbeh",
                        "EEEE2-persian-algo": "Seshhanbeh",
                        "EEEE3-persian-algo": "Chaharshanbeh",
                        "EEEE4-persian-algo": "Panjshanbeh",
                        "EEEE5-persian-algo": "Jomeh",
                        "EEEE6-persian-algo": "Shanbeh",
                        "M1-thaisolar": "M",
                        "M2-thaisolar": "K",
                        "M3-thaisolar": "M",
                        "M4-thaisolar": "M",
                        "M5-thaisolar": "P",
                        "M6-thaisolar": "M",
                        "M7-thaisolar": "K",
                        "M8-thaisolar": "S",
                        "M9-thaisolar": "K",
                        "M10-thaisolar": "T",
                        "M11-thaisolar": "P",
                        "M12-thaisolar": "T",
                        "MM1-thaisolar": "MaK",
                        "MM2-thaisolar": "KP",
                        "MM3-thaisolar": "MiK",
                        "MM4-thaisolar": "MY",
                        "MM5-thaisolar": "PK",
                        "MM6-thaisolar": "MY",
                        "MM7-thaisolar": "KK",
                        "MM8-thaisolar": "SK",
                        "MM9-thaisolar": "KY",
                        "MM10-thaisolar": "TuK",
                        "MM11-thaisolar": "PY",
                        "MM12-thaisolar": "ThK",
                        "MMM1-thaisolar": "Ma.K.",
                        "MMM2-thaisolar": "Ku.P.",
                        "MMM3-thaisolar": "Mi.K.",
                        "MMM4-thaisolar": "Me.Y.",
                        "MMM5-thaisolar": "Ph.K.",
                        "MMM6-thaisolar": "Mi.Y.",
                        "MMM7-thaisolar": "Ka.K.",
                        "MMM8-thaisolar": "Si.K.",
                        "MMM9-thaisolar": "Ka.Y.",
                        "MMM10-thaisolar": "Tu.K.",
                        "MMM11-thaisolar": "Ph.Y.",
                        "MMM12-thaisolar": "Th.K.",
                        "MMMM1-thaisolar": "Makarakhom",
                        "MMMM2-thaisolar": "Kumphaphan",
                        "MMMM3-thaisolar": "Minakhom",
                        "MMMM4-thaisolar": "Mesayon",
                        "MMMM5-thaisolar": "Phruetsaphakhom",
                        "MMMM6-thaisolar": "Mithunayon",
                        "MMMM7-thaisolar": "Karakadakhom",
                        "MMMM8-thaisolar": "Singhakhom",
                        "MMMM9-thaisolar": "Kanyayon",
                        "MMMM10-thaisolar": "Tulakhom",
                        "MMMM11-thaisolar": "Phruetsachikayon",
                        "MMMM12-thaisolar": "Thanwakhom",
                        "E0-thaisolar": "A",
                        "E1-thaisolar": "C",
                        "E2-thaisolar": "A",
                        "E3-thaisolar": "P",
                        "E4-thaisolar": "P",
                        "E5-thaisolar": "S",
                        "E6-thaisolar": "S",
                        "EE0-thaisolar": "at",
                        "EE1-thaisolar": "ch",
                        "EE2-thaisolar": "an",
                        "EE3-thaisolar": "pu",
                        "EE4-thaisolar": "pr",
                        "EE5-thaisolar": "su",
                        "EE6-thaisolar": "sa",
                        "EEE0-thaisolar": "ath",
                        "EEE1-thaisolar": "cha",
                        "EEE2-thaisolar": "ang",
                        "EEE3-thaisolar": "phu",
                        "EEE4-thaisolar": "phr",
                        "EEE5-thaisolar": "suk",
                        "EEE6-thaisolar": "sao",
                        "EEEE0-thaisolar": "wan athit",
                        "EEEE1-thaisolar": "wan chan",
                        "EEEE2-thaisolar": "wan angkhan",
                        "EEEE3-thaisolar": "wan phut",
                        "EEEE4-thaisolar": "wan phruehatsabodi",
                        "EEEE5-thaisolar": "wan suk",
                        "EEEE6-thaisolar": "wan sao",
                        "N1-coptic": "T",
                        "N2-coptic": "P",
                        "N3-coptic": "A",
                        "N4-coptic": "K",
                        "N5-coptic": "T",
                        "N6-coptic": "M",
                        "N7-coptic": "P",
                        "N8-coptic": "P",
                        "N9-coptic": "P",
                        "N10-coptic": "P",
                        "N11-coptic": "E",
                        "N12-coptic": "M",
                        "N13-coptic": "E",
                        "NN1-coptic": "Th",
                        "NN2-coptic": "Pa",
                        "NN3-coptic": "At",
                        "NN4-coptic": "Ko",
                        "NN5-coptic": "To",
                        "NN6-coptic": "Me",
                        "NN7-coptic": "Pa",
                        "NN8-coptic": "Pa",
                        "NN9-coptic": "Pa",
                        "NN10-coptic": "Pa",
                        "NN11-coptic": "Ep",
                        "NN12-coptic": "Me",
                        "NN13-coptic": "Ep",
                        "MMM1-coptic": "Tho",
                        "MMM2-coptic": "Pao",
                        "MMM3-coptic": "Ath",
                        "MMM4-coptic": "Koi",
                        "MMM5-coptic": "Tob",
                        "MMM6-coptic": "Mes",
                        "MMM7-coptic": "Par",
                        "MMM8-coptic": "Par",
                        "MMM9-coptic": "Pas",
                        "MMM10-coptic": "Pao",
                        "MMM11-coptic": "Epe",
                        "MMM12-coptic": "Mes",
                        "MMM13-coptic": "Epa",
                        "MMMM1-coptic": "Thoout",
                        "MMMM2-coptic": "Paope",
                        "MMMM3-coptic": "Athor",
                        "MMMM4-coptic": "Koiak",
                        "MMMM5-coptic": "Tobe",
                        "MMMM6-coptic": "Meshir",
                        "MMMM7-coptic": "Paremotep",
                        "MMMM8-coptic": "Parmoute",
                        "MMMM9-coptic": "Pashons",
                        "MMMM10-coptic": "Paoone",
                        "MMMM11-coptic": "Epeep",
                        "MMMM12-coptic": "Mesore",
                        "MMMM13-coptic": "Epagomene",
                        "E0-coptic": "T",
                        "E1-coptic": "P",
                        "E2-coptic": "P",
                        "E3-coptic": "P",
                        "E4-coptic": "P",
                        "E5-coptic": "P",
                        "E6-coptic": "P",
                        "EE0-coptic": "Tk",
                        "EE1-coptic": "Pe",
                        "EE2-coptic": "Ps",
                        "EE3-coptic": "Pe",
                        "EE4-coptic": "Pt",
                        "EE5-coptic": "Ps",
                        "EE6-coptic": "Ps",
                        "EEE0-coptic": "Tky",
                        "EEE1-coptic": "Pes",
                        "EEE2-coptic": "Psh",
                        "EEE3-coptic": "Pef",
                        "EEE4-coptic": "Pti",
                        "EEE5-coptic": "Pso",
                        "EEE6-coptic": "Psa",
                        "EEEE0-coptic": "Tkyriake",
                        "EEEE1-coptic": "Pesnau",
                        "EEEE2-coptic": "Pshoment",
                        "EEEE3-coptic": "Peftoou",
                        "EEEE4-coptic": "Ptiou",
                        "EEEE5-coptic": "Psoou",
                        "EEEE6-coptic": "Psabbaton",
                        "N1-ethiopic": "M",
                        "N2-ethiopic": "T",
                        "N3-ethiopic": "H",
                        "N4-ethiopic": "T",
                        "N5-ethiopic": "T",
                        "N6-ethiopic": "Y",
                        "N7-ethiopic": "M",
                        "N8-ethiopic": "M",
                        "N9-ethiopic": "G",
                        "N10-ethiopic": "S",
                        "N11-ethiopic": "H",
                        "N12-ethiopic": "N",
                        "N13-ethiopic": "P",
                        "NN1-ethiopic": "Ma",
                        "NN2-ethiopic": "Te",
                        "NN3-ethiopic": "He",
                        "NN4-ethiopic": "Ta",
                        "NN5-ethiopic": "Te",
                        "NN6-ethiopic": "Ya",
                        "NN7-ethiopic": "Ma",
                        "NN8-ethiopic": "Mi",
                        "NN9-ethiopic": "Ge",
                        "NN10-ethiopic": "Sa",
                        "NN11-ethiopic": "Ha",
                        "NN12-ethiopic": "Na",
                        "NN13-ethiopic": "Pa",
                        "MMM1-ethiopic": "Mas",
                        "MMM2-ethiopic": "Teq",
                        "MMM3-ethiopic": "Hed",
                        "MMM4-ethiopic": "Tak",
                        "MMM5-ethiopic": "Ter",
                        "MMM6-ethiopic": "Yak",
                        "MMM7-ethiopic": "Mag",
                        "MMM8-ethiopic": "Miy",
                        "MMM9-ethiopic": "Gen",
                        "MMM10-ethiopic": "San",
                        "MMM11-ethiopic": "Ham",
                        "MMM12-ethiopic": "Nah",
                        "MMM13-ethiopic": "Pag",
                        "MMMM1-ethiopic": "Maskaram",
                        "MMMM2-ethiopic": "Teqemt",
                        "MMMM3-ethiopic": "Hedar",
                        "MMMM4-ethiopic": "Takhsas",
                        "MMMM5-ethiopic": "Ter",
                        "MMMM6-ethiopic": "Yakatit",
                        "MMMM7-ethiopic": "Magabit",
                        "MMMM8-ethiopic": "Miyazya",
                        "MMMM9-ethiopic": "Genbot",
                        "MMMM10-ethiopic": "Sane",
                        "MMMM11-ethiopic": "Hamle",
                        "MMMM12-ethiopic": "Nahase",
                        "MMMM13-ethiopic": "Paguemen",
                        "E0-ethiopic": "I",
                        "E1-ethiopic": "S",
                        "E2-ethiopic": "M",
                        "E3-ethiopic": "R",
                        "E4-ethiopic": "H",
                        "E5-ethiopic": "A",
                        "E6-ethiopic": "K",
                        "EE0-ethiopic": "Ih",
                        "EE1-ethiopic": "Sa",
                        "EE2-ethiopic": "Ma",
                        "EE3-ethiopic": "Ro",
                        "EE4-ethiopic": "Ha",
                        "EE5-ethiopic": "Ar",
                        "EE6-ethiopic": "Ki",
                        "EEE0-ethiopic": "Ihu",
                        "EEE1-ethiopic": "San",
                        "EEE2-ethiopic": "Mak",
                        "EEE3-ethiopic": "Rob",
                        "EEE4-ethiopic": "Ham",
                        "EEE5-ethiopic": "Arb",
                        "EEE6-ethiopic": "Kid",
                        "EEEE0-ethiopic": "Ihud",
                        "EEEE1-ethiopic": "Sanyo",
                        "EEEE2-ethiopic": "Maksanyo",
                        "EEEE3-ethiopic": "Rob/Rabu'e",
                        "EEEE4-ethiopic": "Hamus",
                        "EEEE5-ethiopic": "Arb",
                        "EEEE6-ethiopic": "Kidamme"
                    }
                },
                "data": {
                    "MMMM1": "January",
                    "MMM1": "Jan",
                    "NN1": "Ja",
                    "N1": "J",
                    "MMMM2": "February",
                    "MMM2": "Feb",
                    "NN2": "Fe",
                    "N2": "F",
                    "MMMM3": "March",
                    "MMM3": "Mar",
                    "NN3": "Ma",
                    "N3": "M",
                    "MMMM4": "April",
                    "MMM4": "Apr",
                    "NN4": "Ap",
                    "N4": "A",
                    "MMMM5": "May",
                    "MMM5": "May",
                    "NN5": "Ma",
                    "N5": "M",
                    "MMMM6": "June",
                    "MMM6": "Jun",
                    "NN6": "Ju",
                    "N6": "J",
                    "MMMM7": "July",
                    "MMM7": "Jul",
                    "NN7": "Ju",
                    "N7": "J",
                    "MMMM8": "August",
                    "MMM8": "Aug",
                    "NN8": "Au",
                    "N8": "A",
                    "MMMM9": "September",
                    "MMM9": "Sep",
                    "NN9": "Se",
                    "N9": "S",
                    "MMMM10": "October",
                    "MMM10": "Oct",
                    "NN10": "Oc",
                    "N10": "O",
                    "MMMM11": "November",
                    "MMM11": "Nov",
                    "NN11": "No",
                    "N11": "N",
                    "MMMM12": "December",
                    "MMM12": "Dec",
                    "NN12": "De",
                    "N12": "D",
                    "EEEE0": "Sunday",
                    "EEE0": "Sun",
                    "EE0": "Su",
                    "E0": "S",
                    "EEEE1": "Monday",
                    "EEE1": "Mon",
                    "EE1": "Mo",
                    "E1": "M",
                    "EEEE2": "Tuesday",
                    "EEE2": "Tue",
                    "EE2": "Tu",
                    "E2": "T",
                    "EEEE3": "Wednesday",
                    "EEE3": "Wed",
                    "EE3": "We",
                    "E3": "W",
                    "EEEE4": "Thursday",
                    "EEE4": "Thu",
                    "EE4": "Th",
                    "E4": "T",
                    "EEEE5": "Friday",
                    "EEE5": "Fri",
                    "EE5": "Fr",
                    "E5": "F",
                    "EEEE6": "Saturday",
                    "EEE6": "Sat",
                    "EE6": "Sa",
                    "E6": "S",
                    "a0": "AM",
                    "a1": "PM",
                    "G-1": "BCE",
                    "G1": "CE"
                },
                "TZ": {
                    "data": {
                        "MMMM1": "January",
                        "MMM1": "Jan",
                        "NN1": "Ja",
                        "N1": "J",
                        "MMMM2": "February",
                        "MMM2": "Feb",
                        "NN2": "Fe",
                        "N2": "F",
                        "MMMM3": "March",
                        "MMM3": "Mar",
                        "NN3": "Ma",
                        "N3": "M",
                        "MMMM4": "April",
                        "MMM4": "Apr",
                        "NN4": "Ap",
                        "N4": "A",
                        "MMMM5": "May",
                        "MMM5": "May",
                        "NN5": "Ma",
                        "N5": "M",
                        "MMMM6": "June",
                        "MMM6": "Jun",
                        "NN6": "Ju",
                        "N6": "J",
                        "MMMM7": "July",
                        "MMM7": "Jul",
                        "NN7": "Ju",
                        "N7": "J",
                        "MMMM8": "August",
                        "MMM8": "Aug",
                        "NN8": "Au",
                        "N8": "A",
                        "MMMM9": "September",
                        "MMM9": "Sep",
                        "NN9": "Se",
                        "N9": "S",
                        "MMMM10": "October",
                        "MMM10": "Oct",
                        "NN10": "Oc",
                        "N10": "O",
                        "MMMM11": "November",
                        "MMM11": "Nov",
                        "NN11": "No",
                        "N11": "N",
                        "MMMM12": "December",
                        "MMM12": "Dec",
                        "NN12": "De",
                        "N12": "D",
                        "EEEE0": "Sunday",
                        "EEE0": "Sun",
                        "EE0": "Su",
                        "E0": "S",
                        "EEEE1": "Monday",
                        "EEE1": "Mon",
                        "EE1": "Mo",
                        "E1": "M",
                        "EEEE2": "Tuesday",
                        "EEE2": "Tue",
                        "EE2": "Tu",
                        "E2": "T",
                        "EEEE3": "Wednesday",
                        "EEE3": "Wed",
                        "EE3": "We",
                        "E3": "W",
                        "EEEE4": "Thursday",
                        "EEE4": "Thu",
                        "EE4": "Th",
                        "E4": "T",
                        "EEEE5": "Friday",
                        "EEE5": "Fri",
                        "EE5": "Fr",
                        "E5": "F",
                        "EEEE6": "Saturday",
                        "EEE6": "Sat",
                        "EE6": "Sa",
                        "E6": "S",
                        "a0": "AM",
                        "a1": "PM",
                        "G-1": "BCE",
                        "G1": "CE"
                    }
                },
                "BE": {
                    "data": {
                        "MMMM1": "January",
                        "MMM1": "Jan",
                        "NN1": "Ja",
                        "N1": "J",
                        "MMMM2": "February",
                        "MMM2": "Feb",
                        "NN2": "Fe",
                        "N2": "F",
                        "MMMM3": "March",
                        "MMM3": "Mar",
                        "NN3": "Ma",
                        "N3": "M",
                        "MMMM4": "April",
                        "MMM4": "Apr",
                        "NN4": "Ap",
                        "N4": "A",
                        "MMMM5": "May",
                        "MMM5": "May",
                        "NN5": "Ma",
                        "N5": "M",
                        "MMMM6": "June",
                        "MMM6": "Jun",
                        "NN6": "Ju",
                        "N6": "J",
                        "MMMM7": "July",
                        "MMM7": "Jul",
                        "NN7": "Ju",
                        "N7": "J",
                        "MMMM8": "August",
                        "MMM8": "Aug",
                        "NN8": "Au",
                        "N8": "A",
                        "MMMM9": "September",
                        "MMM9": "Sep",
                        "NN9": "Se",
                        "N9": "S",
                        "MMMM10": "October",
                        "MMM10": "Oct",
                        "NN10": "Oc",
                        "N10": "O",
                        "MMMM11": "November",
                        "MMM11": "Nov",
                        "NN11": "No",
                        "N11": "N",
                        "MMMM12": "December",
                        "MMM12": "Dec",
                        "NN12": "De",
                        "N12": "D",
                        "EEEE0": "Sunday",
                        "EEE0": "Sun",
                        "EE0": "Su",
                        "E0": "S",
                        "EEEE1": "Monday",
                        "EEE1": "Mon",
                        "EE1": "Mo",
                        "E1": "M",
                        "EEEE2": "Tuesday",
                        "EEE2": "Tue",
                        "EE2": "Tu",
                        "E2": "T",
                        "EEEE3": "Wednesday",
                        "EEE3": "Wed",
                        "EE3": "We",
                        "E3": "W",
                        "EEEE4": "Thursday",
                        "EEE4": "Thu",
                        "EE4": "Th",
                        "E4": "T",
                        "EEEE5": "Friday",
                        "EEE5": "Fri",
                        "EE5": "Fr",
                        "E5": "F",
                        "EEEE6": "Saturday",
                        "EEE6": "Sat",
                        "EE6": "Sa",
                        "E6": "S",
                        "a0": "am",
                        "a1": "pm",
                        "G-1": "BCE",
                        "G1": "CE"
                    }
                },
                "BZ": {
                    "data": {
                        "MMMM1": "January",
                        "MMM1": "Jan",
                        "NN1": "Ja",
                        "N1": "J",
                        "MMMM2": "February",
                        "MMM2": "Feb",
                        "NN2": "Fe",
                        "N2": "F",
                        "MMMM3": "March",
                        "MMM3": "Mar",
                        "NN3": "Ma",
                        "N3": "M",
                        "MMMM4": "April",
                        "MMM4": "Apr",
                        "NN4": "Ap",
                        "N4": "A",
                        "MMMM5": "May",
                        "MMM5": "May",
                        "NN5": "Ma",
                        "N5": "M",
                        "MMMM6": "June",
                        "MMM6": "Jun",
                        "NN6": "Ju",
                        "N6": "J",
                        "MMMM7": "July",
                        "MMM7": "Jul",
                        "NN7": "Ju",
                        "N7": "J",
                        "MMMM8": "August",
                        "MMM8": "Aug",
                        "NN8": "Au",
                        "N8": "A",
                        "MMMM9": "September",
                        "MMM9": "Sep",
                        "NN9": "Se",
                        "N9": "S",
                        "MMMM10": "October",
                        "MMM10": "Oct",
                        "NN10": "Oc",
                        "N10": "O",
                        "MMMM11": "November",
                        "MMM11": "Nov",
                        "NN11": "No",
                        "N11": "N",
                        "MMMM12": "December",
                        "MMM12": "Dec",
                        "NN12": "De",
                        "N12": "D",
                        "EEEE0": "Sunday",
                        "EEE0": "Sun",
                        "EE0": "Su",
                        "E0": "S",
                        "EEEE1": "Monday",
                        "EEE1": "Mon",
                        "EE1": "Mo",
                        "E1": "M",
                        "EEEE2": "Tuesday",
                        "EEE2": "Tue",
                        "EE2": "Tu",
                        "E2": "T",
                        "EEEE3": "Wednesday",
                        "EEE3": "Wed",
                        "EE3": "We",
                        "E3": "W",
                        "EEEE4": "Thursday",
                        "EEE4": "Thu",
                        "EE4": "Th",
                        "E4": "T",
                        "EEEE5": "Friday",
                        "EEE5": "Fri",
                        "EE5": "Fr",
                        "E5": "F",
                        "EEEE6": "Saturday",
                        "EEE6": "Sat",
                        "EE6": "Sa",
                        "E6": "S",
                        "a0": "AM",
                        "a1": "PM",
                        "G-1": "BCE",
                        "G1": "CE"
                    }
                }
            },
            "data": {
                "MMMM1": "January",
                "MMM1": "Jan",
                "NN1": "Ja",
                "N1": "J",
                "MMMM2": "February",
                "MMM2": "Feb",
                "NN2": "Fe",
                "N2": "F",
                "MMMM3": "March",
                "MMM3": "Mar",
                "NN3": "Ma",
                "N3": "M",
                "MMMM4": "April",
                "MMM4": "Apr",
                "NN4": "Ap",
                "N4": "A",
                "MMMM5": "May",
                "MMM5": "May",
                "NN5": "Ma",
                "N5": "M",
                "MMMM6": "June",
                "MMM6": "Jun",
                "NN6": "Ju",
                "N6": "J",
                "MMMM7": "July",
                "MMM7": "Jul",
                "NN7": "Ju",
                "N7": "J",
                "MMMM8": "August",
                "MMM8": "Aug",
                "NN8": "Au",
                "N8": "A",
                "MMMM9": "September",
                "MMM9": "Sep",
                "NN9": "Se",
                "N9": "S",
                "MMMM10": "October",
                "MMM10": "Oct",
                "NN10": "Oc",
                "N10": "O",
                "MMMM11": "November",
                "MMM11": "Nov",
                "NN11": "No",
                "N11": "N",
                "MMMM12": "December",
                "MMM12": "Dec",
                "NN12": "De",
                "N12": "D",
                "EEEE0": "Sunday",
                "EEE0": "Sun",
                "EE0": "Su",
                "E0": "S",
                "EEEE1": "Monday",
                "EEE1": "Mon",
                "EE1": "Mo",
                "E1": "M",
                "EEEE2": "Tuesday",
                "EEE2": "Tue",
                "EE2": "Tu",
                "E2": "T",
                "EEEE3": "Wednesday",
                "EEE3": "Wed",
                "EE3": "We",
                "E3": "W",
                "EEEE4": "Thursday",
                "EEE4": "Thu",
                "EE4": "Th",
                "E4": "T",
                "EEEE5": "Friday",
                "EEE5": "Fri",
                "EE5": "Fr",
                "E5": "F",
                "EEEE6": "Saturday",
                "EEE6": "Sat",
                "EE6": "Sa",
                "E6": "S",
                "ordinalChoice": "1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th",
                "a0": "AM",
                "a1": "PM",
                "azh0": "AM",
                "azh1": "AM",
                "azh2": "AM",
                "azh3": "PM",
                "azh4": "PM",
                "azh5": "PM",
                "azh6": "PM",
                "a0-ethiopic": "morning",
                "a1-ethiopic": "noon",
                "a2-ethiopic": "afternoon",
                "a3-ethiopic": "evening",
                "a4-ethiopic": "night",
                "G-1": "BCE",
                "G1": "CE",
                "separatorFull": ", ",
                "finalSeparatorFull": ", and ",
                "separatorShort": " ",
                "separatorMedium": " ",
                "separatorLong": ", ",
                "N1-hebrew": "N",
                "N2-hebrew": "I",
                "N3-hebrew": "S",
                "N4-hebrew": "T",
                "N5-hebrew": "A",
                "N6-hebrew": "E",
                "N7-hebrew": "T",
                "N8-hebrew": "Ḥ",
                "N9-hebrew": "K",
                "N10-hebrew": "T",
                "N11-hebrew": "S",
                "N12-hebrew": "A",
                "N13-hebrew": "A",
                "NN1-hebrew": "Ni",
                "NN2-hebrew": "Iy",
                "NN3-hebrew": "Si",
                "NN4-hebrew": "Ta",
                "NN5-hebrew": "Av",
                "NN6-hebrew": "El",
                "NN7-hebrew": "Ti",
                "NN8-hebrew": "Ḥe",
                "NN9-hebrew": "Ki",
                "NN10-hebrew": "Te",
                "NN11-hebrew": "Sh",
                "NN12-hebrew": "Ad",
                "NN13-hebrew": "A2",
                "MMM1-hebrew": "Nis",
                "MMM2-hebrew": "Iyy",
                "MMM3-hebrew": "Siv",
                "MMM4-hebrew": "Tam",
                "MMM5-hebrew": "Av",
                "MMM6-hebrew": "Elu",
                "MMM7-hebrew": "Tis",
                "MMM8-hebrew": "Ḥes",
                "MMM9-hebrew": "Kis",
                "MMM10-hebrew": "Tev",
                "MMM11-hebrew": "She",
                "MMM12-hebrew": "Ada",
                "MMM13-hebrew": "Ad2",
                "MMMM1-hebrew": "Nisan",
                "MMMM2-hebrew": "Iyyar",
                "MMMM3-hebrew": "Sivan",
                "MMMM4-hebrew": "Tammuz",
                "MMMM5-hebrew": "Av",
                "MMMM6-hebrew": "Elul",
                "MMMM7-hebrew": "Tishri",
                "MMMM8-hebrew": "Ḥeshvan",
                "MMMM9-hebrew": "Kislev",
                "MMMM10-hebrew": "Teveth",
                "MMMM11-hebrew": "Shevat",
                "MMMM12-hebrew": "Adar",
                "MMMM13-hebrew": "Adar II",
                "E0-hebrew": "R",
                "E1-hebrew": "S",
                "E2-hebrew": "S",
                "E3-hebrew": "R",
                "E4-hebrew": "Ḥ",
                "E5-hebrew": "S",
                "E6-hebrew": "S",
                "EE0-hebrew": "ri",
                "EE1-hebrew": "se",
                "EE2-hebrew": "sl",
                "EE3-hebrew": "rv",
                "EE4-hebrew": "ḥa",
                "EE5-hebrew": "si",
                "EE6-hebrew": "sa",
                "EEE0-hebrew": "ris",
                "EEE1-hebrew": "she",
                "EEE2-hebrew": "shl",
                "EEE3-hebrew": "rvi",
                "EEE4-hebrew": "ḥam",
                "EEE5-hebrew": "shi",
                "EEE6-hebrew": "sha",
                "EEEE0-hebrew": "yom rishon",
                "EEEE1-hebrew": "yom sheni",
                "EEEE2-hebrew": "yom shlishi",
                "EEEE3-hebrew": "yom r'vi‘i",
                "EEEE4-hebrew": "yom ḥamishi",
                "EEEE5-hebrew": "yom shishi",
                "EEEE6-hebrew": "yom shabbat",
                "N1-islamic": "M",
                "N2-islamic": "Ṣ",
                "N3-islamic": "R",
                "N4-islamic": "R",
                "N5-islamic": "J",
                "N6-islamic": "J",
                "N7-islamic": "R",
                "N8-islamic": "Š",
                "N9-islamic": "R",
                "N10-islamic": "Š",
                "N11-islamic": "Q",
                "N12-islamic": "Ḥ",
                "NN1-islamic": "Mu",
                "NN2-islamic": "Ṣa",
                "NN3-islamic": "Rb",
                "NN4-islamic": "R2",
                "NN5-islamic": "Ju",
                "NN6-islamic": "J2",
                "NN7-islamic": "Ra",
                "NN8-islamic": "Šh",
                "NN9-islamic": "Ra",
                "NN10-islamic": "Ša",
                "NN11-islamic": "Qa",
                "NN12-islamic": "Ḥi",
                "MMM1-islamic": "Muḥ",
                "MMM2-islamic": "Ṣaf",
                "MMM3-islamic": "Rab",
                "MMM4-islamic": "Ra2",
                "MMM5-islamic": "Jum",
                "MMM6-islamic": "Ju2",
                "MMM7-islamic": "Raj",
                "MMM8-islamic": "Šha",
                "MMM9-islamic": "Ram",
                "MMM10-islamic": "Šaw",
                "MMM11-islamic": "Qad",
                "MMM12-islamic": "Ḥij",
                "MMMM1-islamic": "Muḥarram",
                "MMMM2-islamic": "Ṣafar",
                "MMMM3-islamic": "Rabī‘ I",
                "MMMM4-islamic": "Rabī‘ II",
                "MMMM5-islamic": "Jumādā I",
                "MMMM6-islamic": "Jumādā II",
                "MMMM7-islamic": "Rajab",
                "MMMM8-islamic": "Šha'bān",
                "MMMM9-islamic": "Ramaḍān",
                "MMMM10-islamic": "Šawwāl",
                "MMMM11-islamic": "Ḏu al-Qa‘da",
                "MMMM12-islamic": "Ḏu al-Ḥijja",
                "E0-islamic": "A",
                "E1-islamic": "I",
                "E2-islamic": "T",
                "E3-islamic": "A",
                "E4-islamic": "K",
                "E5-islamic": "J",
                "E6-islamic": "S",
                "EE0-islamic": "ah",
                "EE1-islamic": "it",
                "EE2-islamic": "th",
                "EE3-islamic": "ar",
                "EE4-islamic": "kh",
                "EE5-islamic": "ju",
                "EE6-islamic": "sa",
                "EEE0-islamic": "aha",
                "EEE1-islamic": "ith",
                "EEE2-islamic": "tha",
                "EEE3-islamic": "arb",
                "EEE4-islamic": "kha",
                "EEE5-islamic": "jum",
                "EEE6-islamic": "sab",
                "EEEE0-islamic": "yawn al-ahad",
                "EEEE1-islamic": "yawn al-ithnaya",
                "EEEE2-islamic": "yawn uth-thalathaa",
                "EEEE3-islamic": "yawn al-arba‘a",
                "EEEE4-islamic": "yawn al-khamis",
                "EEEE5-islamic": "yawn al-jum‘a",
                "EEEE6-islamic": "yawn as-sabt",
                "N1-persian": "F",
                "N2-persian": "O",
                "N3-persian": "K",
                "N4-persian": "T",
                "N5-persian": "M",
                "N6-persian": "S",
                "N7-persian": "M",
                "N8-persian": "A",
                "N9-persian": "A",
                "N10-persian": "D",
                "N11-persian": "B",
                "N12-persian": "E",
                "NN1-persian": "Fa",
                "NN2-persian": "Or",
                "NN3-persian": "Kh",
                "NN4-persian": "Ti",
                "NN5-persian": "Mo",
                "NN6-persian": "Sh",
                "NN7-persian": "Me",
                "NN8-persian": "Ab",
                "NN9-persian": "Az",
                "NN10-persian": "De",
                "NN11-persian": "Ba",
                "NN12-persian": "Es",
                "MMM1-persian": "Far",
                "MMM2-persian": "Ord",
                "MMM3-persian": "Kho",
                "MMM4-persian": "Tir",
                "MMM5-persian": "Mor",
                "MMM6-persian": "Sha",
                "MMM7-persian": "Meh",
                "MMM8-persian": "Aba",
                "MMM9-persian": "Aza",
                "MMM10-persian": "Dey",
                "MMM11-persian": "Bah",
                "MMM12-persian": "Esf",
                "MMMM1-persian": "Farvardin",
                "MMMM2-persian": "Ordibehesht",
                "MMMM3-persian": "Khordad",
                "MMMM4-persian": "Tir",
                "MMMM5-persian": "Mordad",
                "MMMM6-persian": "Shahrivar",
                "MMMM7-persian": "Mehr",
                "MMMM8-persian": "Aban",
                "MMMM9-persian": "Azar",
                "MMMM10-persian": "Dey",
                "MMMM11-persian": "Bahman",
                "MMMM12-persian": "Esfand",
                "EE0-persian": "Ye",
                "EE1-persian": "Do",
                "EE2-persian": "Se",
                "EE3-persian": "Ch",
                "EE4-persian": "Pa",
                "EE5-persian": "Jo",
                "EE6-persian": "Sh",
                "EEE0-persian": "Yek",
                "EEE1-persian": "Dos",
                "EEE2-persian": "Ses",
                "EEE3-persian": "Cha",
                "EEE4-persian": "Pan",
                "EEE5-persian": "Jom",
                "EEE6-persian": "Sha",
                "EEEE0-persian": "Yekshanbeh",
                "EEEE1-persian": "Doshanbeh",
                "EEEE2-persian": "Seshhanbeh",
                "EEEE3-persian": "Chaharshanbeh",
                "EEEE4-persian": "Panjshanbeh",
                "EEEE5-persian": "Jomeh",
                "EEEE6-persian": "Shanbeh",
                "N1-persian-algo": "F",
                "N2-persian-algo": "O",
                "N3-persian-algo": "K",
                "N4-persian-algo": "T",
                "N5-persian-algo": "M",
                "N6-persian-algo": "S",
                "N7-persian-algo": "M",
                "N8-persian-algo": "A",
                "N9-persian-algo": "A",
                "N10-persian-algo": "D",
                "N11-persian-algo": "B",
                "N12-persian-algo": "E",
                "NN1-persian-algo": "Fa",
                "NN2-persian-algo": "Or",
                "NN3-persian-algo": "Kh",
                "NN4-persian-algo": "Ti",
                "NN5-persian-algo": "Mo",
                "NN6-persian-algo": "Sh",
                "NN7-persian-algo": "Me",
                "NN8-persian-algo": "Ab",
                "NN9-persian-algo": "Az",
                "NN10-persian-algo": "De",
                "NN11-persian-algo": "Ba",
                "NN12-persian-algo": "Es",
                "MMM1-persian-algo": "Far",
                "MMM2-persian-algo": "Ord",
                "MMM3-persian-algo": "Kho",
                "MMM4-persian-algo": "Tir",
                "MMM5-persian-algo": "Mor",
                "MMM6-persian-algo": "Sha",
                "MMM7-persian-algo": "Meh",
                "MMM8-persian-algo": "Aba",
                "MMM9-persian-algo": "Aza",
                "MMM10-persian-algo": "Dey",
                "MMM11-persian-algo": "Bah",
                "MMM12-persian-algo": "Esf",
                "MMMM1-persian-algo": "Farvardin",
                "MMMM2-persian-algo": "Ordibehesht",
                "MMMM3-persian-algo": "Khordad",
                "MMMM4-persian-algo": "Tir",
                "MMMM5-persian-algo": "Mordad",
                "MMMM6-persian-algo": "Shahrivar",
                "MMMM7-persian-algo": "Mehr",
                "MMMM8-persian-algo": "Aban",
                "MMMM9-persian-algo": "Azar",
                "MMMM10-persian-algo": "Dey",
                "MMMM11-persian-algo": "Bahman",
                "MMMM12-persian-algo": "Esfand",
                "EE0-persian-algo": "Ye",
                "EE1-persian-algo": "Do",
                "EE2-persian-algo": "Se",
                "EE3-persian-algo": "Ch",
                "EE4-persian-algo": "Pa",
                "EE5-persian-algo": "Jo",
                "EE6-persian-algo": "Sh",
                "EEE0-persian-algo": "Yek",
                "EEE1-persian-algo": "Dos",
                "EEE2-persian-algo": "Ses",
                "EEE3-persian-algo": "Cha",
                "EEE4-persian-algo": "Pan",
                "EEE5-persian-algo": "Jom",
                "EEE6-persian-algo": "Sha",
                "EEEE0-persian-algo": "Yekshanbeh",
                "EEEE1-persian-algo": "Doshanbeh",
                "EEEE2-persian-algo": "Seshhanbeh",
                "EEEE3-persian-algo": "Chaharshanbeh",
                "EEEE4-persian-algo": "Panjshanbeh",
                "EEEE5-persian-algo": "Jomeh",
                "EEEE6-persian-algo": "Shanbeh",
                "M1-thaisolar": "M",
                "M2-thaisolar": "K",
                "M3-thaisolar": "M",
                "M4-thaisolar": "M",
                "M5-thaisolar": "P",
                "M6-thaisolar": "M",
                "M7-thaisolar": "K",
                "M8-thaisolar": "S",
                "M9-thaisolar": "K",
                "M10-thaisolar": "T",
                "M11-thaisolar": "P",
                "M12-thaisolar": "T",
                "MM1-thaisolar": "MaK",
                "MM2-thaisolar": "KP",
                "MM3-thaisolar": "MiK",
                "MM4-thaisolar": "MY",
                "MM5-thaisolar": "PK",
                "MM6-thaisolar": "MY",
                "MM7-thaisolar": "KK",
                "MM8-thaisolar": "SK",
                "MM9-thaisolar": "KY",
                "MM10-thaisolar": "TuK",
                "MM11-thaisolar": "PY",
                "MM12-thaisolar": "ThK",
                "MMM1-thaisolar": "Ma.K.",
                "MMM2-thaisolar": "Ku.P.",
                "MMM3-thaisolar": "Mi.K.",
                "MMM4-thaisolar": "Me.Y.",
                "MMM5-thaisolar": "Ph.K.",
                "MMM6-thaisolar": "Mi.Y.",
                "MMM7-thaisolar": "Ka.K.",
                "MMM8-thaisolar": "Si.K.",
                "MMM9-thaisolar": "Ka.Y.",
                "MMM10-thaisolar": "Tu.K.",
                "MMM11-thaisolar": "Ph.Y.",
                "MMM12-thaisolar": "Th.K.",
                "MMMM1-thaisolar": "Makarakhom",
                "MMMM2-thaisolar": "Kumphaphan",
                "MMMM3-thaisolar": "Minakhom",
                "MMMM4-thaisolar": "Mesayon",
                "MMMM5-thaisolar": "Phruetsaphakhom",
                "MMMM6-thaisolar": "Mithunayon",
                "MMMM7-thaisolar": "Karakadakhom",
                "MMMM8-thaisolar": "Singhakhom",
                "MMMM9-thaisolar": "Kanyayon",
                "MMMM10-thaisolar": "Tulakhom",
                "MMMM11-thaisolar": "Phruetsachikayon",
                "MMMM12-thaisolar": "Thanwakhom",
                "E0-thaisolar": "A",
                "E1-thaisolar": "C",
                "E2-thaisolar": "A",
                "E3-thaisolar": "P",
                "E4-thaisolar": "P",
                "E5-thaisolar": "S",
                "E6-thaisolar": "S",
                "EE0-thaisolar": "at",
                "EE1-thaisolar": "ch",
                "EE2-thaisolar": "an",
                "EE3-thaisolar": "pu",
                "EE4-thaisolar": "pr",
                "EE5-thaisolar": "su",
                "EE6-thaisolar": "sa",
                "EEE0-thaisolar": "ath",
                "EEE1-thaisolar": "cha",
                "EEE2-thaisolar": "ang",
                "EEE3-thaisolar": "phu",
                "EEE4-thaisolar": "phr",
                "EEE5-thaisolar": "suk",
                "EEE6-thaisolar": "sao",
                "EEEE0-thaisolar": "wan athit",
                "EEEE1-thaisolar": "wan chan",
                "EEEE2-thaisolar": "wan angkhan",
                "EEEE3-thaisolar": "wan phut",
                "EEEE4-thaisolar": "wan phruehatsabodi",
                "EEEE5-thaisolar": "wan suk",
                "EEEE6-thaisolar": "wan sao",
                "N1-coptic": "T",
                "N2-coptic": "P",
                "N3-coptic": "A",
                "N4-coptic": "K",
                "N5-coptic": "T",
                "N6-coptic": "M",
                "N7-coptic": "P",
                "N8-coptic": "P",
                "N9-coptic": "P",
                "N10-coptic": "P",
                "N11-coptic": "E",
                "N12-coptic": "M",
                "N13-coptic": "E",
                "NN1-coptic": "Th",
                "NN2-coptic": "Pa",
                "NN3-coptic": "At",
                "NN4-coptic": "Ko",
                "NN5-coptic": "To",
                "NN6-coptic": "Me",
                "NN7-coptic": "Pa",
                "NN8-coptic": "Pa",
                "NN9-coptic": "Pa",
                "NN10-coptic": "Pa",
                "NN11-coptic": "Ep",
                "NN12-coptic": "Me",
                "NN13-coptic": "Ep",
                "MMM1-coptic": "Tho",
                "MMM2-coptic": "Pao",
                "MMM3-coptic": "Ath",
                "MMM4-coptic": "Koi",
                "MMM5-coptic": "Tob",
                "MMM6-coptic": "Mes",
                "MMM7-coptic": "Par",
                "MMM8-coptic": "Par",
                "MMM9-coptic": "Pas",
                "MMM10-coptic": "Pao",
                "MMM11-coptic": "Epe",
                "MMM12-coptic": "Mes",
                "MMM13-coptic": "Epa",
                "MMMM1-coptic": "Thoout",
                "MMMM2-coptic": "Paope",
                "MMMM3-coptic": "Athor",
                "MMMM4-coptic": "Koiak",
                "MMMM5-coptic": "Tobe",
                "MMMM6-coptic": "Meshir",
                "MMMM7-coptic": "Paremotep",
                "MMMM8-coptic": "Parmoute",
                "MMMM9-coptic": "Pashons",
                "MMMM10-coptic": "Paoone",
                "MMMM11-coptic": "Epeep",
                "MMMM12-coptic": "Mesore",
                "MMMM13-coptic": "Epagomene",
                "E0-coptic": "T",
                "E1-coptic": "P",
                "E2-coptic": "P",
                "E3-coptic": "P",
                "E4-coptic": "P",
                "E5-coptic": "P",
                "E6-coptic": "P",
                "EE0-coptic": "Tk",
                "EE1-coptic": "Pe",
                "EE2-coptic": "Ps",
                "EE3-coptic": "Pe",
                "EE4-coptic": "Pt",
                "EE5-coptic": "Ps",
                "EE6-coptic": "Ps",
                "EEE0-coptic": "Tky",
                "EEE1-coptic": "Pes",
                "EEE2-coptic": "Psh",
                "EEE3-coptic": "Pef",
                "EEE4-coptic": "Pti",
                "EEE5-coptic": "Pso",
                "EEE6-coptic": "Psa",
                "EEEE0-coptic": "Tkyriake",
                "EEEE1-coptic": "Pesnau",
                "EEEE2-coptic": "Pshoment",
                "EEEE3-coptic": "Peftoou",
                "EEEE4-coptic": "Ptiou",
                "EEEE5-coptic": "Psoou",
                "EEEE6-coptic": "Psabbaton",
                "N1-ethiopic": "M",
                "N2-ethiopic": "T",
                "N3-ethiopic": "H",
                "N4-ethiopic": "T",
                "N5-ethiopic": "T",
                "N6-ethiopic": "Y",
                "N7-ethiopic": "M",
                "N8-ethiopic": "M",
                "N9-ethiopic": "G",
                "N10-ethiopic": "S",
                "N11-ethiopic": "H",
                "N12-ethiopic": "N",
                "N13-ethiopic": "P",
                "NN1-ethiopic": "Ma",
                "NN2-ethiopic": "Te",
                "NN3-ethiopic": "He",
                "NN4-ethiopic": "Ta",
                "NN5-ethiopic": "Te",
                "NN6-ethiopic": "Ya",
                "NN7-ethiopic": "Ma",
                "NN8-ethiopic": "Mi",
                "NN9-ethiopic": "Ge",
                "NN10-ethiopic": "Sa",
                "NN11-ethiopic": "Ha",
                "NN12-ethiopic": "Na",
                "NN13-ethiopic": "Pa",
                "MMM1-ethiopic": "Mas",
                "MMM2-ethiopic": "Teq",
                "MMM3-ethiopic": "Hed",
                "MMM4-ethiopic": "Tak",
                "MMM5-ethiopic": "Ter",
                "MMM6-ethiopic": "Yak",
                "MMM7-ethiopic": "Mag",
                "MMM8-ethiopic": "Miy",
                "MMM9-ethiopic": "Gen",
                "MMM10-ethiopic": "San",
                "MMM11-ethiopic": "Ham",
                "MMM12-ethiopic": "Nah",
                "MMM13-ethiopic": "Pag",
                "MMMM1-ethiopic": "Maskaram",
                "MMMM2-ethiopic": "Teqemt",
                "MMMM3-ethiopic": "Hedar",
                "MMMM4-ethiopic": "Takhsas",
                "MMMM5-ethiopic": "Ter",
                "MMMM6-ethiopic": "Yakatit",
                "MMMM7-ethiopic": "Magabit",
                "MMMM8-ethiopic": "Miyazya",
                "MMMM9-ethiopic": "Genbot",
                "MMMM10-ethiopic": "Sane",
                "MMMM11-ethiopic": "Hamle",
                "MMMM12-ethiopic": "Nahase",
                "MMMM13-ethiopic": "Paguemen",
                "E0-ethiopic": "I",
                "E1-ethiopic": "S",
                "E2-ethiopic": "M",
                "E3-ethiopic": "R",
                "E4-ethiopic": "H",
                "E5-ethiopic": "A",
                "E6-ethiopic": "K",
                "EE0-ethiopic": "Ih",
                "EE1-ethiopic": "Sa",
                "EE2-ethiopic": "Ma",
                "EE3-ethiopic": "Ro",
                "EE4-ethiopic": "Ha",
                "EE5-ethiopic": "Ar",
                "EE6-ethiopic": "Ki",
                "EEE0-ethiopic": "Ihu",
                "EEE1-ethiopic": "San",
                "EEE2-ethiopic": "Mak",
                "EEE3-ethiopic": "Rob",
                "EEE4-ethiopic": "Ham",
                "EEE5-ethiopic": "Arb",
                "EEE6-ethiopic": "Kid",
                "EEEE0-ethiopic": "Ihud",
                "EEEE1-ethiopic": "Sanyo",
                "EEEE2-ethiopic": "Maksanyo",
                "EEEE3-ethiopic": "Rob/Rabu'e",
                "EEEE4-ethiopic": "Hamus",
                "EEEE5-ethiopic": "Arb",
                "EEEE6-ethiopic": "Kidamme"
            }
        };

        var enUSdata = {
            "MMMM1": "January",
            "MMM1": "Jan",
            "NN1": "Ja",
            "N1": "J",
            "MMMM2": "February",
            "MMM2": "Feb",
            "NN2": "Fe",
            "N2": "F",
            "MMMM3": "March",
            "MMM3": "Mar",
            "NN3": "Ma",
            "N3": "M",
            "MMMM4": "April",
            "MMM4": "Apr",
            "NN4": "Ap",
            "N4": "A",
            "MMMM5": "May",
            "MMM5": "May",
            "NN5": "Ma",
            "N5": "M",
            "MMMM6": "June",
            "MMM6": "Jun",
            "NN6": "Ju",
            "N6": "J",
            "MMMM7": "July",
            "MMM7": "Jul",
            "NN7": "Ju",
            "N7": "J",
            "MMMM8": "August",
            "MMM8": "Aug",
            "NN8": "Au",
            "N8": "A",
            "MMMM9": "September",
            "MMM9": "Sep",
            "NN9": "Se",
            "N9": "S",
            "MMMM10": "October",
            "MMM10": "Oct",
            "NN10": "Oc",
            "N10": "O",
            "MMMM11": "November",
            "MMM11": "Nov",
            "NN11": "No",
            "N11": "N",
            "MMMM12": "December",
            "MMM12": "Dec",
            "NN12": "De",
            "N12": "D",
            "EEEE0": "Sunday",
            "EEE0": "Sun",
            "EE0": "Su",
            "E0": "S",
            "EEEE1": "Monday",
            "EEE1": "Mon",
            "EE1": "Mo",
            "E1": "M",
            "EEEE2": "Tuesday",
            "EEE2": "Tue",
            "EE2": "Tu",
            "E2": "T",
            "EEEE3": "Wednesday",
            "EEE3": "Wed",
            "EE3": "We",
            "E3": "W",
            "EEEE4": "Thursday",
            "EEE4": "Thu",
            "EE4": "Th",
            "E4": "T",
            "EEEE5": "Friday",
            "EEE5": "Fri",
            "EE5": "Fr",
            "E5": "F",
            "EEEE6": "Saturday",
            "EEE6": "Sat",
            "EE6": "Sa",
            "E6": "S",
            "a0": "AM",
            "a1": "PM",
            "G-1": "BCE",
            "G1": "CE"
        };

        aux.mergeFormats(formats, formats, []);
        //formats.en.US.data = common.merge(formats.en.US.data, enUSdata);
        //aux.promoteFormats(formats.en);
        aux.pruneFormats(formats);

         // pruned out
        test.ok(typeof(formats.en.data.a0) === "undefined");
        test.ok(typeof(formats.en.data["MMM2-persian"]) === "undefined");
        test.ok(common.isEmpty(formats.en.data));

        test.ok(typeof(formats.en.US.data.a0) === "undefined");
        test.ok(typeof(formats.en.US.data["MMM2-persian"]) === "undefined");

        test.ok(typeof(formats.en.IE.data.a0) !== "undefined");
        test.ok(typeof(formats.en.IE.data["MMM2-persian"]) ===  "undefined");

        test.ok(common.isEmpty(formats.en.BZ.data));
        test.done();
    }
}