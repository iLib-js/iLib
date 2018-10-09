/*
 * testcharmapasync.js - Test the charset mapping routines
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

if (typeof(CharmapFactory) === "undefined") {
    var CharmapFactory = require("../../lib/CharmapFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testcharmapasync = {
    testCharmapAsyncConstructor: function(test) {
        test.expect(1);
        CharmapFactory({
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.done();
            }
        });
    },

    testCharmapAsyncLoadMap: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "ISO-8859-15",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.ok(typeof(cm.map) !== "undefined");
                test.equal(cm.getName(), "ISO-8859-15");
                test.done();
            }
        });
    },

    testCharmapAsyncAlias: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "ISO-Latin-9",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.ok(typeof(cm.map) !== "undefined");
                test.equal(cm.getName(), "ISO-8859-15");
                test.done();
            }
        });
    },

    testCharmapAsyncLoadAlgorithmic: function(test) {
        test.expect(3);
        var cm = CharmapFactory({
            name: "UTF-8",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.ok(typeof(cm.map) === "undefined"); // no map because it's algorithmic
                test.equal(cm.getName(), "UTF-8");
                test.done();
            }
        });
    },

    testCharmapAsyncUTF8MapToUnicodeUint8ArrayExtended3: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                var input = new Uint8Array([
                    0xe4, 0xb8, 0x80,
                    0xe4, 0xb8, 0x81,
                    0xe4, 0xb8, 0x82,
                    0xe5, 0x9c, 0x81,
                    0xe5, 0x9c, 0x82,
                    0xe5, 0x9c, 0x83
                ]);

                test.equal(cm.mapToUnicode(input), "一丁丂圁圂圃");
                test.done();
            }
        });
    },

    testCharmapAsyncCNMapToUnicode: function(test) {
        var big5source = [
            0xa4, 0xb1, // 仃
            0xa4, 0x48, // 人
            0xae, 0x49, // 埋
            0xaa, 0x42, // 朋
            0xae, 0x54  // 娛
        ];

        CharmapFactory({
            name: "Big5",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.deepEqual("仃人埋朋娛", cm.mapToUnicode(big5source));
                test.done();
            }
        });
    },

    testCharmapAsyncCNMapToNative: function(test) {
        var big5source = [
            0xa4, 0xb1, // 仃
            0xa4, 0x48, // 人
            0xae, 0x49, // 埋
            0xaa, 0x42, // 朋
            0xae, 0x54  // 娛
        ];

        CharmapFactory({
            name: "Big5",
            sync: false,
            onLoad: function(cm) {
                test.ok(typeof(cm) !== "undefined");
                test.deepEqual(big5source, cm.mapToNative("仃人埋朋娛"));
                test.done();
            }
        });
    }
};
