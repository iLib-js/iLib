/*
 * testcharmap.js - Test the charset mapping routines
 *
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(CharmapFactory) === "undefined") {
    var CharmapFactory = require("../../lib/CharmapFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testcharmap = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testCharmapConstructor: function(test) {
        test.expect(1);
        var cm = CharmapFactory();
        test.ok(typeof(cm) !== "undefined");
        test.done();
    },
    testCharmapLoadMap: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "ISO-8859-15"
        });
        test.ok(typeof(cm) !== "undefined");
        test.ok(typeof(cm.map) !== "undefined");
        test.equal(cm.getName(), "ISO-8859-15");
        test.done();
    },
    testCharmapAlias: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "ISO-Latin-9"
        });
        test.ok(typeof(cm) !== "undefined");
        test.ok(typeof(cm.map) !== "undefined");
        test.equal(cm.getName(), "ISO-8859-15");
        test.done();
    },
    testCharmapLoadAlgorithmic: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        test.ok(typeof(cm.map) === "undefined"); // no map because it's algorithmic
        test.equal(cm.getName(), "UTF-8");
        test.done();
    }
};