/*
 * testcommon.js - test the common routines
 * 
 * Copyright © 2020, JEDLSoft
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

var memberTest1 = [
    2,
    4,
    6,
    8
];

var memberTest2 = [];

/* @type Array.<object> */
var memberTest3 = [
    2,
    [4,8],
    10
];

var memberTest4 = [
    -8,
    [-4,-2],
    0,
    1,
    [4,6],
    8,
];

module.exports.testcommon = {
    testUTFToCodePoint: function(test) {
        test.expect(1)

        var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02);
        test.equal(0x10302, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePoint: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02);

        test.equal(0x10302, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointLast: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD);

        test.equal(0x10FFFD, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointFirst: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00);

        test.equal(0x10000, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointBeforeFirst: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xFFFF);

        test.equal(0xFFFF, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointNotSupplementary: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0x0302);

        test.equal(0x0302, common.UTF16ToCodePoint(str));
        test.done();
    },
    testCodePointToUTF: function(test) {
        test.expect(3)
        var str = common.codePointToUTF16(0x10302);

        test.equal(2, str.length);
        test.equal(0xD800, str.charCodeAt(0));
        test.equal(0xDF02, str.charCodeAt(1));
        test.done();
    },
    testCodePointToUTFLast: function(test) {
        test.expect(3)
        var str = common.codePointToUTF16(0x10FFFD);

        test.equal(2, str.length);
        test.equal(0xDBFF, str.charCodeAt(0));
        test.equal(0xDFFD, str.charCodeAt(1));
        test.done();
    },
    testCodePointToUTFFirst: function(test) {
        test.expect(3)
        var str = common.codePointToUTF16(0x10000);

        test.equal(2, str.length);
        test.equal(0xD800, str.charCodeAt(0));
        test.equal(0xDC00, str.charCodeAt(1));
        test.done();
    },
    testCodePointToUTFBeforeFirst: function(test) {
        test.expect(2)
        var str = common.codePointToUTF16(0xFFFF);

        test.equal(1, str.length);
        test.equal(0xFFFF, str.charCodeAt(0));
        test.done();
    },
    testCodePointToUTFNotSupplementary: function(test) {
        test.expect(2)
        var str = common.codePointToUTF16(0x0302);

        test.equal(1, str.length);
        test.equal(0x0302, str.charCodeAt(0));
        test.done();
    },
    testUTFToCodePoint: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02);

        test.equal(0x10302, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointLast: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD);

        test.equal(0x10FFFD, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointFirst: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00);

        test.equal(0x10000, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointBeforeFirst: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0xFFFF);

        test.equal(0xFFFF, common.UTF16ToCodePoint(str));
        test.done();
    },
    testUTFToCodePointNotSupplementary: function(test) {
        test.expect(1)
        var str = String.fromCharCode(0x0302);

        test.equal(0x0302, common.UTF16ToCodePoint(str));
        test.done();
    },
    testIsMemberTrue: function(test) {
        test.expect(4)
        test.ok(common.isMember(memberTest1, 2));
        test.ok(common.isMember(memberTest1, 4));
        test.ok(common.isMember(memberTest1, 6));
        test.ok(common.isMember(memberTest1, 8));
        test.done();
    },
    testIsMemberFalse: function(test) {
        test.expect(5)
        test.ok(!common.isMember(memberTest1, 1));
        test.ok(!common.isMember(memberTest1, 3));
        test.ok(!common.isMember(memberTest1, 5));
        test.ok(!common.isMember(memberTest1, 7));
        test.ok(!common.isMember(memberTest1, 9));
        test.done();
    },
    testIsMemberEmpty: function(test) {
        test.expect(4)
        test.ok(!common.isMember(memberTest2, 2));
        test.ok(!common.isMember(memberTest2, 4));
        test.ok(!common.isMember(memberTest2, 6));
        test.ok(!common.isMember(memberTest2, 8));
        test.done();
    },
    testIsMemberRange: function(test) {
        test.expect(7)
        test.ok(common.isMember(memberTest3, 2));
        test.ok(common.isMember(memberTest3, 4));
        test.ok(common.isMember(memberTest3, 5));
        test.ok(common.isMember(memberTest3, 6));
        test.ok(common.isMember(memberTest3, 7));
        test.ok(common.isMember(memberTest3, 8));
        test.ok(common.isMember(memberTest3, 10));
        test.done();
    },
    testIsMemberOutsideRange: function(test) {
        test.expect(4)
        test.ok(!common.isMember(memberTest3, 1));
        test.ok(!common.isMember(memberTest3, 3));
        test.ok(!common.isMember(memberTest3, 9));
        test.ok(!common.isMember(memberTest3, 11));
        test.done();
    },
    testIsMemberWithNegativeRanges: function(test) {
        test.expect(10)
        test.ok(common.isMember(memberTest4, -8));
        test.ok(common.isMember(memberTest4, -4));
        test.ok(common.isMember(memberTest4, -3));
        test.ok(common.isMember(memberTest4, -2));
        test.ok(common.isMember(memberTest4, 0));
        test.ok(common.isMember(memberTest4, 1));
        test.ok(common.isMember(memberTest4, 4));
        test.ok(common.isMember(memberTest4, 5));
        test.ok(common.isMember(memberTest4, 6));
        test.ok(common.isMember(memberTest4, 8));
        test.done();
    },
    testIsMemberOutsideRange2: function(test) {
        test.expect(8)
        test.ok(!common.isMember(memberTest4, -9));
        test.ok(!common.isMember(memberTest4, -7));
        test.ok(!common.isMember(memberTest4, -5));
        test.ok(!common.isMember(memberTest4, -1));
        test.ok(!common.isMember(memberTest4, 2));
        test.ok(!common.isMember(memberTest4, 3));
        test.ok(!common.isMember(memberTest4, 7));
        test.ok(!common.isMember(memberTest4, 9));
        test.done();
    },
    testCoelesceCase1RightLength: function(test) {
        test.expect()

        var a = [[1], [2], [4], [5], [7]];
        var b = common.coelesce(a, 0);

        test.equal(3, b.length);
        test.equal(2, b[0].length);
        test.equal(2, b[1].length);
        test.equal(1, b[2].length);
        test.done();
    },
    testCoelesceCase1RightContent: function(test) {
        test.expect(5)
        var a = [[1], [2], [4], [5], [7]];
        var b = common.coelesce(a, 0);

        test.equal(1, b[0][0]);
        test.equal(2, b[0][1]);
        test.equal(4, b[1][0]);
        test.equal(5, b[1][1]);
        test.equal(7, b[2][0]);
        test.done();
    },
    testCoelesceCase2RightLength: function(test) {
        test.expect(4)
        var a = [[1], [2,3], [5], [6,10], [12]];
        var b = common.coelesce(a, 0);

        test.equal(3, b.length);
        test.equal(2, b[0].length);
        test.equal(2, b[1].length);
        test.equal(1, b[2].length);
        test.done();
    },
    testCoelesceCase2RightContent: function(test) {
        test.expect(5)
        var a = [[1], [2,3], [5], [6,10], [12]];
        var b = common.coelesce(a, 0);

        test.equal(1, b[0][0]);
        test.equal(3, b[0][1]);
        test.equal(5, b[1][0]);
        test.equal(10, b[1][1]);
        test.equal(12, b[2][0]);
        test.done();
    },
    testCoelesceCase3RightLength: function(test) {
        test.expect(4)
        var a = [[1,3], [4], [6,9], [10], [12]];
        var b = common.coelesce(a, 0);

        test.equal(3, b.length);
        test.equal(2, b[0].length);
        test.equal(2, b[1].length);
        test.equal(1, b[2].length);
        test.done();
    },
    testCoelesceCase3RightContent: function(test) {
        test.expect(5)
        var a = [[1,3], [4], [6,9], [10], [12]];
        var b = common.coelesce(a, 0);

        test.equal(1, b[0][0]);
        test.equal(4, b[0][1]);
        test.equal(6, b[1][0]);
        test.equal(10, b[1][1]);
        test.equal(12, b[2][0]);
        test.done();
    },
    testCoelesceCase4RightLength: function(test) {
        test.expect(4)
        var a = [[1,3], [4,6], [10,12], [13,15], [17]];
        var b = common.coelesce(a, 0);

        test.equal(3, b.length);
        test.equal(2, b[0].length);
        test.equal(2, b[1].length);
        test.equal(1, b[2].length);
        test.done();
    },
    testCoelesceCase4RightContent: function(test) {
        test.expect(5)
        var a = [[1,3], [4,6], [10,12], [13,15], [17]];
        var b = common.coelesce(a, 0);

        test.equal(1, b[0][0]);
        test.equal(6, b[0][1]);
        test.equal(10, b[1][0]);
        test.equal(15, b[1][1]);
        test.equal(17, b[2][0]);
        test.done();
    },
    testCoelesceMultipleCasesLength: function(test) {
        test.expect(1)
        var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
        var b = common.coelesce(a, 0);

        test.equal(1, b.length);
        test.done();
    },
    testCoelesceMultipleCasesContent: function(test) {
        test.expect(2)
        var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
        var b = common.coelesce(a, 0);

        test.equal(1, b[0][0]);
        test.equal(15, b[0][1]);
        test.done();
    },
    testCoelesceMultipleCasesWithSkipLength: function(test) {
        test.expect(4)
        var a = [
            ["foo", 1],
            ["foo", 2, 3],
            ["foo", 4],
            ["foo", 5],
            ["bar", 6],
            ["bar", 7],
            ["bar", 8, 12],
            ["bar", 13, 16]
            ["bar", 17],
            ["foo", 26, 30],
            ["foo", 31, 35]
        ];

        var b = common.coelesce(a, 1);

        test.equal(3, b.length);
        test.equal(3, b[0].length);
        test.equal(3, b[1].length);
        test.equal(3, b[2].length);
        test.done();
    },

    /*testCoelesceMultipleCasesWithSkipContent: function(test) {
        test.expect(9)
        var a = [
            ["foo", 1],
            ["foo", 2, 3],
            ["foo", 4],
            ["foo", 5],
            ["bar", 6],
            ["bar", 7],
            ["bar", 8, 12],
            ["bar", 13, 16]
            ["bar", 17],
            ["foo", 26, 30],
            ["foo", 31, 35]
        ];

        var b = common.coelesce(a, 1);

        test.equal("foo", b[0][0]);
        test.equal(1, b[0][1]);
        test.equal(5, b[0][2]);
        test.equal("bar", b[1][0]);
        test.equal(6, b[1][1]);
        test.equal(17, b[1][2]);
        test.equal("foo", b[2][0]);
        test.equal(26, b[2][1]);
        test.equal(35, b[2][2]);
        test.done();
    },*/
    testCoelesceEmpty: function(test) {
        test.expect(2)
        var a = [];
        var b = common.coelesce(a, 0);
        test.ok(typeof(b) !== "undefined");
        test.equal(0, b.length);
        test.done();
    },
    testPrune: function(test) {
        test.expect(1)
        var parent = {
            "a": 0,
            "b": 1,
            "c": 2,
            "d": 3
        };
        var child = {
            "a": 0,
            "b": 1,
            "c": 4,
            "d": 5,
            "e": 6
        };

        var expected = {
            "c": 4,
            "d": 5,
            "e": 6
        };
        var pruned = common.prune(parent, child);
        test.deepEqual(expected, pruned);
        test.done();
    },
    testPruneWithSubobjects: function(test) {
        test.expect(1)
        var parent = {
            "a": 0,
            "b": 1,
            "c": 2,
            "d": 3,
            "m": {
                "x": 1,
                "y": 2
            }
        };
        var child = {
            "a": 0,
            "b": 1,
            "c": 4,
            "d": 5,
            "e": 6,
            "m": {
                "x": 1,
                "y": 3,
                "z": 4
            }
        };

        var expected = {
            "c": 4,
            "d": 5,
            "e": 6,
            "m": {
                "y": 3,
                "z": 4
            }
        };
        var pruned = common.prune(parent, child);
        test.deepEqual(expected, pruned);
        test.done();
    },
    testPruneMissingChildValues: function(test) {
        test.expect(1)
        var parent = {
            "a": 0,
            "b": 1,
            "c": 2,
            "d": 3
        };
        var child = {
            "a": 0,
            "b": 2
        };

        var expected = {
            "b": 2
        };
        var pruned = common.prune(parent, child);
        test.deepEqual(expected, pruned);
        test.done();
    },
    testMergeAndPruneAllSame: function(test) {
        test.expect(2)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "east": "west",
                "west": "east"
            },
            a: {
                data: {
                    "sun": 0,
                    "mon": 1,
                    "tue": 2,
                    "wed": 3,
                    "thu": 4,
                    "fri": 5,
                    "sat": 6
                },
                n: {
                    data: {
                        "days": 7
                    }
                },
                m: {
                    data: {
                        "days": 7,
                        "sun": 1,
                        "mon": 2,
                        "tue": 3
                    }
                }
            },
            b: {
                data: {
                    "sun": 100,
                    "mon": 101,
                    "tue": 102,
                    "wed": 103,
                    "thu": 104,
                    "fri": 105,
                    "sat": 106
                },
                x: {
                    data: {
                        foo: "bar",
                        "sun": 0,
                        "fri": 5,
                        "sat": 106,
                        "mon": 101
                    }
                },
                y: {
                    data: {
                        foo: "asdf",
                        "mon": 1,
                        "sat": 6
                    }
                }
            }
        };

        common.mergeAndPrune(data);
        var adata = {
        };
        test.deepEqual(adata, data.a.data);

        var adatamerged = {
            "sun": 0,
            "mon": 1,
            "tue": 2,
            "wed": 3,
            "thu": 4,
            "fri": 5,
            "sat": 6,
            "east": "west",
            "west": "east"
        };
        test.deepEqual(adatamerged, data.a.merged);
        test.done();
    },
    testMergeAndPruneAddProps: function(test) {
        test.expect(2)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "east": "west",
                "west": "east"
            },
            a: {
                data: {
                    "sun": 0,
                    "mon": 1,
                    "tue": 2,
                    "wed": 3,
                    "thu": 4,
                    "fri": 5,
                    "sat": 6
                },
                n: {
                    data: {
                        "days": 7
                    }
                }
            }
        };

        common.mergeAndPrune(data);
        var andata = {
            days: 7   // add property that ancestors don't have
        };
        test.deepEqual(andata, data.a.n.data);
        var andatamerged = {
            "sun": 0,
            "mon": 1,
            "tue": 2,
            "wed": 3,
            "thu": 4,
            "fri": 5,
            "sat": 6,
            "east": "west",
            "west": "east",
            "days": 7
        };
        test.deepEqual(andatamerged, data.a.n.merged);
        test.done();
    },
    testMergeAndPruneDontAddSame: function(test) {
        test.expect(2)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "east": "west",
                "west": "east"
            },
            a: {
                data: {
                    "sun": 0,
                    "mon": 1,
                    "tue": 2,
                    "wed": 3,
                    "thu": 4,
                    "fri": 5,
                    "sat": 6
                },
                m: {
                    data: {
                        "days": 7,
                        "sun": 0,
                        "mon": 2,
                        "tue": 2
                    }
                }
            }
        };

        common.mergeAndPrune(data);
        var amdata = {
            "days": 7,
            "mon": 2    // sun and tue were same as parent
        };
        test.deepEqual(amdata, data.a.m.data);
        var amdatamerged = {
            "sun": 0,
            "mon": 2,
            "tue": 2,
            "wed": 3,
            "thu": 4,
            "fri": 5,
            "sat": 6,
            "east": "west",
            "west": "east",
            "days": 7
        };
        test.deepEqual(amdatamerged, data.a.m.merged);
        test.done();
    },
    testMergeAndPruneDontOverrideGrandParent: function(test) {
        test.expect(2)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "east": "west",
                "west": "east"
            },
            b: {
                data: {
                    "sun": 100,
                    "mon": 101,
                    "tue": 102,
                    "wed": 103,
                    "thu": 104,
                    "fri": 105,
                    "sat": 106
                },
                y: {
                    data: {
                        foo: "asdf",
                        "mon": 1,
                        "sat": 6,
                        "east": "west"
                    }
                }
            }
        };

        common.mergeAndPrune(data);
        var bydata = {
            foo: "asdf",
            "mon": 1,
            "sat": 6 // should not contain east: west from the grandparent
        };
        test.deepEqual(bydata, data.b.y.data);
        var bydatamerged = {
            "sun": 100,
            "mon": 1,
            "tue": 102,
            "wed": 103,
            "thu": 104,
            "fri": 105,
            "sat": 6,
            "east": "west",
            "west": "east",
            "foo": "asdf"
        };
        test.deepEqual(bydatamerged, data.b.y.merged);
        test.done();
    },
    testMergeAndPruneOverrideGrandparentOnly: function(test) {
        test.expect(2)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "east": "west",
                "west": "east"
            },
            a: {
                data: {
                    "sun": 0,
                    "mon": 1,
                    "tue": 2,
                    "wed": 3,
                    "thu": 4,
                    "fri": 5,
                    "sat": 6
                },
                m: {
                    data: {
                        "east": "north"
                    }
                }
            }
        };

        common.mergeAndPrune(data);
        var amdata = {
            "east": "north"
        };
        test.deepEqual(amdata, data.a.m.data);
        var amdatamerged = {
            "sun": 0,
            "mon": 1,
            "tue": 2,
            "wed": 3,
            "thu": 4,
            "fri": 5,
            "sat": 6,
            "east": "north",
            "west": "east"
        };
        test.deepEqual(amdatamerged, data.a.m.merged);
        test.done();
    },
    testMergeAndPruneComplexObject: function(test) {
        test.expect(1)
        var data = {
            data: {
                "sun": 0,
                "mon": 1,
                "tue": 2,
                "wed": 3,
                "thu": 4,
                "fri": 5,
                "sat": 6,
                "cardinaldirections" : {
                    "east": "west",
                    "west": "east"
                }
            },
            a: {
                data: {
                    "sun": 0,
                    "mon": 1,
                    "tue": 2,
                    "wed": 3,
                    "thu": 4,
                    "fri": 5,
                    "sat": 6,
                    "cardinaldirections" : {
                        "east": "north"
                    }
                },
                m: {
                    data: {
                        "cardinaldirections" : {
                            "east": "north"
                        }
                    }
                }
            }
        };
        common.mergeAndPrune(data);
        //console.log("data.a.m.data is " + JSON.stringify(data.a.m.data));
        test.ok(common.isEmpty(data.a.m.data));
        test.done();
    },
}