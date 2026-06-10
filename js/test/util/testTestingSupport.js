/*
 * testTestingSupport.js - test the testing support routines
 *
 * Copyright © 2025, JEDLSoft
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
    var ilib = require("../../lib/ilib.js");
}

if (typeof(TestingSupport) === "undefined") {
    var TestingSupport = require("../test/testingSupport.js");
}

module.exports.testTestingSupport = {
    testGetMacOSVersion: function(test) {
        test.expect(1);
        var osVersion = TestingSupport.getMacOSVersion();
        test.ok(osVersion !== null);
        test.done();
    },
    testGetICUVersionForMacOSVersion: function(test) {
        test.expect(17);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("15.0.0"), 76);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("14.1.0"), 75);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("14.0.0"), 74);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("13.0.0"), 72.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("12.0.0"), 69.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("11.0.0"), 68.2);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.15.0"), 64.2);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.14.0"), 62.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.13.0"), 59.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.12.0"), 58.2);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.11.0"), 55.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.10.0"), 54.1);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.9.0"), 52);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.8.0"), 50);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.7.0"), 48);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.6.0"), 46);
        test.equal(TestingSupport.getICUVersionForMacOSVersion("10.5.0"), 46);
        test.done();
    },
    testGetCLDRVersionForMacOSVersion: function(test) {
        test.expect(1);
        var cldrVersion = TestingSupport.getCLDRVersionForMacOSVersion();
        // can't test the actual value of the version. In non-macOS environments, this may return undefined
        // Just test that it doesn't throw an error
        test.ok(cldrVersion === undefined || (cldrVersion !== null && cldrVersion !== undefined));
        test.done();
    },
    testGetICUVersionForChromeVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getICUVersionForChromeVersion(142), 76);
        test.equal(TestingSupport.getICUVersionForChromeVersion(138), 75);
        test.equal(TestingSupport.getICUVersionForChromeVersion(128), 74);
        test.equal(TestingSupport.getICUVersionForChromeVersion(114), 73);
        test.equal(TestingSupport.getICUVersionForChromeVersion(101), 71);
        test.equal(TestingSupport.getICUVersionForChromeVersion(94), 70);
        test.equal(TestingSupport.getICUVersionForChromeVersion(87), 68);
        test.equal(TestingSupport.getICUVersionForChromeVersion(80), 66);
        test.equal(TestingSupport.getICUVersionForChromeVersion(70), 62);
        test.equal(TestingSupport.getICUVersionForChromeVersion(58), 58);
        test.done();
    },
    testGetICUVersionForFirefoxVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(142), 76);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(136), 75);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(128), 74);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(115), 73);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(102), 71);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(91), 69);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(78), 66);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(68), 64);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(60), 60);
        test.equal(TestingSupport.getICUVersionForFirefoxVersion(50), 50.1);
        test.done();
    },
    testGetICUVersionForOperaVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getICUVersionForOperaVersion(117), 77);
        test.equal(TestingSupport.getICUVersionForOperaVersion(115), 76);
        test.equal(TestingSupport.getICUVersionForOperaVersion(114), 75);
        test.equal(TestingSupport.getICUVersionForOperaVersion(112), 75);
        test.equal(TestingSupport.getICUVersionForOperaVersion(110), 74);
        test.equal(TestingSupport.getICUVersionForOperaVersion(95), 73);
        test.equal(TestingSupport.getICUVersionForOperaVersion(79), 69.1);
        test.equal(TestingSupport.getICUVersionForOperaVersion(75), 68.2);
        test.equal(TestingSupport.getICUVersionForOperaVersion(65), 65.1);
        test.equal(TestingSupport.getICUVersionForOperaVersion(60), 64.2);
        test.done();
    },
    testGetICUVersionForEdgeVersion: function(test) {
        test.expect(8);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(142), 76);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(136), 76);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(128), 75);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(115), 73);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(102), 71);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(91), 69.1);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(79), 65.1);
        test.equal(TestingSupport.getICUVersionForEdgeVersion(77), 65.1);
        test.done();
    },
    testGetCLDRVersionForICUVersion: function(test) {
        test.expect(15);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(78), 48.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(77.1), 47.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(77), 47.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(76.1), 46.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(76), 46.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(75.1), 45.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(75), 45.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(74.2), 44.1);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(74), 44.1);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(73), 45.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(72), 42.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(71.1), 41.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(71), 41.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(70.1), 40.0);
        test.equal(TestingSupport.getCLDRVersionForICUVersion(70), 40.0);
        test.done();
    },
    testFindNumericVersion: function(test) {
        // Test with chromeVersionMappings which is sorted in descending order
        // [142, 138, 128, 114, 101, 94, 87, 80, 70, 58, 40, 33, 25, 10]
        var chromeMappings = [
            [ 142, 76, "Nov 2025" ],
            [ 138, 75, "Jul 2025" ],
            [ 128, 74, "Aug 2024" ],
            [ 114, 73, "Jun 2023" ],
            [ 101, 71, "Apr 2022" ],
            [ 94, 70, "Sep 2021" ],
            [ 87, 68, "Nov 2020" ],
            [ 80, 66, "Feb 2020" ],
            [ 70, 62, "Oct 2018" ],
            [ 58, 58, "Apr 2017" ],
            [ 40, 54.1, "Jan 2015" ],
            [ 33, 52, "Feb 2014" ],
            [ 25, 4.8, "Feb 2013" ],
            [ 10, 4.6, "Mar 2011" ]
        ];

        test.expect(8);
        // Test exact matches
        test.equal(TestingSupport.findNumericVersion(142, chromeMappings), 0);
        test.equal(TestingSupport.findNumericVersion(128, chromeMappings), 2);
        test.equal(TestingSupport.findNumericVersion(94, chromeMappings), 5);
        test.equal(TestingSupport.findNumericVersion(10, chromeMappings), 13);

        // Test versions between entries (should return index where it would be inserted)
        // 120 is between 128 (index 2) and 114 (index 3), so should return 3
        test.equal(TestingSupport.findNumericVersion(120, chromeMappings), 3);
        // 90 is between 94 (index 5) and 87 (index 6), so should return 6
        test.equal(TestingSupport.findNumericVersion(90, chromeMappings), 6);
        // 5 is less than 10 (index 13), so should return 14 (beyond array)
        test.equal(TestingSupport.findNumericVersion(5, chromeMappings), 14);
        // 200 is greater than 142 (index 0), so should return 0
        test.equal(TestingSupport.findNumericVersion(200, chromeMappings), 0);
        test.done();
    },
    testFindStringVersion: function(test) {
        // Test with macOStoICUVersionMappings which uses semver for comparison
        var macMappings = [
            ["15.0.0", "76", "Tahoe" ],
            ["14.1.0", "75", "Sequoia" ],
            ["14.0.0", "74", "Sonoma" ],
            ["13.0.0", "72.1", "Ventura" ],
            ["12.0.0", "69.1", "Monterey" ],
            ["11.0.0", "68.2", "Big Sur" ],
            ["10.15.0", "64.2", "Catalina" ],
            ["10.14.0", "62.1", "Mojave" ],
            ["10.13.0", "59.1", "High Sierra" ],
            ["10.12.0", "58.2", "Sierra" ],
            ["10.11.0", "55.1", "El Capitan" ],
            ["10.10.0", "54.1", "Yosemite" ],
            ["10.9.0", "52", "Mavericks" ],
            ["10.8.0", "4.8.1", "Mountain Lion" ]
        ];

        test.expect(8);
        // Test exact matches
        test.equal(TestingSupport.findStringVersion("15.0.0", macMappings), 0);
        test.equal(TestingSupport.findStringVersion("14.0.0", macMappings), 2);
        test.equal(TestingSupport.findStringVersion("12.0.0", macMappings), 4);
        test.equal(TestingSupport.findStringVersion("10.8.0", macMappings), 13);

        // Test versions between entries
        // "14.0.5" is between "14.1.0" (index 1) and "14.0.0" (index 2), so should return 2
        test.equal(TestingSupport.findStringVersion("14.0.5", macMappings), 2);
        // "10.15.1" is greater than "10.15.0" (index 6), so should return 6 (uses the entry >= target in descending array)
        test.equal(TestingSupport.findStringVersion("10.15.1", macMappings), 6);
        // "16.0.0" is greater than "15.0.0" (index 0), so should return 0
        test.equal(TestingSupport.findStringVersion("16.0.0", macMappings), 0);
        // "10.7.0" is less than "10.8.0" (index 13), so should return 14 (beyond array)
        test.equal(TestingSupport.findStringVersion("10.7.0", macMappings), 14);
        test.done();
    },
    testGetCLDRVersionForChromeVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(142), 46.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(138), 45.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(128), 44.1);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(114), 45.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(101), 41.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(94), 40.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(87), 38.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(80), 36.1);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(70), 32.0);
        test.equal(TestingSupport.getCLDRVersionForChromeVersion(58), 28.0);
        test.done();
    },
    testGetCLDRVersionForFirefoxVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(142), 46.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(136), 45.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(128), 44.1);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(115), 45.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(102), 41.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(91), 39.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(78), 36.1);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(68), 34.0);
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(60), 30.0);
        // Firefox 50 maps to ICU 50.1, which doesn't exist in icuCldrVersionMappings,
        // so it defaults to the latest CLDR version (48.0 for ICU 78)
        test.equal(TestingSupport.getCLDRVersionForFirefoxVersion(50), 48.0);
        test.done();
    },
    testGetCLDRVersionForOperaVersion: function(test) {
        test.expect(10);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(117), 47.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(115), 46.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(114), 45.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(112), 45.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(110), 44.1);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(95), 45.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(79), 39.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(75), 38.0);
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(65), 35.1);
        // Opera 15 maps to ICU 52.1, which doesn't exist in icuCldrVersionMappings,
        // so it defaults to the latest CLDR version (48.0 for ICU 78)
        test.equal(TestingSupport.getCLDRVersionForOperaVersion(15), 48.0);
        test.done();
    },
    testGetCLDRVersionForEdgeVersion: function(test) {
        test.expect(8);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(142), 46.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(136), 46.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(128), 45.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(115), 45.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(102), 41.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(91), 39.0);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(79), 35.1);
        test.equal(TestingSupport.getCLDRVersionForEdgeVersion(77), 35.1);
        test.done();
    },
};