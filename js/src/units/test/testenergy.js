/*
 * testEnergys.js - test the Energy object
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

function testEnergyEnergyConstructor() {
	var m = new ilib.Measurement.Energy({
		unit: "kJ",
		amount: 2
	});
	
	assertNotNull(m);
}

function testEnergyEnergyConvertCalorieToJoule() {
	var m1 = new ilib.Measurement.Energy({
		unit: "Cal",
		amount: 20
	});
	var m2 = new ilib.Measurement.Energy({
		unit: "joule",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(83736, m2.getAmount());
}

function testEnergyStaticConvert1() {
	var m = ilib.Measurement.Energy.convert("gWh", "Cal", 1e+8);
		
        assertRoughlyEquals(0.1163, m, 0.0001);
}

function testEnergyStaticConvertWithString() {
	var m = ilib.Measurement.Energy.convert("MegaWh", "Wh", "5e+6");
	
	assertEquals(5, m);
}

function testEnergyStaticConvert2() {
	var m = ilib.Measurement.Energy.convert("gigajoule", "kJ", 5e+6);
	
	assertEquals(5, m);
}

function testEnergyStaticConvert3() {
	var m = ilib.Measurement.Energy.convert("MWh", "kJ", 5e+6);
         
        assertRoughlyEquals(1.38889, m, 0.00001);
}

function testEnergyStaticConvert4() {
	var m = ilib.Measurement.Energy.convert("cal", "btu", 200);
	
	assertRoughlyEquals(50.399, m, 0.001);
}

function testEnergyStaticConvert5() {
	var m = ilib.Measurement.Energy.convert("joule", "btu", 200);

	assertRoughlyEquals(211011.18, m, 0.01);
}

function testEnergyStaticConvert6() {
	var m = ilib.Measurement.Energy.convert("joule", "cal", 50);

	assertEquals(209340, m);
}


function testEnergyScale1() {
    var m1 = new ilib.Measurement.Energy({
        unit: "watt hour",
        amount: 10000
    });
    var m2 = m1.scale("metric");

    assertEquals(10, m2.amount);
    assertEquals("kilowatt hour", m2.unit);
}

function testEnergyScale2() {
    var m1 = new ilib.Measurement.Energy({
        unit: "kilowatt hour",
        amount: 1233453
    });
    var m2 = m1.scale("metric");

    assertEquals(1.233453, m2.amount);
    assertEquals("gigawatt hour", m2.unit);
}

function testEnergyScale3() {
    var m1 = new ilib.Measurement.Energy({
        unit: "milli joule",
        amount: 5254578
    });
    var m2 = m1.scale("metric");

    assertRoughlyEquals(5.254578, m2.amount,0.000001);
    assertEquals("kilojoule", m2.unit);
}

function testEnergyScale4() {
    var m1 = new ilib.Measurement.Energy({
        unit: "mega joule",
        amount: 5254578
    });
    var m2 = m1.scale("metric");

    assertEquals(5254.578, m2.amount);
    assertEquals("gigajoule", m2.unit);
}

function testEnergyGetMeasures() {
	var measures = ilib.Measurement.Energy.getMeasures();
	var expected = [
        "microjoule",
        "joule",
        "BTU",
        "kilojoule",
        "watt hour",
        "calorie",
        "megajoule",
        "kilowatt hour",
        "gigajoule",
        "megawatt hour",
        "gigawatt hour"

    ];
	assertArrayEqualsIgnoringOrder(expected, measures);
}
