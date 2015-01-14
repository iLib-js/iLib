/*
 * testcollation_ja.js - test the Collator object in Japanese
 * 
 * Copyright © 2015, JEDLSoft
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

function testJSCollatorQuatKanji_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);
	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	assertTrue("頴 < 円", col.compare("頴", "円") < 0);
	assertTrue("円 < 凹", col.compare("円", "凹") < 0);
	assertTrue("凹 < 臆", col.compare("凹", "臆") < 0);
	assertTrue("臆 < 寡", col.compare("臆", "寡") < 0);
	assertTrue("寡 < 火", col.compare("寡", "火") < 0);
	assertTrue("火 < 茄", col.compare("火", "茄") < 0);
	assertTrue("茄 < 荷", col.compare("茄", "荷") < 0);
	assertTrue("荷 < 外", col.compare("荷", "外") < 0);
	assertTrue("外 < 竃", col.compare("外", "竃") < 0);
	assertTrue("竃 < 凶", col.compare("竃", "凶") < 0);
	assertTrue("凶 < 形", col.compare("凶", "形") < 0);
	assertTrue("形 < 戸", col.compare("形", "戸") < 0);
	assertTrue("戸 < 語", col.compare("戸", "語") < 0);
	assertTrue("語 < 三", col.compare("語", "三") < 0);
	assertTrue("三 < 女", col.compare("三", "女") < 0);
	assertTrue("女 < 小", col.compare("女", "小") < 0);
	assertTrue("小 < 上", col.compare("小", "上") < 0);
	assertTrue("上 < 人", col.compare("上", "人") < 0);
	assertTrue("人 < 大", col.compare("人", "大") < 0);
	assertTrue("大 < 辻", col.compare("大", "辻") < 0);
	assertTrue("辻 < 匹", col.compare("辻", "匹") < 0);
	assertTrue("匹 < 夕", col.compare("匹", "夕") < 0);
	assertTrue("夕 < 六", col.compare("夕", "六") < 0);
	assertTrue("六 < 孑", col.compare("六", "孑") < 0);
	assertTrue("孑 < 彳", col.compare("孑", "彳") < 0);
	assertTrue("彳 < 杲", col.compare("彳", "杲") < 0);
	assertTrue("杲 < 熾", col.compare("杲", "熾") < 0);
	assertTrue("熾 < 疸", col.compare("熾", "疸") < 0);
	assertTrue("疸 < 穽", col.compare("疸", "穽") < 0);
	assertTrue("穽 < 詁", col.compare("穽", "詁") < 0);
	assertTrue("詁 < 逎", col.compare("詁", "逎") < 0);
	assertTrue("逎 < 鶩", col.compare("逎", "鶩") < 0);
	assertTrue("鶩 < 熙", col.compare("鶩", "熙") < 0);
}

function testJSCollatorTer_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά = Ά", col.compare("Ά", "Ά") === 0);
	assertTrue("Ά < ά", col.compare("Ά", "ά") < 0);
	assertTrue("ά = ά", col.compare("ά", "ά") === 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β < β", col.compare("Β", "β") < 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ < γ", col.compare("Γ", "γ") < 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ < δ", col.compare("Δ", "δ") < 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε < ε", col.compare("Ε", "ε") < 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ = Έ", col.compare("Έ", "Έ") === 0);
	assertTrue("Έ < έ", col.compare("Έ", "έ") < 0);
	assertTrue("έ = έ", col.compare("έ", "έ") === 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η < η", col.compare("Η", "η") < 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή = Ή", col.compare("Ή", "Ή") === 0);
	assertTrue("Ή < ή", col.compare("Ή", "ή") < 0);
	assertTrue("ή = ή", col.compare("ή", "ή") === 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ < θ", col.compare("Θ", "θ") < 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι < ι", col.compare("Ι", "ι") < 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί = Ί", col.compare("Ί", "Ί") === 0);
	assertTrue("Ί < ί", col.compare("Ί", "ί") < 0);
	assertTrue("ί = ί", col.compare("ί", "ί") === 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
	assertTrue("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
	assertTrue("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
	assertTrue("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ < κ", col.compare("Κ", "κ") < 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ < λ", col.compare("Λ", "λ") < 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ < μ", col.compare("Μ", "μ") < 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν < ν", col.compare("Ν", "ν") < 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο < ο", col.compare("Ο", "ο") < 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό = Ό", col.compare("Ό", "Ό") === 0);
	assertTrue("Ό < ό", col.compare("Ό", "ό") < 0);
	assertTrue("ό = ό", col.compare("ό", "ό") === 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π < π", col.compare("Π", "π") < 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ < σ", col.compare("Σ", "σ") < 0);
	assertTrue("σ = ς", col.compare("σ", "ς") === 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ < τ", col.compare("Τ", "τ") < 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ < υ", col.compare("Υ", "υ") < 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
	assertTrue("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
	assertTrue("ύ = ύ", col.compare("ύ", "ύ") === 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
	assertTrue("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
	assertTrue("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
	assertTrue("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ < φ", col.compare("Φ", "φ") < 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ < χ", col.compare("Χ", "χ") < 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω < ω", col.compare("Ω", "ω") < 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
	assertTrue("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
	assertTrue("ώ = ώ", col.compare("ώ", "ώ") === 0);
}

function testJSCollatorSec_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά = Ά", col.compare("Ά", "Ά") === 0);
	assertTrue("Ά = ά", col.compare("Ά", "ά") === 0);
	assertTrue("ά = ά", col.compare("ά", "ά") === 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β = β", col.compare("Β", "β") === 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ = γ", col.compare("Γ", "γ") === 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ = δ", col.compare("Δ", "δ") === 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε = ε", col.compare("Ε", "ε") === 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ = Έ", col.compare("Έ", "Έ") === 0);
	assertTrue("Έ = έ", col.compare("Έ", "έ") === 0);
	assertTrue("έ = έ", col.compare("έ", "έ") === 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ = ζ", col.compare("Ζ", "ζ") === 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η = η", col.compare("Η", "η") === 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή = Ή", col.compare("Ή", "Ή") === 0);
	assertTrue("Ή = ή", col.compare("Ή", "ή") === 0);
	assertTrue("ή = ή", col.compare("ή", "ή") === 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ = θ", col.compare("Θ", "θ") === 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι = ι", col.compare("Ι", "ι") === 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί = Ί", col.compare("Ί", "Ί") === 0);
	assertTrue("Ί = ί", col.compare("Ί", "ί") === 0);
	assertTrue("ί = ί", col.compare("ί", "ί") === 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
	assertTrue("Ϊ = ϊ", col.compare("Ϊ", "ϊ") === 0);
	assertTrue("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
	assertTrue("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ = κ", col.compare("Κ", "κ") === 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ = λ", col.compare("Λ", "λ") === 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ = μ", col.compare("Μ", "μ") === 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν = ν", col.compare("Ν", "ν") === 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ = ξ", col.compare("Ξ", "ξ") === 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο = ο", col.compare("Ο", "ο") === 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό = Ό", col.compare("Ό", "Ό") === 0);
	assertTrue("Ό = ό", col.compare("Ό", "ό") === 0);
	assertTrue("ό = ό", col.compare("ό", "ό") === 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π = π", col.compare("Π", "π") === 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ = ρ", col.compare("Ρ", "ρ") === 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ = σ", col.compare("Σ", "σ") === 0);
	assertTrue("σ = ς", col.compare("σ", "ς") === 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ = τ", col.compare("Τ", "τ") === 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ = υ", col.compare("Υ", "υ") === 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
	assertTrue("Ύ = ύ", col.compare("Ύ", "ύ") === 0);
	assertTrue("ύ = ύ", col.compare("ύ", "ύ") === 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
	assertTrue("Ϋ = ϋ", col.compare("Ϋ", "ϋ") === 0);
	assertTrue("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
	assertTrue("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ = φ", col.compare("Φ", "φ") === 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ = χ", col.compare("Χ", "χ") === 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ = ψ", col.compare("Ψ", "ψ") === 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω = ω", col.compare("Ω", "ω") === 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
	assertTrue("Ώ = ώ", col.compare("Ώ", "ώ") === 0);
	assertTrue("ώ = ώ", col.compare("ώ", "ώ") === 0);
}

function testJSCollatorPri_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
	assertTrue("α = Ά", col.compare("α", "Ά") === 0);
	assertTrue("Ά = Ά", col.compare("Ά", "Ά") === 0);
	assertTrue("Ά = ά", col.compare("Ά", "ά") === 0);
	assertTrue("ά = ά", col.compare("ά", "ά") === 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β = β", col.compare("Β", "β") === 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ = γ", col.compare("Γ", "γ") === 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ = δ", col.compare("Δ", "δ") === 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε = ε", col.compare("Ε", "ε") === 0);
	assertTrue("ε = Έ", col.compare("ε", "Έ") === 0);
	assertTrue("Έ = Έ", col.compare("Έ", "Έ") === 0);
	assertTrue("Έ = έ", col.compare("Έ", "έ") === 0);
	assertTrue("έ = έ", col.compare("έ", "έ") === 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ = ζ", col.compare("Ζ", "ζ") === 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η = η", col.compare("Η", "η") === 0);
	assertTrue("η = Ή", col.compare("η", "Ή") === 0);
	assertTrue("Ή = Ή", col.compare("Ή", "Ή") === 0);
	assertTrue("Ή = ή", col.compare("Ή", "ή") === 0);
	assertTrue("ή = ή", col.compare("ή", "ή") === 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ = θ", col.compare("Θ", "θ") === 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι = ι", col.compare("Ι", "ι") === 0);
	assertTrue("ι = Ί", col.compare("ι", "Ί") === 0);
	assertTrue("Ί = Ί", col.compare("Ί", "Ί") === 0);
	assertTrue("Ί = ί", col.compare("Ί", "ί") === 0);
	assertTrue("ί = ί", col.compare("ί", "ί") === 0);
	assertTrue("ί = Ϊ", col.compare("ί", "Ϊ") === 0);
	assertTrue("Ϊ = Ϊ", col.compare("Ϊ", "Ϊ") === 0);
	assertTrue("Ϊ = ϊ", col.compare("Ϊ", "ϊ") === 0);
	assertTrue("ϊ = ϊ", col.compare("ϊ", "ϊ") === 0);
	assertTrue("ϊ = ΐ", col.compare("ϊ", "ΐ") === 0);
	assertTrue("ΐ = ΐ", col.compare("ΐ", "ΐ") === 0);
	assertTrue("ΐ = ί̈", col.compare("ΐ", "ί̈") === 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ = κ", col.compare("Κ", "κ") === 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ = λ", col.compare("Λ", "λ") === 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ = μ", col.compare("Μ", "μ") === 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν = ν", col.compare("Ν", "ν") === 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ = ξ", col.compare("Ξ", "ξ") === 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο = ο", col.compare("Ο", "ο") === 0);
	assertTrue("ο = Ό", col.compare("ο", "Ό") === 0);
	assertTrue("Ό = Ό", col.compare("Ό", "Ό") === 0);
	assertTrue("Ό = ό", col.compare("Ό", "ό") === 0);
	assertTrue("ό = ό", col.compare("ό", "ό") === 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π = π", col.compare("Π", "π") === 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ = ρ", col.compare("Ρ", "ρ") === 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ = σ", col.compare("Σ", "σ") === 0);
	assertTrue("σ = ς", col.compare("σ", "ς") === 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ = τ", col.compare("Τ", "τ") === 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ = υ", col.compare("Υ", "υ") === 0);
	assertTrue("υ = Ύ", col.compare("υ", "Ύ") === 0);
	assertTrue("Ύ = Ύ", col.compare("Ύ", "Ύ") === 0);
	assertTrue("Ύ = ύ", col.compare("Ύ", "ύ") === 0);
	assertTrue("ύ = ύ", col.compare("ύ", "ύ") === 0);
	assertTrue("ύ = Ϋ", col.compare("ύ", "Ϋ") === 0);
	assertTrue("Ϋ = Ϋ", col.compare("Ϋ", "Ϋ") === 0);
	assertTrue("Ϋ = ϋ", col.compare("Ϋ", "ϋ") === 0);
	assertTrue("ϋ = ϋ", col.compare("ϋ", "ϋ") === 0);
	assertTrue("ϋ = ΰ", col.compare("ϋ", "ΰ") === 0);
	assertTrue("ΰ = ΰ", col.compare("ΰ", "ΰ") === 0);
	assertTrue("ΰ = ύ̈", col.compare("ΰ", "ύ̈") === 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ = φ", col.compare("Φ", "φ") === 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ = χ", col.compare("Χ", "χ") === 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ = ψ", col.compare("Ψ", "ψ") === 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω = ω", col.compare("Ω", "ω") === 0);
	assertTrue("ω = Ώ", col.compare("ω", "Ώ") === 0);
	assertTrue("Ώ = Ώ", col.compare("Ώ", "Ώ") === 0);
	assertTrue("Ώ = ώ", col.compare("Ώ", "ώ") === 0);
	assertTrue("ώ = ώ", col.compare("ώ", "ώ") === 0);
}

function testJSCollatorQuatSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά < Ά", col.compare("Ά", "Ά") < 0);
	assertTrue("Ά < ά", col.compare("Ά", "ά") < 0);
	assertTrue("ά < ά", col.compare("ά", "ά") < 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β < β", col.compare("Β", "β") < 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ < γ", col.compare("Γ", "γ") < 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ < δ", col.compare("Δ", "δ") < 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε < ε", col.compare("Ε", "ε") < 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ < Έ", col.compare("Έ", "Έ") < 0);
	assertTrue("Έ < έ", col.compare("Έ", "έ") < 0);
	assertTrue("έ < έ", col.compare("έ", "έ") < 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η < η", col.compare("Η", "η") < 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή < Ή", col.compare("Ή", "Ή") < 0);
	assertTrue("Ή < ή", col.compare("Ή", "ή") < 0);
	assertTrue("ή < ή", col.compare("ή", "ή") < 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ < θ", col.compare("Θ", "θ") < 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι < ι", col.compare("Ι", "ι") < 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί < Ί", col.compare("Ί", "Ί") < 0);
	assertTrue("Ί < ί", col.compare("Ί", "ί") < 0);
	assertTrue("ί < ί", col.compare("ί", "ί") < 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
	assertTrue("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
	assertTrue("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
	assertTrue("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ < κ", col.compare("Κ", "κ") < 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ < λ", col.compare("Λ", "λ") < 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ < μ", col.compare("Μ", "μ") < 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν < ν", col.compare("Ν", "ν") < 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο < ο", col.compare("Ο", "ο") < 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό < Ό", col.compare("Ό", "Ό") < 0);
	assertTrue("Ό < ό", col.compare("Ό", "ό") < 0);
	assertTrue("ό < ό", col.compare("ό", "ό") < 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π < π", col.compare("Π", "π") < 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ < σ", col.compare("Σ", "σ") < 0);
	assertTrue("σ < ς", col.compare("σ", "ς") < 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ < τ", col.compare("Τ", "τ") < 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ < υ", col.compare("Υ", "υ") < 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
	assertTrue("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
	assertTrue("ύ < ύ", col.compare("ύ", "ύ") < 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
	assertTrue("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
	assertTrue("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
	assertTrue("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ < φ", col.compare("Φ", "φ") < 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ < χ", col.compare("Χ", "χ") < 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω < ω", col.compare("Ω", "ω") < 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
	assertTrue("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
	assertTrue("ώ < ώ", col.compare("ώ", "ώ") < 0);
}

function testJSCollatorTerSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά < Ά", col.compare("Ά", "Ά") < 0);
	assertTrue("Ά < ά", col.compare("Ά", "ά") < 0);
	assertTrue("ά < ά", col.compare("ά", "ά") < 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β < β", col.compare("Β", "β") < 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ < γ", col.compare("Γ", "γ") < 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ < δ", col.compare("Δ", "δ") < 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε < ε", col.compare("Ε", "ε") < 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ < Έ", col.compare("Έ", "Έ") < 0);
	assertTrue("Έ < έ", col.compare("Έ", "έ") < 0);
	assertTrue("έ < έ", col.compare("έ", "έ") < 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η < η", col.compare("Η", "η") < 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή < Ή", col.compare("Ή", "Ή") < 0);
	assertTrue("Ή < ή", col.compare("Ή", "ή") < 0);
	assertTrue("ή < ή", col.compare("ή", "ή") < 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ < θ", col.compare("Θ", "θ") < 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι < ι", col.compare("Ι", "ι") < 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί < Ί", col.compare("Ί", "Ί") < 0);
	assertTrue("Ί < ί", col.compare("Ί", "ί") < 0);
	assertTrue("ί < ί", col.compare("ί", "ί") < 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
	assertTrue("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
	assertTrue("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
	assertTrue("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ < κ", col.compare("Κ", "κ") < 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ < λ", col.compare("Λ", "λ") < 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ < μ", col.compare("Μ", "μ") < 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν < ν", col.compare("Ν", "ν") < 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο < ο", col.compare("Ο", "ο") < 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό < Ό", col.compare("Ό", "Ό") < 0);
	assertTrue("Ό < ό", col.compare("Ό", "ό") < 0);
	assertTrue("ό < ό", col.compare("ό", "ό") < 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π < π", col.compare("Π", "π") < 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ < σ", col.compare("Σ", "σ") < 0);
	assertTrue("σ < ς", col.compare("σ", "ς") < 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ < τ", col.compare("Τ", "τ") < 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ < υ", col.compare("Υ", "υ") < 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
	assertTrue("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
	assertTrue("ύ < ύ", col.compare("ύ", "ύ") < 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
	assertTrue("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
	assertTrue("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
	assertTrue("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ < φ", col.compare("Φ", "φ") < 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ < χ", col.compare("Χ", "χ") < 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω < ω", col.compare("Ω", "ω") < 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
	assertTrue("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
	assertTrue("ώ < ώ", col.compare("ώ", "ώ") < 0);
}

function testJSCollatorSecSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά < Ά", col.compare("Ά", "Ά") < 0);
	assertTrue("Ά < ά", col.compare("Ά", "ά") < 0);
	assertTrue("ά < ά", col.compare("ά", "ά") < 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β < β", col.compare("Β", "β") < 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ < γ", col.compare("Γ", "γ") < 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ < δ", col.compare("Δ", "δ") < 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε < ε", col.compare("Ε", "ε") < 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ < Έ", col.compare("Έ", "Έ") < 0);
	assertTrue("Έ < έ", col.compare("Έ", "έ") < 0);
	assertTrue("έ < έ", col.compare("έ", "έ") < 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η < η", col.compare("Η", "η") < 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή < Ή", col.compare("Ή", "Ή") < 0);
	assertTrue("Ή < ή", col.compare("Ή", "ή") < 0);
	assertTrue("ή < ή", col.compare("ή", "ή") < 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ < θ", col.compare("Θ", "θ") < 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι < ι", col.compare("Ι", "ι") < 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί < Ί", col.compare("Ί", "Ί") < 0);
	assertTrue("Ί < ί", col.compare("Ί", "ί") < 0);
	assertTrue("ί < ί", col.compare("ί", "ί") < 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
	assertTrue("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
	assertTrue("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
	assertTrue("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ < κ", col.compare("Κ", "κ") < 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ < λ", col.compare("Λ", "λ") < 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ < μ", col.compare("Μ", "μ") < 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν < ν", col.compare("Ν", "ν") < 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο < ο", col.compare("Ο", "ο") < 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό < Ό", col.compare("Ό", "Ό") < 0);
	assertTrue("Ό < ό", col.compare("Ό", "ό") < 0);
	assertTrue("ό < ό", col.compare("ό", "ό") < 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π < π", col.compare("Π", "π") < 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ < σ", col.compare("Σ", "σ") < 0);
	assertTrue("σ < ς", col.compare("σ", "ς") < 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ < τ", col.compare("Τ", "τ") < 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ < υ", col.compare("Υ", "υ") < 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
	assertTrue("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
	assertTrue("ύ < ύ", col.compare("ύ", "ύ") < 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
	assertTrue("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
	assertTrue("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
	assertTrue("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ < φ", col.compare("Φ", "φ") < 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ < χ", col.compare("Χ", "χ") < 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω < ω", col.compare("Ω", "ω") < 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
	assertTrue("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
	assertTrue("ώ < ώ", col.compare("ώ", "ώ") < 0);
}

function testJSCollatorPriSort_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
	assertTrue("α < Ά", col.compare("α", "Ά") < 0);
	assertTrue("Ά < Ά", col.compare("Ά", "Ά") < 0);
	assertTrue("Ά < ά", col.compare("Ά", "ά") < 0);
	assertTrue("ά < ά", col.compare("ά", "ά") < 0);
	assertTrue("ά < Β", col.compare("ά", "Β") < 0);
	assertTrue("Β < β", col.compare("Β", "β") < 0);
	assertTrue("β < Γ", col.compare("β", "Γ") < 0);
	assertTrue("Γ < γ", col.compare("Γ", "γ") < 0);
	assertTrue("γ < Δ", col.compare("γ", "Δ") < 0);
	assertTrue("Δ < δ", col.compare("Δ", "δ") < 0);
	assertTrue("δ < Ε", col.compare("δ", "Ε") < 0);
	assertTrue("Ε < ε", col.compare("Ε", "ε") < 0);
	assertTrue("ε < Έ", col.compare("ε", "Έ") < 0);
	assertTrue("Έ < Έ", col.compare("Έ", "Έ") < 0);
	assertTrue("Έ < έ", col.compare("Έ", "έ") < 0);
	assertTrue("έ < έ", col.compare("έ", "έ") < 0);
	assertTrue("έ < Ζ", col.compare("έ", "Ζ") < 0);
	assertTrue("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
	assertTrue("ζ < Η", col.compare("ζ", "Η") < 0);
	assertTrue("Η < η", col.compare("Η", "η") < 0);
	assertTrue("η < Ή", col.compare("η", "Ή") < 0);
	assertTrue("Ή < Ή", col.compare("Ή", "Ή") < 0);
	assertTrue("Ή < ή", col.compare("Ή", "ή") < 0);
	assertTrue("ή < ή", col.compare("ή", "ή") < 0);
	assertTrue("ή < Θ", col.compare("ή", "Θ") < 0);
	assertTrue("Θ < θ", col.compare("Θ", "θ") < 0);
	assertTrue("θ < Ι", col.compare("θ", "Ι") < 0);
	assertTrue("Ι < ι", col.compare("Ι", "ι") < 0);
	assertTrue("ι < Ί", col.compare("ι", "Ί") < 0);
	assertTrue("Ί < Ί", col.compare("Ί", "Ί") < 0);
	assertTrue("Ί < ί", col.compare("Ί", "ί") < 0);
	assertTrue("ί < ί", col.compare("ί", "ί") < 0);
	assertTrue("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
	assertTrue("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
	assertTrue("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
	assertTrue("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
	assertTrue("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
	assertTrue("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
	assertTrue("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
	assertTrue("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
	assertTrue("Κ < κ", col.compare("Κ", "κ") < 0);
	assertTrue("κ < Λ", col.compare("κ", "Λ") < 0);
	assertTrue("Λ < λ", col.compare("Λ", "λ") < 0);
	assertTrue("λ < Μ", col.compare("λ", "Μ") < 0);
	assertTrue("Μ < μ", col.compare("Μ", "μ") < 0);
	assertTrue("μ < Ν", col.compare("μ", "Ν") < 0);
	assertTrue("Ν < ν", col.compare("Ν", "ν") < 0);
	assertTrue("ν < Ξ", col.compare("ν", "Ξ") < 0);
	assertTrue("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
	assertTrue("ξ < Ο", col.compare("ξ", "Ο") < 0);
	assertTrue("Ο < ο", col.compare("Ο", "ο") < 0);
	assertTrue("ο < Ό", col.compare("ο", "Ό") < 0);
	assertTrue("Ό < Ό", col.compare("Ό", "Ό") < 0);
	assertTrue("Ό < ό", col.compare("Ό", "ό") < 0);
	assertTrue("ό < ό", col.compare("ό", "ό") < 0);
	assertTrue("ό < Π", col.compare("ό", "Π") < 0);
	assertTrue("Π < π", col.compare("Π", "π") < 0);
	assertTrue("π < Ρ", col.compare("π", "Ρ") < 0);
	assertTrue("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
	assertTrue("ρ < Σ", col.compare("ρ", "Σ") < 0);
	assertTrue("Σ < σ", col.compare("Σ", "σ") < 0);
	assertTrue("σ < ς", col.compare("σ", "ς") < 0);
	assertTrue("ς < Τ", col.compare("ς", "Τ") < 0);
	assertTrue("Τ < τ", col.compare("Τ", "τ") < 0);
	assertTrue("τ < Υ", col.compare("τ", "Υ") < 0);
	assertTrue("Υ < υ", col.compare("Υ", "υ") < 0);
	assertTrue("υ < Ύ", col.compare("υ", "Ύ") < 0);
	assertTrue("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
	assertTrue("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
	assertTrue("ύ < ύ", col.compare("ύ", "ύ") < 0);
	assertTrue("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
	assertTrue("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
	assertTrue("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
	assertTrue("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
	assertTrue("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
	assertTrue("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
	assertTrue("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
	assertTrue("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
	assertTrue("Φ < φ", col.compare("Φ", "φ") < 0);
	assertTrue("φ < Χ", col.compare("φ", "Χ") < 0);
	assertTrue("Χ < χ", col.compare("Χ", "χ") < 0);
	assertTrue("χ < Ψ", col.compare("χ", "Ψ") < 0);
	assertTrue("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
	assertTrue("ψ < Ω", col.compare("ψ", "Ω") < 0);
	assertTrue("Ω < ω", col.compare("Ω", "ω") < 0);
	assertTrue("ω < Ώ", col.compare("ω", "Ώ") < 0);
	assertTrue("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
	assertTrue("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
	assertTrue("ώ < ώ", col.compare("ώ", "ώ") < 0);
}

function testCollatorCase_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
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

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}

function testCollatorIgnoreStressMarks_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});
    assertNotUndefined(col);

    var comp = col.getComparator();
    
    // ignore stress marks
    assertEquals(0, comp("παϊδάκια", "παιδάκια"));
    assertEquals(0, comp("Αθηνά", "Αθήνα"));
}

function testJSCollatorQuatLatin_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// all latin letters
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < E", col.compare("d", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < F", col.compare("e", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < I", col.compare("h", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
}

function testCollatorPrimaryMixed_ja() {
	var col = new ilib.Collator({
		locale: "ja-JP",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    // Latin letters sort after the Cyrillic ones
    
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
	    "ώ",
        "apple",
        "banana",
        "orange",
        "peach",
        "raspberry"
	];

    assertArrayEquals(expected, input);
}
