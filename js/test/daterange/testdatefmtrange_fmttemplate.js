 /*
 * testdatefmtrange_fmttemplate.js
 *
 * Copyright © 2019-2024, JEDLSoft
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

if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

if (ilib._getPlatform() === "nodejs" && ilib._dyndata && ilib._dyncode) {
    var path = require("path");
}

function setVariables() {
    var obj = {};
    var length = ["full", "long", "medium", "short"];
    var abbrLength = ["f", "l", "m", "s"];

    obj.fullLength = length;
    obj.abbrLength = abbrLength;

    return obj;
}

module.exports.testdaterangefmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmt_ar_EG: function(test) {
        test.expect(36);

        var fmt;
        var data = setVariables();

        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];


        var templatec00 = [], templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [], templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-EG", length: length[i]});
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}'); // CLDR 34 change
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_IQ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-IQ", length: length[i]});
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_MA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-MA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

         // Bug
        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_as_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"as-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd}-{sm}-{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}-{sm}-{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec01[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec01[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec02[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec02[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} at {st} – {ed} {em}, {ey} at {et}');
        test.equal(templatec03[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec03[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed}-{em}-{ey}');
        test.equal(templatec10[3], '{sd} – {ed}-{em}-{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd}-{sm} – {ed}-{em}-{ey}');
        test.equal(templatec11[3], '{sd}-{sm} – {ed}-{em}-{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');
        test.equal(templatec12[3], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}-{sy} – {em}-{ey}');
        test.equal(templatec20[3], '{sm}-{sy} – {em}-{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_bg_BG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"bg-BG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} г., {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');

        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} г., {st} – {ed}.{em}.{ey} г., {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey} г.');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey} г.');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} г. – {ed}.{em}.{ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} г. – {ed}.{em}.{ey} г.');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm}.{sy} г. – {em}.{ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} г. – {em}.{ey} г.');

        test.equal(templatec30[0], '{sy} – {ey}');
        test.equal(templatec30[1], '{sy} – {ey}');
        test.equal(templatec30[2], '{sy} – {ey}');
        test.equal(templatec30[3], '{sy} – {ey}');


        test.done();
    },
    testDateRngFmt_bn_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"bn-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} এ {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} এ {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[0], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec02[1], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} এ {st} – {ed} {em}, {ey} এ {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_bs_Latn_BA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"bs-Latn-BA", length: length[i]});
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. u {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_bs_Latn_ME: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"bs-Latn-ME", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. u {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. u {st} – {ed}. {em}. {ey}. u {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_cs_CZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"cs-CZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd}. {sm} {sy} v {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} v {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm}. {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec01[2], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec02[2], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} v {st} – {ed}. {em} {ey} v {et}');
        test.equal(templatec03[2], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');


        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em}. {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em}. {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm}. {sy} – {ed}. {em}. {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}. {sy} – {em}. {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_da_DK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"da-DK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_de_AT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"de-AT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} um {st} – {et}'); //// dateformats.json bug: 'um'
        test.equal(templatec00[2], '{sd}.{sm}.{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_de_CH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"de-CH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_de_DE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"de-DE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_de_LU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"de-LU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} um {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} um {st} – {ed}. {em} {ey} um {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_el_CY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"el-CY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} στις {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} στις {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_el_GR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"el-GR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} στις {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} στις {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} στις {st} – {ed} {em} {ey} στις {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_AM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //mdy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-AM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_AU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-AU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_AZ: function(test) {
        test.expect(36);
        var fmt;        //mdy
        //same as en-US

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-AZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_CA: function(test) {
        test.expect(36);
        var fmt;        // mdy
        // ymd(short)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-CA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_GB: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-GB", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_GH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-GH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_HK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-HK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_IE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-IE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_IS: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-IS", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_JP: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-JP", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_KE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-KE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_KR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-KR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_LK: function(test) {
        test.expect(36);
        var fmt;        //mdy
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-LK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_MM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-MM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_en_MW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-MW", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_MY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-MY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_NG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-NG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_NZ: function(test) {
        test.expect(36);
        var fmt;        ////dmy

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-NZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_PH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-PH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_PR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-PR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_SG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-SG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_US: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-US", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_UG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-UG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_ZA: function(test) {
        test.expect(36);
        var fmt;        ////dmy
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-ZA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_ZM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-ZM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_AR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-AR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_BO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-BO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} de {sy}, {st} – {ed} {em} de {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} de {sy}, {st} – {ed} {em} de {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} de {sy}, {st} – {ed} {em} de {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} de {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} de {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} de {sy} – {ed} {em} de {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_CL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-CL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd}-{sm}-{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}-{sm}-{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec01[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec02[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec03[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}-{em}-{ey}');
        test.equal(templatec10[3], '{sd} – {ed}-{em}-{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}-{sm} – {ed}-{em}-{ey}');
        test.equal(templatec11[3], '{sd}-{sm} – {ed}-{em}-{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');
        test.equal(templatec12[3], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}-{sy} – {em}-{ey}');
        test.equal(templatec20[3], '{sm}-{sy} – {em}-{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_CO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-CO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_DO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-DO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_EC: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-EC", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_ES: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-ES", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_GT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-GT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_HN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-HN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_MX: function(test) {
        test.expect(36);
        var fmt;        //dmy
        // medium dateformat CLDR 34 change
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-MX", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");


        test.done();
    },
    testDateRngFmt_es_NI: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-NI", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_PA: function(test) {
        test.expect(36);
        var fmt;        // dmy
        // mdy (shor,medium)
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-PA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sm}/{sd}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sm}/{sd} – {ed}/{ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sm}/{sd} – {em}/{ed}/{ey}');  // Bug
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_PE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-PE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_PR: function(test) {
        test.expect(36);
        var fmt;        //dmy
        //mdy (short,medium)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-PR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sm}/{sd}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sm}/{sd} – {ed}/{ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sm}/{sd} – {em}/{ed}/{ey}');  // Bug
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_PY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-PY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_SV: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-SV", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_US: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-US", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_UY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-UY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_VE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-VE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_et_EE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"et-EE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}, kell {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}, kell {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}, kell {st} – {ed}. {em} {ey}, kell {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fa_AF: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];


        //// Same as fa-IR
        // ymd (full, short)
        // dmy (long, medium)
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fa-AF", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sy} {sm} {sd}، ساعت {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy}، ساعت {st} – {et}');
        test.equal(templatec00[2], '‏{sd} {sm} {sy}،‏ {st} – {et}');
        test.equal(templatec00[3], '‏{sy}/{sm}/{sd}،‏ {st} – {et}');

        test.equal(templatec01[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec01[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec01[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec02[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec02[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec02[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec02[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec03[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec03[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec10[0], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[3], '‏{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '‏{sy} {sm} {sd} – ‏{em} {ed}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec12[0], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec20[0], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '‏{sy}/{sm} – ‏{ey}/{em}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_fa_IR: function(test) {
        test.expect(36);
        var fmt;
        // ymd (full, short)
        // dmy (long, medium)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fa-IR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sy} {sm} {sd}، ساعت {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy}، ساعت {st} – {et}');
        test.equal(templatec00[2], '‏{sd} {sm} {sy}،‏ {st} – {et}');
        test.equal(templatec00[3], '‏{sy}/{sm}/{sd}،‏ {st} – {et}');

        test.equal(templatec03[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec03[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec03[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec03[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec03[0], '‏{sy} {sm} {sd}، ساعت {st} – ‏{ey} {em} {ed}، ساعت {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy}، ساعت {st} – ‏{ed} {em} {ey}، ساعت {et}');
        test.equal(templatec03[2], '‏{sd} {sm} {sy}،‏ {st} – ‏{ed} {em} {ey}،‏ {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd}،‏ {st} – ‏{ey}/{em}/{ed}،‏ {et}');

        test.equal(templatec10[0], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[3], '‏{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '‏{sy} {sm} {sd} – ‏{em} {ed}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec12[0], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec20[0], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '‏{sy}/{sm} – ‏{ey}/{em}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_fi_FI: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fi-FI", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} klo {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} klo {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy} klo {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} klo {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} klo {st} – {ed}. {em} {ey} klo {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} klo {st} – {ed}.{em}.{ey} klo {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_BE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-BE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CA: function(test) {
        test.expect(36);
        var fmt;        //dmy
        //ymd (short)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}'); // Bug
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}'); //Bug
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");;

        test.done();
    },
    testDateRngFmt_fr_CH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_FR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-FR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_LU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-LU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ga_IE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ga-IE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} ag {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} ag {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} ag {st} – {ed} {em} {ey} ag {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_gu_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"gu-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} એ {st} વાગ્યે – {et}'); // CLDR 34 change
        test.equal(templatec00[1], '{sd} {sm}, {sy} એ {st} વાગ્યે – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');
        test.equal(templatec01[1], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');
        test.equal(templatec01[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');
        test.equal(templatec02[0], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');
        test.equal(templatec02[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');
        test.equal(templatec03[1], '{sd} {sm}, {sy} એ {st} વાગ્યે – {ed} {em}, {ey} એ {et} વાગ્યે');

        test.equal(templatec03[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_he_IL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"he-IL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} ב{sm} {sy} בשעה {st} – {et}');
        test.equal(templatec00[1], '‏{sd} ב{sm} {sy} בשעה {st} – {et}');
        test.equal(templatec00[2], '‏{sd} ב{sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '‏{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec01[1], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec01[2], '‏{sd} ב{sm} {sy}, {st} – ‏{ed} ב{em} {ey}, {et}');
        test.equal(templatec01[3], '‏{sd}.{sm}.{sy}, {st} – ‏{ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec02[1], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec02[2], '‏{sd} ב{sm} {sy}, {st} – ‏{ed} ב{em} {ey}, {et}');
        test.equal(templatec02[3], '‏{sd}.{sm}.{sy}, {st} – ‏{ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec03[1], '‏{sd} ב{sm} {sy} בשעה {st} – ‏{ed} ב{em} {ey} בשעה {et}');
        test.equal(templatec03[2], '‏{sd} ב{sm} {sy}, {st} – ‏{ed} ב{em} {ey}, {et}');
        test.equal(templatec03[3], '‏{sd}.{sm}.{sy}, {st} – ‏{ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} ב{em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} ב{em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed} ב{em} {ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}.{em}.{ey}');

        test.equal(templatec11[0], '‏{sd} ב{sm} – ‏{ed} ב{em} {ey}');
        test.equal(templatec11[1], '‏{sd} ב{sm} – ‏{ed} ב{em} {ey}');
        test.equal(templatec11[2], '‏{sd} ב{sm} – ‏{ed} ב{em} {ey}');
        test.equal(templatec11[3], '‏{sd}.{sm} – ‏{ed}.{em}.{ey}');

        test.equal(templatec12[0], '‏{sd} ב{sm} {sy} – ‏{ed} ב{em} {ey}');
        test.equal(templatec12[1], '‏{sd} ב{sm} {sy} – ‏{ed} ב{em} {ey}');
        test.equal(templatec12[2], '‏{sd} ב{sm} {sy} – ‏{ed} ב{em} {ey}');
        test.equal(templatec12[3], '‏{sd}.{sm}.{sy} – ‏{ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '‏{sm}.{sy} – ‏{em}.{ey}');

        test.equal(templatec30[0], '‏{sy} – {ey}' );
        test.equal(templatec30[1], '‏{sy} – {ey}' );
        test.equal(templatec30[2], '‏{sy} – {ey}' );
        test.equal(templatec30[3], '‏{sy} – {ey}' );

        test.done();
    },
    testDateRngFmt_hi_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"hi-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} को {st} बजे – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} को {st} बजे – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec01[1], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec02[0], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec03[1], '{sd} {sm} {sy} को {st} बजे – {ed} {em} {ey} को {et} बजे');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');  // Bug
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');  // Bug
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}'); // Bug
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');  // Bug
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_hr_HR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"hr-HR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_hr_ME: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"hr-ME", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_hr_HU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"hr-HU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. u {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. u {st} – {ed}. {em} {ey}. u {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_id_ID: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"id-ID", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} pukul {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} pukul {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} pukul {st} – {ed} {em} {ey} pukul {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_is_IS: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"is-IS", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_it_CH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"it-CH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} alle ore {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} alle ore {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_it_IT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"it-IT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} alle ore {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} alle ore {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} alle ore {st} – {ed} {em} {ey} alle ore {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ja_JP: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ja-JP", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}/{sm}/{sd} {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}/{sm}/{sd} – {ed}');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}/{sm} – {ey}/{em}');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_kk_KZ: function(test) {
        test.expect(36);
        var fmt;        //ydm
        // dmy (short)
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"kk-KZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy} ж. {sd} {sm}, {st} – {et}');
        test.equal(templatec00[1], '{sy} ж. {sd} {sm}, {st} – {et}');
        test.equal(templatec00[2], '{sy} ж. {sd} {sm}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec01[1], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec01[2], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec02[0], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec02[2], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec03[1], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec03[2], '{sy} ж. {sd} {sm}, {st} – {ey} ж. {ed} {em}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sy} ж. {sd} {sm} – {ed} {em}');
        test.equal(templatec10[1], '{sy} ж. {sd} {sm} – {ed} {em}');
        test.equal(templatec10[2], '{sy} ж. {sd} {sm} – {ed} {em}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec11[1], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec11[2], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec12[1], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec12[2], '{sy} ж. {sd} {sm} – {ey} ж. {ed} {em}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sy} ж. {sm} – {ey} ж. {em}');
        test.equal(templatec20[1], '{sy} ж. {sm} – {ey} ж. {em}');
        test.equal(templatec20[2], '{sy} ж. {sm} – {ey} ж. {em}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_kn_IN: function(test) {
        test.expect(36);
        var fmt;        //mdy
        //dmy (short)
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"kn-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec01[1], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec02[1], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec03[1], '{sm} {sd}, {sy} ರಂದು {st} ಸಮಯಕ್ಕೆ – {em} {ed}, {ey} ರಂದು {et} ಸಮಯಕ್ಕೆ');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ko_KR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ko-KR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}년 {sm} {sd}일 {st} – {et}');
        test.equal(templatec00[1], '{sy}년 {sm} {sd}일 {st} – {et}');
        test.equal(templatec00[2], '{sy}. {sm}. {sd}. {st} – {et}');
        test.equal(templatec00[3], '{sy}. {sm}. {sd}. {st} – {et}');

        test.equal(templatec01[0], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec01[1], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec01[2], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');
        test.equal(templatec01[3], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');

        test.equal(templatec02[1], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec02[0], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec02[2], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');
        test.equal(templatec02[3], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');

        test.equal(templatec03[0], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec03[1], '{sy}년 {sm} {sd}일 {st} – {ey}년 {em} {ed}일 {et}');
        test.equal(templatec03[2], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');
        test.equal(templatec03[3], '{sy}. {sm}. {sd}. {st} – {ey}. {em}. {ed}. {et}');

        test.equal(templatec10[0], '{sy}년 {sm} {sd}일 – {ed}일');
        test.equal(templatec10[1], '{sy}년 {sm} {sd}일 – {ed}일');
        test.equal(templatec10[2], '{sy}. {sm}. {sd}. – {ed}');
        test.equal(templatec10[3], '{sy}. {sm}. {sd}. – {ed}');

        test.equal(templatec11[0], '{sy}년 {sm} {sd}일 – {em} {ed}일');
        test.equal(templatec11[1], '{sy}년 {sm} {sd}일 – {em} {ed}일');
        test.equal(templatec11[2], '{sy}. {sm}. {sd}. – {ey}. {em}. {ed}.');
        test.equal(templatec11[3], '{sy}. {sm}. {sd}. – {ey}. {em}. {ed}.');

        test.equal(templatec12[0], '{sy}년 {sm} {sd}일 – {ey}년 {em} {ed}일');
        test.equal(templatec12[1], '{sy}년 {sm} {sd}일 – {ey}년 {em} {ed}일');
        test.equal(templatec12[2], '{sy}. {sm}. {sd}. – {ey}. {em}. {ed}.');
        test.equal(templatec12[3], '{sy}. {sm}. {sd}. – {ey}. {em}. {ed}.');

        test.equal(templatec20[0], '{sy}년 {sm} – {ey}년 {em}');
        test.equal(templatec20[1], '{sy}년 {sm} – {ey}년 {em}');
        test.equal(templatec20[2], '{sy}. {sm}. – {ey}. {em}.');
        test.equal(templatec20[3], '{sy}. {sm}. – {ey}. {em}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ko_KR_Custom: function(test) {
        if (ilib._getPlatform() !== "nodejs" || !ilib._dyndata || !ilib._dyncode) {
            test.done();
            return;
        }
        var multiPath = path.relative(process.cwd(), path.resolve(__dirname, "./custom"));
        var ilibLoader = ilib.getLoader();
        ilibLoader.addPath(multiPath);

        test.expect(8);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ko-KR", length: length[i]})
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        //Check if data that is not overridden comes out well
        test.equal(templatec20[0], '{sy}년 {sm} – {ey}년 {em}');
        test.equal(templatec20[1], '{sy}년 {sm} – {ey}년 {em}');
        test.equal(templatec20[2], '{sy}. {sm}. – {ey}. {em}.');
        test.equal(templatec20[3], '{sy}. {sm}. – {ey}. {em}.');

        test.equal(templatec30[0], "{sy}년 – {ey}년");
        test.equal(templatec30[1], "{sy}년 – {ey}년");
        test.equal(templatec30[2], "{sy}년 – {ey}년");
        test.equal(templatec30[3], "{sy}년 – {ey}년");

        ilibLoader.removePath(multiPath);
        test.done();
    },
    testDateRngFmt_ku_IQ: function(test) {
        test.expect(36);
        var fmt;        //ymd (full, medium, short)
        //dmy (long)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ku-IQ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[1], '‏{sd}ی {sm}ی {sy} {st} – {et}');
        test.equal(templatec00[2], '‏{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[3], '‏{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec01[1], '‏{sd}ی {sm}ی {sy} {st} – ‏{ed}ی {em}ی {ey} {et}');
        test.equal(templatec01[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec01[3], '‏{sy}-{sm}-{sd} {st} – ‏{ey}-{em}-{ed} {et}');

        test.equal(templatec02[0], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec02[1], '‏{sd}ی {sm}ی {sy} {st} – ‏{ed}ی {em}ی {ey} {et}');
        test.equal(templatec02[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec02[3], '‏{sy}-{sm}-{sd} {st} – ‏{ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec03[1], '‏{sd}ی {sm}ی {sy} {st} – ‏{ed}ی {em}ی {ey} {et}');
        test.equal(templatec03[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec03[3], '‏{sy}-{sm}-{sd} {st} – ‏{ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed}ی {em}ی {ey}');
        test.equal(templatec10[2], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '‏{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '‏{sy} {sm} {sd} – ‏{em} {ed}');
        test.equal(templatec11[1], '‏{sd}ی {sm} – ‏{ed}ی {em}ی {ey}');
        test.equal(templatec11[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec11[3], '‏{sy}-{sm}-{sd} – ‏{ey}-{em}-{ed}');

        test.equal(templatec12[0], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[1], '‏{sd}ی {sm}ی {sy} – ‏{ed}ی {em}ی {ey}');
        test.equal(templatec12[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[3], '‏{sy}-{sm}-{sd} – ‏{ey}-{em}-{ed}');

        test.equal(templatec20[0], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[1], '{sm}ی {sy} – {em}ی {ey}');
        test.equal(templatec20[2], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[3], '‏{sy}-{sm} – ‏{ey}-{em}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_lt_LT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"lt-LT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy} m. {sm} {sd} d. {st} – {et}');
        test.equal(templatec00[1], '{sy} m. {sm} {sd} d. {st} – {et}');
        test.equal(templatec00[2], '{sy}-{sm}-{sd} {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec01[1], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec01[2], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec02[1], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec02[0], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec02[2], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec03[1], '{sy} m. {sm} {sd} d. {st} – {ey} m. {em} {ed} d. {et}');
        test.equal(templatec03[2], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '{sy} m. {sm} {sd} d. – {ed} d.');
        test.equal(templatec10[1], '{sy} m. {sm} {sd} d. – {ed} d.');
        test.equal(templatec10[2], '{sy}-{sm}-{sd} – {ed}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sy} m. {sm} {sd} d. – {em} {ed} d.');
        test.equal(templatec11[1], '{sy} m. {sm} {sd} d. – {em} {ed} d.');
        test.equal(templatec11[2], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sy} m. {sm} {sd} d. – {ey} m. {em} {ed} d.');
        test.equal(templatec12[1], '{sy} m. {sm} {sd} d. – {ey} m. {em} {ed} d.');
        test.equal(templatec12[2], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sy} m. {sm} – {ey} m. {em}');
        test.equal(templatec20[1], '{sy} m. {sm} – {ey} m. {em}');
        test.equal(templatec20[2], '{sy}-{sm} – {ey}-{em}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_lv_LV: function(test) {
        test.expect(36);
        var fmt;        //ydm
        //dmy (short)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"lv-LV", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}. gada {sd}. {sm} {st} – {et}');
        test.equal(templatec00[1], '{sy}. gada {sd}. {sm} {st} – {et}');
        test.equal(templatec00[2], '{sy}. gada {sd}. {sm} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec01[1], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec01[2], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec02[0], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec02[2], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec03[1], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec03[2], '{sy}. gada {sd}. {sm} {st} – {ey}. gada {ed}. {em} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sy}. gada {sd}. {sm} – {ed}. {em}');
        test.equal(templatec10[1], '{sy}. gada {sd}. {sm} – {ed}. {em}');
        test.equal(templatec10[2], '{sy}. gada {sd}. {sm} – {ed}. {em}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec11[1], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec11[2], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec12[1], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec12[2], '{sy}. gada {sd}. {sm} – {ey}. gada {ed}. {em}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sy}. gada {sm} – {ey}. gada {em}');
        test.equal(templatec20[1], '{sy}. gada {sm} – {ey}. gada {em}');
        test.equal(templatec20[2], '{sy}. gada {sm} – {ey}. gada {em}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_mk_MK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"mk-MK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г., во {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г., во {st} – {et}');
        test.equal(templatec00[2], '{sd}.{sm}.{sy} г., во {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, во {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec01[2], '{sd}.{sm}.{sy} г., во {st} – {ed}.{em}.{ey} г., во {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec02[2], '{sd}.{sm}.{sy} г., во {st} – {ed}.{em}.{ey} г., во {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г., во {st} – {ed} {em} {ey} г., во {et}');
        test.equal(templatec03[2], '{sd}.{sm}.{sy} г., во {st} – {ed}.{em}.{ey} г., во {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, во {st} – {ed}.{em}.{ey}, во {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed}.{em}.{ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.' );
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd}.{sm} – {ed}.{em}.{ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd}.{sm}.{sy} г. – {ed}.{em}.{ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm}.{sy} г. – {em}.{ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ml_IN: function(test) {
        test.expect(36);
        var fmt;        //ymd
        //dmy(short)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ml-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}, {sm} {sd} {st} – {et}');
        test.equal(templatec00[1], '{sy}, {sm} {sd} {st} – {et}');
        test.equal(templatec00[2], '{sy}, {sm} {sd} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec01[1], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec01[2], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec02[0], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec02[2], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec03[1], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec03[2], '{sy}, {sm} {sd} {st} – {ey}, {em} {ed} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sy}, {sm} {sd} – {ed}');
        test.equal(templatec10[1], '{sy}, {sm} {sd} – {ed}');
        test.equal(templatec10[2], '{sy}, {sm} {sd} – {ed}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sy}, {sm} {sd} – {em} {ed}');
        test.equal(templatec11[1], '{sy}, {sm} {sd} – {em} {ed}');
        test.equal(templatec11[2], '{sy}, {sm} {sd} – {ey}, {em} {ed}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sy}, {sm} {sd} – {ey}, {em} {ed}');
        test.equal(templatec12[1], '{sy}, {sm} {sd} – {ey}, {em} {ed}');
        test.equal(templatec12[2], '{sy}, {sm} {sd} – {ey}, {em} {ed}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sy}, {sm} – {ey}, {em}');
        test.equal(templatec20[1], '{sy}, {sm} – {ey}, {em}');
        test.equal(templatec20[2], '{sy}, {sm} – {ey}, {em}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_mr_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"mr-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} रोजी {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} रोजी {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} रोजी {st} – {ed} {em}, {ey} रोजी {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ms_MY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ms-MY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} pada {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} pada {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_nb_NO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"nb-NO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} kl. {st} – {ed}. {em} {ey} kl. {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_nl_BE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"nl-BE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_nl_NL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"nl-NL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}-{sm}-{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}-{em}-{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}-{sm} – {ed}-{em}-{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}-{sy} – {em}-{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();

    },
    testDateRngFmt_pa_Guru_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pa-Guru-IN", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pl_PL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pl-PL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pt_BR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pt-BR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[2], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pt_PT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pt-PT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ro_RO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ro-RO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} la {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} la {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} la {st} – {ed} {em} {ey} la {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sr_Cyrl_RS: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sr-Cyrl-RS", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm}. {sy}. {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em}. {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em}. {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm}. {sy}. – {em}. {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sr_Latn_RS: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sr-Latn-RS", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy}. {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm}. {sy}. {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}. {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec01[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec02[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy}. {st} – {ed}. {em} {ey}. {et}');
        test.equal(templatec03[2], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}. {st} – {ed}. {em}. {ey}. {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}.');
        test.equal(templatec10[2], '{sd} – {ed}. {em}. {ey}.');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}.');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}.');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em}. {ey}.');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}.');

        test.equal(templatec12[0], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[1], '{sd}. {sm} {sy}. – {ed}. {em} {ey}.');
        test.equal(templatec12[2], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');
        test.equal(templatec12[3], '{sd}. {sm}. {sy}. – {ed}. {em}. {ey}.');

        test.equal(templatec20[0], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[1], '{sm} {sy}. – {em} {ey}.');
        test.equal(templatec20[2], '{sm}. {sy}. – {em}. {ey}.');
        test.equal(templatec20[3], '{sm}. {sy}. – {em}. {ey}.');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_ru_BY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-BY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ru_KG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-KG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ru_KZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-KZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ru_GE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-GE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ru_RU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-RU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");


        test.done();
    },
    testDateRngFmt_ru_UA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ru-UA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. в {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. в {st} – {ed} {em} {ey} г. в {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sk_SK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sk-SK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} o {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} o {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm}. {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy} {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec01[2], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec02[2], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} o {st} – {ed}. {em} {ey} o {et}');
        test.equal(templatec03[2], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy} {st} – {ed}. {em}. {ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em}. {ey}');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em}. {ey}');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm}. {sy} – {ed}. {em}. {ey}');
        test.equal(templatec12[3], '{sd}. {sm}. {sy} – {ed}. {em}. {ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}. {sy} – {em}. {ey}');
        test.equal(templatec20[3], '{sm}. {sy} – {em}. {ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sl_SI: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sl-SI", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} ob {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} ob {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}. {sm}. {sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');

        test.equal(templatec02[0], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec02[1], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} ob {st} – {ed}. {em} {ey} ob {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy}, {st} – {ed}. {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}. {sm}. {sy}, {st} – {ed}. {em}. {ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}. {em}. {ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}. {sm} – {ed}. {em}. {ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}. {sm}. {sy} – {ed}. {em}. {ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}. {sy} – {em}. {ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sq_AL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sq-AL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} në {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} në {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sq_ME: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sq-ME", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} në {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} në {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} në {st} – {ed} {em} {ey} në {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sv_FI: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sv-FI", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_sv_SE: function(test) {
        test.expect(36);
        var fmt;        //dmy
        //ymd(short )

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"sv-SE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} kl. {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec02[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec02[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} kl. {st} – {ed} {em} {ey} kl. {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], '{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_ta_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ta-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} அன்று {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} அன்று {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} அன்று {st} – {ed} {em}, {ey} அன்று {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_te_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"te-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}, {sm} {sy} {st}కి – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} {st}కి – {et}');

        test.equal(templatec00[2], '{sd} {sm}, {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}-{sm}-{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd}, {sm} {sy} {st}కి – {ed}, {em} {ey} {et}కి');
        test.equal(templatec01[1], '{sd} {sm}, {sy} {st}కి – {ed} {em}, {ey} {et}కి');
        test.equal(templatec01[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec01[3], '{sd}-{sm}-{sy} {st} – {ed}-{em}-{ey} {et}');

        test.equal(templatec02[0], '{sd}, {sm} {sy} {st}కి – {ed}, {em} {ey} {et}కి');

        test.equal(templatec02[1], '{sd} {sm}, {sy} {st}కి – {ed} {em}, {ey} {et}కి');
        test.equal(templatec02[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec02[3], '{sd}-{sm}-{sy} {st} – {ed}-{em}-{ey} {et}');

        test.equal(templatec03[0], '{sd}, {sm} {sy} {st}కి – {ed}, {em} {ey} {et}కి')
        test.equal(templatec03[1], '{sd} {sm}, {sy} {st}కి – {ed} {em}, {ey} {et}కి');
        test.equal(templatec03[2], '{sd} {sm}, {sy} {st} – {ed} {em}, {ey} {et}');
        test.equal(templatec03[3], '{sd}-{sm}-{sy} {st} – {ed}-{em}-{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed}, {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}-{em}-{ey}');

        test.equal(templatec11[0], '{sd}, {sm} – {ed}, {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}-{sm} – {ed}-{em}-{ey}');

        test.equal(templatec12[0], '{sd}, {sm} {sy} – {ed}, {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}-{sy} – {em}-{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_th_TH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"th-TH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} เวลา {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} เวลา {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} เวลา {st} – {ed} {em} {ey} เวลา {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tr_AM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tr-AM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tr_AZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tr-AZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tr_CY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tr-CY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tr_TR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tr-TR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_uk_UA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"uk-UA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} р. о {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} р. о {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} р., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} р. о {st} – {ed} {em} {ey} р. о {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} р., {st} – {ed} {em} {ey} р., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} р.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} р.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} р.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} р.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} р.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} р.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} р. – {ed} {em} {ey} р.');
        test.equal(templatec12[1], '{sd} {sm} {sy} р. – {ed} {em} {ey} р.');
        test.equal(templatec12[2], '{sd} {sm} {sy} р. – {ed} {em} {ey} р.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} р. – {em} {ey} р.');
        test.equal(templatec20[1], '{sm} {sy} р. – {em} {ey} р.');
        test.equal(templatec20[2], '{sm} {sy} р. – {em} {ey} р.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ur_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ur-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm}، {sy} کو {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm}، {sy} کو {st} – {et}');
        test.equal(templatec00[2], '‏{sd} {sm}، {sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec01[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec01[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec02[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec02[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec03[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec03[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[2], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[1], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[2], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}، {sy} – {em}، {ey}');
        test.equal(templatec20[1], '{sm}، {sy} – {em}، {ey}');
        test.equal(templatec20[2], '{sm}، {sy} – {em}، {ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_uz_Latn_UZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"uz-Latn-UZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}-{sm}, {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd}-{sm}, {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd}-{sm}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec01[1], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec01[2], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec02[0], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec02[2], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec03[1], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec03[2], '{sd}-{sm}, {sy}, {st} – {ed}-{em}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed}-{em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed}-{em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed}-{em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd}-{sm} – {ed}-{em}, {ey}');
        test.equal(templatec11[1], '{sd}-{sm} – {ed}-{em}, {ey}');
        test.equal(templatec11[2], '{sd}-{sm} – {ed}-{em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd}-{sm}, {sy} – {ed}-{em}, {ey}');
        test.equal(templatec12[1], '{sd}-{sm}, {sy} – {ed}-{em}, {ey}');
        test.equal(templatec12[2], '{sd}-{sm}, {sy} – {ed}-{em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_vi_VN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"vi-VN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{st} – lúc {et} {sd} {sm}, {sy}');
        test.equal(templatec00[1], '{st} – lúc {et} {sd} {sm}, {sy}');
        test.equal(templatec00[2], '{st} – {et} {sd} {sm}, {sy}');
        test.equal(templatec00[3], '{st} – {et} {sd}/{sm}/{sy}');

        test.equal(templatec01[0], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec01[1], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec01[2], '{st} {sd} {sm}, {sy} – {et} {ed} {em}, {ey}');
        test.equal(templatec01[3], '{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}');

        test.equal(templatec02[1], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec02[0], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec02[2], '{st} {sd} {sm}, {sy} – {et} {ed} {em}, {ey}');
        test.equal(templatec02[3], '{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}');

        test.equal(templatec03[0], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec03[1], 'lúc {st} {sd} {sm}, {sy} – lúc {et} {ed} {em}, {ey}');
        test.equal(templatec03[2], '{st} {sd} {sm}, {sy} – {et} {ed} {em}, {ey}');
        test.equal(templatec03[3], '{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_zh_Hans_CN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zh-Hans-CN", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_zh_Hant_HK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zh-Hant-HK", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_zh_Hant_TW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zh-Hant-TW", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_GE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-GE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_CN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-CN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_MX: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-MX", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_TW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-TW", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_mn_MN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"mn-Cyrl-MN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy} оны {sm}ын {sd} {st} – {et}');
        test.equal(templatec00[1], '{sy} оны {sm}ын {sd} {st} – {et}');
        test.equal(templatec00[2], '{sy} оны {sm}ын {sd} {st} – {et}');
        test.equal(templatec00[3], '{sy}.{sm}.{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec01[1], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec01[2], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec01[3], '{sy}.{sm}.{sd} {st} – {ey}.{em}.{ed} {et}');

        test.equal(templatec02[1], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec02[0], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec02[2], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec02[3], '{sy}.{sm}.{sd} {st} – {ey}.{em}.{ed} {et}');

        test.equal(templatec03[0], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec03[1], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec03[2], '{sy} оны {sm}ын {sd} {st} – {ey} оны {em}ын {ed} {et}');
        test.equal(templatec03[3], '{sy}.{sm}.{sd} {st} – {ey}.{em}.{ed} {et}');

        test.equal(templatec10[0], '{sy} оны {sm}ын {sd} – {ed}');
        test.equal(templatec10[1], '{sy} оны {sm}ын {sd} – {ed}');
        test.equal(templatec10[2], '{sy} оны {sm}ын {sd} – {ed}');
        test.equal(templatec10[3], '{sy}.{sm}.{sd} – {ed}');

        test.equal(templatec11[0], '{sy} оны {sm}ын {sd} – {em}ын {ed}');
        test.equal(templatec11[1], '{sy} оны {sm}ын {sd} – {em}ын {ed}');
        test.equal(templatec11[2], '{sy} оны {sm}ын {sd} – {ey} оны {em}ын {ed}');
        test.equal(templatec11[3], '{sy}.{sm}.{sd} – {ey}.{em}.{ed}');

        test.equal(templatec12[0], '{sy} оны {sm}ын {sd} – {ey} оны {em}ын {ed}');
        test.equal(templatec12[1], '{sy} оны {sm}ын {sd} – {ey} оны {em}ын {ed}');
        test.equal(templatec12[2], '{sy} оны {sm}ын {sd} – {ey} оны {em}ын {ed}');
        test.equal(templatec12[3], '{sy}.{sm}.{sd} – {ey}.{em}.{ed}');

        test.equal(templatec20[0], '{sy} оны {sm} – {ey} оны {em}');
        test.equal(templatec20[1], '{sy} оны {sm} – {ey} оны {em}');
        test.equal(templatec20[2], '{sy} оны {sm} – {ey} оны {em}');
        test.equal(templatec20[3], '{sy}.{sm} – {ey}.{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_CA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-CA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_af_ZA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        //ymd(short)
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"af-ZA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} om {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} om {st} – {ed} {em} {ey} om {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd} {st} – {ey}-{em}-{ed} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");;
        test.done();
    },
    testDateRngFmt_am_ET: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"am-ET", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ha_Latn_NG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ha-Latn-NG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy} da {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} da {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} da {st} – {ed} {em}, {ey} da {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_or_IN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"or-IN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{st} – {et} ଠାରେ {sm} {sd}, {sy}');
        test.equal(templatec00[1], '{st} – {et} ଠାରେ {sm} {sd}, {sy}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec01[1], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec02[1], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec03[1], '{st} ଠାରେ {sm} {sd}, {sy} – {et} ଠାରେ {em} {ed}, {ey}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_az_Latn_AZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"az-Latn-AZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy}/{st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy}/{st} – {ed} {em} {ey}/{et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy}/{st} – {ed} {em} {ey}/{et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}' );

        test.equal(templatec03[0], '{sd} {sm} {sy}/{st} – {ed} {em} {ey}/{et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_km_KH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"km-KH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} នៅ​ម៉ោង {st} – {ed} {em} {ey} នៅ​ម៉ោង {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_si_LK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"si-LK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy} {sm} {sd} දින {st} – {et}');
        test.equal(templatec00[1], '{sy} {sm} {sd} දින {st} – {et}');
        test.equal(templatec00[2], '{sy} {sm} {sd}, {st} – {et}');
        test.equal(templatec00[3], '{sy}-{sm}-{sd}, {st} – {et}');

        test.equal(templatec01[0], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec01[1], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec01[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec01[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec02[1], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec02[0], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec02[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec02[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec03[0], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec03[1], '{sy} {sm} {sd} දින {st} – {ey} {em} {ed} දින {et}');
        test.equal(templatec03[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec03[3], '{sy}-{sm}-{sd}, {st} – {ey}-{em}-{ed}, {et}');

        test.equal(templatec10[0], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[2], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '{sy}-{sm}-{sd} – {ed}');

        test.equal(templatec11[0], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[1], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[2], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec11[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec12[0], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[1], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[2], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[3], '{sy}-{sm}-{sd} – {ey}-{em}-{ed}');

        test.equal(templatec20[0], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[1], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[2], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[3], '{sy}-{sm} – {ey}-{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_AE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-AE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_BH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-BH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_DJ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-DJ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_DZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-DZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_JO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-JO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_KW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-KW", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_LB: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-LB", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_LY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-LY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_MR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-MR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_OM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-OM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_QA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-QA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_SA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-SA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_SD: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-SD", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_SY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-SY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_TN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-TN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ar_YE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ar-YE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm} {sy} في {st} – {et}');
        test.equal(templatec00[2], '‏{sd}/{sm}/{sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec01[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec02[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[1], '‏{sd} {sm} {sy} في {st} – ‏{ed} {em} {ey} في {et}');
        test.equal(templatec03[2], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em} {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed}/{em}/{ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em} {ey}');
        test.equal(templatec11[2], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[1], '‏{sd} {sm} {sy} – ‏{ed} {em} {ey}');
        test.equal(templatec12[2], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '‏{sm}/{sy} – ‏{em}/{ey}');
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], "‏{sy} – {ey}");
        test.equal(templatec30[1], "‏{sy} – {ey}");
        test.equal(templatec30[2], "‏{sy} – {ey}");
        test.equal(templatec30[3], "‏{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_ET: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-ET", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec02[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} at {st} – {em} {ed}, {ey} at {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy}, {st} – {em} {ed}, {ey}, {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy}, {st} – {em}/{ed}/{ey}, {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_GM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-GM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_LR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-LR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_PK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-PK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd}-{sm}-{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd}-{sm}-{sy}, {st} – {ed}-{em}-{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}-{em}-{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd}-{sm} – {ed}-{em}-{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm}-{sy} – {em}-{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_RW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-RW", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_SD: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-SD", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_SL: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-SL", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_en_TZ: function(test) {
        test.expect(36);
        var fmt;        // dmy
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"en-TZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} at {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} at {st} – {ed} {em} {ey} at {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_CR: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-CR", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_GQ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-GQ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_es_PH: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"es-PH", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_BF: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-BF", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_BJ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-BJ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CD: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CD", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CF: function(test) {
        test.expect(36);
        var fmt;        // dmy
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CF", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CI: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CI", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_CM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-CM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_fr_GQ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-GQ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_DJ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-DJ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_DZ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-DZ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    },
    testDateRngFmt_fr_GA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-GA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_GN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-GN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_LB: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-LB", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_ML: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-ML", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_RW: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-RW", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_SN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-SN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_fr_TG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"fr-TG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} à {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} à {st} – {ed} {em} {ey} à {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ms_SG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ms-SG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} pada {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} pada {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} pada {st} – {ed} {em} {ey} pada {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pa_PK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pa-PK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pt_AO: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pt-AO", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pt_GQ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pt-GQ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_pt_CV: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"pt-CV", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy} às {st} – {et}');
        test.equal(templatec00[2], '{sd}/{sm}/{sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec01[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec02[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy} às {st} – {ed} de {em} de {ey} às {et}');
        test.equal(templatec03[2], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed}/{em}/{ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd}/{sm} – {ed}/{em}/{ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ur_PK: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ur-PK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);

            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '‏{sd} {sm}، {sy} کو {st} – {et}');
        test.equal(templatec00[1], '‏{sd} {sm}، {sy} کو {st} – {et}');
        test.equal(templatec00[2], '‏{sd} {sm}، {sy}، {st} – {et}');
        test.equal(templatec00[3], '‏{sd}/{sm}/{sy}، {st} – {et}');

        test.equal(templatec01[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec01[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec01[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec01[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec02[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec02[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec02[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec02[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec03[0], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec03[1], '‏{sd} {sm}، {sy} کو {st} – ‏{ed} {em}، {ey} کو {et}');
        test.equal(templatec03[2], '‏{sd} {sm}، {sy}، {st} – ‏{ed} {em}، {ey}، {et}');
        test.equal(templatec03[3], '‏{sd}/{sm}/{sy}، {st} – ‏{ed}/{em}/{ey}، {et}');

        test.equal(templatec10[0], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[1], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[2], '‏{sd} – ‏{ed} {em}، {ey}');
        test.equal(templatec10[3], '‏{sd} – ‏{ed}/{em}/{ey}');

        test.equal(templatec11[0], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[1], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[2], '‏{sd} {sm} – ‏{ed} {em}، {ey}');
        test.equal(templatec11[3], '‏{sd}/{sm} – ‏{ed}/{em}/{ey}');

        test.equal(templatec12[0], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[1], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[2], '‏{sd} {sm}، {sy} – ‏{ed} {em}، {ey}');
        test.equal(templatec12[3], '‏{sd}/{sm}/{sy} – ‏{ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm}، {sy} – {em}، {ey}');
        test.equal(templatec20[1], '{sm}، {sy} – {em}، {ey}');
        test.equal(templatec20[2], '{sm}، {sy} – {em}، {ey}' );
        test.equal(templatec20[3], '‏{sm}/{sy} – ‏{em}/{ey}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_zh_Hans_SG: function(test) {
        test.expect(36);
        var fmt;        //ymd
        //dmy(short)

        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zh-Hans-SG", length: length[i]})

            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_zh_Hans_MY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zh-Hans-MY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[1], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[2], '{sy}年{sm}月{sd}日 {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[1], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[2], '{sy}年{sm}月{sd}日 {st} – {ey}年{em}月{ed}日 {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd} {st} – {ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[1], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[2], '{sy}年{sm}月{sd}日 – {ed}日');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[1], '{sy}年{sm}月{sd}日 – {em}月{ed}日');
        test.equal(templatec11[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[1], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[2], '{sy}年{sm}月{sd}日 – {ey}年{em}月{ed}日');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[1], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[2], '{sy}年{sm}月 – {ey}年{em}月');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ka_GE: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ka-GE", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}. {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm}. {sy}, {st} – {ed} {em}. {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm}. {sy}, {st} – {ed} {em}. {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy}, {st} – {ed} {em}, {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm}. {sy}, {st} – {ed} {em}. {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}. {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}. {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}. {sy} – {ed} {em}. {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}. {sy} – {em}. {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_be_BY: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"be-BY", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} {sy} г. у {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} г. у {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} г., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} г. у {st} – {ed} {em} {ey} г. у {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} г., {st} – {ed} {em} {ey} г., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey} г.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey} г.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[1], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[2], '{sd} {sm} {sy} г. – {ed} {em} {ey} г.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[1], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[2], '{sm} {sy} г. – {em} {ey} г.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_lo_LA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"lo-LA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ky_KG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        // f,l,m: ydm
        // s: dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ky-KG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sy}-ж., {sd}-{sm} {st} – {et}');
        test.equal(templatec00[1], '{sy}-ж., {sd}-{sm} {st} – {et}');
        test.equal(templatec00[2], '{sy}-ж., {sd}-{sm} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec01[1], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec01[2], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec02[0], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec02[2], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec03[1], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec03[2], '{sy}-ж., {sd}-{sm} {st} – {ey}-ж., {ed}-{em} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sy}-ж., {sd}-{sm} – {ed}-{em}');
        test.equal(templatec10[1], '{sy}-ж., {sd}-{sm} – {ed}-{em}');
        test.equal(templatec10[2], '{sy}-ж., {sd}-{sm} – {ed}-{em}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec11[1], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec11[2], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec12[1], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec12[2], '{sy}-ж., {sd}-{sm} – {ey}-ж., {ed}-{em}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sy}-ж., {sm} – {ey}-ж., {em}');
        test.equal(templatec20[1], '{sy}-ж., {sm} – {ey}-ж., {em}');
        test.equal(templatec20[2], '{sy}-ж., {sm} – {ey}-ж., {em}');

        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ca_AD: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ca-AD", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} del {sy}, a les {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} del {sy}, a les {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec01[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec02[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec03[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} del {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} del {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} del {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} del {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} del {sy} – {ed} {em} del {ey}');
        test.equal(templatec12[1], '{sd} {sm} del {sy} – {ed} {em} del {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} del {sy} – {em} del {ey}');
        test.equal(templatec20[1], '{sm} del {sy} – {em} del {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ca_ES: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ca-ES", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} del {sy}, a les {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} del {sy}, a les {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec01[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec02[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec03[1], '{sd} {sm} del {sy}, a les {st} – {ed} {em} del {ey}, a les {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} del {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} del {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} del {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} del {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} del {sy} – {ed} {em} del {ey}');
        test.equal(templatec12[1], '{sd} {sm} del {sy} – {ed} {em} del {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0],  '{sm} del {sy} – {em} del {ey}');
        test.equal(templatec20[1],  '{sm} del {sy} – {em} del {ey}' );
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_hy_AM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"hy-AM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sy} թ. {sm} {sd}, {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} թ., {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy} թ., {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sy} թ. {sm} {sd}, {st} – {ey} թ. {em} {ed}, {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[0], '{sy} թ. {sm} {sd}, {st} – {ey} թ. {em} {ed}, {et}');
        test.equal(templatec02[1], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sy} թ. {sm} {sd}, {st} – {ey} թ. {em} {ed}, {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy} թ., {st} – {ed} {em}, {ey} թ., {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec10[0], '{sy} թ. {sm} {sd} – {ed}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey} թ.');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey} թ.');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sy} թ. {sm} {sd} – {em} {ed}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey} թ.');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey} թ.');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sy} թ. {sm} {sd} – {ey} թ. {em} {ed}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} թ. – {ed} {em}, {ey} թ.');
        test.equal(templatec12[2], '{sd} {sm}, {sy} թ. – {ed} {em}, {ey} թ.');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sy} թ. {sm} – {ey} թ. {em}');
        test.equal(templatec20[1], '{sm}, {sy} թ. – {em}, {ey} թ.');
        test.equal(templatec20[2], '{sm}, {sy} թ. – {em}, {ey} թ.');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_gl_ES: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"gl-ES", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[1], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[2], '{sd} de {sm} de {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[1], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[2], '{sd} de {sm} de {sy}, {st} – {ed} de {em} de {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[1], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[2], '{sd} – {ed} de {em} de {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[1], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[2], '{sd} de {sm} – {ed} de {em} de {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[1], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[2], '{sd} de {sm} de {sy} – {ed} de {em} de {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[1], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[2], '{sm} de {sy} – {em} de {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_eu_ES: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"eu-ES", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – ({et})');
        test.equal(templatec00[1], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – ({et})');
        test.equal(templatec00[2], '{sy}(e)ko {sm} {sd}(a) ({st}) – ({et})');
        test.equal(templatec00[3], '{sy}/{sm}/{sd} ({st}) – ({et})');

        test.equal(templatec01[0], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec01[1], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec01[2], '{sy}(e)ko {sm} {sd}(a) ({st}) – {ey}(e)ko {em} {ed}(a) ({et})');
        test.equal(templatec01[3], '{sy}/{sm}/{sd} ({st}) – {ey}/{em}/{ed} ({et})');

        test.equal(templatec02[1], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec02[0], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec02[2], '{sy}(e)ko {sm} {sd}(a) ({st}) – {ey}(e)ko {em} {ed}(a) ({et})');
        test.equal(templatec02[3], '{sy}/{sm}/{sd} ({st}) – {ey}/{em}/{ed} ({et})');

        test.equal(templatec03[0], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec03[1], '{sy}(e)ko {sm}ren {sd}(a) ({st}) – {ey}(e)ko {em}ren {ed}(a) ({et})');
        test.equal(templatec03[2], '{sy}(e)ko {sm} {sd}(a) ({st}) – {ey}(e)ko {em} {ed}(a) ({et})');
        test.equal(templatec03[3], '{sy}/{sm}/{sd} ({st}) – {ey}/{em}/{ed} ({et})');

        test.equal(templatec10[0], '{sy}(e)ko {sm}ren {sd}(a) – {ed}');
        test.equal(templatec10[1], '{sy}(e)ko {sm}ren {sd}(a) – {ed}');
        test.equal(templatec10[2], '{sy}(e)ko {sm} {sd}(a) – {ed}');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy}(e)ko {sm}ren {sd}(a) – {em}ren {ed}(a)');
        test.equal(templatec11[1], '{sy}(e)ko {sm}ren {sd}(a) – {em}ren {ed}(a)');
        test.equal(templatec11[2], '{sy}(e)ko {sm} {sd}(a) – {ey}(e)ko {em} {ed}(a)');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy}(e)ko {sm}ren {sd}(a) – {ey}(e)ko {em}ren {ed}(a)');
        test.equal(templatec12[1], '{sy}(e)ko {sm}ren {sd}(a) – {ey}(e)ko {em}ren {ed}(a)');
        test.equal(templatec12[2], '{sy}(e)ko {sm} {sd}(a) – {ey}(e)ko {em} {ed}(a)');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy}(e)ko {sm} – {ey}(e)ko {em}');
        test.equal(templatec20[1], '{sy}(e)ko {sm} – {ey}(e)ko {em}');
        test.equal(templatec20[2], '{sy}(e)ko {sm} – {ey}(e)ko {em}');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_my_MM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        // full, medium: ymd
        // long: ydm
        // short: dmy

        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"my-MM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[1], '{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[2], '{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec01[1], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec01[2], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec02[0], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec02[2], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec03[1], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec03[2], '{sy} {sm} {sd} {st} – {ey} {em} {ed} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[2], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[1], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[2], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[1], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[2], '{sy} {sm} {sd} – {ey} {em} {ed}' );
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[1], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[2], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');
        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ne_NP: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ne-NP", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sy} {sm} {sd}: {st} – {et}');
        test.equal(templatec00[1], '{sy} {sm} {sd}: {st} – {et}');
        test.equal(templatec00[2], '{sy} {sm} {sd}, {st} – {et}');
        test.equal(templatec00[3], '{sy}/{sm}/{sd}, {st} – {et}');

        test.equal(templatec01[0], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec01[1], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec01[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec01[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec02[1], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec02[0], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec02[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec02[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec03[0], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec03[1], '{sy} {sm} {sd}: {st} – {ey} {em} {ed}: {et}');
        test.equal(templatec03[2], '{sy} {sm} {sd}, {st} – {ey} {em} {ed}, {et}');
        test.equal(templatec03[3], '{sy}/{sm}/{sd}, {st} – {ey}/{em}/{ed}, {et}');

        test.equal(templatec10[0], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[1], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[2], '{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[1], '{sy} {sm} {sd} – {em} {ed}');
        test.equal(templatec11[2], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec11[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec12[0], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[1], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[2], '{sy} {sm} {sd} – {ey} {em} {ed}');
        test.equal(templatec12[3], '{sy}/{sm}/{sd} – {ey}/{em}/{ed}');

        test.equal(templatec20[0], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[1], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[2], '{sy} {sm} – {ey} {em}');
        test.equal(templatec20[3], '{sy}/{sm} – {ey}/{em}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_wo_SN: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"wo-SN", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm}, {sy} ci {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm}, {sy} ci {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm}, {sy} - {st} – {et}');
        test.equal(templatec00[3], '{sd}-{sm}-{sy} - {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec01[1], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec01[2], '{sd} {sm}, {sy} - {st} – {ed} {em}, {ey} - {et}');
        test.equal(templatec01[3], '{sd}-{sm}-{sy} - {st} – {ed}-{em}-{ey} - {et}');

        test.equal(templatec02[1], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec02[0], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec02[2], '{sd} {sm}, {sy} - {st} – {ed} {em}, {ey} - {et}');
        test.equal(templatec02[3], '{sd}-{sm}-{sy} - {st} – {ed}-{em}-{ey} - {et}');

        test.equal(templatec03[0], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec03[1], '{sd} {sm}, {sy} ci {st} – {ed} {em}, {ey} ci {et}');
        test.equal(templatec03[2], '{sd} {sm}, {sy} - {st} – {ed} {em}, {ey} - {et}');
        test.equal(templatec03[3], '{sd}-{sm}-{sy} - {st} – {ed}-{em}-{ey} - {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em}, {ey}');
        test.equal(templatec10[3], '{sd} – {ed}-{em}-{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em}, {ey}');
        test.equal(templatec11[3], '{sd}-{sm} – {ed}-{em}-{ey}');

        test.equal(templatec12[0], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[1], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[2], '{sd} {sm}, {sy} – {ed} {em}, {ey}');
        test.equal(templatec12[3], '{sd}-{sm}-{sy} – {ed}-{em}-{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}-{sy} – {em}-{ey}');
        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tk_TM: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tk-TM", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} {sy} sagat {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} sagat {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} sagat {st} – {ed} {em} {ey} sagat {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy}, {st} – {ed}.{em}.{ey}, {et}' );

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');
        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_tg_TJ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"tg-TJ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} {sy} соати {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} соати {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} соати {st} – {ed} {em} {ey} соати {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_mt_MT: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"mt-MT", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} ta’ {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd} ta’ {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec01[1], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec02[1], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec02[0], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec03[0], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec03[1], '{sd} ta’ {sm} {sy} {st} – {ed} ta’ {em} {ey} {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed} ta’ {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} ta’ {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} ta’ {sm} – {ed} ta’ {em} {ey}');
        test.equal(templatec11[1], '{sd} ta’ {sm} – {ed} ta’ {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} ta’ {sm} {sy} – {ed} ta’ {em} {ey}');
        test.equal(templatec12[1], '{sd} ta’ {sm} {sy} – {ed} ta’ {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_zu_ZA: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"zu-ZA", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sm} {sd}, {sy} {st} – {et}');
        test.equal(templatec00[1], '{sm} {sd}, {sy} {st} – {et}');
        test.equal(templatec00[2], '{sm} {sd}, {sy} {st} – {et}');
        test.equal(templatec00[3], '{sm}/{sd}/{sy} {st} – {et}');

        test.equal(templatec01[0], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec01[1], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec01[2], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec01[3], '{sm}/{sd}/{sy} {st} – {em}/{ed}/{ey} {et}');

        test.equal(templatec02[1], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec02[0], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec02[2], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec02[3], '{sm}/{sd}/{sy} {st} – {em}/{ed}/{ey} {et}');

        test.equal(templatec03[0], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec03[1], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec03[2], '{sm} {sd}, {sy} {st} – {em} {ed}, {ey} {et}');
        test.equal(templatec03[3], '{sm}/{sd}/{sy} {st} – {em}/{ed}/{ey} {et}');

        test.equal(templatec10[0], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[1], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[2], '{sm} {sd} – {ed}, {ey}');
        test.equal(templatec10[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec11[0], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[1], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[2], '{sm} {sd} – {em} {ed}, {ey}');
        test.equal(templatec11[3], '{sm}/{sd} – {em}/{ed}/{ey}');

        test.equal(templatec12[0], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[1], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[2], '{sm} {sd}, {sy} – {em} {ed}, {ey}');
        test.equal(templatec12[3], '{sm}/{sd}/{sy} – {em}/{ed}/{ey}');

        test.equal(templatec20[0], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[1], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[2], '{sm}, {sy} – {em}, {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_lb_LU: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dMy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"lb-LU", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd}. {sm} {sy} {st} – {et}');
        test.equal(templatec00[1], '{sd}. {sm} {sy} {st} – {et}');
        test.equal(templatec00[2], '{sd}. {sm} {sy} {st} – {et}');
        test.equal(templatec00[3], '{sd}.{sm}.{sy} {st} – {et}');

        test.equal(templatec01[0], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec01[1], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec01[2], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec01[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec02[1], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec02[0], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec02[2], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec02[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec03[0], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec03[1], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec03[2], '{sd}. {sm} {sy} {st} – {ed}. {em} {ey} {et}');
        test.equal(templatec03[3], '{sd}.{sm}.{sy} {st} – {ed}.{em}.{ey} {et}');

        test.equal(templatec10[0], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed}. {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}.{em}.{ey}');

        test.equal(templatec11[0], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[1], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[2], '{sd}. {sm} – {ed}. {em} {ey}');
        test.equal(templatec11[3], '{sd}.{sm} – {ed}.{em}.{ey}');

        test.equal(templatec12[0], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[1], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[2], '{sd}. {sm} {sy} – {ed}. {em} {ey}');
        test.equal(templatec12[3], '{sd}.{sm}.{sy} – {ed}.{em}.{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}.{sy} – {em}.{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ig_NG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ig-NG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} {sy} na {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} na {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} na {st} – {ed} {em} {ey} na {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_ps_AF: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
       //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ps-AF", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], 'د {sy} د {sm} {sd} {st} – {et}');
        test.equal(templatec00[1], 'د {sy} د {sm} {sd} {st} – {et}');
        test.equal(templatec00[2], '‏{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[3], '‏{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec01[1], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec01[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec01[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec02[0], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec02[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec02[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec03[1], 'د {sy} د {sm} {sd} {st} – د {ey} د {em} {ed} {et}');
        test.equal(templatec03[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], 'د {sy} د {sm} {sd} – {ed}');
        test.equal(templatec10[1], 'د {sy} د {sm} {sd} – {ed}');
        test.equal(templatec10[2], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '‏{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], 'د {sy} د {sm} {sd} – د {em} {ed}');
        test.equal(templatec11[1], 'د {sy} د {sm} {sd} – د {em} {ed}');
        test.equal(templatec11[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec11[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec12[0], 'د {sy} د {sm} {sd} – د {ey} د {em} {ed}');
        test.equal(templatec12[1], 'د {sy} د {sm} {sd} – د {ey} د {em} {ed}');
        test.equal(templatec12[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec20[0], 'د {sy} د {sm} – د {ey} د {em}');
        test.equal(templatec20[1], 'د {sy} د {sm} – د {ey} د {em}');
        test.equal(templatec20[2], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[3], '‏{sy}/{sm} – ‏{ey}/{em}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');

        test.done();
    },
    testDateRngFmt_ps_PK: function(test) {
      test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
       //ymd
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"ps-PK", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '‏{sy} د {sm} {sd} {st} – {et}');
        test.equal(templatec00[1], '‏{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[2], '‏{sy} {sm} {sd} {st} – {et}');
        test.equal(templatec00[3], '‏{sy}/{sm}/{sd} {st} – {et}');

        test.equal(templatec01[0], '‏{sy} د {sm} {sd} {st} – ‏{ey} د {em} {ed} {et}');
        test.equal(templatec01[1], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}' );
        test.equal(templatec01[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec01[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec02[1], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec02[0], '‏{sy} د {sm} {sd} {st} – ‏{ey} د {em} {ed} {et}');
        test.equal(templatec02[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec02[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec03[0], '‏{sy} د {sm} {sd} {st} – ‏{ey} د {em} {ed} {et}');
        test.equal(templatec03[1], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec03[2], '‏{sy} {sm} {sd} {st} – ‏{ey} {em} {ed} {et}');
        test.equal(templatec03[3], '‏{sy}/{sm}/{sd} {st} – ‏{ey}/{em}/{ed} {et}');

        test.equal(templatec10[0], '‏{sy} د {sm} {sd} – {ed}');
        test.equal(templatec10[1], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[2], '‏{sy} {sm} {sd} – {ed}');
        test.equal(templatec10[3], '‏{sy}/{sm}/{sd} – {ed}');

        test.equal(templatec11[0], '‏{sy} د {sm} {sd} – ‏{em} {ed}');
        test.equal(templatec11[1], '‏{sy} {sm} {sd} – ‏{em} {ed}');
        test.equal(templatec11[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec11[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec12[0], '‏{sy} د {sm} {sd} – ‏{ey} د {em} {ed}');
        test.equal(templatec12[1], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[2], '‏{sy} {sm} {sd} – ‏{ey} {em} {ed}');
        test.equal(templatec12[3], '‏{sy}/{sm}/{sd} – ‏{ey}/{em}/{ed}');

        test.equal(templatec20[0], '‏{sy} د {sm} – ‏{ey} د {em}');
        test.equal(templatec20[1], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[2], '‏{sy} {sm} – ‏{ey} {em}');
        test.equal(templatec20[3], '‏{sy}/{sm} – ‏{ey}/{em}');

        test.equal(templatec30[0], '‏{sy} – {ey}');
        test.equal(templatec30[1], '‏{sy} – {ey}');
        test.equal(templatec30[2], '‏{sy} – {ey}');
        test.equal(templatec30[3], '‏{sy} – {ey}');
      test.done();
    },
    testDateRngFmt_yo_NG: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];
        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"yo-NG", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }
        test.equal(templatec00[0], '{sd} {sm} {sy} ní {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} ní {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec02[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");

        test.done();
    },
    testDateRngFmt_yo_BJ: function(test) {
        test.expect(36);
        var fmt;
        var data = setVariables();
        var length = data["fullLength"];
        var abbrLength = data["abbrLength"];

        var templatec00 = [],templatec01 = [],templatec02 = [],templatec03 = [];
        var templatec10 = [],templatec11 = [],templatec12 = [],templatec20 = [];
        var templatec30 = [];

        //dmy
        for (var i=0; i < 4; i++) {
            fmt = new DateRngFmt({locale:"yo-BJ", length: length[i]})
            templatec00.push(fmt.dateFmt.formats.range["c00"][abbrLength[i]]);
            templatec01.push(fmt.dateFmt.formats.range["c01"][abbrLength[i]]);
            templatec02.push(fmt.dateFmt.formats.range["c02"][abbrLength[i]]);
            templatec03.push(fmt.dateFmt.formats.range["c03"][abbrLength[i]]);
            templatec10.push(fmt.dateFmt.formats.range["c10"][abbrLength[i]]);
            templatec11.push(fmt.dateFmt.formats.range["c11"][abbrLength[i]]);
            templatec12.push(fmt.dateFmt.formats.range["c12"][abbrLength[i]]);
            templatec20.push(fmt.dateFmt.formats.range["c20"][abbrLength[i]]);
            templatec30.push(fmt.dateFmt.formats.range["c30"][abbrLength[i]]);
        }

        test.equal(templatec00[0], '{sd} {sm} {sy} ní {st} – {et}');
        test.equal(templatec00[1], '{sd} {sm} {sy} ní {st} – {et}');
        test.equal(templatec00[2], '{sd} {sm} {sy}, {st} – {et}');
        test.equal(templatec00[3], '{sd}/{sm}/{sy}, {st} – {et}');

        test.equal(templatec01[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec01[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec01[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec01[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec02[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec02[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec02[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec02[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec03[0], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec03[1], '{sd} {sm} {sy} ní {st} – {ed} {em} {ey} ní {et}');
        test.equal(templatec03[2], '{sd} {sm} {sy}, {st} – {ed} {em} {ey}, {et}');
        test.equal(templatec03[3], '{sd}/{sm}/{sy}, {st} – {ed}/{em}/{ey}, {et}');

        test.equal(templatec10[0], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[1], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[2], '{sd} – {ed} {em} {ey}');
        test.equal(templatec10[3], '{sd} – {ed}/{em}/{ey}');

        test.equal(templatec11[0], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[1], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[2], '{sd} {sm} – {ed} {em} {ey}');
        test.equal(templatec11[3], '{sd}/{sm} – {ed}/{em}/{ey}');

        test.equal(templatec12[0], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[1], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[2], '{sd} {sm} {sy} – {ed} {em} {ey}');
        test.equal(templatec12[3], '{sd}/{sm}/{sy} – {ed}/{em}/{ey}');

        test.equal(templatec20[0], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[1], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[2], '{sm} {sy} – {em} {ey}');
        test.equal(templatec20[3], '{sm}/{sy} – {em}/{ey}');

        test.equal(templatec30[0], "{sy} – {ey}");
        test.equal(templatec30[1], "{sy} – {ey}");
        test.equal(templatec30[2], "{sy} – {ey}");
        test.equal(templatec30[3], "{sy} – {ey}");
        test.done();
    }
}
