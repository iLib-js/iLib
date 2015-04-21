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

var DigitalStorageUnit = require("./../lib/DigitalStorageUnit.js");

function testDSDSConstructor() {

	var m = new DigitalStorageUnit({
		unit: "mb",
		amount: 2
	});

	assertNotNull(m);
}

function testDSDSConvertKbToMb() {
	var m1 = new DigitalStorageUnit({
		unit: "kb",
		amount: 102400
	});
	var m2 = new DigitalStorageUnit({
		unit: "mb",
		amount: m1
	});

	assertNotNull(m1);
	assertNotNull(m2);

	assertRoughlyEquals(100, m2.getAmount(), 1e-7);
}

function testDSStaticConvert1() {
	var m = DigitalStorageUnit.convert("bit", "kilobits", 12024);

	assertRoughlyEquals(12312576, m, 0.01);
}

function testDSStaticConvertWithString() {
	var m = DigitalStorageUnit.convert("gigabyte", "petabyte", "1");

	assertRoughlyEquals(1048576, m, 0.001);
}

function testDSStaticConvert2() {
	var m = DigitalStorageUnit.convert("tB", "gB", 10240);

	assertRoughlyEquals(10, m, 1e-8);
}

function testDSStaticConvert3() {
	var m = DigitalStorageUnit.convert("mb", "byte", 1048576);

	assertRoughlyEquals(8, m, 1e-9);
}

function testDSStaticConvert4() {
	var m = DigitalStorageUnit.convert("Pb", "tb", 1024);

	assertRoughlyEquals(1, m, 1e-9);
}

function testDSStaticConvert5() {
	var m = DigitalStorageUnit.convert("megabyte", "byte", 10);

	assertRoughlyEquals(9.536743164e-6, m, 1e-15);
}

function testDSScale1() {
	var m = new DigitalStorageUnit({
		unit: "bit",
		amount: 1024
	});
        
        m = m.scale();
        
        assertEquals(1,m.amount);
        assertEquals("kilobit",m.unit);
}

function testDSScale2() {
	var m = new DigitalStorageUnit({
		unit: "kilobit",
		amount: 0.125
	});
        
        m = m.scale();
        
        assertEquals(16,m.amount);
        assertEquals("byte",m.unit);
}

function testDSScale3() {
	var m = new DigitalStorageUnit({
		unit: "bit",
		amount: 1048576000
	});
        
        m = m.scale();
        
        assertRoughlyEquals(125, m.amount, 0.1);
        assertEquals("megabyte",m.unit);
}

function testDSScale4() {
	var m = new DigitalStorageUnit({
		unit: "kilobit",
		amount: 10000000
	});
        
        m = m.scale();
        
        assertRoughlyEquals(1.192, m.amount, 0.001);
        assertEquals("gigabyte",m.unit);
}

function testDSScale5() {
	var m = new DigitalStorageUnit({
		unit: "petabyte",
		amount: 9.3132e-8
	});
        
        m = m.scale();
        
        assertRoughlyEquals(100, m.amount, 0.001);
        assertEquals("megabyte",m.unit);
}

function testDSScale6() {
	var m = new DigitalStorageUnit({
		unit: "MB",
		amount: 100
	});
        
        m = m.scale();
        
        assertEquals(100, m.amount);
        assertEquals("megabyte",m.unit);
}

function testDSaLocalize1() {
    var m = new DigitalStorageUnit({
        unit: "petaByte",
        amount: 1000
    });

    m = m.localize("en-IN");

    assertRoughlyEquals(1000, m.amount, 0.01);
    assertEquals("petabyte", m.unit);
}

function testDSLocalize2() {
    var m = new DigitalStorageUnit({
        unit: "Kilobit",
        amount: 1000
    });

    m = m.localize("en-US");

    assertRoughlyEquals(1000, m.amount, 0.001);
    assertEquals("kilobit", m.unit);
}

function testDSLocalize3() {
    var m = new DigitalStorageUnit({
        unit: "Mb",
        amount: 1000
    });

    m = m.localize("en-US");

    assertRoughlyEquals(1000, m.amount, 0.001);
    assertEquals("megabit", m.unit);
}
function testDSGetMeasures() {
	var measures = DigitalStorageUnit.getMeasures();
	var expected = [
        "bit",
        "byte",
        "kilobit",
        "kilobyte",
        "megabit",
        "megabyte",
        "gigabit",
        "gigabyte",
        "terabit",
        "terabyte",
        "petabit",
        "petabyte"
    ];

	assertArrayEqualsIgnoringOrder(expected, measures);
}
