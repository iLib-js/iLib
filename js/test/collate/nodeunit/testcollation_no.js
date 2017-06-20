/*
 * testcollation_no.js - test the Collator object in Norwegian
 * 
 * Copyright © 2014,2017, JEDLSoft
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
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(Collator) === "undefined") {
    var Collator = require("../../../lib/Collator.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcollation_no = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCollatorConstructorNative_no: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false, locale: "no-NO"});
    
        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    
    testCollatorDefaultLowerPrimary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // The Danish alphabet also has some extra letters, namely Æ and Ø and Å which appear
        // at the end of the alphabet as separate letters. 
        // a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < æ", col.compare("z", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("ø < å", col.compare("ø", "å") < 0);
        test.done();
    },
    
    testCollatorDefaultLowerAccentsPrimary_no: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("d = đ", col.compare("d", "đ") === 0);
        test.ok("đ = ð", col.compare("đ", "ð") === 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("y = ü", col.compare("y", "ü") === 0);
        test.ok("ü = ű", col.compare("ü", "ű") === 0);
        test.ok("ű < z", col.compare("ű", "z") < 0);
        test.ok("æ = ä", col.compare("æ", "ä") === 0);
        test.ok("ä = ę", col.compare("ä", "ę") === 0);
        test.ok("ę < ø", col.compare("ę", "ø") < 0);
        test.ok("ø = ö", col.compare("ø", "ö") === 0);
        test.ok("ö = ő", col.compare("ö", "ő") === 0);
        test.ok("ő = œ", col.compare("ő", "œ") === 0);
        test.ok("œ < å", col.compare("œ", "å") < 0);
        test.ok("å = aa", col.compare("å", "aa") === 0);
        test.done();
    },
    
    testCollatorDefaultUpperPrimary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // The Danish alphabet also has some extra letters, namely Æ and Ø and Å which appear
        // at the end of the alphabet as separate letters. 
        // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Æ", col.compare("Z", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.ok("Ø < Å", col.compare("Æ", "Å") < 0);
        test.done();
    },
    
    testCollatorDefaultUpperAccentsPrimary_no: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("D = Đ", col.compare("D", "Đ") === 0);
        test.ok("Đ = Ð", col.compare("Đ", "Ð") === 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("Y = Ü", col.compare("Y", "Ü") === 0);
        test.ok("Ü = Ű", col.compare("Ü", "Ű") === 0);
        test.ok("Ű < Z", col.compare("Ű", "Z") < 0);
        test.ok("Æ = Ä", col.compare("Æ", "Ä") === 0);
        test.ok("Ä = Ę", col.compare("Ä", "Ę") === 0);
        test.ok("Ę < Ø", col.compare("Ę", "Ø") < 0);
        test.ok("Ø = Ö", col.compare("Ø", "Ö") === 0);
        test.ok("Ö = Ő", col.compare("Ö", "Ő") === 0);
        test.ok("Ő = Œ", col.compare("Ő", "Œ") === 0);
        test.ok("Œ < Å", col.compare("Œ", "Å") < 0);
        test.ok("Å = AA", col.compare("Å", "AA") === 0);
        test.ok("AA = Aa", col.compare("AA", "Aa") === 0);
        test.ok("Aa = aA", col.compare("Aa", "aA") === 0);
        test.ok("aA = aa", col.compare("aA", "aa") === 0);
        test.done();
    },
    
    testCollatorDefaultLowerSecondary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < æ", col.compare("z", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("ø < å", col.compare("ø", "å") < 0);
        test.done();
    },
    
    testCollatorDefaultLowerAccentsSecondary_no: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("d < đ", col.compare("d", "đ") < 0);
        test.ok("đ < ð", col.compare("đ", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("y < ü", col.compare("y", "ü") < 0);
        test.ok("ü < ű", col.compare("ü", "ű") < 0);
        test.ok("ű < z", col.compare("ű", "z") < 0);
        test.ok("æ < ä", col.compare("æ", "ä") < 0);
        test.ok("ä < ę", col.compare("ä", "ę") < 0);
        test.ok("ę < ø", col.compare("ę", "ø") < 0);
        test.ok("ø < ö", col.compare("ø", "ö") < 0);
        test.ok("ö < ő", col.compare("ö", "ő") < 0);
        test.ok("ő < œ", col.compare("ő", "œ") < 0);
        test.ok("œ < å", col.compare("œ", "å") < 0);
        test.ok("å = aa", col.compare("å", "aa") === 0);
        test.done();
    },
    
    testCollatorDefaultCaseSecondary_no: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // case is a tertiary difference, so no difference here
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("Æ = æ", col.compare("Æ", "æ") === 0);
        test.ok("Ø = ø", col.compare("Ø", "ø") === 0);
        test.ok("Å = å", col.compare("Å", "å") === 0);
        test.done();
    },
    
    testCollatorDefaultVariantsSecondary_no: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // variants are a quaternary difference, so no difference here
        test.ok("Å = Å", col.compare("Å", "Å") === 0);
        test.ok("å = å", col.compare("å", "å") === 0);
        test.done();
    },
    
    testCollatorDefaultUpperSecondary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Æ", col.compare("Z", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.ok("Ø < Å", col.compare("Æ", "Å") < 0);
        test.done();
    },
    
    testCollatorDefaultUpperAccentsSecondary_no: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("D < Đ", col.compare("D", "Đ") < 0);
        test.ok("Đ < Ð", col.compare("Đ", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("Y < Ü", col.compare("Y", "Ü") < 0);
        test.ok("Ü < Ű", col.compare("Ü", "Ű") < 0);
        test.ok("Ű < Z", col.compare("Ű", "Z") < 0);
        test.ok("Æ < Ä", col.compare("Æ", "Ä") < 0);
        test.ok("Ä < Ę", col.compare("Ä", "Ę") < 0);
        test.ok("Ę < Ø", col.compare("Ę", "Ø") < 0);
        test.ok("Ø < Ö", col.compare("Ø", "Ö") < 0);
        test.ok("Ö < Ő", col.compare("Ö", "Ő") < 0);
        test.ok("Ő < Œ", col.compare("Ő", "Œ") < 0);
        test.ok("Œ < Å", col.compare("Œ", "Å") < 0);
        test.ok("Å = AA", col.compare("Å", "AA") === 0);
        test.ok("AA = Aa", col.compare("AA", "Aa") === 0);
        test.ok("Aa = aA", col.compare("Aa", "aA") === 0);
        test.ok("aA = aa", col.compare("aA", "aa") === 0);
        test.done();
    },
    
    testCollatorDefaultLowerTertiary_no: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // case is a tertiary difference, so now sort based on case
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < æ", col.compare("z", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("ø < å", col.compare("ø", "å") < 0);
        
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("Æ < æ", col.compare("Æ", "æ") < 0);
        test.ok("Ø < ø", col.compare("Ø", "ø") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.done();
    
    },
    
    testCollatorDefaultLowerAccentsTertiary_no: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("d < đ", col.compare("d", "đ") < 0);
        test.ok("đ < ð", col.compare("đ", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("y < ü", col.compare("y", "ü") < 0);
        test.ok("ü < ű", col.compare("ü", "ű") < 0);
        test.ok("ű < z", col.compare("ű", "z") < 0);
        test.ok("æ < ä", col.compare("æ", "ä") < 0);
        test.ok("ä < ę", col.compare("ä", "ę") < 0);
        test.ok("ę < ø", col.compare("ę", "ø") < 0);
        test.ok("ø < ö", col.compare("ø", "ö") < 0);
        test.ok("ö < ő", col.compare("ö", "ő") < 0);
        test.ok("ő < œ", col.compare("ő", "œ") < 0);
        test.ok("œ < å", col.compare("œ", "å") < 0);
        test.ok("å < aa", col.compare("å", "aa") < 0);
        test.done();
    },
    
    testCollatorDefaultVariantsTertiary_no: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // variants are a quaternary difference, so no difference here
        test.ok("Å = Å", col.compare("Å", "Å") === 0);
        test.ok("å = å", col.compare("å", "å") === 0);
        test.done();
    },
    
    testCollatorDefaultUpperTertiary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Æ", col.compare("Z", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.ok("Ø < Å", col.compare("Æ", "Å") < 0);
        test.done();
    },
    
    testCollatorDefaultUpperAccentsTertiary_no: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("D < Đ", col.compare("D", "Đ") < 0);
        test.ok("Đ < Ð", col.compare("Đ", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("Y < Ü", col.compare("Y", "Ü") < 0);
        test.ok("Ü < Ű", col.compare("Ü", "Ű") < 0);
        test.ok("Ű < Z", col.compare("Ű", "Z") < 0);
        test.ok("Æ < Ä", col.compare("Æ", "Ä") < 0);
        test.ok("Ä < Ę", col.compare("Ä", "Ę") < 0);
        test.ok("Ę < Ø", col.compare("Ę", "Ø") < 0);
        test.ok("Ø < Ö", col.compare("Ø", "Ö") < 0);
        test.ok("Ö < Ő", col.compare("Ö", "Ő") < 0);
        test.ok("Ő < Œ", col.compare("Ő", "Œ") < 0);
        test.ok("Œ < Å", col.compare("Œ", "Å") < 0);
        test.ok("Å < AA", col.compare("Å", "AA") < 0);
        test.ok("AA < Aa", col.compare("AA", "Aa") < 0);
        test.ok("Aa < aA", col.compare("Aa", "aA") < 0);
        test.ok("aA < aa", col.compare("aA", "aa") < 0);
        test.done();
    },
    
    testCollatorDefaultLowerQuaternary_no: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // case is a tertiary difference, so now sort based on case
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < æ", col.compare("z", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("ø < å", col.compare("ø", "å") < 0);
        
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("Æ < æ", col.compare("Æ", "æ") < 0);
        test.ok("Ø < ø", col.compare("Ø", "ø") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.done();
    },
    
    testCollatorDefaultLowerAccentsQuaternary_no: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("d < đ", col.compare("d", "đ") < 0);
        test.ok("đ < ð", col.compare("đ", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("y < ü", col.compare("y", "ü") < 0);
        test.ok("ü < ű", col.compare("ü", "ű") < 0);
        test.ok("ű < z", col.compare("ű", "z") < 0);
        test.ok("æ < ä", col.compare("æ", "ä") < 0);
        test.ok("ä < ę", col.compare("ä", "ę") < 0);
        test.ok("ę < ø", col.compare("ę", "ø") < 0);
        test.ok("ø < ö", col.compare("ø", "ö") < 0);
        test.ok("ö < ő", col.compare("ö", "ő") < 0);
        test.ok("ő < œ", col.compare("ő", "œ") < 0);
        test.ok("œ < å", col.compare("œ", "å") < 0);
        test.ok("å < aa", col.compare("å", "aa") < 0);
        test.done();
    },
    
    testCollatorDefaultVariantsQuaternary_no: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // variants are a quaternary difference, so now sort these variants properly
        test.ok("Å < Å", col.compare("Å", "Å") < 0);
        test.ok("å < å", col.compare("å", "å") < 0);
        test.done();
    },
    
    testCollatorDefaultUpperQuaternary_no: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Æ", col.compare("Z", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.ok("Ø < Å", col.compare("Æ", "Å") < 0);
        test.done();
    },
    
    testCollatorDefaultUpperAccentsQuaternary_no: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "no-NO",
            usage: "search",
            useNative: false, 
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // some secondary differences
        test.ok("D < Đ", col.compare("D", "Đ") < 0);
        test.ok("Đ < Ð", col.compare("Đ", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("Y < Ü", col.compare("Y", "Ü") < 0);
        test.ok("Ü < Ű", col.compare("Ü", "Ű") < 0);
        test.ok("Ű < Z", col.compare("Ű", "Z") < 0);
        test.ok("Æ < Ä", col.compare("Æ", "Ä") < 0);
        test.ok("Ä < Ę", col.compare("Ä", "Ę") < 0);
        test.ok("Ę < Ø", col.compare("Ę", "Ø") < 0);
        test.ok("Ø < Ö", col.compare("Ø", "Ö") < 0);
        test.ok("Ö < Ő", col.compare("Ö", "Ő") < 0);
        test.ok("Ő < Œ", col.compare("Ő", "Œ") < 0);
        test.ok("Œ < Å", col.compare("Œ", "Å") < 0);
        test.ok("Å < AA", col.compare("Å", "AA") < 0);
        test.ok("AA < Aa", col.compare("AA", "Aa") < 0);
        test.ok("Aa < aA", col.compare("Aa", "aA") < 0);
        test.ok("aA < aa", col.compare("aA", "aa") < 0);
        test.done();
    },
    
    testCollatorGetSortKeySimpleUpper_no: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "no-NO",
            useNative: false
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("ABCÆØÅ"), "000080100d00d80e00");
        test.done();
    },
    testCollatorGetSortKeySimpleLower_no: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "no-NO",
            useNative: false
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("abcæøå"), "002082102d02d82e02");
        test.done();
    },
    
    
    testCollatorWithSort_no: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "no-NO",
            useNative: false,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [ "æ", "p", "b", "w", "aa", "d", "h", "x", "ø", "j", "v", "z",
                "m", "o", "q", "å", "g", "a", "r", "f", "s", "e", "c", "t", "k",
                "u", "y", "i", "n", "l", ];
    
        input.sort(col.getComparator());
    
        var expected = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z", "æ", "ø", "å", "aa" ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    
    testCollatorGetAvailableScripts_no: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },
    
    testCollatorGetAvailableStyles_no: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },
    
    
    testJSCollatorNumeric_no: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "no-NO",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // comma is the thousands separator and period is the decimal separator
        test.equal(col.compare("0,012,123.4", "12,123.4"), 0);
        test.ok(col.compare("00123.4", "123") > 0);
        test.ok(col.compare("00123.4", "124") < 0);
        test.done();
    }
    
};