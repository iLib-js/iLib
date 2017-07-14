/*
 * testlistfmt_bs.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(ListFmt) === "undefined") {
    var ListFmt = require("../.././../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlistfmt_bs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // bs-BA  
    testListFmtbsBANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    },
    
    testListFmtbsBANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva"]), "oni i dva");
        test.done();
    },
    
    testListFmtbsBANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri"]), "oni, dva i tri");
        test.done();
    },
    
    testListFmtbsBANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri", "četiri"]), "oni, dva, tri i četiri");
        test.done();
    },

    testListFmtUnitStylebsBANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva"]), "oni i dva");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri"]), "oni, dva i tri");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri", "četiri"]), "oni, dva, tri i četiri");
        test.done();
    },
    testListFmtUnitStylebsBANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva"]), "oni i dva");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri"]), "oni, dva i tri");
        test.done();
    },
    
    testListFmtUnitStylebsBANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "bs-BA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri", "četiri"]), "oni, dva, tri i četiri");
        test.done();
    },

    // bs-ME
    testListFmtbsMENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    },
    
    testListFmtbsMENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva"]), "oni i dva");
        test.done();
    },
    
    testListFmtbsMENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri"]), "oni, dva i tri");
        test.done();
    },
    
    testListFmtbsMENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri", "četiri"]), "oni, dva, tri i četiri");
        test.done();
    },

    testListFmtUnitStylebsMENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    },
    
    testListFmtUnitStylebsMENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva"]), "oni i dva");
        test.done();
    },
    
    testListFmtUnitStylebsMENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri"]), "oni, dva i tri");
        test.done();
    },
    
    testListFmtUnitStylebsMENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni", "dva", "tri", "četiri"]), "oni, dva, tri i četiri");
        test.done();
    },
    testListFmtUnitStylebsMENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "bs-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["oni"]), "oni");
        test.done();
    }  
};
