/*
 * testlengths.js - test the lengths object
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

function testLengthLengthConstructor() {

    var m = new ilib.Measurement.Length({
        unit: "meter",
	amount: 2
    });
	
    assertNotNull(m);
}

function testLengthLengthConvertMetersToMiles() {
	var m1 = new ilib.Measurement.Length({
		unit: "meter",
		amount: 5000
	});
	var m2 = new ilib.Measurement.Length({
		unit: "mile",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(3.106856, m2.getAmount());
}

function testLengthStaticConvert1() {
	var m = ilib.Measurement.Length.convert("feet", "meter", 2.0);
	
	assertEquals(6.56168, m);
}

function testLengthStaticConvertWithString() {
	var m = ilib.Measurement.Length.convert("feet", "meter", "2");
	
	assertEquals(6.56168, m);
}

function testLengthStaticConvert2() {
	var m = ilib.Measurement.Length.convert("meter", "millimeter", 200000);
	
	assertEquals(200, m);
}

function testLengthStaticConvert3() {
	var m = ilib.Measurement.Length.convert("mile", "yard", 7495);
	
	assertEquals(4.25852409, m);
}

function testLengthStaticConvert4() {
	var m = ilib.Measurement.Length.convert("millimeter", "meter", 2.0);
	
	assertEquals(2000, m);
}

function testLengthStaticConvert5() {
	var m = ilib.Measurement.Length.convert("inch", "micrometer", 200000);
	
        assertRoughlyEquals(7.87402, m, 0.00001)
}


function testLengthStaticConvert6() {
	var m = ilib.Measurement.Length.convert("yard", "cm", 100);
	
	assertEquals(1.09361, m);
}

function testLengthStaticConvert7() {
	var m = ilib.Measurement.Length.convert("mile", "decimeter", 100000);
	
        assertRoughlyEquals(6.21373, m, 0.00001);
}

function testLengthStaticConvert8() {
	var m = ilib.Measurement.Length.convert("nauticalmile", "meter", 1000);
	
	assertEquals(0.539957, m);
}

function testLengthStaticConvert9() {
	var m = ilib.Measurement.Length.convert("inch", "yard", 1000);
	
	assertEquals(36000, m);
}

function testLengthStaticConvert10() {
	var m = ilib.Measurement.Length.convert("nauticalmile", "feet", 100000);
	
        assertRoughlyEquals(16.4579, m, 0.0001);
}

function testLengthStaticConvert11() {
	var m = ilib.Measurement.Length.convert("mm", "feet", 500);
	
        assertRoughlyEquals(152400, m, 0.1);
}

function testLengthStaticConvert12() {
        var m = new ilib.Measurement.Length({
            unit: "mm",
            amount: 1000
        });
    
	m.scale("metric");
        
        assertEquals(1, m.amount);
        assertEquals("meter", m.unit);
}

function testLengthStaticConvert13() {
        var m = new ilib.Measurement.Length({
            unit: "m",
            amount: 0.001
        });
    
	m.scale("metric");
        
        assertEquals(1, m.amount);
        assertEquals("millimeter", m.unit);
}

function testLengthStaticConvert14() {
        var m = new ilib.Measurement.Length({
            unit: "mm",
            amount: 3000
        });
    
	m.scale("imperial");
        
        assertRoughlyEquals(3.28084, m.amount, 0.00001);
        assertEquals("yard", m.unit);
}

function testLengthStaticConvert15() {
        var m = new ilib.Measurement.Length({
            unit: "miles",
            amount: 0.003
        });
    
	m.scale("imperial");
        
        assertEquals(5.28, m.amount);
        assertEquals("yard", m.unit);
}

function testLengthStaticConvert16() {
        var m = new ilib.Measurement.Length({
            unit: "inch",
            amount: 200000
        });
    
	m.scale("uscustomery");
        
        assertRoughlyEquals(2.743, m.amount, 0.001)
        assertEquals("nauticalmile", m.unit);
}

function testLengthStaticConvert17() {
        var m = new ilib.Measurement.Length({
            unit: "nauticalmile",
            amount: 0.00002
        });
    
	m.scale("uscustomery");

        assertRoughlyEquals(1.458268, m.amount, 0.000001)
        assertEquals("inch", m.unit);
}

function testLengthStaticConvert18() {
        var m = new ilib.Measurement.Length({
            unit: "decimeter",
            amount: 8
        });
    
	m.scale("metric");

        assertEquals(8, m.amount);
        assertEquals("decimeter", m.unit);
}

function testLengthGetMeasures() {
	var measures = ilib.Measurement.Length.getMeasures();
	var expected = [
    	"micrometer",
    	"millimeter",
    	"centimeter",
    	"decimeter",
    	"meter",
    	"decameter",
    	"hectometer",
    	"kilometer",
    	"megameter",
    	"gigameter",
    	"nauticalmile",
    	"mile",
    	"yard",
    	"foot",
    	"inch"
	];
	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
