/*
 * testmeasurement.js - test the measurement object
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

var MeasurementFactory = require("./../lib/MeasurementFactory.js");

function testMeasurementConstructor() {
    var m = MeasurementFactory();
    
    assertNotNull(m);
}

function testMeasurementNoAmount() {
    var m = MeasurementFactory({
    	unit: "meter"
    });
    
    assertNotNull(m);
    
    assertEquals("meter", m.getUnit());
    assertEquals(0, m.getAmount());
}

function testMeasurementRightMeasureType() {
    var m = MeasurementFactory({
    	unit: "meter",
    	amount: 2
    });
    
    assertNotNull(m);
    
    assertEquals("length", m.getMeasure());
}

function testMeasurementUnknownUnitPreserved() {
    var m = MeasurementFactory({
    	unit: "krunghoonfoop",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("krunghoonfoop", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementUnknownUnitUnknownMeasureType() {
    var m = MeasurementFactory({
    	unit: "krunghoonfoop",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("unknown", m.getMeasure());
}

function testMeasurementMetricScaleMicro() {
    var m = MeasurementFactory({
    	unit: "micrometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("micrometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleMilli() {
    var m = MeasurementFactory({
    	unit: "millimeter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("millimeter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleCenti() {
    var m = MeasurementFactory({
    	unit: "centimeter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("centimeter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleDeca() {
    var m = MeasurementFactory({
    	unit: "decameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("decameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleHecto() {
    var m = MeasurementFactory({
    	unit: "hectometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("hectometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleKilo() {
    var m = MeasurementFactory({
    	unit: "kilometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("kilometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleMega() {
    var m = MeasurementFactory({
    	unit: "megameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("megameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleGiga() {
    var m = MeasurementFactory({
    	unit: "gigameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("gigameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolMicro() {
    var m = MeasurementFactory({
    	unit: "µm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("micrometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolMilli() {
    var m = MeasurementFactory({
    	unit: "mm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("millimeter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolCenti() {
    var m = MeasurementFactory({
    	unit: "cm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("centimeter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolNone() {
    var m = MeasurementFactory({
    	unit: "m",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolDeca() {
    var m = MeasurementFactory({
    	unit: "dam",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("decameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolHecto() {
    var m = MeasurementFactory({
    	unit: "hm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("hectometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolKilo() {
    var m = MeasurementFactory({
    	unit: "km",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("kilometer", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolMega() {
    var m = MeasurementFactory({
    	unit: "Mm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("megameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolGiga() {
    var m = MeasurementFactory({
    	unit: "Gm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("gigameter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleOriginalUnit() {
    var m = MeasurementFactory({
    	unit: "kilometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("kilometer", m.getOriginalUnit());
}

function testMeasurementAliases1() {
    var m = MeasurementFactory({
    	unit: "miles",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("mile", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementAliases1OriginalUnit() {
    var m = MeasurementFactory({
    	unit: "meters",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meters", m.getOriginalUnit());
}

function testMeasurementAliasesMetric() {
	var expected = [
		"meters",
		"meter",
		"metre",
		"metres",
		"m"
	];
	
	for (var i = 0; i < expected.length; i++) {
	    var m = MeasurementFactory({
	    	unit: expected[i],
	    	amount: 2
	    });
	    
	    assertNotNull(m);
	
	    assertEquals("meter", m.getUnit());
	    assertEquals(expected[i], m.getOriginalUnit());
	}
}

function testMeasurementAliasesUS() {
	var expected = [
		{alias: "miles", normalized: "mile"},
		{alias: "yards", normalized: "yard"},
		{alias: "feet", normalized: "foot"},
		{alias: "inches", normalized: "inch"}
	];
	
	for (var i = 0; i < expected.length; i++) {
	    var m = MeasurementFactory({
	    	unit: expected[i].alias,
	    	amount: 2
	    });
	    
	    assertNotNull(m);
	
	    assertEquals(expected[i].normalized, m.getUnit());
	}
}

function testMeasurementConvert() {
    var m1 = MeasurementFactory({
    	unit: "mile",
    	amount: 2
    });
    var m2 = MeasurementFactory({
    	unit: "meter",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("meter", m2.getUnit());
    assertEquals(3218.68, m2.getAmount());
}

function testMeasurementConvertToMetricScale() {
    var m1 = MeasurementFactory({
    	unit: "mile",
    	amount: 2
    });
    var m2 = MeasurementFactory({
    	unit: "kilometer",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("kilometer", m2.getUnit());
    assertEquals(3.21868, m2.getAmount());
}

function testMeasurementConvertToMetricScaleWithAlias() {
    var m1 = MeasurementFactory({
    	unit: "mile",
    	amount: 2
    });
    var m2 = MeasurementFactory({
    	unit: "km",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("kilometer", m2.getUnit());
    assertEquals(3.21868, m2.getAmount());
}

function testMeasurementConvertFromMetric() {
    var m1 = MeasurementFactory({
    	unit: "meter",
    	amount: 2000
    });
    var m2 = MeasurementFactory({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m2.getUnit());
    assertEquals(1.2427424, m2.getAmount());
}

function testMeasurementConvertFromMetricWithScale() {
    var m1 = MeasurementFactory({
    	unit: "kilometer",
    	amount: 2
    });
    var m2 = MeasurementFactory({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m2.getUnit());
    assertEquals(1.242746, m2.getAmount());
}

function testMeasurementConvertFromMetricWithScaleAndAlias() {
    var m1 = MeasurementFactory({
    	unit: "km",
    	amount: 2
    });
    var m2 = MeasurementFactory({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m2.getUnit());
    assertEquals(1.242746, m2.getAmount());
}

function testMeasurementCannotConvertBetweenMeasureTypes() {
	try {
		var m1 = MeasurementFactory({
	    	unit: "meter",
	    	amount: 2
	    });
	    var m2 = MeasurementFactory({
	    	unit: "celsius",
	    	amount: m1
	    });
	    fail();
	} catch (e) {
		assertEquals("Cannot convert unit meter to a temperature", e);
	}
}

