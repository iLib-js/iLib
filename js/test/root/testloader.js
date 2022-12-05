/*
 * testloader.js - test the loader object for whatever platform this test
 * is running on
 *
 * Copyright © 2015, 2017-2018, JEDLSoft
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

module.exports.testloader = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testLoaderExists: function(test) {
        if (ilib.isDynData()) {
            test.expect(1);
            var loader = ilib.getLoader();

            test.ok(typeof(loader) !== "undefined");
        }
        test.done();
    },

    testLoaderIsAvailable: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            test.ok(loader.isAvailable("dateformats.json"));
        }
        test.done();
    },

    testLoaderIsAvailableFalse: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            test.ok(!loader.isAvailable("notavailable.json"));
        }
        test.done();
    },

    testLoaderIsAvailableWithDirectory: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            test.ok(loader.isAvailable("am/dateformats.json"));
        }
        test.done();
    },

    testLoaderIsAvailableWithDirectories: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            test.ok(loader.isAvailable("und/US/localeinfo.json"));
        }
        test.done();
    },

    testLoaderListAvailableFilesNotEmpty: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.listAvailableFiles();
            test.ok(typeof(files) !== "undefined");
        }
        test.done();
    },

    testLoaderListAvailableFilesRightContents: function(test) {
        if (ilib.isDynData()) {
            test.expect(2);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.listAvailableFiles();

            var found = false;
            for (var list in files) {
                if (files[list].indexOf("und/US/localeinfo.json") !== -1) found = true;
            }
            test.ok(found);
        }
        test.done();
    },

    testLoaderLoadFilesSingle: function(test) {
        if (ilib.isDynData()) {
            test.expect(3);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles(["und/US/localeinfo.json"], true, undefined, undefined);

            test.ok(typeof(files) !== "undefined");
            test.equal(files.length, 1);
        }
        test.done();
    },

    testLoaderLoadFilesSingleRightContents: function(test) {
        if (ilib.isDynData()) {
            test.expect(5);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles(["und/US/localeinfo.json"], true, undefined, undefined);
            var json = files[0];

            test.equal(json.currency, "USD");
            test.equal(json.firstDayOfWeek, 0);
            test.equal(json["region.name"], "United States");
            test.equal(json.locale, "US");
        }
        test.done();
    },

    testLoaderLoadFilesMultiple: function(test) {
        if (ilib.isDynData()) {
            test.expect(3);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles([
                "localeinfo.json",
                "en/localeinfo.json",
                "und/US/localeinfo.json"
            ], true, undefined, undefined);

            test.ok(typeof(files) !== "undefined");
            test.equal(files.length, 3);
        }
        test.done();
    },

    testLoaderLoadFilesMultipleRightContents: function(test) {
        if (ilib.isDynData()) {
            test.expect(16);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles([
                "localeinfo.json",
                "en/localeinfo.json",
                "und/US/localeinfo.json"
            ], true, undefined, undefined);

            test.ok(typeof(files) !== "undefined");

            test.equal(files[0].clock, "24");
            test.equal(files[0].calendar, "gregorian");
            test.equal(files[0].firstDayOfWeek, 1);
            test.equal(files[0].timezone, "Etc/UTC");
            test.equal(files[0].units, "metric");
            test.equal(files[0].numfmt.decimalChar, ".");
            test.equal(files[0].numfmt.groupChar, ",");

            test.equal(files[1].clock, "12");
            test.equal(files[1]["language.name"], "English");
            test.equal(files[1].locale, "en");
            test.equal(files[2].currency, "USD");
            test.equal(files[2].firstDayOfWeek, 0);
            test.equal(files[2]["region.name"], "United States");
            test.equal(files[2].locale, "US");
        }
        test.done();
    },

    testLoaderLoadFilesMultipleMissingFile: function(test) {
        if (ilib.isDynData()) {
            test.expect(3);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles([
                "localeinfo.json",
                "en/localeinfo.json",
                "en/US/localeinfo.json",
                "und/US/localeinfo.json"
            ], true, undefined, undefined);

            test.ok(typeof(files) !== "undefined");
            test.equal(files.length, 4);
        }
        test.done();
    },

    testLoaderLoadFilesMultipleMissingFileRightContents: function(test) {
        if (ilib.isDynData()) {
            test.expect(17);
            var loader = ilib.getLoader();
            test.ok(typeof(loader) !== "undefined");

            var files = loader.loadFiles([
                "localeinfo.json",
                "en/localeinfo.json",
                "en/US/localeinfo.json", // this one doesn't exist
                "und/US/localeinfo.json"
            ], true, undefined, undefined);

            test.ok(typeof(files) !== "undefined");

            test.equal(files[0].clock, "24");
            test.equal(files[0].calendar, "gregorian");
            test.equal(files[0].firstDayOfWeek, 1);
            test.equal(files[0].timezone, "Etc/UTC");
            test.equal(files[0].units, "metric");
            test.equal(files[0].numfmt.decimalChar, ".");
            test.equal(files[0].numfmt.groupChar, ",");

            test.equal(files[1].clock, "12");
            test.equal(files[1]["language.name"], "English");
            test.equal(files[1].locale, "en");
            test.ok(typeof(files[2]) === "undefined");
            test.equal(files[3].currency, "USD");
            test.equal(files[3].firstDayOfWeek, 0);
            test.equal(files[3]["region.name"], "United States");
            test.equal(files[3].locale, "US");
        }
        test.done();
    }

};