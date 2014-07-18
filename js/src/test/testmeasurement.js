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

function testMeasurementConstructor() {
    var m = new ilib.Measurement();
    
    assertNotNull(m);
}

function testMeasurementNoAmount() {
    var m = new ilib.Measurement({
    	unit: "meter"
    });
    
    assertNotNull(m);
    
    assertEquals("meter", m.getUnit());
    assertEquals(0, m.getAmount());
}

function testMeasurementRightMeasureType() {
    var m = new ilib.Measurement({
    	unit: "meter",
    	amount: 2
    });
    
    assertNotNull(m);
    
    assertEquals("length", m.getMeasure());
}

function testMeasurementUnknownUnitPreserved() {
    var m = new ilib.Measurement({
    	unit: "krunghoonfoop",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("krunghoonfoop", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementUnknownUnitUnknownMeasureType() {
    var m = new ilib.Measurement({
    	unit: "krunghoonfoop",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("unknown", m.getMeasure());
}

function testMeasurementMetricScaleFemto() {
    var m = new ilib.Measurement({
    	unit: "femtometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-15, m.getAmount());
}

function testMeasurementMetricScalePico() {
    var m = new ilib.Measurement({
    	unit: "picometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-12, m.getAmount());
}

function testMeasurementMetricScaleNano() {
    var m = new ilib.Measurement({
    	unit: "nanometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-9, m.getAmount());
}

function testMeasurementMetricScaleMicro() {
    var m = new ilib.Measurement({
    	unit: "micrometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-6, m.getAmount());
}

function testMeasurementMetricScaleMilli() {
    var m = new ilib.Measurement({
    	unit: "millimeter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(0.02, m.getAmount());
}

function testMeasurementMetricScaleCenti() {
    var m = new ilib.Measurement({
    	unit: "centimeter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(0.2, m.getAmount());
}

function testMeasurementMetricScaleDeca() {
    var m = new ilib.Measurement({
    	unit: "decameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(20, m.getAmount());
}

function testMeasurementMetricScaleHecto() {
    var m = new ilib.Measurement({
    	unit: "hectometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(200, m.getAmount());
}

function testMeasurementMetricScaleKilo() {
    var m = new ilib.Measurement({
    	unit: "kilometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2000, m.getAmount());
}

function testMeasurementMetricScaleMega() {
    var m = new ilib.Measurement({
    	unit: "megameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E6, m.getAmount());
}

function testMeasurementMetricScaleGiga() {
    var m = new ilib.Measurement({
    	unit: "gigameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E9, m.getAmount());
}

function testMeasurementMetricScalePeta() {
    var m = new ilib.Measurement({
    	unit: "petameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E12, m.getAmount());
}

function testMeasurementMetricScaleExa() {
    var m = new ilib.Measurement({
    	unit: "exameter",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E15, m.getAmount());
}

function testMeasurementMetricScaleSymbolFemto() {
    var m = new ilib.Measurement({
    	unit: "fm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-15, m.getAmount());
}

function testMeasurementMetricScaleSymbolPico() {
    var m = new ilib.Measurement({
    	unit: "pm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-12, m.getAmount());
}

function testMeasurementMetricScaleSymbolNano() {
    var m = new ilib.Measurement({
    	unit: "nm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-9, m.getAmount());
}

function testMeasurementMetricScaleSymbolMicro() {
    var m = new ilib.Measurement({
    	unit: "µm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E-6, m.getAmount());
}

function testMeasurementMetricScaleSymbolMilli() {
    var m = new ilib.Measurement({
    	unit: "mm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(0.02, m.getAmount());
}

function testMeasurementMetricScaleSymbolCenti() {
    var m = new ilib.Measurement({
    	unit: "cm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(0.2, m.getAmount());
}

function testMeasurementMetricScaleSymbolNone() {
    var m = new ilib.Measurement({
    	unit: "m",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementMetricScaleSymbolDeca() {
    var m = new ilib.Measurement({
    	unit: "dam",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(20, m.getAmount());
}

function testMeasurementMetricScaleSymbolHecto() {
    var m = new ilib.Measurement({
    	unit: "hm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(200, m.getAmount());
}

function testMeasurementMetricScaleSymbolKilo() {
    var m = new ilib.Measurement({
    	unit: "km",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2000, m.getAmount());
}

function testMeasurementMetricScaleSymbolMega() {
    var m = new ilib.Measurement({
    	unit: "Mm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E6, m.getAmount());
}

function testMeasurementMetricScaleSymbolGiga() {
    var m = new ilib.Measurement({
    	unit: "Gm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E9, m.getAmount());
}

function testMeasurementMetricScaleSymbolPeta() {
    var m = new ilib.Measurement({
    	unit: "Pm",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E12, m.getAmount());
}

function testMeasurementMetricScaleSymbolExa() {
    var m = new ilib.Measurement({
    	unit: "Em",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getUnit());
    assertEquals(2E15, m.getAmount());
}

function testMeasurementMetricScaleOriginalUnit() {
    var m = new ilib.Measurement({
    	unit: "kilometer",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("kilometer", m.getOriginalUnit());
}

function testMeasurementAliases1() {
    var m = new ilib.Measurement({
    	unit: "miles",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("mile", m.getUnit());
    assertEquals(2, m.getAmount());
}

function testMeasurementAliases1OriginalUnit() {
    var m = new ilib.Measurement({
    	unit: "meters",
    	amount: 2
    });
    
    assertNotNull(m);

    assertEquals("meter", m.getOriginalUnit());
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
	    var m = new ilib.Measurement({
	    	unit: expected[i],
	    	amount: 2
	    });
	    
	    assertNotNull(m);
	
	    assertEquals("meter", m.getUnit());
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
	    var m = new ilib.Measurement({
	    	unit: expected[i].alias,
	    	amount: 2
	    });
	    
	    assertNotNull(m);
	
	    assertEquals(expected[i].normalized, m.getUnit());
	}
}

function testMeasurementConvert() {
    var m1 = new ilib.Measurement({
    	unit: "mile",
    	amount: 2
    });
    var m2 = new ilib.Measurement({
    	unit: "meter",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("meter", m.getUnit());
    assertEquals(3218.69, m.getAmount());
}

function testMeasurementConvertToMetricScale() {
    var m1 = new ilib.Measurement({
    	unit: "mile",
    	amount: 2
    });
    var m2 = new ilib.Measurement({
    	unit: "kilometer",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("meter", m.getUnit());
    assertEquals(3218.69, m.getAmount());
}

function testMeasurementConvertToMetricScaleWithAlias() {
    var m1 = new ilib.Measurement({
    	unit: "mile",
    	amount: 2
    });
    var m2 = new ilib.Measurement({
    	unit: "km",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("meter", m.getUnit());
    assertEquals(3218.69, m.getAmount());
}

function testMeasurementConvertFromMetric() {
    var m1 = new ilib.Measurement({
    	unit: "meter",
    	amount: 2000
    });
    var m2 = new ilib.Measurement({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m.getUnit());
    assertEquals(1.242742, m.getAmount());
}

function testMeasurementConvertFromMetricWithScale() {
    var m1 = new ilib.Measurement({
    	unit: "kilometer",
    	amount: 2
    });
    var m2 = new ilib.Measurement({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m.getUnit());
    assertEquals(1.242742, m.getAmount());
}

function testMeasurementConvertFromMetricWithScaleAndAlias() {
    var m1 = new ilib.Measurement({
    	unit: "km",
    	amount: 2
    });
    var m2 = new ilib.Measurement({
    	unit: "mile",
    	amount: m1
    });
    
    assertNotNull(m1);
    assertNotNull(m2);

    assertEquals("mile", m.getUnit());
    assertEquals(1.242742, m.getAmount());
}

function testMeasurementCannotConvertBetweenMeasureTypes() {
	try {
		var m1 = new ilib.Measurement({
	    	unit: "meter",
	    	amount: 2
	    });
	    var m2 = new ilib.Measurement({
	    	unit: "celcius",
	    	amount: m1
	    });
	    fail();
	} catch (e) {
		assertEquals("Cannot convert between length and temperature measures", e);
	}
}

