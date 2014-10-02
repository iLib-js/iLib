/*
 * testMasss.js - test the Mass object
 * 
 * Copyright © 2014, JEDLSoft
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

function testMassMassConstructor() {
	var m = new ilib.Measurement.Mass({
		unit: "kg",
		amount: 2
	});

	assertNotNull(m);
}

function testMassMassConvertGramToKG() {
	var m1 = new ilib.Measurement.Mass({
		unit: "g",
		amount: 3000
	});
	var m2 = new ilib.Measurement.Mass({
		unit: "kg",
		amount: m1
	});

	assertNotNull(m1);
	assertNotNull(m2);

	assertEquals(3, m2.getAmount());
}

function testMassStaticConvert1() {
	var m = ilib.Measurement.Mass.convert("long ton", "kg", 10000);

	assertRoughlyEquals(9.842065, m, 0.00001);
}

function testMassStaticConvertWithString() {
	var m = ilib.Measurement.Mass.convert("tonne", "pound", "1000");

	assertEquals(0.453592, m);
}

function testMassStaticConvert2() {
	var m = ilib.Measurement.Mass.convert("short ton", "ounce", 10000);

	assertEquals(0.3125, m);
}

function testMassStaticConvert3() {
	var m = ilib.Measurement.Mass.convert("st", "gram", 10000);

	assertEquals(1.57473, m);
}

function testMassStaticConvert4() {
	var m = ilib.Measurement.Mass.convert("kg", "mg", 1000000);

	assertEquals(1, m);
}

function testMassStaticConvert5() {
	var m = ilib.Measurement.Mass.convert("lb", "mcg", 1000000000);

	assertRoughlyEquals(2.20462, m, 0.0001);
}

function testMassScale1() {
	var m = new ilib.Measurement.Mass({
		unit: "mcg",
		amount: 10000000
	});

	m = m.scale("metric");

	assertEquals(10, m.amount);
	assertEquals("gram", m.unit);
}

function testMassScale2() {
	var m = new ilib.Measurement.Mass({
		unit: "g",
		amount: 0.00001
	});

	m = m.scale("metric");

	assertEquals(10, m.amount);
	assertEquals("microgram", m.unit);
}

function testMassScale3() {
	var m = new ilib.Measurement.Mass({
		unit: "mg",
		amount: 1000000
	});

	m = m.scale("metric");

	assertEquals(1, m.amount);
	assertEquals("kilogram", m.unit);
}

function testMassScale4() {
	var m = new ilib.Measurement.Mass({
		unit: "t",
		amount: 0.0001
	});

	m = m.scale("metric");

	assertEquals(100, m.amount);
	assertEquals("gram", m.unit);
}

function testMassScale5() {
	var m = new ilib.Measurement.Mass({
		unit: "oz",
		amount: 1000
	});

	m = m.scale("imperial");

	assertRoughlyEquals(4.46429, m.amount, 0.00001);
	assertEquals("stone", m.unit);
}

function testMassScale6() {
	var m = new ilib.Measurement.Mass({
		unit: "st",
		amount: 0.1
	});

	m = m.scale("imperial");

	assertRoughlyEquals(1.4, m.amount, 0.01);
	assertEquals("pound", m.unit);
}

function testMassScale7() {
	var m = new ilib.Measurement.Mass({
		unit: "oz",
		amount: 500000
	});

	m = m.scale("imperial");

	assertRoughlyEquals(13.9508929, m.amount, 0.001);
	assertEquals("long ton", m.unit);
}

function testMassScale8() {
	var m = new ilib.Measurement.Mass({
		unit: "lb",
		amount: 10
	});

	m = m.scale("imperial");

	assertEquals(10, m.amount);
	assertEquals("pound", m.unit);
}

function testMassScale9() {
	var m = new ilib.Measurement.Mass({
		unit: "oz",
		amount: 100000
	});

	m = m.scale("uscustomary");

	assertRoughlyEquals(3.125, m.amount, 0.001);
	assertEquals("short ton", m.unit);
}

function testMassScale10() {
	var m = new ilib.Measurement.Mass({
		unit: "short ton",
		amount: 0.001
	});

	m = m.scale("uscustomary");

	assertRoughlyEquals(2, m.amount, 0.001);
	assertEquals("pound", m.unit);
}

function testMassGetMeasures() {
	var measures = ilib.Measurement.Mass.getMeasures();
	var expected = [
        "microgram",  
        "milligram",  
        "gram",
        "ounce",
        "pound",
        "kilogram",
        "stone",
        "short ton",
        "metric ton",
        "long ton"
    ];	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
