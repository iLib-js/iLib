/*
 * testcollation_el.js - test the Collator object in Greek
 * 
 * Copyright © 2015,2017, JEDLSoft
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testcollation_el = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuat_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά < ά", col.compare("ά", "ά") < 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ < έ", col.compare("έ", "έ") < 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή < ή", col.compare("ή", "ή") < 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί < ί", col.compare("ί", "ί") < 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
        test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό < ό", col.compare("ό", "ό") < 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ < ς", col.compare("σ", "ς") < 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
        test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
        test.done();
    },
    
    testJSCollatorTer_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά = Ά", col.compare("Ά", "Ά") === 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά = ά", col.compare("ά", "ά") === 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ = Έ", col.compare("Έ", "Έ") === 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ = έ", col.compare("έ", "έ") === 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή = Ή", col.compare("Ή", "Ή") === 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή = ή", col.compare("ή", "ή") === 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί = Ί", col.compare("Ί", "Ί") === 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί = ί", col.compare("ί", "ί") === 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
        test.ok("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό = Ό", col.compare("Ό", "Ό") === 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό = ό", col.compare("ό", "ό") === 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ = ς", col.compare("σ", "ς") === 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ = ύ", col.compare("ύ", "ύ") === 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
        test.ok("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ = ώ", col.compare("ώ", "ώ") === 0);
        test.done();
    },
    
    testJSCollatorSec_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α = α", col.compare("Α", "α") === 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά = Ά", col.compare("Ά", "Ά") === 0);
        test.ok("Ά = ά", col.compare("Ά", "ά") === 0);
        test.ok("ά = ά", col.compare("ά", "ά") === 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β = β", col.compare("Β", "β") === 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ = γ", col.compare("Γ", "γ") === 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ = δ", col.compare("Δ", "δ") === 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε = ε", col.compare("Ε", "ε") === 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ = Έ", col.compare("Έ", "Έ") === 0);
        test.ok("Έ = έ", col.compare("Έ", "έ") === 0);
        test.ok("έ = έ", col.compare("έ", "έ") === 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ = ζ", col.compare("Ζ", "ζ") === 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η = η", col.compare("Η", "η") === 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή = Ή", col.compare("Ή", "Ή") === 0);
        test.ok("Ή = ή", col.compare("Ή", "ή") === 0);
        test.ok("ή = ή", col.compare("ή", "ή") === 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ = θ", col.compare("Θ", "θ") === 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι = ι", col.compare("Ι", "ι") === 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί = Ί", col.compare("Ί", "Ί") === 0);
        test.ok("Ί = ί", col.compare("Ί", "ί") === 0);
        test.ok("ί = ί", col.compare("ί", "ί") === 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
        test.ok("Ϊ = ϊ", col.compare("Ϊ", "ϊ") === 0);
        test.ok("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
        test.ok("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ = κ", col.compare("Κ", "κ") === 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ = λ", col.compare("Λ", "λ") === 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ = μ", col.compare("Μ", "μ") === 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν = ν", col.compare("Ν", "ν") === 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ = ξ", col.compare("Ξ", "ξ") === 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο = ο", col.compare("Ο", "ο") === 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό = Ό", col.compare("Ό", "Ό") === 0);
        test.ok("Ό = ό", col.compare("Ό", "ό") === 0);
        test.ok("ό = ό", col.compare("ό", "ό") === 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π = π", col.compare("Π", "π") === 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ = ρ", col.compare("Ρ", "ρ") === 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ = σ", col.compare("Σ", "σ") === 0);
        test.ok("σ = ς", col.compare("σ", "ς") === 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ = τ", col.compare("Τ", "τ") === 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ = υ", col.compare("Υ", "υ") === 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
        test.ok("Ύ = ύ", col.compare("Ύ", "ύ") === 0);
        test.ok("ύ = ύ", col.compare("ύ", "ύ") === 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
        test.ok("Ϋ = ϋ", col.compare("Ϋ", "ϋ") === 0);
        test.ok("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
        test.ok("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ = φ", col.compare("Φ", "φ") === 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ = χ", col.compare("Χ", "χ") === 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ = ψ", col.compare("Ψ", "ψ") === 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω = ω", col.compare("Ω", "ω") === 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
        test.ok("Ώ = ώ", col.compare("Ώ", "ώ") === 0);
        test.ok("ώ = ώ", col.compare("ώ", "ώ") === 0);
        test.done();
    },
    
    testJSCollatorPri_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α = α", col.compare("Α", "α") === 0);
        test.ok("α = Ά", col.compare("α", "Ά") === 0);
        test.ok("Ά = Ά", col.compare("Ά", "Ά") === 0);
        test.ok("Ά = ά", col.compare("Ά", "ά") === 0);
        test.ok("ά = ά", col.compare("ά", "ά") === 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β = β", col.compare("Β", "β") === 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ = γ", col.compare("Γ", "γ") === 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ = δ", col.compare("Δ", "δ") === 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε = ε", col.compare("Ε", "ε") === 0);
        test.ok("ε = Έ", col.compare("ε", "Έ") === 0);
        test.ok("Έ = Έ", col.compare("Έ", "Έ") === 0);
        test.ok("Έ = έ", col.compare("Έ", "έ") === 0);
        test.ok("έ = έ", col.compare("έ", "έ") === 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ = ζ", col.compare("Ζ", "ζ") === 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η = η", col.compare("Η", "η") === 0);
        test.ok("η = Ή", col.compare("η", "Ή") === 0);
        test.ok("Ή = Ή", col.compare("Ή", "Ή") === 0);
        test.ok("Ή = ή", col.compare("Ή", "ή") === 0);
        test.ok("ή = ή", col.compare("ή", "ή") === 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ = θ", col.compare("Θ", "θ") === 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι = ι", col.compare("Ι", "ι") === 0);
        test.ok("ι = Ί", col.compare("ι", "Ί") === 0);
        test.ok("Ί = Ί", col.compare("Ί", "Ί") === 0);
        test.ok("Ί = ί", col.compare("Ί", "ί") === 0);
        test.ok("ί = ί", col.compare("ί", "ί") === 0);
        test.ok("ί = Ϊ", col.compare("ί", "Ϊ") === 0);
        test.ok("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
        test.ok("Ϊ = ϊ", col.compare("Ϊ", "ϊ") === 0);
        test.ok("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
        test.ok("ϊ = ΐ", col.compare("ϊ", "ΐ") === 0);
        test.ok("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
        test.ok("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ = κ", col.compare("Κ", "κ") === 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ = λ", col.compare("Λ", "λ") === 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ = μ", col.compare("Μ", "μ") === 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν = ν", col.compare("Ν", "ν") === 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ = ξ", col.compare("Ξ", "ξ") === 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο = ο", col.compare("Ο", "ο") === 0);
        test.ok("ο = Ό", col.compare("ο", "Ό") === 0);
        test.ok("Ό = Ό", col.compare("Ό", "Ό") === 0);
        test.ok("Ό = ό", col.compare("Ό", "ό") === 0);
        test.ok("ό = ό", col.compare("ό", "ό") === 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π = π", col.compare("Π", "π") === 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ = ρ", col.compare("Ρ", "ρ") === 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ = σ", col.compare("Σ", "σ") === 0);
        test.ok("σ = ς", col.compare("σ", "ς") === 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ = τ", col.compare("Τ", "τ") === 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ = υ", col.compare("Υ", "υ") === 0);
        test.ok("υ = Ύ", col.compare("υ", "Ύ") === 0);
        test.ok("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
        test.ok("Ύ = ύ", col.compare("Ύ", "ύ") === 0);
        test.ok("ύ = ύ", col.compare("ύ", "ύ") === 0);
        test.ok("ύ = Ϋ", col.compare("ύ", "Ϋ") === 0);
        test.ok("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
        test.ok("Ϋ = ϋ", col.compare("Ϋ", "ϋ") === 0);
        test.ok("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
        test.ok("ϋ = ΰ", col.compare("ϋ", "ΰ") === 0);
        test.ok("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
        test.ok("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ = φ", col.compare("Φ", "φ") === 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ = χ", col.compare("Χ", "χ") === 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ = ψ", col.compare("Ψ", "ψ") === 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω = ω", col.compare("Ω", "ω") === 0);
        test.ok("ω = Ώ", col.compare("ω", "Ώ") === 0);
        test.ok("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
        test.ok("Ώ = ώ", col.compare("Ώ", "ώ") === 0);
        test.ok("ώ = ώ", col.compare("ώ", "ώ") === 0);
        test.done();
    },
    
    testJSCollatorQuatSort_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά < ά", col.compare("ά", "ά") < 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ < έ", col.compare("έ", "έ") < 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή < ή", col.compare("ή", "ή") < 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί < ί", col.compare("ί", "ί") < 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
        test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό < ό", col.compare("ό", "ό") < 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ < ς", col.compare("σ", "ς") < 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
        test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
        test.done();
    },
    
    testJSCollatorTerSort_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά < ά", col.compare("ά", "ά") < 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ < έ", col.compare("έ", "έ") < 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή < ή", col.compare("ή", "ή") < 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί < ί", col.compare("ί", "ί") < 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
        test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό < ό", col.compare("ό", "ό") < 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ < ς", col.compare("σ", "ς") < 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
        test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
        test.done();
    },
    
    testJSCollatorSecSort_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά < ά", col.compare("ά", "ά") < 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ < έ", col.compare("έ", "έ") < 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή < ή", col.compare("ή", "ή") < 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί < ί", col.compare("ί", "ί") < 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
        test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό < ό", col.compare("ό", "ό") < 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ < ς", col.compare("σ", "ς") < 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
        test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
        test.done();
    },
    
    testJSCollatorPriSort_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
        
        test.ok("Α < α", col.compare("Α", "α") < 0);
        test.ok("α < Ά", col.compare("α", "Ά") < 0);
        test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
        test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
        test.ok("ά < ά", col.compare("ά", "ά") < 0);
        test.ok("ά < Β", col.compare("ά", "Β") < 0);
        test.ok("Β < β", col.compare("Β", "β") < 0);
        test.ok("β < Γ", col.compare("β", "Γ") < 0);
        test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
        test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
        test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
        test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
        test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
        test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
        test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
        test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
        test.ok("έ < έ", col.compare("έ", "έ") < 0);
        test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
        test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
        test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
        test.ok("Η < η", col.compare("Η", "η") < 0);
        test.ok("η < Ή", col.compare("η", "Ή") < 0);
        test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
        test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
        test.ok("ή < ή", col.compare("ή", "ή") < 0);
        test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
        test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
        test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
        test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
        test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
        test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
        test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
        test.ok("ί < ί", col.compare("ί", "ί") < 0);
        test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
        test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
        test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
        test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
        test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
        test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
        test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
        test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
        test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
        test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
        test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
        test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
        test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
        test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
        test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
        test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
        test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
        test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
        test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
        test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
        test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
        test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
        test.ok("ό < ό", col.compare("ό", "ό") < 0);
        test.ok("ό < Π", col.compare("ό", "Π") < 0);
        test.ok("Π < π", col.compare("Π", "π") < 0);
        test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
        test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
        test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
        test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
        test.ok("σ < ς", col.compare("σ", "ς") < 0);
        test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
        test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
        test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
        test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
        test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
        test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
        test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
        test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
        test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
        test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
        test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
        test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
        test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
        test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
        test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
        test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
        test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
        test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
        test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
        test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
        test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
        test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
        test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
        test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
        test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
        test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
        test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
        test.done();
    },
    
    testCollatorCase_el: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
        
        var input = [
             "ΐ", 
            "ί̈", 
             "Α", 
            "ξ", 
            "ΐ", 
            "σ", 
            "Η", 
            "Κ", 
            "ϊ", 
            "ά", 
            "ω", 
            "ώ", 
            "α", 
            "Σ", 
            "ϊ", 
            "Δ", 
            "ά", 
            "ώ",
            "Ή", 
            "Ι", 
            "ι", 
            "ς",
            "Ψ"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Α", 
            "α", 
            "ά", 
            "ά", 
            "Δ", 
            "Η", 
            "Ή", 
            "Ι", 
            "ι", 
            "ϊ", 
            "ϊ", 
            "ΐ", 
            "ΐ", 
            "ί̈", 
            "Κ", 
            "ξ", 
            "Σ", 
            "σ", 
            "ς",
            "Ψ", 
            "ω", 
            "ώ", 
            "ώ"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPrimary_el: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "ΐ", 
            "ας",
            "ί̈", 
             "Α", 
            "ξ", 
            "ΐ", 
            "σ", 
            "Η", 
            "Κ", 
            "αδ",
            "ϊ", 
            "ά", 
            "ω", 
            "ώ", 
            "α", 
            "Σ", 
            "ϊ", 
            "Δ", 
            "ά", 
            "ώ",
            "Ή", 
            "Ι", 
            "ι", 
            "ς",
            "Ψ"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Α", 
            "α",
            "αδ",
            "ας",
            "ά", 
            "ά", 
            "Δ", 
            "Η", 
            "Ή", 
            "Ι", 
            "ι", 
            "ϊ", 
            "ϊ", 
            "ΐ", 
            "ΐ", 
            "ί̈", 
            "Κ", 
            "ξ", 
            "Σ", 
            "σ", 
            "ς",
            "Ψ", 
            "ω", 
            "ώ", 
            "ώ"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorIgnoreStressMarks_el: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
        test.ok(typeof(col) !== "undefined");
    
        var comp = col.getComparator();
        
        // ignore stress marks
        test.equal(comp("παϊδάκια", "παιδάκια"), 0);
        test.equal(comp("Αθηνά", "Αθήνα"), 0);
        test.done();
    },
    
    testJSCollatorQuatLatin_el: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // all latin letters
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.done();
    },
    
    testCollatorPrimaryMixed_el: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
             "ΐ", 
            "ας",
            "Σ", 
            "ϊ", 
            "Δ", 
            "orange",
            "ί̈", 
            "peach",
            "ΐ", 
            "σ", 
            "Η", 
            "Κ", 
            "apple",
            "αδ",
            "ϊ", 
            "ά", 
            "ω", 
            "raspberry",
             "Α", 
            "ξ", 
            "ώ", 
            "α", 
            "Ή", 
            "Ι", 
            "ι", 
            "ά", 
            "ώ",
            "banana",
            "ς",
            "Ψ"
        ];
    
        input.sort(col.getComparator());
    
        // Latin letters sort before the Greek ones
        
        var expected = [
            "apple",
            "banana",
            "orange",
            "peach",
            "raspberry",
            "Α", 
            "α",
            "αδ",
            "ας",
            "ά", 
            "ά", 
            "Δ", 
            "Η", 
            "Ή", 
            "Ι", 
            "ι", 
            "ϊ", 
            "ϊ", 
            "ΐ", 
            "ΐ", 
            "ί̈", 
            "Κ", 
            "ξ", 
            "Σ", 
            "σ", 
            "ς",
            "Ψ", 
            "ω", 
            "ώ", 
            "ώ"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
};
