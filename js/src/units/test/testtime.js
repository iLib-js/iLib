/*
 * testTimes.js - test the Time object
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

function testTimeTimeConstructor() {
	var m = new ilib.Measurement.Time({
		unit: "sec",
		amount: 2
	});
	
	assertNotNull(m);
}

function testTimeTimeConvertSecondToHour() {
	var m1 = new ilib.Measurement.Time({
		unit: "sec",
		amount: 3600
	});
	var m2 = new ilib.Measurement.Time({
		unit: "hour",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertRoughlyEquals(1.0, m2.getAmount(), 0.1);
}

function testTimeStaticConvert1() {
	var m = ilib.Measurement.Time.convert("second", "ns", 1000000000);
	
	assertEquals(1, m);
}

function testTimeStaticConvertWithString() {
	var m = ilib.Measurement.Time.convert("hour", "decade", "5");
	
	assertEquals(438290.5, m);
}

function testTimeStaticConvert2() {
	var m = ilib.Measurement.Time.convert("hour", "day", 10);
	
	assertEquals(240, m);
}

function testTimeStaticConvert3() {
	var m = ilib.Measurement.Time.convert("min", "month", 2);
        
        assertEquals(87658.2, m);
}

function testTimeStaticConvert4() {
	var m = ilib.Measurement.Time.convert("day", "week", 10);
	
	assertEquals(70, m);
}

function testTimeScaling1() {
    var m = new ilib.Measurement.Time({
        unit: "ns",
        amount: 1024
    });

    var  m1 = m.scale();

    assertEquals(1.024,m1.amount);
    assertEquals("microsecond",m1.unit);
}

function testTimeScaling2() {
    var m = new ilib.Measurement.Time({
        unit: "ms",
        amount: 12000
    });

    m = m.scale();

    assertEquals(12,m.amount);
    assertEquals("second",m.unit);
}

function testTimeScaling3() {
    var m = new ilib.Measurement.Time({
        unit: "day",
        amount: 10485
    });

    m = m.scale();

    assertRoughlyEquals(2.8706979, m.amount, 0.1);
    assertEquals("decade",m.unit);
}

function testTimeScaling4() {
    var m = new ilib.Measurement.Time({
        unit: "year",
        amount: 1000
    });

    m = m.scale();

    assertRoughlyEquals(10, m.amount, 0.001);
    assertEquals("century",m.unit);
}

function testTimeScaling5() {
    var m = new ilib.Measurement.Time({
        unit: "h",
        amount: 120
    });

    m = m.scale();

    assertRoughlyEquals(5, m.amount, 0.001);
    assertEquals("day",m.unit);
}

function testTimeGetMeasures() {
	var measures = ilib.Measurement.Time.getMeasures();
	var expected = [
                "nanosecond",  
		"microsecond",  
		"millisecond",
		"second",
		"minute",
                "hour",
                "day",
                "week",
                "month",
                "year",
                "decade",
                "century" 	
	];	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
